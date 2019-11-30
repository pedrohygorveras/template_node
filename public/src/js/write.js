!(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e);
            })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Z.type(e);
        return (
            "function" !== n &&
            !Z.isWindow(e) &&
            (!(1 !== e.nodeType || !t) ||
                "array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
        );
    }
    function i(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
            });
        if (t.nodeType)
            return Z.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (se.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e);
        }
        return Z.grep(e, function (e) {
            return W.call(t, e) >= 0 !== n;
        });
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e;
    }
    function r(e) {
        var t = (de[e] = {});
        return (
            Z.each(e.match(he) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    function s() {
        X.removeEventListener("DOMContentLoaded", s, !1),
            e.removeEventListener("load", s, !1),
            Z.ready();
    }
    function a() {
        Object.defineProperty((this.cache = {}), 0, {
            get: function () {
                return {};
            }
        }),
            (this.expando = Z.expando + a.uid++);
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = "data-" + t.replace(ye, "-$1").toLowerCase()),
                    "string" == typeof (n = e.getAttribute(i)))
            ) {
                try {
                    n =
                        "true" === n ||
                        ("false" !== n &&
                            ("null" === n
                                ? null
                                : +n + "" === n
                                    ? +n
                                    : ve.test(n)
                                        ? Z.parseJSON(n)
                                        : n));
                } catch (e) { }
                me.set(e, t, n);
            } else n = void 0;
        return n;
    }
    function c() {
        return !0;
    }
    function u() {
        return !1;
    }
    function h() {
        try {
            return X.activeElement;
        } catch (e) { }
    }
    function d(e, t) {
        return Z.nodeName(e, "table") &&
            Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
    }
    function f(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function p(e) {
        var t = je.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function g(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"));
    }
    function m(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (
                ge.hasData(e) &&
                ((r = ge.access(e)), (s = ge.set(t, r)), (c = r.events))
            ) {
                delete s.handle, (s.events = {});
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) Z.event.add(t, o, c[o][n]);
            }
            me.hasData(e) &&
                ((a = me.access(e)), (l = Z.extend({}, a)), me.set(t, l));
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
        return void 0 === t || (t && Z.nodeName(e, t)) ? Z.merge([e], n) : n;
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && we.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
    }
    function A(t, n) {
        var i,
            o = Z(n.createElement(t)).appendTo(n.body),
            r =
                e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0]))
                    ? i.display
                    : Z.css(o[0], "display");
        return o.detach(), r;
    }
    function b(e) {
        var t = X,
            n = Pe[e];
        return (
            n ||
            ((n = A(e, t)),
                ("none" !== n && n) ||
                ((Qe = (
                    Qe || Z("<iframe frameborder='0' width='0' height='0'/>")
                ).appendTo(t.documentElement)),
                    (t = Qe[0].contentDocument),
                    t.write(),
                    t.close(),
                    (n = A(e, t)),
                    Qe.detach()),
                (Pe[e] = n)),
            n
        );
    }
    function C(e, t, n) {
        var i,
            o,
            r,
            s,
            a = e.style;
        return (
            (n = n || Oe(e)),
            n && (s = n.getPropertyValue(t) || n[t]),
            n &&
            ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)),
                Re.test(s) &&
                He.test(t) &&
                ((i = a.width),
                    (o = a.minWidth),
                    (r = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = s),
                    (s = n.width),
                    (a.width = i),
                    (a.minWidth = o),
                    (a.maxWidth = r))),
            void 0 !== s ? s + "" : s
        );
    }
    function w(e, t) {
        return {
            get: function () {
                return e()
                    ? void delete this.get
                    : (this.get = t).apply(this, arguments);
            }
        };
    }
    function x(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = We.length; o--;)
            if ((t = We[o] + n) in e) return t;
        return i;
    }
    function E(e, t, n) {
        var i = qe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function k(e, t, n, i, o) {
        for (
            var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            s = 0;
            r < 4;
            r += 2
        )
            "margin" === n && (s += Z.css(e, n + be[r], !0, o)),
                i
                    ? ("content" === n && (s -= Z.css(e, "padding" + be[r], !0, o)),
                        "margin" !== n &&
                        (s -= Z.css(e, "border" + be[r] + "Width", !0, o)))
                    : ((s += Z.css(e, "padding" + be[r], !0, o)),
                        "padding" !== n &&
                        (s += Z.css(e, "border" + be[r] + "Width", !0, o)));
        return s;
    }
    function S(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Oe(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (
                ((o = C(e, t, r)), (o < 0 || null == o) && (o = e.style[t]), Re.test(o))
            )
                return o;
            (i = s && (V.boxSizingReliable() || o === e.style[t])),
                (o = parseFloat(o) || 0);
        }
        return o + k(e, t, n || (s ? "border" : "content"), i, r) + "px";
    }
    function D(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)
            (i = e[s]),
                i.style &&
                ((r[s] = ge.get(i, "olddisplay")),
                    (n = i.style.display),
                    t
                        ? (r[s] || "none" !== n || (i.style.display = ""),
                            "" === i.style.display &&
                            Ce(i) &&
                            (r[s] = ge.access(i, "olddisplay", b(i.nodeName))))
                        : ((o = Ce(i)),
                            ("none" === n && o) ||
                            ge.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
        for (s = 0; s < a; s++)
            (i = e[s]),
                i.style &&
                ((t && "none" !== i.style.display && "" !== i.style.display) ||
                    (i.style.display = t ? r[s] || "" : "none"));
        return e;
    }
    function I(e, t, n, i, o) {
        return new I.prototype.init(e, t, n, i, o);
    }
    function B() {
        return (
            setTimeout(function () {
                Ye = void 0;
            }),
            (Ye = Z.now())
        );
    }
    function L(e, t) {
        var n,
            i = 0,
            o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            (n = be[i]), (o["margin" + n] = o["padding" + n] = e);
        return t && (o.opacity = o.width = e), o;
    }
    function T(e, t, n) {
        for (
            var i, o = ($e[t] || []).concat($e["*"]), r = 0, s = o.length;
            r < s;
            r++
        )
            if ((i = o[r].call(n, t, e))) return i;
    }
    function M(e, t, n) {
        var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u = this,
            h = {},
            d = e.style,
            f = e.nodeType && Ce(e),
            p = ge.get(e, "fxshow");
        n.queue ||
            ((a = Z._queueHooks(e, "fx")),
                null == a.unqueued &&
                ((a.unqueued = 0),
                    (l = a.empty.fire),
                    (a.empty.fire = function () {
                        a.unqueued || l();
                    })),
                a.unqueued++ ,
                u.always(function () {
                    u.always(function () {
                        a.unqueued-- , Z.queue(e, "fx").length || a.empty.fire();
                    });
                })),
            1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                (c = Z.css(e, "display")),
                "inline" ===
                ("none" === c ? ge.get(e, "olddisplay") || b(e.nodeName) : c) &&
                "none" === Z.css(e, "float") &&
                (d.display = "inline-block")),
            n.overflow &&
            ((d.overflow = "hidden"),
                u.always(function () {
                    (d.overflow = n.overflow[0]),
                        (d.overflowX = n.overflow[1]),
                        (d.overflowY = n.overflow[2]);
                }));
        for (i in t)
            if (((o = t[i]), _e.exec(o))) {
                if (
                    (delete t[i], (r = r || "toggle" === o), o === (f ? "hide" : "show"))
                ) {
                    if ("show" !== o || !p || void 0 === p[i]) continue;
                    f = !0;
                }
                h[i] = (p && p[i]) || Z.style(e, i);
            } else c = void 0;
        if (Z.isEmptyObject(h))
            "inline" === ("none" === c ? b(e.nodeName) : c) && (d.display = c);
        else {
            p ? "hidden" in p && (f = p.hidden) : (p = ge.access(e, "fxshow", {})),
                r && (p.hidden = !f),
                f
                    ? Z(e).show()
                    : u.done(function () {
                        Z(e).hide();
                    }),
                u.done(function () {
                    var t;
                    ge.remove(e, "fxshow");
                    for (t in h) Z.style(e, t, h[t]);
                });
            for (i in h)
                (s = T(f ? p[i] : 0, i, u)),
                    i in p ||
                    ((p[i] = s.start),
                        f &&
                        ((s.end = s.start),
                            (s.start = "width" === i || "height" === i ? 1 : 0)));
        }
    }
    function j(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (
                ((i = Z.camelCase(n)),
                    (o = t[i]),
                    (r = e[n]),
                    Z.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                    n !== i && ((e[i] = r), delete e[n]),
                    (s = Z.cssHooks[i]) && "expand" in s)
            ) {
                (r = s.expand(r)), delete e[i];
                for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
            } else t[i] = o;
    }
    function F(e, t, n) {
        var i,
            o,
            r = 0,
            s = Ze.length,
            a = Z.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (
                    var t = Ye || B(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = n / c.duration || 0,
                    r = 1 - i,
                    s = 0,
                    l = c.tweens.length;
                    s < l;
                    s++
                )
                    c.tweens[s].run(r);
                return (
                    a.notifyWith(e, [c, r, n]),
                    r < 1 && l ? n : (a.resolveWith(e, [c]), !1)
                );
            },
            c = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ye || B(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = Z.Tween(
                        e,
                        c.opts,
                        t,
                        n,
                        c.opts.specialEasing[t] || c.opts.easing
                    );
                    return c.tweens.push(i), i;
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this;
                }
            }),
            u = c.props;
        for (j(u, c.opts.specialEasing); r < s; r++)
            if ((i = Ze[r].call(c, e, u, c.opts))) return i;
        return (
            Z.map(u, T, c),
            Z.isFunction(c.opts.start) && c.opts.start.call(e, c),
            Z.fx.timer(Z.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always)
        );
    }
    function N(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
                o = 0,
                r = t.toLowerCase().match(he) || [];
            if (Z.isFunction(n))
                for (; (i = r[o++]);)
                    "+" === i[0]
                        ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                        : (e[i] = e[i] || []).push(n);
        };
    }
    function Q(e, t, n, i) {
        function o(a) {
            var l;
            return (
                (r[a] = !0),
                Z.each(e[a] || [], function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || r[c]
                        ? s
                            ? !(l = c)
                            : void 0
                        : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
            );
        }
        var r = {},
            s = e === gt;
        return o(t.dataTypes[0]) || (!r["*"] && o("*"));
    }
    function P(e, t) {
        var n,
            i,
            o = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e;
    }
    function H(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break;
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break;
                }
                s || (s = o);
            }
            r = r || s;
        }
        if (r) return r !== l[0] && l.unshift(r), n[r];
    }
    function R(e, t, n, i) {
        var o,
            r,
            s,
            a,
            l,
            c = {},
            u = e.dataTypes.slice();
        if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (
                (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (l = r),
                    (r = u.shift()))
            )
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                            if (
                                ((a = o.split(" ")),
                                    a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]]))
                            ) {
                                !0 === s
                                    ? (s = c[o])
                                    : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                                break;
                            }
                    if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else
                            try {
                                t = s(t);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                };
                            }
                }
        return { state: "success", data: t };
    }
    function O(e, t, n, i) {
        var o;
        if (Z.isArray(t))
            Z.each(t, function (t, o) {
                n || bt.test(e)
                    ? i(e, o)
                    : O(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i);
            });
        else if (n || "object" !== Z.type(t)) i(e, t);
        else for (o in t) O(e + "[" + o + "]", t[o], n, i);
    }
    function z(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var q = [],
        U = q.slice,
        G = q.concat,
        K = q.push,
        W = q.indexOf,
        Y = {},
        J = Y.toString,
        _ = Y.hasOwnProperty,
        V = {},
        X = e.document,
        Z = function (e, t) {
            return new Z.fn.init(e, t);
        },
        $ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        te = /-([\da-z])/gi,
        ne = function (e, t) {
            return t.toUpperCase();
        };
    (Z.fn = Z.prototype = {
        jquery: "2.1.4",
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function () {
            return U.call(this);
        },
        get: function (e) {
            return null != e
                ? e < 0
                    ? this[e + this.length]
                    : this[e]
                : U.call(this);
        },
        pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
            return Z.each(this, e, t);
        },
        map: function (e) {
            return this.pushStack(
                Z.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(U.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: K,
        sort: q.sort,
        splice: q.splice
    }),
        (Z.extend = Z.fn.extend = function () {
            var e,
                t,
                n,
                i,
                o,
                r,
                s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for (
                "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || Z.isFunction(s) || (s = {}),
                a === l && ((s = this), a--);
                a < l;
                a++
            )
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = s[t]),
                            (i = e[t]),
                            s !== i &&
                            (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i)))
                                ? (o
                                    ? ((o = !1), (r = n && Z.isArray(n) ? n : []))
                                    : (r = n && Z.isPlainObject(n) ? n : {}),
                                    (s[t] = Z.extend(c, r, i)))
                                : void 0 !== i && (s[t] = i));
            return s;
        }),
        Z.extend({
            expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === Z.type(e);
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window;
            },
            isNumeric: function (e) {
                return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0;
            },
            isPlainObject: function (e) {
                return (
                    "object" === Z.type(e) &&
                    !e.nodeType &&
                    !Z.isWindow(e) &&
                    !(e.constructor && !_.call(e.constructor.prototype, "isPrototypeOf"))
                );
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                        ? Y[J.call(e)] || "object"
                        : typeof e;
            },
            globalEval: function (e) {
                var t,
                    n = eval;
                (e = Z.trim(e)) &&
                    (1 === e.indexOf("use strict")
                        ? ((t = X.createElement("script")),
                            (t.text = e),
                            X.head.appendChild(t).parentNode.removeChild(t))
                        : n(e));
            },
            camelCase: function (e) {
                return e.replace(ee, "ms-").replace(te, ne);
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t, i) {
                var o = 0,
                    r = e.length,
                    s = n(e);
                if (i) {
                    if (s) for (; o < r && !1 !== t.apply(e[o], i); o++);
                    else for (o in e) if (!1 === t.apply(e[o], i)) break;
                } else if (s) for (; o < r && !1 !== t.call(e[o], o, e[o]); o++);
                else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace($, "");
            },
            makeArray: function (e, t) {
                var i = t || [];
                return (
                    null != e &&
                    (n(Object(e))
                        ? Z.merge(i, "string" == typeof e ? [e] : e)
                        : K.call(i, e)),
                    i
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : W.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return (e.length = o), e;
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                    !t(e[o], o) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, i) {
                var o,
                    r = 0,
                    s = e.length,
                    a = n(e),
                    l = [];
                if (a) for (; r < s; r++) null != (o = t(e[r], r, i)) && l.push(o);
                else for (r in e) null != (o = t(e[r], r, i)) && l.push(o);
                return G.apply([], l);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, o;
                if (
                    ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                        Z.isFunction(e))
                )
                    return (
                        (i = U.call(arguments, 2)),
                        (o = function () {
                            return e.apply(t || this, i.concat(U.call(arguments)));
                        }),
                        (o.guid = e.guid = e.guid || Z.guid++),
                        o
                    );
            },
            now: Date.now,
            support: V
        }),
        Z.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
            ),
            function (e, t) {
                Y["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var ie = (function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, c, h, d, f, p, g;
            if (
                ((t ? t.ownerDocument || t : H) !== L && B(t),
                    (t = t || L),
                    (n = n || []),
                    (a = t.nodeType),
                    "string" != typeof e || !e || (1 !== a && 9 !== a && 11 !== a))
            )
                return n;
            if (!i && M) {
                if (11 !== a && (o = me.exec(e)))
                    if ((s = o[1])) {
                        if (9 === a) {
                            if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n;
                        } else if (
                            t.ownerDocument &&
                            (r = t.ownerDocument.getElementById(s)) &&
                            Q(t, r) &&
                            r.id === s
                        )
                            return n.push(r), n;
                    } else {
                        if (o[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && A.getElementsByClassName)
                            return V.apply(n, t.getElementsByClassName(s)), n;
                    }
                if (A.qsa && (!j || !j.test(e))) {
                    if (
                        ((f = d = P),
                            (p = t),
                            (g = 1 !== a && e),
                            1 === a && "object" !== t.nodeName.toLowerCase())
                    ) {
                        for (
                            h = x(e),
                            (d = t.getAttribute("id"))
                                ? (f = d.replace(ye, "\\$&"))
                                : t.setAttribute("id", f),
                            f = "[id='" + f + "'] ",
                            c = h.length;
                            c--;

                        )
                            h[c] = f + u(h[c]);
                        (p = (ve.test(e) && l(t.parentNode)) || t), (g = h.join(","));
                    }
                    if (g)
                        try {
                            return V.apply(n, p.querySelectorAll(g)), n;
                        } catch (e) {
                        } finally {
                            d || t.removeAttribute("id");
                        }
                }
            }
            return k(e.replace(se, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return (
                    t.push(n + " ") > b.cacheLength && delete e[t.shift()],
                    (e[n + " "] = i)
                );
            }
            var t = [];
            return e;
        }
        function i(e) {
            return (e[P] = !0), e;
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) b.attrHandle[n[i]] = t;
        }
        function s(e, t) {
            var n = t && e,
                i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    (~t.sourceIndex || K) - (~e.sourceIndex || K);
            if (i) return i;
            if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return i(function (t) {
                return (
                    (t = +t),
                    i(function (n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;)
                            n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                    })
                );
            });
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function c() { }
        function u(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function h(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = O++;
            return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]);) if (1 === t.nodeType || o) return e(t, n, r);
                }
                : function (t, n, s) {
                    var a,
                        l,
                        c = [R, r];
                    if (s) {
                        for (; (t = t[i]);)
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                    } else
                        for (; (t = t[i]);)
                            if (1 === t.nodeType || o) {
                                if (
                                    ((l = t[P] || (t[P] = {})),
                                        (a = l[i]) && a[0] === R && a[1] === r)
                                )
                                    return (c[2] = a[2]);
                                if (((l[i] = c), (c[2] = e(t, n, s)))) return !0;
                            }
                };
        }
        function d(e) {
            return e.length > 1
                ? function (t, n, i) {
                    for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                    return !0;
                }
                : e[0];
        }
        function f(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i;
        }
        function p(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
            return s;
        }
        function g(e, t, n, o, r, s) {
            return (
                o && !o[P] && (o = g(o)),
                r && !r[P] && (r = g(r, s)),
                i(function (i, s, a, l) {
                    var c,
                        u,
                        h,
                        d = [],
                        g = [],
                        m = s.length,
                        v = i || f(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || (!i && t) ? v : p(v, d, e, a, l),
                        A = n ? (r || (i ? e : m || o) ? [] : s) : y;
                    if ((n && n(y, A, a, l), o))
                        for (c = p(A, g), o(c, [], a, l), u = c.length; u--;)
                            (h = c[u]) && (A[g[u]] = !(y[g[u]] = h));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = A.length; u--;)
                                    (h = A[u]) && c.push((y[u] = h));
                                r(null, (A = []), c, l);
                            }
                            for (u = A.length; u--;)
                                (h = A[u]) &&
                                    (c = r ? Z(i, h) : d[u]) > -1 &&
                                    (i[c] = !(s[c] = h));
                        }
                    } else (A = p(A === s ? A.splice(m, A.length) : A)), r ? r(null, s, A, l) : V.apply(s, A);
                })
            );
        }
        function m(e) {
            for (
                var t,
                n,
                i,
                o = e.length,
                r = b.relative[e[0].type],
                s = r || b.relative[" "],
                a = r ? 1 : 0,
                l = h(
                    function (e) {
                        return e === t;
                    },
                    s,
                    !0
                ),
                c = h(
                    function (e) {
                        return Z(t, e) > -1;
                    },
                    s,
                    !0
                ),
                f = [
                    function (e, n, i) {
                        var o =
                            (!r && (i || n !== S)) ||
                            ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return (t = null), o;
                    }
                ];
                a < o;
                a++
            )
                if ((n = b.relative[e[a].type])) f = [h(d(f), n)];
                else {
                    if (((n = b.filter[e[a].type].apply(null, e[a].matches)), n[P])) {
                        for (i = ++a; i < o && !b.relative[e[i].type]; i++);
                        return g(
                            a > 1 && d(f),
                            a > 1 &&
                            u(
                                e
                                    .slice(0, a - 1)
                                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                            ).replace(se, "$1"),
                            n,
                            a < i && m(e.slice(a, i)),
                            i < o && m((e = e.slice(i))),
                            i < o && u(e)
                        );
                    }
                    f.push(n);
                }
            return d(f);
        }
        function v(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function (i, s, a, l, c) {
                    var u,
                        h,
                        d,
                        f = 0,
                        g = "0",
                        m = i && [],
                        v = [],
                        y = S,
                        A = i || (r && b.find.TAG("*", c)),
                        C = (R += null == y ? 1 : Math.random() || 0.1),
                        w = A.length;
                    for (c && (S = s !== L && s); g !== w && null != (u = A[g]); g++) {
                        if (r && u) {
                            for (h = 0; (d = e[h++]);)
                                if (d(u, s, a)) {
                                    l.push(u);
                                    break;
                                }
                            c && (R = C);
                        }
                        o && ((u = !d && u) && f-- , i && m.push(u));
                    }
                    if (((f += g), o && g !== f)) {
                        for (h = 0; (d = n[h++]);) d(m, v, s, a);
                        if (i) {
                            if (f > 0) for (; g--;) m[g] || v[g] || (v[g] = J.call(l));
                            v = p(v);
                        }
                        V.apply(l, v),
                            c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                    }
                    return c && ((R = C), (S = y)), m;
                };
            return o ? i(s) : s;
        }
        var y,
            A,
            b,
            C,
            w,
            x,
            E,
            k,
            S,
            D,
            I,
            B,
            L,
            T,
            M,
            j,
            F,
            N,
            Q,
            P = "sizzle" + 1 * new Date(),
            H = e.document,
            R = 0,
            O = 0,
            z = n(),
            q = n(),
            U = n(),
            G = function (e, t) {
                return e === t && (I = !0), 0;
            },
            K = 1 << 31,
            W = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            _ = Y.push,
            V = Y.push,
            X = Y.slice,
            Z = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            $ =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = te.replace("w", "w#"),
            ie =
                "\\[" +
                ee +
                "*(" +
                te +
                ")(?:" +
                ee +
                "*([*^$|!~]?=)" +
                ee +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                ne +
                "))|)" +
                ee +
                "*\\]",
            oe =
                ":(" +
                te +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                ie +
                ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            se = new RegExp(
                "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
                "g"
            ),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(oe),
            he = new RegExp("^" + ne + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    ee +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    ee +
                    "*(?:([+-]|)" +
                    ee +
                    "*(\\d+)|))" +
                    ee +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + $ + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    ee +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    ee +
                    "*((?:-\\d)?\\d*)" +
                    ee +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                )
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ye = /'|\\/g,
            Ae = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            be = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n
                    ? t
                    : i < 0
                        ? String.fromCharCode(i + 65536)
                        : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            Ce = function () {
                B();
            };
        try {
            V.apply((Y = X.call(H.childNodes)), H.childNodes),
                Y[H.childNodes.length].nodeType;
        } catch (e) {
            V = {
                apply: Y.length
                    ? function (e, t) {
                        _.apply(e, X.call(t));
                    }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]););
                        e.length = n - 1;
                    }
            };
        }
        (A = t.support = {}),
            (w = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (B = t.setDocument = function (e) {
                var t,
                    n,
                    i = e ? e.ownerDocument || e : H;
                return i !== L && 9 === i.nodeType && i.documentElement
                    ? ((L = i),
                        (T = i.documentElement),
                        (n = i.defaultView),
                        n &&
                        n !== n.top &&
                        (n.addEventListener
                            ? n.addEventListener("unload", Ce, !1)
                            : n.attachEvent && n.attachEvent("onunload", Ce)),
                        (M = !w(i)),
                        (A.attributes = o(function (e) {
                            return (e.className = "i"), !e.getAttribute("className");
                        })),
                        (A.getElementsByTagName = o(function (e) {
                            return (
                                e.appendChild(i.createComment("")),
                                !e.getElementsByTagName("*").length
                            );
                        })),
                        (A.getElementsByClassName = ge.test(i.getElementsByClassName)),
                        (A.getById = o(function (e) {
                            return (
                                (T.appendChild(e).id = P),
                                !i.getElementsByName || !i.getElementsByName(P).length
                            );
                        })),
                        A.getById
                            ? ((b.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && M) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : [];
                                }
                            }),
                                (b.filter.ID = function (e) {
                                    var t = e.replace(Ae, be);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }))
                            : (delete b.find.ID,
                                (b.filter.ID = function (e) {
                                    var t = e.replace(Ae, be);
                                    return function (e) {
                                        var n =
                                            void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                })),
                        (b.find.TAG = A.getElementsByTagName
                            ? function (e, t) {
                                return void 0 !== t.getElementsByTagName
                                    ? t.getElementsByTagName(e)
                                    : A.qsa
                                        ? t.querySelectorAll(e)
                                        : void 0;
                            }
                            : function (e, t) {
                                var n,
                                    i = [],
                                    o = 0,
                                    r = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = r[o++]);) 1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return r;
                            }),
                        (b.find.CLASS =
                            A.getElementsByClassName &&
                            function (e, t) {
                                if (M) return t.getElementsByClassName(e);
                            }),
                        (F = []),
                        (j = []),
                        (A.qsa = ge.test(i.querySelectorAll)) &&
                        (o(function (e) {
                            (T.appendChild(e).innerHTML =
                                "<a id='" +
                                P +
                                "'></a><select id='" +
                                P +
                                "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length &&
                                j.push("[*^$]=" + ee + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length ||
                                j.push("\\[" + ee + "*(?:value|" + $ + ")"),
                                e.querySelectorAll("[id~=" + P + "-]").length || j.push("~="),
                                e.querySelectorAll(":checked").length || j.push(":checked"),
                                e.querySelectorAll("a#" + P + "+*").length ||
                                j.push(".#.+[+~]");
                        }),
                            o(function (e) {
                                var t = i.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length &&
                                    j.push("name" + ee + "*[*^$|!~]?="),
                                    e.querySelectorAll(":enabled").length ||
                                    j.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    j.push(",.*:");
                            })),
                        (A.matchesSelector = ge.test(
                            (N =
                                T.matches ||
                                T.webkitMatchesSelector ||
                                T.mozMatchesSelector ||
                                T.oMatchesSelector ||
                                T.msMatchesSelector)
                        )) &&
                        o(function (e) {
                            (A.disconnectedMatch = N.call(e, "div")),
                                N.call(e, "[s!='']:x"),
                                F.push("!=", oe);
                        }),
                        (j = j.length && new RegExp(j.join("|"))),
                        (F = F.length && new RegExp(F.join("|"))),
                        (t = ge.test(T.compareDocumentPosition)),
                        (Q =
                            t || ge.test(T.contains)
                                ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        i = t && t.parentNode;
                                    return (
                                        e === i ||
                                        !(
                                            !i ||
                                            1 !== i.nodeType ||
                                            !(n.contains
                                                ? n.contains(i)
                                                : e.compareDocumentPosition &&
                                                16 & e.compareDocumentPosition(i))
                                        )
                                    );
                                }
                                : function (e, t) {
                                    if (t) for (; (t = t.parentNode);) if (t === e) return !0;
                                    return !1;
                                }),
                        (G = t
                            ? function (e, t) {
                                if (e === t) return (I = !0), 0;
                                var n =
                                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    n ||
                                    ((n =
                                        (e.ownerDocument || e) === (t.ownerDocument || t)
                                            ? e.compareDocumentPosition(t)
                                            : 1),
                                        1 & n ||
                                            (!A.sortDetached && t.compareDocumentPosition(e) === n)
                                            ? e === i || (e.ownerDocument === H && Q(H, e))
                                                ? -1
                                                : t === i || (t.ownerDocument === H && Q(H, t))
                                                    ? 1
                                                    : D
                                                        ? Z(D, e) - Z(D, t)
                                                        : 0
                                            : 4 & n
                                                ? -1
                                                : 1)
                                );
                            }
                            : function (e, t) {
                                if (e === t) return (I = !0), 0;
                                var n,
                                    o = 0,
                                    r = e.parentNode,
                                    a = t.parentNode,
                                    l = [e],
                                    c = [t];
                                if (!r || !a)
                                    return e === i
                                        ? -1
                                        : t === i
                                            ? 1
                                            : r
                                                ? -1
                                                : a
                                                    ? 1
                                                    : D
                                                        ? Z(D, e) - Z(D, t)
                                                        : 0;
                                if (r === a) return s(e, t);
                                for (n = e; (n = n.parentNode);) l.unshift(n);
                                for (n = t; (n = n.parentNode);) c.unshift(n);
                                for (; l[o] === c[o];) o++;
                                return o
                                    ? s(l[o], c[o])
                                    : l[o] === H
                                        ? -1
                                        : c[o] === H
                                            ? 1
                                            : 0;
                            }),
                        i)
                    : L;
            }),
            (t.matches = function (e, n) {
                return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
                if (
                    ((e.ownerDocument || e) !== L && B(e),
                        (n = n.replace(ce, "='$1']")),
                        A.matchesSelector && M && (!F || !F.test(n)) && (!j || !j.test(n)))
                )
                    try {
                        var i = N.call(e, n);
                        if (
                            i ||
                            A.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return i;
                    } catch (e) { }
                return t(n, L, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== L && B(e), Q(e, t);
            }),
            (t.attr = function (e, t) {
                (e.ownerDocument || e) !== L && B(e);
                var n = b.attrHandle[t.toLowerCase()],
                    i = n && W.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                return void 0 !== i
                    ? i
                    : A.attributes || !M
                        ? e.getAttribute(t)
                        : (i = e.getAttributeNode(t)) && i.specified
                            ? i.value
                            : null;
            }),
            (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
                var t,
                    n = [],
                    i = 0,
                    o = 0;
                if (
                    ((I = !A.detectDuplicates),
                        (D = !A.sortStable && e.slice(0)),
                        e.sort(G),
                        I)
                ) {
                    for (; (t = e[o++]);) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1);
                }
                return (D = null), e;
            }),
            (C = t.getText = function (e) {
                var t,
                    n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]);) n += C(t);
                return n;
            }),
            (b = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" }
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(Ae, be)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(Ae, be)),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || t.error(e[0]),
                                    (e[4] = +(e[4]
                                        ? e[5] + (e[6] || 1)
                                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && t.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return de.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                ? (e[2] = e[4] || e[5] || "")
                                : n &&
                                ue.test(n) &&
                                (t = x(n, !0)) &&
                                (t = n.indexOf(")", n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                e.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Ae, be).toLowerCase();
                        return "*" === e
                            ? function () {
                                return !0;
                            }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                    },
                    CLASS: function (e) {
                        var t = z[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                                z(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className && e.className) ||
                                        (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                                        ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (e, n, i) {
                        return function (o) {
                            var r = t.attr(o, e);
                            return null == r
                                ? "!=" === n
                                : !n ||
                                ((r += ""),
                                    "=" === n
                                        ? r === i
                                        : "!=" === n
                                            ? r !== i
                                            : "^=" === n
                                                ? i && 0 === r.indexOf(i)
                                                : "*=" === n
                                                    ? i && r.indexOf(i) > -1
                                                    : "$=" === n
                                                        ? i && r.slice(-i.length) === i
                                                        : "~=" === n
                                                            ? (" " + r.replace(re, " ") + " ").indexOf(i) > -1
                                                            : "|=" === n &&
                                                            (r === i || r.slice(0, i.length + 1) === i + "-"));
                        };
                    },
                    CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o
                            ? function (e) {
                                return !!e.parentNode;
                            }
                            : function (t, n, l) {
                                var c,
                                    u,
                                    h,
                                    d,
                                    f,
                                    p,
                                    g = r !== s ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = a && t.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (h = t; (h = h[g]);)
                                                if (
                                                    a
                                                        ? h.nodeName.toLowerCase() === v
                                                        : 1 === h.nodeType
                                                )
                                                    return !1;
                                            p = g = "only" === e && !p && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                                        for (
                                            u = m[P] || (m[P] = {}),
                                            c = u[e] || [],
                                            f = c[0] === R && c[1],
                                            d = c[0] === R && c[2],
                                            h = f && m.childNodes[f];
                                            (h = (++f && h && h[g]) || (d = f = 0) || p.pop());

                                        )
                                            if (1 === h.nodeType && ++d && h === t) {
                                                u[e] = [R, f, d];
                                                break;
                                            }
                                    } else if (
                                        y &&
                                        (c = (t[P] || (t[P] = {}))[e]) &&
                                        c[0] === R
                                    )
                                        d = c[1];
                                    else
                                        for (
                                            ;
                                            (h = (++f && h && h[g]) || (d = f = 0) || p.pop()) &&
                                            ((a
                                                ? h.nodeName.toLowerCase() !== v
                                                : 1 !== h.nodeType) ||
                                                !++d ||
                                                (y && ((h[P] || (h[P] = {}))[e] = [R, d]), h !== t));

                                        );
                                    return (d -= o) === i || (d % i == 0 && d / i >= 0);
                                }
                            };
                    },
                    PSEUDO: function (e, n) {
                        var o,
                            r =
                                b.pseudos[e] ||
                                b.setFilters[e.toLowerCase()] ||
                                t.error("unsupported pseudo: " + e);
                        return r[P]
                            ? r(n)
                            : r.length > 1
                                ? ((o = [e, e, "", n]),
                                    b.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? i(function (e, t) {
                                            for (var i, o = r(e, n), s = o.length; s--;)
                                                (i = Z(e, o[s])), (e[i] = !(t[i] = o[s]));
                                        })
                                        : function (e) {
                                            return r(e, 0, o);
                                        })
                                : r;
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            o = E(e.replace(se, "$1"));
                        return o[P]
                            ? i(function (e, t, n, i) {
                                for (var r, s = o(e, null, i, []), a = e.length; a--;)
                                    (r = s[a]) && (e[a] = !(t[a] = r));
                            })
                            : function (e, i, r) {
                                return (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop();
                            };
                    }),
                    has: i(function (e) {
                        return function (n) {
                            return t(e, n).length > 0;
                        };
                    }),
                    contains: i(function (e) {
                        return (
                            (e = e.replace(Ae, be)),
                            function (t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: i(function (e) {
                        return (
                            he.test(e || "") || t.error("unsupported lang: " + e),
                            (e = e.replace(Ae, be).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if (
                                        (n = M
                                            ? t.lang
                                            : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    )
                                        return (
                                            (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        );
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === T;
                    },
                    focus: function (e) {
                        return (
                            e === L.activeElement &&
                            (!L.hasFocus || L.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: function (e) {
                        return !1 === e.disabled;
                    },
                    disabled: function (e) {
                        return !0 === e.disabled;
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e);
                    },
                    header: function (e) {
                        return pe.test(e.nodeName);
                    },
                    input: function (e) {
                        return fe.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: a(function () {
                        return [0];
                    }),
                    last: a(function (e, t) {
                        return [t - 1];
                    }),
                    eq: a(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: a(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: a(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: a(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e;
                    }),
                    gt: a(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e;
                    })
                }
            }),
            (b.pseudos.nth = b.pseudos.eq);
        for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            b.pseudos[y] = (function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            })(y);
        for (y in { submit: !0, reset: !0 })
            b.pseudos[y] = (function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                };
            })(y);
        return (
            (c.prototype = b.filters = b.pseudos),
            (b.setFilters = new c()),
            (x = t.tokenize = function (e, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = q[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = e, l = [], c = b.preFilter; a;) {
                    (i && !(o = ae.exec(a))) ||
                        (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                        (i = !1),
                        (o = le.exec(a)) &&
                        ((i = o.shift()),
                            r.push({ value: i, type: o[0].replace(se, " ") }),
                            (a = a.slice(i.length)));
                    for (s in b.filter)
                        !(o = de[s].exec(a)) ||
                            (c[s] && !(o = c[s](o))) ||
                            ((i = o.shift()),
                                r.push({ value: i, type: s, matches: o }),
                                (a = a.slice(i.length)));
                    if (!i) break;
                }
                return n ? a.length : a ? t.error(e) : q(e, l).slice(0);
            }),
            (E = t.compile = function (e, t) {
                var n,
                    i = [],
                    o = [],
                    r = U[e + " "];
                if (!r) {
                    for (t || (t = x(e)), n = t.length; n--;)
                        (r = m(t[n])), r[P] ? i.push(r) : o.push(r);
                    (r = U(e, v(o, i))), (r.selector = e);
                }
                return r;
            }),
            (k = t.select = function (e, t, n, i) {
                var o,
                    r,
                    s,
                    a,
                    c,
                    h = "function" == typeof e && e,
                    d = !i && x((e = h.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if (
                        ((r = d[0] = d[0].slice(0)),
                            r.length > 2 &&
                            "ID" === (s = r[0]).type &&
                            A.getById &&
                            9 === t.nodeType &&
                            M &&
                            b.relative[r[1].type])
                    ) {
                        if (!(t = (b.find.ID(s.matches[0].replace(Ae, be), t) || [])[0]))
                            return n;
                        h && (t = t.parentNode), (e = e.slice(r.shift().value.length));
                    }
                    for (
                        o = de.needsContext.test(e) ? 0 : r.length;
                        o-- && ((s = r[o]), !b.relative[(a = s.type)]);

                    )
                        if (
                            (c = b.find[a]) &&
                            (i = c(
                                s.matches[0].replace(Ae, be),
                                (ve.test(r[0].type) && l(t.parentNode)) || t
                            ))
                        ) {
                            if ((r.splice(o, 1), !(e = i.length && u(r))))
                                return V.apply(n, i), n;
                            break;
                        }
                }
                return (
                    (h || E(e, d))(i, t, !M, n, (ve.test(e) && l(t.parentNode)) || t), n
                );
            }),
            (A.sortStable =
                P.split("")
                    .sort(G)
                    .join("") === P),
            (A.detectDuplicates = !!I),
            B(),
            (A.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"));
            })),
            o(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
            r("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (A.attributes &&
                o(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
            r("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }),
            o(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            r($, function (e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t]
                        ? t.toLowerCase()
                        : (i = e.getAttributeNode(t)) && i.specified
                            ? i.value
                            : null;
            }),
            t
        );
    })(e);
    (Z.find = ie),
        (Z.expr = ie.selectors),
        (Z.expr[":"] = Z.expr.pseudos),
        (Z.unique = ie.uniqueSort),
        (Z.text = ie.getText),
        (Z.isXMLDoc = ie.isXML),
        (Z.contains = ie.contains);
    var oe = Z.expr.match.needsContext,
        re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    (Z.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? Z.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : Z.find.matches(
                    e,
                    Z.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                )
        );
    }),
        Z.fn.extend({
            find: function (e) {
                var t,
                    n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        Z(e).filter(function () {
                            for (t = 0; t < n; t++) if (Z.contains(o[t], this)) return !0;
                        })
                    );
                for (t = 0; t < n; t++) Z.find(e, o[t], i);
                return (
                    (i = this.pushStack(n > 1 ? Z.unique(i) : i)),
                    (i.selector = this.selector ? this.selector + " " + e : e),
                    i
                );
            },
            filter: function (e) {
                return this.pushStack(i(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(i(this, e || [], !0));
            },
            is: function (e) {
                return !!i(
                    this,
                    "string" == typeof e && oe.test(e) ? Z(e) : e || [],
                    !1
                ).length;
            }
        });
    var ae,
        le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((Z.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (
                !(n =
                    "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                        ? [null, e, null]
                        : le.exec(e)) ||
                (!n[1] && t)
            )
                return !t || t.jquery ? (t || ae).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (
                    ((t = t instanceof Z ? t[0] : t),
                        Z.merge(
                            this,
                            Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : X, !0)
                        ),
                        re.test(n[1]) && Z.isPlainObject(t))
                )
                    for (n in t)
                        Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
            }
            return (
                (i = X.getElementById(n[2])),
                i && i.parentNode && ((this.length = 1), (this[0] = i)),
                (this.context = X),
                (this.selector = e),
                this
            );
        }
        return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : Z.isFunction(e)
                ? void 0 !== ae.ready
                    ? ae.ready(e)
                    : e(Z)
                : (void 0 !== e.selector &&
                    ((this.selector = e.selector), (this.context = e.context)),
                    Z.makeArray(e, this));
    }).prototype = Z.fn),
        (ae = Z(X));
    var ce = /^(?:parents|prev(?:Until|All))/,
        ue = { children: !0, contents: !0, next: !0, prev: !0 };
    Z.extend({
        dir: function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && Z(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    }),
        Z.fn.extend({
            has: function (e) {
                var t = Z(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++) if (Z.contains(this, t[e])) return !0;
                });
            },
            closest: function (e, t) {
                for (
                    var n,
                    i = 0,
                    o = this.length,
                    r = [],
                    s =
                        oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0;
                    i < o;
                    i++
                )
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (s
                                ? s.index(n) > -1
                                : 1 === n.nodeType && Z.find.matchesSelector(n, e))
                        ) {
                            r.push(n);
                            break;
                        }
                return this.pushStack(r.length > 1 ? Z.unique(r) : r);
            },
            index: function (e) {
                return e
                    ? "string" == typeof e
                        ? W.call(Z(e), this[0])
                        : W.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                        ? this.first().prevAll().length
                        : -1;
            },
            add: function (e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))));
            },
            addBack: function (e) {
                return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                );
            }
        }),
        Z.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return Z.dir(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return Z.dir(e, "parentNode", n);
                },
                next: function (e) {
                    return o(e, "nextSibling");
                },
                prev: function (e) {
                    return o(e, "previousSibling");
                },
                nextAll: function (e) {
                    return Z.dir(e, "nextSibling");
                },
                prevAll: function (e) {
                    return Z.dir(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return Z.dir(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return Z.dir(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return Z.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Z.sibling(e.firstChild);
                },
                contents: function (e) {
                    return e.contentDocument || Z.merge([], e.childNodes);
                }
            },
            function (e, t) {
                Z.fn[e] = function (n, i) {
                    var o = Z.map(this, t, n);
                    return (
                        "Until" !== e.slice(-5) && (i = n),
                        i && "string" == typeof i && (o = Z.filter(i, o)),
                        this.length > 1 &&
                        (ue[e] || Z.unique(o), ce.test(e) && o.reverse()),
                        this.pushStack(o)
                    );
                };
            }
        );
    var he = /\S+/g,
        de = {};
    (Z.Callbacks = function (e) {
        e = "string" == typeof e ? de[e] || r(e) : Z.extend({}, e);
        var t,
            n,
            i,
            o,
            s,
            a,
            l = [],
            c = !e.once && [],
            u = function (r) {
                for (
                    t = e.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0;
                    l && a < s;
                    a++
                )
                    if (!1 === l[a].apply(r[0], r[1]) && e.stopOnFalse) {
                        t = !1;
                        break;
                    }
                (i = !1),
                    l && (c ? c.length && u(c.shift()) : t ? (l = []) : h.disable());
            },
            h = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        !(function t(n) {
                            Z.each(n, function (n, i) {
                                var o = Z.type(i);
                                "function" === o
                                    ? (e.unique && h.has(i)) || l.push(i)
                                    : i && i.length && "string" !== o && t(i);
                            });
                        })(arguments),
                            i ? (s = l.length) : t && ((o = n), u(t));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        l &&
                        Z.each(arguments, function (e, t) {
                            for (var n; (n = Z.inArray(t, l, n)) > -1;)
                                l.splice(n, 1), i && (n <= s && s-- , n <= a && a--);
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? Z.inArray(e, l) > -1 : !(!l || !l.length);
                },
                empty: function () {
                    return (l = []), (s = 0), this;
                },
                disable: function () {
                    return (l = c = t = void 0), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (c = void 0), t || h.disable(), this;
                },
                locked: function () {
                    return !c;
                },
                fireWith: function (e, t) {
                    return (
                        !l ||
                        (n && !c) ||
                        ((t = t || []),
                            (t = [e, t.slice ? t.slice() : t]),
                            i ? c.push(t) : u(t)),
                        this
                    );
                },
                fire: function () {
                    return h.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!n;
                }
            };
        return h;
    }),
        Z.extend({
            Deferred: function (e) {
                var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                    n = "pending",
                    i = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return Z.Deferred(function (n) {
                                Z.each(t, function (t, r) {
                                    var s = Z.isFunction(e[t]) && e[t];
                                    o[r[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        e && Z.isFunction(e.promise)
                                            ? e
                                                .promise()
                                                .done(n.resolve)
                                                .fail(n.reject)
                                                .progress(n.notify)
                                            : n[r[0] + "With"](
                                                this === i ? n.promise() : this,
                                                s ? [e] : arguments
                                            );
                                    });
                                }),
                                    (e = null);
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? Z.extend(e, i) : i;
                        }
                    },
                    o = {};
                return (
                    (i.pipe = i.then),
                    Z.each(t, function (e, r) {
                        var s = r[2],
                            a = r[3];
                        (i[r[1]] = s.add),
                            a &&
                            s.add(
                                function () {
                                    n = a;
                                },
                                t[1 ^ e][2].disable,
                                t[2][2].lock
                            ),
                            (o[r[0]] = function () {
                                return o[r[0] + "With"](this === o ? i : this, arguments), this;
                            }),
                            (o[r[0] + "With"] = s.fireWith);
                    }),
                    i.promise(o),
                    e && e.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t,
                    n,
                    i,
                    o = 0,
                    r = U.call(arguments),
                    s = r.length,
                    a = 1 !== s || (e && Z.isFunction(e.promise)) ? s : 0,
                    l = 1 === a ? e : Z.Deferred(),
                    c = function (e, n, i) {
                        return function (o) {
                            (n[e] = this),
                                (i[e] = arguments.length > 1 ? U.call(arguments) : o),
                                i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                        };
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); o < s; o++)
                        r[o] && Z.isFunction(r[o].promise)
                            ? r[o]
                                .promise()
                                .done(c(o, i, r))
                                .fail(l.reject)
                                .progress(c(o, n, t))
                            : --a;
                return a || l.resolveWith(i, r), l.promise();
            }
        });
    var fe;
    (Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this;
    }),
        Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? Z.readyWait++ : Z.ready(!0);
            },
            ready: function (e) {
                (!0 === e ? --Z.readyWait : Z.isReady) ||
                    ((Z.isReady = !0),
                        (!0 !== e && --Z.readyWait > 0) ||
                        (fe.resolveWith(X, [Z]),
                            Z.fn.triggerHandler &&
                            (Z(X).triggerHandler("ready"), Z(X).off("ready"))));
            }
        }),
        (Z.ready.promise = function (t) {
            return (
                fe ||
                ((fe = Z.Deferred()),
                    "complete" === X.readyState
                        ? setTimeout(Z.ready)
                        : (X.addEventListener("DOMContentLoaded", s, !1),
                            e.addEventListener("load", s, !1))),
                fe.promise(t)
            );
        }),
        Z.ready.promise();
    var pe = (Z.access = function (e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, r, s);
        } else if (
            void 0 !== i &&
            ((o = !0),
                Z.isFunction(i) || (s = !0),
                c &&
                (s
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                        (t = function (e, t, n) {
                            return c.call(Z(e), n);
                        }))),
                t)
        )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    });
    (Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }),
        (a.uid = 1),
        (a.accepts = Z.acceptData),
        (a.prototype = {
            key: function (e) {
                if (!a.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        (t[this.expando] = { value: n }), Object.defineProperties(e, t);
                    } catch (i) {
                        (t[this.expando] = n), Z.extend(e, t);
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n;
            },
            set: function (e, t, n) {
                var i,
                    o = this.key(e),
                    r = this.cache[o];
                if ("string" == typeof t) r[t] = n;
                else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], t);
                else for (i in t) r[i] = t[i];
                return r;
            },
            get: function (e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t];
            },
            access: function (e, t, n) {
                var i;
                return void 0 === t || (t && "string" == typeof t && void 0 === n)
                    ? ((i = this.get(e, t)),
                        void 0 !== i ? i : this.get(e, Z.camelCase(t)))
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i,
                    o,
                    r = this.key(e),
                    s = this.cache[r];
                if (void 0 === t) this.cache[r] = {};
                else {
                    Z.isArray(t)
                        ? (i = t.concat(t.map(Z.camelCase)))
                        : ((o = Z.camelCase(t)),
                            t in s
                                ? (i = [t, o])
                                : ((i = o), (i = i in s ? [i] : i.match(he) || []))),
                        (n = i.length);
                    for (; n--;) delete s[i[n]];
                }
            },
            hasData: function (e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {});
            },
            discard: function (e) {
                e[this.expando] && delete this.cache[e[this.expando]];
            }
        });
    var ge = new a(),
        me = new a(),
        ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ye = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return me.hasData(e) || ge.hasData(e);
        },
        data: function (e, t, n) {
            return me.access(e, t, n);
        },
        removeData: function (e, t) {
            me.remove(e, t);
        },
        _data: function (e, t, n) {
            return ge.access(e, t, n);
        },
        _removeData: function (e, t) {
            ge.remove(e, t);
        }
    }),
        Z.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    o,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((o = me.get(r)), 1 === r.nodeType && !ge.get(r, "hasDataAttrs"))
                    ) {
                        for (n = s.length; n--;)
                            s[n] &&
                                ((i = s[n].name),
                                    0 === i.indexOf("data-") &&
                                    ((i = Z.camelCase(i.slice(5))), l(r, i, o[i])));
                        ge.set(r, "hasDataAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof e
                    ? this.each(function () {
                        me.set(this, e);
                    })
                    : pe(
                        this,
                        function (t) {
                            var n,
                                i = Z.camelCase(e);
                            if (r && void 0 === t) {
                                if (void 0 !== (n = me.get(r, e))) return n;
                                if (void 0 !== (n = me.get(r, i))) return n;
                                if (void 0 !== (n = l(r, i, void 0))) return n;
                            } else
                                this.each(function () {
                                    var n = me.get(this, i);
                                    me.set(this, i, t),
                                        -1 !== e.indexOf("-") &&
                                        void 0 !== n &&
                                        me.set(this, e, t);
                                });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                    );
            },
            removeData: function (e) {
                return this.each(function () {
                    me.remove(this, e);
                });
            }
        }),
        Z.extend({
            queue: function (e, t, n) {
                var i;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (i = ge.get(e, t)),
                        n &&
                        (!i || Z.isArray(n)
                            ? (i = ge.access(e, t, Z.makeArray(n)))
                            : i.push(n)),
                        i || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = Z.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = Z._queueHooks(e, t),
                    s = function () {
                        Z.dequeue(e, t);
                    };
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(e, s, r)),
                    !i && r && r.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    ge.get(e, n) ||
                    ge.access(e, n, {
                        empty: Z.Callbacks("once memory").add(function () {
                            ge.remove(e, [t + "queue", n]);
                        })
                    })
                );
            }
        }),
        Z.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? Z.queue(this[0], e)
                        : void 0 === t
                            ? this
                            : this.each(function () {
                                var n = Z.queue(this, e, t);
                                Z._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e);
                            })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    Z.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    o = Z.Deferred(),
                    r = this,
                    s = this.length,
                    a = function () {
                        --i || o.resolveWith(r, [r]);
                    };
                for (
                    "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                    s--;

                )
                    (n = ge.get(r[s], e + "queueHooks")) &&
                        n.empty &&
                        (i++ , n.empty.add(a));
                return a(), o.promise(t);
            }
        });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        be = ["Top", "Right", "Bottom", "Left"],
        Ce = function (e, t) {
            return (
                (e = t || e),
                "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
            );
        },
        we = /^(?:checkbox|radio)$/i;
    !(function () {
        var e = X.createDocumentFragment(),
            t = e.appendChild(X.createElement("div")),
            n = X.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            (V.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (V.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    V.focusinBubbles = "onfocusin" in e;
    var xe = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        ke = /^(?:focusinfocus|focusoutblur)$/,
        Se = /^([^.]*)(?:\.(.+)|)$/;
    (Z.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                g,
                m = ge.get(e);
            if (m)
                for (
                    n.handler && ((r = n), (n = r.handler), (o = r.selector)),
                    n.guid || (n.guid = Z.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (s = m.handle) ||
                    (s = m.handle = function (t) {
                        return void 0 !== Z && Z.event.triggered !== t.type
                            ? Z.event.dispatch.apply(e, arguments)
                            : void 0;
                    }),
                    t = (t || "").match(he) || [""],
                    c = t.length;
                    c--;

                )
                    (a = Se.exec(t[c]) || []),
                        (f = g = a[1]),
                        (p = (a[2] || "").split(".").sort()),
                        f &&
                        ((h = Z.event.special[f] || {}),
                            (f = (o ? h.delegateType : h.bindType) || f),
                            (h = Z.event.special[f] || {}),
                            (u = Z.extend(
                                {
                                    type: f,
                                    origType: g,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: o,
                                    needsContext: o && Z.expr.match.needsContext.test(o),
                                    namespace: p.join(".")
                                },
                                r
                            )),
                            (d = l[f]) ||
                            ((d = l[f] = []),
                                (d.delegateCount = 0),
                                (h.setup && !1 !== h.setup.call(e, i, p, s)) ||
                                (e.addEventListener && e.addEventListener(f, s, !1))),
                            h.add &&
                            (h.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                            o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                            (Z.event.global[f] = !0));
        },
        remove: function (e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                g,
                m = ge.hasData(e) && ge.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(he) || [""], c = t.length; c--;)
                    if (
                        ((a = Se.exec(t[c]) || []),
                            (f = g = a[1]),
                            (p = (a[2] || "").split(".").sort()),
                            f)
                    ) {
                        for (
                            h = Z.event.special[f] || {},
                            f = (i ? h.delegateType : h.bindType) || f,
                            d = l[f] || [],
                            a =
                            a[2] &&
                            new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = r = d.length;
                            r--;

                        )
                            (u = d[r]),
                                (!o && g !== u.origType) ||
                                (n && n.guid !== u.guid) ||
                                (a && !a.test(u.namespace)) ||
                                (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                (d.splice(r, 1),
                                    u.selector && d.delegateCount-- ,
                                    h.remove && h.remove.call(e, u));
                        s &&
                            !d.length &&
                            ((h.teardown && !1 !== h.teardown.call(e, p, m.handle)) ||
                                Z.removeEvent(e, f, m.handle),
                                delete l[f]);
                    } else for (f in l) Z.event.remove(e, f + t[c], n, i, !0);
                Z.isEmptyObject(l) && (delete m.handle, ge.remove(e, "events"));
            }
        },
        trigger: function (t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d = [i || X],
                f = _.call(t, "type") ? t.type : t,
                p = _.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = a = i = i || X),
                    3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !ke.test(f + Z.event.triggered) &&
                    (f.indexOf(".") >= 0 &&
                        ((p = f.split(".")), (f = p.shift()), p.sort()),
                        (c = f.indexOf(":") < 0 && "on" + f),
                        (t = t[Z.expando] ? t : new Z.Event(f, "object" == typeof t && t)),
                        (t.isTrigger = o ? 2 : 3),
                        (t.namespace = p.join(".")),
                        (t.namespace_re = t.namespace
                            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
                            : null),
                        (t.result = void 0),
                        t.target || (t.target = i),
                        (n = null == n ? [t] : Z.makeArray(n, [t])),
                        (h = Z.event.special[f] || {}),
                        o || !h.trigger || !1 !== h.trigger.apply(i, n)))
            ) {
                if (!o && !h.noBubble && !Z.isWindow(i)) {
                    for (
                        l = h.delegateType || f, ke.test(l + f) || (s = s.parentNode);
                        s;
                        s = s.parentNode
                    )
                        d.push(s), (a = s);
                    a === (i.ownerDocument || X) &&
                        d.push(a.defaultView || a.parentWindow || e);
                }
                for (r = 0; (s = d[r++]) && !t.isPropagationStopped();)
                    (t.type = r > 1 ? l : h.bindType || f),
                        (u = (ge.get(s, "events") || {})[t.type] && ge.get(s, "handle")),
                        u && u.apply(s, n),
                        (u = c && s[c]) &&
                        u.apply &&
                        Z.acceptData(s) &&
                        ((t.result = u.apply(s, n)),
                            !1 === t.result && t.preventDefault());
                return (
                    (t.type = f),
                    o ||
                    t.isDefaultPrevented() ||
                    (h._default && !1 !== h._default.apply(d.pop(), n)) ||
                    !Z.acceptData(i) ||
                    (c &&
                        Z.isFunction(i[f]) &&
                        !Z.isWindow(i) &&
                        ((a = i[c]),
                            a && (i[c] = null),
                            (Z.event.triggered = f),
                            i[f](),
                            (Z.event.triggered = void 0),
                            a && (i[c] = a))),
                    t.result
                );
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t,
                n,
                i,
                o,
                r,
                s = [],
                a = U.call(arguments),
                l = (ge.get(this, "events") || {})[e.type] || [],
                c = Z.event.special[e.type] || {};
            if (
                ((a[0] = e),
                    (e.delegateTarget = this),
                    !c.preDispatch || !1 !== c.preDispatch.call(this, e))
            ) {
                for (
                    s = Z.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();

                )
                    for (
                        e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();

                    )
                        (e.namespace_re && !e.namespace_re.test(r.namespace)) ||
                            ((e.handleObj = r),
                                (e.data = r.data),
                                void 0 !==
                                (i = (
                                    (Z.event.special[r.origType] || {}).handle || r.handler
                                ).apply(o.elem, a)) &&
                                !1 === (e.result = i) &&
                                (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                o,
                r,
                s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [], n = 0; n < a; n++)
                            (r = t[n]),
                                (o = r.selector + " "),
                                void 0 === i[o] &&
                                (i[o] = r.needsContext
                                    ? Z(o, this).index(l) >= 0
                                    : Z.find(o, this, null, [l]).length),
                                i[o] && i.push(r);
                        i.length && s.push({ elem: l, handlers: i });
                    }
            return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return (
                    null == e.which &&
                    (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                );
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (e, t) {
                var n,
                    i,
                    o,
                    r = t.button;
                return (
                    null == e.pageX &&
                    null != t.clientX &&
                    ((n = e.target.ownerDocument || X),
                        (i = n.documentElement),
                        (o = n.body),
                        (e.pageX =
                            t.clientX +
                            ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                            ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
                        (e.pageY =
                            t.clientY +
                            ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                            ((i && i.clientTop) || (o && o.clientTop) || 0))),
                    e.which ||
                    void 0 === r ||
                    (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                    e
                );
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t,
                n,
                i,
                o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (
                s ||
                (this.fixHooks[o] = s = Ee.test(o)
                    ? this.mouseHooks
                    : xe.test(o)
                        ? this.keyHooks
                        : {}),
                i = s.props ? this.props.concat(s.props) : this.props,
                e = new Z.Event(r),
                t = i.length;
                t--;

            )
                (n = i[t]), (e[n] = r[n]);
            return (
                e.target || (e.target = X),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, r) : e
            );
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== h() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === h() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (
                        "checkbox" === this.type &&
                        this.click &&
                        Z.nodeName(this, "input")
                    )
                        return this.click(), !1;
                },
                _default: function (e) {
                    return Z.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = Z.extend(new Z.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o),
                o.isDefaultPrevented() && n.preventDefault();
        }
    }),
        (Z.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
        }),
        (Z.Event = function (e, t) {
            if (!(this instanceof Z.Event)) return new Z.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                    (this.type = e.type),
                    (this.isDefaultPrevented =
                        e.defaultPrevented ||
                            (void 0 === e.defaultPrevented && !1 === e.returnValue)
                            ? c
                            : u))
                : (this.type = e),
                t && Z.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Z.now()),
                (this[Z.expando] = !0);
        }),
        (Z.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = c),
                    e && e.preventDefault && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = c),
                    e && e.stopPropagation && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = c),
                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation();
            }
        }),
        Z.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            },
            function (e, t) {
                Z.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            i = this,
                            o = e.relatedTarget,
                            r = e.handleObj;
                        return (
                            (o && (o === i || Z.contains(i, o))) ||
                            ((e.type = r.origType),
                                (n = r.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    }
                };
            }
        ),
        V.focusinBubbles ||
        Z.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
                Z.event.simulate(t, e.target, Z.event.fix(e), !0);
            };
            Z.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        o = ge.access(i, t);
                    o || i.addEventListener(e, n, !0), ge.access(i, t, (o || 0) + 1);
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        o = ge.access(i, t) - 1;
                    o
                        ? ge.access(i, t, o)
                        : (i.removeEventListener(e, n, !0), ge.remove(i, t));
                }
            };
        }),
        Z.fn.extend({
            on: function (e, t, n, i, o) {
                var r, s;
                if ("object" == typeof e) {
                    "string" != typeof t && ((n = n || t), (t = void 0));
                    for (s in e) this.on(s, t, n, e[s], o);
                    return this;
                }
                if (
                    (null == n && null == i
                        ? ((i = t), (n = t = void 0))
                        : null == i &&
                        ("string" == typeof t
                            ? ((i = n), (n = void 0))
                            : ((i = n), (n = t), (t = void 0))),
                        !1 === i)
                )
                    i = u;
                else if (!i) return this;
                return (
                    1 === o &&
                    ((r = i),
                        (i = function (e) {
                            return Z().off(e), r.apply(this, arguments);
                        }),
                        (i.guid = r.guid || (r.guid = Z.guid++))),
                    this.each(function () {
                        Z.event.add(this, e, i, n, t);
                    })
                );
            },
            one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        Z(e.delegateTarget).off(
                            i.namespace ? i.origType + "." + i.namespace : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = u),
                    this.each(function () {
                        Z.event.remove(this, e, n, t);
                    })
                );
            },
            trigger: function (e, t) {
                return this.each(function () {
                    Z.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return Z.event.trigger(e, t, n, !0);
            }
        });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        Be = /<|&#?\w+;/,
        Le = /<(?:script|style|link)/i,
        Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^$|\/(?:java|ecma)script/i,
        je = /^true\/(.*)/,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ne = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    (Ne.optgroup = Ne.option),
        (Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead),
        (Ne.th = Ne.td),
        Z.extend({
            clone: function (e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a = e.cloneNode(!0),
                    l = Z.contains(e.ownerDocument, e);
                if (
                    !(
                        V.noCloneChecked ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        Z.isXMLDoc(e)
                    )
                )
                    for (s = v(a), r = v(e), i = 0, o = r.length; i < o; i++)
                        y(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || v(e), s = s || v(a), i = 0, o = r.length; i < o; i++)
                            m(r[i], s[i]);
                    else m(e, a);
                return (
                    (s = v(a, "script")), s.length > 0 && g(s, !l && v(e, "script")), a
                );
            },
            buildFragment: function (e, t, n, i) {
                for (
                    var o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = t.createDocumentFragment(),
                    h = [],
                    d = 0,
                    f = e.length;
                    d < f;
                    d++
                )
                    if ((o = e[d]) || 0 === o)
                        if ("object" === Z.type(o)) Z.merge(h, o.nodeType ? [o] : o);
                        else if (Be.test(o)) {
                            for (
                                r = r || u.appendChild(t.createElement("div")),
                                s = (Ie.exec(o) || ["", ""])[1].toLowerCase(),
                                a = Ne[s] || Ne._default,
                                r.innerHTML = a[1] + o.replace(De, "<$1></$2>") + a[2],
                                c = a[0];
                                c--;

                            )
                                r = r.lastChild;
                            Z.merge(h, r.childNodes),
                                (r = u.firstChild),
                                (r.textContent = "");
                        } else h.push(t.createTextNode(o));
                for (u.textContent = "", d = 0; (o = h[d++]);)
                    if (
                        (!i || -1 === Z.inArray(o, i)) &&
                        ((l = Z.contains(o.ownerDocument, o)),
                            (r = v(u.appendChild(o), "script")),
                            l && g(r),
                            n)
                    )
                        for (c = 0; (o = r[c++]);) Me.test(o.type || "") && n.push(o);
                return u;
            },
            cleanData: function (e) {
                for (
                    var t, n, i, o, r = Z.event.special, s = 0;
                    void 0 !== (n = e[s]);
                    s++
                ) {
                    if (Z.acceptData(n) && (o = n[ge.expando]) && (t = ge.cache[o])) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                        ge.cache[o] && delete ge.cache[o];
                    }
                    delete me.cache[n[me.expando]];
                }
            }
        }),
        Z.fn.extend({
            text: function (e) {
                return pe(
                    this,
                    function (e) {
                        return void 0 === e
                            ? Z.text(this)
                            : this.empty().each(function () {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                    (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        d(this, e).appendChild(e);
                    }
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = d(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                for (
                    var n, i = e ? Z.filter(e, this) : this, o = 0;
                    null != (n = i[o]);
                    o++
                )
                    t || 1 !== n.nodeType || Z.cleanData(v(n)),
                        n.parentNode &&
                        (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")),
                            n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (Z.cleanData(v(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return Z.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return pe(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Le.test(e) &&
                            !Ne[(Ie.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = e.replace(De, "<$1></$2>");
                            try {
                                for (; n < i; n++)
                                    (t = this[n] || {}),
                                        1 === t.nodeType &&
                                        (Z.cleanData(v(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) { }
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = arguments[0];
                return (
                    this.domManip(arguments, function (t) {
                        (e = this.parentNode),
                            Z.cleanData(v(this)),
                            e && e.replaceChild(t, this);
                    }),
                    e && (e.length || e.nodeType) ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (e, t) {
                e = G.apply([], e);
                var n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l = 0,
                    c = this.length,
                    u = this,
                    h = c - 1,
                    d = e[0],
                    g = Z.isFunction(d);
                if (g || (c > 1 && "string" == typeof d && !V.checkClone && Te.test(d)))
                    return this.each(function (n) {
                        var i = u.eq(n);
                        g && (e[0] = d.call(this, n, i.html())), i.domManip(e, t);
                    });
                if (
                    c &&
                    ((n = Z.buildFragment(e, this[0].ownerDocument, !1, this)),
                        (i = n.firstChild),
                        1 === n.childNodes.length && (n = i),
                        i)
                ) {
                    for (o = Z.map(v(n, "script"), f), r = o.length; l < c; l++)
                        (s = n),
                            l !== h &&
                            ((s = Z.clone(s, !0, !0)), r && Z.merge(o, v(s, "script"))),
                            t.call(this[l], s, l);
                    if (r)
                        for (
                            a = o[o.length - 1].ownerDocument, Z.map(o, p), l = 0;
                            l < r;
                            l++
                        )
                            (s = o[l]),
                                Me.test(s.type || "") &&
                                !ge.access(s, "globalEval") &&
                                Z.contains(a, s) &&
                                (s.src
                                    ? Z._evalUrl && Z._evalUrl(s.src)
                                    : Z.globalEval(s.textContent.replace(Fe, "")));
                }
                return this;
            }
        }),
        Z.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function (e, t) {
                Z.fn[e] = function (e) {
                    for (var n, i = [], o = Z(e), r = o.length - 1, s = 0; s <= r; s++)
                        (n = s === r ? this : this.clone(!0)),
                            Z(o[s])[t](n),
                            K.apply(i, n.get());
                    return this.pushStack(i);
                };
            }
        );
    var Qe,
        Pe = {},
        He = /^margin/,
        Re = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        Oe = function (t) {
            return t.ownerDocument.defaultView.opener
                ? t.ownerDocument.defaultView.getComputedStyle(t, null)
                : e.getComputedStyle(t, null);
        };
    !(function () {
        function t() {
            (s.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                (s.innerHTML = ""),
                o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            (n = "1%" !== t.top), (i = "4px" === t.width), o.removeChild(r);
        }
        var n,
            i,
            o = X.documentElement,
            r = X.createElement("div"),
            s = X.createElement("div");
        s.style &&
            ((s.style.backgroundClip = "content-box"),
                (s.cloneNode(!0).style.backgroundClip = ""),
                (V.clearCloneStyle = "content-box" === s.style.backgroundClip),
                (r.style.cssText =
                    "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
                r.appendChild(s),
                e.getComputedStyle &&
                Z.extend(V, {
                    pixelPosition: function () {
                        return t(), n;
                    },
                    boxSizingReliable: function () {
                        return null == i && t(), i;
                    },
                    reliableMarginRight: function () {
                        var t,
                            n = s.appendChild(X.createElement("div"));
                        return (
                            (n.style.cssText = s.style.cssText =
                                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (n.style.marginRight = n.style.width = "0"),
                            (s.style.width = "1px"),
                            o.appendChild(r),
                            (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
                            o.removeChild(r),
                            s.removeChild(n),
                            t
                        );
                    }
                }));
    })(),
        (Z.swap = function (e, t, n, i) {
            var o,
                r,
                s = {};
            for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o;
        });
    var ze = /^(none|table(?!-c[ea]).+)/,
        qe = new RegExp("^(" + Ae + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + Ae + ")", "i"),
        Ge = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" },
        We = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = C(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: { float: "cssFloat" },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                    r,
                    s,
                    a = Z.camelCase(t),
                    l = e.style;
                if (
                    ((t = Z.cssProps[a] || (Z.cssProps[a] = x(l, a))),
                        (s = Z.cssHooks[t] || Z.cssHooks[a]),
                        void 0 === n)
                )
                    return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                (r = typeof n),
                    "string" === r &&
                    (o = Ue.exec(n)) &&
                    ((n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t))), (r = "number")),
                    null != n &&
                    n === n &&
                    ("number" !== r || Z.cssNumber[a] || (n += "px"),
                        V.clearCloneStyle ||
                        "" !== n ||
                        0 !== t.indexOf("background") ||
                        (l[t] = "inherit"),
                        (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l[t] = n));
            }
        },
        css: function (e, t, n, i) {
            var o,
                r,
                s,
                a = Z.camelCase(t);
            return (
                (t = Z.cssProps[a] || (Z.cssProps[a] = x(e.style, a))),
                (s = Z.cssHooks[t] || Z.cssHooks[a]),
                s && "get" in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = C(e, t, i)),
                "normal" === o && t in Ke && (o = Ke[t]),
                "" === n || n
                    ? ((r = parseFloat(o)), !0 === n || Z.isNumeric(r) ? r || 0 : o)
                    : o
            );
        }
    }),
        Z.each(["height", "width"], function (e, t) {
            Z.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)
                        return ze.test(Z.css(e, "display")) && 0 === e.offsetWidth
                            ? Z.swap(e, Ge, function () {
                                return S(e, t, i);
                            })
                            : S(e, t, i);
                },
                set: function (e, n, i) {
                    var o = i && Oe(e);
                    return E(
                        e,
                        n,
                        i ? k(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0
                    );
                }
            };
        }),
        (Z.cssHooks.marginRight = w(V.reliableMarginRight, function (e, t) {
            if (t)
                return Z.swap(e, { display: "inline-block" }, C, [e, "marginRight"]);
        })),
        Z.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (Z.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
                        i < 4;
                        i++
                    )
                        o[e + be[i] + t] = r[i] || r[i - 2] || r[0];
                    return o;
                }
            }),
                He.test(e) || (Z.cssHooks[e + t].set = E);
        }),
        Z.fn.extend({
            css: function (e, t) {
                return pe(
                    this,
                    function (e, t, n) {
                        var i,
                            o,
                            r = {},
                            s = 0;
                        if (Z.isArray(t)) {
                            for (i = Oe(e), o = t.length; s < o; s++)
                                r[t[s]] = Z.css(e, t[s], !1, i);
                            return r;
                        }
                        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
            show: function () {
                return D(this, !0);
            },
            hide: function () {
                return D(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                        Ce(this) ? Z(this).show() : Z(this).hide();
                    });
            }
        }),
        (Z.Tween = I),
        (I.prototype = {
            constructor: I,
            init: function (e, t, n, i, o, r) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = o || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = r || (Z.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = I.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t = Z.easing[this.easing](
                            e,
                            this.options.duration * e,
                            0,
                            1,
                            this.options.duration
                        ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : I.propHooks._default.set(this),
                    this
                );
            }
        }),
        (I.prototype.init.prototype = I.prototype),
        (I.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                        (e.elem.style && null != e.elem.style[e.prop])
                        ? ((t = Z.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
                        : e.elem[e.prop];
                },
                set: function (e) {
                    Z.fx.step[e.prop]
                        ? Z.fx.step[e.prop](e)
                        : e.elem.style &&
                            (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop])
                            ? Z.style(e.elem, e.prop, e.now + e.unit)
                            : (e.elem[e.prop] = e.now);
                }
            }
        }),
        (I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
        }),
        (Z.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            }
        }),
        (Z.fx = I.prototype.init),
        (Z.fx.step = {});
    var Ye,
        Je,
        _e = /^(?:toggle|show|hide)$/,
        Ve = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        Xe = /queueHooks$/,
        Ze = [M],
        $e = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = Ve.exec(t),
                        r = (o && o[3]) || (Z.cssNumber[e] ? "" : "px"),
                        s =
                            (Z.cssNumber[e] || ("px" !== r && +i)) &&
                            Ve.exec(Z.css(n.elem, e)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        (r = r || s[3]), (o = o || []), (s = +i || 1);
                        do {
                            (a = a || ".5"), (s /= a), Z.style(n.elem, e, s + r);
                        } while (a !== (a = n.cur() / i) && 1 !== a && --l);
                    }
                    return (
                        o &&
                        ((s = n.start = +s || +i || 0),
                            (n.unit = r),
                            (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
                        n
                    );
                }
            ]
        };
    (Z.Animation = Z.extend(F, {
        tweener: function (e, t) {
            Z.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
            for (var n, i = 0, o = e.length; i < o; i++)
                (n = e[i]), ($e[n] = $e[n] || []), $e[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? Ze.unshift(e) : Ze.push(e);
        }
    })),
        (Z.speed = function (e, t, n) {
            var i =
                e && "object" == typeof e
                    ? Z.extend({}, e)
                    : {
                        complete: n || (!n && t) || (Z.isFunction(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !Z.isFunction(t) && t)
                    };
            return (
                (i.duration = Z.fx.off
                    ? 0
                    : "number" == typeof i.duration
                        ? i.duration
                        : i.duration in Z.fx.speeds
                            ? Z.fx.speeds[i.duration]
                            : Z.fx.speeds._default),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    Z.isFunction(i.old) && i.old.call(this),
                        i.queue && Z.dequeue(this, i.queue);
                }),
                i
            );
        }),
        Z.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Ce)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
                var o = Z.isEmptyObject(e),
                    r = Z.speed(t, n, i),
                    s = function () {
                        var t = F(this, Z.extend({}, e), r);
                        (o || ge.get(this, "finish")) && t.stop(!0);
                    };
                return (
                    (s.finish = s),
                    o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                );
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = Z.timers,
                            s = ge.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else for (o in s) s[o] && s[o].stop && Xe.test(o) && i(s[o]);
                        for (o = r.length; o--;)
                            r[o].elem !== this ||
                                (null != e && r[o].queue !== e) ||
                                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                        (!t && n) || Z.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = ge.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = Z.timers,
                            s = i ? i.length : 0;
                        for (
                            n.finish = !0,
                            Z.queue(this, e, []),
                            o && o.stop && o.stop.call(this, !0),
                            t = r.length;
                            t--;

                        )
                            r[t].elem === this &&
                                r[t].queue === e &&
                                (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            }
        }),
        Z.each(["toggle", "show", "hide"], function (e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(L(t, !0), e, i, o);
            };
        }),
        Z.each(
            {
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
            },
            function (e, t) {
                Z.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i);
                };
            }
        ),
        (Z.timers = []),
        (Z.fx.tick = function () {
            var e,
                t = 0,
                n = Z.timers;
            for (Ye = Z.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), (Ye = void 0);
        }),
        (Z.fx.timer = function (e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop();
        }),
        (Z.fx.interval = 13),
        (Z.fx.start = function () {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval));
        }),
        (Z.fx.stop = function () {
            clearInterval(Je), (Je = null);
        }),
        (Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (Z.fn.delay = function (e, t) {
            return (
                (e = Z.fx ? Z.fx.speeds[e] || e : e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = X.createElement("input"),
                t = X.createElement("select"),
                n = t.appendChild(X.createElement("option"));
            (e.type = "checkbox"),
                (V.checkOn = "" !== e.value),
                (V.optSelected = n.selected),
                (t.disabled = !0),
                (V.optDisabled = !n.disabled),
                (e = X.createElement("input")),
                (e.value = "t"),
                (e.type = "radio"),
                (V.radioValue = "t" === e.value);
        })();
    var et,
        tt = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return pe(this, Z.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e);
            });
        }
    }),
        Z.extend({
            attr: function (e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute
                        ? Z.prop(e, t, n)
                        : ((1 === r && Z.isXMLDoc(e)) ||
                            ((t = t.toLowerCase()),
                                (i =
                                    Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? et : void 0))),
                            void 0 === n
                                ? i && "get" in i && null !== (o = i.get(e, t))
                                    ? o
                                    : ((o = Z.find.attr(e, t)), null == o ? void 0 : o)
                                : null !== n
                                    ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                                        ? o
                                        : (e.setAttribute(t, n + ""), n)
                                    : void Z.removeAttr(e, t));
            },
            removeAttr: function (e, t) {
                var n,
                    i,
                    o = 0,
                    r = t && t.match(he);
                if (r && 1 === e.nodeType)
                    for (; (n = r[o++]);)
                        (i = Z.propFix[n] || n),
                            Z.expr.match.bool.test(n) && (e[i] = !1),
                            e.removeAttribute(n);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!V.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    }
                }
            }
        }),
        (et = {
            set: function (e, t, n) {
                return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
        }),
        Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = tt[t] || Z.find.attr;
            tt[t] = function (e, t, i) {
                var o, r;
                return (
                    i ||
                    ((r = tt[t]),
                        (tt[t] = o),
                        (o = null != n(e, t, i) ? t.toLowerCase() : null),
                        (tt[t] = r)),
                    o
                );
            };
        });
    var nt = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return pe(this, Z.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e];
            });
        }
    }),
        Z.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, t, n) {
                var i,
                    o,
                    r,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return (
                        (r = 1 !== s || !Z.isXMLDoc(e)),
                        r && ((t = Z.propFix[t] || t), (o = Z.propHooks[t])),
                        void 0 !== n
                            ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                                ? i
                                : (e[t] = n)
                            : o && "get" in o && null !== (i = o.get(e, t))
                                ? i
                                : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        return e.hasAttribute("tabindex") || nt.test(e.nodeName) || e.href
                            ? e.tabIndex
                            : -1;
                    }
                }
            }
        }),
        V.optSelected ||
        (Z.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            }
        }),
        Z.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable"
            ],
            function () {
                Z.propFix[this.toLowerCase()] = this;
            }
        );
    var it = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (Z.isFunction(e))
                return this.each(function (t) {
                    Z(this).addClass(e.call(this, t, this.className));
                });
            if (a)
                for (t = (e || "").match(he) || []; l < c; l++)
                    if (
                        ((n = this[l]),
                            (i =
                                1 === n.nodeType &&
                                (n.className ? (" " + n.className + " ").replace(it, " ") : " ")))
                    ) {
                        for (r = 0; (o = t[r++]);)
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        (s = Z.trim(i)), n.className !== s && (n.className = s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a = 0 === arguments.length || ("string" == typeof e && e),
                l = 0,
                c = this.length;
            if (Z.isFunction(e))
                return this.each(function (t) {
                    Z(this).removeClass(e.call(this, t, this.className));
                });
            if (a)
                for (t = (e || "").match(he) || []; l < c; l++)
                    if (
                        ((n = this[l]),
                            (i =
                                1 === n.nodeType &&
                                (n.className ? (" " + n.className + " ").replace(it, " ") : "")))
                    ) {
                        for (r = 0; (o = t[r++]);)
                            for (; i.indexOf(" " + o + " ") >= 0;)
                                i = i.replace(" " + o + " ", " ");
                        (s = e ? Z.trim(i) : ""), n.className !== s && (n.className = s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : Z.isFunction(e)
                    ? this.each(function (n) {
                        Z(this).toggleClass(e.call(this, n, this.className, t), t);
                    })
                    : this.each(function () {
                        if ("string" === n)
                            for (
                                var t, i = 0, o = Z(this), r = e.match(he) || [];
                                (t = r[i++]);

                            )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            ("undefined" !== n && "boolean" !== n) ||
                                (this.className &&
                                    ge.set(this, "__className__", this.className),
                                    (this.className =
                                        this.className || !1 === e
                                            ? ""
                                            : ge.get(this, "__className__") || ""));
                    });
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (
                    1 === this[n].nodeType &&
                    (" " + this[n].className + " ").replace(it, " ").indexOf(t) >= 0
                )
                    return !0;
            return !1;
        }
    });
    var ot = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t,
                n,
                i,
                o = this[0];
            {
                if (arguments.length)
                    return (
                        (i = Z.isFunction(e)),
                        this.each(function (n) {
                            var o;
                            1 === this.nodeType &&
                                ((o = i ? e.call(this, n, Z(this).val()) : e),
                                    null == o
                                        ? (o = "")
                                        : "number" == typeof o
                                            ? (o += "")
                                            : Z.isArray(o) &&
                                            (o = Z.map(o, function (e) {
                                                return null == e ? "" : e + "";
                                            })),
                                    ((t =
                                        Z.valHooks[this.type] ||
                                        Z.valHooks[this.nodeName.toLowerCase()]) &&
                                        "set" in t &&
                                        void 0 !== t.set(this, o, "value")) ||
                                    (this.value = o));
                        })
                    );
                if (o)
                    return (t =
                        Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()]) &&
                        "get" in t &&
                        void 0 !== (n = t.get(o, "value"))
                        ? n
                        : ((n = o.value),
                            "string" == typeof n ? n.replace(ot, "") : null == n ? "" : n);
            }
        }
    }),
        Z.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t : Z.trim(Z.text(e));
                    }
                },
                select: {
                    get: function (e) {
                        for (
                            var t,
                            n,
                            i = e.options,
                            o = e.selectedIndex,
                            r = "select-one" === e.type || o < 0,
                            s = r ? null : [],
                            a = r ? o + 1 : i.length,
                            l = o < 0 ? a : r ? o : 0;
                            l < a;
                            l++
                        )
                            if (
                                ((n = i[l]),
                                    (n.selected || l === o) &&
                                    (V.optDisabled
                                        ? !n.disabled
                                        : null === n.getAttribute("disabled")) &&
                                    (!n.parentNode.disabled ||
                                        !Z.nodeName(n.parentNode, "optgroup")))
                            ) {
                                if (((t = Z(n).val()), r)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        for (
                            var n, i, o = e.options, r = Z.makeArray(t), s = o.length;
                            s--;

                        )
                            (i = o[s]), (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), r;
                    }
                }
            }
        }),
        Z.each(["radio", "checkbox"], function () {
            (Z.valHooks[this] = {
                set: function (e, t) {
                    if (Z.isArray(t)) return (e.checked = Z.inArray(Z(e).val(), t) >= 0);
                }
            }),
                V.checkOn ||
                (Z.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        }),
        Z.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (e, t) {
                Z.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        Z.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            }
        });
    var rt = Z.now(),
        st = /\?/;
    (Z.parseJSON = function (e) {
        return JSON.parse(e + "");
    }),
        (Z.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                (n = new DOMParser()), (t = n.parseFromString(e, "text/xml"));
            } catch (e) {
                t = void 0;
            }
            return (
                (t && !t.getElementsByTagName("parsererror").length) ||
                Z.error("Invalid XML: " + e),
                t
            );
        });
    var at = /#.*$/,
        lt = /([?&])_=[^&]*/,
        ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ht = /^(?:GET|HEAD)$/,
        dt = /^\/\//,
        ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        pt = {},
        gt = {},
        mt = "*/".concat("*"),
        vt = e.location.href,
        yt = ft.exec(vt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt,
            type: "GET",
            isLocal: ut.test(yt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function (e, t) {
            return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e);
        },
        ajaxPrefilter: N(pt),
        ajaxTransport: N(gt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var l,
                    u,
                    v,
                    y,
                    b,
                    w = t;
                2 !== A &&
                    ((A = 2),
                        a && clearTimeout(a),
                        (i = void 0),
                        (r = s || ""),
                        (C.readyState = e > 0 ? 4 : 0),
                        (l = (e >= 200 && e < 300) || 304 === e),
                        n && (y = H(h, C, n)),
                        (y = R(h, y, C, l)),
                        l
                            ? (h.ifModified &&
                                ((b = C.getResponseHeader("Last-Modified")),
                                    b && (Z.lastModified[o] = b),
                                    (b = C.getResponseHeader("etag")) && (Z.etag[o] = b)),
                                204 === e || "HEAD" === h.type
                                    ? (w = "nocontent")
                                    : 304 === e
                                        ? (w = "notmodified")
                                        : ((w = y.state), (u = y.data), (v = y.error), (l = !v)))
                            : ((v = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                        (C.status = e),
                        (C.statusText = (t || w) + ""),
                        l ? p.resolveWith(d, [u, w, C]) : p.rejectWith(d, [C, w, v]),
                        C.statusCode(m),
                        (m = void 0),
                        c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? u : v]),
                        g.fireWith(d, [C, w]),
                        c &&
                        (f.trigger("ajaxComplete", [C, h]),
                            --Z.active || Z.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                h = Z.ajaxSetup({}, t),
                d = h.context || h,
                f = h.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
                p = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = h.statusCode || {},
                v = {},
                y = {},
                A = 0,
                b = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === A) {
                            if (!s)
                                for (s = {}; (t = ct.exec(r));) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === A ? r : null;
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return A || ((e = y[n] = y[n] || e), (v[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return A || (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (A < 2) for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this;
                    },
                    abort: function (e) {
                        var t = e || b;
                        return i && i.abort(t), n(0, t), this;
                    }
                };
            if (
                ((p.promise(C).complete = g.add),
                    (C.success = C.done),
                    (C.error = C.fail),
                    (h.url = ((e || h.url || vt) + "")
                        .replace(at, "")
                        .replace(dt, yt[1] + "//")),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = Z.trim(h.dataType || "*")
                        .toLowerCase()
                        .match(he) || [""]),
                    null == h.crossDomain &&
                    ((l = ft.exec(h.url.toLowerCase())),
                        (h.crossDomain = !(
                            !l ||
                            (l[1] === yt[1] &&
                                l[2] === yt[2] &&
                                (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                                (yt[3] || ("http:" === yt[1] ? "80" : "443")))
                        ))),
                    h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = Z.param(h.data, h.traditional)),
                    Q(pt, h, t, C),
                    2 === A)
            )
                return C;
            (c = Z.event && h.global),
                c && 0 == Z.active++ && Z.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !ht.test(h.type)),
                (o = h.url),
                h.hasContent ||
                (h.data &&
                    ((o = h.url += (st.test(o) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                    (h.url = lt.test(o)
                        ? o.replace(lt, "$1_=" + rt++)
                        : o + (st.test(o) ? "&" : "?") + "_=" + rt++)),
                h.ifModified &&
                (Z.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", Z.lastModified[o]),
                    Z.etag[o] && C.setRequestHeader("If-None-Match", Z.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
                C.setRequestHeader("Content-Type", h.contentType),
                C.setRequestHeader(
                    "Accept",
                    h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                        ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + mt + "; q=0.01" : "")
                        : h.accepts["*"]
                );
            for (u in h.headers) C.setRequestHeader(u, h.headers[u]);
            if (h.beforeSend && (!1 === h.beforeSend.call(d, C, h) || 2 === A))
                return C.abort();
            b = "abort";
            for (u in { success: 1, error: 1, complete: 1 }) C[u](h[u]);
            if ((i = Q(gt, h, t, C))) {
                (C.readyState = 1),
                    c && f.trigger("ajaxSend", [C, h]),
                    h.async &&
                    h.timeout > 0 &&
                    (a = setTimeout(function () {
                        C.abort("timeout");
                    }, h.timeout));
                try {
                    (A = 1), i.send(v, n);
                } catch (e) {
                    if (!(A < 2)) throw e;
                    n(-1, e);
                }
            } else n(-1, "No Transport");
            return C;
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script");
        }
    }),
        Z.each(["get", "post"], function (e, t) {
            Z[t] = function (e, n, i, o) {
                return (
                    Z.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
                    Z.ajax({ url: e, type: t, dataType: o, data: n, success: i })
                );
            };
        }),
        (Z._evalUrl = function (e) {
            return Z.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            });
        }),
        Z.fn.extend({
            wrapAll: function (e) {
                var t;
                return Z.isFunction(e)
                    ? this.each(function (t) {
                        Z(this).wrapAll(e.call(this, t));
                    })
                    : (this[0] &&
                        ((t = Z(e, this[0].ownerDocument)
                            .eq(0)
                            .clone(!0)),
                            this[0].parentNode && t.insertBefore(this[0]),
                            t
                                .map(function () {
                                    for (var e = this; e.firstElementChild;)
                                        e = e.firstElementChild;
                                    return e;
                                })
                                .append(this)),
                        this);
            },
            wrapInner: function (e) {
                return Z.isFunction(e)
                    ? this.each(function (t) {
                        Z(this).wrapInner(e.call(this, t));
                    })
                    : this.each(function () {
                        var t = Z(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = Z.isFunction(e);
                return this.each(function (n) {
                    Z(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes);
                    })
                    .end();
            }
        }),
        (Z.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0;
        }),
        (Z.expr.filters.visible = function (e) {
            return !Z.expr.filters.hidden(e);
        });
    var At = /%20/g,
        bt = /\[\]$/,
        Ct = /\r?\n/g,
        wt = /^(?:submit|button|image|reset|file)$/i,
        xt = /^(?:input|select|textarea|keygen)/i;
    (Z.param = function (e, t) {
        var n,
            i = [],
            o = function (e, t) {
                (t = Z.isFunction(t) ? t() : null == t ? "" : t),
                    (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
        if (
            (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
                Z.isArray(e) || (e.jquery && !Z.isPlainObject(e)))
        )
            Z.each(e, function () {
                o(this.name, this.value);
            });
        else for (n in e) O(n, e[n], t, o);
        return i.join("&").replace(At, "+");
    }),
        Z.fn.extend({
            serialize: function () {
                return Z.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !Z(this).is(":disabled") &&
                            xt.test(this.nodeName) &&
                            !wt.test(e) &&
                            (this.checked || !we.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = Z(this).val();
                        return null == n
                            ? null
                            : Z.isArray(n)
                                ? Z.map(n, function (e) {
                                    return { name: t.name, value: e.replace(Ct, "\r\n") };
                                })
                                : { name: t.name, value: n.replace(Ct, "\r\n") };
                    })
                    .get();
            }
        }),
        (Z.ajaxSettings.xhr = function () {
            try {
                return new XMLHttpRequest();
            } catch (e) { }
        });
    var Et = 0,
        kt = {},
        St = { 0: 200, 1223: 204 },
        Dt = Z.ajaxSettings.xhr();
    e.attachEvent &&
        e.attachEvent("onunload", function () {
            for (var e in kt) kt[e]();
        }),
        (V.cors = !!Dt && "withCredentials" in Dt),
        (V.ajax = Dt = !!Dt),
        Z.ajaxTransport(function (e) {
            var t;
            if (V.cors || (Dt && !e.crossDomain))
                return {
                    send: function (n, i) {
                        var o,
                            r = e.xhr(),
                            s = ++Et;
                        if (
                            (r.open(e.type, e.url, e.async, e.username, e.password),
                                e.xhrFields)
                        )
                            for (o in e.xhrFields) r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                            e.crossDomain ||
                            n["X-Requested-With"] ||
                            (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) r.setRequestHeader(o, n[o]);
                        (t = function (e) {
                            return function () {
                                t &&
                                    (delete kt[s],
                                        (t = r.onload = r.onerror = null),
                                        "abort" === e
                                            ? r.abort()
                                            : "error" === e
                                                ? i(r.status, r.statusText)
                                                : i(
                                                    St[r.status] || r.status,
                                                    r.statusText,
                                                    "string" == typeof r.responseText
                                                        ? { text: r.responseText }
                                                        : void 0,
                                                    r.getAllResponseHeaders()
                                                ));
                            };
                        }),
                            (r.onload = t()),
                            (r.onerror = t("error")),
                            (t = kt[s] = t("abort"));
                        try {
                            r.send((e.hasContent && e.data) || null);
                        } catch (e) {
                            if (t) throw e;
                        }
                    },
                    abort: function () {
                        t && t();
                    }
                };
        }),
        Z.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function (e) {
                    return Z.globalEval(e), e;
                }
            }
        }),
        Z.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        Z.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = Z("<script>")
                            .prop({ async: !0, charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(),
                                        (n = null),
                                        e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            X.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    }
                };
            }
        });
    var It = [],
        Bt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = It.pop() || Z.expando + "_" + rt++;
            return (this[e] = !0), e;
        }
    }),
        Z.ajaxPrefilter("json jsonp", function (t, n, i) {
            var o,
                r,
                s,
                a =
                    !1 !== t.jsonp &&
                    (Bt.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                        !(t.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Bt.test(t.data) &&
                        "data");
            if (a || "jsonp" === t.dataTypes[0])
                return (
                    (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback)
                        ? t.jsonpCallback()
                        : t.jsonpCallback),
                    a
                        ? (t[a] = t[a].replace(Bt, "$1" + o))
                        : !1 !== t.jsonp &&
                        (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                    (t.converters["script json"] = function () {
                        return s || Z.error(o + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (r = e[o]),
                    (e[o] = function () {
                        s = arguments;
                    }),
                    i.always(function () {
                        (e[o] = r),
                            t[o] && ((t.jsonpCallback = n.jsonpCallback), It.push(o)),
                            s && Z.isFunction(r) && r(s[0]),
                            (s = r = void 0);
                    }),
                    "script"
                );
        }),
        (Z.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || X);
            var i = re.exec(e),
                o = !n && [];
            return i
                ? [t.createElement(i[1])]
                : ((i = Z.buildFragment([e], t, o)),
                    o && o.length && Z(o).remove(),
                    Z.merge([], i.childNodes));
        });
    var Lt = Z.fn.load;
    (Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
        var i,
            o,
            r,
            s = this,
            a = e.indexOf(" ");
        return (
            a >= 0 && ((i = Z.trim(e.slice(a))), (e = e.slice(0, a))),
            Z.isFunction(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (o = "POST"),
            s.length > 0 &&
            Z.ajax({ url: e, type: o, dataType: "html", data: t })
                .done(function (e) {
                    (r = arguments),
                        s.html(
                            i
                                ? Z("<div>")
                                    .append(Z.parseHTML(e))
                                    .find(i)
                                : e
                        );
                })
                .complete(
                    n &&
                    function (e, t) {
                        s.each(n, r || [e.responseText, t, e]);
                    }
                ),
            this
        );
    }),
        Z.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend"
            ],
            function (e, t) {
                Z.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (Z.expr.filters.animated = function (e) {
            return Z.grep(Z.timers, function (t) {
                return e === t.elem;
            }).length;
        });
    var Tt = e.document.documentElement;
    (Z.offset = {
        setOffset: function (e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u = Z.css(e, "position"),
                h = Z(e),
                d = {};
            "static" === u && (e.style.position = "relative"),
                (a = h.offset()),
                (r = Z.css(e, "top")),
                (l = Z.css(e, "left")),
                (c =
                    ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1),
                c
                    ? ((i = h.position()), (s = i.top), (o = i.left))
                    : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                Z.isFunction(t) && (t = t.call(e, n, a)),
                null != t.top && (d.top = t.top - a.top + s),
                null != t.left && (d.left = t.left - a.left + o),
                "using" in t ? t.using.call(e, d) : h.css(d);
        }
    }),
        Z.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                            Z.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    i = this[0],
                    o = { top: 0, left: 0 },
                    r = i && i.ownerDocument;
                if (r)
                    return (
                        (t = r.documentElement),
                        Z.contains(t, i)
                            ? (void 0 !== i.getBoundingClientRect &&
                                (o = i.getBoundingClientRect()),
                                (n = z(r)),
                                {
                                    top: o.top + n.pageYOffset - t.clientTop,
                                    left: o.left + n.pageXOffset - t.clientLeft
                                })
                            : o
                    );
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = this[0],
                        i = { top: 0, left: 0 };
                    return (
                        "fixed" === Z.css(n, "position")
                            ? (t = n.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                                (t = this.offset()),
                                Z.nodeName(e[0], "html") || (i = e.offset()),
                                (i.top += Z.css(e[0], "borderTopWidth", !0)),
                                (i.left += Z.css(e[0], "borderLeftWidth", !0))),
                        {
                            top: t.top - i.top - Z.css(n, "marginTop", !0),
                            left: t.left - i.left - Z.css(n, "marginLeft", !0)
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent || Tt;
                        e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || Tt;
                });
            }
        }),
        Z.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
            t,
            n
        ) {
            var i = "pageYOffset" === n;
            Z.fn[t] = function (o) {
                return pe(
                    this,
                    function (t, o, r) {
                        var s = z(t);
                        if (void 0 === r) return s ? s[n] : t[o];
                        s
                            ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset)
                            : (t[o] = r);
                    },
                    t,
                    o,
                    arguments.length,
                    null
                );
            };
        }),
        Z.each(["top", "left"], function (e, t) {
            Z.cssHooks[t] = w(V.pixelPosition, function (e, n) {
                if (n) return (n = C(e, t)), Re.test(n) ? Z(e).position()[t] + "px" : n;
            });
        }),
        Z.each({ Height: "height", Width: "width" }, function (e, t) {
            Z.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
                n,
                i
            ) {
                Z.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return pe(
                        this,
                        function (t, n, i) {
                            var o;
                            return Z.isWindow(t)
                                ? t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                    ? ((o = t.documentElement),
                                        Math.max(
                                            t.body["scroll" + e],
                                            o["scroll" + e],
                                            t.body["offset" + e],
                                            o["offset" + e],
                                            o["client" + e]
                                        ))
                                    : void 0 === i
                                        ? Z.css(t, n, s)
                                        : Z.style(t, n, i, s);
                        },
                        t,
                        r ? i : void 0,
                        r,
                        null
                    );
                };
            });
        }),
        (Z.fn.size = function () {
            return this.length;
        }),
        (Z.fn.andSelf = Z.fn.addBack),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return Z;
        });
    var Mt = e.jQuery,
        jt = e.$;
    return (
        (Z.noConflict = function (t) {
            return e.$ === Z && (e.$ = jt), t && e.jQuery === Z && (e.jQuery = Mt), Z;
        }),
        void 0 === t && (e.jQuery = e.$ = Z),
        Z
    );
});
var $jscomp = {
    scope: {},
    findInternal: function (e, t, n) {
        e instanceof String && (e = String(e));
        for (var i = e.length, o = 0; o < i; o++) {
            var r = e[o];
            if (t.call(n, r, o, e)) return { i: o, v: r };
        }
        return { i: -1, v: void 0 };
    }
};
($jscomp.defineProperty =
    "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (e, t, n) {
            if (n.get || n.set)
                throw new TypeError("ES3 does not support getters and setters.");
            e != Array.prototype && e != Object.prototype && (e[t] = n.value);
        }),
    ($jscomp.getGlobal = function (e) {
        return "undefined" != typeof window && window === e
            ? e
            : "undefined" != typeof global && null != global
                ? global
                : e;
    }),
    ($jscomp.global = $jscomp.getGlobal(this)),
    ($jscomp.polyfill = function (e, t, n, i) {
        if (t) {
            for (n = $jscomp.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
                var o = e[i];
                o in n || (n[o] = {}), (n = n[o]);
            }
            (e = e[e.length - 1]),
                (i = n[e]),
                (t = t(i)),
                t != i &&
                null != t &&
                $jscomp.defineProperty(n, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                });
        }
    }),
    $jscomp.polyfill(
        "Array.prototype.find",
        function (e) {
            return (
                e ||
                function (e, t) {
                    return $jscomp.findInternal(this, e, t).v;
                }
            );
        },
        "es6-impl",
        "es3"
    ),
    (function (e, t, n) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : "object" == typeof exports
                ? (module.exports = e(require("jquery")))
                : e(t || n);
    })(
        function (e) {
            var t = function (t, n, i) {
                var o = {
                    invalid: [],
                    getCaret: function () {
                        try {
                            var e,
                                n = 0,
                                i = t.get(0),
                                r = document.selection,
                                s = i.selectionStart;
                            return (
                                r && -1 === navigator.appVersion.indexOf("MSIE 10")
                                    ? ((e = r.createRange()),
                                        e.moveStart("character", -o.val().length),
                                        (n = e.text.length))
                                    : (s || "0" === s) && (n = s),
                                n
                            );
                        } catch (e) { }
                    },
                    setCaret: function (e) {
                        try {
                            if (t.is(":focus")) {
                                var n,
                                    i = t.get(0);
                                i.setSelectionRange
                                    ? i.setSelectionRange(e, e)
                                    : ((n = i.createTextRange()),
                                        n.collapse(!0),
                                        n.moveEnd("character", e),
                                        n.moveStart("character", e),
                                        n.select());
                            }
                        } catch (e) { }
                    },
                    events: function () {
                        t.on("keydown.mask", function (e) {
                            t.data("mask-keycode", e.keyCode || e.which),
                                t.data("mask-previus-value", t.val());
                        })
                            .on(
                                e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
                                o.behaviour
                            )
                            .on("paste.mask drop.mask", function () {
                                setTimeout(function () {
                                    t.keydown().keyup();
                                }, 100);
                            })
                            .on("change.mask", function () {
                                t.data("changed", !0);
                            })
                            .on("blur.mask", function () {
                                a === o.val() || t.data("changed") || t.trigger("change"),
                                    t.data("changed", !1);
                            })
                            .on("blur.mask", function () {
                                a = o.val();
                            })
                            .on("focus.mask", function (t) {
                                !0 === i.selectOnFocus && e(t.target).select();
                            })
                            .on("focusout.mask", function () {
                                i.clearIfNotMatch && !r.test(o.val()) && o.val("");
                            });
                    },
                    getRegexMask: function () {
                        for (var e, t, i, o, r = [], a = 0; a < n.length; a++)
                            (e = s.translation[n.charAt(a)])
                                ? ((t = e.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
                                    (i = e.optional),
                                    (e = e.recursive)
                                        ? (r.push(n.charAt(a)),
                                            (o = { digit: n.charAt(a), pattern: t }))
                                        : r.push(i || e ? t + "?" : t))
                                : r.push(n.charAt(a).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return (
                            (r = r.join("")),
                            o &&
                            (r = r
                                .replace(
                                    new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"),
                                    "($1)?"
                                )
                                .replace(new RegExp(o.digit, "g"), o.pattern)),
                            new RegExp(r)
                        );
                    },
                    destroyEvents: function () {
                        t.off(
                            "input keydown keyup paste drop blur focusout "
                                .split(" ")
                                .join(".mask ")
                        );
                    },
                    val: function (e) {
                        var n = t.is("input") ? "val" : "text";
                        return (
                            0 < arguments.length
                                ? (t[n]() !== e && t[n](e), (n = t))
                                : (n = t[n]()),
                            n
                        );
                    },
                    calculateCaretPosition: function (e, n) {
                        var i = n.length,
                            o = t.data("mask-previus-value") || "",
                            r = o.length;
                        return (
                            8 === t.data("mask-keycode") && o !== n
                                ? (e -= n.slice(0, e).length - o.slice(0, e).length)
                                : o !== n &&
                                (e =
                                    e >= r
                                        ? i
                                        : e + (n.slice(0, e).length - o.slice(0, e).length)),
                            e
                        );
                    },
                    behaviour: function (n) {
                        (n = n || window.event), (o.invalid = []);
                        var i = t.data("mask-keycode");
                        if (-1 === e.inArray(i, s.byPassKeys)) {
                            var i = o.getMasked(),
                                r = o.getCaret();
                            return (
                                setTimeout(
                                    function (e, t) {
                                        o.setCaret(o.calculateCaretPosition(e, t));
                                    },
                                    10,
                                    r,
                                    i
                                ),
                                o.val(i),
                                o.setCaret(r),
                                o.callbacks(n)
                            );
                        }
                    },
                    getMasked: function (e, t) {
                        var r,
                            a,
                            l = [],
                            c = void 0 === t ? o.val() : t + "",
                            u = 0,
                            h = n.length,
                            d = 0,
                            f = c.length,
                            p = 1,
                            g = "push",
                            m = -1;
                        i.reverse
                            ? ((g = "unshift"),
                                (p = -1),
                                (r = 0),
                                (u = h - 1),
                                (d = f - 1),
                                (a = function () {
                                    return -1 < u && -1 < d;
                                }))
                            : ((r = h - 1),
                                (a = function () {
                                    return u < h && d < f;
                                }));
                        for (var v; a();) {
                            var y = n.charAt(u),
                                A = c.charAt(d),
                                b = s.translation[y];
                            b
                                ? (A.match(b.pattern)
                                    ? (l[g](A),
                                        b.recursive &&
                                        (-1 === m ? (m = u) : u === r && (u = m - p),
                                            r === m && (u -= p)),
                                        (u += p))
                                    : A === v
                                        ? (v = void 0)
                                        : b.optional
                                            ? ((u += p), (d -= p))
                                            : b.fallback
                                                ? (l[g](b.fallback), (u += p), (d -= p))
                                                : o.invalid.push({ p: d, v: A, e: b.pattern }),
                                    (d += p))
                                : (e || l[g](y), A === y ? (d += p) : (v = y), (u += p));
                        }
                        return (
                            (c = n.charAt(r)),
                            h !== f + 1 || s.translation[c] || l.push(c),
                            l.join("")
                        );
                    },
                    callbacks: function (e) {
                        var r = o.val(),
                            s = r !== a,
                            l = [r, e, t, i],
                            c = function (e, t, n) {
                                "function" == typeof i[e] && t && i[e].apply(this, n);
                            };
                        c("onChange", !0 === s, l),
                            c("onKeyPress", !0 === s, l),
                            c("onComplete", r.length === n.length, l),
                            c("onInvalid", 0 < o.invalid.length, [r, e, t, o.invalid, i]);
                    }
                };
                t = e(t);
                var r,
                    s = this,
                    a = o.val();
                (n = "function" == typeof n ? n(o.val(), void 0, t, i) : n),
                    (s.mask = n),
                    (s.options = i),
                    (s.remove = function () {
                        var e = o.getCaret();
                        return o.destroyEvents(), o.val(s.getCleanVal()), o.setCaret(e), t;
                    }),
                    (s.getCleanVal = function () {
                        return o.getMasked(!0);
                    }),
                    (s.getMaskedVal = function (e) {
                        return o.getMasked(!1, e);
                    }),
                    (s.init = function (a) {
                        if (
                            ((a = a || !1),
                                (i = i || {}),
                                (s.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch),
                                (s.byPassKeys = e.jMaskGlobals.byPassKeys),
                                (s.translation = e.extend(
                                    {},
                                    e.jMaskGlobals.translation,
                                    i.translation
                                )),
                                (s = e.extend(!0, {}, s, i)),
                                (r = o.getRegexMask()),
                                a)
                        )
                            o.events(), o.val(o.getMasked());
                        else {
                            i.placeholder && t.attr("placeholder", i.placeholder),
                                t.data("mask") && t.attr("autocomplete", "off"),
                                (a = 0);
                            for (var l = !0; a < n.length; a++) {
                                var c = s.translation[n.charAt(a)];
                                if (c && c.recursive) {
                                    l = !1;
                                    break;
                                }
                            }
                            l && t.attr("maxlength", n.length),
                                o.destroyEvents(),
                                o.events(),
                                (a = o.getCaret()),
                                o.val(o.getMasked()),
                                o.setCaret(a);
                        }
                    }),
                    s.init(!t.is("input"));
            };
            e.maskWatchers = {};
            var n = function () {
                var n = e(this),
                    o = {},
                    r = n.attr("data-mask");
                if (
                    (n.attr("data-mask-reverse") && (o.reverse = !0),
                        n.attr("data-mask-clearifnotmatch") && (o.clearIfNotMatch = !0),
                        "true" === n.attr("data-mask-selectonfocus") &&
                        (o.selectOnFocus = !0),
                        i(n, r, o))
                )
                    return n.data("mask", new t(this, r, o));
            },
                i = function (t, n, i) {
                    i = i || {};
                    var o = e(t).data("mask"),
                        r = JSON.stringify;
                    t = e(t).val() || e(t).text();
                    try {
                        return (
                            "function" == typeof n && (n = n(t)),
                            "object" != typeof o || r(o.options) !== r(i) || o.mask !== n
                        );
                    } catch (e) { }
                },
                o = function (e) {
                    var t,
                        n = document.createElement("div");
                    return (
                        (e = "on" + e),
                        (t = e in n),
                        t ||
                        (n.setAttribute(e, "return;"), (t = "function" == typeof n[e])),
                        t
                    );
                };
            (e.fn.mask = function (n, o) {
                o = o || {};
                var r = this.selector,
                    s = e.jMaskGlobals,
                    a = s.watchInterval,
                    s = o.watchInputs || s.watchInputs,
                    l = function () {
                        if (i(this, n, o)) return e(this).data("mask", new t(this, n, o));
                    };
                return (
                    e(this).each(l),
                    r &&
                    "" !== r &&
                    s &&
                    (clearInterval(e.maskWatchers[r]),
                        (e.maskWatchers[r] = setInterval(function () {
                            e(document)
                                .find(r)
                                .each(l);
                        }, a))),
                    this
                );
            }),
                (e.fn.masked = function (e) {
                    return this.data("mask").getMaskedVal(e);
                }),
                (e.fn.unmask = function () {
                    return (
                        clearInterval(e.maskWatchers[this.selector]),
                        delete e.maskWatchers[this.selector],
                        this.each(function () {
                            var t = e(this).data("mask");
                            t && t.remove().removeData("mask");
                        })
                    );
                }),
                (e.fn.cleanVal = function () {
                    return this.data("mask").getCleanVal();
                }),
                (e.applyDataMask = function (t) {
                    (t = t || e.jMaskGlobals.maskElements),
                        (t instanceof e ? t : e(t))
                            .filter(e.jMaskGlobals.dataMaskAttr)
                            .each(n);
                }),
                (o = {
                    maskElements: "input,td,span,div",
                    dataMaskAttr: "*[data-mask]",
                    dataMask: !0,
                    watchInterval: 300,
                    watchInputs: !0,
                    useInput:
                        !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(
                            window.navigator.userAgent
                        ) && o("input"),
                    watchDataMask: !1,
                    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                    translation: {
                        0: { pattern: /\d/ },
                        9: { pattern: /\d/, optional: !0 },
                        "#": { pattern: /\d/, recursive: !0 },
                        A: { pattern: /[a-zA-Z0-9]/ },
                        S: { pattern: /[a-zA-Z]/ }
                    }
                }),
                (e.jMaskGlobals = e.jMaskGlobals || {}),
                (o = e.jMaskGlobals = e.extend(!0, {}, o, e.jMaskGlobals)),
                o.dataMask && e.applyDataMask(),
                setInterval(function () {
                    e.jMaskGlobals.watchDataMask && e.applyDataMask();
                }, o.watchInterval);
        },
        window.jQuery,
        window.Zepto
    ),
    (function (e, t) {
        function n(n, i) {
            n = e(n);
            var r = n.is("body"),
                s = n.data("LoadingOverlayCount");
            if ((s === t && (s = 0), 0 == s)) {
                var a = e("<div>", {
                    class: "loadingoverlay",
                    css: {
                        "background-color": i.color,
                        position: "relative",
                        display: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                        "justify-content": "center"
                    }
                });
                if (
                    (i.zIndex !== t && a.css("z-index", i.zIndex),
                        i.image &&
                        a.css({
                            "background-image": "url(" + i.image + ")",
                            "background-position": i.imagePosition,
                            "background-repeat": "no-repeat"
                        }),
                        i.fontawesome &&
                        e("<div>", {
                            class: "loadingoverlay_fontawesome " + i.fontawesome
                        }).appendTo(a),
                        i.custom && e(i.custom).appendTo(a),
                        r
                            ? a.css({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            })
                            : a.css(
                                "position",
                                "fixed" == n.css("position") ? "fixed" : "absolute"
                            ),
                        o(n, a, i, r),
                        i.resizeInterval > 0)
                ) {
                    var l = setInterval(function () {
                        o(n, a, i, r);
                    }, i.resizeInterval);
                    n.data("LoadingOverlayResizeIntervalId", l);
                }
                i.fade
                    ? !0 === i.fade
                        ? (i.fade = [400, 200])
                        : ("string" != typeof i.fade && "number" != typeof i.fade) ||
                        (i.fade = [i.fade, i.fade])
                    : (i.fade = [0, 0]),
                    n.data({
                        LoadingOverlay: a,
                        LoadingOverlayFadeOutDuration: i.fade[1]
                    }),
                    a
                        .hide()
                        .appendTo("body")
                        .fadeIn(i.fade[0]);
            }
            s++ , n.data("LoadingOverlayCount", s);
        }
        function i(n, i) {
            n = e(n);
            var o = n.data("LoadingOverlayCount");
            if (o !== t)
                if ((o-- , i || o <= 0)) {
                    var r = n.data("LoadingOverlayResizeIntervalId");
                    r && clearInterval(r),
                        n
                            .data("LoadingOverlay")
                            .fadeOut(n.data("LoadingOverlayFadeOutDuration"), function () {
                                e(this).remove();
                            }),
                        n.removeData([
                            "LoadingOverlay",
                            "LoadingOverlayCount",
                            "LoadingOverlayFadeOutDuration",
                            "LoadingOverlayResizeIntervalId"
                        ]);
                } else n.data("LoadingOverlayCount", o);
        }
        function o(t, n, i, o) {
            if (!o) {
                var r = "fixed" == t.css("position") ? t.position() : t.offset();
                n.css({
                    top: r.top + parseInt(t.css("border-top-width"), 10),
                    left: r.left + parseInt(t.css("border-left-width"), 10),
                    width: t.innerWidth(),
                    height: t.innerHeight()
                });
            }
            var s = o ? e(window) : t,
                a = "auto";
            i.size &&
                "auto" != i.size &&
                ((a =
                    (Math.min(s.innerWidth(), s.innerHeight()) * parseFloat(i.size)) /
                    100),
                    i.maxSize &&
                    a > parseInt(i.maxSize, 10) &&
                    (a = parseInt(i.maxSize, 10) + "px"),
                    i.minSize &&
                    a < parseInt(i.minSize, 10) &&
                    (a = parseInt(i.minSize, 10) + "px")),
                n.css("background-size", a),
                n.children(".loadingoverlay_fontawesome").css("font-size", a);
        }
        var r = {
            color: "rgba(255, 255, 255, 0.8)",
            custom: "",
            fade: !0,
            fontawesome: "",
            image:
                "data:image/gif;base64,R0lGODlhZABkAKUAADQyNJyanGRmZMzOzExOTLS2tISChOzq7ERCRKyqrHR2dNze3FxaXMTCxIyOjPT29Dw6PKSipGxubNTW1FRWVLy+vIyKjPTy9ExKTLSytHx+fOTm5GRiZMzKzJSWlPz+/DQ2NJyenGxqbNTS1FRSVLy6vISGhOzu7ERGRKyurHx6fOTi5FxeXMTGxJSSlPz6/Dw+PKSmpHRydNza3P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IJO1SEEBAosJFSa1ar9jswQQBeAEgyyFLLpvNL893DXC9zvC4XDggsb+EwXzPtyZAd14gCX2FhkQRgIEAIYeOSAMWIgoxY1UpioEpj5xCFx6ZACQVH1QjFIt5nY8PIV1sKCtUaYsOpVcfb6tWM6iBJlUnJqEAJidYKxYaFbq7SSXEXxQPVQ8VEjBQFVNXDypeKCPOSR8ZiwAox50rLF8Z40kV0V7Tqw8WXgQT8EgzDIvAdm1I4WFAM35EPqSAcYeAul25ECZ5EYPAGgH7JGo08mFACAcOChy4tbHkkA8PDppcybKly5cwY8rc8+HEiBYDRs509qKF/goCCAhIaEBy56MBFtcQaGCU04ukbFgsaErlQAQFETZgGbAIRAmqEx0oskDNirlFMcAieWDHCwtZVkqce6fWyAMBXyQ8pHKCYcOMdROOEIBBQIssAQI5KBs44YEWcLGcELvGWONCHyZ40OBhQtHLoEOLHk26tOnTqFOrXs26tevXEj+0MCFDBTPYSi64QPAFhgFLrl8c2HCC5IsUvNeAiMB49YsCFBCwICrkgIRABICvboEBz1QaC7oHmuEa1JdBQhZAZfOdtXlBdE8oCERBa+tTX94KeZ58TYjPqfWkAAsaiDPEcX6B4UFzrV1wAoNCbBCCCSG0h9uFGGao4YYc/nbo4YcghijiiCW9sMEMG6i04QsjKKCICICJ9sACE6wAoRILcMAGBRZe9kIIDKDAQALcWBGCYgDWVcIrACBQQpJHtHOHAHs1dt0aGhRJhZRR2QeaCGwooKUSBgSiwY1qRcBGDCpCkqAgh4l2wpUAKOBlFS9UQIEiBFRQ2gsDFKAHGR8skEAIKSwAJYmMNuroo5BGSkSbHa6wmQEljNnJBzOMUGVJMxCgCAwWfOrIARpggAIFBSw6zgl4sZGAq3uc8M0ag5bUAApT0jrHAG8CoMFKBfQnDZp9tDDlSh3wyoYEvsoxgrNfOLDSA2Uq5ycuKzQAGaVHnOBCJrGwtEKsUwDAEAOyRbyQgQAoIMBBAeAasUEMArBgQq4rndCCB4myWwSwa8DAbzXDPRBtU/M9++E/O35I5xcCfNgAMdt2+EACe4JAAZsgvrBABRUsUK+knAQBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8gk7bNKaVSx2UtJrVqv2CytwgJ4AZTCVEsum7ED0veLaJzfcPhDsV4LTvG83jpR170oLXuDhEQdBH9eMBVXHwcHF4VnLwMJGQtXfYkAKB1VlBoMFAIekZJYLxMUXiAQBitVc5sseEovATB1LBMfp1Yjq3UyD1UtKH8gBVUNIIkSsL5KDxabjFQfBYhfMCljSQ8Cm8m90UgzXYkaVi8LMSoKIVJVExibACbE5Ucj2n8CvsbsScinr8gCBpvUnaJnTwPBgkMeGNhUwtcDdIlSkINI5NyfgdE6NPt4gOORCQJycbKwodyHEMfszDCJ5ESDFClGPLTYwgT+i1EhWtIcKu3AhhMbiSpdyrSp06dQoya5sOKEN6kcTyRQIEBGgFpYC14woRIACAklw+oLkMjATrVJUhWQ16jfGgoT4Fb50AIRCmtWLoysE0gvlRfUvGi4agtCok6GbYX44iApFTr+hEau6YKFAc1WOsT8Mm6zLataXlQIZrYEY9N6PjwYkKLFBcuwc+vezbu379/AgwsfTry48ePIk1950CFFA1PKr6GEQJ1ChdfIcS/gUAdDC9zFHzTI0ILgiwiDv6iAjjxFLgQJhpzQkIhAWuQXEHohkO8C/T8UgGbcA/qBkc956SnG3nHuAcANESuEs0Yg4BH3QgsFlEfEBzP+CNAMCAR8F91eM1QwwVsjpqjiiiy26OKLMMYo44w01gjXBy/kWCGLFxQgAgEsxADWbw9AosUDISCwhgUowvbBBBYoYMEA2CExgZJrwFCRb/l9wcJMV0SQiAm/ZVBHDDsWMdkfGqRpWAJ1hFClEQ0kEsJvE5S1CBYbSFAHAQLq9kIMx4AQQ5NIrKABCiDAIAAmwX1wVBkPTFBBBwvaqOmmnHbq6aegKiHpADrR+EIIBCCAggILuKnHCw1IwIADgQ71QQx1iABNNC806AUFmdJ0QoFfaFTOASLUkUJTE9jlRWXlLMDas01tQKwXIbgKxwEy1KFMUx78mRcWJ0wwwgFZ2grxQQn9CIBoVgqMRIAYjUxgAAkkKNDBnEY80JMGMdRK1AW0FbABv0WcgBEABOy63APpGlbAHx7IKGYdZMZY55kynuDnFwHOeIAHLLDgAKQzvnDCwaEqFQQAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKTwMqtUZheldEqtWq/ClQMDAMBMC6x4TMZeZKCuWnAou9/wGERN93zg+Dz1JaHTWSd6goNEJwJ+ahQrhIxJLxuBVQ8iiF0sG1QPJSYqHhONZh4YIBAsJQ9UEWmIJlQTHH4BkaBSJxZ+MCl3tYd+BItSGwyIICGotEoFMIgos0ozGnQCA1QhlQAUn8hIDwbXBVUnAyEhLSe7Si8s1wAF6NuFMtceoBcE7DEv8EYP0ZUpoD6s+7bPyIcEq+iAaAPKwzUUIwry8+ZHF60TFCqF0CexyAMHLFCgkFDhGK0BAhKC8BClo8EFA0Y4o/VhRQoLCjw04Oiy5/6RDw8u8PRJtKjRo0iTKh304cWDB++W7jtQwoUBFyU2RFXyYUIICwFabJX6TMGyLiAUaJvyogSFOQBQxCBb5YCChGpYmFQyAAGuDHSlvFA1j8otRApaBj5yQt41FoqTwELEIsziIxsGVvo1hRJlTJeNHNCMiABoJTHwdnEwNPQSE+wktD5yoA8dCpZdE/nQAsW1FlRqmlglIbduIg9CqAbA2grQE0+PI+FNAQYIGCwK7JWe58GEFiMicx9Pvrz58+jTq1/Pvr379/B9PtoeX8oFUTAQmFgxtj6RC7BJA4x/MPFHRAtcKJTAbO3NwAEGHMwwxAcxVKIBfe05oIYDRP5UiMiF/mm42oEJ0pECg+zNEJIAEg5xwWFrnFZfgVFdEAMB1zmglX/BncPjj0AGKeSQRBZp5JFIJqnkktx90B+RLyxQQAAVGHjkCw0M0wWL6b2wQgvGUZGZH7KdxxsLBHDQwBUNIALDWuRNEqMVKbgJnHkPZGRJmHyphsKA5L0QQBogOIAhEhf4syGKx52QggYxiDfFfQSgQIAHhwr5wQIj7Mjkp6CGKuqopJZqxQMrMKRkBwJggIEBgNLkaAAdZCrRAmd1IYGqtKiIlgtIueAHCHfS8oIHKvHqk2N0ZPBkHon6USxRDilEDTLJKTRTTyvco4YG23J1gY9XLHCXF08hJNWCCRRQ4IGMU5yQgAIyhKDsFDal0IKtEn1wwQYb8OtRAHCBYICkQq6QaxfXGjkDIhUguYFvaoDAp5AvxHDWSgL790IFJmignakk7xMEACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ik8HVaLU4vpXRKrVqvy4KKRFBkHtiweBxOoABoACxEbrvftMU5jYaN4Pj8NAKipy16gYJDJn5pEoOJeR6GaBpWJy0VM1GKVi8jFiwCMRsfVCMIhiANVCcBcyAsE5WWSh8Vc2giM1UOfXQarUkvFrhpJAOuUjMMhrpUFzEUaCghB1QTv7kXw0kxEKMnVS8bCxMbYFQBjQAEE9ZIjI3oihrlMB3pRzHTaduKDuUEd/NFEwQMsfikaEA5Afj8DfmQIVuac65evPODooXCIxUUsGDhYIG1Aw5kUahwEcmDDQd2uXowIEaMAh5LypxJs6bNmzhz6tzJM8/+hwUNSlRYoHLKiwElOlTrWeVBBhYw1LCIsZTKCg0EYKAQsYLplA8JRNGBwIbKAQl+KGzwqqRDwEbCpjQYFYEtkhchygFwQCXvMYJ2iVwoVA7RnkaPAhd5oK9wtKh0QJBUTORDCntp6k55EAIyGhPiKA9ZIaARCmjJCghAMTWhaCEfOshCA2FylQ8vHrwA/HrhBhMEUBDQsIB3bzgXNrg+zry58+fQo0ufTr269evYsy+ZUCJBgRnGtRtRxgAGBBgMElR90cGABBNEs58wYA+EhW0vEnjGUKGo9AKYAQBCATRMwAwdAqx1XWnliEBDBvbAYJF1L4jVCAw0pOBQGhL+XveCZ4ZgOAAJfrAQk3UMNiIADZz9AkIG/kWXgl4pCPFABQIQIMEAoVl3ggKNKLCceENsYIEsCDigIJFHsBSDByEMEB6TVFZp5ZVYZqnlllx26eWXrlwwQQcjDHnlBi6cAYMGSzrHxJRK4LUhACZAB5IA911xQIrNtNkbXn2A4AKcR6xwIIe1NNdLGirEeMQFKqTVY2+wqEmgFZWmAcKEzj0wQgEjTErFAhpQoICUYKaq6qqsturqq7CyekIMMijQgqOC4KYbTi/IkAYEMeCax1EahWDmRQbRwUJXwyzAILA3zUgHDO240gIGh9zUQYknWrIAC2mUVdMLaKEBQgpXwuLxQQkicHTsRRuEoIAGBVRFxQcTRBDCCOka0YSoND1wwgWEHhEbBRCAQEADBYt3QrloMPAukQccqgZqWV7gaxosTCzewSAoXEHDRC6QQAzFxaqyJUEAACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8jk8HW5vJTQqHRKrQ4/q5jBEFt8rOCwGDzjgAAAEGsybrvftJcETQdwHvC8PjqA1dEgLXuDhEMlZ38gKYWMeg0Qf2gFVl+NYActIQkzeFInFJEoJ1IvAyowICQhF5ZTKxKIKKtTJSh1IJNRHw0EfxajrUovGn8wJZVQLxUKKCgKFZ1QD6CJGcFKAxiREk9SHxcbGyfIUB2RaAqs10cFCJEE3Ywp5wACG+tHLbZ/LPGFDfQkAMNH5AKHSCHIETrhJ5IHfwSFzOhFx8RARh8yNKQj4GLEIQs8KNBQIJqlBxkEwIBBQMW9jzCPfNjQocIEkzFz6tzJs6f+z59AgwodKuXBggkrcE45sAAiUSgzTHCgwMHCBIVKTgSgQIJDCqxPjUxg8YfBjCkXVPyJADaskAMizlFwemQAIjoEDrhF0mBfpAFS5hUDvNeI4HMxpBSIBINN4SIZ6AHIBWUFRTrcHhcZcPnPAlIFLlNwrHnIAwvnNFB5MSGEgxReShfZoOCPgBWUPrQt/SCFAgoSSsoeTry48ePIkytfzry58+fQoxN8sWDECrrSxWpgQIKFhs8FWySoMC76iwLa6pCoUIk2xxHRZ6T/QwH3C9R1FHhcHkFyAhorHFQHAfA9Vxs9qi1A1oCEOSeDZKo9YIJtej3ngWQhSLQgACj+tLDbcX2c05gQM8VgggcbYJfcCyHcBUgKKkp3ngAowIACBxXEmB0NGwxQwQD77SjkkEQWaeSRSCap5JJMjvHCDAM0teQHHQhAAAoYSNCCjkV8cMAKG3zo1gMxQLKWmEtUIAMLEmTAJVEdzFcHBA2WcxkMHRB3AX6poXnaHxIQt8GGkVBQoRIXEFMHC4JScw4BLwkTwh8OEAeXZBQodcQCAuAVaWksSlbpFA8U8FqQj73yqKY7jjBHHQKQduQGKWgggQYphDnlAxc8gGaTwAYr7LDEXkNdASVc8KseH7yJTwJmroHPASkEMICzrVzgFwAOsDrICw6gQYKsOS3wh35d16ywoTU8XWAmGiZ4u8cDagEAQ4E8hdAQC3W2soIJCpQgL0EXVOBBCFeB8QK2XQ4Mk25goMQCC24y2YI7HAqi5AcJ1JHAstA10BAMGiv5QAIEUJCAw0I2W+zLOgUBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ikcslsOp/Q5WOQSAwe0ax2q724SAAQyYPlms9oWggEaIdj6bi8+cC43YTyfM+nLWB3bRAbfYVyB4CBMCeGjUMXAxUtBy9PKoEAGk4fBykqEh4TH45NByqJAh2VTQssdyyErDJsbSgNo6RJLw6BHCubCyEaGjELuEsvFrRuDAu5SQtggQXHTB8XJ9VLF4l3IHDPRx0omCHaewuYbQ7hRxvSdxWOJ8t3Ie1Gu4Gwjh8imDAG4DPywAQMEDAkiCI1gUKgGOcGflhRYYKefhNMUKAgIcXAj0pebFhwISLIkyhTqlzJsqXLlzBjSrlwUaajBxkMqDBQ4UL+lA0BNIQ4YJOOgW4IPPhs8qEFATcIJhQN6aBem3tNTly6I2HVVCMzXGEiYLLICjt3UBD9aqQFWkyMmKx4mjYuWyId6GKqieSBhUCa7hbZ8A8TiyczFNCS8EswkQ8prIKQt2lDixgtNpT9+iDGMhAp+FpznOTDhhgOUmQjzbq169ewY8ueTbu27du4c+vG9+KE193bEkgQoCDFbxovDmygtPvDBAnLIGhYS6OzHRQR7N4+IUOdgzIlusHwmLuD1TYEnL3Y6kbB0tsR1LXpgFxBIAnaaweQD4CyZ3vH0VaBfDBIRcMJVbVhQiy4bSBWIO4N8cAMFYlGW1N6tcHCDMD+KTGDRgRQ4ACDHSaxwgQHbFbiiiy26OKLMMYo44w01mgjEheEIAAFAiSQXxMvPBCgYx8M4NArBjoRjAUhzKCiTSsUFogAFhqxwixtCPCeYy8kcF4bLTAV2R0FtHaBAfyZAGR8d0TQmlb8KeBEBQjcIRBrD/AinwdOeEELGa19UEE3gYwAxQYVaPbaAy6cxyeMJ3hATi1KyThFAh6kYFGNHzx546egXvjAAQesZmkHDgyngY8xfhBBhiAY0FhKQb7gKRoNQKCOCVt+dEAIDCgwwK1cXPCgIregFAEtAsxayACTquPBkOF0Vwt9jRRQp3wmVJmLB26w4EwjLWzrHbVTz2xgAgsCVEDsFiccG4i7KT2wAHWOpCCfBCSyNoMLHoxLhwljLeRaK1n2q8QDFQhAAAoiesvWOOgZCsUDG8xQkmwIA9AsjR+MoIEJBodq8skDBQEAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n9Dla1IqLV7RrHarfUQoMASrhOWaz2haAQJoA2CTtHzuZLndGrp+X8Tc2wJ8gnoCfwB5g4lDHxcbB2VOFWxuMAtPDxMpEQMnik8NKhwiKReXKSwwMAIVkEsXAShtICoHnkwTfm0wEQ9PLwstLRutSh8ZMH8mxLZFGn8EM4oPhX8o0cxHL3Z/A4ovsX8wDdhHHzLhcYkvFIYoI+RHDX8KnYkfAYYCvfBFHykEMFBo2GDrgAYQbggQ5HfkxABL2E4U0KDAw0KGGDNq3Mixo8ePIEOKHEmypMkPExIESLEiy4cBBWYsM3mkAAEIICBwaPHhyf6Kc20UlKKZpASyOyjSMXkRAKGbFESRXFBgCIADJyck/JER9ciCbX8CNTlB9Q6irkRWUAvr5MUxNyBaoC3ywETVGE9OhABDIcbMriMI/GFxscmDBRNW7JtL5MMIsBJm9GQ85/CEYZQza97MubPnz6BDix5NurTp06gZTghgIUZhIYxODD19wgUCWRgKtBqggoWKAZNJvwgxyQ0GnkJWsGvD4hrpDSSqahgaozgIvKVHVAVAYWEIpwBAhDDdYTsFiCNyAXBnegG4PxLqvSjAAAYFVqYfuDAEokLwDydscEJwpa2gAHggBLBYakY8UIACAmggF4MUVmjhhRhmqOGGHP526OGHIG7xwgABmBDBCgReeIBdlHgwmxMrDHBAinNdYAF4skQARQMCECCBUpR1oB5SCyqhlhsy/EXTBzFsB0A3TczAgBssFNnVcE5WgJUBsoSg5EkZ4HgHkEtsEIICMdST2QzLPUMjgwW810ZSGn5QgQAogICCAgN8idoHBwzQwgRqhmjooYiW9sIDfqb2wQoFeOBBAu/U2YEAxZGQQaO2fPDCm3xsIFg1BYCKzQsteJBBoYJ8wGVVArSk0QC5BMCpGSdEVxUME2bUZBscsLrHDEP+UcJGLUyiTF4ZCIAAAjJU8CISom4X10YPZKCAA68pcUBZcFkwrREfqLAdC1QQYWtqgw6IGV4Efk5w1B9+BTmqIectYYycAHhgZVQROAlCAU2YKQALJkBJ2T0CJ3BhwNYSbGEL9z5DZmp1bRfAuqVtAK4bJoxL4QYpCBCQBNJqFAQAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n1Dma3P6RK/YrHZhEYhCB614TB4eOCAAAGS6lN9wZ0RNBwzi+HxRU1cn9IB4Ln0AFYGHRS8XD1EzKHUUJ09TJSUDjIhOKxEaLgMvkxUCKCgKE1ZNLwUUajAumJlKDyJpABQtqE0fGy0Dkk8TJH0xsUsZfQq/gR8hhJHFSSZ9LCuILxaEBAvQSDF9EsqAH97TbtxGJwx0MCm5gQssfSnnSCsmBBK4sR8zIjAwKEKAokcQyYMBAza4K8iwocOHECNKnEixosWLGDPSu9ChxISBUR6E0dhkgQAMMEiYGOnkQgQYAAhkAEnSyAJhdZI5+VABwf66DTWPfPBQiw6IO6k89CkQ1MgDFYQAEEsVoI+hpkReQCU0z8kAdWoomMM6JEXRVtt2ttAgwcQpskROGKgDIgQsJydO3IUr5EAICigEFNjLV8yHDw8OF17MuLHjx5AjS55MubLly5gza05ysMGChZuHvKhAAQYEGAqqEXnQosCnyx8aYPjGkkYEnxhKXD6xlW4GVBcI0OFAU/KG2YRMYApOh0XxyBseJR8bAgIAGEwtn1AQNUauCyVitHge+UUJmHVYACWiOLMq4WoEfA595ESBFANA09/Pv7///wAGKOCABBZo4GMfXDBAATO8oN9mDxTgkxocjBfFCyeQ19QLGf5MSAcBE0CxggYCBBAOWSsIEJUGk0izxm+FNSBdHzA8aMQF3KnhgYYkVYAeIYQh8UEGMBHQgY0aDYBTHwRA8cAIDAYZFI5RheBfin208d8GDgjAggQpnMjfBwcsIOaBaKap5hgYHrCBlKGtEIIMLIjgCY9xKFhABi2cec4IEpxFQAJIlrGBBSRAAAIGMqRV0AqBEgLDCIc8IMNZAHCgGj0vmBUVABLgOcYxUZkgKiAX8PEpCuvpIcOnAmzKzQUifAoACkjpwUpUFIS4kapRoSCrQRMEoIABMSxwKg0SfKoeQZ1iSocAhT4Qg4cAkFBCoTQU8KkDcCJi0qctMEEkIWsYULrECSoyOQNDHyhJSAiFbsDBpxpwu0COaoDILSInOEABAQSokB8TFczYBwWOKvHBBDHE0EG43Hxwwga1LVHAj0yqG5qMn2qzn72fKrCsZOf2gYKv+z2QAHxhXdXfCxN4IIECMazwbyBBAAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IpHLJbDqf0Kh0Sq1CLxmNpfWyer/fiwkGAKBSXbB63RyAymXCgU2vFzNw+MbOp7fyADBzfYRhCm8AICFpTg8HGxcfhU8XLSkle1ArHgIKKSdPHwsuHCwmI5NOLiiBGitRLyegUAcKeRSDqUkLEHAgMZKFDYhwEbpKFYAmD4UfEYAAGsdJM4CLk8nW00gfJnACC6kbAnkoudtFDxUeFSfBzSsKKCgS4ej3ShsbzPj9/v8AAwocSLCgwYMIEyr092LFiFcLC71wQQEDhQCznhyIoCJBxohHXnjLY+LCkxMm3oCIwAhkkQms8oCY8WQCg2/8XBYpQQZQ/oUnKzjAUdBSp5AWPfO0CFWCBQoBE4wauSACEItzTEQN2PBO6pABLOBQaNHVqxVRBTwUWFDW7JcPbd3KnUu3rt27ePPq3cu3r9+/gAMXeXGgqGAiHzaYQACDRIqcQkR1gOh3BjlfASAP4IBBAOW9D0IQizOAiAE4AfxesAUIRAYiGuB4UM1a5ushI5x69hsaGoHSQ7Rmqhw2jwPIh2l8WKEBBogzyJMPcWRYuvXr2LNr3869u/fvgU+MqDAhevIHGRigQNC5Q1ydLy4cePA+5Mg8EBKYj/hhgoReCLjAVRMFQEOaWSPc5IsKHyFBlYFleLBfQg+c1loBTMxAAIQA/gjQYEQzFAeIAkxMsCGEAmAVkU0GSsDEARRwqMGHC50ggYEOMCEShynUh9AHMYwWSFRMnBAjNDOa9UIAMQFAQAM+EjGAAKO5ItcHLXhgQghshbJBASZo4EAFJmn3wQsPvBAleGy22WYs9G2njgcGOJDBgJMkNsAAK1S3zQkuIAAHBBIQSQgWIpBAAAcB+KnLAy70YlWZfDiTVCIWTDjJABhAGAMhKwgZSAn4vBADhwIQkgCEJqxpxwsecEgAIS5AqICmfZiKahMfHNBBBAlMEEkTpxpogqOFDNAkIJ8y0YJQZUCggT1LrHBpGSD8hM8FDohKAI0vHZmHBJQm8UEAWEIu488JDgDCACpL7AgNCCk08UAKR8IQQrn9DOCABBqUgKsQCygIjQKuCqFPwghNQAKKyO61gsEjMmyXvNBgaN0KIg41MF8DHBKtCcNZ98EJA6RA3seEBAEAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n9CodEqtQj+TSGZl7Xq/rwIBAmGNvuj080QCuAGah3pOL67ebtapzp8fMHgKF32EYCkEICAUA1EfFycvhVEXK3tRLwMhMQsfUCcZKioRB5JOByYcEg2lNA8RMG4gGqxMDm8CXJIzbXgTtEoCbwSMkiMQeAAFv0kBIG4CpJILFMi+y0cbLhQKI52SD81vCt7XRi8PD+TfFQoSKZbl8fLz9PX29/j5+vv8/f7/AAMKpPJhgAEOFhZIeTCiwAw5A498SICHQAd1Sz5kgGURY0QaB3i9MQCPyQUFbzxE+khkAAJkLKI1eWHiTQqPEWegQCahJP6TFRoEeBjEksgLFXhAxFj55MUFpkWHLFDgDIUHn1GtnBjQYgLErGDDih1LtqzZs2jTql3Ltq1bGi86RNA0AupbIgc8IAKgKALWtweoIgNggmjaBx0EEBDRYmWEwW+UpX0RA5YbGAnkMIDsRoLaCZvxUJhBwxlnFGorHMMDowSN1ZAJpLb8pjUNFpwByFC7gAMyCgpT5K6gNgxtEAU6ndAA2cRXtC8mBNUwgNwJB3sBEAhh+K7RASliFJiA07v58+jTq1/Pvr379+wvbHie/sMMAxQIMHDw9+OHFwCWh0QBO4lGXlYHRMACARJU0J0SKwAymAQbRLUcHgjEQB8SHv5wBoFkLCUAmxsYKLTEC8FwphJLR0GWARMv+MaZAxsC9ABKg8XQBHOcxSBgPx90OBgxS7TAGQFnFLUAAcgo0J8RDpj2BggvZjUBCyiAgIIJFTpxQQgUmMZCAXaxdEEL4/14xAsLVFBACyuoCd+cdNZp551CzFBAAimMUGMfJ6xQZjkfFMDAaiRcJQkWLsjAgQYd0PNBCRJO6cKgagwQ2mUVyNnHBiJwZiIfD2wqzKjXdFDgYCEQsoCUtaUgj2ozEtIBZ63GM0ClyOjYxAMbzLDCAZgasQBkyMlzgAScdbnEBgGQkAgLCTyIxAfMwuTsNR+0sGpKcl6AFB4QBODEAFi41RbpPJgwGYtfTWQwohsooJrEBwt4wAIFDhxYzwMDvPmnER/gOFgE6D0QKmQeoPcBjzmm1wCs9G7r3QcO0AYADMSp90AGChBAgQaNsffCCRtscIKnhAQBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ikcslsOp/QqHRKrUofL6t2yxVeQiRKKtstm5efAgwAQHTO8PjwFWGzM/K8+VOCsFFveoJbDzEULAVkUC+Kg08vH1SQUi8jMREtD45NDwUqDhubNC0sbBgJoksdCGwmjXknBnYAMK+pRDF2HCeOKwKzAKG3RwMEbB62cReydijJwy8dHgW8jh8DFGwgBcNJH5OiHycFBQuR3ejp6uvs7e7v8PHy7y8PFw/n84MfKykmMhYyCNOnZ4AAP9oUzCAIKxswAAoOMFxyIoGHFs+MfLDw0E6MfBOLzMBgR8JAJQcYdGSjoFrIIhpmgYiRccgMYytZnHxJ4wP+CWAmLjBZ4bCjgJ08f83yoGnJCwUrAThoynNIHzsEBjhpAaIjCq1VibyIIYCCAoxOPnjoOCZskQ8HFpwAyeRFBQEwYCAQMICuWy0PFgxYUfOv4cOIEytezLix48eQI0sOe2JAgwEuJyt50UAEARQkZKDVjITOmlkIEhRG/GJFAAspJAoZgMLrwsgfKuAEIGCFkABRQ0hewQGYgywyoiqQ3KL2LAESoa7UILmDczsCeOVamULyBgnAPES66dU37gGl2Gio9qLA9T8VVh+GWyAG5iITFFAgQEDDbdJK8DPBCn4BaOCBCCao4IIMNujggxBG6MgFJajAggbxLfZNgUr+LCACMAZk5tYHMyTgQAwLyEfDUw+BwNRhIxTFQAUc4tfVQxRMYNgFStnBgmxL1NERCBUYtspDLTQhZIvc/FXBabM0uUQDKwFi2AokyaQjEw/sNosEIvKkFjAaULVEMcBQsABiHxiCAgUehOnNCCbsR4EJSP11glxTBDbBBipKKOighBZqqBEXjFBBBwfUKIejt6ygHwIYSJDhIONooEEEeUbaIxsIFADpFgdocBoIDHS6yQsO3DgLAWbC8QFwwEgQayrfrbSlHC8UZQcGuw6zQHEdFZnHA1DaAUMD6RyQXEfBBnjBBgdcMKoQL6T36n/DtOmqj/I9UCEJDJjQgXxkH6TwLQAmXJtHqcCgkGQTGbyXlRMneAClBECmk69zCowg3wZessGCig9MEEMILciZzq1LqNviCAxGsC4AIDC7YAkXg7Dmghf4yoYE7kKGzSw6OfjCBCEooEEMG5QsmTgXBJpHEAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IpHLJbDqf0Kh0Sq1ar9is9TMwmUYfrXjcXHAAAMGKzG5+LpPNK9pBoAmjth55cbBIFAoND08rLGgCG3uLQlwMaJAgLoROMx4ea4yLGyKQngAFmjQfKxMXokofGRCfkCyniy8FAgwWiqhHDxatkCh5iwOPaDG4RxcKvGgwLYwVKJAaxUa6yQAwE4wLhwAgKdJFHwUgyQKUey8dEhQhsN9DJyrJzJofLw9h7kULyJ4wKfj5Ah6IoYAFCwcD5gRcSOPFiQMnzDGcSLGixYsYxdQDmBHVgxEFQmRI2FHUCRcEIBEI0K6kHgvjPEEIoNClkhcLKhyA0iIZ/ooKNpU8MDAORAiJSnYl81AzaJEGnjDMYyKhmgakToU4+ESsSbxkDrBmjeEJRKgmKar9y2rkwDYAGm4xuUCBVyK2Rj5YMpFiAZQBdT2RwIb3yAexTA6EYEGABbvCkCNLnky5suXLmDNr3sy5s+d8HzZMyPS5yQoLLBiwsEC6tOERb9EwGMCR84URFWaYO8Dvk4ATn1doQAPCA6UBrHgN8PzCRUxrJYQUqNaV84FOnqLRmJ7MW+cDVT2ZEDLBDi/CnD9EeA6jg5ALBngpaLn5RAgYAAisFbJCwfM0C9S22QsbbHBCU6OkoIAACiQAnGtMHCYghBRWaOGFGGao4YYc/nbo4YeofHBACgGkcMCEkaEoVATmcZMCYlmF1kACLez0RAb49RPdZDOIMA4EGrR2U2CfSGAjZC/0xo1xTWzwn0roFbZASp6wIJcSKyRDwHKRLfCMJxRcmcQDX35ipWQPnJEdfUl4wIsHKgbVQo750ebECSb8Z0KcTi3ggAIhiDlXARpIoEEBMFr4wAWJgujoo5BGKukSH5ywwAoIZvhBAjKwIIADM+DywAAVYDrRCwEkhwYLfjHywQgiIIAACi5kKo0zrShg6xjafBICn4t84AIvEDR6hSqtUHDkNy+YkMyybHzg5icoRPmNB09aY+wQb1ywq2FpfRLmQiMQCYkDZ8COskACBpiQwArp0rCAuQB4wJAsdAKggKBIzKAmNyLwe8QLDbylwYMLceGAABKkcEK8SqIxnhOhVVDABAhLdkC+ymzL2QwcWwNthReU2Uu8nE3rSXUZ9vElCkxyOGoMMQzg8aRtBAEAOw==",
            imagePosition: "center center",
            maxSize: "100px",
            minSize: "20px",
            resizeInterval: 50,
            size: "50%",
            zIndex: 9999
        };
        (e.LoadingOverlaySetup = function (t) {
            e.extend(!0, r, t);
        }),
            (e.LoadingOverlay = function (t, o) {
                switch (t.toLowerCase()) {
                    case "show":
                        n("body", e.extend(!0, {}, r, o));
                        break;
                    case "hide":
                        i("body", o);
                }
            }),
            (e.fn.LoadingOverlay = function (t, o) {
                switch (t.toLowerCase()) {
                    case "show":
                        var s = e.extend(!0, {}, r, o);
                        return this.each(function () {
                            n(this, s);
                        });
                    case "hide":
                        return this.each(function () {
                            i(this, o);
                        });
                }
            });
    })(jQuery),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("jquery")))
                : (e.jQueryBridget = t(e, e.jQuery));
    })(window, function (e, t) {
        "use strict";
        function n(n, r, a) {
            (a = a || t || e.jQuery) &&
                (r.prototype.option ||
                    (r.prototype.option = function (e) {
                        a.isPlainObject(e) &&
                            (this.options = a.extend(!0, this.options, e));
                    }),
                    (a.fn[n] = function (e) {
                        return "string" == typeof e
                            ? (function (e, t, i) {
                                var o,
                                    r = "$()." + n + '("' + t + '")';
                                return (
                                    e.each(function (e, l) {
                                        var c = a.data(l, n);
                                        if (c) {
                                            var u = c[t];
                                            if (u && "_" != t.charAt(0)) {
                                                var h = u.apply(c, i);
                                                o = void 0 === o ? h : o;
                                            } else s(r + " is not a valid method");
                                        } else s(n + " not initialized. Cannot call methods, i.e. " + r);
                                    }),
                                    void 0 !== o ? o : e
                                );
                            })(this, e, o.call(arguments, 1))
                            : ((function (e, t) {
                                e.each(function (e, i) {
                                    var o = a.data(i, n);
                                    o
                                        ? (o.option(t), o._init())
                                        : ((o = new r(i, t)), a.data(i, n, o));
                                });
                            })(this, e),
                                this);
                    }),
                    i(a));
        }
        function i(e) {
            !e || (e && e.bridget) || (e.bridget = n);
        }
        var o = Array.prototype.slice,
            r = e.console,
            s =
                void 0 === r
                    ? function () { }
                    : function (e) {
                        r.error(e);
                    };
        return i(t || e.jQuery), n;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", t)
            : "object" == typeof module && module.exports
                ? (module.exports = t())
                : (e.EvEmitter = t());
    })("undefined" != typeof window ? window : this, function () {
        function e() { }
        var t = e.prototype;
        return (
            (t.on = function (e, t) {
                if (e && t) {
                    var n = (this._events = this._events || {}),
                        i = (n[e] = n[e] || []);
                    return -1 == i.indexOf(t) && i.push(t), this;
                }
            }),
            (t.once = function (e, t) {
                if (e && t) {
                    this.on(e, t);
                    var n = (this._onceEvents = this._onceEvents || {});
                    return ((n[e] = n[e] || {})[t] = !0), this;
                }
            }),
            (t.off = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                    var i = n.indexOf(t);
                    return -1 != i && n.splice(i, 1), this;
                }
            }),
            (t.emitEvent = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                    (n = n.slice(0)), (t = t || []);
                    for (
                        var i = this._onceEvents && this._onceEvents[e], o = 0;
                        o < n.length;
                        o++
                    ) {
                        var r = n[o];
                        i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
                    }
                    return this;
                }
            }),
            (t.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("get-size/get-size", t)
            : "object" == typeof module && module.exports
                ? (module.exports = t())
                : (e.getSize = t());
    })(window, function () {
        "use strict";
        function e(e) {
            var t = parseFloat(e);
            return -1 == e.indexOf("%") && !isNaN(t) && t;
        }
        function t(e) {
            var t = getComputedStyle(e);
            return (
                t ||
                o(
                    "Style returned " +
                    t +
                    ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                ),
                t
            );
        }
        function n(o) {
            if (
                ((function () {
                    if (!a) {
                        a = !0;
                        var o = document.createElement("div");
                        (o.style.width = "200px"),
                            (o.style.padding = "1px 2px 3px 4px"),
                            (o.style.borderStyle = "solid"),
                            (o.style.borderWidth = "1px 2px 3px 4px"),
                            (o.style.boxSizing = "border-box");
                        var r = document.body || document.documentElement;
                        r.appendChild(o);
                        var s = t(o);
                        (i = 200 == Math.round(e(s.width))),
                            (n.isBoxSizeOuter = i),
                            r.removeChild(o);
                    }
                })(),
                    "string" == typeof o && (o = document.querySelector(o)),
                    o && "object" == typeof o && o.nodeType)
            ) {
                var l = t(o);
                if ("none" == l.display)
                    return (function () {
                        for (
                            var e = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0
                            },
                            t = 0;
                            t < s;
                            t++
                        )
                            e[r[t]] = 0;
                        return e;
                    })();
                var c = {};
                (c.width = o.offsetWidth), (c.height = o.offsetHeight);
                for (
                    var u = (c.isBorderBox = "border-box" == l.boxSizing), h = 0;
                    h < s;
                    h++
                ) {
                    var d = r[h],
                        f = l[d],
                        p = parseFloat(f);
                    c[d] = isNaN(p) ? 0 : p;
                }
                var g = c.paddingLeft + c.paddingRight,
                    m = c.paddingTop + c.paddingBottom,
                    v = c.marginLeft + c.marginRight,
                    y = c.marginTop + c.marginBottom,
                    A = c.borderLeftWidth + c.borderRightWidth,
                    b = c.borderTopWidth + c.borderBottomWidth,
                    C = u && i,
                    w = e(l.width);
                !1 !== w && (c.width = w + (C ? 0 : g + A));
                var x = e(l.height);
                return (
                    !1 !== x && (c.height = x + (C ? 0 : m + b)),
                    (c.innerWidth = c.width - (g + A)),
                    (c.innerHeight = c.height - (m + b)),
                    (c.outerWidth = c.width + v),
                    (c.outerHeight = c.height + y),
                    c
                );
            }
        }
        var i,
            o =
                "undefined" == typeof console
                    ? function () { }
                    : function (e) {
                        console.error(e);
                    },
            r = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth"
            ],
            s = r.length,
            a = !1;
        return n;
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", t)
            : "object" == typeof module && module.exports
                ? (module.exports = t())
                : (e.matchesSelector = t());
    })(window, function () {
        "use strict";
        var e = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
                var i = t[n] + "MatchesSelector";
                if (e[i]) return i;
            }
        })();
        return function (t, n) {
            return t[e](n);
        };
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", [
                "desandro-matches-selector/matches-selector"
            ], function (n) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("desandro-matches-selector")))
                : (e.fizzyUIUtils = t(e, e.matchesSelector));
    })(window, function (e, t) {
        var n = {
            extend: function (e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            },
            modulo: function (e, t) {
                return ((e % t) + t) % t;
            }
        },
            i = Array.prototype.slice;
        (n.makeArray = function (e) {
            return Array.isArray(e)
                ? e
                : null == e
                    ? []
                    : "object" == typeof e && "number" == typeof e.length
                        ? i.call(e)
                        : [e];
        }),
            (n.removeFrom = function (e, t) {
                var n = e.indexOf(t);
                -1 != n && e.splice(n, 1);
            }),
            (n.getParent = function (e, n) {
                for (; e.parentNode && e != document.body;)
                    if (((e = e.parentNode), t(e, n))) return e;
            }),
            (n.getQueryElement = function (e) {
                return "string" == typeof e ? document.querySelector(e) : e;
            }),
            (n.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (n.filterFindElements = function (e, i) {
                e = n.makeArray(e);
                var o = [];
                return (
                    e.forEach(function (e) {
                        if (e instanceof HTMLElement)
                            if (i) {
                                t(e, i) && o.push(e);
                                for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++)
                                    o.push(n[r]);
                            } else o.push(e);
                    }),
                    o
                );
            }),
            (n.debounceMethod = function (e, t, n) {
                n = n || 100;
                var i = e.prototype[t],
                    o = t + "Timeout";
                e.prototype[t] = function () {
                    var e = this[o];
                    clearTimeout(e);
                    var t = arguments,
                        r = this;
                    this[o] = setTimeout(function () {
                        i.apply(r, t), delete r[o];
                    }, n);
                };
            }),
            (n.docReady = function (e) {
                var t = document.readyState;
                "complete" == t || "interactive" == t
                    ? setTimeout(e)
                    : document.addEventListener("DOMContentLoaded", e);
            }),
            (n.toDashed = function (e) {
                return e
                    .replace(/(.)([A-Z])/g, function (e, t, n) {
                        return t + "-" + n;
                    })
                    .toLowerCase();
            });
        var o = e.console;
        return (
            (n.htmlInit = function (t, i) {
                n.docReady(function () {
                    var r = n.toDashed(i),
                        s = "data-" + r,
                        a = document.querySelectorAll("[" + s + "]"),
                        l = document.querySelectorAll(".js-" + r),
                        c = n.makeArray(a).concat(n.makeArray(l)),
                        u = s + "-options",
                        h = e.jQuery;
                    c.forEach(function (e) {
                        var n,
                            r = e.getAttribute(s) || e.getAttribute(u);
                        try {
                            n = r && JSON.parse(r);
                        } catch (n) {
                            return void (
                                o &&
                                o.error("Error parsing " + s + " on " + e.className + ": " + n)
                            );
                        }
                        var a = new t(e, n);
                        h && h.data(e, i, a);
                    });
                });
            }),
            n
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/cell", ["get-size/get-size"], function (n) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("get-size")))
                : ((e.Flickity = e.Flickity || {}), (e.Flickity.Cell = t(e, e.getSize)));
    })(window, function (e, t) {
        function n(e, t) {
            (this.element = e), (this.parent = t), this.create();
        }
        var i = n.prototype;
        return (
            (i.create = function () {
                (this.element.style.position = "absolute"),
                    this.element.setAttribute("aria-hidden", "true"),
                    (this.x = 0),
                    (this.shift = 0);
            }),
            (i.destroy = function () {
                this.unselect(), (this.element.style.position = "");
                var e = this.parent.originSide;
                this.element.style[e] = "";
            }),
            (i.getSize = function () {
                this.size = t(this.element);
            }),
            (i.setPosition = function (e) {
                (this.x = e), this.updateTarget(), this.renderPosition(e);
            }),
            (i.updateTarget = i.setDefaultTarget = function () {
                var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                this.target =
                    this.x + this.size[e] + this.size.width * this.parent.cellAlign;
            }),
            (i.renderPosition = function (e) {
                var t = this.parent.originSide;
                this.element.style[t] = this.parent.getPositionValue(e);
            }),
            (i.select = function () {
                this.element.classList.add("is-selected"),
                    this.element.removeAttribute("aria-hidden");
            }),
            (i.unselect = function () {
                this.element.classList.remove("is-selected"),
                    this.element.setAttribute("aria-hidden", "true");
            }),
            (i.wrapShift = function (e) {
                (this.shift = e),
                    this.renderPosition(this.x + this.parent.slideableWidth * e);
            }),
            (i.remove = function () {
                this.element.parentNode.removeChild(this.element);
            }),
            n
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/slide", t)
            : "object" == typeof module && module.exports
                ? (module.exports = t())
                : ((e.Flickity = e.Flickity || {}), (e.Flickity.Slide = t()));
    })(window, function () {
        "use strict";
        function e(e) {
            (this.parent = e),
                (this.isOriginLeft = "left" == e.originSide),
                (this.cells = []),
                (this.outerWidth = 0),
                (this.height = 0);
        }
        var t = e.prototype;
        return (
            (t.addCell = function (e) {
                if (
                    (this.cells.push(e),
                        (this.outerWidth += e.size.outerWidth),
                        (this.height = Math.max(e.size.outerHeight, this.height)),
                        1 == this.cells.length)
                ) {
                    this.x = e.x;
                    var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                    this.firstMargin = e.size[t];
                }
            }),
            (t.updateTarget = function () {
                var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                    t = this.getLastCell(),
                    n = t ? t.size[e] : 0,
                    i = this.outerWidth - (this.firstMargin + n);
                this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
            }),
            (t.getLastCell = function () {
                return this.cells[this.cells.length - 1];
            }),
            (t.select = function () {
                this.cells.forEach(function (e) {
                    e.select();
                });
            }),
            (t.unselect = function () {
                this.cells.forEach(function (e) {
                    e.unselect();
                });
            }),
            (t.getCellElements = function () {
                return this.cells.map(function (e) {
                    return e.element;
                });
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (n) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("fizzy-ui-utils")))
                : ((e.Flickity = e.Flickity || {}),
                    (e.Flickity.animatePrototype = t(e, e.fizzyUIUtils)));
    })(window, function (e, t) {
        return {
            startAnimation: function () {
                this.isAnimating ||
                    ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
            },
            animate: function () {
                this.applyDragForce(), this.applySelectedAttraction();
                var e = this.x;
                if (
                    (this.integratePhysics(),
                        this.positionSlider(),
                        this.settle(e),
                        this.isAnimating)
                ) {
                    var t = this;
                    requestAnimationFrame(function () {
                        t.animate();
                    });
                }
            },
            positionSlider: function () {
                var e = this.x;
                this.options.wrapAround &&
                    1 < this.cells.length &&
                    ((e = t.modulo(e, this.slideableWidth)),
                        (e -= this.slideableWidth),
                        this.shiftWrapCells(e)),
                    this.setTranslateX(e, this.isAnimating),
                    this.dispatchScrollEvent();
            },
            setTranslateX: function (e, t) {
                (e += this.cursorPosition), (e = this.options.rightToLeft ? -e : e);
                var n = this.getPositionValue(e);
                this.slider.style.transform = t
                    ? "translate3d(" + n + ",0,0)"
                    : "translateX(" + n + ")";
            },
            dispatchScrollEvent: function () {
                var e = this.slides[0];
                if (e) {
                    var t = -this.x - e.target,
                        n = t / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [n, t]);
                }
            },
            positionSliderAtSelected: function () {
                this.cells.length &&
                    ((this.x = -this.selectedSlide.target),
                        (this.velocity = 0),
                        this.positionSlider());
            },
            getPositionValue: function (e) {
                return this.options.percentPosition
                    ? 0.01 * Math.round((e / this.size.innerWidth) * 1e4) + "%"
                    : Math.round(e) + "px";
            },
            settle: function (e) {
                this.isPointerDown ||
                    Math.round(100 * this.x) != Math.round(100 * e) ||
                    this.restingFrames++ ,
                    2 < this.restingFrames &&
                    ((this.isAnimating = !1),
                        delete this.isFreeScrolling,
                        this.positionSlider(),
                        this.dispatchEvent("settle", null, [this.selectedIndex]));
            },
            shiftWrapCells: function (e) {
                var t = this.cursorPosition + e;
                this._shiftCells(this.beforeShiftCells, t, -1);
                var n =
                    this.size.innerWidth -
                    (e + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, n, 1);
            },
            _shiftCells: function (e, t, n) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i],
                        r = 0 < t ? n : 0;
                    o.wrapShift(r), (t -= o.size.outerWidth);
                }
            },
            _unshiftCells: function (e) {
                if (e && e.length) for (var t = 0; t < e.length; t++) e[t].wrapShift(0);
            },
            integratePhysics: function () {
                (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
            },
            applyForce: function (e) {
                this.velocity += e;
            },
            getFrictionFactor: function () {
                return (
                    1 -
                    this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                );
            },
            getRestingPosition: function () {
                return this.x + this.velocity / (1 - this.getFrictionFactor());
            },
            applyDragForce: function () {
                if (this.isDraggable && this.isPointerDown) {
                    var e = this.dragX - this.x - this.velocity;
                    this.applyForce(e);
                }
            },
            applySelectedAttraction: function () {
                if (
                    (!this.isDraggable || !this.isPointerDown) &&
                    !this.isFreeScrolling &&
                    this.slides.length
                ) {
                    var e =
                        (-1 * this.selectedSlide.target - this.x) *
                        this.options.selectedAttraction;
                    this.applyForce(e);
                }
            }
        };
    }),
    (function (e, t) {
        if ("function" == typeof define && define.amd)
            define("flickity/js/flickity", [
                "ev-emitter/ev-emitter",
                "get-size/get-size",
                "fizzy-ui-utils/utils",
                "./cell",
                "./slide",
                "./animate"
            ], function (n, i, o, r, s, a) {
                return t(e, n, i, o, r, s, a);
            });
        else if ("object" == typeof module && module.exports)
            module.exports = t(
                e,
                require("ev-emitter"),
                require("get-size"),
                require("fizzy-ui-utils"),
                require("./cell"),
                require("./slide"),
                require("./animate")
            );
        else {
            var n = e.Flickity;
            e.Flickity = t(
                e,
                e.EvEmitter,
                e.getSize,
                e.fizzyUIUtils,
                n.Cell,
                n.Slide,
                n.animatePrototype
            );
        }
    })(window, function (e, t, n, i, o, r, s) {
        function a(e, t) {
            for (e = i.makeArray(e); e.length;) t.appendChild(e.shift());
        }
        function l(e, t) {
            var n = i.getQueryElement(e);
            if (n) {
                if (((this.element = n), this.element.flickityGUID)) {
                    var o = f[this.element.flickityGUID];
                    return o.option(t), o;
                }
                c && (this.$element = c(this.element)),
                    (this.options = i.extend({}, this.constructor.defaults)),
                    this.option(t),
                    this._create();
            } else h && h.error("Bad element for Flickity: " + (n || e));
        }
        var c = e.jQuery,
            u = e.getComputedStyle,
            h = e.console,
            d = 0,
            f = {};
        (l.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: 0.075,
            friction: 0.28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: 0.025,
            setGallerySize: !0
        }),
            (l.createMethods = []);
        var p = l.prototype;
        i.extend(p, t.prototype),
            (p._create = function () {
                var t = (this.guid = ++d);
                for (var n in ((this.element.flickityGUID = t),
                    ((f[t] = this).selectedIndex = 0),
                    (this.restingFrames = 0),
                    (this.x = 0),
                    (this.velocity = 0),
                    (this.originSide = this.options.rightToLeft ? "right" : "left"),
                    (this.viewport = document.createElement("div")),
                    (this.viewport.className = "flickity-viewport"),
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) &&
                    e.addEventListener("resize", this),
                    this.options.on)) {
                    var i = this.options.on[n];
                    this.on(n, i);
                }
                l.createMethods.forEach(function (e) {
                    this[e]();
                }, this),
                    this.options.watchCSS ? this.watchCSS() : this.activate();
            }),
            (p.option = function (e) {
                i.extend(this.options, e);
            }),
            (p.activate = function () {
                this.isActive ||
                    ((this.isActive = !0),
                        this.element.classList.add("flickity-enabled"),
                        this.options.rightToLeft &&
                        this.element.classList.add("flickity-rtl"),
                        this.getSize(),
                        a(this._filterFindCellElements(this.element.children), this.slider),
                        this.viewport.appendChild(this.slider),
                        this.element.appendChild(this.viewport),
                        this.reloadCells(),
                        this.options.accessibility &&
                        ((this.element.tabIndex = 0),
                            this.element.addEventListener("keydown", this)),
                        this.emitEvent("activate"),
                        this.selectInitialIndex(),
                        (this.isInitActivated = !0),
                        this.dispatchEvent("ready"));
            }),
            (p._createSlider = function () {
                var e = document.createElement("div");
                (e.className = "flickity-slider"),
                    (e.style[this.originSide] = 0),
                    (this.slider = e);
            }),
            (p._filterFindCellElements = function (e) {
                return i.filterFindElements(e, this.options.cellSelector);
            }),
            (p.reloadCells = function () {
                (this.cells = this._makeCells(this.slider.children)),
                    this.positionCells(),
                    this._getWrapShiftCells(),
                    this.setGallerySize();
            }),
            (p._makeCells = function (e) {
                return this._filterFindCellElements(e).map(function (e) {
                    return new o(e, this);
                }, this);
            }),
            (p.getLastCell = function () {
                return this.cells[this.cells.length - 1];
            }),
            (p.getLastSlide = function () {
                return this.slides[this.slides.length - 1];
            }),
            (p.positionCells = function () {
                this._sizeCells(this.cells), this._positionCells(0);
            }),
            (p._positionCells = function (e) {
                (e = e || 0), (this.maxCellHeight = (e && this.maxCellHeight) || 0);
                var t = 0;
                if (0 < e) {
                    var n = this.cells[e - 1];
                    t = n.x + n.size.outerWidth;
                }
                for (var i = this.cells.length, o = e; o < i; o++) {
                    var r = this.cells[o];
                    r.setPosition(t),
                        (t += r.size.outerWidth),
                        (this.maxCellHeight = Math.max(
                            r.size.outerHeight,
                            this.maxCellHeight
                        ));
                }
                (this.slideableWidth = t),
                    this.updateSlides(),
                    this._containSlides(),
                    (this.slidesWidth = i
                        ? this.getLastSlide().target - this.slides[0].target
                        : 0);
            }),
            (p._sizeCells = function (e) {
                e.forEach(function (e) {
                    e.getSize();
                });
            }),
            (p.updateSlides = function () {
                if (((this.slides = []), this.cells.length)) {
                    var e = new r(this);
                    this.slides.push(e);
                    var t = "left" == this.originSide ? "marginRight" : "marginLeft",
                        n = this._getCanCellFit();
                    this.cells.forEach(function (i, o) {
                        if (e.cells.length) {
                            var s =
                                e.outerWidth - e.firstMargin + (i.size.outerWidth - i.size[t]);
                            n.call(this, o, s) ||
                                (e.updateTarget(), (e = new r(this)), this.slides.push(e)),
                                e.addCell(i);
                        } else e.addCell(i);
                    }, this),
                        e.updateTarget(),
                        this.updateSelectedSlide();
                }
            }),
            (p._getCanCellFit = function () {
                var e = this.options.groupCells;
                if (!e)
                    return function () {
                        return !1;
                    };
                if ("number" == typeof e) {
                    var t = parseInt(e, 10);
                    return function (e) {
                        return e % t != 0;
                    };
                }
                var n = "string" == typeof e && e.match(/^(\d+)%$/),
                    i = n ? parseInt(n[1], 10) / 100 : 1;
                return function (e, t) {
                    return t <= (this.size.innerWidth + 1) * i;
                };
            }),
            (p._init = p.reposition = function () {
                this.positionCells(), this.positionSliderAtSelected();
            }),
            (p.getSize = function () {
                (this.size = n(this.element)),
                    this.setCellAlign(),
                    (this.cursorPosition = this.size.innerWidth * this.cellAlign);
            });
        var g = {
            center: { left: 0.5, right: 0.5 },
            left: { left: 0, right: 1 },
            right: { right: 0, left: 1 }
        };
        return (
            (p.setCellAlign = function () {
                var e = g[this.options.cellAlign];
                this.cellAlign = e ? e[this.originSide] : this.options.cellAlign;
            }),
            (p.setGallerySize = function () {
                if (this.options.setGallerySize) {
                    var e =
                        this.options.adaptiveHeight && this.selectedSlide
                            ? this.selectedSlide.height
                            : this.maxCellHeight;
                    this.viewport.style.height = e + "px";
                }
            }),
            (p._getWrapShiftCells = function () {
                if (this.options.wrapAround) {
                    this._unshiftCells(this.beforeShiftCells),
                        this._unshiftCells(this.afterShiftCells);
                    var e = this.cursorPosition,
                        t = this.cells.length - 1;
                    (this.beforeShiftCells = this._getGapCells(e, t, -1)),
                        (e = this.size.innerWidth - this.cursorPosition),
                        (this.afterShiftCells = this._getGapCells(e, 0, 1));
                }
            }),
            (p._getGapCells = function (e, t, n) {
                for (var i = []; 0 < e;) {
                    var o = this.cells[t];
                    if (!o) break;
                    i.push(o), (t += n), (e -= o.size.outerWidth);
                }
                return i;
            }),
            (p._containSlides = function () {
                if (
                    this.options.contain &&
                    !this.options.wrapAround &&
                    this.cells.length
                ) {
                    var e = this.options.rightToLeft,
                        t = e ? "marginRight" : "marginLeft",
                        n = e ? "marginLeft" : "marginRight",
                        i = this.slideableWidth - this.getLastCell().size[n],
                        o = i < this.size.innerWidth,
                        r = this.cursorPosition + this.cells[0].size[t],
                        s = i - this.size.innerWidth * (1 - this.cellAlign);
                    this.slides.forEach(function (e) {
                        o
                            ? (e.target = i * this.cellAlign)
                            : ((e.target = Math.max(e.target, r)),
                                (e.target = Math.min(e.target, s)));
                    }, this);
                }
            }),
            (p.dispatchEvent = function (e, t, n) {
                var i = t ? [t].concat(n) : n;
                if ((this.emitEvent(e, i), c && this.$element)) {
                    var o = (e += this.options.namespaceJQueryEvents ? ".flickity" : "");
                    if (t) {
                        var r = c.Event(t);
                        (r.type = e), (o = r);
                    }
                    this.$element.trigger(o, n);
                }
            }),
            (p.select = function (e, t, n) {
                if (
                    this.isActive &&
                    ((e = parseInt(e, 10)),
                        this._wrapSelect(e),
                        (this.options.wrapAround || t) &&
                        (e = i.modulo(e, this.slides.length)),
                        this.slides[e])
                ) {
                    var o = this.selectedIndex;
                    (this.selectedIndex = e),
                        this.updateSelectedSlide(),
                        n ? this.positionSliderAtSelected() : this.startAnimation(),
                        this.options.adaptiveHeight && this.setGallerySize(),
                        this.dispatchEvent("select", null, [e]),
                        e != o && this.dispatchEvent("change", null, [e]),
                        this.dispatchEvent("cellSelect");
                }
            }),
            (p._wrapSelect = function (e) {
                var t = this.slides.length;
                if (!(this.options.wrapAround && 1 < t)) return e;
                var n = i.modulo(e, t),
                    o = Math.abs(n - this.selectedIndex),
                    r = Math.abs(n + t - this.selectedIndex),
                    s = Math.abs(n - t - this.selectedIndex);
                !this.isDragSelect && r < o
                    ? (e += t)
                    : !this.isDragSelect && s < o && (e -= t),
                    e < 0
                        ? (this.x -= this.slideableWidth)
                        : t <= e && (this.x += this.slideableWidth);
            }),
            (p.previous = function (e, t) {
                this.select(this.selectedIndex - 1, e, t);
            }),
            (p.next = function (e, t) {
                this.select(this.selectedIndex + 1, e, t);
            }),
            (p.updateSelectedSlide = function () {
                var e = this.slides[this.selectedIndex];
                e &&
                    (this.unselectSelectedSlide(),
                        (this.selectedSlide = e).select(),
                        (this.selectedCells = e.cells),
                        (this.selectedElements = e.getCellElements()),
                        (this.selectedCell = e.cells[0]),
                        (this.selectedElement = this.selectedElements[0]));
            }),
            (p.unselectSelectedSlide = function () {
                this.selectedSlide && this.selectedSlide.unselect();
            }),
            (p.selectInitialIndex = function () {
                var e = this.options.initialIndex;
                if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
                else {
                    if (e && "string" == typeof e && this.queryCell(e))
                        return void this.selectCell(e, !1, !0);
                    var t = 0;
                    e && this.slides[e] && (t = e), this.select(t, !1, !0);
                }
            }),
            (p.selectCell = function (e, t, n) {
                var i = this.queryCell(e);
                if (i) {
                    var o = this.getCellSlideIndex(i);
                    this.select(o, t, n);
                }
            }),
            (p.getCellSlideIndex = function (e) {
                for (var t = 0; t < this.slides.length; t++)
                    if (-1 != this.slides[t].cells.indexOf(e)) return t;
            }),
            (p.getCell = function (e) {
                for (var t = 0; t < this.cells.length; t++) {
                    var n = this.cells[t];
                    if (n.element == e) return n;
                }
            }),
            (p.getCells = function (e) {
                e = i.makeArray(e);
                var t = [];
                return (
                    e.forEach(function (e) {
                        var n = this.getCell(e);
                        n && t.push(n);
                    }, this),
                    t
                );
            }),
            (p.getCellElements = function () {
                return this.cells.map(function (e) {
                    return e.element;
                });
            }),
            (p.getParentCell = function (e) {
                return (
                    this.getCell(e) ||
                    ((e = i.getParent(e, ".flickity-slider > *")), this.getCell(e))
                );
            }),
            (p.getAdjacentCellElements = function (e, t) {
                if (!e) return this.selectedSlide.getCellElements();
                t = void 0 === t ? this.selectedIndex : t;
                var n = this.slides.length;
                if (n <= 1 + 2 * e) return this.getCellElements();
                for (var o = [], r = t - e; r <= t + e; r++) {
                    var s = this.options.wrapAround ? i.modulo(r, n) : r,
                        a = this.slides[s];
                    a && (o = o.concat(a.getCellElements()));
                }
                return o;
            }),
            (p.queryCell = function (e) {
                if ("number" == typeof e) return this.cells[e];
                if ("string" == typeof e) {
                    if (e.match(/^[#\.]?[\d\/]/)) return;
                    e = this.element.querySelector(e);
                }
                return this.getCell(e);
            }),
            (p.uiChange = function () {
                this.emitEvent("uiChange");
            }),
            (p.childUIPointerDown = function (e) {
                "touchstart" != e.type && e.preventDefault(), this.focus();
            }),
            (p.onresize = function () {
                this.watchCSS(), this.resize();
            }),
            i.debounceMethod(l, "onresize", 150),
            (p.resize = function () {
                if (this.isActive) {
                    this.getSize(),
                        this.options.wrapAround &&
                        (this.x = i.modulo(this.x, this.slideableWidth)),
                        this.positionCells(),
                        this._getWrapShiftCells(),
                        this.setGallerySize(),
                        this.emitEvent("resize");
                    var e = this.selectedElements && this.selectedElements[0];
                    this.selectCell(e, !1, !0);
                }
            }),
            (p.watchCSS = function () {
                this.options.watchCSS &&
                    (-1 != u(this.element, ":after").content.indexOf("flickity")
                        ? this.activate()
                        : this.deactivate());
            }),
            (p.onkeydown = function (e) {
                var t =
                    document.activeElement && document.activeElement != this.element;
                if (this.options.accessibility && !t) {
                    var n = l.keyboardHandlers[e.keyCode];
                    n && n.call(this);
                }
            }),
            (l.keyboardHandlers = {
                37: function () {
                    var e = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[e]();
                },
                39: function () {
                    var e = this.options.rightToLeft ? "previous" : "next";
                    this.uiChange(), this[e]();
                }
            }),
            (p.focus = function () {
                var t = e.pageYOffset;
                this.element.focus({ preventScroll: !0 }),
                    e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
            }),
            (p.deactivate = function () {
                this.isActive &&
                    (this.element.classList.remove("flickity-enabled"),
                        this.element.classList.remove("flickity-rtl"),
                        this.unselectSelectedSlide(),
                        this.cells.forEach(function (e) {
                            e.destroy();
                        }),
                        this.element.removeChild(this.viewport),
                        a(this.slider.children, this.element),
                        this.options.accessibility &&
                        (this.element.removeAttribute("tabIndex"),
                            this.element.removeEventListener("keydown", this)),
                        (this.isActive = !1),
                        this.emitEvent("deactivate"));
            }),
            (p.destroy = function () {
                this.deactivate(),
                    e.removeEventListener("resize", this),
                    this.allOff(),
                    this.emitEvent("destroy"),
                    c && this.$element && c.removeData(this.element, "flickity"),
                    delete this.element.flickityGUID,
                    delete f[this.guid];
            }),
            i.extend(p, s),
            (l.data = function (e) {
                var t = (e = i.getQueryElement(e)) && e.flickityGUID;
                return t && f[t];
            }),
            i.htmlInit(l, "flickity"),
            c && c.bridget && c.bridget("flickity", l),
            (l.setJQuery = function (e) {
                c = e;
            }),
            (l.Cell = o),
            (l.Slide = r),
            l
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (n) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("ev-emitter")))
                : (e.Unipointer = t(e, e.EvEmitter));
    })(window, function (e, t) {
        function n() { }
        var i = (n.prototype = Object.create(t.prototype));
        (i.bindStartEvent = function (e) {
            this._bindStartEvent(e, !0);
        }),
            (i.unbindStartEvent = function (e) {
                this._bindStartEvent(e, !1);
            }),
            (i._bindStartEvent = function (t, n) {
                var i = (n = void 0 === n || n)
                    ? "addEventListener"
                    : "removeEventListener",
                    o = "mousedown";
                e.PointerEvent
                    ? (o = "pointerdown")
                    : "ontouchstart" in e && (o = "touchstart"),
                    t[i](o, this);
            }),
            (i.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (i.getTouch = function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.identifier == this.pointerIdentifier) return n;
                }
            }),
            (i.onmousedown = function (e) {
                var t = e.button;
                (t && 0 !== t && 1 !== t) || this._pointerDown(e, e);
            }),
            (i.ontouchstart = function (e) {
                this._pointerDown(e, e.changedTouches[0]);
            }),
            (i.onpointerdown = function (e) {
                this._pointerDown(e, e);
            }),
            (i._pointerDown = function (e, t) {
                e.button ||
                    this.isPointerDown ||
                    ((this.isPointerDown = !0),
                        (this.pointerIdentifier =
                            void 0 !== t.pointerId ? t.pointerId : t.identifier),
                        this.pointerDown(e, t));
            }),
            (i.pointerDown = function (e, t) {
                this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
            });
        var o = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return (
            (i._bindPostStartEvents = function (t) {
                if (t) {
                    var n = o[t.type];
                    n.forEach(function (t) {
                        e.addEventListener(t, this);
                    }, this),
                        (this._boundPointerEvents = n);
                }
            }),
            (i._unbindPostStartEvents = function () {
                this._boundPointerEvents &&
                    (this._boundPointerEvents.forEach(function (t) {
                        e.removeEventListener(t, this);
                    }, this),
                        delete this._boundPointerEvents);
            }),
            (i.onmousemove = function (e) {
                this._pointerMove(e, e);
            }),
            (i.onpointermove = function (e) {
                e.pointerId == this.pointerIdentifier && this._pointerMove(e, e);
            }),
            (i.ontouchmove = function (e) {
                var t = this.getTouch(e.changedTouches);
                t && this._pointerMove(e, t);
            }),
            (i._pointerMove = function (e, t) {
                this.pointerMove(e, t);
            }),
            (i.pointerMove = function (e, t) {
                this.emitEvent("pointerMove", [e, t]);
            }),
            (i.onmouseup = function (e) {
                this._pointerUp(e, e);
            }),
            (i.onpointerup = function (e) {
                e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
            }),
            (i.ontouchend = function (e) {
                var t = this.getTouch(e.changedTouches);
                t && this._pointerUp(e, t);
            }),
            (i._pointerUp = function (e, t) {
                this._pointerDone(), this.pointerUp(e, t);
            }),
            (i.pointerUp = function (e, t) {
                this.emitEvent("pointerUp", [e, t]);
            }),
            (i._pointerDone = function () {
                this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
            }),
            (i._pointerReset = function () {
                (this.isPointerDown = !1), delete this.pointerIdentifier;
            }),
            (i.pointerDone = function () { }),
            (i.onpointercancel = function (e) {
                e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e);
            }),
            (i.ontouchcancel = function (e) {
                var t = this.getTouch(e.changedTouches);
                t && this._pointerCancel(e, t);
            }),
            (i._pointerCancel = function (e, t) {
                this._pointerDone(), this.pointerCancel(e, t);
            }),
            (i.pointerCancel = function (e, t) {
                this.emitEvent("pointerCancel", [e, t]);
            }),
            (n.getPointerPoint = function (e) {
                return { x: e.pageX, y: e.pageY };
            }),
            n
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("unidragger/unidragger", ["unipointer/unipointer"], function (n) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("unipointer")))
                : (e.Unidragger = t(e, e.Unipointer));
    })(window, function (e, t) {
        function n() { }
        var i = (n.prototype = Object.create(t.prototype));
        (i.bindHandles = function () {
            this._bindHandles(!0);
        }),
            (i.unbindHandles = function () {
                this._bindHandles(!1);
            }),
            (i._bindHandles = function (t) {
                for (
                    var n = (t = void 0 === t || t)
                        ? "addEventListener"
                        : "removeEventListener",
                    i = t ? this._touchActionValue : "",
                    o = 0;
                    o < this.handles.length;
                    o++
                ) {
                    var r = this.handles[o];
                    this._bindStartEvent(r, t),
                        r[n]("click", this),
                        e.PointerEvent && (r.style.touchAction = i);
                }
            }),
            (i._touchActionValue = "none"),
            (i.pointerDown = function (e, t) {
                this.okayPointerDown(e) &&
                    ((this.pointerDownPointer = t),
                        e.preventDefault(),
                        this.pointerDownBlur(),
                        this._bindPostStartEvents(e),
                        this.emitEvent("pointerDown", [e, t]));
            });
        var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
            r = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        return (
            (i.okayPointerDown = function (e) {
                var t = o[e.target.nodeName],
                    n = r[e.target.type],
                    i = !t || n;
                return i || this._pointerReset(), i;
            }),
            (i.pointerDownBlur = function () {
                var e = document.activeElement;
                e && e.blur && e != document.body && e.blur();
            }),
            (i.pointerMove = function (e, t) {
                var n = this._dragPointerMove(e, t);
                this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n);
            }),
            (i._dragPointerMove = function (e, t) {
                var n = {
                    x: t.pageX - this.pointerDownPointer.pageX,
                    y: t.pageY - this.pointerDownPointer.pageY
                };
                return (
                    !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n
                );
            }),
            (i.hasDragStarted = function (e) {
                return 3 < Math.abs(e.x) || 3 < Math.abs(e.y);
            }),
            (i.pointerUp = function (e, t) {
                this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
            }),
            (i._dragPointerUp = function (e, t) {
                this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
            }),
            (i._dragStart = function (e, t) {
                (this.isDragging = !0),
                    (this.isPreventingClicks = !0),
                    this.dragStart(e, t);
            }),
            (i.dragStart = function (e, t) {
                this.emitEvent("dragStart", [e, t]);
            }),
            (i._dragMove = function (e, t, n) {
                this.isDragging && this.dragMove(e, t, n);
            }),
            (i.dragMove = function (e, t, n) {
                e.preventDefault(), this.emitEvent("dragMove", [e, t, n]);
            }),
            (i._dragEnd = function (e, t) {
                (this.isDragging = !1),
                    setTimeout(
                        function () {
                            delete this.isPreventingClicks;
                        }.bind(this)
                    ),
                    this.dragEnd(e, t);
            }),
            (i.dragEnd = function (e, t) {
                this.emitEvent("dragEnd", [e, t]);
            }),
            (i.onclick = function (e) {
                this.isPreventingClicks && e.preventDefault();
            }),
            (i._staticClick = function (e, t) {
                (this.isIgnoringMouseUp && "mouseup" == e.type) ||
                    (this.staticClick(e, t),
                        "mouseup" != e.type &&
                        ((this.isIgnoringMouseUp = !0),
                            setTimeout(
                                function () {
                                    delete this.isIgnoringMouseUp;
                                }.bind(this),
                                400
                            )));
            }),
            (i.staticClick = function (e, t) {
                this.emitEvent("staticClick", [e, t]);
            }),
            (n.getPointerPoint = t.getPointerPoint),
            n
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/drag", [
                "./flickity",
                "unidragger/unidragger",
                "fizzy-ui-utils/utils"
            ], function (n, i, o) {
                return t(e, n, i, o);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(
                    e,
                    require("./flickity"),
                    require("unidragger"),
                    require("fizzy-ui-utils")
                ))
                : (e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils));
    })(window, function (e, t, n, i) {
        function o() {
            return { x: e.pageXOffset, y: e.pageYOffset };
        }
        i.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
            t.createMethods.push("_createDrag");
        var r = t.prototype;
        i.extend(r, n.prototype), (r._touchActionValue = "pan-y");
        var s = "createTouch" in document,
            a = !1;
        (r._createDrag = function () {
            this.on("activate", this.onActivateDrag),
                this.on("uiChange", this._uiChangeDrag),
                this.on("deactivate", this.onDeactivateDrag),
                this.on("cellChange", this.updateDraggable),
                s && !a && (e.addEventListener("touchmove", function () { }), (a = !0));
        }),
            (r.onActivateDrag = function () {
                (this.handles = [this.viewport]),
                    this.bindHandles(),
                    this.updateDraggable();
            }),
            (r.onDeactivateDrag = function () {
                this.unbindHandles(), this.element.classList.remove("is-draggable");
            }),
            (r.updateDraggable = function () {
                ">1" == this.options.draggable
                    ? (this.isDraggable = 1 < this.slides.length)
                    : (this.isDraggable = this.options.draggable),
                    this.isDraggable
                        ? this.element.classList.add("is-draggable")
                        : this.element.classList.remove("is-draggable");
            }),
            (r.bindDrag = function () {
                (this.options.draggable = !0), this.updateDraggable();
            }),
            (r.unbindDrag = function () {
                (this.options.draggable = !1), this.updateDraggable();
            }),
            (r._uiChangeDrag = function () {
                delete this.isFreeScrolling;
            }),
            (r.pointerDown = function (t, n) {
                this.isDraggable
                    ? this.okayPointerDown(t) &&
                    (this._pointerDownPreventDefault(t),
                        this.pointerDownFocus(t),
                        document.activeElement != this.element && this.pointerDownBlur(),
                        (this.dragX = this.x),
                        this.viewport.classList.add("is-pointer-down"),
                        (this.pointerDownScroll = o()),
                        e.addEventListener("scroll", this),
                        this._pointerDownDefault(t, n))
                    : this._pointerDownDefault(t, n);
            }),
            (r._pointerDownDefault = function (e, t) {
                (this.pointerDownPointer = { pageX: t.pageX, pageY: t.pageY }),
                    this._bindPostStartEvents(e),
                    this.dispatchEvent("pointerDown", e, [t]);
            });
        var l = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
        return (
            (r.pointerDownFocus = function (e) {
                l[e.target.nodeName] || this.focus();
            }),
            (r._pointerDownPreventDefault = function (e) {
                var t = "touchstart" == e.type,
                    n = "touch" == e.pointerType,
                    i = l[e.target.nodeName];
                t || n || i || e.preventDefault();
            }),
            (r.hasDragStarted = function (e) {
                return Math.abs(e.x) > this.options.dragThreshold;
            }),
            (r.pointerUp = function (e, t) {
                delete this.isTouchScrolling,
                    this.viewport.classList.remove("is-pointer-down"),
                    this.dispatchEvent("pointerUp", e, [t]),
                    this._dragPointerUp(e, t);
            }),
            (r.pointerDone = function () {
                e.removeEventListener("scroll", this), delete this.pointerDownScroll;
            }),
            (r.dragStart = function (t, n) {
                this.isDraggable &&
                    ((this.dragStartPosition = this.x),
                        this.startAnimation(),
                        e.removeEventListener("scroll", this),
                        this.dispatchEvent("dragStart", t, [n]));
            }),
            (r.pointerMove = function (e, t) {
                var n = this._dragPointerMove(e, t);
                this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n);
            }),
            (r.dragMove = function (e, t, n) {
                if (this.isDraggable) {
                    e.preventDefault(), (this.previousDragX = this.dragX);
                    var i = this.options.rightToLeft ? -1 : 1;
                    this.options.wrapAround && (n.x = n.x % this.slideableWidth);
                    var o = this.dragStartPosition + n.x * i;
                    if (!this.options.wrapAround && this.slides.length) {
                        var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                        o = r < o ? 0.5 * (o + r) : o;
                        var s = Math.min(
                            -this.getLastSlide().target,
                            this.dragStartPosition
                        );
                        o = o < s ? 0.5 * (o + s) : o;
                    }
                    (this.dragX = o),
                        (this.dragMoveTime = new Date()),
                        this.dispatchEvent("dragMove", e, [t, n]);
                }
            }),
            (r.dragEnd = function (e, t) {
                if (this.isDraggable) {
                    this.options.freeScroll && (this.isFreeScrolling = !0);
                    var n = this.dragEndRestingSelect();
                    if (this.options.freeScroll && !this.options.wrapAround) {
                        var i = this.getRestingPosition();
                        this.isFreeScrolling =
                            -i > this.slides[0].target && -i < this.getLastSlide().target;
                    } else
                        this.options.freeScroll ||
                            n != this.selectedIndex ||
                            (n += this.dragEndBoostSelect());
                    delete this.previousDragX,
                        (this.isDragSelect = this.options.wrapAround),
                        this.select(n),
                        delete this.isDragSelect,
                        this.dispatchEvent("dragEnd", e, [t]);
                }
            }),
            (r.dragEndRestingSelect = function () {
                var e = this.getRestingPosition(),
                    t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
                    n = this._getClosestResting(e, t, 1),
                    i = this._getClosestResting(e, t, -1);
                return n.distance < i.distance ? n.index : i.index;
            }),
            (r._getClosestResting = function (e, t, n) {
                for (
                    var i = this.selectedIndex,
                    o = 1 / 0,
                    r =
                        this.options.contain && !this.options.wrapAround
                            ? function (e, t) {
                                return e <= t;
                            }
                            : function (e, t) {
                                return e < t;
                            };
                    r(t, o) &&
                    ((i += n), (o = t), null !== (t = this.getSlideDistance(-e, i)));

                )
                    t = Math.abs(t);
                return { distance: o, index: i - n };
            }),
            (r.getSlideDistance = function (e, t) {
                var n = this.slides.length,
                    o = this.options.wrapAround && 1 < n,
                    r = o ? i.modulo(t, n) : t,
                    s = this.slides[r];
                if (!s) return null;
                var a = o ? this.slideableWidth * Math.floor(t / n) : 0;
                return e - (s.target + a);
            }),
            (r.dragEndBoostSelect = function () {
                if (
                    void 0 === this.previousDragX ||
                    !this.dragMoveTime ||
                    100 < new Date() - this.dragMoveTime
                )
                    return 0;
                var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                    t = this.previousDragX - this.dragX;
                return 0 < e && 0 < t ? 1 : e < 0 && t < 0 ? -1 : 0;
            }),
            (r.staticClick = function (e, t) {
                var n = this.getParentCell(e.target),
                    i = n && n.element,
                    o = n && this.cells.indexOf(n);
                this.dispatchEvent("staticClick", e, [t, i, o]);
            }),
            (r.onscroll = function () {
                var e = o(),
                    t = this.pointerDownScroll.x - e.x,
                    n = this.pointerDownScroll.y - e.y;
                (3 < Math.abs(t) || 3 < Math.abs(n)) && this._pointerDone();
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/prev-next-button", [
                "./flickity",
                "unipointer/unipointer",
                "fizzy-ui-utils/utils"
            ], function (n, i, o) {
                return t(e, n, i, o);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(
                    e,
                    require("./flickity"),
                    require("unipointer"),
                    require("fizzy-ui-utils")
                ))
                : t(e, e.Flickity, e.Unipointer, e.fizzyUIUtils);
    })(window, function (e, t, n, i) {
        "use strict";
        function o(e, t) {
            (this.direction = e), (this.parent = t), this._create();
        }
        var r = "http://www.w3.org/2000/svg";
        ((o.prototype = Object.create(n.prototype))._create = function () {
            (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
            var e = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == e;
            var t = (this.element = document.createElement("button"));
            (t.className = "flickity-button flickity-prev-next-button"),
                (t.className += this.isPrevious ? " previous" : " next"),
                t.setAttribute("type", "button"),
                this.disable(),
                t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var n = this.createSVG();
            t.appendChild(n),
                this.parent.on("select", this.update.bind(this)),
                this.on(
                    "pointerDown",
                    this.parent.childUIPointerDown.bind(this.parent)
                );
        }),
            (o.prototype.activate = function () {
                this.bindStartEvent(this.element),
                    this.element.addEventListener("click", this),
                    this.parent.element.appendChild(this.element);
            }),
            (o.prototype.deactivate = function () {
                this.parent.element.removeChild(this.element),
                    this.unbindStartEvent(this.element),
                    this.element.removeEventListener("click", this);
            }),
            (o.prototype.createSVG = function () {
                var e = document.createElementNS(r, "svg");
                e.setAttribute("class", "flickity-button-icon"),
                    e.setAttribute("viewBox", "0 0 100 100");
                var t = document.createElementNS(r, "path"),
                    n = (function (e) {
                        return "string" != typeof e
                            ? "M " +
                            e.x0 +
                            ",50 L " +
                            e.x1 +
                            "," +
                            (e.y1 + 50) +
                            " L " +
                            e.x2 +
                            "," +
                            (e.y2 + 50) +
                            " L " +
                            e.x3 +
                            ",50  L " +
                            e.x2 +
                            "," +
                            (50 - e.y2) +
                            " L " +
                            e.x1 +
                            "," +
                            (50 - e.y1) +
                            " Z"
                            : e;
                    })(this.parent.options.arrowShape);
                return (
                    t.setAttribute("d", n),
                    t.setAttribute("class", "arrow"),
                    this.isLeft ||
                    t.setAttribute("transform", "translate(100, 100) rotate(180) "),
                    e.appendChild(t),
                    e
                );
            }),
            (o.prototype.handleEvent = i.handleEvent),
            (o.prototype.onclick = function () {
                if (this.isEnabled) {
                    this.parent.uiChange();
                    var e = this.isPrevious ? "previous" : "next";
                    this.parent[e]();
                }
            }),
            (o.prototype.enable = function () {
                this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
            }),
            (o.prototype.disable = function () {
                this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
            }),
            (o.prototype.update = function () {
                var e = this.parent.slides;
                if (this.parent.options.wrapAround && 1 < e.length) this.enable();
                else {
                    var t = e.length ? e.length - 1 : 0,
                        n = this.isPrevious ? 0 : t;
                    this[this.parent.selectedIndex == n ? "disable" : "enable"]();
                }
            }),
            (o.prototype.destroy = function () {
                this.deactivate(), this.allOff();
            }),
            i.extend(t.defaults, {
                prevNextButtons: !0,
                arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 }
            }),
            t.createMethods.push("_createPrevNextButtons");
        var s = t.prototype;
        return (
            (s._createPrevNextButtons = function () {
                this.options.prevNextButtons &&
                    ((this.prevButton = new o(-1, this)),
                        (this.nextButton = new o(1, this)),
                        this.on("activate", this.activatePrevNextButtons));
            }),
            (s.activatePrevNextButtons = function () {
                this.prevButton.activate(),
                    this.nextButton.activate(),
                    this.on("deactivate", this.deactivatePrevNextButtons);
            }),
            (s.deactivatePrevNextButtons = function () {
                this.prevButton.deactivate(),
                    this.nextButton.deactivate(),
                    this.off("deactivate", this.deactivatePrevNextButtons);
            }),
            (t.PrevNextButton = o),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/page-dots", [
                "./flickity",
                "unipointer/unipointer",
                "fizzy-ui-utils/utils"
            ], function (n, i, o) {
                return t(e, n, i, o);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(
                    e,
                    require("./flickity"),
                    require("unipointer"),
                    require("fizzy-ui-utils")
                ))
                : t(e, e.Flickity, e.Unipointer, e.fizzyUIUtils);
    })(window, function (e, t, n, i) {
        function o(e) {
            (this.parent = e), this._create();
        }
        ((o.prototype = Object.create(n.prototype))._create = function () {
            (this.holder = document.createElement("ol")),
                (this.holder.className = "flickity-page-dots"),
                (this.dots = []),
                (this.handleClick = this.onClick.bind(this)),
                this.on(
                    "pointerDown",
                    this.parent.childUIPointerDown.bind(this.parent)
                );
        }),
            (o.prototype.activate = function () {
                this.setDots(),
                    this.holder.addEventListener("click", this.handleClick),
                    this.bindStartEvent(this.holder),
                    this.parent.element.appendChild(this.holder);
            }),
            (o.prototype.deactivate = function () {
                this.holder.removeEventListener("click", this.handleClick),
                    this.unbindStartEvent(this.holder),
                    this.parent.element.removeChild(this.holder);
            }),
            (o.prototype.setDots = function () {
                var e = this.parent.slides.length - this.dots.length;
                0 < e ? this.addDots(e) : e < 0 && this.removeDots(-e);
            }),
            (o.prototype.addDots = function (e) {
                for (
                    var t = document.createDocumentFragment(),
                    n = [],
                    i = this.dots.length,
                    o = i + e,
                    r = i;
                    r < o;
                    r++
                ) {
                    var s = document.createElement("li");
                    (s.className = "dot"),
                        s.setAttribute("aria-label", "Page dot " + (r + 1)),
                        t.appendChild(s),
                        n.push(s);
                }
                this.holder.appendChild(t), (this.dots = this.dots.concat(n));
            }),
            (o.prototype.removeDots = function (e) {
                this.dots.splice(this.dots.length - e, e).forEach(function (e) {
                    this.holder.removeChild(e);
                }, this);
            }),
            (o.prototype.updateSelected = function () {
                this.selectedDot &&
                    ((this.selectedDot.className = "dot"),
                        this.selectedDot.removeAttribute("aria-current")),
                    this.dots.length &&
                    ((this.selectedDot = this.dots[this.parent.selectedIndex]),
                        (this.selectedDot.className = "dot is-selected"),
                        this.selectedDot.setAttribute("aria-current", "step"));
            }),
            (o.prototype.onTap = o.prototype.onClick = function (e) {
                var t = e.target;
                if ("LI" == t.nodeName) {
                    this.parent.uiChange();
                    var n = this.dots.indexOf(t);
                    this.parent.select(n);
                }
            }),
            (o.prototype.destroy = function () {
                this.deactivate(), this.allOff();
            }),
            (t.PageDots = o),
            i.extend(t.defaults, { pageDots: !0 }),
            t.createMethods.push("_createPageDots");
        var r = t.prototype;
        return (
            (r._createPageDots = function () {
                this.options.pageDots &&
                    ((this.pageDots = new o(this)),
                        this.on("activate", this.activatePageDots),
                        this.on("select", this.updateSelectedPageDots),
                        this.on("cellChange", this.updatePageDots),
                        this.on("resize", this.updatePageDots),
                        this.on("deactivate", this.deactivatePageDots));
            }),
            (r.activatePageDots = function () {
                this.pageDots.activate();
            }),
            (r.updateSelectedPageDots = function () {
                this.pageDots.updateSelected();
            }),
            (r.updatePageDots = function () {
                this.pageDots.setDots();
            }),
            (r.deactivatePageDots = function () {
                this.pageDots.deactivate();
            }),
            (t.PageDots = o),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/player", [
                "ev-emitter/ev-emitter",
                "fizzy-ui-utils/utils",
                "./flickity"
            ], function (e, n, i) {
                return t(e, n, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(
                    require("ev-emitter"),
                    require("fizzy-ui-utils"),
                    require("./flickity")
                ))
                : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity);
    })(window, function (e, t, n) {
        function i(e) {
            (this.parent = e),
                (this.state = "stopped"),
                (this.onVisibilityChange = this.visibilityChange.bind(this)),
                (this.onVisibilityPlay = this.visibilityPlay.bind(this));
        }
        ((i.prototype = Object.create(e.prototype)).play = function () {
            "playing" != this.state &&
                (document.hidden
                    ? document.addEventListener("visibilitychange", this.onVisibilityPlay)
                    : ((this.state = "playing"),
                        document.addEventListener(
                            "visibilitychange",
                            this.onVisibilityChange
                        ),
                        this.tick()));
        }),
            (i.prototype.tick = function () {
                if ("playing" == this.state) {
                    var e = this.parent.options.autoPlay;
                    e = "number" == typeof e ? e : 3e3;
                    var t = this;
                    this.clear(),
                        (this.timeout = setTimeout(function () {
                            t.parent.next(!0), t.tick();
                        }, e));
                }
            }),
            (i.prototype.stop = function () {
                (this.state = "stopped"),
                    this.clear(),
                    document.removeEventListener(
                        "visibilitychange",
                        this.onVisibilityChange
                    );
            }),
            (i.prototype.clear = function () {
                clearTimeout(this.timeout);
            }),
            (i.prototype.pause = function () {
                "playing" == this.state && ((this.state = "paused"), this.clear());
            }),
            (i.prototype.unpause = function () {
                "paused" == this.state && this.play();
            }),
            (i.prototype.visibilityChange = function () {
                this[document.hidden ? "pause" : "unpause"]();
            }),
            (i.prototype.visibilityPlay = function () {
                this.play(),
                    document.removeEventListener(
                        "visibilitychange",
                        this.onVisibilityPlay
                    );
            }),
            t.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
            n.createMethods.push("_createPlayer");
        var o = n.prototype;
        return (
            (o._createPlayer = function () {
                (this.player = new i(this)),
                    this.on("activate", this.activatePlayer),
                    this.on("uiChange", this.stopPlayer),
                    this.on("pointerDown", this.stopPlayer),
                    this.on("deactivate", this.deactivatePlayer);
            }),
            (o.activatePlayer = function () {
                this.options.autoPlay &&
                    (this.player.play(),
                        this.element.addEventListener("mouseenter", this));
            }),
            (o.playPlayer = function () {
                this.player.play();
            }),
            (o.stopPlayer = function () {
                this.player.stop();
            }),
            (o.pausePlayer = function () {
                this.player.pause();
            }),
            (o.unpausePlayer = function () {
                this.player.unpause();
            }),
            (o.deactivatePlayer = function () {
                this.player.stop(),
                    this.element.removeEventListener("mouseenter", this);
            }),
            (o.onmouseenter = function () {
                this.options.pauseAutoPlayOnHover &&
                    (this.player.pause(),
                        this.element.addEventListener("mouseleave", this));
            }),
            (o.onmouseleave = function () {
                this.player.unpause(),
                    this.element.removeEventListener("mouseleave", this);
            }),
            (n.Player = i),
            n
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/add-remove-cell", [
                "./flickity",
                "fizzy-ui-utils/utils"
            ], function (n, i) {
                return t(e, n, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(
                    e,
                    require("./flickity"),
                    require("fizzy-ui-utils")
                ))
                : t(e, e.Flickity, e.fizzyUIUtils);
    })(window, function (e, t, n) {
        var i = t.prototype;
        return (
            (i.insert = function (e, t) {
                var n = this._makeCells(e);
                if (n && n.length) {
                    var i = this.cells.length;
                    t = void 0 === t ? i : t;
                    var o = (function (e) {
                        var t = document.createDocumentFragment();
                        return (
                            e.forEach(function (e) {
                                t.appendChild(e.element);
                            }),
                            t
                        );
                    })(n),
                        r = t == i;
                    if (r) this.slider.appendChild(o);
                    else {
                        var s = this.cells[t].element;
                        this.slider.insertBefore(o, s);
                    }
                    if (0 === t) this.cells = n.concat(this.cells);
                    else if (r) this.cells = this.cells.concat(n);
                    else {
                        var a = this.cells.splice(t, i - t);
                        this.cells = this.cells.concat(n).concat(a);
                    }
                    this._sizeCells(n), this.cellChange(t, !0);
                }
            }),
            (i.append = function (e) {
                this.insert(e, this.cells.length);
            }),
            (i.prepend = function (e) {
                this.insert(e, 0);
            }),
            (i.remove = function (e) {
                var t = this.getCells(e);
                if (t && t.length) {
                    var i = this.cells.length - 1;
                    t.forEach(function (e) {
                        e.remove();
                        var t = this.cells.indexOf(e);
                        (i = Math.min(t, i)), n.removeFrom(this.cells, e);
                    }, this),
                        this.cellChange(i, !0);
                }
            }),
            (i.cellSizeChange = function (e) {
                var t = this.getCell(e);
                if (t) {
                    t.getSize();
                    var n = this.cells.indexOf(t);
                    this.cellChange(n);
                }
            }),
            (i.cellChange = function (e, t) {
                var n = this.selectedElement;
                this._positionCells(e),
                    this._getWrapShiftCells(),
                    this.setGallerySize();
                var i = this.getCell(n);
                i && (this.selectedIndex = this.getCellSlideIndex(i)),
                    (this.selectedIndex = Math.min(
                        this.slides.length - 1,
                        this.selectedIndex
                    )),
                    this.emitEvent("cellChange", [e]),
                    this.select(this.selectedIndex),
                    t && this.positionSliderAtSelected();
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/lazyload", [
                "./flickity",
                "fizzy-ui-utils/utils"
            ], function (n, i) {
                return t(e, n, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(
                    e,
                    require("./flickity"),
                    require("fizzy-ui-utils")
                ))
                : t(e, e.Flickity, e.fizzyUIUtils);
    })(window, function (e, t, n) {
        "use strict";
        function i(e, t) {
            (this.img = e), (this.flickity = t), this.load();
        }
        t.createMethods.push("_createLazyload");
        var o = t.prototype;
        return (
            (o._createLazyload = function () {
                this.on("select", this.lazyLoad);
            }),
            (o.lazyLoad = function () {
                var e = this.options.lazyLoad;
                if (e) {
                    var t = "number" == typeof e ? e : 0,
                        o = this.getAdjacentCellElements(t),
                        r = [];
                    o.forEach(function (e) {
                        var t = (function (e) {
                            if ("IMG" == e.nodeName) {
                                var t = e.getAttribute("data-flickity-lazyload"),
                                    i = e.getAttribute("data-flickity-lazyload-src"),
                                    o = e.getAttribute("data-flickity-lazyload-srcset");
                                if (t || i || o) return [e];
                            }
                            var r = e.querySelectorAll(
                                "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
                            );
                            return n.makeArray(r);
                        })(e);
                        r = r.concat(t);
                    }),
                        r.forEach(function (e) {
                            new i(e, this);
                        }, this);
                }
            }),
            (i.prototype.handleEvent = n.handleEvent),
            (i.prototype.load = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this);
                var e =
                    this.img.getAttribute("data-flickity-lazyload") ||
                    this.img.getAttribute("data-flickity-lazyload-src"),
                    t = this.img.getAttribute("data-flickity-lazyload-srcset");
                (this.img.src = e),
                    t && this.img.setAttribute("srcset", t),
                    this.img.removeAttribute("data-flickity-lazyload"),
                    this.img.removeAttribute("data-flickity-lazyload-src"),
                    this.img.removeAttribute("data-flickity-lazyload-srcset");
            }),
            (i.prototype.onload = function (e) {
                this.complete(e, "flickity-lazyloaded");
            }),
            (i.prototype.onerror = function (e) {
                this.complete(e, "flickity-lazyerror");
            }),
            (i.prototype.complete = function (e, t) {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                var n = this.flickity.getParentCell(this.img),
                    i = n && n.element;
                this.flickity.cellSizeChange(i),
                    this.img.classList.add(t),
                    this.flickity.dispatchEvent("lazyLoad", e, i);
            }),
            (t.LazyLoader = i),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/index", [
                "./flickity",
                "./drag",
                "./prev-next-button",
                "./page-dots",
                "./player",
                "./add-remove-cell",
                "./lazyload"
            ], t)
            : "object" == typeof module &&
            module.exports &&
            (module.exports = t(
                require("./flickity"),
                require("./drag"),
                require("./prev-next-button"),
                require("./page-dots"),
                require("./player"),
                require("./add-remove-cell"),
                require("./lazyload")
            ));
    })(window, function (e) {
        return e;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity-as-nav-for/as-nav-for", [
                "flickity/js/index",
                "fizzy-ui-utils/utils"
            ], t)
            : "object" == typeof module && module.exports
                ? (module.exports = t(require("flickity"), require("fizzy-ui-utils")))
                : (e.Flickity = t(e.Flickity, e.fizzyUIUtils));
    })(window, function (e, t) {
        e.createMethods.push("_createAsNavFor");
        var n = e.prototype;
        return (
            (n._createAsNavFor = function () {
                this.on("activate", this.activateAsNavFor),
                    this.on("deactivate", this.deactivateAsNavFor),
                    this.on("destroy", this.destroyAsNavFor);
                var e = this.options.asNavFor;
                if (e) {
                    var t = this;
                    setTimeout(function () {
                        t.setNavCompanion(e);
                    });
                }
            }),
            (n.setNavCompanion = function (n) {
                n = t.getQueryElement(n);
                var i = e.data(n);
                if (i && i != this) {
                    this.navCompanion = i;
                    var o = this;
                    (this.onNavCompanionSelect = function () {
                        o.navCompanionSelect();
                    }),
                        i.on("select", this.onNavCompanionSelect),
                        this.on("staticClick", this.onNavStaticClick),
                        this.navCompanionSelect(!0);
                }
            }),
            (n.navCompanionSelect = function (e) {
                var t = this.navCompanion && this.navCompanion.selectedCells;
                if (t) {
                    var n = t[0],
                        i = this.navCompanion.cells.indexOf(n),
                        o = i + t.length - 1,
                        r = Math.floor(
                            (function (e, t, n) {
                                return (t - e) * n + e;
                            })(i, o, this.navCompanion.cellAlign)
                        );
                    if (
                        (this.selectCell(r, !1, e),
                            this.removeNavSelectedElements(),
                            !(r >= this.cells.length))
                    ) {
                        var s = this.cells.slice(i, 1 + o);
                        (this.navSelectedElements = s.map(function (e) {
                            return e.element;
                        })),
                            this.changeNavSelectedClass("add");
                    }
                }
            }),
            (n.changeNavSelectedClass = function (e) {
                this.navSelectedElements.forEach(function (t) {
                    t.classList[e]("is-nav-selected");
                });
            }),
            (n.activateAsNavFor = function () {
                this.navCompanionSelect(!0);
            }),
            (n.removeNavSelectedElements = function () {
                this.navSelectedElements &&
                    (this.changeNavSelectedClass("remove"),
                        delete this.navSelectedElements);
            }),
            (n.onNavStaticClick = function (e, t, n, i) {
                "number" == typeof i && this.navCompanion.selectCell(i);
            }),
            (n.deactivateAsNavFor = function () {
                this.removeNavSelectedElements();
            }),
            (n.destroyAsNavFor = function () {
                this.navCompanion &&
                    (this.navCompanion.off("select", this.onNavCompanionSelect),
                        this.off("staticClick", this.onNavStaticClick),
                        delete this.navCompanion);
            }),
            e
        );
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (
                n
            ) {
                return t(e, n);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("ev-emitter")))
                : (e.imagesLoaded = t(e, e.EvEmitter));
    })("undefined" != typeof window ? window : this, function (e, t) {
        function n(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        function i(e, t, o) {
            if (!(this instanceof i)) return new i(e, t, o);
            var r = e;
            "string" == typeof e && (r = document.querySelectorAll(e)),
                r
                    ? ((this.elements = (function (e) {
                        return Array.isArray(e)
                            ? e
                            : "object" == typeof e && "number" == typeof e.length
                                ? l.call(e)
                                : [e];
                    })(r)),
                        (this.options = n({}, this.options)),
                        "function" == typeof t ? (o = t) : n(this.options, t),
                        o && this.on("always", o),
                        this.getImages(),
                        s && (this.jqDeferred = new s.Deferred()),
                        setTimeout(this.check.bind(this)))
                    : a.error("Bad element for imagesLoaded " + (r || e));
        }
        function o(e) {
            this.img = e;
        }
        function r(e, t) {
            (this.url = e), (this.element = t), (this.img = new Image());
        }
        var s = e.jQuery,
            a = e.console,
            l = Array.prototype.slice;
        ((i.prototype = Object.create(t.prototype)).options = {}),
            (i.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (i.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e),
                    !0 === this.options.background && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && c[t]) {
                    for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                        var o = n[i];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = e.querySelectorAll(this.options.background);
                        for (i = 0; i < r.length; i++) {
                            var s = r[i];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var c = { 1: !0, 9: !0, 11: !0 };
        return (
            (i.prototype.addElementBackgroundImages = function (e) {
                var t = getComputedStyle(e);
                if (t)
                    for (
                        var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage);
                        null !== i;

                    ) {
                        var o = i && i[2];
                        o && this.addBackground(o, e), (i = n.exec(t.backgroundImage));
                    }
            }),
            (i.prototype.addImage = function (e) {
                var t = new o(e);
                this.images.push(t);
            }),
            (i.prototype.addBackground = function (e, t) {
                var n = new r(e, t);
                this.images.push(n);
            }),
            (i.prototype.check = function () {
                function e(e, n, i) {
                    setTimeout(function () {
                        t.progress(e, n, i);
                    });
                }
                var t = this;
                (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? this.images.forEach(function (t) {
                            t.once("progress", e), t.check();
                        })
                        : this.complete();
            }),
            (i.prototype.progress = function (e, t, n) {
                this.progressedCount++ ,
                    (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                    this.emitEvent("progress", [this, e, t]),
                    this.jqDeferred &&
                    this.jqDeferred.notify &&
                    this.jqDeferred.notify(this, e),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + n, e, t);
            }),
            (i.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (
                    ((this.isComplete = !0),
                        this.emitEvent(e, [this]),
                        this.emitEvent("always", [this]),
                        this.jqDeferred)
                ) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this);
                }
            }),
            ((o.prototype = Object.create(t.prototype)).check = function () {
                this.getIsImageComplete()
                    ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        (this.proxyImage.src = this.img.src));
            }),
            (o.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth;
            }),
            (o.prototype.confirm = function (e, t) {
                (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
            }),
            (o.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (o.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (o.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (o.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            ((r.prototype = Object.create(o.prototype)).check = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.img.src = this.url),
                    this.getIsImageComplete() &&
                    (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                        this.unbindEvents());
            }),
            (r.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            (r.prototype.confirm = function (e, t) {
                (this.isLoaded = e),
                    this.emitEvent("progress", [this, this.element, t]);
            }),
            (i.makeJQueryPlugin = function (t) {
                (t = t || e.jQuery) &&
                    ((s = t).fn.imagesLoaded = function (e, t) {
                        return new i(this, e, t).jqDeferred.promise(s(this));
                    });
            }),
            i.makeJQueryPlugin(),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (
                n,
                i
            ) {
                return t(e, n, i);
            })
            : "object" == typeof module && module.exports
                ? (module.exports = t(e, require("flickity"), require("imagesloaded")))
                : (e.Flickity = t(e, e.Flickity, e.imagesLoaded));
    })(window, function (e, t, n) {
        "use strict";
        t.createMethods.push("_createImagesLoaded");
        var i = t.prototype;
        return (
            (i._createImagesLoaded = function () {
                this.on("activate", this.imagesLoaded);
            }),
            (i.imagesLoaded = function () {
                if (this.options.imagesLoaded) {
                    var e = this;
                    n(this.slider).on("progress", function (t, n) {
                        var i = e.getParentCell(n.img);
                        e.cellSizeChange(i && i.element),
                            e.options.freeScroll || e.positionSliderAtSelected();
                    });
                }
            }),
            t
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
                ? define([], t)
                : "object" == typeof exports
                    ? (exports.TypeIt = t())
                    : (e.TypeIt = t());
    })(this, function () {
        return (function (e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var o = (n[i] = { i: i, l: !1, exports: {} });
                return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
            }
            var n = {};
            return (
                (t.m = e),
                (t.c = n),
                (t.d = function (e, n, i) {
                    t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
                }),
                (t.r = function (e) {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (t.t = function (e, n) {
                    if ((1 & n && (e = t(e)), 8 & n)) return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                    var i = Object.create(null);
                    if (
                        (t.r(i),
                            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
                            2 & n && "string" != typeof e)
                    )
                        for (var o in e)
                            t.d(
                                i,
                                o,
                                function (t) {
                                    return e[t];
                                }.bind(null, o)
                            );
                    return i;
                }),
                (t.n = function (e) {
                    var n =
                        e && e.__esModule
                            ? function () {
                                return e.default;
                            }
                            : function () {
                                return e;
                            };
                    return t.d(n, "a", n), n;
                }),
                (t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (t.p = ""),
                t((t.s = 0))
            );
        })([
            function (e, t, n) {
                "use strict";
                function i(e) {
                    var t = e.getBoundingClientRect();
                    return !(
                        t.right > window.innerWidth ||
                        t.bottom > window.innerHeight ||
                        t.top < 0 ||
                        t.left < 0
                    );
                }
                function o(e, t) {
                    return Math.abs(Math.random() * (e + t - (e - t)) + (e - t));
                }
                function r(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "",
                        n = document.createElement("style");
                    (n.id = t),
                        n.appendChild(document.createTextNode(e)),
                        document.head.appendChild(n);
                }
                function s(e) {
                    return e.replace(/&(.+);/, function (e) {
                        var t = document.createElement("textarea");
                        return (t.innerHTML = e), t.value;
                    });
                }
                function a(e) {
                    return (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e &&
                                    "function" == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype
                                    ? "symbol"
                                    : typeof e;
                            })(e);
                }
                function l(e) {
                    return (l =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                return typeof e;
                            }
                            : function (e) {
                                return e &&
                                    "function" == typeof Symbol &&
                                    e.constructor === Symbol &&
                                    e !== Symbol.prototype
                                    ? "symbol"
                                    : typeof e;
                            })(e);
                }
                function c(e) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                                    n[t] = e[t];
                                return n;
                            }
                        })(e) ||
                        (function (e) {
                            if (
                                Symbol.iterator in Object(e) ||
                                "[object Arguments]" === Object.prototype.toString.call(e)
                            )
                                return Array.from(e);
                        })(e) ||
                        (function () {
                            throw new TypeError(
                                "Invalid attempt to spread non-iterable instance"
                            );
                        })()
                    );
                }
                function u(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i);
                    }
                }
                function h(e) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                                    n[t] = e[t];
                                return n;
                            }
                        })(e) ||
                        (function (e) {
                            if (
                                Symbol.iterator in Object(e) ||
                                "[object Arguments]" === Object.prototype.toString.call(e)
                            )
                                return Array.from(e);
                        })(e) ||
                        (function () {
                            throw new TypeError(
                                "Invalid attempt to spread non-iterable instance"
                            );
                        })()
                    );
                }
                function d(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i);
                    }
                }
                function f(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i);
                    }
                }
                n.r(t);
                var p = {
                    strings: [],
                    speed: 100,
                    cursor: !0,
                    cursorChar: "|",
                    cursorSpeed: 1e3,
                    deleteSpeed: null,
                    lifeLike: !0,
                    breakLines: !0,
                    startDelay: 250,
                    startDelete: !1,
                    nextStringDelay: 750,
                    loop: !1,
                    loopDelay: null,
                    html: !0,
                    waitUntilVisible: !1,
                    beforeString: !1,
                    afterString: !1,
                    beforeStep: !1,
                    afterStep: !1,
                    afterComplete: !1
                },
                    g = function (e, t) {
                        for (var n = Object(e), i = 1; i < arguments.length; i++) {
                            var o = arguments[i];
                            if (null != o)
                                for (var r in o)
                                    Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
                        }
                        return n;
                    },
                    m = function (e) {
                        return ["textarea", "input"].indexOf(e.tagName.toLowerCase()) > -1;
                    },
                    v = function (e) {
                        return Array.isArray(e) ? e.slice(0) : e.split("<br>");
                    },
                    y = function (e) {
                        var t = (function (e) {
                            var t = new DOMParser().parseFromString(e, "text/html"),
                                n = [].slice.call(t.body.querySelectorAll("*"));
                            return (
                                (n = n.filter(function (t) {
                                    return !(
                                        t.outerHTML.indexOf("></") > -1 &&
                                        ((e = e.replace(t.outerHTML, "")), 1)
                                    );
                                })).forEach(function (t) {
                                    e = e.replace(
                                        new RegExp(
                                            "<"
                                                .concat(t.tagName, "(.*?)/?>((.*?)</")
                                                .concat(t.tagName, ">)?"),
                                            "i"
                                        ),
                                        "{%}"
                                    );
                                }),
                                { string: e, nodes: n }
                            );
                        })(e),
                            n = t.string,
                            i = t.nodes,
                            o = s(n).split(""),
                            r = [];
                        return (
                            o.forEach(function (e, t) {
                                if ("{%}" === o.slice(t, t + 3).join("")) {
                                    var n = t,
                                        a = i.shift(),
                                        l = s(a.innerHTML).split(""),
                                        c = [].slice.call(a.attributes).map(function (e) {
                                            return { name: e.name, value: e.nodeValue };
                                        });
                                    l.length
                                        ? l.forEach(function (e, i) {
                                            r.push({
                                                tag: a.tagName,
                                                attributes: c,
                                                content: e,
                                                isFirstCharacter: n === t,
                                                isLastCharacter: i + 1 === l.length
                                            }),
                                                n++;
                                        })
                                        : r.push({ tag: a.tagName, attributes: c, content: null });
                                } else r.push(e);
                            }),
                            (r = (function (e) {
                                for (var t = !0; t;)
                                    e.some(function (t, n) {
                                        return !(
                                            "object" !== a(t) ||
                                            (!t.isLastCharacter && null !== t.content) ||
                                            "%}" !== e.slice(n + 1, n + 3).join("") ||
                                            (e.splice(n + 1, 2), 0)
                                        );
                                    }) || (t = !1);
                                return e;
                            })(r))
                        );
                    },
                    A = function (e) {
                        var t = e.tag,
                            n = e.attributes,
                            i = void 0 === n ? [] : n,
                            o = e.content,
                            r = void 0 === o ? "" : o,
                            s = document.createElement(t);
                        return (
                            void 0 !== i &&
                            i.forEach(function (e) {
                                s.setAttribute(e.name, e.value);
                            }),
                            r && (s.innerHTML = r),
                            s.outerHTML
                        );
                    },
                    b = function (e) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                            ? (e.value = "")
                            : [].slice.call(e.childNodes).forEach(function (t) {
                                void 0 !== t.classList &&
                                    t.classList.contains("ti-wrapper") &&
                                    (e.innerHTML = "");
                            });
                    },
                    C = (function () {
                        function e() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : [],
                                n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1];
                            !(function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.executed = []),
                                (this.waiting = t),
                                !t.length && n && this.add(n);
                        }
                        var t, n;
                        return (
                            (t = e),
                            (n = [
                                {
                                    key: "add",
                                    value: function (e) {
                                        var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1];
                                        return this.waiting[t ? "unshift" : "push"](e), this;
                                    }
                                },
                                {
                                    key: "delete",
                                    value: function (e) {
                                        return this.waiting.splice(e, 1), this;
                                    }
                                },
                                {
                                    key: "reset",
                                    value: function () {
                                        return (
                                            (this.waiting = [].concat(
                                                c(this.executed),
                                                c(this.waiting)
                                            )),
                                            (this.executed = []),
                                            this
                                        );
                                    }
                                }
                            ]) && u(t.prototype, n),
                            e
                        );
                    })(),
                    w =
                        "display:inline;position:relative;font:inherit;color:inherit;line-height:inherit;",
                    x = (function () {
                        function e() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                n = t.element,
                                i = t.id,
                                o = t.options,
                                r = t.queue,
                                s = void 0 === r ? [] : r;
                            !(function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.status = {
                                    started: !1,
                                    complete: !1,
                                    frozen: !1,
                                    destroyed: !1
                                }),
                                (this.timeouts = []),
                                (this.id = i),
                                (this.$e = n),
                                (this.isInput = m(n)),
                                (this.opts = g({}, p, o)),
                                (this.opts.strings = v(this.opts.strings)),
                                (this.opts.html = !this.isInput && this.opts.html),
                                (this.queue = new C(s, [this.pause, this.opts.startDelay])),
                                b(n, this.isInput),
                                this.prepareDelay("nextStringDelay"),
                                this.prepareDelay("loopDelay");
                            var a = this.$e.innerHTML;
                            this.prepDOM(),
                                this.handleHardCoded(a),
                                (this.opts.strings = this.opts.strings.map(function (e) {
                                    return e.replace(/<\!--.*?-->/g, "");
                                })),
                                !this.opts.strings.length ||
                                this.queue.waiting.length > 1 ||
                                this.generateQueue();
                        }
                        var t, n;
                        return (
                            (t = e),
                            (n = [
                                {
                                    key: "reset",
                                    value: function () {
                                        return (
                                            this.queue.reset(),
                                            new e({
                                                element: this.$e,
                                                id: this.id,
                                                options: this.opts,
                                                queue: this.queue.waiting
                                            })
                                        );
                                    }
                                },
                                {
                                    key: "init",
                                    value: function () {
                                        var e = this;
                                        if (!this.status.started) {
                                            if (
                                                (this.cursor(),
                                                    !this.opts.waitUntilVisible || i(this.$e))
                                            )
                                                return (this.status.started = !0), this.fire();
                                            window.addEventListener("scroll", function t() {
                                                i(e.$e) &&
                                                    !e.status.started &&
                                                    (e.fire(), window.removeEventListener("scroll", t));
                                            });
                                        }
                                    }
                                },
                                {
                                    key: "fire",
                                    value: function () {
                                        for (
                                            var e = this,
                                            t = this.queue.waiting.slice(),
                                            n = Promise.resolve(),
                                            i = 0;
                                            i < t.length;
                                            i++
                                        )
                                            !(function (i) {
                                                var o = t[i],
                                                    r = [o, e.queue, e];
                                                n = n.then(function () {
                                                    return new Promise(function (t, n) {
                                                        if (e.status.frozen) return n();
                                                        var i, s;
                                                        e.setPace(),
                                                            o[2] &&
                                                            o[2].isFirst &&
                                                            e.opts.beforeString &&
                                                            (i = e.opts).beforeString.apply(i, r),
                                                            e.opts.beforeStep &&
                                                            (s = e.opts).beforeStep.apply(s, r),
                                                            o[0].call(e, o[1], o[2]).then(function () {
                                                                var n,
                                                                    i,
                                                                    s = e.queue.waiting.shift();
                                                                return o[2] && o[2].isPhantom
                                                                    ? t()
                                                                    : (o[2] &&
                                                                        o[2].isLast &&
                                                                        e.opts.afterString &&
                                                                        (n = e.opts).afterString.apply(n, r),
                                                                        e.opts.afterStep &&
                                                                        (i = e.opts).afterStep.apply(i, r),
                                                                        e.queue.executed.push(s),
                                                                        t());
                                                            });
                                                    });
                                                });
                                            })(i);
                                        n.then(function () {
                                            if (e.opts.loop) {
                                                var t = e.opts.loopDelay
                                                    ? e.opts.loopDelay
                                                    : e.opts.nextStringDelay;
                                                e.wait(function () {
                                                    e.loopify(t), e.fire();
                                                }, t.after);
                                            }
                                            (e.status.completed = !0),
                                                e.opts.afterComplete && e.opts.afterComplete(e);
                                        }).catch(function () { });
                                    }
                                },
                                {
                                    key: "loopify",
                                    value: function (e) {
                                        var t = this;
                                        this.queue
                                            .reset()
                                            .delete(0)
                                            .add([this.pause, e.before], !0),
                                            this.getNoderized().forEach(function (e) {
                                                t.queue.add([t.delete, null, { isPhantom: !0 }], !0);
                                            });
                                    }
                                },
                                {
                                    key: "prepDOM",
                                    value: function () {
                                        this.isInput ||
                                            ((this.$e.innerHTML = '\n      <span style="'
                                                .concat(
                                                    w,
                                                    '" class="ti-wrapper">\n        <span style="'
                                                )
                                                .concat(
                                                    w,
                                                    '" class="ti-container"></span>\n      </span>\n      '
                                                )),
                                                this.$e.setAttribute("data-typeit-id", this.id),
                                                (this.$eContainer = this.$e.querySelector(
                                                    ".ti-container"
                                                )),
                                                (this.$eWrapper = this.$e.querySelector(".ti-wrapper")),
                                                r(
                                                    "\n        .".concat(
                                                        this.$eContainer.className,
                                                        ":before {\n          content: '.';\n          display: inline-block;\n          width: 0;\n          visibility: hidden;\n        }\n      "
                                                    )
                                                ));
                                    }
                                },
                                {
                                    key: "setContents",
                                    value: function () {
                                        var e =
                                            arguments.length > 0 && void 0 !== arguments[0]
                                                ? arguments[0]
                                                : "";
                                        this.isInput
                                            ? (this.$e.value = e)
                                            : (this.$eContainer[
                                                this.opts.html ? "innerHTML" : "innerText"
                                            ] = e);
                                    }
                                },
                                {
                                    key: "getRaw",
                                    value: function () {
                                        return this.isInput
                                            ? this.$e.value
                                            : this.opts.html
                                                ? this.$eContainer.innerHTML
                                                : this.$eContainer.innerText;
                                    }
                                },
                                {
                                    key: "getNoderized",
                                    value: function () {
                                        return this.maybeNoderize(this.getRaw());
                                    }
                                },
                                {
                                    key: "prepareDelay",
                                    value: function (e) {
                                        var t = this.opts[e];
                                        if (t) {
                                            var n = Array.isArray(t),
                                                i = n ? null : t / 2;
                                            this.opts[e] = {
                                                before: n ? t[0] : i,
                                                after: n ? t[1] : i,
                                                total: n ? t[0] + t[1] : t
                                            };
                                        }
                                    }
                                },
                                {
                                    key: "generateQueue",
                                    value: function () {
                                        var e = this,
                                            t =
                                                arguments.length > 0 && void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : null;
                                        t && this.queue.add(t),
                                            this.opts.strings.forEach(function (t, n) {
                                                e.queueString(t);
                                                var i = e.queue.waiting.length;
                                                if (n + 1 !== e.opts.strings.length) {
                                                    if (e.opts.breakLines)
                                                        return (
                                                            e.queue.add([e.type, "<br>"]),
                                                            void e.addSplitPause(i)
                                                        );
                                                    e.queueDeletions(t), e.addSplitPause(i, t.length);
                                                }
                                            });
                                    }
                                },
                                {
                                    key: "queueDeletions",
                                    value: function () {
                                        for (
                                            var e =
                                                arguments.length > 0 && void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : null,
                                            t =
                                                "string" == typeof e
                                                    ? this.maybeNoderize(e).length
                                                    : e,
                                            n = 0;
                                            n < t;
                                            n++
                                        )
                                            this.queue.add([this.delete]);
                                    }
                                },
                                {
                                    key: "maybeNoderize",
                                    value: function (e) {
                                        return this.opts.html ? y(e) : e.split("");
                                    }
                                },
                                {
                                    key: "queueString",
                                    value: function (e) {
                                        var t = this,
                                            n = (e = this.maybeNoderize(e)).length;
                                        e.forEach(function (e, i) {
                                            var o = [t.type, e];
                                            0 === i && o.push({ isFirst: !0 }),
                                                i + 1 === n && o.push({ isLast: !0 }),
                                                t.queue.add(o);
                                        });
                                    }
                                },
                                {
                                    key: "addSplitPause",
                                    value: function (e) {
                                        var t =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : 1;
                                        this.queue.waiting.splice(e, 0, [
                                            this.pause,
                                            this.opts.nextStringDelay.before
                                        ]),
                                            this.queue.waiting.splice(e + t + 1, 0, [
                                                this.pause,
                                                this.opts.nextStringDelay.after
                                            ]);
                                    }
                                },
                                {
                                    key: "cursor",
                                    value: function () {
                                        if (!this.isInput) {
                                            var e = "display: none;";
                                            this.opts.cursor &&
                                                (r(
                                                    "\n        @keyframes blink-"
                                                        .concat(
                                                            this.id,
                                                            " {\n          0% {opacity: 0}\n          49% {opacity: 0}\n          50% {opacity: 1}\n        }\n\n        [data-typeit-id='"
                                                        )
                                                        .concat(
                                                            this.id,
                                                            "'] .ti-cursor {\n          animation: blink-"
                                                        )
                                                        .concat(this.id, " ")
                                                        .concat(
                                                            this.opts.cursorSpeed / 1e3,
                                                            "s infinite;\n        }\n      "
                                                        ),
                                                    this.id
                                                ),
                                                    (e = "")),
                                                this.$eWrapper.insertAdjacentHTML(
                                                    "beforeend",
                                                    '<span style="'
                                                        .concat(w)
                                                        .concat(e, 'left: -.25ch;" class="ti-cursor">')
                                                        .concat(this.opts.cursorChar, "</span>")
                                                );
                                        }
                                    }
                                },
                                {
                                    key: "insert",
                                    value: function (e) {
                                        var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1] &&
                                            arguments[1];
                                        this.isInput
                                            ? (this.$e.value = "".concat(this.$e.value).concat(e))
                                            : ((t
                                                ? this.$eContainer.lastChild
                                                : this.$eContainer
                                            ).insertAdjacentHTML("beforeend", e),
                                                this.setContents(
                                                    this.getRaw()
                                                        .split("")
                                                        .join("")
                                                ));
                                    }
                                },
                                {
                                    key: "handleHardCoded",
                                    value: function (e) {
                                        return (
                                            !!e.length &&
                                            (this.opts.startDelete
                                                ? (this.insert(e),
                                                    this.queue.add([this.delete, !0]),
                                                    void this.addSplitPause(1))
                                                : void (this.opts.strings = [].concat(
                                                    h(v(e.trim())),
                                                    h(this.opts.strings)
                                                )))
                                        );
                                    }
                                },
                                {
                                    key: "wait",
                                    value: function (e, t) {
                                        this.timeouts.push(setTimeout(e, t));
                                    }
                                },
                                {
                                    key: "setPace",
                                    value: function () {
                                        var e = this.opts.speed,
                                            t =
                                                null !== this.opts.deleteSpeed
                                                    ? this.opts.deleteSpeed
                                                    : this.opts.speed / 3,
                                            n = e / 2,
                                            i = t / 2;
                                        (this.typePace = this.opts.lifeLike ? o(e, n) : e),
                                            (this.deletePace = this.opts.lifeLike ? o(t, i) : t);
                                    }
                                },
                                {
                                    key: "pause",
                                    value: function () {
                                        var e = this,
                                            t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0] &&
                                                arguments[0];
                                        return new Promise(function (n, i) {
                                            e.wait(function () {
                                                return n();
                                            }, t || e.opts.nextStringDelay.total);
                                        });
                                    }
                                },
                                {
                                    key: "type",
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, i) {
                                            t.wait(function () {
                                                return "string" == typeof e
                                                    ? (t.insert(e), n())
                                                    : e.isFirstCharacter || null === e.content
                                                        ? (t.insert(
                                                            A({
                                                                tag: e.tag,
                                                                attributes: e.attributes,
                                                                content: e.content
                                                            })
                                                        ),
                                                            n())
                                                        : (t.insert(e.content, !0), n());
                                            }, t.typePace);
                                        });
                                    }
                                },
                                {
                                    key: "empty",
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t) {
                                            return e.setContents(""), t();
                                        });
                                    }
                                },
                                {
                                    key: "delete",
                                    value: function () {
                                        var e = this,
                                            t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0] &&
                                                arguments[0];
                                        return new Promise(function (n, i) {
                                            e.wait(function () {
                                                var i = e.getNoderized();
                                                return (
                                                    i.splice(-1, 1),
                                                    (i = (function (e) {
                                                        return (e = e.map(function (t, n) {
                                                            if (
                                                                "object" === l(t) &&
                                                                (t.isFirstCharacter || null === t.content)
                                                            ) {
                                                                for (var i = n, o = [t.content], r = !1; !r;) {
                                                                    var s = e[++i];
                                                                    void 0 !== s && o.push(s.content),
                                                                        (void 0 === s || s.isLastCharacter) &&
                                                                        (r = !0);
                                                                }
                                                                return A({
                                                                    tag: t.tag,
                                                                    attributes: t.attributes,
                                                                    content: o.join("")
                                                                });
                                                            }
                                                            return t;
                                                        })).filter(function (e) {
                                                            return "object" !== l(e);
                                                        });
                                                    })(i)),
                                                    e.setContents(i.join("")),
                                                    t && i.length > 0
                                                        ? e.delete(!0).then(function () {
                                                            return n();
                                                        })
                                                        : n()
                                                );
                                            }, e.deletePace);
                                        });
                                    }
                                },
                                {
                                    key: "setOptions",
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n) {
                                            return (t.opts = g({}, t.opts, e)), n();
                                        });
                                    }
                                }
                            ]) && d(t.prototype, n),
                            e
                        );
                    })(),
                    E = function (e) {
                        return (
                            "string" == typeof e
                                ? (e = document.querySelectorAll(e))
                                : e instanceof NodeList || (e = [e]),
                            [].slice.call(e)
                        );
                    };
                n.d(t, "default", function () {
                    return k;
                });
                var k = (function () {
                    function e(t, n) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.instances = E(t).map(function (e) {
                                return new x({
                                    element: e,
                                    id: Math.random()
                                        .toString(36)
                                        .substring(2, 15),
                                    options: n,
                                    queue: []
                                });
                            }));
                    }
                    var t, n;
                    return (
                        (t = e),
                        (n = [
                            {
                                key: "each",
                                value: function (e) {
                                    var t = this;
                                    this.instances.forEach(function (n) {
                                        e.call(t, n);
                                    });
                                }
                            },
                            {
                                key: "queueUp",
                                value: function (e) {
                                    var t = this,
                                        n =
                                            arguments.length > 1 && void 0 !== arguments[1]
                                                ? arguments[1]
                                                : null,
                                        i =
                                            arguments.length > 2 && void 0 !== arguments[2]
                                                ? arguments[2]
                                                : 1;
                                    this.each(function (o) {
                                        for (
                                            var r = "string" != typeof e,
                                            s = r ? e : o[e],
                                            a = r ? t : n,
                                            l = 0;
                                            l < i;
                                            l++
                                        )
                                            o.queue.add([s, a]);
                                    });
                                }
                            },
                            {
                                key: "is",
                                value: function (e) {
                                    return (
                                        (t = this.instances),
                                        (n = e),
                                        (i = !0),
                                        !!t.length &&
                                        t.filter(function (e) {
                                            return e.status[n] === i;
                                        }).length === t.length
                                    );
                                    var t, n, i;
                                }
                            },
                            {
                                key: "freeze",
                                value: function () {
                                    this.each(function (e) {
                                        e.status.frozen = !0;
                                    });
                                }
                            },
                            {
                                key: "unfreeze",
                                value: function () {
                                    this.each(function (e) {
                                        e.status.frozen && ((e.status.frozen = !1), e.fire());
                                    });
                                }
                            },
                            {
                                key: "type",
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : "";
                                    return (
                                        this.each(function (t) {
                                            return t.queueString(e);
                                        }),
                                        this
                                    );
                                }
                            },
                            {
                                key: "delete",
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null;
                                    return (
                                        this.queueUp("delete", null === e, null === e ? 1 : e), this
                                    );
                                }
                            },
                            {
                                key: "pause",
                                value: function () {
                                    var e =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null;
                                    return this.queueUp("pause", e), this;
                                }
                            },
                            {
                                key: "break",
                                value: function () {
                                    return this.queueUp("type", "<br>"), this;
                                }
                            },
                            {
                                key: "options",
                                value: function (e) {
                                    return this.queueUp("setOptions", e), this;
                                }
                            },
                            {
                                key: "exec",
                                value: function (e) {
                                    return this.queueUp(e), this;
                                }
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    var e =
                                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                                        arguments[0];
                                    this.each(function (t) {
                                        t.timeouts.forEach(function (e) {
                                            clearTimeout(e);
                                        }),
                                            (t.timeouts = []);
                                        var n = t.isInput
                                            ? null
                                            : t.$eWrapper.querySelector(".ti-cursor");
                                        e &&
                                            t.opts.cursor &&
                                            null !== n &&
                                            t.$eWrapper.removeChild(n),
                                            (t.status.destroyed = !0);
                                    });
                                }
                            },
                            {
                                key: "empty",
                                value: function () {
                                    return this.queueUp("empty"), this;
                                }
                            },
                            {
                                key: "reset",
                                value: function () {
                                    return (
                                        this.destroy(),
                                        (this.instances = this.instances.map(function (e) {
                                            return e.reset();
                                        })),
                                        this
                                    );
                                }
                            },
                            {
                                key: "go",
                                value: function () {
                                    return (
                                        this.each(function (e) {
                                            e.init();
                                        }),
                                        this
                                    );
                                }
                            }
                        ]) && f(t.prototype, n),
                        e
                    );
                })();
            }
        ]).default;
    });
