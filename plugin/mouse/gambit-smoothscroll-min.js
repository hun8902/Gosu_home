"undefined" == typeof window.gambitScrollDecompositionRate && (window.gambitScrollDecompositionRate = .94), "undefined" == typeof window.gambitScrollKeyAmount && (window.gambitScrollKeyAmount = 26), "undefined" == typeof window.gambitScrollWheelAmount && (window.gambitScrollWheelAmount = 22), "undefined" == typeof window.gambitUseRequestAnimationFrame && (window.gambitUseRequestAnimationFrame = !0);
var _gambitScrollInterval = null;
"undefined" == typeof Modernizr && (window.Modernizr = function (e, n, t) {
        function o(e) {
            f.cssText = e
        }

        function i(e, n) {
            return o(v.join(e + ";") + (n || ""))
        }

        function r(e, n) {
            return typeof e === n
        }

        function l(e, n) {
            return !!~("" + e).indexOf(n)
        }

        function a(e, n, o) {
            for (var i in e) {
                var l = n[e[i]];
                if (l !== t) return o === !1 ? e[i] : r(l, "function") ? l.bind(o || n) : l
            }
            return !1
        }
        var d = "2.8.3"
            , u = {}
            , c = n.documentElement
            , w = "modernizr"
            , s = n.createElement(w)
            , f = s.style
            , m, p = {}.toString
            , v = " -webkit- -moz- -o- -ms- ".split(" ")
            , y = {}
            , b = {}
            , h = {}
            , g = []
            , S = g.slice
            , A, _ = function (e, t, o, i) {
                var r, l, a, d, u = n.createElement("div")
                    , s = n.body
                    , f = s || n.createElement("body");
                if (parseInt(o, 10))
                    for (; o--;) a = n.createElement("div"), a.id = i ? i[o] : w + (o + 1), u.appendChild(a);
                return r = ["&#173;", '<style id="s', w, '">', e, "</style>"].join(""), u.id = w, (s ? u : f).innerHTML += r, f.appendChild(u), s || (f.style.background = "", f.style.overflow = "hidden", d = c.style.overflow, c.style.overflow = "hidden", c.appendChild(f)), l = t(u, e), s ? u.parentNode.removeChild(u) : (f.parentNode.removeChild(f), c.style.overflow = d), !!l
            }
            , T = {}.hasOwnProperty
            , C;
        C = r(T, "undefined") || r(T.call, "undefined") ? function (e, n) {
            return n in e && r(e.constructor.prototype[n], "undefined")
        } : function (e, n) {
            return T.call(e, n)
        }, Function.prototype.bind || (Function.prototype.bind = function (e) {
            var n = this;
            if ("function" != typeof n) throw new TypeError;
            var t = S.call(arguments, 1)
                , o = function () {
                    if (this instanceof o) {
                        var i = function () {};
                        i.prototype = n.prototype;
                        var r = new i
                            , l = n.apply(r, t.concat(S.call(arguments)));
                        return Object(l) === l ? l : r
                    }
                    return n.apply(e, t.concat(S.call(arguments)))
                };
            return o
        }), y.touch = function () {
            var t;
            return "ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch ? t = !0 : _(["@media (", v.join("touch-enabled),("), w, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
                t = 9 === e.offsetTop
            }), t
        };
        for (var E in y) C(y, E) && (A = E.toLowerCase(), u[A] = y[E](), g.push((u[A] ? "" : "no-") + A));
        return u.addTest = function (e, n) {
            if ("object" == typeof e)
                for (var o in e) C(e, o) && u.addTest(o, e[o]);
            else {
                if (e = e.toLowerCase(), u[e] !== t) return u;
                n = "function" == typeof n ? n() : n, "undefined" != typeof enableClasses && enableClasses && (c.className += " " + (n ? "" : "no-") + e), u[e] = n
            }
            return u
        }, o(""), s = m = null, u._version = d, u._prefixes = v, u.testStyles = _, u
    }(this, this.document))
    , function () {
        for (var e = 0, n = ["ms", "moz", "webkit", "o"], t = 0; t < n.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[n[t] + "RequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (e, n) {
            return window.setTimeout(function () {
                e()
            }, 16.667)
        })
    }()
    , function () {
        function e(e) {
            40 === e.which ? (l = !0, r = window.gambitScrollKeyAmount, i = -1, o = !0, a = window) : 38 === e.which && (l = !0, r = window.gambitScrollKeyAmount, i = 1, o = !0, a = window)
        }

        function n(e) {
            if (e.preventDefault && e.preventDefault(), !l) {
                e.wheelDelta ? i = e.wheelDelta / 120 : d && e.detail ? i = -e.detail : e.detail && (i = -e.detail / 3), r = window.gambitScrollWheelAmount;
                var n = e.target;
                for (a = window;
                    "HTML" != n.tagName;) {
                    if (n.scrollHeight > n.clientHeight && "undefined" != typeof n.style.overflow && "hidden" !== n.style.overflow && "visible" !== n.style.overflow && "" !== n.style.overflow) {
                        a = n;
                        break
                    }
                    n = n.parentNode
                }
            }
            o = !0
        }

        function t() {
            o && (a == window ? a.scrollBy(a.scrollX, -i * r) : a.scrollTop = a.scrollTop - i * r, r *= window.gambitScrollDecompositionRate, 1 >= r && (r = 0, o = !1, i = 0, l = !1)), window.gambitUseRequestAnimationFrame ? (window.requestAnimationFrame(t), null != _gambitScrollInterval && (clearInterval(_gambitScrollInterval), _gambitScrollInterval = null)) : null === _gambitScrollInterval && (_gambitScrollInterval = setInterval(function () {
                t()
            }, 16.667))
        }
        if ("undefined" == typeof _GAMBIT_SMOOTH_SCROLLER_DONE) {
            var o = !1
                , i = 0
                , r = 12
                , l = !1
                , a = window
                , d = -1 !== navigator.platform.toUpperCase().indexOf("MAC");
            Modernizr.touch && window.screen.width <= 1024 || window.screen.width <= 1281 && window.devicePixelRatio > 1 || (window.addEventListener("mousewheel", n, !1), window.addEventListener("DOMMouseScroll", n, !1), window.addEventListener("keydown", e, !1), window.gambitUseRequestAnimationFrame ? window.requestAnimationFrame(t) : _gambitScrollInterval = setInterval(function () {
                t()
            }, 16.667))
        }
    }();
var _GAMBIT_SMOOTH_SCROLLER_DONE = !0;