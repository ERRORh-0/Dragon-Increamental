'use strict';

  const SMALL = 1e15;

  const LOG_SMALL = Math.log10(SMALL);

  const HUGE = { msg: Number.MAX_VALUE, layer: 2 };

  function norm(msg, layer) {
    if (typeof msg !== 'number' || Number.isNaN(msg)) return { msg: 0, layer: 0 };
    if (!isFinite(msg)) return msg > 0 ? { msg: HUGE.msg, layer: HUGE.layer } : { msg: 0, layer: 0 };
    layer = (typeof layer === 'number' && isFinite(layer)) ? Math.max(0, Math.floor(layer)) : 0;
    if (layer === 0) {
      if (msg < 0) return { msg: msg, layer: 0 };
      if (msg >= SMALL) {
        const l = Math.log10(msg);
        if (isFinite(l)) return { msg: l, layer: 1 };
      }
      return { msg: msg, layer: 0 };
    }
    if (layer === 1) {
      
      if (msg <= LOG_SMALL) {
        const v = Math.pow(10, msg);
        if (isFinite(v) && v < SMALL) return { msg: v, layer: 0 };
      }
      return { msg: msg, layer: 1 };
    }
    return { msg: msg, layer: layer };
  }

  class BN {
    constructor(msg, layer) {
      const n = norm(msg, layer);
      this.msg = n.msg;
      this.layer = n.layer;
    }

    static from(v) {
      if (v instanceof BN) return v;
      if (typeof v === 'number') {
        if (!isFinite(v)) return v > 0 ? new BN(HUGE.msg, HUGE.layer) : BN.zero();
        return new BN(v, 0);
      }
      if (v && typeof v === 'object' && typeof v.msg === 'number') {
        return new BN(v.msg, typeof v.layer === 'number' ? v.layer : 0);
      }
      return new BN(0, 0);
    }
    static zero() { return new BN(0, 0); }
    static one() { return new BN(1, 0); }
    static max(a, b) {
      a = BN.from(a); b = BN.from(b);
      return a.cmp(b) >= 0 ? a : b;
    }

    clone() { return new BN(this.msg, this.layer); }
    isZero() { return this.layer === 0 && this.msg === 0; }

    toNumber() {
      if (this.layer === 0) return this.msg;
      if (this.layer === 1 && this.msg <= 308) return Math.pow(10, this.msg);
      return Infinity;
    }

    cmp(o) {
      o = BN.from(o);
      const az = this.isZero(), bz = o.isZero();
      if (az || bz) return az && bz ? 0 : (az ? -1 : 1);
      if (this.layer === 0 && o.layer === 0) {
        return this.msg < o.msg ? -1 : (this.msg > o.msg ? 1 : 0);
      }
      if (this.layer === 0 && this.msg < 0) return -1;
      if (o.layer === 0 && o.msg < 0) return 1;
      
return this.log10().cmp(o.log10());
    }

    add(o) {
      o = BN.from(o);
      if (this.isZero()) return o.clone();
      if (o.isZero()) return this.clone();
      if (this.layer === 0 && o.layer === 0) {
        const s = this.msg + o.msg;
        if (isFinite(s) && s < SMALL && s > -SMALL) return new BN(s, 0);
      }
      
      if (this.layer > 0 && o.layer === 0 && o.msg < 0) return this.clone();
      if (o.layer > 0 && this.layer === 0 && this.msg < 0) return o.clone();
      let a = this, b = o;
      if (a.cmp(b) < 0) { const t = a; a = b; b = t; }
      const la = a.log10(), lb = b.log10();
      const dn = logDelta(lb, la);   
      if (!isFinite(dn) || dn < -16) return a.clone();
      const corr = Math.log10(1 + Math.pow(10, dn));
      return la.add(BN.from(corr)).exp10();
    }

    sub(o) {
      o = BN.from(o);
      if (o.isZero()) return this.clone();
      if (this.isZero()) return BN.zero();
      if (this.cmp(o) <= 0) return BN.zero();
      if (this.layer === 0 && o.layer === 0) {
        const s = this.msg - o.msg;
        if (s >= 0 && s < SMALL) return new BN(s, 0);
      }
      
      if (o.layer === 0 && o.msg < 0) return this.add(new BN(-o.msg, 0));
      const la = this.log10(), lb = o.log10();
      const dn = logDelta(lb, la);   
      if (!isFinite(dn) || dn < -16) return this.clone();
      if (dn === 0) return BN.zero();
      const diff = 1 - Math.pow(10, dn);
      if (!(diff > 0)) return BN.zero();
      return la.add(BN.from(Math.log10(diff))).exp10();
    }

    mul(o) {
      o = BN.from(o);
      if (this.isZero() || o.isZero()) return BN.zero();
      if (this.layer === 0 && o.layer === 0) {
        const p = this.msg * o.msg;
        if (isFinite(p)) {
          if (p < SMALL && p > -SMALL) return new BN(p, 0);
          if (p <= -SMALL) return new BN(-Number.MAX_VALUE, 0); 
        }
      }
      return this.log10().add(o.log10()).exp10();
    }

    div(o) {
      o = BN.from(o);
      if (o.isZero()) return new BN(HUGE.msg, HUGE.layer);
      if (this.isZero()) return BN.zero();
      if (this.layer === 0 && o.layer === 0) {
        const q = this.msg / o.msg;
        if (isFinite(q) && q >= 0 && q < SMALL) return new BN(q, 0);
      }
      const la = this.log10(), lb = o.log10();
      if (la.cmp(lb) >= 0) {
        
        return la.sub(lb).exp10();
      }
      const diff = lb.sub(la);
      const dn = diff.toNumber();
      if (!isFinite(dn) || dn > 308) return BN.zero(); 
      return BN.from(-dn).exp10();
    }

    pow(e) {
      let en;
      if (e instanceof BN) en = e.toNumber();
      else if (typeof e === 'number') en = e;
      else en = BN.from(e).toNumber();
      if (!isFinite(en)) return new BN(HUGE.msg, HUGE.layer);
      if (en === 0) return BN.one();
      if (this.isZero()) return en > 0 ? BN.zero() : new BN(HUGE.msg, HUGE.layer);
      if (this.layer === 0 && this.msg >= 0) {
        const p = Math.pow(this.msg, en);
        if (isFinite(p) && p < SMALL) return new BN(p, 0);
      }
      return this.log10().mul(en).exp10();
    }

    log10() {
      if (this.layer === 0) {
        if (this.msg <= 0) return new BN(-Number.MAX_VALUE, 0);
        return new BN(Math.log10(this.msg), 0);
      }
      let r = new BN(this.msg, 0);
      for (let i = 1; i < this.layer; i++) r = r.exp10();
      return r;
    }

    exp10() {
      return new BN(this.msg, this.layer + 1);
    }

    floor() {
      if (this.layer === 0) return new BN(Math.floor(this.msg), 0);
      return this.clone();
    }

    format() {
      if (this.layer === 0) {
        const x = this.msg;
        if (x === 0) return '0';
        if (x < 0) return '-' + new BN(-x, 0).format();
        if (x < 1000) return (Math.round(x * 10) / 10).toString();
        if (x < 1e6) return Math.floor(x).toLocaleString('en-US');
        let e = Math.floor(Math.log10(x));
        let m = x / Math.pow(10, e);
        if (m >= 9.995) { m = 1; e += 1; }
        return m.toFixed(2) + 'e' + e;
      }
      if (this.layer === 1) {
        let e = Math.floor(this.msg);
        let m = Math.pow(10, this.msg - e);
        if (m >= 9.995) { m = 1; e += 1; }
        let es;
        if (e < 1e15) es = String(Math.floor(e));
        else es = new BN(e, 0).format();
        if (Math.abs(m - 1) < 5e-3) return '1e' + es;
        return m.toFixed(2) + 'e' + es;
      }
      return '1e' + new BN(this.msg, this.layer - 1).format();
    }
  }

  const zeros = () => Array.from({ length: 6 }, () => BN.zero());

  const ones = () => Array.from({ length: 6 }, () => BN.one());

  function fmt(x) {
    if (x instanceof BN) return x.format();
    if (typeof x === 'number') {
      if (!isFinite(x)) return new BN(HUGE.msg, HUGE.layer).format();
      return BN.from(x).format();
    }
    return BN.from(x).format();
  }

  function safeNum(x) {
    if (typeof x !== 'number' || !isFinite(x)) return x > 0 ? Number.MAX_VALUE : 0;
    return x;
  }

  function fmtT(s) {
    if (!isFinite(s) || s > 3.2e9) return '—';
    const en = S.lang === 'en';
    if (s <= 0.5) return en ? 'Ready' : '就绪';
    if (s < 60) return Math.ceil(s) + (en ? 's' : '秒');
    if (s < 3600) return Math.floor(s / 60) + (en ? 'm' : '分') + Math.ceil(s % 60) + (en ? 's' : '秒');
    if (s < 86400) return (s / 3600).toFixed(1) + (en ? 'h' : '小时');
    if (s < 86400 * 365) return (s / 86400).toFixed(1) + (en ? 'd' : '天');
    return (s / 86400 / 365).toFixed(1) + (en ? 'y' : '年');
  }

  function fmtDur(s) {
    if (!isFinite(s) || s < 0) return '—';
    const en = S.lang === 'en';
    if (s < 1) return s.toFixed(1) + (en ? 's' : '秒');
    if (s < 60) return Math.floor(s) + (en ? 's' : '秒');
    if (s < 3600) return Math.floor(s / 60) + (en ? 'm' : '分') + Math.floor(s % 60) + (en ? 's' : '秒');
    if (s < 86400) return (s / 3600).toFixed(1) + (en ? 'h' : '小时');
    if (s < 86400 * 365) return (s / 86400).toFixed(1) + (en ? 'd' : '天');
    return (s / 86400 / 365).toFixed(1) + (en ? 'y' : '年');
  }

function logDelta(x, y) {
    const xn = x.toNumber(), yn = y.toNumber();
    if (isFinite(xn) && isFinite(yn)) return xn - yn;
    const c = x.cmp(y);
    return c === 0 ? 0 : (c < 0 ? -Infinity : Infinity);
  }
