(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [395],
  {
    2839: function (D, u, e) {
      "use strict";
      e.d(u, {
        K: function () {
          return E;
        },
      });
      var t = e(5893),
        F = e(7294),
        C = e(8227),
        i = e(8268);
      let n = (D, u) => (D ? (0, i.S)(D, u) : null),
        E = (D) =>
          F.useMemo(() => {
            if (!(0, C.qO)(D.field))
              return null != D.fallback
                ? (0, t.jsx)(t.Fragment, { children: D.fallback })
                : null;
            {
              let u = n(D.field, D.separator);
              return (0, t.jsx)(t.Fragment, { children: u });
            }
          }, [D.field, D.fallback, D.separator]);
    },
    2757: function (D, u) {
      var e,
        t,
        F,
        C,
        i,
        n,
        E,
        s,
        r,
        l,
        o,
        a,
        d,
        p,
        h,
        B,
        f,
        A,
        c,
        g,
        x,
        y,
        _,
        b;
      (e = u),
        (t =
          /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/),
        (r = /(?:\r|\n|\t\t)/g),
        (l = /(?:\s\s+)/g),
        (o = function (D) {
          (F = document),
            (C = window),
            (n =
              n ||
              D ||
              C.gsap ||
              console.warn("Please gsap.registerPlugin(SplitText)")) &&
              ((s = n.utils.toArray),
              (E = n.core.context || function () {}),
              (i = 1));
        }),
        (a = function (D) {
          return C.getComputedStyle(D);
        }),
        (d = function (D) {
          return "absolute" === D.position || !0 === D.absolute;
        }),
        (p = function (D, u) {
          for (var e, t = u.length; --t > -1; )
            if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
        }),
        (h = function (D, u) {
          void 0 === D && (D = "");
          var e = ~D.indexOf("++"),
            t = 1;
          return (
            e && (D = D.split("++").join("")),
            function () {
              return (
                "<" +
                u +
                " style='position:relative;display:inline-block;'" +
                (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
              );
            }
          );
        }),
        (B = function D(u, e, t) {
          var F = u.nodeType;
          if (1 === F || 9 === F || 11 === F)
            for (u = u.firstChild; u; u = u.nextSibling) D(u, e, t);
          else
            (3 === F || 4 === F) &&
              (u.nodeValue = u.nodeValue.split(e).join(t));
        }),
        (f = function (D, u) {
          for (var e = u.length; --e > -1; ) D.push(u[e]);
        }),
        (A = function (D, u, e) {
          for (var t; D && D !== u; ) {
            if ((t = D._next || D.nextSibling))
              return t.textContent.charAt(0) === e;
            D = D.parentNode || D._parent;
          }
        }),
        (c = function D(u) {
          var e,
            t,
            F = s(u.childNodes),
            C = F.length;
          for (e = 0; e < C; e++)
            (t = F[e])._isSplit
              ? D(t)
              : e && t.previousSibling && 3 === t.previousSibling.nodeType
              ? ((t.previousSibling.nodeValue +=
                  3 === t.nodeType ? t.nodeValue : t.firstChild.nodeValue),
                u.removeChild(t))
              : 3 !== t.nodeType &&
                (u.insertBefore(t.firstChild, t), u.removeChild(t));
        }),
        (g = function (D, u) {
          return parseFloat(u[D]) || 0;
        }),
        (x = function (D, u, e, t, C, i, n) {
          var E,
            s,
            r,
            l,
            o,
            p,
            h,
            x,
            y,
            _,
            b,
            v,
            S = a(D),
            N = g("paddingLeft", S),
            m = -999,
            T = g("borderBottomWidth", S) + g("borderTopWidth", S),
            w = g("borderLeftWidth", S) + g("borderRightWidth", S),
            L = g("paddingTop", S) + g("paddingBottom", S),
            k = g("paddingLeft", S) + g("paddingRight", S),
            W = g("fontSize", S) * (u.lineThreshold || 0.2),
            H = S.textAlign,
            O = [],
            M = [],
            V = [],
            j = u.wordDelimiter || " ",
            R = u.tag ? u.tag : u.span ? "span" : "div",
            P = u.type || u.split || "chars,words,lines",
            q = C && ~P.indexOf("lines") ? [] : null,
            z = ~P.indexOf("words"),
            K = ~P.indexOf("chars"),
            G = d(u),
            I = u.linesClass,
            J = ~(I || "").indexOf("++"),
            Q = [],
            U = "flex" === S.display,
            X = D.style.display;
          for (
            J && (I = I.split("++").join("")),
              U && (D.style.display = "block"),
              r = (s = D.getElementsByTagName("*")).length,
              o = [],
              E = 0;
            E < r;
            E++
          )
            o[E] = s[E];
          if (q || G)
            for (E = 0; E < r; E++)
              ((p = (l = o[E]).parentNode === D) || G || (K && !z)) &&
                ((v = l.offsetTop),
                q &&
                  p &&
                  Math.abs(v - m) > W &&
                  ("BR" !== l.nodeName || 0 === E) &&
                  ((h = []), q.push(h), (m = v)),
                G &&
                  ((l._x = l.offsetLeft),
                  (l._y = v),
                  (l._w = l.offsetWidth),
                  (l._h = l.offsetHeight)),
                q &&
                  (((l._isSplit && p) ||
                    (!K && p) ||
                    (z && p) ||
                    (!z &&
                      l.parentNode.parentNode === D &&
                      !l.parentNode._isSplit)) &&
                    (h.push(l), (l._x -= N), A(l, D, j) && (l._wordEnd = !0)),
                  "BR" === l.nodeName &&
                    ((l.nextSibling && "BR" === l.nextSibling.nodeName) ||
                      0 === E) &&
                    q.push([])));
          for (E = 0; E < r; E++) {
            if (((p = (l = o[E]).parentNode === D), "BR" === l.nodeName)) {
              q || G
                ? (l.parentNode && l.parentNode.removeChild(l),
                  o.splice(E--, 1),
                  r--)
                : z || D.appendChild(l);
              continue;
            }
            if (
              (G &&
                ((y = l.style),
                z ||
                  p ||
                  ((l._x += l.parentNode._x), (l._y += l.parentNode._y)),
                (y.left = l._x + "px"),
                (y.top = l._y + "px"),
                (y.position = "absolute"),
                (y.display = "block"),
                (y.width = l._w + 1 + "px"),
                (y.height = l._h + "px")),
              !z && K)
            ) {
              if (l._isSplit)
                for (
                  l._next = s = l.nextSibling, l.parentNode.appendChild(l);
                  s && 3 === s.nodeType && " " === s.textContent;

                )
                  (l._next = s.nextSibling),
                    l.parentNode.appendChild(s),
                    (s = s.nextSibling);
              else
                l.parentNode._isSplit
                  ? ((l._parent = l.parentNode),
                    !l.previousSibling &&
                      l.firstChild &&
                      (l.firstChild._isFirst = !0),
                    l.nextSibling &&
                      " " === l.nextSibling.textContent &&
                      !l.nextSibling.nextSibling &&
                      Q.push(l.nextSibling),
                    (l._next =
                      l.nextSibling && l.nextSibling._isFirst
                        ? null
                        : l.nextSibling),
                    l.parentNode.removeChild(l),
                    o.splice(E--, 1),
                    r--)
                  : p ||
                    ((v = !l.nextSibling && A(l.parentNode, D, j)),
                    l.parentNode._parent && l.parentNode._parent.appendChild(l),
                    v && l.parentNode.appendChild(F.createTextNode(" ")),
                    "span" === R && (l.style.display = "inline"),
                    O.push(l));
            } else
              l.parentNode._isSplit && !l._isSplit && "" !== l.innerHTML
                ? M.push(l)
                : K &&
                  !l._isSplit &&
                  ("span" === R && (l.style.display = "inline"), O.push(l));
          }
          for (E = Q.length; --E > -1; ) Q[E].parentNode.removeChild(Q[E]);
          if (q) {
            for (
              G &&
                ((_ = F.createElement(R)),
                D.appendChild(_),
                (b = _.offsetWidth + "px"),
                (v = _.offsetParent === D ? 0 : D.offsetLeft),
                D.removeChild(_)),
                y = D.style.cssText,
                D.style.cssText = "display:none;";
              D.firstChild;

            )
              D.removeChild(D.firstChild);
            for (
              E = 0, x = " " === j && (!G || (!z && !K));
              E < q.length;
              E++
            ) {
              for (
                h = q[E],
                  (_ = F.createElement(R)).style.cssText =
                    "display:block;text-align:" +
                    H +
                    ";position:" +
                    (G ? "absolute;" : "relative;"),
                  I && (_.className = I + (J ? E + 1 : "")),
                  V.push(_),
                  r = h.length,
                  s = 0;
                s < r;
                s++
              )
                "BR" !== h[s].nodeName &&
                  ((l = h[s]),
                  _.appendChild(l),
                  x && l._wordEnd && _.appendChild(F.createTextNode(" ")),
                  G &&
                    (0 === s &&
                      ((_.style.top = l._y + "px"),
                      (_.style.left = N + v + "px")),
                    (l.style.top = "0px"),
                    v && (l.style.left = l._x - v + "px")));
              0 === r
                ? (_.innerHTML = "&nbsp;")
                : z || K || (c(_), B(_, String.fromCharCode(160), " ")),
                G && ((_.style.width = b), (_.style.height = l._h + "px")),
                D.appendChild(_);
            }
            D.style.cssText = y;
          }
          G &&
            (n > D.clientHeight &&
              ((D.style.height = n - L + "px"),
              D.clientHeight < n && (D.style.height = n + T + "px")),
            i > D.clientWidth &&
              ((D.style.width = i - k + "px"),
              D.clientWidth < i && (D.style.width = i + w + "px"))),
            U &&
              (X ? (D.style.display = X) : D.style.removeProperty("display")),
            f(e, O),
            z && f(t, M),
            f(C, V);
        }),
        (y = function (D, u, e, C) {
          var i,
            n,
            E,
            s,
            o,
            a,
            h,
            f,
            A = u.tag ? u.tag : u.span ? "span" : "div",
            c = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
            g = d(u),
            x = u.wordDelimiter || " ",
            y = " " !== x ? "" : g ? "&#173; " : " ",
            _ = "</" + A + ">",
            b = 1,
            v = u.specialChars
              ? "function" == typeof u.specialChars
                ? u.specialChars
                : p
              : null,
            S = F.createElement("div"),
            N = D.parentNode;
          for (
            N.insertBefore(S, D),
              S.textContent = D.nodeValue,
              N.removeChild(D),
              h =
                -1 !==
                (i = (function D(u) {
                  var e = u.nodeType,
                    t = "";
                  if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof u.textContent) return u.textContent;
                    for (u = u.firstChild; u; u = u.nextSibling) t += D(u);
                  } else if (3 === e || 4 === e) return u.nodeValue;
                  return t;
                })((D = S))).indexOf("<"),
              !1 !== u.reduceWhiteSpace &&
                (i = i.replace(l, " ").replace(r, "")),
              h && (i = i.split("<").join("{{LT}}")),
              o = i.length,
              n = (" " === i.charAt(0) ? y : "") + e(),
              E = 0;
            E < o;
            E++
          )
            if (((a = i.charAt(E)), v && (f = v(i.substr(E), u.specialChars))))
              (a = i.substr(E, f || 1)),
                (n += c && " " !== a ? C() + a + "</" + A + ">" : a),
                (E += f - 1);
            else if (a === x && i.charAt(E - 1) !== x && E) {
              for (n += b ? _ : "", b = 0; i.charAt(E + 1) === x; )
                (n += y), E++;
              E === o - 1
                ? (n += y)
                : ")" !== i.charAt(E + 1) && ((n += y + e()), (b = 1));
            } else
              "{" === a && "{{LT}}" === i.substr(E, 6)
                ? ((n += c ? C() + "{{LT}}</" + A + ">" : "{{LT}}"), (E += 5))
                : (a.charCodeAt(0) >= 55296 && 56319 >= a.charCodeAt(0)) ||
                  (i.charCodeAt(E + 1) >= 65024 && 65039 >= i.charCodeAt(E + 1))
                ? ((s =
                    ((i.substr(E, 12).split(t) || [])[1] || "").length || 2),
                  (n +=
                    c && " " !== a
                      ? C() + i.substr(E, s) + "</" + A + ">"
                      : i.substr(E, s)),
                  (E += s - 1))
                : (n += c && " " !== a ? C() + a + "</" + A + ">" : a);
          (D.outerHTML = n + (b ? _ : "")), h && B(N, "{{LT}}", "<");
        }),
        (_ = function D(u, e, t, F) {
          var C,
            i,
            n = s(u.childNodes),
            E = n.length,
            r = d(e);
          if (3 !== u.nodeType || E > 1) {
            for (C = 0, e.absolute = !1; C < E; C++)
              ((i = n[C])._next = i._isFirst = i._parent = i._wordEnd = null),
                (3 !== i.nodeType || /\S+/.test(i.nodeValue)) &&
                  (r &&
                    3 !== i.nodeType &&
                    "inline" === a(i).display &&
                    ((i.style.display = "inline-block"),
                    (i.style.position = "relative")),
                  (i._isSplit = !0),
                  D(i, e, t, F));
            (e.absolute = r), (u._isSplit = !0);
            return;
          }
          y(u, e, t, F);
        }),
        ((b = (function () {
          function D(D, u) {
            i || o(),
              (this.elements = s(D)),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this._originals = []),
              (this.vars = u || {}),
              E(this),
              this.split(u);
          }
          var u = D.prototype;
          return (
            (u.split = function (D) {
              this.isSplit && this.revert(),
                (this.vars = D = D || this.vars),
                (this._originals.length =
                  this.chars.length =
                  this.words.length =
                  this.lines.length =
                    0);
              for (
                var u,
                  e,
                  t,
                  F = this.elements.length,
                  C = D.tag ? D.tag : D.span ? "span" : "div",
                  i = h(D.wordsClass, C),
                  n = h(D.charsClass, C);
                --F > -1;

              )
                (t = this.elements[F]),
                  (this._originals[F] = t.innerHTML),
                  (u = t.clientHeight),
                  (e = t.clientWidth),
                  _(t, D, i, n),
                  x(t, D, this.chars, this.words, this.lines, e, u);
              return (
                this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                (this.isSplit = !0),
                this
              );
            }),
            (u.revert = function () {
              var D = this._originals;
              if (!D) throw "revert() call wasn't scoped properly.";
              return (
                this.elements.forEach(function (u, e) {
                  return (u.innerHTML = D[e]);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            }),
            (D.create = function (u, e) {
              return new D(u, e);
            }),
            D
          );
        })()).version = "3.12.1"),
        (b.register = o),
        (e.SplitText = b),
        (e.default = b),
        Object.defineProperty(e, "__esModule", { value: !0 });
    },
    8268: function (D, u, e) {
      "use strict";
      e.d(u, {
        S: function () {
          return t;
        },
      });
      let t = (D, u = " ") => {
        let e = "";
        for (let t = 0; t < D.length; t++)
          "text" in D[t] && (e += (e ? u : "") + D[t].text);
        return e;
      };
    },
  },
]);
