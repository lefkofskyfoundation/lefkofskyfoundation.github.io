function sizeThumbnail() {
    var e = $("#project_thumbnail");
    e.hide(), e.attr("src", $(e).attr("src") + "?" + (new Date).getTime()), e.load(function() {
        var t = e.width(),
            n = e.height(),
            i = Math.abs(t - n);
        t > n && i >= 30 && 40 > i ? e.css({
            "max-width": "105%"
        }) : n > t && i > 30 ? e.css({
            "max-height": "75%"
        }) : 30 > i || t == n ? e.css({
            "max-width": "55%"
        }) : t > n && i > 40 && e.css({
            "max-width": "75%"
        }), e.fadeIn()
    })
}

function url_router(e) {
    switch (e) {
        case "sitemap":
            sitemap_pages();
            break;
        case "about":
        case "founders-message":
            lff.setStopCycle(!0), about_pages();
            break;
        case "liz-and-eric-lefkofsky":
            lff.setStopCycle(!0), about_pages();
            break;
        case "education":
            lff.setStopCycle(!0), education_pages();
            break;
        case "medical":
            lff.setStopCycle(!0), medical_pages();
            break;
        case "human-rights":
            lff.setStopCycle(!0), human_pages();
            break;
        case "arts-culture":
            lff.setStopCycle(!0), arts_pages();
            break;
        case "contact":
            lff.setStopCycle(!0), contact_page();
            break;
        case "":
            home_page();
            break;
        default:
            default_url()
    }
}

function home_page() {
    $("#founders, #liz-and-eric").hide(), $(".icon_nav_link.active").removeClass("active").children("span.active").animate({
        opacity: "0"
    }).removeClass("active"), $(".grant_nav.active").fadeOut().removeClass("active")
}

function about_pages() {
    !menu_open && can_open && can_close && !$menu.hasClass("expanded") && toggle_menu_up(), menu_open = !0, can_open = !1, can_close = !1, $menu_items.children("a:not(.about)").hide(), $menu_items.children("a.about").show(), $("#home").click(function() {
        $("#founders, #liz-and-eric").hide(), $menu_items.children("a:not(.about)").show()
    }), $(".nano").nanoScroller({
        alwaysVisible: !0
    })
}

function sitemap_pages() {
    $(".nano").nanoScroller({
        alwaysVisible: !0
    })
}

function education_pages() {
    $("a#education").addClass("active").children("span").addClass("active").animate({
        opacity: "1"
    })
}

function medical_pages() {
    $("a#medical").addClass("active").children("span").addClass("active").animate({
        opacity: "1"
    })
}

function human_pages() {
    $("a#human").addClass("active").children("span").addClass("active").animate({
        opacity: "1"
    })
}

function arts_pages() {
    $("a#arts").addClass("active").children("span").addClass("active").animate({
        opacity: "1"
    })
}

function contact_page() {
    if ("" === getParameterByName("success"));
    else {
        var e = getParameterByName("success");
        "true" === e ? $("#contact_form").html("<h3>Thank you for sending your information!</h3>") : "false" === e && $("#contact_form").prepend("<h4>Something went wrong, please try again!</h4>")
    }
    $("#founders, #liz-and-eric").hide()
}