var EasyAutocomplete = (function (e) {
    return (
        (e.Configuration = function (e) {
            function t(e) {
                return void 0 !== i[e] && null !== i[e];
            }
            function n(e, t) {
                function n(t, i) {
                    for (var r in i)
                        void 0 === t[r] &&
                            e.log(
                                "Property '" +
                                r +
                                "' does not exist in EasyAutocomplete options API."
                            ),
                            "object" == typeof t[r] &&
                            -1 === $.inArray(r, o) &&
                            n(t[r], i[r]);
                }
                n(i, t);
            }
            var i = {
                data: "list-required",
                url: "list-required",
                dataType: "json",
                listLocation: function (e) {
                    return e;
                },
                xmlElementName: "",
                getValue: function (e) {
                    return e;
                },
                autocompleteOff: !0,
                placeholder: !1,
                ajaxCallback: function () { },
                matchResponseProperty: !1,
                list: {
                    sort: {
                        enabled: !1,
                        method: function (e, t) {
                            return (
                                (e = i.getValue(e)),
                                (t = i.getValue(t)),
                                t > e ? -1 : e > t ? 1 : 0
                            );
                        }
                    },
                    maxNumberOfElements: 6,
                    hideOnEmptyPhrase: !0,
                    match: {
                        enabled: !1,
                        caseSensitive: !1,
                        method: function (e, t) {
                            return e.search(t) > -1;
                        }
                    },
                    showAnimation: {
                        type: "normal",
                        time: 400,
                        callback: function () { }
                    },
                    hideAnimation: {
                        type: "normal",
                        time: 400,
                        callback: function () { }
                    },
                    onClickEvent: function () { },
                    onSelectItemEvent: function () { },
                    onLoadEvent: function () { },
                    onChooseEvent: function () { },
                    onKeyEnterEvent: function () { },
                    onMouseOverEvent: function () { },
                    onMouseOutEvent: function () { },
                    onShowListEvent: function () { },
                    onHideListEvent: function () { }
                },
                highlightPhrase: !0,
                theme: "",
                cssClasses: "",
                minCharNumber: 0,
                requestDelay: 0,
                adjustWidth: !0,
                ajaxSettings: {},
                preparePostData: function (e, t) {
                    return e;
                },
                loggerEnabled: !0,
                template: "",
                categoriesAssigned: !1,
                categories: [{ maxNumberOfElements: 4 }]
            },
                o = ["ajaxSettings", "template"];
            (this.get = function (e) {
                return i[e];
            }),
                (this.equals = function (e, n) {
                    return !(!t(e) || i[e] !== n);
                }),
                (this.checkDataUrlProperties = function () {
                    return "list-required" !== i.url || "list-required" !== i.data;
                }),
                (this.checkRequiredProperties = function () {
                    for (var e in i)
                        if ("required" === i[e])
                            return logger.error("Option " + e + " must be defined"), !1;
                    return !0;
                }),
                (this.printPropertiesThatDoesntExist = function (e, t) {
                    n(e, t);
                }),
                (function () {
                    if (
                        ("xml" === e.dataType &&
                            (e.getValue ||
                                (e.getValue = function (e) {
                                    return $(e).text();
                                }),
                                e.list || (e.list = {}),
                                e.list.sort || (e.list.sort = {}),
                                (e.list.sort.method = function (t, n) {
                                    return (
                                        (t = e.getValue(t)),
                                        (n = e.getValue(n)),
                                        n > t ? -1 : t > n ? 1 : 0
                                    );
                                }),
                                e.list.match || (e.list.match = {}),
                                (e.list.match.method = function (e, t) {
                                    return e.search(t) > -1;
                                })),
                            void 0 !== e.categories && e.categories instanceof Array)
                    ) {
                        for (var t = [], n = 0, o = e.categories.length; o > n; n += 1) {
                            var r = e.categories[n];
                            for (var s in i.categories[0])
                                void 0 === r[s] && (r[s] = i.categories[0][s]);
                            t.push(r);
                        }
                        e.categories = t;
                    }
                })(),
                (function () {
                    function t(e, n) {
                        var i = e || {};
                        for (var o in e)
                            void 0 !== n[o] &&
                                null !== n[o] &&
                                ("object" != typeof n[o] || n[o] instanceof Array
                                    ? (i[o] = n[o])
                                    : t(e[o], n[o]));
                        return (
                            void 0 !== n.data &&
                            null !== n.data &&
                            "object" == typeof n.data &&
                            (i.data = n.data),
                            i
                        );
                    }
                    i = t(i, e);
                })(),
                !0 === i.loggerEnabled && n(console, e),
                (function () {
                    void 0 !== e.ajaxSettings && "object" == typeof e.ajaxSettings
                        ? (i.ajaxSettings = e.ajaxSettings)
                        : (i.ajaxSettings = {});
                })(),
                (function () {
                    if ("list-required" !== i.url && "function" != typeof i.url) {
                        var t = i.url;
                        i.url = function () {
                            return t;
                        };
                    }
                    if (
                        void 0 !== i.ajaxSettings.url &&
                        "function" != typeof i.ajaxSettings.url
                    ) {
                        var t = i.ajaxSettings.url;
                        i.ajaxSettings.url = function () {
                            return t;
                        };
                    }
                    if ("string" == typeof i.listLocation) {
                        var n = i.listLocation;
                        "XML" === i.dataType.toUpperCase()
                            ? (i.listLocation = function (e) {
                                return $(e).find(n);
                            })
                            : (i.listLocation = function (e) {
                                return e[n];
                            });
                    }
                    if ("string" == typeof i.getValue) {
                        var o = i.getValue;
                        i.getValue = function (e) {
                            return e[o];
                        };
                    }
                    void 0 !== e.categories && (i.categoriesAssigned = !0);
                })();
        }),
        e
    );
})(EasyAutocomplete || {}),
    EasyAutocomplete = (function (e) {
        return (
            (e.Logger = function () {
                (this.error = function (e) {
                    console.log("ERROR: " + e);
                }),
                    (this.warning = function (e) {
                        console.log("WARNING: " + e);
                    });
            }),
            e
        );
    })(EasyAutocomplete || {}),
    EasyAutocomplete = (function (e) {
        return (
            (e.Constans = function () {
                var e = {
                    CONTAINER_CLASS: "easy-autocomplete-container",
                    CONTAINER_ID: "eac-container-",
                    WRAPPER_CSS_CLASS: "easy-autocomplete"
                };
                this.getValue = function (t) {
                    return e[t];
                };
            }),
            e
        );
    })(EasyAutocomplete || {}),
    EasyAutocomplete = (function (e) {
        return (
            (e.ListBuilderService = function (e, t) {
                function n(t, n) {
                    var i = {};
                    if (
                        ((i =
                            "XML" === e.get("dataType").toUpperCase()
                                ? (function () {
                                    var i,
                                        o = {};
                                    return (
                                        void 0 !== t.xmlElementName &&
                                        (o.xmlElementName = t.xmlElementName),
                                        void 0 !== t.listLocation
                                            ? (i = t.listLocation)
                                            : void 0 !== e.get("listLocation") &&
                                            (i = e.get("listLocation")),
                                        void 0 !== i
                                            ? "string" == typeof i
                                                ? (o.data = $(n).find(i))
                                                : "function" == typeof i && (o.data = i(n))
                                            : (o.data = n),
                                        o
                                    );
                                })()
                                : (function () {
                                    var e = {};
                                    return (
                                        void 0 !== t.listLocation
                                            ? "string" == typeof t.listLocation
                                                ? (e.data = n[t.listLocation])
                                                : "function" == typeof t.listLocation &&
                                                (e.data = t.listLocation(n))
                                            : (e.data = n),
                                        e
                                    );
                                })()),
                            void 0 !== t.header && (i.header = t.header),
                            void 0 !== t.maxNumberOfElements &&
                            (i.maxNumberOfElements = t.maxNumberOfElements),
                            void 0 !== e.get("list").maxNumberOfElements &&
                            (i.maxListSize = e.get("list").maxNumberOfElements),
                            void 0 !== t.getValue)
                    )
                        if ("string" == typeof t.getValue) {
                            var o = t.getValue;
                            i.getValue = function (e) {
                                return e[o];
                            };
                        } else "function" == typeof t.getValue && (i.getValue = t.getValue);
                    else i.getValue = e.get("getValue");
                    return i;
                }
                function i(t) {
                    var n = [];
                    return (
                        void 0 === t.xmlElementName &&
                        (t.xmlElementName = e.get("xmlElementName")),
                        $(t.data)
                            .find(t.xmlElementName)
                            .each(function () {
                                n.push(this);
                            }),
                        n
                    );
                }
                (this.init = function (t) {
                    var n = [],
                        i = {};
                    return (
                        (i.data = e.get("listLocation")(t)),
                        (i.getValue = e.get("getValue")),
                        (i.maxListSize = e.get("list").maxNumberOfElements),
                        n.push(i),
                        n
                    );
                }),
                    (this.updateCategories = function (t, i) {
                        if (e.get("categoriesAssigned")) {
                            t = [];
                            for (var o = 0; o < e.get("categories").length; o += 1) {
                                var r = n(e.get("categories")[o], i);
                                t.push(r);
                            }
                        }
                        return t;
                    }),
                    (this.convertXml = function (t) {
                        if ("XML" === e.get("dataType").toUpperCase())
                            for (var n = 0; n < t.length; n += 1) t[n].data = i(t[n]);
                        return t;
                    }),
                    (this.processData = function (n, i) {
                        for (var o = 0, r = n.length; r > o; o += 1)
                            n[o].data = t(e, n[o], i);
                        return n;
                    }),
                    (this.checkIfDataExists = function (e) {
                        for (var t = 0, n = e.length; n > t; t += 1)
                            if (
                                void 0 !== e[t].data &&
                                e[t].data instanceof Array &&
                                e[t].data.length > 0
                            )
                                return !0;
                        return !1;
                    });
            }),
            e
        );
    })(EasyAutocomplete || {}),
    EasyAutocomplete = (function (e) {
        return (
            (e.proccess = function (t, n, i) {
                function o(e, n) {
                    return (
                        t.get("list").match.caseSensitive ||
                        ("string" == typeof e && (e = e.toLowerCase()),
                            (n = n.toLowerCase())),
                        !!t.get("list").match.method(e, n)
                    );
                }
                e.proccess.match = o;
                var r = n.data,
                    s = i;
                return (
                    (r = (function (e, n) {
                        var i = [],
                            r = "";
                        if (t.get("list").match.enabled)
                            for (var s = 0, a = e.length; a > s; s += 1)
                                (r = t.get("getValue")(e[s])), o(r, n) && i.push(e[s]);
                        else i = e;
                        return i;
                    })(r, s)),
                    (r = (function (e) {
                        return (
                            void 0 !== n.maxNumberOfElements &&
                            e.length > n.maxNumberOfElements &&
                            (e = e.slice(0, n.maxNumberOfElements)),
                            e
                        );
                    })(r)),
                    (r = (function (e) {
                        return (
                            t.get("list").sort.enabled && e.sort(t.get("list").sort.method), e
                        );
                    })(r))
                );
            }),
            e
        );
    })(EasyAutocomplete || {}),
    EasyAutocomplete = (function (e) {
        return (
            (e.Template = function (e) {
                var t = {
                    basic: {
                        type: "basic",
                        method: function (e) {
                            return e;
                        },
                        cssClass: ""
                    },
                    description: {
                        type: "description",
                        fields: { description: "description" },
                        method: function (e) {
                            return e + " - description";
                        },
                        cssClass: "eac-description"
                    },
                    iconLeft: {
                        type: "iconLeft",
                        fields: { icon: "" },
                        method: function (e) {
                            return e;
                        },
                        cssClass: "eac-icon-left"
                    },
                    iconRight: {
                        type: "iconRight",
                        fields: { iconSrc: "" },
                        method: function (e) {
                            return e;
                        },
                        cssClass: "eac-icon-right"
                    },
                    links: {
                        type: "links",
                        fields: { link: "" },
                        method: function (e) {
                            return e;
                        },
                        cssClass: ""
                    },
                    custom: { type: "custom", method: function () { }, cssClass: "" }
                },
                    n = function (e) {
                        var n,
                            i = e.fields;
                        return "description" === e.type
                            ? ((n = t.description.method),
                                "string" == typeof i.description
                                    ? (n = function (e, t) {
                                        return e + " - <span>" + t[i.description] + "</span>";
                                    })
                                    : "function" == typeof i.description &&
                                    (n = function (e, t) {
                                        return e + " - <span>" + i.description(t) + "</span>";
                                    }),
                                n)
                            : "iconRight" === e.type
                                ? ("string" == typeof i.iconSrc
                                    ? (n = function (e, t) {
                                        return (
                                            e +
                                            "<img class='eac-icon' src='" +
                                            t[i.iconSrc] +
                                            "' />"
                                        );
                                    })
                                    : "function" == typeof i.iconSrc &&
                                    (n = function (e, t) {
                                        return (
                                            e +
                                            "<img class='eac-icon' src='" +
                                            i.iconSrc(t) +
                                            "' />"
                                        );
                                    }),
                                    n)
                                : "iconLeft" === e.type
                                    ? ("string" == typeof i.iconSrc
                                        ? (n = function (e, t) {
                                            return (
                                                "<img class='eac-icon' src='" +
                                                t[i.iconSrc] +
                                                "' />" +
                                                e
                                            );
                                        })
                                        : "function" == typeof i.iconSrc &&
                                        (n = function (e, t) {
                                            return (
                                                "<img class='eac-icon' src='" +
                                                i.iconSrc(t) +
                                                "' />" +
                                                e
                                            );
                                        }),
                                        n)
                                    : "links" === e.type
                                        ? ("string" == typeof i.link
                                            ? (n = function (e, t) {
                                                return "<a href='" + t[i.link] + "' >" + e + "</a>";
                                            })
                                            : "function" == typeof i.link &&
                                            (n = function (e, t) {
                                                return "<a href='" + i.link(t) + "' >" + e + "</a>";
                                            }),
                                            n)
                                        : "custom" === e.type
                                            ? e.method
                                            : t.basic.method;
                    };
                (this.getTemplateClass = (function (e) {
                    var n = function () {
                        return "";
                    };
                    return e && e.type && e.type && t[e.type]
                        ? (function () {
                            var n = t[e.type].cssClass;
                            return function () {
                                return n;
                            };
                        })()
                        : n;
                })(e)),
                    (this.build = (function (e) {
                        return e && e.type && e.type && t[e.type] ? n(e) : t.basic.method;
                    })(e));
            }),
            e
        );
    })(EasyAutocomplete || {}),
    EasyAutocomplete = (function (e) {
        return (
            (e.main = function (t, n) {
                function i() {
                    return 0 === A.length
                        ? void g.error("Input field doesn't exist.")
                        : p.checkDataUrlProperties()
                            ? p.checkRequiredProperties()
                                ? (o(), void s())
                                : void g.error("Will not work without mentioned properties.")
                            : void g.error(
                                "One of options variables 'data' or 'url' must be defined."
                            );
                }
                function o() {
                    function e() {
                        var e = A.outerWidth();
                        A.parent().css("width", e);
                    }
                    function t(e, t) {
                        return p.get("highlightPhrase") && "" !== t ? i(e, t) : e;
                    }
                    function n(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    }
                    function i(e, t) {
                        var i = n(t);
                        return (e + "").replace(
                            new RegExp("(" + i + ")", "gi"),
                            "<b>$1</b>"
                        );
                    }
                    A.parent().hasClass(f.getValue("WRAPPER_CSS_CLASS")) &&
                        ((function () {
                            A.next("." + f.getValue("CONTAINER_CLASS")).remove();
                        })(),
                            (function () {
                                A.unwrap();
                            })()),
                        (function () {
                            var t = $("<div>"),
                                n = f.getValue("WRAPPER_CSS_CLASS");
                            p.get("theme") &&
                                "" !== p.get("theme") &&
                                (n += " eac-" + p.get("theme")),
                                p.get("cssClasses") &&
                                "" !== p.get("cssClasses") &&
                                (n += " " + p.get("cssClasses")),
                                "" !== m.getTemplateClass() &&
                                (n += " " + m.getTemplateClass()),
                                t.addClass(n),
                                A.wrap(t),
                                !0 === p.get("adjustWidth") && e();
                        })(),
                        (function () {
                            var e = $("<div>").addClass(f.getValue("CONTAINER_CLASS"));
                            e.attr("id", r()).prepend($("<ul>")),
                                (function () {
                                    e.on("show.eac", function () {
                                        switch (p.get("list").showAnimation.type) {
                                            case "slide":
                                                var t = p.get("list").showAnimation.time,
                                                    n = p.get("list").showAnimation.callback;
                                                e.find("ul").slideDown(t, n);
                                                break;
                                            case "fade":
                                                var t = p.get("list").showAnimation.time,
                                                    n = p.get("list").showAnimation.callback;
                                                e.find("ul").fadeIn(t);
                                                break;
                                            default:
                                                e.find("ul").show();
                                        }
                                        p.get("list").onShowListEvent();
                                    })
                                        .on("hide.eac", function () {
                                            switch (p.get("list").hideAnimation.type) {
                                                case "slide":
                                                    var t = p.get("list").hideAnimation.time,
                                                        n = p.get("list").hideAnimation.callback;
                                                    e.find("ul").slideUp(t, n);
                                                    break;
                                                case "fade":
                                                    var t = p.get("list").hideAnimation.time,
                                                        n = p.get("list").hideAnimation.callback;
                                                    e.find("ul").fadeOut(t, n);
                                                    break;
                                                default:
                                                    e.find("ul").hide();
                                            }
                                            p.get("list").onHideListEvent();
                                        })
                                        .on("selectElement.eac", function () {
                                            e.find("ul li").removeClass("selected"),
                                                e
                                                    .find("ul li")
                                                    .eq(w)
                                                    .addClass("selected"),
                                                p.get("list").onSelectItemEvent();
                                        })
                                        .on("loadElements.eac", function (n, i, o) {
                                            var r = "",
                                                s = e.find("ul");
                                            s.empty().detach(), (C = []);
                                            for (var a = 0, l = 0, u = i.length; u > l; l += 1) {
                                                var h = i[l].data;
                                                if (0 !== h.length) {
                                                    void 0 !== i[l].header &&
                                                        i[l].header.length > 0 &&
                                                        s.append(
                                                            "<div class='eac-category' >" +
                                                            i[l].header +
                                                            "</div>"
                                                        );
                                                    for (
                                                        var d = 0, f = h.length;
                                                        f > d && a < i[l].maxListSize;
                                                        d += 1
                                                    )
                                                        (r = $("<li><div class='eac-item'></div></li>")),
                                                            (function () {
                                                                var e = d,
                                                                    n = a,
                                                                    s = i[l].getValue(h[e]);
                                                                r.find(" > div")
                                                                    .on("click", function () {
                                                                        A.val(s).trigger("change"),
                                                                            (w = n),
                                                                            c(n),
                                                                            p.get("list").onClickEvent(),
                                                                            p.get("list").onChooseEvent();
                                                                    })
                                                                    .mouseover(function () {
                                                                        (w = n),
                                                                            c(n),
                                                                            p.get("list").onMouseOverEvent();
                                                                    })
                                                                    .mouseout(function () {
                                                                        p.get("list").onMouseOutEvent();
                                                                    })
                                                                    .html(m.build(t(s, o), h[e]));
                                                            })(),
                                                            s.append(r),
                                                            C.push(h[d]),
                                                            (a += 1);
                                                }
                                            }
                                            e.append(s), p.get("list").onLoadEvent();
                                        });
                                })(),
                                A.after(e);
                        })(),
                        (b = $("#" + r())),
                        p.get("placeholder") && A.attr("placeholder", p.get("placeholder"));
                }
                function r() {
                    var e = A.attr("id");
                    return (e = f.getValue("CONTAINER_ID") + e);
                }
                function s() {
                    function e() {
                        A.focusout(function () {
                            var e,
                                t = A.val();
                            p.get("list").match.caseSensitive || (t = t.toLowerCase());
                            for (var n = 0, i = C.length; i > n; n += 1)
                                if (
                                    ((e = p.get("getValue")(C[n])),
                                        p.get("list").match.caseSensitive || (e = e.toLowerCase()),
                                        e === t)
                                )
                                    return (w = n), void c(w);
                        });
                    }
                    function t() {
                        A.off("keyup").keyup(function (e) {
                            function t(e) {
                                function t(e, t) {
                                    return (
                                        !1 === p.get("matchResponseProperty") ||
                                        ("string" == typeof p.get("matchResponseProperty")
                                            ? t[p.get("matchResponseProperty")] === e
                                            : "function" != typeof p.get("matchResponseProperty") ||
                                            p.get("matchResponseProperty")(t) === e)
                                    );
                                }
                                if (!(e.length < p.get("minCharNumber"))) {
                                    if ("list-required" !== p.get("data")) {
                                        var n = p.get("data"),
                                            i = v.init(n);
                                        (i = v.updateCategories(i, n)),
                                            (i = v.processData(i, e)),
                                            u(i, e),
                                            A.parent().find("li").length > 0 ? a() : l();
                                    }
                                    var o = (function () {
                                        var e = {},
                                            t = p.get("ajaxSettings") || {};
                                        for (var n in t) e[n] = t[n];
                                        return e;
                                    })();
                                    (void 0 !== o.url && "" !== o.url) || (o.url = p.get("url")),
                                        (void 0 !== o.dataType && "" !== o.dataType) ||
                                        (o.dataType = p.get("dataType")),
                                        void 0 !== o.url &&
                                        "list-required" !== o.url &&
                                        ((o.url = o.url(e)),
                                            (o.data = p.get("preparePostData")(o.data, e)),
                                            $.ajax(o)
                                                .done(function (n) {
                                                    var i = v.init(n);
                                                    (i = v.updateCategories(i, n)),
                                                        (i = v.convertXml(i)),
                                                        t(e, n) && ((i = v.processData(i, e)), u(i, e)),
                                                        v.checkIfDataExists(i) &&
                                                            A.parent().find("li").length > 0
                                                            ? a()
                                                            : l(),
                                                        p.get("ajaxCallback")();
                                                })
                                                .fail(function () {
                                                    g.warning("Fail to load response data");
                                                })
                                                .always(function () { }));
                                }
                            }
                            switch (e.keyCode) {
                                case 27:
                                    l(), h();
                                    break;
                                case 38:
                                    e.preventDefault(),
                                        C.length > 0 &&
                                        w > 0 &&
                                        ((w -= 1), A.val(p.get("getValue")(C[w])), c(w));
                                    break;
                                case 40:
                                    e.preventDefault(),
                                        C.length > 0 &&
                                        w < C.length - 1 &&
                                        ((w += 1), A.val(p.get("getValue")(C[w])), c(w));
                                    break;
                                default:
                                    if (e.keyCode > 40 || 8 === e.keyCode) {
                                        var n = A.val();
                                        !0 !== p.get("list").hideOnEmptyPhrase ||
                                            8 !== e.keyCode ||
                                            "" !== n
                                            ? p.get("requestDelay") > 0
                                                ? (void 0 !== d && clearTimeout(d),
                                                    (d = setTimeout(function () {
                                                        t(n);
                                                    }, p.get("requestDelay"))))
                                                : t(n)
                                            : l();
                                    }
                            }
                        });
                    }
                    function n() {
                        A.on("keydown", function (e) {
                            return (
                                (e = e || window.event),
                                38 === e.keyCode ? ((suppressKeypress = !0), !1) : void 0
                            );
                        }).keydown(function (e) {
                            13 === e.keyCode &&
                                w > -1 &&
                                (A.val(p.get("getValue")(C[w])),
                                    p.get("list").onKeyEnterEvent(),
                                    p.get("list").onChooseEvent(),
                                    (w = -1),
                                    l(),
                                    e.preventDefault());
                        });
                    }
                    function i() {
                        A.off("keypress");
                    }
                    function o() {
                        A.focus(function () {
                            "" !== A.val() && C.length > 0 && ((w = -1), a());
                        });
                    }
                    function r() {
                        A.blur(function () {
                            setTimeout(function () {
                                (w = -1), l();
                            }, 250);
                        });
                    }
                    function s() {
                        A.attr("autocomplete", "off");
                    }
                    !(function () {
                        y("autocompleteOff", !0) && s(), e(), t(), n(), i(), o(), r();
                    })();
                }
                function a() {
                    b.trigger("show.eac");
                }
                function l() {
                    b.trigger("hide.eac");
                }
                function c(e) {
                    b.trigger("selectElement.eac", e);
                }
                function u(e, t) {
                    b.trigger("loadElements.eac", [e, t]);
                }
                function h() {
                    A.trigger("blur");
                }
                var d,
                    f = new e.Constans(),
                    p = new e.Configuration(n),
                    g = new e.Logger(),
                    m = new e.Template(n.template),
                    v = new e.ListBuilderService(p, e.proccess),
                    y = p.equals,
                    A = t,
                    b = "",
                    C = [],
                    w = -1;
                (e.consts = f),
                    (this.getConstants = function () {
                        return f;
                    }),
                    (this.getConfiguration = function () {
                        return p;
                    }),
                    (this.getContainer = function () {
                        return b;
                    }),
                    (this.getSelectedItemIndex = function () {
                        return w;
                    }),
                    (this.getItems = function () {
                        return C;
                    }),
                    (this.getItemData = function (e) {
                        return C.length < e || void 0 === C[e] ? -1 : C[e];
                    }),
                    (this.getSelectedItemData = function () {
                        return this.getItemData(w);
                    }),
                    (this.build = function () {
                        o();
                    }),
                    (this.init = function () {
                        i();
                    });
            }),
            (e.eacHandles = []),
            (e.getHandle = function (t) {
                return e.eacHandles[t];
            }),
            (e.inputHasId = function (e) {
                return void 0 !== $(e).attr("id") && $(e).attr("id").length > 0;
            }),
            (e.assignRandomId = function (t) {
                var n = "";
                do {
                    n = "eac-" + Math.floor(1e4 * Math.random());
                } while (0 !== $("#" + n).length);
                (elementId = e.consts.getValue("CONTAINER_ID") + n), $(t).attr("id", n);
            }),
            (e.setHandle = function (t, n) {
                e.eacHandles[n] = t;
            }),
            e
        );
    })(EasyAutocomplete || {});
