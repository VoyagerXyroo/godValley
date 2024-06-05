(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [339],
  {
    7295: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[uid]",
        function () {
          return n(2181);
        },
      ]);
    },
    2181: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return d;
          },
        });
      var o = n(5893),
        r = n(8972),
        a = n(6038),
        s = n(7294),
        i = n(1163),
        c = n(9008),
        p = n.n(c),
        l = n(8378),
        u = n(4453),
        _ = n(720),
        d = !0;
      t.default = function (e) {
        let { page: t } = e,
          n = (0, i.useRouter)(),
          c = (0, s.useRef)(),
          d = (0, l.x)((e) => e.done),
          x = (0, _.K)((e) => e.ongoingTransition);
        (0, _.K)((e) => e.setOngoingTransition);
        let g = (0, _.K)((e) => e.transitionStatus),
          h = (0, _.K)((e) => e.setTransitionStatus),
          m = (e) => {
            let t = a.p8.timeline();
            t.to(c.current, {
              autoAlpha: 0,
              ease: "power2.out",
              duration: 0.6,
              onComplete: () => {
                h("fromDone"), e && n.push(e);
              },
            });
          },
          f = () => {
            a.p8.fromTo(
              c.current,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                ease: "power2.out",
                duration: 0.6,
                onComplete: () => {
                  h("toDone");
                },
              }
            );
          };
        return (
          (0, s.useEffect)(() => {
            "page" === x.from && m(x.destinationUrl);
          }, [x]),
          (0, s.useEffect)(() => {
            "page" === x.to && "fromDone" === g && f();
          }, [g]),
          (0, s.useEffect)(() => {
            !0 === d && f();
          }, [d]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)(p(), {
                children: [
                  (0, o.jsx)("title", {
                    children: t.seo_title
                      ? t.seo_title
                      : "".concat(t.page_title, " - Projart"),
                  }),
                  (0, o.jsx)(
                    "meta",
                    {
                      name: "description",
                      content: t.seo_description
                        ? t.seo_description
                        : "D\xe9couvrez l'architecture d'int\xe9rieur r\xe9invent\xe9e par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est.",
                    },
                    "desc"
                  ),
                  (0, o.jsx)("meta", {
                    property: "og:title",
                    content: t.seo_title
                      ? t.seo_title
                      : "".concat(t.page_title, " - Projart"),
                  }),
                  (0, o.jsx)("meta", {
                    property: "og:description",
                    content: t.seo_description
                      ? t.seo_description
                      : "D\xe9couvrez l'architecture d'int\xe9rieur r\xe9invent\xe9e par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est.",
                  }),
                  (0, o.jsx)("meta", {
                    property: "og:image",
                    content:
                      t.seo_image &&
                      t.seo_image.opengraph &&
                      t.seo_image.opengraph.url
                        ? t.seo_image.opengraph.url
                        : "/projart_defaultog.jpeg",
                  }),
                ],
              }),
              (0, o.jsx)(u.Z, {
                children: (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", { className: "header__background" }),
                    (0, o.jsx)("div", {
                      className: "page__container",
                      ref: c,
                      children: (0, o.jsx)("div", {
                        className: "wrapper",
                        children: (0, o.jsxs)("div", {
                          className: "page__inner",
                          children: [
                            t.page_title &&
                              (0, o.jsx)("h1", {
                                className: "page__title",
                                children: t ? t.page_title : "",
                              }),
                            t.page_content &&
                              (0, o.jsx)("div", {
                                className: "page__content",
                                children: (0, o.jsx)(r.v, {
                                  field: t.page_content,
                                }),
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7295));
    }),
      (_N_E = e.O());
  },
]);
