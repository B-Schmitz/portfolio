var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        (d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            });
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: () => !1,
        enqueueForceUpdate: () => {},
        enqueueReplaceState: () => {},
        enqueueSetState: () => {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      });
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h);
    }
    var x = (b.prototype = new y());
    (x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0);
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      ee = Object.prototype.hasOwnProperty;
    function T(e, n, r) {
      var i = r.ref;
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
    }
    function te(e, t) {
      return T(e.type, t, e.props);
    }
    function E(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ne(e) {
      var t = { "=": `=0`, ":": `=2` };
      return `$` + e.replace(/[=:]/g, (e) => t[e]);
    }
    var re = /\/+/g;
    function ie(e, t) {
      return typeof e == `object` && e && e.key != null ? ne(`` + e.key) : t.toString(36);
    }
    function ae(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  (t) => {
                    e.status === `pending` && ((e.status = `fulfilled`), (e.value = t));
                  },
                  (t) => {
                    e.status === `pending` && ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function oe(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return (c = e._init), oe(c(e._payload), r, i, a, o);
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ie(e, 0) : a),
          S(o)
            ? ((i = ``), c != null && (i = c.replace(re, `$&/`) + `/`), oe(o, r, i, ``, (e) => e))
            : o != null &&
              (E(o) &&
                (o = te(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(re, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++) (a = e[u]), (s = l + ie(a, u)), (c += oe(a, r, i, s, o));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          (a = a.value), (s = l + ie(a, u++)), (c += oe(a, r, i, s, o));
      else if (s === `object`) {
        if (typeof e.then == `function`) return oe(ae(e), r, i, a, o);
        throw (
          ((r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          ))
        );
      }
      return c;
    }
    function se(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return oe(e, r, ``, ``, (e) => t.call(n, e, i++)), r;
    }
    function ce(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            (t) => {
              (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
            },
            (t) => {
              (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var D =
        typeof reportError == `function`
          ? reportError
          : (e) => {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      O = {
        map: se,
        forEach: (e, t, n) => {
          se(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: (e) => {
          var t = 0;
          return (
            se(e, () => {
              t++;
            }),
            t
          );
        },
        toArray: (e) => se(e, (e) => e) || [],
        only: (e) => {
          if (!E(e))
            throw Error(`React.Children.only expected to receive a single React element child.`);
          return e;
        },
      };
    (e.Activity = f),
      (e.Children = O),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = { __proto__: null, c: (e) => w.H.useMemoCache(e) }),
      (e.cache = (e) =>
        function () {
          return e.apply(null, arguments);
        }),
      (e.cacheSignal = () => null),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ee.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return T(e.type, i, r);
      }),
      (e.createContext = (e) => (
        (e = {
          $$typeof: s,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (e.Provider = e),
        (e.Consumer = { $$typeof: o, _context: e }),
        e
      )),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ee.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return T(e, a, i);
      }),
      (e.createRef = () => ({ current: null })),
      (e.forwardRef = (e) => ({ $$typeof: c, render: e })),
      (e.isValidElement = E),
      (e.lazy = (e) => ({ $$typeof: d, _payload: { _status: -1, _result: e }, _init: ce })),
      (e.memo = (e, t) => ({ $$typeof: u, type: e, compare: t === void 0 ? null : t })),
      (e.startTransition = (e) => {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, D);
        } catch (e) {
          D(e);
        } finally {
          t !== null && n.types !== null && (t.types = n.types), (w.T = t);
        }
      }),
      (e.unstable_useCacheRefresh = () => w.H.useCacheRefresh()),
      (e.use = (e) => w.H.use(e)),
      (e.useActionState = (e, t, n) => w.H.useActionState(e, t, n)),
      (e.useCallback = (e, t) => w.H.useCallback(e, t)),
      (e.useContext = (e) => w.H.useContext(e)),
      (e.useDebugValue = () => {}),
      (e.useDeferredValue = (e, t) => w.H.useDeferredValue(e, t)),
      (e.useEffect = (e, t) => w.H.useEffect(e, t)),
      (e.useEffectEvent = (e) => w.H.useEffectEvent(e)),
      (e.useId = () => w.H.useId()),
      (e.useImperativeHandle = (e, t, n) => w.H.useImperativeHandle(e, t, n)),
      (e.useInsertionEffect = (e, t) => w.H.useInsertionEffect(e, t)),
      (e.useLayoutEffect = (e, t) => w.H.useLayoutEffect(e, t)),
      (e.useMemo = (e, t) => w.H.useMemo(e, t)),
      (e.useOptimistic = (e, t) => w.H.useOptimistic(e, t)),
      (e.useReducer = (e, t, n) => w.H.useReducer(e, t, n)),
      (e.useRef = (e) => w.H.useRef(e)),
      (e.useState = (e) => w.H.useState(e)),
      (e.useSyncExternalStore = (e, t, n) => w.H.useSyncExternalStore(e, t, n)),
      (e.useTransition = () => w.H.useTransition()),
      (e.version = `19.2.8`);
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) (e[r] = u), (e[l] = n), (r = l);
          else break;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = () => a.now();
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = () => o.now() - s;
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) r(l), (i.sortIndex = i.expirationTime), t(c, i);
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) (m = !0), S || ((S = !0), E());
        else {
          var t = n(l);
          t !== null && ie(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      ee = -1;
    function T() {
      return g ? !0 : !(e.unstable_now() - ee < w);
    }
    function te() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        ee = t;
        var i = !0;
        try {
          a: {
            (m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0);
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && T()); ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    (d.callback = null), (f = d.priorityLevel);
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      (d.callback = s), b(t), (i = !0);
                      break b;
                    }
                    d === n(c) && r(c), b(t);
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  u !== null && ie(x, u.startTime - t), (i = !1);
                }
              }
              break a;
            } finally {
              (d = null), (f = a), (p = !1);
            }
          }
        } finally {
          i ? E() : (S = !1);
        }
      }
    }
    var E;
    if (typeof y == `function`)
      E = () => {
        y(te);
      };
    else if (typeof MessageChannel < `u`) {
      var ne = new MessageChannel(),
        re = ne.port2;
      (ne.port1.onmessage = te),
        (E = () => {
          re.postMessage(null);
        });
    } else
      E = () => {
        _(te, 0);
      };
    function ie(t, n) {
      C = _(() => {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = (e) => {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = (e) => {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = () => f),
      (e.unstable_next = (e) => {
        switch (f) {
          case 1:
          case 2:
          case 3: {
            var t = 3;
            break;
          }
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = () => {
        g = !0;
      }),
      (e.unstable_runWithPriority = (e, t) => {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = (r, i, a) => {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1: {
            var s = -1;
            break;
          }
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), ie(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), E()))),
          r
        );
      }),
      (e.unstable_shouldYield = T),
      (e.unstable_wrapCallback = (e) => {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      });
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: () => {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    (e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = (e) => {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          (s.T = t), (i.p = n), i.d.f();
        }
      }),
      (e.preconnect = (e, t) => {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = (e) => {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = (e, t) => {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
              })
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = (e, t) => {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = (e, t) => {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = (e, t) => {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = (e) => {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = (e, t) => e(t)),
      (e.useFormState = (e, t, n) => s.H.useFormState(e, t, n)),
      (e.useFormStatus = () => s.H.useHostTransitionStatus()),
      (e.version = `19.2.8`);
  }),
  m = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = p());
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return l(a), e;
            if (s === r) return l(a), t;
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) (n = a), (r = s);
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              (c = !0), (n = a), (r = s);
              break;
            }
            if (u === r) {
              (c = !0), (r = a), (n = s);
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                (c = !0), (n = s), (r = a);
                break;
              }
              if (u === r) {
                (c = !0), (r = s), (n = a);
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      T = Symbol.for(`react.suspense_list`),
      te = Symbol.for(`react.memo`),
      E = Symbol.for(`react.lazy`),
      ne = Symbol.for(`react.activity`),
      re = Symbol.for(`react.memo_cache_sentinel`),
      ie = Symbol.iterator;
    function ae(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ie && e[ie]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var oe = Symbol.for(`react.client.reference`);
    function se(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case T:
          return `SuspenseList`;
        case ne:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w: {
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          }
          case te:
            return (t = e.displayName || null), t === null ? se(e.type) || `Memo` : t;
          case E:
            (t = e._payload), (e = e._init);
            try {
              return se(e(t));
            } catch {}
        }
      return null;
    }
    var ce = Array.isArray,
      D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      le = { pending: !1, data: null, method: null, action: null },
      ue = [],
      de = -1;
    function fe(e) {
      return { current: e };
    }
    function pe(e) {
      0 > de || ((e.current = ue[de]), (ue[de] = null), de--);
    }
    function k(e, t) {
      de++, (ue[de] = e.current), (e.current = t);
    }
    var me = fe(null),
      he = fe(null),
      ge = fe(null),
      _e = fe(null);
    function ve(e, t) {
      switch ((k(ge, t), k(he, e), k(me, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) (t = Vd(t)), (e = Hd(t, e));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      pe(me), k(me, e);
    }
    function ye() {
      pe(me), pe(he), pe(ge);
    }
    function be(e) {
      e.memoizedState !== null && k(_e, e);
      var t = me.current,
        n = Hd(t, e.type);
      t !== n && (k(he, e), k(me, n));
    }
    function xe(e) {
      he.current === e && (pe(me), pe(he)), _e.current === e && (pe(_e), (Qf._currentValue = le));
    }
    var Se, Ce;
    function we(e) {
      if (Se === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (Se = (t && t[1]) || ``),
            (Ce =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``);
        }
      return (
        `
` +
        Se +
        e +
        Ce
      );
    }
    var Te = !1;
    function Ee(e, t) {
      if (!e || Te) return ``;
      Te = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: () => {
            try {
              if (t) {
                var n = () => {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: () => {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(() => {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`); ) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`); ) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i]; ) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        (Te = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : ``) ? we(n) : ``;
    }
    function De(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return we(e.type);
        case 16:
          return we(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? we(`Suspense Fallback`) : we(`Suspense`);
        case 19:
          return we(`SuspenseList`);
        case 0:
        case 15:
          return Ee(e.type, !1);
        case 11:
          return Ee(e.type.render, !1);
        case 1:
          return Ee(e.type, !0);
        case 31:
          return we(`Activity`);
        default:
          return ``;
      }
    }
    function Oe(e) {
      try {
        var t = ``,
          n = null;
        do (t += De(e, n)), (n = e), (e = e.return);
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var ke = Object.prototype.hasOwnProperty,
      Ae = t.unstable_scheduleCallback,
      je = t.unstable_cancelCallback,
      Me = t.unstable_shouldYield,
      Ne = t.unstable_requestPaint,
      Pe = t.unstable_now,
      Fe = t.unstable_getCurrentPriorityLevel,
      Ie = t.unstable_ImmediatePriority,
      Le = t.unstable_UserBlockingPriority,
      Re = t.unstable_NormalPriority,
      ze = t.unstable_LowPriority,
      Be = t.unstable_IdlePriority,
      Ve = t.log,
      He = t.unstable_setDisableYieldValue,
      Ue = null,
      We = null;
    function Ge(e) {
      if ((typeof Ve == `function` && He(e), We && typeof We.setStrictMode == `function`))
        try {
          We.setStrictMode(Ue, e);
        } catch {}
    }
    var Ke = Math.clz32 ? Math.clz32 : Ye,
      qe = Math.log,
      Je = Math.LN2;
    function Ye(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((qe(e) / Je) | 0)) | 0;
    }
    var Xe = 256,
      Ze = 262144,
      Qe = 4194304;
    function $e(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function et(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = $e(n)))
                : (i = $e(o))
              : (i = $e(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = $e(n))) : (i = $e(o)))
              : (i = $e(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function tt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function nt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function rt() {
      var e = Qe;
      return (Qe <<= 1), !(Qe & 62914560) && (Qe = 4194304), e;
    }
    function it(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function at(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function ot(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ke(n),
          d = 1 << u;
        (s[u] = 0), (c[u] = -1);
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      r !== 0 && st(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
    }
    function st(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - Ke(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930));
    }
    function ct(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ke(n),
          i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
      }
    }
    function lt(e, t) {
      var n = t & -t;
      return (n = n & 42 ? 1 : ut(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
    }
    function ut(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function dt(e) {
      return (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2;
    }
    function ft() {
      var e = O.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function pt(e, t) {
      var n = O.p;
      try {
        return (O.p = e), t();
      } finally {
        O.p = n;
      }
    }
    var mt = Math.random().toString(36).slice(2),
      ht = `__reactFiber$` + mt,
      gt = `__reactProps$` + mt,
      _t = `__reactContainer$` + mt,
      vt = `__reactEvents$` + mt,
      yt = `__reactListeners$` + mt,
      bt = `__reactHandles$` + mt,
      xt = `__reactResources$` + mt,
      St = `__reactMarker$` + mt;
    function Ct(e) {
      delete e[ht], delete e[gt], delete e[vt], delete e[yt], delete e[bt];
    }
    function wt(e) {
      var t = e[ht];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[_t] || n[ht])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = df(e); e !== null; ) {
              if ((n = e[ht])) return n;
              e = df(e);
            }
          return t;
        }
        (e = n), (n = e.parentNode);
      }
      return null;
    }
    function Tt(e) {
      if ((e = e[ht] || e[_t])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Et(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Dt(e) {
      var t = e[xt];
      return (t ||= e[xt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
    }
    function Ot(e) {
      e[St] = !0;
    }
    var kt = new Set(),
      At = {};
    function jt(e, t) {
      Mt(e, t), Mt(e + `Capture`, t);
    }
    function Mt(e, t) {
      for (At[e] = t, e = 0; e < t.length; e++) kt.add(t[e]);
    }
    var Nt =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Pt = {},
      Ft = {};
    function It(e) {
      return ke.call(Ft, e)
        ? !0
        : ke.call(Pt, e)
          ? !1
          : Nt.test(e)
            ? (Ft[e] = !0)
            : ((Pt[e] = !0), !1);
    }
    function Lt(e, t, n) {
      if (It(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`: {
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
            }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Rt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function zt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Bt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Vt(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function Ht(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !Object.hasOwn(e, t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              (n = `` + e), a.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: () => n,
            setValue: (e) => {
              n = `` + e;
            },
            stopTracking: () => {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function Ut(e) {
      if (!e._valueTracker) {
        var t = Vt(e) ? `checked` : `value`;
        e._valueTracker = Ht(e, t, `` + e[t]);
      }
    }
    function Wt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Vt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Gt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Kt = /[\n"\\]/g;
    function qt(e) {
      return e.replace(Kt, (e) => `\\` + e.charCodeAt(0).toString(16) + ` `);
    }
    function Jt(e, t, n, r, i, a, o, s) {
      (e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Bt(t))
            : e.value !== `` + Bt(t) && (e.value = `` + Bt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Xt(e, o, Bt(n))
          : Xt(e, o, Bt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + Bt(s))
          : e.removeAttribute(`name`);
    }
    function Yt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Ut(e);
          return;
        }
        (n = n == null ? `` : `` + Bt(n)),
          (t = t == null ? n : `` + Bt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Ut(e);
    }
    function Xt(e, t, n) {
      (t === `number` && Gt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Zt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = Object.hasOwn(t, `$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = `` + Bt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            (e[i].selected = !0), r && (e[i].defaultSelected = !0);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Qt(e, t, n) {
      if (t != null && ((t = `` + Bt(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Bt(n);
    }
    function $t(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ce(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        (n ??= ``), (t = n);
      }
      (n = Bt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Ut(e);
    }
    function en(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var tn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function nn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || tn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function rn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !Object.hasOwn(n, r) ||
            (t != null && Object.hasOwn(t, r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t) (r = t[a]), Object.hasOwn(t, a) && n[a] !== r && nn(e, a, r);
      } else for (var o in t) Object.hasOwn(t, o) && nn(e, o, t[o]);
    }
    function an(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var on = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      sn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function cn(e) {
      return sn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function ln() {}
    var un = null;
    function dn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var fn = null,
      pn = null;
    function mn(e) {
      var t = Tt(e);
      if (t && (e = t.stateNode)) {
        var n = e[gt] || null;
        switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Jt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + qt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[gt] || null;
                  if (!a) throw Error(i(90));
                  Jt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) (r = n[t]), r.form === e.form && Wt(r);
            }
            break;
          case `textarea`:
            Qt(e, n.value, n.defaultValue);
            break;
          case `select`:
            (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
        }
      }
    }
    var hn = !1;
    function gn(e, t, n) {
      if (hn) return e(t, n);
      hn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((hn = !1),
          (fn !== null || pn !== null) &&
            (bu(), fn && ((t = fn), (e = pn), (pn = fn = null), mn(t), e)))
        )
          for (t = 0; t < e.length; t++) mn(e[t]);
      }
    }
    function _n(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[gt] || null;
      if (r === null) return null;
      n = r[t];
      switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r = !r.disabled) ||
            ((e = e.type),
            (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r);
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var vn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      yn = !1;
    if (vn)
      try {
        var bn = {};
        Object.defineProperty(bn, "passive", {
          get: () => {
            yn = !0;
          },
        }),
          window.addEventListener(`test`, bn, bn),
          window.removeEventListener(`test`, bn, bn);
      } catch {
        yn = !1;
      }
    var xn = null,
      Sn = null,
      Cn = null;
    function wn() {
      if (Cn) return Cn;
      var e,
        t = Sn,
        n = t.length,
        r,
        i = `value` in xn ? xn.value : xn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Cn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Tn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function En() {
      return !0;
    }
    function Dn() {
      return !1;
    }
    function On(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          Object.hasOwn(e, o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? En
            : Dn),
          (this.isPropagationStopped = Dn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = En));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = En));
          },
          persist: () => {},
          isPersistent: En,
        }),
        t
      );
    }
    var kn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: (e) => e.timeStamp || Date.now(),
        defaultPrevented: 0,
        isTrusted: 0,
      },
      An = On(kn),
      jn = h({}, kn, { view: 0, detail: 0 }),
      Mn = On(jn),
      Nn,
      Pn,
      Fn,
      In = h({}, jn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: qn,
        button: 0,
        buttons: 0,
        relatedTarget: (e) =>
          e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget,
        movementX: (e) =>
          `movementX` in e
            ? e.movementX
            : (e !== Fn &&
                (Fn && e.type === `mousemove`
                  ? ((Nn = e.screenX - Fn.screenX), (Pn = e.screenY - Fn.screenY))
                  : (Pn = Nn = 0),
                (Fn = e)),
              Nn),
        movementY: (e) => (`movementY` in e ? e.movementY : Pn),
      }),
      Ln = On(In),
      Rn = On(h({}, In, { dataTransfer: 0 })),
      zn = On(h({}, jn, { relatedTarget: 0 })),
      Bn = On(h({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Vn = On(
        h({}, kn, {
          clipboardData: (e) => (`clipboardData` in e ? e.clipboardData : window.clipboardData),
        }),
      ),
      Hn = On(h({}, kn, { data: 0 })),
      Un = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Wn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Gn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Kn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Gn[e]) ? !!t[e] : !1;
    }
    function qn() {
      return Kn;
    }
    var Jn = On(
        h({}, jn, {
          key: (e) => {
            if (e.key) {
              var t = Un[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Tn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Wn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: qn,
          charCode: (e) => (e.type === `keypress` ? Tn(e) : 0),
          keyCode: (e) => (e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0),
          which: (e) =>
            e.type === `keypress`
              ? Tn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0,
        }),
      ),
      Yn = On(
        h({}, In, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Xn = On(
        h({}, jn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: qn,
        }),
      ),
      Zn = On(h({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Qn = On(
        h({}, In, {
          deltaX: (e) => (`deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0),
          deltaY: (e) =>
            `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0,
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      $n = On(h({}, kn, { newState: 0, oldState: 0 })),
      er = [9, 13, 27, 32],
      tr = vn && `CompositionEvent` in window,
      nr = null;
    vn && `documentMode` in document && (nr = document.documentMode);
    var rr = vn && `TextEvent` in window && !nr,
      ir = vn && (!tr || (nr && 8 < nr && 11 >= nr)),
      ar = ` `,
      or = !1;
    function sr(e, t) {
      switch (e) {
        case `keyup`:
          return er.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function cr(e) {
      return (e = e.detail), typeof e == `object` && `data` in e ? e.data : null;
    }
    var lr = !1;
    function ur(e, t) {
      switch (e) {
        case `compositionend`:
          return cr(t);
        case `keypress`:
          return t.which === 32 ? ((or = !0), ar) : null;
        case `textInput`:
          return (e = t.data), e === ar && or ? null : e;
        default:
          return null;
      }
    }
    function dr(e, t) {
      if (lr)
        return e === `compositionend` || (!tr && sr(e, t))
          ? ((e = wn()), (Cn = Sn = xn = null), (lr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return ir && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var fr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function A(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!fr[e.type] : t === `textarea`;
    }
    function pr(e, t, n, r) {
      fn ? (pn ? pn.push(r) : (pn = [r])) : (fn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new An(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t }));
    }
    var mr = null,
      hr = null;
    function gr(e) {
      yd(e, 0);
    }
    function _r(e) {
      if (Wt(Et(e))) return e;
    }
    function vr(e, t) {
      if (e === `change`) return t;
    }
    var yr = !1;
    if (vn) {
      var br;
      if (vn) {
        var xr = `oninput` in document;
        if (!xr) {
          var Sr = document.createElement(`div`);
          Sr.setAttribute(`oninput`, `return;`), (xr = typeof Sr.oninput == `function`);
        }
        br = xr;
      } else br = !1;
      yr = br && (!document.documentMode || 9 < document.documentMode);
    }
    function Cr() {
      mr && (mr.detachEvent(`onpropertychange`, wr), (hr = mr = null));
    }
    function wr(e) {
      if (e.propertyName === `value` && _r(hr)) {
        var t = [];
        pr(t, hr, e, dn(e)), gn(gr, t);
      }
    }
    function Tr(e, t, n) {
      e === `focusin`
        ? (Cr(), (mr = t), (hr = n), mr.attachEvent(`onpropertychange`, wr))
        : e === `focusout` && Cr();
    }
    function Er(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return _r(hr);
    }
    function Dr(e, t) {
      if (e === `click`) return _r(t);
    }
    function Or(e, t) {
      if (e === `input` || e === `change`) return _r(t);
    }
    function kr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Ar = typeof Object.is == `function` ? Object.is : kr;
    function jr(e, t) {
      if (Ar(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ke.call(t, i) || !Ar(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Mr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nr(e, t) {
      var n = Mr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Mr(n);
      }
    }
    function Pr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Pr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Fr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Gt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Gt(e.document);
      }
      return t;
    }
    function Ir(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Lr = vn && `documentMode` in document && 11 >= document.documentMode,
      Rr = null,
      zr = null,
      Br = null,
      Vr = !1;
    function Hr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Vr ||
        Rr == null ||
        Rr !== Gt(r) ||
        ((r = Rr),
        `selectionStart` in r && Ir(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Br && jr(Br, r)) ||
          ((Br = r),
          (r = Ed(zr, `onSelect`)),
          0 < r.length &&
            ((t = new An(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Rr))));
    }
    function j(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Ur = {
        animationend: j(`Animation`, `AnimationEnd`),
        animationiteration: j(`Animation`, `AnimationIteration`),
        animationstart: j(`Animation`, `AnimationStart`),
        transitionrun: j(`Transition`, `TransitionRun`),
        transitionstart: j(`Transition`, `TransitionStart`),
        transitioncancel: j(`Transition`, `TransitionCancel`),
        transitionend: j(`Transition`, `TransitionEnd`),
      },
      Wr = {},
      Gr = {};
    vn &&
      ((Gr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Ur.animationend.animation,
        delete Ur.animationiteration.animation,
        delete Ur.animationstart.animation),
      `TransitionEvent` in window || delete Ur.transitionend.transition);
    function Kr(e) {
      if (Wr[e]) return Wr[e];
      if (!Ur[e]) return e;
      var t = Ur[e],
        n;
      for (n in t) if (Object.hasOwn(t, n) && n in Gr) return (Wr[e] = t[n]);
      return e;
    }
    var qr = Kr(`animationend`),
      Jr = Kr(`animationiteration`),
      Yr = Kr(`animationstart`),
      Xr = Kr(`transitionrun`),
      Zr = Kr(`transitionstart`),
      Qr = Kr(`transitioncancel`),
      $r = Kr(`transitionend`),
      ei = new Map(),
      ti =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ti.push(`scrollEnd`);
    function ni(e, t) {
      ei.set(e, t), jt(t, [e]);
    }
    var ri =
        typeof reportError == `function`
          ? reportError
          : (e) => {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ii = [],
      ai = 0,
      oi = 0;
    function si() {
      for (var e = ai, t = (oi = ai = 0); t < e; ) {
        var n = ii[t];
        ii[t++] = null;
        var r = ii[t];
        ii[t++] = null;
        var i = ii[t];
        ii[t++] = null;
        var a = ii[t];
        if (((ii[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i);
        }
        a !== 0 && di(n, i, a);
      }
    }
    function ci(e, t, n, r) {
      (ii[ai++] = e),
        (ii[ai++] = t),
        (ii[ai++] = n),
        (ii[ai++] = r),
        (oi |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r);
    }
    function li(e, t, n, r) {
      return ci(e, t, n, r), fi(e);
    }
    function ui(e, t) {
      return ci(e, null, null, t), fi(e);
    }
    function di(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        (a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return);
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ke(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function fi(e) {
      if (50 < fu) throw ((fu = 0), (pu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var pi = {};
    function mi(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function hi(e, t, n, r) {
      return new mi(e, t, n, r);
    }
    function gi(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function _i(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = hi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function vi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function yi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) gi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, me.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case ne:
            return (e = hi(31, n, t, a)), (e.elementType = ne), (e.lanes = o), e;
          case y:
            return bi(n.children, a, o, t);
          case b:
            (s = 8), (a |= 24);
            break;
          case x:
            return (e = hi(12, n, t, a | 2)), (e.elementType = x), (e.lanes = o), e;
          case ee:
            return (e = hi(13, n, t, a)), (e.elementType = ee), (e.lanes = o), e;
          case T:
            return (e = hi(19, n, t, a)), (e.elementType = T), (e.lanes = o), e;
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case te:
                  s = 14;
                  break a;
                case E:
                  (s = 16), (r = null);
                  break a;
              }
            (s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null);
        }
      return (t = hi(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
    }
    function bi(e, t, n, r) {
      return (e = hi(7, e, r, t)), (e.lanes = n), e;
    }
    function xi(e, t, n) {
      return (e = hi(6, e, null, t)), (e.lanes = n), e;
    }
    function Si(e) {
      var t = hi(18, null, null, 0);
      return (t.stateNode = e), t;
    }
    function Ci(e, t, n) {
      return (
        (t = hi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var wi = new WeakMap();
    function Ti(e, t) {
      if (typeof e == `object` && e) {
        var n = wi.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: Oe(t) }), wi.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: Oe(t) };
    }
    var Ei = [],
      Di = 0,
      Oi = null,
      ki = 0,
      Ai = [],
      ji = 0,
      Mi = null,
      Ni = 1,
      Pi = ``;
    function Fi(e, t) {
      (Ei[Di++] = ki), (Ei[Di++] = Oi), (Oi = e), (ki = t);
    }
    function Ii(e, t, n) {
      (Ai[ji++] = Ni), (Ai[ji++] = Pi), (Ai[ji++] = Mi), (Mi = e);
      var r = Ni;
      e = Pi;
      var i = 32 - Ke(r) - 1;
      (r &= ~(1 << i)), (n += 1);
      var a = 32 - Ke(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ni = (1 << (32 - Ke(t) + i)) | (n << i) | r),
          (Pi = a + e);
      } else (Ni = (1 << a) | (n << i) | r), (Pi = e);
    }
    function Li(e) {
      e.return !== null && (Fi(e, 1), Ii(e, 1, 0));
    }
    function Ri(e) {
      for (; e === Oi; ) (Oi = Ei[--Di]), (Ei[Di] = null), (ki = Ei[--Di]), (Ei[Di] = null);
      for (; e === Mi; )
        (Mi = Ai[--ji]),
          (Ai[ji] = null),
          (Pi = Ai[--ji]),
          (Ai[ji] = null),
          (Ni = Ai[--ji]),
          (Ai[ji] = null);
    }
    function zi(e, t) {
      (Ai[ji++] = Ni), (Ai[ji++] = Pi), (Ai[ji++] = Mi), (Ni = t.id), (Pi = t.overflow), (Mi = e);
    }
    var Bi = null,
      M = null,
      N = !1,
      Vi = null,
      Hi = !1,
      P = Error(i(519));
    function Ui(e) {
      throw (
        (Yi(
          Ti(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        P)
      );
    }
    function Wi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[ht] = e), (t[gt] = r), n)) {
        case `dialog`:
          Q(`cancel`, t), Q(`close`, t);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          Q(`error`, t), Q(`load`, t);
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          Q(`invalid`, t),
            Yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          Q(`invalid`, t), $t(t, r.value, r.defaultValue, r.children);
      }
      (n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = ln),
            (t = !0))
          : (t = !1),
        t || Ui(e, !0);
    }
    function Gi(e) {
      for (Bi = e.return; Bi; )
        switch (Bi.tag) {
          case 5:
          case 31:
          case 13:
            Hi = !1;
            return;
          case 27:
          case 3:
            Hi = !0;
            return;
          default:
            Bi = Bi.return;
        }
    }
    function Ki(e) {
      if (e !== Bi) return !1;
      if (!N) return Gi(e), (N = !0), !1;
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && M && Ui(e),
        Gi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        M = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        M = uf(e);
      } else
        t === 27
          ? ((t = M), Zd(e.type) ? ((e = lf), (lf = null), (M = e)) : (M = t))
          : (M = Bi ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function qi() {
      (M = Bi = null), (N = !1);
    }
    function Ji() {
      var e = Vi;
      return e !== null && (Ql === null ? (Ql = e) : Ql.push.apply(Ql, e), (Vi = null)), e;
    }
    function Yi(e) {
      Vi === null ? (Vi = [e]) : Vi.push(e);
    }
    var Xi = fe(null),
      Zi = null,
      Qi = null;
    function $i(e, t, n) {
      k(Xi, t._currentValue), (t._currentValue = n);
    }
    function ea(e) {
      (e._currentValue = Xi.current), pe(Xi);
    }
    function ta(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function na(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ta(o.return, n, e),
                  r || (s = null);
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          (s.lanes |= n), (o = s.alternate), o !== null && (o.lanes |= n), ta(s, n, e), (s = null);
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              (a.return = s.return), (s = a);
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ra(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Ar(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === _e.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      e !== null && na(t, e, n, r), (t.flags |= 262144);
    }
    function ia(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ar(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function aa(e) {
      (Zi = e), (Qi = null), (e = e.dependencies), e !== null && (e.firstContext = null);
    }
    function oa(e) {
      return ca(Zi, e);
    }
    function sa(e, t) {
      return Zi === null && aa(e), ca(e, t);
    }
    function ca(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Qi === null)) {
        if (e === null) throw Error(i(308));
        (Qi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
      } else Qi = Qi.next = t;
      return n;
    }
    var la =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: (t, n) => {
                    e.push(n);
                  },
                });
              this.abort = () => {
                (t.aborted = !0), e.forEach((e) => e());
              };
            },
      ua = t.unstable_scheduleCallback,
      da = t.unstable_NormalPriority,
      fa = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function pa() {
      return { controller: new la(), data: new Map(), refCount: 0 };
    }
    function ma(e) {
      e.refCount--,
        e.refCount === 0 &&
          ua(da, () => {
            e.controller.abort();
          });
    }
    var ha = null,
      ga = 0,
      _a = 0,
      va = null;
    function ya(e, t) {
      if (ha === null) {
        var n = (ha = []);
        (ga = 0),
          (_a = dd()),
          (va = {
            status: `pending`,
            value: void 0,
            then: (e) => {
              n.push(e);
            },
          });
      }
      return ga++, t.then(ba, ba), t;
    }
    function ba() {
      if (--ga === 0 && ha !== null) {
        va !== null && (va.status = `fulfilled`);
        var e = ha;
        (ha = null), (_a = 0), (va = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function xa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: (e) => {
            n.push(e);
          },
        };
      return (
        e.then(
          () => {
            (r.status = `fulfilled`), (r.value = t);
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          (e) => {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Sa = D.S;
    D.S = (e, t) => {
      (tu = Pe()),
        typeof t == `object` && t && typeof t.then == `function` && ya(e, t),
        Sa !== null && Sa(e, t);
    };
    var Ca = fe(null);
    function wa() {
      var e = Ca.current;
      return e === null ? G.pooledCache : e;
    }
    function Ta(e, t) {
      t === null ? k(Ca, Ca.current) : k(Ca, t.pool);
    }
    function Ea() {
      var e = wa();
      return e === null ? null : { parent: fa._currentValue, pool: e };
    }
    var Da = Error(i(460)),
      Oa = Error(i(474)),
      ka = Error(i(542)),
      Aa = { then: () => {} };
    function ja(e) {
      return (e = e.status), e === `fulfilled` || e === `rejected`;
    }
    function Ma(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(ln, ln), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ia(e), e);
        default:
          if (typeof t.status == `string`) t.then(ln, ln);
          else {
            if (((e = G), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
            (e = t),
              (e.status = `pending`),
              e.then(
                (e) => {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `fulfilled`), (n.value = e);
                  }
                },
                (e) => {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `rejected`), (n.reason = e);
                  }
                },
              );
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ia(e), e);
          }
          throw ((Pa = t), Da);
      }
    }
    function Na(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Pa = e), Da) : e;
      }
    }
    var Pa = null;
    function Fa() {
      if (Pa === null) throw Error(i(459));
      var e = Pa;
      return (Pa = null), e;
    }
    function Ia(e) {
      if (e === Da || e === ka) throw Error(i(483));
    }
    var La = null,
      Ra = 0;
    function za(e) {
      var t = Ra;
      return (Ra += 1), La === null && (La = []), Ma(La, e, t);
    }
    function F(e, t) {
      (t = t.props.ref), (e.ref = t === void 0 ? null : t);
    }
    function Ba(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
            ),
          ));
    }
    function Va(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling);
        return t;
      }
      function a(e, t) {
        return (e = _i(e, t)), (e.index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return e && t.alternate === null && (t.flags |= 67108866), t;
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === E && Na(i) === t.type))
            ? ((t = a(t, n.props)), F(t, n), (t.return = e), t)
            : ((t = yi(n.type, n.key, n.props, null, e.mode, r)), F(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = bi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return (t = xi(`` + t, e.mode, n)), (t.return = e), t;
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (n = yi(t.type, t.key, t.props, null, e.mode, n)), F(n, t), (n.return = e), n;
            case v:
              return (t = Ci(t, e.mode, n)), (t.return = e), t;
            case E:
              return (t = Na(t)), f(e, t, n);
          }
          if (ce(t) || ae(t)) return (t = bi(t, e.mode, n, null)), (t.return = e), t;
          if (typeof t.then == `function`) return f(e, za(t), n);
          if (t.$$typeof === C) return f(e, sa(e, t), n);
          Ba(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case E:
              return (n = Na(n)), p(e, t, n, r);
          }
          if (ce(n) || ae(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, za(n), r);
          if (n.$$typeof === C) return p(e, t, sa(e, n), r);
          Ba(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return (e = e.get(n) || null), c(t, e, `` + r, i);
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i);
            case v:
              return (e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i);
            case E:
              return (r = Na(r)), m(e, t, n, r, i);
          }
          if (ce(r) || ae(r)) return (e = e.get(n) || null), d(t, e, r, i, null);
          if (typeof r.then == `function`) return m(e, t, n, za(r), i);
          if (r.$$typeof === C) return m(e, t, n, sa(t, r), i);
          Ba(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g);
        }
        if (h === s.length) return n(i, d), N && Fi(i, h), l;
        if (d === null) {
          for (; h < s.length; h++)
            (d = f(i, s[h], c)),
              d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d));
          return N && Fi(i, h), l;
        }
        for (d = r(d); h < s.length; h++)
          (g = m(d, i, h, s[h], c)),
            g !== null &&
              (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g));
        return e && d.forEach((e) => t(i, e)), N && Fi(i, h), l;
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _);
        }
        if (v.done) return n(a, h), N && Fi(a, g), u;
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            (v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v));
          return N && Fi(a, g), u;
        }
        for (h = r(h); !v.done; g++, v = c.next())
          (v = m(h, a, g, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v));
        return e && h.forEach((e) => t(a, e)), N && Fi(a, g), u;
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        n(e, r.sibling), (c = a(r, o.props.children)), (c.return = e), (e = c);
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === E && Na(l) === r.type)
                    ) {
                      n(e, r.sibling), (c = a(r, o.props)), F(c, o), (c.return = e), (e = c);
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                o.type === y
                  ? ((c = bi(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = yi(o.type, o.key, o.props, null, e.mode, c)),
                    F(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling), (c = a(r, o.children || [])), (c.return = e), (e = c);
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  t(e, r), (r = r.sibling);
                }
                (c = Ci(o, e.mode, c)), (c.return = e), (e = c);
              }
              return s(e);
            case E:
              return (o = Na(o)), b(e, r, o, c);
          }
          if (ce(o)) return h(e, r, o, c);
          if (ae(o)) {
            if (((l = ae(o)), typeof l != `function`)) throw Error(i(150));
            return (o = l.call(o)), g(e, r, o, c);
          }
          if (typeof o.then == `function`) return b(e, r, za(o), c);
          if (o.$$typeof === C) return b(e, r, sa(e, o), c);
          Ba(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = xi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return (e, t, n, r) => {
        try {
          Ra = 0;
          var i = b(e, t, n, r);
          return (La = null), i;
        } catch (t) {
          if (t === Da || t === ka) throw t;
          var a = hi(29, t, null, e.mode);
          return (a.lanes = r), (a.return = e), a;
        }
      };
    }
    var Ha = Va(!0),
      Ua = Va(!1),
      Wa = !1;
    function Ga(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ka(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function qa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ja(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), W & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = fi(e)),
          di(e, null, n),
          t
        );
      }
      return ci(e, r, t, n), fi(e);
    }
    function Ya(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n);
      }
    }
    function Xa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n);
        return;
      }
      (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var Za = !1;
    function Qa() {
      if (Za) {
        var e = va;
        if (e !== null) throw e;
      }
    }
    function $a(e, t, n, r) {
      Za = !1;
      var i = e.updateQueue;
      Wa = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        (c.next = null), o === null ? (a = l) : (o.next = l), (o = c);
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        (o = 0), (u = l = c = null), (s = a);
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (q & f) === f : (r & f) === f) {
            f !== 0 && f === _a && (Za = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null });
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload), (f = typeof m == `function` ? m.call(_, d, f) : m), f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Wa = !0;
              }
            }
            (f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f));
          } else
            (p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f);
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            (p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null);
          }
        } while (1);
        u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Kl |= o),
          (e.lanes = o),
          (e.memoizedState = d);
      }
    }
    function eo(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function to(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) eo(n[e], t);
    }
    var no = fe(null),
      ro = fe(0);
    function io(e, t) {
      (e = Gl), k(ro, e), k(no, t), (Gl = e | t.baseLanes);
    }
    function ao() {
      k(ro, Gl), k(no, no.current);
    }
    function oo() {
      (Gl = ro.current), pe(no), pe(ro);
    }
    var so = fe(null),
      co = null;
    function lo(e) {
      var t = e.alternate;
      k(I, I.current & 1),
        k(so, e),
        co === null && (t === null || no.current !== null || t.memoizedState !== null) && (co = e);
    }
    function uo(e) {
      k(I, I.current), k(so, e), co === null && (co = e);
    }
    function fo(e) {
      e.tag === 22 ? (k(I, I.current), k(so, e), co === null && (co = e)) : po(e);
    }
    function po() {
      k(I, I.current), k(so, so.current);
    }
    function mo(e) {
      pe(so), co === e && (co = null), pe(I);
    }
    var I = fe(0);
    function ho(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var go = 0,
      L = null,
      R = null,
      _o = null,
      vo = !1,
      yo = !1,
      bo = !1,
      xo = 0,
      So = 0,
      Co = null,
      wo = 0;
    function To() {
      throw Error(i(321));
    }
    function Eo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Ar(e[n], t[n])) return !1;
      return !0;
    }
    function Do(e, t, n, r, i, a) {
      return (
        (go = a),
        (L = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (D.H = e === null || e.memoizedState === null ? Hs : Us),
        (bo = !1),
        (a = n(r, i)),
        (bo = !1),
        yo && (a = ko(t, n, r, i)),
        Oo(e),
        a
      );
    }
    function Oo(e) {
      D.H = B;
      var t = R !== null && R.next !== null;
      if (((go = 0), (_o = R = L = null), (vo = !1), (So = 0), (Co = null), t)) throw Error(i(300));
      e === null || ac || ((e = e.dependencies), e !== null && ia(e) && (ac = !0));
    }
    function ko(e, t, n, r) {
      L = e;
      var a = 0;
      do {
        if ((yo && (Co = null), (So = 0), (yo = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (_o = R = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          (o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0);
        }
        (D.H = Ws), (o = t(n, r));
      } while (yo);
      return o;
    }
    function Ao() {
      var e = D.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Lo(t) : t),
        (e = e.useState()[0]),
        (R === null ? null : R.memoizedState) !== e && (L.flags |= 1024),
        t
      );
    }
    function jo() {
      var e = xo !== 0;
      return (xo = 0), e;
    }
    function Mo(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }
    function No(e) {
      if (vo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        vo = !1;
      }
      (go = 0), (_o = R = L = null), (yo = !1), (So = xo = 0), (Co = null);
    }
    function Po() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return _o === null ? (L.memoizedState = _o = e) : (_o = _o.next = e), _o;
    }
    function Fo() {
      if (R === null) {
        var e = L.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = R.next;
      var t = _o === null ? L.memoizedState : _o.next;
      if (t !== null) (_o = t), (R = e);
      else {
        if (e === null) throw L.alternate === null ? Error(i(467)) : Error(i(310));
        (R = e),
          (e = {
            memoizedState: R.memoizedState,
            baseState: R.baseState,
            baseQueue: R.baseQueue,
            queue: R.queue,
            next: null,
          }),
          _o === null ? (L.memoizedState = _o = e) : (_o = _o.next = e);
      }
      return _o;
    }
    function Io() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Lo(e) {
      var t = So;
      return (
        (So += 1),
        Co === null && (Co = []),
        (e = Ma(Co, e, t)),
        (t = L),
        (_o === null ? t.memoizedState : _o.next) === null &&
          ((t = t.alternate), (D.H = t === null || t.memoizedState === null ? Hs : Us)),
        e
      );
    }
    function Ro(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Lo(e);
        if (e.$$typeof === C) return oa(e);
      }
      throw Error(i(438, String(e)));
    }
    function zo(e) {
      var t = null,
        n = L.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = L.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null && (t = { data: r.data.map((e) => e.slice()), index: 0 })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Io()), (L.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = re;
      return t.index++, n;
    }
    function Bo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function z(e) {
      return Vo(Fo(), R, e);
    }
    function Vo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          (a.next = o.next), (o.next = s);
        }
        (t.baseQueue = a = o), (r.pending = null);
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (go & f) === f : (q & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === _a && (d = !0);
            else if ((go & p) === p) {
              (u = u.next), p === _a && (d = !0);
              continue;
            } else
              (f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (L.lanes |= p),
                (Kl |= p);
            (f = u.action), bo && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f));
          } else
            (p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (L.lanes |= f),
              (Kl |= f);
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Ar(o, e.memoizedState) && ((ac = !0), d && ((n = va), n !== null)))
        )
          throw n;
        (e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o);
      }
      return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function Ho(e) {
      var t = Fo(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== a);
        Ar(o, t.memoizedState) || (ac = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function Uo(e, t, n) {
      var r = L,
        a = Fo(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Ar((R || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (ac = !0)),
        (a = a.queue),
        ms(Ko.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (_o !== null && _o.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ls(9, { destroy: void 0 }, Go.bind(null, r, a, n, t), null),
          G === null)
        )
          throw Error(i(349));
        o || go & 127 || Wo(r, t, n);
      }
      return n;
    }
    function Wo(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = L.updateQueue),
        t === null
          ? ((t = Io()), (L.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function Go(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), qo(t) && Jo(e);
    }
    function Ko(e, t, n) {
      return n(() => {
        qo(t) && Jo(e);
      });
    }
    function qo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Ar(e, n);
      } catch {
        return !0;
      }
    }
    function Jo(e) {
      var t = ui(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Yo(e) {
      var t = Po();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), bo)) {
          Ge(!0);
          try {
            n();
          } finally {
            Ge(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Xo(e, t, n, r) {
      return (e.baseState = n), Vo(e, R, typeof r == `function` ? r : Bo);
    }
    function Zo(e, t, n, r, a) {
      if (zs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: (e) => {
            o.listeners.push(e);
          },
        };
        D.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Qo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o));
      }
    }
    function Qo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = D.T,
          o = {};
        D.T = o;
        try {
          var s = n(i, r),
            c = D.S;
          c !== null && c(o, s), $o(e, t, s);
        } catch (n) {
          ts(e, t, n);
        } finally {
          a !== null && o.types !== null && (a.types = o.types), (D.T = a);
        }
      } else
        try {
          (a = n(i, r)), $o(e, t, a);
        } catch (n) {
          ts(e, t, n);
        }
    }
    function $o(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            (n) => {
              es(e, t, n);
            },
            (n) => ts(e, t, n),
          )
        : es(e, t, n);
    }
    function es(e, t, n) {
      (t.status = `fulfilled`),
        (t.value = n),
        ns(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Qo(e, n)));
    }
    function ts(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do (t.status = `rejected`), (t.reason = n), ns(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }
    function ns(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function rs(e, t) {
      return t;
    }
    function is(e, t) {
      if (N) {
        var n = G.formState;
        if (n !== null) {
          a: {
            var r = L;
            if (N) {
              if (M) {
                b: {
                  for (var i = M, a = Hi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  (a = i.data), (i = a === `F!` || a === `F` ? i : null);
                }
                if (i) {
                  (M = cf(i.nextSibling)), (r = i.data === `F!`);
                  break a;
                }
              }
              Ui(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Po()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rs,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Is.bind(null, L, r)),
        (r.dispatch = n),
        (r = Yo(!1)),
        (a = Rs.bind(null, L, !1, r.queue)),
        (r = Po()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Zo.bind(null, L, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function as(e) {
      return os(Fo(), R, e);
    }
    function os(e, t, n) {
      if (
        ((t = Vo(e, t, rs)[0]),
        (e = z(Bo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Lo(t);
        } catch (e) {
          throw e === Da ? ka : e;
        }
      else r = t;
      t = Fo();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((L.flags |= 2048), ls(9, { destroy: void 0 }, ss.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ss(e, t) {
      e.action = t;
    }
    function cs(e) {
      var t = Fo(),
        n = R;
      if (n !== null) return os(t, n, e);
      Fo(), (t = t.memoizedState), (n = Fo());
      var r = n.queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }
    function ls(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = L.updateQueue),
        t === null && ((t = Io()), (L.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function us() {
      return Fo().memoizedState;
    }
    function ds(e, t, n, r) {
      var i = Po();
      (L.flags |= e),
        (i.memoizedState = ls(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r));
    }
    function fs(e, t, n, r) {
      var i = Fo();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      R !== null && r !== null && Eo(r, R.memoizedState.deps)
        ? (i.memoizedState = ls(t, a, n, r))
        : ((L.flags |= e), (i.memoizedState = ls(1 | t, a, n, r)));
    }
    function ps(e, t) {
      ds(8390656, 8, e, t);
    }
    function ms(e, t) {
      fs(2048, 8, e, t);
    }
    function hs(e) {
      L.flags |= 4;
      var t = L.updateQueue;
      if (t === null) (t = Io()), (L.updateQueue = t), (t.events = [e]);
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function gs(e) {
      var t = Fo().memoizedState;
      return (
        hs({ ref: t, nextImpl: e }),
        function () {
          if (W & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function _s(e, t) {
      return fs(4, 2, e, t);
    }
    function vs(e, t) {
      return fs(4, 4, e, t);
    }
    function ys(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return () => {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          () => {
            t.current = null;
          }
        );
    }
    function bs(e, t, n) {
      (n = n == null ? null : n.concat([e])), fs(4, 4, ys.bind(null, t, e), n);
    }
    function xs() {}
    function Ss(e, t) {
      var n = Fo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Eo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Cs(e, t) {
      var n = Fo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Eo(t, r[1])) return r[0];
      if (((r = e()), bo)) {
        Ge(!0);
        try {
          e();
        } finally {
          Ge(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }
    function ws(e, t, n) {
      return n === void 0 || (go & 1073741824 && !(q & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (L.lanes |= e), (Kl |= e), n);
    }
    function Ts(e, t, n, r) {
      return Ar(n, t)
        ? n
        : no.current === null
          ? !(go & 42) || (go & 1073741824 && !(q & 261930))
            ? ((ac = !0), (e.memoizedState = n))
            : ((e = mu()), (L.lanes |= e), (Kl |= e), t)
          : ((e = ws(e, n, r)), Ar(e, t) || (ac = !0), e);
    }
    function Es(e, t, n, r, i) {
      var a = O.p;
      O.p = a !== 0 && 8 > a ? a : 8;
      var o = D.T,
        s = {};
      (D.T = s), Rs(e, !1, t, n);
      try {
        var c = i(),
          l = D.S;
        l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ls(e, t, xa(c, r), X(e))
            : Ls(e, t, r, X(e));
      } catch (n) {
        Ls(e, t, { then: () => {}, status: `rejected`, reason: n }, X());
      } finally {
        (O.p = a), o !== null && s.types !== null && (o.types = s.types), (D.T = o);
      }
    }
    function Ds() {}
    function Os(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ks(e).queue;
      Es(e, a, t, le, n === null ? Ds : () => (As(e), n(r)));
    }
    function ks(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: le,
        baseState: le,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bo,
          lastRenderedState: le,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function As(e) {
      var t = ks(e);
      t.next === null && (t = e.alternate.memoizedState), Ls(e, t.next.queue, {}, X());
    }
    function js() {
      return oa(Qf);
    }
    function Ms() {
      return Fo().memoizedState;
    }
    function Ns() {
      return Fo().memoizedState;
    }
    function Ps(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3: {
            var n = X();
            e = qa(n);
            var r = Ja(t, e, n);
            r !== null && (hu(r, t, n), Ya(r, t, n)), (t = { cache: pa() }), (e.payload = t);
            return;
          }
        }
        t = t.return;
      }
    }
    function Fs(e, t, n) {
      var r = X();
      (n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        zs(e) ? Bs(t, n) : ((n = li(e, t, n, r)), n !== null && (hu(n, e, r), Vs(n, t, r)));
    }
    function Is(e, t, n) {
      Ls(e, t, n, X());
    }
    function Ls(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (zs(e)) Bs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Ar(s, o)))
              return ci(e, t, i, 0), G === null && si(), !1;
          } catch {}
        if (((n = li(e, t, i, r)), n !== null)) return hu(n, e, r), Vs(n, t, r), !0;
      }
      return !1;
    }
    function Rs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        zs(e))
      ) {
        if (t) throw Error(i(479));
      } else (t = li(e, n, r, 2)), t !== null && hu(t, e, 2);
    }
    function zs(e) {
      var t = e.alternate;
      return e === L || (t !== null && t === L);
    }
    function Bs(e, t) {
      yo = vo = !0;
      var n = e.pending;
      n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
    }
    function Vs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n);
      }
    }
    var B = {
      readContext: oa,
      use: Ro,
      useCallback: To,
      useContext: To,
      useEffect: To,
      useImperativeHandle: To,
      useLayoutEffect: To,
      useInsertionEffect: To,
      useMemo: To,
      useReducer: To,
      useRef: To,
      useState: To,
      useDebugValue: To,
      useDeferredValue: To,
      useTransition: To,
      useSyncExternalStore: To,
      useId: To,
      useHostTransitionStatus: To,
      useFormState: To,
      useActionState: To,
      useOptimistic: To,
      useMemoCache: To,
      useCacheRefresh: To,
    };
    B.useEffectEvent = To;
    var Hs = {
        readContext: oa,
        use: Ro,
        useCallback: (e, t) => ((Po().memoizedState = [e, t === void 0 ? null : t]), e),
        useContext: oa,
        useEffect: ps,
        useImperativeHandle: (e, t, n) => {
          (n = n == null ? null : n.concat([e])), ds(4194308, 4, ys.bind(null, t, e), n);
        },
        useLayoutEffect: (e, t) => ds(4194308, 4, e, t),
        useInsertionEffect: (e, t) => {
          ds(4, 2, e, t);
        },
        useMemo: (e, t) => {
          var n = Po();
          t = t === void 0 ? null : t;
          var r = e();
          if (bo) {
            Ge(!0);
            try {
              e();
            } finally {
              Ge(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: (e, t, n) => {
          var r = Po();
          if (n !== void 0) {
            var i = n(t);
            if (bo) {
              Ge(!0);
              try {
                n(t);
              } finally {
                Ge(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Fs.bind(null, L, e)),
            [r.memoizedState, e]
          );
        },
        useRef: (e) => {
          var t = Po();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: (e) => {
          e = Yo(e);
          var t = e.queue,
            n = Is.bind(null, L, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: xs,
        useDeferredValue: (e, t) => ws(Po(), e, t),
        useTransition: () => {
          var e = Yo(!1);
          return (e = Es.bind(null, L, e.queue, !0, !1)), (Po().memoizedState = e), [!1, e];
        },
        useSyncExternalStore: (e, t, n) => {
          var r = L,
            a = Po();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), G === null)) throw Error(i(349));
            q & 127 || Wo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ps(Ko.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ls(9, { destroy: void 0 }, Go.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: () => {
          var e = Po(),
            t = G.identifierPrefix;
          if (N) {
            var n = Pi,
              r = Ni;
            (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = xo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`);
          } else (n = wo++), (t = `_` + t + `r_` + n.toString(32) + `_`);
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: js,
        useFormState: is,
        useActionState: is,
        useOptimistic: (e) => {
          var t = Po();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (t.queue = n), (t = Rs.bind(null, L, !0, n)), (n.dispatch = t), [e, t];
        },
        useMemoCache: zo,
        useCacheRefresh: () => (Po().memoizedState = Ps.bind(null, L)),
        useEffectEvent: (e) => {
          var t = Po(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (W & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Us = {
        readContext: oa,
        use: Ro,
        useCallback: Ss,
        useContext: oa,
        useEffect: ms,
        useImperativeHandle: bs,
        useInsertionEffect: _s,
        useLayoutEffect: vs,
        useMemo: Cs,
        useReducer: z,
        useRef: us,
        useState: () => z(Bo),
        useDebugValue: xs,
        useDeferredValue: (e, t) => Ts(Fo(), R.memoizedState, e, t),
        useTransition: () => {
          var e = z(Bo)[0],
            t = Fo().memoizedState;
          return [typeof e == `boolean` ? e : Lo(e), t];
        },
        useSyncExternalStore: Uo,
        useId: Ms,
        useHostTransitionStatus: js,
        useFormState: as,
        useActionState: as,
        useOptimistic: (e, t) => Xo(Fo(), R, e, t),
        useMemoCache: zo,
        useCacheRefresh: Ns,
      };
    Us.useEffectEvent = gs;
    var Ws = {
      readContext: oa,
      use: Ro,
      useCallback: Ss,
      useContext: oa,
      useEffect: ms,
      useImperativeHandle: bs,
      useInsertionEffect: _s,
      useLayoutEffect: vs,
      useMemo: Cs,
      useReducer: Ho,
      useRef: us,
      useState: () => Ho(Bo),
      useDebugValue: xs,
      useDeferredValue: (e, t) => {
        var n = Fo();
        return R === null ? ws(n, e, t) : Ts(n, R.memoizedState, e, t);
      },
      useTransition: () => {
        var e = Ho(Bo)[0],
          t = Fo().memoizedState;
        return [typeof e == `boolean` ? e : Lo(e), t];
      },
      useSyncExternalStore: Uo,
      useId: Ms,
      useHostTransitionStatus: js,
      useFormState: cs,
      useActionState: cs,
      useOptimistic: (e, t) => {
        var n = Fo();
        return R === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Xo(n, R, e, t);
      },
      useMemoCache: zo,
      useCacheRefresh: Ns,
    };
    Ws.useEffectEvent = gs;
    function Gs(e, t, n, r) {
      (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var V = {
      enqueueSetState: (e, t, n) => {
        e = e._reactInternals;
        var r = X(),
          i = qa(r);
        (i.payload = t),
          n != null && (i.callback = n),
          (t = Ja(e, i, r)),
          t !== null && (hu(t, e, r), Ya(t, e, r));
      },
      enqueueReplaceState: (e, t, n) => {
        e = e._reactInternals;
        var r = X(),
          i = qa(r);
        (i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ja(e, i, r)),
          t !== null && (hu(t, e, r), Ya(t, e, r));
      },
      enqueueForceUpdate: (e, t) => {
        e = e._reactInternals;
        var n = X(),
          r = qa(n);
        (r.tag = 2),
          t != null && (r.callback = t),
          (t = Ja(e, r, n)),
          t !== null && (hu(t, e, n), Ya(t, e, n));
      },
    };
    function Ks(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !jr(n, r) || !jr(i, a)
            : !0
      );
    }
    function qs(e, t, n, r) {
      (e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && V.enqueueReplaceState(t, t.state, null);
    }
    function Js(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ys(e) {
      ri(e);
    }
    function Xs(e) {
      console.error(e);
    }
    function Zs(e) {
      ri(e);
    }
    function Qs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    }
    function $s(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(() => {
          throw e;
        });
      }
    }
    function ec(e, t, n) {
      return (
        (n = qa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = () => {
          Qs(e, t);
        }),
        n
      );
    }
    function tc(e) {
      return (e = qa(e)), (e.tag = 3), e;
    }
    function nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        (e.payload = () => i(a)),
          (e.callback = () => {
            $s(t, n, r);
          });
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          $s(t, n, r),
            typeof i != `function` && (iu === null ? (iu = new Set([this])) : iu.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function rc(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && ra(t, n, a, !0), (n = so.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                co === null ? Du() : n.alternate === null && Y === 0 && (Y = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Aa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return Gu(e, r, a), Du(), !1;
      }
      if (N)
        return (
          (t = so.current),
          t === null
            ? (r !== P && ((t = Error(i(423), { cause: r })), Yi(Ti(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Ti(r, n)),
              (a = ec(e.stateNode, r, a)),
              Xa(e, a),
              Y !== 4 && (Y = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== P && ((e = Error(i(422), { cause: r })), Yi(Ti(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = Ti(o, n)), Zl === null ? (Zl = [o]) : Zl.push(o), Y !== 4 && (Y = 2), t === null))
        return !0;
      (r = Ti(r, n)), (n = t);
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = ec(n.stateNode, r, e)),
              Xa(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (iu === null || !iu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = tc(a)),
                nc(a, e, n, r),
                Xa(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var ic = Error(i(461)),
      ac = !1;
    function oc(e, t, n, r) {
      t.child = e === null ? Ua(t, null, n, r) : Ha(t, e.child, n, r);
    }
    function sc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        aa(t),
        (r = Do(e, t, n, o, a, i)),
        (s = jo()),
        e !== null && !ac
          ? (Mo(e, t, i), jc(e, t, i))
          : (N && s && Li(t), (t.flags |= 1), oc(e, t, r, i), t.child)
      );
    }
    function cc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !gi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), lc(e, t, a, r, i))
          : ((e = yi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Mc(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? jr : n), n(o, r) && e.ref === t.ref))
          return jc(e, t, i);
      }
      return (t.flags |= 1), (e = _i(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
    }
    function lc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (jr(a, r) && e.ref === t.ref)
          if (((ac = !1), (t.pendingProps = r = a), Mc(e, i))) e.flags & 131072 && (ac = !0);
          else return (t.lanes = e.lanes), jc(e, t, i);
      }
      return _c(e, t, n, r, i);
    }
    function uc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              (i = i | r.lanes | r.childLanes), (r = r.sibling);
            r = i & ~a;
          } else (r = 0), (t.child = null);
          return fc(e, t, a, n, r);
        }
        if (n & 536870912)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ta(t, a === null ? null : a.cachePool),
            a === null ? ao() : io(t, a),
            fo(t);
        else return (r = t.lanes = 536870912), fc(e, t, a === null ? n : a.baseLanes | n, n, r);
      } else
        a === null
          ? (e !== null && Ta(t, null), ao(), po(t))
          : (Ta(t, a.cachePool), io(t, a), po(t), (t.memoizedState = null));
      return oc(e, t, i, n), t.child;
    }
    function dc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function fc(e, t, n, r, i) {
      var a = wa();
      return (
        (a = a === null ? null : { parent: fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ta(t, null),
        ao(),
        fo(t),
        e !== null && ra(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function pc(e, t) {
      return (
        (t = Ec({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function mc(e, t, n) {
      return (
        Ha(t, e.child, null, n),
        (e = pc(t, t.pendingProps)),
        (e.flags |= 2),
        mo(t),
        (t.memoizedState = null),
        e
      );
    }
    function hc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`) return (e = pc(t, r)), (t.lanes = 536870912), dc(null, e);
          if (
            (uo(t),
            (e = M)
              ? ((e = rf(e, Hi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : { id: Ni, overflow: Pi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (Bi = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return (t.lanes = 536870912), null;
        }
        return pc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((uo(t), a))
          if (t.flags & 256) (t.flags &= -257), (t = mc(e, t, n));
          else if (t.memoizedState !== null) (t.child = e.child), (t.flags |= 128), (t = null);
          else throw Error(i(558));
        else if ((ac || ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), ac || a)) {
          if (((r = G), r !== null && ((s = lt(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), ui(e, s), hu(r, e, s), ic);
          Du(), (t = mc(e, t, n));
        } else
          (e = o.treeContext),
            (M = cf(s.nextSibling)),
            (Bi = t),
            (N = !0),
            (Vi = null),
            (Hi = !1),
            e !== null && zi(t, e),
            (t = pc(t, r)),
            (t.flags |= 4096);
        return t;
      }
      return (
        (e = _i(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function gc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function _c(e, t, n, r, i) {
      return (
        aa(t),
        (n = Do(e, t, n, r, void 0, i)),
        (r = jo()),
        e !== null && !ac
          ? (Mo(e, t, i), jc(e, t, i))
          : (N && r && Li(t), (t.flags |= 1), oc(e, t, n, i), t.child)
      );
    }
    function vc(e, t, n, r, i, a) {
      return (
        aa(t),
        (t.updateQueue = null),
        (n = ko(t, r, n, i)),
        Oo(e),
        (r = jo()),
        e !== null && !ac
          ? (Mo(e, t, a), jc(e, t, a))
          : (N && r && Li(t), (t.flags |= 1), oc(e, t, n, a), t.child)
      );
    }
    function yc(e, t, n, r, i) {
      if ((aa(t), t.stateNode === null)) {
        var a = pi,
          o = n.contextType;
        typeof o == `object` && o && (a = oa(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = V),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ga(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? oa(o) : pi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Gs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && V.enqueueReplaceState(a, a.state, null),
            $a(t, r, a, i),
            Qa(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0);
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Js(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        (o = pi), typeof u == `object` && u && (o = oa(u));
        var d = n.getDerivedStateFromProps;
        (u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && qs(t, a, r, o)),
          (Wa = !1);
        var f = t.memoizedState;
        (a.state = f),
          $a(t, r, a, i),
          Qa(),
          (l = t.memoizedState),
          s || f !== l || Wa
            ? (typeof d == `function` && (Gs(t, n, d, r), (l = t.memoizedState)),
              (c = Wa || Ks(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1));
      } else {
        (a = t.stateNode),
          Ka(e, t),
          (o = t.memoizedProps),
          (u = Js(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = pi),
          typeof l == `object` && l && (c = oa(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && qs(t, a, r, c)),
          (Wa = !1),
          (f = t.memoizedState),
          (a.state = f),
          $a(t, r, a, i),
          Qa();
        var p = t.memoizedState;
        o !== d || f !== p || Wa || (e !== null && e.dependencies !== null && ia(e.dependencies))
          ? (typeof s == `function` && (Gs(t, n, s, r), (p = t.memoizedState)),
            (u =
              Wa ||
              Ks(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && ia(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        gc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ha(t, e.child, null, i)), (t.child = Ha(t, null, n, i)))
              : oc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = jc(e, t, i)),
        e
      );
    }
    function bc(e, t, n, r) {
      return qi(), (t.flags |= 256), oc(e, t, n, r), t.child;
    }
    var xc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Sc(e) {
      return { baseLanes: e, cachePool: Ea() };
    }
    function Cc(e, t, n) {
      return (e = e === null ? 0 : e.childLanes & ~n), t && (e |= Yl), e;
    }
    function wc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(I.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (a ? lo(t) : po(t),
            (e = M)
              ? ((e = rf(e, Hi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Mi === null ? null : { id: Ni, overflow: Pi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Si(e)),
                  (n.return = t),
                  (t.child = n),
                  (Bi = t),
                  (M = null)))
              : (e = null),
            e === null)
          )
            throw Ui(t);
          return of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (po(t),
              (a = t.mode),
              (c = Ec({ mode: `hidden`, children: c }, a)),
              (r = bi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Sc(n)),
              (r.childLanes = Cc(e, s, n)),
              (t.memoizedState = xc),
              dc(null, r))
            : (lo(t), Tc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (lo(t), (t.flags &= -257), (t = Dc(e, t, n)))
            : t.memoizedState === null
              ? (po(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Ec({ mode: `visible`, children: r.children }, a)),
                (c = bi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ha(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Sc(n)),
                (r.childLanes = Cc(e, s, n)),
                (t.memoizedState = xc),
                (t = dc(null, r)))
              : (po(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((lo(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          (s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Yi({ value: r, source: null, stack: null }),
            (t = Dc(e, t, n));
        } else if ((ac || ra(e, t, n, !1), (s = (n & e.childLanes) !== 0), ac || s)) {
          if (((s = G), s !== null && ((r = lt(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), ui(e, r), hu(s, e, r), ic);
          af(c) || Du(), (t = Dc(e, t, n));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (M = cf(c.nextSibling)),
              (Bi = t),
              (N = !0),
              (Vi = null),
              (Hi = !1),
              e !== null && zi(t, e),
              (t = Tc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (po(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = _i(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = bi(c, a, n, null)), (c.flags |= 2)) : (c = _i(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          dc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Sc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Ea())
                : ((l = fa._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = Cc(e, s, n)),
          (t.memoizedState = xc),
          dc(e.child, r))
        : (lo(t),
          (n = e.child),
          (e = n.sibling),
          (n = _i(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Tc(e, t) {
      return (t = Ec({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t);
    }
    function Ec(e, t) {
      return (e = hi(22, e, null, t)), (e.lanes = 0), e;
    }
    function Dc(e, t, n) {
      return (
        Ha(t, e.child, null, n),
        (e = Tc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Oc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), ta(e.return, t, n);
    }
    function kc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Ac(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = I.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        k(I, o),
        oc(e, t, r, n),
        (r = N ? ki : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
          else if (e.tag === 19) Oc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate), e !== null && ho(e) === null && (i = n), (n = n.sibling);
          (n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            kc(t, !1, i, n, a, r);
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && ho(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          kc(t, !0, n, null, a, r);
          break;
        case `together`:
          kc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function jc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Kl |= t.lanes), (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = _i(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          (e = e.sibling), (n = n.sibling = _i(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Mc(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && ia(e)));
    }
    function Nc(e, t, n) {
      switch (t.tag) {
        case 3:
          ve(t, t.stateNode.containerInfo), $i(t, fa, e.memoizedState.cache), qi();
          break;
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          ve(t, t.stateNode.containerInfo);
          break;
        case 10:
          $i(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), uo(t), null;
          break;
        case 13: {
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (lo(t), (e = jc(e, t, n)), e === null ? null : e.sibling)
                : wc(e, t, n)
              : (lo(t), (t.flags |= 128), null);
          lo(t);
          break;
        }
        case 19: {
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (ra(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return Ac(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            k(I, I.current),
            r)
          )
            break;
          return null;
        }
        case 22:
          return (t.lanes = 0), uc(e, t, n, t.pendingProps);
        case 24:
          $i(t, fa, e.memoizedState.cache);
      }
      return jc(e, t, n);
    }
    function Pc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) ac = !0;
        else {
          if (!Mc(e, n) && !(t.flags & 128)) return (ac = !1), Nc(e, t, n);
          ac = !!(e.flags & 131072);
        }
      else (ac = !1), N && t.flags & 1048576 && Ii(t, ki, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Na(t.elementType)), (t.type = e), typeof e == `function`))
              gi(e)
                ? ((r = Js(e, r)), (t.tag = 1), (t = yc(null, t, e, r, n)))
                : ((t.tag = 0), (t = _c(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  (t.tag = 11), (t = sc(null, t, e, r, n));
                  break a;
                }
                if (a === te) {
                  (t.tag = 14), (t = cc(null, t, e, r, n));
                  break a;
                }
              }
              throw ((t = se(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return _c(e, t, t.type, t.pendingProps, n);
        case 1:
          return (r = t.type), (a = Js(r, t.pendingProps)), yc(e, t, r, a, n);
        case 3:
          a: {
            if ((ve(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            (a = o.element), Ka(e, t), $a(t, r, null, n);
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              $i(t, fa, r),
              r !== o.cache && na(t, [fa], n, !0),
              Qa(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = bc(e, t, r, n);
                break a;
              } else if (r !== a) {
                (a = Ti(Error(i(424)), t)), Yi(a), (t = bc(e, t, r, n));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  M = cf(e.firstChild),
                    Bi = t,
                    N = !0,
                    Vi = null,
                    Hi = !0,
                    n = Ua(t, null, r, n),
                    t.child = n;
                  n;
                )
                  (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
              }
            else {
              if ((qi(), r === a)) {
                t = jc(e, t, n);
                break a;
              }
              oc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            gc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(ge.current).createElement(n)),
                  (r[ht] = t),
                  (r[gt] = e),
                  Pd(r, n, e),
                  Ot(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            be(t),
            e === null &&
              N &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, ge.current)),
              (Bi = t),
              (Hi = !0),
              (a = M),
              Zd(t.type) ? ((lf = a), (M = cf(r.firstChild))) : (M = a)),
            oc(e, t, t.pendingProps.children, n),
            gc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = M) &&
                ((r = tf(r, t.type, t.pendingProps, Hi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (Bi = t), (M = cf(r.firstChild)), (Hi = !1), (a = !0))),
              a || Ui(t)),
            be(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = Do(e, t, Ao, null, null, n)), (Qf._currentValue = a)),
            gc(e, t),
            oc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = M) &&
                ((n = nf(n, t.pendingProps, Hi)),
                n === null ? (e = !1) : ((t.stateNode = n), (Bi = t), (M = null), (e = !0))),
              e || Ui(t)),
            null
          );
        case 13:
          return wc(e, t, n);
        case 4:
          return (
            ve(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ha(t, null, r, n)) : oc(e, t, r, n),
            t.child
          );
        case 11:
          return sc(e, t, t.type, t.pendingProps, n);
        case 7:
          return oc(e, t, t.pendingProps, n), t.child;
        case 8:
          return oc(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return oc(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (r = t.pendingProps), $i(t, t.type, r.value), oc(e, t, r.children, n), t.child;
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            aa(t),
            (a = oa(a)),
            (r = r(a)),
            (t.flags |= 1),
            oc(e, t, r, n),
            t.child
          );
        case 14:
          return cc(e, t, t.type, t.pendingProps, n);
        case 15:
          return lc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Ac(e, t, n);
        case 31:
          return hc(e, t, n);
        case 22:
          return uc(e, t, n, t.pendingProps);
        case 24:
          return (
            aa(t),
            (r = oa(fa)),
            e === null
              ? ((a = wa()),
                a === null &&
                  ((a = G),
                  (o = pa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ga(t),
                $i(t, fa, a))
              : ((e.lanes & n) !== 0 && (Ka(e, t), $a(t, null, null, n), Qa()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), $i(t, fa, r), r !== a.cache && na(t, [fa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    $i(t, fa, r))),
            oc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Fc(e) {
      e.flags |= 4;
    }
    function Ic(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Pa = Aa), Oa);
      } else e.flags &= -16777217;
    }
    function Lc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((Pa = Aa), Oa);
    }
    function Rc(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : rt()), (e.lanes |= t), (Xl |= t));
    }
    function zc(e, t) {
      if (!N)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function H(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling);
      else
        for (i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function Bc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ri(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return H(t), null;
        case 1:
          return H(t), null;
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            ea(fa),
            ye(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ki(t)
                ? Fc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ji())),
            H(t),
            null
          );
        case 26: {
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Fc(t), o === null ? (H(t), Ic(t, a, null, r, n)) : (H(t), Lc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (H(t), (t.flags &= -16777217))
                  : (Fc(t), H(t), Lc(t, o))
                : ((e = e.memoizedProps), e !== r && Fc(t), H(t), Ic(t, a, e, r, n)),
            null
          );
        }
        case 27:
          if ((xe(t), (n = ge.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Fc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return H(t), null;
            }
            (e = me.current), Ki(t) ? Wi(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Fc(t));
          }
          return H(t), null;
        case 5:
          if ((xe(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Fc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return H(t), null;
            }
            if (((o = me.current), Ki(t))) Wi(t, o);
            else {
              var s = Bd(ge.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                      break;
                    case `script`:
                      (o = s.createElement(`div`)),
                        (o.innerHTML = `<script></script>`),
                        (o = o.removeChild(o.firstChild));
                      break;
                    case `select`:
                      (o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size);
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              (o[ht] = t), (o[gt] = r);
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  (s.child.return = s), (s = s.child);
                  continue;
                }
                if (s === t) break;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
              t.stateNode = o;
              switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break;
                case `img`:
                  r = !0;
                  break;
                default:
                  r = !1;
              }
              r && Fc(t);
            }
          }
          return H(t), Ic(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Fc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = ge.current), Ki(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = Bi), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              (e[ht] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Ui(t, !0);
            } else (e = Bd(e).createTextNode(r)), (e[ht] = t), (t.stateNode = e);
          }
          return H(t), null;
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ki(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(i(557));
                e[ht] = t;
              } else qi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
              H(t), (e = !1);
            } else
              (n = Ji()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0);
            if (!e) return t.flags & 256 ? (mo(t), t) : (mo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return H(t), null;
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ki(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
                  throw Error(i(317));
                a[ht] = t;
              } else qi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
              H(t), (a = !1);
            } else
              (a = Ji()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0);
            if (!a) return t.flags & 256 ? (mo(t), t) : (mo(t), null);
          }
          return (
            mo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Rc(t, t.updateQueue),
                H(t),
                null)
          );
        case 4:
          return ye(), e === null && Sd(t.stateNode.containerInfo), H(t), null;
        case 10:
          return ea(t.type), H(t), null;
        case 19:
          if ((pe(I), (r = t.memoizedState), r === null)) return H(t), null;
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null))
            if (a) zc(r, !1);
            else {
              if (Y !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = ho(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        zc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Rc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      vi(n, e), (n = n.sibling);
                    return k(I, (I.current & 1) | 2), N && Fi(t, r.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Pe() > nu &&
                ((t.flags |= 128), (a = !0), zc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = ho(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Rc(t, e),
                  zc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !N)
                )
                  return H(t), null;
              } else
                2 * Pe() - r.renderingStartTime > nu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), zc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          return r.tail === null
            ? (H(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Pe()),
              (e.sibling = null),
              (n = I.current),
              k(I, a ? (n & 1) | 2 : n & 1),
              N && Fi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            mo(t),
            oo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 && !(t.flags & 128) && (H(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : H(t),
            (n = t.updateQueue),
            n !== null && Rc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && pe(Ca),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ea(fa),
            H(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Vc(e, t) {
      switch ((Ri(t), t.tag)) {
        case 1:
          return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
          return (
            ea(fa),
            ye(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return xe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((mo(t), t.alternate === null)) throw Error(i(340));
            qi();
          }
          return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 13:
          if ((mo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            qi();
          }
          return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
          return pe(I), null;
        case 4:
          return ye(), null;
        case 10:
          return ea(t.type), null;
        case 22:
        case 23:
          return (
            mo(t),
            oo(),
            e !== null && pe(Ca),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return ea(fa), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Hc(e, t) {
      switch ((Ri(t), t.tag)) {
        case 3:
          ea(fa), ye();
          break;
        case 26:
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye();
          break;
        case 31:
          t.memoizedState !== null && mo(t);
          break;
        case 13:
          mo(t);
          break;
        case 19:
          pe(I);
          break;
        case 10:
          ea(t.type);
          break;
        case 22:
        case 23:
          mo(t), oo(), e !== null && pe(Ca);
          break;
        case 24:
          ea(fa);
      }
    }
    function Uc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              (r = a()), (o.destroy = r);
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Wc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                (o.destroy = void 0), (i = t);
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Gc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          to(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Kc(e, t, n) {
      (n.props = Js(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function qc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5: {
              var r = e.stateNode;
              break;
            }
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Jc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            (e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null);
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Yc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Xc(e, t, n) {
      try {
        var r = e.stateNode;
        Fd(r, e.type, n, t), (r[gt] = t);
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Zc(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Zd(e.type)) || e.tag === 4
      );
    }
    function Qc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && Zd(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = ln));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for ($c(e, t, n), e = e.sibling; e !== null; ) $c(e, t, n), (e = e.sibling);
    }
    function el(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for (el(e, t, n), e = e.sibling; e !== null; ) el(e, t, n), (e = e.sibling);
    }
    function tl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
        Pd(t, r, n), (t[ht] = e), (t[gt] = n);
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var nl = !1,
      rl = !1,
      il = !1,
      al = typeof WeakSet == `function` ? WeakSet : Set,
      ol = null;
    function sl(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Fr(e)), Ir(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, o.nodeType;
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  (p = f), (f = m);
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  (f = p), (p = f.parentNode);
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (zd = { focusedElem: e, selectionRange: n }, sp = !1, ol = t; ol !== null; )
        if (((t = ol), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          (e.return = t), (ol = e);
        else
          for (; ol !== null; ) {
            switch (((t = ol), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) (a = e[n]), (a.ref.impl = a.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  (e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode);
                  try {
                    var h = Js(n.type, a);
                    (e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (ol = e);
              break;
            }
            ol = t.return;
          }
    }
    function cl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Sl(e, n), r & 4 && Uc(5, n);
          break;
        case 1:
          if ((Sl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Js(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          r & 64 && Gc(n), r & 512 && qc(n, n.return);
          break;
        case 3:
          if ((Sl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              to(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && tl(n);
        case 26:
        case 5:
          Sl(e, n), t === null && r & 4 && Yc(n), r & 512 && qc(n, n.return);
          break;
        case 12:
          Sl(e, n);
          break;
        case 31:
          Sl(e, n), r & 4 && pl(e, n);
          break;
        case 13:
          Sl(e, n),
            r & 4 && ml(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null && ((e = e.dehydrated), e !== null && ((n = Ju.bind(null, n)), sf(e, n))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || nl), !r)) {
            (t = (t !== null && t.memoizedState !== null) || rl), (i = nl);
            var a = rl;
            (nl = r),
              (rl = t) && !a ? wl(e, n, !!(n.subtreeFlags & 8772)) : Sl(e, n),
              (nl = i),
              (rl = a);
          }
          break;
        case 30:
          break;
        default:
          Sl(e, n);
      }
    }
    function ll(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), ll(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Ct(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var U = null,
      ul = !1;
    function dl(e, t, n) {
      for (n = n.child; n !== null; ) fl(e, t, n), (n = n.sibling);
    }
    function fl(e, t, n) {
      if (We && typeof We.onCommitFiberUnmount == `function`)
        try {
          We.onCommitFiberUnmount(Ue, n);
        } catch {}
      switch (n.tag) {
        case 26:
          rl || Jc(n, t),
            dl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
          break;
        case 27: {
          rl || Jc(n, t);
          var r = U,
            i = ul;
          Zd(n.type) && ((U = n.stateNode), (ul = !1)),
            dl(e, t, n),
            pf(n.stateNode),
            (U = r),
            (ul = i);
          break;
        }
        case 5:
          rl || Jc(n, t);
        case 6:
          if (((r = U), (i = ul), (U = null), dl(e, t, n), (U = r), (ul = i), U !== null))
            if (ul)
              try {
                (U.nodeType === 9
                  ? U.body
                  : U.nodeName === `HTML`
                    ? U.ownerDocument.body
                    : U
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                U.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          U !== null &&
            (ul
              ? ((e = U),
                Qd(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(U, n.stateNode));
          break;
        case 4:
          (r = U),
            (i = ul),
            (U = n.stateNode.containerInfo),
            (ul = !0),
            dl(e, t, n),
            (U = r),
            (ul = i);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Wc(2, n, t), rl || Wc(4, n, t), dl(e, t, n);
          break;
        case 1:
          rl ||
            (Jc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Kc(n, t, r)),
            dl(e, t, n);
          break;
        case 21:
          dl(e, t, n);
          break;
        case 22:
          (rl = (r = rl) || n.memoizedState !== null), dl(e, t, n), (rl = r);
          break;
        default:
          dl(e, t, n);
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function ml(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function hl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19: {
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new al()), t;
        }
        case 22:
          return (
            (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new al()), t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function gl(e, t) {
      var n = hl(e);
      t.forEach((t) => {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function _l(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  (U = c.stateNode), (ul = !1);
                  break a;
                }
                break;
              case 5:
                (U = c.stateNode), (ul = !1);
                break a;
              case 3:
              case 4:
                (U = c.stateNode.containerInfo), (ul = !0);
                break a;
            }
            c = c.return;
          }
          if (U === null) throw Error(i(160));
          fl(o, s, a),
            (U = null),
            (ul = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null);
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) yl(t, e), (t = t.sibling);
    }
    var vl = null;
    function yl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(t, e), bl(e), r & 4 && (Wc(3, e, e.return), Uc(3, e), Wc(5, e, e.return));
          break;
        case 1:
          _l(t, e),
            bl(e),
            r & 512 && (rl || n === null || Jc(n, n.return)),
            r & 64 &&
              nl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
          break;
        case 26: {
          var a = vl;
          if ((_l(t, e), bl(e), r & 512 && (rl || n === null || Jc(n, n.return)), r & 4)) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    (r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a);
                    b: switch (r) {
                      case `title`:
                        (o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[St] ||
                            o[ht] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Pd(o, r, n),
                          (o[ht] = e),
                          Ot(o),
                          (r = o);
                        break a;
                      case `link`: {
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)), Pd(o, r, n), a.head.appendChild(o);
                        break;
                      }
                      case `meta`:
                        if ((s = Vf(`meta`, `content`, a).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        (o = a.createElement(r)), Pd(o, r, n), a.head.appendChild(o);
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    (o[ht] = e), Ot(o), (r = o);
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null && e.stateNode !== null && Xc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Hf(a, e.type, e.stateNode) : If(a, r, e.memoizedProps));
          }
          break;
        }
        case 27:
          _l(t, e),
            bl(e),
            r & 512 && (rl || n === null || Jc(n, n.return)),
            n !== null && r & 4 && Xc(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if ((_l(t, e), bl(e), r & 512 && (rl || n === null || Jc(n, n.return)), e.flags & 32)) {
            a = e.stateNode;
            try {
              en(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Xc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (il = !0);
          break;
        case 6:
          if ((_l(t, e), bl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            (r = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = vl),
            (vl = gf(t.containerInfo)),
            _l(t, e),
            (vl = a),
            bl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          il && ((il = !1), xl(e));
          break;
        case 4:
          (r = vl), (vl = gf(e.stateNode.containerInfo)), _l(t, e), bl(e), (vl = r);
          break;
        case 12:
          _l(t, e), bl(e);
          break;
        case 31:
          _l(t, e),
            bl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), gl(e, r)));
          break;
        case 13:
          _l(t, e),
            bl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (eu = Pe()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), gl(e, r)));
          break;
        case 22: {
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = nl,
            d = rl;
          if (((nl = u || a), (rl = d || l), _l(t, e), (rl = d), (nl = u), bl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || nl || rl || Cl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      (s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`);
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p = f != null && Object.hasOwn(f, `display`) ? f.display : null;
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), gl(e, n))));
          break;
        }
        case 19:
          _l(t, e),
            bl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), gl(e, r)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          _l(t, e), bl(e);
      }
    }
    function bl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Zc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27: {
              var a = n.stateNode;
              el(e, Qc(e), a);
              break;
            }
            case 5: {
              var o = n.stateNode;
              n.flags & 32 && (en(o, ``), (n.flags &= -33)), el(e, Qc(e), o);
              break;
            }
            case 3:
            case 4: {
              var s = n.stateNode.containerInfo;
              $c(e, Qc(e), s);
              break;
            }
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function xl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          xl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling);
        }
    }
    function Sl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) cl(e, t.alternate, t), (t = t.sibling);
    }
    function Cl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Wc(4, t, t.return), Cl(t);
            break;
          case 1: {
            Jc(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == `function` && Kc(t, t.return, n), Cl(t);
            break;
          }
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            Jc(t, t.return), Cl(t);
            break;
          case 22:
            t.memoizedState === null && Cl(t);
            break;
          case 30:
            Cl(t);
            break;
          default:
            Cl(t);
        }
        e = e.sibling;
      }
    }
    function wl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            wl(i, a, n), Uc(4, a);
            break;
          case 1:
            if ((wl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) eo(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            n && o & 64 && Gc(a), qc(a, a.return);
            break;
          case 27:
            tl(a);
          case 26:
          case 5:
            wl(i, a, n), n && r === null && o & 4 && Yc(a), qc(a, a.return);
            break;
          case 12:
            wl(i, a, n);
            break;
          case 31:
            wl(i, a, n), n && o & 4 && pl(i, a);
            break;
          case 13:
            wl(i, a, n), n && o & 4 && ml(i, a);
            break;
          case 22:
            a.memoizedState === null && wl(i, a, n), qc(a, a.return);
            break;
          case 30:
            break;
          default:
            wl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Tl(e, t) {
      var n = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ma(n));
    }
    function El(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ma(e));
    }
    function Dl(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Ol(e, t, n, r), (t = t.sibling);
    }
    function Ol(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Dl(e, t, n, r), i & 2048 && Uc(9, t);
          break;
        case 1:
          Dl(e, t, n, r);
          break;
        case 3:
          Dl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ma(e)));
          break;
        case 12:
          if (i & 2048) {
            Dl(e, t, n, r), (e = t.stateNode);
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Dl(e, t, n, r);
          break;
        case 31:
          Dl(e, t, n, r);
          break;
        case 13:
          Dl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Dl(e, t, n, r)
                : ((a._visibility |= 2), kl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? Dl(e, t, n, r)
                : Al(e, t),
            i & 2048 && Tl(o, t);
          break;
        case 24:
          Dl(e, t, n, r), i & 2048 && El(t.alternate, t);
          break;
        default:
          Dl(e, t, n, r);
      }
    }
    function kl(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            kl(a, o, s, c, i), Uc(8, o);
            break;
          case 23:
            break;
          case 22: {
            var u = o.stateNode;
            o.memoizedState === null
              ? ((u._visibility |= 2), kl(a, o, s, c, i))
              : u._visibility & 2
                ? kl(a, o, s, c, i)
                : Al(a, o),
              i && l & 2048 && Tl(o.alternate, o);
            break;
          }
          case 24:
            kl(a, o, s, c, i), i && l & 2048 && El(o.alternate, o);
            break;
          default:
            kl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Al(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              Al(n, r), i & 2048 && Tl(r.alternate, r);
              break;
            case 24:
              Al(n, r), i & 2048 && El(r.alternate, r);
              break;
            default:
              Al(n, r);
          }
          t = t.sibling;
        }
    }
    var jl = 8192;
    function Ml(e, t, n) {
      if (e.subtreeFlags & jl) for (e = e.child; e !== null; ) Nl(e, t, n), (e = e.sibling);
    }
    function Nl(e, t, n) {
      switch (e.tag) {
        case 26:
          Ml(e, t, n),
            e.flags & jl && e.memoizedState !== null && Gf(n, vl, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Ml(e, t, n);
          break;
        case 3:
        case 4: {
          var r = vl;
          (vl = gf(e.stateNode.containerInfo)), Ml(e, t, n), (vl = r);
          break;
        }
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = jl), (jl = 16777216), Ml(e, t, n), (jl = r))
              : Ml(e, t, n));
          break;
        default:
          Ml(e, t, n);
      }
    }
    function Pl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (ol = r), Rl(r, e);
          }
        Pl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Il(e), (e = e.sibling);
    }
    function Il(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fl(e), e.flags & 2048 && Wc(9, e, e.return);
          break;
        case 3:
          Fl(e);
          break;
        case 12:
          Fl(e);
          break;
        case 22: {
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Ll(e))
            : Fl(e);
          break;
        }
        default:
          Fl(e);
      }
    }
    function Ll(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (ol = r), Rl(r, e);
          }
        Pl(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            Wc(8, t, t.return), Ll(t);
            break;
          case 22:
            (n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Ll(t));
            break;
          default:
            Ll(t);
        }
        e = e.sibling;
      }
    }
    function Rl(e, t) {
      for (; ol !== null; ) {
        var n = ol;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Wc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ma(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) (r.return = n), (ol = r);
        else
          for (n = e; ol !== null; ) {
            r = ol;
            var i = r.sibling,
              a = r.return;
            if ((ll(r), r === n)) {
              ol = null;
              break;
            }
            if (i !== null) {
              (i.return = a), (ol = i);
              break;
            }
            ol = a;
          }
      }
    }
    var zl = {
        getCacheForType: (e) => {
          var t = oa(fa),
            n = t.data.get(e);
          return n === void 0 && ((n = e()), t.data.set(e, n)), n;
        },
        cacheSignal: () => oa(fa).controller.signal,
      },
      Bl = typeof WeakMap == `function` ? WeakMap : Map,
      W = 0,
      G = null,
      K = null,
      q = 0,
      J = 0,
      Vl = null,
      Hl = !1,
      Ul = !1,
      Wl = !1,
      Gl = 0,
      Y = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = null,
      Ql = null,
      $l = !1,
      eu = 0,
      tu = 0,
      nu = 1 / 0,
      ru = null,
      iu = null,
      au = 0,
      ou = null,
      su = null,
      cu = 0,
      lu = 0,
      uu = null,
      du = null,
      fu = 0,
      pu = null;
    function X() {
      return W & 2 && q !== 0 ? q & -q : D.T === null ? ft() : dd();
    }
    function mu() {
      if (Yl === 0)
        if (!(q & 536870912) || N) {
          var e = Ze;
          (Ze <<= 1), !(Ze & 3932160) && (Ze = 262144), (Yl = e);
        } else Yl = 536870912;
      return (e = so.current), e !== null && (e.flags |= 32), Yl;
    }
    function hu(e, t, n) {
      ((e === G && (J === 2 || J === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, q, Yl, !1)),
        at(e, n),
        (!(W & 2) || e !== G) &&
          (e === G && (!(W & 2) && (ql |= n), Y === 4 && yu(e, q, Yl, !1)), rd(e));
    }
    function gu(e, t, n) {
      if (W & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || tt(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Ul && !r && yu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !vu(n))) {
          (a = Ou(e, t, !1)), (o = !1);
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            (s = e.pendingLanes & -536870913), (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s);
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = Zl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)) {
                if (Wl && !l) {
                  (c.errorRecoveryDisabledLanes |= o), (ql |= o), (a = 4);
                  break a;
                }
                (o = Ql), (Ql = a), o !== null && (Ql === null ? (Ql = o) : Ql.push.apply(Ql, o));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          Su(e, 0), yu(e, t, 0, !0);
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yu(r, t, Yl, !Hl);
              break a;
            case 2:
              Ql = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = eu + 300 - Pe()), 10 < a)) {
            if ((yu(r, t, Yl, !Hl), et(r, 0, !0) !== 0)) break a;
            (cu = t),
              (r.timeoutHandle = Kd(
                _u.bind(null, r, n, Ql, ru, $l, t, Yl, ql, Xl, Hl, o, `Throttled`, -0, 0),
                a,
              ));
            break a;
          }
          _u(r, n, Ql, ru, $l, t, Yl, ql, Xl, Hl, o, null, -0, 0);
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        (d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: ln,
        }),
          Nl(t, a, d);
        var m = (a & 62914560) === a ? eu - Pe() : (a & 4194048) === a ? tu - Pe() : 0;
        if (((m = qf(d, m)), m !== null)) {
          (cu = a),
            (e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            yu(e, a, o, !l);
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Ar(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      (t &= ~Jl),
        (t &= ~ql),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var i = t; 0 < i; ) {
        var a = 31 - Ke(i),
          o = 1 << a;
        (r[a] = -1), (i &= ~o);
      }
      n !== 0 && st(e, n, t);
    }
    function bu() {
      return W & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (K !== null) {
        if (J === 0) var e = K.return;
        else (e = K), (Qi = Zi = null), No(e), (La = null), (Ra = 0), (e = K);
        for (; e !== null; ) Hc(e.alternate, e), (e = e.return);
        K = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (cu = 0),
        xu(),
        (G = e),
        (K = n = _i(e.current, null)),
        (q = t),
        (J = 0),
        (Vl = null),
        (Hl = !1),
        (Ul = tt(e, t)),
        (Wl = !1),
        (Xl = Yl = Jl = ql = Kl = Y = 0),
        (Ql = Zl = null),
        ($l = !1),
        t & 8 && (t |= t & 32);
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ke(r),
            a = 1 << i;
          (t |= e[i]), (r &= ~a);
        }
      return (Gl = t), si(), n;
    }
    function Cu(e, t) {
      (L = null),
        (D.H = B),
        t === Da || t === ka
          ? ((t = Fa()), (J = 3))
          : t === Oa
            ? ((t = Fa()), (J = 4))
            : (J = t === ic ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Vl = t),
        K === null && ((Y = 1), Qs(e, Ti(t, e.current)));
    }
    function wu() {
      var e = so.current;
      return e === null
        ? !0
        : (q & 4194048) === q
          ? co === null
          : (q & 62914560) === q || q & 536870912
            ? e === co
            : !1;
    }
    function Tu() {
      var e = D.H;
      return (D.H = B), e === null ? B : e;
    }
    function Eu() {
      var e = D.A;
      return (D.A = zl), e;
    }
    function Du() {
      (Y = 4),
        Hl || ((q & 4194048) !== q && so.current !== null) || (Ul = !0),
        (!(Kl & 134217727) && !(ql & 134217727)) || G === null || yu(G, q, Yl, !1);
    }
    function Ou(e, t, n) {
      var r = W;
      W |= 2;
      var i = Tu(),
        a = Eu();
      (G !== e || q !== t) && ((ru = null), Su(e, t)), (t = !1);
      var o = Y;
      a: do
        try {
          if (J !== 0 && K !== null) {
            var s = K,
              c = Vl;
            switch (J) {
              case 8:
                xu(), (o = 6);
                break a;
              case 3:
              case 2:
              case 9:
              case 6: {
                so.current === null && (t = !0);
                var l = J;
                if (((J = 0), (Vl = null), Pu(e, s, c, l), n && Ul)) {
                  o = 0;
                  break a;
                }
                break;
              }
              default:
                (l = J), (J = 0), (Vl = null), Pu(e, s, c, l);
            }
          }
          ku(), (o = Y);
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Qi = Zi = null),
        (W = r),
        (D.H = i),
        (D.A = a),
        K === null && ((G = null), (q = 0), si()),
        o
      );
    }
    function ku() {
      for (; K !== null; ) Mu(K);
    }
    function Au(e, t) {
      var n = W;
      W |= 2;
      var r = Tu(),
        a = Eu();
      G !== e || q !== t ? ((ru = null), (nu = Pe() + 500), Su(e, t)) : (Ul = tt(e, t));
      a: do
        try {
          if (J !== 0 && K !== null) {
            t = K;
            var o = Vl;
            b: switch (J) {
              case 1:
                (J = 0), (Vl = null), Pu(e, t, o, 1);
                break;
              case 2:
              case 9:
                if (ja(o)) {
                  (J = 0), (Vl = null), Nu(t);
                  break;
                }
                (t = () => {
                  (J !== 2 && J !== 9) || G !== e || (J = 7), rd(e);
                }),
                  o.then(t, t);
                break a;
              case 3:
                J = 7;
                break a;
              case 4:
                J = 5;
                break a;
              case 7:
                ja(o) ? ((J = 0), (Vl = null), Nu(t)) : ((J = 0), (Vl = null), Pu(e, t, o, 7));
                break;
              case 5: {
                var s = null;
                switch (K.tag) {
                  case 26:
                    s = K.memoizedState;
                  case 5:
                  case 27: {
                    var c = K;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      (J = 0), (Vl = null);
                      var l = c.sibling;
                      if (l !== null) K = l;
                      else {
                        var u = c.return;
                        u === null ? (K = null) : ((K = u), Fu(u));
                      }
                      break b;
                    }
                  }
                }
                (J = 0), (Vl = null), Pu(e, t, o, 5);
                break;
              }
              case 6:
                (J = 0), (Vl = null), Pu(e, t, o, 6);
                break;
              case 8:
                xu(), (Y = 6);
                break a;
              default:
                throw Error(i(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (Qi = Zi = null),
        (D.H = r),
        (D.A = a),
        (W = n),
        K === null ? ((G = null), (q = 0), si(), Y) : 0
      );
    }
    function ju() {
      for (; K !== null && !Me(); ) Mu(K);
    }
    function Mu(e) {
      var t = Pc(e.alternate, e, Gl);
      (e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (K = t);
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = vc(n, t, t.pendingProps, t.type, void 0, q);
          break;
        case 11:
          t = vc(n, t, t.pendingProps, t.type.render, t.ref, q);
          break;
        case 5:
          No(t);
        default:
          Hc(n, t), (t = K = vi(t, Gl)), (t = Pc(n, t, Gl));
      }
      (e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (K = t);
    }
    function Pu(e, t, n, r) {
      (Qi = Zi = null), No(t), (La = null), (Ra = 0);
      var i = t.return;
      try {
        if (rc(e, i, t, n, q)) {
          (Y = 1), Qs(e, Ti(n, e.current)), (K = null);
          return;
        }
      } catch (t) {
        if (i !== null) throw ((K = i), t);
        (Y = 1), Qs(e, Ti(n, e.current)), (K = null);
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : Ul || q & 536870912
              ? (e = !1)
              : ((Hl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = so.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Hl);
          return;
        }
        e = t.return;
        var n = Bc(t.alternate, t, Gl);
        if (n !== null) {
          K = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          K = t;
          return;
        }
        K = t = e;
      } while (t !== null);
      Y === 0 && (Y = 5);
    }
    function Iu(e, t) {
      do {
        var n = Vc(e.alternate, e);
        if (n !== null) {
          (n.flags &= 32767), (K = n);
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          K = e;
          return;
        }
        K = e = n;
      } while (e !== null);
      (Y = 6), (K = null);
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (au !== 0);
      if (W & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= oi),
          ot(e, n, o, s, c, l),
          e === G && ((K = G = null), (q = 0)),
          (su = t),
          (ou = e),
          (cu = n),
          (lu = o),
          (uu = a),
          (du = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null), (e.callbackPriority = 0), Xu(Re, () => (Uu(), null)))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          (r = D.T), (D.T = null), (a = O.p), (O.p = 2), (s = W), (W |= 4);
          try {
            sl(e, t, n);
          } finally {
            (W = s), (O.p = a), (D.T = r);
          }
        }
        (au = 1), Ru(), zu(), Bu();
      }
    }
    function Ru() {
      if (au === 1) {
        au = 0;
        var e = ou,
          t = su,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          (n = D.T), (D.T = null);
          var r = O.p;
          O.p = 2;
          var i = W;
          W |= 4;
          try {
            yl(t, e);
            var a = zd,
              o = Fr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Pr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Ir(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  (s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Nr(s, h),
                      v = Nr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
              }
            }
            (sp = !!Rd), (zd = Rd = null);
          } finally {
            (W = i), (O.p = r), (D.T = n);
          }
        }
        (e.current = t), (au = 2);
      }
    }
    function zu() {
      if (au === 2) {
        au = 0;
        var e = ou,
          t = su,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          (n = D.T), (D.T = null);
          var r = O.p;
          O.p = 2;
          var i = W;
          W |= 4;
          try {
            cl(e, t.alternate, t);
          } finally {
            (W = i), (O.p = r), (D.T = n);
          }
        }
        au = 3;
      }
    }
    function Bu() {
      if (au === 4 || au === 3) {
        (au = 0), Ne();
        var e = ou,
          t = su,
          n = cu,
          r = du;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (au = 5)
          : ((au = 0), (su = ou = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (iu = null),
          dt(n),
          (t = t.stateNode),
          We && typeof We.onCommitFiberRoot == `function`)
        )
          try {
            We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          (t = D.T), (i = O.p), (O.p = 2), (D.T = null);
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            (D.T = t), (O.p = i);
          }
        }
        cu & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === pu ? fu++ : ((fu = 0), (pu = e))) : (fu = 0),
          id(0, !1);
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ma(t)));
    }
    function Hu() {
      return Ru(), zu(), Bu(), Uu();
    }
    function Uu() {
      if (au !== 5) return !1;
      var e = ou,
        t = lu;
      lu = 0;
      var n = dt(cu),
        r = D.T,
        a = O.p;
      try {
        (O.p = 32 > n ? 32 : n), (D.T = null), (n = uu), (uu = null);
        var o = ou,
          s = cu;
        if (((au = 0), (su = ou = null), (cu = 0), W & 6)) throw Error(i(331));
        var c = W;
        if (
          ((W |= 4),
          Il(o.current),
          Ol(o, o.current, s, n),
          (W = c),
          id(0, !1),
          We && typeof We.onPostCommitFiberRoot == `function`)
        )
          try {
            We.onPostCommitFiberRoot(Ue, o);
          } catch {}
        return !0;
      } finally {
        (O.p = a), (D.T = r), Vu(e, t);
      }
    }
    function Wu(e, t, n) {
      (t = Ti(n, t)),
        (t = ec(e.stateNode, t, 2)),
        (e = Ja(e, t, 2)),
        e !== null && (at(e, 2), rd(e));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (iu === null || !iu.has(r)))
            ) {
              (e = Ti(n, e)),
                (n = tc(2)),
                (r = Ja(t, n, 2)),
                r !== null && (nc(n, r, t, e), at(r, 2), rd(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Bl();
        var i = new Set();
        r.set(t, i);
      } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
      i.has(n) || ((Wl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        G === e &&
          (q & n) === n &&
          (Y === 4 || (Y === 3 && (q & 62914560) === q && 300 > Pe() - eu)
            ? !(W & 2) && Su(e, 0)
            : (Jl |= n),
          Xl === q && (Xl = 0)),
        rd(e);
    }
    function qu(e, t) {
      t === 0 && (t = rt()), (e = ui(e, t)), e !== null && (at(e, t), rd(e));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane), qu(e, n);
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13: {
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        }
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      r !== null && r.delete(t), qu(e, n);
    }
    function Xu(e, t) {
      return Ae(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      e !== Qu && e.next === null && (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud());
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  (a = (1 << (31 - Ke(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0);
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                (a = q),
                  (a = et(
                    r,
                    r === G ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || tt(r, a) || ((n = !0), ld(r, a));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Pe(), n = null, r = Zu; r !== null; ) {
        var i = r.next,
          a = sd(r, t);
        a === 0
          ? ((r.next = null), n === null ? (Zu = i) : (n.next = i), i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i);
      }
      (au !== 0 && au !== 5) || id(e, !1), nd !== 0 && (nd = 0);
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ke(a),
          s = 1 << o,
          c = i[o];
        c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s);
      }
      if (
        ((t = G),
        (n = q),
        (n = et(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (J === 2 || J === 9)) || e.cancelPendingCommit !== null)
      )
        return r !== null && r !== null && je(r), (e.callbackNode = null), (e.callbackPriority = 0);
      if (!(n & 3) || tt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && je(r), dt(n))) {
          case 2:
          case 8:
            n = Le;
            break;
          case 32:
            n = Re;
            break;
          case 268435456:
            n = Be;
            break;
          default:
            n = Re;
        }
        return (
          (r = cd.bind(null, e)), (n = Ae(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t
        );
      }
      return (
        r !== null && r !== null && je(r), (e.callbackPriority = 2), (e.callbackNode = null), 2
      );
    }
    function cd(e, t) {
      if (au !== 0 && au !== 5) return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = q;
      return (
        (r = et(e, e === G ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Pe()),
            e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(() => {
        W & 6 ? Ae(Ie, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = _a;
        e === 0 && ((e = Xe), (Xe <<= 1), !(Xe & 261888) && (Xe = 256)), (nd = e);
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : cn(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[gt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[gt] || null) ? fd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new An(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: () => {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Os(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Os(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ti.length; hd++) {
      var gd = ti[hd];
      ni(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    ni(qr, `onAnimationEnd`),
      ni(Jr, `onAnimationIteration`),
      ni(Yr, `onAnimationStart`),
      ni(`dblclick`, `onDoubleClick`),
      ni(`focusin`, `onFocus`),
      ni(`focusout`, `onBlur`),
      ni(Xr, `onTransitionRun`),
      ni(Zr, `onTransitionStart`),
      ni(Qr, `onTransitionCancel`),
      ni($r, `onTransitionEnd`),
      Mt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Mt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Mt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Mt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      jt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      jt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      jt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      jt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      jt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      jt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      );
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d),
      );
    function yd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                ri(e);
              }
              (i.currentTarget = null), (a = c);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                ri(e);
              }
              (i.currentTarget = null), (a = c);
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[vt];
      n === void 0 && (n = t[vt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      t && (r |= 4), Cd(n, e, r, t);
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        (e[xd] = !0),
          kt.forEach((t) => {
            t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2: {
          var i = cp;
          break;
        }
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      (n = i.bind(null, t, n, e)),
        (i = void 0),
        !yn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i });
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = wt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      gn(() => {
        var r = a,
          i = dn(n),
          s = [];
        a: {
          var c = ei.get(e);
          if (c !== void 0) {
            var l = An,
              u = e;
            switch (e) {
              case `keypress`:
                if (Tn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Jn;
                break;
              case `focusin`:
                (u = `focus`), (l = zn);
                break;
              case `focusout`:
                (u = `blur`), (l = zn);
                break;
              case `beforeblur`:
              case `afterblur`:
                l = zn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Ln;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Rn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Xn;
                break;
              case qr:
              case Jr:
              case Yr:
                l = Bn;
                break;
              case $r:
                l = Zn;
                break;
              case `scroll`:
              case `scrollend`:
                l = Mn;
                break;
              case `wheel`:
                l = Qn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Vn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Yn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = $n;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = _n(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((c = new l(c, u, null, n, i)), s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c && n !== un && (u = n.relatedTarget || n.fromElement) && (wt(u) || u[_t]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? wt(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Ln),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Yn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : Et(l)),
                (h = u == null ? c : Et(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                wt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) (p = d(p)), h--;
                  for (; 0 < g - h; ) (m = d(m)), g--;
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    (p = d(p)), (m = d(m));
                  }
                  d = null;
                }
              else d = null;
              l !== null && Od(s, c, l, d, !1), u !== null && f !== null && Od(s, f, u, d, !0);
            }
          }
          a: {
            if (
              ((c = r ? Et(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = vr;
            else if (A(c))
              if (yr) v = Or;
              else {
                v = Er;
                var y = Tr;
              }
            else
              (l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && an(r.elementType) && (v = vr)
                  : (v = Dr);
            if ((v &&= v(e, r))) {
              pr(s, v, n, i);
              break a;
            }
            y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Xt(c, `number`, c.value);
          }
          switch (((y = r ? Et(r) : window), e)) {
            case `focusin`:
              (A(y) || y.contentEditable === `true`) && ((Rr = y), (zr = r), (Br = null));
              break;
            case `focusout`:
              Br = zr = Rr = null;
              break;
            case `mousedown`:
              Vr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              (Vr = !1), Hr(s, n, i);
              break;
            case `selectionchange`:
              if (Lr) break;
            case `keydown`:
            case `keyup`:
              Hr(s, n, i);
          }
          var b;
          if (tr)
            b: {
              switch (e) {
                case `compositionstart`: {
                  var x = `onCompositionStart`;
                  break b;
                }
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            lr
              ? sr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          x &&
            (ir &&
              n.locale !== `ko` &&
              (lr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && lr && (b = wn())
                : ((xn = i), (Sn = `value` in xn ? xn.value : xn.textContent), (lr = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Hn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = cr(n)), b !== null && (x.data = b)))),
            (b = rr ? ur(e, n) : dr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Hn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i);
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = _n(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = _n(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        (s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = _n(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = _n(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return);
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return (t = jd(t)), jd(e) === t;
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || en(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && en(e, `` + r);
          break;
        case `className`:
          Rt(e, `class`, r);
          break;
        case `tabIndex`:
          Rt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Rt(e, n, r);
          break;
        case `style`:
          rn(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Rt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = cn(`` + r)), e.setAttribute(n, r);
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = cn(`` + r)), e.setAttribute(n, r);
          break;
        case `onClick`:
          r != null && (e.onclick = ln);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          (n = cn(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          Q(`beforetoggle`, e), Q(`toggle`, e), Lt(e, `popover`, r);
          break;
        case `xlinkActuate`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          zt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Lt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = on.get(n) || n), Lt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          rn(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? en(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && en(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = ln);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Object.hasOwn(At, n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[gt] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                typeof o != `function` &&
                  o !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a);
                break a;
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Lt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`: {
          Q(`error`, e), Q(`load`, e);
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (Object.hasOwn(n, o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          a && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null);
          return;
        }
        case `input`: {
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (Object.hasOwn(n, r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Yt(e, o, c, l, u, s, a, !1);
          return;
        }
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (Object.hasOwn(n, a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          (t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Zt(e, !!r, n, !0) : Zt(e, !!r, t, !1);
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (Object.hasOwn(n, s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          $t(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (Object.hasOwn(n, l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e);
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          Q(`error`, e), Q(`load`, e);
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          Q(`error`, e), Q(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (Object.hasOwn(n, u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (an(t)) {
            for (d in n)
              Object.hasOwn(n, d) && ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) Object.hasOwn(n, c) && ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`: {
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (Object.hasOwn(n, m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  Object.hasOwn(r, m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), Object.hasOwn(r, p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Jt(e, s, c, l, u, d, o, a);
          return;
        }
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), Object.hasOwn(n, o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  Object.hasOwn(r, o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (((o = r[a]), (l = n[a]), Object.hasOwn(r, a) && (o != null || l != null)))
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          (t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Zt(e, !!n, n ? [] : ``, !1) : Zt(e, !!n, t, !0))
              : Zt(e, !!n, p, !1);
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((a = n[c]), Object.hasOwn(n, c) && a != null && !Object.hasOwn(r, c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (((a = r[s]), (o = n[s]), Object.hasOwn(r, s) && (a != null || o != null)))
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Qt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), Object.hasOwn(n, h) && p != null && !Object.hasOwn(r, h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), Object.hasOwn(r, l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            (p = n[g]),
              Object.hasOwn(n, g) && p != null && !Object.hasOwn(r, g) && $(e, t, g, null, r, p);
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), Object.hasOwn(r, u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (an(t)) {
            for (var _ in n)
              (p = n[_]),
                Object.hasOwn(n, _) &&
                  p !== void 0 &&
                  !Object.hasOwn(r, _) &&
                  Nd(e, t, _, void 0, r, p);
            for (d in r)
              (p = r[d]),
                (m = n[d]),
                !Object.hasOwn(r, d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m);
            return;
          }
      }
      for (var v in n)
        (p = n[v]),
          Object.hasOwn(n, v) && p != null && !Object.hasOwn(r, v) && $(e, t, v, null, r, p);
      for (f in r)
        (p = r[f]),
          (m = n[f]),
          !Object.hasOwn(r, f) || p === m || (p == null && m == null) || $(e, t, f, p, r, m);
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && Id(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== Wd && ((Wd = e), !0) : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : (e) => Jd.resolve(null).then(e).catch(Xd);
    function Xd(e) {
      setTimeout(() => {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              e.removeChild(i), Np(t);
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            (n = e.ownerDocument.head), pf(n);
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              a[St] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o);
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ef(n), Ct(n);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[St])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = () => {
          t(), n.removeEventListener(`DOMContentLoaded`, r);
        };
        n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r);
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Ct(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = O.d;
    O.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = Tt(e);
      t !== null && t.tag === 5 && t.type === `form` ? As(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = qt(t);
        (i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Pd(t, `link`, e), Ot(t), r.head.appendChild(t)));
      }
    }
    function Sf(e) {
      _f.D(e), xf(`dns-prefetch`, e, null);
    }
    function Cf(e, t) {
      _f.C(e, t), xf(`preconnect`, e, t);
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + qt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + qt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + qt(n.imageSizes) + `"]`))
          : (i += `[href="` + qt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)), Pd(t, `link`, e), Ot(t), r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + qt(r) + `"][href="` + qt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)), mf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          (r = n.createElement(`link`)), Pd(r, `link`, e), Ot(r), n.head.appendChild(r);
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = Dt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            (e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n);
            var c = (o = r.createElement(`link`));
            Ot(c),
              Pd(c, `link`, e),
              (c._p = new Promise((e, t) => {
                (c.onload = e), (c.onerror = t);
              })),
              c.addEventListener(`load`, () => {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, () => {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r);
          }
          (o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o);
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = Dt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Ot(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = Dt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Ot(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = ge.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Dt(a).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = Dt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Dt(a).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + qt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, () => (r.loading |= 1)),
          t.addEventListener(`error`, () => (r.loading |= 2)),
          Pd(t, `link`, n),
          Ot(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + qt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`: {
            var r = e.querySelector(`style[data-href~="` + qt(n.href) + `"]`);
            if (r) return (t.instance = r), Ot(r), r;
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Ot(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          }
          case `stylesheet`: {
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return (t.state.loading |= 4), (t.instance = o), Ot(o), o;
            (r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Ot(o);
            var s = o;
            return (
              (s._p = new Promise((e, t) => {
                (s.onload = e), (s.onerror = t);
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          }
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), Ot(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = h({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Ot(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title);
    }
    function zf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity);
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else (i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[St] || a[ht] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null);
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (e = t.disabled), typeof t.precedence == `string` && e == null;
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            (t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Ot(a);
            return;
          }
          (a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            Ot(a);
          var o = a;
          (o._p = new Promise((e, t) => {
            (o.onload = e), (o.onerror = t);
          })),
            Pd(a, `link`, r),
            (n.instance = a);
        }
        e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? (n) => {
              var r = setTimeout(() => {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                () => {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    (e.unsuspend = null), t();
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                () => {
                  (e.unsuspend = null), clearTimeout(r), clearTimeout(i);
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (Yf = new Map()), t.forEach(Zf, e), (Yf = null), Jf.call(e));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), Yf.set(e, n);
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        (i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: le,
      _currentValue2: le,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = it(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = it(0)),
        (this.hiddenUpdates = it(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map());
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = hi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = pa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ga(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = pi), e) : pi;
    }
    function np(e, t, n, r, i, a) {
      (i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = qa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ja(e, r, t)),
        n !== null && (hu(n, e, t), Ya(n, e, t));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      rp(e, t), (e = e.alternate) && rp(e, t);
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ui(e, 67108864);
        t !== null && hu(t, e, 67108864), ip(e, 67108864);
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = X();
        t = ut(t);
        var n = ui(e, t);
        n !== null && hu(n, e, t), ip(e, t);
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        (O.p = 2), up(e, t, n, r);
      } finally {
        (O.p = a), (D.T = i);
      }
    }
    function lp(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        (O.p = 8), up(e, t, n, r);
      } finally {
        (O.p = a), (D.T = i);
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) wd(e, t, r, fp, n), Cp(e, r);
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = Tt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = $e(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ke(o));
                        (s.entanglements[1] |= c), (o &= ~c);
                      }
                      rd(a), !(W & 6) && ((nu = Pe() + 500), id(0, !1));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (s = ui(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2);
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return (e = dn(e)), pp(e);
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = wt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (fp = e), null;
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Fe()) {
            case Ie:
              return 2;
            case Le:
              return 8;
            case Re:
            case ze:
              return 32;
            case Be:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Tt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return (gp = wp(gp, e, t, n, r, i)), !0;
        case `dragenter`:
          return (_p = wp(_p, e, t, n, r, i)), !0;
        case `mouseover`:
          return (vp = wp(vp, e, t, n, r, i)), !0;
        case `pointerover`: {
          var a = i.pointerId;
          return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
        }
        case `gotpointercapture`:
          return (a = i.pointerId), bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
      }
      return !1;
    }
    function Ep(e) {
      var t = wt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              (e.blockedOn = t),
                pt(e.priority, () => {
                  op(n);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              (e.blockedOn = t),
                pt(e.priority, () => {
                  op(n);
                });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (un = r), n.target.dispatchEvent(r), (un = null);
        } else return (t = Tt(n)), t !== null && ap(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      (hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op);
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp || ((hp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, () => {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = Tt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Os(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t);
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        Ep(n), n.blockedOn === null && xp.shift();
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[gt] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[gt] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Mp(n);
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: () => new Promise((e) => (i = e)),
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        i !== null && (i(), (i = null)), r || setTimeout(n, 20);
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          () => {
            (r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    (Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, X(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            np(e.current, 2, null, e, null, null), bu(), (t[_t] = null);
          }
        });
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = (e) => {
      if (e) {
        var t = ft();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        xp.splice(n, 0, e), n === 0 && Ep(e);
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.8`) throw Error(i(527, Lp, `19.2.8`));
    O.findDOMNode = (e) => {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (e = d(t)), (e = e === null ? null : p(e)), (e = e === null ? null : e.stateNode), e;
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: D,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          (Ue = zp.inject(Rp)), (We = zp);
        } catch {}
    }
    e.hydrateRoot = (e, t, n) => {
      if (!a(e)) throw Error(i(299));
      var r = !1,
        o = ``,
        s = Ys,
        c = Xs,
        l = Zs,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = ep(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Pp)),
        (t.context = tp(null)),
        (n = t.current),
        (r = X()),
        (r = ut(r)),
        (o = qa(r)),
        (o.callback = null),
        Ja(n, o, r),
        (n = r),
        (t.current.lanes = n),
        at(t, n),
        rd(t),
        (e[_t] = t.current),
        Sd(e),
        new Ip(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = h());
  }),
  _ = `__TSS_CONTEXT`,
  v = Symbol.for(`TSS_SERVER_FUNCTION`),
  y = `application/x-tss-framed`;
`${y}`;
var b = () => window.__TSS_START_OPTIONS__;
function x(e) {
  return e?.isNotFound === !0;
}
function S(e) {
  e.statusCode = e.statusCode || e.code || 307;
  const t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  const n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function C(e) {
  return e instanceof Response && !!e.options;
}
function w(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return S(e);
}
function ee(e) {
  return e
    .replaceAll(`\0`, `/`)
    .replaceAll(`�`, `/`)
    .replace(/~([~0r])/g, (e, t) => (t === `0` ? `\0` : t === `r` ? `�` : t));
}
function T(e) {
  return e[e.length - 1];
}
function te(e, t) {
  return typeof e == `function` ? e(t) : e;
}
var E = Object.prototype.hasOwnProperty;
function ne(e) {
  for (const t in e) if (E.call(e, t)) return !0;
  return !1;
}
var re = () => Object.create(null),
  ie = (e, t) => ae(e, t, !0);
function ae(e, t, n, r = 0) {
  if (e === t) return e;
  if (r++ > 500) return t;
  const i = Array.isArray(e) && Array.isArray(t);
  if (!i && !(oe(e) && oe(t))) return t;
  const a = Object.keys(e),
    o = a.length,
    s = Object.keys(t),
    c = s.length;
  if (
    i
      ? o !== e.length || c !== t.length || (o && T(a) !== `${o - 1}`) || (c && T(s) !== `${c - 1}`)
      : o !== Object.getOwnPropertyNames(e).length ||
        c !== Object.getOwnPropertyNames(t).length ||
        Object.getOwnPropertySymbols(t).length
  )
    return t;
  let l = 0,
    u,
    d,
    f;
  if (i) {
    for (
      ;
      l < c &&
      ((f = l),
      (d = e[f]),
      (u = t[f]),
      (u = d === u ? d : typeof d == `object` ? ae(d, u, n, r) : u),
      u === d);
      l++
    );
    if (l === c && o === c) return e;
  } else {
    let i = o === c,
      p = !0;
    for (; l < c; l++) {
      (f = s[l]), (d = e[f]);
      const o = t[f];
      (u = d === o ? d : typeof d == `object` ? ae(d, o, n, r) : o),
        (i &&= u === d && (a[l] === f || E.call(e, f))),
        (p &&= Object.is(u, o)),
        (a[l] = u);
    }
    if (i) return Object.getOwnPropertySymbols(e).length ? t : e;
    if (p) return t;
  }
  const p = i ? s.fill(0) : n ? re() : {};
  for (let o = 0; o < c; o++)
    (f = i ? o : s[o]),
      i
        ? ((d = e[f]),
          o > l && ((u = t[f]), (u = d === u ? d : typeof d == `object` ? ae(d, u, n, r) : u)),
          (p[f] = o < l ? d : u))
        : (p[f] = a[o]);
  return p;
}
function oe(e) {
  return !e || typeof e != `object`
    ? !1
    : (Object.getPrototypeOf(e)?.constructor ?? Object) === Object;
}
function se(e, t, n, r) {
  if (e === t) return !0;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let i = 0, a = e.length; i < a; i++) {
      const a = e[i],
        o = t[i];
      if (a !== o && !se(a, o, n, r)) return !1;
    }
    return !0;
  }
  if (oe(e) && oe(t)) {
    if (n) {
      for (const i in t) if ((r || t[i] !== void 0) && !se(e[i], t[i], n, r)) return !1;
      return !0;
    }
    let i = 0;
    if (r) i = Object.keys(e).length;
    else for (const t in e) e[t] !== void 0 && i++;
    for (const a in t)
      if ((r || t[a] !== void 0) && (i-- === 0 || !se(e[a], t[a], n, r))) return !1;
    return i === 0;
  }
  return !1;
}
function ce(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
var D = /[\x00-\x1f\x7f"<>`{}]/g;
function O(e) {
  return e.replace(D, (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`));
}
function le(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return O(t);
}
var ue = [`http:`, `https:`, `mailto:`, `tel:`];
function de(e) {
  if (e[0] !== `/` && e.includes(`:`))
    return /^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i
      .exec(e)?.[1]
      ?.replace(/[\t\n\r]/g, ``)
      .toLowerCase();
}
var fe = /^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/;
function pe(e, t) {
  if (!e) return !1;
  if (fe.test(e)) return !0;
  const n = de(e);
  return n ? !t.has(n) : !1;
}
var k = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  me = /[&><\u2028\u2029]/g;
function he(e) {
  return e.replace(me, (e) => k[e]);
}
function ge(e) {
  if (!e) return e;
  let t = e;
  if (/[%\\\x00-\x1f\x7f]/.test(e)) {
    let n = /%25|%5C/gi,
      r = 0,
      i;
    for (t = ``; (i = n.exec(e)) !== null; )
      (t += le(e.slice(r, i.index)) + i[0]), (r = n.lastIndex);
    t += le(r ? e.slice(r) : e);
  }
  return t;
}
function _e(e) {
  return /[\s\u0080-\uFFFF]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function ve(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function ye(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function be(e) {
  return e === `/` ? e : e.replace(/^\/+/, ``);
}
function xe(e) {
  const t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/+$/, ``) : e;
}
function Se(e) {
  return xe(be(e));
}
function Ce(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function we(e, t, n = `never`, r) {
  if ((t.includes(`//`) && (t = ye(t)), t.startsWith(`/`)))
    return t.length === 1 || n === `preserve`
      ? t
      : n === `always`
        ? t.endsWith(`/`)
          ? t
          : `${t}/`
        : t.endsWith(`/`)
          ? t.slice(0, -1)
          : t;
  let i = t === `.`,
    a;
  if (r) {
    a = i ? e : e + `\0` + t;
    const n = r.get(a);
    if (n) return n;
  }
  let o;
  if (i) o = e.split(`/`);
  else {
    for (e.includes(`//`) && (e = ye(e)), o = e.split(`/`); o.length > 1 && T(o) === ``; ) o.pop();
    const n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      const r = n[e];
      r === ``
        ? e
          ? e === t - 1 && o.push(r)
          : (o = [r])
        : r === `..`
          ? o.length > 1
            ? o.pop()
            : (o = [``])
          : r === `.` || o.push(r);
    }
  }
  o.length > 1 && (T(o) === `` ? n === `never` && o.pop() : n === `always` && o.push(``));
  const s = o.join(`/`),
    c = (i ? ye(s) : s) || `/`;
  return a && r && r.set(a, c), c;
}
function Te(e) {
  const t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g, `\\$&`), `g`);
  return (e) => e.replace(n, (e) => t.get(e) ?? e);
}
function Ee(e) {
  return e == null || e === ``;
}
function De(e, t, n) {
  if (typeof t != `string`) return `` + (t ?? void 0);
  const r = e === `_splat`;
  if (r && (!t || /^[a-zA-Z0-9\-._~!/]*$/.test(t))) return t;
  let i = encodeURIComponent(t);
  return r && (i = i.replaceAll(`%2F`, `/`)), n ? n(i) : i;
}
function Oe(e, t, n, r, i) {
  let a = e.endsWith(`/`) ? `/` : ``,
    o = ``;
  for (const e of t) {
    if (typeof e == `string`) {
      o += e;
      continue;
    }
    let [t, s, c, l] = e,
      u = t === 2,
      d = u && l !== void 0 ? l + a : l,
      f = n[s];
    if (t !== 3 || f != null) {
      if ((i && ((i[s] = f), u && (i[`*`] = f)), u && Ee(f))) {
        if (c === `/` && !d) continue;
        f = ``;
      }
      o += c + De(s, f, r) + (d || ``);
    }
  }
  return o + a || `/`;
}
function ke(e) {
  let t = new Map(),
    n,
    r;
  return {
    get(e) {
      const n = t.get(e);
      if (n) return (n.visited = !0), n.value;
    },
    set(i, a) {
      const o = t.get(i);
      if (o) {
        o.value = a;
        return;
      }
      if (t.size >= e) {
        let e = n?.next().value;
        for (; !e || e.visited; ) e ? (e.visited = !1) : (n = t.values()), (e = n.next().value);
        e === r && (n = void 0), t.delete(e.key);
      }
      const s = { key: i, value: a, visited: !1 };
      (r = s), t.set(i, s);
    },
    clear() {
      t.clear(), (n = void 0), (r = void 0);
    },
  };
}
function Ae() {
  throw Error(`Invariant failed`);
}
var je = 4,
  Me = 5;
function Ne(e) {
  const t = e.names;
  if (t) return t;
  const n = [];
  for (const t of e) typeof t != `string` && n.push(t[1]);
  return (e.names = n);
}
function Pe(e, t, n) {
  const r = e.substring(t, n);
  if (r.charCodeAt(0) === 36)
    return r.length === 1 ? [2, `_splat`, ``, void 0] : [1, r.substring(1), ``, ``];
  const i = r.indexOf(`{`);
  if (i >= 0) {
    const a = r.indexOf(`}`, i),
      o = r.charCodeAt(i + 1) === 45,
      s = i + (o ? 3 : 2);
    if (a >= 0 && r.charCodeAt(s - 1) === 36 && (!o || s < a)) {
      const c = r.substring(s, a);
      return [
        o ? 3 : c ? 1 : 2,
        c || `_splat`,
        r.substring(0, i),
        e.substring(t + a + 1, c ? n : e.length),
      ];
    }
  }
  return r;
}
function Fe(e, t, n, r, i, a) {
  let o = n,
    s = t.fullPath ?? t.from,
    c = t.options,
    l = s.length,
    u = s.endsWith(`/`) ? l - 1 : l,
    d = c?.caseSensitive ?? e,
    f = c?.params?.parse ?? c?.parseParams,
    p,
    m = a ? n - 1 : 0;
  if (!r || s.includes(`$`)) {
    p = a?.slice() ?? [];
    const e = T(p);
    e &&
      typeof e != `string` &&
      e[0] === 2 &&
      ((p[p.length - 1] = [
        e[0],
        e[1],
        e[2],
        e[3] === void 0 ? void 0 : e[3] + s.substring(n - (s[n - 2] === `/` ? 2 : 1), u),
      ]),
      (m = l));
  }
  for (; o < l; ) {
    let e = o,
      t = s.indexOf(`/`, e),
      n = t === -1 ? l : t,
      a = Pe(s, e, n);
    o = n + 1;
    let c;
    if (typeof a == `string`) {
      if (!r) continue;
      let e = a,
        t;
      d
        ? (t = r.static ??= new Map())
        : ((e = a.toLowerCase()), (t = r.staticInsensitive ??= new Map()));
      const n = t.get(e);
      if (n) c = n;
      else {
        const n = Le(r);
        (c = n), t.set(e, n);
      }
    } else {
      let t = a[0],
        h = a[2],
        g = a[3] ?? ``;
      if (
        (t === 2 && ((n = l), (o = n + 1)),
        p &&
          m < n &&
          (m < e - 1 && p.push(s.substring(m, e - 1)),
          (a[2] = `/` + h),
          t === 2 && a[3] !== void 0 && u < l && (a[3] = g.slice(0, -1)),
          p.push(a),
          (m = n)),
        !r)
      )
        continue;
      const _ = d && !!(h || g);
      d || ((h = h.toLowerCase()), (g = g.toLowerCase()));
      const v = t === 1 ? (r.dynamic ??= []) : t === 3 ? (r.optional ??= []) : (r.wildcard ??= []),
        y =
          t !== 2 &&
          !f &&
          v.find((e) => !e.parse && e.caseSensitive === _ && e.prefix === h && e.suffix === g);
      if (y) c = y;
      else {
        const e = Le(r, t, _, h, g);
        (c = e), v.push(e), v.length === 2 && i?.push(v);
      }
    }
    r = c;
  }
  p && m < u && p.push(s.substring(m, u));
  const h = p?.slice();
  if (!r) return h;
  if (f && t.children && !t.isRoot && t.id && t.id.charCodeAt(t.id.lastIndexOf(`/`) + 1) === 95) {
    const e = Le(r, Me);
    (r.pathless ??= []).push(e), (r = e);
  }
  const g = (t.path || !t.children) && !t.isRoot;
  if (g && u < l) {
    const e = Le(r, je);
    (r.index = e), (r = e);
  }
  return (
    (r.parse = f ?? null),
    (r.priority = c?.params?.priority ?? 0),
    r.route || ((r.data = h), g && (r.route = t)),
    [r, o, h]
  );
}
function Ie(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function Le(e, t = 0, n, r, i) {
  return {
    kind: t,
    depth: e ? e.depth + 1 : 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    data: void 0,
    parent: e,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Re(e, t) {
  const n = Le(),
    r = [];
  function i(e, t, n, a) {
    const [o, s, c] = Fe(!1, e, t, n, r, a);
    if (e.children) for (const t of e.children) i(t, s, o, c);
  }
  for (const t of e) i(t, 1, n);
  for (const e of r) e.sort(Ie);
  (t.masksTree = n), (t.flatCache = ke(1e3));
}
function ze(e, t) {
  e ||= `/`;
  const n = t.flatCache.get(e);
  if (n !== void 0) return n;
  const r = Ue(e, t.masksTree);
  return t.flatCache.set(e, r), r;
}
function Be(e, t, n, r, i) {
  (e ||= `/`), (r ||= `/`);
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return o || ((o = Le()), Fe(t, { from: e }, 1, o), i.singleCache.set(a, o)), Ue(r, o, n);
}
function Ve(e, t, n = !1) {
  const r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = Ue(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return a && (a.branch = Ge(a.route)), t.matchCache.set(r, a), a;
}
function He(e, t = !1) {
  let n = Le(),
    r = [],
    i = {},
    a = {},
    o = 0;
  function s(e, n, c, l) {
    if ((e.init(o), e.id in i && Ae(), (i[e.id] = e), o !== 0 && e.path)) {
      const t = xe(e.fullPath);
      (!a[t] || e.fullPath.endsWith(`/`)) && (a[t] = e);
    }
    o++;
    const [u, d, f] = Fe(t, e, n, c, r, l);
    if (((e._interpolation = f), e.children)) for (const t of e.children) s(t, d, u, f);
  }
  s(e, 1, n);
  for (const e of r) e.sort(Ie);
  return {
    processedTree: {
      segmentTree: n,
      singleCache: ke(1e3),
      matchCache: ke(1e3),
      flatCache: null,
      masksTree: null,
    },
    routesById: i,
    routesByPath: a,
  };
}
function Ue(e, t, n = !1) {
  const r = e.split(`/`),
    i = qe(e, r, t, n);
  if (!i) return null;
  const [a] = We(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function We(e, t, n) {
  let r = Ke(n.node),
    i = n.node.data && Ne(n.node.data),
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.param ?? 0;
  for (; s < r.length; o++, s++, c++) {
    const u = r[s];
    if (u.kind === je) break;
    if (u.kind === Me) {
      o--, c--;
      continue;
    }
    const d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1 || u.kind === 3)) {
      const e = i[l++];
      if (u.kind === 3 && n.skipped & (1 << s)) {
        o--, (c = f - 1);
        continue;
      }
      const t = u.suffix || u.prefix ? d.substring(u.prefix.length, d.length - u.suffix.length) : d;
      (t || u.kind === 1) && (a[e] = decodeURIComponent(t));
    } else if (u.kind === 2) {
      const t = u,
        n = e.substring(f + t.prefix.length, e.length - t.suffix.length),
        r = decodeURIComponent(n);
      (a[`*`] = r), (a._splat = r);
      break;
    }
  }
  return n.rawParams && Object.assign(a, n.rawParams), [a, { part: o, node: s, path: c, param: l }];
}
function Ge(e) {
  const t = [e];
  for (; e.parentRoute; ) (e = e.parentRoute), t.push(e);
  return t.reverse(), t;
}
function Ke(e) {
  const t = Array(e.depth + 1);
  do (t[e.depth] = e), (e = e.parent);
  while (e);
  return t;
}
function qe(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !T(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [{ node: n, index: 1, skipped: 0, statics: 0, dynamics: 0, optionals: 0 }],
    c = null,
    l = null;
  for (; s.length; ) {
    let n = s.pop(),
      { node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m } = n,
      { extract: h, rawParams: g } = n;
    if (i.kind === 2 && i.route && !Ze(l, n)) continue;
    if (i.parse) {
      if (!Xe(e, t, n)) continue;
      (g = n.rawParams), (h = n.extract);
    }
    r && i.route && i.kind !== je && Ze(c, n) && (c = n);
    const _ = u === o;
    if (
      _ &&
      (i.route && (!a || i.kind === je || i.kind === 2) && Ze(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let v = _ ? void 0 : t[u],
      y;
    if (_ && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        },
        r = !0;
      if ((i.index.parse && (Xe(e, t, n) || (r = !1)), r)) {
        if (!p && !m && !d && Ye(f, o)) return n;
        Ze(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        const n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(r && (_ || !(n.caseSensitive ? v : (y ??= v.toLowerCase())).startsWith(r)))) {
          if (a) {
            if (_) continue;
            const e = t.slice(u).join(`/`),
              i = e.slice(-a.length);
            if ((n.caseSensitive ? i : i.toLowerCase()) !== a || e.length - a.length < r.length)
              continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m,
            extract: h,
            rawParams: g,
          });
        }
      }
    if (i.optional) {
      const e = d | (1 << (i.depth + 1));
      for (let t = i.optional.length - 1; t >= 0; t--) {
        const n = i.optional[t];
        s.push({
          node: n,
          index: u,
          skipped: e,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
      if (!_)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          const t = i.optional[e],
            { prefix: n, suffix: r } = t;
          if (n || r) {
            const e = t.caseSensitive ? v : (y ??= v.toLowerCase());
            if ((n && !e.startsWith(n)) || (r && e.indexOf(r, e.length - r.length) < n.length))
              continue;
          }
          s.push({
            node: t,
            index: u + 1,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m + Je(o, u),
            extract: h,
            rawParams: g,
          });
        }
    }
    if (!_ && i.dynamic && v)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        const t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          const e = t.caseSensitive ? v : (y ??= v.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && e.indexOf(r, e.length - r.length) < n.length))
            continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          statics: f,
          dynamics: p + Je(o, u),
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
    if (!_ && i.staticInsensitive) {
      const e = i.staticInsensitive.get((y ??= v.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + Je(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (!_ && i.static) {
      const e = i.static.get(v);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + Je(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (i.pathless)
      for (let e = i.pathless.length - 1; e >= 0; e--) {
        const t = i.pathless[e];
        s.push({
          node: t,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    const r = n === e.length ? `/` : e.slice(n);
    return (c.rawParams ??= Object.create(null)), (c.rawParams[`**`] = decodeURIComponent(r)), c;
  }
  return null;
}
function Je(e, t) {
  return 2 ** (e - t - 1);
}
function Ye(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function Xe(e, t, n) {
  let r, i;
  try {
    [r, i] = We(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Ze(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === je) > (e.node.kind === je) ||
                ((t.node.kind === je) == (e.node.kind === je) && t.node.depth > e.node.depth)))))))
  );
}
function Qe() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var $e = `tsr-scroll-restoration-v1_3`,
  et = Qe();
function tt() {
  try {
    return JSON.parse(et?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
var nt = tt(),
  rt = `data-scroll-restoration-id`,
  it = (e) => e.state.__TSR_key || e.href;
function at(e) {
  const t = e.getAttribute(rt);
  if (t) return `[${rt}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode); ) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling); ) e++;
    const a = `${r.localName}:nth-child(${e})`;
    (n = n ? `${a} > ${n}` : a), (r = i);
  }
  return n;
}
var ot = !1,
  st = `window`;
function ct(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function lt(e) {
  const t = new Set();
  for (const n of e) {
    if (n === st) continue;
    const e = ct(n);
    e && t.add(e);
  }
  return t;
}
function ut(e, t) {
  const n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.e = !0);
  const i = e.options.getScrollRestorationKey || it,
    a = new Set(),
    o = (e) => {
      const t = (nt[e] ||= {});
      for (const e of a)
        e === document
          ? (t[st] = { scrollX, scrollY })
          : e.isConnected && (t[at(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  n &&
    !r.s &&
    ((r.s = !0),
    (ot = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        ot || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      e.fromLocation && o(i(e.fromLocation)), a.clear();
    }),
    addEventListener(`pagehide`, () => {
      (history.scrollRestoration = `auto`),
        o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get()));
      try {
        et?.setItem($e, JSON.stringify(nt));
      } catch {}
    }),
    addEventListener(`pageshow`, (e) => {
      e.persisted && (history.scrollRestoration = `manual`);
    })),
    !r.r &&
      ((r.r = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.n,
          c = r.h,
          l;
        if (
          (a.clear(),
          (r.n = !0),
          (r.h = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        const u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.e && d && d !== u) {
          const e = nt[d];
          if (e) {
            let t = nt[u];
            for (const n in e) {
              if (n === st) {
                if (s) continue;
              } else {
                const e = ct(n);
                if (!e || (s && o && ((l ??= lt(o)), l.has(e)))) continue;
              }
              (t ||= nt[u] = {}), (t[n] ??= e[n]);
            }
          }
        }
        ot = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= lt(o));
            const t = e && i && c,
              s = r.e ? nt[u] : void 0;
            if (s)
              for (const e in s) {
                const { scrollX: r, scrollY: i } = s[e];
                if (e === st) {
                  if (t) continue;
                  scrollTo({ top: i, left: r, behavior: n }), (a = !0);
                } else {
                  const t = ct(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              const e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (const t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          ot = !1;
        }
      }));
}
function dt(e, t = String) {
  let n;
  for (const r in e) {
    const i = e[r];
    i !== void 0 && (n ||= new URLSearchParams()).set(r, t(i));
  }
  return n ? n.toString() : ``;
}
function ft(e) {
  return e ? (e === `false` ? !1 : e === `true` ? !0 : e * 0 == 0 && +e + `` === e ? +e : e) : ``;
}
function pt(e) {
  const t = new URLSearchParams(e),
    n = Object.create(null);
  for (const [e, r] of t.entries()) {
    const t = n[e];
    t == null ? (n[e] = ft(r)) : Array.isArray(t) ? t.push(ft(r)) : (n[e] = [t, ft(r)]);
  }
  return n;
}
var mt = /^(?:\s|["[{\d-]|fa|nu|tr)/,
  ht = _t(JSON.parse),
  gt = vt(JSON.stringify, JSON.parse);
function _t(e) {
  const t = e === JSON.parse;
  return (n) => {
    n[0] === `?` && (n = n.substring(1));
    const r = pt(n);
    for (const n in r) {
      const i = r[n];
      if (typeof i == `string`) {
        if (t && !mt.test(i)) continue;
        try {
          r[n] = e(i);
        } catch {}
      }
    }
    return r;
  };
}
function vt(e, t) {
  const n = t === JSON.parse;
  function r(r) {
    if (r && typeof r == `object`)
      try {
        return e(r);
      } catch {}
    else if (t && typeof r == `string`) {
      if (n && !mt.test(r)) return r;
      try {
        return t(r), e(r);
      } catch {}
    }
    return r;
  }
  return (e) => {
    const t = dt(e, r);
    return t ? `?${t}` : ``;
  };
}
var yt = `__root__`;
function bt(e, t, n) {
  const r = Se(e),
    i = `/${r}`,
    a = t ? i : i.toLowerCase(),
    o = `${a}/`,
    s = {
      input: ({ url: e }) => {
        const n = t ? e.pathname : e.pathname.toLowerCase();
        return (
          n === a
            ? (e.pathname = `/`)
            : n.startsWith(o) && (e.pathname = e.pathname.slice(i.length)),
          e
        );
      },
      output: ({ url: e }) => ((e.pathname = ye(`/${r}${e.pathname}`)), e),
    };
  return n
    ? {
        input: ({ url: e }) => xt(n, s.input({ url: e })),
        output: ({ url: e }) => s.output({ url: St(n, e) }),
      }
    : s;
}
function xt(e, t) {
  const n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function St(e, t) {
  const n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Ct(e, t) {
  const { createMutableStore: n, createReadonlyStore: r, batch: i } = t,
    a = new Map(),
    o = n(`idle`),
    s = n(e),
    c = n(void 0),
    l = n([]),
    u = r(() => l.get().map((e) => a.get(e).get())),
    d = r(() => ({
      status: o.get(),
      isLoading: o.get() === `pending`,
      matches: u.get(),
      location: s.get(),
      resolvedLocation: c.get(),
    }));
  function f(e) {
    let t = a.get(e);
    return t || ((t = n(void 0)), a.set(e, t)), t;
  }
  const p = {
    status: o,
    location: s,
    resolvedLocation: c,
    ids: l,
    matches: u,
    byRoute: a,
    __store: d,
    getMatchStore: f,
    setMatches: m,
  };
  function m(e) {
    const t = l.get(),
      n = e.map((e) => e.routeId);
    i(() => {
      ve(t, n) || l.set(n);
      for (const e of t) n.includes(e) || a.get(e).set(() => void 0);
      for (const t of e) {
        const e = f(t.routeId);
        e.get() !== t && e.set(t);
      }
    });
  }
  return p;
}
var wt = `__TSR_index`,
  Tt = `popstate`,
  Et = `beforeunload`,
  Dt = /^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/;
function Ot(e) {
  const t = Dt.exec(e);
  return t ? `/` + e.slice(t[0].length) : e;
}
function kt(e) {
  return (
    /[\x00-\x1f\x7f]/.test(e) &&
      (e = e.replace(/[\x00-\x1f\x7f]/g, (e) =>
        `	
\r`.includes(e)
          ? ``
          : encodeURIComponent(e),
      )),
    Ot(e)
  );
}
function At(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      (t = e.getLocation()), n.forEach((e) => e({ location: t, action: r }));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      const a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (const n of a) {
          const r = Nt(i.path, i.state);
          if (await n.blockerFn({ currentLocation: t, nextLocation: r, action: i.type })) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      const s = t.state[wt];
      (i = jt(s + 1, i)),
        a({
          task: () => {
            e.pushState(n, i), r({ type: `PUSH` });
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        });
    },
    replace: (n, i, o) => {
      const s = t.state[wt];
      (i = jt(s, i)),
        a({
          task: () => {
            e.replaceState(n, i), r({ type: `REPLACE` });
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        });
    },
    go: (t, n) => {
      a({
        task: () => {
          e.go(t, n?.ignoreBlocker ?? !1), i({ type: `GO`, index: t });
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` });
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` });
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[wt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      const n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          const n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
    _getBlockers: () => e.getBlockers?.() ?? [],
  };
}
function jt(e, t) {
  const n = Pt();
  return { ...t, key: n, __TSR_key: n, [wt]: e };
}
function Mt(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = (t) => kt(e?.createHref ? e.createHref(t) : t),
    c =
      e?.parseLocation ??
      (() => Nt(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    const e = Pt();
    t.history.replaceState({ [wt]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _ = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g[2] ? t.history.pushState : t.history.replaceState)(g[1], ``, g[0]),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (u = void 0));
    },
    v = (t, n, r) => {
      const i = e?.createHref ? s(n) : void 0,
        a = !!g;
      a || (u = l),
        (l = Nt(n, r)),
        (g = [i ?? l.href, r, g?.[2] || t]),
        a || queueMicrotask(() => _());
    },
    y = (e) => {
      (l = c()), S.notify({ type: e });
    },
    b = async () => {
      if (((m = !1), f)) {
        f = !1;
        return;
      }
      const e = c(),
        n = e.state[wt] - l.state[wt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      const s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        const r = a();
        if (typeof document < `u` && r.length) {
          for (const i of r)
            if (await i.blockerFn({ currentLocation: l, nextLocation: e, action: s })) {
              (f = !0), t.history.go(-n), S.notify(u);
              return;
            }
        }
      }
      (l = c()), S.notify(u);
    },
    x = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (const e of n) {
          const n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return e.preventDefault(), (e.returnValue = ``);
    },
    S = At({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => v(!0, e, t),
      replaceState: (e, t) => v(!1, e, t),
      back: (e) => (e && ((p = !0), (m = !0)), t.history.back()),
      forward: (e) => {
        e && ((p = !0), (m = !0)), t.history.forward();
      },
      go: (e, n) => {
        (d = !0), n && ((p = !0), (m = !0)), t.history.go(e);
      },
      createHref: (e) => s(e),
      flush: _,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Et, x, { capture: !0 }),
          t.removeEventListener(Tt, b);
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    (S._ignoreNextBeforeUnload = (e) => {
      m = !1;
      try {
        (e = new URL(e, t.document.baseURI).href),
          (m =
            /^https?:/.test(e) &&
            (!e.includes(`#`) || e.split(`#`)[0] !== t.location.href.split(`#`)[0]));
      } catch {}
    }),
    t.addEventListener(Et, x, { capture: !0 }),
    t.addEventListener(Tt, b),
    (t.history.pushState = (...e) => {
      const r = n.apply(t.history, e);
      return S._ignoreSubscribers || y(`PUSH`), r;
    }),
    (t.history.replaceState = (...e) => {
      const n = r.apply(t.history, e);
      return S._ignoreSubscribers || y(`REPLACE`), n;
    }),
    S
  );
}
function Nt(e, t) {
  const n = kt(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`);
  if (!t) {
    const e = Pt();
    t = { [wt]: 0, key: e, __TSR_key: e };
  }
  return {
    href: n,
    pathname: n.substring(0, r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t,
  };
}
function Pt() {
  return (Math.random() + 1).toString(36).substring(7);
}
function Ft(e, t) {
  return (
    (e.protocol !== `http:` && e.protocol !== `https:`) ||
    e.origin !== t ||
    !!e.username ||
    !!e.password
  );
}
function It(e) {
  return e.pathname + e.search + e.hash;
}
function Lt(e) {
  return (
    e.options.loader ||
    e.options.beforeLoad ||
    e.lazyFn ||
    e.options.component?.preload ||
    e.options.pendingComponent?.preload
  );
}
function Rt(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function zt(e, t) {
  return {
    fromLocation: t,
    toLocation: e,
    pathChanged: t?.pathname !== e.pathname,
    hrefChanged: t?.href !== e.href,
    hashChanged: t?.hash !== e.hash,
  };
}
function Bt({ key: e, __TSR_key: t, __TSR_index: n, __hashScrollIntoViewOptions: r, ...i }) {
  return i;
}
function Vt(e) {
  return e.findIndex((e) => e.status === `error` || e.status === `notFound` || e._notFound) + 1;
}
function Ht(e, t, n, r, i, a) {
  r && (t = t.slice(0, r)), i && (n = n.slice(0, i));
  for (const r of t) {
    if (a && e._tx !== a) return;
    n.some((e) => e.routeId === r.routeId) || e.routesById[r.routeId].options.onLeave?.(r);
  }
  for (const r of n) {
    if (a && e._tx !== a) return;
    e.routesById[r.routeId].options[
      t.some((e) => e.routeId === r.routeId) ? `onStay` : `onEnter`
    ]?.(r);
  }
}
var Ut = class {
  constructor(e, t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this._scroll = { n: !0 }),
      (this.subscribers = new Set()),
      (this._cache = new Map()),
      (this._committed = []),
      (this.startTransition = async (e) => (e(), !1)),
      (this.update = (e) => {
        const t = this.options;
        (this.options = { ...t, ...e }),
          (this.isServer = this.options.isServer ?? !1 ?? typeof document > `u`),
          (this.staticLocations = new WeakMap()),
          (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            (this.history = this.options.history ? this.options.history : Mt()),
          (this.origin = this.options.origin),
          (this.origin ||=
            window?.origin && window.origin !== `null` ? window.origin : `http://localhost`);
        const n = this.options.basepath ?? `/`,
          r = this.options.rewrite,
          i =
            this.basepath !== n ||
            t?.rewrite !== r ||
            t?.caseSensitive !== this.options.caseSensitive;
        if (
          (i &&
            ((this.basepath = n),
            (this.rewrite = n !== `/` && Se(n) ? bt(n, this.options.caseSensitive, r) : r)),
          this.history && this.updateLatestLocation(),
          this.options.routeTree !== this.routeTree)
        ) {
          this.routeTree = this.options.routeTree;
          let e;
          (e = this.buildRouteTree()), this.setRoutes(e);
        }
        if (this.stores) i && this.stores.location.set(this.latestLocation);
        else if (this.latestLocation) {
          const e = this.getStoreConfig(this);
          (this.batch = e.batch), (this.stores = Ct(this.latestLocation, e)), ut(this);
        }
      }),
      (this.updateLatestLocation = () => {
        this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
      }),
      (this.buildRouteTree = () => {
        const e = He(this.routeTree, this.options.caseSensitive);
        return (
          this.options.routeMasks && Re(this.options.routeMasks, e.processedTree),
          { ...e, resolvePathCache: ke(1e3) }
        );
      }),
      (this.subscribe = (e, t) => {
        const n = { eventType: e, fn: t };
        return (
          this.subscribers.add(n),
          () => {
            this.subscribers.delete(n);
          }
        );
      }),
      (this.emit = (e) => {
        for (const t of this.subscribers)
          if (t.eventType === e.type)
            try {
              t.fn(e);
            } catch (e) {
              console.error(e);
            }
      }),
      (this.parseLocation = (e, t) => {
        const n = ({ pathname: e, search: n, hash: r, href: i }, a) => {
            if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
              const i = this.options.parseSearch(n),
                o = this.options.stringifySearch(i);
              return {
                href: e + o + r,
                publicHref: e + o + r,
                pathname: ge(e),
                external: !1,
                searchStr: o,
                search: ie(t?.search, i),
                hash: ge(r.slice(1)),
                state: ae(t?.state, a),
              };
            }
            const o = xt(this.rewrite, new URL(i, this.origin)),
              s = this.options.parseSearch(o.search),
              c = this.options.stringifySearch(s);
            return (
              (o.search = c),
              {
                href: o.href.replace(o.origin, ``),
                publicHref: i,
                pathname: ge(Ot(o.pathname)),
                external: !!this.rewrite && Ft(o, this.origin),
                searchStr: c,
                search: ie(t?.search, s),
                hash: ge(o.hash.slice(1)),
                state: ae(t?.state, a),
              }
            );
          },
          r = n(e, e.state),
          { __tempLocation: i, __tempKey: a } = r.state;
        if (i && (!a || a === this.tempLocationKey)) {
          const e = n(i, {
            ...i.state,
            __tempLocation: void 0,
            key: r.state.key,
            __TSR_key: r.state.__TSR_key,
          });
          return (e.maskedLocation = r), e;
        }
        return r;
      }),
      (this.matchRoutes = (e, t, n) =>
        typeof e == `string`
          ? this.matchRoutesInternal({ pathname: e, search: t }, n)
          : this.matchRoutesInternal(e, t)),
      (this.getMatchedRoutes = (e) => {
        const t = Object.create(null),
          n = Ve(xe(e), this.processedTree, !0);
        return (
          n && Object.assign(t, n.rawParams), [n?.branch || [this.routesById.__root__], t, n?.route]
        );
      }),
      (this.buildLocation = (e) => {
        {
          const t = this.staticLocations.get(e);
          if (t) return t;
        }
        let t = !1,
          n = (n = {}) => {
            if (n.href) {
              const e = Nt(n.href, {});
              n = {
                ...n,
                to: xt(this.rewrite, new URL(e.pathname, this.origin)).pathname,
                search: this.options.parseSearch(e.search),
                hash: e.hash.slice(1),
              };
            }
            let r = n._fromLocation || this._pendingLocation || this.latestLocation,
              i,
              a = () => ((t = !0), r),
              o = () => ((t = !0), (i ??= this.matchRoutesLightweight(r))),
              s = n.to ? `${n.to}` : `.`,
              c = we(
                s[0] === `/` ? `` : n.unsafeRelative === `path` ? a().pathname : (n.from ?? o()[1]),
                s,
                this.options.trailingSlash,
                this.resolvePathCache,
              ),
              l = this.routesByPath[xe(c)],
              u = c.includes(`$`),
              d;
            if (l) d = l._branch ??= Ge(l);
            else if (u) d = [];
            else {
              const [e, t, n] = this.getMatchedRoutes(c);
              (d = e),
                this.options.notFoundRoute &&
                  (!n || (n.path !== `/` && t[`**`])) &&
                  (d = [...d, this.options.notFoundRoute]);
            }
            let f = u ? (l?._interpolation ?? Fe(!1, { fullPath: c }, 0)) : void 0,
              p;
            for (const e of d) {
              const t = e.options.params?.stringify ?? e.options.stringifyParams;
              if (t) {
                const e = o()[3];
                if (((p ??= Jt(n.params, e)), !ne(p))) break;
                p === e && (p = Object.assign(re(), p));
                try {
                  Object.assign(p, t(p));
                } catch {}
              }
            }
            p ??= Jt(n.params, Yt(n.params, f) ? o()[3] : Xt);
            let m = e.leaveParams ? c : Ot(ge(f ? Oe(c, f, p, this.pathParamsDecoder) : c)),
              h = Zt(d, e._includeValidateSearch),
              g = () => {
                let t = o()[2];
                if (e._includeValidateSearch && this.options.search?.strict) {
                  const e = {};
                  d.forEach((n) => {
                    if (n.options.validateSearch)
                      try {
                        Object.assign(e, qt(n.options.validateSearch, { ...e, ...t }));
                      } catch {}
                  }),
                    (t = e);
                }
                return t;
              },
              _ = h.length
                ? Qt(h, g(), n)
                : n.search === !0
                  ? g()
                  : typeof n.search == `function`
                    ? n.search(g())
                    : n.search || Xt,
              v = this.options.stringifySearch(_),
              y =
                n.hash === !0
                  ? a().hash
                  : typeof n.hash == `function`
                    ? n.hash(a().hash)
                    : n.hash || void 0,
              b = y ? `#${y}` : ``,
              x = n.state
                ? n.state === !0
                  ? a().state
                  : typeof n.state == `function`
                    ? n.state(a().state)
                    : n.state
                : Xt,
              S = `${m}${v}${b}`,
              C,
              w,
              ee = !1;
            if (this.rewrite) {
              const e = new URL(S, this.origin),
                t = e.origin,
                n = St(this.rewrite, e);
              (C = It(e)), Ft(n, t) ? ((w = n.href), (ee = !0)) : (w = Ot(It(n)));
            } else (C = _e(S)), (w = C);
            return {
              publicHref: w,
              href: C,
              pathname: m,
              search: _,
              searchStr: v,
              state: x,
              hash: y ?? ``,
              external: ee,
              unmaskOnReload: n.unmaskOnReload,
            };
          },
          r = n(e);
        if (e.mask) r.maskedLocation = n({ from: e.from, ...e.mask });
        else if (this.options.routeMasks) {
          const t = ze(r.pathname, this.processedTree);
          if (t) {
            const i = Object.assign(re(), t.rawParams),
              { from: a, params: o, ...s } = t.route,
              c = Jt(o, i);
            r.maskedLocation = n({ from: e.from, ...s, params: c });
          }
        }
        return !t && e._fromLocation && !r.maskedLocation && this.staticLocations.set(e, r), r;
      }),
      (this.commitLocation = async ({ viewTransition: e, ignoreBlocker: t, ...n }) => {
        const r = n.maskedLocation ?? n;
        if (r.external) return Wt(this, r.publicHref, { replace: n.replace, ignoreBlocker: t });
        let i,
          a =
            xe(this.latestLocation.href) === xe(n.href) &&
            se(Bt(n.state), Bt(this.latestLocation.state)),
          o = this._commitPromise,
          s,
          c = new Promise((e) => {
            s = e;
          });
        if (
          ((c.resolve = () => {
            s(), o?.resolve();
          }),
          (this._commitPromise = c),
          a)
        )
          this.load();
        else {
          let { maskedLocation: r, hashScrollIntoView: a, ...o } = n;
          r &&
            ((o = {
              ...r,
              state: {
                ...r.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...o,
                  search: o.searchStr,
                  state: {
                    ...o.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    __TSR_key: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (o.state.__tempKey = this.tempLocationKey)),
            (o.state = {
              ...o.state,
              __hashScrollIntoViewOptions: a ?? this.options.defaultHashScrollIntoView ?? !0,
            }),
            (this.shouldViewTransition = e),
            (i = n.replace ? `REPLACE` : `PUSH`),
            this.history[i === `REPLACE` ? `replace` : `push`](o.publicHref, o.state, {
              ignoreBlocker: t,
            }),
            this.history.subscribers.size || this.load({ action: { type: i } });
        }
        return (this._scroll.n = n.resetScroll ?? !0), this._commitPromise;
      }),
      (this.buildAndCommitLocation = ({
        replace: e,
        resetScroll: t,
        hashScrollIntoView: n,
        viewTransition: r,
        ignoreBlocker: i,
        ...a
      } = {}) => {
        const o = this.buildLocation({ ...a, _includeValidateSearch: !0 });
        this._pendingLocation = o;
        const s = this.commitLocation({
          ...o,
          viewTransition: r,
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          ignoreBlocker: i,
        });
        return (
          queueMicrotask(() => {
            this._pendingLocation === o && (this._pendingLocation = void 0);
          }),
          s
        );
      }),
      (this.navigate = async ({ to: e, reloadDocument: t, href: n, publicHref: r, ...i }) => {
        const a = n ? de(n) : void 0;
        if (a || t) {
          if (e !== void 0 || !n) {
            const t = this.buildLocation({ to: e, ...i }),
              a = t.maskedLocation ?? t;
            (n ??= a.publicHref), (r ??= a.publicHref);
          }
          const t = !a && r ? r : n;
          return Wt(this, t, i);
        }
        return this.buildAndCommitLocation({ ...i, href: n, to: e, _isNavigate: !0 });
      }),
      (this.load = async (e) => {
        this.updateLatestLocation(),
          e?.action && (this._scroll.h = e.action.type === `PUSH` || e.action.type === `REPLACE`),
          await Kn(this, e);
      }),
      (this.startViewTransition = (e) => {
        const t = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          ((this.shouldViewTransition = void 0),
          t && typeof document.startViewTransition == `function`)
        ) {
          let n;
          if (
            typeof t == `object` &&
            window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)
          ) {
            const r = this.latestLocation,
              i = this.stores.resolvedLocation.get(),
              a = typeof t.types == `function` ? t.types(zt(r, i)) : t.types;
            if (a === !1) return e();
            n = { update: e, types: a };
          } else n = e;
          return document.startViewTransition(n).updateCallbackDone;
        }
        return e();
      }),
      (this.invalidate = (e) => {
        const t = this._committed,
          n = e?.filter,
          r = this._preloads,
          i = new Set(),
          a = (e) => {
            (!n || n(e)) && i.add(e.id);
          };
        t.forEach(a),
          this._cache.forEach(a),
          r?.forEach((e) => e.forEach(a)),
          this._tx?.[3].forEach(a);
        const o = [];
        for (const [e, t] of r ?? []) t.some((e) => i.has(e.id)) && (r.delete(e), o.push(e));
        const s = (t) => {
          if (i.has(t.id)) {
            const n = this.routesById[t.routeId],
              r = {
                ...t,
                invalid: !0,
                ...((e?.forcePending || t.status === `error` || t.status === `notFound`) && Lt(n)
                  ? { status: `pending`, error: void 0 }
                  : void 0),
              };
            return (t._flight = void 0), r;
          }
          return t;
        };
        this._committed = t.map(s);
        for (const [t, n] of this._cache)
          i.has(t) && ((n.invalid = !0), e?.forcePending && (n.status = `pending`));
        for (const e of i) {
          const t = this._flights?.get(e);
          this._flights?.delete(e), t && !t[2] && o.push(t[1]);
        }
        for (const e of o) e.abort();
        return (this.shouldViewTransition = !1), this.load({ sync: e?.sync });
      }),
      (this.resolveRedirect = (e) => {
        let t = e.options,
          n = e.headers.get(`Location`) || t.href;
        if (!n) {
          const e = this.buildLocation(t);
          n = (e.maskedLocation ?? e).publicHref || `/`;
        }
        let r;
        if (fe.test(n) || ((r = de(n)) && !this.protocolAllowlist.has(r)))
          throw Error(`Redirect blocked: unsafe protocol`);
        if (r === `http:` || r === `https:`) {
          const e = new URL(n);
          e.pathname.startsWith(`//`)
            ? (n = e.href)
            : Ft(e, this.origin) || ((n = It(e)), (r = void 0));
        }
        return r && (t.reloadDocument = !0), (t.href = n), e.headers.set(`Location`, n), e;
      }),
      (this.clearCache = (e) => {
        const t = this._cache,
          n = this._preloads,
          r = e?.filter,
          i = [],
          a = [];
        for (const [e, n] of t) (!r || r(n)) && (a.push(e), i.push(n));
        const o = [];
        for (const [e, t] of n ?? []) (!r || t.some(r)) && (o.push(e), i.push(...t));
        for (const e of a) t.delete(e);
        for (const e of o) n.delete(e);
        for (const e of i) {
          const t = e._flight;
          (e._flight = void 0),
            t &&
              !--t[2] &&
              (this._flights?.get(e.id) === t && this._flights.delete(e.id), o.push(t[1]));
        }
        for (const e of o) e.abort();
      }),
      (this.loadRouteChunk = rn),
      (this.preloadRoute = (e) => qn(this, e)),
      (this.matchRoute = (e, t) => {
        const n = {
            ...e,
            to: e.to
              ? we(e.from || ``, e.to, this.options.trailingSlash, this.resolvePathCache)
              : void 0,
            params: e.params || {},
            leaveParams: !0,
          },
          r = this.buildLocation(n),
          i = this.stores.status.get() === `pending`;
        if (t?.pending && !i) return !1;
        const a =
            (t?.pending ?? !i)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
          o = Be(
            r.pathname,
            t?.caseSensitive ?? !1,
            t?.fuzzy ?? !1,
            a.pathname,
            this.processedTree,
          );
        return !o || (e.params && !se(o.rawParams, e.params, !0))
          ? !1
          : (t?.includeSearch ?? !0)
            ? se(a.search, r.search, !0)
              ? o.rawParams
              : !1
            : o.rawParams;
      }),
      (this.getStoreConfig = t),
      e.pathParamsAllowedCharacters?.length &&
        (this.pathParamsDecoder = Te(e.pathParamsAllowedCharacters)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...e,
        caseSensitive: e.caseSensitive ?? !1,
        notFoundMode: e.notFoundMode ?? `fuzzy`,
        stringifySearch: e.stringifySearch ?? gt,
        parseSearch: e.parseSearch ?? ht,
        protocolAllowlist: e.protocolAllowlist ?? ue,
      }),
      (self.__TSR_ROUTER__ = this);
  }
  isShell() {
    return !!this.options.isShell;
  }
  get state() {
    return this.stores.__store.get();
  }
  setRoutes(e) {
    Object.assign(this, e),
      (this.lightweightCache = new WeakMap()),
      (this.staticLocations = new WeakMap());
    const t = this.options.notFoundRoute;
    t &&
      (t.init(99999999999),
      this.routesById[t.id] !== t && (t._interpolation = Fe(!1, t, 0)),
      (this.routesById[t.id] = t));
  }
  matchRoutesInternal(e, t) {
    let [n, r, i] = this.getMatchedRoutes(e.pathname),
      a = n,
      o = !1;
    (i ? i.path !== `/` && r[`**`] : xe(e.pathname)) &&
      (this.options.notFoundRoute ? (a = [...a, this.options.notFoundRoute]) : (o = !0));
    let s = o ? $t(this.options.notFoundMode, a) : void 0,
      c = Array(a.length),
      l = this._committed,
      u = (e, t) => {
        const n = l[t];
        return n?.routeId === e.id
          ? n
          : e === this.options.notFoundRoute
            ? l.find((t) => t.routeId === e.id)
            : void 0;
      },
      d;
    for (let n = 0; n < a.length; n++) {
      let i = a[n],
        o = c[n - 1],
        l,
        f,
        p;
      {
        const n = o?.search ?? e.search,
          r = o?._strictSearch ?? void 0;
        try {
          const e = qt(i.options.validateSearch, { ...n }) ?? void 0;
          (l = { ...n, ...e }), (f = { ...r, ...e });
        } catch (e) {
          let r = e;
          if ((e instanceof Gt || (r = new Gt(e.message, { cause: e })), t?.throwOnError)) throw r;
          (l = n), (f = {}), (p = r);
        }
      }
      let m = ``,
        h = ``;
      try {
        (m = i.options.loaderDeps?.({ search: l }) ?? ``), (h = (m && JSON.stringify(m)) || ``);
      } catch (e) {
        if (t?.throwOnError) throw e;
        p ??= e;
      }
      const g = re(),
        _ = i._interpolation
          ? Oe(i.fullPath, i._interpolation, r, this.pathParamsDecoder, g)
          : i.fullPath,
        v = i.id + _ + h,
        y = u(i, n),
        b = this._cache.get(v) ?? (y?.id === v ? y : void 0);
      d = b?._strictParams ?? Object.assign(g, d);
      let S;
      if (!b)
        try {
          en(i, d);
        } catch (e) {
          if (((S = x(e) || C(e) ? e : new Kt(e.message, { cause: e })), t?.throwOnError)) throw S;
        }
      let w = y ? `stay` : `enter`,
        ee;
      if (b)
        ee = {
          ...b,
          cause: w,
          search: ie(y ? y.search : b.search, l),
          _strictSearch: f,
          searchError: p,
        };
      else {
        const e = Lt(i) ? `pending` : `success`;
        ee = {
          id: v,
          ssr: i.options.ssr,
          index: n,
          routeId: i.id,
          params: y?.params ?? d,
          _strictParams: d,
          pathname: _,
          updatedAt: Date.now(),
          search: y ? ie(y.search, l) : l,
          _strictSearch: f,
          searchError: p,
          status: e,
          isFetching: !1,
          error: void 0,
          paramsError: S,
          context: {},
          abortController: t?._controller ?? new AbortController(),
          cause: w,
          loaderDeps: y ? ae(y.loaderDeps, m) : m,
          invalid: !1,
          preload: !1,
          staticData: i.options.staticData || {},
          fullPath: i.fullPath,
        };
      }
      const T = s === i.id;
      ee._notFound && !T && (ee.error = void 0), (ee._notFound = T), (c[n] = ee);
    }
    for (let e = 0; e < c.length; e++) {
      const n = c[e];
      (n.params = n.cause === `stay` ? ie(n.params, d) : d), t?._controller && (n.context = {});
    }
    return c;
  }
  matchRoutesLightweight(e) {
    const t = T(this.stores.ids.get()),
      n = t ? this.stores.byRoute.get(t).get() : void 0,
      r = n?.id,
      i = this.lightweightCache.get(e);
    if (i && i[0] === r) return i[1];
    const [a, o] = this.getMatchedRoutes(e.pathname),
      s = T(a),
      c = { ...e.search };
    for (const e of a)
      try {
        Object.assign(c, qt(e.options.validateSearch, c));
      } catch {}
    let l = n && n.routeId === s.id && n.pathname === e.pathname,
      u;
    if (l) u = n.params;
    else {
      const e = o;
      for (const t of a)
        try {
          en(t, e);
        } catch {}
      u = e;
    }
    const d = [a, s.fullPath, c, u];
    return this.lightweightCache.set(e, [r, d]), d;
  }
};
async function Wt(e, t, { replace: n, ignoreBlocker: r }) {
  if (!pe(t, e.protocolAllowlist)) {
    if (!r) {
      const t = e.history._getBlockers();
      for (const r of t)
        if (
          r?.blockerFn &&
          (await r.blockerFn({
            currentLocation: e.history.location,
            nextLocation: e.history.location,
            action: n ? `REPLACE` : `PUSH`,
          }))
        )
          return;
    }
    e.history._ignoreNextBeforeUnload?.(t),
      n ? window.location.replace(t) : (window.location.href = t);
  }
}
var Gt = class extends Error {},
  Kt = class extends Error {};
function qt(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    const n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new Gt(`Async validation not supported`);
    if (n.issues) throw new Gt(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function Jt(e, t) {
  if (e === void 0 || e === !0) return t;
  const n = Object.create(null);
  return e === !1 || e === null
    ? n
    : typeof e == `function`
      ? (Object.assign(n, t), Object.assign(n, e(n)))
      : Object.assign(n, t, e);
}
function Yt(e, t) {
  return typeof e == `function`
    ? !0
    : !t || e === !1 || e === null
      ? !1
      : e === void 0 || e === !0 || t.some((t) => typeof t != `string` && !E.call(e, t[1]));
}
var Xt = Object.freeze({});
function Zt(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r].options;
    `search` in i
      ? i.search?.middlewares && n.push(...i.search.middlewares)
      : (i.preSearchFilters || i.postSearchFilters) &&
        n.push(({ search: e, next: t }) => {
          const n = t(i.preSearchFilters ? i.preSearchFilters.reduce((e, t) => t(e), e) : e);
          return i.postSearchFilters ? i.postSearchFilters.reduce((e, t) => t(e), n) : n;
        });
    const a = i.validateSearch;
    t &&
      a &&
      n.push(({ search: e, next: t, meta: n }) => {
        const r = t(e);
        try {
          const e = qt(a, r);
          if (n && e) for (const t in e) t in r || (n.defaulted ||= new Map()).set(t, e[t]);
          return { ...r, ...e };
        } catch {}
        return r;
      });
  }
  return n;
}
function Qt(e, t, n) {
  const r = (t, i, a) => {
    if (t >= e.length) {
      if (!n.search) return {};
      if (n.search === !0) return i;
      const e = te(n.search, i);
      return a && (a.explicit = e), e;
    }
    return e[t]({
      search: i,
      next: (e, n) => {
        if (n) {
          const n = a || {};
          return { search: r(t + 1, e, n), meta: n };
        }
        return r(t + 1, e, a);
      },
      meta: a,
    });
  };
  return r(0, t);
}
function $t(e, t) {
  if (e !== `root`) {
    let e;
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      if (r.options.notFoundComponent) return r.id;
      e ||= r.children && r.id;
    }
    if (e) return e;
  }
  return yt;
}
function en(e, t) {
  const n = e.options.params?.parse ?? e.options.parseParams;
  n && Object.assign(t, n(t));
}
function tn(e, t) {
  return e.options[t]?.preload?.();
}
function nn(e, t) {
  let n = tn(e, `component`),
    r = tn(e, `pendingComponent`);
  return t && (r ? (r = r.then(t)) : t()), n && r ? Promise.all([n, r]).then(() => {}) : (n ?? r);
}
function rn(e, t, n) {
  const r = () => (t === !1 ? void 0 : t ? tn(e, t) : nn(e, n)),
    i = e._lazy;
  if (i) return i === !0 ? r() : i.then(r);
  if (!e.lazyFn) return r();
  const a = e.lazyFn().then(
    (t) => {
      {
        const { id: n, ...r } = t.options;
        Object.assign(e.options, r), (e._lazy = !0);
      }
    },
    (t) => {
      throw ((e._lazy = void 0), t);
    },
  );
  return (e._lazy = a), a.then(r);
}
function an(e) {
  const t = e.findIndex((e) => e.status !== `success` || e._notFound) + 1;
  return t && t < e.length ? e.slice(0, t) : e;
}
function on(e) {
  let t = e.length;
  for (let n = 0; n < t; n++) {
    const r = e[n];
    if (r._assetEnd !== void 0) {
      t = Math.min(t, Math.max(n + 1, r._assetEnd));
      continue;
    }
    if (r.status !== `success` || r._notFound) {
      t = n + 1;
      break;
    }
  }
  return t < e.length ? e.slice(0, t) : e;
}
var sn = 0,
  cn = 1,
  ln = 2,
  un = 3,
  dn = [4];
function fn(e) {
  return typeof e[0] == `number`;
}
function pn(e, t) {
  return t.aborted
    ? Promise.race([Promise.reject(t), e])
    : new Promise((n, r) => {
        const i = () => r(t);
        t.addEventListener(`abort`, i, { once: !0 }),
          Promise.resolve(e)
            .then(n, r)
            .then(() => t.removeEventListener(`abort`, i));
      });
}
function mn(e, t) {
  return e.routesById[t.routeId];
}
function hn(e, t, n) {
  return C(e)
    ? [un, e]
    : x(e)
      ? ((e.routeId ||= n), [ln, e])
      : t
        ? (typeof e?.then == `function` && (e = Error(`A Promise was thrown`, { cause: e })),
          [cn, e])
        : [sn, e];
}
function gn(e, t) {
  let n = hn(t, !0, e.id);
  if (n[0] !== cn) return n;
  try {
    e.options.onError?.(n[1]);
  } catch (t) {
    n = hn(t, !0, e.id);
  }
  return n;
}
function _n(e, t, n, r, i) {
  return i[0].signal.aborted ? dn : Nn(e, t, n, gn(n, r), i);
}
async function vn(e, t, n, r, i, a) {
  const [o, s] = t,
    c = n[0].signal,
    l = !!n[3];
  for (let i = n[6] ?? 0; i < r; i++) {
    const r = s[i],
      u = mn(e, r);
    r.abortController = n[0];
    const d = s[i - 1]?.context ?? e.options.context ?? {},
      f = {
        params: r.params,
        location: o,
        navigate: (t) => e.navigate({ ...t, _fromLocation: o }),
        buildLocation: e.buildLocation,
        cause: l ? `preload` : r.cause,
        abortController: n[0],
        preload: l,
        matches: s,
        routeId: u.id,
      };
    try {
      const e = (r._ctx ||= u.options.context
        ? u.options.context({ ...f, deps: r.loaderDeps, context: d }) || {}
        : void 0);
      r.context = { ...d, ...e };
    } catch (a) {
      return bn(e, r), [i, _n(e, t, u, a, n)];
    }
    if (c.aborted) return [i, dn];
    const p = r.paramsError ?? r.searchError;
    if (p !== void 0) return bn(e, r), [i, _n(e, t, u, p, n)];
    const m = u.options.beforeLoad;
    if (!m) continue;
    const h = r.status;
    i >= a && ((r.status = `pending`), n[7]?.());
    try {
      Cn(e, r, `beforeLoad`, n[0]);
      const a = m({ ...f, search: r.search, context: r.context, ...e.options.additionalContext }),
        o = await (typeof a?.then == `function` ? pn(a, c) : a);
      if (c.aborted) return [i, dn];
      const s = Nn(e, t, u, hn(o, !1, u.id), n);
      if (s[0] !== sn) return bn(e, r), [i, s];
      r.context = { ...r.context, ...o };
    } catch (a) {
      return bn(e, r), [i, _n(e, t, u, a, n)];
    } finally {
      (r.status = h), Cn(e, r, !1, n[0]);
    }
  }
  i();
}
function yn(e, t, n) {
  if (!(!n || --n[2])) {
    if (e._flights?.get(t.id) === n) {
      const n = e._tx;
      if (
        n &&
        !n[0].signal.aborted &&
        !n[3].includes(t) &&
        n[3].some((e) => e.id === t.id) &&
        n[3].some((e) => e.isFetching === `beforeLoad`)
      )
        return;
      e._flights.delete(t.id);
    }
    return n[1];
  }
}
function bn(e, t) {
  const n = t._flight;
  (t._flight = void 0), yn(e, t, n)?.abort();
}
function xn(e, t, n, r) {
  const i = [];
  for (const a of t)
    if (!n?.includes(a)) {
      const t = a._flight;
      if (
        ((a._flight = void 0),
        r && t?.[2] === 1 && e._flights?.get(a.id) === t && n?.some((e) => e.id === a.id))
      )
        t[2] = 0;
      else {
        const n = yn(e, a, t);
        n && i.push(n);
      }
    }
  for (const e of i) e.abort();
}
function Sn(e) {
  for (const t of e) {
    const e = t._flight;
    e && e[2]++;
  }
}
function Cn(e, t, n, r) {
  if (((t.isFetching = n), r && e._tx?.[0] !== r)) return;
  const i = e.stores.byRoute.get(t.routeId),
    a = i?.get();
  a?.id === t.id && i.set({ ...a, isFetching: n });
}
function wn(e, t, n, r, i, a, o) {
  const s = t[0];
  return {
    params: n.params,
    location: s,
    navigate: (t) => e.navigate({ ...t, _fromLocation: s }),
    cause: o ? `preload` : n.cause,
    abortController: i,
    preload: o,
    deps: n.loaderDeps,
    parentMatchPromise: a,
    context: n.context,
    route: r,
    ...e.options.additionalContext,
  };
}
async function Tn(e, t, n, r, i, a, o) {
  const s = o[0],
    c = s.signal;
  if (c.aborted) return dn;
  if (!i) return [sn, void 0];
  let l = n._flight;
  Cn(e, n, `loader`, s);
  try {
    if (!l) {
      const s = new AbortController();
      (l = [
        Promise.resolve()
          .then(() => i(wn(e, t, n, r, s, a, !!o[3])))
          .then(
            (e) => hn(e, !1, r.id),
            (e) => hn(e, !0, r.id),
          )
          .then(
            (t) => (
              t[0] !== sn &&
                e._flights?.get(n.id) === l &&
                (e._flights.delete(n.id), l[2] || s.abort()),
              t[0] === cn && l[2] ? gn(r, t[1]) : t
            ),
          ),
        s,
        1,
      ]),
        (e._flights ??= new Map()).set(n.id, l);
    }
    return (n._flight = l), (n.abortController = l[1]), Nn(e, t, r, await pn(l[0], c), o);
  } catch (t) {
    if (t !== c || !c.aborted) throw t;
    return bn(e, n), dn;
  } finally {
    Cn(e, n, !1, s);
  }
}
function En(e, t, n) {
  t[0] !== un &&
    ((e.status = `success`),
    (e.error = void 0),
    t[0] === sn
      ? ((e.loaderData = t[1]), (e.invalid = !1), (e.updatedAt = Date.now()), (e.preload = n))
      : (e.invalid = !0));
}
function Dn(e, t, n) {
  const r = e._cache.get(t.id);
  if (r !== n || e._committed.some((e) => e.id === t.id && e._flight === t._flight)) return;
  const i = { ...t, _notFound: void 0, context: {} };
  i._flight && i._flight[2]++, e._cache.set(t.id, i), r && bn(e, r);
}
function On(e, t) {
  return t[0] === cn || t[0] === ln
    ? { ...e, status: t[0] === cn ? `error` : `notFound`, error: t[1], _flight: void 0 }
    : e;
}
function kn(e, t, n, r, i, a, o) {
  let s = t[1][n],
    c = mn(e, s),
    l = !!a[3],
    u = e._cache.get(s.id),
    d,
    f = !1,
    p;
  try {
    if (
      (s.status === `success` &&
        ((d = c.options.shouldReload),
        typeof d == `function` && (d = d(wn(e, t, s, c, a[0], i, l))),
        a[0].signal.aborted && (p = dn)),
      !p)
    )
      if (s.status !== `success`) f = !0;
      else {
        const t =
          l || s.preload
            ? (c.options.preloadStaleTime ?? e.options.defaultPreloadStaleTime ?? 3e4)
            : (c.options.staleTime ?? e.options.defaultStaleTime ?? 0);
        f = !!(
          s.invalid ||
          d ||
          (d === void 0 &&
            Date.now() - s.updatedAt >= t &&
            (a[5] ||
              s.cause === `enter` ||
              a[2].some((e) => e.routeId === s.routeId && e.id !== s.id)))
        );
      }
  } catch (n) {
    (s.invalid = !0), bn(e, s), (p = _n(e, t, c, n, a));
  }
  let m = c.options.loader,
    h = typeof m == `function`,
    g = h ? m : m?.handler,
    _ = !l || c.options.preload !== !1,
    v = _ && m ? e._flights?.get(s.id) : void 0;
  v === s._flight || p
    ? (v = void 0)
    : v && !f && !l && d === void 0
      ? (f = !0)
      : f || (v = void 0);
  const y = !!(
      m &&
      f &&
      s.status === `success` &&
      !l &&
      !a[4] &&
      ((h ? void 0 : m.staleReloadMode) ?? e.options.defaultStaleReloadMode) !== `blocking`
    ),
    b = f && _,
    x = b && !y && (s.status !== `success` || !!m),
    S = n >= o ? a[7] : void 0,
    C = c.lazyFn && c._lazy !== !0 ? S : void 0;
  if ((b && !m && ((s.invalid = !1), (s.updatedAt = Date.now())), v && v[2]++, x)) {
    const t = s._flight;
    (s._flight = v), yn(e, s, t)?.abort(), n >= o && (s.status = `pending`), S?.();
  }
  b || (s.isFetching = !1);
  const w =
      !p && x
        ? Tn(e, t, s, c, g, i, a).then(
            (t) => (
              En(s, t, l),
              t[0] === sn &&
                (m && !a[0].signal.aborted && Dn(e, s, u), n >= o && (s.status = `pending`)),
              t
            ),
          )
        : Promise.resolve(p ?? [sn, s.loaderData]),
    ee = (async () => {
      try {
        const e = rn(c, void 0, C);
        e && (await pn(e, a[0].signal));
      } catch (r) {
        if (
          !t[1].some(
            (e, t) => t <= n && (e.status === `error` || e.status === `notFound` || e._notFound),
          )
        )
          return [n, _n(e, t, c, r, a)];
      }
      const r = await w;
      x &&
        r[0] === sn &&
        s.status === `pending` &&
        !a[0].signal.aborted &&
        ((s.status = `success`), S?.());
    })();
  if ((r.push([n, w, ee]), !y)) return w.then((e) => On(s, e));
  const T = { ...s, status: `pending`, preload: !1, _flight: v };
  (s.invalid = !1), (s.isFetching = `loader`);
  const te = Tn(e, t, T, c, g, i, a).then((e) => ((s.isFetching = !1), En(T, e, !1), e));
  return (t[2] ??= []).push([n, te, ee, T]), te.then((e) => On(T, e));
}
async function An(e, t, n, r, i = 0) {
  let a = n?.[1][1],
    o = a?.routeId ? t.findIndex((e) => e.routeId === a.routeId) : (n?.[0] ?? t.length - 1);
  o < 0 && (o = 0);
  for (let n = o; n >= 0; n--) {
    const i = mn(e, t[n]);
    try {
      const e = rn(i, !1);
      e && (await pn(e, r));
    } catch (e) {
      if (e === r && r.aborted) throw e;
    }
    if (i.options.notFoundComponent) return n;
  }
  return a?.routeId ? o : i;
}
function jn(e, t) {
  t[2] &&=
    (xn(
      e,
      t[2].map((e) => e[3]),
    ),
    void 0);
}
async function Mn(e, t, n, r) {
  let i;
  try {
    await Promise.all(
      e.map((e) =>
        e[1].then(async (t) => {
          const a = e[0];
          if (!(r && a >= (await r))) {
            if (t[0] >= un) throw [a, t];
            !i &&
              t[0] !== sn &&
              ((i = [a, t]),
              await Promise.all(
                (n ?? []).map((e) => {
                  if (!(e[0] <= a))
                    return e[1].then((t) => {
                      if (t[0] === un) throw [e[0], t];
                    });
                }),
              ));
          }
        }),
      ),
    );
  } catch (e) {
    return e;
  }
  return t ?? i;
}
function Nn(e, t, n, r, i, a) {
  for (; r[0] === un; ) {
    const o = r[1],
      s = o.options;
    try {
      if (
        ((s.href || o.headers.has(`Location`)) && (e.resolveRedirect(o), s.reloadDocument)) ||
        (s.reloadDocument ? i[3] : i[1] >= 20)
      )
        return r;
      const n = e.buildLocation({ ...s, _fromLocation: t[0], _includeValidateSearch: !0 }),
        a = n.maskedLocation ?? n;
      if (a.external) {
        const t = o.clone();
        return (
          (t.options = { ...s }),
          t.headers.set(`Location`, a.publicHref),
          e.resolveRedirect(t),
          i[3] ? [un, t] : [un, t, a]
        );
      }
      return [un, o, n];
    } catch (e) {
      (r = a ? [cn, e] : gn(n, e)), (a = !0);
    }
  }
  return r;
}
async function Pn(e, t, n, r, i, a) {
  let o = t[1],
    s = await i,
    c = !1,
    l = o.findIndex((e) => e._notFound),
    u = (t) => (t[1][0] === ln ? An(e, o, t, r.signal) : t[0]),
    d = l < 0 ? o.length : l;
  if ((s?.[1][0] ?? 0) >= un) d = 0;
  else if (s) {
    d = s[2] ??= await u(s);
    for (const e of n) {
      if (e[0] >= d) break;
      const t = await e[1];
      if (t[0] !== sn && t[0] < un && !(`loaderData` in o[e[0]])) {
        (s = [e[0], t]), (d = s[2] = await u(s));
        break;
      }
    }
  }
  for (const e of n) {
    if (e[0] >= d) break;
    const t = await e[2];
    if (t) {
      s = t;
      break;
    }
  }
  if ((s?.[1][0] ?? 0) >= un) {
    const n = s[1];
    if (n[0] !== un || n[1].options.reloadDocument || n[2]) return jn(e, t), n;
    (c = !0), (s = [0, [cn, Error(`Too many redirects`)]]);
  }
  const f = s ? (s[2] ?? (await u(s))) : l;
  if (f >= 0) {
    const i = s?.[1],
      l = i?.[0],
      u = o[f],
      d = i?.[1],
      p = () => {
        i &&
          ((u._notFound = void 0),
          l === cn
            ? (u.status = `error`)
            : ((d.routeId = u.routeId),
              u.routeId === e.routeTree.id
                ? ((u.status = `success`), (u._notFound = !0))
                : (u.status = `notFound`)),
          (u.error = d),
          (u.isFetching = !1));
      };
    p(), i || a?.();
    const m = mn(e, u);
    try {
      await pn(
        i
          ? Promise.resolve().then(() => rn(m, l === cn ? `errorComponent` : `notFoundComponent`))
          : Promise.all([rn(m), rn(m, `notFoundComponent`)]),
        r.signal,
      );
    } catch (n) {
      if (n === r.signal && r.signal.aborted) return jn(e, t), dn;
    }
    i
      ? c &&
        (r.abort(),
        await Promise.all([
          ...n.map((e) => e[1]),
          ...n.map((e) => e[2]),
          ...(t[2] ?? []).map((e) => e[1]),
        ]),
        jn(e, t),
        xn(e, o),
        p())
      : (u.status = `success`);
  }
  return t;
}
async function Fn(e, t, n, r = 0, i = t[1].length) {
  const a = t[1];
  for (let t = r; t < i; t++) {
    const r = a[t],
      i = mn(e, r).options;
    if (i.head || i.scripts)
      try {
        const t = {
            ssr: e.options.ssr,
            matches: a,
            match: r,
            params: r.params,
            loaderData: r.loaderData,
          },
          [o, s] = await pn(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
        (r.meta = o?.meta),
          (r.links = o?.links),
          (r.headScripts = o?.scripts),
          (r.styles = o?.styles),
          (r.scripts = s);
      } catch (e) {
        if (e === n && n.aborted) break;
        console.error(e);
      }
    if (r.status !== `success` || r._notFound) break;
  }
  return t;
}
async function In(e, t, n, r) {
  let i = [t, n],
    a = r[0].signal,
    o;
  try {
    let t = e.stores.matches.get(),
      s = n.findIndex((e) => e._notFound);
    if (e.options.notFoundMode !== `root` && s >= 0) {
      const t = await An(e, n, void 0, a, s);
      (n[s]._notFound = void 0), (n[t]._notFound = !0), (s = t);
    }
    let c = s < 0 ? n.length : s + 1,
      l = 0;
    for (; l < c && l !== s; ) {
      const e = n[l],
        i = r[2][l],
        a = t[l];
      if (
        i?.id !== e.id ||
        i.status !== `success` ||
        e.preload ||
        a?.id !== e.id ||
        a.status !== `success` ||
        (l++, i._notFound || a._notFound)
      )
        break;
    }
    let u = [],
      d = r[6] ?? 0,
      f = d ? Promise.resolve(n[d - 1]) : void 0,
      p = () => {
        for (let t = d; t < c && !a.aborted; t++) f = kn(e, i, t, u, f, r, l);
      },
      m = await vn(e, i, r, c, p, l);
    if (m) {
      if (((r[4] = !0), (c = m[0]), m[1][0] === ln)) {
        const t = await An(e, n, m, a);
        (m[2] = t), (c = Math.min(c, t + 1));
      } else m[1][0] >= un && (c = 0);
      p();
    }
    if (!a.aborted && !r[3]) {
      const t = [];
      for (const [n, r] of e._flights ?? []) r[2] || (e._flights.delete(n), t.push(r[1]));
      for (const e of t) e.abort();
    }
    const h = Pn(e, i, u, r[0], Mn(u, m, i[2]), r[7]);
    i[2]?.length &&
      (i[3] = Mn(
        i[2],
        void 0,
        void 0,
        h.then(
          (e) => (fn(e) ? 0 : an(n).length),
          () => 0,
        ),
      )),
      (o = await h);
  } catch (t) {
    if ((jn(e, i), t === a && a.aborted)) return dn;
    throw t;
  }
  return fn(o) ? o : Fn(e, o, a, r[6] === n.length ? r[6] : 0);
}
function Ln(e, t) {
  if (e._tx !== t) return;
  let n = t[3],
    r = e.stores.matches.get(),
    i = e._pending;
  for (let a = 0; a < n.length; a++) {
    const o = n[a],
      s = o.status === `success` && !o._notFound,
      c = r[a]?.id === o.id && r[a]?.status === `pending`;
    if (s && !c) continue;
    const l = mn(e, o),
      u = s || o.invalid ? 0 : (l.options.pendingMs ?? e.options.defaultPendingMs),
      d = l.options.pendingComponent ?? e.options.defaultPendingComponent;
    if (!d || typeof u != `number` || u === 1 / 0) {
      i && ((i[0] = t), (i[2] = 0), (i[4] = !0));
      return;
    }
    let f = l.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0,
      p = !1;
    if (
      (i?.[1] === o.id
        ? ((p = i[0] !== t), (i[0] = t))
        : (clearTimeout(i?.[3]), (e._pending = i = void 0)),
      i || (e._pending = i = [t, o.id, c ? Date.now() + f : t[4] + u, void 0, c || void 0, d]),
      i[4] && !p && i[5] === d)
    )
      return;
    if (((i[5] = d), !i[4])) {
      clearTimeout(i[3]);
      const n = i[2] - Date.now();
      if (n > 0) {
        i[3] = setTimeout(() => Ln(e, t), n);
        return;
      }
      i[2] = 0;
    }
    const m = n.map((e) => ({ ...e, _flight: void 0 }));
    m[a].status = `pending`;
    const h = (i[4] = e
      .startTransition(() => e.stores.setMatches(m), m)
      .then((t) => (t && e._pending === i && i[4] === h && !i[2] && (i[2] = Date.now() + f), t)));
    return;
  }
}
function Rn(e, t) {
  const n = e._pending;
  (e._tx === t || !e._tx?.[3].some((e) => e.id === n?.[1])) &&
    (clearTimeout(n?.[3]), (e._pending = void 0));
}
async function zn(e, t) {
  const n = e._pending;
  if (!n) return;
  clearTimeout(n[3]);
  const r = n[2] - Date.now();
  if (!n[4] || r <= 0 || !an(t[3]).some((e) => e.id === n[1])) return;
  let i;
  try {
    await pn(
      new Promise((e) => {
        i = setTimeout(e, r);
      }),
      t[0].signal,
    );
  } catch {}
  clearTimeout(i);
}
function Bn(e, t) {
  (e._committed = t), e.stores.setMatches(t);
}
function Vn(e, t, n, r) {
  const i = e._committed,
    a = e._lifecycleEnd,
    o = e._cache;
  for (const e of n) (e.preload = !1), r && (e._assetEnd = void 0);
  const s = an(n).length,
    c = new Map();
  {
    const t = Date.now(),
      r = new Set();
    for (let e = 0; e < n.length; e++) {
      const t = n[e];
      (e < s || t.status === `success`) && r.add(t.id);
    }
    for (const n of [...i, ...o.values()]) {
      if (n.status !== `success` || r.has(n.id)) continue;
      const i = mn(e, n);
      !i.options.loader ||
        t - n.updatedAt >=
          (n.preload
            ? (i.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5)
            : (i.options.gcTime ?? e.options.defaultGcTime ?? 3e5)) ||
        c.set(n.id, o.get(n.id) === n ? n : { ...n, _flight: void 0, isFetching: !1, context: {} });
    }
  }
  (t[3] = []), (e._cache = c);
  const l = (e._lifecycleEnd = Vt(n));
  Bn(e, n),
    xn(
      e,
      [...o.values(), ...i].filter((e) => e._flight && c.get(e.id) !== e),
      n,
    ),
    Ht(e, i, n, a, l, t);
}
async function Hn(e, t) {
  let n = e._tx;
  for (; n && n !== t; ) (t = n), await n[5], (n = e._tx);
}
function Un(e, t, n) {
  const r = n[1].options,
    i = n[2];
  if (!i) return e.navigate({ ...r, replace: !0, ignoreBlocker: !0 });
  if (r.reloadDocument)
    return e.navigate({
      href: (i.maskedLocation ?? i).publicHref,
      reloadDocument: !0,
      replace: !0,
      ignoreBlocker: !0,
    });
  (i._redirects = t[1] + 1), (e._pendingLocation = i);
  const a = e.commitLocation({
    ...i,
    viewTransition: r.viewTransition,
    replace: !0,
    resetScroll: r.resetScroll,
    hashScrollIntoView: r.hashScrollIntoView,
    ignoreBlocker: !0,
  });
  return (
    queueMicrotask(() => {
      e._pendingLocation === i && (e._pendingLocation = void 0);
    }),
    a
  );
}
async function Wn(e, t, n, r, i) {
  const a = n.map((e) => ({ ...e }));
  Sn(a);
  for (const t of r) bn(e, a[t[0]]), (a[t[0]] = t[3]);
  let o = [t[2], a],
    s;
  try {
    s = await Pn(e, o, r, t[0], i);
  } catch (t) {
    throw (xn(e, a), t);
  }
  if (fn(s)) {
    xn(e, a), s[0] === un && e._tx === t && e._committed === n && (await Un(e, t, s));
    return;
  }
  if ((await Fn(e, s, t[0].signal), e._tx !== t || e._committed !== n)) {
    xn(e, a);
    return;
  }
  for (const t of a) {
    const n = e._cache.get(t.id);
    n?._flight && n._flight === t._flight && (e._cache.delete(t.id), bn(e, n));
  }
  Bn(e, a), xn(e, n, a);
}
async function Gn(e, t, n, r, i, a) {
  const o = await In(e, t[2], t[3], [t[0], t[1], e._committed, void 0, i, n, a, r]);
  if (fn(o)) {
    const n = o[0] === un && e._tx === t;
    if (((!n || o[1].options.reloadDocument) && Rn(e, t), xn(e, t[3]), (t[3] = []), !n)) return;
    if (e._tx !== t) {
      Rn(e, t);
      return;
    }
    await Un(e, t, o);
    return;
  }
  const s = o[1];
  if ((e._tx === t && (await zn(e, t)), e._tx !== t)) {
    Rn(e, t), xn(e, s), jn(e, o);
    return;
  }
  const c = t[2],
    l = zt(c, e.stores.resolvedLocation.get()),
    u = o[2];
  await e.startViewTransition(async () => {
    if ((e._tx === t && (await zn(e, t)), e._tx !== t)) {
      Rn(e, t), xn(e, s), jn(e, o);
      return;
    }
    const n = await e.startTransition(() => {
      Rn(e, t),
        Vn(e, t, s, a),
        e._tx === t &&
          (e.emit({ type: `onLoad`, ...l }),
          e._tx === t && e.emit({ type: `onBeforeRouteMount`, ...l }));
    }, s);
    if (e._tx !== t) {
      jn(e, o);
      return;
    }
    u?.length && Wn(e, t, s, u, o[3]).catch(console.error),
      e.batch(() => {
        e.stores.resolvedLocation.set(c),
          e.stores.status.set(`idle`),
          e._tx === t && e.emit({ type: `onResolved`, ...l }),
          n && e._tx === t && e.emit({ type: `onRendered`, ...l });
      }),
      e._tx === t && (e._commitPromise?.resolve(), (e._commitPromise = void 0));
  });
}
async function Kn(e, t) {
  const n = e._tx,
    r = e.stores.resolvedLocation.get(),
    i = r ?? e.stores.location.get(),
    a = e.latestLocation,
    o = e._pendingLocation,
    s = o?.href === a.href ? (o._redirects ?? 0) : 0,
    c = e._handoff,
    l = c?.[0](),
    u = new AbortController(),
    d = e._preflight;
  if (((e._preflight = u), l || c?.[1](), d?.abort(), !u.signal.aborted)) {
    const t = zt(a, r);
    e.emit({ type: `onBeforeNavigate`, ...t }),
      u.signal.aborted || e.emit({ type: `onBeforeLoad`, ...t });
  }
  if (u.signal.aborted) {
    await Hn(e, n);
    return;
  }
  let f = i.href === a.href,
    p = u,
    m = e.matchRoutes(a, { _controller: u });
  Sn(m);
  const h = l ? c[1](m) : void 0;
  if ((h ? (p = l) : l?.abort(), u.signal.aborted)) {
    xn(e, m), await Hn(e, n);
    return;
  }
  e._preflight = void 0;
  let g,
    _ = () => Gn(e, y, f, () => Ln(e, y), t?.sync, h),
    v = t?.sync ? new Promise((e) => (g = e)) : Promise.resolve().then(_),
    y = [p, s, a, m, Date.now(), v.then(() => Hn(e, y))];
  if (((e._tx = y), n)) {
    for (const t of e.stores.matches.get()) {
      if (e._tx !== y) break;
      t.isFetching && Cn(e, t, !1);
    }
    n[0].abort(), xn(e, n[3], y[3], !0);
  }
  if (e._tx !== y) {
    xn(e, y[3]), (y[3] = []), g?.(), await Hn(e, y);
    return;
  }
  e.batch(() => {
    e.stores.status.set(`pending`), e.stores.location.set(a);
  }),
    (h || (!e._committed.length && m[0]?.status !== `success` && !m.some((e) => e._notFound))) &&
      Ln(e, y),
    g?.(_()),
    await y[5];
}
async function qn(e, t) {
  let n = e.buildLocation(t);
  for (let t = 0; ; t++) {
    let r = e._committed,
      i = new AbortController(),
      a,
      o,
      s;
    try {
      try {
        (a = e.matchRoutes(n, { _controller: i })),
          Sn(a),
          (o = (e._preloads ??= new Map()).set(i, a)),
          (s = await In(e, n, a, [i, t, r, !0]));
      } finally {
        o && ((o = o.delete(i)), xn(e, a)), i.abort();
      }
      if (!fn(s)) return s[1];
      if (!o || s.length < 3) return;
      n = s[2];
    } catch (e) {
      x(e) || console.error(e);
      return;
    }
  }
}
async function Jn(e) {
  const t = window.$_TSR,
    n = e.options.serializationAdapters;
  n?.length &&
    ((t.t = new Map(n.map((e) => [e.key, e.fromSerializable]))), t.buffer.forEach((e) => e())),
    (t.initialized = !0);
  const r = t.router;
  (e.ssr = { manifest: r.manifest }),
    (e.options.ssr = { nonce: document.querySelector(`meta[property="csp-nonce"]`)?.content });
  const i = r.matches,
    a = new AbortController(),
    o = e._preflight;
  (e._preflight = a), o?.abort();
  let s = () => e._preflight === a,
    c,
    l,
    u,
    d;
  try {
    if ((await pn(e.options.hydrate?.(r.dehydratedData), a.signal), !s())) return;
    const t = e.history.location;
    (u = t.href),
      (d = t.state),
      e.updateLatestLocation(),
      (c = e.latestLocation),
      e.stores.location.set(c),
      (l = e.matchRoutes(c, { _controller: a }));
  } catch (t) {
    if ((s() && (e._preflight = void 0), a.abort(t), t !== a.signal)) throw t;
  }
  if (!s()) return;
  let f = [],
    p,
    m = 0,
    h = (t) => {
      m = Math.min(m, t + 1);
      const n = f.splice(t);
      for (const t of n)
        mn(e, t).options.loader &&
          (t.status === `success` || (!t.invalid && `loaderData` in t)) &&
          Dn(e, { ...t, status: `success`, error: void 0, preload: !0 }, e._cache.get(t.id));
      xn(e, n);
    },
    g = i.length > l.length ? l.findIndex((e) => e._notFound) + 1 : i.length,
    _ = !1;
  for (let t = 0; t < g; t++) {
    const n = l[t],
      r = i[t];
    if (typeof r.i != `string` || ee(r.i) !== n.id) {
      p ??= t;
      break;
    }
    m = t + 1;
    const a = mn(e, n);
    if (
      ((`l` in r || (r.s === `success` && r.e === void 0 && a.options.loader)) &&
        (n.loaderData = r.l),
      (n.status = r.s),
      (n.ssr = r.ssr),
      (a.options.ssr = n.ssr),
      (n.updatedAt = r.u),
      (n.error = r.e),
      (n._notFound ||= r.g),
      n.status === `error` || n.status === `notFound` || n._notFound)
    ) {
      (_ = !0), f.push(n), (n.ssr === !1 || n.ssr === `data-only`) && (p ??= t);
      break;
    }
    if (n.status === `pending`) {
      p ??= t;
      break;
    }
    f.push(n), n.ssr === `data-only` && (p ??= t);
  }
  !_ && f.length === g && g < l.length && (p = g);
  let v = f.map(async (t) => {
      try {
        const n = mn(e, t);
        return (
          await (t._notFound
            ? Promise.all([rn(n), rn(n, `notFoundComponent`)])
            : rn(
                n,
                t.status === `error`
                  ? `errorComponent`
                  : t.status === `notFound`
                    ? `notFoundComponent`
                    : void 0,
              )),
          !0
        );
      } catch {
        return !1;
      }
    }),
    y = 0;
  try {
    for (; y < v.length && (await pn(v[y], a.signal)); ) y++;
  } catch {
    return;
  }
  if (!s()) return;
  y < f.length && h(y);
  const b = Math.max(p === f.length ? f.length + 1 : f.length, y < v.length ? y : m);
  for (let t = 0; t < b; t++) {
    let n = l[t],
      r = mn(e, n),
      o = l[t - 1]?.context ?? e.options.context ?? {},
      u;
    if (r.options.context) {
      try {
        u = n._ctx =
          r.options.context({
            deps: n.loaderDeps,
            params: n.params,
            context: o,
            location: c,
            navigate: (t) => e.navigate({ ...t, _fromLocation: c }),
            buildLocation: e.buildLocation,
            cause: n.cause,
            abortController: a,
            preload: !1,
            matches: l,
            routeId: r.id,
          }) || {};
      } catch {
        if (!s()) return;
        if (n.status !== `error` && n.status !== `notFound` && !n._notFound) {
          (p = Math.min(p ?? t, t)), h(t);
          break;
        }
      }
      if (!s()) return;
    }
    n.context = { ...o, ...u, ...(f[t] && i[t].b) };
  }
  if ((await Fn(e, [c, l], a.signal, 0, m), !s())) return;
  let x = p !== void 0 || f.length < g,
    S = _ && f.length === g ? l : f,
    C = x ? l : S,
    w;
  if (x && p !== void 0) {
    const e = C[p];
    (w = e.ssr === `data-only` && m > p + 1 ? m : void 0),
      (C = C.slice()),
      (C[p] = { ...e, status: `pending`, ssr: e.ssr === `data-only` && `data-only`, _assetEnd: w });
  }
  const T = () => {
      const t = e.history.location;
      return x &&
        !e._tx &&
        t.href === u &&
        t.state === d &&
        e._committed === S &&
        S.length &&
        !a.signal.aborted
        ? a
        : void 0;
    },
    te = [
      T,
      (t) => {
        if (e._handoff !== te) return;
        e._handoff = void 0;
        const n = S.length;
        if (!t || !T() || S.some((e, n) => e.id !== t[n]?.id)) {
          a.abort();
          return;
        }
        let r = w;
        if (r !== void 0) {
          for (let e = n; e < r; e++)
            if (l[e]?.id !== t[e]?.id) {
              r = e > p + 1 ? e : void 0;
              break;
            }
        }
        const i = S.map((e) => ({ ...e }));
        r !== void 0 && (i[p]._assetEnd = r), xn(e, t.splice(0, n, ...i));
        for (let e = n; e < t.length; e++) {
          const n = t[e],
            r = l[e];
          r?.id === n.id && r._ctx && (n._ctx = r._ctx), (n.abortController = a);
        }
        return n;
      },
    ];
  (e._committed = S),
    (e._lifecycleEnd = Vt(S)),
    (e._handoff = te),
    (e._preflight = void 0),
    e.batch(() => {
      e.stores.setMatches(C),
        e.stores.status.set(`idle`),
        x || e.stores.resolvedLocation.set(e.stores.location.get());
    });
}
var Yn = Symbol.asyncIterator,
  Xn = Symbol.hasInstance,
  Zn = Symbol.isConcatSpreadable,
  Qn = Symbol.iterator,
  $n = Symbol.match,
  er = Symbol.matchAll,
  tr = Symbol.replace,
  nr = Symbol.search,
  rr = Symbol.species,
  ir = Symbol.split,
  ar = Symbol.toPrimitive,
  or = Symbol.toStringTag,
  sr = Symbol.unscopables,
  cr = {
    [Yn]: 0,
    [Xn]: 1,
    [Zn]: 2,
    [Qn]: 3,
    [$n]: 4,
    [er]: 5,
    [tr]: 6,
    [nr]: 7,
    [rr]: 8,
    [ir]: 9,
    [ar]: 10,
    [or]: 11,
    [sr]: 12,
  },
  lr = {
    0: Yn,
    1: Xn,
    2: Zn,
    3: Qn,
    4: $n,
    5: er,
    6: tr,
    7: nr,
    8: rr,
    9: ir,
    10: ar,
    11: or,
    12: sr,
  },
  ur = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  dr = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  fr = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function A(e, t, n, r, i, a, o, s, c, l, u, d) {
  return { t: e, i: t, s: n, c: r, m: i, p: a, e: o, a: s, f: c, b: l, o: u, l: d };
}
function pr(e) {
  return A(2, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
var mr = pr(2),
  hr = pr(3),
  gr = pr(1),
  _r = pr(0),
  vr = pr(4),
  yr = pr(5),
  br = pr(6),
  xr = pr(7),
  Sr = 64,
  Cr = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/;
function wr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function Tr(e) {
  if (e.length >= Sr && !Cr.test(e)) return JSON.stringify(e).slice(1, -1);
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    (r = wr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1));
  return n === 0 ? (t = e) : (t += e.slice(n)), t;
}
function Er(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function Dr(e) {
  return typeof e == `string` && !e.includes(`\\`)
    ? e
    : e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Er);
}
var { toString: Or } = Object.prototype,
  kr = { parsing: 1, serialization: 2, deserialization: 3 };
function Ar(e) {
  return `Seroval Error (step: ${kr[e]})`;
}
var jr = (e, t) => Ar(e),
  Mr = class extends Error {
    constructor(e, t) {
      super(jr(e, t)), (this.cause = t);
    }
  },
  Nr = class extends Mr {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  Pr = class extends Mr {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function Fr(e) {
  return `Seroval Error (specific: ${e})`;
}
var Ir = class extends Error {
    constructor(e) {
      super(Fr(1)), (this.value = e);
    }
  },
  Lr = class extends Error {
    constructor(e) {
      super(Fr(2));
    }
  },
  Rr = class extends Error {
    constructor(e) {
      super(Fr(3));
    }
  },
  zr = class extends Error {
    constructor(e) {
      super(Fr(4));
    }
  },
  Br = class extends Error {
    constructor(e) {
      super(Fr(5)), (this.value = e);
    }
  },
  Vr = class extends Error {
    constructor(e) {
      super(Fr(6));
    }
  },
  Hr = class extends Error {
    constructor(e) {
      super(Fr(7));
    }
  },
  j = class extends Error {
    constructor(e) {
      super(Fr(8));
    }
  },
  Ur = class extends Error {
    constructor(e) {
      super(Fr(9));
    }
  },
  Wr = `__SEROVAL_REFS__`,
  Gr = new Map(),
  Kr = new Map();
function qr(e) {
  return Gr.has(e);
}
function Jr(e) {
  return Kr.has(e);
}
function Yr(e) {
  if (qr(e)) return Gr.get(e);
  throw new Br(e);
}
function Xr(e) {
  if (Jr(e)) return Kr.get(e);
  throw new Vr(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, Wr, {
      value: Kr,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, Wr, {
        value: Kr,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, Wr, {
          value: Kr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, Wr, {
          value: Kr,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Zr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Qr(e) {
  const t = dr[Zr(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function $r(e, t) {
  let n = Qr(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    (o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack` ? t & 4 && ((n ||= {}), (n[o] = e[o])) : ((n ||= {}), (n[o] = e[o])));
  return n;
}
function ei(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e);
}
function ti(e) {
  switch (e) {
    case 1 / 0:
      return yr;
    case -1 / 0:
      return br;
  }
  return e === e
    ? Object.is(e, -0)
      ? vr
      : A(0, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
    : xr;
}
function ni(e) {
  return A(
    1,
    void 0,
    Tr(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ri(e) {
  return A(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ii(e) {
  return A(4, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ai(e, t) {
  const n = t.valueOf();
  return A(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function oi(e, t, n) {
  return A(36, e, n.toString(), t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function si(e, t) {
  return A(
    6,
    e,
    void 0,
    Tr(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ci(e, t) {
  return A(17, e, cr[t], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function li(e, t) {
  return A(
    18,
    e,
    Tr(Yr(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ui(e, t, n) {
  return A(25, e, n, Tr(t), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function di(e, t, n) {
  return A(9, e, void 0, void 0, void 0, void 0, void 0, n, void 0, void 0, ei(t), void 0);
}
function fi(e, t) {
  return A(21, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
var pi = 1e6;
function mi(e, t, n) {
  if (t.length > pi) throw new Ir(t);
  return A(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function hi(e, t, n) {
  if (t.length > pi) throw new Ir(t);
  return A(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function gi(e, t, n) {
  if (t.byteLength > pi) throw new Ir(t);
  return A(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  );
}
function _i(e, t, n) {
  return A(13, e, Zr(t), void 0, Tr(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function vi(e, t, n) {
  return A(14, e, Zr(t), void 0, Tr(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function yi(e, t) {
  return A(7, e, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0);
}
function bi(e, t) {
  return A(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function xi(e, t) {
  return A(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Si(e, t, n) {
  return A(31, e, void 0, void 0, void 0, void 0, void 0, n, t, void 0, void 0, void 0);
}
function Ci(e, t) {
  return A(32, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function wi(e, t) {
  return A(33, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function Ti(e, t) {
  return A(34, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function Ei(e, t, n, r) {
  return A(35, e, n, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, r);
}
var Di = class {
    constructor(e, t) {
      (this.value = e), (this.replacement = t);
    }
  },
  Oi = () => {
    const e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        (e.s = t), (e.f = n);
      })),
      e
    );
  },
  ki = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          const e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  Ai = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        const t = s.shift();
        t && t.s({ done: !1, value: e }), o.push(e);
      },
      throw(e) {
        const t = s.shift();
        t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e);
      },
      return(e) {
        const t = s.shift();
        t && t.s({ done: !0, value: e }), c.finalize(), (i = o.length), o.push(e);
      },
    });
    const l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          const e = r++;
          if (e >= o.length) {
            const e = t();
            return s.push(e), e.p;
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        const e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  ji = (e) => {
    const t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  },
  Mi = class {
    constructor(e, t, n) {
      (this.v = e), (this.t = t), (this.d = n);
    }
  };
function Ni(e) {
  return e instanceof Mi;
}
function Pi(e, t, n) {
  return new Mi(e, t, n);
}
function Fi(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Qn]();
  for (;;)
    try {
      const e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      (n = t.length), (r = n), t.push(e);
      break;
    }
  return Pi(t, n, r);
}
var Ii = ki(Qn);
function Li(e) {
  return Ii(e);
}
var Ri = {},
  zi = {},
  Bi = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function M(e, t) {
  if (t.has(e)) throw TypeError(`Cannot initialize the same private elements twice on an object`);
}
function N(e, t) {
  M(e, t), t.add(e);
}
function Vi(e, t, n) {
  M(e, t), t.set(e, n);
}
function Hi(e, t, n) {
  if (typeof e == `function` ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw TypeError(`Private element is not present on this object`);
}
function P(e, t) {
  return e.get(Hi(e, t));
}
function Ui(e, t, n) {
  return e.set(Hi(e, t), n), n;
}
var Wi = new WeakMap(),
  Gi = new WeakMap(),
  Ki = new WeakMap(),
  qi = new WeakMap(),
  Ji = new WeakMap(),
  Yi = new WeakSet(),
  Xi = class {
    constructor() {
      N(this, Yi),
        Vi(this, Wi, []),
        Vi(this, Gi, []),
        Vi(this, Ki, !0),
        Vi(this, qi, !1),
        Vi(this, Ji, 0);
    }
    on(e) {
      let t = P(Ki, this),
        n = 0;
      if (t) {
        for (; n < P(Ji, this) && P(Gi, this)[n]; n++);
        if (n === P(Ji, this)) {
          var r;
          Ui(Ji, this, ((r = P(Ji, this)), r++, r));
        }
        P(Gi, this)[n] = e;
      }
      return (
        Hi(Yi, this, Qi).call(this, e),
        () => {
          if (P(Ki, this) && t) {
            for (
              t = !1, P(Gi, this)[n] = void 0;
              P(Ji, this) > 0 && !P(Gi, this)[P(Ji, this) - 1];
            ) {
              var e;
              Ui(Ji, this, ((e = P(Ji, this)), e--, e));
            }
            P(Gi, this).length = P(Ji, this);
          }
        }
      );
    }
    next(e) {
      P(Ki, this) && (P(Wi, this).push(e), Hi(Yi, this, Zi).call(this, e, `next`));
    }
    throw(e) {
      P(Ki, this) &&
        (P(Wi, this).push(e),
        Hi(Yi, this, Zi).call(this, e, `throw`),
        Ui(Ki, this, !1),
        Ui(qi, this, !1),
        (P(Gi, this).length = 0));
    }
    return(e) {
      P(Ki, this) &&
        (P(Wi, this).push(e),
        Hi(Yi, this, Zi).call(this, e, `return`),
        Ui(Ki, this, !1),
        Ui(qi, this, !0),
        (P(Gi, this).length = 0));
    }
  };
function Zi(e, t) {
  for (let r = 0; r < P(Ji, this); r++) {
    var n;
    (n = P(Gi, this)[r]) == null || n[t](e);
  }
}
function Qi(e) {
  for (let t = 0, n = P(Wi, this).length; t < n; t++) {
    const r = P(Wi, this)[t];
    !P(Ki, this) && t === n - 1 ? e[P(qi, this) ? `return` : `throw`](r) : e.next(r);
  }
}
function $i(e) {
  return e instanceof Xi;
}
function ea() {
  return new Xi();
}
function ta(e, t) {
  let n = ea(),
    r = e[Yn](),
    i = !1,
    a = !1;
  t?.push(() => {
    a ||
      i ||
      ((i = !0),
      Promise.resolve()
        .then(() => r.return?.call(r))
        .catch(() => {}));
  });
  async function o() {
    try {
      for (; !i; ) {
        const e = await r.next();
        if (i) return;
        if (e.done) {
          (a = !0), n.return(e.value);
          break;
        }
        n.next(e.value);
      }
    } catch (e) {
      (a = !0), i || n.throw(e);
    }
  }
  return o().catch(() => {}), n;
}
var na = Ai(Yn, Oi);
function ra(e) {
  return na(e);
}
async function ia(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function aa(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
    compactArrayBufferViews: t.compactArrayBufferViews ?? !1,
  };
}
function oa(e, t) {
  e.marked.add(t);
}
function sa(e, t) {
  const n = e.refs.size;
  return e.refs.set(t, n), n;
}
function ca(e, t) {
  const n = e.refs.get(t);
  return n == null ? { type: 0, value: sa(e, t) } : (oa(e, n), { type: 1, value: ii(n) });
}
function la(e, t) {
  const n = ca(e, t);
  return n.type === 1 ? n : qr(t) ? { type: 2, value: li(n.value, t) } : n;
}
function ua(e, t) {
  const n = la(e, t);
  if (n.type !== 0) return n.value;
  if (t in cr) return ci(n.value, t);
  throw new Ir(t);
}
function da(e, t) {
  const n = ca(e, Bi[t]);
  return n.type === 1
    ? n.value
    : A(26, n.value, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function fa(e) {
  const t = ca(e, Ri);
  return t.type === 1
    ? t.value
    : A(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        ua(e, Qn),
        void 0,
        void 0,
        void 0,
      );
}
function pa(e) {
  const t = ca(e, zi);
  return t.type === 1
    ? t.value
    : A(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [da(e, 1), ua(e, Yn)],
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function ma(e, t, n, r) {
  return A(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    ei(t),
    void 0,
  );
}
function ha(e, t, n, r) {
  return A(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    da(e, 0),
    void 0,
    void 0,
    void 0,
  );
}
function ga(e, t) {
  if (!e.compactArrayBufferViews) return t;
  const n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice().buffer,
    r = t.constructor;
  return new r(n);
}
function _a(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  const t = new Uint8Array(e);
  if (typeof t.toBase64 == `function`) return t.toBase64();
  let n = ``;
  for (let e = 0, r = t.length; e < r; e++) n += String.fromCharCode(t[e]);
  return btoa(n);
}
function va(e, t, n) {
  return A(19, t, _a(n), void 0, void 0, void 0, void 0, void 0, da(e, 5), void 0, void 0, void 0);
}
function ya(e, t) {
  return { base: aa(e, t), child: void 0 };
}
var ba = class {
  constructor(e, t) {
    (this._p = e), (this.depth = t);
  }
  parse(e) {
    return F(this._p, this.depth, e);
  }
};
async function xa(e, t, n) {
  const r = [];
  for (let i = 0, a = n.length; i < a; i++) i in n ? (r[i] = await F(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function Sa(e, t, n, r) {
  return di(n, r, await xa(e, t, r));
}
async function Ca(e, t, n) {
  const r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++) i.push(Tr(r[n][0])), a.push(await F(e, t, r[n][1]));
  return (
    Qn in n && (i.push(ua(e.base, Qn)), a.push(bi(fa(e.base), await F(e, t, Fi(n))))),
    Yn in n && (i.push(ua(e.base, Yn)), a.push(xi(pa(e.base), await F(e, t, ta(n))))),
    or in n && (i.push(ua(e.base, or)), a.push(ni(n[or]))),
    Zn in n && (i.push(ua(e.base, Zn)), a.push(n[Zn] ? mr : hr)),
    { k: i, v: a }
  );
}
async function wa(e, t, n, r, i) {
  return ma(n, r, i, await Ca(e, t, r));
}
async function Ta(e, t, n, r) {
  return fi(n, await F(e, t, r.valueOf()));
}
async function Ea(e, t, n, r) {
  return (r = ga(e.base, r)), mi(n, r, await F(e, t, r.buffer));
}
async function Da(e, t, n, r) {
  return (r = ga(e.base, r)), hi(n, r, await F(e, t, r.buffer));
}
async function Oa(e, t, n, r) {
  return (r = ga(e.base, r)), gi(n, r, await F(e, t, r.buffer));
}
async function ka(e, t, n, r) {
  const i = $r(r, e.base.features);
  return _i(n, r, i ? await Ca(e, t, i) : void 0);
}
async function Aa(e, t, n, r) {
  const i = $r(r, e.base.features);
  return vi(n, r, i ? await Ca(e, t, i) : void 0);
}
async function ja(e, t, n, r) {
  const i = [],
    a = [];
  for (const [n, o] of r.entries()) i.push(await F(e, t, n)), a.push(await F(e, t, o));
  return ha(e.base, n, i, a);
}
async function Ma(e, t, n, r) {
  const i = [];
  for (const n of r.keys()) i.push(await F(e, t, n));
  return yi(n, i);
}
async function Na(e, t, n, r) {
  const i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      const o = i[a];
      if (o.parse.async && o.test(r))
        return ui(n, o.tag, await o.parse.async(r, new ba(e, t), { id: n }));
    }
}
async function Pa(e, t, n, r) {
  const [i, a] = await ia(r);
  return A(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await F(e, t, a),
    void 0,
    void 0,
    void 0,
  );
}
function Fa(e, t, n, r, i) {
  const a = [],
    o = n.on({
      next: (n) => {
        oa(this.base, t),
          F(this, e, n).then(
            (e) => {
              a.push(Ci(t, e));
            },
            (e) => {
              i(e), o();
            },
          );
      },
      throw: (n) => {
        oa(this.base, t),
          F(this, e, n).then(
            (e) => {
              a.push(wi(t, e)), r(a), o();
            },
            (e) => {
              i(e), o();
            },
          );
      },
      return: (n) => {
        oa(this.base, t),
          F(this, e, n).then(
            (e) => {
              a.push(Ti(t, e)), r(a), o();
            },
            (e) => {
              i(e), o();
            },
          );
      },
    });
}
async function Ia(e, t, n, r) {
  return Si(n, da(e.base, 4), await new Promise(Fa.bind(e, t, n, r)));
}
async function La(e, t, n, r) {
  const i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await F(e, t, r.v[n]);
  return Ei(n, i, r.t, r.d);
}
async function Ra(e, t, n, r) {
  if (Array.isArray(r)) return Sa(e, t, n, r);
  if ($i(r)) return Ia(e, t, n, r);
  if (Ni(r)) return La(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    const e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === Di) return F(e, t, r.replacement);
  const a = await Na(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return wa(e, t, n, r, !1);
    case void 0:
      return wa(e, t, n, r, !0);
    case Date:
      return ai(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return ka(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Ta(e, t, n, r);
    case ArrayBuffer:
      return va(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Ea(e, t, n, r);
    case DataView:
      return Oa(e, t, n, r);
    case Map:
      return ja(e, t, n, r);
    case Set:
      return Ma(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return Pa(e, t, n, r);
  const o = e.base.features;
  if (o & 32 && i === RegExp) return si(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return Da(e, t, n, r);
    }
  if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
    return Aa(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return oi(n, 0, r);
      case Temporal.Duration:
        return oi(n, 1, r);
      case Temporal.PlainDate:
        return oi(n, 2, r);
      case Temporal.PlainDateTime:
        return oi(n, 3, r);
      case Temporal.PlainMonthDay:
        return oi(n, 4, r);
      case Temporal.PlainTime:
        return oi(n, 5, r);
      case Temporal.PlainYearMonth:
        return oi(n, 6, r);
      case Temporal.ZonedDateTime:
        return oi(n, 7, r);
    }
  if (r instanceof Error) return ka(e, t, n, r);
  if (Qn in r || Yn in r) return wa(e, t, n, r, !!i);
  throw new Ir(r);
}
async function za(e, t, n) {
  const r = la(e.base, n);
  if (r.type !== 0) return r.value;
  const i = await Na(e, t, r.value, n);
  if (i) return i;
  throw new Ir(n);
}
async function F(e, t, n) {
  if (t >= e.base.depthLimit) throw new Ur(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? mr : hr;
    case `undefined`:
      return gr;
    case `string`:
      return ni(n);
    case `number`:
      return ti(n);
    case `bigint`:
      return ri(n);
    case `object`:
      if (n) {
        const r = la(e.base, n);
        return r.type === 0 ? await Ra(e, t + 1, r.value, n) : r.value;
      }
      return _r;
    case `symbol`:
      return ua(e.base, n);
    case `function`:
      return za(e, t, n);
    default:
      throw new Ir(n);
  }
}
async function Ba(e, t) {
  try {
    return await F(e, 0, t);
  } catch (e) {
    throw e instanceof Nr ? e : new Nr(e);
  }
}
function Va(e) {
  return e;
}
function Ha(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    const r = t[n];
    e.has(r) || (e.add(r), r.extends && Ha(e, r.extends));
  }
}
function Ua(e) {
  if (e) {
    const t = new Set();
    return Ha(t, e), [...t];
  }
}
function Wa(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new Hr(e);
  }
}
function Ga(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Ka(e) {
  switch (e) {
    case Yn:
    case Zn:
    case or:
    case Qn:
      return !0;
    default:
      return !1;
  }
}
var qa = 1e6,
  Ja = 512,
  Ya = 1e4,
  Xa = 2e4;
function Za(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Qa = 1e3;
function $a(e, t) {
  const n = t.maxBase64Length ?? qa;
  if (!Number.isSafeInteger(n) || n < 0)
    throw RangeError(`maxBase64Length must be a non-negative safe integer`);
  const r = t.refs || new Map();
  return (
    `types` in r || Object.assign(r, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: r,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Qa,
      maxBase64Length: n,
    }
  );
}
function eo(e) {
  return { mode: 2, base: $a(2, e), child: void 0 };
}
var to = class {
  constructor(e, t) {
    (this._p = e), (this.depth = t);
  }
  deserialize(e) {
    return z(this._p, this.depth, e);
  }
};
function no(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new j({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function ro(e) {
  return (
    !!e &&
    (typeof e == `object` || typeof e == `function`) &&
    `then` in e &&
    typeof e.then == `function`
  );
}
function io(e, t, n) {
  return no(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n;
}
function ao(e, t, n) {
  return no(e.base, t), e.base.refs.set(t, n), n;
}
function oo(e, t, n) {
  return e.mode === 1 ? io(e, t, n) : ao(e, t, n);
}
function so(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new j(e);
}
function co(e, t) {
  return oo(e, t.i, Xr(Dr(t.s)));
}
function lo(e, t) {
  if (!Array.isArray(t)) throw new j(e);
}
function uo(e, t, n) {
  const r = n.a;
  lo(n, r);
  const i = r.length,
    a = oo(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) (o = r[n]), o && (a[n] = z(e, t, o));
  return Za(a, n.o), a;
}
function fo(e, t, n) {
  Ga(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, { value: n, configurable: !0, enumerable: !0, writable: !0 });
}
function po(e, t, n, r, i) {
  if (typeof r == `string`) fo(n, Dr(r), z(e, t, i));
  else {
    const a = z(e, t, r);
    switch (typeof a) {
      case `string`:
        fo(n, a, z(e, t, i));
        break;
      case `symbol`:
        Ka(a) && (n[a] = z(e, t, i));
        break;
      default:
        throw new j(r);
    }
  }
}
function mo(e, t, n) {
  e.base.refs.types.set(t, n);
}
function I(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new j(t);
}
function ho(e, t, n, r) {
  const i = n.k;
  if ((lo(n, i), lo(n, n.v), i.length > 0))
    for (let a = 0, o = n.v, s = i.length; a < s; a++) po(e, t, r, i[a], o[a]);
  return r;
}
function go(e, t, n) {
  const r = oo(e, n.i, n.t === 10 ? {} : Object.create(null));
  return ho(e, t, n.p, r), Za(r, n.o), r;
}
function L(e, t) {
  return oo(e, t.i, new Date(t.s));
}
function R(e, t) {
  if (!(e.base.features & 64)) throw new Lr(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new j(t);
  }
  return oo(e, t.i, n);
}
function _o(e, t) {
  if (e.base.features & 32) {
    const n = Dr(t.c);
    if (n.length > Xa) throw new j(t);
    return oo(e, t.i, new RegExp(n, t.m));
  }
  throw new Lr(t);
}
function vo(e, t, n) {
  const r = oo(e, n.i, new Set());
  lo(n, n.a);
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(z(e, t, a[i]));
  return r;
}
function yo(e, t, n) {
  const r = oo(e, n.i, new Map());
  lo(n, n.e.k), lo(n, n.e.v);
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(z(e, t, a[i]), z(e, t, o[i]));
  return r;
}
function bo(e, t) {
  if (typeof t.s != `string`) throw new j(t);
  if (t.s.length > e.base.maxBase64Length)
    throw RangeError(`ArrayBuffer exceeds maxBase64Length (` + e.base.maxBase64Length + `)`);
  let n = Dr(t.s),
    r;
  if (n.length < Ja || typeof Buffer > `u`) r = ji(n);
  else {
    const e = atob(n);
    (r = new ArrayBuffer(e.length)), Buffer.from(r).write(e, `latin1`);
  }
  return oo(e, t.i, r);
}
function xo(e, t, n) {
  const r = Wa(n.c),
    i = z(e, t, n.f);
  if (!(i instanceof ArrayBuffer)) throw new j(n);
  const a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new j(n);
  return oo(e, n.i, new r(i, a, n.l));
}
function So(e, t, n) {
  const r = z(e, t, n.f);
  if (!(r instanceof ArrayBuffer)) throw new j(n);
  const i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new j(n);
  return oo(e, n.i, new DataView(r, i, n.l));
}
function Co(e, t, n, r) {
  if (n.p) {
    const i = ho(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function wo(e, t, n) {
  return Co(e, t, n, oo(e, n.i, AggregateError([], Dr(n.m))));
}
function To(e, t, n) {
  const r = so(n, fr, n.s);
  return Co(e, t, n, oo(e, n.i, new r(Dr(n.m))));
}
function Eo(e, t, n) {
  const r = Oi(),
    i = oo(e, n.i, r.p),
    a = z(e, t, n.f);
  if (ro(a)) throw new j(n.f);
  return n.s ? r.s(a) : r.f(a), i;
}
function Do(e, t, n) {
  return oo(e, n.i, Object(z(e, t, n.f)));
}
function Oo(e, t, n) {
  const r = e.base.plugins;
  if (r) {
    const i = Dr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      const o = r[a];
      if (o.tag === i) return oo(e, n.i, o.deserialize(n.s, new to(e, t), { id: n.i }));
    }
  }
  throw new Rr(n.c);
}
function ko(e, t) {
  const n = oo(e, t.i, oo(e, t.s, Oi()).p);
  return mo(e, t.s, 22), n;
}
function Ao(e, t, n) {
  const r = e.base.refs.get(n.i);
  if (r) {
    I(e, n, n.i, 22);
    const i = z(e, t, n.a[1]);
    if (ro(i)) throw new j(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new zr(`Promise`);
}
function jo(e, t, n) {
  z(e, t, n.a[0]);
  const r = z(e, t, n.a[1]);
  if (!Ni(r)) throw new j(n.a[1]);
  return Li(r);
}
function Mo(e, t, n) {
  z(e, t, n.a[0]);
  const r = z(e, t, n.a[1]);
  if (!$i(r)) throw new j(n.a[1]);
  return ra(r);
}
function No(e, t, n) {
  const r = oo(e, n.i, ea());
  mo(e, n.i, 31);
  const i = n.a;
  lo(n, i);
  const a = i.length;
  if (a) for (let n = 0; n < a; n++) z(e, t, i[n]);
  return r;
}
function Po(e, t, n) {
  const r = e.base.refs.get(n.i);
  if (r) {
    I(e, n, n.i, 31), r.next(z(e, t, n.f));
    return;
  }
  throw new zr(`Stream`);
}
function Fo(e, t, n) {
  const r = e.base.refs.get(n.i);
  if (r) {
    I(e, n, n.i, 31), r.throw(z(e, t, n.f));
    return;
  }
  throw new zr(`Stream`);
}
function Io(e, t, n) {
  const r = e.base.refs.get(n.i);
  if (r) {
    I(e, n, n.i, 31), r.return(z(e, t, n.f));
    return;
  }
  throw new zr(`Stream`);
}
function Lo(e, t, n) {
  z(e, t, n.f);
}
function Ro(e, t, n) {
  z(e, t, n.a[1]);
}
function zo(e, t) {
  return Number.isInteger(e) && e >= -1 && e < t;
}
function Bo(e, t, n) {
  lo(n, n.a);
  const r = n.a.length;
  if (!(zo(n.s, r) && zo(n.l, r))) throw new j(n);
  const i = oo(e, n.i, Pi([], n.s, n.l));
  for (let a = 0; a < r; a++) i.v[a] = z(e, t, n.a[a]);
  return i;
}
function z(e, t, n) {
  if (t > e.base.depthLimit) throw new Ur(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return so(n, ur, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return Dr(String(n.s));
    case 3:
      if (String(n.s).length > Ya) throw new j(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return co(e, n);
    case 9:
      return uo(e, t, n);
    case 10:
    case 11:
      return go(e, t, n);
    case 5:
      return L(e, n);
    case 6:
      return _o(e, n);
    case 7:
      return vo(e, t, n);
    case 8:
      return yo(e, t, n);
    case 19:
      return bo(e, n);
    case 16:
    case 15:
      return xo(e, t, n);
    case 20:
      return So(e, t, n);
    case 14:
      return wo(e, t, n);
    case 13:
      return To(e, t, n);
    case 12:
      return Eo(e, t, n);
    case 17:
      return so(n, lr, n.s);
    case 21:
      return Do(e, t, n);
    case 25:
      return Oo(e, t, n);
    case 22:
      return ko(e, n);
    case 23:
    case 24:
      return Ao(e, t, n);
    case 28:
      return jo(e, t, n);
    case 30:
      return Mo(e, t, n);
    case 31:
      return No(e, t, n);
    case 32:
      return Po(e, t, n);
    case 33:
      return Fo(e, t, n);
    case 34:
      return Io(e, t, n);
    case 27:
      return Lo(e, t, n);
    case 29:
      return Ro(e, t, n);
    case 35:
      return Bo(e, t, n);
    case 36:
      return R(e, n);
    default:
      throw new Lr(n);
  }
}
function Vo(e, t) {
  try {
    return z(e, 0, t);
  } catch (e) {
    throw new Pr(e);
  }
}
function Ho(e, t) {
  const n = Ua(t.plugins);
  return Vo(
    eo({
      maxBase64Length: t.maxBase64Length,
      plugins: n,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function Uo(e, t = {}) {
  const n = Ua(t.plugins),
    r = ya(1, {
      compactArrayBufferViews: t.compactArrayBufferViews,
      plugins: n,
      disabledFeatures: t.disabledFeatures,
    });
  return { t: await Ba(r, e), f: r.base.features, m: Array.from(r.base.marked) };
}
function Wo(e) {
  return Va({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Go = Va({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Ko = class {
    constructor(e, t) {
      (this.stream = e), (this.hint = t?.hint ?? `binary`);
    }
  };
function qo(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 32768)
    t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
  return btoa(t.join(``));
}
var Jo = new TextDecoder(`utf-8`, { fatal: !0, ignoreBOM: !0 });
function Yo(e) {
  try {
    return `t` + Jo.decode(e);
  } catch {
    return `b` + qo(e);
  }
}
function Xo(e, t, n) {
  n?.throwIfAborted();
  let r = ea(),
    i = e.getReader(),
    a = !0,
    o = () => {
      (a = !1), n?.removeEventListener(`abort`, c), i.releaseLock();
    },
    s = (e) => (a ? (i.cancel(e).catch(() => {}), o(), !0) : !1),
    c = () => {
      s(n.reason) && r.throw(n.reason);
    };
  return (
    n?.addEventListener(`abort`, c),
    (async () => {
      try {
        for (; a; ) {
          const { done: e, value: n } = await i.read();
          if (!a) return;
          if (e) {
            o(), r.return(void 0);
            return;
          }
          r.next(t(n));
        }
      } catch (e) {
        s(e) && r.throw(e);
      }
    })(),
    [r, s]
  );
}
function Zo(e) {
  return Va({
    tag: `tss/RawStream`,
    test: (e) => e instanceof Ko,
    parse: {
      async: async (t, n) => {
        const r = await n.parse(t.hint === `text`),
          [i] = Xo(t.stream, t.hint === `text` ? Yo : qo, e);
        return { text: r, stream: await n.parse(i) };
      },
    },
    serialize: void 0,
    deserialize: void 0,
  });
}
var Qo = Zo(),
  $o = {},
  es = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  ts = Va({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === $o;
    },
    parse: {
      sync() {
        return $o;
      },
      async async() {
        return await Promise.resolve($o);
      },
      stream() {
        return $o;
      },
    },
    serialize() {
      return es.toString();
    },
    deserialize() {
      return $o;
    },
  });
async function ns(e, t) {
  try {
    for (;;) {
      const n = await t.read();
      if (n.done) {
        e.return(n.value), t.releaseLock();
        break;
      }
      e.next(n.value);
    }
  } catch (n) {
    t.releaseLock(), e.throw(n);
  }
}
function rs(e) {
  e.cancel().catch(() => {}), e.releaseLock();
}
function is(e) {
  const t = ea(),
    n = e.getReader(),
    r = rs.bind(null, n);
  return ns(t, n).catch(r), [t, r];
}
var as = Va({
  tag: `seroval/plugins/web/ReadableStream`,
  extends: [ts],
  test(e) {
    return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
  },
  parse: {
    sync(e, t) {
      return { factory: t.parse($o), stream: t.parse(ea()) };
    },
    async async(e, t) {
      return { factory: await t.parse($o), stream: await t.parse(is(e)[0]) };
    },
    stream(e, t) {
      const [n, r] = is(e);
      return t.addCleanup(r), { factory: t.parse($o), stream: t.parse(n) };
    },
  },
  serialize(e, t) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t) {
    const n = t.deserialize(e.stream);
    if (!n || typeof n != `object` || !$i(n)) throw Error(`Expected a stream source.`);
    return es(n);
  },
});
function os(e) {
  return [Go, e ? Zo(e) : Qo, as];
}
[...os()];
function ss(e) {
  return Va({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize: void 0,
    deserialize(t, n) {
      return e(n.deserialize(t.streamId));
    },
  });
}
function cs(e) {
  return [...(b()?.serializationAdapters?.map(Wo) ?? []), ...e];
}
function ls(e) {
  return cs(os(e));
}
var us = new TextDecoder(),
  ds = new Uint8Array(),
  fs = new ByteLengthQueuingStrategy({ highWaterMark: 0 });
function ps(e) {
  let t = e.getReader(),
    n = new Map(),
    r = 0,
    i,
    a,
    o = () => {
      i?.(), (i = void 0);
    },
    s = (e, t) => {
      const n = e[1];
      (e[1] = !1), n && (t === 1 ? n.close() : n.error(t[0]));
    },
    c = new ReadableStream({
      start(e) {
        a = e;
      },
      pull: o,
      cancel(e) {
        const i = [e === void 0 ? Error(`Framed response cancelled`) : e];
        (r = i), o(), t.cancel(e).catch(() => {});
        for (const e of n.values()) s(e, i);
      },
    });
  function l(e) {
    const t = n.get(e);
    if (t) return t;
    if (n.size >= 1024) throw Error(`Too many raw streams`);
    let i,
      a = [
        new ReadableStream(
          {
            start(e) {
              i = e;
            },
            cancel() {
              a[1] !== !1 && (a[1] = null);
            },
          },
          fs,
        ),
        i,
      ];
    return n.set(e, a), r !== 0 && s(a, r), a;
  }
  function u(e) {
    if (e === 0 || e >>> 0 !== e) throw RangeError(`Invalid raw stream ID`);
    return l(e)[0];
  }
  return (
    (async () => {
      let e = ds,
        o = 0;
      async function c() {
        for (; o === e.byteLength; ) {
          (e = ds), (o = 0);
          const n = await t.read();
          if (r !== 0 || n.done) return !1;
          e = n.value;
        }
        return !0;
      }
      async function u(t, n) {
        if (t === 0) return ds;
        if (!(await c())) {
          if (n) return;
          throw Error(`Incomplete frame`);
        }
        if (e.byteLength - o >= t) {
          const n = e.subarray(o, o + t);
          return (o += t), o === e.byteLength && ((e = ds), (o = 0)), n;
        }
        let r = new Uint8Array(t),
          i = 0;
        for (; i < t; ) {
          if (!(await c())) throw Error(`Incomplete frame`);
          const n = Math.min(t - i, e.byteLength - o);
          r.set(e.subarray(o, o + n), i), (o += n), (i += n);
        }
        return o === e.byteLength && ((e = ds), (o = 0)), r;
      }
      try {
        for (; r === 0; ) {
          let e = await u(9, !0);
          if (r !== 0) return;
          if (!e) {
            for (const e of n.values()) if (e[1]) throw Error(`Incomplete raw stream`);
            (r = 1), a.close();
            return;
          }
          const t = e[0],
            o = ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            c = ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0;
          if (((e = ds), t > 3 || (t === 0) != (o === 0) || c > 16777216 || (t === 2 && c !== 0)))
            throw Error(`Invalid frame`);
          const d = t === 0 ? void 0 : l(o);
          if (d?.[1] === !1) throw Error(`Raw stream already ended`);
          let f = await u(c);
          if (r !== 0) return;
          if (!d) {
            const e = us.decode(f);
            for (f = ds, a.enqueue(e); r === 0 && a.desiredSize <= 0; )
              await new Promise((e) => {
                i = e;
              });
            continue;
          }
          if (t === 1) {
            const e = d[1];
            if (e) {
              if (-e.desiredSize > 134217728) {
                e.error(Error(`Raw stream ${o} has too many unread bytes`)),
                  (d[1] = null),
                  (f = ds);
                continue;
              }
              const t = f.byteLength * 4 < f.buffer.byteLength ? f.slice() : f;
              (f = ds), e.enqueue(t);
            }
          } else s(d, t === 2 ? 1 : [Error(us.decode(f))]);
        }
      } catch (e) {
        if (r === 0) {
          const i = [e];
          (r = i), t.cancel(e).catch(() => {}), a.error(e);
          for (const e of n.values()) s(e, i);
        }
      } finally {
        (e = ds), t.releaseLock();
      }
    })(),
    [c, u]
  );
}
var ms = Symbol.for(`TSR_DEFERRED_PROMISE`);
function hs(e, t) {
  const n = e;
  return n[ms]
    ? n
    : ((n[ms] = { status: `pending` }),
      n
        .then((e) => {
          (n[ms].status = `success`), (n[ms].data = e);
        })
        .catch((e) => {
          (n[ms].status = `error`),
            (n[ms].error = { data: (t?.serializeError ?? Rt)(e), __isServerError: !0 });
        }),
      n);
}
var gs = `Error preloading route! ☝️`;
function _s(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function vs(e) {
  return e?.scriptFormat ?? `module`;
}
function ys(e, t, n) {
  const r = bs(t),
    i = _s(n, `script`) ?? r.crossOrigin;
  return {
    ...(vs(e) === `iife` ? { rel: `preload`, as: `script` } : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function bs(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function xs(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  const n = new Set();
  for (const r of t) {
    const t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function Ss(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Cs(e, t, n, r) {
  const i = on(e),
    a = [],
    o = [];
  for (const e of i)
    for (const t of Array.isArray(e.scripts) ? e.scripts : []) {
      if (!t) continue;
      const { children: e, ...i } = t;
      a.push({ tag: `script`, attrs: { ...i, ...r, nonce: n }, children: e });
    }
  if (t)
    for (const e of i)
      for (const r of t.routes[e.routeId]?.scripts ?? [])
        o.push({ tag: `script`, attrs: { ...r.attrs, nonce: n }, children: r.children });
  return [a, o];
}
function ws([e, t], n) {
  return n ? [...n.before, ...e, ...t, n.boundary] : [...e, ...t];
}
var Ts = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          (this.originalIndex = e), (this._branch = void 0);
          const t = this.options,
            n = !t?.path && !t?.id;
          (this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = yt) : this.parentRoute || Ae();
          let r = n ? yt : t?.path;
          r && r !== `/` && (r = be(r));
          const i = t?.id || r,
            a = n
              ? yt
              : ye(
                  (this.parentRoute.id === `__root__` ? `` : this.parentRoute.id) + `/` + (i ?? ``),
                );
          r === `__root__` && (r = `/`);
          const o =
            a === `__root__`
              ? `/`
              : r === void 0
                ? this.parentRoute.fullPath
                : ye(this.parentRoute.fullPath + `/` + r);
          (this._path = r), (this._id = a), (this._fullPath = o), (this._to = xe(o));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => S({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  Es = class extends Ts {
    constructor(e) {
      super(e);
    }
  };
function Ds(e) {
  return e;
}
var Os;
function ks(e, t, n) {
  try {
    return Ho(e, t);
  } catch (e) {
    throw (js(n), e);
  }
}
async function As(e) {
  e.length > 0 && (await Promise.allSettled(e), (e.length = 0));
}
function js(e) {
  for (const t of e) t.catch(() => {});
  e.length = 0;
}
var Ms = Object.prototype.hasOwnProperty;
function Ns(e) {
  for (const t in e) if (Ms.call(e, t)) return !0;
  return !1;
}
async function Ps(e, t, n) {
  Os ||= ls();
  const r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData,
    o = new Headers(r.headers);
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a || o.set(`accept`, `${y}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a) throw Error(`FormData is not supported with GET requests`);
    const t = await Fs(r);
    if (t !== void 0) {
      const n = dt({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  return (
    r.method === `POST` &&
      ((s = await Ls(r)), typeof s == `string` && o.set(`content-type`, `application/json`)),
    Rs(() => i(e, { method: r.method, headers: o, signal: r.signal, body: s }))
  );
}
async function Fs(e) {
  let t;
  return (
    e.data !== void 0 && (t = { data: e.data }),
    e.context && Ns(e.context) && ((t ??= {}).context = e.context),
    t ? Is(t, e.signal) : void 0
  );
}
async function Is(e, t) {
  t?.throwIfAborted();
  let n;
  try {
    n = await Uo(e, { plugins: t ? ls(t) : Os });
  } finally {
    t?.throwIfAborted();
  }
  return JSON.stringify(n);
}
async function Ls(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && Ns(e.context) && (t = await Is(e.context, e.signal)),
      t !== void 0 && e.data.set(_, t),
      e.data
    );
  }
  return Fs(e);
}
async function Rs(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw e;
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  const n = t.headers.get(`content-type`);
  if ((n || Ae(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      const r = /;\s*v=(\d+)/.exec(n)?.[1];
      if (r && +r != 1) throw Error(`Unsupported framed protocol version ${r}`);
      if (!t.body) throw Error(`No response body for framed response`);
      const [i, a] = ps(t.body);
      e = await zs(i, [ss(a), ...Os]);
    } else if (n.includes(`application/json`)) {
      const n = await t.json(),
        r = [];
      (e = ks(n, { plugins: Os }, r)), await As(r);
    }
    if ((e || Ae(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    const e = await t.json(),
      n = w(e);
    if (n) throw n;
    if (x(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function zs(e, t) {
  let n = e.getReader(),
    r = { refs: new Map(), plugins: t },
    i = (e) => {
      n.cancel(e).catch(() => {});
    },
    a,
    o = [];
  try {
    const e = await n.read();
    if (e.done) throw Error(`Stream ended before first object`);
    a = ks(JSON.parse(e.value), r, o);
  } catch (e) {
    throw (i(e), n.releaseLock(), e);
  }
  return (
    (async () => {
      const e = [];
      try {
        for (;;) {
          const t = await n.read();
          if (t.done) return;
          ks(JSON.parse(t.value), r, e), js(e);
        }
      } catch (e) {
        i(e), console.error(`Stream processing error:`, e);
      } finally {
        n.releaseLock();
      }
    })(),
    await As(o),
    a
  );
}
function Bs(e) {
  const t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      const n = b()?.serverFns?.fetch;
      return Ps(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [v]: !0 },
  );
}
var Vs = Ds({
    key: `$TSS/serverfn`,
    test: (e) => (typeof e != `function` || !(v in e) ? !1 : !!e[v]),
    toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
    fromSerializable: ({ functionId: e }) => Bs(e),
  }),
  B = c(u(), 1),
  Hs = B.use,
  Us = B.useLayoutEffect,
  Ws = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if ((r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n))
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (n = r.ref), { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r };
    }
    (e.Fragment = n), (e.jsx = r), (e.jsxs = r);
  }),
  Gs = o((e, t) => {
    t.exports = Ws();
  }),
  V = Gs();
function Ks({ promise: e }) {
  if (Hs) return Hs(e);
  const t = hs(e);
  if (t[ms].status === `pending`) throw t;
  if (t[ms].status === `error`) throw t[ms].error;
  return t[ms].data;
}
function qs(e) {
  const t = (0, V.jsx)(Js, { ...e });
  return e.fallback ? (0, V.jsx)(B.Suspense, { fallback: e.fallback, children: t }) : t;
}
function Js(e) {
  const t = Ks(e);
  return e.children(t);
}
var Ys = class extends B.Component {
  constructor(...e) {
    super(...e),
      (this.state = { error: 0 }),
      (this.reset = () => {
        this.setState({ error: 0 });
      });
  }
  static getDerivedStateFromProps(e, t) {
    const n = e.getResetKey();
    return t.error && t.resetKey !== n ? { resetKey: n, error: 0 } : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: [e] };
  }
  componentDidCatch(e, t) {
    this.props.onCatch?.(e, t);
  }
  render() {
    const e = this.state.error;
    return e
      ? B.createElement(this.props.errorComponent ?? Xs, { error: e[0], reset: this.reset })
      : this.props.children;
  }
};
function Xs({ error: e }) {
  const [t, n] = B.useState(!1);
  return (0, V.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, V.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, V.jsx)(`strong`, { style: { fontSize: `1rem` }, children: `Something went wrong!` }),
          (0, V.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, V.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, V.jsx)(`div`, {
            children: (0, V.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e?.message ? (0, V.jsx)(`code`, { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
var Zs = () => !0,
  Qs = () => !1;
function $s({ children: e, fallback: t = null }) {
  return (0, V.jsx)(B.Fragment, { children: ec() ? e : t });
}
function ec(e = !0) {
  return B.useSyncExternalStore(tc, Zs, e ? Qs : Zs);
}
function tc() {
  return () => {};
}
var nc = B.createContext(null);
function rc(e) {
  return B.useContext(nc);
}
var ic = B.createContext(void 0),
  ac = B.createContext(void 0);
function oc({ update: e, notify: t, unwatched: n }) {
  return { link: r, unlink: i, propagate: a, checkDirty: o, shallowPropagate: s };
  function r(e, t, n) {
    const r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    const i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      (i.version = n), (t.depsTail = i);
      return;
    }
    const a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    const o =
      (t.depsTail =
      e.subsTail =
        { version: n, dep: e, sub: t, prevDep: r, nextDep: i, prevSub: a, nextSub: void 0 });
    i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o);
  }
  function i(e, t = e.sub) {
    const r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        const t = i.subs;
        if (t !== void 0) {
          const i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0; )
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      const o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          const e = o.subs;
          e.nextSub !== void 0 && s(e), (a = !0);
        }
      } else if ((c & 33) == 33) {
        (t.nextSub !== void 0 || t.prevSub !== void 0) && (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i;
        continue;
      }
      if (!a) {
        const e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--; ) {
        const i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            o && s(i), (n = t.sub);
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        const c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      const n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0; ) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function sc(e, t, n) {
  const r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var cc = [],
  lc = 0,
  {
    link: uc,
    unlink: dc,
    propagate: fc,
    checkDirty: pc,
    shallowPropagate: mc,
  } = oc({
    update(e) {
      return e._update();
    },
    notify(e) {
      (cc[gc++] = e), (e.flags &= -3);
    },
    unwatched(e) {
      e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = 17), bc(e));
    },
  }),
  hc = 0,
  gc = 0,
  _c,
  vc = 0;
function yc(e) {
  try {
    ++vc, e();
  } finally {
    --vc || xc();
  }
}
function bc(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0; ) n = dc(n, e);
}
function xc() {
  if (!(vc > 0)) {
    for (; hc < gc; ) {
      const e = cc[hc];
      (cc[hc++] = void 0), e.notify();
    }
    (hc = 0), (gc = 0);
  }
}
function Sc(e, t) {
  const n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: +!n,
      get() {
        return _c !== void 0 && uc(i, _c, lc), i._snapshot;
      },
      subscribe(e) {
        const t = sc(e),
          n = { current: !1 },
          r = Cc(() => {
            i.get(), n.current ? ((_c = void 0), t.next?.(i._snapshot)) : (n.current = !0);
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        const a = _c,
          o = t?.compare ?? Object.is;
        if (n) (_c = i), ++lc, (i.depsTail = void 0);
        else if (e === void 0) return !1;
        n && (i.flags = 5);
        try {
          const t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          (_c = a), n && (i.flags &= -5), bc(i);
        }
      },
    };
  return (
    n
      ? ((i.flags = 17),
        (i.get = () => {
          const e = i.flags;
          if (e & 16 || (e & 32 && pc(i.deps, i))) {
            if (i._update()) {
              const e = i.subs;
              e !== void 0 && mc(e);
            }
          } else e & 32 && (i.flags = e & -33);
          return _c !== void 0 && uc(i, _c, lc), i._snapshot;
        }))
      : (i.set = (e) => {
          if (i._update(e)) {
            const e = i.subs;
            e !== void 0 && (fc(e), mc(e), xc());
          }
        }),
    i
  );
}
function Cc(e) {
  const t = () => {
      const t = _c;
      (_c = n), ++lc, (n.depsTail = void 0), (n.flags = 6);
      try {
        return e();
      } finally {
        (_c = t), (n.flags &= -5), bc(n);
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: 6,
      notify() {
        const e = this.flags;
        e & 16 || (e & 32 && pc(this.deps, this)) ? t() : (this.flags = 2);
      },
      stop() {
        (this.flags = 0), (this.depsTail = void 0), bc(this);
      },
    };
  return t(), n;
}
var wc = o((e) => {
    var t = u();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(() => {
          (c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c });
        }, [e, n, t]),
        a(
          () => (
            l(c) && u({ inst: c }),
            e(() => {
              l(c) && u({ inst: c });
            })
          ),
          [e],
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` || window.document === void 0 || window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Tc = o((e, t) => {
    t.exports = wc();
  }),
  Ec = o((e) => {
    var t = u(),
      n = Tc();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = (e, t, n, r, u) => {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(() => {
        function e(e) {
          if (!a) {
            if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
              var t = f.value;
              if (u(t, e)) return (s = t);
            }
            return (s = e);
          }
          if (((t = s), i(o, e))) return t;
          var n = r(e);
          return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n));
        }
        var a = !1,
          o,
          s,
          c = n === void 0 ? null : n;
        return [() => e(t()), c === null ? void 0 : () => e(c())];
      }, [t, n, r, u]);
      var p = a(e, d[0], d[1]);
      return (
        s(() => {
          (f.hasValue = !0), (f.value = p);
        }, [p]),
        l(p),
        p
      );
    };
  }),
  Dc = o((e, t) => {
    t.exports = Ec();
  })();
function Oc(e, t) {
  return e === t;
}
function kc(e, t = (e) => e, n) {
  const r = n?.compare ?? Oc,
    i = (0, B.useCallback)(
      (t) => {
        const { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    a = (0, B.useCallback)(() => e.get(), [e]);
  return (0, Dc.useSyncExternalStoreWithSelector)(i, a, a, t, r);
}
var Ac = {};
function jc(e, t) {
  const n = B.useRef();
  return (r) => {
    const i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = ae(n.current, i))
      : i;
  };
}
function Mc(e) {
  const t = rc(),
    n = B.useContext(e.from ? ac : ic),
    r = e.from ?? n,
    i = t.stores.getMatchStore(r),
    a = jc(e, t),
    o = kc(i, (e) => (e ? a(e) : Ac));
  if (o !== Ac) return o;
  (e.shouldThrow ?? !0) && Ae();
}
function Nc(e) {
  return Mc({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function Pc(e) {
  const { select: t, ...n } = e;
  return Mc({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function Fc(e) {
  return Mc({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      const n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function Ic(e) {
  return Mc({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Lc(e) {
  const t = rc();
  return B.useCallback((n) => t.navigate({ ...n, from: n.from ?? e?.from }), [e?.from, t]);
}
function Rc(e) {
  return Mc({ ...e, select: (t) => (e.select ? e.select(t.context) : t.context) });
}
function zc(...e) {
  const t = B.useRef(e),
    n = t.current;
  return (
    e.forEach((e, t) => {
      se(n[t], e, !1, !0) || (n[t] = e);
    }),
    t.current
  );
}
function H(e, t) {
  e.preloadRoute(t).catch((e) => {
    console.warn(e), console.warn(gs);
  });
}
var Bc = { compare: (e, t) => e[0] === t[0] && e[1] === t[1] };
function Vc(e, t) {
  const n = typeof e == `string` && de(e);
  if (n) return t.has(n) ? e : null;
}
function Hc(e, t, n, r, i) {
  const a = Ce(e.pathname, r),
    o = Ce(t.pathname, r);
  return (n?.exact
    ? a !== o
    : !(a.startsWith(o) && (a.length === o.length || a[o.length] === `/`))) ||
    ((n?.includeSearch ?? !0) && !se(e.search, t.search, !n?.exact, n?.explicitUndefined))
    ? !1
    : !n?.includeHash || (i && e.hash === t.hash);
}
function Uc(e, t, n) {
  const r = rc(),
    i = B.useRef(null),
    a = B.useCallback(
      (e) => {
        if (((i.current = e), typeof t == `function`)) return t(e);
        t && (t.current = e);
      },
      [t],
    ),
    {
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      hashScrollIntoView: u,
      replace: d,
      startTransition: f,
      resetScroll: p,
      viewTransition: m,
      ignoreBlocker: h,
      disabled: g,
      target: _,
      onClick: v,
      onBlur: y,
      onFocus: b,
      onMouseEnter: x,
      onMouseLeave: S,
      onTouchStart: C,
    } = e,
    w = ec(!!o?.includeHash),
    [ee, T, te] = zc(e.search, e.params, o),
    [E, ne] = B.useMemo(
      () => [e, { ...e }],
      [r, e.from, e._fromLocation, e.hash, e.to, ee, T, e.state, e.mask, e.unsafeRelative],
    ),
    re = B.useMemo(() => {
      const e = Vc(s, r.protocolAllowlist);
      if (e !== void 0) {
        const t = [e ?? void 0];
        return () => t;
      }
      let t, n;
      return (e) => {
        E._fromLocation || (ne._fromLocation = e);
        const i = r.buildLocation(ne),
          a = Qc(i, r, g);
        return (
          (!t || t[0] !== a) && ((t = [a, !(g || (a && !de(a))) && void 0]), (n = [a, !0])),
          t[1] !== void 0 && Hc(e, i, te, r.basepath, w) ? n : t
        );
      };
    }, [te, g, w, E, ne, r, s]),
    [ie, ae] = kc(r.stores.location, re, Bc),
    oe = ae === void 0 && ie,
    se = g || ie === void 0,
    ce = B.useRef(!1),
    D = e.reloadDocument || oe || se ? !1 : (c ?? r.options.defaultPreload),
    O = l ?? r.options.defaultPreloadDelay ?? 0,
    le = B.useCallback(
      (e) => {
        const t = e?.isIntersecting;
        if (!(t ?? D === `intent`)) {
          t === !1 && Xc(i);
          return;
        }
        if (!O) {
          H(r, E);
          return;
        }
        Yc.has(i) ||
          Yc.set(
            i,
            setTimeout(() => {
              Yc.delete(i), H(r, E);
            }, O),
          );
      },
      [r, E, i, D, O],
    );
  B.useEffect(() => {
    if (!D) return;
    D === `render` && !ce.current && ((ce.current = !0), H(r, E));
    let e = !0,
      t;
    return (
      D === `viewport` &&
        i.current &&
        typeof IntersectionObserver == `function` &&
        ((t = new IntersectionObserver(
          (t) => {
            e && le(t.pop());
          },
          { rootMargin: `100px` },
        )),
        t.observe(i.current)),
      () => {
        (e = !1), t?.disconnect(), Xc(i);
      }
    );
  }, [r, E, D, le, i]);
  const ue = qc(e, n);
  if (((ue.ref = t ? a : i), oe)) return (ue.href = oe), ue;
  const fe = (e) => {
      const t = _ ?? e.currentTarget.getAttribute(`target`);
      !se &&
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        (!t || t === `_self`) &&
        e.button === 0 &&
        (e.preventDefault(),
        r.navigate({
          ...E,
          replace: d,
          resetScroll: p,
          hashScrollIntoView: u,
          startTransition: f,
          viewTransition: m,
          ignoreBlocker: h,
        }));
    },
    pe = () => {
      D === `intent` && H(r, E);
    },
    k = () => {
      D === `intent` && Xc(i);
    };
  return (
    (ue.onClick = Zc(v, fe)),
    (ue.onBlur = Zc(y, k)),
    (ue.onFocus = Zc(b, le)),
    (ue.onMouseEnter = Zc(x, le)),
    (ue.onMouseLeave = Zc(S, k)),
    (ue.onTouchStart = Zc(C, pe)),
    Jc(ue, e, ae, ie, se, n)
  );
}
var Wc = {},
  Gc = { className: `active` },
  Kc = new Set([
    `to`,
    `params`,
    `search`,
    `hash`,
    `state`,
    `mask`,
    `from`,
    `unsafeRelative`,
    `_fromLocation`,
    `reloadDocument`,
    `preload`,
    `preloadDelay`,
    `preloadIntentProximity`,
    `hashScrollIntoView`,
    `replace`,
    `startTransition`,
    `resetScroll`,
    `viewTransition`,
    `ignoreBlocker`,
    `activeProps`,
    `inactiveProps`,
    `activeOptions`,
    `_asChild`,
  ]);
function qc(e, t) {
  const n = {};
  for (const r in e)
    Kc.has(r) || (r === `type` && t !== void 0) || (r === `disabled` && t === `a`) || (n[r] = e[r]);
  return n;
}
function Jc(e, t, n, r, i, a) {
  const { activeProps: o, inactiveProps: s, className: c, style: l, target: u } = t,
    d = te(n ? o : s, {}) ?? (n ? Gc : Wc);
  Object.assign(e, d), (e.href = r), a !== `a` && (e.disabled = i), (e.target = u);
  const f = d.style;
  (l || f) && (e.style = l && f ? { ...l, ...f } : l || f);
  const p = d.className;
  return (
    (c || p) && (e.className = c ? (p ? `${c} ${p}` : c) : p),
    i && ((e.role = `link`), (e[`aria-disabled`] = !0)),
    n && ((e[`data-status`] = `active`), (e[`aria-current`] = `page`)),
    e
  );
}
var Yc = new WeakMap(),
  Xc = (e) => {
    clearTimeout(Yc.get(e)), Yc.delete(e);
  },
  Zc = (e, t) => (e ? (n) => n.defaultPrevented || (e(n), n.defaultPrevented || t(n)) : t);
function Qc(e, t, n) {
  if (n) return;
  const r = e.maskedLocation ?? e,
    i = r.external ? r.publicHref : t.history.createHref(r.publicHref) || `/`;
  if (!((r.external || i !== r.publicHref) && pe(i, t.protocolAllowlist))) return i;
}
var $c = B.memo(
  B.forwardRef((e, t) => {
    const n = e._asChild || `a`,
      r = Uc(e, t, n),
      i =
        typeof e.children == `function`
          ? e.children({ isActive: r[`data-status`] === `active` })
          : e.children;
    return B.createElement(n, r, i);
  }),
  el,
);
function el(e, t) {
  let n = 0;
  for (const r in t) if ((n++, e[r] !== t[r] && (!Kc.has(r) || !se(e[r], t[r], !1, !0)))) return !1;
  for (const t in e) n--;
  return n === 0;
}
var tl = class extends Ts {
  constructor(e) {
    super(e),
      (this.useMatch = (e) => Mc({ ...e, from: this.id })),
      (this.useRouteContext = (e) => Rc({ ...e, from: this.id })),
      (this.useSearch = (e) => Ic({ ...e, from: this.id })),
      (this.useParams = (e) => Fc({ ...e, from: this.id })),
      (this.useLoaderDeps = (e) => Pc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Nc({ ...e, from: this.id })),
      (this.useNavigate = () => Lc({ from: this.fullPath })),
      (this.Link = B.forwardRef((e, t) => (0, V.jsx)($c, { ref: t, from: this.fullPath, ...e })));
  }
};
function nl(e) {
  return new tl(e);
}
function rl() {
  return (e) => al(e);
}
var il = class extends Es {
  constructor(e) {
    super(e),
      (this.useMatch = (e) => Mc({ ...e, from: this.id })),
      (this.useRouteContext = (e) => Rc({ ...e, from: this.id })),
      (this.useSearch = (e) => Ic({ ...e, from: this.id })),
      (this.useParams = (e) => Fc({ ...e, from: this.id })),
      (this.useLoaderDeps = (e) => Pc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Nc({ ...e, from: this.id })),
      (this.useNavigate = () => Lc({ from: this.fullPath })),
      (this.Link = B.forwardRef((e, t) => (0, V.jsx)($c, { ref: t, from: this.fullPath, ...e })));
  }
};
function al(e) {
  return new il(e);
}
function ol(e) {
  return (e) => {
    const t = nl(e);
    return (t.isRoot = !1), t;
  };
}
function sl(e, t) {
  let n,
    r,
    i,
    a = () => (
      (n ||=
        ((i = void 0),
        e()
          .then((e) => {
            (n = void 0), (o.preload = void 0), (r = e[t ?? `default`]);
          })
          .catch((e) => {
            (n = void 0), (i = e);
          }))),
      n
    ),
    o = (e) => {
      if (i) {
        if (ce(i) && typeof sessionStorage < `u`) {
          const e = `tanstack_router_reload:${i.message}`;
          if (!sessionStorage.getItem(e))
            throw (sessionStorage.setItem(e, `1`), window.location.reload(), new Promise(() => {}));
        }
        throw i;
      }
      if (!r)
        if (Hs) Hs(a());
        else throw a();
      return B.createElement(r, e);
    };
  return (o.preload = a), o;
}
function cl(e) {
  const t = rc(),
    n = `not-found-${kc(t.stores.location, (e) => e.pathname)}-${kc(t.stores.status)}`;
  return (0, V.jsx)(Ys, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (x(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (x(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function ll() {
  return (0, V.jsx)(`p`, { children: `Not Found` });
}
function U(e, t, n) {
  return t.options.notFoundComponent
    ? (0, V.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, V.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, V.jsx)(ll, {});
}
function ul(e, t) {
  const n = t?.options.pendingComponent ?? e.options.defaultPendingComponent;
  return n ? (0, V.jsx)(n, {}) : null;
}
var dl = (e, t) => e[0] === t[0] && e[1] === t[1],
  fl = (e, t, n) =>
    !t.isRoot ||
    t.options.shellComponent ||
    t.options.wrapInSuspense ||
    n === !1 ||
    n === `data-only` ||
    !e.ssr,
  pl = B.memo(({ routeId: e }) => {
    const t = rc();
    return (0, V.jsx)(ml, { router: t, match: kc(t.stores.getMatchStore(e)) });
  });
function ml({ router: e, match: t }) {
  let n = e.routesById[t.routeId],
    r = ul(e, n),
    i = n.options.errorComponent ?? e.options.defaultErrorComponent,
    a = n.options.onCatch ?? e.options.defaultOnCatch,
    o = n.isRoot
      ? (n.options.notFoundComponent ?? e.options.notFoundRoute?.options.component)
      : n.options.notFoundComponent,
    s = t.ssr === !1 || t.ssr === `data-only`,
    c =
      fl(e, n, t.ssr) &&
      (n.options.wrapInSuspense ?? r ?? (n.options.errorComponent?.preload || s)),
    l = (0, V.jsx)(hl, { match: t });
  s && (l = (0, V.jsx)($s, { fallback: r, children: l })),
    o &&
      (l = (0, V.jsx)(cl, {
        fallback: (e) => {
          if (((e.routeId ??= t.routeId), e.routeId !== t.routeId)) throw e;
          return B.createElement(o, e);
        },
        children: l,
      })),
    i &&
      (l = (0, V.jsx)(Ys, {
        getResetKey: () => t,
        errorComponent: i,
        onCatch: (e, n) => {
          if (x(e)) throw ((e.routeId ??= t.routeId), e);
          a?.(e, n);
        },
        children: l,
      })),
    c && (l = (0, V.jsx)(B.Suspense, { fallback: r, children: l }));
  const u = n.isRoot ? n.options.shellComponent : void 0;
  return (0, V.jsx)(ic.Provider, {
    value: t.routeId,
    children: u
      ? (0, V.jsxs)(u, { children: [l, null] })
      : (0, V.jsxs)(V.Fragment, { children: [l, null] }),
  });
}
var hl = B.memo(({ match: e }) => {
    const t = rc(),
      n = e.routeId,
      r = t.routesById[n],
      i = B.useMemo(() => {
        const i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
          routeId: n,
          loaderDeps: e.loaderDeps,
          params: e._strictParams,
          search: e._strictSearch,
        });
        return i ? JSON.stringify(i) : void 0;
      }, [
        n,
        e.loaderDeps,
        e._strictParams,
        e._strictSearch,
        r.options.remountDeps,
        t.options.defaultRemountDeps,
      ]),
      a = B.useMemo(() => {
        const e = r.options.component ?? t.options.defaultComponent;
        return e ? (0, V.jsx)(e, {}, i) : (0, V.jsx)(gl, {});
      }, [i, r.options.component, t.options.defaultComponent]);
    if (e.status === `pending`) {
      if (t.ssr && !fl(t, r, e.ssr)) return a;
      if (t._tx) throw t._tx[5];
      return ul(t, r);
    }
    if (e.status === `notFound`) return U(t, r, e.error);
    if (e.status === `error`) throw e.error;
    return a;
  }),
  gl = B.memo(() => {
    let e = rc(),
      t = B.useContext(ic),
      n,
      r,
      i;
    {
      const a = e.stores.getMatchStore(t);
      ([n, r] = kc(a, (e) => [!!e._notFound, e.error], { compare: dl })),
        (i = kc(e.stores.ids, (e) => e[e.indexOf(t) + 1]));
    }
    if (n) return U(e, e.routesById[t], r);
    if (!i) return null;
    const a = (0, V.jsx)(pl, { routeId: i });
    return t === `__root__` ? (0, V.jsx)(B.Suspense, { fallback: ul(e), children: a }) : a;
  });
function _l(e, t) {
  const n = e[1];
  (e.length = 0), n?.(t);
}
function vl({ t: e }) {
  const t = rc(),
    n = (t._rendered ??= []);
  return (
    (t.startTransition = (r, i) =>
      new Promise((a) => {
        _l(n, !1), n.push(i, a), e(t), B.startTransition(r);
      })),
    Us(() => {
      const e = t.history.subscribe(t.load);
      t.updateLatestLocation();
      const r = t.latestLocation,
        i = t.buildLocation({
          to: r.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      if (xe(r.publicHref) !== xe(i.publicHref))
        return t.commitLocation({ ...i, replace: !0, ignoreBlocker: !0 }), e;
      const a = t.stores.resolvedLocation.get();
      return (
        a?.href === r.href && a.state.__TSR_key === r.state.__TSR_key
          ? n.push(t.stores.matches.get(), (e) => {
              e && t.emit({ type: `onRendered`, ...zt(a, a) });
            })
          : t._tx || t.load({ sync: !0 }).catch(console.error),
        e
      );
    }, [t, t.history]),
    null
  );
}
function yl() {
  const e = rc(),
    t = e.routesById[yt],
    n = ul(e, t),
    r = (0, V.jsxs)(V.Fragment, {
      children: [
        (0, V.jsx)(vl, { t: B.useState()[1] }),
        e.ssr
          ? (0, V.jsx)(bl, {})
          : (0, V.jsx)(B.Suspense, { fallback: n, children: (0, V.jsx)(bl, {}) }),
      ],
    });
  return e.options.InnerWrap ? (0, V.jsx)(e.options.InnerWrap, { children: r }) : r;
}
function bl() {
  const e = rc(),
    t = e._rendered,
    n = kc(e.stores.matches, (e) => t[0] ?? e),
    r = n[0],
    i = r?.routeId;
  Us(() => {
    t[0] === n && _l(t, !0);
  }, [t, n]);
  const a = i ? (0, V.jsx)(pl, { routeId: i }) : null;
  return e.options.disableGlobalCatchBoundary
    ? a
    : (0, V.jsx)(Ys, { getResetKey: () => r, onCatch: void 0, children: a });
}
var xl = (e) => ({ createMutableStore: Sc, createReadonlyStore: Sc, batch: yc }),
  Sl = (e) => new Cl(e),
  Cl = class extends Ut {
    constructor(e) {
      super(e, xl);
    }
  };
function wl({ router: e, children: t, ...n }) {
  ne(n) && e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  const r = (0, V.jsx)(nc.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, V.jsx)(e.options.Wrap, { children: r }) : r;
}
function Tl({ router: e, ...t }) {
  return (0, V.jsx)(wl, { router: e, ...t, children: (0, V.jsx)(yl, {}) });
}
function El(e, t) {
  if (t)
    for (const [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function Dl(e) {
  const { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e,
    a = B.useMemo(() => (n === void 0 ? void 0 : { __html: n }), [n]);
  switch (e.tag) {
    case `title`:
      return (0, V.jsx)(`title`, { ...t, suppressHydrationWarning: !0, children: n });
    case `meta`:
      return (0, V.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, V.jsx)(`link`, {
        ...t,
        precedence: t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return e.inlineCss, (0, V.jsx)(`style`, { ...t, dangerouslySetInnerHTML: a, nonce: r });
    case `script`:
      return (0, V.jsx)(Ol, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function Ol({ attrs: e, children: t, preventScriptHoist: n }) {
  rc();
  const r = ec(),
    i = B.useMemo(() => (t === void 0 ? void 0 : { __html: t }), [t]),
    a =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (B.useEffect(() => {
      if (!a) {
        if (e?.src) {
          const t = document.createElement(`a`);
          t.href = e.src;
          const n = t.href;
          for (const e of document.scripts) if (e.src === n) return;
          const r = document.createElement(`script`);
          return El(r, e), document.head.appendChild(r), () => r.remove();
        }
        if (typeof t == `string`) {
          const n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (const e of document.scripts) {
            if (e.hasAttribute(`src`)) continue;
            const i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          const i = document.createElement(`script`);
          return (i.textContent = t), El(i, e), document.head.appendChild(i), () => i.remove();
        }
      }
    }, [e, t, a]),
    a && typeof t == `string`)
  )
    return (0, V.jsx)(`script`, { ...e, suppressHydrationWarning: !0, dangerouslySetInnerHTML: i });
  if (!r) {
    if (e?.src) return (0, V.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, V.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: i,
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
function kl(e, t, n, r) {
  n = on(n);
  let i = n.map((e) => e.meta).filter((e) => e !== void 0),
    a = [],
    o = {},
    s;
  for (let e = i.length - 1; e >= 0; e--) {
    const n = i[e];
    for (let e = n.length - 1; e >= 0; e--) {
      const r = n[e];
      if (r)
        if (r.title) s ||= { tag: `title`, children: r.title };
        else if (`script:ld+json` in r)
          try {
            const e = JSON.stringify(r[`script:ld+json`]);
            a.push({ tag: `script`, attrs: { type: `application/ld+json` }, children: he(e) });
          } catch {}
        else {
          const e = r.name ?? r.property;
          if (e) {
            if (o[e]) continue;
            o[e] = !0;
          }
          a.push({ tag: `meta`, attrs: { ...r, nonce: t } });
        }
    }
  }
  s && a.push(s),
    t && a.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: t } }),
    a.reverse();
  const c = n
      .flatMap((e) => e.links ?? [])
      .filter((e) => e !== void 0)
      .map((e) => ({ tag: `link`, attrs: { ...e, nonce: t } })),
    l = e.ssr?.manifest,
    u = [];
  l &&
    (n.forEach((e) => {
      l.routes[e.routeId]?.css?.forEach((e) => {
        const n = Ss(e);
        u.push({
          tag: `link`,
          attrs: {
            rel: `stylesheet`,
            ...n,
            crossOrigin: _s(r, `stylesheet`) ?? n.crossOrigin,
            suppressHydrationWarning: !0,
            nonce: t,
          },
        });
      });
    }),
    l.inlineStyle &&
      u.push({
        tag: `style`,
        attrs: { ...l.inlineStyle.attrs, nonce: t },
        children: l.inlineStyle.children,
        inlineCss: !0,
      }));
  const d = [];
  l &&
    n.forEach((e) => {
      l.routes[e.routeId]?.preloads?.forEach((e) => {
        d.push({ tag: `link`, attrs: { ...ys(l, e, r), nonce: t } });
      });
    });
  const f = n
      .flatMap((e) => e.styles ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({ tag: `style`, attrs: { ...n, nonce: t }, children: e })),
    p = n
      .flatMap((e) => e.headScripts ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({ tag: `script`, attrs: { ...n, nonce: t }, children: e })),
    m = [];
  return xs(m, a), m.push(...d), xs(m, c), m.push(...u), xs(m, f), xs(m, p), m;
}
var Al = (e) => {
  const t = rc(),
    n = t.options.ssr?.nonce,
    r = B.useCallback((r) => kl(t, n, r, e), [e, n, t]);
  return kc(t.stores.matches, r, { compare: se });
};
function jl(e) {
  const t = Al(e.assetCrossOrigin),
    n = rc().options.ssr?.nonce;
  return (0, V.jsx)(V.Fragment, {
    children: t.map((e) =>
      (0, B.createElement)(Dl, { ...e, key: `tsr-meta-${JSON.stringify(e)}`, nonce: n }),
    ),
  });
}
var Ml = { suppressHydrationWarning: !0 },
  Nl = () => {
    const e = rc(),
      t = e.options.ssr?.nonce,
      n = (n) => {
        const r = Cs(n, e.ssr?.manifest, t, Ml);
        for (const e of r[1])
          if (typeof e.attrs?.src == `string`) {
            const t = e;
            t.preventScriptHoist = !0;
          }
        return r;
      };
    return Pl(kc(e.stores.matches, (e) => ws(n(e)), { compare: se }));
  };
function Pl(e) {
  return (0, V.jsx)(V.Fragment, {
    children: e.map((e, t) => (0, B.createElement)(Dl, { ...e, key: `tsr-scripts-${e.tag}-${t}` })),
  });
}
var Fl = (e, t) => {
  const n = { type: `request`, ...(t || e) },
    r = (e) => Fl({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => Fl({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => Fl({}, Object.assign(n, { client: e })),
    server: (e) => Fl({}, Object.assign(n, { server: e })),
  };
};
function Il(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    const r = t[n];
    e.has(r) || (e.add(r), r.extends && Il(e, r.extends));
  }
}
var Ll = (e) => ({
    getOptions: async () => {
      const t = await e();
      if (t.serializationAdapters) {
        const e = new Set();
        Il(e, t.serializationAdapters), (t.serializationAdapters = Array.from(e));
      }
      return t;
    },
    createMiddleware: Fl,
  }),
  Rl = Fl(),
  zl = void 0,
  Bl = Ll(() => ({ requestMiddleware: [Rl, zl] })),
  W = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  G = new (class extends W {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        }));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  K = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  q = new (class {
    #e = K;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function J(e) {
  setTimeout(e, 0);
}
var Vl = typeof window > `u` || `Deno` in globalThis;
function Hl() {}
function Ul(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Wl(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Gl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Y(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Kl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ql(e, t) {
  const { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Yl(o, t.options)) return !1;
    } else if (!Zl(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    const e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Jl(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Xl(t.options.mutationKey) !== Xl(a)) return !1;
    } else if (!Zl(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Yl(e, t) {
  return (t?.queryKeyHashFn || Xl)(e);
}
function Xl(e) {
  return JSON.stringify(e, (e, t) =>
    tu(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Zl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!Zl(e[n], t[n])) return !1;
      return !0;
    }
    const n = Object.keys(t);
    for (const r of n) if (!Zl(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var Ql = Object.prototype.hasOwnProperty;
function $l(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  const r = eu(e) && eu(t);
  if (!r && !(tu(e) && tu(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    const o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      (s[o] = u), (r ? l < i : Ql.call(e, o)) && c++;
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    const f = $l(u, d, n + 1);
    (s[o] = f), f === u && c++;
  }
  return i === o && c === i ? e : s;
}
function eu(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function tu(e) {
  if (!nu(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !nu(n) ||
    !Object.hasOwn(n, `isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function nu(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ru(e) {
  return new Promise((t) => {
    q.setTimeout(t, e);
  });
}
function iu(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : $l(e, t);
}
function au(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function ou(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var su = Symbol();
function cu(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === su
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function lu(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r ? i : ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
      ),
    }),
    e
  );
}
var uu = (() => {
  let e = () => Vl;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function du() {
  let e,
    t,
    n = new Promise((n, r) => {
      (e = n), (t = r);
    });
  (n.status = `pending`), n.catch(() => {});
  function r(e) {
    Object.assign(n, e), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (t) => {
      r({ status: `fulfilled`, value: t }), e(t);
    }),
    (n.reject = (e) => {
      r({ status: `rejected`, reason: e }), t(e);
    }),
    n
  );
}
var fu = J;
function pu() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = fu,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      const t = e;
      (e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          });
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        t--, t || o();
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var X = pu(),
  mu = new (class extends W {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            const t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function hu(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function gu(e) {
  return (e ?? `online`) !== `online` || mu.isOnline();
}
var _u = class extends Error {
  constructor(e) {
    super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent);
  }
};
function vu(e) {
  let t = !1,
    n = 0,
    r,
    i = du(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        const n = new _u(t);
        f(n), e.onCancel?.(n);
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => G.isFocused() && (e.networkMode === `always` || mu.isOnline()) && e.canRun(),
    u = () => gu(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        (r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.();
      }).then(() => {
        (r = void 0), a() || e.onContinue?.();
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          const i = e.retry ?? (uu.isServer() ? 0 : 3),
            o = e.retryDelay ?? hu,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          n++,
            e.onFail?.(n, r),
            ru(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              });
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var yu = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Wl(this.gcTime) &&
        (this.#e = q.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (uu.isServer() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (q.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function bu(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              lu(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = cu(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              const a = (() => {
                  const e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return l(e), e;
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? ou : au;
              return { pages: c(e.pages, o, s), pageParams: c(e.pageParams, r, s) };
            };
          if (i && a.length) {
            const e = i === `backward`,
              t = e ? Su : xu,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            const t = e ?? a.length;
            do {
              const e = c === 0 ? (o[0] ?? r.initialPageParam) : xu(r, s);
              if (c > 0 && e == null) break;
              (s = await d(s, e)), c++;
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n,
            )
        : l;
    },
  };
}
function xu(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Su(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Cu = class extends yu {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Eu(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const e = Eu(this.options);
      e.data !== void 0 && (this.setState(Tu(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this);
  }
  setData(e, t) {
    const n = iu(this.state.data, e, this.options);
    return this.#l({ data: n, type: `success`, dataUpdatedAt: t?.updatedAt, manual: t?.manual }), n;
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    const t = this.#a?.promise;
    return this.#a?.cancel(e), t ? t.then(Hl).catch(Hl) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    this.destroy(), this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some((e) => Kl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === su || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => Y(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Gl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue();
  }
  onOnline() {
    this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue();
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return this.state.fetchStatus === `paused` && this.state.status === `pending`;
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    const n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        const e = cu(this.options, t),
          n = (() => {
            const e = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
            return r(e), e;
          })();
        return (this.#s = !1), this.options.persister ? this.options.persister(e, n, this) : e(n);
      },
      a = (() => {
        const e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return r(e), e;
      })();
    (this.#e === `infinite` ? bu(this.options.pages) : this.options.behavior)?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = vu({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          e instanceof _u && e.revert && this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort();
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      }));
    try {
      const e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof _u) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        (this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e)
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    const t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return { ...t, ...wu(t.data, this.options), fetchMeta: e.meta ?? null };
        case `success`: {
          const n = {
            ...t,
            ...Tu(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return (this.#n = e.manual ? n : void 0), n;
        }
        case `error`: {
          const r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        }
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    (this.state = t(this.state)),
      X.batch(() => {
        this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e });
      });
  }
};
function wu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: gu(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Tu(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Eu(e) {
  const t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Du = class extends yu {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Ou()),
      this.setOptions(e.options),
      this.scheduleGc();
  }
  setOptions(e) {
    (this.options = e), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    (this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e });
  }
  optionalRemove() {
    this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    const t = () => {
        this.#i({ type: `continue` });
      },
      n = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#r = vu({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate && (await this.#n.config.onMutate(e, this, n));
        const t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      const a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    const t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    (this.state = t(this.state)),
      X.batch(() => {
        this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e });
      });
  }
};
function Ou() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var ku = class extends W {
  constructor(e = {}) {
    super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    const r = new Du({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return this.add(r), r;
  }
  add(e) {
    this.#e.add(e);
    const t = Au(e);
    if (typeof t == `string`) {
      const n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = Au(e);
      if (typeof t == `string`) {
        const n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            const t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    const t = Au(e);
    if (typeof t == `string`) {
      const n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    const t = Au(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    X.batch(() => {
      this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find((e) => Jl(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Jl(e, t));
  }
  notify(e) {
    X.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((e) => e.state.isPaused);
    return X.batch(() => Promise.all(e.map((e) => e.continue().catch(Hl))));
  }
};
function Au(e) {
  return e.options.scope?.id;
}
var ju = class extends W {
    constructor(e = {}) {
      super(), (this.config = e), (this.#e = new Map());
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Yl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Cu({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      const t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      X.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((e) => ql(t, e));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => ql(e, t)) : t;
    }
    notify(e) {
      X.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      X.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      X.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Mu = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      (this.#e = e.queryCache || new ju()),
        (this.#t = e.mutationCache || new ku()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0);
    }
    mount() {
      this.#a++,
        this.#a === 1 &&
          ((this.#o = G.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = mu.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#a--,
        this.#a === 0 && (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && n.isStaleByTime(Y(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      const r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Ul(t, i);
      if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return X.batch(() =>
        this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      const t = this.#e;
      X.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      const n = this.#e;
      return X.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      const n = { revert: !0, ...t },
        r = X.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Hl).catch(Hl);
    }
    invalidateQueries(e, t = {}) {
      return X.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? `active` }, t)
        ),
      );
    }
    refetchQueries(e, t = {}) {
      const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = X.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Hl)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Hl);
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const n = this.#e.build(this, t);
      return n.isStaleByTime(Y(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Hl).catch(Hl);
    }
    fetchInfiniteQuery(e) {
      return (e._type = `infinite`), this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Hl).catch(Hl);
    }
    ensureInfiniteQueryData(e) {
      return (e._type = `infinite`), this.ensureQueryData(e);
    }
    resumePausedMutations() {
      return mu.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Xl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      const t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Zl(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Xl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      const t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Zl(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        (t.queryHash ||= Yl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === su && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  Nu = B.createContext(void 0),
  Pu = ({ client: e, children: t }) => (
    B.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, V.jsx)(Nu.Provider, { value: e, children: t })
  ),
  Fu = `/assets/styles-CCDQa8M9.css`;
function Iu(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  );
  const n =
      e instanceof Response
        ? `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
        : e instanceof Error
          ? e.message
          : String(e),
    r = e instanceof Error ? e.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: n,
    ...(r !== void 0 && { stack: r }),
    filename: window.location.pathname,
  });
}
function Lu() {
  return (0, V.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, V.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, V.jsx)(`h1`, { className: `text-7xl font-bold text-foreground`, children: `404` }),
        (0, V.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, V.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, V.jsx)(`div`, {
          className: `mt-6`,
          children: (0, V.jsx)($c, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function Ru({ error: e, reset: t }) {
  console.error(e);
  const n = rc();
  return (
    (0, B.useEffect)(() => {
      Iu(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, V.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, V.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, V.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, V.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, V.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, V.jsx)(`button`, {
                onClick: () => {
                  n.invalidate(), t();
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, V.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var zu = rl()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `Bernardo Schmitz | Desenvolvedor Fullstack` },
      {
        name: `description`,
        content: `Currículo de Bernardo Schmitz, desenvolvedor fullstack: experiência, formação, habilidades e contato.`,
      },
      { name: `author`, content: `Bernardo Schmitz` },
      { property: `og:title`, content: `Bernardo Schmitz | Desenvolvedor Fullstack` },
      {
        property: `og:description`,
        content: `Desenvolvedor fullstack com 4 anos de experiência em aplicações web e mobile.`,
      },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
    ],
    links: [
      { rel: `stylesheet`, href: Fu },
      { rel: `icon`, href: `/favicon.ico`, type: `image/x-icon` },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      { rel: `preconnect`, href: `https://fonts.gstatic.com`, crossOrigin: `anonymous` },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap`,
      },
    ],
  }),
  shellComponent: Bu,
  component: Vu,
  notFoundComponent: Lu,
  errorComponent: Ru,
});
function Bu({ children: e }) {
  return (0, V.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, V.jsx)(`head`, { children: (0, V.jsx)(jl, {}) }),
      (0, V.jsxs)(`body`, { children: [e, (0, V.jsx)(Nl, {})] }),
    ],
  });
}
function Vu() {
  const { queryClient: e } = zu.useRouteContext();
  return (0, V.jsx)(Pu, { client: e, children: (0, V.jsx)(gl, {}) });
}
var Hu = `modulepreload`,
  Uu = (e) => `/` + e,
  Wu = {},
  Z = (e, t, n) => {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      const e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = Uu(t, n)), (t = s(t)), t in Wu)) return;
          Wu[t] = !0;
          const r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            const i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          const i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Hu),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              i.addEventListener(`load`, e),
                i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)));
            });
        }),
      );
    }
    function i(e) {
      const t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (const e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Gu = {
    IndexRoute: ol(`/`)({
      head: () => ({
        meta: [
          { title: `Bernardo Schmitz | Desenvolvedor Fullstack` },
          {
            name: `description`,
            content: `Currículo de Bernardo Schmitz, desenvolvedor fullstack com 5 anos de experiência em React, Next.js, React Native e Node.js. Experiência, formação e contato.`,
          },
          { property: `og:title`, content: `Bernardo Schmitz | Desenvolvedor Fullstack` },
          {
            property: `og:description`,
            content: `Desenvolvedor fullstack com 5 anos de experiência em aplicações web e mobile com React, Next.js, React Native e Node.js.`,
          },
          { property: `og:type`, content: `website` },
          { property: `og:locale`, content: `pt_BR` },
          { name: `twitter:card`, content: `summary_large_image` },
        ],
      }),
      component: sl(() => Z(() => import(`./routes-BML9Zb45.js`), []), `component`),
    }).update({ id: `/`, path: `/`, getParentRoute: () => zu }),
  },
  Ku = zu._addFileChildren(Gu),
  qu = () =>
    Sl({
      routeTree: Ku,
      context: { queryClient: new Mu() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function Ju() {
  let e = await qu(),
    t;
  if (Bl) {
    const n = await Bl.getOptions();
    (n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr);
  } else (t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t });
  return (
    t.push(Vs),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.ids.get().length || (await Jn(e)),
    e
  );
}
var Yu = Ju;
function Xu() {
  return Yu().finally(() => window.$_TSR?.h());
}
var Zu;
function Qu() {
  return (
    (Zu ||= Xu()), (0, V.jsx)(qs, { promise: Zu, children: (e) => (0, V.jsx)(Tl, { router: e }) })
  );
}
var $u = g();
(0, B.startTransition)(() => {
  (0, $u.hydrateRoot)(document, (0, V.jsx)(B.StrictMode, { children: (0, V.jsx)(Qu, {}) }));
});
export { Gs as t };