function default_url() {
    can_open = !0, can_close = !0, menu_open && can_close && can_open && !$menu.hasClass("expanded") && toggle_menu_down(), $menu_items.children().show(), $("#founders, #liz-lefkofsky, #eric-lefkofsky").hide(), menu_open = !1
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = "[\\?&]" + e + "=([^&#]*)",
        n = new RegExp(t),
        i = n.exec(window.location.search);
    return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
}! function(e, t) {
    function n(e) {
        return I.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    function i(e) {
        if (!bt[e]) {
            var t = $.body,
                n = I("<" + e + ">").appendTo(t),
                i = n.css("display");
            n.remove(), ("none" === i || "" === i) && (mt || (mt = $.createElement("iframe"), mt.frameBorder = mt.width = mt.height = 0), t.appendChild(mt), gt && mt.createElement || (gt = (mt.contentWindow || mt.contentDocument).document, gt.write(("CSS1Compat" === $.compatMode ? "<!doctype html>" : "") + "<html><body>"), gt.close()), n = gt.createElement(e), gt.body.appendChild(n), i = I.css(n, "display"), t.removeChild(mt)), bt[e] = i
        }
        return bt[e]
    }

    function r(e, t) {
        var n = {};
        return I.each(_t.concat.apply([], _t.slice(0, t)), function() {
            n[this] = e
        }), n
    }

    function a() {
        yt = t
    }

    function s() {
        return setTimeout(a, 0), yt = I.now()
    }

    function o() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function l() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function u(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var i, r, a, s, o, l, u, c, h = e.dataTypes,
            d = {},
            p = h.length,
            f = h[0];
        for (i = 1; p > i; i++) {
            if (1 === i)
                for (r in e.converters) "string" == typeof r && (d[r.toLowerCase()] = e.converters[r]);
            if (s = f, f = h[i], "*" === f) f = s;
            else if ("*" !== s && s !== f) {
                if (o = s + " " + f, l = d[o] || d["* " + f], !l) {
                    c = t;
                    for (u in d)
                        if (a = u.split(" "), (a[0] === s || "*" === a[0]) && (c = d[a[1] + " " + f])) {
                            u = d[u], u === !0 ? l = c : c === !0 && (l = u);
                            break
                        }
                }!l && !c && I.error("No conversion from " + o.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : c(u(n)))
            }
        }
        return n
    }

    function c(e, n, i) {
        var r, a, s, o, l = e.contents,
            u = e.dataTypes,
            c = e.responseFields;
        for (a in c) a in i && (n[c[a]] = i[a]);
        for (;
            "*" === u[0];) u.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in i) s = u[0];
        else {
            for (a in i) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                o || (o = a)
            }
            s = s || o
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : void 0
    }

    function h(e, t, n, i) {
        if (I.isArray(t)) I.each(t, function(t, r) {
            n || We.test(e) ? i(e, r) : h(e + "[" + ("object" == typeof r || I.isArray(r) ? t : "") + "]", r, n, i)
        });
        else if (n || null == t || "object" != typeof t) i(e, t);
        else
            for (var r in t) h(e + "[" + r + "]", t[r], n, i)
    }

    function d(e, n) {
        var i, r, a = I.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((a[i] ? e : r || (r = {}))[i] = n[i]);
        r && I.extend(!0, e, r)
    }

    function p(e, n, i, r, a, s) {
        a = a || n.dataTypes[0], s = s || {}, s[a] = !0;
        for (var o, l = e[a], u = 0, c = l ? l.length : 0, h = e === st; c > u && (h || !o); u++) o = l[u](n, i, r), "string" == typeof o && (!h || s[o] ? o = t : (n.dataTypes.unshift(o), o = p(e, n, i, r, o, s)));
        return (h || !o) && !s["*"] && (o = p(e, n, i, r, "*", s)), o
    }

    function f(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), I.isFunction(n))
                for (var i, r, a, s = t.toLowerCase().split(nt), o = 0, l = s.length; l > o; o++) i = s[o], a = /^\+/.test(i), a && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[a ? "unshift" : "push"](n)
        }
    }

    function m(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = "width" === t ? Fe : Re,
            a = 0,
            s = r.length;
        if (i > 0) {
            if ("border" !== n)
                for (; s > a; a++) n || (i -= parseFloat(I.css(e, "padding" + r[a])) || 0), "margin" === n ? i += parseFloat(I.css(e, n + r[a])) || 0 : i -= parseFloat(I.css(e, "border" + r[a] + "Width")) || 0;
            return i + "px"
        }
        if (i = Ae(e, t, t), (0 > i || null == i) && (i = e.style[t] || 0), i = parseFloat(i) || 0, n)
            for (; s > a; a++) i += parseFloat(I.css(e, "padding" + r[a])) || 0, "padding" !== n && (i += parseFloat(I.css(e, "border" + r[a] + "Width")) || 0), "margin" === n && (i += parseFloat(I.css(e, n + r[a])) || 0);
        return i + "px"
    }

    function g(e, t) {
        t.src ? I.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : I.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ee, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function v(e) {
        var t = $.createElement("div");
        return Me.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? b(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && I.grep(e.getElementsByTagName("input"), b)
    }

    function b(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }

    function w(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function x(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(I.expando))
    }

    function _(e, t) {
        if (1 === t.nodeType && I.hasData(e)) {
            var n, i, r, a = I._data(e),
                s = I._data(t, a),
                o = a.events;
            if (o) {
                delete s.handle, s.events = {};
                for (n in o)
                    for (i = 0, r = o[n].length; r > i; i++) I.event.add(t, n + (o[n][i].namespace ? "." : "") + o[n][i].namespace, o[n][i], o[n][i].data)
            }
            s.data && (s.data = I.extend({}, s.data))
        }
    }

    function C(e) {
        return I.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function T(e) {
        var t = me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function k(e, t, n) {
        if (t = t || 0, I.isFunction(t)) return I.grep(e, function(e, i) {
            var r = !!t.call(e, i, e);
            return r === n
        });
        if (t.nodeType) return I.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = I.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (he.test(t)) return I.filter(t, i, !n);
            t = I.filter(t, i)
        }
        return I.grep(e, function(e) {
            return I.inArray(e, t) >= 0 === n
        })
    }

    function S(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function E() {
        return !0
    }

    function N() {
        return !1
    }

    function M(e, t, n) {
        var i = t + "defer",
            r = t + "queue",
            a = t + "mark",
            s = I._data(e, i);
        !(!s || "queue" !== n && I._data(e, r) || "mark" !== n && I._data(e, a) || !setTimeout(function() {
            !I._data(e, r) && !I._data(e, a) && (I.removeData(e, i, !0), s.fire())
        }, 0))
    }

    function A(e) {
        for (var t in e)
            if (("data" !== t || !I.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function L(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(F, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : I.isNumeric(i) ? parseFloat(i) : V.test(i) ? I.parseJSON(i) : i
                } catch (a) {}
                I.data(e, n, i)
            } else i = t
        }
        return i
    }

    function D(e) {
        var t, n, i = O[e] = {};
        for (e = e.split(/\s+/), t = 0, n = e.length; n > t; t++) i[e[t]] = !0;
        return i
    }
    var $ = e.document,
        j = e.navigator,
        H = e.location,
        I = function() {
            function n() {
                if (!o.isReady) {
                    try {
                        $.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    o.ready()
                }
            }
            var i, r, a, s, o = function(e, t) {
                    return new o.fn.init(e, t, i)
                },
                l = e.jQuery,
                u = e.$,
                c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                h = /\S/,
                d = /^\s+/,
                p = /\s+$/,
                f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                m = /^[\],:{}\s]*$/,
                g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                y = /(?:^|:|,)(?:\s*\[)+/g,
                b = /(webkit)[ \/]([\w.]+)/,
                w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                x = /(msie) ([\w.]+)/,
                _ = /(mozilla)(?:.*? rv:([\w.]+))?/,
                C = /-([a-z]|[0-9])/gi,
                T = /^-ms-/,
                k = function(e, t) {
                    return (t + "").toUpperCase()
                },
                S = j.userAgent,
                E = Object.prototype.toString,
                N = Object.prototype.hasOwnProperty,
                M = Array.prototype.push,
                A = Array.prototype.slice,
                L = String.prototype.trim,
                D = Array.prototype.indexOf,
                H = {};
            return o.fn = o.prototype = {
                constructor: o,
                init: function(e, n, i) {
                    var r, a, s, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && $.body) return this.context = $, this[0] = $.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (r = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? c.exec(e) : [null, e, null], r && (r[1] || !n)) {
                            if (r[1]) return n = n instanceof o ? n[0] : n, l = n ? n.ownerDocument || n : $, s = f.exec(e), s ? o.isPlainObject(n) ? (e = [$.createElement(s[1])], o.fn.attr.call(e, n, !0)) : e = [l.createElement(s[1])] : (s = o.buildFragment([r[1]], [l]), e = (s.cacheable ? o.clone(s.fragment) : s.fragment).childNodes), o.merge(this, e);
                            if (a = $.getElementById(r[2]), a && a.parentNode) {
                                if (a.id !== r[2]) return i.find(e);
                                this.length = 1, this[0] = a
                            }
                            return this.context = $, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                    }
                    return o.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), o.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return A.call(this, 0)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e, t, n) {
                    var i = this.constructor();
                    return o.isArray(e) ? M.apply(i, e) : o.merge(i, e), i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function(e, t) {
                    return o.each(this, e, t)
                },
                ready: function(e) {
                    return o.bindReady(), a.add(e), this
                },
                eq: function(e) {
                    return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","))
                },
                map: function(e) {
                    return this.pushStack(o.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: M,
                sort: [].sort,
                splice: [].splice
            }, o.fn.init.prototype = o.fn, o.extend = o.fn.extend = function() {
                var e, n, i, r, a, s, l = arguments[0] || {},
                    u = 1,
                    c = arguments.length,
                    h = !1;
                for ("boolean" == typeof l && (h = l, l = arguments[1] || {}, u = 2), "object" != typeof l && !o.isFunction(l) && (l = {}), c === u && (l = this, --u); c > u; u++)
                    if (null != (e = arguments[u]))
                        for (n in e) i = l[n], r = e[n], l !== r && (h && r && (o.isPlainObject(r) || (a = o.isArray(r))) ? (a ? (a = !1, s = i && o.isArray(i) ? i : []) : s = i && o.isPlainObject(i) ? i : {}, l[n] = o.extend(h, s, r)) : r !== t && (l[n] = r));
                return l
            }, o.extend({
                noConflict: function(t) {
                    return e.$ === o && (e.$ = u), t && e.jQuery === o && (e.jQuery = l), o
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? o.readyWait++ : o.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 && !--o.readyWait || e !== !0 && !o.isReady) {
                        if (!$.body) return setTimeout(o.ready, 1);
                        if (o.isReady = !0, e !== !0 && --o.readyWait > 0) return;
                        a.fireWith($, [o]), o.fn.trigger && o($).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!a) {
                        if (a = o.Callbacks("once memory"), "complete" === $.readyState) return setTimeout(o.ready, 1);
                        if ($.addEventListener) $.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", o.ready, !1);
                        else if ($.attachEvent) {
                            $.attachEvent("onreadystatechange", s), e.attachEvent("onload", o.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (i) {}
                            $.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function(e) {
                    return "function" === o.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === o.type(e)
                },
                isWindow: function(e) {
                    return e && "object" == typeof e && "setInterval" in e
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : H[E.call(e)] || "object"
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== o.type(e) || e.nodeType || o.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !N.call(e, "constructor") && !N.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var i;
                    for (i in e);
                    return i === t || N.call(e, i)
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseJSON: function(t) {
                    return "string" == typeof t && t ? (t = o.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : m.test(t.replace(g, "@").replace(v, "]").replace(y, "")) ? new Function("return " + t)() : void o.error("Invalid JSON: " + t)) : null
                },
                parseXML: function(n) {
                    var i, r;
                    try {
                        e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (a) {
                        i = t
                    }
                    return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && h.test(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(T, "ms-").replace(C, k)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(e, n, i) {
                    var r, a = 0,
                        s = e.length,
                        l = s === t || o.isFunction(e);
                    if (i)
                        if (l) {
                            for (r in e)
                                if (n.apply(e[r], i) === !1) break
                        } else
                            for (; s > a && n.apply(e[a++], i) !== !1;);
                    else if (l) {
                        for (r in e)
                            if (n.call(e[r], r, e[r]) === !1) break
                    } else
                        for (; s > a && n.call(e[a], a, e[a++]) !== !1;);
                    return e
                },
                trim: L ? function(e) {
                    return null == e ? "" : L.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(d, "").replace(p, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    if (null != e) {
                        var i = o.type(e);
                        null == e.length || "string" === i || "function" === i || "regexp" === i || o.isWindow(e) ? M.call(n, e) : o.merge(n, e)
                    }
                    return n
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (D) return D.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = e.length,
                        r = 0;
                    if ("number" == typeof n.length)
                        for (var a = n.length; a > r; r++) e[i++] = n[r];
                    else
                        for (; n[r] !== t;) e[i++] = n[r++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var i, r = [];
                    n = !!n;
                    for (var a = 0, s = e.length; s > a; a++) i = !!t(e[a], a), n !== i && r.push(e[a]);
                    return r
                },
                map: function(e, n, i) {
                    var r, a, s = [],
                        l = 0,
                        u = e.length,
                        c = e instanceof o || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || o.isArray(e));
                    if (c)
                        for (; u > l; l++) r = n(e[l], l, i), null != r && (s[s.length] = r);
                    else
                        for (a in e) r = n(e[a], a, i), null != r && (s[s.length] = r);
                    return s.concat.apply([], s)
                },
                guid: 1,
                proxy: function(e, n) {
                    if ("string" == typeof n) {
                        var i = e[n];
                        n = e, e = i
                    }
                    if (!o.isFunction(e)) return t;
                    var r = A.call(arguments, 2),
                        a = function() {
                            return e.apply(n, r.concat(A.call(arguments)))
                        };
                    return a.guid = e.guid = e.guid || a.guid || o.guid++, a
                },
                access: function(e, n, i, r, a, s) {
                    var l = e.length;
                    if ("object" == typeof n) {
                        for (var u in n) o.access(e, u, n[u], r, a, i);
                        return e
                    }
                    if (i !== t) {
                        r = !s && r && o.isFunction(i);
                        for (var c = 0; l > c; c++) a(e[c], n, r ? i.call(e[c], c, a(e[c], n)) : i, s);
                        return e
                    }
                    return l ? a(e[0], n) : t
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(e) {
                    e = e.toLowerCase();
                    var t = b.exec(e) || w.exec(e) || x.exec(e) || e.indexOf("compatible") < 0 && _.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    o.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                        return i && i instanceof o && !(i instanceof e) && (i = e(i)), o.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e($);
                    return e
                },
                browser: {}
            }), o.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                H["[object " + t + "]"] = t.toLowerCase()
            }), r = o.uaMatch(S), r.browser && (o.browser[r.browser] = !0, o.browser.version = r.version), o.browser.webkit && (o.browser.safari = !0), h.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), i = o($), $.addEventListener ? s = function() {
                $.removeEventListener("DOMContentLoaded", s, !1), o.ready()
            } : $.attachEvent && (s = function() {
                "complete" === $.readyState && ($.detachEvent("onreadystatechange", s), o.ready())
            }), o
        }(),
        O = {};
    I.Callbacks = function(e) {
        e = e ? O[e] || D(e) : {};
        var n, i, r, a, s, o = [],
            l = [],
            u = function(t) {
                var n, i, r, a;
                for (n = 0, i = t.length; i > n; n++) r = t[n], a = I.type(r), "array" === a ? u(r) : "function" === a && (!e.unique || !h.has(r)) && o.push(r)
            },
            c = function(t, u) {
                for (u = u || [], n = !e.memory || [t, u], i = !0, s = r || 0, r = 0, a = o.length; o && a > s; s++)
                    if (o[s].apply(t, u) === !1 && e.stopOnFalse) {
                        n = !0;
                        break
                    }
                i = !1, o && (e.once ? n === !0 ? h.disable() : o = [] : l && l.length && (n = l.shift(), h.fireWith(n[0], n[1])))
            },
            h = {
                add: function() {
                    if (o) {
                        var e = o.length;
                        u(arguments), i ? a = o.length : n && n !== !0 && (r = e, c(n[0], n[1]))
                    }
                    return this
                },
                remove: function() {
                    if (o)
                        for (var t = arguments, n = 0, r = t.length; r > n; n++)
                            for (var l = 0; l < o.length && (t[n] !== o[l] || (i && a >= l && (a--, s >= l && s--), o.splice(l--, 1), !e.unique)); l++);
                    return this
                },
                has: function(e) {
                    if (o)
                        for (var t = 0, n = o.length; n > t; t++)
                            if (e === o[t]) return !0;
                    return !1
                },
                empty: function() {
                    return o = [], this
                },
                disable: function() {
                    return o = l = n = t, this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return l = t, (!n || n === !0) && h.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, r) {
                    return l && (i ? e.once || l.push([t, r]) : (!e.once || !n) && c(t, r)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    };
    var P = [].slice;
    I.extend({
        Deferred: function(e) {
            var t, n = I.Callbacks("once memory"),
                i = I.Callbacks("once memory"),
                r = I.Callbacks("memory"),
                a = "pending",
                s = {
                    resolve: n,
                    reject: i,
                    notify: r
                },
                o = {
                    done: n.add,
                    fail: i.add,
                    progress: r.add,
                    state: function() {
                        return a
                    },
                    isResolved: n.fired,
                    isRejected: i.fired,
                    then: function(e, t, n) {
                        return l.done(e).fail(t).progress(n), this
                    },
                    always: function() {
                        return l.done.apply(l, arguments).fail.apply(l, arguments), this
                    },
                    pipe: function(e, t, n) {
                        return I.Deferred(function(i) {
                            I.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function(e, t) {
                                var n, r = t[0],
                                    a = t[1];
                                l[e](I.isFunction(r) ? function() {
                                    n = r.apply(this, arguments), n && I.isFunction(n.promise) ? n.promise().then(i.resolve, i.reject, i.notify) : i[a + "With"](this === l ? i : this, [n])
                                } : i[a])
                            })
                        }).promise()
                    },
                    promise: function(e) {
                        if (null == e) e = o;
                        else
                            for (var t in o) e[t] = o[t];
                        return e
                    }
                },
                l = o.promise({});
            for (t in s) l[t] = s[t].fire, l[t + "With"] = s[t].fireWith;
            return l.done(function() {
                a = "resolved"
            }, i.disable, r.lock).fail(function() {
                a = "rejected"
            }, n.disable, r.lock), e && e.call(l, l), l
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    s[e] = arguments.length > 1 ? P.call(arguments, 0) : t, l.notifyWith(u, s)
                }
            }

            function n(e) {
                return function(t) {
                    i[e] = arguments.length > 1 ? P.call(arguments, 0) : t, --o || l.resolveWith(l, i)
                }
            }
            var i = P.call(arguments, 0),
                r = 0,
                a = i.length,
                s = Array(a),
                o = a,
                l = 1 >= a && e && I.isFunction(e.promise) ? e : I.Deferred(),
                u = l.promise();
            if (a > 1) {
                for (; a > r; r++) i[r] && i[r].promise && I.isFunction(i[r].promise) ? i[r].promise().then(n(r), l.reject, t(r)) : --o;
                o || l.resolveWith(l, i)
            } else l !== e && l.resolveWith(l, a ? [e] : []);
            return u
        }
    }), I.support = function() {
        var t, n, i, r, a, s, o, l, u, c, h, d, p = $.createElement("div");
        if ($.documentElement, p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !n || !n.length || !i) return {};
        r = $.createElement("select"), a = r.appendChild($.createElement("option")), s = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.55/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: a.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!$.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== $.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch (f) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).fireEvent("onclick")), s = $.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), p.appendChild(s), l = $.createDocumentFragment(), l.appendChild(p.lastChild), t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, l.removeChild(s), l.appendChild(p), p.innerHTML = "", e.getComputedStyle && (o = $.createElement("div"), o.style.width = "0", o.style.marginRight = "0", p.style.width = "2px", p.appendChild(o), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(o, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), p.attachEvent)
            for (h in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) c = "on" + h, d = c in p, d || (p.setAttribute(c, "return;"), d = "function" == typeof p[c]), t[h + "Bubbles"] = d;
        return l.removeChild(p), l = r = a = o = p = s = null, I(function() {
            var e, n, i, r, a, s, o, l, c, h, f = $.getElementsByTagName("body")[0];
            !f || (s = 1, o = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", c = "style='" + o + "border:5px solid #000;padding:0;'", h = "<div " + c + "><div></div></div><table " + c + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", e = $.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + s + "px", f.insertBefore(e, f.firstChild), p = $.createElement("div"), e.appendChild(p), p.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", u = p.getElementsByTagName("td"), d = 0 === u[0].offsetHeight, u[0].style.display = "", u[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === u[0].offsetHeight, p.innerHTML = "", p.style.width = p.style.paddingLeft = "1px", I.boxModel = t.boxModel = 2 === p.offsetWidth, "undefined" != typeof p.style.zoom && (p.style.display = "inline", p.style.zoom = 1, t.inlineBlockNeedsLayout = 2 === p.offsetWidth, p.style.display = "", p.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = 2 !== p.offsetWidth), p.style.cssText = o + l, p.innerHTML = h, n = p.firstChild, i = n.firstChild, r = n.nextSibling.firstChild.firstChild, a = {
                doesNotAddBorder: 5 !== i.offsetTop,
                doesAddBorderForTableAndCells: 5 === r.offsetTop
            }, i.style.position = "fixed", i.style.top = "20px", a.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, i.style.position = i.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", a.subtractsBorderForOverflowNotVisible = -5 === i.offsetTop, a.doesNotIncludeMarginInBodyOffset = f.offsetTop !== s, f.removeChild(e), p = e = null, I.extend(t, a))
        }), t
    }();
    var V = /^(?:\{.*\}|\[.*\])$/,
        F = /([A-Z])/g;
    I.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (I.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? I.cache[e[I.expando]] : e[I.expando], !!e && !A(e)
        },
        data: function(e, n, i, r) {
            if (I.acceptData(e)) {
                var a, s, o, l = I.expando,
                    u = "string" == typeof n,
                    c = e.nodeType,
                    h = c ? I.cache : e,
                    d = c ? e[l] : e[l] && l,
                    p = "events" === n;
                if (!(d && h[d] && (p || r || h[d].data)) && u && i === t) return;
                return d || (c ? e[l] = d = ++I.uuid : d = l), h[d] || (h[d] = {}, c || (h[d].toJSON = I.noop)), ("object" == typeof n || "function" == typeof n) && (r ? h[d] = I.extend(h[d], n) : h[d].data = I.extend(h[d].data, n)), a = s = h[d], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[I.camelCase(n)] = i), p && !s[n] ? a.events : (u ? (o = s[n], null == o && (o = s[I.camelCase(n)])) : o = s, o)
            }
        },
        removeData: function(e, t, n) {
            if (I.acceptData(e)) {
                var i, r, a, s = I.expando,
                    o = e.nodeType,
                    l = o ? I.cache : e,
                    u = o ? e[s] : s;
                if (!l[u]) return;
                if (t && (i = n ? l[u] : l[u].data)) {
                    I.isArray(t) || (t in i ? t = [t] : (t = I.camelCase(t), t = t in i ? [t] : t.split(" ")));
                    for (r = 0, a = t.length; a > r; r++) delete i[t[r]];
                    if (!(n ? A : I.isEmptyObject)(i)) return
                }
                if (!n && (delete l[u].data, !A(l[u]))) return;
                I.support.deleteExpando || !l.setInterval ? delete l[u] : l[u] = null, o && (I.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null)
            }
        },
        _data: function(e, t, n) {
            return I.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = I.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), I.fn.extend({
        data: function(e, n) {
            var i, r, a, s = null;
            if ("undefined" == typeof e) {
                if (this.length && (s = I.data(this[0]), 1 === this[0].nodeType && !I._data(this[0], "parsedAttrs"))) {
                    r = this[0].attributes;
                    for (var o = 0, l = r.length; l > o; o++) a = r[o].name, 0 === a.indexOf("data-") && (a = I.camelCase(a.substring(5)), L(this[0], a, s[a]));
                    I._data(this[0], "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                I.data(this, e)
            }) : (i = e.split("."), i[1] = i[1] ? "." + i[1] : "", n === t ? (s = this.triggerHandler("getData" + i[1] + "!", [i[0]]), s === t && this.length && (s = I.data(this[0], e), s = L(this[0], e, s)), s === t && i[1] ? this.data(i[0]) : s) : this.each(function() {
                var t = I(this),
                    r = [i[0], n];
                t.triggerHandler("setData" + i[1] + "!", r), I.data(this, e, n), t.triggerHandler("changeData" + i[1] + "!", r)
            }))
        },
        removeData: function(e) {
            return this.each(function() {
                I.removeData(this, e)
            })
        }
    }), I.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", I._data(e, t, (I._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            if (e !== !0 && (n = t, t = e, e = !1), t) {
                n = n || "fx";
                var i = n + "mark",
                    r = e ? 0 : (I._data(t, i) || 1) - 1;
                r ? I._data(t, i, r) : (I.removeData(t, i, !0), M(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = I._data(e, t), n && (!i || I.isArray(n) ? i = I._data(e, t, I.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = I.queue(e, t),
                i = n.shift(),
                r = {};
            "inprogress" === i && (i = n.shift()), i && ("fx" === t && n.unshift("inprogress"), I._data(e, t + ".run", r), i.call(e, function() {
                I.dequeue(e, t)
            }, r)), n.length || (I.removeData(e, t + "queue " + t + ".run", !0), M(e, t, "queue"))
        }
    }), I.fn.extend({
        queue: function(e, n) {
            return "string" != typeof e && (n = e, e = "fx"), n === t ? I.queue(this[0], e) : this.each(function() {
                var t = I.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && I.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                I.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = I.fx ? I.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function i() {
                --l || a.resolveWith(s, [s])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var r, a = I.Deferred(), s = this, o = s.length, l = 1, u = e + "defer", c = e + "queue", h = e + "mark"; o--;)(r = I.data(s[o], u, t, !0) || (I.data(s[o], c, t, !0) || I.data(s[o], h, t, !0)) && I.data(s[o], u, I.Callbacks("once memory"), !0)) && (l++, r.add(i));
            return i(), a.promise()
        }
    });
    var R, B, q, Y = /[\n\t\r]/g,
        W = /\s+/,
        z = /\r/g,
        Q = /^(?:button|input)$/i,
        U = /^(?:button|input|object|select|textarea)$/i,
        X = /^a(?:rea)?$/i,
        G = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J = I.support.getSetAttribute;
    I.fn.extend({
        attr: function(e, t) {
            return I.access(this, e, t, !0, I.attr)
        },
        removeAttr: function(e) {
            return this.each(function() {
                I.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return I.access(this, e, t, !0, I.prop)
        },
        removeProp: function(e) {
            return e = I.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, a, s, o;
            if (I.isFunction(e)) return this.each(function(t) {
                I(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(W), n = 0, i = this.length; i > n; n++)
                    if (r = this[n], 1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (a = " " + r.className + " ", s = 0, o = t.length; o > s; s++) ~a.indexOf(" " + t[s] + " ") || (a += t[s] + " ");
                            r.className = I.trim(a)
                        } else r.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, r, a, s, o, l;
            if (I.isFunction(e)) return this.each(function(t) {
                I(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(W), i = 0, r = this.length; r > i; i++)
                    if (a = this[i], 1 === a.nodeType && a.className)
                        if (e) {
                            for (s = (" " + a.className + " ").replace(Y, " "), o = 0, l = n.length; l > o; o++) s = s.replace(" " + n[o] + " ", " ");
                            a.className = I.trim(s)
                        } else a.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "boolean" == typeof t;
            return this.each(I.isFunction(e) ? function(n) {
                I(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var r, a = 0, s = I(this), o = t, l = e.split(W); r = l[a++];) o = i ? o : !s.hasClass(r), s[o ? "addClass" : "removeClass"](r);
                else("undefined" === n || "boolean" === n) && (this.className && I._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : I._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Y, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, a = this[0];
            return arguments.length ? (r = I.isFunction(e), this.each(function(i) {
                var a, s = I(this);
                1 === this.nodeType && (a = r ? e.call(this, i, s.val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : I.isArray(a) && (a = I.map(a, function(e) {
                    return null == e ? "" : e + ""
                })), n = I.valHooks[this.nodeName.toLowerCase()] || I.valHooks[this.type], n && "set" in n && n.set(this, a, "value") !== t || (this.value = a))
            })) : a ? (n = I.valHooks[a.nodeName.toLowerCase()] || I.valHooks[a.type], n && "get" in n && (i = n.get(a, "value")) !== t ? i : (i = a.value, "string" == typeof i ? i.replace(z, "") : null == i ? "" : i)) : void 0
        }
    }), I.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r, a = e.selectedIndex,
                        s = [],
                        o = e.options,
                        l = "select-one" === e.type;
                    if (0 > a) return null;
                    for (n = l ? a : 0, i = l ? a + 1 : o.length; i > n; n++)
                        if (r = o[n], !(!r.selected || (I.support.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && I.nodeName(r.parentNode, "optgroup"))) {
                            if (t = I(r).val(), l) return t;
                            s.push(t)
                        }
                    return l && !s.length && o.length ? I(o[a]).val() : s
                },
                set: function(e, t) {
                    var n = I.makeArray(t);
                    return I(e).find("option").each(function() {
                        this.selected = I.inArray(I(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, i, r) {
            var a, s, o, l = e.nodeType;
            return e && 3 !== l && 8 !== l && 2 !== l ? r && n in I.attrFn ? I(e)[n](i) : "undefined" == typeof e.getAttribute ? I.prop(e, n, i) : (o = 1 !== l || !I.isXMLDoc(e), o && (n = n.toLowerCase(), s = I.attrHooks[n] || (G.test(n) ? B : R)), i !== t ? null === i ? void I.removeAttr(e, n) : s && "set" in s && o && (a = s.set(e, i, n)) !== t ? a : (e.setAttribute(n, "" + i), i) : s && "get" in s && o && null !== (a = s.get(e, n)) ? a : (a = e.getAttribute(n), null === a ? t : a)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r, a, s = 0;
            if (t && 1 === e.nodeType)
                for (i = t.toLowerCase().split(W), a = i.length; a > s; s++) r = i[s], r && (n = I.propFix[r] || r, I.attr(e, r, ""), e.removeAttribute(J ? r : n), G.test(r) && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Q.test(e.nodeName) && e.parentNode) I.error("type property can't be changed");
                    else if (!I.support.radioValue && "radio" === t && I.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return R && I.nodeName(e, "button") ? R.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return R && I.nodeName(e, "button") ? R.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, a, s, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !I.isXMLDoc(e), s && (n = I.propFix[n] || n, a = I.propHooks[n]), i !== t ? a && "set" in a && (r = a.set(e, i, n)) !== t ? r : e[n] = i : a && "get" in a && null !== (r = a.get(e, n)) ? r : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : U.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), I.attrHooks.tabindex = I.propHooks.tabIndex, B = {
        get: function(e, n) {
            var i, r = I.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? I.removeAttr(e, n) : (i = I.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, J || (q = {
        name: !0,
        id: !0
    }, R = I.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (q[n] ? "" !== i.nodeValue : i.specified) ? i.nodeValue : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = $.createAttribute(n), e.setAttributeNode(i)), i.nodeValue = t + ""
        }
    }, I.attrHooks.tabindex.set = R.set, I.each(["width", "height"], function(e, t) {
        I.attrHooks[t] = I.extend(I.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), I.attrHooks.contenteditable = {
        get: R.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), R.set(e, t, n)
        }
    }), I.support.hrefNormalized || I.each(["href", "src", "width", "height"], function(e, n) {
        I.attrHooks[n] = I.extend(I.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), I.support.style || (I.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), I.support.optSelected || (I.propHooks.selected = I.extend(I.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), I.support.enctype || (I.propFix.enctype = "encoding"), I.support.checkOn || I.each(["radio", "checkbox"], function() {
        I.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), I.each(["radio", "checkbox"], function() {
        I.valHooks[this] = I.extend(I.valHooks[this], {
            set: function(e, t) {
                return I.isArray(t) ? e.checked = I.inArray(I(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Z = /^(?:textarea|input|select)$/i,
        K = /^([^\.]*)?(?:\.(.+))?$/,
        ee = /\bhover(\.\S+)?\b/,
        te = /^key/,
        ne = /^(?:mouse|contextmenu)|click/,
        ie = /^(?:focusinfocus|focusoutblur)$/,
        re = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        ae = function(e) {
            var t = re.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        se = function(e, t) {
            var n = e.attributes || {};
            return !(t[1] && e.nodeName.toLowerCase() !== t[1] || t[2] && (n.id || {}).value !== t[2] || t[3] && !t[3].test((n["class"] || {}).value))
        },
        oe = function(e) {
            return I.event.special.hover ? e : e.replace(ee, "mouseenter$1 mouseleave$1")
        };
    I.event = {
            add: function(e, n, i, r, a) {
                var s, o, l, u, c, h, d, p, f, m, g;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = I._data(e))) {
                    for (i.handler && (f = i, i = f.handler), i.guid || (i.guid = I.guid++), l = s.events, l || (s.events = l = {}), o = s.handle, o || (s.handle = o = function(e) {
                            return "undefined" == typeof I || e && I.event.triggered === e.type ? t : I.event.dispatch.apply(o.elem, arguments)
                        }, o.elem = e), n = I.trim(oe(n)).split(" "), u = 0; u < n.length; u++) c = K.exec(n[u]) || [], h = c[1], d = (c[2] || "").split(".").sort(), g = I.event.special[h] || {}, h = (a ? g.delegateType : g.bindType) || h, g = I.event.special[h] || {}, p = I.extend({
                        type: h,
                        origType: c[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: a,
                        quick: ae(a),
                        namespace: d.join(".")
                    }, f), m = l[h], m || (m = l[h] = [], m.delegateCount = 0, g.setup && g.setup.call(e, r, d, o) !== !1 || (e.addEventListener ? e.addEventListener(h, o, !1) : e.attachEvent && e.attachEvent("on" + h, o))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), a ? m.splice(m.delegateCount++, 0, p) : m.push(p), I.event.global[h] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, i, r) {
                var a, s, o, l, u, c, h, d, p, f, m, g, v = I.hasData(e) && I._data(e);
                if (v && (d = v.events)) {
                    for (t = I.trim(oe(t || "")).split(" "), a = 0; a < t.length; a++)
                        if (s = K.exec(t[a]) || [], o = l = s[1], u = s[2], o) {
                            for (p = I.event.special[o] || {}, o = (i ? p.delegateType : p.bindType) || o, m = d[o] || [], c = m.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = 0; h < m.length; h++) g = m[h], !(!r && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || i && i !== g.selector && ("**" !== i || !g.selector) || (m.splice(h--, 1), g.selector && m.delegateCount--, !p.remove || !p.remove.call(e, g)));
                            0 === m.length && c !== m.length && ((!p.teardown || p.teardown.call(e, u) === !1) && I.removeEvent(e, o, v.handle), delete d[o])
                        } else
                            for (o in d) I.event.remove(e, o + t[a], n, i, !0);
                    I.isEmptyObject(d) && (f = v.handle, f && (f.elem = null), I.removeData(e, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, i, r, a) {
                if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                    var s, o, l, u, c, h, d, p, f, m, g = n.type || n,
                        v = [];
                    if (ie.test(g + I.event.triggered)) return;
                    if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), o = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), (!r || I.event.customEvent[g]) && !I.event.global[g]) return;
                    if (n = "object" == typeof n ? n[I.expando] ? n : new I.Event(g, n) : new I.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = o, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = g.indexOf(":") < 0 ? "on" + g : "", !r) {
                        s = I.cache;
                        for (l in s) s[l].events && s[l].events[g] && I.event.trigger(n, i, s[l].handle.elem, !0);
                        return
                    }
                    if (n.result = t, n.target || (n.target = r), i = null != i ? I.makeArray(i) : [], i.unshift(n), d = I.event.special[g] || {}, d.trigger && d.trigger.apply(r, i) === !1) return;
                    if (f = [
                            [r, d.bindType || g]
                        ], !a && !d.noBubble && !I.isWindow(r)) {
                        for (m = d.delegateType || g, u = ie.test(m + g) ? r : r.parentNode, c = null; u; u = u.parentNode) f.push([u, m]), c = u;
                        c && c === r.ownerDocument && f.push([c.defaultView || c.parentWindow || e, m])
                    }
                    for (l = 0; l < f.length && !n.isPropagationStopped(); l++) u = f[l][0], n.type = f[l][1], p = (I._data(u, "events") || {})[n.type] && I._data(u, "handle"), p && p.apply(u, i), p = h && u[h], p && I.acceptData(u) && p.apply(u, i) === !1 && n.preventDefault();
                    return n.type = g, !(a || n.isDefaultPrevented() || d._default && d._default.apply(r.ownerDocument, i) !== !1 || "click" === g && I.nodeName(r, "a") || !I.acceptData(r) || !h || !r[g] || ("focus" === g || "blur" === g) && 0 === n.target.offsetWidth || I.isWindow(r) || (c = r[h], c && (r[h] = null), I.event.triggered = g, r[g](), I.event.triggered = t, !c || !(r[h] = c))), n.result
                }
            },
            dispatch: function(n) {
                n = I.event.fix(n || e.event);
                var i, r, a, s, o, l, u, c, h, d, p = (I._data(this, "events") || {})[n.type] || [],
                    f = p.delegateCount,
                    m = [].slice.call(arguments, 0),
                    g = !n.exclusive && !n.namespace,
                    v = [];
                if (m[0] = n, n.delegateTarget = this, f && !n.target.disabled && (!n.button || "click" !== n.type))
                    for (s = I(this), s.context = this.ownerDocument || this, a = n.target; a != this; a = a.parentNode || this) {
                        for (l = {}, c = [], s[0] = a, i = 0; f > i; i++) h = p[i], d = h.selector, l[d] === t && (l[d] = h.quick ? se(a, h.quick) : s.is(d)), l[d] && c.push(h);
                        c.length && v.push({
                            elem: a,
                            matches: c
                        })
                    }
                for (p.length > f && v.push({
                        elem: this,
                        matches: p.slice(f)
                    }), i = 0; i < v.length && !n.isPropagationStopped(); i++)
                    for (u = v[i], n.currentTarget = u.elem, r = 0; r < u.matches.length && !n.isImmediatePropagationStopped(); r++) h = u.matches[r], (g || !n.namespace && !h.namespace || n.namespace_re && n.namespace_re.test(h.namespace)) && (n.data = h.data, n.handleObj = h, o = ((I.event.special[h.origType] || {}).handle || h.handler).apply(u.elem, m), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation())));
                return n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, r, a, s = n.button,
                        o = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || $, r = i.documentElement, a = i.body, e.pageX = n.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? n.toElement : o), !e.which && s !== t && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[I.expando]) return e;
                var n, i, r = e,
                    a = I.event.fixHooks[e.type] || {},
                    s = a.props ? this.props.concat(a.props) : this.props;
                for (e = I.Event(r), n = s.length; n;) i = s[--n], e[i] = r[i];
                return e.target || (e.target = r.srcElement || $), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), a.filter ? a.filter(e, r) : e
            },
            special: {
                ready: {
                    setup: I.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        I.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = I.extend(new I.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? I.event.trigger(r, null, t) : I.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, I.event.handle = I.event.dispatch, I.removeEvent = $.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, I.Event = function(e, t) {
            return this instanceof I.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? E : N) : this.type = e, t && I.extend(this, t), this.timeStamp = e && e.timeStamp || I.now(), void(this[I.expando] = !0)) : new I.Event(e, t)
        }, I.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = E;
                var e = this.originalEvent;
                !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = E;
                var e = this.originalEvent;
                !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = E, this.stopPropagation()
            },
            isDefaultPrevented: N,
            isPropagationStopped: N,
            isImmediatePropagationStopped: N
        }, I.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            I.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        a = e.handleObj;
                    return a.selector, (!r || r !== i && !I.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), I.support.submitBubbles || (I.event.special.submit = {
            setup: function() {
                return I.nodeName(this, "form") ? !1 : void I.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = I.nodeName(n, "input") || I.nodeName(n, "button") ? n.form : t;
                    i && !i._submit_attached && (I.event.add(i, "submit._submit", function(e) {
                        this.parentNode && !e.isTrigger && I.event.simulate("submit", this.parentNode, e, !0)
                    }), i._submit_attached = !0)
                })
            },
            teardown: function() {
                return I.nodeName(this, "form") ? !1 : void I.event.remove(this, "._submit")
            }
        }), I.support.changeBubbles || (I.event.special.change = {
            setup: function() {
                return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (I.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), I.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, I.event.simulate("change", this, e, !0))
                })), !1) : void I.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Z.test(t.nodeName) && !t._change_attached && (I.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && I.event.simulate("change", this.parentNode, e, !0)
                    }), t._change_attached = !0)
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return I.event.remove(this, "._change"), Z.test(this.nodeName)
            }
        }), I.support.focusinBubbles || I.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    I.event.simulate(t, e.target, I.event.fix(e), !0)
                };
            I.event.special[t] = {
                setup: function() {
                    0 === n++ && $.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && $.removeEventListener(e, i, !0)
                }
            }
        }), I.fn.extend({
            on: function(e, n, i, r, a) {
                var s, o;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = n, n = t);
                    for (o in e) this.on(o, n, i, e[o], a);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = N;
                else if (!r) return this;
                return 1 === a && (s = r, r = function(e) {
                    return I().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = I.guid++)), this.each(function() {
                    I.event.add(this, e, r, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on.call(this, e, t, n, i, 1)
            },
            off: function(e, n, i) {
                if (e && e.preventDefault && e.handleObj) {
                    var r = e.handleObj;
                    return I(e.delegateTarget).off(r.namespace ? r.type + "." + r.namespace : r.type, r.selector, r.handler), this
                }
                if ("object" == typeof e) {
                    for (var a in e) this.off(a, n, e[a]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = N), this.each(function() {
                    I.event.remove(this, e, i, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return I(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return I(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    I.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? I.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || I.guid++,
                    i = 0,
                    r = function(n) {
                        var r = (I._data(this, "lastToggle" + e.guid) || 0) % i;
                        return I._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                    };
                for (r.guid = n; i < t.length;) t[i++].guid = n;
                return this.click(r)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), I.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            I.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, I.attrFn && (I.attrFn[t] = !0), te.test(t) && (I.event.fixHooks[t] = I.event.keyHooks), ne.test(t) && (I.event.fixHooks[t] = I.event.mouseHooks)
        }),
        function() {
            function e(e, t, n, i, a, s) {
                for (var o = 0, l = i.length; l > o; o++) {
                    var u = i[o];
                    if (u) {
                        var c = !1;
                        for (u = u[e]; u;) {
                            if (u[r] === n) {
                                c = i[u.sizset];
                                break
                            }
                            if (1 === u.nodeType)
                                if (s || (u[r] = n, u.sizset = o), "string" != typeof t) {
                                    if (u === t) {
                                        c = !0;
                                        break
                                    }
                                } else if (d.filter(t, [u]).length > 0) {
                                c = u;
                                break
                            }
                            u = u[e]
                        }
                        i[o] = c
                    }
                }
            }

            function n(e, t, n, i, a, s) {
                for (var o = 0, l = i.length; l > o; o++) {
                    var u = i[o];
                    if (u) {
                        var c = !1;
                        for (u = u[e]; u;) {
                            if (u[r] === n) {
                                c = i[u.sizset];
                                break
                            }
                            if (1 === u.nodeType && !s && (u[r] = n, u.sizset = o), u.nodeName.toLowerCase() === t) {
                                c = u;
                                break
                            }
                            u = u[e]
                        }
                        i[o] = c
                    }
                }
            }
            var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                r = "sizcache" + (Math.random() + "").replace(".", ""),
                a = 0,
                s = Object.prototype.toString,
                o = !1,
                l = !0,
                u = /\\/g,
                c = /\r\n/g,
                h = /\W/;
            [0, 0].sort(function() {
                return l = !1, 0
            });
            var d = function(e, t, n, r) {
                n = n || [], t = t || $;
                var a = t;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var o, l, u, c, h, p, g, v, b = !0,
                    w = d.isXML(t),
                    x = [],
                    C = e;
                do
                    if (i.exec(""), o = i.exec(C), o && (C = o[3], x.push(o[1]), o[2])) {
                        c = o[3];
                        break
                    }
                while (o);
                if (x.length > 1 && m.exec(e))
                    if (2 === x.length && f.relative[x[0]]) l = _(x[0] + x[1], t, r);
                    else
                        for (l = f.relative[x[0]] ? [t] : d(x.shift(), t); x.length;) e = x.shift(), f.relative[e] && (e += x.shift()), l = _(e, l, r);
                else if (!r && x.length > 1 && 9 === t.nodeType && !w && f.match.ID.test(x[0]) && !f.match.ID.test(x[x.length - 1]) && (h = d.find(x.shift(), t, w), t = h.expr ? d.filter(h.expr, h.set)[0] : h.set[0]), t)
                    for (h = r ? {
                            expr: x.pop(),
                            set: y(r)
                        } : d.find(x.pop(), 1 !== x.length || "~" !== x[0] && "+" !== x[0] || !t.parentNode ? t : t.parentNode, w), l = h.expr ? d.filter(h.expr, h.set) : h.set, x.length > 0 ? u = y(l) : b = !1; x.length;) p = x.pop(), g = p, f.relative[p] ? g = x.pop() : p = "", null == g && (g = t), f.relative[p](u, g, w);
                else u = x = [];
                if (u || (u = l), u || d.error(p || e), "[object Array]" === s.call(u))
                    if (b)
                        if (t && 1 === t.nodeType)
                            for (v = 0; null != u[v]; v++) u[v] && (u[v] === !0 || 1 === u[v].nodeType && d.contains(t, u[v])) && n.push(l[v]);
                        else
                            for (v = 0; null != u[v]; v++) u[v] && 1 === u[v].nodeType && n.push(l[v]);
                else n.push.apply(n, u);
                else y(u, n);
                return c && (d(c, a, n, r), d.uniqueSort(n)), n
            };
            d.uniqueSort = function(e) {
                if (w && (o = l, e.sort(w), o))
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, d.matches = function(e, t) {
                return d(e, null, null, t)
            }, d.matchesSelector = function(e, t) {
                return d(t, null, null, [e]).length > 0
            }, d.find = function(e, t, n) {
                var i, r, a, s, o, l;
                if (!e) return [];
                for (r = 0, a = f.order.length; a > r; r++)
                    if (o = f.order[r], (s = f.leftMatch[o].exec(e)) && (l = s[1], s.splice(1, 1), "\\" !== l.substr(l.length - 1) && (s[1] = (s[1] || "").replace(u, ""), i = f.find[o](s, t, n), null != i))) {
                        e = e.replace(f.match[o], "");
                        break
                    }
                return i || (i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                    set: i,
                    expr: e
                }
            }, d.filter = function(e, n, i, r) {
                for (var a, s, o, l, u, c, h, p, m, g = e, v = [], y = n, b = n && n[0] && d.isXML(n[0]); e && n.length;) {
                    for (o in f.filter)
                        if (null != (a = f.leftMatch[o].exec(e)) && a[2]) {
                            if (c = f.filter[o], h = a[1], s = !1, a.splice(1, 1), "\\" === h.substr(h.length - 1)) continue;
                            if (y === v && (v = []), f.preFilter[o])
                                if (a = f.preFilter[o](a, y, i, v, r, b)) {
                                    if (a === !0) continue
                                } else s = l = !0;
                            if (a)
                                for (p = 0; null != (u = y[p]); p++) u && (l = c(u, a, p, y), m = r ^ l, i && null != l ? m ? s = !0 : y[p] = !1 : m && (v.push(u), s = !0));
                            if (l !== t) {
                                if (i || (y = v), e = e.replace(f.match[o], ""), !s) return [];
                                break
                            }
                        }
                    if (e === g) {
                        if (null != s) break;
                        d.error(e)
                    }
                    g = e
                }
                return y
            }, d.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            var p = d.getText = function(e) {
                    var t, n, i = e.nodeType,
                        r = "";
                    if (i) {
                        if (1 === i || 9 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            if ("string" == typeof e.innerText) return e.innerText.replace(c, "");
                            for (e = e.firstChild; e; e = e.nextSibling) r += p(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (r += p(n));
                    return r
                },
                f = d.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(e) {
                            return e.getAttribute("href")
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(e, t) {
                            var n = "string" == typeof t,
                                i = n && !h.test(t),
                                r = n && !i;
                            i && (t = t.toLowerCase());
                            for (var a, s = 0, o = e.length; o > s; s++)
                                if (a = e[s]) {
                                    for (;
                                        (a = a.previousSibling) && 1 !== a.nodeType;);
                                    e[s] = r || a && a.nodeName.toLowerCase() === t ? a || !1 : a === t
                                }
                            r && d.filter(t, e, !0)
                        },
                        ">": function(e, t) {
                            var n, i = "string" == typeof t,
                                r = 0,
                                a = e.length;
                            if (i && !h.test(t)) {
                                for (t = t.toLowerCase(); a > r; r++)
                                    if (n = e[r]) {
                                        var s = n.parentNode;
                                        e[r] = s.nodeName.toLowerCase() === t ? s : !1
                                    }
                            } else {
                                for (; a > r; r++) n = e[r], n && (e[r] = i ? n.parentNode : n.parentNode === t);
                                i && d.filter(t, e, !0)
                            }
                        },
                        "": function(t, i, r) {
                            var s, o = a++,
                                l = e;
                            "string" == typeof i && !h.test(i) && (i = i.toLowerCase(), s = i, l = n), l("parentNode", i, o, t, s, r)
                        },
                        "~": function(t, i, r) {
                            var s, o = a++,
                                l = e;
                            "string" == typeof i && !h.test(i) && (i = i.toLowerCase(), s = i, l = n), l("previousSibling", i, o, t, s, r)
                        }
                    },
                    find: {
                        ID: function(e, t, n) {
                            if ("undefined" != typeof t.getElementById && !n) {
                                var i = t.getElementById(e[1]);
                                return i && i.parentNode ? [i] : []
                            }
                        },
                        NAME: function(e, t) {
                            if ("undefined" != typeof t.getElementsByName) {
                                for (var n = [], i = t.getElementsByName(e[1]), r = 0, a = i.length; a > r; r++) i[r].getAttribute("name") === e[1] && n.push(i[r]);
                                return 0 === n.length ? null : n
                            }
                        },
                        TAG: function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
                        }
                    },
                    preFilter: {
                        CLASS: function(e, t, n, i, r, a) {
                            if (e = " " + e[1].replace(u, "") + " ", a) return e;
                            for (var s, o = 0; null != (s = t[o]); o++) s && (r ^ (s.className && (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(s) : n && (t[o] = !1));
                            return !1
                        },
                        ID: function(e) {
                            return e[1].replace(u, "")
                        },
                        TAG: function(e) {
                            return e[1].replace(u, "").toLowerCase()
                        },
                        CHILD: function(e) {
                            if ("nth" === e[1]) {
                                e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                            } else e[2] && d.error(e[0]);
                            return e[0] = a++, e
                        },
                        ATTR: function(e, t, n, i, r, a) {
                            var s = e[1] = e[1].replace(u, "");
                            return !a && f.attrMap[s] && (e[1] = f.attrMap[s]), e[4] = (e[4] || e[5] || "").replace(u, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                        },
                        PSEUDO: function(e, t, n, r, a) {
                            if ("not" === e[1]) {
                                if (!((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                    var s = d.filter(e[3], t, n, !0 ^ a);
                                    return n || r.push.apply(r, s), !1
                                }
                                e[3] = d(e[3], null, null, t)
                            } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0])) return !0;
                            return e
                        },
                        POS: function(e) {
                            return e.unshift(!0), e
                        }
                    },
                    filters: {
                        enabled: function(e) {
                            return e.disabled === !1 && "hidden" !== e.type
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            return e.checked === !0
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function(e) {
                            return !!e.firstChild
                        },
                        empty: function(e) {
                            return !e.firstChild
                        },
                        has: function(e, t, n) {
                            return !!d(n[3], e).length
                        },
                        header: function(e) {
                            return /h\d/i.test(e.nodeName)
                        },
                        text: function(e) {
                            var t = e.getAttribute("type"),
                                n = e.type;
                            return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                        },
                        radio: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                        },
                        checkbox: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                        },
                        file: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "file" === e.type
                        },
                        password: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "password" === e.type
                        },
                        submit: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "submit" === e.type
                        },
                        image: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "image" === e.type
                        },
                        reset: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "reset" === e.type
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function(e) {
                            return /input|select|textarea|button/i.test(e.nodeName)
                        },
                        focus: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t) {
                            return 0 === t
                        },
                        last: function(e, t, n, i) {
                            return t === i.length - 1
                        },
                        even: function(e, t) {
                            return t % 2 === 0
                        },
                        odd: function(e, t) {
                            return t % 2 === 1
                        },
                        lt: function(e, t, n) {
                            return t < n[3] - 0
                        },
                        gt: function(e, t, n) {
                            return t > n[3] - 0
                        },
                        nth: function(e, t, n) {
                            return n[3] - 0 === t
                        },
                        eq: function(e, t, n) {
                            return n[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function(e, t, n, i) {
                            var r = t[1],
                                a = f.filters[r];
                            if (a) return a(e, n, t, i);
                            if ("contains" === r) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                            if ("not" === r) {
                                for (var s = t[3], o = 0, l = s.length; l > o; o++)
                                    if (s[o] === e) return !1;
                                return !0
                            }
                            d.error(r)
                        },
                        CHILD: function(e, t) {
                            var n, i, a, s, o, l, u = t[1],
                                c = e;
                            switch (u) {
                                case "only":
                                case "first":
                                    for (; c = c.previousSibling;)
                                        if (1 === c.nodeType) return !1;
                                    if ("first" === u) return !0;
                                    c = e;
                                case "last":
                                    for (; c = c.nextSibling;)
                                        if (1 === c.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (n = t[2], i = t[3], 1 === n && 0 === i) return !0;
                                    if (a = t[0], s = e.parentNode, s && (s[r] !== a || !e.nodeIndex)) {
                                        for (o = 0, c = s.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++o);
                                        s[r] = a
                                    }
                                    return l = e.nodeIndex - i, 0 === n ? 0 === l : l % n === 0 && l / n >= 0
                            }
                        },
                        ID: function(e, t) {
                            return 1 === e.nodeType && e.getAttribute("id") === t
                        },
                        TAG: function(e, t) {
                            return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                        },
                        CLASS: function(e, t) {
                            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                        },
                        ATTR: function(e, t) {
                            var n = t[1],
                                i = d.attr ? d.attr(e, n) : f.attrHandle[n] ? f.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                r = i + "",
                                a = t[2],
                                s = t[4];
                            return null == i ? "!=" === a : !a && d.attr ? null != i : "=" === a ? r === s : "*=" === a ? r.indexOf(s) >= 0 : "~=" === a ? (" " + r + " ").indexOf(s) >= 0 : s ? "!=" === a ? r !== s : "^=" === a ? 0 === r.indexOf(s) : "$=" === a ? r.substr(r.length - s.length) === s : "|=" === a ? r === s || r.substr(0, s.length + 1) === s + "-" : !1 : r && i !== !1
                        },
                        POS: function(e, t, n, i) {
                            var r = t[2],
                                a = f.setFilters[r];
                            return a ? a(e, n, t, i) : void 0
                        }
                    }
                },
                m = f.match.POS,
                g = function(e, t) {
                    return "\\" + (t - 0 + 1)
                };
            for (var v in f.match) f.match[v] = new RegExp(f.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), f.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[v].source.replace(/\\(\d+)/g, g));
            var y = function(e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call($.documentElement.childNodes, 0)[0].nodeType
            } catch (b) {
                y = function(e, t) {
                    var n = 0,
                        i = t || [];
                    if ("[object Array]" === s.call(e)) Array.prototype.push.apply(i, e);
                    else if ("number" == typeof e.length)
                        for (var r = e.length; r > n; n++) i.push(e[n]);
                    else
                        for (; e[n]; n++) i.push(e[n]);
                    return i
                }
            }
            var w, x;
            $.documentElement.compareDocumentPosition ? w = function(e, t) {
                    return e === t ? (o = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : (w = function(e, t) {
                    if (e === t) return o = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, i, r = [],
                        a = [],
                        s = e.parentNode,
                        l = t.parentNode,
                        u = s;
                    if (s === l) return x(e, t);
                    if (!s) return -1;
                    if (!l) return 1;
                    for (; u;) r.unshift(u), u = u.parentNode;
                    for (u = l; u;) a.unshift(u), u = u.parentNode;
                    n = r.length, i = a.length;
                    for (var c = 0; n > c && i > c; c++)
                        if (r[c] !== a[c]) return x(r[c], a[c]);
                    return c === n ? x(e, a[c], -1) : x(r[c], t, 1)
                }, x = function(e, t, n) {
                    if (e === t) return n;
                    for (var i = e.nextSibling; i;) {
                        if (i === t) return -1;
                        i = i.nextSibling
                    }
                    return 1
                }),
                function() {
                    var e = $.createElement("div"),
                        n = "script" + (new Date).getTime(),
                        i = $.documentElement;
                    e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), $.getElementById(n) && (f.find.ID = function(e, n, i) {
                        if ("undefined" != typeof n.getElementById && !i) {
                            var r = n.getElementById(e[1]);
                            return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                        }
                    }, f.filter.ID = function(e, t) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return 1 === e.nodeType && n && n.nodeValue === t
                    }), i.removeChild(e), i = e = null
                }(),
                function() {
                    var e = $.createElement("div");
                    e.appendChild($.createComment("")), e.getElementsByTagName("*").length > 0 && (f.find.TAG = function(e, t) {
                        var n = t.getElementsByTagName(e[1]);
                        if ("*" === e[1]) {
                            for (var i = [], r = 0; n[r]; r++) 1 === n[r].nodeType && i.push(n[r]);
                            n = i
                        }
                        return n
                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (f.attrHandle.href = function(e) {
                        return e.getAttribute("href", 2)
                    }), e = null
                }(), $.querySelectorAll && function() {
                    var e = d,
                        t = $.createElement("div"),
                        n = "__sizzle__";
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                        d = function(t, i, r, a) {
                            if (i = i || $, !a && !d.isXML(i)) {
                                var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                if (s && (1 === i.nodeType || 9 === i.nodeType)) {
                                    if (s[1]) return y(i.getElementsByTagName(t), r);
                                    if (s[2] && f.find.CLASS && i.getElementsByClassName) return y(i.getElementsByClassName(s[2]), r)
                                }
                                if (9 === i.nodeType) {
                                    if ("body" === t && i.body) return y([i.body], r);
                                    if (s && s[3]) {
                                        var o = i.getElementById(s[3]);
                                        if (!o || !o.parentNode) return y([], r);
                                        if (o.id === s[3]) return y([o], r)
                                    }
                                    try {
                                        return y(i.querySelectorAll(t), r)
                                    } catch (l) {}
                                } else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                                    var u = i,
                                        c = i.getAttribute("id"),
                                        h = c || n,
                                        p = i.parentNode,
                                        m = /^\s*[+~]/.test(t);
                                    c ? h = h.replace(/'/g, "\\$&") : i.setAttribute("id", h), m && p && (i = i.parentNode);
                                    try {
                                        if (!m || p) return y(i.querySelectorAll("[id='" + h + "'] " + t), r)
                                    } catch (g) {} finally {
                                        c || u.removeAttribute("id")
                                    }
                                }
                            }
                            return e(t, i, r, a)
                        };
                        for (var i in e) d[i] = e[i];
                        t = null
                    }
                }(),
                function() {
                    var e = $.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                    if (t) {
                        var n = !t.call($.createElement("div"), "div"),
                            i = !1;
                        try {
                            t.call($.documentElement, "[test!='']:sizzle")
                        } catch (r) {
                            i = !0
                        }
                        d.matchesSelector = function(e, r) {
                            if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                                if (i || !f.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                    var a = t.call(e, r);
                                    if (a || !n || e.document && 11 !== e.document.nodeType) return a
                                }
                            } catch (s) {}
                            return d(r, null, null, [e]).length > 0
                        }
                    }
                }(),
                function() {
                    var e = $.createElement("div");
                    if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                        if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length) return;
                        f.order.splice(1, 0, "CLASS"), f.find.CLASS = function(e, t, n) {
                            return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
                        }, e = null
                    }
                }(), d.contains = $.documentElement.contains ? function(e, t) {
                    return e !== t && (e.contains ? e.contains(t) : !0)
                } : $.documentElement.compareDocumentPosition ? function(e, t) {
                    return !!(16 & e.compareDocumentPosition(t))
                } : function() {
                    return !1
                }, d.isXML = function(e) {
                    var t = (e ? e.ownerDocument || e : 0).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                };
            var _ = function(e, t, n) {
                for (var i, r = [], a = "", s = t.nodeType ? [t] : t; i = f.match.PSEUDO.exec(e);) a += i[0], e = e.replace(f.match.PSEUDO, "");
                e = f.relative[e] ? e + "*" : e;
                for (var o = 0, l = s.length; l > o; o++) d(e, s[o], r, n);
                return d.filter(a, r)
            };
            d.attr = I.attr, d.selectors.attrMap = {}, I.find = d, I.expr = d.selectors, I.expr[":"] = I.expr.filters, I.unique = d.uniqueSort, I.text = d.getText, I.isXMLDoc = d.isXML, I.contains = d.contains
        }();
    var le = /Until$/,
        ue = /^(?:parents|prevUntil|prevAll)/,
        ce = /,/,
        he = /^.[^:#\[\.,]*$/,
        de = Array.prototype.slice,
        pe = I.expr.match.POS,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    I.fn.extend({
        find: function(e) {
            var t, n, i = this;
            if ("string" != typeof e) return I(e).filter(function() {
                for (t = 0, n = i.length; n > t; t++)
                    if (I.contains(i[t], this)) return !0
            });
            var r, a, s, o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; n > t; t++)
                if (r = o.length, I.find(e, this[t], o), t > 0)
                    for (a = r; a < o.length; a++)
                        for (s = 0; r > s; s++)
                            if (o[s] === o[a]) {
                                o.splice(a--, 1);
                                break
                            }
            return o
        },
        has: function(e) {
            var t = I(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; n > e; e++)
                    if (I.contains(this, t[e])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(k(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(k(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? pe.test(e) ? I(e, this.context).index(this[0]) >= 0 : I.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, i, r = [],
                a = this[0];
            if (I.isArray(e)) {
                for (var s = 1; a && a.ownerDocument && a !== t;) {
                    for (n = 0; n < e.length; n++) I(a).is(e[n]) && r.push({
                        selector: e[n],
                        elem: a,
                        level: s
                    });
                    a = a.parentNode, s++
                }
                return r
            }
            var o = pe.test(e) || "string" != typeof e ? I(e, t || this.context) : 0;
            for (n = 0, i = this.length; i > n; n++)
                for (a = this[n]; a;) {
                    if (o ? o.index(a) > -1 : I.find.matchesSelector(a, e)) {
                        r.push(a);
                        break
                    }
                    if (a = a.parentNode, !a || !a.ownerDocument || a === t || 11 === a.nodeType) break
                }
            return r = r.length > 1 ? I.unique(r) : r, this.pushStack(r, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? I.inArray(this[0], I(e)) : I.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? I(e, t) : I.makeArray(e && e.nodeType ? [e] : e),
                i = I.merge(this.get(), n);
            return this.pushStack(S(n[0]) || S(i[0]) ? i : I.unique(i))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), I.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return I.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return I.dir(e, "parentNode", n)
        },
        next: function(e) {
            return I.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return I.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return I.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return I.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return I.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return I.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return I.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return I.sibling(e.firstChild)
        },
        contents: function(e) {
            return I.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : I.makeArray(e.childNodes)
        }
    }, function(e, t) {
        I.fn[e] = function(n, i) {
            var r = I.map(this, t, n);
            return le.test(e) || (i = n), i && "string" == typeof i && (r = I.filter(i, r)), r = this.length > 1 && !fe[e] ? I.unique(r) : r, (this.length > 1 || ce.test(i)) && ue.test(e) && (r = r.reverse()),
                this.pushStack(r, e, de.call(arguments).join(","))
        }
    }), I.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? I.find.matchesSelector(t[0], e) ? [t[0]] : [] : I.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var r = [], a = e[n]; a && 9 !== a.nodeType && (i === t || 1 !== a.nodeType || !I(a).is(i));) 1 === a.nodeType && r.push(a), a = a[n];
            return r
        },
        nth: function(e, t, n) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var me = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ge = / jQuery\d+="(?:\d+|null)"/g,
        ve = /^\s+/,
        ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        be = /<([\w:]+)/,
        we = /<tbody/i,
        xe = /<|&#?\w+;/,
        _e = /<(?:script|style)/i,
        Ce = /<(?:script|object|embed|option|style)/i,
        Te = new RegExp("<(?:" + me + ")", "i"),
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /\/(java|ecma)script/i,
        Ee = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Ne = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Me = T($);
    Ne.optgroup = Ne.option, Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td, I.support.htmlSerialize || (Ne._default = [1, "div<div>", "</div>"]), I.fn.extend({
        text: function(e) {
            return I.isFunction(e) ? this.each(function(t) {
                var n = I(this);
                n.text(e.call(this, t, n.text()))
            }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || $).createTextNode(e)) : I.text(this)
        },
        wrapAll: function(e) {
            if (I.isFunction(e)) return this.each(function(t) {
                I(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = I(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(I.isFunction(e) ? function(t) {
                I(this).wrapInner(e.call(this, t))
            } : function() {
                var t = I(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = I.isFunction(e);
            return this.each(function(n) {
                I(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                I.nodeName(this, "body") || I(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = I.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, I.clean(arguments)), e
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || I.filter(e, [n]).length) && (!t && 1 === n.nodeType && (I.cleanData(n.getElementsByTagName("*")), I.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && I.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return I.clone(this, e, t)
            })
        },
        html: function(e) {
            if (e === t) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(ge, "") : null;
            if ("string" != typeof e || _e.test(e) || !I.support.leadingWhitespace && ve.test(e) || Ne[(be.exec(e) || ["", ""])[1].toLowerCase()]) I.isFunction(e) ? this.each(function(t) {
                var n = I(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            else {
                e = e.replace(ye, "<$1></$2>");
                try {
                    for (var n = 0, i = this.length; i > n; n++) 1 === this[n].nodeType && (I.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (r) {
                    this.empty().append(e)
                }
            }
            return this
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? I.isFunction(e) ? this.each(function(t) {
                var n = I(this),
                    i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = I(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                I(this).remove(), t ? I(t).before(e) : I(n).append(e)
            })) : this.length ? this.pushStack(I(I.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            var r, a, s, o, l = e[0],
                u = [];
            if (!I.support.checkClone && 3 === arguments.length && "string" == typeof l && ke.test(l)) return this.each(function() {
                I(this).domManip(e, n, i, !0)
            });
            if (I.isFunction(l)) return this.each(function(r) {
                var a = I(this);
                e[0] = l.call(this, r, n ? a.html() : t), a.domManip(e, n, i)
            });
            if (this[0]) {
                if (o = l && l.parentNode, r = I.support.parentNode && o && 11 === o.nodeType && o.childNodes.length === this.length ? {
                        fragment: o
                    } : I.buildFragment(e, this, u), s = r.fragment, a = 1 === s.childNodes.length ? s = s.firstChild : s.firstChild) {
                    n = n && I.nodeName(a, "tr");
                    for (var c = 0, h = this.length, d = h - 1; h > c; c++) i.call(n ? C(this[c], a) : this[c], r.cacheable || h > 1 && d > c ? I.clone(s, !0, !0) : s)
                }
                u.length && I.each(u, g)
            }
            return this
        }
    }), I.buildFragment = function(e, t, n) {
        var i, r, a, s, o = e[0];
        return t && t[0] && (s = t[0].ownerDocument || t[0]), s.createDocumentFragment || (s = $), 1 === e.length && "string" == typeof o && o.length < 512 && s === $ && "<" === o.charAt(0) && !Ce.test(o) && (I.support.checkClone || !ke.test(o)) && (I.support.html5Clone || !Te.test(o)) && (r = !0, a = I.fragments[o], a && 1 !== a && (i = a)), i || (i = s.createDocumentFragment(), I.clean(e, s, i, n)), r && (I.fragments[o] = a ? i : 1), {
            fragment: i,
            cacheable: r
        }
    }, I.fragments = {}, I.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        I.fn[e] = function(n) {
            var i = [],
                r = I(n),
                a = 1 === this.length && this[0].parentNode;
            if (a && 11 === a.nodeType && 1 === a.childNodes.length && 1 === r.length) return r[t](this[0]), this;
            for (var s = 0, o = r.length; o > s; s++) {
                var l = (s > 0 ? this.clone(!0) : this).get();
                I(r[s])[t](l), i = i.concat(l)
            }
            return this.pushStack(i, e, r.selector)
        }
    }), I.extend({
        clone: function(e, t, n) {
            var i, r, a, s = I.support.html5Clone || !Te.test("<" + e.nodeName) ? e.cloneNode(!0) : v(e);
            if (!(I.support.noCloneEvent && I.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || I.isXMLDoc(e)))
                for (x(e, s), i = w(e), r = w(s), a = 0; i[a]; ++a) r[a] && x(i[a], r[a]);
            if (t && (_(e, s), n))
                for (i = w(e), r = w(s), a = 0; i[a]; ++a) _(i[a], r[a]);
            return i = r = null, s
        },
        clean: function(e, t, n, i) {
            var r;
            t = t || $, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || $);
            for (var a, s, o = [], l = 0; null != (s = e[l]); l++)
                if ("number" == typeof s && (s += ""), s) {
                    if ("string" == typeof s)
                        if (xe.test(s)) {
                            s = s.replace(ye, "<$1></$2>");
                            var u = (be.exec(s) || ["", ""])[1].toLowerCase(),
                                c = Ne[u] || Ne._default,
                                h = c[0],
                                d = t.createElement("div");
                            for (t === $ ? Me.appendChild(d) : T(t).appendChild(d), d.innerHTML = c[1] + s + c[2]; h--;) d = d.lastChild;
                            if (!I.support.tbody) {
                                var p = we.test(s),
                                    f = "table" !== u || p ? "<table>" !== c[1] || p ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes;
                                for (a = f.length - 1; a >= 0; --a) I.nodeName(f[a], "tbody") && !f[a].childNodes.length && f[a].parentNode.removeChild(f[a])
                            }!I.support.leadingWhitespace && ve.test(s) && d.insertBefore(t.createTextNode(ve.exec(s)[0]), d.firstChild), s = d.childNodes
                        } else s = t.createTextNode(s);
                    var m;
                    if (!I.support.appendChecked)
                        if (s[0] && "number" == typeof(m = s.length))
                            for (a = 0; m > a; a++) y(s[a]);
                        else y(s);
                    s.nodeType ? o.push(s) : o = I.merge(o, s)
                }
            if (n)
                for (r = function(e) {
                        return !e.type || Se.test(e.type)
                    }, l = 0; o[l]; l++)
                    if (!i || !I.nodeName(o[l], "script") || o[l].type && "text/javascript" !== o[l].type.toLowerCase()) {
                        if (1 === o[l].nodeType) {
                            var g = I.grep(o[l].getElementsByTagName("script"), r);
                            o.splice.apply(o, [l + 1, 0].concat(g))
                        }
                        n.appendChild(o[l])
                    } else i.push(o[l].parentNode ? o[l].parentNode.removeChild(o[l]) : o[l]);
            return o
        },
        cleanData: function(e) {
            for (var t, n, i, r = I.cache, a = I.event.special, s = I.support.deleteExpando, o = 0; null != (i = e[o]); o++)
                if ((!i.nodeName || !I.noData[i.nodeName.toLowerCase()]) && (n = i[I.expando])) {
                    if (t = r[n], t && t.events) {
                        for (var l in t.events) a[l] ? I.event.remove(i, l) : I.removeEvent(i, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete i[I.expando] : i.removeAttribute && i.removeAttribute(I.expando), delete r[n]
                }
        }
    });
    var Ae, Le, De, $e = /alpha\([^)]*\)/i,
        je = /opacity=([^)]*)/,
        He = /([A-Z]|^ms)/g,
        Ie = /^-?\d+(?:px)?$/i,
        Oe = /^-?\d/,
        Pe = /^([\-+])=([\-+.\de]+)/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Fe = ["Left", "Right"],
        Re = ["Top", "Bottom"];
    I.fn.css = function(e, n) {
        return 2 === arguments.length && n === t ? this : I.access(this, e, n, !0, function(e, n, i) {
            return i !== t ? I.style(e, n, i) : I.css(e, n)
        })
    }, I.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ae(e, "opacity", "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": I.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, s, o = I.camelCase(n),
                    l = e.style,
                    u = I.cssHooks[o];
                if (n = I.cssProps[o] || o, i === t) return u && "get" in u && (a = u.get(e, !1, r)) !== t ? a : l[n];
                if (s = typeof i, "string" === s && (a = Pe.exec(i)) && (i = +(a[1] + 1) * +a[2] + parseFloat(I.css(e, n)), s = "number"), null == i || "number" === s && isNaN(i)) return;
                if ("number" === s && !I.cssNumber[o] && (i += "px"), !(u && "set" in u && (i = u.set(e, i)) === t)) try {
                    l[n] = i
                } catch (c) {}
            }
        },
        css: function(e, n, i) {
            var r, a;
            return n = I.camelCase(n), a = I.cssHooks[n], n = I.cssProps[n] || n, "cssFloat" === n && (n = "float"), a && "get" in a && (r = a.get(e, !0, i)) !== t ? r : Ae ? Ae(e, n) : void 0
        },
        swap: function(e, t, n) {
            var i = {};
            for (var r in t) i[r] = e.style[r], e.style[r] = t[r];
            n.call(e);
            for (r in t) e.style[r] = i[r]
        }
    }), I.curCSS = I.css, I.each(["height", "width"], function(e, t) {
        I.cssHooks[t] = {
            get: function(e, n, i) {
                var r;
                return n ? 0 !== e.offsetWidth ? m(e, t, i) : (I.swap(e, Ve, function() {
                    r = m(e, t, i)
                }), r) : void 0
            },
            set: function(e, t) {
                return Ie.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t
            }
        }
    }), I.support.opacity || (I.cssHooks.opacity = {
        get: function(e, t) {
            return je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = I.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                a = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === I.trim(a.replace($e, "")) && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = $e.test(a) ? a.replace($e, r) : a + " " + r)
        }
    }), I(function() {
        I.support.reliableMarginRight || (I.cssHooks.marginRight = {
            get: function(e, t) {
                var n;
                return I.swap(e, {
                    display: "inline-block"
                }, function() {
                    n = t ? Ae(e, "margin-right", "marginRight") : e.style.marginRight
                }), n
            }
        })
    }), $.defaultView && $.defaultView.getComputedStyle && (Le = function(e, t) {
        var n, i, r;
        return t = t.replace(He, "-$1").toLowerCase(), (i = e.ownerDocument.defaultView) && (r = i.getComputedStyle(e, null)) && (n = r.getPropertyValue(t), "" === n && !I.contains(e.ownerDocument.documentElement, e) && (n = I.style(e, t))), n
    }), $.documentElement.currentStyle && (De = function(e, t) {
        var n, i, r, a = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return null === a && s && (r = s[t]) && (a = r), !Ie.test(a) && Oe.test(a) && (n = s.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a || 0, a = s.pixelLeft + "px", s.left = n, i && (e.runtimeStyle.left = i)), "" === a ? "auto" : a
    }), Ae = Le || De, I.expr && I.expr.filters && (I.expr.filters.hidden = function(e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return 0 === t && 0 === n || !I.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || I.css(e, "display"))
    }, I.expr.filters.visible = function(e) {
        return !I.expr.filters.hidden(e)
    });
    var Be, qe, Ye = /%20/g,
        We = /\[\]$/,
        ze = /\r?\n/g,
        Qe = /#.*$/,
        Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xe = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ge = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Je = /^(?:GET|HEAD)$/,
        Ze = /^\/\//,
        Ke = /\?/,
        et = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        tt = /^(?:select|textarea)/i,
        nt = /\s+/,
        it = /([?&])_=[^&]*/,
        rt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        at = I.fn.load,
        st = {},
        ot = {},
        lt = ["*/"] + ["*"];
    try {
        Be = H.href
    } catch (ut) {
        Be = $.createElement("a"), Be.href = "", Be = Be.href
    }
    qe = rt.exec(Be.toLowerCase()) || [], I.fn.extend({
        load: function(e, n, i) {
            if ("string" != typeof e && at) return at.apply(this, arguments);
            if (!this.length) return this;
            var r = e.indexOf(" ");
            if (r >= 0) {
                var a = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var s = "GET";
            n && (I.isFunction(n) ? (i = n, n = t) : "object" == typeof n && (n = I.param(n, I.ajaxSettings.traditional), s = "POST"));
            var o = this;
            return I.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e
                    }), o.html(a ? I("<div>").append(n.replace(et, "")).find(a) : n)), i && o.each(i, [n, t, e])
                }
            }), this
        },
        serialize: function() {
            return I.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? I.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || tt.test(this.nodeName) || Xe.test(this.type))
            }).map(function(e, t) {
                var n = I(this).val();
                return null == n ? null : I.isArray(n) ? I.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ze, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ze, "\r\n")
                }
            }).get()
        }
    }), I.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        I.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), I.each(["get", "post"], function(e, n) {
        I[n] = function(e, i, r, a) {
            return I.isFunction(i) && (a = a || r, r = i, i = t), I.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: a
            })
        }
    }), I.extend({
        getScript: function(e, n) {
            return I.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return I.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? d(e, I.ajaxSettings) : (t = e, e = I.ajaxSettings), d(e, t), e
        },
        ajaxSettings: {
            url: Be,
            isLocal: Ge.test(qe[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": lt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": I.parseJSON,
                "text xml": I.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: f(st),
        ajaxTransport: f(ot),
        ajax: function(e, n) {
            function i(e, n, i, s) {
                if (2 !== C) {
                    C = 2, l && clearTimeout(l), o = t, a = s || "", T.readyState = e > 0 ? 4 : 0;
                    var h, p, f, x, _, k = n,
                        S = i ? c(m, T, i) : t;
                    if (e >= 200 && 300 > e || 304 === e)
                        if (m.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (I.lastModified[r] = x), (_ = T.getResponseHeader("Etag")) && (I.etag[r] = _)), 304 === e) k = "notmodified", h = !0;
                        else try {
                            p = u(m, S), k = "success", h = !0
                        } catch (E) {
                            k = "parsererror", f = E
                        } else f = k, (!k || e) && (k = "error", 0 > e && (e = 0));
                    T.status = e, T.statusText = "" + (n || k), h ? y.resolveWith(g, [p, k, T]) : y.rejectWith(g, [T, k, f]), T.statusCode(w), w = t, d && v.trigger("ajax" + (h ? "Success" : "Error"), [T, m, h ? p : f]), b.fireWith(g, [T, k]), d && (v.trigger("ajaxComplete", [T, m]), --I.active || I.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, a, s, o, l, h, d, f, m = I.ajaxSetup({}, n),
                g = m.context || m,
                v = g !== m && (g.nodeType || g instanceof I) ? I(g) : I.event,
                y = I.Deferred(),
                b = I.Callbacks("once memory"),
                w = m.statusCode || {},
                x = {},
                _ = {},
                C = 0,
                T = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!C) {
                            var n = e.toLowerCase();
                            e = _[n] = _[n] || e, x[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === C ? a : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === C) {
                            if (!s)
                                for (s = {}; n = Ue.exec(a);) s[n[1].toLowerCase()] = n[2];
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return C || (m.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || "abort", o && o.abort(e), i(0, e), this
                    }
                };
            if (y.promise(T), T.success = T.done, T.error = T.fail, T.complete = b.add, T.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > C)
                            for (t in e) w[t] = [w[t], e[t]];
                        else t = e[T.status], T.then(t, t)
                    }
                    return this
                }, m.url = ((e || m.url) + "").replace(Qe, "").replace(Ze, qe[1] + "//"), m.dataTypes = I.trim(m.dataType || "*").toLowerCase().split(nt), null == m.crossDomain && (h = rt.exec(m.url.toLowerCase()), m.crossDomain = !(!h || h[1] == qe[1] && h[2] == qe[2] && (h[3] || ("http:" === h[1] ? 80 : 443)) == (qe[3] || ("http:" === qe[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = I.param(m.data, m.traditional)), p(st, m, n, T), 2 === C) return !1;
            if (d = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Je.test(m.type), d && 0 === I.active++ && I.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Ke.test(m.url) ? "&" : "?") + m.data, delete m.data), r = m.url, m.cache === !1)) {
                var k = I.now(),
                    S = m.url.replace(it, "$1_=" + k);
                m.url = S + (S === m.url ? (Ke.test(m.url) ? "&" : "?") + "_=" + k : "")
            }(m.data && m.hasContent && m.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", m.contentType), m.ifModified && (r = r || m.url, I.lastModified[r] && T.setRequestHeader("If-Modified-Since", I.lastModified[r]), I.etag[r] && T.setRequestHeader("If-None-Match", I.etag[r])), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + lt + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) T.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(g, T, m) === !1 || 2 === C)) return T.abort(), !1;
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](m[f]);
            if (o = p(ot, m, n, T)) {
                T.readyState = 1, d && v.trigger("ajaxSend", [T, m]), m.async && m.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    C = 1, o.send(x, i)
                } catch (E) {
                    if (!(2 > C)) throw E;
                    i(-1, E)
                }
            } else i(-1, "No Transport");
            return T
        },
        param: function(e, n) {
            var i = [],
                r = function(e, t) {
                    t = I.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = I.ajaxSettings.traditional), I.isArray(e) || e.jquery && !I.isPlainObject(e)) I.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (var a in e) h(a, e[a], n, r);
            return i.join("&").replace(Ye, "+")
        }
    }), I.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ct = I.now(),
        ht = /(\=)\?(&|$)|\?\?/i;
    I.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return I.expando + "_" + ct++
        }
    }), I.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ht.test(t.url) || r && ht.test(t.data))) {
            var a, s = t.jsonpCallback = I.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                o = e[s],
                l = t.url,
                u = t.data,
                c = "$1" + s + "$2";
            return t.jsonp !== !1 && (l = l.replace(ht, c), t.url === l && (r && (u = u.replace(ht, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + s))), t.url = l, t.data = u, e[s] = function(e) {
                a = [e]
            }, i.always(function() {
                e[s] = o, a && I.isFunction(o) && e[s](a[0])
            }), t.converters["script json"] = function() {
                return a || I.error(s + " was not called"), a[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), I.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return I.globalEval(e), e
            }
        }
    }), I.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), I.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = $.head || $.getElementsByTagName("head")[0] || $.documentElement;
            return {
                send: function(r, a) {
                    n = $.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || a(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var dt, pt = e.ActiveXObject ? function() {
            for (var e in dt) dt[e](0, 1)
        } : !1,
        ft = 0;
    I.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && l() || o()
        } : l,
        function(e) {
            I.extend(I.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(I.ajaxSettings.xhr()), I.support.ajax && I.ajaxTransport(function(n) {
            if (!n.crossDomain || I.support.cors) {
                var i;
                return {
                    send: function(r, a) {
                        var s, o, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (o in n.xhrFields) l[o] = n.xhrFields[o];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (o in r) l.setRequestHeader(o, r[o])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(e, r) {
                            var o, u, c, h, d;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = t, s && (l.onreadystatechange = I.noop, pt && delete dt[s]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        o = l.status, c = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d), h.text = l.responseText;
                                        try {
                                            u = l.statusText
                                        } catch (p) {
                                            u = ""
                                        }
                                        o || !n.isLocal || n.crossDomain ? 1223 === o && (o = 204) : o = h.text ? 200 : 404
                                    }
                            } catch (f) {
                                r || a(-1, f)
                            }
                            h && a(o, u, h, c)
                        }, n.async && 4 !== l.readyState ? (s = ++ft, pt && (dt || (dt = {}, I(e).unload(pt)), dt[s] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(0, 1)
                    }
                }
            }
        });
    var mt, gt, vt, yt, bt = {},
        wt = /^(?:toggle|show|hide)$/,
        xt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        _t = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    I.fn.extend({
        show: function(e, t, n) {
            var a, s;
            if (e || 0 === e) return this.animate(r("show", 3), e, t, n);
            for (var o = 0, l = this.length; l > o; o++) a = this[o], a.style && (s = a.style.display, !I._data(a, "olddisplay") && "none" === s && (s = a.style.display = ""), "" === s && "none" === I.css(a, "display") && I._data(a, "olddisplay", i(a.nodeName)));
            for (o = 0; l > o; o++) a = this[o], a.style && (s = a.style.display, ("" === s || "none" === s) && (a.style.display = I._data(a, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(r("hide", 3), e, t, n);
            for (var i, a, s = 0, o = this.length; o > s; s++) i = this[s], i.style && (a = I.css(i, "display"), "none" !== a && !I._data(i, "olddisplay") && I._data(i, "olddisplay", a));
            for (s = 0; o > s; s++) this[s].style && (this[s].style.display = "none");
            return this
        },
        _toggle: I.fn.toggle,
        toggle: function(e, t, n) {
            var i = "boolean" == typeof e;
            return I.isFunction(e) && I.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || i ? this.each(function() {
                var t = i ? e : I(this).is(":hidden");
                I(this)[t ? "show" : "hide"]()
            }) : this.animate(r("toggle", 3), e, t, n), this
        },
        fadeTo: function(e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, r) {
            function a() {
                s.queue === !1 && I._mark(this);
                var t, n, r, a, o, l, u, c, h, d = I.extend({}, s),
                    p = 1 === this.nodeType,
                    f = p && I(this).is(":hidden");
                d.animatedProperties = {};
                for (r in e) {
                    if (t = I.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), n = e[t], I.isArray(n) ? (d.animatedProperties[t] = n[1], n = e[t] = n[0]) : d.animatedProperties[t] = d.specialEasing && d.specialEasing[t] || d.easing || "swing", "hide" === n && f || "show" === n && !f) return d.complete.call(this);
                    p && ("height" === t || "width" === t) && (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === I.css(this, "display") && "none" === I.css(this, "float") && (I.support.inlineBlockNeedsLayout && "inline" !== i(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != d.overflow && (this.style.overflow = "hidden");
                for (r in e) a = new I.fx(this, d, r), n = e[r], wt.test(n) ? (h = I._data(this, "toggle" + r) || ("toggle" === n ? f ? "show" : "hide" : 0), h ? (I._data(this, "toggle" + r, "show" === h ? "hide" : "show"), a[h]()) : a[n]()) : (o = xt.exec(n), l = a.cur(), o ? (u = parseFloat(o[2]), c = o[3] || (I.cssNumber[r] ? "" : "px"), "px" !== c && (I.style(this, r, (u || 1) + c), l = (u || 1) / a.cur() * l, I.style(this, r, l + c)), o[1] && (u = ("-=" === o[1] ? -1 : 1) * u + l), a.custom(l, u, c)) : a.custom(l, n, ""));
                return !0
            }
            var s = I.speed(t, n, r);
            return I.isEmptyObject(e) ? this.each(s.complete, [!1]) : (e = I.extend({}, e), s.queue === !1 ? this.each(a) : this.queue(s.queue, a))
        },
        stop: function(e, n, i) {
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                function t(e, t, n) {
                    var r = t[n];
                    I.removeData(e, n, !0), r.stop(i)
                }
                var n, r = !1,
                    a = I.timers,
                    s = I._data(this);
                if (i || I._unmark(!0, this), null == e)
                    for (n in s) s[n] && s[n].stop && n.indexOf(".run") === n.length - 4 && t(this, s, n);
                else s[n = e + ".run"] && s[n].stop && t(this, s, n);
                for (n = a.length; n--;) a[n].elem === this && (null == e || a[n].queue === e) && (i ? a[n](!0) : a[n].saveState(), r = !0, a.splice(n, 1));
                (!i || !r) && I.dequeue(this, e)
            })
        }
    }), I.each({
        slideDown: r("show", 1),
        slideUp: r("hide", 1),
        slideToggle: r("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        I.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), I.extend({
        speed: function(e, t, n) {
            var i = e && "object" == typeof e ? I.extend({}, e) : {
                complete: n || !n && t || I.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !I.isFunction(t) && t
            };
            return i.duration = I.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in I.fx.speeds ? I.fx.speeds[i.duration] : I.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function(e) {
                I.isFunction(i.old) && i.old.call(this), i.queue ? I.dequeue(this, i.queue) : e !== !1 && I._unmark(this)
            }, i
        },
        easing: {
            linear: function(e, t, n, i) {
                return n + i * e
            },
            swing: function(e, t, n, i) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * i + n
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), I.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (I.fx.step[this.prop] || I.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = I.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, n, i) {
            function r(e) {
                return a.step(e)
            }
            var a = this,
                o = I.fx;
            this.startTime = yt || s(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = i || this.unit || (I.cssNumber[this.prop] ? "" : "px"), r.queue = this.options.queue, r.elem = this.elem, r.saveState = function() {
                a.options.hide && I._data(a.elem, "fxshow" + a.prop) === t && I._data(a.elem, "fxshow" + a.prop, a.start)
            }, r() && I.timers.push(r) && !vt && (vt = setInterval(o.tick, o.interval))
        },
        show: function() {
            var e = I._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || I.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), I(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = I._data(this.elem, "fxshow" + this.prop) || I.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, i, r = yt || s(),
                a = !0,
                o = this.elem,
                l = this.options;
            if (e || r >= l.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0;
                for (t in l.animatedProperties) l.animatedProperties[t] !== !0 && (a = !1);
                if (a) {
                    if (null != l.overflow && !I.support.shrinkWrapBlocks && I.each(["", "X", "Y"], function(e, t) {
                            o.style["overflow" + t] = l.overflow[e]
                        }), l.hide && I(o).hide(), l.hide || l.show)
                        for (t in l.animatedProperties) I.style(o, t, l.orig[t]), I.removeData(o, "fxshow" + t, !0), I.removeData(o, "toggle" + t, !0);
                    i = l.complete, i && (l.complete = !1, i.call(o))
                }
                return !1
            }
            return 1 / 0 == l.duration ? this.now = r : (n = r - this.startTime, this.state = n / l.duration, this.pos = I.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, I.extend(I.fx, {
        tick: function() {
            for (var e, t = I.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || I.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(vt), vt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                I.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), I.each(["width", "height"], function(e, t) {
        I.fx.step[t] = function(e) {
            I.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    }), I.expr && I.expr.filters && (I.expr.filters.animated = function(e) {
        return I.grep(I.timers, function(t) {
            return e === t.elem
        }).length
    });
    var Ct = /^t(?:able|d|h)$/i,
        Tt = /^(?:body|html)$/i;
    I.fn.offset = "getBoundingClientRect" in $.documentElement ? function(e) {
        var t, i = this[0];
        if (e) return this.each(function(t) {
            I.offset.setOffset(this, e, t)
        });
        if (!i || !i.ownerDocument) return null;
        if (i === i.ownerDocument.body) return I.offset.bodyOffset(i);
        try {
            t = i.getBoundingClientRect()
        } catch (r) {}
        var a = i.ownerDocument,
            s = a.documentElement;
        if (!t || !I.contains(s, i)) return t ? {
            top: t.top,
            left: t.left
        } : {
            top: 0,
            left: 0
        };
        var o = a.body,
            l = n(a),
            u = s.clientTop || o.clientTop || 0,
            c = s.clientLeft || o.clientLeft || 0,
            h = l.pageYOffset || I.support.boxModel && s.scrollTop || o.scrollTop,
            d = l.pageXOffset || I.support.boxModel && s.scrollLeft || o.scrollLeft,
            p = t.top + h - u,
            f = t.left + d - c;
        return {
            top: p,
            left: f
        }
    } : function(e) {
        var t = this[0];
        if (e) return this.each(function(t) {
            I.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return I.offset.bodyOffset(t);
        for (var n, i = t.offsetParent, r = t, a = t.ownerDocument, s = a.documentElement, o = a.body, l = a.defaultView, u = l ? l.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, h = t.offsetLeft;
            (t = t.parentNode) && t !== o && t !== s && (!I.support.fixedPosition || "fixed" !== u.position);) n = l ? l.getComputedStyle(t, null) : t.currentStyle, c -= t.scrollTop, h -= t.scrollLeft, t === i && (c += t.offsetTop, h += t.offsetLeft, I.support.doesNotAddBorder && (!I.support.doesAddBorderForTableAndCells || !Ct.test(t.nodeName)) && (c += parseFloat(n.borderTopWidth) || 0, h += parseFloat(n.borderLeftWidth) || 0), r = i, i = t.offsetParent), I.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (c += parseFloat(n.borderTopWidth) || 0, h += parseFloat(n.borderLeftWidth) || 0), u = n;
        return ("relative" === u.position || "static" === u.position) && (c += o.offsetTop, h += o.offsetLeft), I.support.fixedPosition && "fixed" === u.position && (c += Math.max(s.scrollTop, o.scrollTop), h += Math.max(s.scrollLeft, o.scrollLeft)), {
            top: c,
            left: h
        }
    }, I.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return I.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(I.css(e, "marginTop")) || 0, n += parseFloat(I.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = I.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, a, s = I(e),
                o = s.offset(),
                l = I.css(e, "top"),
                u = I.css(e, "left"),
                c = ("absolute" === i || "fixed" === i) && I.inArray("auto", [l, u]) > -1,
                h = {},
                d = {};
            c ? (d = s.position(), r = d.top, a = d.left) : (r = parseFloat(l) || 0, a = parseFloat(u) || 0), I.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (h.top = t.top - o.top + r), null != t.left && (h.left = t.left - o.left + a), "using" in t ? t.using.call(e, h) : s.css(h)
        }
    }, I.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                i = Tt.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(I.css(e, "marginTop")) || 0, n.left -= parseFloat(I.css(e, "marginLeft")) || 0, i.top += parseFloat(I.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(I.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - i.top,
                left: n.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || $.body; e && !Tt.test(e.nodeName) && "static" === I.css(e, "position");) e = e.offsetParent;
                return e
            })
        }
    }), I.each(["Left", "Top"], function(e, i) {
        var r = "scroll" + i;
        I.fn[r] = function(i) {
            var a, s;
            return i === t ? (a = this[0]) ? (s = n(a), s ? "pageXOffset" in s ? s[e ? "pageYOffset" : "pageXOffset"] : I.support.boxModel && s.document.documentElement[r] || s.document.body[r] : a[r]) : null : this.each(function() {
                s = n(this), s ? s.scrollTo(e ? I(s).scrollLeft() : i, e ? i : I(s).scrollTop()) : this[r] = i
            })
        }
    }), I.each(["Height", "Width"], function(e, n) {
        var i = n.toLowerCase();
        I.fn["inner" + n] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(I.css(e, i, "padding")) : this[i]() : null
        }, I.fn["outer" + n] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(I.css(t, i, e ? "margin" : "border")) : this[i]() : null
        }, I.fn[i] = function(e) {
            var r = this[0];
            if (!r) return null == e ? null : this;
            if (I.isFunction(e)) return this.each(function(t) {
                var n = I(this);
                n[i](e.call(this, t, n[i]()))
            });
            if (I.isWindow(r)) {
                var a = r.document.documentElement["client" + n],
                    s = r.document.body;
                return "CSS1Compat" === r.document.compatMode && a || s && s["client" + n] || a
            }
            if (9 === r.nodeType) return Math.max(r.documentElement["client" + n], r.body["scroll" + n], r.documentElement["scroll" + n], r.body["offset" + n], r.documentElement["offset" + n]);
            if (e === t) {
                var o = I.css(r, i),
                    l = parseFloat(o);
                return I.isNumeric(l) ? l : o
            }
            return this.css(i, "string" == typeof e ? e : e + "px")
        }
    }), e.jQuery = e.$ = I, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return I
    })
}(window),
function(e, t) {
    function n(t, n) {
        var r = t.nodeName.toLowerCase();
        if ("area" === r) {
            var a, s = t.parentNode,
                o = s.name;
            return t.href && o && "map" === s.nodeName.toLowerCase() ? (a = e("img[usemap=#" + o + "]")[0], !!a && i(a)) : !1
        }
        return (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" == r ? t.href || n : n) && i(t)
    }

    function i(t) {
        return !e(t).parents().andSelf().filter(function() {
            return "hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.21",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function(t, n) {
            return "number" == typeof t ? this.each(function() {
                var i = this;
                setTimeout(function() {
                    e(i).focus(), n && n.call(i)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length)
                for (var i, r, a = e(this[0]); a.length && a[0] !== document;) {
                    if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(a.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    a = a.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.each(["Width", "Height"], function(n, i) {
        function r(t, n, i, r) {
            return e.each(a, function() {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, i && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), r && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            s = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(n) {
            return n === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(s, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(s, r(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e(function() {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, i) {
                var r = e.ui[t].prototype;
                for (var a in i) r.plugins[a] = r.plugins[a] || [], r.plugins[a].push([n, i[a]])
            },
            call: function(e, t, n) {
                var i = e.plugins[t];
                if (i && e.element[0].parentNode)
                    for (var r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: function(e, t) {
            return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
        },
        hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        },
        isOverAxis: function(e, t, n) {
            return e > t && t + n > e
        },
        isOver: function(t, n, i, r, a, s) {
            return e.ui.isOverAxis(t, i, a) && e.ui.isOverAxis(n, r, s)
        }
    }))
}(jQuery), jQuery.effects || function(e, t) {
        function n(t) {
            var n;
            return t && t.constructor == Array && 3 == t.length ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3])] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : (n = /rgba\(0, 0, 0, 0\)/.exec(t)) ? u.transparent : u[e.trim(t).toLowerCase()]
        }

        function i(t, i) {
            var r;
            do {
                if (r = e.curCSS(t, i), "" != r && "transparent" != r || e.nodeName(t, "body")) break;
                i = "backgroundColor"
            } while (t = t.parentNode);
            return n(r)
        }

        function r() {
            var e, t, n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                i = {};
            if (n && n.length && n[0] && n[n[0]])
                for (var r = n.length; r--;) e = n[r], "string" == typeof n[e] && (t = e.replace(/\-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                }), i[t] = n[e]);
            else
                for (e in n) "string" == typeof n[e] && (i[e] = n[e]);
            return i
        }

        function a(t) {
            var n, i;
            for (n in t) i = t[n], (null == i || e.isFunction(i) || n in h || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(i))) && delete t[n];
            return t
        }

        function s(e, t) {
            var n, i = {
                _: 0
            };
            for (n in t) e[n] != t[n] && (i[n] = t[n]);
            return i
        }

        function o(t, n, i, r) {
            return "object" == typeof t && (r = n, i = null, n = t, t = n.effect), e.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (r = i, i = n, n = {}), e.isFunction(i) && (r = i, i = null), n = n || {}, i = i || n.duration, i = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, r = r || n.complete, [t, n, i, r]
        }

        function l(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects[t] ? !1 : !0
        }
        e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, r) {
            e.fx.step[r] = function(e) {
                e.colorInit || (e.start = i(e.elem, r), e.end = n(e.end), e.colorInit = !0), e.elem.style[r] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
            }
        });
        var u = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0],
                transparent: [255, 255, 255]
            },
            c = ["add", "remove", "toggle"],
            h = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        e.effects.animateClass = function(t, n, i, o) {
            return e.isFunction(i) && (o = i, i = null), this.queue(function() {
                var l, u = e(this),
                    h = u.attr("style") || " ",
                    d = a(r.call(this)),
                    p = u.attr("class") || "";
                e.each(c, function(e, n) {
                    t[n] && u[n + "Class"](t[n])
                }), l = a(r.call(this)), u.attr("class", p), u.animate(s(d, l), {
                    queue: !1,
                    duration: n,
                    easing: i,
                    complete: function() {
                        e.each(c, function(e, n) {
                            t[n] && u[n + "Class"](t[n])
                        }), "object" == typeof u.attr("style") ? (u.attr("style").cssText = "", u.attr("style").cssText = h) : u.attr("style", h), o && o.apply(this, arguments), e.dequeue(this)
                    }
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, i, r) {
                return n ? e.effects.animateClass.apply(this, [{
                    add: t
                }, n, i, r]) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, i, r) {
                return n ? e.effects.animateClass.apply(this, [{
                    remove: t
                }, n, i, r]) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, i, r, a, s) {
                return "boolean" == typeof i || i === t ? r ? e.effects.animateClass.apply(this, [i ? {
                    add: n
                } : {
                    remove: n
                }, r, a, s]) : this._toggleClass(n, i) : e.effects.animateClass.apply(this, [{
                    toggle: n
                }, i, r, a])
            },
            switchClass: function(t, n, i, r, a) {
                return e.effects.animateClass.apply(this, [{
                    add: n,
                    remove: t
                }, i, r, a])
            }
        }), e.extend(e.effects, {
            version: "1.8.21",
            save: function(e, t) {
                for (var n = 0; n < t.length; n++) null !== t[n] && e.data("ec.storage." + t[n], e[0].style[t[n]])
            },
            restore: function(e, t) {
                for (var n = 0; n < t.length; n++) null !== t[n] && e.css(t[n], e.data("ec.storage." + t[n]))
            },
            setMode: function(e, t) {
                return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function(e, t) {
                var n, i;
                switch (e[0]) {
                    case "top":
                        n = 0;
                        break;
                    case "middle":
                        n = .5;
                        break;
                    case "bottom":
                        n = 1;
                        break;
                    default:
                        n = e[0] / t.height
                }
                switch (e[1]) {
                    case "left":
                        i = 0;
                        break;
                    case "center":
                        i = .5;
                        break;
                    case "right":
                        i = 1;
                        break;
                    default:
                        i = e[1] / t.width
                }
                return {
                    x: i,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var n = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        "float": t.css("float")
                    },
                    i = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    r = document.activeElement;
                try {
                    r.id
                } catch (a) {
                    r = document.body
                }
                return t.wrap(i), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), i = t.parent(), "static" == t.css("position") ? (i.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function(e, i) {
                    n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), i.css(n).show()
            },
            removeWrapper: function(t) {
                var n, i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") ? (n = t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus(), n) : t
            },
            setTransition: function(t, n, i, r) {
                return r = r || {}, e.each(n, function(e, n) {
                    var a = t.cssUnit(n);
                    a[0] > 0 && (r[n] = a[0] * i + a[1])
                }), r
            }
        }), e.fn.extend({
            effect: function(t) {
                var n = o.apply(this, arguments),
                    i = {
                        options: n[1],
                        duration: n[2],
                        callback: n[3]
                    },
                    r = i.options.mode,
                    a = e.effects[t];
                return e.fx.off || !a ? r ? this[r](i.duration, i.callback) : this.each(function() {
                    i.callback && i.callback.call(this)
                }) : a.call(this, i)
            },
            _show: e.fn.show,
            show: function(e) {
                if (l(e)) return this._show.apply(this, arguments);
                var t = o.apply(this, arguments);
                return t[1].mode = "show", this.effect.apply(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (l(e)) return this._hide.apply(this, arguments);
                var t = o.apply(this, arguments);
                return t[1].mode = "hide", this.effect.apply(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (l(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var n = o.apply(this, arguments);
                return n[1].mode = "toggle", this.effect.apply(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t),
                    i = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                }), i
            }
        }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
            def: "easeOutQuad",
            swing: function(t, n, i, r, a) {
                return e.easing[e.easing.def](t, n, i, r, a)
            },
            easeInQuad: function(e, t, n, i, r) {
                return i * (t /= r) * t + n
            },
            easeOutQuad: function(e, t, n, i, r) {
                return -i * (t /= r) * (t - 2) + n
            },
            easeInOutQuad: function(e, t, n, i, r) {
                return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function(e, t, n, i, r) {
                return i * (t /= r) * t * t + n
            },
            easeOutCubic: function(e, t, n, i, r) {
                return i * ((t = t / r - 1) * t * t + 1) + n
            },
            easeInOutCubic: function(e, t, n, i, r) {
                return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function(e, t, n, i, r) {
                return i * (t /= r) * t * t * t + n
            },
            easeOutQuart: function(e, t, n, i, r) {
                return -i * ((t = t / r - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function(e, t, n, i, r) {
                return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function(e, t, n, i, r) {
                return i * (t /= r) * t * t * t * t + n
            },
            easeOutQuint: function(e, t, n, i, r) {
                return i * ((t = t / r - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function(e, t, n, i, r) {
                return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function(e, t, n, i, r) {
                return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
            },
            easeOutSine: function(e, t, n, i, r) {
                return i * Math.sin(t / r * (Math.PI / 2)) + n
            },
            easeInOutSine: function(e, t, n, i, r) {
                return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
            },
            easeInExpo: function(e, t, n, i, r) {
                return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
            },
            easeOutExpo: function(e, t, n, i, r) {
                return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
            },
            easeInOutExpo: function(e, t, n, i, r) {
                return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
            },
            easeInCirc: function(e, t, n, i, r) {
                return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
            },
            easeOutCirc: function(e, t, n, i, r) {
                return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
            },
            easeInOutCirc: function(e, t, n, i, r) {
                return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function(e, t, n, i, r) {
                var a = 1.70158,
                    s = 0,
                    o = i;
                if (0 == t) return n;
                if (1 == (t /= r)) return n + i;
                if (s || (s = .3 * r), o < Math.abs(i)) {
                    o = i;
                    var a = s / 4
                } else var a = s / (2 * Math.PI) * Math.asin(i / o);
                return -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s)) + n
            },
            easeOutElastic: function(e, t, n, i, r) {
                var a = 1.70158,
                    s = 0,
                    o = i;
                if (0 == t) return n;
                if (1 == (t /= r)) return n + i;
                if (s || (s = .3 * r), o < Math.abs(i)) {
                    o = i;
                    var a = s / 4
                } else var a = s / (2 * Math.PI) * Math.asin(i / o);
                return o * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - a) * Math.PI / s) + i + n
            },
            easeInOutElastic: function(e, t, n, i, r) {
                var a = 1.70158,
                    s = 0,
                    o = i;
                if (0 == t) return n;
                if (2 == (t /= r / 2)) return n + i;
                if (s || (s = .3 * r * 1.5), o < Math.abs(i)) {
                    o = i;
                    var a = s / 4
                } else var a = s / (2 * Math.PI) * Math.asin(i / o);
                return 1 > t ? -.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - a) * Math.PI / s) * .5 + i + n
            },
            easeInBack: function(e, n, i, r, a, s) {
                return s == t && (s = 1.70158), r * (n /= a) * n * ((s + 1) * n - s) + i
            },
            easeOutBack: function(e, n, i, r, a, s) {
                return s == t && (s = 1.70158), r * ((n = n / a - 1) * n * ((s + 1) * n + s) + 1) + i
            },
            easeInOutBack: function(e, n, i, r, a, s) {
                return s == t && (s = 1.70158), (n /= a / 2) < 1 ? r / 2 * n * n * (((s *= 1.525) + 1) * n - s) + i : r / 2 * ((n -= 2) * n * (((s *= 1.525) + 1) * n + s) + 2) + i
            },
            easeInBounce: function(t, n, i, r, a) {
                return r - e.easing.easeOutBounce(t, a - n, 0, r, a) + i
            },
            easeOutBounce: function(e, t, n, i, r) {
                return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            },
            easeInOutBounce: function(t, n, i, r, a) {
                return a / 2 > n ? .5 * e.easing.easeInBounce(t, 2 * n, 0, r, a) + i : .5 * e.easing.easeOutBounce(t, 2 * n - a, 0, r, a) + .5 * r + i
            }
        })
    }(jQuery),
    function(e) {
        "use strict";
        e.fn.djax = function(t, n, i) {
            if (!history.pushState) return e(this);
            var r = this,
                a = t,
                s = n && n.length ? n : [],
                o = i ? i : e.fn.replaceWith;
            window.history.replaceState({
                url: window.location.href,
                title: e("title").text()
            }, e("title").text(), window.location.href), r.clearDjaxing = function() {
                r.djaxing = !1
            }, r.attachClick = function(t, n) {
                var i = e(t),
                    a = !1;
                return e.each(s, function(e, t) {
                    -1 !== i.attr("href").indexOf(t) && (a = !0), -1 !== window.location.href.indexOf(t) && (a = !0)
                }), a ? e(t) : (n.preventDefault(), r.djaxing ? (setTimeout(r.clearDjaxing, 1e3), e(t)) : (e(window).trigger("djaxClick", [t]), r.reqUrl = i.attr("href"), r.triggered = !1, void r.navigate(i.attr("href"), !0)))
            }, r.navigate = function(t, n) {
                var i = e(a);
                r.djaxing = !0, e(window).trigger("djaxLoading", [{
                    url: t
                }]);
                var s = function(s) {
                    if (t !== r.reqUrl) return r.navigate(r.reqUrl, !1), !0;
                    var l = e(s),
                        u = e(l).find(a);
                    n && window.history.pushState({
                        url: t,
                        title: e(l).filter("title").text()
                    }, e(l).filter("title").text(), t), e("title").text(e(l).filter("title").text()), i.each(function() {
                        var t = "#" + e(this).attr("id"),
                            n = u.filter(t),
                            i = e(this);
                        e("a", n).filter(function() {
                            return this.hostname === location.hostname
                        }).addClass("dJAX_internal").on("click", function(e) {
                            return r.attachClick(this, e)
                        }), n.length ? o.call(i, n) : i.remove()
                    }), e.each(u, function() {
                        var t, n = e(this),
                            i = "#" + e(this).attr("id");
                        e(i).length || (t = e(l).find(i).prev(), t.length ? n.insertAfter("#" + t.attr("id")) : n.prependTo("#" + n.parent().attr("id"))), e("a", n).filter(function() {
                            return this.hostname === location.hostname
                        }).addClass("dJAX_internal").on("click", function(e) {
                            return r.attachClick(this, e)
                        })
                    }), r.triggered || (e(window).trigger("djaxLoad", [{
                        url: t,
                        title: e(l).filter("title").text(),
                        response: s
                    }]), r.triggered = !0, r.djaxing = !1)
                };
                e.get(t, function(e) {
                    s(e)
                }).error(function(e) {
                    console.log("error", e), s(e.responseText)
                })
            }, e(this).find("a").filter(function() {
                return this.hostname === location.hostname
            }).addClass("dJAX_internal").on("click", function(e) {
                return r.attachClick(this, e)
            }), e(window).bind("popstate", function(e) {
                r.triggered = !1, e.originalEvent.state && (r.reqUrl = e.originalEvent.state.url, r.navigate(e.originalEvent.state.url, !1))
            })
        }
    }(jQuery, window),
    function(e) {
        function t(e) {
            var t = ["Moz", "Webkit", "O", "ms"],
                n = e.charAt(0).toUpperCase() + e.substr(1);
            if (e in c.style) return e;
            for (e = 0; e < t.length; ++e) {
                var i = t[e] + n;
                if (i in c.style) return i
            }
        }

        function n(e) {
            return "string" == typeof e && this.parse(e), this
        }

        function i(e, t, n) {
            !0 === t ? e.queue(n) : t ? e.queue(t, n) : n()
        }

        function r(t) {
            var n = [];
            return e.each(t, function(t) {
                t = e.camelCase(t), t = e.transit.propertyMap[t] || t, t = o(t), -1 === e.inArray(t, n) && n.push(t)
            }), n
        }

        function a(t, n, i, a) {
            t = r(t), e.cssEase[i] && (i = e.cssEase[i]);
            var s = "" + u(n) + " " + i;
            0 < parseInt(a, 10) && (s += " " + u(a));
            var o = [];
            return e.each(t, function(e, t) {
                o.push(t + " " + s)
            }), o.join(", ")
        }

        function s(t, i) {
            i || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = h.transform, e.cssHooks[t] = {
                get: function(i) {
                    return (e(i).css("transform") || new n).get(t)
                },
                set: function(i, r) {
                    var a = e(i).css("transform") || new n;
                    a.setFromString(t, r), e(i).css({
                        transform: a
                    })
                }
            }
        }

        function o(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function l(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }

        function u(t) {
            return e.fx.speeds[t] && (t = e.fx.speeds[t]), l(t, "ms")
        }
        e.transit = {
            version: "0.1.3",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var c = document.createElement("div"),
            h = {},
            d = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
        h.transition = t("transition"), h.transitionDelay = t("transitionDelay"), h.transform = t("transform"), h.transformOrigin = t("transformOrigin"), c.style[h.transform] = "", c.style[h.transform] = "rotateY(90deg)", h.transform3d = "" !== c.style[h.transform], e.extend(e.support, h);
        var p = h.transitionEnd = {
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "MSTransitionEnd"
            }[h.transition] || null,
            c = null;
        e.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)"
        }, e.cssHooks.transform = {
            get: function(t) {
                return e(t).data("transform")
            },
            set: function(t, i) {
                var r = i;
                r instanceof n || (r = new n(r)), t.style[h.transform] = "WebkitTransform" !== h.transform || d ? r.toString() : r.toString(!0), e(t).data("transform", r)
            }
        }, e.cssHooks.transformOrigin = {
            get: function(e) {
                return e.style[h.transformOrigin]
            },
            set: function(e, t) {
                e.style[h.transformOrigin] = t
            }
        }, e.cssHooks.transition = {
            get: function(e) {
                return e.style[h.transition]
            },
            set: function(e, t) {
                e.style[h.transition] = t
            }
        }, s("scale"), s("translate"), s("rotate"), s("rotateX"), s("rotateY"), s("rotate3d"), s("perspective"), s("skewX"), s("skewY"), s("x", !0), s("y", !0), n.prototype = {
            setFromString: function(e, t) {
                var i = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
                i.unshift(e), n.prototype.set.apply(this, i)
            },
            set: function(e) {
                var t = Array.prototype.slice.apply(arguments, [1]);
                this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
            },
            get: function(e) {
                return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
            },
            setter: {
                rotate: function(e) {
                    this.rotate = l(e, "deg")
                },
                rotateX: function(e) {
                    this.rotateX = l(e, "deg")
                },
                rotateY: function(e) {
                    this.rotateY = l(e, "deg")
                },
                scale: function(e, t) {
                    void 0 === t && (t = e), this.scale = e + "," + t
                },
                skewX: function(e) {
                    this.skewX = l(e, "deg")
                },
                skewY: function(e) {
                    this.skewY = l(e, "deg")
                },
                perspective: function(e) {
                    this.perspective = l(e, "px")
                },
                x: function(e) {
                    this.set("translate", e, null)
                },
                y: function(e) {
                    this.set("translate", null, e)
                },
                translate: function(e, t) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== e && (this._translateX = l(e, "px")), null !== t && (this._translateY = l(t, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var e = (this.scale || "1,1").split(",");
                    return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
                },
                rotate3d: function() {
                    for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t) e[t] && (e[t] = parseFloat(e[t]));
                    return e[3] && (e[3] = l(e[3], "deg")), e
                }
            },
            parse: function(e) {
                var t = this;
                e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, i) {
                    t.setFromString(n, i)
                })
            },
            toString: function(e) {
                var t, n = [];
                for (t in this) this.hasOwnProperty(t) && (h.transform3d || "rotateX" !== t && "rotateY" !== t && "perspective" !== t && "transformOrigin" !== t) && "_" !== t[0] && n.push(e && "scale" === t ? t + "3d(" + this[t] + ",1)" : e && "translate" === t ? t + "3d(" + this[t] + ",0)" : t + "(" + this[t] + ")");
                return n.join(" ")
            }
        }, e.fn.transition = e.fn.transit = function(t, n, r, s) {
            var o = this,
                l = 0,
                c = !0;
            "function" == typeof n && (s = n, n = void 0), "function" == typeof r && (s = r, r = void 0), "undefined" != typeof t.easing && (r = t.easing, delete t.easing), "undefined" != typeof t.duration && (n = t.duration, delete t.duration), "undefined" != typeof t.complete && (s = t.complete, delete t.complete), "undefined" != typeof t.queue && (c = t.queue, delete t.queue), "undefined" != typeof t.delay && (l = t.delay, delete t.delay), "undefined" == typeof n && (n = e.fx.speeds._default), "undefined" == typeof r && (r = e.cssEase._default);
            var n = u(n),
                d = a(t, n, r, l),
                f = e.transit.enabled && h.transition ? parseInt(n, 10) + parseInt(l, 10) : 0;
            if (0 === f) return i(o, c, function(e) {
                o.css(t), s && s.apply(o), e && e()
            }), o;
            var m = {},
                g = function(n) {
                    var i = !1,
                        r = function() {
                            i && o.unbind(p, r), f > 0 && o.each(function() {
                                this.style[h.transition] = m[this] || null
                            }), "function" == typeof s && s.apply(o), "function" == typeof n && n()
                        };
                    f > 0 && p && e.transit.useTransitionEnd ? (i = !0, o.bind(p, r)) : window.setTimeout(r, f), o.each(function() {
                        f > 0 && (this.style[h.transition] = d), e(this).css(t)
                    })
                };
            return i(o, c, function(e) {
                var t = 0;
                "MozTransition" === h.transition && 25 > t && (t = 25), window.setTimeout(function() {
                    g(e)
                }, t)
            }), this
        }, e.transit.getTransitionValue = a
    }(jQuery);
var Yaml = function() {};
Yaml.prototype = {
    spec: "1.2",
    setSpecVersion: function(e) {
        if ("1.1" != e && "1.2" != e) throw new InvalidArgumentException("Version " + e + " of the YAML specifications is not supported");
        this.spec = e
    },
    getSpecVersion: function() {
        return this.spec
    },
    loadFile: function(e, t) {
        return void 0 == t ? (input = this.getFileContents(e), this.load(input)) : void this.getFileContents(e, function(e) {
            t((new Yaml).load(e))
        })
    },
    load: function(e) {
        var t = new YamlParser,
            n = null;
        try {
            n = t.parse(e)
        } catch (i) {
            if (void 0 != i.name && "TypeError" == i.name.toString) throw i;
            throw "Syntax error: " + i.message
        }
        return n
    },
    dump: function(e, t) {
        return void 0 == t && (t = 2), yaml = new YamlDumper, yaml.dump(e, t)
    },
    getXHR: function() {
        if (window.XMLHttpRequest) return new XMLHttpRequest;
        if (window.ActiveXObject)
            for (var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"], t = 0; 4 > t; t++) try {
                return new ActiveXObject(e[t])
            } catch (n) {}
        return null
    },
    getFileContents: function(e, t) {
        var n = this.getXHR();
        return void 0 == t ? (n.open("GET", e, !1), n.send(null), 200 == n.status || 0 == n.status ? n.responseText : null) : (n.onreadystatechange = function() {
            4 == n.readyState && t(200 == n.status || 0 == n.status ? n.responseText : null)
        }, n.open("GET", e, !0), void n.send(null))
    }
};
var YAML = {
    encode: function(e) {
        return (new Yaml).dump(e)
    },
    decode: function(e) {
        return (new Yaml).load(e)
    },
    load: function(e, t) {
        return (new Yaml).loadFile(e, t)
    }
};
"undefined" == typeof InvalidArgumentException && (InvalidArgumentException = function(e) {
    this.name = "InvalidArgumentException", this.message = e
});
var YamlInline = function() {};
YamlInline.prototype = {
    i: null,
    load: function(e) {
        var t = null;
        if (e = this.trim(e), 0 == e.length) return "";
        switch (e.charAt(0)) {
            case "[":
                t = this.parseSequence(e);
                break;
            case "{":
                t = this.parseMapping(e);
                break;
            default:
                t = this.parseScalar(e)
        }
        return t
    },
    dump: function(e) {
        var t, n, i = new Yaml;
        return "1.1" == i.getSpecVersion() ? (t = ["true", "on", "+", "yes", "y"], n = ["false", "off", "-", "no", "n"]) : (t = ["true"], n = ["false"]), "object" == typeof e && null != e ? this.dumpObject(e) : void 0 == e || null == e ? "null" : "boolean" == typeof e ? e ? "true" : "false" : /^\d+/.test(e) ? "string" == typeof e ? "'" + e + "'" : parseInt(e) : this.isNumeric(e) ? "string" == typeof e ? "'" + e + "'" : parseFloat(e) : "number" == typeof e ? 1 / 0 == e ? ".Inf" : e == -1 / 0 ? "-.Inf" : isNaN(e) ? ".NAN" : e : -1 != (e + "").indexOf("\n") || -1 != (e + "").indexOf("\r") ? '"' + e.split('"').join('\\"').split("\n").join("\\n").split("\r").join("\\r") + '"' : /[\s\'"\:\{\}\[\],&\*\#\?]/.test(e) || /^[-?|<>=!%@`]/.test(e) ? "'" + e.split("'").join("''") + "'" : "" == e ? "''" : this.getTimestampRegex().test(e) ? "'" + e + "'" : this.inArray(e.toLowerCase(), t) ? "'" + e + "'" : this.inArray(e.toLowerCase(), n) ? "'" + e + "'" : this.inArray(e.toLowerCase(), ["null", "~"]) ? "'" + e + "'" : e
    },
    dumpObject: function(e) {
        var t, n = this.getKeys(e),
            i = null,
            r = n.length;
        if (e instanceof Array) {
            for (i = [], t = 0; r > t; t++) i.push(this.dump(e[n[t]]));
            return "[" + i.join(", ") + "]"
        }
        for (i = [], t = 0; r > t; t++) i.push(this.dump(n[t]) + ": " + this.dump(e[n[t]]));
        return "{ " + i.join(", ") + " }"
    },
    parseScalar: function(e, t, n, i, r) {
        void 0 == t && (t = null), void 0 == n && (n = ['"', "'"]), void 0 == i && (i = 0), void 0 == r && (r = !0);
        var a = null,
            s = null,
            o = null;
        if (this.inArray(e[i], n)) a = this.parseQuotedScalar(e, i), i = this.i;
        else {
            if (t) {
                if (!(o = new RegExp("^(.+?)(" + t.join("|") + ")").exec((e + "").substring(i)))) throw new InvalidArgumentException("Malformed inline YAML string (" + e + ").");
                a = o[1], i += a.length
            } else a = (e + "").substring(i), i += a.length, s = a.indexOf(" #"), -1 != s && (a = a.substr(0, s).replace(/\s+$/g, ""));
            a = r ? this.evaluateScalar(a) : a
        }
        return this.i = i, a
    },
    parseQuotedScalar: function(e, t) {
        var n = null;
        if (!(n = new RegExp("^" + YamlInline.REGEX_QUOTED_STRING).exec((e + "").substring(t)))) throw new InvalidArgumentException("Malformed inline YAML string (" + (e + "").substring(t) + ").");
        var i = n[0].substr(1, n[0].length - 2);
        return i = '"' == (e + "").charAt(t) ? i.split('\\"').join('"').split("\\n").join("\n").split("\\r").join("\r") : i.split("''").join("'"), t += n[0].length, this.i = t, i
    },
    parseSequence: function(e, t) {
        void 0 == t && (t = 0);
        var n = [],
            i = e.length;
        for (t += 1; i > t;) {
            switch (e.charAt(t)) {
                case "[":
                    n.push(this.parseSequence(e, t)), t = this.i;
                    break;
                case "{":
                    n.push(this.parseMapping(e, t)), t = this.i;
                    break;
                case "]":
                    return this.i = t, n;
                case ",":
                case " ":
                    break;
                default:
                    isQuoted = this.inArray(e.charAt(t), ['"', "'"]);
                    var r = this.parseScalar(e, [",", "]"], ['"', "'"], t);
                    if (t = this.i, !isQuoted && -1 != (r + "").indexOf(": ")) try {
                        r = this.parseMapping("{" + r + "}")
                    } catch (a) {
                        if (!(a instanceof InvalidArgumentException)) throw a
                    }
                    n.push(r), t--
            }
            t++
        }
        throw new InvalidArgumentException("Malformed inline YAML string " + e)
    },
    parseMapping: function(e, t) {
        void 0 == t && (t = 0);
        var n = {},
            i = e.length;
        t += 1;
        for (var r = !1, a = !1; i > t;) {
            switch (a = !1, e.charAt(t)) {
                case " ":
                case ",":
                    t++, a = !0;
                    break;
                case "}":
                    return this.i = t, n
            }
            if (!a) {
                var s = this.parseScalar(e, [":", " "], ['"', "'"], t, !1);
                for (t = this.i, r = !1; i > t;) {
                    switch (e.charAt(t)) {
                        case "[":
                            n[s] = this.parseSequence(e, t), t = this.i, r = !0;
                            break;
                        case "{":
                            n[s] = this.parseMapping(e, t), t = this.i, r = !0;
                            break;
                        case ":":
                        case " ":
                            break;
                        default:
                            n[s] = this.parseScalar(e, [",", "}"], ['"', "'"], t), t = this.i, r = !0, t--
                    }
                    if (++t, r) {
                        a = !0;
                        break
                    }
                }
            }
        }
        throw new InvalidArgumentException("Malformed inline YAML string " + e)
    },
    evaluateScalar: function(e) {
        e = this.trim(e);
        var t, n, i = new Yaml;
        "1.1" == i.getSpecVersion() ? (t = ["true", "on", "+", "yes", "y"], n = ["false", "off", "-", "no", "n"]) : (t = ["true"], n = ["false"]);
        var r = null,
            a = null;
        return "null" == e.toLowerCase() || "" == e || "~" == e ? null : -1 != (e + "").indexOf("!str") ? ("" + e).substring(5) : -1 != (e + "").indexOf("! ") ? parseInt(this.parseScalar((e + "").substring(2))) : /^\d+/.test(e) ? (r = e, a = parseInt(e), "0" == e.charAt(0) ? this.octdec(e) : "" + r == "" + a ? a : r) : this.inArray(e.toLowerCase(), t) ? !0 : this.inArray(e.toLowerCase(), n) ? !1 : this.isNumeric(e) ? "0x" == (e + "").substr(0, 2) ? hexdec($scalar) : floatval($scalar) : ".inf" == e.toLowerCase() ? 1 / 0 : ".nan" == e.toLowerCase() ? NaN : "-.inf" == e.toLowerCase() ? -1 / 0 : /^(-|\+)?[0-9,]+(\.[0-9]+)?$/.test(e) ? parseFloat(e.split(",").join("")) : this.getTimestampRegex().test(e) ? this.strtodate(e) : "" + e
    },
    getTimestampRegex: function() {
        return new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[   ]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:.([0-9]*))?(?:[  ]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$", "gi")
    },
    trim: function(e) {
        return (e + "").replace(/^\s+/, "").replace(/\s+$/, "")
    },
    isNumeric: function(e) {
        return e - 0 == e && e.length > 0 && "" != e.replace(/\s+/g, "")
    },
    inArray: function(e, t) {
        var n, i = t.length;
        for (n = 0; i > n; n++)
            if (e == t[n]) return !0;
        return !1
    },
    getKeys: function(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t
    },
    octdec: function(e) {
        return parseInt((e + "").replace(/[^0-7]/gi, ""), 8)
    },
    hexdec: function(e) {
        return e = this.trim(e), "0x" == (e + "").substr(0, 2) && (e = (e + "").substring(2)), parseInt((e + "").replace(/[^a-f0-9]/gi, ""), 16)
    },
    strtodate: function(e) {
        var t = new Date;
        return t.setTime(this.strtotime(e, (new Date).getTime())), t
    },
    strtotime: function(e, t) {
        var n, i, r, a = "",
            s = "";
        if (a = e, a = a.replace(/\s{2,}|^\s|\s$/g, " "), a = a.replace(/[\t\r\n]/g, ""), "now" == a) return (new Date).getTime() / 1e3;
        if (!isNaN(s = Date.parse(a))) return s / 1e3;
        t = t ? new Date(1e3 * t) : new Date, a = a.toLowerCase();
        var o = {
                day: {
                    sun: 0,
                    mon: 1,
                    tue: 2,
                    wed: 3,
                    thu: 4,
                    fri: 5,
                    sat: 6
                },
                mon: {
                    jan: 0,
                    feb: 1,
                    mar: 2,
                    apr: 3,
                    may: 4,
                    jun: 5,
                    jul: 6,
                    aug: 7,
                    sep: 8,
                    oct: 9,
                    nov: 10,
                    dec: 11
                }
            },
            l = this.strtotime,
            u = function(e) {
                var n = e[2] && "ago" == e[2],
                    i = (i = "last" == e[0] ? -1 : 1) * (n ? -1 : 1);
                switch (e[0]) {
                    case "last":
                    case "next":
                        switch (e[1].substring(0, 3)) {
                            case "yea":
                                t.setFullYear(t.getFullYear() + i);
                                break;
                            case "mon":
                                t.setMonth(t.getMonth() + i);
                                break;
                            case "wee":
                                t.setDate(t.getDate() + 7 * i);
                                break;
                            case "day":
                                t.setDate(t.getDate() + i);
                                break;
                            case "hou":
                                t.setHours(t.getHours() + i);
                                break;
                            case "min":
                                t.setMinutes(t.getMinutes() + i);
                                break;
                            case "sec":
                                t.setSeconds(t.getSeconds() + i);
                                break;
                            default:
                                var r;
                                if ("undefined" != typeof(r = o.day[e[1].substring(0, 3)])) {
                                    var a = r - t.getDay();
                                    0 == a ? a = 7 * i : a > 0 ? "last" == e[0] && (a -= 7) : "next" == e[0] && (a += 7), t.setDate(t.getDate() + a)
                                }
                        }
                        break;
                    default:
                        if (!/\d+/.test(e[0])) return !1;
                        switch (i *= parseInt(e[0], 10), e[1].substring(0, 3)) {
                            case "yea":
                                t.setFullYear(t.getFullYear() + i);
                                break;
                            case "mon":
                                t.setMonth(t.getMonth() + i);
                                break;
                            case "wee":
                                t.setDate(t.getDate() + 7 * i);
                                break;
                            case "day":
                                t.setDate(t.getDate() + i);
                                break;
                            case "hou":
                                t.setHours(t.getHours() + i);
                                break;
                            case "min":
                                t.setMinutes(t.getMinutes() + i);
                                break;
                            case "sec":
                                t.setSeconds(t.getSeconds() + i)
                        }
                }
                return !0
            };
        if (i = a.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/), null != i) {
            i[2] ? i[3] || (i[2] += ":00") : i[2] = "00:00:00", r = i[1].split(/-/g);
            for (n in o.mon) o.mon[n] == r[1] - 1 && (r[1] = n);
            return r[0] = parseInt(r[0], 10), r[0] = r[0] >= 0 && r[0] <= 69 ? "20" + (r[0] < 10 ? "0" + r[0] : r[0] + "") : r[0] >= 70 && r[0] <= 99 ? "19" + r[0] : r[0] + "", parseInt(l(r[2] + " " + r[1] + " " + r[0] + " " + i[2]) + (i[4] ? i[4] / 1e3 : ""), 10)
        }
        var c = "([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";
        if (i = a.match(new RegExp(c, "gi")), null == i) return !1;
        for (n = 0; n < i.length; n++)
            if (!u(i[n].split(" "))) return !1;
        return t.getTime() / 1e3
    }
}, YamlInline.REGEX_QUOTED_STRING = "(?:\"(?:[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|'(?:[^']*(?:''[^']*)*)')";
var YamlParser = function(e) {
    this.offset = this.isDefined(e) ? e : 0
};
YamlParser.prototype = {
    offset: 0,
    lines: [],
    currentLineNb: -1,
    currentLine: "",
    refs: {},
    parse: function(e) {
        this.currentLineNb = -1, this.currentLine = "", this.lines = this.cleanup(e).split("\n");
        for (var t = null; this.moveToNextLine();)
            if (!this.isCurrentLineEmpty()) {
                if (/^\t+/.test(this.currentLine)) throw new InvalidArgumentException("A YAML file cannot contain tabs as indentation at line " + (this.getRealCurrentLineNb() + 1) + " (" + this.currentLine + ")");
                var n = !1,
                    i = !1,
                    r = !1,
                    a = null,
                    s = null,
                    o = null,
                    l = null,
                    u = null,
                    c = null,
                    h = null,
                    d = null,
                    p = null;
                if (a = /^\-((\s+)(.+?))?\s*$/.exec(this.currentLine)) {
                    if (this.isDefined(t) || (t = []), !(t instanceof Array)) throw new InvalidArgumentException("Non array entry at line " + (this.getRealCurrentLineNb() + 1) + ".");
                    a = {
                        leadspaces: a[2],
                        value: a[3]
                    }, this.isDefined(a.value) && (s = /^&([^ ]+) *(.*)/.exec(a.value)) && (s = {
                        ref: s[1],
                        value: s[2]
                    }, n = s.ref, a.value = s.value), this.isDefined(a.value) && "" != a.value.split(" ").join("") && "#" != this.trim(a.value).charAt(0) ? this.isDefined(a.leadspaces) && " " == a.leadspaces && (s = new RegExp("^(" + YamlInline.REGEX_QUOTED_STRING + "|[^ '\"{].*?) *:(\\s+(.+?))?\\s*$").exec(a.value)) ? (s = {
                        key: s[1],
                        value: s[3]
                    }, o = this.getRealCurrentLineNb(), l = new YamlParser(o), l.refs = this.refs, u = a.value, this.isNextLineIndented() || (u += "\n" + this.getNextEmbedBlock(this.getCurrentLineIndentation() + 2)), t.push(l.parse(u)), this.refs = l.refs) : t.push(this.parseValue(a.value)) : (o = this.getRealCurrentLineNb() + 1, l = new YamlParser(o), l.refs = this.refs, t.push(l.parse(this.getNextEmbedBlock())), this.refs = l.refs)
                } else {
                    if (!(a = new RegExp("^(" + YamlInline.REGEX_QUOTED_STRING + "|[^ '\"].*?) *:(\\s+(.+?))?\\s*$").exec(this.currentLine))) {
                        if (2 == this.lines.length && this.isEmpty(this.lines[1])) {
                            if (e = (new YamlInline).load(this.lines[0]), this.isObject(e) && (first = e[0], "*" == (first + "").substr(0, 1))) {
                                t = [], d = e.length;
                                for (var f = 0; d > f; f++) t.push(this.refs[e[f].substring(1)]);
                                e = t
                            }
                            return e
                        }
                        throw new InvalidArgumentException('"' + this.currentLine + '" at line ' + (this.getRealCurrentLineNb() + 1))
                    }
                    if (this.isDefined(t) || (t = {}), t instanceof Array) throw new InvalidArgumentException("Non mapped entry at line " + (this.getRealCurrentLineNb() + 1) + ".");
                    if (a = {
                            key: a[1],
                            value: a[3]
                        }, c = (new YamlInline).parseScalar(a.key), "<<" == c)
                        if (this.isDefined(a.value) && "*" == (a.value + "").charAt(0)) i = a.value.substring(1);
                        else {
                            e = this.isDefined(a.value) && "" != a.value ? a.value : this.getNextEmbedBlock(), o = this.getRealCurrentLineNb() + 1, l = new YamlParser(o), l.refs = this.refs, h = l.parse(e), this.refs = l.refs;
                            var m = [];
                            if (!this.isObject(h)) throw new InvalidArgumentException("YAML merge keys used with a scalar value instead of an array at line " + (this.getRealCurrentLineNb() + 1) + " (" + this.currentLine + ")");
                            if (this.isDefined(h[0])) {
                                p = this.reverseArray(h), d = p.length;
                                for (var f = 0; d > f; f++) {
                                    if (p[f], !this.isObject(p[f])) throw new InvalidArgumentException("Merge items must be arrays at line " + (this.getRealCurrentLineNb() + 1) + " (" + p[f] + ").");
                                    m = this.mergeObject(p[f], m)
                                }
                            } else m = this.mergeObject(m, h);
                            r = m
                        }
                    else this.isDefined(a.value) && (s = /^&([^ ]+) *(.*)/.exec(a.value)) && (s = {
                        ref: s[1],
                        value: s[2]
                    }, n = s.ref, a.value = s.value);
                    r ? t = r : this.isDefined(a.value) && "" != a.value.split(" ").join("") && "#" != this.trim(a.value).charAt(0) ? i ? t = this.refs[i] : t[c] = this.parseValue(a.value) : this.isNextLineIndented() ? t[c] = null : (o = this.getRealCurrentLineNb() + 1, l = new YamlParser(o), l.refs = this.refs, t[c] = l.parse(this.getNextEmbedBlock()), this.refs = l.refs)
                }
                if (n)
                    if (t instanceof Array) this.refs[n] = t[t.length - 1];
                    else {
                        var g = null;
                        for (var v in t) t.hasOwnProperty(v) && (g = v);
                        this.refs[n] = t[v]
                    }
            }
        return this.isEmpty(t) ? null : t
    },
    getRealCurrentLineNb: function() {
        return this.currentLineNb + this.offset
    },
    getCurrentLineIndentation: function() {
        return this.currentLine.length - this.currentLine.replace(/^ +/g, "").length
    },
    getNextEmbedBlock: function(e) {
        this.moveToNextLine();
        var t = null,
            n = null;
        if (this.isDefined(e)) t = e;
        else if (t = this.getCurrentLineIndentation(), !this.isCurrentLineEmpty() && 0 == t) throw new InvalidArgumentException("A Indentation problem at line " + (this.getRealCurrentLineNb() + 1) + " (" + this.currentLine + ")");
        for (var i = [this.currentLine.substring(t)]; this.moveToNextLine();)
            if (this.isCurrentLineEmpty()) this.isCurrentLineBlank() && i.push(this.currentLine.substring(t));
            else {
                n = this.getCurrentLineIndentation();
                var r;
                if (r = /^( *)$/.exec(this.currentLine)) i.push(r[1]);
                else {
                    if (!(n >= t)) {
                        if (0 == n) {
                            this.moveToPreviousLine();
                            break
                        }
                        throw new InvalidArgumentException("B Indentation problem at line " + (this.getRealCurrentLineNb() + 1) + " (" + this.currentLine + ")")
                    }
                    i.push(this.currentLine.substring(t))
                }
            }
        return i.join("\n")
    },
    moveToNextLine: function() {
        return this.currentLineNb >= this.lines.length - 1 ? !1 : (this.currentLineNb++, this.currentLine = this.lines[this.currentLineNb], !0)
    },
    moveToPreviousLine: function() {
        this.currentLineNb--, this.currentLine = this.lines[this.currentLineNb]
    },
    parseValue: function(e) {
        if ("*" == (e + "").charAt(0)) {
            if (e = "#" == this.trim(e).charAt(0) ? (e + "").substr(1, e.indexOf("#") - 2) : (e + "").substring(1), void 0 == this.refs[e]) throw new InvalidArgumentException('Reference "' + e + '" does not exist (' + this.currentLine + ").");
            return this.refs[e]
        }
        var t = null;
        if (t = /^(\||>)(\+|\-|\d+|\+\d+|\-\d+|\d+\+|\d+\-)?( +#.*)?$/.exec(e)) {
            t = {
                separator: t[1],
                modifiers: t[2],
                comments: t[3]
            };
            var n = this.isDefined(t.modifiers) ? t.modifiers : "";
            return this.parseFoldedScalar(t.separator, n.replace(/\d+/g, ""), Math.abs(parseInt(n)))
        }
        return (new YamlInline).load(e)
    },
    parseFoldedScalar: function(e, t, n) {
        void 0 == t && (t = ""), void 0 == n && (n = 0), e = "|" == e ? "\n" : " ";
        for (var i = "", r = null, a = this.moveToNextLine(); a && this.isCurrentLineBlank();) i += "\n", a = this.moveToNextLine();
        if (!a) return "";
        var s = null;
        if (!(s = new RegExp("^(" + (n ? this.strRepeat(" ", n) : " +") + ")(.*)$").exec(this.currentLine))) return this.moveToPreviousLine(), "";
        s = {
            indent: s[1],
            text: s[2]
        };
        var o = s.indent,
            l = 0;
        for (i += s.text + e; this.currentLineNb + 1 < this.lines.length;)
            if (this.moveToNextLine(), s = new RegExp("^( {" + o.length + ",})(.+)$").exec(this.currentLine)) s = {
                indent: s[1],
                text: s[2]
            }, " " == e && l != s.indent && (i = i.substr(0, i.length - 1) + "\n"), l = s.indent, r = s.indent.length - o.length, i += this.strRepeat(" ", r) + s.text + (0 != r ? "\n" : e);
            else {
                if (!(s = /^( *)$/.exec(this.currentLine))) {
                    this.moveToPreviousLine();
                    break
                }
                i += s[1].replace(new RegExp("^ {1," + o.length + "}", "g"), "", s[1]) + "\n"
            }
        switch (" " == e && (i = i.replace(/ (\n*)$/g, "\n$1")), t) {
            case "":
                i = i.replace(/\n+$/g, "\n");
                break;
            case "+":
                break;
            case "-":
                i = i.replace(/\n+$/g, "")
        }
        return i
    },
    isNextLineIndented: function() {
        for (var e = this.getCurrentLineIndentation(), t = this.moveToNextLine(); t && this.isCurrentLineEmpty();) t = this.moveToNextLine();
        if (0 == t) return !1;
        var n = !1;
        return this.getCurrentLineIndentation() <= e && (n = !0), this.moveToPreviousLine(), n
    },
    isCurrentLineEmpty: function() {
        return this.isCurrentLineBlank() || this.isCurrentLineComment()
    },
    isCurrentLineBlank: function() {
        return "" == this.currentLine.split(" ").join("")
    },
    isCurrentLineComment: function() {
        var e = this.currentLine.replace(/^ +/g, "");
        return "#" == e.charAt(0)
    },
    cleanup: function(e) {
        e = e.split("\r\n").join("\n").split("\r").join("\n"), /\n$/.test(e) || (e += "\n");
        for (var t = 0, n = /^\%YAML[: ][\d\.]+.*\n/; n.test(e);) e = e.replace(n, ""), t++;
        return this.offset += t, n = /^(#.*?\n)+/, n.test(e) && (trimmedValue = e.replace(n, ""), this.offset += this.subStrCount(e, "\n") - this.subStrCount(trimmedValue, "\n"), e = trimmedValue), n = /^\-\-\-.*?\n/, n.test(e) && (trimmedValue = e.replace(n, ""), this.offset += this.subStrCount(e, "\n") - this.subStrCount(trimmedValue, "\n"), e = trimmedValue, e = e.replace(/\.\.\.\s*$/g, "")), e
    },
    isObject: function(e) {
        return "object" == typeof e && this.isDefined(e)
    },
    isEmpty: function(e) {
        return void 0 == e || null == e || "" == e || 0 == e || "0" == e || 0 == e
    },
    isDefined: function(e) {
        return void 0 != e && null != e
    },
    reverseArray: function(e) {
        for (var t = [], n = e.length, i = n - 1; i >= 0; i--) t.push(e[i]);
        return t
    },
    merge: function(e, t) {
        var n = {};
        for (i in e) /^\d+$/.test(i) ? n.push(e) : n[i] = e[i];
        for (i in t) /^\d+$/.test(i) ? n.push(t) : n[i] = t[i];
        return n
    },
    strRepeat: function(e, t) {
        var n, i = "";
        for (n = 0; t > n; n++) i += e;
        return e
    },
    subStrCount: function(e, t, n, i) {
        var r = 0;
        e = "" + e, t = "" + t, void 0 != n && (e = e.substr(n)), void 0 != i && (e = e.substr(0, i));
        for (var a = e.length, s = t.length, o = 0; a > o; o++) t == e.substr(o, s) && r++;
        return r
    },
    trim: function(e) {
        return (e + "").replace(/^\s+/, "").replace(/\s+$/, "")
    }
}, YamlDumper = function() {}, YamlDumper.prototype = {
    dump: function(e, t, n) {
        void 0 == t && (t = 0), void 0 == n && (n = 0);
        var i, r = "",
            a = n ? this.strRepeat(" ", n) : "";
        if (0 >= t || !this.isObject(e) || this.isEmpty(e)) i = new YamlInline, r += a + i.dump(e);
        else {
            var s, o = !this.arrayEquals(this.getKeys(e), this.range(0, e.length - 1));
            for (var l in e) e.hasOwnProperty(l) && (s = 0 >= t - 1 || !this.isObject(e[l]) || this.isEmpty(e[l]), o && (i = new YamlInline), r += a + "" + (o ? i.dump(l) + ":" : "-") + (s ? " " : "\n") + this.dump(e[l], t - 1, s ? 0 : n + 2) + (s ? "\n" : ""))
        }
        return r
    },
    strRepeat: function(e, t) {
        var n, i = "";
        for (n = 0; t > n; n++) i += e;
        return e
    },
    isObject: function(e) {
        return "object" == typeof e && this.isDefined(e)
    },
    isEmpty: function(e) {
        return void 0 == e || null == e || "" == e || 0 == e || "0" == e || 0 == e
    },
    isDefined: function(e) {
        return void 0 != e && null != e
    },
    getKeys: function(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(n);
        return t
    },
    range: function(e, t) {
        if (e > t) return [];
        for (var n = [], i = e; t >= i; i++) n.push(i);
        return n
    },
    arrayEquals: function(e, t) {
        if (e.length != t.length) return !1;
        for (var n = e.length, i = 0; n > i; i++)
            if (e[i] != t[i]) return !1;
        return !0
    }
}, ! function(e) {
    e(function() {
        e.support.transition = function() {
            var e = function() {
                var e, t = document.createElement("bootstrap"),
                    n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    };
                for (e in n)
                    if (void 0 !== t.style[e]) return n[e]
            }();
            return e && {
                end: e
            }
        }()
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function n() {
            i.trigger("closed").remove()
        }
        var i, r = e(this),
            a = r.attr("data-target");
        a || (a = r.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), i = e(a), t && t.preventDefault(), i.length || (i = r.hasClass("alert") ? r : r.parent()), i.trigger(t = e.Event("close")), t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, n) : n())
    }, e.fn.alert = function(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("alert");
            r || i.data("alert", r = new n(this)), "string" == typeof t && r[t].call(i)
        })
    }, e.fn.alert.Constructor = n, e(function() {
        e("body").on("click.alert.data-api", t, n.prototype.close)
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype.setState = function(e) {
        var t = "disabled",
            n = this.$element,
            i = n.data(),
            r = n.is("input") ? "val" : "html";
        e += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[e] || this.options[e]), setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function() {
        var e = this.$element.parent('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
    }, e.fn.button = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("button"),
                a = "object" == typeof n && n;
            r || i.data("button", r = new t(this, a)), "toggle" == n ? r.toggle() : n && r.setState(n)
        })
    }, e.fn.button.defaults = {
        loadingText: "loading..."
    }, e.fn.button.Constructor = t, e(function() {
        e("body").on("click.button.data-api", "[data-toggle^=button]", function(t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = n, this.options.slide && this.slide(this.options.slide), "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        },
        to: function(t) {
            var n = this.$element.find(".active"),
                i = n.parent().children(),
                r = i.index(n),
                a = this;
            return t > i.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function() {
                a.to(t)
            }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(i[t]))
        },
        pause: function(e) {
            return e || (this.paused = !0), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next")
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev")
        },
        slide: function(t, n) {
            var i = this.$element.find(".active"),
                r = n || i[t](),
                a = this.interval,
                s = "next" == t ? "left" : "right",
                o = "next" == t ? "first" : "last",
                l = this,
                u = e.Event("slide");
            if (this.sliding = !0, a && this.pause(), r = r.length ? r : this.$element.find(".item")[o](), !r.hasClass("active")) {
                if (e.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    r.addClass(t), r[0].offsetWidth, i.addClass(s), r.addClass(s), this.$element.one(e.support.transition.end, function() {
                        r.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                            l.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return a && this.cycle(), this
            }
        }
    }, e.fn.carousel = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("carousel"),
                a = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n);
            r || i.data("carousel", r = new t(this, a)), "number" == typeof n ? r.to(n) : "string" == typeof n || (n = a.slide) ? r[n]() : a.interval && r.cycle()
        })
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e(function() {
        e("body").on("click.carousel.data-api", "[data-slide]", function(t) {
            var n, i = e(this),
                r = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                a = !r.data("modal") && e.extend({}, r.data(), i.data());
            r.carousel(a), t.preventDefault()
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t,
        dimension: function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        },
        show: function() {
            var t, n, i, r;
            if (!this.transitioning) {
                if (t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), i = this.$parent && this.$parent.find("> .accordion-group > .in"), i && i.length) {
                    if (r = i.data("collapse"), r && r.transitioning) return;
                    i.collapse("hide"), r || i.data("collapse", null)
                }
                this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), this.$element[t](this.$element[0][n])
            }
        },
        hide: function() {
            var t;
            this.transitioning || (t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0))
        },
        reset: function(e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(t, n, i) {
            var r = this,
                a = function() {
                    "show" == n.type && r.reset(), r.transitioning = 0, r.$element.trigger(i)
                };
            this.$element.trigger(n), n.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, a) : a())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    }, e.fn.collapse = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("collapse"),
                a = "object" == typeof n && n;
            r || i.data("collapse", r = new t(this, a)), "string" == typeof n && r[n]()
        })
    }, e.fn.collapse.defaults = {
        toggle: !0
    }, e.fn.collapse.Constructor = t, e(function() {
        e("body").on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n, i = e(this),
                r = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                a = e(r).data("collapse") ? "toggle" : i.data();
            e(r).collapse(a)
        })
    })
}(window.jQuery), ! function(e) {
    function t() {
        e(n).parent().removeClass("open")
    }
    var n = '[data-toggle="dropdown"]',
        i = function(t) {
            var n = e(t).on("click.dropdown.data-api", this.toggle);
            e("html").on("click.dropdown.data-api", function() {
                n.parent().removeClass("open")
            })
        };
    i.prototype = {
        constructor: i,
        toggle: function() {
            var n, i, r, a = e(this);
            return a.is(".disabled, :disabled") ? void 0 : (i = a.attr("data-target"), i || (i = a.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), n = e(i), n.length || (n = a.parent()), r = n.hasClass("open"), t(), r || n.toggleClass("open"), !1)
        }
    }, e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("dropdown");
            r || n.data("dropdown", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }, e.fn.dropdown.Constructor = i, e(function() {
        e("html").on("click.dropdown.data-api", t), e("body").on("click.dropdown", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.dropdown.data-api", n, i.prototype.toggle)
    })
}(window.jQuery), ! function(e) {
    function t() {
        var t = this,
            i = setTimeout(function() {
                t.$element.off(e.support.transition.end), n.call(t)
            }, 500);
        this.$element.one(e.support.transition.end, function() {
            clearTimeout(i), n.call(t)
        })
    }

    function n() {
        this.$element.hide().trigger("hidden"), i.call(this)
    }

    function i(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && n;
            this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), "static" != this.options.backdrop && this.$backdrop.click(e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), i ? this.$backdrop.one(e.support.transition.end, t) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, e.proxy(r, this)) : r.call(this)) : t && t()
    }

    function r() {
        this.$backdrop.remove(), this.$backdrop = null
    }

    function a() {
        var t = this;
        this.isShown && this.options.keyboard ? e(document).on("keyup.dismiss.modal", function(e) {
            27 == e.which && t.hide()
        }) : this.isShown || e(document).off("keyup.dismiss.modal")
    }
    var s = function(t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this))
    };
    s.prototype = {
        constructor: s,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = this,
                n = e.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (e("body").addClass("modal-open"), this.isShown = !0, a.call(this), i.call(this, function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in"), n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.trigger("shown")
                }) : t.$element.trigger("shown")
            }))
        },
        hide: function(i) {
            i && i.preventDefault(), i = e.Event("hide"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, e("body").removeClass("modal-open"), a.call(this), this.$element.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? t.call(this) : n.call(this))
        }
    }, e.fn.modal = function(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("modal"),
                r = e.extend({}, e.fn.modal.defaults, n.data(), "object" == typeof t && t);
            i || n.data("modal", i = new s(this, r)), "string" == typeof t ? i[t]() : r.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = s, e(function() {
        e("body").on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n, i = e(this),
                r = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                a = r.data("modal") ? "toggle" : e.extend({}, r.data(), i.data());
            t.preventDefault(), r.modal(a)
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, i) {
            var r, a;
            this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.enabled = !0, "manual" != this.options.trigger && (r = "hover" == this.options.trigger ? "mouseenter" : "focus", a = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(r, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data()), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout), n.hoverState = "in", void(this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show))) : n.show()
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return n.options.delay && n.options.delay.hide ? (clearTimeout(this.timeout), n.hoverState = "out", void(this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide))) : n.hide()
        },
        show: function() {
            var e, t, n, i, r, a, s;
            if (this.hasContent() && this.enabled) {
                switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), a = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(a), e.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), i = e[0].offsetWidth, r = e[0].offsetHeight, t ? a.split(" ")[1] : a) {
                    case "bottom":
                        s = {
                            top: n.top + n.height,
                            left: n.left + n.width / 2 - i / 2
                        };
                        break;
                    case "top":
                        s = {
                            top: n.top - r,
                            left: n.left + n.width / 2 - i / 2
                        };
                        break;
                    case "left":
                        s = {
                            top: n.top + n.height / 2 - r / 2,
                            left: n.left - i
                        };
                        break;
                    case "right":
                        s = {
                            top: n.top + n.height / 2 - r / 2,
                            left: n.left + n.width
                        }
                }
                e.css(s).addClass(a).addClass("in")
            }
        },
        isHTML: function(e) {
            return "string" != typeof e || "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(e)
        },
        setContent: function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.isHTML(t) ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function t() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).remove()
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t), n.remove()
                })
            }
            var n = this.tip();
            n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? t() : n.remove()
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function(t) {
            return e.extend({}, t ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function() {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template)
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }
    }, e.fn.tooltip = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("tooltip"),
                a = "object" == typeof n && n;
            r || i.data("tooltip", r = new t(this, a)), "string" == typeof n && r[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0
    }
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip(),
                t = this.getTitle(),
                n = this.getContent();
            e.find(".popover-title")[this.isHTML(t) ? "html" : "text"](t), e.find(".popover-content > *")[this.isHTML(n) ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        }
    }), e.fn.popover = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("popover"),
                a = "object" == typeof n && n;
            r || i.data("popover", r = new t(this, a)), "string" == typeof n && r[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    })
}(window.jQuery), ! function(e) {
    function t(t, n) {
        var i, r = e.proxy(this.process, this),
            a = e(e(t).is("body") ? window : t);
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = a.on("scroll.scroll.data-api", r), this.selector = (this.options.target || (i = e(t).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t, n = this;
            this.offsets = e([]), this.targets = e([]), t = this.$body.find(this.selector).map(function() {
                var t = e(this),
                    n = t.data("target") || t.attr("href"),
                    i = /^#\w/.test(n) && e(n);
                return i && n.length && [
                    [i.position().top, n]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        },
        process: function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                i = n - this.$scrollElement.height(),
                r = this.offsets,
                a = this.targets,
                s = this.activeTarget;
            if (t >= i) return s != (e = a.last()[0]) && this.activate(e);
            for (e = r.length; e--;) s != a[e] && t >= r[e] && (!r[e + 1] || t <= r[e + 1]) && this.activate(a[e])
        },
        activate: function(t) {
            var n, i;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(i).parent("li").addClass("active"), n.parent(".dropdown-menu") && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
        }
    }, e.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("scrollspy"),
                a = "object" == typeof n && n;
            r || i.data("scrollspy", r = new t(this, a)), "string" == typeof n && r[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {
        offset: 10
    }, e(function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t,
        show: function() {
            var t, n, i, r = this.element,
                a = r.closest("ul:not(.dropdown-menu)"),
                s = r.attr("data-target");
            s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (t = a.find(".active a").last()[0], i = e.Event("show", {
                relatedTarget: t
            }), r.trigger(i), i.isDefaultPrevented() || (n = e(s), this.activate(r.parent("li"), a), this.activate(n, n.parent(), function() {
                r.trigger({
                    type: "shown",
                    relatedTarget: t
                })
            })))
        },
        activate: function(t, n, i) {
            function r() {
                a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
            }
            var a = n.find("> .active"),
                s = i && e.support.transition && a.hasClass("fade");
            s ? a.one(e.support.transition.end, r) : r(), a.removeClass("in")
        }
    }, e.fn.tab = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("tab");
            r || i.data("tab", r = new t(this)), "string" == typeof n && r[n]()
        })
    }, e.fn.tab.Constructor = t, e(function() {
        e("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault(), e(this).tab("show")
        })
    })
}(window.jQuery), ! function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = e(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide()
        },
        updater: function(e) {
            return e
        },
        show: function() {
            var t = e.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.css({
                top: t.top + t.height,
                left: t.left
            }), this.$menu.show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function() {
            var t, n = this;
            return this.query = this.$element.val(), this.query ? (t = e.grep(this.source, function(e) {
                return n.matcher(e)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this) : this.shown ? this.hide() : this
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(e) {
            for (var t, n = [], i = [], r = []; t = e.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : r.push(t) : n.push(t);
            return n.concat(i, r)
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                return "<strong>" + t + "</strong>"
            })
        },
        render: function(t) {
            var n = this;
            return t = e(t).map(function(t, i) {
                return t = e(n.options.item).attr("data-value", i), t.find("a").html(n.highlighter(i)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        },
        next: function() {
            var t = this.$menu.find(".active").removeClass("active"),
                n = t.next();
            n.length || (n = e(this.$menu.find("li")[0])), n.addClass("active")
        },
        prev: function() {
            var e = this.$menu.find(".active").removeClass("active"),
                t = e.prev();
            t.length || (t = this.$menu.find("li").last()), t.addClass("active")
        },
        listen: function() {
            this.$element.on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), (e.browser.webkit || e.browser.msie) && this.$element.on("keydown", e.proxy(this.keypress, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
        },
        keyup: function(e) {
            switch (e.keyCode) {
                case 40:
                case 38:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        },
        keypress: function(e) {
            if (this.shown) {
                switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        e.preventDefault();
                        break;
                    case 38:
                        if ("keydown" != e.type) break;
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        if ("keydown" != e.type) break;
                        e.preventDefault(), this.next()
                }
                e.stopPropagation()
            }
        },
        blur: function() {
            var e = this;
            setTimeout(function() {
                e.hide()
            }, 150)
        },
        click: function(e) {
            e.stopPropagation(), e.preventDefault(), this.select()
        },
        mouseenter: function(t) {
            this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        }
    }, e.fn.typeahead = function(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("typeahead"),
                a = "object" == typeof n && n;
            r || i.data("typeahead", r = new t(this, a)), "string" == typeof n && r[n]()
        })
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>'
    }, e.fn.typeahead.Constructor = t, e(function() {
        e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
            var n = e(this);
            n.data("typeahead") || (t.preventDefault(), n.typeahead(n.data()))
        })
    })
}(window.jQuery);
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6", Handlebars.helpers = {}, Handlebars.partials = {}, Handlebars.registerHelper = function(e, t, n) {
    n && (t.not = n), this.helpers[e] = t
}, Handlebars.registerPartial = function(e, t) {
    this.partials[e] = t
}, Handlebars.registerHelper("helperMissing", function(e) {
    if (2 !== arguments.length) throw new Error("Could not find property '" + e + "'")
});
var toString = Object.prototype.toString,
    functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function(e, t) {
    var n = t.inverse || function() {},
        i = t.fn,
        r = "",
        a = toString.call(e);
    if (a === functionType && (e = e.call(this)), e === !0) return i(this);
    if (e === !1 || null == e) return n(this);
    if ("[object Array]" === a) {
        if (e.length > 0)
            for (var s = 0, o = e.length; o > s; s++) r += i(e[s]);
        else r = n(this);
        return r
    }
    return i(e)
}), Handlebars.registerHelper("each", function(e, t) {
    var n = t.fn,
        i = t.inverse,
        r = "";
    if (e && e.length > 0)
        for (var a = 0, s = e.length; s > a; a++) r += n(e[a]);
    else r = i(this);
    return r
}), Handlebars.registerHelper("if", function(e, t) {
    var n = toString.call(e);
    return n === functionType && (e = e.call(this)), !e || Handlebars.Utils.isEmpty(e) ? t.inverse(this) : t.fn(this)
}), Handlebars.registerHelper("unless", function(e, t) {
    var n = t.fn,
        i = t.inverse;
    return t.fn = i, t.inverse = n, Handlebars.helpers["if"].call(this, e, t)
}), Handlebars.registerHelper("with", function(e, t) {
    return t.fn(e)
}), Handlebars.registerHelper("log", function(e) {
    Handlebars.log(e)
});
var handlebars = function() {
    var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                statements: 6,
                simpleInverse: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                OPEN_PARTIAL: 24,
                params: 25,
                hash: 26,
                param: 27,
                STRING: 28,
                INTEGER: 29,
                BOOLEAN: 30,
                hashSegments: 31,
                hashSegment: 32,
                ID: 33,
                EQUALS: 34,
                pathSegments: 35,
                SEP: 36,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "OPEN_PARTIAL",
                28: "STRING",
                29: "INTEGER",
                30: "BOOLEAN",
                33: "ID",
                34: "EQUALS",
                36: "SEP"
            },
            productions_: [0, [3, 2],
                [4, 3],
                [4, 1],
                [4, 0],
                [6, 1],
                [6, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 3],
                [13, 4],
                [7, 2],
                [17, 3],
                [17, 2],
                [17, 2],
                [17, 1],
                [25, 2],
                [25, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [26, 1],
                [31, 2],
                [31, 1],
                [32, 3],
                [32, 3],
                [32, 3],
                [32, 3],
                [21, 1],
                [35, 3],
                [35, 1]
            ],
            performAction: function(e, t, n, i, r, a) {
                var s = a.length - 1;
                switch (r) {
                    case 1:
                        return a[s - 1];
                    case 2:
                        this.$ = new i.ProgramNode(a[s - 2], a[s]);
                        break;
                    case 3:
                        this.$ = new i.ProgramNode(a[s]);
                        break;
                    case 4:
                        this.$ = new i.ProgramNode([]);
                        break;
                    case 5:
                        this.$ = [a[s]];
                        break;
                    case 6:
                        a[s - 1].push(a[s]), this.$ = a[s - 1];
                        break;
                    case 7:
                        this.$ = new i.InverseNode(a[s - 2], a[s - 1], a[s]);
                        break;
                    case 8:
                        this.$ = new i.BlockNode(a[s - 2], a[s - 1], a[s]);
                        break;
                    case 9:
                        this.$ = a[s];
                        break;
                    case 10:
                        this.$ = a[s];
                        break;
                    case 11:
                        this.$ = new i.ContentNode(a[s]);
                        break;
                    case 12:
                        this.$ = new i.CommentNode(a[s]);
                        break;
                    case 13:
                        this.$ = new i.MustacheNode(a[s - 1][0], a[s - 1][1]);
                        break;
                    case 14:
                        this.$ = new i.MustacheNode(a[s - 1][0], a[s - 1][1]);
                        break;
                    case 15:
                        this.$ = a[s - 1];
                        break;
                    case 16:
                        this.$ = new i.MustacheNode(a[s - 1][0], a[s - 1][1]);
                        break;
                    case 17:
                        this.$ = new i.MustacheNode(a[s - 1][0], a[s - 1][1], !0);
                        break;
                    case 18:
                        this.$ = new i.PartialNode(a[s - 1]);
                        break;
                    case 19:
                        this.$ = new i.PartialNode(a[s - 2], a[s - 1]);
                        break;
                    case 20:
                        break;
                    case 21:
                        this.$ = [
                            [a[s - 2]].concat(a[s - 1]), a[s]
                        ];
                        break;
                    case 22:
                        this.$ = [
                            [a[s - 1]].concat(a[s]), null
                        ];
                        break;
                    case 23:
                        this.$ = [
                            [a[s - 1]], a[s]
                        ];
                        break;
                    case 24:
                        this.$ = [
                            [a[s]], null
                        ];
                        break;
                    case 25:
                        a[s - 1].push(a[s]), this.$ = a[s - 1];
                        break;
                    case 26:
                        this.$ = [a[s]];
                        break;
                    case 27:
                        this.$ = a[s];
                        break;
                    case 28:
                        this.$ = new i.StringNode(a[s]);
                        break;
                    case 29:
                        this.$ = new i.IntegerNode(a[s]);
                        break;
                    case 30:
                        this.$ = new i.BooleanNode(a[s]);
                        break;
                    case 31:
                        this.$ = new i.HashNode(a[s]);
                        break;
                    case 32:
                        a[s - 1].push(a[s]), this.$ = a[s - 1];
                        break;
                    case 33:
                        this.$ = [a[s]];
                        break;
                    case 34:
                        this.$ = [a[s - 2], a[s]];
                        break;
                    case 35:
                        this.$ = [a[s - 2], new i.StringNode(a[s])];
                        break;
                    case 36:
                        this.$ = [a[s - 2], new i.IntegerNode(a[s])];
                        break;
                    case 37:
                        this.$ = [a[s - 2], new i.BooleanNode(a[s])];
                        break;
                    case 38:
                        this.$ = new i.IdNode(a[s]);
                        break;
                    case 39:
                        a[s - 2].push(a[s]), this.$ = a[s - 2];
                        break;
                    case 40:
                        this.$ = [a[s]]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 4],
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                1: [3]
            }, {
                5: [1, 16]
            }, {
                5: [2, 3],
                7: 17,
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 19],
                20: [2, 3],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [2, 5],
                19: [2, 5],
                20: [2, 5],
                22: [2, 5],
                23: [2, 5],
                24: [2, 5]
            }, {
                4: 20,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                4: 21,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                24: [2, 9]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                24: [2, 10]
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                24: [2, 11]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                24: [2, 12]
            }, {
                17: 22,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 26,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 27,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 28,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                21: 29,
                33: [1, 25],
                35: 24
            }, {
                1: [2, 1]
            }, {
                6: 30,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [2, 6],
                19: [2, 6],
                20: [2, 6],
                22: [2, 6],
                23: [2, 6],
                24: [2, 6]
            }, {
                17: 22,
                18: [1, 31],
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                10: 32,
                20: [1, 33]
            }, {
                10: 34,
                20: [1, 33]
            }, {
                18: [1, 35]
            }, {
                18: [2, 24],
                21: 40,
                25: 36,
                26: 37,
                27: 38,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 38],
                28: [2, 38],
                29: [2, 38],
                30: [2, 38],
                33: [2, 38],
                36: [1, 46]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                36: [2, 40]
            }, {
                18: [1, 47]
            }, {
                18: [1, 48]
            }, {
                18: [1, 49]
            }, {
                18: [1, 50],
                21: 51,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 2],
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 2],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                22: [2, 20],
                23: [2, 20],
                24: [2, 20]
            }, {
                5: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [2, 7],
                19: [2, 7],
                20: [2, 7],
                22: [2, 7],
                23: [2, 7],
                24: [2, 7]
            }, {
                21: 52,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                24: [2, 8]
            }, {
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                24: [2, 14]
            }, {
                18: [2, 22],
                21: 40,
                26: 53,
                27: 54,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 23]
            }, {
                18: [2, 26],
                28: [2, 26],
                29: [2, 26],
                30: [2, 26],
                33: [2, 26]
            }, {
                18: [2, 31],
                32: 55,
                33: [1, 56]
            }, {
                18: [2, 27],
                28: [2, 27],
                29: [2, 27],
                30: [2, 27],
                33: [2, 27]
            }, {
                18: [2, 28],
                28: [2, 28],
                29: [2, 28],
                30: [2, 28],
                33: [2, 28]
            }, {
                18: [2, 29],
                28: [2, 29],
                29: [2, 29],
                30: [2, 29],
                33: [2, 29]
            }, {
                18: [2, 30],
                28: [2, 30],
                29: [2, 30],
                30: [2, 30],
                33: [2, 30]
            }, {
                18: [2, 33],
                33: [2, 33]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                34: [1, 57],
                36: [2, 40]
            }, {
                33: [1, 58]
            }, {
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                24: [2, 13]
            }, {
                5: [2, 16],
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                24: [2, 16]
            }, {
                5: [2, 17],
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                24: [2, 17]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                24: [2, 18]
            }, {
                18: [1, 59]
            }, {
                18: [1, 60]
            }, {
                18: [2, 21]
            }, {
                18: [2, 25],
                28: [2, 25],
                29: [2, 25],
                30: [2, 25],
                33: [2, 25]
            }, {
                18: [2, 32],
                33: [2, 32]
            }, {
                34: [1, 57]
            }, {
                21: 61,
                28: [1, 62],
                29: [1, 63],
                30: [1, 64],
                33: [1, 25],
                35: 24
            }, {
                18: [2, 39],
                28: [2, 39],
                29: [2, 39],
                30: [2, 39],
                33: [2, 39],
                36: [2, 39]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                24: [2, 19]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                24: [2, 15]
            }, {
                18: [2, 34],
                33: [2, 34]
            }, {
                18: [2, 35],
                33: [2, 35]
            }, {
                18: [2, 36],
                33: [2, 36]
            }, {
                18: [2, 37],
                33: [2, 37]
            }],
            defaultActions: {
                16: [2, 1],
                37: [2, 23],
                53: [2, 21]
            },
            parseError: function(e) {
                throw new Error(e)
            },
            parse: function(e) {
                function t() {
                    var e;
                    return e = n.lexer.lex() || 1, "number" != typeof e && (e = n.symbols_[e] || e), e
                }
                var n = this,
                    i = [0],
                    r = [null],
                    a = [],
                    s = this.table,
                    o = "",
                    l = 0,
                    u = 0,
                    c = 0;
                this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var h = this.lexer.yylloc;
                a.push(h), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var d, p, f, m, g, v, y, b, w, x = {};;) {
                    if (f = i[i.length - 1], this.defaultActions[f] ? m = this.defaultActions[f] : (null == d && (d = t()), m = s[f] && s[f][d]), !("undefined" != typeof m && m.length && m[0] || c)) {
                        w = [];
                        for (v in s[f]) this.terminals_[v] && v > 2 && w.push("'" + this.terminals_[v] + "'");
                        var _ = "";
                        _ = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + this.terminals_[d] + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(_, {
                            text: this.lexer.match,
                            token: this.terminals_[d] || d,
                            line: this.lexer.yylineno,
                            loc: h,
                            expected: w
                        })
                    }
                    if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + f + ", token: " + d);
                    switch (m[0]) {
                        case 1:
                            i.push(d), r.push(this.lexer.yytext), a.push(this.lexer.yylloc), i.push(m[1]), d = null, p ? (d = p, p = null) : (u = this.lexer.yyleng, o = this.lexer.yytext, l = this.lexer.yylineno, h = this.lexer.yylloc, c > 0 && c--);
                            break;
                        case 2:
                            if (y = this.productions_[m[1]][1], x.$ = r[r.length - y], x._$ = {
                                    first_line: a[a.length - (y || 1)].first_line,
                                    last_line: a[a.length - 1].last_line,
                                    first_column: a[a.length - (y || 1)].first_column,
                                    last_column: a[a.length - 1].last_column
                                }, g = this.performAction.call(x, o, u, l, this.yy, m[1], r, a), "undefined" != typeof g) return g;
                            y && (i = i.slice(0, -1 * y * 2), r = r.slice(0, -1 * y), a = a.slice(0, -1 * y)), i.push(this.productions_[m[1]][0]), r.push(x.$), a.push(x._$), b = s[i[i.length - 2]][i[i.length - 1]], i.push(b);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        },
        t = function() {
            var e = {
                EOF: 1,
                parseError: function(e, t) {
                    if (!this.yy.parseError) throw new Error(e);
                    this.yy.parseError(e, t)
                },
                setInput: function(e) {
                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this
                },
                input: function() {
                    var e = this._input[0];
                    this.yytext += e, this.yyleng++, this.match += e, this.matched += e;
                    var t = e.match(/\n/);
                    return t && this.yylineno++, this._input = this._input.slice(1), e
                },
                unput: function(e) {
                    return this._input = e + this._input, this
                },
                more: function() {
                    return this._more = !0, this
                },
                pastInput: function() {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var e = this.match;
                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var e = this.pastInput(),
                        t = new Array(e.length + 1).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var e, t, n;
                    this._more || (this.yytext = "", this.match = "");
                    for (var i = this._currentRules(), r = 0; r < i.length; r++)
                        if (t = this._input.match(this.rules[i[r]])) return n = t[0].match(/\n.*/g), n && (this.yylineno += n.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: n ? n[n.length - 1].length - 1 : this.yylloc.last_column + t[0].length
                        }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, i[r], this.conditionStack[this.conditionStack.length - 1]), e ? e : void 0;
                    return "" === this._input ? this.EOF : void this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function() {
                    var e = this.next();
                    return "undefined" != typeof e ? e : this.lex()
                },
                begin: function(e) {
                    this.conditionStack.push(e)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(e) {
                    this.begin(e)
                }
            };
            return e.performAction = function(e, t, n, i) {
                switch (n) {
                    case 0:
                        if ("\\" !== t.yytext.slice(-1) && this.begin("mu"), "\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1), this.begin("emu")), t.yytext) return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return this.popState(), 14;
                    case 3:
                        return 24;
                    case 4:
                        return 16;
                    case 5:
                        return 20;
                    case 6:
                        return 19;
                    case 7:
                        return 19;
                    case 8:
                        return 23;
                    case 9:
                        return 23;
                    case 10:
                        return t.yytext = t.yytext.substr(3, t.yyleng - 5), this.popState(), 15;
                    case 11:
                        return 22;
                    case 12:
                        return 34;
                    case 13:
                        return 33;
                    case 14:
                        return 33;
                    case 15:
                        return 36;
                    case 16:
                        break;
                    case 17:
                        return this.popState(), 18;
                    case 18:
                        return this.popState(), 18;
                    case 19:
                        return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"'), 28;
                    case 20:
                        return 30;
                    case 21:
                        return 30;
                    case 22:
                        return 29;
                    case 23:
                        return 33;
                    case 24:
                        return t.yytext = t.yytext.substr(1, t.yyleng - 2), 33;
                    case 25:
                        return "INVALID";
                    case 26:
                        return 5
                }
            }, e.rules = [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/], e.conditions = {
                mu: {
                    rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                    inclusive: !1
                },
                emu: {
                    rules: [2],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 26],
                    inclusive: !0
                }
            }, e
        }();
    return e.lexer = t, e
}();
"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = handlebars, exports.parse = function() {
        return handlebars.parse.apply(handlebars, arguments)
    }, exports.main = function(e) {
        if (!e[1]) throw new Error("Usage: " + e[0] + " FILE");
        if ("undefined" != typeof process) var t = require("fs").readFileSync(require("path").join(process.cwd(), e[1]), "utf8");
        else var n = require("file").path(require("file").cwd()),
            t = n.join(e[1]).read({
                charset: "utf-8"
            });
        return exports.parser.parse(t)
    }, "undefined" != typeof module && require.main === module && exports.main("undefined" != typeof process ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function(e) {
        return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
    }, Handlebars.print = function(e) {
        return (new Handlebars.PrintVisitor).accept(e)
    }, Handlebars.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        log: function() {}
    }, Handlebars.log = function(e, t) {
        Handlebars.logger.log(e, t)
    },
    function() {
        Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
            this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
        }, Handlebars.AST.MustacheNode = function(e, t, n) {
            this.type = "mustache", this.id = e[0], this.params = e.slice(1), this.hash = t, this.escaped = !n
        }, Handlebars.AST.PartialNode = function(e, t) {
            this.type = "partial", this.id = e, this.context = t
        };
        var e = function(e, t) {
            if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
        };
        Handlebars.AST.BlockNode = function(t, n, i) {
            e(t.id, i), this.type = "block", this.mustache = t, this.program = n
        }, Handlebars.AST.InverseNode = function(t, n, i) {
            e(t.id, i), this.type = "inverse", this.mustache = t, this.program = n
        }, Handlebars.AST.ContentNode = function(e) {
            this.type = "content", this.string = e
        }, Handlebars.AST.HashNode = function(e) {
            this.type = "hash", this.pairs = e
        }, Handlebars.AST.IdNode = function(e) {
            this.type = "ID", this.original = e.join(".");
            for (var t = [], n = 0, i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                ".." === a ? n++ : "." === a || "this" === a ? this.isScoped = !0 : t.push(a)
            }
            this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = 1 === t.length && 0 === n
        }, Handlebars.AST.StringNode = function(e) {
            this.type = "STRING", this.string = e
        }, Handlebars.AST.IntegerNode = function(e) {
            this.type = "INTEGER", this.integer = e
        }, Handlebars.AST.BooleanNode = function(e) {
            this.type = "BOOLEAN", this.bool = e
        }, Handlebars.AST.CommentNode = function(e) {
            this.type = "comment", this.comment = e
        }
    }(), Handlebars.Exception = function() {
        var e = Error.prototype.constructor.apply(this, arguments);
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        this.message = e.message
    }, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
        this.string = e
    }, Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString()
    },
    function() {
        var e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            t = /&(?!\w+;)|[<>"'`]/g,
            n = /[&<>"'`]/,
            i = function(t) {
                return e[t] || "&amp;"
            };
        Handlebars.Utils = {
            escapeExpression: function(e) {
                return e instanceof Handlebars.SafeString ? e.toString() : null == e || e === !1 ? "" : n.test(e) ? e.replace(t, i) : e
            },
            isEmpty: function(e) {
                return "undefined" == typeof e ? !0 : null === e ? !0 : e === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(e) && 0 === e.length ? !0 : !1
            }
        }
    }(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {},
    function(e, t) {
        e.OPCODE_MAP = {
            appendContent: 1,
            getContext: 2,
            lookupWithHelpers: 3,
            lookup: 4,
            append: 5,
            invokeMustache: 6,
            appendEscaped: 7,
            pushString: 8,
            truthyOrFallback: 9,
            functionOrFallback: 10,
            invokeProgram: 11,
            invokePartial: 12,
            push: 13,
            assignToHash: 15,
            pushStringParam: 16
        }, e.MULTI_PARAM_OPCODES = {
            appendContent: 1,
            getContext: 1,
            lookupWithHelpers: 2,
            lookup: 1,
            invokeMustache: 3,
            pushString: 1,
            truthyOrFallback: 1,
            functionOrFallback: 1,
            invokeProgram: 3,
            invokePartial: 1,
            push: 1,
            assignToHash: 1,
            pushStringParam: 1
        }, e.DISASSEMBLE_MAP = {};
        for (var n in e.OPCODE_MAP) {
            var i = e.OPCODE_MAP[n];
            e.DISASSEMBLE_MAP[i] = n
        }
        e.multiParamSize = function(t) {
            return e.MULTI_PARAM_OPCODES[e.DISASSEMBLE_MAP[t]]
        }, e.prototype = {
            compiler: e,
            disassemble: function() {
                for (var t, n, i, r, a, s = this.opcodes, o = [], l = 0, u = s.length; u > l; l++)
                    if (t = s[l], "DECLARE" === t) r = s[++l], a = s[++l], o.push("DECLARE " + r + " = " + a);
                    else {
                        i = e.DISASSEMBLE_MAP[t];
                        for (var c = e.multiParamSize(t), h = [], d = 0; c > d; d++) n = s[++l], "string" == typeof n && (n = '"' + n.replace("\n", "\\n") + '"'), h.push(n);
                        i = i + " " + h.join(" "), o.push(i)
                    }
                return o.join("\n")
            },
            guid: 0,
            compile: function(e, t) {
                this.children = [], this.depths = {
                    list: []
                }, this.options = t;
                var n = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        "if": !0,
                        unless: !0,
                        "with": !0,
                        log: !0
                    }, n)
                    for (var i in n) this.options.knownHelpers[i] = n[i];
                return this.program(e)
            },
            accept: function(e) {
                return this[e.type](e)
            },
            program: function(e) {
                var t, n = e.statements;
                this.opcodes = [];
                for (var i = 0, r = n.length; r > i; i++) t = n[i], this[t.type](t);
                return this.isSimple = 1 === r, this.depths.list = this.depths.list.sort(function(e, t) {
                    return e - t
                }), this
            },
            compileProgram: function(e) {
                var t = (new this.compiler).compile(e, this.options),
                    n = this.guid++;
                this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                for (var i = 0, r = t.depths.list.length; r > i; i++) depth = t.depths.list[i], 2 > depth || this.addDepth(depth - 1);
                return n
            },
            block: function(e) {
                var t, n = e.mustache,
                    i = this.setupStackForMustache(n),
                    r = this.compileProgram(e.program);
                e.program.inverse && (t = this.compileProgram(e.program.inverse), this.declare("inverse", t)), this.opcode("invokeProgram", r, i.length, !!n.hash), this.declare("inverse", null), this.opcode("append")
            },
            inverse: function(e) {
                var t = this.setupStackForMustache(e.mustache),
                    n = this.compileProgram(e.program);
                this.declare("inverse", n), this.opcode("invokeProgram", null, t.length, !!e.mustache.hash), this.declare("inverse", null), this.opcode("append")
            },
            hash: function(e) {
                var t, n, i = e.pairs;
                this.opcode("push", "{}");
                for (var r = 0, a = i.length; a > r; r++) t = i[r], n = t[1], this.accept(n), this.opcode("assignToHash", t[0])
            },
            partial: function(e) {
                var t = e.id;
                this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
            },
            content: function(e) {
                this.opcode("appendContent", e.string)
            },
            mustache: function(e) {
                var t = this.setupStackForMustache(e);
                this.opcode("invokeMustache", t.length, e.id.original, !!e.hash), this.opcode(e.escaped && !this.options.noEscape ? "appendEscaped" : "append")
            },
            ID: function(e) {
                this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("lookupWithHelpers", e.parts[0] || null, e.isScoped || !1);
                for (var t = 1, n = e.parts.length; n > t; t++) this.opcode("lookup", e.parts[t])
            },
            STRING: function(e) {
                this.opcode("pushString", e.string)
            },
            INTEGER: function(e) {
                this.opcode("push", e.integer)
            },
            BOOLEAN: function(e) {
                this.opcode("push", e.bool)
            },
            comment: function() {},
            pushParams: function(e) {
                for (var t, n = e.length; n--;) t = e[n], this.options.stringParams ? (t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", t.string)) : this[t.type](t)
            },
            opcode: function(t, n, i, r) {
                this.opcodes.push(e.OPCODE_MAP[t]), void 0 !== n && this.opcodes.push(n), void 0 !== i && this.opcodes.push(i), void 0 !== r && this.opcodes.push(r)
            },
            declare: function(e, t) {
                this.opcodes.push("DECLARE"), this.opcodes.push(e), this.opcodes.push(t)
            },
            addDepth: function(e) {
                0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
            },
            setupStackForMustache: function(e) {
                var t = e.params;
                return this.pushParams(t), e.hash && this.hash(e.hash), this.ID(e.id), t
            }
        }, t.prototype = {
            nameLookup: function(e, n) {
                return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"
            },
            appendToBuffer: function(e) {
                return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(e, t, n, i) {
                this.environment = e, this.options = t || {}, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    programs: [],
                    aliases: {
                        self: "this"
                    },
                    registers: {
                        list: []
                    }
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.compileChildren(e, t);
                var r, a = e.opcodes;
                for (this.i = 0, o = a.length; this.i < o; this.i++) r = this.nextOpcode(0), "DECLARE" === r[0] ? (this.i = this.i + 2, this[r[1]] = r[2]) : (this.i = this.i + r[1].length, this[r[0]].apply(this, r[1]));
                return this.createFunctionContext(i)
            },
            nextOpcode: function(t) {
                var n, i, r, a, s = this.environment.opcodes,
                    o = s[this.i + t];
                if ("DECLARE" === o) return n = s[this.i + 1], i = s[this.i + 2], ["DECLARE", n, i];
                n = e.DISASSEMBLE_MAP[o], r = e.multiParamSize(o), a = [];
                for (var l = 0; r > l; l++) a.push(s[this.i + l + 1 + t]);
                return [n, a]
            },
            eat: function(e) {
                this.i = this.i + e.length
            },
            preamble: function() {
                var e = [];
                if (this.useRegister("foundHelper"), this.isChild) e.push("");
                else {
                    var t = this.namespace,
                        n = "helpers = helpers || " + t + ".helpers;";
                    this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), e.push(n)
                }
                e.push(this.environment.isSimple ? "" : ", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
            },
            createFunctionContext: function(e) {
                var t = this.stackVars;
                if (this.isChild || (t = t.concat(this.context.registers.list)), t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", ")), !this.isChild)
                    for (var n in this.context.aliases) this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n];
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
                for (var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], r = 0, a = this.environment.depths.list.length; a > r; r++) i.push("depth" + this.environment.depths.list[r]);
                if (e) return i.push(this.source.join("\n  ")), Function.apply(this, i);
                var s = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
                return Handlebars.log(Handlebars.logger.DEBUG, s + "\n\n"), s
            },
            appendContent: function(e) {
                this.source.push(this.appendToBuffer(this.quotedString(e)))
            },
            append: function() {
                var e = this.popStack();
                this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                var e = this.nextOpcode(1),
                    t = "";
                this.context.aliases.escapeExpression = "this.escapeExpression", "appendContent" === e[0] && (t = " + " + this.quotedString(e[1][0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
            },
            getContext: function(e) {
                this.lastContext !== e && (this.lastContext = e)
            },
            lookupWithHelpers: function(e, t) {
                if (e) {
                    var n = this.nextStack();
                    this.usingKnownHelper = !1;
                    var i;
                    !t && this.options.knownHelpers[e] ? (i = n + " = " + this.nameLookup("helpers", e, "helper"), this.usingKnownHelper = !0) : t || this.options.knownHelpersOnly ? i = n + " = " + this.nameLookup("depth" + this.lastContext, e, "context") : (this.register("foundHelper", this.nameLookup("helpers", e, "helper")), i = n + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, e, "context")), i += ";", this.source.push(i)
                } else this.pushStack("depth" + this.lastContext)
            },
            lookup: function(e) {
                var t = this.topStack();
                this.source.push(t + " = (" + t + " === null || " + t + " === undefined || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context") + ");")
            },
            pushStringParam: function(e) {
                this.pushStack("depth" + this.lastContext), this.pushString(e)
            },
            pushString: function(e) {
                this.pushStack(this.quotedString(e))
            },
            push: function(e) {
                this.pushStack(e)
            },
            invokeMustache: function(e, t, n) {
                this.populateParams(e, this.quotedString(t), "{}", null, n, function(e, t, n) {
                    this.usingKnownHelper || (this.context.aliases.helperMissing = "helpers.helperMissing", this.context.aliases.undef = "void 0", this.source.push("else if(" + n + "=== undef) { " + e + " = helperMissing.call(" + t + "); }"), e !== n && this.source.push("else { " + e + " = " + n + "; }"))
                })
            },
            invokeProgram: function(e, t, n) {
                var i = this.programExpression(this.inverse),
                    r = this.programExpression(e);
                this.populateParams(t, null, r, i, n, function(e, t) {
                    this.usingKnownHelper || (this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing", this.source.push("else { " + e + " = blockHelperMissing.call(" + t + "); }"))
                })
            },
            populateParams: function(e, t, n, i, r, a) {
                var s, o, l = r || this.options.stringParams || i || this.options.data,
                    u = this.popStack(),
                    c = [];
                if (l ? (this.register("tmp1", n), o = "tmp1") : o = "{ hash: {} }", l) {
                    var h = r ? this.popStack() : "{}";
                    this.source.push("tmp1.hash = " + h + ";")
                }
                this.options.stringParams && this.source.push("tmp1.contexts = [];");
                for (var d = 0; e > d; d++) s = this.popStack(), c.push(s), this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");");
                i && (this.source.push("tmp1.fn = tmp1;"), this.source.push("tmp1.inverse = " + i + ";")), this.options.data && this.source.push("tmp1.data = data;"), c.push(o), this.populateCall(c, u, t || u, a, "{}" !== n)
            },
            populateCall: function(e, t, n, i, r) {
                var a = ["depth0"].concat(e).join(", "),
                    s = ["depth0"].concat(n).concat(e).join(", "),
                    o = this.nextStack();
                if (this.usingKnownHelper) this.source.push(o + " = " + t + ".call(" + a + ");");
                else {
                    this.context.aliases.functionType = '"function"';
                    var l = r ? "foundHelper && " : "";
                    this.source.push("if(" + l + "typeof " + t + " === functionType) { " + o + " = " + t + ".call(" + a + "); }")
                }
                i.call(this, o, s, t), this.usingKnownHelper = !1
            },
            invokePartial: function(e) {
                params = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"], this.options.data && params.push("data"), this.pushStack("self.invokePartial(" + params.join(", ") + ");")
            },
            assignToHash: function(e) {
                var t = this.popStack(),
                    n = this.topStack();
                this.source.push(n + "['" + e + "'] = " + t + ";")
            },
            compiler: t,
            compileChildren: function(e, t) {
                for (var n, i, r = e.children, a = 0, s = r.length; s > a; a++) {
                    n = r[a], i = new this.compiler, this.context.programs.push("");
                    var o = this.context.programs.length;
                    n.index = o, n.name = "program" + o, this.context.programs[o] = i.compile(n, t, this.context)
                }
            },
            programExpression: function(e) {
                if (null == e) return "self.noop";
                for (var t = this.environment.children[e], n = t.depths.list, i = [t.index, t.name, "data"], r = 0, a = n.length; a > r; r++) depth = n[r], i.push(1 === depth ? "depth0" : "depth" + (depth - 1));
                return 0 === n.length ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")")
            },
            register: function(e, t) {
                this.useRegister(e), this.source.push(e + " = " + t + ";")
            },
            useRegister: function(e) {
                this.context.registers[e] || (this.context.registers[e] = !0, this.context.registers.list.push(e))
            },
            pushStack: function(e) {
                return this.source.push(this.nextStack() + " = " + e + ";"), "stack" + this.stackSlot
            },
            nextStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
            },
            popStack: function() {
                return "stack" + this.stackSlot--
            },
            topStack: function() {
                return "stack" + this.stackSlot
            },
            quotedString: function(e) {
                return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
            }
        };
        for (var r = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), a = t.RESERVED_WORDS = {}, s = 0, o = r.length; o > s; s++) a[r[s]] = !0;
        t.isValidJavaScriptVariableName = function(e) {
            return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
        }
    }(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
        t = t || {};
        var n = Handlebars.parse(e),
            i = (new Handlebars.Compiler).compile(n, t);
        return (new Handlebars.JavaScriptCompiler).compile(i, t)
    }, Handlebars.compile = function(e, t) {
        function n() {
            var n = Handlebars.parse(e),
                i = (new Handlebars.Compiler).compile(n, t),
                r = (new Handlebars.JavaScriptCompiler).compile(i, t, void 0, !0);
            return Handlebars.template(r)
        }
        t = t || {};
        var i;
        return function(e, t) {
            return i || (i = n()), i.call(this, e, t)
        }
    }, Handlebars.VM = {
        template: function(e) {
            var t = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(e, t, n) {
                    var i = this.programs[e];
                    return n ? Handlebars.VM.program(t, n) : i ? i : i = this.programs[e] = Handlebars.VM.program(t)
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop
            };
            return function(n, i) {
                return i = i || {}, e.call(t, Handlebars, n, i.helpers, i.partials, i.data)
            }
        },
        programWithDepth: function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function(i, r) {
                return r = r || {}, e.apply(this, [i, r.data || t].concat(n))
            }
        },
        program: function(e, t) {
            return function(n, i) {
                return i = i || {}, e(n, i.data || t)
            }
        },
        noop: function() {
            return ""
        },
        invokePartial: function(e, t, n, i, r, a) {
            if (options = {
                    helpers: i,
                    partials: r,
                    data: a
                }, void 0 === e) throw new Handlebars.Exception("The partial " + t + " could not be found");
            if (e instanceof Function) return e(n, options);
            if (Handlebars.compile) return r[t] = Handlebars.compile(e), r[t](n, options);
            throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode")
        }
    }, Handlebars.template = Handlebars.VM.template,
    function(e, t) {
        function n(e, t) {
            this._d = e, this._isUTC = !!t
        }

        function i(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function r(e) {
            var t = this._data = {},
                n = e.years || e.y || 0,
                r = e.months || e.M || 0,
                a = e.weeks || e.w || 0,
                s = e.days || e.d || 0,
                o = e.hours || e.h || 0,
                l = e.minutes || e.m || 0,
                u = e.seconds || e.s || 0,
                c = e.milliseconds || e.ms || 0;
            this._milliseconds = c + 1e3 * u + 6e4 * l + 36e5 * o, this._days = s + 7 * a, this._months = r + 12 * n, t.milliseconds = c % 1e3, u += i(c / 1e3), t.seconds = u % 60, l += i(u / 60), t.minutes = l % 60, o += i(l / 60), t.hours = o % 24, s += i(o / 24), s += 7 * a, t.days = s % 30, r += i(s / 30), t.months = r % 12, n += i(r / 12), t.years = n
        }

        function a(e, t) {
            for (var n = e + ""; n.length < t;) n = "0" + n;
            return n
        }

        function s(e, t, n) {
            var i, r = t._milliseconds,
                a = t._days,
                s = t._months;
            r && e._d.setTime(+e + r * n), a && e.date(e.date() + a * n), s && (i = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(i, e.daysInMonth())))
        }

        function o(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function l(t) {
            return new e(t[0], t[1] || 0, t[2] || 1, t[3] || 0, t[4] || 0, t[5] || 0, t[6] || 0)
        }

        function u(t, n) {
            function i(n) {
                var v, y;
                switch (n) {
                    case "M":
                        return r + 1;
                    case "Mo":
                        return r + 1 + m(r + 1);
                    case "MM":
                        return a(r + 1, 2);
                    case "MMM":
                        return x.monthsShort[r];
                    case "MMMM":
                        return x.months[r];
                    case "D":
                        return s;
                    case "Do":
                        return s + m(s);
                    case "DD":
                        return a(s, 2);
                    case "DDD":
                        return v = new e(o, r, s), y = new e(o, 0, 1), ~~((v - y) / 864e5 + 1.5);
                    case "DDDo":
                        return v = i("DDD"), v + m(v);
                    case "DDDD":
                        return a(i("DDD"), 3);
                    case "d":
                        return l;
                    case "do":
                        return l + m(l);
                    case "ddd":
                        return x.weekdaysShort[l];
                    case "dddd":
                        return x.weekdays[l];
                    case "w":
                        return v = new e(o, r, s - l + 5), y = new e(v.getFullYear(), 0, 4), ~~((v - y) / 864e5 / 7 + 1.5);
                    case "wo":
                        return v = i("w"), v + m(v);
                    case "ww":
                        return a(i("w"), 2);
                    case "YY":
                        return a(o % 100, 2);
                    case "YYYY":
                        return o;
                    case "a":
                        return g ? g(c, h, !1) : c > 11 ? "pm" : "am";
                    case "A":
                        return g ? g(c, h, !0) : c > 11 ? "PM" : "AM";
                    case "H":
                        return c;
                    case "HH":
                        return a(c, 2);
                    case "h":
                        return c % 12 || 12;
                    case "hh":
                        return a(c % 12 || 12, 2);
                    case "m":
                        return h;
                    case "mm":
                        return a(h, 2);
                    case "s":
                        return d;
                    case "ss":
                        return a(d, 2);
                    case "S":
                        return ~~(p / 100);
                    case "SS":
                        return a(~~(p / 10), 2);
                    case "SSS":
                        return a(p, 3);
                    case "Z":
                        return (0 > f ? "-" : "+") + a(~~(Math.abs(f) / 60), 2) + ":" + a(~~(Math.abs(f) % 60), 2);
                    case "ZZ":
                        return (0 > f ? "-" : "+") + a(~~(10 * Math.abs(f) / 6), 4);
                    case "L":
                    case "LL":
                    case "LLL":
                    case "LLLL":
                    case "LT":
                        return u(t, x.longDateFormat[n]);
                    default:
                        return n.replace(/(^\[)|(\\)|\]$/g, "")
                }
            }
            var r = t.month(),
                s = t.date(),
                o = t.year(),
                l = t.day(),
                c = t.hours(),
                h = t.minutes(),
                d = t.seconds(),
                p = t.milliseconds(),
                f = -t.zone(),
                m = x.ordinal,
                g = x.meridiem;
            return n.replace(A, i)
        }

        function c(e) {
            switch (e) {
                case "DDDD":
                    return j;
                case "YYYY":
                    return H;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return $;
                case "MMM":
                case "MMMM":
                case "ddd":
                case "dddd":
                case "a":
                case "A":
                    return I;
                case "Z":
                case "ZZ":
                    return O;
                case "T":
                    return P;
                case "MM":
                case "DD":
                case "dd":
                case "YY":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                    return D;
                default:
                    return new RegExp(e.replace("\\", ""))
            }
        }

        function h(e, t, n, i) {
            var r;
            switch (e) {
                case "M":
                case "MM":
                    n[1] = null == t ? 0 : ~~t - 1;
                    break;
                case "MMM":
                case "MMMM":
                    for (r = 0; 12 > r; r++)
                        if (x.monthsParse[r].test(t)) {
                            n[1] = r;
                            break
                        }
                    break;
                case "D":
                case "DD":
                case "DDD":
                case "DDDD":
                    n[2] = ~~t;
                    break;
                case "YY":
                    t = ~~t, n[0] = t + (t > 70 ? 1900 : 2e3);
                    break;
                case "YYYY":
                    n[0] = ~~Math.abs(t);
                    break;
                case "a":
                case "A":
                    i.isPm = "pm" === (t + "").toLowerCase();
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    n[3] = ~~t;
                    break;
                case "m":
                case "mm":
                    n[4] = ~~t;
                    break;
                case "s":
                case "ss":
                    n[5] = ~~t;
                    break;
                case "S":
                case "SS":
                case "SSS":
                    n[6] = ~~(1e3 * ("0." + t));
                    break;
                case "Z":
                case "ZZ":
                    i.isUTC = !0, r = (t + "").match(B), r && r[1] && (i.tzh = ~~r[1]), r && r[2] && (i.tzm = ~~r[2]), r && "+" === r[0] && (i.tzh = -i.tzh, i.tzm = -i.tzm)
            }
        }

        function d(t, n) {
            var i, r, a = [0, 0, 1, 0, 0, 0, 0],
                s = {
                    tzh: 0,
                    tzm: 0
                },
                o = n.match(A);
            for (i = 0; i < o.length; i++) r = (c(o[i]).exec(t) || [])[0],
                t = t.replace(c(o[i]), ""), h(o[i], r, a, s);
            return s.isPm && a[3] < 12 && (a[3] += 12), s.isPm === !1 && 12 === a[3] && (a[3] = 0), a[3] += s.tzh, a[4] += s.tzm, s.isUTC ? new e(e.UTC.apply({}, a)) : l(a)
        }

        function p(e, t) {
            var n, i = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                a = 0;
            for (n = 0; i > n; n++) ~~e[n] !== ~~t[n] && a++;
            return a + r
        }

        function f(e, t) {
            var i, r, a, s, o, l = e.match(L) || [],
                c = 99;
            for (a = 0; a < t.length; a++) s = d(e, t[a]), r = u(new n(s), t[a]).match(L) || [], o = p(l, r), c > o && (c = o, i = s);
            return i
        }

        function m(t) {
            var n, i = "YYYY-MM-DDT";
            if (V.exec(t)) {
                for (n = 0; 4 > n; n++)
                    if (R[n][1].exec(t)) {
                        i += R[n][0];
                        break
                    }
                return O.exec(t) ? d(t, i + " Z") : d(t, i)
            }
            return new e(t)
        }

        function g(e, t, n, i) {
            var r = x.relativeTime[e];
            return "function" == typeof r ? r(t || 1, !!n, e, i) : r.replace(/%d/i, t || 1)
        }

        function v(e, t) {
            var n = T(Math.abs(e) / 1e3),
                i = T(n / 60),
                r = T(i / 60),
                a = T(r / 24),
                s = T(a / 365),
                o = 45 > n && ["s", n] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === r && ["h"] || 22 > r && ["hh", r] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", T(a / 30)] || 1 === s && ["y"] || ["yy", s];
            return o[2] = t, o[3] = e > 0, g.apply({}, o)
        }

        function y(e, t) {
            x.fn[e] = function(e) {
                var n = this._isUTC ? "UTC" : "";
                return null != e ? (this._d["set" + n + t](e), this) : this._d["get" + n + t]()
            }
        }

        function b(e) {
            x.duration.fn[e] = function() {
                return this._data[e]
            }
        }

        function w(e, t) {
            x.duration.fn["as" + e] = function() {
                return +this / t
            }
        }
        var x, _, C = "1.6.2",
            T = Math.round,
            k = {},
            S = "en",
            E = "undefined" != typeof module,
            N = "months|monthsShort|monthsParse|weekdays|weekdaysShort|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
            M = /^\/?Date\((\-?\d+)/i,
            A = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|LT|LL?L?L?)/g,
            L = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
            D = /\d\d?/,
            $ = /\d{1,3}/,
            j = /\d{3}/,
            H = /\d{4}/,
            I = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
            O = /Z|[\+\-]\d\d:?\d\d/i,
            P = /T/i,
            V = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
            F = "YYYY-MM-DDTHH:mm:ssZ",
            R = [
                ["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /T\d\d:\d\d:\d\d/],
                ["HH:mm", /T\d\d:\d\d/],
                ["HH", /T\d\d/]
            ],
            B = /([\+\-]|\d\d)/gi,
            q = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
            Y = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            };
        for (x = function(i, r) {
                if (null === i || "" === i) return null;
                var a, s, u;
                return x.isMoment(i) ? (a = new e(+i._d), u = i._isUTC) : r ? a = o(r) ? f(i, r) : d(i, r) : (s = M.exec(i), a = i === t ? new e : s ? new e(+s[1]) : i instanceof e ? i : o(i) ? l(i) : "string" == typeof i ? m(i) : new e(i)), new n(a, u)
            }, x.utc = function(t, i) {
                return o(t) ? new n(new e(e.UTC.apply({}, t)), !0) : i && t ? x(t + " +0000", i + " Z").utc() : x(t && !O.exec(t) ? t + "+0000" : t).utc()
            }, x.unix = function(e) {
                return x(1e3 * e)
            }, x.duration = function(e, t) {
                var n = x.isDuration(e),
                    i = "number" == typeof e,
                    a = n ? e._data : i ? {} : e;
                return i && (t ? a[t] = e : a.milliseconds = e), new r(a)
            }, x.humanizeDuration = function(e, t, n) {
                return x.duration(e, t === !0 ? null : t).humanize(t === !0 ? !0 : n)
            }, x.version = C, x.defaultFormat = F, x.lang = function(e, t) {
                var n, i, r = [];
                if (!e) return S;
                if (t) {
                    for (n = 0; 12 > n; n++) r[n] = new RegExp("^" + t.months[n] + "|^" + t.monthsShort[n].replace(".", ""), "i");
                    t.monthsParse = t.monthsParse || r, k[e] = t
                }
                if (k[e]) {
                    for (n = 0; n < N.length; n++) x[N[n]] = k[e][N[n]] || k.en[N[n]];
                    S = e
                } else E && (i = require("./lang/" + e), x.lang(e, i))
            }, x.lang("en", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                meridiem: !1,
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinal: function(e) {
                    var t = e % 10;
                    return 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"
                }
            }), x.isMoment = function(e) {
                return e instanceof n
            }, x.isDuration = function(e) {
                return e instanceof r
            }, x.fn = n.prototype = {
                clone: function() {
                    return x(this)
                },
                valueOf: function() {
                    return +this._d
                },
                unix: function() {
                    return Math.floor(+this._d / 1e3)
                },
                toString: function() {
                    return this._d.toString()
                },
                toDate: function() {
                    return this._d
                },
                utc: function() {
                    return this._isUTC = !0, this
                },
                local: function() {
                    return this._isUTC = !1, this
                },
                format: function(e) {
                    return u(this, e ? e : x.defaultFormat)
                },
                add: function(e, t) {
                    var n = t ? x.duration(+t, e) : x.duration(e);
                    return s(this, n, 1), this
                },
                subtract: function(e, t) {
                    var n = t ? x.duration(+t, e) : x.duration(e);
                    return s(this, n, -1), this
                },
                diff: function(e, t, n) {
                    var i, r = this._isUTC ? x(e).utc() : x(e).local(),
                        a = 6e4 * (this.zone() - r.zone()),
                        s = this._d - r._d - a,
                        o = this.year() - r.year(),
                        l = this.month() - r.month(),
                        u = this.date() - r.date();
                    return i = "months" === t ? 12 * o + l + u / 30 : "years" === t ? o + (l + u / 30) / 12 : "seconds" === t ? s / 1e3 : "minutes" === t ? s / 6e4 : "hours" === t ? s / 36e5 : "days" === t ? s / 864e5 : "weeks" === t ? s / 6048e5 : s, n ? i : T(i)
                },
                from: function(e, t) {
                    return x.duration(this.diff(e)).humanize(!t)
                },
                fromNow: function(e) {
                    return this.from(x(), e)
                },
                calendar: function() {
                    var e = this.diff(x().sod(), "days", !0),
                        t = x.calendar,
                        n = t.sameElse,
                        i = -6 > e ? n : -1 > e ? t.lastWeek : 0 > e ? t.lastDay : 1 > e ? t.sameDay : 2 > e ? t.nextDay : 7 > e ? t.nextWeek : n;
                    return this.format("function" == typeof i ? i.apply(this) : i)
                },
                isLeapYear: function() {
                    var e = this.year();
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                },
                isDST: function() {
                    return this.zone() < x([this.year()]).zone() || this.zone() < x([this.year(), 5]).zone()
                },
                day: function(e) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null == e ? t : this.add({
                        d: e - t
                    })
                },
                sod: function() {
                    return x(this).hours(0).minutes(0).seconds(0).milliseconds(0)
                },
                eod: function() {
                    return this.sod().add({
                        d: 1,
                        ms: -1
                    })
                },
                zone: function() {
                    return this._isUTC ? 0 : this._d.getTimezoneOffset()
                },
                daysInMonth: function() {
                    return x(this).month(this.month() + 1).date(0).date()
                }
            }, _ = 0; _ < q.length; _++) y(q[_].toLowerCase(), q[_]);
        y("year", "FullYear"), x.duration.fn = r.prototype = {
            weeks: function() {
                return i(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
            },
            humanize: function(e) {
                var t = +this,
                    n = x.relativeTime,
                    i = v(t, !e);
                return e && (i = (0 >= t ? n.past : n.future).replace(/%s/i, i)), i
            }
        };
        for (_ in Y) Y.hasOwnProperty(_) && (w(_, Y[_]), b(_.toLowerCase()));
        w("Weeks", 6048e5), E && (module.exports = x), "undefined" != typeof window && "undefined" == typeof ender && (window.moment = x), "function" == typeof define && define.amd && define("moment", [], function() {
            return x
        })
    }(Date),
    function(e) {
        e.fn.hoverIntent = function(t, n) {
            var i = {
                sensitivity: 7,
                interval: 100,
                timeout: 0
            };
            i = e.extend(i, n ? {
                over: t,
                out: n
            } : t);
            var r, a, s, o, l = function(e) {
                    r = e.pageX, a = e.pageY
                },
                u = function(t, n) {
                    return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(s - r) + Math.abs(o - a) < i.sensitivity ? (e(n).unbind("mousemove", l), n.hoverIntent_s = 1, i.over.apply(n, [t])) : (s = r, o = a, void(n.hoverIntent_t = setTimeout(function() {
                        u(t, n)
                    }, i.interval)))
                },
                c = function(e, t) {
                    return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, i.out.apply(t, [e])
                },
                h = function(t) {
                    var n = jQuery.extend({}, t),
                        r = this;
                    r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t)), "mouseenter" == t.type ? (s = n.pageX, o = n.pageY, e(r).bind("mousemove", l), 1 != r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function() {
                        u(n, r)
                    }, i.interval))) : (e(r).unbind("mousemove", l), 1 == r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function() {
                        c(n, r)
                    }, i.timeout)))
                };
            return this.bind("mouseenter", h).bind("mouseleave", h)
        }
    }(jQuery),
    function(e, t, n) {
        "use strict";
        var i, r, a, s, o, l, u, c, h, d, p, f, m, g, v, y, b, w, x, _, C, T, k;
        T = {
            paneClass: "pane",
            sliderClass: "slider",
            contentClass: "content",
            iOSNativeScrolling: !1,
            preventPageScrolling: !1,
            disableResize: !1,
            alwaysVisible: !1,
            flashDelay: 1500,
            sliderMinHeight: 20,
            sliderMaxHeight: null
        }, w = "scrollbar", b = "scroll", d = "mousedown", p = "mousemove", m = "mousewheel", f = "mouseup", y = "resize", o = "drag", _ = "up", v = "panedown", a = "DOMMouseScroll", s = "down", C = "wheel", l = "keydown", h = "keyup", x = "touchmove", i = "Microsoft Internet Explorer" === t.navigator.appName && /msie 7./i.test(t.navigator.appVersion) && t.ActiveXObject, r = null, c = {}, u = {
            up: 38,
            down: 40,
            pgup: 33,
            pgdown: 34,
            home: 36,
            end: 35
        }, k = function() {
            var e, t, i;
            return e = n.createElement("div"), t = e.style, t.position = "absolute", t.width = "100px", t.height = "100px", t.overflow = b, t.top = "-9999px", n.body.appendChild(e), i = e.offsetWidth - e.clientWidth, n.body.removeChild(e), i
        }, g = function() {
            function u(i, a) {
                this.el = i, this.options = a, r || (r = k()), this.$el = e(this.el), this.doc = e(n), this.win = e(t), this.generate(), this.createEvents(), this.addEvents(), this.reset()
            }
            return u.prototype.preventScrolling = function(e, t) {
                if (this.isActive)
                    if (e.type === a)(t === s && e.originalEvent.detail > 0 || t === _ && e.originalEvent.detail < 0) && e.preventDefault();
                    else if (e.type === m) {
                    if (!e.originalEvent || !e.originalEvent.wheelDelta) return;
                    (t === s && e.originalEvent.wheelDelta < 0 || t === _ && e.originalEvent.wheelDelta > 0) && e.preventDefault()
                }
            }, u.prototype.updateScrollValues = function() {
                var e;
                e = this.content[0], this.maxScrollTop = e.scrollHeight - e.clientHeight, this.contentScrollTop = e.scrollTop, this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = this.contentScrollTop * this.maxSliderTop / this.maxScrollTop
            }, u.prototype.createEvents = function() {
                var e = this;
                this.events = {
                    down: function(t) {
                        return e.isBeingDragged = !0, e.offsetY = t.pageY - e.slider.offset().top, e.pane.addClass("active"), e.doc.bind(p, e.events[o]).bind(f, e.events[_]), !1
                    },
                    drag: function(t) {
                        return e.sliderY = t.pageY - e.$el.offset().top - e.offsetY, e.scroll(), e.updateScrollValues(), e.contentScrollTop >= e.maxScrollTop ? e.$el.trigger("scrollend") : 0 === e.contentScrollTop && e.$el.trigger("scrolltop"), !1
                    },
                    up: function() {
                        return e.isBeingDragged = !1, e.pane.removeClass("active"), e.doc.unbind(p, e.events[o]).unbind(f, e.events[_]), !1
                    },
                    resize: function() {
                        e.reset()
                    },
                    panedown: function(t) {
                        return e.sliderY = (t.offsetY || t.originalEvent.layerY) - .5 * e.sliderHeight, e.scroll(), e.events.down(t), !1
                    },
                    scroll: function(t) {
                        e.isBeingDragged || (e.updateScrollValues(), e.sliderY = e.sliderTop, e.slider.css({
                            top: e.sliderTop
                        }), null != t && (e.contentScrollTop >= e.maxScrollTop ? (e.options.preventPageScrolling && e.preventScrolling(t, s), e.$el.trigger("scrollend")) : 0 === e.contentScrollTop && (e.options.preventPageScrolling && e.preventScrolling(t, _), e.$el.trigger("scrolltop"))))
                    },
                    wheel: function(t) {
                        return null != t ? (e.sliderY += -t.wheelDeltaY || -t.delta, e.scroll(), !1) : void 0
                    }
                }
            }, u.prototype.addEvents = function() {
                var e;
                this.removeEvents(), e = this.events, this.options.disableResize || this.win.bind(y, e[y]), this.slider.bind(d, e[s]), this.pane.bind(d, e[v]).bind("" + m + " " + a, e[C]), this.content.bind("" + b + " " + m + " " + a + " " + x, e[b])
            }, u.prototype.removeEvents = function() {
                var e;
                e = this.events, this.win.unbind(y, e[y]), this.slider.unbind(), this.pane.unbind(), this.content.unbind("" + b + " " + m + " " + a + " " + x, e[b]).unbind(l, e[l]).unbind(h, e[h])
            }, u.prototype.generate = function() {
                var e, t, n, i, a;
                return n = this.options, i = n.paneClass, a = n.sliderClass, e = n.contentClass, this.$el.find("" + i).length || this.$el.find("" + a).length || this.$el.append('<div class="' + i + '"><div class="' + a + '" /></div>'), this.content = this.$el.children("." + e), this.content.attr("tabindex", 0), this.slider = this.$el.find("." + a), this.pane = this.$el.find("." + i), r && (t = {
                    right: -r
                }, this.$el.addClass("has-scrollbar")), n.iOSNativeScrolling && (null == t && (t = {}), t.WebkitOverflowScrolling = "touch"), null != t && this.content.css(t), this
            }, u.prototype.restore = function() {
                return this.stopped = !1, this.pane.show(), this.addEvents()
            }, u.prototype.reset = function() {
                var e, t, n, a, s, o, l, u, c;
                return this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), e = this.content[0], n = e.style, a = n.overflowY, i && this.content.css({
                    height: this.content.height()
                }), t = e.scrollHeight + r, o = this.pane.outerHeight(), u = parseInt(this.pane.css("top"), 10), s = parseInt(this.pane.css("bottom"), 10), l = o + u + s, c = Math.round(l / t * l), c < this.options.sliderMinHeight ? c = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && c > this.options.sliderMaxHeight && (c = this.options.sliderMaxHeight), a === b && n.overflowX !== b && (c += r), this.maxSliderTop = l - c, this.contentHeight = t, this.paneHeight = o, this.paneOuterHeight = l, this.sliderHeight = c, this.slider.height(c), this.events.scroll(), this.pane.show(), this.isActive = !0, this.pane.outerHeight(!0) >= e.scrollHeight && a !== b ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === e.scrollHeight && a === b ? this.slider.hide() : this.slider.show(), this.pane.css(this.options.alwaysVisible ? {
                    opacity: 1,
                    visibility: "visible"
                } : {
                    opacity: "",
                    visibility: ""
                }), this
            }, u.prototype.scroll = function() {
                return this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.content.scrollTop((this.paneHeight - this.contentHeight + r) * this.sliderY / this.maxSliderTop * -1), this.slider.css({
                    top: this.sliderY
                }), this
            }, u.prototype.scrollBottom = function(e) {
                return this.reset(), this.content.scrollTop(this.contentHeight - this.content.height() - e).trigger(m), this
            }, u.prototype.scrollTop = function(e) {
                return this.reset(), this.content.scrollTop(+e).trigger(m), this
            }, u.prototype.scrollTo = function(t) {
                var n, i, r;
                return this.reset(), r = e(t).offset().top, r > this.maxSliderTop && (n = r / this.contentHeight, i = this.maxSliderTop * n, this.sliderY = i, this.scroll()), this
            }, u.prototype.stop = function() {
                return this.stopped = !0, this.removeEvents(), this.pane.hide(), this
            }, u.prototype.flash = function() {
                var e = this;
                return this.reset(), this.pane.addClass("flashed"), setTimeout(function() {
                    e.pane.removeClass("flashed")
                }, this.options.flashDelay), this
            }, u
        }(), e.fn.nanoScroller = function(t) {
            return this.each(function() {
                var n, i;
                if ((i = this.nanoscroller) || (n = e.extend({}, T, t), this.nanoscroller = i = new g(this, n)), t && "object" == typeof t) {
                    if (e.extend(i.options, t), t.scrollBottom) return i.scrollBottom(t.scrollBottom);
                    if (t.scrollTop) return i.scrollTop(t.scrollTop);
                    if (t.scrollTo) return i.scrollTo(t.scrollTo);
                    if ("bottom" === t.scroll) return i.scrollBottom(0);
                    if ("top" === t.scroll) return i.scrollTop(0);
                    if (t.scroll && t.scroll instanceof e) return i.scrollTo(t.scroll);
                    if (t.stop) return i.stop();
                    if (t.flash) return i.flash()
                }
                return i.reset()
            })
        }
    }(jQuery, window, document), Vanadium = {}, Vanadium.Version = "0.1", Vanadium.CompatibleWithJQuery = "1.3.2", Vanadium.Type = "jquery", 0 != jQuery().jquery.indexOf(Vanadium.CompatibleWithJQuery) && window.console && window.console.warn && console.warn("This version of Vanadium is tested with jQuery " + Vanadium.CompatibleWithJQuery + " it may not work as expected with this version (" + jQuery().jquery + ")"), Vanadium.each = jQuery.each, Vanadium.all_elements = function() {
        return jQuery("*")
    }, Vanadium.partition = function(e, t) {
        var n = [],
            i = [];
        return Vanadium.each(e, function() {
            t(this) ? n.push(this) : i.push(this)
        }), [n, i]
    };
