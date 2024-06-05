"use strict";
(() => {
  function e(e) {
    let t = location.href;
    if (e) {
      let n = new URL(t);
      if (n.pathname !== e) return (n.pathname = e), (n.search = ""), n.href;
    }
    return t;
  }
  var t,
    n,
    a,
    i,
    o = ((a = () => {}), () => (a && (i = a((a = 0))), i));
  ((t = () => {
    o(),
      (function () {
        let t = (e) => e,
          n = document.currentScript,
          a =
            (null == n ? void 0 : n.dataset.endpoint) ||
            (null != n && n.src.includes("/va/") ? "/va" : "/_vercel/insights"),
          i = null == n ? void 0 : n.dataset.disableAutoTrack,
          o = null,
          r = null,
          l = !0;
        async function s({ type: i, data: l, options: s }) {
          var u, d;
          let c = e(r),
            f = document.referrer,
            p = t({ type: i, url: c });
          if (!1 === p || null === p) return;
          p && (c = p.url);
          let v = f.includes(location.host),
            h = {
              o: c,
              sv: "0.1.2",
              sdkn:
                null != (u = null == n ? void 0 : n.dataset.sdkn) ? u : void 0,
              sdkv:
                null != (d = null == n ? void 0 : n.dataset.sdkv) ? d : void 0,
              ts: Date.now(),
              ...(o && { dp: o }),
              ...(null != s && s.withReferrer && !v ? { r: f } : {}),
              ...("event" === i && l && { en: l.name, ed: l.data }),
              f: (function (e) {
                var t, n, a;
                try {
                  let i = null == (t = e.options) ? void 0 : t.flags;
                  return i && !Array.isArray(i)
                    ? { p: i }
                    : null ==
                      (a = null == (n = window.__vercel_flags) ? void 0 : n.get)
                    ? void 0
                    : a.call(n, e);
                } catch (o) {}
              })({ type: i, data: l, options: s }),
            };
          try {
            await fetch(`${a}/${"pageview" === i ? "view" : "event"}`, {
              method: "POST",
              keepalive: !0,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(h),
            });
          } catch (w) {}
        }
        async function u(e = {}) {
          return s({
            type: "pageview",
            options: { withReferrer: e.withReferrer },
          });
        }
        async function d(e, t, n) {
          return s({
            type: "event",
            data: { name: e, data: t },
            options: { withReferrer: !0, flags: null == n ? void 0 : n.flags },
          });
        }
        async function c() {
          await fetch(`${a}/session`, { method: "GET", keepalive: !0 }).catch(
            () => {}
          );
        }
        function f(e) {
          return e.pathname === new URL(v).pathname;
        }
        function p(e) {
          let t = e
            ? "string" == typeof e
              ? new URL(e, location.origin)
              : new URL(e.href)
            : null;
          !t || f(t) || (Boolean(t.hash) && f(t)) || u();
        }
        let v = e(),
          h = () => {
            var e;
            (window.va = function (e, n) {
              "beforeSend" === e
                ? (t = n)
                : "event" === e
                ? n && d(n.name, n.data, n.options)
                : "pageview" === e &&
                  n &&
                  (n.route && (o = n.route),
                  n.path && (r = n.path),
                  u({ withReferrer: l }),
                  (l = !1)),
                "enableCookie" === e && c();
            }),
              null == (e = window.vaq) ||
                e.forEach(([e, t]) => {
                  window.va(e, t);
                });
          };
        (() => {
          if (window.vai || ((window.vai = !0), h(), i)) return;
          u({ withReferrer: !0 });
          let t = history.pushState.bind(history);
          (history.pushState = function (...n) {
            t(...n);
            try {
              p(n[2]), (v = e());
            } catch (a) {}
          }),
            window.addEventListener("popstate", function () {
              p(e()), (v = e());
            });
        })();
      })();
  }),
  () => (n || t((n = { exports: {} }).exports, n), n.exports))();
})();
