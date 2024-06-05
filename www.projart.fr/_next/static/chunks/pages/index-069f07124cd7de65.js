(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(6616);
        },
      ]);
    },
    6616: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return u;
          },
        });
      var n = a(5893),
        r = a(7294),
        o = a(720),
        s = a(1163),
        i = a(9008),
        c = a.n(i),
        d = a(962),
        u = !0;
      t.default = function (e) {
        let { pageData: t } = e,
          [a, i] = (0, r.useState)(0.5),
          u = (0, s.useRouter)(),
          x = (0, r.useRef)(),
          l = (0, o.K)((e) => e.ongoingTransition),
          p = (0, o.K)((e) => e.setTransitionStatus),
          _ = (e) => {
            setTimeout(() => {
              p("fromDone"), e && u.push(e);
            }, 1e3);
          };
        return (
          (0, r.useEffect)(() => {
            (0, d.Kn)("vignette:show");
          }, []),
          (0, r.useEffect)(() => {
            "home" === l.from && _(l.destinationUrl);
          }, [l]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(c(), {
                children: [
                  (0, n.jsx)("title", {
                    children: t.data.seo_title
                      ? t.data.seo_title
                      : "Projart - L'\xe9l\xe9gance d\xe9cal\xe9e",
                  }),
                  (0, n.jsx)(
                    "meta",
                    {
                      name: "description",
                      content: t.data.seo_description
                        ? t.data.seo_description
                        : "D\xe9couvrez l'architecture d'int\xe9rieur r\xe9invent\xe9e par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est.",
                    },
                    "desc"
                  ),
                  (0, n.jsx)("meta", {
                    property: "og:title",
                    content: t.data.seo_title
                      ? t.data.seo_title
                      : "Projart - L'\xe9l\xe9gance d\xe9cal\xe9e",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:description",
                    content: t.data.seo_description
                      ? t.data.seo_description
                      : "D\xe9couvrez l'architecture d'int\xe9rieur r\xe9invent\xe9e par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est.",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:image",
                    content:
                      t.data.seo_image &&
                      t.data.seo_image.opengraph &&
                      t.data.seo_image.opengraph.url
                        ? t.data.seo_image.opengraph.url
                        : "/projart_defaultog.jpeg",
                  }),
                ],
              }),
              (0, n.jsx)("div", { className: "page__gallery", ref: x }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