var HashMap = function() {
    this.initialize()
};
HashMap.hashmap_instance_id = 0, HashMap.prototype = {
    hashkey_prefix: "<#HashMapHashkeyPerfix>",
    hashcode_field: "<#HashMapHashcodeField>",
    initialize: function() {
        this.backing_hash = {}, this.code = 0, HashMap.hashmap_instance_id += 1, this.instance_id = HashMap.hashmap_instance_id
    },
    hashcodeField: function() {
        return this.hashcode_field + this.instance_id
    },
    put: function(e, t) {
        var n;
        if (e && t) {
            var i;
            i = "number" == typeof e || "string" == typeof e ? e : e[this.hashcodeField()], i ? n = this.backing_hash[i] : (this.code += 1, i = this.hashkey_prefix + this.code, e[this.hashcodeField()] = i), this.backing_hash[i] = [e, t]
        }
        return void 0 === n ? void 0 : n[1]
    },
    get: function(e) {
        var t;
        if (e) {
            var n;
            n = "number" == typeof e || "string" == typeof e ? e : e[this.hashcodeField()], n && (t = this.backing_hash[n])
        }
        return void 0 === t ? void 0 : t[1]
    },
    del: function(e) {
        var t = !1;
        if (e) {
            var n;
            if (n = "number" == typeof e || "string" == typeof e ? e : e[this.hashcodeField()]) {
                var i = this.backing_hash[n];
                this.backing_hash[n] = void 0, void 0 !== i && (e[this.hashcodeField()] = void 0, t = !0)
            }
        }
        return t
    },
    each: function(e) {
        var t;
        for (t in this.backing_hash)
            if (e.call(this.backing_hash[t][1], this.backing_hash[t][0], this.backing_hash[t][1]) === !1) break;
        return this
    },
    toString: function() {
        return "HashMapJS"
    }
}, Vanadium.containers = new HashMap;
var ContainerValidation = function(e) {
    this.initialize(e)
};
ContainerValidation.prototype = {
    initialize: function(e) {
        this.html_element = e, this.elements = []
    },
    add_element: function(e) {
        this.elements.push(e)
    },
    decorate: function() {
        var e = null;
        for (var t in this.elements)
            if (void 0 === this.elements[t].invalid) e = void 0;
            else {
                if (this.elements[t].invalid === !0) {
                    e = !1;
                    break
                }
                this.elements[t].invalid === !1 && null === e && (e = !0)
            }
        void 0 === e ? (jQuery(this.html_element).removeClass(Vanadium.config.invalid_class), jQuery(this.html_element).removeClass(Vanadium.config.valid_class)) : e ? (jQuery(this.html_element).removeClass(Vanadium.config.invalid_class), jQuery(this.html_element).addClass(Vanadium.config.valid_class)) : (jQuery(this.html_element).removeClass(Vanadium.config.valid_class), jQuery(this.html_element).addClass(Vanadium.config.invalid_class))
    }
};
var VanadiumForm = function(e) {
    this.initialize(e)
};
Vanadium.forms = new HashMap, VanadiumForm.add_element = function(e) {
    var t = e.element.form;
    if (t) {
        var n = Vanadium.forms.get(t);
        n ? n.validation_elements.push(e) : (n = new VanadiumForm(e), Vanadium.forms.put(t, n))
    }
}, VanadiumForm.prototype = {
    initialize: function(e) {
        this.validation_elements = [e], this.form = e.element.form;
        var t = this,
            n = function() {
                var e = t.validate(),
                    n = !0;
                return e.each(function(e, t) {
                    for (var i in t)
                        if (0 == t[i].success) {
                            n = !1;
                            break
                        }
                    return 0 == n ? !1 : void 0
                }), n ? n : (t.decorate(), !1)
            };
        jQuery(this.form).find(":submit").click(function() {
            return n()
        }), this.form.decorate = function() {
            t.decorate()
        }
    },
    validate: function() {
        var e = new HashMap;
        return Vanadium.each(this.validation_elements, function() {
            e.put(this, this.validate())
        }), e
    },
    decorate: function(e) {
        0 == arguments.length && (e = this.validate()), e.each(function(e, t) {
            e.decorate(t)
        })
    },
    validateAndDecorate: function() {
        this.decorate(this.validate())
    }
}, Vanadium.validators_types = {}, Vanadium.elements_validators_by_id = {}, Vanadium.all_elements_validators = [], Vanadium.created_advices = [], Vanadium.all_html_elements = new HashMap, Vanadium.config = {
    valid_class: "vanadium-valid",
    invalid_class: "vanadium-invalid",
    message_value_class: "vanadium-message-value",
    advice_class: "vanadium-advice",
    prefix: ":",
    separator: ";",
    reset_defer_timeout: 100
}, Vanadium.empty_advice_marker_class = "-vanadium-empty-advice-", Vanadium.rules = {}, Vanadium.init = function() {
    this.setupValidatorTypes(), this.scan_dom()
}, Vanadium.addValidatorType = function(e, t, n, i, r) {
    this.validators_types[e] = new Vanadium.Type(e, t, n, i, r)
}, Vanadium.addValidatorTypes = function(e) {
    var t = this;
    Vanadium.each(e, function() {
        Vanadium.addValidatorType.apply(t, this)
    })
}, Vanadium.scan_dom = function() {
    Vanadium.each(Vanadium.all_elements(), function(e, t) {
        var n = t.className.split(" ");
        if (Vanadium.is_input_element(t)) {
            var i = new ElementValidation(t);
            t.id && (Vanadium.elements_validators_by_id[t.id] = i), Vanadium.all_elements_validators.push(i), Vanadium.all_html_elements.put(t, i), VanadiumForm.add_element(i), Vanadium.each(n, function() {
                var e = Vanadium.parse_class_name(this);
                e && (Vanadium.add_validation_instance(i, e), Vanadium.add_validation_modifier(i, e))
            }), Vanadium.each(Vanadium.get_rules(t.id), function() {
                var e = this;
                e && (Vanadium.add_validation_instance(i, e), Vanadium.add_validation_modifier(i, e))
            }), i.setup()
        } else Vanadium.add_validation_container(t)
    })
}, Vanadium.add_validation_container = function(e) {
    var t = e.className.split(" ");
    Vanadium.each(t, function() {
        var t = Vanadium.parse_class_name(this);
        return "container" == t[0] ? (Vanadium.containers.put(e, new ContainerValidation(e)), !0) : void 0
    }), Vanadium.each(Vanadium.get_rules(e.id), function() {
        var t = this;
        return "container" == t ? (Vanadium.containers.put(e, new ContainerValidation(e)), !0) : void 0
    })
}, Vanadium.get_rules = function(e) {
    var t = function(e) {
            return "string" == typeof e ? [e] : Vanadium.isArray(e) ? e : "object" == typeof e ? [e.validator, e.parameter, e.advice] : void 0
        },
        n = [],
        i = Vanadium.rules[e];
    if ("undefined" == typeof i) return [];
    if ("string" == typeof i) n.push(i);
    else if (Vanadium.isArray(i))
        for (var r in i) n.push(t(i[r]));
    else "object" == typeof i && n.push(t(i));
    return n
}, Vanadium.parse_class_name = function(e) {
    if (0 == e.indexOf(Vanadium.config.prefix)) {
        var t = e.substr(Vanadium.config.prefix.length).split(Vanadium.config.separator);
        for (var n in t) "" == t[n] && (t[n] = void 0);
        return t
    }
    return []
}, Vanadium.add_validation_instance = function(e, t) {
    var n = t[0],
        i = t[1],
        r = t[2],
        a = Vanadium.validators_types[n];
    a && e.add_validation_instance(a, i, r)
}, Vanadium.add_validation_modifier = function(e, t) {
    var n = t[0],
        i = t[1];
    ("only_on_blur" == n || "only_on_submit" == n || "wait" == n || "advice" == n) && e.add_validation_modifier(n, i)
}, Vanadium.validate = function() {
    var e = new HashMap;
    return Vanadium.each(Vanadium.all_elements_validators, function() {
        e.put(this, this.validate())
    }), e
}, Vanadium.validateAndDecorate = function(e) {
    if ("undefined" == typeof e) Vanadium.decorate(Vanadium.validate());
    else if (1 == e.nodeType) {
        var t = Vanadium.all_html_elements.get(e) || Vanadium.forms.get(e);
        t && t.validateAndDecorate(!1)
    }
}, Vanadium.decorate = function(e) {
    if ("object" == typeof e)
        if ("HashMapJS" == e.toString()) e.each(function(e, t) {
            e.decorate(t)
        });
        else {
            var t;
            for (t in e) {
                var n = Vanadium.elements_validators_by_id[t];
                n && n.decorate(e[t])
            }
        }
}, Vanadium.reset = function() {
    Vanadium.each(Vanadium.all_elements_validators, function() {
        this.reset()
    })
}, Vanadium.isArray = function(e) {
    return null != e && "object" == typeof e && "splice" in e && "join" in e
}, Vanadium.isFunction = function(e) {
    return null != e && "[object Function]" === e.toString()
}, Vanadium.extend = function() {
    for (var e = [Vanadium], t = 0; t < arguments.length; t++) e.push(arguments[t]);
    return jQuery.extend.apply(jQuery, e)
}, Vanadium.bind = function(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}, Vanadium.extend({
    getElementType: function(e) {
        switch (!0) {
            case "TEXTAREA" == e.nodeName.toUpperCase():
                return Vanadium.TEXTAREA;
            case "INPUT" == e.nodeName.toUpperCase() && "TEXT" == e.type.toUpperCase():
                return Vanadium.TEXT;
            case "INPUT" == e.nodeName.toUpperCase() && "PASSWORD" == e.type.toUpperCase():
                return Vanadium.PASSWORD;
            case "INPUT" == e.nodeName.toUpperCase() && "CHECKBOX" == e.type.toUpperCase():
                return Vanadium.CHECKBOX;
            case "INPUT" == e.nodeName.toUpperCase() && "FILE" == e.type.toUpperCase():
                return Vanadium.FILE;
            case "SELECT" == e.nodeName.toUpperCase():
                return Vanadium.SELECT;
            case "INPUT" == e.nodeName.toUpperCase():
                throw new Error("Vanadium::getElementType - Cannot use Vanadium on an " + e.type + " input!");
            default:
                throw new Error("Vanadium::getElementType - Element must be an input, select, or textarea!")
        }
    },
    is_input_element: function(e) {
        return "TEXTAREA" == e.nodeName.toUpperCase() || "INPUT" == e.nodeName.toUpperCase() && "TEXT" == e.type.toUpperCase() || "INPUT" == e.nodeName.toUpperCase() && "PASSWORD" == e.type.toUpperCase() || "INPUT" == e.nodeName.toUpperCase() && "CHECKBOX" == e.type.toUpperCase() || "INPUT" == e.nodeName.toUpperCase() && "FILE" == e.type.toUpperCase() || "SELECT" == e.nodeName.toUpperCase()
    },
    createAdvice: function(e, t, n) {
        var i = document.createElement("span");
        i.id = t;
        var r = document.createTextNode(n);
        i.appendChild(r), e.parentNode.insertBefore(i, e.nextSibling), this.created_advices.push(i)
    },
    addValidationClass: function(e, t) {
        e && (this.removeValidationClass(e), e.className += t ? " " + Vanadium.config.valid_class : " " + Vanadium.config.invalid_class)
    },
    removeValidationClass: function(e) {
        e && (-1 != e.className.indexOf(Vanadium.config.invalid_class) && (e.className = e.className.split(Vanadium.config.invalid_class).join(" ")), -1 != e.className.indexOf(Vanadium.config.valid_class) && (e.className = e.className.split(Vanadium.config.valid_class).join(" ")))
    },
    TEXTAREA: 1,
    TEXT: 2,
    PASSWORD: 3,
    CHECKBOX: 4,
    SELECT: 5,
    FILE: 6
}), ElementValidation = function(e) {
    this.initialize(e)
}, ElementValidation.prototype = {
    initialize: function(e) {
        this.virgin = !0, this.element = e, this.validations = [], this.only_on_blur = !1, this.only_on_submit = !1, this.wait = 100, this.created_advices = [], this.decorated = !1, this.containers = null, this.invalid = void 0, this.advice_id = void 0
    },
    add_validation_instance: function(e, t, n) {
        this.validations.push(new Validation(this.element, e, t, n))
    },
    add_validation_modifier: function(e, t) {
        if ("only_on_blur" == e) this.only_on_blur = !0;
        else if ("only_on_submit" == e) this.only_on_submit = !0;
        else if ("wait" == e) {
            var n = parseInt(t);
            NaN != n && "number" == typeof n && (this.wait = n)
        } else if ("advice" == e) {
            var i = document.getElementById(t);
            i && (this.advice_id = t)
        }
    },
    element_containers: function() {
        if (null === this.containers) {
            this.containers = new HashMap;
            for (var e = this.element.parentNode; e != document;) {
                var t = Vanadium.containers.get(e);
                t && (t.add_element(this), this.containers.put(e, t)), e = e.parentNode
            }
        }
        return this.containers
    },
    validate: function(e, t) {
        var n = [];
        return Vanadium.each(this.validations, function() {
            n.push(this.validate(e, t))
        }), n
    },
    decorate: function(e, t) {
        t || this.reset(), this.decorated = !0;
        var n = this,
            i = Vanadium.partition(e, function(e) {
                return e.success
            }),
            r = i[0],
            a = i[1];
        a.length > 0 ? (this.invalid = !0, Vanadium.addValidationClass(this.element, !1)) : r.length > 0 && !this.invalid ? (this.invalid = !1, Vanadium.addValidationClass(this.element, !0)) : this.invalid = void 0, this.element_containers().each(function(e, t) {
            t.decorate()
        }), Vanadium.each(a, function(e, t) {
            var i = void 0;
            if (n.advice_id && (i = document.getElementById(n.advice_id)), i || t.advice_id)
                if (i = i || document.getElementById(t.advice_id)) {
                    jQuery(i).addClass(Vanadium.config.advice_class);
                    var r = 0 == i.childNodes.length;
                    (r || jQuery(i).hasClass(Vanadium.empty_advice_marker_class)) && (jQuery(i).addClass(Vanadium.empty_advice_marker_class), jQuery(i).append("<span>" + t.message + "</span>")), jQuery(i).show()
                } else i = n.create_advice(t);
            else i = n.create_advice(t);
            Vanadium.addValidationClass(i, !1)
        })
    },
    validateAndDecorate: function(e) {
        e && this.virgin || this.decorate(this.validate(this, this.decorate))
    },
    create_advice: function(e) {
        var t = document.createElement("span");
        return this.created_advices.push(t), jQuery(t).addClass(Vanadium.config.advice_class), jQuery(t).html(e.message), jQuery(this.element).after(t), t
    },
    reset: function() {
        this.invalid = void 0;
        var e = document.getElementById(this.advice_id);
        e && (jQuery(e).hasClass(Vanadium.empty_advice_marker_class) && jQuery(e).empty(), jQuery(e).hide()), Vanadium.each(this.validations, function() {
            var e = document.getElementById(this.adviceId);
            e && (jQuery(e).hasClass(Vanadium.empty_advice_marker_class) && jQuery(e).empty(), jQuery(e).hide())
        });
        for (var t = this.created_advices.pop(); void 0 !== t;) jQuery(t).remove(), t = this.created_advices.pop();
        Vanadium.removeValidationClass(this.element)
    },
    deferValidation: function() {
        this.wait >= 300 && this.reset();
        var e = this;
        e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(function() {
            jQuery(e.element).trigger("validate")
        }, e.wait)
    },
    deferReset: function() {
        var e = this;
        e.reset_timeout && clearTimeout(e.reset_timeout), e.reset_timeout = setTimeout(function() {
            e.reset()
        }, Vanadium.config.reset_defer_timeout)
    },
    setup: function() {
        var e = this;
        this.elementType = Vanadium.getElementType(this.element), this.form = this.element.form, this.element_containers(), this.only_on_submit || (this.observe(), jQuery(e.element).bind("validate", function() {
            e.validateAndDecorate.call(e, !0)
        }), jQuery(e.element).bind("defer_validation", function() {
            e.deferValidation.call(e)
        }), jQuery(e.element).bind("reset", function() {
            e.reset.call(e)
        }))
    },
    observe: function() {
        var e = this.element,
            t = Vanadium.getElementType(e),
            n = this;
        switch (jQuery(e).focus(function() {
            n.virgin = !1
        }), t) {
            case Vanadium.CHECKBOX:
                jQuery(e).click(function() {
                    n.virgin = !1, jQuery(n.element).trigger("validate")
                });
                break;
            case Vanadium.SELECT:
            case Vanadium.FILE:
                jQuery(e).change(function() {
                    jQuery(e).trigger("validate")
                });
                break;
            default:
                jQuery(e).keydown(function(t) {
                    9 != t.keyCode && jQuery(e).trigger("reset")
                }), this.only_on_blur || jQuery(e).keyup(function(t) {
                    9 != t.keyCode && jQuery(e).trigger("defer_validation")
                }), jQuery(e).blur(function() {
                    jQuery(e).trigger("validate")
                })
        }
    }
};
var Validation = function(e, t, n, i) {
    this.initialize(e, t, n, i)
};
Validation.prototype = {
        initialize: function(e, t, n, i) {
            this.element = e, this.validation_type = t, this.param = n, this.adviceId = i;
            var r = document.getElementById(i);
            r && jQuery(r).addClass(Vanadium.config.advice_class), this.validation_type.init && this.validation_type.init(this)
        },
        emmit_message: function(e) {
            return "string" == typeof e ? e : "function" == typeof e ? e.call(this, jQuery(this.element).val(), this.param) : void 0
        },
        validMessage: function() {
            return this.emmit_message(this.validation_type.validMessage()) || "ok"
        },
        invalidMessage: function() {
            return this.emmit_message(this.validation_type.invalidMessage()) || "error"
        },
        test: function(e, t) {
            return this.validation_type.validationFunction.call(this, jQuery(this.element).val(), this.param, this, e, t)
        },
        validate: function(e, t) {
            var n = {
                    success: !1,
                    message: "Received invalid return value."
                },
                i = this.test(e, t);
            return "boolean" == typeof i ? {
                success: i,
                advice_id: this.adviceId,
                message: i ? this.validMessage() : this.invalidMessage()
            } : ("object" == typeof i && jQuery.extend.apply(n, i), n)
        }
    }, Vanadium.Type = function(e, t, n, i, r) {
        this.initialize(e, t, n, i, r)
    }, Vanadium.Type.prototype = {
        initialize: function(e, t, n, i, r) {
            this.className = e, this.message = i, this.error_message = n, this.validationFunction = t, this.init = r
        },
        test: function(e) {
            return this.validationFunction.call(this, e)
        },
        validMessage: function() {
            return this.message
        },
        invalidMessage: function() {
            return this.error_message
        },
        toString: function() {
            return "className:" + this.className + " message:" + this.message + " error_message:" + this.error_message
        },
        init: function(e) {
            this.init && this.init(e)
        }
    }, Vanadium.setupValidatorTypes = function() {
        Vanadium.addValidatorType("empty", function(e) {
            return null == e || 0 == e.length
        }), Vanadium.addValidatorTypes([
            ["equal", function(e, t) {
                return e == t
            }, function(e, t) {
                return 'The value should be equal to <span class="' + Vanadium.config.message_value_class + '">' + t + "</span>."
            }],
            ["equal_ignore_case", function(e, t) {
                return e.toLowerCase() == t.toLowerCase()
            }, function(e, t) {
                return 'The value should be equal to <span class="' + Vanadium.config.message_value_class + '">' + t + "</span>."
            }],
            ["required", function(e) {
                return !Vanadium.validators_types.empty.test(e)
            }, "required field"],
            ["accept", function(e, t, n) {
                return n.element.checked
            }, "Must be accepted!"],
            ["integer", function(e) {
                if (Vanadium.validators_types.empty.test(e)) return !0;
                var t = parseFloat(e);
                return !isNaN(t) && t.toString() == e && Math.round(t) == t
            }, "Please enter a valid integer in this field."],
            ["number", function(e) {
                return Vanadium.validators_types.empty.test(e) || !isNaN(e) && !/^\s+$/.test(e)
            }, "Please enter a valid number in this field."],
            ["float", function(e) {
                return Vanadium.validators_types.empty.test(e) || !isNaN(e) && !/^\s+$/.test(e)
            }, "Please enter a valid number in this field."],
            ["digits", function(e) {
                return Vanadium.validators_types.empty.test(e) || !/[^\d]/.test(e)
            }, "Please use numbers only in this field. please avoid spaces or other characters such as dots or commas."],
            ["alpha", function(e) {
                return Vanadium.validators_types.empty.test(e) || /^[a-zA-Z\u00C0-\u00FF\u0100-\u017E\u0391-\u03D6]+$/.test(e)
            }, "Please use letters only in this field."],
            ["asciialpha", function(e) {
                return Vanadium.validators_types.empty.test(e) || /^[a-zA-Z]+$/.test(e)
            }, "Please use ASCII letters only (a-z) in this field."],
            ["alphanum", function(e) {
                return Vanadium.validators_types.empty.test(e) || !/\W/.test(e)
            }, "Please use only letters (a-z) or numbers (0-9) only in this field. No spaces or other characters are allowed."],
            ["date", function(e) {
                var t = new Date(e);
                return Vanadium.validators_types.empty.test(e) || !isNaN(t)
            }, "Please enter a valid date."],
            ["email", function(e) {
                return Vanadium.validators_types.empty.test(e) || /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(e)
            }, "Please enter a valid email address. For example john@domain.com"],
            ["url", function(e) {
                return Vanadium.validators_types.empty.test(e) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(e)
            }, "Please enter a valid URL."],
            ["date_au", function(e) {
                if (Vanadium.validators_types.empty.test(e)) return !0;
                var t = /^(\d{2})\/(\d{2})\/(\d{4})$/;
                if (!t.test(e)) return !1;
                var n = new Date(e.replace(t, "$2/$1/$3"));
                return parseInt(RegExp.$2, 10) == 1 + n.getMonth() && parseInt(RegExp.$1, 10) == n.getDate() && parseInt(RegExp.$3, 10) == n.getFullYear()
            }, "Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006."],
            ["currency_dollar", function(e) {
                return Vanadium.validators_types.empty.test(e) || /^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(e)
            }, "Please enter a valid $ amount. For example $100.00 ."],
            ["selection", function(e, t) {
                return t.options ? t.selectedIndex > 0 : !Vanadium.validators_types.empty.test(e)
            }, "Please make a selection"],
            ["one_required", function(e, t) {
                var n = jQuery('input[name="' + t.name + '"]');
                return some(n, function(e) {
                    return getNodeAttribute(e, "value")
                })
            }, "Please select one of the above options."],
            ["length", function(e, t) {
                return void 0 === t ? !0 : e.length == parseInt(t)
            }, function(e, t) {
                return 'The value should be <span class="' + Vanadium.config.message_value_class + '">' + t + "</span> characters long."
            }],
            ["min_length", function(e, t) {
                return void 0 === t ? !0 : e.length >= parseInt(t)
            }, function(e, t) {
                return 'The value should be at least <span class="' + Vanadium.config.message_value_class + '">' + t + "</span> characters long."
            }],
            ["max_length", function(e, t) {
                return void 0 === t ? !0 : e.length <= parseInt(t)
            }, function(e, t) {
                return 'The value should be at most <span class="' + Vanadium.config.message_value_class + '">' + t + "</span> characters long."
            }],
            ["same_as", function(e, t) {
                if (void 0 === t) return !0;
                var n = document.getElementById(t);
                return n ? e == n.value : !1
            }, function(e, t) {
                var n = document.getElementById(t);
                return n ? 'The value should be the same as <span class="' + Vanadium.config.message_value_class + '">' + (jQuery(n).attr("name") || n.id) + "</span> ." : "There is no exemplar item!!!"
            }, "", function(e) {
                var t = document.getElementById(e.param);
                t && jQuery(t).bind("validate", function() {
                    jQuery(e.element).trigger("validate")
                })
            }],
            ["ajax", function(e, t, n, i, r) {
                return Vanadium.validators_types.empty.test(e) ? !0 : (i && r && jQuery.getJSON(t, {
                    value: e,
                    id: n.element.id
                }, function(e) {
                    r.apply(i, [
                        [e], !0
                    ])
                }), !0)
            }],
            ["format", function(e, t) {
                var n = t.match(/^\/(((\\\/)|[^\/])*)\/(((\\\/)|[^\/])*)$/);
                if (7 != n.length) return !1;
                var i = n[1],
                    r = n[4];
                try {
                    var a = new RegExp(i, r);
                    return a.test(e)
                } catch (s) {
                    return !1
                }
            }, function(e, t) {
                var n = t.split("/");
                return 3 == n.length && "" == n[0] ? 'The value should match the <span class="' + Vanadium.config.message_value_class + '">' + t.toString() + "</span> pattern." : 'provided parameter <span class="' + Vanadium.config.message_value_class + '">' + t.toString() + "</span> is not valid Regexp pattern."
            }]
        ]), "undefined" != typeof VanadiumCustomValidationTypes && VanadiumCustomValidationTypes && Vanadium.addValidatorTypes(VanadiumCustomValidationTypes)
    }, jQuery(document).ready(function() {
        "object" == typeof VanadiumConfig && VanadiumConfig && Vanadium.each(VanadiumConfig, function(e, t) {
            Vanadium.config[e] = t
        }), "object" == typeof VanadiumRules && VanadiumRules && Vanadium.each(VanadiumRules, function(e, t) {
            Vanadium.rules[e] = t
        }), Vanadium.init()
    }), window.log = function() {
        if (log.history = log.history || [], log.history.push(arguments), this.console) {
            var e, t = arguments;
            t.callee = t.callee.caller, e = [].slice.call(t), "object" == typeof console.log ? log.apply.call(console.log, console, e) : console.log.apply(console, e)
        }
    },
    function(e) {
        function t() {}
        for (var n, i = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); n = i.pop();) e[n] = e[n] || t
    }(function() {
        try {
            return console.log(), window.console
        } catch (e) {
            return window.console = {}
        }
    }()), Handlebars.registerHelper("dateFormat", function(e, t) {
        if (window.moment) {
            var n = t.hash.format || "MMM Do, YYYY";
            return moment(e).format(n)
        }
        return e
    }),
    function(e) {
        function t() {
            this.stop_logo_cycle = !1, this.current_page = null
        }
        t.prototype.setCurrentPage = function(e) {
            this.current_page = "" === e ? "home" : e
        }, t.prototype.setStopCycle = function(e) {
            this.stop_logo_cycle = e
        }, e.LFF = t
    }(window), Vanadium.addValidatorType("phone", function(e) {
        return e.length > 7
    }, function() {
        return "not valid"
    }), $(function() {
        window.lff = new LFF, $(".main_square").each(function(e) {
            $(this).delay(50 * e).animate({
                backgroundColor: randColor()
            }, "1000")
        }).promise().done(function() {
            grant_cycle.addCount(1)
        }), YAML.load("/data/arts.yml", function(e) {
            for (var t = e, n = 0, i = t.institution.length; i > n; n++) {
                var r = Math.floor(41 * Math.random()),
                    a = t.institution[n].href,
                    s = t.institution[n].thumb,
                    o = $("#arts_squares .main_square").eq(r);
                o.data({
                    link: a,
                    thumbnail: s
                }).addClass("grant_link")
            }
            grant_cycle.addCount(1)
        }), YAML.load("/data/education.yml", function(e) {
            for (var t = e.institution, n = 0, i = t.length; i > n; n++) {
                var r = Math.floor(41 * Math.random()),
                    a = t[n].href,
                    s = t[n].thumb,
                    o = $("#education_squares .main_square").eq(r);
                o.data({
                    link: a,
                    thumbnail: s
                }).addClass("grant_link")
            }
            grant_cycle.addCount(1)
        }), YAML.load("/data/medical.yml", function(e) {
            for (var t = e.institution, n = 0, i = t.length; i > n; n++) {
                var r = Math.floor(41 * Math.random()),
                    a = t[n].href,
                    s = t[n].thumb,
                    o = $("#medical_squares .main_square").eq(r);
                o.data({
                    link: a,
                    thumbnail: s
                }).addClass("grant_link")
            }
            grant_cycle.addCount(1)
        }), YAML.load("/data/humanRights.yml", function(e) {
            for (var t = e.institution, n = 0, i = t.length; i > n; n++) {
                var r = Math.floor(41 * Math.random()),
                    a = t[n].href,
                    s = t[n].thumb,
                    o = $("#human_squares .main_square").eq(r);
                o.data({
                    link: a,
                    thumbnail: s
                }).addClass("grant_link")
            }
            grant_cycle.addCount(1)
        }), $("a").click(function() {
            lff.setStopCycle(!0), clearInterval(cycleID)
        }), $("body").djax(".update", ["newsroom", "#"], function(e) {
            var t = this;
            e.hide(), setTimeout(function() {
                t.fadeOut(300, function() {
                    t.replaceWith(e), "thumbnail_container" === e.attr("id") && sizeThumbnail(), "home" !== lff.current_page && e.fadeIn(300), "contact" === lff.current_page && Vanadium.init(), $(".nano").nanoScroller({
                        alwaysVisible: !0
                    })
                })
            }, 300)
        }), $(window).bind("djaxClick", function(e, t) {
            lff.setCurrentPage(t.pathname.split("/")[1])
        }), $(".grant_nav a").click(function() {
            $(".grant_nav").fadeOut(300)
        });
        var e = $(location).attr("pathname");
        "pushState" in window.history ? (e.indexOf(1), e.toLowerCase(), e = e.split("/")[1], url_router(e), sizeThumbnail(), $(window).on("djaxLoad", function() {
            e = $(location).attr("pathname"), e.indexOf(1), e.toLowerCase(), e = e.split("/")[1], url_router(e)
        })) : (e = $(location).attr("pathname"), e.indexOf(1), e.toLowerCase(), e = e.split("/")[1], url_router(e), $(".nano").nanoScroller({
            alwaysVisible: !0
        }), sizeThumbnail())
    });