!(function (e) {
    (e.fn.easyAutocomplete = function (t) {
        return this.each(function () {
            var n = e(this),
                i = new EasyAutocomplete.main(n, t);
            EasyAutocomplete.inputHasId(n) || EasyAutocomplete.assignRandomId(n),
                i.init(),
                EasyAutocomplete.setHandle(i, n.attr("id"));
        });
    }),
        (e.fn.getSelectedItemIndex = function () {
            var t = e(this).attr("id");
            return void 0 !== t
                ? EasyAutocomplete.getHandle(t).getSelectedItemIndex()
                : -1;
        }),
        (e.fn.getItems = function () {
            var t = e(this).attr("id");
            return void 0 !== t ? EasyAutocomplete.getHandle(t).getItems() : -1;
        }),
        (e.fn.getItemData = function (t) {
            var n = e(this).attr("id");
            return void 0 !== n && t > -1
                ? EasyAutocomplete.getHandle(n).getItemData(t)
                : -1;
        }),
        (e.fn.getSelectedItemData = function () {
            var t = e(this).attr("id");
            return void 0 !== t
                ? EasyAutocomplete.getHandle(t).getSelectedItemData()
                : -1;
        });
}),
    $(function () {
        !(function () {
            new TypeIt(".heading-landing__highlight", {
                speed: 75,
                breakLines: !1,
                waitUntilVisible: !0,
                loop: !0,
                loopDelay: 1e3
            })
                .type("Personalizado.")
                .pause(2e3)
                .delete()
                //.type("mensagem 01")
                //.pause(2e3)
                //.delete()
                //.type("mensagem 02")
                //.pause(2e3)
                //.delete()
                //.type("mensagem 03")
                //.pause(2e3)
                //.delete()
                .type("de Qualidade.")
                .pause(3e3)
                .go();
        })();
    });
