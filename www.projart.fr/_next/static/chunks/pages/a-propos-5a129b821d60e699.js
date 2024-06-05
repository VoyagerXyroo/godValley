(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [564],
  {
    2250: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/a-propos",
        function () {
          return r(9587);
        },
      ]);
    },
    9587: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return C;
          },
          default: function () {
            return M;
          },
        });
      var s,
        a,
        n,
        o,
        i = r(5893),
        c = r(8972),
        l = r(2839),
        _ = r(1664),
        u = r.n(_),
        d = r(9008),
        m = r.n(d),
        p = r(6038),
        x = r(7294),
        g = r(1163),
        f = r(720),
        v = r(8378),
        h = r(918);
      r(8708);
      var j = r(3929),
        b = function (e) {
          let { teamList: t, title: r } = e,
            [s, a] = (0, x.useState)(""),
            [n, o] = (0, x.useState)(!1),
            { setCursorType: c, setCursorText: l } = (0, j.R)(),
            _ = (0, x.useRef)(),
            u = (0, x.useRef)(0),
            d = (0, x.useRef)(),
            m = (0, x.useRef)(),
            g = (0, x.useRef)(),
            f = (0, x.useRef)(),
            v = (0, x.useRef)(),
            h = (0, x.useRef)(),
            b = (0, x.useRef)(),
            y = (0, x.useRef)(),
            N = () => {
              if (m.current) {
                let e = m.current.getBoundingClientRect();
                g.current.style.setProperty("--tw", e.width + "px");
              }
            },
            w = () => {
              N();
            },
            k = (e) => {
              window.innerWidth > 1e3 &&
                (e.clientX > window.innerWidth / 2
                  ? (a("next"), l("Suivant"))
                  : (l("Pr\xe9c\xe9dent"), a("prev")));
            },
            R = () => {
              c("about_team_slider");
            },
            E = () => {
              c("default"), l("");
            },
            A = () => {
              window.innerWidth >= 1e3 &&
                ("prev" === s ? P("prev") : P("next"));
            },
            O = () => {
              window.addEventListener("resize", w),
                _.current &&
                  (_.current.addEventListener("mouseenter", R),
                  _.current.addEventListener("mouseleave", E)),
                window.addEventListener("mousemove", k);
            },
            T = () => {
              window.removeEventListener("resize", w),
                _.current &&
                  (_.current.removeEventListener("mouseenter", R),
                  _.current.removeEventListener("mouseleave", E)),
                window.removeEventListener("mousemove", k);
            },
            L = () => {
              let e = t[u.current];
              (m.current.innerHTML = e.fullname + "&nbsp;"),
                (v.current.src = e.photo ? e.photo.desktop.url : ""),
                (b.current.innerHTML = e.fullname),
                (y.current.innerHTML = e.role),
                N();
            },
            P = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "next",
                r = p.p8.timeline();
              r.to(
                g.current,
                { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                0
              ),
                r.to(
                  [b.current, y.current],
                  {
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: "50% 100%",
                    stagger: 0.1,
                    ease: "power2.out",
                    duration: 0.4,
                  },
                  0
                ),
                r.to(
                  v.current,
                  { scale: 1.15, ease: "power2.out", duration: 0.8 },
                  0
                ),
                r.to(
                  h.current,
                  {
                    scaleX: 1,
                    transformOrigin: "next" === e ? "left" : "right",
                    ease: "power2.out",
                    duration: 0.4,
                  },
                  0
                ),
                r.add(() => {
                  let r;
                  "next" === e
                    ? u.current === t.length - 1
                      ? (u.current = 0)
                      : u.current++
                    : 0 === u.current
                    ? (u.current = t.length - 1)
                    : u.current--,
                    (r = t[u.current]),
                    (v.current.src = ""),
                    (v.current.src = r.photo ? r.photo.desktop.url : ""),
                    (m.current.innerHTML = r.fullname + "&nbsp;"),
                    (b.current.innerHTML = r.fullname),
                    (y.current.innerHTML = r.role),
                    N();
                }, 0.4),
                r.fromTo(
                  g.current,
                  { autoAlpha: 0 },
                  {
                    immediateRender: !1,
                    autoAlpha: 1,
                    ease: "power2.out",
                    duration: 0.4,
                  },
                  0.6
                ),
                r.fromTo(
                  [b.current, y.current],
                  { autoAlpha: 0, rotateX: 90, transformOrigin: "50% 0%" },
                  {
                    immediateRender: !1,
                    autoAlpha: 1,
                    rotateX: 0,
                    ease: "power2.out",
                    stagger: 0.1,
                    duration: 0.4,
                  },
                  0.8
                ),
                r.to(
                  h.current,
                  {
                    scaleX: 0,
                    transformOrigin: "next" === e ? "right" : "left",
                    ease: "power2.out",
                    duration: 0.4,
                  },
                  0.8
                ),
                r.to(
                  v.current,
                  { scale: 1, ease: "expo.out", duration: 3 },
                  0.5
                );
            };
          (0, x.useEffect)(
            () => (
              O(),
              L(),
              w(),
              I(),
              () => {
                T(), C();
              }
            ),
            []
          ),
            (0, x.useLayoutEffect)(() => {
              w();
            });
          let I = () => {
              (f.current = new IntersectionObserver((e) => {
                d.current &&
                  e.forEach((e) => {
                    e.isIntersecting
                      ? d.current.classList.add("observable")
                      : d.current.classList.remove("observable");
                  });
              })),
                f.current.observe(d.current);
            },
            C = () => {
              f.current && f.current.disconnect();
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: "team__slider",
              ref: _,
              onClick: A,
              children: [
                (0, i.jsx)("div", {
                  className: "slider__content",
                  children: (0, i.jsxs)("div", {
                    className: "slider__card",
                    children: [
                      (0, i.jsx)("div", {
                        className: "card__title",
                        children: r,
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__image",
                        children: [
                          (0, i.jsx)("div", {
                            className: "image__overlay",
                            ref: h,
                          }),
                          (0, i.jsx)("img", { src: "", alt: "", ref: v }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__mobile-controls",
                        children: [
                          (0, i.jsx)("div", {
                            className: "mobile-controls__prev",
                            onClick: () => P("prev"),
                            children: "Pr\xe9c\xe9dent",
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-controls__next",
                            onClick: () => P("next"),
                            children: "Suivant",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__text",
                        children: [
                          (0, i.jsx)("div", {
                            className: "text__name",
                            ref: b,
                          }),
                          (0, i.jsx)("div", {
                            className: "text__role",
                            ref: y,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "slider__background-marquee",
                  ref: d,
                  children: (0, i.jsx)("div", {
                    className: "marquee__track",
                    ref: g,
                    children: (0, i.jsx)("span", { ref: m }),
                  }),
                }),
              ],
            }),
          });
        };
      let y = (e) => {
          let { content: t, type: r = "left" } = e,
            s = (0, x.useRef)(),
            a = (0, x.useRef)(),
            n = (0, x.useRef)(),
            o = (0, x.useRef)(),
            l = () => {
              if (n.current) {
                let e = n.current.getBoundingClientRect();
                a.current.style.setProperty("--tw", e.height + "px");
              }
            },
            _ = () => {
              window.addEventListener("resize", d);
            },
            u = () => {
              window.removeEventListener("resize", d);
            },
            d = () => {
              l();
            },
            m = () => {
              (o.current = new IntersectionObserver((e) => {
                s.current &&
                  e.forEach((e) => {
                    e.isIntersecting
                      ? s.current.classList.add("observable")
                      : s.current.classList.remove("observable");
                  });
              })),
                o.current.observe(s.current);
            },
            p = () => {
              o.current && o.current.disconnect();
            };
          return (
            (0, x.useEffect)(
              () => (
                l(),
                _(),
                d(),
                m(),
                () => {
                  u(), p();
                }
              ),
              []
            ),
            (0, x.useLayoutEffect)(() => {
              d();
            }),
            (0, i.jsx)("div", {
              className: "vertical__marquee type--".concat(r),
              ref: s,
              children: (0, i.jsx)("div", {
                className: "marquee__inner",
                children: (0, i.jsx)("div", {
                  className: "marquee__track",
                  ref: a,
                  children: (0, i.jsxs)("span", {
                    ref: n,
                    children: [
                      "object" == typeof t && (0, i.jsx)(c.v, { field: t }),
                      "string" == typeof t && t,
                    ],
                  }),
                }),
              }),
            })
          );
        },
        N = (e) => {
          let { data: t } = e,
            r = (0, x.useRef)(null),
            s = (0, x.useRef)([]),
            a = (0, x.useRef)(0),
            n = (0, x.useRef)(null),
            o = (0, x.useRef)(null),
            c = () => {
              let e = p.p8.timeline();
              e.to(
                s.current[a.current],
                { autoAlpha: 0, ease: "power2.out", duration: 0.6 },
                0
              ),
                a.current + 1 >= t.length ? (a.current = 0) : a.current++,
                e.to(
                  s.current[a.current],
                  { autoAlpha: 1, ease: "power2.out", duration: 0.6 },
                  0
                );
            },
            l = () => {
              n.current = setInterval(c, 3e3);
            },
            _ = () => {
              n.current && clearInterval(n.current), (n.current = null);
            },
            u = () => {
              (o.current = new IntersectionObserver((e) => {
                r.current &&
                  e.forEach((e) => {
                    e.isIntersecting ? l() : _();
                  });
              })),
                o.current.observe(r.current);
            },
            d = () => {
              o.current && o.current.disconnect(), (o.current = null);
            };
          return (
            (0, x.useEffect)(
              () => (
                u(),
                () => {
                  _(), d();
                }
              ),
              []
            ),
            (0, i.jsxs)("div", {
              className: "address__image-flipper",
              ref: r,
              children: [
                (0, i.jsx)("div", { className: "overlay" }),
                (0, i.jsx)("div", {
                  className: "images__list",
                  children: t.map((e, t) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "image ".concat(0 === t ? "active" : ""),
                        ref: (e) => {
                          s.current[t] = e;
                        },
                        children: (0, i.jsx)("img", {
                          src: e.image.desktop.url,
                          alt: e.image.alt,
                        }),
                      },
                      "image_".concat(t)
                    )
                  ),
                }),
              ],
            })
          );
        };
      var w = function (e) {
        let {} = e,
          [t, r] = (0, x.useState)([]),
          s = (0, x.useRef)(),
          a = () => {
            let e = window.innerHeight,
              t = Math.ceil(e / 30),
              s = [];
            for (let e = 0; e < t; e++) {
              let r = e / t,
                a = { opacity: 0.03 * (1 - r) };
              s.push(a);
            }
            r(s), n();
          },
          n = () => {},
          o = () => {
            window.addEventListener("resize", l);
          },
          c = () => {
            window.removeEventListener("resize", l);
          },
          l = () => {
            a();
          };
        return (
          (0, x.useEffect)(
            () => (
              a(),
              o(),
              () => {
                c();
              }
            ),
            []
          ),
          (0, i.jsx)("div", {
            className: "section__decoration-blinds",
            ref: s,
            children: t.map((e, t) =>
              (0, i.jsx)(
                "div",
                { className: "blind__item", style: { opacity: e.opacity } },
                "blind_".concat(t)
              )
            ),
          })
        );
      };
      function k(e) {
        let { data: t } = e,
          r = (0, x.useRef)(null),
          s = (0, x.useRef)(null),
          a = (0, x.useRef)({ x: 0, y: 0 }),
          n = (0, x.useRef)({ x: 0, y: 0 }),
          o = () => {
            r && r.current.addEventListener("mousemove", l);
          },
          c = () => {
            r.current && r.current.removeEventListener("mousemove", l);
          },
          l = (e) => {
            a.current = { x: e.layerX, y: e.layerY };
          },
          _ = () => {
            (n.current = {
              x: p.p8.utils.interpolate(n.current.x, a.current.x, 0.05),
              y: p.p8.utils.interpolate(n.current.y, a.current.y, 0.05),
            }),
              s.current &&
                (s.current.style.setProperty(
                  "--x",
                  "".concat(n.current.x, "px")
                ),
                s.current.style.setProperty(
                  "--y",
                  "".concat(n.current.y, "px")
                ));
          };
        return (
          (0, x.useEffect)(
            () => (
              (a.current = { x: window.innerWidth / 3.5, y: 350 }),
              o(),
              p.p8.ticker.add(_),
              () => {
                p.p8.ticker.remove(_), c();
              }
            ),
            []
          ),
          (0, i.jsxs)("div", {
            className: "section__background",
            ref: r,
            children: [
              (0, i.jsx)("div", { className: "background__overlay", ref: s }),
              (0, i.jsx)("div", { className: "fade__overlay" }),
              (0, i.jsx)("img", {
                src: t.url,
                alt: t.alt,
                className: "background__img",
              }),
            ],
          })
        );
      }
      var R = r(4453);
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r)
                  Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      var A = function (e) {
        return x.createElement(
          "svg",
          E(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 32,
              fill: "none",
            },
            e
          ),
          s ||
            (s = x.createElement("rect", {
              width: 19,
              height: 31,
              x: 0.5,
              y: 0.5,
              stroke: "#E5C27A",
              rx: 9.5,
            })),
          a ||
            (a = x.createElement("rect", {
              width: 2,
              height: 7,
              x: 9,
              y: 9,
              fill: "#E5C27A",
              className: "icon-mouse_svg__wheel",
              rx: 1,
            }))
        );
      };
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r)
                  Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      var T = function (e) {
          return x.createElement(
            "svg",
            O(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 53,
                height: 53,
                fill: "none",
              },
              e
            ),
            n ||
              (n = x.createElement(
                "g",
                { fill: "#E5C27A", clipPath: "url(#icon-world_svg__a)" },
                x.createElement("path", {
                  d: "M39.072 26.5a28.531 28.531 0 0 0-.633-5.889h5.3a18.091 18.091 0 0 0-.986-2.355h-4.932a29.032 29.032 0 0 0-4.255-8.642 18.11 18.11 0 0 0-3.754-1.12 26.25 26.25 0 0 1 5.727 9.703h-7.935V8.244h-2.209v9.967H17.46a26.25 26.25 0 0 1 5.742-9.716 18.079 18.079 0 0 0-3.74 1.104 29.032 29.032 0 0 0-4.284 8.612h-4.961c-.39.775-.725 1.577-1.001 2.4h5.344a28.531 28.531 0 0 0-.633 5.889c.004 2.165.25 4.323.736 6.434H9.451c.305.825.67 1.627 1.09 2.4h4.755a28.442 28.442 0 0 0 3.96 7.89c1.234.53 2.523.92 3.843 1.164a26.366 26.366 0 0 1-5.433-9.055h7.744v9.334h2.209v-9.334h7.714a26.351 26.351 0 0 1-5.447 9.055 18.074 18.074 0 0 0 3.857-1.193 28.442 28.442 0 0 0 3.96-7.862h4.711c.42-.758.783-1.545 1.09-2.355h-5.226c.508-2.123.774-4.296.794-6.478Zm-13.677 6.434h-8.45a26.044 26.044 0 0 1-.133-12.367h8.583v12.367Zm10.66 0h-8.451V20.61h8.583c.423 1.934.63 3.91.618 5.889a26.679 26.679 0 0 1-.75 6.434Z",
                }),
                x.createElement("path", {
                  d: "M26.5 2.944a23.556 23.556 0 1 0 0 47.112 23.556 23.556 0 0 0 0-47.112Zm0 44.167a20.61 20.61 0 1 1 0-41.222 20.61 20.61 0 0 1 0 41.222Z",
                })
              )),
            o ||
              (o = x.createElement(
                "defs",
                null,
                x.createElement(
                  "clipPath",
                  { id: "icon-world_svg__a" },
                  x.createElement("path", { fill: "#fff", d: "M0 0h53v53H0z" })
                )
              ))
          );
        },
        L = r(2900),
        P = r(2757),
        I = r(4953);
      p.p8.registerPlugin(P.SplitText);
      var C = !0,
        M = function (e) {
          let { data: t } = e,
            r = (0, g.useRouter)(),
            s = (0, x.useRef)(),
            a = (0, x.useRef)(),
            n = (0, x.useRef)(),
            o = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            _ = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            d = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            j = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            E = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            O = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            C = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            M = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            S = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            X = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            Z = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            q = (0, x.useRef)(p.p8.timeline({ paused: !0 })),
            z = (0, x.useRef)(),
            H = (0, x.useRef)(),
            D = (0, x.useRef)(),
            K = (0, x.useRef)(),
            Y = (0, x.useRef)(),
            B = (0, x.useRef)(),
            W = (0, x.useRef)(),
            G = (0, x.useRef)(),
            V = (0, x.useRef)(),
            F = (0, x.useRef)(),
            U = (0, x.useRef)(),
            J = (0, x.useRef)(),
            Q = (0, x.useRef)(),
            $ = (0, x.useRef)(),
            ee = (0, x.useRef)(),
            et = (0, x.useRef)(),
            er = (0, x.useRef)(),
            es = (0, x.useRef)(),
            ea = (0, x.useRef)(),
            en = (0, x.useRef)(),
            eo = (0, x.useRef)(),
            ei = (0, x.useRef)(),
            ec = (0, x.useRef)(),
            el = (0, x.useRef)(),
            e_ = (0, f.K)((e) => e.ongoingTransition),
            eu = (0, f.K)((e) => e.setOngoingTransition),
            ed = (0, f.K)((e) => e.transitionStatus),
            em = (0, f.K)((e) => e.setTransitionStatus),
            ep = (0, v.x)((e) => e.done),
            ex = (e) => {
              let t = p.p8.timeline();
              t.to(s.current, {
                autoAlpha: 0,
                ease: "power2.out",
                duration: 0.6,
                onComplete: () => {
                  em("fromDone"), e && r.push(e);
                },
              });
            },
            eg = () => {
              let e = p.p8.timeline();
              e.fromTo(
                s.current,
                { autoAlpha: 0 },
                {
                  autoAlpha: 1,
                  ease: "power2.out",
                  duration: 0.6,
                  onComplete: () => {
                    em("toDone"), eT();
                  },
                }
              );
            },
            ef = () => {
              (n.current = new IntersectionObserver((e) => {
                a.current &&
                  e.forEach((e) => {
                    e.isIntersecting
                      ? a.current.classList.add("observable")
                      : a.current.classList.remove("observable");
                  });
              })),
                n.current.observe(a.current);
            },
            ev = () => {
              n.current && n.current.disconnect();
            },
            eh = () => {
              ej(), eb(), ey(), eN(), ew(), ek(), eR(), eE(), eO(), eA();
            },
            ej = () => {
              o.current = p.p8.timeline({ paused: !0 });
              let e = new P.SplitText(".introduction__background-text", {
                type: "lines",
              });
              o.current.from(e.lines, I.xT.fromTop, 0),
                o.current.from(
                  [
                    ".introduction__scroll-indicator .indicator__text",
                    ".introduction__scroll-indicator .indicator__icon",
                  ],
                  {
                    autoAlpha: 0,
                    y: 40,
                    ease: "power2.out",
                    duration: 0.6,
                    stagger: 0.2,
                  },
                  1.2
                );
            },
            eb = () => {
              (_.current = p.p8.timeline({ paused: !0 })),
                _.current.to(
                  ".section__location .location__img-overlay",
                  I.ZC.overlay,
                  0
                ),
                _.current.from(
                  ".section__location .location__img img",
                  I.ZC.img,
                  0
                ),
                _.current.fromTo(
                  ".section__location .location__img-text .text",
                  { autoAlpha: 0, y: 20 },
                  { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.6 },
                  0.7
                ),
                _.current.from(
                  ".section__location .location__img-text .icon",
                  { scale: 0, ease: "expo.out", duration: 0.4 },
                  0.6
                ),
                (d.current = p.p8.timeline({ paused: !0 })),
                d.current.fromTo(
                  ".location__content-title",
                  { autoAlpha: 0, y: 40 },
                  { autoAlpha: 1, y: 0, ease: "power3.out", duration: 1 },
                  0
                ),
                d.current.fromTo(
                  ".location__content-text",
                  { autoAlpha: 0, y: 20 },
                  { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
                  0.4
                );
            },
            ey = () => {
              (j.current = p.p8.timeline({ paused: !0 })),
                j.current.from(
                  ".section__team .team__slider .slider__background-marquee",
                  {
                    rotateX: 90,
                    autoAlpha: 0,
                    ease: "power2.out",
                    duration: 1.5,
                  },
                  0.6
                ),
                j.current.from(
                  ".section__team .team__slider .card__title",
                  I.xT.fromTop,
                  0
                ),
                j.current.fromTo(
                  ".section__team .team__slider .slider__card .card__image .image__overlay",
                  { scaleY: 1, scaleX: 1 },
                  {
                    scaleY: 0,
                    transformOrigin: "50% 100%",
                    ease: "power2.out",
                    duration: 1,
                    onComplete: () => {
                      p.p8.set(
                        ".section__team .team__slider .slider__card .card__image .image__overlay",
                        { scaleX: 0, scaleY: 1 }
                      );
                    },
                  },
                  0.4
                ),
                j.current.from(
                  ".section__team .team__slider .slider__card .card__image img",
                  { scale: 1.2, ease: "power2.out", duration: 2 },
                  0.4
                ),
                j.current.from(
                  [
                    ".section__team .team__slider .card__text .text__name",
                    ".section__team .team__slider .card__text .text__role",
                  ],
                  {
                    rotateX: 90,
                    transformOrigin: "50% 0%",
                    autoAlpha: 0,
                    ease: "power2.out",
                    duration: 1,
                    stagger: 0.1,
                  },
                  1.2
                );
            },
            eN = () => {
              E.current.to(
                [
                  ".break__left-img .img__overlay",
                  ".break__right-img .img__overlay",
                ],
                I.ZC.overlay,
                0
              ),
                E.current.from(
                  [".break__left-img img", ".break__right-img img"],
                  I.ZC.img,
                  0
                );
            },
            ew = () => {
              O.current.from(
                ".section__punchline .section__background .background__img",
                { scale: 1.4, autoAlpha: 0, ease: "power2.out", duration: 2 },
                0
              ),
                O.current.from(
                  ".section__punchline .punchline__text-top",
                  { y: 60, autoAlpha: 0, ease: "power3.out", duration: 1 },
                  0
                ),
                O.current.from(
                  ".section__punchline .punchline__text-bottom",
                  { y: 120, autoAlpha: 0, ease: "power3.out", duration: 1 },
                  0.4
                );
            },
            ek = () => {
              let e = document.querySelectorAll(
                ".section__variable-text .variable__block"
              );
              e.forEach((e, t) => {
                let r = e.querySelector(".title__dot"),
                  s = e.querySelector(".title__text"),
                  a = e.querySelector(".variable__block-content"),
                  n = e.querySelector(".variable__block-line");
                C.current.from(
                  r,
                  { scale: 0, ease: "power2.out", duration: 1 },
                  0.5 * t
                ),
                  C.current.fromTo(
                    s,
                    { autoAlpha: 0, y: 40 },
                    { autoAlpha: 1, y: 0, ease: "power3.out", duration: 1 },
                    (t + 0.1) * 0.5
                  ),
                  C.current.fromTo(
                    a,
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.6 },
                    (t + 0.2) * 0.5
                  ),
                  C.current.from(
                    n,
                    {
                      scaleX: 0,
                      transformOrigin: "0% 50%",
                      ease: "power2.out",
                      duration: 0.6,
                    },
                    (t + 1.4) * 0.5
                  );
              });
            },
            eR = () => {
              M.current.to(
                ".section__team-picture .team-picture__block .overlay",
                I.ZC.overlay,
                0
              ),
                M.current.from(
                  ".section__team-picture .team-picture__block img",
                  I.ZC.img,
                  0
                ),
                M.current.from(
                  ".section__team-picture .text__container .text__dot",
                  { scale: 0, ease: "power2.out", duration: 1 },
                  0.2
                ),
                M.current.from(
                  ".section__team-picture .text__container .text",
                  I.xT.fromTop,
                  0.4
                );
            },
            eE = () => {
              S.current.fromTo(
                ".section__partners .partners__title",
                { autoAlpha: 0, y: 40 },
                { autoAlpha: 1, y: 0, ease: "power3.out", duration: 1 },
                0
              ),
                S.current.from(
                  ".section__partners .partners__list .partner",
                  {
                    scale: 1.2,
                    autoAlpha: 0,
                    ease: "power2.out",
                    duration: 1,
                    stagger: 0.03,
                  },
                  0
                );
            },
            eA = () => {
              q.current.from(
                ".section__address .vertical__marquee:first-of-type",
                { y: 100, autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                0
              ),
                q.current.from(
                  ".section__address .vertical__marquee:last-of-type",
                  { y: -100, autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                  0
                ),
                q.current.to(
                  ".section__address .address__image-flipper .overlay",
                  I.ZC.overlay,
                  0.4
                ),
                q.current.from(
                  ".section__address .address__image-flipper .images__list",
                  I.ZC.img,
                  0.4
                ),
                q.current.from(
                  ".section__address .address__bottom svg",
                  I.xT.fromTop,
                  1
                );
            },
            eO = () => {
              X.current.from(
                ".section__categories .separator__large",
                {
                  scaleX: 0,
                  transformOrigin: "0% 50%",
                  ease: "power3.out",
                  duration: 0.6,
                },
                0
              ),
                X.current.from(
                  ".section__categories .separator__default",
                  {
                    scaleX: 0,
                    transformOrigin: "100% 50%",
                    ease: "power3.out",
                    duration: 0.6,
                  },
                  0.05
                ),
                X.current.from(
                  [
                    ".section__categories .category__title .title__decoration",
                    ".section__categories .category__title .title__text",
                  ],
                  {
                    y: 40,
                    autoAlpha: 0,
                    ease: "power3.out",
                    duration: 0.6,
                    stagger: 0.1,
                  },
                  0.2
                ),
                X.current.fromTo(
                  ".section__categories .category__introduction",
                  { y: 40, autoAlpha: 0 },
                  { y: 0, autoAlpha: 1, ease: "power3.out", duration: 0.6 },
                  0.4
                );
              for (let e = 0; e < 3; e++) {
                let t = "";
                0 === e && (t = "one"),
                  1 === e && (t = "two"),
                  2 === e && (t = "three"),
                  Z.current.to(
                    ".section__categories .category__block-".concat(
                      t,
                      " .image__overlay"
                    ),
                    {
                      scaleY: 0,
                      transformOrigin: "50% 0%",
                      ease: "power3.out",
                      duration: 0.6,
                    },
                    0.4 * e + 0
                  ),
                  Z.current.from(
                    ".section__categories .category__block-".concat(t, " img"),
                    { scale: 1.2, ease: "power3.out", duration: 2 },
                    0.4 * e + 0
                  ),
                  Z.current.from(
                    ".section__categories .category__block-".concat(
                      t,
                      " .title__dot"
                    ),
                    { scale: 0, ease: "power3.out", duration: 1 },
                    0.4 * e + 0.1
                  ),
                  Z.current.from(
                    ".section__categories .category__block-".concat(
                      t,
                      " .title__text"
                    ),
                    { autoAlpha: 0, y: 60, ease: "power3.out", duration: 1 },
                    0.4 * e + 0.15
                  ),
                  Z.current.fromTo(
                    ".section__categories .category__block-".concat(
                      t,
                      " .block__text"
                    ),
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, ease: "power3.out", duration: 0.6 },
                    0.4 * e + 0.25
                  );
              }
            },
            eT = () => {
              (z.current = new IntersectionObserver(
                (e) => {
                  eL(e, z, o);
                },
                { rootMargin: "-30% 0px -30% 0px" }
              )),
                z.current.observe(Q.current),
                (H.current = new IntersectionObserver(
                  (e) => {
                    eL(e, H, _);
                  },
                  { rootMargin: "-50% 0px -50% 0px" }
                )),
                H.current.observe($.current),
                (D.current = new IntersectionObserver(
                  (e) => {
                    eL(e, D, d);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                D.current.observe(ee.current),
                (K.current = new IntersectionObserver(
                  (e) => {
                    eL(e, K, j);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                K.current.observe(et.current),
                (Y.current = new IntersectionObserver(
                  (e) => {
                    eL(e, Y, E);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                Y.current.observe(er.current),
                (B.current = new IntersectionObserver(
                  (e) => {
                    eL(e, B, O);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                B.current.observe(es.current),
                (W.current = new IntersectionObserver(
                  (e) => {
                    eL(e, W, C);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                W.current.observe(ea.current),
                (G.current = new IntersectionObserver(
                  (e) => {
                    eL(e, G, M);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                G.current.observe(en.current),
                (V.current = new IntersectionObserver(
                  (e) => {
                    eL(e, V, S);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                V.current.observe(eo.current),
                (F.current = new IntersectionObserver(
                  (e) => {
                    eL(e, F, X);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                F.current.observe(ec.current),
                (U.current = new IntersectionObserver(
                  (e) => {
                    eL(e, U, Z);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                U.current.observe(el.current),
                (J.current = new IntersectionObserver(
                  (e) => {
                    eL(e, J, q);
                  },
                  { rootMargin: "-30% 0px -30% 0px" }
                )),
                J.current.observe(ei.current);
            },
            eL = (e, t, r) => {
              e.forEach((e) => {
                e.isIntersecting && (r.current.play(), t.current.disconnect());
              });
            },
            eP = (e, t) => {
              e.preventDefault(),
                eu({ from: "about", to: "page", destinationUrl: t }),
                em("start");
            };
          return (
            (0, x.useLayoutEffect)(() => {
              eh();
            }, []),
            (0, x.useEffect)(
              () => (
                ef(),
                () => {
                  ev();
                }
              ),
              []
            ),
            (0, x.useEffect)(() => {
              !0 === ep && eg();
            }, [ep]),
            (0, x.useEffect)(() => {
              "about" === e_.from && ex(e_.destinationUrl);
            }, [e_]),
            (0, x.useEffect)(() => {
              "about" === e_.to && "fromDone" === ed && eg();
            }, [ed]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(m(), {
                  children: [
                    (0, i.jsx)("title", {
                      children: t.seo_title
                        ? t.seo_title
                        : "\xc0 propos - Projart",
                    }),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "description",
                        content: t.seo_description
                          ? t.seo_description
                          : "D\xe9couvrez l'architecture d'int\xe9rieur r\xe9invent\xe9e par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est.",
                      },
                      "desc"
                    ),
                    (0, i.jsx)("meta", {
                      property: "og:title",
                      content: t.seo_title
                        ? t.seo_title
                        : "\xc0 propos - Projart",
                    }),
                    (0, i.jsx)("meta", {
                      property: "og:description",
                      content: t.seo_description
                        ? t.seo_description
                        : "D\xe9couvrez l'architecture d'int\xe9rieur r\xe9invent\xe9e par Projart — Bas\xe9 \xe0 S\xe9l\xe9stat et op\xe8re dans tout le Grand-Est.",
                    }),
                    (0, i.jsx)("meta", {
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
                (0, i.jsxs)(R.Z, {
                  children: [
                    (0, i.jsx)("div", { className: "header__background" }),
                    (0, i.jsxs)("div", {
                      className: "page__about",
                      ref: s,
                      children: [
                        (0, i.jsxs)("section", {
                          className: "section section__introduction",
                          ref: Q,
                          children: [
                            (0, i.jsx)(w, {}),
                            (0, i.jsxs)("div", {
                              className: "section__wrapper",
                              children: [
                                t.intro_bg_text &&
                                  (0, i.jsx)("div", {
                                    className: "introduction__background-text",
                                    children: t.intro_bg_text,
                                  }),
                                (0, i.jsxs)("div", {
                                  className: "introduction__scroll-indicator",
                                  ref: a,
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "indicator__text",
                                      children:
                                        "D\xe9roulez pour plus de projart",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "indicator__icon",
                                      children: (0, i.jsx)(A, {}),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("section", {
                          className: "section section__location",
                          ref: $,
                          children: [
                            (0, i.jsx)("div", {
                              className: "location__image-block",
                              children: (0, i.jsxs)("div", {
                                className: "section__wrapper",
                                children: [
                                  t.location_image &&
                                    (0, i.jsxs)("div", {
                                      className: "location__img",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: "location__img-overlay",
                                        }),
                                        (0, i.jsx)("img", {
                                          src: t.location_image.desktop.url,
                                          alt: t.location_image.alt,
                                        }),
                                      ],
                                    }),
                                  t.location_text &&
                                    (0, i.jsxs)("div", {
                                      className: "location__img-text",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: "icon",
                                          children: (0, i.jsx)(T, {}),
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "text",
                                          children: t.location_text,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "location__content-block",
                              ref: ee,
                              children: (0, i.jsxs)("div", {
                                className: "section__wrapper grid",
                                children: [
                                  t.location_parag_title &&
                                    (0, i.jsx)("div", {
                                      className: "location__content-title",
                                      children: (0, i.jsx)(l.K, {
                                        field: t.location_parag_title,
                                      }),
                                    }),
                                  t.location_parag_content &&
                                    (0, i.jsx)("div", {
                                      className: "location__content-text",
                                      children: (0, i.jsx)(l.K, {
                                        field: t.location_parag_content,
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)("section", {
                          className: "section section__team",
                          ref: et,
                          children:
                            t.team_list &&
                            (0, i.jsx)(b, {
                              teamList: t.team_list,
                              title: "".concat(
                                t.team_heading ? t.team_heading : "L'\xe9quipe"
                              ),
                            }),
                        }),
                        (0, i.jsx)("section", {
                          className: "section section__break",
                          ref: er,
                          children: (0, i.jsxs)("div", {
                            className: "section__wrapper grid",
                            children: [
                              t.visuels_left &&
                                (0, i.jsxs)("div", {
                                  className: "break__left-img break__img",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "img__overlay",
                                    }),
                                    (0, i.jsx)("img", {
                                      src: t.visuels_left.desktop.url,
                                      alt: t.visuels_left.alt,
                                    }),
                                  ],
                                }),
                              t.visuels_right &&
                                (0, i.jsxs)("div", {
                                  className: "break__right-img break__img",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "img__overlay",
                                    }),
                                    (0, i.jsx)("img", {
                                      src: t.visuels_right.desktop.url,
                                      alt: t.visuels_right.alt,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        (0, i.jsxs)("section", {
                          className: "section section__punchline",
                          ref: es,
                          children: [
                            (0, i.jsx)("div", {
                              className: "section__wrapper",
                              children: (0, i.jsxs)("div", {
                                className: "punchline__text",
                                children: [
                                  t.punchline_text_top &&
                                    (0, i.jsx)("div", {
                                      className: "punchline__text-top",
                                      children: (0, i.jsx)(c.v, {
                                        field: t.punchline_text_top,
                                      }),
                                    }),
                                  t.punchline_text_top &&
                                    (0, i.jsx)("div", {
                                      className: "punchline__text-bottom",
                                      children: (0, i.jsx)(c.v, {
                                        field: t.punchline_text_middle,
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            t.punchline_image &&
                              (0, i.jsx)(k, { data: t.punchline_image }),
                          ],
                        }),
                        (0, i.jsx)("section", {
                          className: "section section__variable-text",
                          ref: ea,
                          children: (0, i.jsx)("div", {
                            className: "section__wrapper",
                            children:
                              t.text_blocks_list.length > 0 &&
                              t.text_blocks_list.map((e, t) =>
                                (0, i.jsxs)(
                                  "div",
                                  {
                                    className: "variable__block",
                                    children: [
                                      e.title &&
                                        (0, i.jsxs)("div", {
                                          className: "variable__block-title",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "title__dot",
                                            }),
                                            (0, i.jsx)("div", {
                                              className: "title__text",
                                              children: e.title,
                                            }),
                                          ],
                                        }),
                                      e.text &&
                                        (0, i.jsx)("div", {
                                          className: "variable__block-content",
                                          children: (0, i.jsx)(l.K, {
                                            field: e.text,
                                          }),
                                        }),
                                      (0, i.jsx)("div", {
                                        className: "variable__block-line",
                                      }),
                                    ],
                                  },
                                  "block_".concat(t)
                                )
                              ),
                          }),
                        }),
                        (0, i.jsx)("section", {
                          className: "section section__team-picture",
                          ref: en,
                          children: (0, i.jsx)("div", {
                            className: "section__wrapper grid",
                            children:
                              t.teamPicture_image &&
                              (0, i.jsxs)("div", {
                                className: "team-picture__block",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "picture",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className: "overlay",
                                      }),
                                      (0, i.jsx)("img", {
                                        src: t.teamPicture_image.desktop.url,
                                        alt: t.teamPicture_image.alt,
                                      }),
                                    ],
                                  }),
                                  t.teamPicture_sideText &&
                                    (0, i.jsxs)("div", {
                                      className: "text__container",
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: "text__dot",
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "text",
                                          children: t.teamPicture_sideText,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                          }),
                        }),
                        (0, i.jsx)("section", {
                          className: "section section__partners",
                          ref: eo,
                          children: (0, i.jsxs)("div", {
                            className: "section__wrapper",
                            children: [
                              t.partners_title &&
                                (0, i.jsx)("div", {
                                  className: "partners__title",
                                  children: t.partners_title,
                                }),
                              t.partners_list.length > 0 &&
                                (0, i.jsx)("div", {
                                  className: "partners__list",
                                  children: t.partners_list.map((e, t) =>
                                    e.logo.url
                                      ? (0, i.jsx)(
                                          "div",
                                          {
                                            className: "partner",
                                            title: e.name || "",
                                            children: (0, i.jsx)("img", {
                                              src: e.logo.url,
                                              alt: e.name || "",
                                            }),
                                          },
                                          "partner_".concat(t)
                                        )
                                      : null
                                  ),
                                }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("section", {
                          className: "section section__categories",
                          ref: ec,
                          children: (0, i.jsxs)("div", {
                            className: "section__wrapper grid",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "category__title",
                                children: [
                                  t.category_title_decoration &&
                                    (0, i.jsx)("div", {
                                      className: "title__decoration",
                                      children: t.category_title_decoration,
                                    }),
                                  t.category_title_text &&
                                    (0, i.jsx)("div", {
                                      className: "title__text",
                                      children: t.category_title_text,
                                    }),
                                ],
                              }),
                              t.category_intro_text &&
                                (0, i.jsx)("div", {
                                  className: "category__introduction",
                                  children: (0, i.jsx)(c.v, {
                                    field: t.category_intro_text,
                                  }),
                                }),
                              (0, i.jsxs)("div", {
                                className: "category__blocks",
                                ref: el,
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "category__block category__block-one",
                                    children: [
                                      t.category_block1_image &&
                                        (0, i.jsxs)("div", {
                                          className: "block__image",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "image__overlay",
                                            }),
                                            (0, i.jsx)("img", {
                                              src: t.category_block1_image.url
                                                ? t.category_block1_image.url
                                                : "",
                                              alt:
                                                t.category_block1_image.alt ||
                                                "",
                                            }),
                                          ],
                                        }),
                                      t.category_block1_title &&
                                        (0, i.jsxs)("div", {
                                          className: "block__title",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "title__dot",
                                            }),
                                            (0, i.jsx)("div", {
                                              className: "title__text",
                                              children: t.category_block1_title,
                                            }),
                                          ],
                                        }),
                                      t.category_block1_text &&
                                        (0, i.jsx)("div", {
                                          className: "block__text",
                                          children: (0, i.jsx)(c.v, {
                                            field: t.category_block1_text,
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "category__block category__block-two",
                                    children: [
                                      t.category_block2_image &&
                                        (0, i.jsxs)("div", {
                                          className: "block__image",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "image__overlay",
                                            }),
                                            (0, i.jsx)("img", {
                                              src: t.category_block2_image.url
                                                ? t.category_block2_image.url
                                                : "",
                                              alt:
                                                t.category_block2_image.alt ||
                                                "",
                                            }),
                                          ],
                                        }),
                                      t.category_block2_title &&
                                        (0, i.jsxs)("div", {
                                          className: "block__title",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "title__dot",
                                            }),
                                            (0, i.jsx)("div", {
                                              className: "title__text",
                                              children: t.category_block2_title,
                                            }),
                                          ],
                                        }),
                                      t.category_block2_text &&
                                        (0, i.jsx)("div", {
                                          className: "block__text",
                                          children: (0, i.jsx)(c.v, {
                                            field: t.category_block2_text,
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "category__block category__block-three",
                                    children: [
                                      t.category_block3_image &&
                                        (0, i.jsxs)("div", {
                                          className: "block__image",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "image__overlay",
                                            }),
                                            (0, i.jsx)("img", {
                                              src: t.category_block3_image.url
                                                ? t.category_block3_image.url
                                                : "",
                                              alt:
                                                t.category_block3_image.alt ||
                                                "",
                                            }),
                                          ],
                                        }),
                                      t.category_block3_title &&
                                        (0, i.jsxs)("div", {
                                          className: "block__title",
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: "title__dot",
                                            }),
                                            (0, i.jsx)("div", {
                                              className: "title__text",
                                              children: t.category_block3_title,
                                            }),
                                          ],
                                        }),
                                      t.category_block3_text &&
                                        (0, i.jsx)("div", {
                                          className: "block__text",
                                          children: (0, i.jsx)(c.v, {
                                            field: t.category_block3_text,
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)(h.Z, {}, "contact_aboutPage"),
                        (0, i.jsx)("section", {
                          className: "section section__address",
                          ref: ei,
                          children: (0, i.jsxs)("div", {
                            className: "section__wrapper grid",
                            children: [
                              (0, i.jsxs)("a", {
                                className: "address__top",
                                a: !0,
                                href: "https://www.google.com/maps/dir//projart/@48.5361818,7.349273,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479144ea55d81491:0x500f98266ede5b28!2m2!1d7.4543153!2d48.2575637?entry=ttu",
                                target: "_blank",
                                children: [
                                  (0, i.jsx)(y, {
                                    type: "right",
                                    content:
                                      "Projart\xa0•\xa0Projart\xa0•\xa0Projart\xa0•\xa0Projart\xa0•\xa0Projart\xa0•\xa0",
                                  }),
                                  (0, i.jsx)(N, {
                                    data: t.address_images_list,
                                  }),
                                  (0, i.jsx)(y, { content: t.address_full }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "address__bottom",
                                children: (0, i.jsx)(L.Z, {}),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "about__footer",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "footer__decoration",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "decoration__line",
                                }),
                                (0, i.jsx)("div", {
                                  className: "decoration__line",
                                }),
                                (0, i.jsx)("div", {
                                  className: "decoration__line",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "section__wrapper",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "footer__legal-links",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "legal__mentions",
                                      children: (0, i.jsx)(u(), {
                                        href: "/mentions-legales",
                                        onClick: (e) =>
                                          eP(e, "mentions-legales"),
                                        children: "Mentions l\xe9gales",
                                      }),
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "credits",
                                      children: [
                                        "Taill\xe9 dans la passion par ",
                                        (0, i.jsx)("a", {
                                          href: "https://ironvelvet.studio",
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: "Iron Velvet",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("div", {
                                  className: "footer__social__credits",
                                  children: (0, i.jsx)("div", {
                                    className: "social__links",
                                    children: t.social_list.map((e, t) =>
                                      (0, i.jsx)(
                                        "a",
                                        {
                                          href: e.link.url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className: "social__link",
                                          children: (0, i.jsx)("img", {
                                            src: e.logo.url,
                                            alt: e.link.url,
                                          }),
                                        },
                                        "social_".concat(t)
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    4953: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZC: function () {
          return a;
        },
        xT: function () {
          return s;
        },
      });
      let s = {
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
  },
  function (e) {
    e.O(0, [395, 774, 888, 179], function () {
      return e((e.s = 2250));
    }),
      (_N_E = e.O());
  },
]);