var grant_squares, grant_count, cycleID, cycle_squares = function() {
        var e = Math.floor(Math.random() * grant_count),
            t = grant_squares[e];
        $(t).animate({
            backgroundColor: "#F36F21"
        }, 1e3), $("#project_thumbnail").fadeOut(300, function() {
            $(this).attr("src", $(t).data("thumbnail")), sizeThumbnail(), $(this).fadeIn(300)
        })
    },
    grant_cycle = {
        count: 0,
        addCount: function(e) {
            this.count += e, this.count > 4 && !lff.stop_logo_cycle && (grant_squares = $(".grant_link"), grant_count = grant_squares.length + 1, cycleID = setInterval(cycle_squares, 3e3))
        }
    },
    randColor = function() {
        return "#" + (16777216 * Math.random() << 0).toString(16)
    },
    $menu = $("#lff_menu_toggle"),
    $menu_items = $("#lff_menu"),
    menu_open = !1,
    can_close = !0,
    can_open = !0,
    toggle_menu_up = function() {
        $menu.addClass("expanded"), can_open && ($menu.animate({
            top: "-=102px"
        }, "slow"), $("#lff_menu").animate({
            opacity: "toggle",
            height: "toggle"
        }), menu_open = !0)
    },
    toggle_menu_down = function() {
        $menu.removeClass("expanded"), can_close && ($menu.animate({
            top: "+=102px"
        }, "slow"), $("#lff_menu").animate({
            opacity: "toggle",
            height: "toggle"
        }), menu_open = !1)
    },
    lff_menu_config = {
        over: toggle_menu_up,
        timeout: 500,
        out: toggle_menu_down
    };
