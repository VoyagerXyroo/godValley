(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [610],
  {
    6322: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projets/[uid]",
        function () {
          return o(2253);
        },
      ]);
    },
    2737: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = o(5893);
      o(1700);
      var a = o(8972),
        n = o(8268);
      let i = (e, t) => (e ? (0, n.S)(e, t) : null);
      var s = o(6038),
        c = o(7294),
        l = o(1163),
        u = o(9008),
        p = o.n(u),
        d = o(4453),
        _ = o(720),
        m = o(8378),
        j = o(4953),
        g = function (e) {
          let { config: t } = e,
            [o, a] = (0, c.useState)("center"),
            [n, i] = (0, c.useState)("landscape"),
            l = (0, c.useRef)(),
            u = (0, c.useRef)(),
            p = (0, c.useRef)(),
            d = (0, c.useRef)(),
            _ = () => {
              (d.current = s.p8.timeline({ paused: !0 })),
                d.current.to(u.current, j.ZC.overlay, 0),
                d.current.from(l.current, j.ZC.img, 0);
            },
            m = () => {
              (p.current = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting &&
                      (d.current.play(), p.current.disconnect());
                  });
                },
                { rootMargin: "-30% 0px -30% 0px" }
              )),
                p.current.observe(l.current);
            };
          return (
            (0, c.useEffect)(() => {
              var e;
              switch ((_(), m(), t.position)) {
                case "Gauche":
                  a("left");
                  break;
                case "Milieu":
                default:
                  a("center");
                  break;
                case "Droite":
                  a("right");
                  break;
                case "Pleine largeur":
                  a("full");
              }
              (null === (e = t.image) || void 0 === e ? void 0 : e.dimensions)
                ? t.image.dimensions.width > t.image.dimensions.height
                  ? i("landscape")
                  : i("portrait")
                : i("landscape");
            }, []),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("section", {
                className: "section__image",
                children: (0, r.jsx)("div", {
                  className: "section__wrapper position--".concat(o),
                  children: (0, r.jsxs)("div", {
                    className: "image format--".concat(n),
                    children: [
                      (0, r.jsx)("div", { className: "overlay", ref: u }),
                      (0, r.jsx)("img", {
                        src: t.image[n].url,
                        alt: "",
                        ref: l,
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        f = o(918),
        h = o(3372);
      o(1664);
      var x = function (e) {
        let { project: t } = e;
        (0, l.useRouter)();
        let [o, n] = (0, h.Z)("projart_projects", {}),
          u = (0, m.x)((e) => e.done),
          j = (0, c.useRef)(),
          x = (0, _.K)((e) => e.ongoingTransition),
          v = (0, _.K)((e) => e.setOngoingTransition),
          y = (0, _.K)((e) => e.transitionStatus),
          N = (0, _.K)((e) => e.setTransitionStatus),
          w = (e) => {
            let t = s.p8.timeline({
              onComplete: () => {
                N("fromDone");
              },
            });
            t.to(
              j.current,
              { autoAlpha: 0, ease: "power2.out", duration: 1.25 },
              0
            ),
              t.to(
                ".page__project-detail .section__introduction .introduction__overlay-fade",
                { autoAlpha: 0, ease: "power2.out", duration: 1 },
                0
              ),
              t.to(
                ".page__project-detail .section__introduction .introduction__overlay-gradient",
                { autoAlpha: 0, ease: "power2.out", duration: 1 },
                0
              ),
              t.to(
                ".page__project-detail .content__project-name",
                { y: 100, autoAlpha: 0, ease: "power2.out", duration: 1 },
                0
              ),
              t.to(
                ".page__project-detail .content__project-location",
                { y: 20, autoAlpha: 0, ease: "power2.out", duration: 1 },
                0
              );
          },
          A = () => {
            let e = s.p8.timeline({
              delay: 0,
              onStart: () => {
                s.p8.set(j.current, { autoAlpha: 1 });
              },
            });
            e.fromTo(
              ".page__project-detail .section__introduction .introduction__overlay-fade",
              { autoAlpha: 0 },
              { autoAlpha: 1, ease: "power2.out", duration: 1 },
              0
            ),
              e.fromTo(
                ".page__project-detail .section__introduction .introduction__overlay-gradient",
                { autoAlpha: 0 },
                { autoAlpha: 1, ease: "power2.out", duration: 1 },
                0
              ),
              e.fromTo(
                ".page__project-detail .content__project-name",
                { y: 100, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, ease: "power2.out", duration: 1 },
                2.2
              ),
              e.fromTo(
                ".page__project-detail .content__project-location",
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 0.7, ease: "power2.out", duration: 1 },
                2.3
              ),
              e.fromTo(
                ".page__project-detail .content__project-category",
                { y: 20, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, ease: "power2.out", duration: 1 },
                2.4
              );
          },
          T = () => {
            v({ from: "project-detail", to: "home", destinationUrl: "/" });
          };
        return (
          (0, c.useEffect)(() => {
            setTimeout(() => {
              (o[t.uid] = !0), n(o);
            }, 3e3);
          }, []),
          (0, c.useEffect)(() => {
            !0 === u && A();
          }, [u]),
          (0, c.useEffect)(() => {
            "project-detail" === x.from && w(x.destinationUrl);
          }, [x]),
          (0, c.useEffect)(() => {
            "project-detail" === x.to && "fromDone" === y && A();
          }, [y]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(p(), {
                children: [
                  (0, r.jsx)("title", {
                    children: t.seo_title
                      ? t.seo_title
                      : "".concat(i(t.project_name), " - Projart"),
                  }),
                  (0, r.jsx)(
                    "meta",
                    {
                      name: "description",
                      content: t.seo_description
                        ? t.seo_description
                        : '"'.concat(
                            i(t.project_name),
                            "\", un projet d'architecture d'int\xe9rieur par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est."
                          ),
                    },
                    "desc"
                  ),
                  (0, r.jsx)("meta", {
                    property: "og:title",
                    content: t.seo_title
                      ? t.seo_title
                      : "".concat(i(t.project_name), " - Projart"),
                  }),
                  (0, r.jsx)("meta", {
                    property: "og:description",
                    content: t.seo_description
                      ? t.seo_description
                      : '"'.concat(
                          i(t.project_name),
                          "\", un projet d'architecture d'int\xe9rieur par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est."
                        ),
                  }),
                  (0, r.jsx)("meta", {
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
              (0, r.jsx)(d.Z, {
                children: (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", { className: "header__background" }),
                    (0, r.jsxs)("div", {
                      className: "page__project-detail",
                      ref: j,
                      children: [
                        (0, r.jsxs)("section", {
                          className: "section__introduction",
                          children: [
                            (0, r.jsx)("div", {
                              className: "introduction__overlay-gradient",
                            }),
                            (0, r.jsx)("div", {
                              className: "introduction__overlay-fade",
                            }),
                            (0, r.jsxs)("div", {
                              className: "introduction__content",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "name__block",
                                  children: [
                                    t.project_location &&
                                      (0, r.jsx)("div", {
                                        className: "content__project-location",
                                        children: t.project_location,
                                      }),
                                    t.project_name &&
                                      (0, r.jsx)("h1", {
                                        className: "content__project-name",
                                        children: (0, r.jsx)(a.v, {
                                          field: t.project_name,
                                        }),
                                      }),
                                  ],
                                }),
                                t.project_category &&
                                  (0, r.jsx)("div", {
                                    className: "content__project-category",
                                    children: t.project_category,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "sections__holder",
                          children: [
                            t.detail_sections.map((e, t) =>
                              (0, r.jsx)(g, { config: e }, "section_".concat(t))
                            ),
                            (0, r.jsx)(f.Z, {}, "contact_detailPage"),
                            (0, r.jsx)("section", {
                              className: "section__back",
                              children: (0, r.jsxs)("div", {
                                className: "back__content",
                                onClick: T,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "smallText",
                                    children: "Revenir aux",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "bigText",
                                    children: "PROJETS",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    2253: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          __N_SSG: function () {
            return n;
          },
        });
      var r = o(5893),
        a = o(2737),
        n = !0;
      t.default = function (e) {
        let { project: t } = e;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(a.Z, { project: t }),
        });
      };
    },
    4953: function (e, t, o) {
      "use strict";
      o.d(t, {
        ZC: function () {
          return a;
        },
        xT: function () {
          return r;
        },
      });
      let r = {
          fromTop: {
            rotationX: 90,
            transformOrigin: "50% 0%",
            autoAlpha: 0,
            ease: "power2.out",
            duration: 1.5,
            stagger: 0.3,
          },
          fromBottom: {
            rotationX: 90,
            transformOrigin: "50% 100%",
            autoAlpha: 0,
            ease: "power2.out",
            duration: 1.5,
            stagger: 0.3,
          },
        },
        a = {
          overlay: {
            scaleY: 0,
            transformOrigin: "50% 100%",
            ease: "power2.out",
            duration: 1,
            stagger: 0.3,
          },
          img: { scale: 1.2, ease: "power2.out", duration: 2, stagger: 0.3 },
        };
    },
    8268: function (e, t, o) {
      "use strict";
      o.d(t, {
        S: function () {
          return r;
        },
      });
      let r = (e, t = " ") => {
        let o = "";
        for (let r = 0; r < e.length; r++)
          "text" in e[r] && (o += (o ? t : "") + e[r].text);
        return o;
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 6322));
    }),
      (_N_E = e.O());
  },
]);