$menu.hoverIntent(lff_menu_config);
var toggle_icon_in = function() {
        $(this).children("img").animate({
            opacity: .7
        }), $(this).children("span:not(.active)").animate({
            opacity: 1
        })
    },
    toggle_icon_out = function() {
        $(this).children("img").animate({
            opacity: 1
        }), $(this).children("span:not(.active)").animate({
            opacity: 0
        })
    },
    lff_icon_nav = {
        over: toggle_icon_in,
        timeout: 50,
        out: toggle_icon_out
    };
$(".icon_nav_link").hoverIntent(lff_icon_nav), $(".icon_nav_link").click(function() {
    var e = "#" + $(this).attr("id") + "_nav";
    return $(this).hasClass("active") ? ($("#overlay.show").fadeOut(), $(e + ".grant_nav").fadeIn()) : ($("#overlay.show").fadeOut(), $(".icon_nav_link").removeClass("active").children("span.active").animate({
        opacity: "0"
    }).removeClass("active"), $(".grant_nav.active").fadeOut().removeClass("active"), $(this).addClass("active").children("span").addClass("active"), $(e + ".grant_nav").fadeIn(400, function() {
        $(".nano").nanoScroller({
            alwaysVisible: !0
        })
    }).addClass("active")), $("#project_thumbnail").attr("src", "/img/blank.jpg"), $("#grant_thumbnail_name").html(""), default_url(), !1
}), $menu_items.children().click(function() {
    $(".icon_nav_link").removeClass("active").children("span.active").animate({
        opacity: "0"
    }).removeClass("active"), $(".grant_nav.active").fadeOut().removeClass("active")
}), $(".main_square").hover(function() {
    $(this).animate({
        opacity: .3
    })
}, function() {
    $(this).animate({
        opacity: 1
    })
});
