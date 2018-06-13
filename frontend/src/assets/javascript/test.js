function isArray(e) {
  return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
  return "boolean" == typeof e
}

function isDate(e) {
  return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
  return void 0 !== e
}

function isFunction(e) {
  return "function" == typeof e
}

function isNull(e) {
  return null === e
}

function isNumber(e) {
  return "number" == typeof e
}

function isObject(e) {
  return null !== e && "object" == typeof e
}

function isString(e) {
  return "string" == typeof e
}

function isUndefined(e) {
  return void 0 === e
}

function convertToBoolean(e) {
  return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
  return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
  return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
  return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
  return angular.equals(e, t)
}

function min(e, t) {
  return e < t ? e : t
}

function max(e, t) {
  return e > t ? e : t
}

function beginsWith(e, t) {
  return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
  return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
  return angular.copy(e, t)
}

function removeProperty(e, t) {
  delete e[t]
}

function removeProperties(e, t) {
  for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
  return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
  var n = [];
  if (t instanceof Array) for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
  return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
  return angular.module(e, t)
}

function isArray(e) {
  return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
  return "boolean" == typeof e
}

function isDate(e) {
  return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
  return void 0 !== e
}

function isFunction(e) {
  return "function" == typeof e
}

function isNull(e) {
  return null === e
}

function isNumber(e) {
  return "number" == typeof e
}

function isObject(e) {
  return null !== e && "object" == typeof e
}

function isString(e) {
  return "string" == typeof e
}

function isUndefined(e) {
  return void 0 === e
}

function convertToBoolean(e) {
  return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
  return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
  return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
  return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
  return angular.equals(e, t)
}

function min(e, t) {
  return e < t ? e : t
}

function max(e, t) {
  return e > t ? e : t
}

function beginsWith(e, t) {
  return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
  return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
  return angular.copy(e, t)
}

function removeProperty(e, t) {
  delete e[t]
}

function removeProperties(e, t) {
  for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
  return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
  var n = [];
  if (t instanceof Array) for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
  return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
  return angular.module(e, t)
}

function getLang() {
  var e = localStorage.lang || "cn";
  return Langs[e] || Langs.en
}

function log10(e) {
  return Math.log(e) / Math.LN10
}

function millitime() {
  return (new Date).getTime() / 1e3
}

function hms_from_epoch_ms(e, t) {
  var n, r, o, i = "", s = null;
  try {
    s = new Date(e), t ? (n = s.getHours(), r = s.getMinutes(), o = s.getSeconds()) : (n = s.getUTCHours(), r = s.getUTCMinutes(), o = s.getUTCSeconds()), i += (n < 10 ? "0" + n : n) + ":", i += (r < 10 ? "0" + r : r) + ":", i += o < 10 ? "0" + o : o
  } catch (e) {
    i = "00:00:00"
  }
  return i
}

function formatted_date(e, t, n) {
  var r = new Date(1e3 * e), o = "";
  return !0 === n ? (t && (o = r.getFullYear() + "-"), o += r.getMonth() + 1 < 10 ? "0" : "", o += r.getMonth() + 1 + "-", o += r.getDate() < 10 ? "0" : "", o += r.getDate()) : (t && (o = r.getUTCFullYear() + "-"), o += r.getUTCMonth() + 1 < 10 ? "0" : "", o += r.getUTCMonth() + 1 + "-", o += r.getUTCDate() < 10 ? "0" : "", o += r.getUTCDate()), o
}

function timestamp(e) {
  null != e && void 0 !== e || (e = !0);
  var t, n, r, o = new Date, i = "";
  return e ? (t = o.getHours(), n = o.getMinutes(), r = o.getSeconds()) : (t = o.getUTCHours(), n = o.getUTCMinutes(), r = o.getUTCSeconds()), i += (t < 10 ? "0" + t : t) + ":", i += (n < 10 ? "0" + n : n) + ":", i += r < 10 ? "0" + r : r
}

function hms_from_sec(e) {
  var t = "", n = e % 60, r = (e - n) / 60 % 60, o = (e - 60 * r - n) / 3600 % 3600;
  return t += (o < 10 ? "0" + o : o) + ":", t += (r < 10 ? "0" + r : r) + ":", t += n < 10 ? "0" + n : n
}

function dhms_from_sec(e) {
  var t, n, r, o, i = "", s = e;
  return t = Math.floor(s / 86400), s -= 86400 * t, n = Math.floor(s / 3600), s -= 3600 * n, r = Math.floor(s / 60), o = s - 60 * r, i += t > 0 ? t + ":" : "", i += (n < 10 ? "0" + n : n) + ":", i += (r < 10 ? "0" + r : r) + ":", i += o < 10 ? "0" + o : o
}

function time_delta_print(e) {
  var t = "", n = 0, r = 0, o = 0, i = 0, s = e;
  return s |= 0, n = Math.floor(s / 86400), s -= 86400 * n, r = Math.floor(s / 3600), s -= 3600 * r, o = Math.floor(s / 60), i = s - 60 * o, n >= 2 ? t = n + " days" : n >= 1 ? (t = n + " day, " + r + " hour", r > 1 && (t += "s")) : r >= 1 ? (t = r + " hour", r > 1 && (t += "s")) : t = o >= 1 ? o + " min" : i + " sec", t + " ago"
}

function numberWithCommas(e) {
  var t = e.toString().split(".");
  return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
}

function delayClass(e, t, n) {
  window.setTimeout(function () {
    $(e).removeClass(t)
  }, n)
}

function deepCopy(e) {
  return $.extend(!0, {}, e)
}

function AssertException(e) {
  this.message = e
}

function assert(e, t) {
  if (!e) throw new AssertException(t)
}

function stopEvent(e) {
  try {
    e.preventDefault(), e.stopPropagation()
  } catch (e) {
  }
}

function NoBreak(e) {
  return e.replace(/ /g, "&nbsp;")
}

function HTMLEncode(e) {
  return $("<div/>").text(e).html()
}

function HTMLDecode(e) {
  return $("<div/>").html(e).text()
}

function clearingSpan() {
  return $("<span/>").addClass("clear").html("&nbsp;")
}

function clearingSpanHTML() {
  return '<span class="clear">&nbsp;</span>'
}

function uniqueID() {
  return "id" + lastUniqueID++
}

function randInt(e) {
  return Math.floor(Math.random() * e)
}

function randRange(e, t) {
  return Math.floor(Math.random() * (t - e)) + e
}

function randomString(e) {
  "number" != typeof e && (e = 10);
  var t = 0, n = "";
  for (t = 0; t < e; t++) n += alphabet[randInt(alphalen)];
  return n
}

function storageSupport() {
  try {
    return "localStorage" in window && null !== window.localStorage
  } catch (e) {
    return !1
  }
}

function wsSupport() {
  try {
    return !!window.WebSocket
  } catch (e) {
    return !1
  }
}

function locationOf(e, t, n, r, o) {
  null == n && (n = 0), null == r && (r = t.length - 1), "string" == typeof o && ("gt" == o ? o = function (e, t) {
    return e > t
  } : "lt" == o && (o = function (e, t) {
    return e < t
  }));
  var i = parseInt(n + (r - n) / 2);
  return t[i] == e ? {index: i, exact: !0} : r - n <= 1 ? {
    index: i + 1,
    exact: !1
  } : o(t[i], e) ? locationOf(e, t, i, r, o) : locationOf(e, t, n, i, o)
}

function has_worker() {
  return !!window.Worker
}

function pixel_ratio() {
  return window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1
}

function _(e, t) {
  return e
}

function PtInPolygon(e, t) {
  for (var n = 0, r = 0; r < t.length; r++) if (p1 = t[r], p2 = t[(r + 1) % t.length], p1[1] != p2[1] && !(e[1] < Math.min(p1[1], p2[1]) || e[1] >= Math.max(p1[1], p2[1]))) {
    (e[1] - p1[1]) * (p2[0] - p1[0]) / (p2[1] - p1[1]) + p1[0] > e[0] && n++
  }
  return n % 2 == 1
}

function chackRate() {
  var e = 0;
  for (timesList.length >= times && timesList.pop(), timesList.splice(0, 0, (new Date).getTime()), e = 0; e < timesList.length && !(timesList[e] + timeLimit < (new Date).getTime()); e++) ;
  return !(e >= times) || (console.log("@@@@@@按钮点击频率太快"), !1)
}

!function (e) {
  var t = function (e) {
    var t = e.backingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / t
  }(e);
  1 !== t && (!function (e, t) {
    for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
  }({
    fillRect: "all",
    clearRect: "all",
    strokeRect: "all",
    moveTo: "all",
    lineTo: "all",
    arc: [0, 1, 2],
    arcTo: "all",
    bezierCurveTo: "all",
    isPointinPath: "all",
    isPointinStroke: "all",
    quadraticCurveTo: "all",
    rect: "all",
    translate: "all",
    createRadialGradient: "all",
    createLinearGradient: "all"
  }, function (n, r) {
    e[r] = function (e) {
      return function () {
        var r, o, i = Array.prototype.slice.call(arguments);
        if ("all" === n) i = i.map(function (e) {
          return e * t
        }); else if (Array.isArray(n)) for (r = 0, o = n.length; r < o; r++) i[n[r]] *= t;
        return e.apply(this, i)
      }
    }(e[r])
  }), e.stroke = function (e) {
    return function () {
      this.lineWidth *= t, e.apply(this, arguments), this.lineWidth /= t
    }
  }(e.stroke), e.fillText = function (e) {
    return function () {
      var n = Array.prototype.slice.call(arguments);
      n[1] *= t, n[2] *= t, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n * t + r
      }), n.length >= 4 && t > 1 && (n[3] *= t), e.apply(this, n), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n / t + r
      })
    }
  }(e.fillText), e.strokeText = function (e) {
    return function () {
      var n = Array.prototype.slice.call(arguments);
      n[1] *= t, n[2] *= t, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n * t + r
      }), e.apply(this, n), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n / t + r
      })
    }
  }(e.strokeText))
}(CanvasRenderingContext2D.prototype), function (e) {
  e.getContext = function (e) {
    return function (t) {
      var n, r, o = e.call(this, t);
      return "2d" === t && (n = o.backingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1, (r = (window.devicePixelRatio || 1) / n) > 1 && "true" != $(this).attr("val") && !($(this).attr("class") || "").match("geetest_absolute") && ("" != this.style.height && Number(this.style.height.replace("px", "")) * r == this.height || (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= r, this.height *= r, $(this).attr("val", !0)))), o
    }
  }(e.getContext)
}(HTMLCanvasElement.prototype), function (e, t) {
  function n(e) {
    var t = e.length, n = ne.type(e);
    return !ne.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
  }

  function r(e, n, r, o) {
    if (ne.acceptData(e)) {
      var i, s, a = ne.expando, l = e.nodeType, c = l ? ne.cache : e, u = l ? e[a] : e[a] && a;
      if (u && c[u] && (o || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[a] = G.pop() || ne.guid++ : a), c[u] || (c[u] = l ? {} : {toJSON: ne.noop}), ("object" == typeof n || "function" == typeof n) && (o ? c[u] = ne.extend(c[u], n) : c[u].data = ne.extend(c[u].data, n)), s = c[u], o || (s.data || (s.data = {}), s = s.data), r !== t && (s[ne.camelCase(n)] = r), "string" == typeof n ? null == (i = s[n]) && (i = s[ne.camelCase(n)]) : i = s, i
    }
  }

  function o(e, t, n) {
    if (ne.acceptData(e)) {
      var r, o, i = e.nodeType, a = i ? ne.cache : e, l = i ? e[ne.expando] : ne.expando;
      if (a[l]) {
        if (t && (r = n ? a[l] : a[l].data)) {
          ne.isArray(t) ? t = t.concat(ne.map(t, ne.camelCase)) : t in r ? t = [t] : (t = ne.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
          for (; o--;) delete r[t[o]];
          if (n ? !s(r) : !ne.isEmptyObject(r)) return
        }
        (n || (delete a[l].data, s(a[l]))) && (i ? ne.cleanData([e], !0) : ne.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
      }
    }
  }

  function i(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var o = "data-" + n.replace(be, "-$1").toLowerCase();
      if ("string" == typeof(r = e.getAttribute(o))) {
        try {
          r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : ve.test(r) ? ne.parseJSON(r) : r)
        } catch (e) {
        }
        ne.data(e, n, r)
      } else r = t
    }
    return r
  }

  function s(e) {
    var t;
    for (t in e) if (("data" !== t || !ne.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function a() {
    return !0
  }

  function l() {
    return !1
  }

  function c() {
    try {
      return U.activeElement
    } catch (e) {
    }
  }

  function u(e, t) {
    do {
      e = e[t]
    } while (e && 1 !== e.nodeType);
    return e
  }

  function p(e, t, n) {
    if (ne.isFunction(t)) return ne.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return ne.grep(e, function (e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (De.test(t)) return ne.filter(t, e, n);
      t = ne.filter(t, e)
    }
    return ne.grep(e, function (e) {
      return ne.inArray(e, t) >= 0 !== n
    })
  }

  function f(e) {
    var t = Be.split("|"), n = e.createDocumentFragment();
    if (n.createElement) for (; t.length;) n.createElement(t.pop());
    return n
  }

  function d(e, t) {
    return ne.nodeName(e, "table") && ne.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function h(e) {
    return e.type = (null !== ne.find.attr(e, "type")) + "/" + e.type, e
  }

  function g(e) {
    var t = Qe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function m(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) ne._data(n, "globalEval", !t || ne._data(t[r], "globalEval"))
  }

  function v(e, t) {
    if (1 === t.nodeType && ne.hasData(e)) {
      var n, r, o, i = ne._data(e), s = ne._data(t, i), a = i.events;
      if (a) {
        delete s.handle, s.events = {};
        for (n in a) for (r = 0, o = a[n].length; o > r; r++) ne.event.add(t, n, a[n][r])
      }
      s.data && (s.data = ne.extend({}, s.data))
    }
  }

  function b(e, n) {
    var r, o, i = 0,
      s = typeof e.getElementsByTagName !== q ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== q ? e.querySelectorAll(n || "*") : t;
    if (!s) for (s = [], r = e.childNodes || e; null != (o = r[i]); i++) !n || ne.nodeName(o, n) ? s.push(o) : ne.merge(s, b(o, n));
    return n === t || n && ne.nodeName(e, n) ? ne.merge([e], s) : s
  }

  function y(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = ht.length; o--;) if ((t = ht[o] + n) in e) return t;
    return r
  }

  function $(e, t) {
    return e = t || e, "none" === ne.css(e, "display") || !ne.contains(e.ownerDocument, e)
  }

  function x(e, t) {
    for (var n, r, o, i = [], s = 0, a = e.length; a > s; s++) (r = e[s]).style && (i[s] = ne._data(r, "olddisplay"), n = r.style.display, t ? (i[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && $(r) && (i[s] = ne._data(r, "olddisplay", S(r.nodeName)))) : i[s] || (o = $(r), (n && "none" !== n || !o) && ne._data(r, "olddisplay", o ? n : ne.css(r, "display"))));
    for (s = 0; a > s; s++) (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
    return e
  }

  function w(e, t, n) {
    var r = at.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function k(e, t, n, r, o) {
    for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > i; i += 2) "margin" === n && (s += ne.css(e, n + dt[i], !0, o)), r ? ("content" === n && (s -= ne.css(e, "padding" + dt[i], !0, o)), "margin" !== n && (s -= ne.css(e, "border" + dt[i] + "Width", !0, o))) : (s += ne.css(e, "padding" + dt[i], !0, o), "padding" !== n && (s += ne.css(e, "border" + dt[i] + "Width", !0, o)));
    return s
  }

  function T(e, t, n) {
    var r = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = et(e),
      s = ne.support.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, i);
    if (0 >= o || null == o) {
      if ((0 > (o = tt(e, t, i)) || null == o) && (o = e.style[t]), lt.test(o)) return o;
      r = s && (ne.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
    }
    return o + k(e, t, n || (s ? "border" : "content"), r, i) + "px"
  }

  function S(e) {
    var t = U, n = ut[e];
    return n || ("none" !== (n = C(e, t)) && n || (Ze = (Ze || ne("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), (t = (Ze[0].contentWindow || Ze[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = C(e, t), Ze.detach()), ut[e] = n), n
  }

  function C(e, t) {
    var n = ne(t.createElement(e)).appendTo(t.body), r = ne.css(n[0], "display");
    return n.remove(), r
  }

  function _(e, t, n, r) {
    var o;
    if (ne.isArray(t)) ne.each(t, function (t, o) {
      n || mt.test(e) ? r(e, o) : _(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
    }); else if (n || "object" !== ne.type(t)) r(e, t); else for (o in t) _(e + "[" + o + "]", t[o], n, r)
  }

  function P(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, o = 0, i = t.toLowerCase().match(oe) || [];
      if (ne.isFunction(n)) for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function E(e, n, r, o) {
    function i(l) {
      var c;
      return s[l] = !0, ne.each(e[l] || [], function (e, l) {
        var u = l(n, r, o);
        return "string" != typeof u || a || s[u] ? a ? !(c = u) : t : (n.dataTypes.unshift(u), i(u), !1)
      }), c
    }

    var s = {}, a = e === Nt;
    return i(n.dataTypes[0]) || !s["*"] && i("*")
  }

  function A(e, n) {
    var r, o, i = ne.ajaxSettings.flatOptions || {};
    for (o in n) n[o] !== t && ((i[o] ? e : r || (r = {}))[o] = n[o]);
    return r && ne.extend(!0, e, r), e
  }

  function M() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {
    }
  }

  function N() {
    return setTimeout(function () {
      qt = t
    }), qt = ne.now()
  }

  function D(e, t, n) {
    for (var r, o = (Wt[t] || []).concat(Wt["*"]), i = 0, s = o.length; s > i; i++) if (r = o[i].call(n, t, e)) return r
  }

  function O(e, t, n) {
    var r, o, i = 0, s = zt.length, a = ne.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (o) return !1;
      for (var t = qt || N(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, s = c.tweens.length; s > i; i++) c.tweens[i].run(r);
      return a.notifyWith(e, [c, r, n]), 1 > r && s ? n : (a.resolveWith(e, [c]), !1)
    }, c = a.promise({
      elem: e,
      props: ne.extend({}, t),
      opts: ne.extend(!0, {specialEasing: {}}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: qt || N(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = ne.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(r), r
      },
      stop: function (t) {
        var n = 0, r = t ? c.tweens.length : 0;
        if (o) return this;
        for (o = !0; r > n; n++) c.tweens[n].run(1);
        return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
      }
    }), u = c.props;
    for (function (e, t) {
      var n, r, o, i, s;
      for (n in e) if (r = ne.camelCase(n), o = t[r], i = e[n], ne.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = ne.cssHooks[r]) && "expand" in s) {
        i = s.expand(i), delete e[r];
        for (n in i) n in e || (e[n] = i[n], t[n] = o)
      } else t[r] = o
    }(u, c.opts.specialEasing); s > i; i++) if (r = zt[i].call(c, e, u, c.opts)) return r;
    return ne.map(u, D, c), ne.isFunction(c.opts.start) && c.opts.start.call(e, c), ne.fx.timer(ne.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function I(e, t, n, r, o) {
    return new I.prototype.init(e, t, n, r, o)
  }

  function L(e, t) {
    var n, r = {height: e}, o = 0;
    for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = dt[o], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function B(e) {
    return ne.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }

  var F, R, q = typeof t, j = e.location, U = e.document, H = U.documentElement, V = e.jQuery, z = e.$, W = {}, G = [],
    Y = "1.10.2", Q = G.concat, K = G.push, X = G.slice, J = G.indexOf, Z = W.toString, ee = W.hasOwnProperty,
    te = Y.trim, ne = function (e, t) {
      return new ne.fn.init(e, t, R)
    }, re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, oe = /\S+/g, ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, le = /^[\],:{}\s]*$/,
    ce = /(?:^|:|,)(?:\s*\[)+/g, ue = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    pe = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, fe = /^-ms-/, de = /-([\da-z])/gi,
    he = function (e) {
      (U.addEventListener || "load" === e.type || "complete" === U.readyState) && (ge(), ne.ready())
    }, ge = function () {
      U.addEventListener ? (U.removeEventListener("DOMContentLoaded", he, !1), e.removeEventListener("load", he, !1)) : (U.detachEvent("onreadystatechange", he), e.detachEvent("onload", he))
    };
  ne.fn = ne.prototype = {
    jquery: Y, constructor: ne, init: function (e, n, r) {
      var o, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : se.exec(e)) || !o[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (o[1]) {
          if (n = n instanceof ne ? n[0] : n, ne.merge(this, ne.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : U, !0)), ae.test(o[1]) && ne.isPlainObject(n)) for (o in n) ne.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
          return this
        }
        if ((i = U.getElementById(o[2])) && i.parentNode) {
          if (i.id !== o[2]) return r.find(e);
          this.length = 1, this[0] = i
        }
        return this.context = U, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this))
    }, selector: "", length: 0, toArray: function () {
      return X.call(this)
    }, get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
      var t = ne.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
      return ne.each(this, e, t)
    }, ready: function (e) {
      return ne.ready.promise().done(e), this
    }, slice: function () {
      return this.pushStack(X.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
      return this.pushStack(ne.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: K, sort: [].sort, splice: [].splice
  }, ne.fn.init.prototype = ne.fn, ne.extend = ne.fn.extend = function () {
    var e, n, r, o, i, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
    for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ne.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++) if (null != (i = arguments[l])) for (o in i) e = a[o], r = i[o], a !== r && (u && r && (ne.isPlainObject(r) || (n = ne.isArray(r))) ? (n ? (n = !1, s = e && ne.isArray(e) ? e : []) : s = e && ne.isPlainObject(e) ? e : {}, a[o] = ne.extend(u, s, r)) : r !== t && (a[o] = r));
    return a
  }, ne.extend({
    expando: "jQuery" + (Y + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
      return e.$ === ne && (e.$ = z), t && e.jQuery === ne && (e.jQuery = V), ne
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? ne.readyWait++ : ne.ready(!0)
    }, ready: function (e) {
      if (!0 === e ? !--ne.readyWait : !ne.isReady) {
        if (!U.body) return setTimeout(ne.ready);
        ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || (F.resolveWith(U, [ne]), ne.fn.trigger && ne(U).trigger("ready").off("ready"))
      }
    }, isFunction: function (e) {
      return "function" === ne.type(e)
    }, isArray: Array.isArray || function (e) {
      return "array" === ne.type(e)
    }, isWindow: function (e) {
      return null != e && e == e.window
    }, isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[Z.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
      var n;
      if (!e || "object" !== ne.type(e) || e.nodeType || ne.isWindow(e)) return !1;
      try {
        if (e.constructor && !ee.call(e, "constructor") && !ee.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      if (ne.support.ownLast) for (n in e) return ee.call(e, n);
      for (n in e) ;
      return n === t || ee.call(e, n)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, error: function (e) {
      throw Error(e)
    }, parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || U;
      var r = ae.exec(e), o = !n && [];
      return r ? [t.createElement(r[1])] : (r = ne.buildFragment([e], t, o), o && ne(o).remove(), ne.merge([], r.childNodes))
    }, parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ne.trim(n)) && le.test(n.replace(ue, "@").replace(pe, "]").replace(ce, "")) ? Function("return " + n)() : (ne.error("Invalid JSON: " + n), t)
    }, parseXML: function (n) {
      var r, o;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (o = new DOMParser, r = o.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
      } catch (e) {
        r = t
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ne.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
      t && ne.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t)
      })(t)
    }, camelCase: function (e) {
      return e.replace(fe, "ms-").replace(de, function (e, t) {
        return t.toUpperCase()
      })
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, r) {
      var o = 0, i = e.length, s = n(e);
      if (r) {
        if (s) for (; i > o && !1 !== t.apply(e[o], r); o++) ; else for (o in e) if (!1 === t.apply(e[o], r)) break
      } else if (s) for (; i > o && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
      return e
    }, trim: te && !te.call("\ufeff ") ? function (e) {
      return null == e ? "" : te.call(e)
    } : function (e) {
      return null == e ? "" : (e + "").replace(ie, "")
    }, makeArray: function (e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? ne.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
    }, inArray: function (e, t, n) {
      var r;
      if (t) {
        if (J) return J.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
      }
      return -1
    }, merge: function (e, n) {
      var r = n.length, o = e.length, i = 0;
      if ("number" == typeof r) for (; r > i; i++) e[o++] = n[i]; else for (; n[i] !== t;) e[o++] = n[i++];
      return e.length = o, e
    }, grep: function (e, t, n) {
      var r, o = [], i = 0, s = e.length;
      for (n = !!n; s > i; i++) r = !!t(e[i], i), n !== r && o.push(e[i]);
      return o
    }, map: function (e, t, r) {
      var o, i = 0, s = e.length, a = [];
      if (n(e)) for (; s > i; i++) null != (o = t(e[i], i, r)) && (a[a.length] = o); else for (i in e) null != (o = t(e[i], i, r)) && (a[a.length] = o);
      return Q.apply([], a)
    }, guid: 1, proxy: function (e, n) {
      var r, o, i;
      return "string" == typeof n && (i = e[n], n = e, e = i), ne.isFunction(e) ? (r = X.call(arguments, 2), o = function () {
        return e.apply(n || this, r.concat(X.call(arguments)))
      }, o.guid = e.guid = e.guid || ne.guid++, o) : t
    }, access: function (e, n, r, o, i, s, a) {
      var l = 0, c = e.length, u = null == r;
      if ("object" === ne.type(r)) {
        i = !0;
        for (l in r) ne.access(e, n, l, r[l], !0, s, a)
      } else if (o !== t && (i = !0, ne.isFunction(o) || (a = !0), u && (a ? (n.call(e, o), n = null) : (u = n, n = function (e, t, n) {
          return u.call(ne(e), n)
        })), n)) for (; c > l; l++) n(e[l], r, a ? o : o.call(e[l], l, n(e[l], r)));
      return i ? e : u ? n.call(e) : c ? n(e[0], r) : s
    }, now: function () {
      return (new Date).getTime()
    }, swap: function (e, t, n, r) {
      var o, i, s = {};
      for (i in t) s[i] = e.style[i], e.style[i] = t[i];
      o = n.apply(e, r || []);
      for (i in t) e.style[i] = s[i];
      return o
    }
  }), ne.ready.promise = function (t) {
    if (!F) if (F = ne.Deferred(), "complete" === U.readyState) setTimeout(ne.ready); else if (U.addEventListener) U.addEventListener("DOMContentLoaded", he, !1), e.addEventListener("load", he, !1); else {
      U.attachEvent("onreadystatechange", he), e.attachEvent("onload", he);
      var n = !1;
      try {
        n = null == e.frameElement && U.documentElement
      } catch (e) {
      }
      n && n.doScroll && function e() {
        if (!ne.isReady) {
          try {
            n.doScroll("left")
          } catch (t) {
            return setTimeout(e, 50)
          }
          ge(), ne.ready()
        }
      }()
    }
    return F.promise(t)
  }, ne.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    W["[object " + t + "]"] = t.toLowerCase()
  }), R = ne(U), function (e, t) {
    function n(e, t, n, r) {
      var o, i, s, a, l, c, f, d, h, g;
      if ((t ? t.ownerDocument || t : B) !== E && P(t), t = t || E, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (a = t.nodeType) && 9 !== a) return [];
      if (M && !r) {
        if (o = me.exec(e)) if (s = o[1]) {
          if (9 === a) {
            if (!(i = t.getElementById(s)) || !i.parentNode) return n;
            if (i.id === s) return n.push(i), n
          } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(s)) && I(t, i) && i.id === s) return n.push(i), n
        } else {
          if (o[2]) return X.apply(n, t.getElementsByTagName(e)), n;
          if ((s = o[3]) && $.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(s)), n
        }
        if ($.qsa && (!N || !N.test(e))) {
          if (d = f = L, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (c = u(e), (f = t.getAttribute("id")) ? d = f.replace(ye, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + p(c[l]);
            h = ue.test(e) && t.parentNode || t, g = c.join(",")
          }
          if (g) try {
            return X.apply(n, h.querySelectorAll(g)), n
          } catch (e) {
          } finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return b(e.replace(ae, "$1"), t, n, r)
    }

    function r() {
      function e(n, r) {
        return t.push(n += " ") > w.cacheLength && delete e[t.shift()], e[n] = r
      }

      var t = [];
      return e
    }

    function o(e) {
      return e[L] = !0, e
    }

    function i(e) {
      var t = E.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function s(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
    }

    function a(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
      if (r) return r;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function l(e) {
      return o(function (t) {
        return t = +t, o(function (n, r) {
          for (var o, i = e([], n.length, t), s = i.length; s--;) n[o = i[s]] && (n[o] = !(r[o] = n[o]))
        })
      })
    }

    function c() {
    }

    function u(e, t) {
      var r, o, i, s, a, l, c, u = j[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (a = e, l = [], c = w.preFilter; a;) {
        (!r || (o = le.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(i = [])), r = !1, (o = ce.exec(a)) && (r = o.shift(), i.push({
          value: r,
          type: o[0].replace(ae, " ")
        }), a = a.slice(r.length));
        for (s in w.filter) !(o = he[s].exec(a)) || c[s] && !(o = c[s](o)) || (r = o.shift(), i.push({
          value: r,
          type: s,
          matches: o
        }), a = a.slice(r.length));
        if (!r) break
      }
      return t ? a.length : a ? n.error(e) : j(e, l).slice(0)
    }

    function p(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function f(e, t, n) {
      var r = t.dir, o = n && "parentNode" === r, i = R++;
      return t.first ? function (t, n, i) {
        for (; t = t[r];) if (1 === t.nodeType || o) return e(t, n, i)
      } : function (t, n, s) {
        var a, l, c, u = F + " " + i;
        if (s) {
          for (; t = t[r];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
        } else for (; t = t[r];) if (1 === t.nodeType || o) if (c = t[L] || (t[L] = {}), (l = c[r]) && l[0] === u) {
          if (!0 === (a = l[1]) || a === x) return !0 === a
        } else if (l = c[r] = [u], l[1] = e(t, n, s) || x, !0 === l[1]) return !0
      }
    }

    function d(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var o = e.length; o--;) if (!e[o](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function h(e, t, n, r, o) {
      for (var i, s = [], a = 0, l = e.length, c = null != t; l > a; a++) (i = e[a]) && (!n || n(i, r, o)) && (s.push(i), c && t.push(a));
      return s
    }

    function g(e, t, r, i, s, a) {
      return i && !i[L] && (i = g(i)), s && !s[L] && (s = g(s, a)), o(function (o, a, l, c) {
        var u, p, f, d = [], g = [], m = a.length, v = o || function (e, t, r) {
            for (var o = 0, i = t.length; i > o; o++) n(e, t[o], r);
            return r
          }(t || "*", l.nodeType ? [l] : l, []), b = !e || !o && t ? v : h(v, d, e, l, c),
          y = r ? s || (o ? e : m || i) ? [] : a : b;
        if (r && r(b, y, l, c), i) for (u = h(y, g), i(u, [], l, c), p = u.length; p--;) (f = u[p]) && (y[g[p]] = !(b[g[p]] = f));
        if (o) {
          if (s || e) {
            if (s) {
              for (u = [], p = y.length; p--;) (f = y[p]) && u.push(b[p] = f);
              s(null, y = [], u, c)
            }
            for (p = y.length; p--;) (f = y[p]) && (u = s ? Z.call(o, f) : d[p]) > -1 && (o[u] = !(a[u] = f))
          }
        } else y = h(y === a ? y.splice(m, y.length) : y), s ? s(null, a, y, c) : X.apply(a, y)
      })
    }

    function m(e) {
      for (var t, n, r, o = e.length, i = w.relative[e[0].type], s = i || w.relative[" "], a = i ? 1 : 0, l = f(function (e) {
        return e === t
      }, s, !0), c = f(function (e) {
        return Z.call(t, e) > -1
      }, s, !0), u = [function (e, n, r) {
        return !i && (r || n !== C) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
      }]; o > a; a++) if (n = w.relative[e[a].type]) u = [f(d(u), n)]; else {
        if ((n = w.filter[e[a].type].apply(null, e[a].matches))[L]) {
          for (r = ++a; o > r && !w.relative[e[r].type]; r++) ;
          return g(a > 1 && d(u), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, r > a && m(e.slice(a, r)), o > r && m(e = e.slice(r)), o > r && p(e))
        }
        u.push(n)
      }
      return d(u)
    }

    function v(e, t) {
      var r = 0, i = t.length > 0, s = e.length > 0, a = function (o, a, l, c, u) {
        var p, f, d, g = [], m = 0, v = "0", b = o && [], y = null != u, $ = C,
          k = o || s && w.find.TAG("*", u && a.parentNode || a), T = F += null == $ ? 1 : Math.random() || .1;
        for (y && (C = a !== E && a, x = r); null != (p = k[v]); v++) {
          if (s && p) {
            for (f = 0; d = e[f++];) if (d(p, a, l)) {
              c.push(p);
              break
            }
            y && (F = T, x = ++r)
          }
          i && ((p = !d && p) && m--, o && b.push(p))
        }
        if (m += v, i && v !== m) {
          for (f = 0; d = t[f++];) d(b, g, a, l);
          if (o) {
            if (m > 0) for (; v--;) b[v] || g[v] || (g[v] = Q.call(c));
            g = h(g)
          }
          X.apply(c, g), y && !o && g.length > 0 && m + t.length > 1 && n.uniqueSort(c)
        }
        return y && (F = T, C = $), b
      };
      return i ? o(a) : a
    }

    function b(e, t, n, r) {
      var o, i, s, a, l, c = u(e);
      if (!r && 1 === c.length) {
        if ((i = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = i[0]).type && $.getById && 9 === t.nodeType && M && w.relative[i[1].type]) {
          if (!(t = (w.find.ID(s.matches[0].replace($e, xe), t) || [])[0])) return n;
          e = e.slice(i.shift().value.length)
        }
        for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !w.relative[a = s.type]);) if ((l = w.find[a]) && (r = l(s.matches[0].replace($e, xe), ue.test(i[0].type) && t.parentNode || t))) {
          if (i.splice(o, 1), !(e = r.length && p(i))) return X.apply(n, r), n;
          break
        }
      }
      return S(e, c)(r, t, !M, n, ue.test(e)), n
    }

    var y, $, x, w, k, T, S, C, _, P, E, A, M, N, D, O, I, L = "sizzle" + -new Date, B = e.document, F = 0, R = 0,
      q = r(), j = r(), U = r(), H = !1, V = function (e, t) {
        return e === t ? (H = !0, 0) : 0
      }, z = typeof t, W = 1 << 31, G = {}.hasOwnProperty, Y = [], Q = Y.pop, K = Y.push, X = Y.push, J = Y.slice,
      Z = Y.indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
        return -1
      },
      ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      te = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"),
      ie = "\\[" + te + "*(" + re + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + te + "*\\]",
      se = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
      ae = RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"), le = RegExp("^" + te + "*," + te + "*"),
      ce = RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"), ue = RegExp(te + "*[+~]"),
      pe = RegExp("=" + te + "*([^\\]'\"]*)" + te + "*\\]", "g"), fe = RegExp(se), de = RegExp("^" + oe + "$"), he = {
        ID: RegExp("^#(" + re + ")"),
        CLASS: RegExp("^\\.(" + re + ")"),
        TAG: RegExp("^(" + re.replace("w", "w*") + ")"),
        ATTR: RegExp("^" + ie),
        PSEUDO: RegExp("^" + se),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
        bool: RegExp("^(?:" + ee + ")$", "i"),
        needsContext: RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
      }, ge = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /^(?:input|select|textarea|button)$/i, be = /^h\d$/i, ye = /'|\\/g,
      $e = RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"), xe = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
      };
    try {
      X.apply(Y = J.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
    } catch (e) {
      X = {
        apply: Y.length ? function (e, t) {
          K.apply(e, J.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];) ;
          e.length = n - 1
        }
      }
    }
    T = n.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, $ = n.support = {}, P = n.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : B, r = n.defaultView;
      return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, A = n.documentElement, M = !T(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
        P()
      }), $.attributes = i(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), $.getElementsByTagName = i(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), $.getElementsByClassName = i(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
      }), $.getById = i(function (e) {
        return A.appendChild(e).id = L, !n.getElementsByName || !n.getElementsByName(L).length
      }), $.getById ? (w.find.ID = function (e, t) {
        if (typeof t.getElementById !== z && M) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, w.filter.ID = function (e) {
        var t = e.replace($e, xe);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (delete w.find.ID, w.filter.ID = function (e) {
        var t = e.replace($e, xe);
        return function (e) {
          var n = typeof e.getAttributeNode !== z && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), w.find.TAG = $.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== z ? n.getElementsByTagName(e) : t
      } : function (e, t) {
        var n, r = [], o = 0, i = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = i[o++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return i
      }, w.find.CLASS = $.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== z && M ? n.getElementsByClassName(e) : t
      }, D = [], N = [], ($.qsa = ge.test(n.querySelectorAll)) && (i(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || N.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || N.push(":checked")
      }), i(function (e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && N.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
      })), ($.matchesSelector = ge.test(O = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function (e) {
        $.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), D.push("!=", se)
      }), N = N.length && RegExp(N.join("|")), D = D.length && RegExp(D.join("|")), I = ge.test(A.contains) || A.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, V = A.compareDocumentPosition ? function (e, t) {
        if (e === t) return H = !0, 0;
        var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return r ? 1 & r || !$.sortDetached && t.compareDocumentPosition(e) === r ? e === n || I(B, e) ? -1 : t === n || I(B, t) ? 1 : _ ? Z.call(_, e) - Z.call(_, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
      } : function (e, t) {
        var r, o = 0, i = e.parentNode, s = t.parentNode, l = [e], c = [t];
        if (e === t) return H = !0, 0;
        if (!i || !s) return e === n ? -1 : t === n ? 1 : i ? -1 : s ? 1 : _ ? Z.call(_, e) - Z.call(_, t) : 0;
        if (i === s) return a(e, t);
        for (r = e; r = r.parentNode;) l.unshift(r);
        for (r = t; r = r.parentNode;) c.unshift(r);
        for (; l[o] === c[o];) o++;
        return o ? a(l[o], c[o]) : l[o] === B ? -1 : c[o] === B ? 1 : 0
      }, n) : E
    }, n.matches = function (e, t) {
      return n(e, null, null, t)
    }, n.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== E && P(e), t = t.replace(pe, "='$1']"), !(!$.matchesSelector || !M || D && D.test(t) || N && N.test(t))) try {
        var r = O.call(e, t);
        if (r || $.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {
      }
      return n(t, E, null, [e]).length > 0
    }, n.contains = function (e, t) {
      return (e.ownerDocument || e) !== E && P(e), I(e, t)
    }, n.attr = function (e, n) {
      (e.ownerDocument || e) !== E && P(e);
      var r = w.attrHandle[n.toLowerCase()], o = r && G.call(w.attrHandle, n.toLowerCase()) ? r(e, n, !M) : t;
      return o === t ? $.attributes || !M ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
    }, n.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e)
    }, n.uniqueSort = function (e) {
      var t, n = [], r = 0, o = 0;
      if (H = !$.detectDuplicates, _ = !$.sortStable && e.slice(0), e.sort(V), H) {
        for (; t = e[o++];) t === e[o] && (r = n.push(o));
        for (; r--;) e.splice(n[r], 1)
      }
      return e
    }, k = n.getText = function (e) {
      var t, n = "", r = 0, o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else for (; t = e[r]; r++) n += k(t);
      return n
    }, (w = n.selectors = {
      cacheLength: 50,
      createPseudo: o,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace($e, xe), e[3] = (e[4] || e[5] || "").replace($e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
        }, PSEUDO: function (e) {
          var n, r = !e[5] && e[2];
          return he.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && fe.test(r) && (n = u(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace($e, xe).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = q[e + " "];
          return t || (t = RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && q(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== z && e.getAttribute("class") || "")
          })
        }, ATTR: function (e, t, r) {
          return function (o) {
            var i = n.attr(o, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === r : "!=" === t ? i !== r : "^=" === t ? r && 0 === i.indexOf(r) : "*=" === t ? r && i.indexOf(r) > -1 : "$=" === t ? r && i.slice(-r.length) === r : "~=" === t ? (" " + i + " ").indexOf(r) > -1 : "|=" === t && (i === r || i.slice(0, r.length + 1) === r + "-"))
          }
        }, CHILD: function (e, t, n, r, o) {
          var i = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
          return 1 === r && 0 === o ? function (e) {
            return !!e.parentNode
          } : function (t, n, l) {
            var c, u, p, f, d, h, g = i !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
              v = a && t.nodeName.toLowerCase(), b = !l && !a;
            if (m) {
              if (i) {
                for (; g;) {
                  for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? m.firstChild : m.lastChild], s && b) {
                for (d = (c = (u = m[L] || (m[L] = {}))[e] || [])[0] === F && c[1], f = c[0] === F && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (f = d = 0) || h.pop();) if (1 === p.nodeType && ++f && p === t) {
                  u[e] = [F, d, f];
                  break
                }
              } else if (b && (c = (t[L] || (t[L] = {}))[e]) && c[0] === F) f = c[1]; else for (; (p = ++d && p && p[g] || (f = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++f || (b && ((p[L] || (p[L] = {}))[e] = [F, f]), p !== t));) ;
              return (f -= o) === r || 0 == f % r && f / r >= 0
            }
          }
        }, PSEUDO: function (e, t) {
          var r, i = w.pseudos[e] || w.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
          return i[L] ? i(t) : i.length > 1 ? (r = [e, e, "", t], w.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
            for (var r, o = i(e, t), s = o.length; s--;) r = Z.call(e, o[s]), e[r] = !(n[r] = o[s])
          }) : function (e) {
            return i(e, 0, r)
          }) : i
        }
      },
      pseudos: {
        not: o(function (e) {
          var t = [], n = [], r = S(e.replace(ae, "$1"));
          return r[L] ? o(function (e, t, n, o) {
            for (var i, s = r(e, null, o, []), a = e.length; a--;) (i = s[a]) && (e[a] = !(t[a] = i))
          }) : function (e, o, i) {
            return t[0] = e, r(t, null, i, n), !n.pop()
          }
        }), has: o(function (e) {
          return function (t) {
            return n(e, t).length > 0
          }
        }), contains: o(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
          }
        }), lang: o(function (e) {
          return de.test(e || "") || n.error("unsupported lang: " + e), e = e.replace($e, xe).toLowerCase(), function (t) {
            var n;
            do {
              if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === A
        }, focus: function (e) {
          return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return !1 === e.disabled
        }, disabled: function (e) {
          return !0 === e.disabled
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0
        }, parent: function (e) {
          return !w.pseudos.empty(e)
        }, header: function (e) {
          return be.test(e.nodeName)
        }, input: function (e) {
          return ve.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first: l(function () {
          return [0]
        }), last: l(function (e, t) {
          return [t - 1]
        }), eq: l(function (e, t, n) {
          return [0 > n ? n + t : n]
        }), even: l(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }), odd: l(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }), lt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e
        }), gt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = w.pseudos.eq;
    for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[y] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(y);
    for (y in{submit: !0, reset: !0}) w.pseudos[y] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(y);
    c.prototype = w.filters = w.pseudos, w.setFilters = new c, S = n.compile = function (e, t) {
      var n, r = [], o = [], i = U[e + " "];
      if (!i) {
        for (t || (t = u(e)), n = t.length; n--;) (i = m(t[n]))[L] ? r.push(i) : o.push(i);
        i = U(e, v(o, r))
      }
      return i
    }, $.sortStable = L.split("").sort(V).join("") === L, $.detectDuplicates = H, P(), $.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(E.createElement("div"))
    }), i(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || s("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
    }), $.attributes && i(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || s("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
    }), i(function (e) {
      return null == e.getAttribute("disabled")
    }) || s(ee, function (e, n, r) {
      var o;
      return r ? t : (o = e.getAttributeNode(n)) && o.specified ? o.value : !0 === e[n] ? n.toLowerCase() : null
    }), ne.find = n, ne.expr = n.selectors, ne.expr[":"] = ne.expr.pseudos, ne.unique = n.uniqueSort, ne.text = n.getText, ne.isXMLDoc = n.isXML, ne.contains = n.contains
  }(e);
  var me = {};
  ne.Callbacks = function (e) {
    var n, r, o, i, s, a, l = [], c = !(e = "string" == typeof e ? me[e] || function (e) {
      var t = me[e] = {};
      return ne.each(e.match(oe) || [], function (e, n) {
        t[n] = !0
      }), t
    }(e) : ne.extend({}, e)).once && [], u = function (t) {
      for (r = e.memory && t, o = !0, s = a || 0, a = 0, i = l.length, n = !0; l && i > s; s++) if (!1 === l[s].apply(t[0], t[1]) && e.stopOnFalse) {
        r = !1;
        break
      }
      n = !1, l && (c ? c.length && u(c.shift()) : r ? l = [] : p.disable())
    }, p = {
      add: function () {
        if (l) {
          var t = l.length;
          (function t(n) {
            ne.each(n, function (n, r) {
              var o = ne.type(r);
              "function" === o ? e.unique && p.has(r) || l.push(r) : r && r.length && "string" !== o && t(r)
            })
          })(arguments), n ? i = l.length : r && (a = t, u(r))
        }
        return this
      }, remove: function () {
        return l && ne.each(arguments, function (e, t) {
          for (var r; (r = ne.inArray(t, l, r)) > -1;) l.splice(r, 1), n && (i >= r && i--, s >= r && s--)
        }), this
      }, has: function (e) {
        return e ? ne.inArray(e, l) > -1 : !(!l || !l.length)
      }, empty: function () {
        return l = [], i = 0, this
      }, disable: function () {
        return l = c = r = t, this
      }, disabled: function () {
        return !l
      }, lock: function () {
        return c = t, r || p.disable(), this
      }, locked: function () {
        return !c
      }, fireWith: function (e, t) {
        return !l || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : u(t)), this
      }, fire: function () {
        return p.fireWith(this, arguments), this
      }, fired: function () {
        return !!o
      }
    };
    return p
  }, ne.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", ne.Callbacks("once memory"), "resolved"], ["reject", "fail", ne.Callbacks("once memory"), "rejected"], ["notify", "progress", ne.Callbacks("memory")]],
        n = "pending", r = {
          state: function () {
            return n
          }, always: function () {
            return o.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return ne.Deferred(function (n) {
              ne.each(t, function (t, i) {
                var s = i[0], a = ne.isFunction(e[t]) && e[t];
                o[i[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && ne.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? ne.extend(e, r) : r
          }
        }, o = {};
      return r.pipe = r.then, ne.each(t, function (e, i) {
        var s = i[2], a = i[3];
        r[i[1]] = s.add, a && s.add(function () {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
          return o[i[0] + "With"](this === o ? r : this, arguments), this
        }, o[i[0] + "With"] = s.fireWith
      }), r.promise(o), e && e.call(o, o), o
    }, when: function (e) {
      var t, n, r, o = 0, i = X.call(arguments), s = i.length, a = 1 !== s || e && ne.isFunction(e.promise) ? s : 0,
        l = 1 === a ? e : ne.Deferred(), c = function (e, n, r) {
          return function (o) {
            n[e] = this, r[e] = arguments.length > 1 ? X.call(arguments) : o, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
          }
        };
      if (s > 1) for (t = Array(s), n = Array(s), r = Array(s); s > o; o++) i[o] && ne.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(l.reject).progress(c(o, n, t)) : --a;
      return a || l.resolveWith(r, i), l.promise()
    }
  }), ne.support = function (t) {
    var n, r, o, i, s, a, l, c, u, p = U.createElement("div");
    if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], !(r = p.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
    a = (i = U.createElement("select")).appendChild(U.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = a.selected, t.enctype = !!U.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== U.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !a.disabled;
    try {
      delete p.test
    } catch (e) {
      t.deleteExpando = !1
    }
    (o = U.createElement("input")).setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), (s = U.createDocumentFragment()).appendChild(o), t.appendChecked = o.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
      t.noCloneEvent = !1
    }), p.cloneNode(!0).click());
    for (u in{
      submit: !0,
      change: !0,
      focusin: !0
    }) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || !1 === p.attributes[l].expando;
    p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
    for (u in ne(t)) break;
    return t.ownLast = "0" !== u, ne(function () {
      var n, r, o,
        i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        s = U.getElementsByTagName("body")[0];
      s && (n = U.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ne.swap(s, null != s.style.zoom ? {zoom: 1} : {}, function () {
        t.boxSizing = 4 === p.offsetWidth
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {width: "4px"}).width, r = p.appendChild(U.createElement("div")), r.style.cssText = p.style.cssText = i, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== q && (p.innerHTML = "", p.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = p = o = r = null)
    }), n = i = s = a = r = o = null, t
  }({});
  var ve = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, be = /([A-Z])/g;
  ne.extend({
    cache: {},
    noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
    hasData: function (e) {
      return !!(e = e.nodeType ? ne.cache[e[ne.expando]] : e[ne.expando]) && !s(e)
    },
    data: function (e, t, n) {
      return r(e, t, n)
    },
    removeData: function (e, t) {
      return o(e, t)
    },
    _data: function (e, t, n) {
      return r(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return o(e, t, !0)
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && ne.noData[e.nodeName.toLowerCase()];
      return !t || !0 !== t && e.getAttribute("classid") === t
    }
  }), ne.fn.extend({
    data: function (e, n) {
      var r, o, s = null, a = 0, l = this[0];
      if (e === t) {
        if (this.length && (s = ne.data(l), 1 === l.nodeType && !ne._data(l, "parsedAttrs"))) {
          for (r = l.attributes; r.length > a; a++) 0 === (o = r[a].name).indexOf("data-") && (o = ne.camelCase(o.slice(5)), i(l, o, s[o]));
          ne._data(l, "parsedAttrs", !0)
        }
        return s
      }
      return "object" == typeof e ? this.each(function () {
        ne.data(this, e)
      }) : arguments.length > 1 ? this.each(function () {
        ne.data(this, e, n)
      }) : l ? i(l, e, ne.data(l, e)) : null
    }, removeData: function (e) {
      return this.each(function () {
        ne.removeData(this, e)
      })
    }
  }), ne.extend({
    queue: function (e, n, r) {
      var o;
      return e ? (n = (n || "fx") + "queue", o = ne._data(e, n), r && (!o || ne.isArray(r) ? o = ne._data(e, n, ne.makeArray(r)) : o.push(r)), o || []) : t
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = ne.queue(e, t), r = n.length, o = n.shift(), i = ne._queueHooks(e, t);
      "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
        ne.dequeue(e, t)
      }, i)), !r && i && i.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return ne._data(e, n) || ne._data(e, n, {
        empty: ne.Callbacks("once memory").add(function () {
          ne._removeData(e, t + "queue"), ne._removeData(e, n)
        })
      })
    }
  }), ne.fn.extend({
    queue: function (e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ne.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = ne.queue(this, e, n);
        ne._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ne.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        ne.dequeue(this, e)
      })
    }, delay: function (e, t) {
      return e = ne.fx ? ne.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r)
        }
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, n) {
      var r, o = 1, i = ne.Deferred(), s = this, a = this.length, l = function () {
        --o || i.resolveWith(s, [s])
      };
      for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) (r = ne._data(s[a], e + "queueHooks")) && r.empty && (o++, r.empty.add(l));
      return l(), i.promise(n)
    }
  });
  var ye, $e, xe = /[\t\r\n\f]/g, we = /\r/g, ke = /^(?:input|select|textarea|button|object)$/i, Te = /^(?:a|area)$/i,
    Se = /^(?:checked|selected)$/i, Ce = ne.support.getSetAttribute, _e = ne.support.input;
  ne.fn.extend({
    attr: function (e, t) {
      return ne.access(this, ne.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        ne.removeAttr(this, e)
      })
    }, prop: function (e, t) {
      return ne.access(this, ne.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return e = ne.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e]
        } catch (e) {
        }
      })
    }, addClass: function (e) {
      var t, n, r, o, i, s = 0, a = this.length, l = "string" == typeof e && e;
      if (ne.isFunction(e)) return this.each(function (t) {
        ne(this).addClass(e.call(this, t, this.className))
      });
      if (l) for (t = (e || "").match(oe) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xe, " ") : " ")) {
        for (i = 0; o = t[i++];) 0 > r.indexOf(" " + o + " ") && (r += o + " ");
        n.className = ne.trim(r)
      }
      return this
    }, removeClass: function (e) {
      var t, n, r, o, i, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof e && e;
      if (ne.isFunction(e)) return this.each(function (t) {
        ne(this).removeClass(e.call(this, t, this.className))
      });
      if (l) for (t = (e || "").match(oe) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xe, " ") : "")) {
        for (i = 0; o = t[i++];) for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
        n.className = e ? ne.trim(r) : ""
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ne.isFunction(e) ? this.each(function (n) {
        ne(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function () {
        if ("string" === n) for (var t, r = 0, o = ne(this), i = e.match(oe) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === q || "boolean" === n) && (this.className && ne._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ne._data(this, "__className__") || "")
      })
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xe, " ").indexOf(t) >= 0) return !0;
      return !1
    }, val: function (e) {
      var n, r, o, i = this[0];
      return arguments.length ? (o = ne.isFunction(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (null == (i = o ? e.call(this, n, ne(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : ne.isArray(i) && (i = ne.map(i, function (e) {
          return null == e ? "" : e + ""
        })), (r = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, i, "value") !== t || (this.value = i))
      })) : i ? (r = ne.valHooks[i.type] || ne.valHooks[i.nodeName.toLowerCase()]) && "get" in r && (n = r.get(i, "value")) !== t ? n : "string" == typeof(n = i.value) ? n.replace(we, "") : null == n ? "" : n : void 0
    }
  }), ne.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ne.find.attr(e, "value");
          return null != t ? t : e.text
        }
      }, select: {
        get: function (e) {
          for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, s = i ? null : [], a = i ? o + 1 : r.length, l = 0 > o ? a : i ? o : 0; a > l; l++) if (!(!(n = r[l]).selected && l !== o || (ne.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ne.nodeName(n.parentNode, "optgroup"))) {
            if (t = ne(n).val(), i) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          for (var n, r, o = e.options, i = ne.makeArray(t), s = o.length; s--;) r = o[s], (r.selected = ne.inArray(ne(r).val(), i) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), i
        }
      }
    }, attr: function (e, n, r) {
      var o, i, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === q ? ne.prop(e, n, r) : (1 === s && ne.isXMLDoc(e) || (n = n.toLowerCase(), o = ne.attrHooks[n] || (ne.expr.match.bool.test(n) ? $e : ye)), r === t ? o && "get" in o && null !== (i = o.get(e, n)) ? i : null == (i = ne.find.attr(e, n)) ? t : i : null !== r ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : (ne.removeAttr(e, n), t))
    }, removeAttr: function (e, t) {
      var n, r, o = 0, i = t && t.match(oe);
      if (i && 1 === e.nodeType) for (; n = i[o++];) r = ne.propFix[n] || n, ne.expr.match.bool.test(n) ? _e && Ce || !Se.test(n) ? e[r] = !1 : e[ne.camelCase("default-" + n)] = e[r] = !1 : ne.attr(e, n, ""), e.removeAttribute(Ce ? n : r)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!ne.support.radioValue && "radio" === t && ne.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, propFix: {for: "htmlFor", class: "className"}, prop: function (e, n, r) {
      var o, i, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !ne.isXMLDoc(e)) && (n = ne.propFix[n] || n, i = ne.propHooks[n]), r !== t ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : e[n] = r : i && "get" in i && null !== (o = i.get(e, n)) ? o : e[n]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ne.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ke.test(e.nodeName) || Te.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), $e = {
    set: function (e, t, n) {
      return !1 === t ? ne.removeAttr(e, n) : _e && Ce || !Se.test(n) ? e.setAttribute(!Ce && ne.propFix[n] || n, n) : e[ne.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = ne.expr.attrHandle[n] || ne.find.attr;
    ne.expr.attrHandle[n] = _e && Ce || !Se.test(n) ? function (e, n, o) {
      var i = ne.expr.attrHandle[n], s = o ? t : (ne.expr.attrHandle[n] = t) != r(e, n, o) ? n.toLowerCase() : null;
      return ne.expr.attrHandle[n] = i, s
    } : function (e, n, r) {
      return r ? t : e[ne.camelCase("default-" + n)] ? n.toLowerCase() : null
    }
  }), _e && Ce || (ne.attrHooks.value = {
    set: function (e, n, r) {
      return ne.nodeName(e, "input") ? (e.defaultValue = n, t) : ye && ye.set(e, n, r)
    }
  }), Ce || (ye = {
    set: function (e, n, r) {
      var o = e.getAttributeNode(r);
      return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(r)), o.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }
  }, ne.expr.attrHandle.id = ne.expr.attrHandle.name = ne.expr.attrHandle.coords = function (e, n, r) {
    var o;
    return r ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
  }, ne.valHooks.button = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t
    }, set: ye.set
  }, ne.attrHooks.contenteditable = {
    set: function (e, t, n) {
      ye.set(e, "" !== t && t, n)
    }
  }, ne.each(["width", "height"], function (e, n) {
    ne.attrHooks[n] = {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t
      }
    }
  })), ne.support.hrefNormalized || ne.each(["href", "src"], function (e, t) {
    ne.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4)
      }
    }
  }), ne.support.style || (ne.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || t
    }, set: function (e, t) {
      return e.style.cssText = t + ""
    }
  }), ne.support.optSelected || (ne.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ne.propFix[this.toLowerCase()] = this
  }), ne.support.enctype || (ne.propFix.enctype = "encoding"), ne.each(["radio", "checkbox"], function () {
    ne.valHooks[this] = {
      set: function (e, n) {
        return ne.isArray(n) ? e.checked = ne.inArray(ne(e).val(), n) >= 0 : t
      }
    }, ne.support.checkOn || (ne.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Pe = /^(?:input|select|textarea)$/i, Ee = /^key/, Ae = /^(?:mouse|contextmenu)|click/,
    Me = /^(?:focusinfocus|focusoutblur)$/, Ne = /^([^.]*)(?:\.(.+)|)$/;
  ne.event = {
    global: {},
    add: function (e, n, r, o, i) {
      var s, a, l, c, u, p, f, d, h, g, m, v = ne._data(e);
      if (v) {
        for (r.handler && (c = r, r = c.handler, i = c.selector), r.guid || (r.guid = ne.guid++), (a = v.events) || (a = v.events = {}), (p = v.handle) || (p = v.handle = function (e) {
          return typeof ne === q || e && ne.event.triggered === e.type ? t : ne.event.dispatch.apply(p.elem, arguments)
        }, p.elem = e), l = (n = (n || "").match(oe) || [""]).length; l--;) s = Ne.exec(n[l]) || [], h = m = s[1], g = (s[2] || "").split(".").sort(), h && (u = ne.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = ne.event.special[h] || {}, f = ne.extend({
          type: h,
          origType: m,
          data: o,
          handler: r,
          guid: r.guid,
          selector: i,
          needsContext: i && ne.expr.match.needsContext.test(i),
          namespace: g.join(".")
        }, c), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(e, o, g, p) || (e.addEventListener ? e.addEventListener(h, p, !1) : e.attachEvent && e.attachEvent("on" + h, p))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), ne.event.global[h] = !0);
        e = null
      }
    },
    remove: function (e, t, n, r, o) {
      var i, s, a, l, c, u, p, f, d, h, g, m = ne.hasData(e) && ne._data(e);
      if (m && (u = m.events)) {
        for (c = (t = (t || "").match(oe) || [""]).length; c--;) if (a = Ne.exec(t[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
          for (p = ne.event.special[d] || {}, f = u[d = (r ? p.delegateType : p.bindType) || d] || [], a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = f.length; i--;) s = f[i], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (f.splice(i, 1), s.selector && f.delegateCount--, p.remove && p.remove.call(e, s));
          l && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || ne.removeEvent(e, d, m.handle), delete u[d])
        } else for (d in u) ne.event.remove(e, d + t[c], n, r, !0);
        ne.isEmptyObject(u) && (delete m.handle, ne._removeData(e, "events"))
      }
    },
    trigger: function (n, r, o, i) {
      var s, a, l, c, u, p, f, d = [o || U], h = ee.call(n, "type") ? n.type : n,
        g = ee.call(n, "namespace") ? n.namespace.split(".") : [];
      if (l = p = o = o || U, 3 !== o.nodeType && 8 !== o.nodeType && !Me.test(h + ne.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), a = 0 > h.indexOf(":") && "on" + h, n = n[ne.expando] ? n : new ne.Event(h, "object" == typeof n && n), n.isTrigger = i ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), r = null == r ? [n] : ne.makeArray(r, [n]), u = ne.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(o, r))) {
        if (!i && !u.noBubble && !ne.isWindow(o)) {
          for (c = u.delegateType || h, Me.test(c + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l), p = l;
          p === (o.ownerDocument || U) && d.push(p.defaultView || p.parentWindow || e)
        }
        for (f = 0; (l = d[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c : u.bindType || h, (s = (ne._data(l, "events") || {})[n.type] && ne._data(l, "handle")) && s.apply(l, r), (s = a && l[a]) && ne.acceptData(l) && s.apply && !1 === s.apply(l, r) && n.preventDefault();
        if (n.type = h, !i && !n.isDefaultPrevented() && (!u._default || !1 === u._default.apply(d.pop(), r)) && ne.acceptData(o) && a && o[h] && !ne.isWindow(o)) {
          (p = o[a]) && (o[a] = null), ne.event.triggered = h;
          try {
            o[h]()
          } catch (e) {
          }
          ne.event.triggered = t, p && (o[a] = p)
        }
        return n.result
      }
    },
    dispatch: function (e) {
      e = ne.event.fix(e);
      var n, r, o, i, s, a = [], l = X.call(arguments), c = (ne._data(this, "events") || {})[e.type] || [],
        u = ne.event.special[e.type] || {};
      if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
        for (a = ne.event.handlers.call(this, e, c), n = 0; (i = a[n++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, s = 0; (o = i.handlers[s++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, (r = ((ne.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, n) {
      var r, o, i, s, a = [], l = n.delegateCount, c = e.target;
      if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
        for (i = [], s = 0; l > s; s++) o = n[s], r = o.selector + " ", i[r] === t && (i[r] = o.needsContext ? ne(r, this).index(c) >= 0 : ne.find(r, this, null, [c]).length), i[r] && i.push(o);
        i.length && a.push({elem: c, handlers: i})
      }
      return n.length > l && a.push({elem: this, handlers: n.slice(l)}), a
    },
    fix: function (e) {
      if (e[ne.expando]) return e;
      var t, n, r, o = e.type, i = e, s = this.fixHooks[o];
      for (s || (this.fixHooks[o] = s = Ae.test(o) ? this.mouseHooks : Ee.test(o) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ne.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
      return e.target || (e.target = i.srcElement || U), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, i) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, n) {
        var r, o, i, s = n.button, a = n.fromElement;
        return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || U, i = o.documentElement, r = o.body, e.pageX = n.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
      }
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== c() && this.focus) try {
            return this.focus(), !1
          } catch (e) {
          }
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === c() && this.blur ? (this.blur(), !1) : t
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return ne.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
        }, _default: function (e) {
          return ne.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var o = ne.extend(new ne.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
      r ? ne.event.trigger(o, null, t) : ne.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
    }
  }, ne.removeEvent = U.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === q && (e[r] = null), e.detachEvent(r, n))
  }, ne.Event = function (e, n) {
    return this instanceof ne.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? a : l) : this.type = e, n && ne.extend(this, n), this.timeStamp = e && e.timeStamp || ne.now(), this[ne.expando] = !0, t) : new ne.Event(e, n)
  }, ne.Event.prototype = {
    isDefaultPrevented: l,
    isPropagationStopped: l,
    isImmediatePropagationStopped: l,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = a, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = a, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = a, this.stopPropagation()
    }
  }, ne.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
    ne.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, r = e.relatedTarget, o = e.handleObj;
        return (!r || r !== this && !ne.contains(this, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), ne.support.submitBubbles || (ne.event.special.submit = {
    setup: function () {
      return !ne.nodeName(this, "form") && (ne.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target, r = ne.nodeName(n, "input") || ne.nodeName(n, "button") ? n.form : t;
        r && !ne._data(r, "submitBubbles") && (ne.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0
        }), ne._data(r, "submitBubbles", !0))
      }), t)
    }, postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ne.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
      return !ne.nodeName(this, "form") && (ne.event.remove(this, "._submit"), t)
    }
  }), ne.support.changeBubbles || (ne.event.special.change = {
    setup: function () {
      return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ne.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), ne.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), ne.event.simulate("change", this, e, !0)
      })), !1) : (ne.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Pe.test(t.nodeName) && !ne._data(t, "changeBubbles") && (ne.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || ne.event.simulate("change", this.parentNode, e, !0)
        }), ne._data(t, "changeBubbles", !0))
      }), t)
    }, handle: function (e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
      return ne.event.remove(this, "._change"), !Pe.test(this.nodeName)
    }
  }), ne.support.focusinBubbles || ne.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = 0, r = function (e) {
      ne.event.simulate(t, e.target, ne.event.fix(e), !0)
    };
    ne.event.special[t] = {
      setup: function () {
        0 == n++ && U.addEventListener(e, r, !0)
      }, teardown: function () {
        0 == --n && U.removeEventListener(e, r, !0)
      }
    }
  }), ne.fn.extend({
    on: function (e, n, r, o, i) {
      var s, a;
      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);
        for (s in e) this.on(s, n, r, e[s], i);
        return this
      }
      if (null == r && null == o ? (o = n, r = n = t) : null == o && ("string" == typeof n ? (o = r, r = t) : (o = r, r = n, n = t)), !1 === o) o = l; else if (!o) return this;
      return 1 === i && (a = o, o = function (e) {
        return ne().off(e), a.apply(this, arguments)
      }, o.guid = a.guid || (a.guid = ne.guid++)), this.each(function () {
        ne.event.add(this, e, o, r, n)
      })
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
      var o, i;
      if (e && e.preventDefault && e.handleObj) return o = e.handleObj, ne(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, n, e[i]);
        return this
      }
      return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = l), this.each(function () {
        ne.event.remove(this, e, r, n)
      })
    }, trigger: function (e, t) {
      return this.each(function () {
        ne.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, n) {
      var r = this[0];
      return r ? ne.event.trigger(e, n, r, !0) : t
    }
  });
  var De = /^.[^:#\[\.,]*$/, Oe = /^(?:parents|prev(?:Until|All))/, Ie = ne.expr.match.needsContext,
    Le = {children: !0, contents: !0, next: !0, prev: !0};
  ne.fn.extend({
    find: function (e) {
      var t, n = [], r = this, o = r.length;
      if ("string" != typeof e) return this.pushStack(ne(e).filter(function () {
        for (t = 0; o > t; t++) if (ne.contains(r[t], this)) return !0
      }));
      for (t = 0; o > t; t++) ne.find(e, r[t], n);
      return n = this.pushStack(o > 1 ? ne.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    }, has: function (e) {
      var t, n = ne(e, this), r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (ne.contains(this, n[t])) return !0
      })
    }, not: function (e) {
      return this.pushStack(p(this, e || [], !0))
    }, filter: function (e) {
      return this.pushStack(p(this, e || [], !1))
    }, is: function (e) {
      return !!p(this, "string" == typeof e && Ie.test(e) ? ne(e) : e || [], !1).length
    }, closest: function (e, t) {
      for (var n, r = 0, o = this.length, i = [], s = Ie.test(e) || "string" != typeof e ? ne(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ne.find.matchesSelector(n, e))) {
        n = i.push(n);
        break
      }
      return this.pushStack(i.length > 1 ? ne.unique(i) : i)
    }, index: function (e) {
      return e ? "string" == typeof e ? ne.inArray(this[0], ne(e)) : ne.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      var n = "string" == typeof e ? ne(e, t) : ne.makeArray(e && e.nodeType ? [e] : e), r = ne.merge(this.get(), n);
      return this.pushStack(ne.unique(r))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), ne.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return ne.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return ne.dir(e, "parentNode", n)
    }, next: function (e) {
      return u(e, "nextSibling")
    }, prev: function (e) {
      return u(e, "previousSibling")
    }, nextAll: function (e) {
      return ne.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return ne.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return ne.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return ne.dir(e, "previousSibling", n)
    }, siblings: function (e) {
      return ne.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return ne.sibling(e.firstChild)
    }, contents: function (e) {
      return ne.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ne.merge([], e.childNodes)
    }
  }, function (e, t) {
    ne.fn[e] = function (n, r) {
      var o = ne.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ne.filter(r, o)), this.length > 1 && (Le[e] || (o = ne.unique(o)), Oe.test(e) && (o = o.reverse())), this.pushStack(o)
    }
  }), ne.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ne.find.matchesSelector(r, e) ? [r] : [] : ne.find.matches(e, ne.grep(t, function (e) {
        return 1 === e.nodeType
      }))
    }, dir: function (e, n, r) {
      for (var o = [], i = e[n]; i && 9 !== i.nodeType && (r === t || 1 !== i.nodeType || !ne(i).is(r));) 1 === i.nodeType && o.push(i), i = i[n];
      return o
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });
  var Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Fe = / jQuery\d+="(?:null|\d+)"/g, Re = RegExp("<(?:" + Be + ")[\\s/>]", "i"), qe = /^\s+/,
    je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ue = /<([\w:]+)/, He = /<tbody/i,
    Ve = /<|&#?\w+;/, ze = /<(?:script|style|link)/i, We = /^(?:checkbox|radio)$/i,
    Ge = /checked\s*(?:[^=]|=\s*.checked.)/i, Ye = /^$|\/(?:java|ecma)script/i, Qe = /^true\/(.*)/,
    Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ne.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Je = f(U).appendChild(U.createElement("div"));
  Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, ne.fn.extend({
    text: function (e) {
      return ne.access(this, function (e) {
        return e === t ? ne.text(this) : this.empty().append((this[0] && this[0].ownerDocument || U).createTextNode(e))
      }, null, e, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          d(this, e).appendChild(e)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = d(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, remove: function (e, t) {
      for (var n, r = e ? ne.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || ne.cleanData(b(n)), n.parentNode && (t && ne.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n));
      return this
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && ne.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && ne.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ne.clone(this, e, t)
      })
    }, html: function (e) {
      return ne.access(this, function (e) {
        var n = this[0] || {}, r = 0, o = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Fe, "") : t;
        if (!("string" != typeof e || ze.test(e) || !ne.support.htmlSerialize && Re.test(e) || !ne.support.leadingWhitespace && qe.test(e) || Xe[(Ue.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(je, "<$1></$2>");
          try {
            for (; o > r; r++) 1 === (n = this[r] || {}).nodeType && (ne.cleanData(b(n, !1)), n.innerHTML = e);
            n = 0
          } catch (e) {
          }
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = ne.map(this, function (e) {
        return [e.nextSibling, e.parentNode]
      }), t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++], o = e[t++];
        o && (r && r.parentNode !== o && (r = this.nextSibling), ne(this).remove(), o.insertBefore(n, r))
      }, !0), t ? this : this.remove()
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (e, t, n) {
      e = Q.apply([], e);
      var r, o, i, s, a, l, c = 0, u = this.length, p = this, f = u - 1, d = e[0], m = ne.isFunction(d);
      if (m || !(1 >= u || "string" != typeof d || ne.support.checkClone) && Ge.test(d)) return this.each(function (r) {
        var o = p.eq(r);
        m && (e[0] = d.call(this, r, o.html())), o.domManip(e, t, n)
      });
      if (u && (l = ne.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (i = (s = ne.map(b(l, "script"), h)).length; u > c; c++) o = l, c !== f && (o = ne.clone(o, !0, !0), i && ne.merge(s, b(o, "script"))), t.call(this[c], o, c);
        if (i) for (a = s[s.length - 1].ownerDocument, ne.map(s, g), c = 0; i > c; c++) o = s[c], Ye.test(o.type || "") && !ne._data(o, "globalEval") && ne.contains(a, o) && (o.src ? ne._evalUrl(o.src) : ne.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ke, "")));
        l = r = null
      }
      return this
    }
  }), ne.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    ne.fn[e] = function (e) {
      for (var n, r = 0, o = [], i = ne(e), s = i.length - 1; s >= r; r++) n = r === s ? this : this.clone(!0), ne(i[r])[t](n), K.apply(o, n.get());
      return this.pushStack(o)
    }
  }), ne.extend({
    clone: function (e, t, n) {
      var r, o, i, s, a, l = ne.contains(e.ownerDocument, e);
      if (ne.support.html5Clone || ne.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(i = Je.firstChild)), !(ne.support.noCloneEvent && ne.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e))) for (r = b(i), a = b(e), s = 0; null != (o = a[s]); ++s) r[s] && function (e, t) {
        var n, r, o;
        if (1 === t.nodeType) {
          if (n = t.nodeName.toLowerCase(), !ne.support.noCloneEvent && t[ne.expando]) {
            o = ne._data(t);
            for (r in o.events) ne.removeEvent(t, r, o.handle);
            t.removeAttribute(ne.expando)
          }
          "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.support.html5Clone && e.innerHTML && !ne.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && We.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
      }(o, r[s]);
      if (t) if (n) for (a = a || b(e), r = r || b(i), s = 0; null != (o = a[s]); s++) v(o, r[s]); else v(e, i);
      return (r = b(i, "script")).length > 0 && m(r, !l && b(e, "script")), r = a = o = null, i
    }, buildFragment: function (e, t, n, r) {
      for (var o, i, s, a, l, c, u, p = e.length, d = f(t), h = [], g = 0; p > g; g++) if ((i = e[g]) || 0 === i) if ("object" === ne.type(i)) ne.merge(h, i.nodeType ? [i] : i); else if (Ve.test(i)) {
        for (a = a || d.appendChild(t.createElement("div")), l = (Ue.exec(i) || ["", ""])[1].toLowerCase(), u = Xe[l] || Xe._default, a.innerHTML = u[1] + i.replace(je, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
        if (!ne.support.leadingWhitespace && qe.test(i) && h.push(t.createTextNode(qe.exec(i)[0])), !ne.support.tbody) for (o = (i = "table" !== l || He.test(i) ? "<table>" !== u[1] || He.test(i) ? 0 : a : a.firstChild) && i.childNodes.length; o--;) ne.nodeName(c = i.childNodes[o], "tbody") && !c.childNodes.length && i.removeChild(c);
        for (ne.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
        a = d.lastChild
      } else h.push(t.createTextNode(i));
      for (a && d.removeChild(a), ne.support.appendChecked || ne.grep(b(h, "input"), function (e) {
        We.test(e.type) && (e.defaultChecked = e.checked)
      }), g = 0; i = h[g++];) if ((!r || -1 === ne.inArray(i, r)) && (s = ne.contains(i.ownerDocument, i), a = b(d.appendChild(i), "script"), s && m(a), n)) for (o = 0; i = a[o++];) Ye.test(i.type || "") && n.push(i);
      return a = null, d
    }, cleanData: function (e, t) {
      for (var n, r, o, i, s = 0, a = ne.expando, l = ne.cache, c = ne.support.deleteExpando, u = ne.event.special; null != (n = e[s]); s++) if ((t || ne.acceptData(n)) && (o = n[a], i = o && l[o])) {
        if (i.events) for (r in i.events) u[r] ? ne.event.remove(n, r) : ne.removeEvent(n, r, i.handle);
        l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== q ? n.removeAttribute(a) : n[a] = null, G.push(o))
      }
    }, _evalUrl: function (e) {
      return ne.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }
  }), ne.fn.extend({
    wrapAll: function (e) {
      if (ne.isFunction(e)) return this.each(function (t) {
        ne(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = ne(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    }, wrapInner: function (e) {
      return ne.isFunction(e) ? this.each(function (t) {
        ne(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = ne(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = ne.isFunction(e);
      return this.each(function (n) {
        ne(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  var Ze, et, tt, nt = /alpha\([^)]*\)/i, rt = /opacity\s*=\s*([^)]*)/, ot = /^(top|right|bottom|left)$/,
    it = /^(none|table(?!-c[ea]).+)/, st = /^margin/, at = RegExp("^(" + re + ")(.*)$", "i"),
    lt = RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), ct = RegExp("^([+-])=(" + re + ")", "i"), ut = {BODY: "block"},
    pt = {position: "absolute", visibility: "hidden", display: "block"}, ft = {letterSpacing: 0, fontWeight: 400},
    dt = ["Top", "Right", "Bottom", "Left"], ht = ["Webkit", "O", "Moz", "ms"];
  ne.fn.extend({
    css: function (e, n) {
      return ne.access(this, function (e, n, r) {
        var o, i, s = {}, a = 0;
        if (ne.isArray(n)) {
          for (i = et(e), o = n.length; o > a; a++) s[n[a]] = ne.css(e, n[a], !1, i);
          return s
        }
        return r !== t ? ne.style(e, n, r) : ne.css(e, n)
      }, e, n, arguments.length > 1)
    }, show: function () {
      return x(this, !0)
    }, hide: function () {
      return x(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        $(this) ? ne(this).show() : ne(this).hide()
      })
    }
  }), ne.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = tt(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {float: ne.support.cssFloat ? "cssFloat" : "styleFloat"},
    style: function (e, n, r, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, s, a, l = ne.camelCase(n), c = e.style;
        if (n = ne.cssProps[l] || (ne.cssProps[l] = y(c, l)), a = ne.cssHooks[n] || ne.cssHooks[l], r === t) return a && "get" in a && (i = a.get(e, !1, o)) !== t ? i : c[n];
        if ("string" === (s = typeof r) && (i = ct.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(ne.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || ne.cssNumber[l] || (r += "px"), ne.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (r = a.set(e, r, o)) === t))) try {
          c[n] = r
        } catch (e) {
        }
      }
    },
    css: function (e, n, r, o) {
      var i, s, a, l = ne.camelCase(n);
      return n = ne.cssProps[l] || (ne.cssProps[l] = y(e.style, l)), (a = ne.cssHooks[n] || ne.cssHooks[l]) && "get" in a && (s = a.get(e, !0, r)), s === t && (s = tt(e, n, o)), "normal" === s && n in ft && (s = ft[n]), "" === r || r ? (i = parseFloat(s), !0 === r || ne.isNumeric(i) ? i || 0 : s) : s
    }
  }), e.getComputedStyle ? (et = function (t) {
    return e.getComputedStyle(t, null)
  }, tt = function (e, n, r) {
    var o, i, s, a = r || et(e), l = a ? a.getPropertyValue(n) || a[n] : t, c = e.style;
    return a && ("" !== l || ne.contains(e.ownerDocument, e) || (l = ne.style(e, n)), lt.test(l) && st.test(n) && (o = c.width, i = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = o, c.minWidth = i, c.maxWidth = s)), l
  }) : U.documentElement.currentStyle && (et = function (e) {
    return e.currentStyle
  }, tt = function (e, n, r) {
    var o, i, s, a = r || et(e), l = a ? a[n] : t, c = e.style;
    return null == l && c && c[n] && (l = c[n]), lt.test(l) && !ot.test(n) && (o = c.left, i = e.runtimeStyle, (s = i && i.left) && (i.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, s && (i.left = s)), "" === l ? "auto" : l
  }), ne.each(["height", "width"], function (e, n) {
    ne.cssHooks[n] = {
      get: function (e, r, o) {
        return r ? 0 === e.offsetWidth && it.test(ne.css(e, "display")) ? ne.swap(e, pt, function () {
          return T(e, n, o)
        }) : T(e, n, o) : t
      }, set: function (e, t, r) {
        var o = r && et(e);
        return w(0, t, r ? k(e, n, r, ne.support.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, o), o) : 0)
      }
    }
  }), ne.support.opacity || (ne.cssHooks.opacity = {
    get: function (e, t) {
      return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
      var n = e.style, r = e.currentStyle, o = ne.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        i = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === ne.trim(i.replace(nt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = nt.test(i) ? i.replace(nt, o) : i + " " + o)
    }
  }), ne(function () {
    ne.support.reliableMarginRight || (ne.cssHooks.marginRight = {
      get: function (e, n) {
        return n ? ne.swap(e, {display: "inline-block"}, tt, [e, "marginRight"]) : t
      }
    }), !ne.support.pixelPosition && ne.fn.position && ne.each(["top", "left"], function (e, n) {
      ne.cssHooks[n] = {
        get: function (e, r) {
          return r ? (r = tt(e, n), lt.test(r) ? ne(e).position()[n] + "px" : r) : t
        }
      }
    })
  }), ne.expr && ne.expr.filters && (ne.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ne.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ne.css(e, "display"))
  }, ne.expr.filters.visible = function (e) {
    return !ne.expr.filters.hidden(e)
  }), ne.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    ne.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + dt[r] + t] = i[r] || i[r - 2] || i[0];
        return o
      }
    }, st.test(e) || (ne.cssHooks[e + t].set = w)
  });
  var gt = /%20/g, mt = /\[\]$/, vt = /\r?\n/g, bt = /^(?:submit|button|image|reset|file)$/i,
    yt = /^(?:input|select|textarea|keygen)/i;
  ne.fn.extend({
    serialize: function () {
      return ne.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = ne.prop(this, "elements");
        return e ? ne.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !ne(this).is(":disabled") && yt.test(this.nodeName) && !bt.test(e) && (this.checked || !We.test(e))
      }).map(function (e, t) {
        var n = ne(this).val();
        return null == n ? null : ne.isArray(n) ? ne.map(n, function (e) {
          return {name: t.name, value: e.replace(vt, "\r\n")}
        }) : {name: t.name, value: n.replace(vt, "\r\n")}
      }).get()
    }
  }), ne.param = function (e, n) {
    var r, o = [], i = function (e, t) {
      t = ne.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (n === t && (n = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function () {
      i(this.name, this.value)
    }); else for (r in e) _(r, e[r], n, i);
    return o.join("&").replace(gt, "+")
  }, ne.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    ne.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), ne.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var $t, xt, wt = ne.now(), kt = /\?/, Tt = /#.*$/, St = /([?&])_=[^&]*/, Ct = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    _t = /^(?:GET|HEAD)$/, Pt = /^\/\//, Et = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, At = ne.fn.load, Mt = {},
    Nt = {}, Dt = "*/".concat("*");
  try {
    xt = j.href
  } catch (e) {
    (xt = U.createElement("a")).href = "", xt = xt.href
  }
  $t = Et.exec(xt.toLowerCase()) || [], ne.fn.load = function (e, n, r) {
    if ("string" != typeof e && At) return At.apply(this, arguments);
    var o, i, s, a = this, l = e.indexOf(" ");
    return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), ne.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ne.ajax({
      url: e,
      type: s,
      dataType: "html",
      data: n
    }).done(function (e) {
      i = arguments, a.html(o ? ne("<div>").append(ne.parseHTML(e)).find(o) : e)
    }).complete(r && function (e, t) {
      a.each(r, i || [e.responseText, t, e])
    }), this
  }, ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ne.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), ne.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($t[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": ne.parseJSON, "text xml": ne.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? A(A(e, ne.ajaxSettings), t) : A(ne.ajaxSettings, e)
    },
    ajaxPrefilter: P(Mt),
    ajaxTransport: P(Nt),
    ajax: function (e, n) {
      function r(e, n, r, o) {
        var i, p, b, y, x, k = n;
        2 !== $ && ($ = 2, l && clearTimeout(l), u = t, a = o || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, r && (y = function (e, n, r) {
          for (var o, i, s, a, l = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
          if (i) for (a in l) if (l[a] && l[a].test(i)) {
            c.unshift(a);
            break
          }
          if (c[0] in r) s = c[0]; else {
            for (a in r) {
              if (!c[0] || e.converters[a + " " + c[0]]) {
                s = a;
                break
              }
              o || (o = a)
            }
            s = s || o
          }
          return s ? (s !== c[0] && c.unshift(s), r[s]) : t
        }(f, w, r)), y = function (e, t, n, r) {
          var o, i, s, a, l, c = {}, u = e.dataTypes.slice();
          if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
          for (i = u.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ("*" === i) i = l; else if ("*" !== l && l !== i) {
            if (!(s = c[l + " " + i] || c["* " + i])) for (o in c) if ((a = o.split(" "))[1] === i && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
              !0 === s ? s = c[o] : !0 !== c[o] && (i = a[0], u.unshift(a[1]));
              break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
              t = s(t)
            } catch (e) {
              return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + i}
            }
          }
          return {state: "success", data: t}
        }(f, y, w, i), i ? (f.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (ne.lastModified[s] = x), (x = w.getResponseHeader("etag")) && (ne.etag[s] = x)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, p = y.data, b = y.error, i = !b)) : (b = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || k) + "", i ? g.resolveWith(d, [p, k, w]) : g.rejectWith(d, [w, k, b]), w.statusCode(v), v = t, c && h.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? p : b]), m.fireWith(d, [w, k]), c && (h.trigger("ajaxComplete", [w, f]), --ne.active || ne.event.trigger("ajaxStop")))
      }

      "object" == typeof e && (n = e, e = t), n = n || {};
      var o, i, s, a, l, c, u, p, f = ne.ajaxSetup({}, n), d = f.context || f,
        h = f.context && (d.nodeType || d.jquery) ? ne(d) : ne.event, g = ne.Deferred(),
        m = ne.Callbacks("once memory"), v = f.statusCode || {}, b = {}, y = {}, $ = 0, x = "canceled", w = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === $) {
              if (!p) for (p = {}; t = Ct.exec(a);) p[t[1].toLowerCase()] = t[2];
              t = p[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return 2 === $ ? a : null
          }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return $ || (e = y[n] = y[n] || e, b[e] = t), this
          }, overrideMimeType: function (e) {
            return $ || (f.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (2 > $) for (t in e) v[t] = [v[t], e[t]]; else w.always(e[w.status]);
            return this
          }, abort: function (e) {
            var t = e || x;
            return u && u.abort(t), r(0, t), this
          }
        };
      if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || xt) + "").replace(Tt, "").replace(Pt, $t[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ne.trim(f.dataType || "*").toLowerCase().match(oe) || [""], null == f.crossDomain && (o = Et.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === $t[1] && o[2] === $t[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === ($t[3] || ("http:" === $t[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ne.param(f.data, f.traditional)), E(Mt, f, n, w), 2 === $) return w;
      (c = f.global) && 0 == ne.active++ && ne.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_t.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (kt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = St.test(s) ? s.replace(St, "$1_=" + wt++) : s + (kt.test(s) ? "&" : "?") + "_=" + wt++)), f.ifModified && (ne.lastModified[s] && w.setRequestHeader("If-Modified-Since", ne.lastModified[s]), ne.etag[s] && w.setRequestHeader("If-None-Match", ne.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : f.accepts["*"]);
      for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
      if (f.beforeSend && (!1 === f.beforeSend.call(d, w, f) || 2 === $)) return w.abort();
      x = "abort";
      for (i in{success: 1, error: 1, complete: 1}) w[i](f[i]);
      if (u = E(Nt, f, n, w)) {
        w.readyState = 1, c && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (l = setTimeout(function () {
          w.abort("timeout")
        }, f.timeout));
        try {
          $ = 1, u.send(b, r)
        } catch (e) {
          if (!(2 > $)) throw e;
          r(-1, e)
        }
      } else r(-1, "No Transport");
      return w
    },
    getJSON: function (e, t, n) {
      return ne.get(e, t, n, "json")
    },
    getScript: function (e, n) {
      return ne.get(e, t, n, "script")
    }
  }), ne.each(["get", "post"], function (e, n) {
    ne[n] = function (e, r, o, i) {
      return ne.isFunction(r) && (i = i || o, o = r, r = t), ne.ajax({
        url: e,
        type: n,
        dataType: i,
        data: r,
        success: o
      })
    }
  }), ne.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (e) {
        return ne.globalEval(e), e
      }
    }
  }), ne.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), ne.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n, r = U.head || ne("head")[0] || U.documentElement;
      return {
        send: function (t, o) {
          (n = U.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
          }, r.insertBefore(n, r.firstChild)
        }, abort: function () {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var Ot = [], It = /(=)\?(?=&|$)|\?\?/;
  ne.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Ot.pop() || ne.expando + "_" + wt++;
      return this[e] = !0, e
    }
  }), ne.ajaxPrefilter("json jsonp", function (n, r, o) {
    var i, s, a,
      l = !1 !== n.jsonp && (It.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(n.data) && "data");
    return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = ne.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(It, "$1" + i) : !1 !== n.jsonp && (n.url += (kt.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), n.converters["script json"] = function () {
      return a || ne.error(i + " was not called"), a[0]
    }, n.dataTypes[0] = "json", s = e[i], e[i] = function () {
      a = arguments
    }, o.always(function () {
      e[i] = s, n[i] && (n.jsonpCallback = r.jsonpCallback, Ot.push(i)), a && ne.isFunction(s) && s(a[0]), a = s = t
    }), "script") : t
  });
  var Lt, Bt, Ft = 0, Rt = e.ActiveXObject && function () {
    var e;
    for (e in Lt) Lt[e](t, !0)
  };
  ne.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && M() || function () {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
      }
    }()
  } : M, Bt = ne.ajaxSettings.xhr(), ne.support.cors = !!Bt && "withCredentials" in Bt, (Bt = ne.support.ajax = !!Bt) && ne.ajaxTransport(function (n) {
    if (!n.crossDomain || ne.support.cors) {
      var r;
      return {
        send: function (o, i) {
          var s, a, l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (a in o) l.setRequestHeader(a, o[a])
          } catch (e) {
          }
          l.send(n.hasContent && n.data || null), r = function (e, o) {
            var a, c, u, p;
            try {
              if (r && (o || 4 === l.readyState)) if (r = t, s && (l.onreadystatechange = ne.noop, Rt && delete Lt[s]), o) 4 !== l.readyState && l.abort(); else {
                p = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                try {
                  u = l.statusText
                } catch (e) {
                  u = ""
                }
                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = p.text ? 200 : 404
              }
            } catch (e) {
              o || i(-1, e)
            }
            p && i(a, u, p, c)
          }, n.async ? 4 === l.readyState ? setTimeout(r) : (s = ++Ft, Rt && (Lt || (Lt = {}, ne(e).unload(Rt)), Lt[s] = r), l.onreadystatechange = r) : r()
        }, abort: function () {
          r && r(t, !0)
        }
      }
    }
  });
  var qt, jt, Ut = /^(?:toggle|show|hide)$/, Ht = RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    Vt = /queueHooks$/, zt = [function (e, t, n) {
      var r, o, i, s, a, l, c = this, u = {}, p = e.style, f = e.nodeType && $(e), d = ne._data(e, "fxshow");
      n.queue || (null == (a = ne._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
        a.unqueued || l()
      }), a.unqueued++, c.always(function () {
        c.always(function () {
          a.unqueued--, ne.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ne.css(e, "display") && "none" === ne.css(e, "float") && (ne.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.support.shrinkWrapBlocks || c.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (r in t) if (o = t[r], Ut.exec(o)) {
        if (delete t[r], i = i || "toggle" === o, o === (f ? "hide" : "show")) continue;
        u[r] = d && d[r] || ne.style(e, r)
      }
      if (!ne.isEmptyObject(u)) {
        d ? "hidden" in d && (f = d.hidden) : d = ne._data(e, "fxshow", {}), i && (d.hidden = !f), f ? ne(e).show() : c.done(function () {
          ne(e).hide()
        }), c.done(function () {
          var t;
          ne._removeData(e, "fxshow");
          for (t in u) ne.style(e, t, u[t])
        });
        for (r in u) s = D(f ? d[r] : 0, r, c), r in d || (d[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
      }
    }], Wt = {
      "*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), o = Ht.exec(t), i = o && o[3] || (ne.cssNumber[e] ? "" : "px"),
          s = (ne.cssNumber[e] || "px" !== i && +r) && Ht.exec(ne.css(n.elem, e)), a = 1, l = 20;
        if (s && s[3] !== i) {
          i = i || s[3], o = o || [], s = +r || 1;
          do {
            a = a || ".5", s /= a, ne.style(n.elem, e, s + i)
          } while (a !== (a = n.cur() / r) && 1 !== a && --l)
        }
        return o && (s = n.start = +s || +r || 0, n.unit = i, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
      }]
    };
  ne.Animation = ne.extend(O, {
    tweener: function (e, t) {
      ne.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, r = 0, o = e.length; o > r; r++) n = e[r], Wt[n] = Wt[n] || [], Wt[n].unshift(t)
    }, prefilter: function (e, t) {
      t ? zt.unshift(e) : zt.push(e)
    }
  }), ne.Tween = I, (I.prototype = {
    constructor: I, init: function (e, t, n, r, o, i) {
      this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ne.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = I.propHooks[this.prop];
      return e && e.get ? e.get(this) : I.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = I.propHooks[this.prop];
      return this.pos = t = this.options.duration ? ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
    }
  }).init.prototype = I.prototype, (I.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ne.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
      }, set: function (e) {
        ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ne.cssProps[e.prop]] || ne.cssHooks[e.prop]) ? ne.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }).scrollTop = I.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, ne.each(["toggle", "show", "hide"], function (e, t) {
    var n = ne.fn[t];
    ne.fn[t] = function (e, r, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, r, o)
    }
  }), ne.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter($).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
      var o = ne.isEmptyObject(e), i = ne.speed(t, n, r), s = function () {
        var t = O(this, ne.extend({}, e), i);
        (o || ne._data(this, "finish")) && t.stop(!0)
      };
      return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
    }, stop: function (e, n, r) {
      var o = function (e) {
        var t = e.stop;
        delete e.stop, t(r)
      };
      return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0, n = null != e && e + "queueHooks", i = ne.timers, s = ne._data(this);
        if (n) s[n] && s[n].stop && o(s[n]); else for (n in s) s[n] && s[n].stop && Vt.test(n) && o(s[n]);
        for (n = i.length; n--;) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(r), t = !1, i.splice(n, 1));
        (t || !r) && ne.dequeue(this, e)
      })
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t, n = ne._data(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = ne.timers, s = r ? r.length : 0;
        for (n.finish = !0, ne.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
        for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), ne.each({
    slideDown: L("show"),
    slideUp: L("hide"),
    slideToggle: L("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, t) {
    ne.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), ne.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? ne.extend({}, e) : {
      complete: n || !n && t || ne.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !ne.isFunction(t) && t
    };
    return r.duration = ne.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ne.fx.speeds ? ne.fx.speeds[r.duration] : ne.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      ne.isFunction(r.old) && r.old.call(this), r.queue && ne.dequeue(this, r.queue)
    }, r
  }, ne.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, ne.timers = [], ne.fx = I.prototype.init, ne.fx.tick = function () {
    var e, n = ne.timers, r = 0;
    for (qt = ne.now(); n.length > r; r++) (e = n[r])() || n[r] !== e || n.splice(r--, 1);
    n.length || ne.fx.stop(), qt = t
  }, ne.fx.timer = function (e) {
    e() && ne.timers.push(e) && ne.fx.start()
  }, ne.fx.interval = 13, ne.fx.start = function () {
    jt || (jt = setInterval(ne.fx.tick, ne.fx.interval))
  }, ne.fx.stop = function () {
    clearInterval(jt), jt = null
  }, ne.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ne.fx.step = {}, ne.expr && ne.expr.filters && (ne.expr.filters.animated = function (e) {
    return ne.grep(ne.timers, function (t) {
      return e === t.elem
    }).length
  }), ne.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      ne.offset.setOffset(this, e, t)
    });
    var n, r, o = {top: 0, left: 0}, i = this[0], s = i && i.ownerDocument;
    return s ? (n = s.documentElement, ne.contains(n, i) ? (typeof i.getBoundingClientRect !== q && (o = i.getBoundingClientRect()), r = B(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o) : void 0
  }, ne.offset = {
    setOffset: function (e, t, n) {
      var r = ne.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var o, i, s = ne(e), a = s.offset(), l = ne.css(e, "top"), c = ne.css(e, "left"), u = {}, p = {};
      ("absolute" === r || "fixed" === r) && ne.inArray("auto", [l, c]) > -1 ? (p = s.position(), o = p.top, i = p.left) : (o = parseFloat(l) || 0, i = parseFloat(c) || 0), ne.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (u.top = t.top - a.top + o), null != t.left && (u.left = t.left - a.left + i), "using" in t ? t.using.call(e, u) : s.css(u)
    }
  }, ne.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = {top: 0, left: 0}, r = this[0];
        return "fixed" === ne.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], "html") || (n = e.offset()), n.top += ne.css(e[0], "borderTopWidth", !0), n.left += ne.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - ne.css(r, "marginTop", !0),
          left: t.left - n.left - ne.css(r, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || H; e && !ne.nodeName(e, "html") && "static" === ne.css(e, "position");) e = e.offsetParent;
        return e || H
      })
    }
  }), ne.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
    var r = /Y/.test(n);
    ne.fn[e] = function (o) {
      return ne.access(this, function (e, o, i) {
        var s = B(e);
        return i === t ? s ? n in s ? s[n] : s.document.documentElement[o] : e[o] : (s ? s.scrollTo(r ? ne(s).scrollLeft() : i, r ? i : ne(s).scrollTop()) : e[o] = i, t)
      }, e, o, arguments.length, null)
    }
  }), ne.each({Height: "height", Width: "width"}, function (e, n) {
    ne.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, o) {
      ne.fn[o] = function (o, i) {
        var s = arguments.length && (r || "boolean" != typeof o), a = r || (!0 === o || !0 === i ? "margin" : "border");
        return ne.access(this, function (n, r, o) {
          var i;
          return ne.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : o === t ? ne.css(n, r, a) : ne.style(n, r, o, a)
        }, n, s ? o : t, s, null)
      }
    })
  }), ne.fn.size = function () {
    return this.length
  }, ne.fn.andSelf = ne.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ne : (e.jQuery = e.$ = ne, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ne
  }))
}(window), function (e) {
  "use strict";

  function t() {
    function e(n) {
      var r = this;
      return r instanceof e ? (n instanceof e ? (r.s = n.s, r.e = n.e, r.c = n.c.slice()) : function (e, t) {
        var n, r, o;
        if (0 === t && 0 > 1 / t) t = "-0"; else if (!m.test(t += "")) throw Error(p + "number");
        for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), o = t.length, r = 0; o > r && "0" == t.charAt(r);) ++r;
        if (r == o) e.c = [e.e = 0]; else {
          for (; o > 0 && "0" == t.charAt(--o);) ;
          for (e.e = n - r - 1, e.c = [], n = 0; o >= r;) e.c[n++] = +t.charAt(r++)
        }
      }(r, n), void(r.constructor = e)) : n === g ? t() : new e(n)
    }

    return e.prototype = h, e.DP = i, e.RM = s, e.NE = l, e.PE = c, e.version = "5.0.2", e
  }

  function n(e, t, n, r) {
    var o = e.c, i = e.e + t + 1;
    if (1 === n) r = o[i] >= 5; else if (2 === n) r = o[i] > 5 || 5 == o[i] && (r || 0 > i || o[i + 1] !== g || 1 & o[i - 1]); else if (3 === n) r = r || o[i] !== g || 0 > i; else if (r = !1, 0 !== n) throw Error(p + "rounding mode");
    if (1 > i || !o[0]) o.length = 1, r ? (e.e = -t, o[0] = 1) : o[0] = e.e = 0; else {
      if (o.length = i--, r) for (; ++o[i] > 9;) o[i] = 0, i-- || (++e.e, o.unshift(1));
      for (i = o.length; !o[--i];) o.pop()
    }
    return e
  }

  function r(e, t, r, o) {
    var i, s, l = e.constructor, c = !e.c[0];
    if (r !== g) {
      if (r !== ~~r || (3 == t) > r || r > a) throw Error(3 == t ? p + "precision" : f);
      for (r = o - (e = new l(e)).e, e.c.length > ++o && n(e, r, l.RM), 2 == t && (o = e.e + r + 1); e.c.length < o;) e.c.push(0)
    }
    if (i = e.e, s = e.c.join(""), r = s.length, 2 != t && (1 == t || 3 == t && i >= o || i <= l.NE || i >= l.PE)) s = s.charAt(0) + (r > 1 ? "." + s.slice(1) : "") + (0 > i ? "e" : "e+") + i; else if (0 > i) {
      for (; ++i;) s = "0" + s;
      s = "0." + s
    } else if (i > 0) if (++i > r) for (i -= r; i--;) s += "0"; else r > i && (s = s.slice(0, i) + "." + s.slice(i)); else r > 1 && (s = s.charAt(0) + "." + s.slice(1));
    return e.s < 0 && (!c || 4 == t) ? "-" + s : s
  }

  var o, i = 20, s = 1, a = 1e6, l = -7, c = 21, u = "[big.js] ", p = u + "Invalid ", f = p + "decimal places",
    d = u + "Division by zero", h = {}, g = void 0, m = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  h.abs = function () {
    var e = new this.constructor(this);
    return e.s = 1, e
  }, h.cmp = function (e) {
    var t, n = this, r = n.c, o = (e = new n.constructor(e)).c, i = n.s, s = e.s, a = n.e, l = e.e;
    if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -s : 0;
    if (i != s) return i;
    if (t = 0 > i, a != l) return a > l ^ t ? 1 : -1;
    for (s = (a = r.length) < (l = o.length) ? a : l, i = -1; ++i < s;) if (r[i] != o[i]) return r[i] > o[i] ^ t ? 1 : -1;
    return a == l ? 0 : a > l ^ t ? 1 : -1
  }, h.div = function (e) {
    var t = this, r = t.constructor, o = t.c, i = (e = new r(e)).c, s = t.s == e.s ? 1 : -1, l = r.DP;
    if (l !== ~~l || 0 > l || l > a) throw Error(f);
    if (!i[0]) throw Error(d);
    if (!o[0]) return new r(0 * s);
    var c, u, p, h, m, v = i.slice(), b = c = i.length, y = o.length, $ = o.slice(0, c), x = $.length, w = e,
      k = w.c = [], T = 0, S = l + (w.e = t.e - e.e) + 1;
    for (w.s = s, s = 0 > S ? 0 : S, v.unshift(0); x++ < c;) $.push(0);
    do {
      for (p = 0; 10 > p; p++) {
        if (c != (x = $.length)) h = c > x ? 1 : -1; else for (m = -1, h = 0; ++m < c;) if (i[m] != $[m]) {
          h = i[m] > $[m] ? 1 : -1;
          break
        }
        if (!(0 > h)) break;
        for (u = x == c ? i : v; x;) {
          if ($[--x] < u[x]) {
            for (m = x; m && !$[--m];) $[m] = 9;
            --$[m], $[x] += 10
          }
          $[x] -= u[x]
        }
        for (; !$[0];) $.shift()
      }
      k[T++] = h ? p : ++p, $[0] && h ? $[x] = o[b] || 0 : $ = [o[b]]
    } while ((b++ < y || $[0] !== g) && s--);
    return k[0] || 1 == T || (k.shift(), w.e--), T > S && n(w, l, r.RM, $[0] !== g), w
  }, h.eq = function (e) {
    return !this.cmp(e)
  }, h.gt = function (e) {
    return this.cmp(e) > 0
  }, h.gte = function (e) {
    return this.cmp(e) > -1
  }, h.lt = function (e) {
    return this.cmp(e) < 0
  }, h.lte = function (e) {
    return this.cmp(e) < 1
  }, h.minus = h.sub = function (e) {
    var t, n, r, o, i = this, s = i.constructor, a = i.s, l = (e = new s(e)).s;
    if (a != l) return e.s = -l, i.plus(e);
    var c = i.c.slice(), u = i.e, p = e.c, f = e.e;
    if (!c[0] || !p[0]) return p[0] ? (e.s = -l, e) : new s(c[0] ? i : 0);
    if (a = u - f) {
      for ((o = 0 > a) ? (a = -a, r = c) : (f = u, r = p), r.reverse(), l = a; l--;) r.push(0);
      r.reverse()
    } else for (n = ((o = c.length < p.length) ? c : p).length, a = l = 0; n > l; l++) if (c[l] != p[l]) {
      o = c[l] < p[l];
      break
    }
    if (o && (r = c, c = p, p = r, e.s = -e.s), (l = (n = p.length) - (t = c.length)) > 0) for (; l--;) c[t++] = 0;
    for (l = t; n > a;) {
      if (c[--n] < p[n]) {
        for (t = n; t && !c[--t];) c[t] = 9;
        --c[t], c[n] += 10
      }
      c[n] -= p[n]
    }
    for (; 0 === c[--l];) c.pop();
    for (; 0 === c[0];) c.shift(), --f;
    return c[0] || (e.s = 1, c = [f = 0]), e.c = c, e.e = f, e
  }, h.mod = function (e) {
    var t, n = this, r = n.constructor, o = n.s, i = (e = new r(e)).s;
    if (!e.c[0]) throw Error(d);
    return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = o, e.s = i, t ? new r(n) : (o = r.DP, i = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = o, r.RM = i, this.minus(n.times(e)))
  }, h.plus = h.add = function (e) {
    var t, n = this, r = n.constructor, o = n.s, i = (e = new r(e)).s;
    if (o != i) return e.s = -i, n.minus(e);
    var s = n.e, a = n.c, l = e.e, c = e.c;
    if (!a[0] || !c[0]) return c[0] ? e : new r(a[0] ? n : 0 * o);
    if (a = a.slice(), o = s - l) {
      for (o > 0 ? (l = s, t = c) : (o = -o, t = a), t.reverse(); o--;) t.push(0);
      t.reverse()
    }
    for (a.length - c.length < 0 && (t = c, c = a, a = t), o = c.length, i = 0; o; a[o] %= 10) i = (a[--o] = a[o] + c[o] + i) / 10 | 0;
    for (i && (a.unshift(i), ++l), o = a.length; 0 === a[--o];) a.pop();
    return e.c = a, e.e = l, e
  }, h.pow = function (e) {
    var t = this, n = new t.constructor(1), r = n, o = 0 > e;
    if (e !== ~~e || -1e6 > e || e > 1e6) throw Error(p + "exponent");
    for (o && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
    return o ? n.div(r) : r
  }, h.round = function (e, t) {
    var r = this.constructor;
    if (e === g) e = 0; else if (e !== ~~e || 0 > e || e > a) throw Error(f);
    return n(new r(this), e, t === g ? r.RM : t)
  }, h.sqrt = function () {
    var e, t, r, o = this, i = o.constructor, s = o.s, a = o.e, l = new i(.5);
    if (!o.c[0]) return new i(o);
    if (0 > s) throw Error(u + "No square root");
    0 === (s = Math.sqrt(o.toString())) || s === 1 / 0 ? ((t = o.c.join("")).length + a & 1 || (t += "0"), e = new i(Math.sqrt(t).toString()), e.e = ((a + 1) / 2 | 0) - (0 > a || 1 & a)) : e = new i(s.toString()), a = e.e + (i.DP += 4);
    do {
      r = e, e = l.times(r.plus(o.div(r)))
    } while (r.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
    return n(e, i.DP -= 4, i.RM)
  }, h.times = h.mul = function (e) {
    var t, n = this, r = n.constructor, o = n.c, i = (e = new r(e)).c, s = o.length, a = i.length, l = n.e, c = e.e;
    if (e.s = n.s == e.s ? 1 : -1, !o[0] || !i[0]) return new r(0 * e.s);
    for (e.e = l + c, a > s && (t = o, o = i, i = t, c = s, s = a, a = c), t = new Array(c = s + a); c--;) t[c] = 0;
    for (l = a; l--;) {
      for (a = 0, c = s + l; c > l;) a = t[c] + i[l] * o[c - l - 1] + a, t[c--] = a % 10, a = a / 10 | 0;
      t[c] = (t[c] + a) % 10
    }
    for (a ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
    return e.c = t, e
  }, h.toExponential = function (e) {
    return r(this, 1, e, e)
  }, h.toFixed = function (e) {
    return r(this, 2, e, this.e + e)
  }, h.toPrecision = function (e) {
    return r(this, 3, e, e - 1)
  }, h.toString = function () {
    return r(this)
  }, h.valueOf = h.toJSON = function () {
    return r(this, 4)
  }, (o = t()).default = o.Big = o, "function" == typeof define && define.amd ? define(function () {
    return o
  }) : "undefined" != typeof module && module.exports ? module.exports = o : e.Big = o
}(this), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
  function t(t) {
    var o, i = t || window.event, s = [].slice.call(arguments, 1), a = 0, l = 0, c = 0, u = 0, p = 0;
    return t = e.event.fix(i), t.type = "mousewheel", i.wheelDelta && (a = i.wheelDelta), i.detail && (a = -1 * i.detail), i.deltaY && (a = c = -1 * i.deltaY), i.deltaX && (a = -1 * (l = i.deltaX)), void 0 !== i.wheelDeltaY && (c = i.wheelDeltaY), void 0 !== i.wheelDeltaX && (l = -1 * i.wheelDeltaX), u = Math.abs(a), (!n || u < n) && (n = u), p = Math.max(Math.abs(c), Math.abs(l)), (!r || p < r) && (r = p), o = a > 0 ? "floor" : "ceil", a = Math[o](a / n), l = Math[o](l / r), c = Math[o](c / r), s.unshift(t, a, l, c), (e.event.dispatch || e.event.handle).apply(this, s)
  }

  var n, r, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
  if (e.event.fixHooks) for (var s = o.length; s;) e.event.fixHooks[o[--s]] = e.event.mouseHooks;
  e.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) for (var e = i.length; e;) this.addEventListener(i[--e], t, !1); else this.onmousewheel = t
    }, teardown: function () {
      if (this.removeEventListener) for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1); else this.onmousewheel = null
    }
  }, e.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    }, unmousewheel: function (e) {
      return this.unbind("mousewheel", e)
    }
  })
}), function (e) {
  var t = function () {
    var t = 65, n = {
      eventName: "click", onShow: function () {
      }, onBeforeShow: function () {
      }, onHide: function () {
      }, onChange: function () {
      }, onSubmit: function () {
      }, color: "ff0000", livePreview: !0, flat: !1
    }, r = function (t, n) {
      var r = C(t);
      e(n).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()
    }, o = function (t, n) {
      e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()
    }, i = function (t, n) {
      e(n).data("colorpicker").fields.eq(0).val(_(t)).end()
    }, s = function (t, n) {
      e(n).data("colorpicker").selector.css("backgroundColor", "#" + _({
        h: t.h,
        s: 100,
        b: 100
      })), e(n).data("colorpicker").selectorIndic.css({
        left: parseInt(150 * t.s / 100, 10),
        top: parseInt(150 * (100 - t.b) / 100, 10)
      })
    }, a = function (t, n) {
      e(n).data("colorpicker").hue.css("top", parseInt(150 - 150 * t.h / 360, 10))
    }, l = function (t, n) {
      e(n).data("colorpicker").currentColor.css("backgroundColor", "#" + _(t))
    }, c = function (t, n) {
      e(n).data("colorpicker").newColor.css("backgroundColor", "#" + _(t))
    }, u = function (t) {
      var n, l = e(this).parent().parent();
      this.parentNode.className.indexOf("_hex") > 0 ? l.data("colorpicker").color = n = T(k(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? l.data("colorpicker").color = n = x({
        h: parseInt(l.data("colorpicker").fields.eq(4).val(), 10),
        s: parseInt(l.data("colorpicker").fields.eq(5).val(), 10),
        b: parseInt(l.data("colorpicker").fields.eq(6).val(), 10)
      }) : l.data("colorpicker").color = n = S(w({
        r: parseInt(l.data("colorpicker").fields.eq(1).val(), 10),
        g: parseInt(l.data("colorpicker").fields.eq(2).val(), 10),
        b: parseInt(l.data("colorpicker").fields.eq(3).val(), 10)
      })), t && (r(n, l.get(0)), i(n, l.get(0)), o(n, l.get(0))), s(n, l.get(0)), a(n, l.get(0)), c(n, l.get(0)), l.data("colorpicker").onChange.apply(l, [n, _(n), C(n)])
    }, p = function (e) {
      return e.data.field.val(Math.max(0, Math.min(e.data.max, parseInt(e.data.val + e.pageY - e.data.y, 10)))), e.data.preview && u.apply(e.data.field.get(0), [!0]), !1
    }, f = function (t) {
      return u.apply(t.data.field.get(0), [!0]), t.data.el.removeClass("colorpicker_slider").find("input").focus(), e(document).unbind("mouseup", f), e(document).unbind("mousemove", p), !1
    }, d = function (e) {
      return u.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.y))) / 150, 10)).get(0), [e.data.preview]), !1
    }, h = function (t) {
      return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), i(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", h), e(document).unbind("mousemove", d), !1
    }, g = function (e) {
      return u.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, e.pageX - e.data.pos.left)) / 150, 10)).get(0), [e.data.preview]), !1
    }, m = function (t) {
      return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), i(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", m), e(document).unbind("mousemove", g), !1
    }, v = function (t) {
      var n = e("#" + e(this).data("colorpickerId"));
      n.data("colorpicker").onBeforeShow.apply(this, [n.get(0)]);
      var r = e(this).offset(), o = $(), i = r.top + this.offsetHeight, s = r.left;
      return i + 176 > o.t + o.h && (i -= this.offsetHeight + 176), s + 356 > o.l + o.w && (s -= 356), n.css({
        left: s + "px",
        top: i + "px"
      }), 0 != n.data("colorpicker").onShow.apply(this, [n.get(0)]) && n.show(), e(document).bind("mousedown", {cal: n}, b), !1
    }, b = function (t) {
      y(t.data.cal.get(0), t.target, t.data.cal.get(0)) || (0 != t.data.cal.data("colorpicker").onHide.apply(this, [t.data.cal.get(0)]) && t.data.cal.hide(), e(document).unbind("mousedown", b))
    }, y = function (e, t, n) {
      if (e == t) return !0;
      if (e.contains) return e.contains(t);
      if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
      for (var r = t.parentNode; r && r != n;) {
        if (r == e) return !0;
        r = r.parentNode
      }
      return !1
    }, $ = function () {
      var e = "CSS1Compat" == document.compatMode;
      return {
        l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
        t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
        w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
        h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
      }
    }, x = function (e) {
      return {
        h: Math.min(360, Math.max(0, e.h)),
        s: Math.min(100, Math.max(0, e.s)),
        b: Math.min(100, Math.max(0, e.b))
      }
    }, w = function (e) {
      return {
        r: Math.min(255, Math.max(0, e.r)),
        g: Math.min(255, Math.max(0, e.g)),
        b: Math.min(255, Math.max(0, e.b))
      }
    }, k = function (e) {
      var t = 6 - e.length;
      if (t > 0) {
        for (var n = [], r = 0; r < t; r++) n.push("0");
        n.push(e), e = n.join("")
      }
      return e
    }, T = function (e) {
      return S(function (e) {
        return {r: (e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16)) >> 16, g: (65280 & e) >> 8, b: 255 & e}
      }(e))
    }, S = function (e) {
      var t = {h: 0, s: 0, b: 0}, n = Math.min(e.r, e.g, e.b), r = Math.max(e.r, e.g, e.b), o = r - n;
      return t.b = r, t.s = 0 != r ? 255 * o / r : 0, 0 != t.s ? e.r == r ? t.h = (e.g - e.b) / o : e.g == r ? t.h = 2 + (e.b - e.r) / o : t.h = 4 + (e.r - e.g) / o : t.h = -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
    }, C = function (e) {
      var t = {}, n = Math.round(e.h), r = Math.round(255 * e.s / 100), o = Math.round(255 * e.b / 100);
      if (0 == r) t.r = t.g = t.b = o; else {
        var i = o, s = (255 - r) * o / 255, a = n % 60 * (i - s) / 60;
        360 == n && (n = 0), n < 60 ? (t.r = i, t.b = s, t.g = s + a) : n < 120 ? (t.g = i, t.b = s, t.r = i - a) : n < 180 ? (t.g = i, t.r = s, t.b = s + a) : n < 240 ? (t.b = i, t.r = s, t.g = i - a) : n < 300 ? (t.b = i, t.g = s, t.r = s + a) : n < 360 ? (t.r = i, t.g = s, t.b = i - a) : (t.r = 0, t.g = 0, t.b = 0)
      }
      return {r: Math.round(t.r), g: Math.round(t.g), b: Math.round(t.b)}
    }, _ = function (t) {
      return function (t) {
        var n = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
        return e.each(n, function (e, t) {
          1 == t.length && (n[e] = "0" + t)
        }), n.join("")
      }(C(t))
    };
    return {
      init: function (b) {
        if ("string" == typeof(b = e.extend({}, n, b || {})).color) b.color = T(b.color); else if (void 0 != b.color.r && void 0 != b.color.g && void 0 != b.color.b) b.color = S(b.color); else {
          if (void 0 == b.color.h || void 0 == b.color.s || void 0 == b.color.b) return this;
          b.color = x(b.color)
        }
        return this.each(function () {
          if (!e(this).data("colorpickerId")) {
            var n = e.extend({}, b);
            n.origColor = b.color;
            var y = "collorpicker_" + parseInt(1e3 * Math.random());
            e(this).data("colorpickerId", y);
            var $ = e('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id", y);
            n.flat ? $.appendTo(this).show() : $.appendTo(document.body), n.fields = $.find("input").bind("keyup", function (n) {
              var r = n.charCode || n.keyCode || -1;
              if (r > t && r <= 90 || 32 == r) return !1;
              !0 === e(this).parent().parent().data("colorpicker").livePreview && u.apply(this)
            }).bind("change", u).bind("blur", function (t) {
              e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")
            }).bind("focus", function () {
              t = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), e(this).parent().addClass("colorpicker_focus")
            }), $.find("span").bind("mousedown", function (t) {
              var n = e(this).parent().find("input").focus(), r = {
                el: e(this).parent().addClass("colorpicker_slider"),
                max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                y: t.pageY,
                field: n,
                val: parseInt(n.val(), 10),
                preview: e(this).parent().parent().data("colorpicker").livePreview
              };
              e(document).bind("mouseup", r, f), e(document).bind("mousemove", r, p)
            }).end().find(">div.colorpicker_current_color").bind("click", function () {
              var t = e(this).parent(), n = t.data("colorpicker").origColor;
              t.data("colorpicker").color = n, r(n, t.get(0)), i(n, t.get(0)), o(n, t.get(0)), s(n, t.get(0)), a(n, t.get(0)), c(n, t.get(0))
            }), n.selector = $.find("div.colorpicker_color").bind("mousedown", function (t) {
              var n = {cal: e(this).parent(), pos: e(this).offset()};
              n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, m), e(document).bind("mousemove", n, g)
            }), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = $.find("div.colorpicker_hue div"), $.find("div.colorpicker_hue").bind("mousedown", function (t) {
              var n = {cal: e(this).parent(), y: e(this).offset().top};
              n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, h), e(document).bind("mousemove", n, d)
            }), n.newColor = $.find("div.colorpicker_new_color"), n.currentColor = $.find("div.colorpicker_current_color"), $.data("colorpicker", n), $.find("div.colorpicker_submit").bind("mouseenter", function (t) {
              e(this).addClass("colorpicker_focus")
            }).bind("mouseleave", function (t) {
              e(this).removeClass("colorpicker_focus")
            }).bind("click", function (t) {
              var n = e(this).parent(), r = n.data("colorpicker").color;
              n.data("colorpicker").origColor = r, l(r, n.get(0)), n.data("colorpicker").onSubmit(r, _(r), C(r), n.data("colorpicker").el)
            }), r(n.color, $.get(0)), o(n.color, $.get(0)), i(n.color, $.get(0)), a(n.color, $.get(0)), s(n.color, $.get(0)), l(n.color, $.get(0)), c(n.color, $.get(0)), n.flat ? $.css({
              position: "relative",
              display: "block"
            }) : e(this).bind(n.eventName, v)
          }
        })
      }, showPicker: function () {
        return this.each(function () {
          e(this).data("colorpickerId") && v.apply(this)
        })
      }, hidePicker: function () {
        return this.each(function () {
          e(this).data("colorpickerId") && e("#" + e(this).data("colorpickerId")).hide()
        })
      }, setColor: function (t) {
        if ("string" == typeof t) t = T(t); else if (void 0 != t.r && void 0 != t.g && void 0 != t.b) t = S(t); else {
          if (void 0 == t.h || void 0 == t.s || void 0 == t.b) return this;
          t = x(t)
        }
        return this.each(function () {
          if (e(this).data("colorpickerId")) {
            var n = e("#" + e(this).data("colorpickerId"));
            n.data("colorpicker").color = t, n.data("colorpicker").origColor = t, r(t, n.get(0)), o(t, n.get(0)), i(t, n.get(0)), a(t, n.get(0)), s(t, n.get(0)), l(t, n.get(0)), c(t, n.get(0))
          }
        })
      }
    }
  }();
  e.fn.extend({
    ColorPicker: t.init,
    ColorPickerHide: t.hidePicker,
    ColorPickerShow: t.showPicker,
    ColorPickerSetColor: t.setColor,
    ColorPicker: t.init,
    ColorPickerHide: t.hidePicker,
    ColorPickerShow: t.showPicker,
    ColorPickerSetColor: t.setColor
  })
}(jQuery), function (e) {
  var t = function (e, t) {
    return e << t | e >>> 32 - t
  }, n = function (e, t) {
    var n, r, o, i, s;
    return o = 2147483648 & e, i = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, s = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ s ^ o ^ i : n | r ? 1073741824 & s ? 3221225472 ^ s ^ o ^ i : 1073741824 ^ s ^ o ^ i : s ^ o ^ i
  }, r = function (e, r, o, i, s, a, l) {
    return e = n(e, n(n(function (e, t, n) {
      return e & t | ~e & n
    }(r, o, i), s), l)), n(t(e, a), r)
  }, o = function (e, r, o, i, s, a, l) {
    return e = n(e, n(n(function (e, t, n) {
      return e & n | t & ~n
    }(r, o, i), s), l)), n(t(e, a), r)
  }, i = function (e, r, o, i, s, a, l) {
    return e = n(e, n(n(function (e, t, n) {
      return e ^ t ^ n
    }(r, o, i), s), l)), n(t(e, a), r)
  }, s = function (e, r, o, i, s, a, l) {
    return e = n(e, n(n(function (e, t, n) {
      return t ^ (e | ~n)
    }(r, o, i), s), l)), n(t(e, a), r)
  }, a = function (e) {
    var t, n = "", r = "";
    for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
    return n
  };
  jQuery.extend({
    md5: function (e) {
      var t, l, c, u, p, f, d, h, g, m = Array();
      for (m = function (e) {
        for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), s = 0, a = 0; a < n;) s = a % 4 * 8, i[t = (a - a % 4) / 4] = i[t] | e.charCodeAt(a) << s, a++;
        return t = (a - a % 4) / 4, s = a % 4 * 8, i[t] = i[t] | 128 << s, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i
      }(e = function (e) {
        e = e.replace(/\x0d\x0a/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
        }
        return t
      }(e)), f = 1732584193, d = 4023233417, h = 2562383102, g = 271733878, t = 0; t < m.length; t += 16) l = f, c = d, u = h, p = g, f = r(f, d, h, g, m[t + 0], 7, 3614090360), g = r(g, f, d, h, m[t + 1], 12, 3905402710), h = r(h, g, f, d, m[t + 2], 17, 606105819), d = r(d, h, g, f, m[t + 3], 22, 3250441966), f = r(f, d, h, g, m[t + 4], 7, 4118548399), g = r(g, f, d, h, m[t + 5], 12, 1200080426), h = r(h, g, f, d, m[t + 6], 17, 2821735955), d = r(d, h, g, f, m[t + 7], 22, 4249261313), f = r(f, d, h, g, m[t + 8], 7, 1770035416), g = r(g, f, d, h, m[t + 9], 12, 2336552879), h = r(h, g, f, d, m[t + 10], 17, 4294925233), d = r(d, h, g, f, m[t + 11], 22, 2304563134), f = r(f, d, h, g, m[t + 12], 7, 1804603682), g = r(g, f, d, h, m[t + 13], 12, 4254626195), h = r(h, g, f, d, m[t + 14], 17, 2792965006), d = r(d, h, g, f, m[t + 15], 22, 1236535329), f = o(f, d, h, g, m[t + 1], 5, 4129170786), g = o(g, f, d, h, m[t + 6], 9, 3225465664), h = o(h, g, f, d, m[t + 11], 14, 643717713), d = o(d, h, g, f, m[t + 0], 20, 3921069994), f = o(f, d, h, g, m[t + 5], 5, 3593408605), g = o(g, f, d, h, m[t + 10], 9, 38016083), h = o(h, g, f, d, m[t + 15], 14, 3634488961), d = o(d, h, g, f, m[t + 4], 20, 3889429448), f = o(f, d, h, g, m[t + 9], 5, 568446438), g = o(g, f, d, h, m[t + 14], 9, 3275163606), h = o(h, g, f, d, m[t + 3], 14, 4107603335), d = o(d, h, g, f, m[t + 8], 20, 1163531501), f = o(f, d, h, g, m[t + 13], 5, 2850285829), g = o(g, f, d, h, m[t + 2], 9, 4243563512), h = o(h, g, f, d, m[t + 7], 14, 1735328473), d = o(d, h, g, f, m[t + 12], 20, 2368359562), f = i(f, d, h, g, m[t + 5], 4, 4294588738), g = i(g, f, d, h, m[t + 8], 11, 2272392833), h = i(h, g, f, d, m[t + 11], 16, 1839030562), d = i(d, h, g, f, m[t + 14], 23, 4259657740), f = i(f, d, h, g, m[t + 1], 4, 2763975236), g = i(g, f, d, h, m[t + 4], 11, 1272893353), h = i(h, g, f, d, m[t + 7], 16, 4139469664), d = i(d, h, g, f, m[t + 10], 23, 3200236656), f = i(f, d, h, g, m[t + 13], 4, 681279174), g = i(g, f, d, h, m[t + 0], 11, 3936430074), h = i(h, g, f, d, m[t + 3], 16, 3572445317), d = i(d, h, g, f, m[t + 6], 23, 76029189), f = i(f, d, h, g, m[t + 9], 4, 3654602809), g = i(g, f, d, h, m[t + 12], 11, 3873151461), h = i(h, g, f, d, m[t + 15], 16, 530742520), d = i(d, h, g, f, m[t + 2], 23, 3299628645), f = s(f, d, h, g, m[t + 0], 6, 4096336452), g = s(g, f, d, h, m[t + 7], 10, 1126891415), h = s(h, g, f, d, m[t + 14], 15, 2878612391), d = s(d, h, g, f, m[t + 5], 21, 4237533241), f = s(f, d, h, g, m[t + 12], 6, 1700485571), g = s(g, f, d, h, m[t + 3], 10, 2399980690), h = s(h, g, f, d, m[t + 10], 15, 4293915773), d = s(d, h, g, f, m[t + 1], 21, 2240044497), f = s(f, d, h, g, m[t + 8], 6, 1873313359), g = s(g, f, d, h, m[t + 15], 10, 4264355552), h = s(h, g, f, d, m[t + 6], 15, 2734768916), d = s(d, h, g, f, m[t + 13], 21, 1309151649), f = s(f, d, h, g, m[t + 4], 6, 4149444226), g = s(g, f, d, h, m[t + 11], 10, 3174756917), h = s(h, g, f, d, m[t + 2], 15, 718787259), d = s(d, h, g, f, m[t + 9], 21, 3951481745), f = n(f, l), d = n(d, c), h = n(h, u), g = n(g, p);
      return (a(f) + a(d) + a(h) + a(g)).toLowerCase()
    }
  })
}(), function (e, t, n) {
  "use strict";

  function r(e) {
    return function () {
      var t, n = arguments[0],
        n = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.2.28/" + (e ? e + "/" : "") + n;
      for (t = 1; t < arguments.length; t++) n = n + (1 == t ? "?" : "&") + "p" + (t - 1) + "=" + encodeURIComponent("function" == typeof arguments[t] ? arguments[t].toString().replace(/ \{[\s\S]*$/, "") : void 0 === arguments[t] ? "undefined" : "string" != typeof arguments[t] ? JSON.stringify(arguments[t]) : arguments[t]);
      return Error(n)
    }
  }

  function o(e) {
    if (null == e || T(e)) return !1;
    var t = e.length;
    return !(1 !== e.nodeType || !t) || (y(e) || mt(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  function i(e, t, n) {
    var r;
    if (e) if (w(e)) for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r); else if (mt(e) || o(e)) for (r = 0; r < e.length; r++) t.call(n, e[r], r); else if (e.forEach && e.forEach !== i) e.forEach(t, n); else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
    return e
  }

  function s(e) {
    var t, n = [];
    for (t in e) e.hasOwnProperty(t) && n.push(t);
    return n.sort()
  }

  function a(e) {
    return function (t, n) {
      e(n, t)
    }
  }

  function l() {
    for (var e, t = gt.length; t;) {
      if (t--, 57 == (e = gt[t].charCodeAt(0))) return gt[t] = "A", gt.join("");
      if (90 != e) return gt[t] = String.fromCharCode(e + 1), gt.join("");
      gt[t] = "0"
    }
    return gt.unshift("0"), gt.join("")
  }

  function c(e, t) {
    t ? e.$$hashKey = t : delete e.$$hashKey
  }

  function u(e) {
    var t = e.$$hashKey;
    return i(arguments, function (t) {
      t !== e && i(t, function (t, n) {
        e[n] = t
      })
    }), c(e, t), e
  }

  function p(e) {
    return parseInt(e, 10)
  }

  function f(e, t) {
    return u(new (u(function () {
    }, {prototype: e})), t)
  }

  function d() {
  }

  function h(e) {
    return e
  }

  function g(e) {
    return function () {
      return e
    }
  }

  function m(e) {
    return void 0 === e
  }

  function v(e) {
    return void 0 !== e
  }

  function b(e) {
    return null != e && "object" == typeof e
  }

  function y(e) {
    return "string" == typeof e
  }

  function $(e) {
    return "number" == typeof e
  }

  function x(e) {
    return "[object Date]" === ft.call(e)
  }

  function w(e) {
    return "function" == typeof e
  }

  function k(e) {
    return "[object RegExp]" === ft.call(e)
  }

  function T(e) {
    return e && e.document && e.location && e.alert && e.setInterval
  }

  function S(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
    return -1
  }

  function C(e, t) {
    var n = S(e, t);
    return 0 <= n && e.splice(n, 1), t
  }

  function _(e, t, n, r) {
    if (T(e) || e && e.$evalAsync && e.$watch) throw dt("cpws");
    if (t) {
      if (e === t) throw dt("cpi");
      if (n = n || [], r = r || [], b(e)) {
        var o = S(n, e);
        if (-1 !== o) return r[o];
        n.push(e), r.push(t)
      }
      if (mt(e)) for (var s = t.length = 0; s < e.length; s++) o = _(e[s], null, n, r), b(e[s]) && (n.push(e[s]), r.push(o)), t.push(o); else {
        var a = t.$$hashKey;
        mt(t) ? t.length = 0 : i(t, function (e, n) {
          delete t[n]
        });
        for (s in e) o = _(e[s], null, n, r), b(e[s]) && (n.push(e[s]), r.push(o)), t[s] = o;
        c(t, a)
      }
    } else (t = e) && (mt(e) ? t = _(e, [], n, r) : x(e) ? t = new Date(e.getTime()) : k(e) ? (t = RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : b(e) && (t = _(e, {}, n, r)));
    return t
  }

  function P(e, t) {
    if (mt(e)) {
      t = t || [];
      for (var n = 0; n < e.length; n++) t[n] = e[n]
    } else if (b(e)) for (n in t = t || {}, e) !lt.call(e, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (t[n] = e[n]);
    return t || e
  }

  function E(e, t) {
    if (e === t) return !0;
    if (null === e || null === t) return !1;
    if (e != e && t != t) return !0;
    var r, o = typeof e;
    if (o == typeof t && "object" == o) {
      if (!mt(e)) {
        if (x(e)) return !!x(t) && (isNaN(e.getTime()) && isNaN(t.getTime()) || e.getTime() === t.getTime());
        if (k(e) && k(t)) return e.toString() == t.toString();
        if (e && e.$evalAsync && e.$watch || t && t.$evalAsync && t.$watch || T(e) || T(t) || mt(t)) return !1;
        o = {};
        for (r in e) if ("$" !== r.charAt(0) && !w(e[r])) {
          if (!E(e[r], t[r])) return !1;
          o[r] = !0
        }
        for (r in t) if (!o.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== n && !w(t[r])) return !1;
        return !0
      }
      if (!mt(t)) return !1;
      if ((o = e.length) == t.length) {
        for (r = 0; r < o; r++) if (!E(e[r], t[r])) return !1;
        return !0
      }
    }
    return !1
  }

  function A(e, t) {
    var n = 2 < arguments.length ? ut.call(arguments, 2) : [];
    return !w(t) || t instanceof RegExp ? t : n.length ? function () {
      return arguments.length ? t.apply(e, n.concat(ut.call(arguments, 0))) : t.apply(e, n)
    } : function () {
      return arguments.length ? t.apply(e, arguments) : t.call(e)
    }
  }

  function M(e, r) {
    return void 0 === e ? n : JSON.stringify(e, function (e, r) {
      var o = r;
      return "string" == typeof e && "$" === e.charAt(0) ? o = n : T(r) ? o = "$WINDOW" : r && t === r ? o = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (o = "$SCOPE"), o
    }, r ? "  " : null)
  }

  function N(e) {
    return y(e) ? JSON.parse(e) : e
  }

  function D(e) {
    return "function" == typeof e ? e = !0 : e && 0 !== e.length ? (e = at("" + e), e = !("f" == e || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e)) : e = !1, e
  }

  function O(e) {
    e = nt(e).clone();
    try {
      e.empty()
    } catch (e) {
    }
    var t = nt("<div>").append(e).html();
    try {
      return 3 === e[0].nodeType ? at(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
        return "<" + at(t)
      })
    } catch (e) {
      return at(t)
    }
  }

  function I(e) {
    try {
      return decodeURIComponent(e)
    } catch (e) {
    }
  }

  function L(e) {
    var t, n, r = {};
    return i((e || "").split("&"), function (e) {
      e && (t = e.replace(/\+/g, "%20").split("="), n = I(t[0]), v(n) && (e = !v(t[1]) || I(t[1]), lt.call(r, n) ? mt(r[n]) ? r[n].push(e) : r[n] = [r[n], e] : r[n] = e))
    }), r
  }

  function B(e) {
    var t = [];
    return i(e, function (e, n) {
      mt(e) ? i(e, function (e) {
        t.push(R(n, !0) + (!0 === e ? "" : "=" + R(e, !0)))
      }) : t.push(R(n, !0) + (!0 === e ? "" : "=" + R(e, !0)))
    }), t.length ? t.join("&") : ""
  }

  function F(e) {
    return R(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function R(e, t) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
  }

  function q(n, r) {
    var o = function () {
      if ((n = nt(n)).injector()) {
        var e = n[0] === t ? "document" : O(n);
        throw dt("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
      }
      return (r = r || []).unshift(["$provide", function (e) {
        e.value("$rootElement", n)
      }]), r.unshift("ng"), (e = de(r)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (e, t, n, r, o) {
        e.$apply(function () {
          t.data("$injector", r), n(t)(e)
        })
      }]), e
    }, s = /^NG_DEFER_BOOTSTRAP!/;
    if (e && !s.test(e.name)) return o();
    e.name = e.name.replace(s, ""), ht.resumeBootstrap = function (e) {
      i(e, function (e) {
        r.push(e)
      }), o()
    }
  }

  function j(e, t) {
    return t = t || "_", e.replace(yt, function (e, n) {
      return (n ? t : "") + e.toLowerCase()
    })
  }

  function U(e, t, n) {
    if (!e) throw dt("areq", t || "?", n || "required");
    return e
  }

  function H(e, t, n) {
    return n && mt(e) && (e = e[e.length - 1]), U(w(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
  }

  function V(e, t) {
    if ("hasOwnProperty" === e) throw dt("badname", t)
  }

  function z(e, t, n) {
    if (!t) return e;
    for (var r, o = e, i = (t = t.split(".")).length, s = 0; s < i; s++) r = t[s], e && (e = (o = e)[r]);
    return !n && w(e) ? A(o, e) : e
  }

  function W(e) {
    var t = e[0];
    if (e = e[e.length - 1], t === e) return nt(t);
    var n = [t];
    do {
      if (!(t = t.nextSibling)) break;
      n.push(t)
    } while (t !== e);
    return nt(n)
  }

  function G(e) {
    return e.replace(St, function (e, t, n, r) {
      return r ? n.toUpperCase() : n
    }).replace(Ct, "Moz$1")
  }

  function Y(e, t, n, r) {
    function o(e) {
      var o, s, a, l, c, u, p = n && e ? [this.filter(e)] : [this], f = t;
      if (!r || null != e) for (; p.length;) for (o = p.shift(), s = 0, a = o.length; s < a; s++) for (l = nt(o[s]), f ? l.triggerHandler("$destroy") : f = !f, c = 0, l = (u = l.children()).length; c < l; c++) p.push(rt(u[c]));
      return i.apply(this, arguments)
    }

    var i = (i = rt.fn[e]).$original || i;
    o.$original = i, rt.fn[e] = o
  }

  function Q(e) {
    if (e instanceof Q) return e;
    if (y(e) && (e = vt(e)), !(this instanceof Q)) {
      if (y(e) && "<" != e.charAt(0)) throw _t("nosel");
      return new Q(e)
    }
    if (y(e)) {
      var n = e;
      e = t;
      var r;
      if (r = Pt.exec(n)) e = [e.createElement(r[1])]; else {
        var o, i = e;
        if (e = i.createDocumentFragment(), r = [], Et.test(n)) {
          for (i = e.appendChild(i.createElement("div")), o = (At.exec(n) || ["", ""])[1].toLowerCase(), o = Nt[o] || Nt._default, i.innerHTML = "<div>&#160;</div>" + o[1] + n.replace(Mt, "<$1></$2>") + o[2], i.removeChild(i.firstChild), n = o[0]; n--;) i = i.lastChild;
          for (n = 0, o = i.childNodes.length; n < o; ++n) r.push(i.childNodes[n]);
          (i = e.firstChild).textContent = ""
        } else r.push(i.createTextNode(n));
        e.textContent = "", e.innerHTML = "", e = r
      }
      ie(this, e), nt(t.createDocumentFragment()).append(this)
    } else ie(this, e)
  }

  function K(e) {
    return e.cloneNode(!0)
  }

  function X(e) {
    Z(e);
    var t = 0;
    for (e = e.childNodes || []; t < e.length; t++) X(e[t])
  }

  function J(e, t, n, r) {
    if (v(r)) throw _t("offargs");
    var o = ee(e, "events");
    ee(e, "handle") && (m(t) ? i(o, function (t, n) {
      Tt(e, n, t), delete o[n]
    }) : i(t.split(" "), function (t) {
      m(n) ? (Tt(e, t, o[t]), delete o[t]) : C(o[t] || [], n)
    }))
  }

  function Z(e, t) {
    var r = e.ng339, o = xt[r];
    o && (t ? delete xt[r].data[t] : (o.handle && (o.events.$destroy && o.handle({}, "$destroy"), J(e)), delete xt[r], e.ng339 = n))
  }

  function ee(e, t, n) {
    var r = e.ng339, r = xt[r || -1];
    if (!v(n)) return r && r[t];
    r || (e.ng339 = r = ++wt, r = xt[r] = {}), r[t] = n
  }

  function te(e, t, n) {
    var r = ee(e, "data"), o = v(n), i = !o && v(t), s = i && !b(t);
    if (r || s || ee(e, "data", r = {}), o) r[t] = n; else {
      if (!i) return r;
      if (s) return r && r[t];
      u(r, t)
    }
  }

  function ne(e, t) {
    return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
  }

  function re(e, t) {
    t && e.setAttribute && i(t.split(" "), function (t) {
      e.setAttribute("class", vt((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + vt(t) + " ", " ")))
    })
  }

  function oe(e, t) {
    if (t && e.setAttribute) {
      var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      i(t.split(" "), function (e) {
        e = vt(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
      }), e.setAttribute("class", vt(n))
    }
  }

  function ie(e, t) {
    if (t) {
      t = t.nodeName || !v(t.length) || T(t) ? [t] : t;
      for (var n = 0; n < t.length; n++) e.push(t[n])
    }
  }

  function se(e, t) {
    return ae(e, "$" + (t || "ngController") + "Controller")
  }

  function ae(e, t, r) {
    for (9 == e.nodeType && (e = e.documentElement), t = mt(t) ? t : [t]; e;) {
      for (var o = 0, i = t.length; o < i; o++) if ((r = nt.data(e, t[o])) !== n) return r;
      e = e.parentNode || 11 === e.nodeType && e.host
    }
  }

  function le(e) {
    for (var t = 0, n = e.childNodes; t < n.length; t++) X(n[t]);
    for (; e.firstChild;) e.removeChild(e.firstChild)
  }

  function ce(e, t) {
    var n = Ot[t.toLowerCase()];
    return n && It[e.nodeName] && n
  }

  function ue(e, t) {
    var r, o = typeof e;
    return "function" == o || "object" == o && null !== e ? "function" == typeof(r = e.$$hashKey) ? r = e.$$hashKey() : r === n && (r = e.$$hashKey = (t || l)()) : r = e, o + ":" + r
  }

  function pe(e, t) {
    if (t) {
      var n = 0;
      this.nextUid = function () {
        return ++n
      }
    }
    i(e, this.put, this)
  }

  function fe(e) {
    var t, n;
    return "function" == typeof e ? (t = e.$inject) || (t = [], e.length && (n = e.toString().replace(Rt, ""), n = n.match(Lt), i(n[1].split(Bt), function (e) {
      e.replace(Ft, function (e, n, r) {
        t.push(r)
      })
    })), e.$inject = t) : mt(e) ? (n = e.length - 1, H(e[n], "fn"), t = e.slice(0, n)) : H(e, "fn", !0), t
  }

  function de(e) {
    function t(e) {
      return function (t, n) {
        if (!b(t)) return e(t, n);
        i(t, a(e))
      }
    }

    function n(e, t) {
      if (V(e, "service"), (w(t) || mt(t)) && (t = h.instantiate(t)), !t.$get) throw qt("pget", e);
      return f[e + c] = t
    }

    function r(e, t) {
      return n(e, {$get: t})
    }

    function o(e) {
      var t, n, r, s, a = [];
      return i(e, function (e) {
        if (!p.get(e)) {
          p.put(e, !0);
          try {
            if (y(e)) for (t = ot(e), a = a.concat(o(t.requires)).concat(t._runBlocks), n = t._invokeQueue, r = 0, s = n.length; r < s; r++) {
              var i = n[r], l = h.get(i[0]);
              l[i[1]].apply(l, i[2])
            } else w(e) ? a.push(h.invoke(e)) : mt(e) ? a.push(h.invoke(e)) : H(e, "module")
          } catch (t) {
            throw mt(e) && (e = e[e.length - 1]), t.message && t.stack && -1 == t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), qt("modulerr", e, t.stack || t.message || t)
          }
        }
      }), a
    }

    function s(e, t) {
      function n(n) {
        if (e.hasOwnProperty(n)) {
          if (e[n] === l) throw qt("cdep", n + " <- " + u.join(" <- "));
          return e[n]
        }
        try {
          return u.unshift(n), e[n] = l, e[n] = t(n)
        } catch (t) {
          throw e[n] === l && delete e[n], t
        } finally {
          u.shift()
        }
      }

      function r(e, t, r) {
        var o, i, s, a = [], l = fe(e);
        for (i = 0, o = l.length; i < o; i++) {
          if ("string" != typeof(s = l[i])) throw qt("itkn", s);
          a.push(r && r.hasOwnProperty(s) ? r[s] : n(s))
        }
        return mt(e) && (e = e[o]), e.apply(t, a)
      }

      return {
        invoke: r, instantiate: function (e, t) {
          var n, o = function () {
          };
          return o.prototype = (mt(e) ? e[e.length - 1] : e).prototype, o = new o, n = r(e, o, t), b(n) || w(n) ? n : o
        }, get: n, annotate: fe, has: function (t) {
          return f.hasOwnProperty(t + c) || e.hasOwnProperty(t)
        }
      }
    }

    var l = {}, c = "Provider", u = [], p = new pe([], !0), f = {
      $provide: {
        provider: t(n), factory: t(r), service: t(function (e, t) {
          return r(e, ["$injector", function (e) {
            return e.instantiate(t)
          }])
        }), value: t(function (e, t) {
          return r(e, g(t))
        }), constant: t(function (e, t) {
          V(e, "constant"), f[e] = t, m[e] = t
        }), decorator: function (e, t) {
          var n = h.get(e + c), r = n.$get;
          n.$get = function () {
            var e = v.invoke(r, n);
            return v.invoke(t, null, {$delegate: e})
          }
        }
      }
    }, h = f.$injector = s(f, function () {
      throw qt("unpr", u.join(" <- "))
    }), m = {}, v = m.$injector = s(m, function (e) {
      return e = h.get(e + c), v.invoke(e.$get, e)
    });
    return i(o(e), function (e) {
      v.invoke(e || d)
    }), v
  }

  function he(e, r) {
    var o = {}, s = "Directive", l = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
      p = /^(on[a-z]+|formaction)$/;
    this.directive = function t(n, r) {
      return V(n, "directive"), y(n) ? (U(r, "directiveFactory"), o.hasOwnProperty(n) || (o[n] = [], e.factory(n + s, ["$injector", "$exceptionHandler", function (e, t) {
        var r = [];
        return i(o[n], function (o, i) {
          try {
            var s = e.invoke(o);
            w(s) ? s = {compile: g(s)} : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = i, s.name = s.name || n, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "A", r.push(s)
          } catch (e) {
            t(e)
          }
        }), r
      }])), o[n].push(r)) : i(n, a(t)), this
    }, this.aHrefSanitizationWhitelist = function (e) {
      return v(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function (e) {
      return v(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
    }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (e, r, a, d, g, m, v, $, x, k, T, S) {
      function C(e, t, n, r, o) {
        e instanceof nt || (e = nt(e)), i(e, function (t, n) {
          3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = nt(t).wrap("<span></span>").parent()[0])
        });
        var s = A(e, t, e, n, r, o);
        return _(e, "ng-scope"), function (t, n, r, o) {
          U(t, "scope");
          var a = n ? Dt.clone.call(e) : e;
          i(r, function (e, t) {
            a.data("$" + t + "Controller", e)
          }), r = 0;
          for (var l = a.length; r < l; r++) {
            var c = a[r].nodeType;
            1 !== c && 9 !== c || a.eq(r).data("$scope", t)
          }
          return n && n(a, t), s && s(t, a, a, o), a
        }
      }

      function _(e, t) {
        try {
          e.addClass(t)
        } catch (e) {
        }
      }

      function A(e, t, r, o, i, s) {
        for (var a, l, c, u, p = [], f = 0; f < e.length; f++) a = new Y, l = N(e[f], [], a, 0 === f ? o : n, i), (s = l.length ? L(l, e[f], a, t, r, null, [], [], s) : null) && s.scope && _(a.$$element, "ng-scope"), a = s && s.terminal || !(c = e[f].childNodes) || !c.length ? null : A(c, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : t), p.push(s, a), u = u || s || a, s = null;
        return u ? function (e, r, o, i) {
          var s, a, l, c, u, f, d;
          s = r.length;
          var h = Array(s);
          for (c = 0; c < s; c++) h[c] = r[c];
          for (f = c = 0, u = p.length; c < u; f++) a = h[f], r = p[c++], s = p[c++], r ? (r.scope ? (l = e.$new(), nt.data(a, "$scope", l)) : l = e, d = r.transcludeOnThisElement ? M(e, r.transclude, i) : !r.templateOnThisElement && i ? i : !i && t ? M(e, t) : null, r(s, l, a, o, d)) : s && s(e, a.childNodes, n, i)
        } : null
      }

      function M(e, t, n) {
        return function (r, o, i) {
          var s = !1;
          return r || (r = e.$new(), s = r.$$transcluded = !0), o = t(r, o, i, n), s && o.on("$destroy", function () {
            r.$destroy()
          }), o
        }
      }

      function N(e, t, n, r, o) {
        var i, s = n.$attr;
        switch (e.nodeType) {
          case 1:
            F(t, ge(it(e).toLowerCase()), "E", r, o);
            for (var a, u, p, f = e.attributes, d = 0, h = f && f.length; d < h; d++) {
              var g = !1, m = !1;
              if (a = f[d], !tt || 8 <= tt || a.specified) {
                i = a.name, u = vt(a.value), a = ge(i), (p = Z.test(a)) && (i = j(a.substr(6), "-"));
                a === a.replace(/(Start|End)$/, "") + "Start" && (g = i, m = i.substr(0, i.length - 5) + "end", i = i.substr(0, i.length - 6)), s[a = ge(i.toLowerCase())] = i, !p && n.hasOwnProperty(a) || (n[a] = u, ce(e, a) && (n[a] = !0)), z(e, t, u, a), F(t, a, "A", r, o, g, m)
              }
            }
            if (e = e.className, y(e) && "" !== e) for (; i = c.exec(e);) a = ge(i[2]), F(t, a, "C", r, o) && (n[a] = vt(i[3])), e = e.substr(i.index + i[0].length);
            break;
          case 3:
            V(t, e.nodeValue);
            break;
          case 8:
            try {
              (i = l.exec(e.nodeValue)) && (a = ge(i[1]), F(t, a, "M", r, o) && (n[a] = vt(i[2])))
            } catch (e) {
            }
        }
        return t.sort(function (e, t) {
          var n = t.priority - e.priority;
          return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
        }), t
      }

      function D(e, t, n) {
        var r = [], o = 0;
        if (t && e.hasAttribute && e.hasAttribute(t)) do {
          if (!e) throw Ht("uterdir", t, n);
          1 == e.nodeType && (e.hasAttribute(t) && o++, e.hasAttribute(n) && o--), r.push(e), e = e.nextSibling
        } while (0 < o); else r.push(e);
        return nt(r)
      }

      function I(e, t, n) {
        return function (r, o, i, s, a) {
          return o = D(o[0], t, n), e(r, o, i, s, a)
        }
      }

      function L(e, o, s, l, c, u, p, f, d) {
        function h(e, t, n, r) {
          e && (n && (e = I(e, n, r)), e.require = k.require, e.directiveName = T, (F === k || k.$$isolateScope) && (e = G(e, {isolateScope: !0})), p.push(e)), t && (n && (t = I(t, n, r)), t.require = k.require, t.directiveName = T, (F === k || k.$$isolateScope) && (t = G(t, {isolateScope: !0})), f.push(t))
        }

        function g(e, t, n, r) {
          var o, s = "data", a = !1;
          if (y(t)) {
            for (; "^" == (o = t.charAt(0)) || "?" == o;) t = t.substr(1), "^" == o && (s = "inheritedData"), a = a || "?" == o;
            if (o = null, r && "data" === s && (o = r[t]), !(o = o || n[s]("$" + t + "Controller")) && !a) throw Ht("ctreq", t, e)
          } else mt(t) && (o = [], i(t, function (t) {
            o.push(g(e, t, n, r))
          }));
          return o
        }

        function $(e, t, l, c, u) {
          var d, h, b, y, $, x, w, k = {};
          if (d = o === l ? s : P(s, new Y(nt(l), s.$attr)), h = d.$$element, F) {
            var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
            x = t.$new(!0), !j || j !== F && j !== F.$$originalDirective ? h.data("$isolateScopeNoTemplate", x) : h.data("$isolateScope", x), _(h, "ng-isolate-scope"), i(F.scope, function (e, n) {
              var o, i, s, a, l = (u = e.match(T) || [])[3] || n, c = "?" == u[2], u = u[1];
              switch (x.$$isolateBindings[n] = u + l, u) {
                case"@":
                  d.$observe(l, function (e) {
                    x[n] = e
                  }), d.$$observers[l].$$scope = t, d[l] && (x[n] = r(d[l])(t));
                  break;
                case"=":
                  if (c && !d[l]) break;
                  i = m(d[l]), a = i.literal ? E : function (e, t) {
                    return e === t || e != e && t != t
                  }, s = i.assign || function () {
                    throw o = x[n] = i(t), Ht("nonassign", d[l], F.name)
                  }, o = x[n] = i(t), x.$watch(function () {
                    var e = i(t);
                    return a(e, x[n]) || (a(e, o) ? s(t, e = x[n]) : x[n] = e), o = e
                  }, null, i.literal);
                  break;
                case"&":
                  i = m(d[l]), x[n] = function (e) {
                    return i(t, e)
                  };
                  break;
                default:
                  throw Ht("iscp", F.name, n, e)
              }
            })
          }
          for (w = u && function (e, t) {
            var r;
            return 2 > arguments.length && (t = e, e = n), Q && (r = k), u(e, t, r)
          }, L && i(L, function (e) {
            var n, r = {$scope: e === F || e.$$isolateScope ? x : t, $element: h, $attrs: d, $transclude: w};
            "@" == ($ = e.controller) && ($ = d[e.name]), n = v($, r), k[e.name] = n, Q || h.data("$" + e.name + "Controller", n), e.controllerAs && (r.$scope[e.controllerAs] = n)
          }), c = 0, b = p.length; c < b; c++) try {
            (y = p[c])(y.isolateScope ? x : t, h, d, y.require && g(y.directiveName, y.require, h, k), w)
          } catch (e) {
            a(e, O(h))
          }
          for (c = t, F && (F.template || null === F.templateUrl) && (c = x), e && e(c, l.childNodes, n, u), c = f.length - 1; 0 <= c; c--) try {
            (y = f[c])(y.isolateScope ? x : t, h, d, y.require && g(y.directiveName, y.require, h, k), w)
          } catch (e) {
            a(e, O(h))
          }
        }

        d = d || {};
        for (var x, k, T, S, A, M = -Number.MAX_VALUE, L = d.controllerDirectives, F = d.newIsolateScopeDirective, j = d.templateDirective, U = d.nonTlbTranscludeDirective, V = !1, z = !1, Q = d.hasElementTranscludeDirective, X = s.$$element = nt(o), Z = l, ee = 0, te = e.length; ee < te; ee++) {
          var ne = (k = e[ee]).$$start, re = k.$$end;
          if (ne && (X = D(o, ne, re)), S = n, M > k.priority) break;
          if ((S = k.scope) && (x = x || k, k.templateUrl || (H("new/isolated scope", F, k, X), b(S) && (F = k))), T = k.name, !k.templateUrl && k.controller && (S = k.controller, L = L || {}, H("'" + T + "' controller", L[T], k, X), L[T] = k), (S = k.transclude) && (V = !0, k.$$tlb || (H("transclusion", U, k, X), U = k), "element" == S ? (Q = !0, M = k.priority, S = X, X = s.$$element = nt(t.createComment(" " + T + ": " + s[T] + " ")), o = X[0], W(c, ut.call(S, 0), o), Z = C(S, l, M, u && u.name, {nonTlbTranscludeDirective: U})) : (S = nt(K(o)).contents(), X.empty(), Z = C(S, l))), k.template) if (z = !0, H("template", j, k, X), j = k, S = w(k.template) ? k.template(X, s) : k.template, S = J(S), k.replace) {
            if (u = k, S = Et.test(S) ? nt(vt(S)) : [], o = S[0], 1 != S.length || 1 !== o.nodeType) throw Ht("tplrt", T, "");
            W(c, X, o), S = N(o, [], te = {$attr: {}});
            var oe = e.splice(ee + 1, e.length - (ee + 1));
            F && B(S), e = e.concat(S).concat(oe), R(s, te), te = e.length
          } else X.html(S);
          if (k.templateUrl) z = !0, H("template", j, k, X), j = k, k.replace && (u = k), $ = q(e.splice(ee, e.length - ee), X, s, c, V && Z, p, f, {
            controllerDirectives: L,
            newIsolateScopeDirective: F,
            templateDirective: j,
            nonTlbTranscludeDirective: U
          }), te = e.length; else if (k.compile) try {
            w(A = k.compile(X, s, Z)) ? h(null, A, ne, re) : A && h(A.pre, A.post, ne, re)
          } catch (e) {
            a(e, O(X))
          }
          k.terminal && ($.terminal = !0, M = Math.max(M, k.priority))
        }
        return $.scope = x && !0 === x.scope, $.transcludeOnThisElement = V, $.templateOnThisElement = z, $.transclude = Z, d.hasElementTranscludeDirective = Q, $
      }

      function B(e) {
        for (var t = 0, n = e.length; t < n; t++) e[t] = f(e[t], {$$isolateScope: !0})
      }

      function F(t, r, i, l, c, u, p) {
        if (r === c) return null;
        if (c = null, o.hasOwnProperty(r)) for (var d, h = 0, g = (r = e.get(r + s)).length; h < g; h++) try {
          d = r[h], (l === n || l > d.priority) && -1 != d.restrict.indexOf(i) && (u && (d = f(d, {
            $$start: u,
            $$end: p
          })), t.push(d), c = d)
        } catch (e) {
          a(e)
        }
        return c
      }

      function R(e, t) {
        var n = t.$attr, r = e.$attr, o = e.$$element;
        i(e, function (r, o) {
          "$" != o.charAt(0) && (t[o] && t[o] !== r && (r += ("style" === o ? ";" : " ") + t[o]), e.$set(o, r, !0, n[o]))
        }), i(t, function (t, i) {
          "class" == i ? (_(o, t), e.class = (e.class ? e.class + " " : "") + t) : "style" == i ? (o.attr("style", o.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == i.charAt(0) || e.hasOwnProperty(i) || (e[i] = t, r[i] = n[i])
        })
      }

      function q(e, t, n, r, o, s, a, l) {
        var c, p, f = [], h = t[0], m = e.shift(),
          v = u({}, m, {templateUrl: null, transclude: null, replace: null, $$originalDirective: m}),
          y = w(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl;
        return t.empty(), d.get(k.getTrustedResourceUrl(y), {cache: g}).success(function (u) {
          var d, g;
          if (u = J(u), m.replace) {
            if (u = Et.test(u) ? nt(vt(u)) : [], d = u[0], 1 != u.length || 1 !== d.nodeType) throw Ht("tplrt", m.name, y);
            u = {$attr: {}}, W(r, t, d);
            w = N(d, [], u);
            b(m.scope) && B(w), e = w.concat(e), R(n, u)
          } else d = h, t.html(u);
          for (e.unshift(v), c = L(e, d, n, o, t, m, s, a, l), i(r, function (e, n) {
            e == d && (r[n] = t[0])
          }), p = A(t[0].childNodes, o); f.length;) {
            u = f.shift(), g = f.shift();
            var $ = f.shift(), x = f.shift(), w = t[0];
            if (g !== h) {
              var k = g.className;
              l.hasElementTranscludeDirective && m.replace || (w = K(d)), W($, nt(g), w), _(nt(w), k)
            }
            g = c.transcludeOnThisElement ? M(u, c.transclude, x) : x, c(p, u, w, r, g)
          }
          f = null
        }).error(function (e, t, n, r) {
          throw Ht("tpload", r.url)
        }), function (e, t, n, r, o) {
          e = o, f ? (f.push(t), f.push(n), f.push(r), f.push(e)) : (c.transcludeOnThisElement && (e = M(t, c.transclude, o)), c(p, t, n, r, e))
        }
      }

      function H(e, t, n, r) {
        if (t) throw Ht("multidir", t.name, n.name, e, O(r))
      }

      function V(e, t) {
        var n = r(t, !0);
        n && e.push({
          priority: 0, compile: function (e) {
            var t = e.parent().length;
            return t && _(e.parent(), "ng-binding"), function (e, r) {
              var o = r.parent(), i = o.data("$binding") || [];
              i.push(n), o.data("$binding", i), t || _(o, "ng-binding"), e.$watch(n, function (e) {
                r[0].nodeValue = e
              })
            }
          }
        })
      }

      function z(e, t, n, o) {
        var i = r(n, !0);
        if (i) {
          if ("multiple" === o && "SELECT" === it(e)) throw Ht("selmulti", O(e));
          t.push({
            priority: 100, compile: function () {
              return {
                pre: function (t, n, s) {
                  if (n = s.$$observers || (s.$$observers = {}), p.test(o)) throw Ht("nodomevents");
                  (i = r(s[o], !0, function (e, t) {
                    if ("srcdoc" == t) return k.HTML;
                    var n = it(e);
                    return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? k.RESOURCE_URL : void 0
                  }(e, o))) && (s[o] = i(t), (n[o] || (n[o] = [])).$$inter = !0, (s.$$observers && s.$$observers[o].$$scope || t).$watch(i, function (e, t) {
                    "class" === o && e != t ? s.$updateClass(e, t) : s.$set(o, e)
                  }))
                }
              }
            }
          })
        }
      }

      function W(e, n, r) {
        var o, i, s = n[0], a = n.length, l = s.parentNode;
        if (e) for (o = 0, i = e.length; o < i; o++) if (e[o] == s) {
          e[o++] = r, i = o + a - 1;
          for (var c = e.length; o < c; o++, i++) i < c ? e[o] = e[i] : delete e[o];
          e.length -= a - 1;
          break
        }
        for (l && l.replaceChild(r, s), (e = t.createDocumentFragment()).appendChild(s), r[nt.expando] = s[nt.expando], s = 1, a = n.length; s < a; s++) l = n[s], nt(l).remove(), e.appendChild(l), delete n[s];
        n[0] = r, n.length = 1
      }

      function G(e, t) {
        return u(function () {
          return e.apply(null, arguments)
        }, e, t)
      }

      var Y = function (e, t) {
        this.$$element = e, this.$attr = t || {}
      };
      Y.prototype = {
        $normalize: ge, $addClass: function (e) {
          e && 0 < e.length && T.addClass(this.$$element, e)
        }, $removeClass: function (e) {
          e && 0 < e.length && T.removeClass(this.$$element, e)
        }, $updateClass: function (e, t) {
          var n = me(e, t), r = me(t, e);
          0 === n.length ? T.removeClass(this.$$element, r) : 0 === r.length ? T.addClass(this.$$element, n) : T.setClass(this.$$element, n, r)
        }, $set: function (e, t, r, o) {
          var s = ce(this.$$element[0], e);
          s && (this.$$element.prop(e, t), o = s), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e]) || (this.$attr[e] = o = j(e, "-")), ("A" === (s = it(this.$$element)) && "href" === e || "IMG" === s && "src" === e) && (this[e] = t = S(t, "src" === e)), !1 !== r && (null === t || t === n ? this.$$element.removeAttr(o) : this.$$element.attr(o, t)), (r = this.$$observers) && i(r[e], function (e) {
            try {
              e(t)
            } catch (e) {
              a(e)
            }
          })
        }, $observe: function (e, t) {
          var n = this, r = n.$$observers || (n.$$observers = {}), o = r[e] || (r[e] = []);
          return o.push(t), $.$evalAsync(function () {
            o.$$inter || t(n[e])
          }), t
        }
      };
      var Q = r.startSymbol(), X = r.endSymbol(), J = "{{" == Q || "}}" == X ? h : function (e) {
        return e.replace(/\{\{/g, Q).replace(/}}/g, X)
      }, Z = /^ngAttr[A-Z]/;
      return C
    }]
  }

  function ge(e) {
    return G(e.replace(Vt, ""))
  }

  function me(e, t) {
    var n = "", r = e.split(/\s+/), o = t.split(/\s+/), i = 0;
    e:for (; i < r.length; i++) {
      for (var s = r[i], a = 0; a < o.length; a++) if (s == o[a]) continue e;
      n += (0 < n.length ? " " : "") + s
    }
    return n
  }

  function ve(e) {
    var t, n, r, o = {};
    return e ? (i(e.split("\n"), function (e) {
      r = e.indexOf(":"), t = at(vt(e.substr(0, r))), n = vt(e.substr(r + 1)), t && (o[t] = o[t] ? o[t] + ", " + n : n)
    }), o) : o
  }

  function be(e) {
    var t = b(e) ? e : n;
    return function (n) {
      return t || (t = ve(e)), n ? t[at(n)] || null : t
    }
  }

  function ye(e, t, n) {
    return w(n) ? n(e, t) : (i(n, function (n) {
      e = n(e, t)
    }), e)
  }

  function $e(e) {
    for (var t = (e = e.split("/")).length; t--;) e[t] = F(e[t]);
    return e.join("/")
  }

  function xe(e, t, n) {
    e = Fe(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = p(e.port) || Gt[e.protocol] || null
  }

  function we(e, t, n) {
    var r = "/" !== e.charAt(0);
    r && (e = "/" + e), e = Fe(e, n), t.$$path = decodeURIComponent(r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = L(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
  }

  function ke(e, t) {
    if (0 === t.indexOf(e)) return t.substr(e.length)
  }

  function Te(e) {
    var t = e.indexOf("#");
    return -1 == t ? e : e.substr(0, t)
  }

  function Se(e) {
    return e.substr(0, Te(e).lastIndexOf("/") + 1)
  }

  function Ce(e, t) {
    this.$$html5 = !0, t = t || "";
    var r = Se(e);
    xe(e, this, e), this.$$parse = function (t) {
      var n = ke(r, t);
      if (!y(n)) throw Yt("ipthprfx", t, r);
      we(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
    }, this.$$compose = function () {
      var e = B(this.$$search), t = this.$$hash ? "#" + F(this.$$hash) : "";
      this.$$url = $e(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
    }, this.$$parseLinkUrl = function (o, i) {
      var s, a;
      return (s = ke(e, o)) !== n ? (a = s, a = (s = ke(t, s)) !== n ? r + (ke("/", s) || s) : e + a) : (s = ke(r, o)) !== n ? a = r + s : r == o + "/" && (a = r), a && this.$$parse(a), !!a
    }
  }

  function _e(e, t) {
    var n = Se(e);
    xe(e, this, e), this.$$parse = function (r) {
      var o = ke(e, r) || ke(n, r);
      if (!y(o = "#" == o.charAt(0) ? ke(t, o) : this.$$html5 ? o : "")) throw Yt("ihshprfx", r, t);
      we(o, this, e), r = this.$$path;
      var i = /^\/[A-Z]:(\/.*)/;
      0 === o.indexOf(e) && (o = o.replace(e, "")), i.exec(o) || (r = (o = i.exec(r)) ? o[1] : r), this.$$path = r, this.$$compose()
    }, this.$$compose = function () {
      var n = B(this.$$search), r = this.$$hash ? "#" + F(this.$$hash) : "";
      this.$$url = $e(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
    }, this.$$parseLinkUrl = function (t, n) {
      return Te(e) == Te(t) && (this.$$parse(t), !0)
    }
  }

  function Pe(e, t) {
    this.$$html5 = !0, _e.apply(this, arguments);
    var n = Se(e);
    this.$$parseLinkUrl = function (r, o) {
      var i, s;
      return e == Te(r) ? i = r : (s = ke(n, r)) ? i = e + t + s : n === r + "/" && (i = n), i && this.$$parse(i), !!i
    }, this.$$compose = function () {
      var n = B(this.$$search), r = this.$$hash ? "#" + F(this.$$hash) : "";
      this.$$url = $e(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
    }
  }

  function Ee(e) {
    return function () {
      return this[e]
    }
  }

  function Ae(e, t) {
    return function (n) {
      return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
    }
  }

  function Me(e, t) {
    if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Kt("isecfld", t);
    return e
  }

  function Ne(e, t) {
    if (e) {
      if (e.constructor === e) throw Kt("isecfn", t);
      if (e.document && e.location && e.alert && e.setInterval) throw Kt("isecwindow", t);
      if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Kt("isecdom", t);
      if (e === Object) throw Kt("isecobj", t)
    }
    return e
  }

  function De(e, t, r, o, i) {
    Ne(e, o), i = i || {}, t = t.split(".");
    for (var s, a = 0; 1 < t.length; a++) {
      var l = Ne(e[s = Me(t.shift(), o)], o);
      l || (l = {}, e[s] = l), (e = l).then && i.unwrapPromises && (Qt(o), "$$v" in e || function (e) {
        e.then(function (t) {
          e.$$v = t
        })
      }(e), e.$$v === n && (e.$$v = {}), e = e.$$v)
    }
    return s = Me(t.shift(), o), Ne(e[s], o), e[s] = r
  }

  function Oe(e) {
    return "constructor" == e
  }

  function Ie(e, t, r, o, i, s, a) {
    Me(e, s), Me(t, s), Me(r, s), Me(o, s), Me(i, s);
    var l = function (e) {
        return Ne(e, s)
      }, c = a.expensiveChecks, u = c || Oe(e) ? l : h, p = c || Oe(t) ? l : h, f = c || Oe(r) ? l : h,
      d = c || Oe(o) ? l : h, g = c || Oe(i) ? l : h;
    return a.unwrapPromises ? function (a, l) {
      var c, h = l && l.hasOwnProperty(e) ? l : a;
      return null == h ? h : ((h = u(h[e])) && h.then && (Qt(s), "$$v" in h || (c = h, c.$$v = n, c.then(function (e) {
        c.$$v = u(e)
      })), h = u(h.$$v)), t ? null == h ? n : ((h = p(h[t])) && h.then && (Qt(s), "$$v" in h || (c = h, c.$$v = n, c.then(function (e) {
        c.$$v = p(e)
      })), h = p(h.$$v)), r ? null == h ? n : ((h = f(h[r])) && h.then && (Qt(s), "$$v" in h || (c = h, c.$$v = n, c.then(function (e) {
        c.$$v = f(e)
      })), h = f(h.$$v)), o ? null == h ? n : ((h = d(h[o])) && h.then && (Qt(s), "$$v" in h || (c = h, c.$$v = n, c.then(function (e) {
        c.$$v = d(e)
      })), h = d(h.$$v)), i ? null == h ? n : ((h = g(h[i])) && h.then && (Qt(s), "$$v" in h || (c = h, c.$$v = n, c.then(function (e) {
        c.$$v = g(e)
      })), h = g(h.$$v)), h) : h) : h) : h) : h)
    } : function (s, a) {
      var l = a && a.hasOwnProperty(e) ? a : s;
      return null == l ? l : (l = u(l[e]), t ? null == l ? n : (l = p(l[t]), r ? null == l ? n : (l = f(l[r]), o ? null == l ? n : (l = d(l[o]), i ? null == l ? n : l = g(l[i]) : l) : l) : l) : l)
    }
  }

  function Le(e, t, r) {
    var o = t.expensiveChecks, s = o ? an : sn;
    if (s.hasOwnProperty(e)) return s[e];
    var a, l = e.split("."), c = l.length;
    if (t.csp) a = 6 > c ? Ie(l[0], l[1], l[2], l[3], l[4], r, t) : function (e, o) {
      var i, s = 0;
      do {
        i = Ie(l[s++], l[s++], l[s++], l[s++], l[s++], r, t)(e, o), o = n, e = i
      } while (s < c);
      return i
    }; else {
      var u = "var p;\n";
      o && (u += "s = eso(s, fe);\nl = eso(l, fe);\n");
      var p = o;
      i(l, function (e, n) {
        Me(e, r);
        var i = (n ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + '["' + e + '"]', s = o || Oe(e);
        s && (i = "eso(" + i + ", fe)", p = !0), u += "if(s == null) return undefined;\ns=" + i + ";\n", t.unwrapPromises && (u += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (s ? "eso(v)" : "v") + ";});\n}\n s=" + (s ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
      }), u += "return s;", (a = new Function("s", "l", "pw", "eso", "fe", u)).toString = g(u), (p || t.unwrapPromises) && (a = function (e, t) {
        return function (n, r) {
          return e(n, r, Qt, Ne, t)
        }
      }(a, r))
    }
    return "hasOwnProperty" !== e && (s[e] = a), a
  }

  function Be(e) {
    var t = [];
    return v(e) && i(e, function (e) {
      t.push(function (e) {
        if ("self" === e) return e;
        if (y(e)) {
          if (-1 < e.indexOf("***")) throw ln("iwcard", e);
          return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + e + "$")
        }
        if (k(e)) return RegExp("^" + e.source + "$");
        throw ln("imatcher")
      }(e))
    }), t
  }

  function Fe(e, t) {
    var n = e;
    return tt && (un.setAttribute("href", n), n = un.href), un.setAttribute("href", n), {
      href: un.href,
      protocol: un.protocol ? un.protocol.replace(/:$/, "") : "",
      host: un.host,
      search: un.search ? un.search.replace(/^\?/, "") : "",
      hash: un.hash ? un.hash.replace(/^#/, "") : "",
      hostname: un.hostname,
      port: un.port,
      pathname: "/" === un.pathname.charAt(0) ? un.pathname : "/" + un.pathname
    }
  }

  function Re(e) {
    return (e = y(e) ? Fe(e) : e).protocol === pn.protocol && e.host === pn.host
  }

  function qe(e) {
    function t(r, o) {
      if (b(r)) {
        var s = {};
        return i(r, function (e, n) {
          s[n] = t(n, e)
        }), s
      }
      return e.factory(r + n, o)
    }

    var n = "Filter";
    this.register = t, this.$get = ["$injector", function (e) {
      return function (t) {
        return e.get(t + n)
      }
    }], t("currency", je), t("date", Ge), t("filter", function () {
      return function (e, t, n) {
        if (!mt(e)) return e;
        var r = typeof n, o = [];
        o.check = function (e) {
          for (var t = 0; t < o.length; t++) if (!o[t](e)) return !1;
          return !0
        }, "function" !== r && (n = "boolean" === r && n ? function (e, t) {
          return ht.equals(e, t)
        } : function (e, t) {
          if (e && t && "object" == typeof e && "object" == typeof t) {
            for (var r in e) if ("$" !== r.charAt(0) && lt.call(e, r) && n(e[r], t[r])) return !0;
            return !1
          }
          return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
        });
        var i = function (e, t) {
          if ("string" == typeof t && "!" === t.charAt(0)) return !i(e, t.substr(1));
          switch (typeof e) {
            case"boolean":
            case"number":
            case"string":
              return n(e, t);
            case"object":
              switch (typeof t) {
                case"object":
                  return n(e, t);
                default:
                  for (var r in e) if ("$" !== r.charAt(0) && i(e[r], t)) return !0
              }
              return !1;
            case"array":
              for (r = 0; r < e.length; r++) if (i(e[r], t)) return !0;
              return !1;
            default:
              return !1
          }
        };
        switch (typeof t) {
          case"boolean":
          case"number":
          case"string":
            t = {$: t};
          case"object":
            for (var s in t) !function (e) {
              void 0 !== t[e] && o.push(function (n) {
                return i("$" == e ? n : n && n[e], t[e])
              })
            }(s);
            break;
          case"function":
            o.push(t);
            break;
          default:
            return e
        }
        for (r = [], s = 0; s < e.length; s++) {
          var a = e[s];
          o.check(a) && r.push(a)
        }
        return r
      }
    }), t("json", function () {
      return function (e) {
        return M(e, !0)
      }
    }), t("limitTo", function () {
      return function (e, t) {
        if (!mt(e) && !y(e)) return e;
        if (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : p(t), y(e)) return t ? 0 <= t ? e.slice(0, t) : e.slice(t, e.length) : "";
        var n, r, o = [];
        for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), 0 < t ? (n = 0, r = t) : (n = e.length + t, r = e.length); n < r; n++) o.push(e[n]);
        return o
      }
    }), t("lowercase", mn), t("number", Ue), t("orderBy", Ye), t("uppercase", vn)
  }

  function je(e) {
    var t = e.NUMBER_FORMATS;
    return function (e, n) {
      return m(n) && (n = t.CURRENCY_SYM), He(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
    }
  }

  function Ue(e) {
    var t = e.NUMBER_FORMATS;
    return function (e, n) {
      return He(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
    }
  }

  function He(e, t, n, r, o) {
    if (null == e || !isFinite(e) || b(e)) return "";
    var i = 0 > e, s = (e = Math.abs(e)) + "", a = "", l = [], c = !1;
    if (-1 !== s.indexOf("e")) {
      (u = s.match(/([\d\.]+)e(-?)(\d+)/)) && "-" == u[2] && u[3] > o + 1 ? (s = "0", e = 0) : (a = s, c = !0)
    }
    if (c) 0 < o && -1 < e && 1 > e && (a = e.toFixed(o)); else {
      s = (s.split(fn)[1] || "").length, m(o) && (o = Math.min(Math.max(t.minFrac, s), t.maxFrac)), 0 === (e = +(Math.round(+(e.toString() + "e" + o)).toString() + "e" + -o)) && (i = !1), s = (e = ("" + e).split(fn))[0], e = e[1] || "";
      var u = 0, p = t.lgSize, f = t.gSize;
      if (s.length >= p + f) for (u = s.length - p, c = 0; c < u; c++) 0 == (u - c) % f && 0 !== c && (a += n), a += s.charAt(c);
      for (c = u; c < s.length; c++) 0 == (s.length - c) % p && 0 !== c && (a += n), a += s.charAt(c);
      for (; e.length < o;) e += "0";
      o && "0" !== o && (a += r + e.substr(0, o))
    }
    return l.push(i ? t.negPre : t.posPre), l.push(a), l.push(i ? t.negSuf : t.posSuf), l.join("")
  }

  function Ve(e, t, n) {
    var r = "";
    for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
    return n && (e = e.substr(e.length - t)), r + e
  }

  function ze(e, t, n, r) {
    return n = n || 0, function (o) {
      return o = o["get" + e](), (0 < n || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Ve(o, t, r)
    }
  }

  function We(e, t) {
    return function (n, r) {
      var o = n["get" + e]();
      return r[ct(t ? "SHORT" + e : e)][o]
    }
  }

  function Ge(e) {
    function t(e) {
      var t;
      if (t = e.match(n)) {
        e = new Date(0);
        var r = 0, o = 0, i = t[8] ? e.setUTCFullYear : e.setFullYear, s = t[8] ? e.setUTCHours : e.setHours;
        t[9] && (r = p(t[9] + t[10]), o = p(t[9] + t[11])), i.call(e, p(t[1]), p(t[2]) - 1, p(t[3])), r = p(t[4] || 0) - r, o = p(t[5] || 0) - o, i = p(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), s.call(e, r, o, i, t)
      }
      return e
    }

    var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (n, r) {
      var o, s, a = "", l = [];
      if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, y(n) && (n = gn.test(n) ? p(n) : t(n)), $(n) && (n = new Date(n)), !x(n)) return n;
      for (; r;) (s = hn.exec(r)) ? (l = l.concat(ut.call(s, 1)), r = l.pop()) : (l.push(r), r = null);
      return i(l, function (t) {
        o = dn[t], a += o ? o(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      }), a
    }
  }

  function Ye(e) {
    return function (t, n, r) {
      function s(e, t) {
        return D(t) ? function (t, n) {
          return e(n, t)
        } : e
      }

      function a(e, t) {
        var n = typeof e, r = typeof t;
        return n == r ? (x(e) && x(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1
      }

      return o(t) ? (0 === (n = mt(n) ? n : [n]).length && (n = ["+"]), n = function (e, t, n) {
        var r = [];
        return i(e, function (e, o, i) {
          r.push(t.call(n, e, o, i))
        }), r
      }(n, function (t) {
        var n = !1, r = t || h;
        if (y(t)) {
          if ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0), t = t.substring(1)), "" === t) return s(function (e, t) {
            return a(e, t)
          }, n);
          if ((r = e(t)).constant) {
            var o = r();
            return s(function (e, t) {
              return a(e[o], t[o])
            }, n)
          }
        }
        return s(function (e, t) {
          return a(r(e), r(t))
        }, n)
      }), ut.call(t).sort(s(function (e, t) {
        for (var r = 0; r < n.length; r++) {
          var o = n[r](e, t);
          if (0 !== o) return o
        }
        return 0
      }, r))) : t
    }
  }

  function Qe(e) {
    return w(e) && (e = {link: e}), e.restrict = e.restrict || "AC", g(e)
  }

  function Ke(e, t, n, r) {
    function o(t, n) {
      n = n ? "-" + j(n, "-") : "", r.setClass(e, (t ? An : Mn) + n, (t ? Mn : An) + n)
    }

    var s = this, a = e.parent().controller("form") || $n, l = 0, c = s.$error = {}, u = [];
    s.$name = t.name || t.ngForm, s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, a.$addControl(s), e.addClass(Nn), o(!0), s.$addControl = function (e) {
      V(e.$name, "input"), u.push(e), e.$name && (s[e.$name] = e)
    }, s.$removeControl = function (e) {
      e.$name && s[e.$name] === e && delete s[e.$name], i(c, function (t, n) {
        s.$setValidity(n, !0, e)
      }), C(u, e)
    }, s.$setValidity = function (e, t, n) {
      var r = c[e];
      if (t) r && (C(r, n), r.length || (--l || (o(t), s.$valid = !0, s.$invalid = !1), c[e] = !1, o(!0, e), a.$setValidity(e, !0, s))); else {
        if (l || o(t), r) {
          if (-1 != S(r, n)) return
        } else c[e] = r = [], l++, o(!1, e), a.$setValidity(e, !1, s);
        r.push(n), s.$valid = !1, s.$invalid = !0
      }
    }, s.$setDirty = function () {
      r.removeClass(e, Nn), r.addClass(e, Dn), s.$dirty = !0, s.$pristine = !1, a.$setDirty()
    }, s.$setPristine = function () {
      r.removeClass(e, Dn), r.addClass(e, Nn), s.$dirty = !1, s.$pristine = !0, i(u, function (e) {
        e.$setPristine()
      })
    }
  }

  function Xe(e, t, r, o) {
    return e.$setValidity(t, r), r ? o : n
  }

  function Je(e, t) {
    var n, r;
    if (t) for (n = 0; n < t.length; ++n) if (r = t[n], e[r]) return !0;
    return !1
  }

  function Ze(e, t, n, o, i, s) {
    var a = t.prop(st), l = t[0].placeholder, c = {}, u = at(t[0].type);
    if (o.$$validityState = a, !i.android) {
      var f = !1;
      t.on("compositionstart", function (e) {
        f = !0
      }), t.on("compositionend", function () {
        f = !1, d()
      })
    }
    var d = function (r) {
      if (!f) {
        var i = t.val();
        tt && "input" === (r || c).type && t[0].placeholder !== l ? l = t[0].placeholder : ("password" !== u && D(n.ngTrim || "T") && (i = vt(i)), r = a && o.$$hasNativeValidators, (o.$viewValue !== i || "" === i && r) && (e.$root.$$phase ? o.$setViewValue(i) : e.$apply(function () {
          o.$setViewValue(i)
        })))
      }
    };
    if (i.hasEvent("input")) t.on("input", d); else {
      var h, g = function () {
        h || (h = s.defer(function () {
          d(), h = null
        }))
      };
      t.on("keydown", function (e) {
        91 === (e = e.keyCode) || 15 < e && 19 > e || 37 <= e && 40 >= e || g()
      }), i.hasEvent("paste") && t.on("paste cut", g)
    }
    t.on("change", d), o.$render = function () {
      t.val(o.$isEmpty(o.$viewValue) ? "" : o.$viewValue)
    };
    var m = n.ngPattern;
    if (m && ((i = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = RegExp(i[1], i[2]), i = function (e) {
        return Xe(o, "pattern", o.$isEmpty(e) || m.test(e), e)
      }) : i = function (n) {
        var i = e.$eval(m);
        if (!i || !i.test) throw r("ngPattern")("noregexp", m, i, O(t));
        return Xe(o, "pattern", o.$isEmpty(n) || i.test(n), n)
      }, o.$formatters.push(i), o.$parsers.push(i)), n.ngMinlength) {
      var v = p(n.ngMinlength);
      i = function (e) {
        return Xe(o, "minlength", o.$isEmpty(e) || e.length >= v, e)
      }, o.$parsers.push(i), o.$formatters.push(i)
    }
    if (n.ngMaxlength) {
      var b = p(n.ngMaxlength);
      i = function (e) {
        return Xe(o, "maxlength", o.$isEmpty(e) || e.length <= b, e)
      }, o.$parsers.push(i), o.$formatters.push(i)
    }
  }

  function et(e, t) {
    return e = "ngClass" + e, ["$animate", function (n) {
      function r(e, t) {
        var n = [], r = 0;
        e:for (; r < e.length; r++) {
          for (var o = e[r], i = 0; i < t.length; i++) if (o == t[i]) continue e;
          n.push(o)
        }
        return n
      }

      function o(e) {
        if (!mt(e)) {
          if (y(e)) return e.split(" ");
          if (b(e)) {
            var t = [];
            return i(e, function (e, n) {
              e && (t = t.concat(n.split(" ")))
            }), t
          }
        }
        return e
      }

      return {
        restrict: "AC", link: function (s, a, l) {
          function c(e, t) {
            var n = a.data("$classCounts") || {}, r = [];
            return i(e, function (e) {
              (0 < t || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && r.push(e))
            }), a.data("$classCounts", n), r.join(" ")
          }

          function u(e) {
            if (!0 === t || s.$index % 2 === t) {
              f = o(e || []);
              if (p) {
                if (!E(e, p)) {
                  var i = o(p), u = r(f, i), f = c(f = r(i, f), -1);
                  0 === (u = c(u, 1)).length ? n.removeClass(a, f) : 0 === f.length ? n.addClass(a, u) : n.setClass(a, u, f)
                }
              } else {
                u = c(f, 1);
                l.$addClass(u)
              }
            }
            p = P(e)
          }

          var p;
          s.$watch(l[e], u, !0), l.$observe("class", function (t) {
            u(s.$eval(l[e]))
          }), "ngClass" !== e && s.$watch("$index", function (n, r) {
            var i = 1 & n;
            if (i !== (1 & r)) {
              var a = o(s.$eval(l[e]));
              i === t ? (i = c(a, 1), l.$addClass(i)) : (i = c(a, -1), l.$removeClass(i))
            }
          })
        }
      }
    }]
  }

  var tt, nt, rt, ot, it, st = "validity", at = function (e) {
      return y(e) ? e.toLowerCase() : e
    }, lt = Object.prototype.hasOwnProperty, ct = function (e) {
      return y(e) ? e.toUpperCase() : e
    }, ut = [].slice, pt = [].push, ft = Object.prototype.toString, dt = r("ng"), ht = e.angular || (e.angular = {}),
    gt = ["0", "0", "0"];
  tt = p((/msie (\d+)/.exec(at(navigator.userAgent)) || [])[1]), isNaN(tt) && (tt = p((/trident\/.*; rv:(\d+)/.exec(at(navigator.userAgent)) || [])[1])), d.$inject = [], h.$inject = [];
  var mt = w(Array.isArray) ? Array.isArray : function (e) {
    return "[object Array]" === ft.call(e)
  }, vt = String.prototype.trim ? function (e) {
    return y(e) ? e.trim() : e
  } : function (e) {
    return y(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
  };
  it = 9 > tt ? function (e) {
    return (e = e.nodeName ? e : e[0]).scopeName && "HTML" != e.scopeName ? ct(e.scopeName + ":" + e.nodeName) : e.nodeName
  } : function (e) {
    return e.nodeName ? e.nodeName : e[0].nodeName
  };
  var bt = function () {
    if (v(bt.isActive_)) return bt.isActive_;
    var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
    if (!e) try {
      new Function("")
    } catch (t) {
      e = !0
    }
    return bt.isActive_ = e
  }, yt = /[A-Z]/g, $t = {full: "1.2.28", major: 1, minor: 2, dot: 28, codeName: "finnish-disembarkation"};
  Q.expando = "ng339";
  var xt = Q.cache = {}, wt = 1, kt = e.document.addEventListener ? function (e, t, n) {
    e.addEventListener(t, n, !1)
  } : function (e, t, n) {
    e.attachEvent("on" + t, n)
  }, Tt = e.document.removeEventListener ? function (e, t, n) {
    e.removeEventListener(t, n, !1)
  } : function (e, t, n) {
    e.detachEvent("on" + t, n)
  };
  Q._data = function (e) {
    return this.cache[e[this.expando]] || {}
  };
  var St = /([\:\-\_]+(.))/g, Ct = /^moz([A-Z])/, _t = r("jqLite"), Pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Et = /<|&#?\w+;/,
    At = /<([\w:]+)/, Mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Nt = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td;
  var Dt = Q.prototype = {
    ready: function (n) {
      function r() {
        o || (o = !0, n())
      }

      var o = !1;
      "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), Q(e).on("load", r))
    }, toString: function () {
      var e = [];
      return i(this, function (t) {
        e.push("" + t)
      }), "[" + e.join(", ") + "]"
    }, eq: function (e) {
      return nt(0 <= e ? this[e] : this[this.length + e])
    }, length: 0, push: pt, sort: [].sort, splice: [].splice
  }, Ot = {};
  i("multiple selected checked disabled readOnly required open".split(" "), function (e) {
    Ot[at(e)] = e
  });
  var It = {};
  i("input select option textarea button form details".split(" "), function (e) {
    It[ct(e)] = !0
  }), i({data: te, removeData: Z}, function (e, t) {
    Q[t] = e
  }), i({
    data: te, inheritedData: ae, scope: function (e) {
      return nt.data(e, "$scope") || ae(e.parentNode || e, ["$isolateScope", "$scope"])
    }, isolateScope: function (e) {
      return nt.data(e, "$isolateScope") || nt.data(e, "$isolateScopeNoTemplate")
    }, controller: se, injector: function (e) {
      return ae(e, "$injector")
    }, removeAttr: function (e, t) {
      e.removeAttribute(t)
    }, hasClass: ne, css: function (e, t, r) {
      if (t = G(t), !v(r)) {
        var o;
        return 8 >= tt && "" === (o = e.currentStyle && e.currentStyle[t]) && (o = "auto"), o = o || e.style[t], 8 >= tt && (o = "" === o ? n : o), o
      }
      e.style[t] = r
    }, attr: function (e, t, r) {
      var o = at(t);
      if (Ot[o]) {
        if (!v(r)) return e[t] || (e.attributes.getNamedItem(t) || d).specified ? o : n;
        r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
      } else if (v(r)) e.setAttribute(t, r); else if (e.getAttribute) return null === (e = e.getAttribute(t, 2)) ? n : e
    }, prop: function (e, t, n) {
      if (!v(n)) return e[t];
      e[t] = n
    }, text: function () {
      function e(e, n) {
        var r = t[e.nodeType];
        if (m(n)) return r ? e[r] : "";
        e[r] = n
      }

      var t = [];
      return 9 > tt ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", e.$dv = "", e
    }(), val: function (e, t) {
      if (m(t)) {
        if ("SELECT" === it(e) && e.multiple) {
          var n = [];
          return i(e.options, function (e) {
            e.selected && n.push(e.value || e.text)
          }), 0 === n.length ? null : n
        }
        return e.value
      }
      e.value = t
    }, html: function (e, t) {
      if (m(t)) return e.innerHTML;
      for (var n = 0, r = e.childNodes; n < r.length; n++) X(r[n]);
      e.innerHTML = t
    }, empty: le
  }, function (e, t) {
    Q.prototype[t] = function (t, r) {
      var o, i, s = this.length;
      if (e !== le && (2 == e.length && e !== ne && e !== se ? t : r) === n) {
        if (b(t)) {
          for (o = 0; o < s; o++) if (e === te) e(this[o], t); else for (i in t) e(this[o], i, t[i]);
          return this
        }
        for (s = (o = e.$dv) === n ? Math.min(s, 1) : s, i = 0; i < s; i++) {
          var a = e(this[i], t, r);
          o = o ? o + a : a
        }
        return o
      }
      for (o = 0; o < s; o++) e(this[o], t, r);
      return this
    }
  }), i({
    removeData: Z, dealoc: X, on: function e(n, r, o, s) {
      if (v(s)) throw _t("onargs");
      var a = ee(n, "events"), l = ee(n, "handle");
      a || ee(n, "events", a = {}), l || ee(n, "handle", l = function (e, n) {
        var r = function (r, o) {
          if (r.preventDefault || (r.preventDefault = function () {
              r.returnValue = !1
            }), r.stopPropagation || (r.stopPropagation = function () {
              r.cancelBubble = !0
            }), r.target || (r.target = r.srcElement || t), m(r.defaultPrevented)) {
            var s = r.preventDefault;
            r.preventDefault = function () {
              r.defaultPrevented = !0, s.call(r)
            }, r.defaultPrevented = !1
          }
          r.isDefaultPrevented = function () {
            return r.defaultPrevented || !1 === r.returnValue
          }, i(P(n[o || r.type] || []), function (t) {
            t.call(e, r)
          }), 8 >= tt ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
        };
        return r.elem = e, r
      }(n, a)), i(r.split(" "), function (r) {
        var i = a[r];
        if (!i) {
          if ("mouseenter" == r || "mouseleave" == r) {
            var s = t.body.contains || t.body.compareDocumentPosition ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
              if (t) for (; t = t.parentNode;) if (t === e) return !0;
              return !1
            };
            a[r] = [], e(n, {mouseleave: "mouseout", mouseenter: "mouseover"}[r], function (e) {
              var t = e.relatedTarget;
              t && (t === this || s(this, t)) || l(e, r)
            })
          } else kt(n, r, l), a[r] = [];
          i = a[r]
        }
        i.push(o)
      })
    }, off: J, one: function (e, t, n) {
      (e = nt(e)).on(t, function r() {
        e.off(t, n), e.off(t, r)
      }), e.on(t, n)
    }, replaceWith: function (e, t) {
      var n, r = e.parentNode;
      X(e), i(new Q(t), function (t) {
        n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
      })
    }, children: function (e) {
      var t = [];
      return i(e.childNodes, function (e) {
        1 === e.nodeType && t.push(e)
      }), t
    }, contents: function (e) {
      return e.contentDocument || e.childNodes || []
    }, append: function (e, t) {
      i(new Q(t), function (t) {
        1 !== e.nodeType && 11 !== e.nodeType || e.appendChild(t)
      })
    }, prepend: function (e, t) {
      if (1 === e.nodeType) {
        var n = e.firstChild;
        i(new Q(t), function (t) {
          e.insertBefore(t, n)
        })
      }
    }, wrap: function (e, t) {
      t = nt(t)[0];
      var n = e.parentNode;
      n && n.replaceChild(t, e), t.appendChild(e)
    }, remove: function (e) {
      X(e);
      var t = e.parentNode;
      t && t.removeChild(e)
    }, after: function (e, t) {
      var n = e, r = e.parentNode;
      i(new Q(t), function (e) {
        r.insertBefore(e, n.nextSibling), n = e
      })
    }, addClass: oe, removeClass: re, toggleClass: function (e, t, n) {
      t && i(t.split(" "), function (t) {
        var r = n;
        m(r) && (r = !ne(e, t)), (r ? oe : re)(e, t)
      })
    }, parent: function (e) {
      return (e = e.parentNode) && 11 !== e.nodeType ? e : null
    }, next: function (e) {
      if (e.nextElementSibling) return e.nextElementSibling;
      for (e = e.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
      return e
    }, find: function (e, t) {
      return e.getElementsByTagName ? e.getElementsByTagName(t) : []
    }, clone: K, triggerHandler: function (e, t, n) {
      var r, o;
      r = t.type || t;
      var s = (ee(e, "events") || {})[r];
      s && (r = {
        preventDefault: function () {
          this.defaultPrevented = !0
        }, isDefaultPrevented: function () {
          return !0 === this.defaultPrevented
        }, stopPropagation: d, type: r, target: e
      }, t.type && (r = u(r, t)), t = P(s), o = n ? [r].concat(n) : [r], i(t, function (t) {
        t.apply(e, o)
      }))
    }
  }, function (e, t) {
    Q.prototype[t] = function (t, n, r) {
      for (var o, i = 0; i < this.length; i++) m(o) ? (o = e(this[i], t, n, r), v(o) && (o = nt(o))) : ie(o, e(this[i], t, n, r));
      return v(o) ? o : this
    }, Q.prototype.bind = Q.prototype.on, Q.prototype.unbind = Q.prototype.off
  }), pe.prototype = {
    put: function (e, t) {
      this[ue(e, this.nextUid)] = t
    }, get: function (e) {
      return this[ue(e, this.nextUid)]
    }, remove: function (e) {
      var t = this[e = ue(e, this.nextUid)];
      return delete this[e], t
    }
  };
  var Lt = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Bt = /,/, Ft = /^\s*(_?)(\S+?)\1\s*$/,
    Rt = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, qt = r("$injector"), jt = r("$animate"), Ut = ["$provide", function (e) {
      this.$$selectors = {}, this.register = function (t, n) {
        var r = t + "-animation";
        if (t && "." != t.charAt(0)) throw jt("notcsel", t);
        this.$$selectors[t.substr(1)] = r, e.factory(r, n)
      }, this.classNameFilter = function (e) {
        return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
      }, this.$get = ["$timeout", "$$asyncCallback", function (e, t) {
        return {
          enter: function (e, n, r, o) {
            r ? r.after(e) : (n && n[0] || (n = r.parent()), n.append(e)), o && t(o)
          }, leave: function (e, n) {
            e.remove(), n && t(n)
          }, move: function (e, t, n, r) {
            this.enter(e, t, n, r)
          }, addClass: function (e, n, r) {
            n = y(n) ? n : mt(n) ? n.join(" ") : "", i(e, function (e) {
              oe(e, n)
            }), r && t(r)
          }, removeClass: function (e, n, r) {
            n = y(n) ? n : mt(n) ? n.join(" ") : "", i(e, function (e) {
              re(e, n)
            }), r && t(r)
          }, setClass: function (e, n, r, o) {
            i(e, function (e) {
              oe(e, n), re(e, r)
            }), o && t(o)
          }, enabled: d
        }
      }]
    }], Ht = r("$compile");
  he.$inject = ["$provide", "$$sanitizeUriProvider"];
  var Vt = /^(x[\:\-_]|data[\:\-_])/i, zt = r("$interpolate"), Wt = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    Gt = {http: 80, https: 443, ftp: 21}, Yt = r("$location");
  Pe.prototype = _e.prototype = Ce.prototype = {
    $$html5: !1, $$replace: !1, absUrl: Ee("$$absUrl"), url: function (e) {
      return m(e) ? this.$$url : ((e = Wt.exec(e))[1] && this.path(decodeURIComponent(e[1])), (e[2] || e[1]) && this.search(e[3] || ""), this.hash(e[5] || ""), this)
    }, protocol: Ee("$$protocol"), host: Ee("$$host"), port: Ee("$$port"), path: Ae("$$path", function (e) {
      return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
    }), search: function (e, t) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (y(e) || $(e)) e = e.toString(), this.$$search = L(e); else {
            if (!b(e)) throw Yt("isrcharg");
            i(e, function (t, n) {
              null == t && delete e[n]
            }), this.$$search = e
          }
          break;
        default:
          m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
      }
      return this.$$compose(), this
    }, hash: Ae("$$hash", function (e) {
      return null !== e ? e.toString() : ""
    }), replace: function () {
      return this.$$replace = !0, this
    }
  };
  var Qt, Kt = r("$parse"), Xt = {}, Jt = Function.prototype.call, Zt = Function.prototype.apply,
    en = Function.prototype.bind, tn = {
      null: function () {
        return null
      }, true: function () {
        return !0
      }, false: function () {
        return !1
      }, undefined: d, "+": function (e, t, r, o) {
        return r = r(e, t), o = o(e, t), v(r) ? v(o) ? r + o : r : v(o) ? o : n
      }, "-": function (e, t, n, r) {
        return n = n(e, t), r = r(e, t), (v(n) ? n : 0) - (v(r) ? r : 0)
      }, "*": function (e, t, n, r) {
        return n(e, t) * r(e, t)
      }, "/": function (e, t, n, r) {
        return n(e, t) / r(e, t)
      }, "%": function (e, t, n, r) {
        return n(e, t) % r(e, t)
      }, "^": function (e, t, n, r) {
        return n(e, t) ^ r(e, t)
      }, "=": d, "===": function (e, t, n, r) {
        return n(e, t) === r(e, t)
      }, "!==": function (e, t, n, r) {
        return n(e, t) !== r(e, t)
      }, "==": function (e, t, n, r) {
        return n(e, t) == r(e, t)
      }, "!=": function (e, t, n, r) {
        return n(e, t) != r(e, t)
      }, "<": function (e, t, n, r) {
        return n(e, t) < r(e, t)
      }, ">": function (e, t, n, r) {
        return n(e, t) > r(e, t)
      }, "<=": function (e, t, n, r) {
        return n(e, t) <= r(e, t)
      }, ">=": function (e, t, n, r) {
        return n(e, t) >= r(e, t)
      }, "&&": function (e, t, n, r) {
        return n(e, t) && r(e, t)
      }, "||": function (e, t, n, r) {
        return n(e, t) || r(e, t)
      }, "&": function (e, t, n, r) {
        return n(e, t) & r(e, t)
      }, "|": function (e, t, n, r) {
        return r(e, t)(e, t, n(e, t))
      }, "!": function (e, t, n) {
        return !n(e, t)
      }
    }, nn = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, rn = function (e) {
      this.options = e
    };
  rn.prototype = {
    constructor: rn, lex: function (e) {
      for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
        if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: this.ch
        }), this.index++; else {
          if (this.isWhitespace(this.ch)) {
            this.index++;
            continue
          }
          var t = (e = this.ch + this.peek()) + this.peek(2), r = tn[this.ch], o = tn[e], i = tn[t];
          i ? (this.tokens.push({
            index: this.index,
            text: t,
            fn: i
          }), this.index += 3) : o ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: o
          }), this.index += 2) : r ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: r
          }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
        this.lastCh = this.ch
      }
      return this.tokens
    }, is: function (e) {
      return -1 !== e.indexOf(this.ch)
    }, was: function (e) {
      return -1 !== e.indexOf(this.lastCh)
    }, peek: function (e) {
      return e = e || 1, this.index + e < this.text.length && this.text.charAt(this.index + e)
    }, isNumber: function (e) {
      return "0" <= e && "9" >= e
    }, isWhitespace: function (e) {
      return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
    }, isIdent: function (e) {
      return "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "_" === e || "$" === e
    }, isExpOperator: function (e) {
      return "-" === e || "+" === e || this.isNumber(e)
    }, throwError: function (e, t, n) {
      throw n = n || this.index, t = v(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, Kt("lexerr", e, t, this.text)
    }, readNumber: function () {
      for (var e = "", t = this.index; this.index < this.text.length;) {
        var n = at(this.text.charAt(this.index));
        if ("." == n || this.isNumber(n)) e += n; else {
          var r = this.peek();
          if ("e" == n && this.isExpOperator(r)) e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n; else {
            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
            this.throwError("Invalid exponent")
          }
        }
        this.index++
      }
      e *= 1, this.tokens.push({
        index: t, text: e, literal: !0, constant: !0, fn: function () {
          return e
        }
      })
    }, readIdent: function () {
      for (var e, t, n, r, o = this, i = "", s = this.index; this.index < this.text.length && ("." === (r = this.text.charAt(this.index)) || this.isIdent(r) || this.isNumber(r));) "." === r && (e = this.index), i += r, this.index++;
      if (e) for (t = this.index; t < this.text.length;) {
        if ("(" === (r = this.text.charAt(t))) {
          n = i.substr(e - s + 1), i = i.substr(0, e - s), this.index = t;
          break
        }
        if (!this.isWhitespace(r)) break;
        t++
      }
      if (s = {index: s, text: i}, tn.hasOwnProperty(i)) s.fn = tn[i], s.literal = !0, s.constant = !0; else {
        var a = Le(i, this.options, this.text);
        s.fn = u(function (e, t) {
          return a(e, t)
        }, {
          assign: function (e, t) {
            return De(e, i, t, o.text, o.options)
          }
        })
      }
      this.tokens.push(s), n && (this.tokens.push({index: e, text: "."}), this.tokens.push({index: e + 1, text: n}))
    }, readString: function (e) {
      var t = this.index;
      this.index++;
      for (var n = "", r = e, o = !1; this.index < this.text.length;) {
        var i = this.text.charAt(this.index), r = r + i;
        if (o) "u" === i ? ((o = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, n += String.fromCharCode(parseInt(o, 16))) : n += nn[i] || i, o = !1; else if ("\\" === i) o = !0; else {
          if (i === e) return this.index++, void this.tokens.push({
            index: t,
            text: r,
            string: n,
            literal: !0,
            constant: !0,
            fn: function () {
              return n
            }
          });
          n += i
        }
        this.index++
      }
      this.throwError("Unterminated quote", t)
    }
  };
  var on = function (e, t, n) {
    this.lexer = e, this.$filter = t, this.options = n
  };
  on.ZERO = u(function () {
    return 0
  }, {constant: !0}), on.prototype = {
    constructor: on, parse: function (e) {
      return this.text = e, this.tokens = this.lexer.lex(e), e = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
    }, primary: function () {
      var e;
      if (this.expect("(")) e = this.filterChain(), this.consume(")"); else if (this.expect("[")) e = this.arrayDeclaration(); else if (this.expect("{")) e = this.object(); else {
        var t = this.expect();
        (e = t.fn) || this.throwError("not a primary expression", t), e.literal = !!t.literal, e.constant = !!t.constant
      }
      for (var n; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
      return e
    }, throwError: function (e, t) {
      throw Kt("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
    }, peekToken: function () {
      if (0 === this.tokens.length) throw Kt("ueoe", this.text);
      return this.tokens[0]
    }, peek: function (e, t, n, r) {
      if (0 < this.tokens.length) {
        var o = this.tokens[0], i = o.text;
        if (i === e || i === t || i === n || i === r || !(e || t || n || r)) return o
      }
      return !1
    }, expect: function (e, t, n, r) {
      return !!(e = this.peek(e, t, n, r)) && (this.tokens.shift(), e)
    }, consume: function (e) {
      this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
    }, unaryFn: function (e, t) {
      return u(function (n, r) {
        return e(n, r, t)
      }, {constant: t.constant})
    }, ternaryFn: function (e, t, n) {
      return u(function (r, o) {
        return e(r, o) ? t(r, o) : n(r, o)
      }, {constant: e.constant && t.constant && n.constant})
    }, binaryFn: function (e, t, n) {
      return u(function (r, o) {
        return t(r, o, e, n)
      }, {constant: e.constant && n.constant})
    }, statements: function () {
      for (var e = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function (t, n) {
        for (var r, o = 0; o < e.length; o++) {
          var i = e[o];
          i && (r = i(t, n))
        }
        return r
      }
    }, filterChain: function () {
      for (var e, t = this.expression(); ;) {
        if (!(e = this.expect("|"))) return t;
        t = this.binaryFn(t, e.fn, this.filter())
      }
    }, filter: function () {
      for (var e = this.expect(), t = this.$filter(e.text), n = []; ;) {
        if (!(e = this.expect(":"))) {
          return function () {
            return function (e, r, o) {
              o = [o];
              for (var i = 0; i < n.length; i++) o.push(n[i](e, r));
              return t.apply(e, o)
            }
          }
        }
        n.push(this.expression())
      }
    }, expression: function () {
      return this.assignment()
    }, assignment: function () {
      var e, t, n = this.ternary();
      return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function (t, r) {
        return n.assign(t, e(t, r), r)
      }) : n
    }, ternary: function () {
      var e, t, n = this.logicalOR();
      return this.expect("?") ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
    }, logicalOR: function () {
      for (var e, t = this.logicalAND(); ;) {
        if (!(e = this.expect("||"))) return t;
        t = this.binaryFn(t, e.fn, this.logicalAND())
      }
    }, logicalAND: function () {
      var e, t = this.equality();
      return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
    }, equality: function () {
      var e, t = this.relational();
      return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
    }, relational: function () {
      var e, t = this.additive();
      return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
    }, additive: function () {
      for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
      return t
    }, multiplicative: function () {
      for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
      return t
    }, unary: function () {
      var e;
      return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(on.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
    }, fieldAccess: function (e) {
      var t = this, n = this.expect().text, r = Le(n, this.options, this.text);
      return u(function (t, n, o) {
        return r(o || e(t, n))
      }, {
        assign: function (r, o, i) {
          return (i = e(r, i)) || e.assign(r, i = {}), De(i, n, o, t.text, t.options)
        }
      })
    }, objectIndex: function (e) {
      var t = this, r = this.expression();
      return this.consume("]"), u(function (o, i) {
        var s, a = e(o, i), l = r(o, i);
        return Me(l, t.text), a ? ((a = Ne(a[l], t.text)) && a.then && t.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function (e) {
          s.$$v = e
        })), a = a.$$v), a) : n
      }, {
        assign: function (n, o, i) {
          var s = Me(r(n, i), t.text);
          return (i = Ne(e(n, i), t.text)) || e.assign(n, i = {}), i[s] = o
        }
      })
    }, functionCall: function (e, t) {
      var n = [];
      if (")" !== this.peekToken().text) do {
        n.push(this.expression())
      } while (this.expect(","));
      this.consume(")");
      var r = this;
      return function (o, i) {
        for (var s = [], a = t ? t(o, i) : o, l = 0; l < n.length; l++) s.push(Ne(n[l](o, i), r.text));
        l = e(o, i, a) || d, Ne(a, r.text);
        var c = r.text;
        if (l) {
          if (l.constructor === l) throw Kt("isecfn", c);
          if (l === Jt || l === Zt || en && l === en) throw Kt("isecff", c)
        }
        return s = l.apply ? l.apply(a, s) : l(s[0], s[1], s[2], s[3], s[4]), Ne(s, r.text)
      }
    }, arrayDeclaration: function () {
      var e = [], t = !0;
      if ("]" !== this.peekToken().text) do {
        if (this.peek("]")) break;
        var n = this.expression();
        e.push(n), n.constant || (t = !1)
      } while (this.expect(","));
      return this.consume("]"), u(function (t, n) {
        for (var r = [], o = 0; o < e.length; o++) r.push(e[o](t, n));
        return r
      }, {literal: !0, constant: t})
    }, object: function () {
      var e = [], t = !0;
      if ("}" !== this.peekToken().text) do {
        if (this.peek("}")) break;
        var n = (n = this.expect()).string || n.text;
        this.consume(":");
        var r = this.expression();
        e.push({key: n, value: r}), r.constant || (t = !1)
      } while (this.expect(","));
      return this.consume("}"), u(function (t, n) {
        for (var r = {}, o = 0; o < e.length; o++) {
          var i = e[o];
          r[i.key] = i.value(t, n)
        }
        return r
      }, {literal: !0, constant: t})
    }
  };
  var sn = {}, an = {}, ln = r("$sce"),
    cn = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, un = t.createElement("a"),
    pn = Fe(e.location.href);
  qe.$inject = ["$provide"], je.$inject = ["$locale"], Ue.$inject = ["$locale"];
  var fn = ".", dn = {
    yyyy: ze("FullYear", 4),
    yy: ze("FullYear", 2, 0, !0),
    y: ze("FullYear", 1),
    MMMM: We("Month"),
    MMM: We("Month", !0),
    MM: ze("Month", 2, 1),
    M: ze("Month", 1, 1),
    dd: ze("Date", 2),
    d: ze("Date", 1),
    HH: ze("Hours", 2),
    H: ze("Hours", 1),
    hh: ze("Hours", 2, -12),
    h: ze("Hours", 1, -12),
    mm: ze("Minutes", 2),
    m: ze("Minutes", 1),
    ss: ze("Seconds", 2),
    s: ze("Seconds", 1),
    sss: ze("Milliseconds", 3),
    EEEE: We("Day"),
    EEE: We("Day", !0),
    a: function (e, t) {
      return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
    },
    Z: function (e) {
      return e = -1 * e.getTimezoneOffset(), e = (0 <= e ? "+" : "") + (Ve(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + Ve(Math.abs(e % 60), 2))
    }
  }, hn = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, gn = /^\-?\d+$/;
  Ge.$inject = ["$locale"];
  var mn = g(at), vn = g(ct);
  Ye.$inject = ["$parse"];
  var bn = g({
    restrict: "E", compile: function (e, n) {
      if (8 >= tt && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function (e, t) {
        var n = "[object SVGAnimatedString]" === ft.call(t.prop("href")) ? "xlink:href" : "href";
        t.on("click", function (e) {
          t.attr(n) || e.preventDefault()
        })
      }
    }
  }), yn = {};
  i(Ot, function (e, t) {
    if ("multiple" != e) {
      var n = ge("ng-" + t);
      yn[n] = function () {
        return {
          priority: 100, link: function (e, r, o) {
            e.$watch(o[n], function (e) {
              o.$set(t, !!e)
            })
          }
        }
      }
    }
  }), i(["src", "srcset", "href"], function (e) {
    var t = ge("ng-" + e);
    yn[t] = function () {
      return {
        priority: 99, link: function (n, r, o) {
          var i = e, s = e;
          "href" === e && "[object SVGAnimatedString]" === ft.call(r.prop("href")) && (s = "xlinkHref", o.$attr[s] = "xlink:href", i = null), o.$observe(t, function (t) {
            t ? (o.$set(s, t), tt && i && r.prop(i, o[s])) : "href" === e && o.$set(s, null)
          })
        }
      }
    }
  });
  var $n = {$addControl: d, $removeControl: d, $setValidity: d, $setDirty: d, $setPristine: d};
  Ke.$inject = ["$element", "$attrs", "$scope", "$animate"];
  var xn = function (e) {
      return ["$timeout", function (t) {
        return {
          name: "form", restrict: e ? "EAC" : "E", controller: Ke, compile: function () {
            return {
              pre: function (e, r, o, i) {
                if (!o.action) {
                  var s = function (e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                  };
                  kt(r[0], "submit", s), r.on("$destroy", function () {
                    t(function () {
                      Tt(r[0], "submit", s)
                    }, 0, !1)
                  })
                }
                var a = r.parent().controller("form"), l = o.name || o.ngForm;
                l && De(e, l, i, l), a && r.on("$destroy", function () {
                  a.$removeControl(i), l && De(e, l, n, l), u(i, $n)
                })
              }
            }
          }
        }
      }]
    }, wn = xn(), kn = xn(!0), Tn = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    Sn = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    Cn = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, _n = {
      text: Ze, number: function (e, t, r, o, i, s) {
        Ze(e, t, r, o, i, s), o.$parsers.push(function (e) {
          var t = o.$isEmpty(e);
          return t || Cn.test(e) ? (o.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (o.$setValidity("number", !1), n)
        }), function (e, t, n, r, o) {
          b(o) && (e.$$hasNativeValidators = !0, e.$parsers.push(function (i) {
            if (e.$error[t] || Je(o, r) || !Je(o, n)) return i;
            e.$setValidity(t, !1)
          }))
        }(o, "number", Pn, null, o.$$validityState), o.$formatters.push(function (e) {
          return o.$isEmpty(e) ? "" : "" + e
        }), r.min && (e = function (e) {
          var t = parseFloat(r.min);
          return Xe(o, "min", o.$isEmpty(e) || e >= t, e)
        }, o.$parsers.push(e), o.$formatters.push(e)), r.max && (e = function (e) {
          var t = parseFloat(r.max);
          return Xe(o, "max", o.$isEmpty(e) || e <= t, e)
        }, o.$parsers.push(e), o.$formatters.push(e)), o.$formatters.push(function (e) {
          return Xe(o, "number", o.$isEmpty(e) || $(e), e)
        })
      }, url: function (e, t, n, r, o, i) {
        Ze(e, t, n, r, o, i), e = function (e) {
          return Xe(r, "url", r.$isEmpty(e) || Tn.test(e), e)
        }, r.$formatters.push(e), r.$parsers.push(e)
      }, email: function (e, t, n, r, o, i) {
        Ze(e, t, n, r, o, i), e = function (e) {
          return Xe(r, "email", r.$isEmpty(e) || Sn.test(e), e)
        }, r.$formatters.push(e), r.$parsers.push(e)
      }, radio: function (e, t, n, r) {
        m(n.name) && t.attr("name", l()), t.on("click", function () {
          t[0].checked && e.$apply(function () {
            r.$setViewValue(n.value)
          })
        }), r.$render = function () {
          t[0].checked = n.value == r.$viewValue
        }, n.$observe("value", r.$render)
      }, checkbox: function (e, t, n, r) {
        var o = n.ngTrueValue, i = n.ngFalseValue;
        y(o) || (o = !0), y(i) || (i = !1), t.on("click", function () {
          e.$apply(function () {
            r.$setViewValue(t[0].checked)
          })
        }), r.$render = function () {
          t[0].checked = r.$viewValue
        }, r.$isEmpty = function (e) {
          return e !== o
        }, r.$formatters.push(function (e) {
          return e === o
        }), r.$parsers.push(function (e) {
          return e ? o : i
        })
      }, hidden: d, button: d, submit: d, reset: d, file: d
    }, Pn = ["badInput"], En = ["$browser", "$sniffer", function (e, t) {
      return {
        restrict: "E", require: "?ngModel", link: function (n, r, o, i) {
          i && (_n[at(o.type)] || _n.text)(n, r, o, i, t, e)
        }
      }
    }], An = "ng-valid", Mn = "ng-invalid", Nn = "ng-pristine", Dn = "ng-dirty",
    On = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (e, t, n, o, s, a) {
      function l(e, t) {
        t = t ? "-" + j(t, "-") : "", a.removeClass(o, (e ? Mn : An) + t), a.addClass(o, (e ? An : Mn) + t)
      }

      this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
      var c = s(n.ngModel), u = c.assign;
      if (!u) throw r("ngModel")("nonassign", n.ngModel, O(o));
      this.$render = d, this.$isEmpty = function (e) {
        return m(e) || "" === e || null === e || e != e
      };
      var p = o.inheritedData("$formController") || $n, f = 0, h = this.$error = {};
      o.addClass(Nn), l(!0), this.$setValidity = function (e, t) {
        h[e] !== !t && (t ? (h[e] && f--, f || (l(!0), this.$valid = !0, this.$invalid = !1)) : (l(!1), this.$invalid = !0, this.$valid = !1, f++), h[e] = !t, l(t, e), p.$setValidity(e, t, this))
      }, this.$setPristine = function () {
        this.$dirty = !1, this.$pristine = !0, a.removeClass(o, Dn), a.addClass(o, Nn)
      }, this.$setViewValue = function (n) {
        this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(o, Nn), a.addClass(o, Dn), p.$setDirty()), i(this.$parsers, function (e) {
          n = e(n)
        }), this.$modelValue !== n && (this.$modelValue = n, u(e, n), i(this.$viewChangeListeners, function (e) {
          try {
            e()
          } catch (e) {
            t(e)
          }
        }))
      };
      var g = this;
      e.$watch(function () {
        var t = c(e);
        if (g.$modelValue !== t) {
          var n = g.$formatters, r = n.length;
          for (g.$modelValue = t; r--;) t = n[r](t);
          g.$viewValue !== t && (g.$viewValue = t, g.$render())
        }
        return t
      })
    }], In = function () {
      return {
        require: ["ngModel", "^?form"], controller: On, link: function (e, t, n, r) {
          var o = r[0], i = r[1] || $n;
          i.$addControl(o), e.$on("$destroy", function () {
            i.$removeControl(o)
          })
        }
      }
    }, Ln = g({
      require: "ngModel", link: function (e, t, n, r) {
        r.$viewChangeListeners.push(function () {
          e.$eval(n.ngChange)
        })
      }
    }), Bn = function () {
      return {
        require: "?ngModel", link: function (e, t, n, r) {
          if (r) {
            n.required = !0;
            var o = function (e) {
              if (!n.required || !r.$isEmpty(e)) return r.$setValidity("required", !0), e;
              r.$setValidity("required", !1)
            };
            r.$formatters.push(o), r.$parsers.unshift(o), n.$observe("required", function () {
              o(r.$viewValue)
            })
          }
        }
      }
    }, Fn = function () {
      return {
        require: "ngModel", link: function (e, t, r, o) {
          var s = (e = /\/(.*)\//.exec(r.ngList)) && RegExp(e[1]) || r.ngList || ",";
          o.$parsers.push(function (e) {
            if (!m(e)) {
              var t = [];
              return e && i(e.split(s), function (e) {
                e && t.push(vt(e))
              }), t
            }
          }), o.$formatters.push(function (e) {
            return mt(e) ? e.join(", ") : n
          }), o.$isEmpty = function (e) {
            return !e || !e.length
          }
        }
      }
    }, Rn = /^(true|false|\d+)$/, qn = function () {
      return {
        priority: 100, compile: function (e, t) {
          return Rn.test(t.ngValue) ? function (e, t, n) {
            n.$set("value", e.$eval(n.ngValue))
          } : function (e, t, n) {
            e.$watch(n.ngValue, function (e) {
              n.$set("value", e)
            })
          }
        }
      }
    }, jn = Qe({
      compile: function (e) {
        return e.addClass("ng-binding"), function (e, t, r) {
          t.data("$binding", r.ngBind), e.$watch(r.ngBind, function (e) {
            t.text(e == n ? "" : e)
          })
        }
      }
    }), Un = ["$interpolate", function (e) {
      return function (t, n, r) {
        t = e(n.attr(r.$attr.ngBindTemplate)), n.addClass("ng-binding").data("$binding", t), r.$observe("ngBindTemplate", function (e) {
          n.text(e)
        })
      }
    }], Hn = ["$sce", "$parse", function (e, t) {
      return {
        compile: function (n) {
          return n.addClass("ng-binding"), function (n, r, o) {
            r.data("$binding", o.ngBindHtml);
            var i = t(o.ngBindHtml);
            n.$watch(function () {
              return (i(n) || "").toString()
            }, function (t) {
              r.html(e.getTrustedHtml(i(n)) || "")
            })
          }
        }
      }
    }], Vn = et("", !0), zn = et("Odd", 0), Wn = et("Even", 1), Gn = Qe({
      compile: function (e, t) {
        t.$set("ngCloak", n), e.removeClass("ng-cloak")
      }
    }), Yn = [function () {
      return {scope: !0, controller: "@", priority: 500}
    }], Qn = {}, Kn = {blur: !0, focus: !0};
  i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
    var t = ge("ng-" + e);
    Qn[t] = ["$parse", "$rootScope", function (n, r) {
      return {
        compile: function (o, i) {
          var s = n(i[t], !0);
          return function (t, n) {
            n.on(e, function (n) {
              var o = function () {
                s(t, {$event: n})
              };
              Kn[e] && r.$$phase ? t.$evalAsync(o) : t.$apply(o)
            })
          }
        }
      }
    }]
  });
  var Xn = ["$animate", function (e) {
    return {
      transclude: "element",
      priority: 600,
      terminal: !0,
      restrict: "A",
      $$tlb: !0,
      link: function (n, r, o, i, s) {
        var a, l, c;
        n.$watch(o.ngIf, function (i) {
          D(i) ? l || (l = n.$new(), s(l, function (n) {
            n[n.length++] = t.createComment(" end ngIf: " + o.ngIf + " "), a = {clone: n}, e.enter(n, r.parent(), r)
          })) : (c && (c.remove(), c = null), l && (l.$destroy(), l = null), a && (c = W(a.clone), e.leave(c, function () {
            c = null
          }), a = null))
        })
      }
    }
  }], Jn = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (e, t, n, r, o) {
    return {
      restrict: "ECA",
      priority: 400,
      terminal: !0,
      transclude: "element",
      controller: ht.noop,
      compile: function (i, s) {
        var a = s.ngInclude || s.src, l = s.onload || "", c = s.autoscroll;
        return function (i, s, u, p, f) {
          var d, h, g, m = 0, b = function () {
            h && (h.remove(), h = null), d && (d.$destroy(), d = null), g && (r.leave(g, function () {
              h = null
            }), h = g, g = null)
          };
          i.$watch(o.parseAsResourceUrl(a), function (o) {
            var a = ++m;
            o ? (e.get(o, {cache: t}).success(function (e) {
              if (a === m) {
                var t = i.$new();
                p.template = e, e = f(t, function (e) {
                  b(), r.enter(e, null, s, function () {
                    !v(c) || c && !i.$eval(c) || n()
                  })
                }), g = e, (d = t).$emit("$includeContentLoaded"), i.$eval(l)
              }
            }).error(function () {
              a === m && b()
            }), i.$emit("$includeContentRequested")) : (b(), p.template = null)
          })
        }
      }
    }
  }], Zn = ["$compile", function (e) {
    return {
      restrict: "ECA", priority: -400, require: "ngInclude", link: function (t, n, r, o) {
        n.html(o.template), e(n.contents())(t)
      }
    }
  }], er = Qe({
    priority: 450, compile: function () {
      return {
        pre: function (e, t, n) {
          e.$eval(n.ngInit)
        }
      }
    }
  }), tr = Qe({terminal: !0, priority: 1e3}), nr = ["$locale", "$interpolate", function (e, t) {
    var n = /{}/g;
    return {
      restrict: "EA", link: function (r, o, s) {
        var a = s.count, l = s.$attr.when && o.attr(s.$attr.when), c = s.offset || 0, u = r.$eval(l) || {}, p = {},
          f = t.startSymbol(), d = t.endSymbol(), h = /^when(Minus)?(.+)$/;
        i(s, function (e, t) {
          h.test(t) && (u[at(t.replace("when", "").replace("Minus", "-"))] = o.attr(s.$attr[t]))
        }), i(u, function (e, r) {
          p[r] = t(e.replace(n, f + a + "-" + c + d))
        }), r.$watch(function () {
          var t = parseFloat(r.$eval(a));
          return isNaN(t) ? "" : (t in u || (t = e.pluralCat(t - c)), p[t](r, o, !0))
        }, function (e) {
          o.text(e)
        })
      }
    }
  }], rr = ["$parse", "$animate", function (e, n) {
    var s = r("ngRepeat");
    return {
      transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function (r, a, l, c, u) {
        var p, f, d, h, g, m, v = l.ngRepeat,
          b = v.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), y = {$id: ue};
        if (!b) throw s("iexp", v);
        if (l = b[1], c = b[2], (b = b[3]) ? (p = e(b), f = function (e, t, n) {
            return m && (y[m] = e), y[g] = t, y.$index = n, p(r, y)
          }) : (d = function (e, t) {
            return ue(t)
          }, h = function (e) {
            return e
          }), !(b = l.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw s("iidexp", l);
        g = b[3] || b[1], m = b[2];
        var $ = {};
        r.$watchCollection(c, function (e) {
          var l, c, p, b, y, x, w, k, T, S, C = a[0], _ = {}, P = [];
          if (o(e)) T = e, k = f || d; else {
            k = f || h, T = [];
            for (x in e) e.hasOwnProperty(x) && "$" != x.charAt(0) && T.push(x);
            T.sort()
          }
          for (b = T.length, c = P.length = T.length, l = 0; l < c; l++) if (x = e === T ? l : T[l], w = e[x], p = k(x, w, l), V(p, "`track by` id"), $.hasOwnProperty(p)) S = $[p], delete $[p], _[p] = S, P[l] = S; else {
            if (_.hasOwnProperty(p)) throw i(P, function (e) {
              e && e.scope && ($[e.id] = e)
            }), s("dupes", v, p, M(w));
            P[l] = {id: p}, _[p] = !1
          }
          for (x in $) $.hasOwnProperty(x) && (S = $[x], l = W(S.clone), n.leave(l), i(l, function (e) {
            e.$$NG_REMOVED = !0
          }), S.scope.$destroy());
          for (l = 0, c = T.length; l < c; l++) {
            if (x = e === T ? l : T[l], w = e[x], S = P[l], P[l - 1] && (C = P[l - 1].clone[P[l - 1].clone.length - 1]), S.scope) {
              y = S.scope, p = C;
              do {
                p = p.nextSibling
              } while (p && p.$$NG_REMOVED);
              S.clone[0] != p && n.move(W(S.clone), null, nt(C)), C = S.clone[S.clone.length - 1]
            } else y = r.$new();
            y[g] = w, m && (y[m] = x), y.$index = l, y.$first = 0 === l, y.$last = l === b - 1, y.$middle = !(y.$first || y.$last), y.$odd = !(y.$even = 0 == (1 & l)), S.scope || u(y, function (e) {
              e[e.length++] = t.createComment(" end ngRepeat: " + v + " "), n.enter(e, null, nt(C)), C = e, S.scope = y, S.clone = e, _[S.id] = S
            })
          }
          $ = _
        })
      }
    }
  }], or = ["$animate", function (e) {
    return function (t, n, r) {
      t.$watch(r.ngShow, function (t) {
        e[D(t) ? "removeClass" : "addClass"](n, "ng-hide")
      })
    }
  }], ir = ["$animate", function (e) {
    return function (t, n, r) {
      t.$watch(r.ngHide, function (t) {
        e[D(t) ? "addClass" : "removeClass"](n, "ng-hide")
      })
    }
  }], sr = Qe(function (e, t, n) {
    e.$watch(n.ngStyle, function (e, n) {
      n && e !== n && i(n, function (e, n) {
        t.css(n, "")
      }), e && t.css(e)
    }, !0)
  }), ar = ["$animate", function (e) {
    return {
      restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {}
      }], link: function (t, n, r, o) {
        var s = [], a = [], l = [], c = [];
        t.$watch(r.ngSwitch || r.on, function (n) {
          var u, p;
          for (u = 0, p = l.length; u < p; ++u) l[u].remove();
          for (u = l.length = 0, p = c.length; u < p; ++u) {
            var f = a[u];
            c[u].$destroy(), l[u] = f, e.leave(f, function () {
              l.splice(u, 1)
            })
          }
          a.length = 0, c.length = 0, (s = o.cases["!" + n] || o.cases["?"]) && (t.$eval(r.change), i(s, function (n) {
            var r = t.$new();
            c.push(r), n.transclude(r, function (t) {
              var r = n.element;
              a.push(t), e.enter(t, r.parent(), r)
            })
          }))
        })
      }
    }
  }], lr = Qe({
    transclude: "element", priority: 800, require: "^ngSwitch", link: function (e, t, n, r, o) {
      r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
        transclude: o,
        element: t
      })
    }
  }), cr = Qe({
    transclude: "element", priority: 800, require: "^ngSwitch", link: function (e, t, n, r, o) {
      r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: o, element: t})
    }
  }), ur = Qe({
    link: function (e, t, n, o, i) {
      if (!i) throw r("ngTransclude")("orphan", O(t));
      i(function (e) {
        t.empty(), t.append(e)
      })
    }
  }), pr = ["$templateCache", function (e) {
    return {
      restrict: "E", terminal: !0, compile: function (t, n) {
        "text/ng-template" == n.type && e.put(n.id, t[0].text)
      }
    }
  }], fr = r("ngOptions"), dr = g({terminal: !0}), hr = ["$compile", "$parse", function (e, r) {
    var o = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      a = {$setViewValue: d};
    return {
      restrict: "E",
      require: ["select", "?ngModel"],
      controller: ["$element", "$scope", "$attrs", function (e, t, n) {
        var r, o = this, i = {}, s = a;
        o.databound = n.ngModel, o.init = function (e, t, n) {
          s = e, r = n
        }, o.addOption = function (t) {
          V(t, '"option value"'), i[t] = !0, s.$viewValue == t && (e.val(t), r.parent() && r.remove())
        }, o.removeOption = function (e) {
          this.hasOption(e) && (delete i[e], s.$viewValue == e && this.renderUnknownOption(e))
        }, o.renderUnknownOption = function (t) {
          t = "? " + ue(t) + " ?", r.val(t), e.prepend(r), e.val(t), r.prop("selected", !0)
        }, o.hasOption = function (e) {
          return i.hasOwnProperty(e)
        }, t.$on("$destroy", function () {
          o.renderUnknownOption = d
        })
      }],
      link: function (a, l, c, u) {
        if (u[1]) {
          var p = u[0];
          u = u[1];
          var f, d = c.multiple, h = c.ngOptions, g = !1, b = nt(t.createElement("option")),
            y = nt(t.createElement("optgroup")), $ = b.clone();
          c = 0;
          for (var x = l.children(), w = x.length; c < w; c++) if ("" === x[c].value) {
            f = g = x.eq(c);
            break
          }
          p.init(u, g, $), d && (u.$isEmpty = function (e) {
            return !e || 0 === e.length
          }), h ? function (t, i, a) {
            function l() {
              var e, n, r, o, l, c = {"": []}, h = [""];
              r = a.$modelValue, o = w(t) || [];
              var S, C, _, P = m ? s(o) : o;
              if (C = {}, _ = !1, d) if (n = a.$modelValue, k && mt(n)) for (_ = new pe([]), e = {}, l = 0; l < n.length; l++) e[f] = n[l], _.put(k(t, e), n[l]); else _ = new pe(n);
              l = _;
              var E, A;
              for (_ = 0; S = P.length, _ < S; _++) {
                if (n = _, m) {
                  if ("$" === (n = P[_]).charAt(0)) continue;
                  C[m] = n
                }
                C[f] = o[n], (n = c[e = $(t, C) || ""]) || (n = c[e] = [], h.push(e)), d ? e = v(l.remove(k ? k(t, C) : x(t, C))) : (k ? (e = {}, e[f] = r, e = k(t, e) === k(t, C)) : e = r === x(t, C), l = l || e), E = v(E = u(t, C)) ? E : "", n.push({
                  id: k ? k(t, C) : m ? P[_] : _,
                  label: E,
                  selected: e
                })
              }
              for (d || (g || null === r ? c[""].unshift({
                id: "",
                label: "",
                selected: !l
              }) : l || c[""].unshift({id: "?", label: "", selected: !0})), C = 0, P = h.length; C < P; C++) {
                for (n = c[e = h[C]], T.length <= C ? (r = {
                  element: y.clone().attr("label", e),
                  label: n.label
                }, o = [r], T.push(o), i.append(r.element)) : (o = T[C], (r = o[0]).label != e && r.element.attr("label", r.label = e)), E = null, _ = 0, S = n.length; _ < S; _++) e = n[_], (l = o[_ + 1]) ? (E = l.element, l.label !== e.label && (E.text(l.label = e.label), E.prop("label", l.label)), l.id !== e.id && E.val(l.id = e.id), E[0].selected !== e.selected && (E.prop("selected", l.selected = e.selected), tt && E.prop("selected", l.selected))) : ("" === e.id && g ? A = g : (A = b.clone()).val(e.id).prop("selected", e.selected).attr("selected", e.selected).prop("label", e.label).text(e.label), o.push({
                  element: A,
                  label: e.label,
                  id: e.id,
                  selected: e.selected
                }), p.addOption(e.label, A), E ? E.after(A) : r.element.append(A), E = A);
                for (_++; o.length > _;) e = o.pop(), p.removeOption(e.label), e.element.remove()
              }
              for (; T.length > C;) T.pop()[0].element.remove()
            }

            var c;
            if (!(c = h.match(o))) throw fr("iexp", h, O(i));
            var u = r(c[2] || c[1]), f = c[4] || c[6], m = c[5], $ = r(c[3] || ""), x = r(c[2] ? c[1] : f), w = r(c[7]),
              k = c[8] ? r(c[8]) : null, T = [[{element: i, label: ""}]];
            g && (e(g)(t), g.removeClass("ng-scope"), g.remove()), i.empty(), i.on("change", function () {
              t.$apply(function () {
                var e, r, o, s, c, u, p, h, g = w(t) || [], v = {};
                if (d) {
                  for (o = [], c = 0, p = T.length; c < p; c++) for (e = T[c], s = 1, u = e.length; s < u; s++) if ((r = e[s].element)[0].selected) {
                    if (r = r.val(), m && (v[m] = r), k) for (h = 0; h < g.length && (v[f] = g[h], k(t, v) != r); h++) ; else v[f] = g[r];
                    o.push(x(t, v))
                  }
                } else if ("?" == (r = i.val())) o = n; else if ("" === r) o = null; else if (k) {
                  for (h = 0; h < g.length; h++) if (v[f] = g[h], k(t, v) == r) {
                    o = x(t, v);
                    break
                  }
                } else v[f] = g[r], m && (v[m] = r), o = x(t, v);
                a.$setViewValue(o), l()
              })
            }), a.$render = l, t.$watchCollection(w, l), t.$watchCollection(function () {
              var e = {}, n = w(t);
              if (n) {
                for (var r = Array(n.length), o = 0, i = n.length; o < i; o++) e[f] = n[o], r[o] = u(t, e);
                return r
              }
            }, l), d && t.$watchCollection(function () {
              return a.$modelValue
            }, l)
          }(a, l, u) : d ? function (e, t, n) {
            var r;
            n.$render = function () {
              var e = new pe(n.$viewValue);
              i(t.find("option"), function (t) {
                t.selected = v(e.get(t.value))
              })
            }, e.$watch(function () {
              E(r, n.$viewValue) || (r = P(n.$viewValue), n.$render())
            }), t.on("change", function () {
              e.$apply(function () {
                var e = [];
                i(t.find("option"), function (t) {
                  t.selected && e.push(t.value)
                }), n.$setViewValue(e)
              })
            })
          }(a, l, u) : function (e, t, n, r) {
            n.$render = function () {
              var e = n.$viewValue;
              r.hasOption(e) ? ($.parent() && $.remove(), t.val(e), "" === e && f.prop("selected", !0)) : m(e) && f ? t.val("") : r.renderUnknownOption(e)
            }, t.on("change", function () {
              e.$apply(function () {
                $.parent() && $.remove(), n.$setViewValue(t.val())
              })
            })
          }(a, l, u, p)
        }
      }
    }
  }], gr = ["$interpolate", function (e) {
    var t = {addOption: d, removeOption: d};
    return {
      restrict: "E", priority: 100, compile: function (n, r) {
        if (m(r.value)) {
          var o = e(n.text(), !0);
          o || r.$set("value", n.text())
        }
        return function (e, n, r) {
          var i = n.parent(), s = i.data("$selectController") || i.parent().data("$selectController");
          s && s.databound ? n.prop("selected", !1) : s = t, o ? e.$watch(o, function (e, t) {
            r.$set("value", e), e !== t && s.removeOption(t), s.addOption(e)
          }) : s.addOption(r.value), n.on("$destroy", function () {
            s.removeOption(r.value)
          })
        }
      }
    }
  }], mr = g({restrict: "E", terminal: !0});
  e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((rt = e.jQuery) && rt.fn.on ? (nt = rt, u(rt.fn, {
    scope: Dt.scope,
    isolateScope: Dt.isolateScope,
    controller: Dt.controller,
    injector: Dt.injector,
    inheritedData: Dt.inheritedData
  }), Y("remove", !0, !0, !1), Y("empty", !1, !1, !1), Y("html", !1, !1, !0)) : nt = Q, ht.element = nt, function (t) {
    u(t, {
      bootstrap: q,
      copy: _,
      extend: u,
      equals: E,
      element: nt,
      forEach: i,
      injector: de,
      noop: d,
      bind: A,
      toJson: M,
      fromJson: N,
      identity: h,
      isUndefined: m,
      isDefined: v,
      isString: y,
      isFunction: w,
      isObject: b,
      isNumber: $,
      isElement: function (e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
      },
      isArray: mt,
      version: $t,
      isDate: x,
      lowercase: at,
      uppercase: ct,
      callbacks: {counter: 0},
      $$minErr: r,
      $$csp: bt
    }), ot = function (e) {
      var t = r("$injector"), n = r("ng");
      return e = e.angular || (e.angular = {}), e.$$minErr = e.$$minErr || r, e.module || (e.module = function () {
        var e = {};
        return function (r, o, i) {
          if ("hasOwnProperty" === r) throw n("badname", "module");
          return o && e.hasOwnProperty(r) && (e[r] = null), e[r] || (e[r] = function () {
            function e(e, t, r) {
              return function () {
                return n[r || "push"]([e, t, arguments]), l
              }
            }

            if (!o) throw t("nomod", r);
            var n = [], s = [], a = e("$injector", "invoke"), l = {
              _invokeQueue: n,
              _runBlocks: s,
              requires: o,
              name: r,
              provider: e("$provide", "provider"),
              factory: e("$provide", "factory"),
              service: e("$provide", "service"),
              value: e("$provide", "value"),
              constant: e("$provide", "constant", "unshift"),
              animation: e("$animateProvider", "register"),
              filter: e("$filterProvider", "register"),
              controller: e("$controllerProvider", "register"),
              directive: e("$compileProvider", "directive"),
              config: a,
              run: function (e) {
                return s.push(e), this
              }
            };
            return i && a(i), l
          }())
        }
      }())
    }(e);
    try {
      ot("ngLocale")
    } catch (e) {
      ot("ngLocale", []).provider("$locale", function () {
        this.$get = function () {
          return {
            id: "en-us",
            NUMBER_FORMATS: {
              DECIMAL_SEP: ".",
              GROUP_SEP: ",",
              PATTERNS: [{
                minInt: 1,
                minFrac: 0,
                maxFrac: 3,
                posPre: "",
                posSuf: "",
                negPre: "-",
                negSuf: "",
                gSize: 3,
                lgSize: 3
              }, {
                minInt: 1,
                minFrac: 2,
                maxFrac: 2,
                posPre: "¤",
                posSuf: "",
                negPre: "(¤",
                negSuf: ")",
                gSize: 3,
                lgSize: 3
              }],
              CURRENCY_SYM: "$"
            },
            DATETIME_FORMATS: {
              MONTH: "January February March April May June July August September October November December".split(" "),
              SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
              DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
              SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              AMPMS: ["AM", "PM"],
              medium: "MMM d, y h:mm:ss a",
              short: "M/d/yy h:mm a",
              fullDate: "EEEE, MMMM d, y",
              longDate: "MMMM d, y",
              mediumDate: "MMM d, y",
              shortDate: "M/d/yy",
              mediumTime: "h:mm:ss a",
              shortTime: "h:mm a"
            },
            pluralCat: function (e) {
              return 1 === e ? "one" : "other"
            }
          }
        }
      })
    }
    ot("ng", ["ngLocale"], ["$provide", function (t) {
      t.provider({
        $$sanitizeUri: function () {
          var e = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file):|data:image\/)/;
          this.aHrefSanitizationWhitelist = function (t) {
            return v(t) ? (e = t, this) : e
          }, this.imgSrcSanitizationWhitelist = function (e) {
            return v(e) ? (t = e, this) : t
          }, this.$get = function () {
            return function (n, r) {
              var o, i = r ? t : e;
              return tt && !(8 <= tt) || "" === (o = Fe(n).href) || o.match(i) ? n : "unsafe:" + o
            }
          }
        }
      }), t.provider("$compile", he).directive({
        a: bn,
        input: En,
        textarea: En,
        form: wn,
        script: pr,
        select: hr,
        style: mr,
        option: gr,
        ngBind: jn,
        ngBindHtml: Hn,
        ngBindTemplate: Un,
        ngClass: Vn,
        ngClassEven: Wn,
        ngClassOdd: zn,
        ngCloak: Gn,
        ngController: Yn,
        ngForm: kn,
        ngHide: ir,
        ngIf: Xn,
        ngInclude: Jn,
        ngInit: er,
        ngNonBindable: tr,
        ngPluralize: nr,
        ngRepeat: rr,
        ngShow: or,
        ngStyle: sr,
        ngSwitch: ar,
        ngSwitchWhen: lr,
        ngSwitchDefault: cr,
        ngOptions: dr,
        ngTransclude: ur,
        ngModel: In,
        ngList: Fn,
        ngChange: Ln,
        required: Bn,
        ngRequired: Bn,
        ngValue: qn
      }).directive({ngInclude: Zn}).directive(yn).directive(Qn), t.provider({
        $anchorScroll: function () {
          var e = !0;
          this.disableAutoScrolling = function () {
            e = !1
          }, this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
            function o() {
              var e, r = n.hash();
              r ? (e = s.getElementById(r)) ? e.scrollIntoView() : (e = function (e) {
                var t = null;
                return i(e, function (e) {
                  t || "a" !== at(e.nodeName) || (t = e)
                }), t
              }(s.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
            }

            var s = t.document;
            return e && r.$watch(function () {
              return n.hash()
            }, function () {
              r.$evalAsync(o)
            }), o
          }]
        }, $animate: Ut, $browser: function () {
          this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, r, o) {
            return new function (e, t, r, o) {
              function s(e) {
                try {
                  e.apply(null, ut.call(arguments, 1))
                } finally {
                  if (0 == --v) for (; b.length;) try {
                    b.pop()()
                  } catch (e) {
                    r.error(e)
                  }
                }
              }

              function a() {
                w != l.url() && (w = l.url(), i(S, function (e) {
                  e(l.url())
                }))
              }

              var l = this, c = t[0], u = e.location, p = e.history, f = e.setTimeout, h = e.clearTimeout, g = {};
              l.isMock = !1;
              var v = 0, b = [];
              l.$$completeOutstandingRequest = s, l.$$incOutstandingRequestCount = function () {
                v++
              }, l.notifyWhenNoOutstandingRequests = function (e) {
                i(x, function (e) {
                  e()
                }), 0 === v ? e() : b.push(e)
              };
              var $, x = [];
              l.addPollFn = function (e) {
                return m($) && function (e, t) {
                  !function n() {
                    i(x, function (e) {
                      e()
                    }), $ = t(n, e)
                  }()
                }(100, f), x.push(e), e
              };
              var w = u.href, k = t.find("base"), T = null;
              l.url = function (t, n) {
                if (u !== e.location && (u = e.location), p !== e.history && (p = e.history), !t) return T || u.href.replace(/%27/g, "'");
                if (w != t) {
                  var r = w && Te(w) === Te(t);
                  return w = t, !r && o.history ? n ? p.replaceState(null, "", t) : (p.pushState(null, "", t), k.attr("href", k.attr("href"))) : (r || (T = t), n ? u.replace(t) : u.href = t), l
                }
              };
              var S = [], C = !1;
              l.onUrlChange = function (t) {
                return C || (o.history && nt(e).on("popstate", a), o.hashchange ? nt(e).on("hashchange", a) : l.addPollFn(a), C = !0), S.push(t), t
              }, l.$$checkUrlChange = a, l.baseHref = function () {
                var e = k.attr("href");
                return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
              };
              var _ = {}, P = "", E = l.baseHref();
              l.cookies = function (e, t) {
                var o, i, s, a;
                if (!e) {
                  if (c.cookie !== P) for (P = c.cookie, o = P.split("; "), _ = {}, s = 0; s < o.length; s++) i = o[s], 0 < (a = i.indexOf("=")) && (e = unescape(i.substring(0, a)), _[e] === n && (_[e] = unescape(i.substring(a + 1))));
                  return _
                }
                t === n ? c.cookie = escape(e) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : y(t) && 4096 < (o = (c.cookie = escape(e) + "=" + escape(t) + ";path=" + E).length + 1) && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + o + " > 4096 bytes)!")
              }, l.defer = function (e, t) {
                var n;
                return v++, n = f(function () {
                  delete g[n], s(e)
                }, t || 0), g[n] = !0, n
              }, l.defer.cancel = function (e) {
                return !!g[e] && (delete g[e], h(e), s(d), !0)
              }
            }(e, o, t, r)
          }]
        }, $cacheFactory: function () {
          this.$get = function () {
            function e(e, n) {
              function o(e) {
                e != f && (d ? d == e && (d = e.n) : d = e, i(e.n, e.p), i(e, f), f = e, f.n = null)
              }

              function i(e, t) {
                e != t && (e && (e.p = t), t && (t.n = e))
              }

              if (e in t) throw r("$cacheFactory")("iid", e);
              var s = 0, a = u({}, n, {id: e}), l = {}, c = n && n.capacity || Number.MAX_VALUE, p = {}, f = null,
                d = null;
              return t[e] = {
                put: function (e, t) {
                  if (c < Number.MAX_VALUE && o(p[e] || (p[e] = {key: e})), !m(t)) return e in l || s++, l[e] = t, s > c && this.remove(d.key), t
                }, get: function (e) {
                  if (c < Number.MAX_VALUE) {
                    var t = p[e];
                    if (!t) return;
                    o(t)
                  }
                  return l[e]
                }, remove: function (e) {
                  if (c < Number.MAX_VALUE) {
                    var t = p[e];
                    if (!t) return;
                    t == f && (f = t.p), t == d && (d = t.n), i(t.n, t.p), delete p[e]
                  }
                  delete l[e], s--
                }, removeAll: function () {
                  l = {}, s = 0, p = {}, f = d = null
                }, destroy: function () {
                  p = a = l = null, delete t[e]
                }, info: function () {
                  return u({}, a, {size: s})
                }
              }
            }

            var t = {};
            return e.info = function () {
              var e = {};
              return i(t, function (t, n) {
                e[n] = t.info()
              }), e
            }, e.get = function (e) {
              return t[e]
            }, e
          }
        }, $controller: function () {
          var e = {}, t = /^(\S+)(\s+as\s+(\w+))?$/;
          this.register = function (t, n) {
            V(t, "controller"), b(t) ? u(e, t) : e[t] = n
          }, this.$get = ["$injector", "$window", function (n, o) {
            return function (i, s) {
              var a, l, c;
              if (y(i) && (a = i.match(t), l = a[1], c = a[3], i = e.hasOwnProperty(l) ? e[l] : z(s.$scope, l, !0) || z(o, l, !0), H(i, l, !0)), a = n.instantiate(i, s), c) {
                if (!s || "object" != typeof s.$scope) throw r("$controller")("noscp", l || i.name, c);
                s.$scope[c] = a
              }
              return a
            }
          }]
        }, $document: function () {
          this.$get = ["$window", function (e) {
            return nt(e.document)
          }]
        }, $exceptionHandler: function () {
          this.$get = ["$log", function (e) {
            return function (t, n) {
              e.error.apply(e, arguments)
            }
          }]
        }, $filter: qe, $interpolate: function () {
          var e = "{{", t = "}}";
          this.startSymbol = function (t) {
            return t ? (e = t, this) : e
          }, this.endSymbol = function (e) {
            return e ? (t = e, this) : t
          }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, o) {
            function i(i, l, c) {
              for (var u, p, f = 0, d = [], h = i.length, g = !1, m = []; f < h;) -1 != (u = i.indexOf(e, f)) && -1 != (p = i.indexOf(t, u + s)) ? (f != u && d.push(i.substring(f, u)), d.push(f = n(g = i.substring(u + s, p))), f.exp = g, f = p + a, g = !0) : (f != h && d.push(i.substring(f)), f = h);
              if ((h = d.length) || (d.push(""), h = 1), c && 1 < d.length) throw zt("noconcat", i);
              if (!l || g) return m.length = h, f = function (e) {
                try {
                  for (var t, n = 0, s = h; n < s; n++) {
                    if ("function" == typeof(t = d[n])) if (t = t(e), null == (t = c ? o.getTrusted(c, t) : o.valueOf(t))) t = ""; else switch (typeof t) {
                      case"string":
                        break;
                      case"number":
                        t = "" + t;
                        break;
                      default:
                        t = M(t)
                    }
                    m[n] = t
                  }
                  return m.join("")
                } catch (t) {
                  e = zt("interr", i, t.toString()), r(e)
                }
              }, f.exp = i, f.parts = d, f
            }

            var s = e.length, a = t.length;
            return i.startSymbol = function () {
              return e
            }, i.endSymbol = function () {
              return t
            }, i
          }]
        }, $interval: function () {
          this.$get = ["$rootScope", "$window", "$q", function (e, t, n) {
            function r(r, i, s, a) {
              var l = t.setInterval, c = t.clearInterval, u = n.defer(), p = u.promise, f = 0, d = v(a) && !a;
              return s = v(s) ? s : 0, p.then(null, null, r), p.$$intervalId = l(function () {
                u.notify(f++), 0 < s && f >= s && (u.resolve(f), c(p.$$intervalId), delete o[p.$$intervalId]), d || e.$apply()
              }, i), o[p.$$intervalId] = u, p
            }

            var o = {};
            return r.cancel = function (e) {
              return !!(e && e.$$intervalId in o) && (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0)
            }, r
          }]
        }, $http: function () {
          var e = /^\s*(\[|\{[^\{])/, t = /[\}\]]\s*$/, r = /^\)\]\}',?\n/,
            o = {"Content-Type": "application/json;charset=utf-8"}, a = this.defaults = {
              transformResponse: [function (n) {
                return y(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = N(n))), n
              }],
              transformRequest: [function (e) {
                return b(e) && "[object File]" !== ft.call(e) && "[object Blob]" !== ft.call(e) ? M(e) : e
              }],
              headers: {common: {Accept: "application/json, text/plain, */*"}, post: P(o), put: P(o), patch: P(o)},
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN"
            }, l = this.interceptors = [], c = this.responseInterceptors = [];
          this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, t, r, o, p, f) {
            function d(e) {
              function t(e) {
                var t = u({}, e, {data: ye(e.data, e.headers, r.transformResponse)});
                return 200 <= e.status && 300 > e.status ? t : p.reject(t)
              }

              var r = {method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse},
                o = function (e) {
                  var t, n, r = a.headers, o = u({}, e.headers), r = u({}, r.common, r[at(e.method)]);
                  e:for (t in r) {
                    e = at(t);
                    for (n in o) if (at(n) === e) continue e;
                    o[t] = r[t]
                  }
                  return function (e) {
                    var t;
                    i(e, function (n, r) {
                      w(n) && (null != (t = n()) ? e[r] = t : delete e[r])
                    })
                  }(o), o
                }(e);
              u(r, e), r.headers = o, r.method = ct(r.method);
              var s = [function (e) {
                o = e.headers;
                var n = ye(e.data, be(o), e.transformRequest);
                return m(n) && i(o, function (e, t) {
                  "content-type" === at(t) && delete o[t]
                }), m(e.withCredentials) && !m(a.withCredentials) && (e.withCredentials = a.withCredentials), h(e, n, o).then(t, t)
              }, n], l = p.when(r);
              for (i(k, function (e) {
                (e.request || e.requestError) && s.unshift(e.request, e.requestError), (e.response || e.responseError) && s.push(e.response, e.responseError)
              }); s.length;) {
                e = s.shift();
                var c = s.shift(), l = l.then(e, c)
              }
              return l.success = function (e) {
                return l.then(function (t) {
                  e(t.data, t.status, t.headers, r)
                }), l
              }, l.error = function (e) {
                return l.then(null, function (t) {
                  e(t.data, t.status, t.headers, r)
                }), l
              }, l
            }

            function h(r, i, s) {
              function l(e, t, n, o) {
                (200 <= (t = Math.max(t, 0)) && 300 > t ? h.resolve : h.reject)({
                  data: e,
                  status: t,
                  headers: be(n),
                  config: r,
                  statusText: o
                })
              }

              function c() {
                var e = S(d.pendingRequests, r);
                -1 !== e && d.pendingRequests.splice(e, 1)
              }

              var u, f, h = p.defer(), y = h.promise, x = g(r.url, r.params);
              if (d.pendingRequests.push(r), y.then(c, c), !r.cache && !a.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (u = b(r.cache) ? r.cache : b(a.cache) ? a.cache : $), u) if (f = u.get(x), v(f)) {
                if (f && w(f.then)) return f.then(c, c), f;
                mt(f) ? l(f[1], f[0], P(f[2]), f[3]) : l(f, 200, {}, "OK")
              } else u.put(x, y);
              return m(f) && ((f = Re(r.url) ? t.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n) && (s[r.xsrfHeaderName || a.xsrfHeaderName] = f), e(r.method, x, i, function (e, t, n, r) {
                u && (200 <= e && 300 > e ? u.put(x, [e, t, ve(n), r]) : u.remove(x)), l(t, e, n, r), o.$$phase || o.$apply()
              }, s, r.timeout, r.withCredentials, r.responseType)), y
            }

            function g(e, t) {
              if (!t) return e;
              var n = [];
              return function (e, t, n) {
                for (var r = s(e), o = 0; o < r.length; o++) t.call(n, e[r[o]], r[o])
              }(t, function (e, t) {
                null === e || m(e) || (mt(e) || (e = [e]), i(e, function (e) {
                  b(e) && (e = x(e) ? e.toISOString() : M(e)), n.push(R(t) + "=" + R(e))
                }))
              }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
            }

            var $ = r("$http"), k = [];
            return i(l, function (e) {
              k.unshift(y(e) ? f.get(e) : f.invoke(e))
            }), i(c, function (e, t) {
              var n = y(e) ? f.get(e) : f.invoke(e);
              k.splice(t, 0, {
                response: function (e) {
                  return n(p.when(e))
                }, responseError: function (e) {
                  return n(p.reject(e))
                }
              })
            }), d.pendingRequests = [], function (e) {
              i(arguments, function (e) {
                d[e] = function (t, n) {
                  return d(u(n || {}, {method: e, url: t}))
                }
              })
            }("get", "delete", "head", "jsonp"), function (e) {
              i(arguments, function (e) {
                d[e] = function (t, n, r) {
                  return d(u(r || {}, {method: e, url: t, data: n}))
                }
              })
            }("post", "put", "patch"), d.defaults = a, d
          }]
        }, $httpBackend: function () {
          this.$get = ["$browser", "$window", "$document", function (t, n, o) {
            return function (e, t, n, r, o) {
              function s(e, t, n) {
                var i = o.createElement("script"), s = null;
                return i.type = "text/javascript", i.src = e, i.async = !0, s = function (e) {
                  Tt(i, "load", s), Tt(i, "error", s), o.body.removeChild(i), i = null;
                  var a = -1, l = "unknown";
                  e && ("load" !== e.type || r[t].called || (e = {type: "error"}), l = e.type, a = "error" === e.type ? 404 : 200), n && n(a, l)
                }, kt(i, "load", s), kt(i, "error", s), 8 >= tt && (i.onreadystatechange = function () {
                  y(i.readyState) && /loaded|complete/.test(i.readyState) && (i.onreadystatechange = null, s({type: "load"}))
                }), o.body.appendChild(i), s
              }

              var a = -1;
              return function (o, l, c, u, p, f, h, g) {
                function m() {
                  y = a, x && x(), k && k.abort()
                }

                function b(t, r, o, i, s) {
                  T && n.cancel(T), x = k = null, 0 === r && (r = o ? 200 : "file" == Fe(l).protocol ? 404 : 0), t(1223 === r ? 204 : r, o, i, s || ""), e.$$completeOutstandingRequest(d)
                }

                var y;
                if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == at(o)) {
                  var $ = "_" + (r.counter++).toString(36);
                  r[$] = function (e) {
                    r[$].data = e, r[$].called = !0
                  };
                  var x = s(l.replace("JSON_CALLBACK", "angular.callbacks." + $), $, function (e, t) {
                    b(u, e, r[$].data, "", t), r[$] = d
                  })
                } else {
                  var k = t(o);
                  if (k.open(o, l, !0), i(p, function (e, t) {
                      v(e) && k.setRequestHeader(t, e)
                    }), k.onreadystatechange = function () {
                      if (k && 4 == k.readyState) {
                        var e = null, t = null, n = "";
                        y !== a && (e = k.getAllResponseHeaders(), t = "response" in k ? k.response : k.responseText), y === a && 10 > tt || (n = k.statusText), b(u, y || k.status, t, e, n)
                      }
                    }, h && (k.withCredentials = !0), g) try {
                    k.responseType = g
                  } catch (e) {
                    if ("json" !== g) throw e
                  }
                  k.send(c || null)
                }
                if (0 < f) var T = n(m, f); else f && w(f.then) && f.then(m)
              }
            }(t, function (t) {
              if (8 >= tt && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
              if (e.XMLHttpRequest) return new e.XMLHttpRequest;
              throw r("$httpBackend")("noxhr")
            }, t.defer, n.angular.callbacks, o[0])
          }]
        }, $location: function () {
          var t = "", n = !1;
          this.hashPrefix = function (e) {
            return v(e) ? (t = e, this) : t
          }, this.html5Mode = function (e) {
            return v(e) ? (n = e, this) : n
          }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (r, o, i, s) {
            function a(e) {
              r.$broadcast("$locationChangeSuccess", l.absUrl(), e)
            }

            var l, c = o.baseHref(), u = o.url();
            n ? (c = u.substring(0, u.indexOf("/", u.indexOf("//") + 2)) + (c || "/"), i = i.history ? Ce : Pe) : (c = Te(u), i = _e), (l = new i(c, "#" + t)).$$parseLinkUrl(u, u);
            var p = /^\s*(javascript|mailto):/i;
            s.on("click", function (t) {
              if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
                for (var n = nt(t.target); "a" !== at(n[0].nodeName);) if (n[0] === s[0] || !(n = n.parent())[0]) return;
                var i = n.prop("href"), a = n.attr("href") || n.attr("xlink:href");
                b(i) && "[object SVGAnimatedString]" === i.toString() && (i = Fe(i.animVal).href), p.test(i) || !i || n.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(i, a) || (t.preventDefault(), l.absUrl() != o.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
              }
            }), l.absUrl() != u && o.url(l.absUrl(), !0), o.onUrlChange(function (e) {
              l.absUrl() != e && (r.$evalAsync(function () {
                var t = l.absUrl();
                l.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (l.$$parse(t), o.url(t)) : a(t)
              }), r.$$phase || r.$digest())
            });
            var f = 0;
            return r.$watch(function () {
              var e = o.url(), t = l.$$replace;
              return f && e == l.absUrl() || (f++, r.$evalAsync(function () {
                r.$broadcast("$locationChangeStart", l.absUrl(), e).defaultPrevented ? l.$$parse(e) : (o.url(l.absUrl(), t), a(e))
              })), l.$$replace = !1, f
            }), l
          }]
        }, $log: function () {
          var e = !0, t = this;
          this.debugEnabled = function (t) {
            return v(t) ? (e = t, this) : e
          }, this.$get = ["$window", function (n) {
            function r(e) {
              var t = n.console || {}, r = t[e] || t.log || d;
              e = !1;
              try {
                e = !!r.apply
              } catch (e) {
              }
              return e ? function () {
                var e = [];
                return i(arguments, function (t) {
                  e.push(function (e) {
                    return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                  }(t))
                }), r.apply(t, e)
              } : function (e, t) {
                r(e, null == t ? "" : t)
              }
            }

            return {
              log: r("log"), info: r("info"), warn: r("warn"), error: r("error"), debug: function () {
                var n = r("debug");
                return function () {
                  e && n.apply(t, arguments)
                }
              }()
            }
          }]
        }, $parse: function () {
          var e = {}, t = {}, n = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0, expensiveChecks: !1};
          this.unwrapPromises = function (e) {
            return v(e) ? (n.unwrapPromises = !!e, this) : n.unwrapPromises
          }, this.logPromiseWarnings = function (e) {
            return v(e) ? (n.logPromiseWarnings = e, this) : n.logPromiseWarnings
          }, this.$get = ["$filter", "$sniffer", "$log", function (r, o, i) {
            n.csp = o.csp;
            var s = {
              csp: n.csp,
              unwrapPromises: n.unwrapPromises,
              logPromiseWarnings: n.logPromiseWarnings,
              expensiveChecks: !0
            };
            return Qt = function (e) {
              n.logPromiseWarnings && !Xt.hasOwnProperty(e) && (Xt[e] = !0, i.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            }, function (o, i) {
              var a;
              switch (typeof o) {
                case"string":
                  var l = i ? t : e;
                  if (l.hasOwnProperty(o)) return l[o];
                  var c = new rn(a = i ? s : n);
                  return a = new on(c, r, a).parse(o), "hasOwnProperty" !== o && (l[o] = a), a;
                case"function":
                  return o;
                default:
                  return d
              }
            }
          }]
        }, $rootScope: function () {
          var e = 10, t = r("$rootScope"), n = null;
          this.digestTtl = function (t) {
            return arguments.length && (e = t), e
          }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, s, a, c) {
            function u() {
              this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
            }

            function p(e) {
              if (m.$$phase) throw t("inprog", m.$$phase);
              m.$$phase = e
            }

            function f(e, t) {
              var n = a(e);
              return H(n, t), n
            }

            function h(e, t, n) {
              do {
                e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
              } while (e = e.$parent)
            }

            function g() {
            }

            u.prototype = {
              constructor: u, $new: function (e) {
                return e ? (e = new u, e.$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                  this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$childScopeClass = null
                }, this.$$childScopeClass.prototype = this), e = new this.$$childScopeClass), e.this = e, e.$parent = this, e.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = e : this.$$childHead = this.$$childTail = e, e
              }, $watch: function (e, t, r) {
                var o = f(e, "watch"), i = this.$$watchers, s = {fn: t, last: g, get: o, exp: e, eq: !!r};
                if (n = null, !w(t)) {
                  var a = f(t || d, "listener");
                  s.fn = function (e, t, n) {
                    a(n)
                  }
                }
                if ("string" == typeof e && o.constant) {
                  var l = s.fn;
                  s.fn = function (e, t, n) {
                    l.call(this, e, t, n), C(i, s)
                  }
                }
                return i || (i = this.$$watchers = []), i.unshift(s), function () {
                  C(i, s), n = null
                }
              }, $watchCollection: function (e, t) {
                var n, r, i, s = this, l = 1 < t.length, c = 0, u = a(e), p = [], f = {}, d = !0, h = 0;
                return this.$watch(function () {
                  var e, t;
                  if (b(n = u(s))) if (o(n)) for (r !== p && (r = p, h = r.length = 0, c++), e = n.length, h !== e && (c++, r.length = h = e), t = 0; t < e; t++) r[t] != r[t] && n[t] != n[t] || r[t] === n[t] || (c++, r[t] = n[t]); else {
                    r !== f && (r = f = {}, h = 0, c++), e = 0;
                    for (t in n) n.hasOwnProperty(t) && (e++, r.hasOwnProperty(t) ? r[t] != r[t] && n[t] != n[t] || r[t] === n[t] || (c++, r[t] = n[t]) : (h++, r[t] = n[t], c++));
                    if (h > e) for (t in c++, r) r.hasOwnProperty(t) && !n.hasOwnProperty(t) && (h--, delete r[t])
                  } else r !== n && (r = n, c++);
                  return c
                }, function () {
                  if (d ? (d = !1, t(n, n, s)) : t(n, i, s), l) if (b(n)) if (o(n)) {
                    i = Array(n.length);
                    for (var e = 0; e < n.length; e++) i[e] = n[e]
                  } else for (e in i = {}, n) lt.call(n, e) && (i[e] = n[e]); else i = n
                })
              }, $digest: function () {
                var r, o, i, a, l, u, f, d, h, v, b = this.$$asyncQueue, y = this.$$postDigestQueue, $ = e, x = [];
                p("$digest"), c.$$checkUrlChange(), n = null;
                do {
                  for (u = !1, f = this; b.length;) {
                    try {
                      (v = b.shift()).scope.$eval(v.expression)
                    } catch (e) {
                      m.$$phase = null, s(e)
                    }
                    n = null
                  }
                  e:do {
                    if (a = f.$$watchers) for (l = a.length; l--;) try {
                      if (r = a[l]) if ((o = r.get(f)) === (i = r.last) || (r.eq ? E(o, i) : "number" == typeof o && "number" == typeof i && isNaN(o) && isNaN(i))) {
                        if (r === n) {
                          u = !1;
                          break e
                        }
                      } else u = !0, n = r, r.last = r.eq ? _(o, null) : o, r.fn(o, i === g ? o : i, f), 5 > $ && (d = 4 - $, x[d] || (x[d] = []), h = w(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, h += "; newVal: " + M(o) + "; oldVal: " + M(i), x[d].push(h))
                    } catch (e) {
                      m.$$phase = null, s(e)
                    }
                    if (!(a = f.$$childHead || f !== this && f.$$nextSibling)) for (; f !== this && !(a = f.$$nextSibling);) f = f.$parent
                  } while (f = a);
                  if ((u || b.length) && !$--) throw m.$$phase = null, t("infdig", e, M(x))
                } while (u || b.length);
                for (m.$$phase = null; y.length;) try {
                  y.shift()()
                } catch (e) {
                  s(e)
                }
              }, $destroy: function () {
                if (!this.$$destroyed) {
                  var e = this.$parent;
                  this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (i(this.$$listenerCount, A(null, h, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = d, this.$on = this.$watch = function () {
                    return d
                  })
                }
              }, $eval: function (e, t) {
                return a(e)(this, t)
              }, $evalAsync: function (e) {
                m.$$phase || m.$$asyncQueue.length || c.defer(function () {
                  m.$$asyncQueue.length && m.$digest()
                }), this.$$asyncQueue.push({scope: this, expression: e})
              }, $$postDigest: function (e) {
                this.$$postDigestQueue.push(e)
              }, $apply: function (e) {
                try {
                  return p("$apply"), this.$eval(e)
                } catch (e) {
                  s(e)
                } finally {
                  m.$$phase = null;
                  try {
                    m.$digest()
                  } catch (e) {
                    throw s(e), e
                  }
                }
              }, $on: function (e, t) {
                var n = this.$$listeners[e];
                n || (this.$$listeners[e] = n = []), n.push(t);
                var r = this;
                do {
                  r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
                } while (r = r.$parent);
                var o = this;
                return function () {
                  var r = S(n, t);
                  -1 !== r && (n[r] = null, h(o, 1, e))
                }
              }, $emit: function (e, t) {
                var n, r, o, i = [], a = this, l = !1, c = {
                  name: e, targetScope: a, stopPropagation: function () {
                    l = !0
                  }, preventDefault: function () {
                    c.defaultPrevented = !0
                  }, defaultPrevented: !1
                }, u = [c].concat(ut.call(arguments, 1));
                do {
                  for (n = a.$$listeners[e] || i, c.currentScope = a, r = 0, o = n.length; r < o; r++) if (n[r]) try {
                    n[r].apply(null, u)
                  } catch (e) {
                    s(e)
                  } else n.splice(r, 1), r--, o--;
                  if (l) break;
                  a = a.$parent
                } while (a);
                return c
              }, $broadcast: function (e, t) {
                for (var n, r, o = this, i = this, a = {
                  name: e, targetScope: this, preventDefault: function () {
                    a.defaultPrevented = !0
                  }, defaultPrevented: !1
                }, l = [a].concat(ut.call(arguments, 1)); o = i;) {
                  for (a.currentScope = o, i = o.$$listeners[e] || [], n = 0, r = i.length; n < r; n++) if (i[n]) try {
                    i[n].apply(null, l)
                  } catch (e) {
                    s(e)
                  } else i.splice(n, 1), n--, r--;
                  if (!(i = o.$$listenerCount[e] && o.$$childHead || o !== this && o.$$nextSibling)) for (; o !== this && !(i = o.$$nextSibling);) o = o.$parent
                }
                return a
              }
            };
            var m = new u;
            return m
          }]
        }, $q: function () {
          this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
            return function (e, t) {
              function r(e) {
                return e
              }

              function o(e) {
                return l(e)
              }

              var s = function () {
                var i, l, u = [];
                return l = {
                  resolve: function (t) {
                    if (u) {
                      var r = u;
                      u = n, i = a(t), r.length && e(function () {
                        for (var e, t = 0, n = r.length; t < n; t++) e = r[t], i.then(e[0], e[1], e[2])
                      })
                    }
                  }, reject: function (e) {
                    l.resolve(c(e))
                  }, notify: function (t) {
                    if (u) {
                      var n = u;
                      u.length && e(function () {
                        for (var e = 0, r = n.length; e < r; e++) n[e][2](t)
                      })
                    }
                  }, promise: {
                    then: function (e, n, a) {
                      var l = s(), c = function (n) {
                        try {
                          l.resolve((w(e) ? e : r)(n))
                        } catch (e) {
                          l.reject(e), t(e)
                        }
                      }, p = function (e) {
                        try {
                          l.resolve((w(n) ? n : o)(e))
                        } catch (e) {
                          l.reject(e), t(e)
                        }
                      }, f = function (e) {
                        try {
                          l.notify((w(a) ? a : r)(e))
                        } catch (e) {
                          t(e)
                        }
                      };
                      return u ? u.push([c, p, f]) : i.then(c, p, f), l.promise
                    }, catch: function (e) {
                      return this.then(null, e)
                    }, finally: function (e) {
                      function t(e, t) {
                        var n = s();
                        return t ? n.resolve(e) : n.reject(e), n.promise
                      }

                      function n(n, o) {
                        var i = null;
                        try {
                          i = (e || r)()
                        } catch (e) {
                          return t(e, !1)
                        }
                        return i && w(i.then) ? i.then(function () {
                          return t(n, o)
                        }, function (e) {
                          return t(e, !1)
                        }) : t(n, o)
                      }

                      return this.then(function (e) {
                        return n(e, !0)
                      }, function (e) {
                        return n(e, !1)
                      })
                    }
                  }
                }
              }, a = function (t) {
                return t && w(t.then) ? t : {
                  then: function (n) {
                    var r = s();
                    return e(function () {
                      r.resolve(n(t))
                    }), r.promise
                  }
                }
              }, l = function (e) {
                var t = s();
                return t.reject(e), t.promise
              }, c = function (n) {
                return {
                  then: function (r, i) {
                    var a = s();
                    return e(function () {
                      try {
                        a.resolve((w(i) ? i : o)(n))
                      } catch (e) {
                        a.reject(e), t(e)
                      }
                    }), a.promise
                  }
                }
              };
              return {
                defer: s, reject: l, when: function (n, i, c, u) {
                  var p, f = s(), d = function (e) {
                    try {
                      return (w(i) ? i : r)(e)
                    } catch (e) {
                      return t(e), l(e)
                    }
                  }, h = function (e) {
                    try {
                      return (w(c) ? c : o)(e)
                    } catch (e) {
                      return t(e), l(e)
                    }
                  }, g = function (e) {
                    try {
                      return (w(u) ? u : r)(e)
                    } catch (e) {
                      t(e)
                    }
                  };
                  return e(function () {
                    a(n).then(function (e) {
                      p || (p = !0, f.resolve(a(e).then(d, h, g)))
                    }, function (e) {
                      p || (p = !0, f.resolve(h(e)))
                    }, function (e) {
                      p || f.notify(g(e))
                    })
                  }), f.promise
                }, all: function (e) {
                  var t = s(), n = 0, r = mt(e) ? [] : {};
                  return i(e, function (e, o) {
                    n++, a(e).then(function (e) {
                      r.hasOwnProperty(o) || (r[o] = e, --n || t.resolve(r))
                    }, function (e) {
                      r.hasOwnProperty(o) || t.reject(e)
                    })
                  }), 0 === n && t.resolve(r), t.promise
                }
              }
            }(function (t) {
              e.$evalAsync(t)
            }, t)
          }]
        }, $sce: function () {
          var e = !0;
          this.enabled = function (t) {
            return arguments.length && (e = !!t), e
          }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (t, n, r) {
            if (e && n.msie && 8 > n.msieDocumentMode) throw ln("iequirks");
            var o = P(cn);
            o.isEnabled = function () {
              return e
            }, o.trustAs = r.trustAs, o.getTrusted = r.getTrusted, o.valueOf = r.valueOf, e || (o.trustAs = o.getTrusted = function (e, t) {
              return t
            }, o.valueOf = h), o.parseAs = function (e, n) {
              var r = t(n);
              return r.literal && r.constant ? r : function (t, n) {
                return o.getTrusted(e, r(t, n))
              }
            };
            var s = o.parseAs, a = o.getTrusted, l = o.trustAs;
            return i(cn, function (e, t) {
              var n = at(t);
              o[G("parse_as_" + n)] = function (t) {
                return s(e, t)
              }, o[G("get_trusted_" + n)] = function (t) {
                return a(e, t)
              }, o[G("trust_as_" + n)] = function (t) {
                return l(e, t)
              }
            }), o
          }]
        }, $sceDelegate: function () {
          this.SCE_CONTEXTS = cn;
          var e = ["self"], t = [];
          this.resourceUrlWhitelist = function (t) {
            return arguments.length && (e = Be(t)), e
          }, this.resourceUrlBlacklist = function (e) {
            return arguments.length && (t = Be(e)), t
          }, this.$get = ["$injector", function (r) {
            function o(e) {
              var t = function (e) {
                this.$$unwrapTrustedValue = function () {
                  return e
                }
              };
              return e && (t.prototype = new e), t.prototype.valueOf = function () {
                return this.$$unwrapTrustedValue()
              }, t.prototype.toString = function () {
                return this.$$unwrapTrustedValue().toString()
              }, t
            }

            var i = function (e) {
              throw ln("unsafe")
            };
            r.has("$sanitize") && (i = r.get("$sanitize"));
            var s = o(), a = {};
            return a[cn.HTML] = o(s), a[cn.CSS] = o(s), a[cn.URL] = o(s), a[cn.JS] = o(s), a[cn.RESOURCE_URL] = o(a[cn.URL]), {
              trustAs: function (e, t) {
                var r = a.hasOwnProperty(e) ? a[e] : null;
                if (!r) throw ln("icontext", e, t);
                if (null === t || t === n || "" === t) return t;
                if ("string" != typeof t) throw ln("itype", e);
                return new r(t)
              }, getTrusted: function (r, o) {
                if (null === o || o === n || "" === o) return o;
                if ((c = a.hasOwnProperty(r) ? a[r] : null) && o instanceof c) return o.$$unwrapTrustedValue();
                if (r === cn.RESOURCE_URL) {
                  var s, l, c = Fe(o.toString()), u = !1;
                  for (s = 0, l = e.length; s < l; s++) if ("self" === e[s] ? Re(c) : e[s].exec(c.href)) {
                    u = !0;
                    break
                  }
                  if (u) for (s = 0, l = t.length; s < l; s++) if ("self" === t[s] ? Re(c) : t[s].exec(c.href)) {
                    u = !1;
                    break
                  }
                  if (u) return o;
                  throw ln("insecurl", o.toString())
                }
                if (r === cn.HTML) return i(o);
                throw ln("unsafe")
              }, valueOf: function (e) {
                return e instanceof s ? e.$$unwrapTrustedValue() : e
              }
            }
          }]
        }, $sniffer: function () {
          this.$get = ["$window", "$document", function (e, t) {
            var n, r = {}, o = p((/android (\d+)/.exec(at((e.navigator || {}).userAgent)) || [])[1]),
              i = /Boxee/i.test((e.navigator || {}).userAgent), s = t[0] || {}, a = s.documentMode,
              l = /^(Moz|webkit|O|ms)(?=[A-Z])/, c = s.body && s.body.style, u = !1, f = !1;
            if (c) {
              for (var d in c) if (u = l.exec(d)) {
                n = u[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                break
              }
              n || (n = "WebkitOpacity" in c && "webkit"), u = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !o || u && f || (u = y(s.body.style.webkitTransition), f = y(s.body.style.webkitAnimation))
            }
            return {
              history: !(!e.history || !e.history.pushState || 4 > o || i),
              hashchange: "onhashchange" in e && (!a || 7 < a),
              hasEvent: function (e) {
                if ("input" == e && 9 == tt) return !1;
                if (m(r[e])) {
                  var t = s.createElement("div");
                  r[e] = "on" + e in t
                }
                return r[e]
              },
              csp: bt(),
              vendorPrefix: n,
              transitions: u,
              animations: f,
              android: o,
              msie: tt,
              msieDocumentMode: a
            }
          }]
        }, $templateCache: function () {
          this.$get = ["$cacheFactory", function (e) {
            return e("templates")
          }]
        }, $timeout: function () {
          this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (e, t, n, r) {
            function o(o, s, a) {
              var l = n.defer(), c = l.promise, u = v(a) && !a;
              return s = t.defer(function () {
                try {
                  l.resolve(o())
                } catch (e) {
                  l.reject(e), r(e)
                } finally {
                  delete i[c.$$timeoutId]
                }
                u || e.$apply()
              }, s), c.$$timeoutId = s, i[s] = l, c
            }

            var i = {};
            return o.cancel = function (e) {
              return !!(e && e.$$timeoutId in i) && (i[e.$$timeoutId].reject("canceled"), delete i[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
            }, o
          }]
        }, $window: function () {
          this.$get = g(e)
        }, $$rAF: function () {
          this.$get = ["$window", "$timeout", function (e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
              r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
              o = !!n, i = o ? function (e) {
                var t = n(e);
                return function () {
                  r(t)
                }
              } : function (e) {
                var n = t(e, 16.66, !1);
                return function () {
                  t.cancel(n)
                }
              };
            return i.supported = o, i
          }]
        }, $$asyncCallback: function () {
          this.$get = ["$$rAF", "$timeout", function (e, t) {
            return e.supported ? function (t) {
              return e(t)
            } : function (e) {
              return t(e, 0, !1)
            }
          }]
        }
      })
    }])
  }(ht), nt(t).ready(function () {
    !function (e, n) {
      function r(e) {
        e && a.push(e)
      }

      var o, s, a = [e], l = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
      i(l, function (n) {
        l[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (i(e.querySelectorAll("." + n), r), i(e.querySelectorAll("." + n + "\\:"), r), i(e.querySelectorAll("[" + n + "]"), r))
      }), i(a, function (e) {
        if (!o) {
          var t = c.exec(" " + e.className + " ");
          t ? (o = e, s = (t[2] || "").replace(/\s+/g, ",")) : i(e.attributes, function (t) {
            !o && l[t.name] && (o = e, s = t.value)
          })
        }
      }), o && n(o, s ? [s] : [])
    }(t, q)
  }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), angular.module("sly", ["slyEvaluate", "slyRepeat"]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function (e) {
  return {
    scope: !0, restrict: "A", compile: function (t, n) {
      return {
        pre: function (t, n, r) {
          var o = null, i = !1, s = e(r.slyEvaluateOnlyWhen), a = null;
          if (hasProperty(r, "slyAlwaysEvaluate") && (a = r.slyAlwaysEvaluate, isStringEmpty(a))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
          t.$addWatcherGate(function () {
            var e = s(t);
            if (!i) return i = !0, o = e, !0;
            var n = o !== e;
            return o = e, n
          }, function (e) {
            return isNull(a) || !(isStringNonempty(e) && e.indexOf(a) >= 0)
          }, !0)
        }
      }
    }
  }
}]).directive("slyAlwaysEvaluate", function () {
  return {
    restrict: "A", link: function (e, t, n) {
    }
  }
}).directive("slyShow", ["$animate", function (e) {
  return {
    restrict: "A", link: function (t, n, r) {
      t.$watch(r.slyShow, function (t) {
        e[function (e) {
          if (e && 0 !== e.length) {
            var t = "" + e;
            e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
          } else e = !1;
          return e
        }(t) ? "removeClass" : "addClass"](n, "ng-hide")
      }, !1, "slyShow")
    }
  }
}]).directive("slyPreventEvaluationWhenHidden", function () {
  return {
    restrict: "A", scope: !0, compile: function (e, t) {
      return {
        pre: function (e, t, n) {
          e.$addWatcherGate(function () {
            return !t.hasClass("ng-hide")
          }, function (e, t, n, r) {
            return !isDefined(r) || "slyShow" != r
          })
        }
      }
    }
  }
}), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function (e, t) {
  return {
    restrict: "A", scope: !0, transclude: "element", priority: 1e3, terminal: !0, compile: function (t, n, r) {
      return function (t, n, o) {
        var i = o.slyRepeat, s = i.match(/^\s*(.+)\s+in\s+(.*?)$/);
        if (!s) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + i + "'.");
        var a = s[1], l = s[2];
        if (!(s = a.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
        var c = [], u = [], p = t.$watchCollection(l, function (o) {
          if (o) {
            if (!isArray(o)) throw Error("'collection' did not evaluate to an array.  expression was " + l);
            var i = c.length;
            if (c.length < o.length && u.length > 0) {
              var s = c.length + u.length;
              s > o.length && (s = o.length), c = c.concat(u.splice(0, s - c.length))
            }
            var p = null, f = [], d = [];
            if (o.length > c.length) {
              for (b = c.length; b < o.length; ++b) {
                var h = {scope: t.$new(), isActiveForRepeat: !0};
                !function (e) {
                  e.scope.$addWatcherGate(function () {
                    return e.isActiveForRepeat
                  })
                }(h), h.scope.$index = b, h.scope.$first = 0 == b, d.push(h)
              }
              p = c.concat(d), f = u
            } else if (o.length < c.length) {
              for (b = o.length; b < c.length; ++b) c[b].isActiveForRepeat = !1;
              f = c.splice(o.length, c.length - o.length).concat(u), p = c
            } else p = c, f = u;
            if (p.length > 0) {
              var g = p.length - 1, m = p.length - 1;
              i < p.length && (g = i), g > 0 && (g -= 1);
              for (b = g; b <= m; ++b) p[b].scope.$last = b == p.length - 1, p[b].scope.$middle = 0 != b && b != p.length - 1, p[b].isActiveForRepeat || (p[b].isActiveForRepeat = !0, p[b].element.css("display", ""))
            }
            for (b = 0; b < f.length && !f[b].isActiveForRepeat; ++b) f[b].element.css("display", "none");
            for (b = 0; b < p.length; ++b) p[b].scope[a] = o[b];
            var v = n;
            c.length > 0 && (v = c[c.length - 1].element);
            for (var b = 0; b < d.length; ++b) r(d[b].scope, function (t) {
              e.enter(t, null, v), v = t, d[b].element = t
            });
            c = p, u = f
          }
        });
        t.$on("$destroy", function () {
          p()
        })
      }
    }
  }
}]), defineScalyrAngularModule("gatedScope", []).config(["$provide", function (e) {
  e.decorator("$rootScope", ["$delegate", "$exceptionHandler", function (e, t) {
    var n = {};
    for (var r in e) isFunction(e[r]) && (n[r] = e[r]);
    var o, i = e.constructor, s = {};
    return s.$new = function (e) {
      var t = n.$new.call(this, e);
      return t.$$gatingFunction = this.$$gatingFunction, t.$$parentGatingFunction = this.$$gatingFunction, t.$$shouldGateFunction = this.$$shouldGateFunction, t.$$gatedWatchers = [], t.$$cleanUpQueue = this.$$cleanUpQueue, t
    }, s.$digestGated = function (e) {
      var n, r, i, s, a, l, c = this, u = !1;
      do {
        if (i = c.$$gatedWatchers) for (s = i.length; s--;) try {
          if ((n = i[s]).gatingFunction !== e) continue;
          n && !isNull(n.cleanUp) && (n.cleanUp(), n.cleanUp = null), n && (r = n.get(c)) !== (l = n.last) && !(n.eq ? areEqual(r, l) : "number" == typeof r && "number" == typeof l && isNaN(r) && isNaN(l)) && (u = !0, n.last = n.eq ? copy(r) : r, n.fn(r, l === o ? r : l, c))
        } catch (e) {
          t(e)
        }
        if (!(a = c.$$gatingFunction === e && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(a = c.$$nextSibling);) c = c.$parent
      } while (c = a);
      return e.hasDigested = !0, u
    }, s.$watch = function (e, t, r, i) {
      if (isNull(this.$$gatingFunction) || !isNull(this.$$shouldGateFunction) && !this.$$shouldGateFunction(e, t, r, i)) return n.$watch.call(this, e, t, r);
      var s = this.$$watchers;
      this.$$watchers = this.$$gatedWatchers;
      var a = n.$watch.call(this, e, t, r);
      this.$$watchers = s, this.$$gatedWatchers[0].gatingFunction = this.$$gatingFunction, this.$$gatedWatchers[0].cleanUp = null, o = this.$$gatedWatchers[0].last;
      var l = this.$$gatedWatchers[0];
      if (this.$$gatingFunction.shouldEvalNewWatchers && this.$$gatingFunction.hasDigested) {
        var c = this;
        l.cleanUp = n.$watch.call(c, function () {
          isNull(l.cleanUp) || (c.$$cleanUpQueue.unshift(l.cleanUp), l.cleanUp = null);
          var e, t = o;
          return l && (e = l.get(c)) !== (t = l.last) && !(l.eq ? areEqual(e, t) : "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)) && (l.last = l.eq ? copy(e) : e, l.fn(e, t === o ? e : t, c)), l.last
        })
      }
      return a
    }, s.$digest = function () {
      var e = !1;
      if (!isNull(this.$$parentGatingFunction) && this.$$parentGatingFunction()) {
        var r = 5;
        do {
          if (e = this.$digestGated(this.$$parentGatingFunction), r--, e && !r--) throw Error(TTL + " $digest() iterations reached for gated watcher. Aborting!\nWatchers fired in the last 5 iterations.")
        } while (e)
      }
      e = n.$digest.call(this) || e;
      for (var o = this.$$cleanUpQueue; o.length;) try {
        o.shift()()
      } catch (e) {
        t(e)
      }
      return e
    }, s.$addWatcherGate = function (e, t, r) {
      var o = 0, i = this, s = !isNull(this.$$gatingFunction);
      !function () {
        var t = null;
        i.$watch(function () {
          return e() ? i.$digestGated(e) && ++o : s && isNull(t) && (t = n.$watch.call(i, function () {
            return e() && (t(), t = null, i.$digestGated(e) && ++o), o
          })), o
        })
      }(), isUndefined(t) && (t = null), isUndefined(r) && (r = !1), this.$$gatingFunction = e, this.$$gatingFunction.shouldEvalNewWatchers = r, this.$$shouldGateFunction = t
    }, angular.extend(i.prototype, s), angular.extend(e, s), e.$$gatingFunction = null, e.$$parentGatingFunction = null, e.$$shouldGateFunction = null, e.$$gatedWatchers = [], e.$$cleanUpQueue = [], e
  }])
}]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function (e) {
  return {
    scope: !0, restrict: "A", compile: function (t, n) {
      return {
        pre: function (t, n, r) {
          var o = null, i = !1, s = e(r.slyEvaluateOnlyWhen), a = null;
          if (hasProperty(r, "slyAlwaysEvaluate") && (a = r.slyAlwaysEvaluate, isStringEmpty(a))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
          t.$addWatcherGate(function () {
            var e = s(t);
            if (!i) return i = !0, o = e, !0;
            var n = o !== e;
            return o = e, n
          }, function (e) {
            return isNull(a) || !(isStringNonempty(e) && e.indexOf(a) >= 0)
          }, !0)
        }
      }
    }
  }
}]).directive("slyAlwaysEvaluate", function () {
  return {
    restrict: "A", link: function (e, t, n) {
    }
  }
}).directive("slyShow", ["$animate", function (e) {
  return {
    restrict: "A", link: function (t, n, r) {
      t.$watch(r.slyShow, function (t) {
        e[function (e) {
          if (e && 0 !== e.length) {
            var t = "" + e;
            e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
          } else e = !1;
          return e
        }(t) ? "removeClass" : "addClass"](n, "ng-hide")
      }, !1, "slyShow")
    }
  }
}]).directive("slyPreventEvaluationWhenHidden", function () {
  return {
    restrict: "A", scope: !0, compile: function (e, t) {
      return {
        pre: function (e, t, n) {
          e.$addWatcherGate(function () {
            return !t.hasClass("ng-hide")
          }, function (e, t, n, r) {
            return !isDefined(r) || "slyShow" != r
          })
        }
      }
    }
  }
}), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function (e, t) {
  return {
    restrict: "A", scope: !0, transclude: "element", priority: 1e3, terminal: !0, compile: function (t, n, r) {
      return function (t, n, o) {
        var i = o.slyRepeat, s = i.match(/^\s*(.+)\s+in\s+(.*?)$/);
        if (!s) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + i + "'.");
        var a = s[1], l = s[2];
        if (!(s = a.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
        var c = [], u = [], p = t.$watchCollection(l, function (o) {
          if (o) {
            if (!isArray(o)) throw Error("'collection' did not evaluate to an array.  expression was " + l);
            var i = c.length;
            if (c.length < o.length && u.length > 0) {
              var s = c.length + u.length;
              s > o.length && (s = o.length), c = c.concat(u.splice(0, s - c.length))
            }
            var p = null, f = [], d = [];
            if (o.length > c.length) {
              for (b = c.length; b < o.length; ++b) {
                var h = {scope: t.$new(), isActiveForRepeat: !0};
                !function (e) {
                  e.scope.$addWatcherGate(function () {
                    return e.isActiveForRepeat
                  })
                }(h), h.scope.$index = b, h.scope.$first = 0 == b, d.push(h)
              }
              p = c.concat(d), f = u
            } else if (o.length < c.length) {
              for (b = o.length; b < c.length; ++b) c[b].isActiveForRepeat = !1;
              f = c.splice(o.length, c.length - o.length).concat(u), p = c
            } else p = c, f = u;
            if (p.length > 0) {
              var g = p.length - 1, m = p.length - 1;
              i < p.length && (g = i), g > 0 && (g -= 1);
              for (b = g; b <= m; ++b) p[b].scope.$last = b == p.length - 1, p[b].scope.$middle = 0 != b && b != p.length - 1, p[b].isActiveForRepeat || (p[b].isActiveForRepeat = !0, p[b].element.css("display", ""))
            }
            for (b = 0; b < f.length && !f[b].isActiveForRepeat; ++b) f[b].element.css("display", "none");
            for (b = 0; b < p.length; ++b) p[b].scope[a] = o[b];
            var v = n;
            c.length > 0 && (v = c[c.length - 1].element);
            for (var b = 0; b < d.length; ++b) r(d[b].scope, function (t) {
              e.enter(t, null, v), v = t, d[b].element = t
            });
            c = p, u = f
          }
        });
        t.$on("$destroy", function () {
          p()
        })
      }
    }
  }
}]), function (e, t) {
  "function" == typeof define && define.amd ? define([], function () {
    return t()
  }) : "object" == typeof exports ? module.exports = t() : t()
}(0, function () {
  function e(e) {
    "use strict";
    var t = e.storageKey(), n = e.storage(), r = function () {
      var r = e.preferredLanguage();
      angular.isString(r) ? e.use(r) : n.put(t, e.use())
    };
    r.displayName = "fallbackFromIncorrectStorageValue", n ? n.get(t) ? e.use(n.get(t)).catch(r) : r() : angular.isString(e.preferredLanguage()) && e.use(e.preferredLanguage())
  }

  function t(e, t, n, r) {
    "use strict";
    var o, i, s, a, l, c, u, p, f, d, h, g, m, v, b, y = {}, $ = [], x = e, w = [], k = "translate-cloak", T = !1,
      S = !1, C = ".", _ = 0, P = !0, E = "default", A = {
        default: function (e) {
          return (e || "").split("-").join("_")
        }, java: function (e) {
          var t = (e || "").split("-").join("_"), n = t.split("_");
          return n.length > 1 ? n[0].toLowerCase() + "_" + n[1].toUpperCase() : t
        }, bcp47: function (e) {
          var t = (e || "").split("_").join("-"), n = t.split("-");
          return n.length > 1 ? n[0].toLowerCase() + "-" + n[1].toUpperCase() : t
        }
      }, M = function () {
        if (angular.isFunction(r.getLocale)) return r.getLocale();
        var e, n, o = t.$get().navigator, i = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
        if (angular.isArray(o.languages)) for (e = 0; e < o.languages.length; e++) if ((n = o.languages[e]) && n.length) return n;
        for (e = 0; e < i.length; e++) if ((n = o[i[e]]) && n.length) return n;
        return null
      };
    M.displayName = "angular-translate/service: getFirstBrowserLanguage";
    var N = function () {
      var e = M() || "";
      return A[E] && (e = A[E](e)), e
    };
    N.displayName = "angular-translate/service: getLocale";
    var D = function (e, t) {
      for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
      return -1
    }, O = function () {
      return this.toString().replace(/^\s+|\s+$/g, "")
    }, I = function (e) {
      for (var t = [], n = angular.lowercase(e), r = 0, o = $.length; o > r; r++) t.push(angular.lowercase($[r]));
      if (D(t, n) > -1) return e;
      if (i) {
        var s;
        for (var a in i) {
          var l = !1, c = Object.prototype.hasOwnProperty.call(i, a) && angular.lowercase(a) === angular.lowercase(e);
          if ("*" === a.slice(-1) && (l = a.slice(0, -1) === e.slice(0, a.length - 1)), (c || l) && (s = i[a], D(t, angular.lowercase(s)) > -1)) return s
        }
      }
      if (e) {
        var u = e.split("_");
        if (u.length > 1 && D(t, angular.lowercase(u[0])) > -1) return u[0]
      }
      return e
    }, L = function (e, t) {
      if (!e && !t) return y;
      if (e && !t) {
        if (angular.isString(e)) return y[e]
      } else angular.isObject(y[e]) || (y[e] = {}), angular.extend(y[e], B(t));
      return this
    };
    this.translations = L, this.cloakClassName = function (e) {
      return e ? (k = e, this) : k
    }, this.nestedObjectDelimeter = function (e) {
      return e ? (C = e, this) : C
    };
    var B = function (e, t, n, r) {
      var o, i, s, a;
      t || (t = []), n || (n = {});
      for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (a = e[o], angular.isObject(a) ? B(a, t.concat(o), n, o) : (i = t.length ? "" + t.join(C) + C + o : o, t.length && o === r && (s = "" + t.join(C), n[s] = "@:" + i), n[i] = a));
      return n
    };
    B.displayName = "flatObject", this.addInterpolation = function (e) {
      return w.push(e), this
    }, this.useMessageFormatInterpolation = function () {
      return this.useInterpolation("$translateMessageFormatInterpolation")
    }, this.useInterpolation = function (e) {
      return d = e, this
    }, this.useSanitizeValueStrategy = function (e) {
      return n.useStrategy(e), this
    }, this.preferredLanguage = function (e) {
      return e ? (F(e), this) : o
    };
    var F = function (e) {
      return e && (o = e), o
    };
    this.translationNotFoundIndicator = function (e) {
      return this.translationNotFoundIndicatorLeft(e), this.translationNotFoundIndicatorRight(e), this
    }, this.translationNotFoundIndicatorLeft = function (e) {
      return e ? (m = e, this) : m
    }, this.translationNotFoundIndicatorRight = function (e) {
      return e ? (v = e, this) : v
    }, this.fallbackLanguage = function (e) {
      return R(e), this
    };
    var R = function (e) {
      return e ? (angular.isString(e) ? (a = !0, s = [e]) : angular.isArray(e) && (a = !1, s = e), angular.isString(o) && D(s, o) < 0 && s.push(o), this) : a ? s[0] : s
    };
    this.use = function (e) {
      if (e) {
        if (!y[e] && !h) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
        return l = e, this
      }
      return l
    };
    var q = function (e) {
      return e ? (x = e, this) : p ? p + x : x
    };
    this.storageKey = q, this.useUrlLoader = function (e, t) {
      return this.useLoader("$translateUrlLoader", angular.extend({url: e}, t))
    }, this.useStaticFilesLoader = function (e) {
      return this.useLoader("$translateStaticFilesLoader", e)
    }, this.useLoader = function (e, t) {
      return h = e, g = t || {}, this
    }, this.useLocalStorage = function () {
      return this.useStorage("$translateLocalStorage")
    }, this.useCookieStorage = function () {
      return this.useStorage("$translateCookieStorage")
    }, this.useStorage = function (e) {
      return u = e, this
    }, this.storagePrefix = function (e) {
      return e ? (p = e, this) : e
    }, this.useMissingTranslationHandlerLog = function () {
      return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
    }, this.useMissingTranslationHandler = function (e) {
      return f = e, this
    }, this.usePostCompiling = function (e) {
      return T = !!e, this
    }, this.forceAsyncReload = function (e) {
      return S = !!e, this
    }, this.uniformLanguageTag = function (e) {
      return e ? angular.isString(e) && (e = {standard: e}) : e = {}, E = e.standard, this
    }, this.determinePreferredLanguage = function (e) {
      var t = e && angular.isFunction(e) ? e() : N();
      return o = $.length ? I(t) : t, this
    }, this.registerAvailableLanguageKeys = function (e, t) {
      return e ? ($ = e, t && (i = t), this) : $
    }, this.useLoaderCache = function (e) {
      return !1 === e ? b = void 0 : !0 === e ? b = !0 : void 0 === e ? b = "$translationCache" : e && (b = e), this
    }, this.directivePriority = function (e) {
      return void 0 === e ? _ : (_ = e, this)
    }, this.statefulFilter = function (e) {
      return void 0 === e ? P : (P = e, this)
    }, this.$get = ["$log", "$injector", "$rootScope", "$q", function (e, t, n, r) {
      var i, p, $, E, A = t.get(d || "$translateDefaultInterpolation"), M = !1, N = {}, j = {},
        U = function (e, t, n, a) {
          if (angular.isArray(e)) {
            return function (e) {
              for (var o = {}, i = [], s = 0, l = e.length; l > s; s++) i.push(function (e) {
                var i = r.defer(), s = function (t) {
                  o[e] = t, i.resolve([e, t])
                };
                return U(e, t, n, a).then(s, s), i.promise
              }(e[s]));
              return r.all(i).then(function () {
                return o
              })
            }(e)
          }
          var c = r.defer();
          e && (e = O.apply(e));
          var f = function () {
            var e = o ? j[o] : j[l];
            if (p = 0, u && !e) {
              var t = i.get(x);
              if (e = j[t], s && s.length) {
                var n = D(s, t);
                p = 0 === n ? 1 : 0, D(s, o) < 0 && s.push(o)
              }
            }
            return e
          }();
          if (f) {
            var d = function () {
              Z(e, t, n, a).then(c.resolve, c.reject)
            };
            d.displayName = "promiseResolved", f.finally(d, c.reject)
          } else Z(e, t, n, a).then(c.resolve, c.reject);
          return c.promise
        }, H = function (e) {
          return m && (e = [m, e].join(" ")), v && (e = [e, v].join(" ")), e
        }, V = function (e) {
          l = e, u && i.put(U.storageKey(), l), n.$emit("$translateChangeSuccess", {language: e}), A.setLocale(l);
          var t = function (e, t) {
            N[t].setLocale(l)
          };
          t.displayName = "eachInterpolatorLocaleSetter", angular.forEach(N, t), n.$emit("$translateChangeEnd", {language: e})
        }, z = function (e) {
          if (!e) throw"No language key specified for loading.";
          var o = r.defer();
          n.$emit("$translateLoadingStart", {language: e}), M = !0;
          var i = b;
          "string" == typeof i && (i = t.get(i)), M && E && E.resolve(), E = r.defer();
          var s = angular.extend({}, g, {key: e, $http: angular.extend({}, {cache: i, timeout: E.promise}, g.$http)}),
            a = function (t) {
              var r = {};
              n.$emit("$translateLoadingSuccess", {language: e}), angular.isArray(t) ? angular.forEach(t, function (e) {
                angular.extend(r, B(e))
              }) : angular.extend(r, B(t)), M = !1, o.resolve({
                key: e,
                table: r
              }), n.$emit("$translateLoadingEnd", {language: e})
            };
          a.displayName = "onLoaderSuccess";
          var l = function (e) {
            n.$emit("$translateLoadingError", {language: e}), o.reject(e), n.$emit("$translateLoadingEnd", {language: e})
          };
          return l.displayName = "onLoaderError", t.get(h)(s).then(a, l), o.promise
        };
      if (u && (!(i = t.get(u)).get || !i.put)) throw new Error("Couldn't use storage '" + u + "', missing get() or put() method!");
      if (w.length) {
        var W = function (e) {
          var n = t.get(e);
          n.setLocale(o || l), N[n.getInterpolationIdentifier()] = n
        };
        W.displayName = "interpolationFactoryAdder", angular.forEach(w, W)
      }
      var G = function (e, t, n, o) {
        var i = r.defer(), s = function (r) {
          if (Object.prototype.hasOwnProperty.call(r, t)) {
            o.setLocale(e);
            var s = r[t];
            "@:" === s.substr(0, 2) ? G(e, s.substr(2), n, o).then(i.resolve, i.reject) : i.resolve(o.interpolate(r[t], n)), o.setLocale(l)
          } else i.reject()
        };
        return s.displayName = "fallbackTranslationResolver", function (e) {
          var t = r.defer();
          if (Object.prototype.hasOwnProperty.call(y, e)) t.resolve(y[e]); else if (j[e]) {
            var n = function (e) {
              L(e.key, e.table), t.resolve(e.table)
            };
            n.displayName = "translationTableResolver", j[e].then(n, t.reject)
          } else t.reject();
          return t.promise
        }(e).then(s, i.reject), i.promise
      }, Y = function (e, t, n, r) {
        var o, i = y[e];
        if (i && Object.prototype.hasOwnProperty.call(i, t)) {
          if (r.setLocale(e), "@:" === (o = r.interpolate(i[t], n)).substr(0, 2)) return Y(e, o.substr(2), n, r);
          r.setLocale(l)
        }
        return o
      }, Q = function (e, n) {
        if (f) {
          var r = t.get(f)(e, l, n);
          return void 0 !== r ? r : e
        }
        return e
      }, K = function (e, t, n, o, i) {
        var a = r.defer();
        if (e < s.length) {
          var l = s[e];
          G(l, t, n, o).then(a.resolve, function () {
            K(e + 1, t, n, o, i).then(a.resolve)
          })
        } else a.resolve(i || Q(t, n));
        return a.promise
      }, X = function (e, t, n, r) {
        var o;
        if (e < s.length) {
          var i = s[e];
          (o = Y(i, t, n, r)) || (o = X(e + 1, t, n, r))
        }
        return o
      }, J = function (e, t, n, r) {
        return K($ > 0 ? $ : p, e, t, n, r)
      }, Z = function (e, t, n, o) {
        var i = r.defer(), a = l ? y[l] : y, c = n ? N[n] : A;
        if (a && Object.prototype.hasOwnProperty.call(a, e)) {
          var u = a[e];
          "@:" === u.substr(0, 2) ? U(u.substr(2), t, n, o).then(i.resolve, i.reject) : i.resolve(c.interpolate(u, t))
        } else {
          var p;
          f && !M && (p = Q(e, t)), l && s && s.length ? J(e, t, c, o).then(function (e) {
            i.resolve(e)
          }, function (e) {
            i.reject(H(e))
          }) : f && !M && p ? i.resolve(o || p) : o ? i.resolve(o) : i.reject(H(e))
        }
        return i.promise
      }, ee = function (e, t, n) {
        var r, o = l ? y[l] : y, i = A;
        if (N && Object.prototype.hasOwnProperty.call(N, n) && (i = N[n]), o && Object.prototype.hasOwnProperty.call(o, e)) {
          var a = o[e];
          r = "@:" === a.substr(0, 2) ? ee(a.substr(2), t, n) : i.interpolate(a, t)
        } else {
          var c;
          f && !M && (c = Q(e, t)), l && s && s.length ? (p = 0, r = function (e, t, n) {
            return X($ > 0 ? $ : p, e, t, n)
          }(e, t, i)) : r = f && !M && c ? c : H(e)
        }
        return r
      };
      U.preferredLanguage = function (e) {
        return e && F(e), o
      }, U.cloakClassName = function () {
        return k
      }, U.nestedObjectDelimeter = function () {
        return C
      }, U.fallbackLanguage = function (e) {
        if (void 0 !== e && null !== e) {
          if (R(e), h && s && s.length) for (var t = 0, n = s.length; n > t; t++) j[s[t]] || (j[s[t]] = z(s[t]));
          U.use(U.use())
        }
        return a ? s[0] : s
      }, U.useFallbackLanguage = function (e) {
        if (void 0 !== e && null !== e) if (e) {
          var t = D(s, e);
          t > -1 && ($ = t)
        } else $ = 0
      }, U.proposedLanguage = function () {
        return c
      }, U.storage = function () {
        return i
      }, U.use = function (e) {
        if (!e) return l;
        var t = r.defer();
        n.$emit("$translateChangeStart", {language: e});
        var o = I(e);
        return o && (e = o), !S && y[e] || !h || j[e] ? c === e && j[e] ? j[e].then(function (e) {
          return t.resolve(e.key), e
        }, function (e) {
          return t.reject(e), r.reject(e)
        }) : (t.resolve(e), V(e)) : (c = e, j[e] = z(e).then(function (e) {
          return L(e.key, e.table), t.resolve(e.key), V(e.key), e
        }, function (e) {
          return n.$emit("$translateChangeError", {language: e}), t.reject(e), n.$emit("$translateChangeEnd", {language: e}), r.reject(e)
        }), j[e].finally(function () {
          !function (e) {
            c === e && (c = void 0), j[e] = void 0
          }(e)
        })), t.promise
      }, U.storageKey = function () {
        return q()
      }, U.isPostCompilingEnabled = function () {
        return T
      }, U.isForceAsyncReloadEnabled = function () {
        return S
      }, U.refresh = function (e) {
        function t() {
          i.resolve(), n.$emit("$translateRefreshEnd", {language: e})
        }

        function o() {
          i.reject(), n.$emit("$translateRefreshEnd", {language: e})
        }

        if (!h) throw new Error("Couldn't refresh translation table, no loader registered!");
        var i = r.defer();
        if (n.$emit("$translateRefreshStart", {language: e}), e) if (y[e]) {
          var a = function (n) {
            L(n.key, n.table), e === l && V(l), t()
          };
          a.displayName = "refreshPostProcessor", z(e).then(a, o)
        } else o(); else {
          var c = [], u = {};
          if (s && s.length) for (var p = 0, f = s.length; f > p; p++) c.push(z(s[p])), u[s[p]] = !0;
          l && !u[l] && c.push(z(l));
          var d = function (e) {
            y = {}, angular.forEach(e, function (e) {
              L(e.key, e.table)
            }), l && V(l), t()
          };
          d.displayName = "refreshPostProcessor", r.all(c).then(d, o)
        }
        return i.promise
      }, U.instant = function (e, t, n) {
        if (null === e || angular.isUndefined(e)) return e;
        if (angular.isArray(e)) {
          for (var r = {}, i = 0, a = e.length; a > i; i++) r[e[i]] = U.instant(e[i], t, n);
          return r
        }
        if (angular.isString(e) && e.length < 1) return e;
        e && (e = O.apply(e));
        var c, u = [];
        o && u.push(o), l && u.push(l), s && s.length && (u = u.concat(s));
        for (var p = 0, d = u.length; d > p; p++) {
          var h = u[p];
          if (y[h] && (void 0 !== y[h][e] ? c = ee(e, t, n) : (m || v) && (c = H(e))), void 0 !== c) break
        }
        return c || "" === c || (c = A.interpolate(e, t), f && !M && (c = Q(e, t))), c
      }, U.versionInfo = function () {
        return "2.8.0"
      }, U.loaderCache = function () {
        return b
      }, U.directivePriority = function () {
        return _
      }, U.statefulFilter = function () {
        return P
      }, U.isReady = function () {
        return !1
      };
      var te = r.defer();
      U.onReady = function (e) {
        var t = r.defer();
        return angular.isFunction(e) && t.promise.then(e), te.promise.then(function () {
          t.resolve()
        }), t.promise
      };
      var ne = n.$on("$translateReady", function () {
        te.resolve(), ne(), ne = null
      }), re = n.$on("$translateChangeEnd", function () {
        te.resolve(), re(), re = null
      });
      if (h) {
        if (angular.equals(y, {}) && U.use() && U.use(U.use()), s && s.length) for (var oe = 0, ie = s.length; ie > oe; oe++) {
          var se = s[oe];
          (S || !y[se]) && (j[se] = z(se).then(function (e) {
            return L(e.key, e.table), n.$emit("$translateChangeEnd", {language: e.key}), e
          }))
        }
      } else n.$emit("$translateReady", {language: U.use()});
      return U
    }]
  }

  function n(e, t) {
    "use strict";
    var n, r = {};
    return r.setLocale = function (e) {
      n = e
    }, r.getInterpolationIdentifier = function () {
      return "default"
    }, r.useSanitizeValueStrategy = function (e) {
      return t.useStrategy(e), this
    }, r.interpolate = function (n, r) {
      r = r || {}, r = t.sanitize(r, "params");
      var o = e(n)(r);
      return o = t.sanitize(o, "text")
    }, r
  }

  function r(e, t, n, r, i, s) {
    "use strict";
    return {
      restrict: "AE", scope: !0, priority: e.directivePriority(), compile: function (t, a) {
        var l = a.translateValues ? a.translateValues : void 0,
          c = a.translateInterpolation ? a.translateInterpolation : void 0,
          u = t[0].outerHTML.match(/translate-value-+/i),
          p = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)",
          f = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
        return function (t, d, h) {
          t.interpolateParams = {}, t.preText = "", t.postText = "", t.translateNamespace = o(t);
          var g = {}, m = function (e) {
            if (angular.isFunction(m._unwatchOld) && (m._unwatchOld(), m._unwatchOld = void 0), angular.equals(e, "") || !angular.isDefined(e)) {
              var r = function () {
                return this.toString().replace(/^\s+|\s+$/g, "")
              }.apply(d.text()), o = r.match(p);
              if (angular.isArray(o)) {
                t.preText = o[1], t.postText = o[3], g.translate = n(o[2])(t.$parent);
                var i = r.match(f);
                angular.isArray(i) && i[2] && i[2].length && (m._unwatchOld = t.$watch(i[2], function (e) {
                  g.translate = e, $()
                }))
              } else g.translate = r
            } else g.translate = e;
            $()
          };
          !function (e, n, r) {
            if (n.translateValues && angular.extend(e, i(n.translateValues)(t.$parent)), u) for (var o in r) Object.prototype.hasOwnProperty.call(n, o) && "translateValue" === o.substr(0, 14) && "translateValues" !== o && (e[angular.lowercase(o.substr(14, 1)) + o.substr(15)] = r[o])
          }(t.interpolateParams, h, a);
          var v = !0;
          h.$observe("translate", function (e) {
            void 0 === e ? m("") : "" === e && v || (g.translate = e, $()), v = !1
          });
          for (var b in h) h.hasOwnProperty(b) && "translateAttr" === b.substr(0, 13) && function (e) {
            h.$observe(e, function (t) {
              g[e] = t, $()
            })
          }(b);
          if (h.$observe("translateDefault", function (e) {
              t.defaultText = e
            }), l && h.$observe("translateValues", function (e) {
              e && t.$parent.$watch(function () {
                angular.extend(t.interpolateParams, i(e)(t.$parent))
              })
            }), u) {
            for (var y in h) Object.prototype.hasOwnProperty.call(h, y) && "translateValue" === y.substr(0, 14) && "translateValues" !== y && function (e) {
              h.$observe(e, function (n) {
                var r = angular.lowercase(e.substr(14, 1)) + e.substr(15);
                t.interpolateParams[r] = n
              })
            }(y)
          }
          var $ = function () {
            for (var e in g) g.hasOwnProperty(e) && void 0 !== g[e] && x(e, g[e], t, t.interpolateParams, t.defaultText, t.translateNamespace)
          }, x = function (t, n, r, o, i, s) {
            n ? (s && "." === n.charAt(0) && (n = s + n), e(n, o, c, i).then(function (e) {
              w(e, r, !0, t)
            }, function (e) {
              w(e, r, !1, t)
            })) : w(n, r, !1, t)
          }, w = function (t, n, o, i) {
            if ("translate" === i) {
              o || void 0 === n.defaultText || (t = n.defaultText), d.empty().append(n.preText + t + n.postText);
              var s = e.isPostCompilingEnabled(), l = void 0 !== a.translateCompile,
                c = l && "false" !== a.translateCompile;
              (s && !l || c) && r(d.contents())(n)
            } else {
              o || void 0 === n.defaultText || (t = n.defaultText);
              var u = h.$attr[i];
              "data-" === u.substr(0, 5) && (u = u.substr(5)), u = u.substr(15), d.attr(u, t)
            }
          };
          (l || u || h.translateDefault) && t.$watch("interpolateParams", $, !0);
          var k = s.$on("$translateChangeSuccess", $);
          d.text().length ? m(h.translate ? h.translate : "") : h.translate && m(h.translate), $(), t.$on("$destroy", k)
        }
      }
    }
  }

  function o(e) {
    "use strict";
    return e.translateNamespace ? e.translateNamespace : e.$parent ? o(e.$parent) : void 0
  }

  function i(e) {
    "use strict";
    return {
      compile: function (t) {
        var n = function () {
          t.addClass(e.cloakClassName())
        }, r = function () {
          t.removeClass(e.cloakClassName())
        };
        return e.onReady(function () {
          r()
        }), n(), function (t, o, i) {
          i.translateCloak && i.translateCloak.length && i.$observe("translateCloak", function (t) {
            e(t).then(r, n)
          })
        }
      }
    }
  }

  function s() {
    "use strict";
    return {
      restrict: "A", scope: !0, compile: function () {
        return {
          pre: function (e, t, n) {
            e.translateNamespace = o(e), e.translateNamespace && "." === n.translateNamespace.charAt(0) ? e.translateNamespace += n.translateNamespace : e.translateNamespace = n.translateNamespace
          }
        }
      }
    }
  }

  function o(e) {
    "use strict";
    return e.translateNamespace ? e.translateNamespace : e.$parent ? o(e.$parent) : void 0
  }

  function a(e, t) {
    "use strict";
    var n = function (n, r, o) {
      return angular.isObject(r) || (r = e(r)(this)), t.instant(n, r, o)
    };
    return t.statefulFilter() && (n.$stateful = !0), n
  }

  function l(e) {
    "use strict";
    return e("translations")
  }

  return angular.module("pascalprecht.translate", ["ng"]).run(e), e.$inject = ["$translate"], e.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", function () {
    "use strict";
    var e, t, n = null, r = !1, o = !1;
    (t = {
      sanitize: function (e, t) {
        return "text" === t && (e = s(e)), e
      }, escape: function (e, t) {
        return "text" === t && (e = i(e)), e
      }, sanitizeParameters: function (e, t) {
        return "params" === t && (e = a(e, s)), e
      }, escapeParameters: function (e, t) {
        return "params" === t && (e = a(e, i)), e
      }
    }).escaped = t.escapeParameters, this.addStrategy = function (e, n) {
      return t[e] = n, this
    }, this.removeStrategy = function (e) {
      return delete t[e], this
    }, this.useStrategy = function (e) {
      return r = !0, n = e, this
    }, this.$get = ["$injector", "$log", function (i, s) {
      var a = {}, l = function (e, n, r) {
        return angular.forEach(r, function (r) {
          if (angular.isFunction(r)) e = r(e, n); else if (angular.isFunction(t[r])) e = t[r](e, n); else {
            if (!angular.isString(t[r])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'");
            if (!a[t[r]]) try {
              a[t[r]] = i.get(t[r])
            } catch (e) {
              throw a[t[r]] = function () {
              }, new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'")
            }
            e = a[t[r]](e, n)
          }
        }), e
      }, c = function () {
        r || o || (s.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), o = !0)
      };
      return i.has("$sanitize") && (e = i.get("$sanitize")), {
        useStrategy: function (e) {
          return function (t) {
            e.useStrategy(t)
          }
        }(this), sanitize: function (e, t, r) {
          if (n || c(), arguments.length < 3 && (r = n), !r) return e;
          var o = angular.isArray(r) ? r : [r];
          return l(e, t, o)
        }
      }
    }];
    var i = function (e) {
      var t = angular.element("<div></div>");
      return t.text(e), t.html()
    }, s = function (t) {
      if (!e) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
      return e(t)
    }, a = function (e, t) {
      if (angular.isObject(e)) {
        var n = angular.isArray(e) ? [] : {};
        return angular.forEach(e, function (e, r) {
          n[r] = a(e, t)
        }), n
      }
      return angular.isNumber(e) ? e : t(e)
    }
  }), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", t), t.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], t.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", n), n.$inject = ["$interpolate", "$translateSanitization"], n.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", r), r.$inject = ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope"], r.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateCloak", i), i.$inject = ["$translate"], i.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").directive("translateNamespace", s), s.displayName = "translateNamespaceDirective", angular.module("pascalprecht.translate").filter("translate", a), a.$inject = ["$parse", "$translate"], a.displayName = "translateFilterFactory", angular.module("pascalprecht.translate").factory("$translationCache", l), l.$inject = ["$cacheFactory"], l.displayName = "$translationCache", "pascalprecht.translate"
}), function (e, t) {
  "function" == typeof define && define.amd ? define([], function () {
    return t()
  }) : "object" == typeof exports ? module.exports = t() : t()
}(0, function () {
  function e(e, t) {
    "use strict";
    return function (n) {
      if (!n || !(angular.isArray(n.files) || angular.isString(n.prefix) && angular.isString(n.suffix))) throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
      n.files || (n.files = [{prefix: n.prefix, suffix: n.suffix}]);
      for (var r = [], o = n.files.length, i = 0; o > i; i++) r.push(function (r) {
        if (!r || !angular.isString(r.prefix) || !angular.isString(r.suffix)) throw new Error("Couldn't load static file, no prefix or suffix specified!");
        return t(angular.extend({
          url: [r.prefix, n.key, r.suffix].join(""),
          method: "GET",
          params: ""
        }, n.$http)).then(function (e) {
          return e.data
        }, function () {
          return e.reject(n.key)
        })
      }({prefix: n.files[i].prefix, key: n.key, suffix: n.files[i].suffix}));
      return e.all(r).then(function (e) {
        for (var t = e.length, n = {}, r = 0; t > r; r++) for (var o in e[r]) n[o] = e[r][o];
        return n
      })
    }
  }

  return e.$inject = ["$q", "$http"], angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", e), e.displayName = "$translateStaticFilesLoader", "pascalprecht.translate"
}), function (e, t, n) {
  "use strict";
  t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (e, n) {
    var r, o = {}, i = {}, s = !1, a = t.copy, l = t.isUndefined;
    return n.addPollFn(function () {
      var t = n.cookies();
      r != t && (r = t, a(t, i), a(t, o), s && e.$apply())
    })(), s = !0, e.$watch(function () {
      var e, r, s;
      for (e in i) l(o[e]) && n.cookies(e, void 0);
      for (e in o) r = o[e], t.isString(r) || (r = "" + r, o[e] = r), r !== i[e] && (n.cookies(e, r), s = !0);
      if (s) for (e in r = n.cookies(), o) o[e] !== r[e] && (l(r[e]) ? delete o[e] : o[e] = r[e])
    }), o
  }]).factory("$cookieStore", ["$cookies", function (e) {
    return {
      get: function (n) {
        return (n = e[n]) ? t.fromJson(n) : n
      }, put: function (n, r) {
        e[n] = t.toJson(r)
      }, remove: function (t) {
        delete e[t]
      }
    }
  }])
}(window, window.angular);
var Langs = {};
Langs.en = {
  time: "时间",
  open: "开盘",
  high: "最高",
  low: "最低",
  close: "收盘",
  increase: "涨幅",
  swing: "振幅",
  volume: "VOL",
  quoteVolume: "转让额",
  hand: "换手率",
  o: "开",
  h: "高",
  l: "低",
  c: "收",
  price: "价格",
  updown: "涨跌",
  rang: "幅度"
}, Langs.cn = {
  time: "时间",
  open: "开盘",
  high: "最高",
  low: "最低",
  close: "收盘",
  increase: "涨幅",
  swing: "振幅",
  volume: "成交量",
  quoteVolume: "成交额",
  hand: "换手率",
  o: "开",
  h: "高",
  l: "低",
  c: "收",
  price: "价格",
  updown: "涨跌",
  rang: "幅度"
}, function (e) {
  "use strict";
  var t = function (e, t) {
    this.init("tooltip", e, t)
  };
  t.prototype = {
    constructor: t, init: function (t, n, r) {
      var o, i;
      this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, "manual" != this.options.trigger && (o = "hover" == this.options.trigger ? "mouseenter" : "focus", i = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(o, this.options.selector, e.proxy(this.enter, this)), this.$element.on(i, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle()
    }, getOptions: function (t) {
      return (t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data())).delay && "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), t
    }, enter: function (t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      n.options.delay && n.options.delay.show ? (n.hoverState = "in", setTimeout(function () {
        "in" == n.hoverState && n.show()
      }, n.options.delay.show)) : n.show()
    }, leave: function (t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      n.options.delay && n.options.delay.hide ? (n.hoverState = "out", setTimeout(function () {
        "out" == n.hoverState && n.hide()
      }, n.options.delay.hide)) : n.hide()
    }, show: function () {
      var e, t, n, r, o, i, s;
      if (this.hasContent() && this.enabled) {
        switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), i = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(i), e.remove().css({
          top: 0,
          left: 0,
          display: "block"
        }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, o = e[0].offsetHeight, t ? i.split(" ")[1] : i) {
          case"bottom":
            s = {top: n.top + n.height, left: n.left + n.width / 2 - r / 2};
            break;
          case"top":
            s = {top: n.top - o, left: n.left + n.width / 2 - r / 2};
            break;
          case"left":
            s = {top: n.top + n.height / 2 - o / 2, left: n.left - r};
            break;
          case"right":
            s = {top: n.top + n.height / 2 - o / 2, left: n.left + n.width}
        }
        e.css(s).addClass(i).addClass("in")
      }
    }, setContent: function () {
      var e = this.tip();
      e.find(".tooltip-inner").html(this.getTitle()), e.removeClass("fade in top bottom left right")
    }, hide: function () {
      var t = this.tip();
      t.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? function () {
        var n = setTimeout(function () {
          t.off(e.support.transition.end).remove()
        }, 500);
        t.one(e.support.transition.end, function () {
          clearTimeout(n), t.remove()
        })
      }() : t.remove()
    }, fixTitle: function () {
      var e = this.$element;
      (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
    }, hasContent: function () {
      return this.getTitle()
    }, getPosition: function (t) {
      return e.extend({}, t ? {top: 0, left: 0} : this.$element.offset(), {
        width: this.$element[0].offsetWidth,
        height: this.$element[0].offsetHeight
      })
    }, getTitle: function () {
      var e, t = this.$element, n = this.options;
      return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title), e = e.toString().replace(/(^\s*|\s*$)/, "")
    }, tip: function () {
      return this.$tip = this.$tip || e(this.options.template)
    }, validate: function () {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
      this.enabled = !0
    }, disable: function () {
      this.enabled = !1
    }, toggleEnabled: function () {
      this.enabled = !this.enabled
    }, toggle: function () {
      this[this.tip().hasClass("in") ? "hide" : "show"]()
    }
  }, e.fn.tooltip = function (n) {
    return this.each(function () {
      var r = e(this), o = r.data("tooltip"), i = "object" == typeof n && n;
      o || r.data("tooltip", o = new t(this, i)), "string" == typeof n && o[n]()
    })
  }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
    animation: !0,
    delay: 0,
    selector: !1,
    placement: "top",
    trigger: "hover",
    title: "",
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  }
}(window.jQuery);
var BASE_URL = "http://localhost/rtbtc-dev/", DATA_URL = "http://localhost/rtbtc-dev/", DEBUG = !0, OFFLINE = !1,
  RTBTC_Class = function (e, t, n) {
    var r = null;
    return new function () {
      this.Build = function () {
        return null == r && ((r = new function () {
          function r(e, t) {
            if (o.handlers.hasOwnProperty(e)) for (var n = 0; n < o.handlers[e].length; n++) o.handlers[e][n][1](t)
          }

          var o = {
            url: "" + e,
            debug: !!t,
            offline: !!n,
            lang: "en",
            accounts: {},
            has_api: !1,
            prefsAccount: "",
            expires: millitime() + 60,
            expires_id: -1,
            base: "",
            base_int: 1,
            base_prec: 8,
            quote: "CNY",
            quote_int: 1,
            quote_prec: 4,
            exch_fee: {mtgox: .0065, bitstamp: .005, btce: .002},
            token: "",
            version: "0.0.0",
            startTime: millitime(),
            offset: 0,
            exchange: "bitstamp",
            exch_list: ["bitstamp", "btce"],
            handlers: {},
            title: "" + window.document.title,
            ERROR: 1,
            WARNING: 2,
            MESSAGE: 3,
            windows: []
          }, i = function (e, t) {
            switch (t) {
              case o.ERROR:
                console.error(e);
                break;
              case o.WARNING:
                console.warn(e);
                break;
              case o.MESSAGE:
              default:
                console.log(e)
            }
            if (!DEBUG) throw{}
          };
          $.ajaxSetup({async: !0, type: "POST", dataType: "json", crossDomain: !1});
          for (var s = function (e) {
            void 0 !== e.t0 && void 0 !== e.t1 && void 0 !== e.t2 && void 0 !== e.t3 && r("timing", {
              latency: (-e.t0 + e.t1 - e.t2 + e.t3) / 2,
              processing: e.t2 - e.t1
            })
          }, a = [""], l = [""], c = 1; c <= 30; c++) l.push(l[c - 1] + "&nbsp;"), a.push(a[c - 1] + "0");
          return {
            token: function (e) {
              return null == e ? o.token : (o.token = e, DEBUG && i('Set RTBTC token to "' + e + '"'), this)
            }, account: function () {
              return o.accounts[o.exchange]
            }, accounts: function (e) {
              o.accounts = {};
              for (var t in e) o.exch_list.indexOf(t) < 0 || (o.accounts[t] = e[t], DEBUG && i("Set user account string for " + t + ' to "' + e[t] + '"'));
              return this
            }, prefsAccount: function (e) {
              return null == e ? o.prefsAccount : (o.prefsAccount = e, DEBUG && i('Set user preferences account string to "' + e + '"'), this)
            }, hasApi: function () {
              return o.accounts.hasOwnProperty(o.exchange)
            }, startTime: function () {
              return o.startTime
            }, offset: function (e) {
              return null == e ? o.offset : (o.offset = e.client - e.server, DEBUG && i("Got server time offset of " + o.offset + "s"), this)
            }, expires: function (e) {
              return null == e ? o.expires : (o.expires = +e + o.offset, function () {
                var e = o.expires - millitime();
                1e3 * e > 2147483647 || (DEBUG && i("Expire in " + (o.expires - millitime()) + "s"), window.clearTimeout(o.expires_id), o.expires_id = window.setTimeout(function () {
                  DEBUG && i("Subscription expired. Reloading."), window.location.reload()
                }, 1e3 * e))
              }(), DEBUG && i("Set expiration time to " + new Date(1e3 * o.expires)), this)
            }, ajax: function (e, t, n, a, l) {
              return void 0 !== e && function (e, t, n, a, l) {
                DEBUG && i("AJAX Call for " + e + ", data:"), DEBUG && null != t && i(t), $.ajax({
                  url: o.url + "api/" + e,
                  data: {payload: t, token: o.token, aid: o.accounts[o.exchange], t0: millitime()},
                  success: function (t, c, u) {
                    var p = millitime();
                    if (void 0 !== t.result) {
                      if (void 0 !== t.timing && s({
                          t0: parseFloat(t.timing.t0),
                          t1: parseFloat(t.timing.t1),
                          t2: parseFloat(t.timing.t2),
                          t3: p
                        }), void 0 !== t.token && (o.token = $.trim(t.token)), void 0 !== t.version) {
                        var f = $.trim(t.version);
                        f != o.version && window.setTimeout(function () {
                          r("version", f)
                        }, 5e3)
                      }
                      if ("success" == t.result) DEBUG && i("Success data [" + e + "]:"), DEBUG && i(t.data), "function" == typeof n && n(t.data); else if (void 0 !== t.reason) switch (t.reason) {
                        case"session":
                        case"auth":
                          DEBUG && i("Save failure: " + t.reason), !OFFLINE && window.location.reload();
                          break;
                        default:
                          "function" == typeof a && (DEBUG && i("Calling failure fn with:"), DEBUG && i(t.reason), a(t.reason))
                      } else "function" == typeof a && a()
                    } else "function" == typeof l && l()
                  },
                  error: function (e, t, n) {
                    "function" == typeof l && l()
                  }
                })
              }(e, t, n, a, l), this
            }, json: function (e, t, n) {
              return void 0 !== e && function (e, t, n) {
                DEBUG && i("JSON Call for " + e), $.ajax({
                  url: e,
                  type: "GET",
                  dataType: "json",
                  success: function (e, n, r) {
                    "function" == typeof t && t(e)
                  },
                  error: function (e, t, r) {
                    "function" == typeof n && n()
                  }
                })
              }(e, t, n), this
            }, base: function () {
              return o.base
            }, quote: function () {
              return o.quote
            }, symbol: function () {
              return o.base + "/" + o.quote
            }, baseInt: function () {
              return o.base_int
            }, quoteInt: function () {
              return o.quote_int
            }, basePrec: function () {
              return o.base_prec
            }, quotePrec: function () {
              return o.quote_prec
            }, instrument: function (e, t, n) {
              try {
                e = e.toLowerCase(), t = t.toUpperCase(), n = n.toUpperCase()
              } catch (r) {
                return DEBUG && i("RTBTC.instrument 1: " + e + ", " + t + ", " + n, o.ERROR), this
              }
              var s = {exch: "" + o.exchange, base: "" + o.base, quote: "" + o.quote};
              return o.exchange = e, o.base = t, o.quote = n, DEBUG && i("RTBTC:instrument(" + o.exchange + ", " + o.base + ", " + o.quote + ")"), DEBUG && i(" " + o.base + " precision : " + o.base_prec + ", int: " + o.base_int), DEBUG && i(" " + o.quote + " precision: " + o.quote_prec + ", int: " + o.quote_int), r("instrument", {
                old_instr: s,
                new_instr: {exch: o.exchange, base: o.base, quote: o.quote}
              }), this
            }, version: function (e) {
              if (null == e) return o.version;
              o.version = e;
              for (var t = "", n = 0; n < 75; n++) t += "=";
              return DEBUG && i(t), DEBUG && i("RTBTC Version " + o.version), DEBUG && i(t), DEBUG && i(" "), this
            }, url: function () {
              return o.url
            }, language: function (e) {
              return null == e ? o.lang : (o.lang = e, r("language", o.lang), this)
            }, handler: function (e, t, n) {
              return o.handlers.hasOwnProperty(e) || (o.handlers[e] = []), o.handlers[e].push([t, n]), this
            }, unregister: function (e, t, n) {
              if (o.handlers.hasOwnProperty(e)) {
                var r, i = void 0 === n;
                for (r = o.handlers[e].length - 1; r >= 0; r--) o.handlers[e][r][0] == t && (i || o.handlers[e][r][1] == n) && o.handlers[e].splice(r, 1);
                return this
              }
            }, unregisterAll: function (e) {
              var t, n;
              for (n in o.handlers) if (o.handlers.hasOwnProperty(n)) for (t = o.handlers[n].length - 1; t >= 0; t--) o.handlers[n][t][0] == e && o.handlers[n].splice(t, 1)
            }, trigger: function (e, t) {
              r(e, t)
            }, countdown: function (e, t) {
              $(e).each(function (e, t) {
                $(t).data("time", parseInt($(this).attr("name"))).removeAttr("name")
              });
              var n = function (e, t) {
                $(e).each(function (e, n) {
                  var r = Math.max($(n).data("time"), 0), o = t ? dhms_from_sec(r) : hms_from_sec(r);
                  return $(n).text(o), $(n).data("time", r - 1), !0
                })
              };
              window.setInterval(function () {
                n(e, t)
              }, 1e3), n(e, t)
            }, toggle: function (e, t, n, r) {
              return $("<span/>").addClass("control-toggle").addClass(function () {
                return e ? "yes" : "no"
              }).append(function () {
                return '<i class="icon-' + (e ? "ok" : "remove") + '"></i>'
              }).data("state", e).click(function (e) {
                var o = $(e.currentTarget);
                o.data("state") ? (o.data("state", !1).removeClass("yes").addClass("no").html('<i class="icon-remove"></i>'), "function" == typeof n && n()) : (o.data("state", !0).removeClass("no").addClass("yes").html('<i class="icon-ok"></i>'), "function" == typeof t && t()), "function" == typeof r && r(), stopEvent(e)
              })
            }, select: function (e, t, n, r) {
              var o, i, s = $("<select/>").on("change", function (t) {
                n(t.currentTarget.value), r && (t.currentTarget.value = e)
              });
              for (o = 0; o < t.length; o++) i = $("<option/>").html(t[o].text).attr("value", t[o].val), t[o].val == e && i.attr("selected", "selected"), s.append(i);
              return s
            }, numFormat: function (e, t) {
              if (void 0 === e) return "";
              var n = null == t ? Settings.display.precision.price : t, r = e.toFixed(n), o = r.length, i = 1;
              for (isNaN(r) && (r = "0.0"); i < t;) {
                if ("0" != r.charAt(o - i)) {
                  if (1 == i) return r;
                  break
                }
                i++
              }
              return Settings.display.zeros ? r.slice(0, o - i + 1) + '<span class="insig">' + a[i - 1] + "</span>" : r.slice(0, o - i + 1) + l[i - 1]
            }, numFormatShort: function (e, t) {
              if (void 0 === e) return "";
              var n = null == t ? Settings.display.precision.price : t, r = e.toFixed(n), o = r.length, i = 1;
              for (isNaN(r) && (r = "0.0"); i < t;) {
                if ("0" != r.charAt(o - i)) {
                  if (1 == i) return r;
                  break
                }
                i++
              }
              return r.slice(0, o - i + 1)
            }, siteTitle: function (e) {
              window.document.title = e + o.title
            }, newWindow: function () {
              return o.windows.append(window.open(o.url + "s/platform/window", uniqueID())), this
            }, regUnsignedNum: new RegExp(/^\d*\.?\d*$/), internals: DEBUG ? function () {
              return o
            } : function () {
              return null
            }, debug: o.debug ? i : function (e, t) {
            }, isDebug: function () {
              return o.debug
            }, offline: function () {
              return o.offline
            }, ERROR: o.ERROR, WARNING: o.WARNING, MESSAGE: o.MESSAGE, ZEROS: a, SPACES: l
          }
        }).constructor = null), r
      }
    }
  }(BASE_URL, DEBUG, OFFLINE), RTBTC = RTBTC_Class.Build(), BTC = "&#3647;", BTC_U = "฿", BTC_INT = 1;
AssertException.prototype.toString = function () {
  return "AssertException: " + this.message
};
var lastUniqueID = 0, alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
  alphalen = alphabet.length;
Object.size = function (e) {
  var t, n = 0;
  for (t in e) e.hasOwnProperty(t) && n++;
  return n
}, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
  var t = this.length, n = Number(arguments[1]) || 0;
  for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++) if (n in this && this[n] === e) return n;
  return -1
});
var has_dataURI = function () {
  return !1
};
!function () {
  var e = new Image;
  e.onload = function () {
    1 == this.width && 1 == this.height && (has_dataURI = function () {
      return !0
    })
  }, e.onerror = function () {
  }, e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}(), function () {
  var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.reqAnimFrame = void 0 !== e ? e : function (e) {
    e()
  }
}(), jQuery.cookie = function (e, t, n) {
  if (arguments.length > 1 && "[object Object]" !== String(t)) {
    if (n = jQuery.extend({}, n), null !== t && void 0 !== t || (n.expires = -1), "number" == typeof n.expires) {
      var r = n.expires, o = n.expires = new Date;
      o.setDate(o.getDate() + r)
    }
    return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
  }
  var i, s = (n = t || {}).raw ? function (e) {
    return e
  } : decodeURIComponent;
  return (i = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? s(i[1]) : null
};
var Colors = {
  c: {
    stroke: {
      fenshi: "#ffffff",
      up: "#ff0000",
      down: "#3AA60C",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#ff0000",
      down: "#3AA60C",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  c1: {
    stroke: {
      fenshi: "#ffffff",
      up: "#d00017",
      down: "#4dd710",
      bid: "#d00017",
      ask: "#4dd710",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#3AA60C",
      down: "#A10013",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  f: {
    stroke: {
      up: "#00a1d9",
      down: "#ed111a",
      bid: "#ed111a",
      ask: "#00a1d9",
      grid: "#d5e4eb",
      border: "#014d65",
      order: "#014d65",
      majorlevel: "#014d65",
      minorlevel: "#014d65",
      crosshair: "#040f12",
      i: ["#00a1d9", "#ed111a", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
    },
    fill: {
      bg: "#d5e4eb",
      up: "#00ACE5",
      down: "#FF121A",
      label: "#09232B",
      flags: "#F2F8FA",
      crosshair: "#fff",
      blankBG: "#fff",
      flagtext: "#040f12",
      ordertext: "#014d65",
      slottext: "#040f12"
    }
  },
  m: {
    stroke: {
      up: "#9C6",
      down: "#B40000",
      bid: "#7A1631",
      ask: "#89D12A",
      grid: "#454545",
      border: "#616161",
      order: "#014d65",
      majorlevel: "#014d65",
      minorlevel: "#014d65",
      crosshair: "#ffc200",
      i: ["#ffc200", "#0099cc", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
    },
    fill: {
      bg: "#0f0f0f",
      up: "#658744",
      down: "#750000",
      label: "#F4FFE4",
      flags: "#0f0f0f",
      crosshair: "#0f0f0f",
      blankBG: "#0f0f0f",
      flagtext: "#F4FFE4",
      ordertext: "#014d65",
      slottext: "#F4FFE4"
    }
  },
  t: {
    stroke: {
      up: "#498192",
      down: "#daa102",
      bid: "#daa102",
      ask: "#498192",
      grid: "#0d1e29",
      border: "#014d65",
      order: "#014d65",
      majorlevel: "#014d65",
      minorlevel: "#014d65",
      crosshair: "#040f12",
      i: ["#498192", "#daa102", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
    },
    fill: {
      bg: "#05232c",
      up: "#d6f7fb",
      down: "#f9f15f",
      label: "#daa102",
      flags: "#F2F8FA",
      crosshair: "#fff",
      blankBG: "#050b0f",
      flagtext: "#040f12",
      ordertext: "#014d65",
      slottext: "#040f12"
    }
  },
  s: {
    stroke: {
      up: "#999",
      down: "#000",
      bid: "#333",
      ask: "#999",
      grid: "#ddd",
      border: "#000",
      order: "#014d65",
      majorlevel: "#ccc",
      minorlevel: "#ddd",
      crosshair: "#000",
      i: ["#aaa", "#999", "#ccc", "#777"]
    },
    fill: {
      bg: "#fff",
      up: "#bbb",
      down: "#333",
      label: "#333",
      flags: "#fff",
      crosshair: "#fff",
      blankBG: "#fff",
      flagtext: "#000",
      ordertext: "#014d65",
      slottext: "#000"
    }
  },
  a: {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#d3d3d3",
      border: "#999999",
      order: "red",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#A10013",
      down: "#3AA60C",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  a1: {
    stroke: {
      fenshi: "#267cd1",
      up: "#f24957",
      down: "#1dbf60",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#d3d3d3",
      border: "#999999",
      arrow: "#008fbd",
      order: "red",
      opacity: !0,
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#f24957",
      down: "#1dbf60",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  a2: {
    stroke: {
      fenshi: "#267cd1",
      up: "#f24957",
      down: "#1dbf60",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#d3d3d3",
      border: "#999999",
      arrow: "#008fbd",
      order: "red",
      priceShow: !0,
      opacity: !0,
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#f24957",
      down: "#1dbf60",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  "depth-white": {
    stroke: {
      up: "#d00017",
      down: "#ff6c78",
      bid: "#4dd710",
      ask: "#ff6c78",
      grid: "#dedede",
      border: "#dedede",
      order: "#1ad1af",
      majorlevel: "blue",
      minorlevel: "blue",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#ff6c78",
      down: "#9ed577",
      label: "#999999",
      flags: "#191919",
      crosshair: "#fff",
      blankBG: "#ffffff",
      flagtext: "#666666",
      ordertext: "#1ad1af",
      slottext: "blue"
    }
  },
  "chart-white2": {
    stroke: {
      fenshi: "#267cd1",
      up: "#73c921",
      fillUp: "#73c921",
      down: "#ca2c78",
      bid: "#79b48a",
      ask: "#f32f3f",
      grid: "#f1f1f1",
      border: "#f1f1f1",
      arrow: "#444",
      order: "red",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#ffc200", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  "depth-black-bnb": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#262d33",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-mobile-bnb": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-bnb": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#262d33",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-mobile-bnb": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-ico": {
    stroke: {
      fenshi: "#ffffff",
      up: "#4dd710",
      down: "#d00017",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#A10013",
      down: "#3AA60C",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-ico": {
    stroke: {
      fenshi: "#ffffff",
      up: "#3AA60C",
      down: "#ff0000",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#3AA60C",
      down: "#ff0000",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#262d33",
      blankBG: "#191919",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-zql": {
    stroke: {
      fenshi: "#ffffff",
      up: "#3AA60C",
      down: "#ff0000",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#3AA60C",
      down: "#ff0000",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#262d33",
      blankBG: "#191919",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-mobile-zql": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-zql": {
    stroke: {
      fenshi: "#ffffff",
      up: "#4dd710",
      down: "#d00017",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#A10013",
      down: "#3AA60C",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-mobile-zql": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-dae": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-mobile-dae": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-dae": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#262d33",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-mobile-dae": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  }
}, Validator = function () {
  var e = null, t = null, n = {BOOL: 1, INT: 2, FLOAT: 3, STRING: 4}, r = RTBTC.debug;
  return {
    create: function (o) {
      if (o === n.BOOL && (t = o), o === n.INT && (t = o), o === n.FLOAT && (t = o), o === n.STRING && (t = o), null == t) throw"Invalid type.";
      return {
        get: function () {
          return e
        }, set: function (o) {
          return function (o) {
            switch (t) {
              case n.BOOL:
                if ("boolean" == typeof o) return e = o, !0;
                break;
              case n.INT:
                if ("number" == typeof o) return e = parseInt(o), !0;
                break;
              case n.FLOAT:
                if ("number" == typeof o) return e = parseFloat(o), !0;
                break;
              case n.STRING:
                if ("string" == typeof o) return e = "" + o, !0
            }
            DEBUG && r("Unable to validate " + o + ' as type "' + function (e) {
              switch (t) {
                case n.BOOL:
                  return "boolean";
                case n.INT:
                  return "integer";
                case n.FLOAT:
                  return "float";
                case n.STRING:
                  return "string";
                default:
                  return "unknown"
              }
            }() + '". Detected type: ' + typeof o, RTBTC.ERROR)
          }(o), this
        }, toString: function () {
          return "" + e
        }
      }
    }, BOOL: n.BOOL, INT: n.INT, FLOAT: n.FLOAT, STRING: n.STRING
  }
}, V = new Validator, Settings = {
  base: "BTC",
  quote: "USD",
  exchange: "mtgox",
  display: {precision: {price: 5, volume: 4}, zeros: !0, grid: 5},
  sounds: {},
  localTime: !0,
  theme: "c",
  version: "0.0.0",
  layouts: [{
    name: "Market Overview",
    modules: [{
      m: {t: "order-book", w: 478, h: 478, x: 510, y: 100, l: !0},
      c: {g: !0, i: .01, s: !0, d: 50}
    }, {m: {t: "time-sales", w: 488, h: 178, x: 10, y: 400, l: !0}, c: {f: !0, s: !0}}, {
      m: {
        t: "ticker",
        w: 478,
        h: 78,
        x: 510,
        y: 10,
        l: !0
      }, c: {a: !0, h: !0, l: !0, v: !0}
    }, {m: {t: "orders", w: 488, h: 108, x: 10, y: 280, l: !0}, c: {}}, {
      m: {
        t: "order-entry",
        w: 238,
        h: 258,
        x: 10,
        y: 10,
        l: !0
      }, c: {b: !0, c: !0, l: !1}
    }, {m: {t: "order-entry", w: 238, h: 258, x: 260, y: 10, l: !0}, c: {b: !1, c: !0, l: !1}}]
  }]
}, Settings_Helper = function () {
  var e = (new Validator).create(V.BOOL), t = (new Validator).create(V.INT),
    n = ((new Validator).create(V.FLOAT), (new Validator).create(V.STRING)), r = {}, o = {
      dpp: Settings.display.precision.price,
      dpv: Settings.display.precision.volume,
      dz: Settings.display.zeros,
      dg: Settings.display.grid,
      b: Settings.base,
      q: Settings.quote,
      ex: Settings.exchange,
      lt: Settings.localTime,
      thm: Settings.theme,
      snd: Settings.sounds,
      version: Settings.version
    }, i = (RTBTC.debug, function (e, t, n) {
      return void 0 === r[e] ? t : n.set(t).set(r[e]).get()
    });
  return {
    process: function (s) {
      return function (s) {
        r = s, Settings.display.precision.price = i("dpp", o.dpp, t), Settings.display.precision.volume = i("dpv", o.dpv, t), Settings.display.zeros = i("dz", o.dz, e), Settings.display.grid = i("dg", o.dg, t), Settings.display.grid = 5, Settings.localTime = i("lt", o.lt, e), Settings.theme = i("thm", o.thm, n), Settings.version = i("version", o.version, n);
        var a = i("b", o.b, n);
        Currency.valid(a) && (Settings.base = a);
        var l = i("q", o.q, n);
        Currency.valid(l) && (Settings.quote = l);
        var c = i("ex", o.ex, n);
        if (Exchanges.valid(c) && (Settings.exchange = c), Settings.sounds = s.hasOwnProperty("snd") ? s.snd : {}, void 0 !== s.layouts && s.layouts.length > 0) {
          Settings.layouts = [];
          for (var u, p, f = 0; f < s.layouts.length; f++) {
            if (u = {}, void 0 !== s.layouts[f].name && s.layouts[f].name.length > 0 && (u.name = "" + s.layouts[f].name), void 0 !== s.layouts[f].modules) {
              u.modules = [];
              for (var d = 0; d < s.layouts[f].modules.length; d++) p = {
                m: {},
                c: {}
              }, void 0 !== s.layouts[f].modules[d].m && (p.m = s.layouts[f].modules[d].m), void 0 !== s.layouts[f].modules[d].c && (p.c = s.layouts[f].modules[d].c), u.modules.push(deepCopy(p))
            }
            Settings.layouts.push(deepCopy(u))
          }
        }
      }(s), this
    }, save: function () {
      var e = {};
      for (var t in o) o.hasOwnProperty(t) && (e[t] = o[t]);
      return e.layouts = Settings.layouts, JSON.stringify(e)
    }, saveToStructure: function (e, t) {
      o[e] = t
    }
  }
}(), i18n = {
  Account: {
    ru: "счет",
    de: "Konto",
    cn: "帐户",
    pl: "konto",
    vi: "T�i kho?n",
    da: "konto",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Close: {
    ru: "?????????",
    de: "schlie�en",
    cn: "??",
    pl: "zamkn??",
    vi: "?�ng",
    da: "Luk",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Settings: {
    ru: "?????????",
    de: "Einstellungen",
    cn: "??",
    pl: "Ustawienia",
    vi: "C�i ??t",
    da: "Indstillinger",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Layout: {
    ru: "????????????",
    de: "Layout",
    cn: "??",
    pl: "uk?ad",
    vi: "Giao di?n",
    da: "Layout",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Locking: {
    ru: "??????????",
    de: "Sperren",
    cn: "??",
    pl: "Blokowanie",
    vi: "kh�a",
    da: "L�sning",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  "Place Order": {
    ru: "?????????? ?????",
    de: "Bestellung aufgeben",
    cn: "???",
    pl: "Z?�? zam�wienie",
    vi: "??t th? t?",
    da: "Afgiv ordre",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Sending: {
    ru: "??????????",
    de: "Senden",
    cn: "??",
    pl: "wysy?anie",
    vi: "g?i",
    da: "Sende",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Bid: {
    ru: "???",
    de: "Geld",
    cn: "??",
    pl: "oferta",
    vi: "Gi� th?u",
    da: "Bud",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Ask: {
    ru: "???",
    de: "Brief",
    "en-gb": "Offer",
    cn: "?",
    pl: "zapyta?",
    vi: "xin",
    da: "Sp�rg",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Sum: {ru: "?????", de: "Summe", cn: "??", pl: "suma", vi: "Sum", da: "Sum", es: "", sv: "", fi: "", bg: "", it: ""},
  Size: {
    ru: "??????",
    de: "Gr��e",
    cn: "??",
    pl: "rozmiar",
    vi: "K�ch th??c",
    da: "St�rrelse",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  }
}, Data_Class = function () {
  var e = null;
  return new function () {
    this.Build = function () {
      return null == e && ((e = new function () {
        function e() {
          DEBUG && o("Data Setup. " + (r.hasStorage ? "Has" : "Does not have") + " localStorage"), r.hasStorage && (r.storage = window.localStorage), function () {
            var e, n, o = RTBTC.base(), i = RTBTC.quote();
            for (r.cache.ticks = [], r.cache.ticker = {}, n = 0; n < r.offline.length; n++) e = r.offline[n], r.cache.bars[e] = [];
            for (n = 0; n < r.online.length; n++) e = r.online[n], r.links[e] = {
              prev: null,
              next: null,
              last: null
            }, r.lock[e] = !1;
            if (t(r.currentPeriod, !0), r.hasStorage) {
              var s = o + i + "_ticks";
              if (void 0 !== r.storage[s]) {
                var a = JSON.parse(r.storage[s]);
                a.hasOwnProperty("stamp") && a.stamp + r.config.ticksMaxAge > millitime() && (r.cache.ticks = a.ticks)
              }
            }
          }()
        }

        function t(e, t) {
          if (r.lock[e]) DEBUG && o("data: _load: LOCK on period " + e); else {
            r.lock[e] = !0;
            var n = RTBTC.base(), s = i + "/klines?symbol=" + RTBTC.base() + "&interval=" + function (t) {
              switch (e) {
                case 0:
                case 60:
                  return "1m";
                case 180:
                  return "3m";
                case 300:
                  return "5m";
                case 900:
                  return "15m";
                case 1800:
                  return "30m";
                case 3600:
                  return "1h";
                case 7200:
                  return "2h";
                case 14400:
                  return "4h";
                case 21600:
                  return "6h";
                case 43200:
                  return "12h";
                case 86400:
                  return "1d";
                case 259200:
                  return "3d";
                case 604800:
                  return "1w"
              }
            }();
            if (null != r.links[e].prev) s += "&endTime=" + r.links[e].prev; else if (!t) return void(r.lock[e] = !1);
            RTBTC.json(s, function (e) {
              return function (t) {
                n == RTBTC.base() && function (e, t, n) {
                  r.lock[t] = !1, e.length >= 0 && r._onLoaded && r._onLoaded(), e[e.length - 1];
                  var o;
                  if (e.length > 0 && (r.links[t].prev = e[0][0] - 1e3 * t), RTBTC.trigger("console", "Loaded " + e.length + " chart bars."), 0 != e.length) {
                    for (r.cache.bars[t] = [], o = e.length - 1; o >= 0; o--) r.cache.bars[t].push([e[o][0], Number(e[o][1]), Number(e[o][2]), Number(e[o][3]), Number(e[o][4]), Number(e[o][5]), Number(e[o][7])]);
                    RTBTC.trigger("barclose", t)
                  }
                }(t, e)
              }
            }(e), function (e) {
              return function (t) {
                !function (e) {
                  r.lock[e] = !1, DEBUG && o("Data: load failure for period " + e + "!")
                }(e)
              }
            }(e))
          }
        }

        function n() {
          if (r.hasStorage) {
            millitime();
            var e = RTBTC.exchange() + "_" + RTBTC.base() + RTBTC.quote() + "_ticks",
              t = r.cache.ticks.slice(0, r.config.tradeBuffer), n = {};
            if (0 != t.length) {
              n.stamp = millitime(), n.ticks = t;
              try {
                r.storage[e] = JSON.stringify(n)
              } catch (e) {
                DEBUG && o("LocalStorage quota exceeded.")
              }
              window.clearTimeout(r.config.saveID), r.config.saveID = -1
            }
          }
        }

        var r = {
            cache: {bars: {}, ticks: [], ticker: {}},
            links: {},
            currentPeriod: 60,
            online: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
            offline: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
            lock: {},
            storage: null,
            hasStorage: storageSupport(),
            config: {saveTimeout: 3e4, saveID: -1, tradeCount: 0, tradeSave: 100, tradeBuffer: 1500, ticksMaxAge: 300},
            self: null,
            debug: RTBTC.isDebug()
          }, o = RTBTC.debug,
          i = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1";
        return {
          setup: function (t) {
            return "undifined" != t && r.online.indexOf(t) >= 0 && (r.currentPeriod = t), e(), this
          }, self: function (t) {
            return r.self = t, RTBTC.handler("trade", "data", r.self.onTrade), RTBTC.handler("ticker", "data", r.self.onTicker), RTBTC.handler("instrument", "data", e), this
          }, onTrade: function (e) {
            !function (e) {
              var t, o = [e.time, e.price, e.amount];
              r.cache.ticks.splice(0, 0, o);
              var i, s, a = r.cache.ticks.length, l = r.config.tradeBuffer;
              a > l && r.cache.ticks.splice(l - 1, l - a);
              for (s in r.cache.bars) r.cache.bars.hasOwnProperty(s) && (i = +s, t = function (e, t) {
                return (e = +e) - e % i
              }(e.time), 0 == r.cache.bars[s].length || t >= r.cache.bars[s][0][0] + i ? (r.cache.bars[s].splice(0, 0, [t, o[1], o[1], o[1], o[1], o[2]]), RTBTC.trigger("barclose", s)) : t == r.cache.bars[s][0][0] && (o[1] > r.cache.bars[s][0][2] && (r.cache.bars[s][0][2] = o[1]), o[1] < r.cache.bars[s][0][3] && (r.cache.bars[s][0][3] = o[1]), r.cache.bars[s][0][4] = o[1], r.cache.bars[s][0][5] += o[2]));
              ++r.config.tradeCount % r.config.tradeSave == 0 ? n() : -1 == r.config.saveID && (r.config.saveID = window.setTimeout(n, r.config.saveTimeout))
            }(e)
          }, onTicker: function (e) {
            !function (e) {
              r.cache.ticker = e
            }(e)
          }, onBar: function (e, t) {
            !function (e, t) {
              if (void 0 != r.cache.bars[t]) if (r.cache.bars[t].length > 0) {
                if (e[0] < r.cache.bars[t][0][0]) return;
                if (e[0] == r.cache.bars[t][0][0] && e[5] <= r.cache.bars[t][0][5]) return;
                e[0] == r.cache.bars[t][0][0] ? r.cache.bars[t][0] = e : r.cache.bars[t].splice(0, 0, e), RTBTC.trigger("barclose", t)
              } else r.cache.bars[t].splice(0, 0, e), RTBTC.trigger("barclose", t)
            }(e, t)
          }, onLoaded: function (e) {
            r._onLoaded = e
          }, data: r.cache, loadPrev: function (e) {
            var n = e;
            if (-1 == r.online.indexOf(e)) for (var o = 0; o < r.online.length; o++) if (r.online[o] <= e) {
              n = r.online[o];
              break
            }
            t(n, !1)
          }, internals: r.debug ? function () {
            return r
          } : function () {
            return {}
          }, debug: r.debug ? o : function (e, t) {
          }
        }
      }).constructor = null), e
    }
  }
}(), Data = Data_Class.Build(), digit = 6, Indicator = function () {
  var e = {
    type: "",
    shortName: "IND",
    color: null,
    min: 0,
    max: 1,
    p: [],
    ps: [],
    V: new Validator,
    input: null,
    output: [],
    cache: {i0: -1, i1: -1, t0: -1, values: []},
    CANDLE: 0,
    OHLC: 1,
    HLC: 2,
    LINE: 3,
    MOUNTAIN: 4,
    BANDS: 5,
    PSAR: 6,
    HIST: 7,
    LBLHIST: 8,
    HISTLINE: 9,
    draw: function () {
      return []
    },
    statics: function () {
      return {}
    },
    update: function (e, t, n) {
    },
    label: function (e) {
      return ""
    },
    debug: RTBTC.isDebug()
  }, t = RTBTC.debug;
  return {
    build: function (n, r) {
      return function (n) {
        switch (DEBUG && t("Indicator: building " + n), n) {
          case"dmi":
            e.shortName = "DMI", e.p = [14], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.label = function (t) {
              var n = _("DMI");
              return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(1), n += ", +DI: ", n += e.output[1][t].toFixed(1), n += ", -DI: ", n += e.output[0][t].toFixed(1)), n
            }, e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}, {type: e.LINE, data: e.output[1]}, {
                type: e.LINE,
                data: e.output[2]
              }]
            }, e.update = function (t, n, r) {
              var o, i, s, a, l, c, u = 0, p = 0, f = 0, d = 0, h = 0, g = 0;
              for (e.output = [[0], [0], [0]], e.min = 1 / 0, e.max = -1 / 0, o = Math.min(t.length - 2, r + 150 - 1); o >= n; o--) p = Math.max(t[o][2] - t[o][3], Math.abs(t[o][2] - t[o + 1][4]), Math.abs(t[o][3] - t[o + 1][4])), i = t[o][2] - t[o + 1][2] > t[o + 1][3] - t[o][3] ? Math.max(t[o][2] - t[o + 1][2], 0) : 0, s = t[o + 1][3] - t[o][3] > t[o][2] - t[o + 1][2] ? Math.max(t[o + 1][3] - t[o][3], 0) : 0, u < e.p[0] ? (f += p, d += i, h += s) : (f = f - f / e.p[0] + p, d = d - d / e.p[0] + i, h = h - h / e.p[0] + s), a = 100 * d / f, l = 100 * h / f, c = 100 * Math.abs(a - l) / (a + l + 1e-6), u < e.p[0] ? g = 0 : u < 2 * e.p[0] ? g += c / e.p[0] : g = (g * (e.p[0] - 1) + c) / e.p[0], e.output[0].splice(0, 0, l), e.output[1].splice(0, 0, a), e.output[2].splice(0, 0, g), o < r && (l < e.min && (e.min = l), a < e.min && (e.min = a), g < e.min && (e.min = g), l > e.max && (e.max = l), a > e.max && (e.max = a), g > e.max && (e.max = g)), u++
            };
            break;
          case"arn":
            e.shortName = "Aroon", e.min = 0, e.max = 100, e.p = [25], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.statics = function () {
              return {major: [50], minor: [30, 70]}
            };
            break;
          case"atr":
            e.shortName = "ATR", e.p = [14], e.ps = [{label: _("Period"), type: e.V.INT, bounds: [2, 1 / 0]}];
            break;
          case"bnd":
            e.shortName = "Bands", e.p = [21, 2], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }, {label: _("z Score"), type: e.V.FLOAT, bounds: [.1, 1 / 0], inc: .1, places: 1}], e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}, {type: e.LINE, data: e.output[1]}, {
                type: e.LINE,
                data: e.output[2]
              }]
            }, e.update = function (t, n, r) {
              var o, i, s = e.p[0], a = e.p[1], l = 0, c = 0, u = 0, p = .05, f = [], d = 0, h = [];
              for (e.output = [[], [], []], o = Math.min(t.length - 1, r + s); o >= n; o--) i = t[o][4], f.splice(0, 0, i), h.splice(0, 0, i * i), c += i, u += h[0], f.length > s && (c -= f.pop(), u -= h.pop()), l = c / f.length, f.length > 1 ? (d = f.length, p = Math.sqrt((d * u - c * c) / (d * (d - 1)))) : p = 0, e.output[0].splice(0, 0, l), e.output[1].splice(0, 0, l + a * p), e.output[2].splice(0, 0, l - a * p)
            }, e.label = function (t) {
              var n = _("Bands");
              return n += "(" + ~~e.p[0] + ", " + e.p[1].toFixed(1) + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(digit) + ", ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit)), n
            };
            break;
          case"cci":
            e.shortName = "CCI", e.min = -250, e.max = 250, e.p = [20], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}]
            }, e.statics = function () {
              return {major: [-200, -100, 100, 200], minor: [0]}
            }, e.update = function (t, n, r) {
              var o, i, s, a, l, c = e.p[0], u = [], p = Math.min(t.length - 1, r + e.p[0]);
              for (e.output = [[]], o = p; o >= n; o--) {
                a = (t[o][2] + t[o][3] + t[o][4]) / 3;
                var f = 0;
                for (i = o; i <= Math.min(o + c - 1, p); i++) f += t[i][4];
                var d = f / (Math.min(o + c - 1, p) - o + 1);
                u.splice(0, 0, d), u.length > c && u.pop();
                var h = 0;
                for (s = 0; s <= u.length - 1; s++) h += Math.abs(u[s] - t[o + s][4]);
                var g = h / u.length;
                l = 0 == g ? 0 : (a - d) / g / .015, e.output[0].splice(0, 0, l)
              }
            }, e.label = function (t) {
              var n = "CCI";
              return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " " + e.output[0][t].toFixed(digit)), n
            };
            break;
          case"dcn":
            e.shortName = "Channels", e.p = [21], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}, {type: e.LINE, data: e.output[1]}, {
                type: e.LINE,
                data: e.output[2]
              }]
            }, e.update = function (t, n, r) {
              var o, i, s, a = e.p[0], l = Math.min(t.length - 1, r + a), c = [], u = t[l][2], p = t[l][3];
              for (e.output = [[], [], []], o = l; o >= n; o--) {
                if (s = t[o][4], c.splice(0, 0, s), s > u && (u = s), s < p && (p = s), c.length > a) for (c.pop(), p = 1e15, u = -1e15, i = 0; i < c.length; i++) c[i] > u && (u = c[i]), c[i] < p && (p = c[i]);
                e.output[0].splice(0, 0, (u + p) / 2), e.output[1].splice(0, 0, u), e.output[2].splice(0, 0, p)
              }
            }, e.label = function (t) {
              var n = _("Channel");
              return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[2][t].toFixed(digit) + ", ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit)), n
            };
            break;
          case"ema":
            e.shortName = "EMA", e.p = [5], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o, i, s = 2 / (e.p[0] + 1), a = Math.ceil(Math.log(.01) / Math.log(1 - s));
              for (e.output = [t[Math.min(t.length - 1, r + a + 1)][4]], o = Math.min(t.length - 2, r + a); o >= n; o--) i = s * t[o][4] + (1 - s) * e.output[0], e.output.splice(0, 0, i)
            }, e.label = function (t) {
              var n = "";
              return t >= 0 && t < e.output.length && (n = _("EMA"), n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
            };
            break;
          case"ma":
            e.shortName = "MA", e.p = [5], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o, i = e.p[0], s = 0, a = 0;
              for (e.output = [], o = Math.min(t.length - 1, r + i); o >= n; o--) {
                if (s == i - 1) {
                  a = 0;
                  for (var l = 0; l <= i - 1; l++) a += t[o + l][4];
                  e.output.splice(0, 0, a / i)
                } else s > i - 1 ? (a = e.output[0] * i, a -= t[o + i][4], a += t[o][4], e.output.splice(0, 0, a / i)) : e.output.splice(0, 0, void 0);
                s++
              }
            }, e.label = function (t) {
              var n = "";
              return t >= 0 && t < e.output.length && (n = _("MA"), n += "(" + ~~e.p[0] + "): ", n += (e.output[t] || 0).toFixed(digit)), n
            };
            break;
          case"trix":
            e.shortName = "TRIX", e.p = [9], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o, i, s, a, l = 2 / (e.p[0] + 1), c = Math.ceil(Math.log(.01) / Math.log(1 - l));
              for (a = s = i = t[Math.min(t.length - 1, r + c + 1)][4], o = Math.min(t.length - 2, r + c); o >= n; o--) a = l * (s = l * (i = l * t[o][4] + (1 - l) * i) + (1 - l) * s) + (1 - l) * a, e.output.splice(0, 0, a)
            }, e.label = function (t) {
              var n = _("TRIX");
              return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
            };
            break;
          case"macd":
            e.shortName = "MACD", e.p = [12, 26, 9], e.ps = [{
              label: "Short EMA",
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }, {label: "Long EMA", type: e.V.INT, bounds: [2, 1 / 0]}, {
              label: "Signal",
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.label = function (t) {
              var n = _("MACD");
              return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += ": ", n += e.output[0][t].toFixed(digit) + ", ", n += e.output[1][t].toFixed(digit) + ", ", n += e.output[2][t].toFixed(digit)), n
            }, e.draw = function () {
              return [{type: e.HIST, data: e.output[0]}, {type: e.LINE, data: e.output[1]}, {
                type: e.LINE,
                data: e.output[2]
              }]
            }, e.statics = function () {
              return {minor: [0]}
            }, e.update = function (t, n, r) {
              var o, i, s, a = 0, l = 0, c = 0, u = 2 / (1 + e.p[0]), p = 2 / (1 + e.p[1]), f = 2 / (1 + e.p[2]),
                d = Math.ceil(Math.log(.01) / Math.log(1 - Math.min(u, p))),
                h = t[Math.min(t.length - 1, r + d + 1)][4];
              for (e.output = [[0], [0], [0]], a = h, l = h, c = 0, e.min = 0, e.max = 0, o = Math.min(t.length - 2, r + d); o >= n; o--) s = (i = (a = u * (h = t[o][4]) + (1 - u) * a) - (l = p * h + (1 - p) * l)) - (c = f * i + (1 - f) * c), e.output[0].splice(0, 0, s), e.output[1].splice(0, 0, c), e.output[2].splice(0, 0, i), o < r && (i > e.max && (e.max = i), i < e.min && (e.min = i), s > e.max && (e.max = s), s < e.min && (e.min = s));
              e.max = e.max + .05 * (e.max - e.min), 0 == e.max && 0 == e.min && (e.max = 10, e.min = -10)
            };
            break;
          case"mfi":
            e.shortName = "MFI", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.statics = function () {
              return {major: [20, 80]}
            };
            break;
          case"obv":
            e.shortName = "OBV", e.p = [], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.statics = function () {
              return {minor: [0]}
            }, e.update = function (t, n, r) {
              var o;
              if (!(t.length <= 1)) for (e.output = [t[Math.min(t.length - 2, r - 1)][5] / BTC_INT], e.min = e.output[0], e.max = e.min, o = Math.min(t.length - 2, r - 1); o >= n; o--) t[o][4] > t[o + 1][4] ? e.output.splice(0, 0, e.output[0] + t[o][5] / BTC_INT) : e.output.splice(0, 0, e.output[0] - t[o][5] / BTC_INT), e.output[0] < e.min && (e.min = e.output[0]), e.output[0] > e.max && (e.max = e.output[0])
            }, e.label = function (t) {
              var n = _("On Balance Volume");
              return t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(1)), n
            };
            break;
          case"emv":
            e.shortName = "EMV", e.p = [1e4, 14], e.ps = [{label: "除数", type: e.V.INT, bounds: [2, 1 / 0]}, {
              label: "长度",
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.statics = function () {
              return {major: [-500, 500], minor: [0]}
            }, e.update = function (t, n, r) {
              var o, i, s = 2 / (e.p[1] + 1), a = Math.ceil(Math.log(.01) / Math.log(1 - s));
              if (e.min = 1 / 0, e.max = -1 / 0, e.output = [], o = Math.min(t.length - 1, r + a + 1), !(--o < 0)) {
                for (i = 0 == t[o][5] ? 0 : e.p[0] * (t[o][2] - t[o][3]) / t[o][5] * (t[o][2] + t[o][3] - t[o + 1][2] - t[o + 1][3]) * .5, e.output.splice(0, 0, i), --o; o >= n; o--) (i = s * (0 == t[o][5] ? 0 : e.p[0] * (t[o][2] - t[o][3]) / t[o][5] * (t[o][2] + t[o][3] - t[o + 1][2] - t[o + 1][3]) * .5) + (1 - s) * i) > e.max && (e.max = i), i < e.min && (e.min = i), e.output.splice(0, 0, i);
                e.max = e.max + .05 * (e.max - e.min)
              }
            }, e.label = function (t) {
              var n = _("EMV");
              return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + "): ", n += e.output[t].toFixed(digit)), n
            };
            break;
          case"psar":
            e.shortName = "PSAR", e.p = [.02, .2], e.ps = [{
              label: "AF",
              type: e.V.FLOAT,
              bounds: [0, 1],
              inc: .01,
              places: 3
            }, {label: "Max AF", type: e.V.FLOAT, bounds: [0, 1], inc: .01, places: 3}], e.draw = function () {
              return [{type: e.PSAR, data: e.output}]
            }, e.update = function (t, n, r) {
              var o, i, s, a = !0, l = e.p[0], c = (e.p[1], Math.min(t.length - 1, r + 100)), u = t[c][2], p = t[c][3],
                f = u, d = p;
              for (e.output = [d], s = c - 1; s >= n; s--) o = t[s][2], i = t[s][3], d = e.output[0] + l * (f - e.output[0]), a ? (o > f && (f = o, (l += e.p[0]) > e.p[1] && (l = e.p[1])), d > i && (a = !1, d = f, l = e.p[0], f = i)) : (i < f && (f = i, (l += e.p[0]) > e.p[1] && (l = e.p[1])), d < o && (a = !0, d = f, l = e.p[0], f = o)), u = o, p = i, e.output.splice(0, 0, d)
            }, e.label = function (t) {
              var n = "PSAR";
              return n += "(" + e.p[0].toFixed(3) + ", " + e.p[1].toFixed(digit) + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
            };
            break;
          case"rsi":
            e.shortName = "RSI", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.statics = function () {
              return {major: [30, 70], minor: [50]}
            }, e.update = function (t, n, r) {
              var o, i, s = 0, a = [], l = [], c = 0, u = 0, p = 0, f = !1, d = 0;
              for (e.output = [50], o = Math.min(t.length - 2, r + 250); o >= n; o--) {
                if (f = t[o][4] > t[o + 1][4], d = t[o][4] - t[o + 1][4], f ? a.push(d) : l.push(-d), s < e.p[0]) e.output.splice(0, 0, 50); else if (s == e.p[0]) {
                  for (i = 0; i < a.length; i++) c += a[i];
                  for (0 == a.length ? c = 0 : c /= a.length, i = 0; i < l.length; i++) u += l[i];
                  0 == l.length ? u = 0 : u /= l.length, p = c / (u + 1e-8), e.output.splice(0, 0, 100 - 100 / (1 + p))
                } else p = (c = (c * (e.p[0] - 1) + (f ? d : 0)) / e.p[0]) / (1e-8 + (u = (u * (e.p[0] - 1) + (f ? 0 : -d)) / e.p[0])), e.output.splice(0, 0, 100 - 100 / (1 + p));
                s++
              }
            }, e.label = function (t) {
              var n = _("RSI");
              return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(1)), n
            };
            break;
          case"storsi":
            e.shortName = "STORSI", e.min = 0, e.max = 100, e.p = [14, 9, 3, 3], e.ps = [{
              label: "RSI长度",
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }, {label: "Stoch长度", type: e.V.INT, bounds: [1, 1 / 0]}, {
              label: "平滑%K",
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }, {label: "平滑%D", type: e.V.INT, bounds: [1, 1 / 0]}], e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}, {type: e.LINE, data: e.output[1]}]
            }, e.statics = function () {
              return {major: [20, 80], minor: [50]}
            }, e.update = function (t, n, r) {
              var o, i, s = [], a = 1e15, l = -1e15, c = 0, u = 0, p = 2 / (e.p[2] + 1), f = 2 / (e.p[3] + 1);
              e.output = [[], []];
              var d, h, g = 0, m = [], v = [], b = 0, y = 0, $ = 0, x = !1, w = 0;
              for (d = Math.min(t.length - 2, r + 250); d >= n; d--) {
                if (x = t[d][4] > t[d + 1][4], w = t[d][4] - t[d + 1][4], x ? m.push(w) : v.push(-w), g < e.p[0]) $ = 50; else if (g == e.p[0]) {
                  for (h = 0; h < m.length; h++) b += m[h];
                  for (0 == m.length ? b = 0 : b /= m.length, h = 0; h < v.length; h++) y += v[h];
                  0 == v.length ? y = 0 : y /= v.length, $ = 100 - 100 / (1 + b / (y + 1e-8))
                } else $ = 100 - 100 / (1 + (b = (b * (e.p[0] - 1) + (x ? w : 0)) / e.p[0]) / (1e-8 + (y = (y * (e.p[0] - 1) + (x ? 0 : -w)) / e.p[0])));
                if (g++, s.splice(0, 0, $), $ > l && (l = $), $ < a && (a = $), s.length > e.p[1] && ((i = s.pop()) >= l || i <= a)) for (a = 1e15, l = -1e15, o = 0; o < s.length; o++) s[o] > l && (l = s[o]), s[o] < a && (a = s[o]);
                u = f * (c = p * (l == a ? 100 : 100 * ($ - a) / (l - a)) + (1 - p) * c) + (1 - f) * u, e.output[0].splice(0, 0, c), e.output[1].splice(0, 0, u)
              }
            }, e.label = function (t) {
              var n = "STORSI";
              return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ", " + ~~e.p[3] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " K:" + e.output[0][t].toFixed(digit) + ", ", n += " D:" + e.output[1][t].toFixed(digit)), n
            };
            break;
          case"sma":
            e.shortName = "SMA", e.p = [21], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o, i, s = [], a = 0, l = e.p[0];
              for (e.output = [], o = Math.min(t.length - 1, r + l); o >= n; o--) i = t[o][4], s.length < l ? (s.push(i), a = (a * (s.length - 1) + i) / s.length) : (a -= s[0] / l, a += i / l, s.splice(0, 1), s.push(i)), e.output.splice(0, 0, a)
            }, e.label = function (t) {
              var n = _("SMA");
              return t >= 0 && t < e.output.length && (n += "(" + ~~e.p[0] + "): ", n += e.output[t].toFixed(digit)), n
            };
            break;
          case"sto":
            e.shortName = "STO", e.min = 0, e.max = 100, e.p = [14, 3, 3], e.ps = [{
              label: "长度",
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }, {label: "平滑%K", type: e.V.INT, bounds: [1, 1 / 0]}, {
              label: "平滑%D",
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}, {type: e.LINE, data: e.output[1]}]
            }, e.statics = function () {
              return {major: [20, 80], minor: [50]}
            }, e.update = function (t, n, r) {
              var o, i, s, a, l = [], c = 1e15, u = -1e15, p = 0, f = 0, d = 2 / (e.p[1] + 1), h = 2 / (e.p[2] + 1);
              for (e.output = [[], []], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) {
                if (s = t[o][4], l.splice(0, 0, s), s > u && (u = s), s < c && (c = s), l.length > e.p[0] && ((a = l.pop()) >= u || a <= c)) for (c = 1e15, u = -1e15, i = 0; i < l.length; i++) l[i] > u && (u = l[i]), l[i] < c && (c = l[i]);
                f = h * (p = d * (u == c ? 100 : 100 * (s - c) / (u - c)) + (1 - d) * p) + (1 - h) * f, e.output[0].splice(0, 0, p), e.output[1].splice(0, 0, f)
              }
            }, e.label = function (t) {
              var n = "STO";
              return t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " %K(" + ~~e.p[0] + ", " + ~~e.p[1] + "): ", n += e.output[0][t].toFixed(1), n += " %D(" + ~~e.p[2] + "): ", n += e.output[1][t].toFixed(1)), n
            };
            break;
          case"kdj":
            e.shortName = "KDJ", e.min = -50, e.max = 150, e.p = [9, 3, 3], e.ps = [{
              label: "%K",
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }, {label: "%D", type: e.V.INT, bounds: [1, 1 / 0]}, {
              label: "%J",
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output[0]}, {type: e.LINE, data: e.output[1]}, {
                type: e.LINE,
                data: e.output[2]
              }]
            }, e.statics = function () {
              return {major: [0, 100], minor: [50]}
            }, e.update = function (t, n, r) {
              var o, i, s, a, l = [], c = 1e15, u = -1e15, p = 0, f = 0, d = 0, h = 1 / e.p[1], g = 1 / e.p[2];
              for (e.output = [[], [], []], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) {
                if (s = t[o][4], l.splice(0, 0, s), s > u && (u = s), s < c && (c = s), l.length > e.p[0] && ((a = l.pop()) >= u || a <= c)) for (c = 1e15, u = -1e15, i = 0; i < l.length; i++) l[i] > u && (u = l[i]), l[i] < c && (c = l[i]);
                d = 3 * (p = h * (u == c ? 100 : 100 * (s - c) / (u - c)) + (1 - h) * p) - 2 * (f = g * p + (1 - g) * f), e.output[0].splice(0, 0, p), e.output[1].splice(0, 0, f), e.output[2].splice(0, 0, d)
              }
            }, e.label = function (t) {
              var n = "KDJ";
              return n += "(" + ~~e.p[0] + ", " + ~~e.p[1] + ", " + ~~e.p[2] + ")", t >= 0 && e.output.length > 0 && t < e.output[0].length && (n += " K:" + e.output[0][t].toFixed(digit) + ", ", n += " D:" + e.output[1][t].toFixed(digit) + ", ", n += " J:" + e.output[2][t].toFixed(digit)), n
            };
            break;
          case"vol":
            e.shortName = "VOL", e.min = 0, e.update = function (t, n, r) {
              var o, i;
              if (!(void 0 === t || t.length <= n)) {
                for (e.max = -1 / 0, o = 0; o <= r - n; o++) {
                  (i = t[o + n][5] / BTC_INT) > e.max && (e.max = i);
                  var s = !0;
                  s = t[o + n][4] >= t[o + n][1] && !(t[o + n][1] == t[o + n][4] && t[o + n + 1] && t[o + n + 1][4] > t[o + n][4]), e.output.push([i, s])
                }
                0 == e.max ? e.max = 10 : e.max = e.max
              }
            }, e.draw = function () {
              return [{type: e.LBLHIST, data: e.output}]
            }, e.label = function (t) {
              var n = "";
              return t >= 0 && t < e.output.length && (n = _(getLang().volume), n += " " + e.output[t][0].toFixed(4)), n
            };
            break;
          case"vwap":
            e.shortName = "VWAP", e.p = [14], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o, i = 0, s = 0, a = 0;
              for (e.output = [], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) i += t[o][4] * (t[o][5] / BTC_INT), s += t[o][5] / BTC_INT, a >= e.p[0] && (i -= t[o + e.p[0]][4] * (t[o + e.p[0]][5] / BTC_INT), s -= t[o + e.p[0]][5] / BTC_INT), e.output.splice(0, 0, i / s), a++
            }, e.label = function (t) {
              var n = "VWAP";
              return n += "(" + ~~e.p[0] + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
            };
            break;
          case"wpr":
            e.shortName = "Wm %R", e.min = 0, e.max = 100, e.p = [14], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [1, 1 / 0]
            }], e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.statics = function () {
              return {major: [20, 80], minor: [50]}
            }, e.update = function (t, n, r) {
              var o, i, s, a, l = [], c = 1e15, u = -1e15, p = 0;
              for (e.output = [], o = Math.min(t.length - 1, r + e.p[0]); o >= n; o--) {
                if (s = t[o][4], l.splice(0, 0, s), s > u && (u = s), s < c && (c = s), l.length > e.p[0] && ((a = l.pop()) >= u || a <= c)) for (c = 1e15, u = -1e15, i = 0; i < l.length; i++) l[i] > u && (u = l[i]), l[i] < c && (c = l[i]);
                p = u == c ? 100 : 100 * (s - c) / (u - c), e.output.splice(0, 0, p)
              }
            }, e.label = function (t) {
              var n = "Wm %R";
              return n += "(" + ~~e.p[0] + ")", t >= 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(1)), n
            };
            break;
          case"mtm":
            e.shortName = "MTM", e.p = [14], e.ps = [{
              label: _("Period"),
              type: e.V.INT,
              bounds: [2, 1 / 0]
            }], e.label = function (t) {
              var n = _("MTM");
              return n += "(" + ~~e.p[0] + ")", t >= 0 && e.output.length > 0 && t < e.output.length && (n += ": ", n += e.output[t].toFixed(digit)), n
            }, e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.statics = function () {
              return {major: [-5, 5], minor: [0]}
            }, e.update = function (t, n, r) {
              var o;
              for (e.min = 1 / 0, e.max = -1 / 0, e.output = [], o = Math.min(t.length - 1 - e.p[0], r); o >= n; o--) {
                var i = t[o][4] - t[o + e.p[0]][4];
                i > e.max && (e.max = i), i < e.min && (e.min = i), e.output.splice(0, 0, i)
              }
              e.max = e.max + .05 * (e.max - e.min)
            };
            break;
          case"avl":
            e.shortName = "AVL", e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o = 0, i = 0;
              e.output = [];
              for (var s = Math.min(t.length - 1, r); s >= n; s--) o += t[s][6], 0 == (i += t[s][5]) ? e.output.splice(0, 0, t[s][4]) : e.output.splice(0, 0, o / i)
            }, e.label = function (t) {
              var n = "";
              return t >= 0 && t < e.output.length && (n = _("AVL"), n += e.output[t].toFixed(digit)), n
            };
            break;
          case"avlIndex":
            e.shortName = "AVL", e.draw = function () {
              return [{type: e.LINE, data: e.output}]
            }, e.update = function (t, n, r) {
              var o = 0, i = 0;
              e.output = [];
              for (var s = Math.min(t.length - 1, r); s >= n; s--) o += (t[s][1] + t[s][2] + t[s][3] + t[s][4]) / 4 * t[s][5], 0 == (i += t[s][5]) ? e.output.splice(0, 0, t[s][4]) : e.output.splice(0, 0, o / i)
            }, e.label = function (t) {
              var n = "";
              return t >= 0 && t < e.output.length && (n = _("AVL"), n += e.output[t].toFixed(digit)), n
            }
        }
        e.type = n
      }(n), function (t) {
        if (void 0 !== t && t.hasOwnProperty("length")) {
          var n;
          for (n = 0; n < e.ps.length; n++) t.length <= n || t[n] < e.ps[n].bounds[0] || t[n] > e.ps[n].bounds[1] || (e.p[n] = t[n])
        }
      }(r), this
    }, reset: function () {
      return e.output = [], this
    }, bounds: function () {
      return [e.min, e.max]
    }, update: function (t, n, r) {
      if (e.output = [], void 0 !== t && t.hasOwnProperty("length") && 0 != t.length) return e.update(t, n, r), this
    }, draw: function () {
      return e.draw()
    }, statics: function () {
      return e.statics()
    }, label: function (t) {
      return e.label(t)
    }, color: function (t) {
      return void 0 === t ? e.color : (e.color = t, this)
    }, shortName: function () {
      return e.shortName
    }, settings: function () {
      return e.p
    }, paramSettings: function () {
      return e.ps
    }, params: function (e) {
    }, paramUpdate: function (t, n) {
      return e.p[t] = n, this
    }, internals: e.debug ? function () {
      return e
    } : function () {
      return null
    }
  }
}, mobile, Chart = function () {
  function e() {
    var e, t = (_e.slots.length - 1) * (2 + _e.px.pad) + 1 + _e.px.lbl.h, n = _e.h - t, r = -1;
    for (e = 0; e < _e.slots.length; e++) _e.slots[e].hasOwnProperty("main") ? _e.slots[e].h = (_e.mainSlotHeightPercent || .67) * n | 0 : _e.slots[e].h = (1 - _e.mainSlotHeightPercent || .33) * n / (_e.slots.length - 1) | 0, _e.slots[e].px = r, r += _e.slots[e].h + 2 + _e.px.pad + 1, DEBUG && Pe("Slot " + e + " height: " + _e.slots[e].h + ", px: " + _e.slots[e].px)
  }

  function t(t) {
    if (e(), void 0 !== t) {
      var n = new Validator, r = (new Validator).create(n.INT), o = (new Validator).create(n.BOOL);
      t.hasOwnProperty("r") && (_e.settings.repaint = o.set(_e.settings.repaint).set(t.r).get()), t.hasOwnProperty("g") && (_e.settings.grid = o.set(_e.settings.grid).set(t.g).get()), t.hasOwnProperty("c") && (_e.settings.crosshairs = o.set(_e.settings.crosshairs).set(t.c).get()), t.hasOwnProperty("k") && (_e.settings.icontrols = o.set(_e.settings.icontrols).set(t.k).get()), t.hasOwnProperty("b") && (_e.settings.bidask = o.set(_e.settings.bidask).set(t.b).get()), t.hasOwnProperty("l") && (_e.settings.logscale = o.set(_e.settings.logscale).set(t.l).get()), t.hasOwnProperty("o") && (_e.settings.userorders = o.set(_e.settings.userorders).set(t.o).get()), t.hasOwnProperty("time") && (_e.settings.time = o.set(_e.settings.userorders).set(t.time).get()), t.hasOwnProperty("m") && (_e.mode.current = r.set(_e.mode.current).set(t.m).get()), t.hasOwnProperty("d") && (_e.mode.display = r.set(_e.mode.display).set(t.d).get()), t.hasOwnProperty("w") && (_e.px.bar.width = r.set(_e.px.bar.width).set(t.w).get()), t.hasOwnProperty("s") && (_e.px.bar.spacing = r.set(_e.px.bar.spacing).set(t.s).get());
      for (var i = r.set(_e.period.avail[_e.period.current]).set(t.t).get(), s = 0; s < _e.period.avail.length; s++) _e.period.avail[s] == i && (_e.period.current = s);
      if (t.hasOwnProperty("i")) {
        var a, l, c, u, p = [], f = ["m", "p", "h"], d = [], h = [];
        for (s in _e.indicators) _e.indicators.hasOwnProperty(s) && d.push(s);
        for (s in _e.overlays) _e.overlays.hasOwnProperty(s) && h.push(s);
        for (s = 0; s < t.i.length; s++) {
          for (l = !0, a = 0; a < f.length; a++) l = l && t.i[s].hasOwnProperty(f[a]);
          if (l) {
            if (c = {px: ~~+t.i[s].p, h: ~~+t.i[s].h}, t.i[s].m) {
              if (c.main = !0, c.o = [], c.u = [], t.i[s].hasOwnProperty("o")) for (a = 0; a < t.i[s].o.length; a++) u = null, t.i[s].o[a].hasOwnProperty("t") && h.indexOf(t.i[s].o[a].t) >= 0 && t.i[s].o[a].hasOwnProperty("s") && (t.i[s].o[a].hasOwnProperty("c") && (u = t.i[s].o[a].c), c.o.push({
                t: t.i[s].o[a].t,
                i: null,
                s: t.i[s].o[a].s,
                c: u
              }));
              if (t.i[s].hasOwnProperty("u")) for (a = 0; a < t.i[s].u.length; a++) t.i[s].u[a].hasOwnProperty("t") && h.indexOf(t.i[s].u[a].t) >= 0 && t.i[s].u[a].hasOwnProperty("s") && (t.i[s].u[a].hasOwnProperty("c") && (u = t.i[s].u[a].c), c.u.push({
                t: t.i[s].u[a].t,
                i: null,
                s: t.i[s].u[a].s,
                c: u
              }))
            } else {
              if (!(d.indexOf(t.i[s].t) >= 0 && t.i[s].hasOwnProperty("r"))) continue;
              c.t = t.i[s].t, c.i = null, c.s = t.i[s].r
            }
            p.push(c)
          }
        }
        p.length > 0 && (_e.slots = p, e())
      }
    }
  }

  function n(e) {
    var t = e[0], n = we();
    0 == _e.bars.data.length || 0 == n || t >= _e.bars.data[0][0] + 1e3 * n ? (_e.bars.data.splice(0, 0, [t, e[1], e[1], e[1], e[1], e[2]]), _e.flags.recompute = !0) : (e[1] > _e.bars.data[0][2] && (_e.bars.data[0][2] = e[1]), e[1] < _e.bars.data[0][3] && (_e.bars.data[0][3] = e[1]), _e.bars.data[0][4] = e[1], _e.bars.data[0][5] += e[2], _e.flags.recompute = !0), (e[1] > _e.highPrice || e[1] < _e.lowPrice || _e.bars.data[0][5] > _e.maxVol) && (_e.flags.recompute = !0)
  }

  function r(e) {
    var t = parseFloat(e[0]), n = parseFloat(e[1]), r = parseFloat(e[2]);
    return !(isNaN(t) || isNaN(n) || isNaN(r))
  }

  function o() {
    $(_e.element).append($('<div id="chartCtrlFixed" class="chartCtrl" hidden><div class="content"><div>时间:<span id="date"></span></div><div>开盘:<span id="open"></span></div><div>最高:<span id="high"></span></div><div>最低:<span id="low"></span></div><div>收盘:<span  id="close"></span></div><div>涨幅:<span id="updownPercent" ></span></div><div>振幅:<span  id="updown1"></span></div><div>成交量:<span  id="volume"></span></div><div>成交额:<span  id="quoteVolume"></span></div><div>换手率:<span  id="hand"></span></div></div></div>'));
    $(_e.element).mouseover(function () {
      _e.mode.display, _e.CANDLE
    }), $(_e.element).mouseout(function () {
      _e.mode.display == _e.CANDLE && $("#chartCtrlFixed").hide()
    }), _e.updateXFK = function (e) {
      if (e) r = t = [(new Date).getTime(), 0, 0, 0, 0, 0]; else var t = _e.bars.data[_e.curIndex],
        n = _e.curIndex + 1 >= _e.bars.data.length ? _e.curIndex : _e.curIndex + 1, r = _e.bars.data[n];
      var o, i = _e.period.avail[_e.period.current];
      i > 0 && i <= 3600 ? o = new Date(t[0]).Format("MM-dd hh:mm") : 86400 == i ? o = new Date(t[0]).Format("yyyy/MM/dd/") + function (e) {
        var t = "";
        switch (e) {
          case 0:
            t = "日";
            break;
          case 1:
            t = "一";
            break;
          case 2:
            t = "二";
            break;
          case 3:
            t = "三";
            break;
          case 4:
            t = "四";
            break;
          case 5:
            t = "五";
            break;
          case 6:
            t = "六"
        }
        return t
      }(new Date(t[0]).getDay()) : 604800 == i && (o = new Date(t[0]).Format("yyyy-MM-dd")), e && (o = "--"), $("#chartCtrlFixed #date").text(o), $("#chartCtrlFixed #open").text(e ? "--" : Y(t[1])), $("#chartCtrlFixed #open").css("color", t[1] < r[4] ? "#ff4056" : t[1] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #high").text(e ? "--" : Y(t[2])), $("#chartCtrlFixed #high").css("color", t[2] < r[4] ? "#ff4056" : t[2] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #low").text(e ? "--" : Y(t[3])), $("#chartCtrlFixed #low").css("color", t[3] < r[4] ? "#ff4056" : t[3] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #close").text(e ? "--" : Y(t[4])), $("#chartCtrlFixed #close").css("color", t[4] < r[4] ? "#ff4056" : t[4] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updownPercent").text(e ? "--" : (100 * (t[4] - r[4]) / r[4]).toFixed(2) + "%"), $("#chartCtrlFixed #updownPercent").css("color", t[4] < r[4] ? "#ff4056" : t[4] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updown1").text(e ? "--" : (100 * (t[2] - t[3]) / r[4]).toFixed(2) + "%"), $("#chartCtrlFixed #volume").text(e ? "--" : t[5].toFixed(0)), $("#chartCtrlFixed #hand").text(e ? "--" : (100 * (_e.data.circulation ? t[5] / _e.data.circulation : 0)).toFixed(6) + "%")
    }
  }

  function i(e) {
    var t = [], n = 0, r = $("<div/>").addClass("control-" + e);
    return t[n++] = '<span class="settings-popout">', t[n++] = '<span class="icon settings">', t[n++] = '<i class="icon-wrench"></i></span>', t[n++] = "</span>", r.addClass("icontrol").html(t.join("")).css("top", _e.slots[e].px + 3 + "px"), r.hide(), 0 == e ? $("span.move-up i", r).addClass("disable") : $("span.move-up", r).tooltip({
      placement: "right",
      title: _("Move Up")
    }).click(function (e) {
      return function () {
        !function (e, t) {
          if (_e.slots.length <= 1) return;
          if (0 == e && t) return;
          if (e == _e.slots.length - 1 && !t) return;
          DEBUG && Pe("Moving indicator in slot " + e + " " + (t ? "up" : "down")), $(".icontrol", _e.element).each(function (e, t) {
            $(t).data("popped") && s(e)
          });
          var n, r, o = t ? e - 1 : e + 1;
          r = _e.slots[o].px, _e.slots[o].px = _e.slots[e].px, _e.slots[e].px = r, n = _e.slots.splice(e, 1)[0], _e.slots.splice(o, 0, n), ye(), xe()
        }(e, !0)
      }
    }(e)), $("span.settings", r).tooltip({placement: "right", title: _("Settings")}).click(function (e) {
      return function () {
        s(e)
      }
    }(e)), e == _e.slots.length - 1 && $("span.move-down i", r).addClass("disable"), r
  }

  function s(e) {
    if (!(_e.slots.length <= e || e < 0 || $(".popout .extra-settings").length > 0)) {
      var t = $(".control-" + e, _e.element);
      if (t.click(function (e) {
          e.stopPropagation()
        }), $(document).click(function () {
          $(".extra-settings", t).remove(), $(".colorpicker").hide(), t.data("popped", !1)
        }), t.data("popped")) return $(".extra-settings", t).remove(), t.removeClass("popout"), t.data("popped", !1), void $(".settings", t).tooltip("enable");
      var n = $("<span/>").addClass("extra-settings"), r = [];
      if (_e.slots[e].hasOwnProperty("main")) {
        var o, i, a, c = $("<div/>").addClass("underlays sortable"), u = $("<div/>").addClass("overlays sortable"),
          d = $("<div/>").addClass("rows");
        for (d.append($("<div/>").addClass("title").html(_("Behind Price"))), w = 0; w < _e.slots[e].u.length; w++) {
          for (i = b(e, w, "u"), "bidask" == _e.slots[e].u[w].t && (i = null), a = uniqueID(), o = $("<div/>").addClass("row").addClass("row1").addClass("u" + w).data({
            j: w,
            place: "u"
          }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", i).attr("id", a))).append($("<u/>").html(_e.slots[e].u[w].i.shortName() + ": ")), g = _e.slots[e].u[w].i.settings(), m = _e.slots[e].u[w].i.paramSettings(), v = "", 0 == g.length && o.append($("<u/>").text(" --- ")), x = 0; x < g.length; x++) v = uniqueID(), o.append($("<span/>").addClass("param-field").append($("<strong/>").text(m[x].hasOwnProperty("label") ? m[x].label : "P" + (x + 1))).append($("<input/>").attr("type", "text").val(g[x]).addClass("param-input").attr("id", v))), r.push({
            val: g[x],
            sel: "#" + v,
            set: m[x],
            fn: function (t, n, r) {
              return function (o) {
                "function" == typeof t && t(n, o), _e.slots[e].u[r].s = [o], h()
              }
            }(_e.slots[e].u[w].i.paramUpdate, x, w)
          });
          v = uniqueID(), o.append($("<span/>").addClass("icon remove-icon").attr("id", v).append($("<i/>").addClass("icon-trash")).click(function (e, t, n, r) {
            return function () {
              $("#" + e).tooltip("hide"), p(t, "u", r), s(r), s(r)
            }
          }(v, w, 0, e)).tooltip({
            placement: "right",
            title: _("Remove")
          })), y = uniqueID(), o.append($("<span/>").addClass("icon edit-icon").attr("id", y).append($("<i/>").addClass("icon-edit")).click(l(y, e, "u", w, a)).tooltip({
            placement: "right",
            title: _("Pick Color")
          })), o.append(clearingSpan()), c.append(o)
        }
        for (d.append(c), d.append($("<div/>").addClass("title").html(_("In Front of Price"))), w = 0; w < _e.slots[e].o.length; w++) {
          for (i = b(e, w, "o"), "bidask" == _e.slots[e].o[w].t && (i = null), a = uniqueID(), o = $("<div/>").addClass("row").addClass("o" + w).data({
            j: w,
            place: "o"
          }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", i).attr("id", a))).append($("<u/>").html(_e.slots[e].o[w].i.shortName() + ": ")), g = _e.slots[e].o[w].i.settings(), m = _e.slots[e].o[w].i.paramSettings(), v = "", 0 == g.length && o.append($("<u/>").text(" --- ")), x = 0; x < g.length; x++) v = uniqueID(), o.append($("<span/>").addClass("param-field").append($("<strong/>").text(m[x].hasOwnProperty("label") ? m[x].label : "P" + (x + 1))).append($("<input/>").attr("type", "text").val(g[x]).addClass("param-input").attr("id", v))), r.push({
            val: g[x],
            sel: "#" + v,
            set: m[x],
            fn: function (t, n, r) {
              return function (o) {
                "function" == typeof t && t(n, o), _e.slots[e].o[r].s = [o], h()
              }
            }(_e.slots[e].o[w].i.paramUpdate, x, w)
          });
          v = uniqueID(), o.append($("<span/>").addClass("icon remove-icon").attr("id", v).append($("<i/>").addClass("icon-trash")).click(function (e, t, n, r) {
            return function () {
              $("#" + e).tooltip("hide"), p(t, "o", r), s(r), s(r)
            }
          }(v, w, 0, e)).tooltip({
            placement: "right",
            title: _("Remove")
          })), y = uniqueID(), o.append($("<span/>").addClass("icon edit-icon").attr("id", y).append($("<i/>").addClass("icon-edit")).click(l(y, e, "o", w, a)).tooltip({
            placement: "right",
            title: _("Pick Color")
          })), o.append(clearingSpan()), u.append(o)
        }
        d.append(u), n.append(d);
        $(".rows", n), $(".reorder-icon", n), function (e) {
        }($(".rows", n));
        $(".overlays", n).append("<div class='row' style='height:0'></div>"), $(".underlays", n).append("<div class='row' style='height:0'></div>")
      } else {
        n.append($("<span/>").addClass("icon remove-icon").append($("<i/>").addClass("icon-trash")).click(function (e) {
          return function () {
            $(".control-" + e + " .remove-icon", _e.element).tooltip("hide"), f(e)
          }
        }(e)).tooltip({placement: "bottom", title: _("Remove")}));
        for (var g = _e.slots[e].i.settings(), m = _e.slots[e].i.paramSettings(), v = "", y = "", x = 0; x < g.length; x++) v = uniqueID(), n.append($("<span/>").addClass("param-field").append($("<strong/>").text(m[x].hasOwnProperty("label") ? m[x].label : "P" + (x + 1))).append($("<input/>").attr("type", "text").val(g[x]).addClass("param-input").attr("id", v))), r.push({
          val: g[x],
          sel: "#" + v,
          set: m[x],
          fn: function (e, t) {
            return function (n) {
              "function" == typeof e && e(t, n), h()
            }
          }(_e.slots[e].i.paramUpdate, x)
        })
      }
      n.append(clearingSpan()), $(".settings-popout", t).append(n);
      for (var w = 0; w < r.length; w++) $(r[w].sel).data("value", r[w].val), function (e, t, n, r, o, i) {
        new Validator;
        var a = (new Validator).create(n.type), l = n.hasOwnProperty("inc") ? n.inc : 1,
          c = n.hasOwnProperty("places") ? n.places : 0;
        $(t).on({
          keyup: function (o) {
            var i = $(t), u = o.keyCode || o.which, p = {left: 37, up: 38, right: 39, down: 40},
              f = {enter: 13, esc: 27}, d = !1, h = i.data("value");
            switch (u) {
              case p.up:
                h + l <= n.bounds[1] && (i.data("value", h + l), i.val((h + l).toFixed(c)), "function" == typeof r && r(h + l));
                break;
              case p.down:
                h - l >= n.bounds[0] && (i.data("value", h - l), i.val((h - l).toFixed(c)), "function" == typeof r && r(h - l));
                break;
              case f.enter:
              case f.esc:
                o.preventDefault(), o.stopPropagation(), s(e);
                break;
              default:
                d = !0
            }
            if (d) {
              var g = +i.val(), m = a.set(h).set(g).get();
              m != h && (m >= n.bounds[0] && m <= n.bounds[1] ? (i.data("value", m), "function" == typeof r && r(m)) : i.val().length > 0 && i.val(h))
            }
          }, blur: function () {
            0 == $(t).val().length && $(t).val($(t).data("value")), "function" == typeof o && o()
          }
        })
      }(e, r[w].sel, r[w].set, r[w].fn, h);
      t.addClass("popout"), $(".settings", t).tooltip("disable"), t.data("popped", !0)
    }
  }

  function a() {
    var e;
    for (e = 0; e < _e.slots.length; e++) $(".control-" + e, _e.element).data("popped") && s(e)
  }

  function l(e, t, n, r, o) {
    return function () {
      $("#" + e).ColorPicker({
        color: b(t, r, n), onChange: function (e, i, s) {
          !function (e, t, n, r) {
            var o = null;
            o = _e.slots[e].hasOwnProperty("main") && void 0 !== n ? _e.slots[e][n][t].i : _e.slots[e].i;
            null != o && o.color(r)
          }(t, r, n, "#" + i), "o" == n ? _e.flags.redraw.overlay = !0 : "u" == n && (_e.flags.redraw.underlay = !0), window.reqAnimFrame(d), $("#" + o).css("color", "#" + i)
        }, onHide: function () {
        }
      }).ColorPickerShow(), $(".colorpicker").click(function (e) {
        e.stopPropagation()
      })
    }
  }

  function c(e, t) {
    DEBUG && Pe("Adding overlay " + e + " to chart.");
    var n = {t: e, i: (new Indicator).build(e), s: []};
    n.s = n.i.settings(), t && n.i.paramUpdate(0, t), n.i.color(_e.colors.stroke.i[_e.lastColorIndex % _e.colors.stroke.i.length]), _e.lastColorIndex++;
    var r, o = -1;
    for (r = 0; r < _e.slots.length; r++) if (_e.slots[r].hasOwnProperty("main")) {
      o = r;
      break
    }
    if (-1 != o) {
      _e.slots[o].u.push(n);
      $(".control-" + o, _e.element).data("popped") && (s(o), s(o)), h()
    }
  }

  function u(t) {
    DEBUG && Pe("Adding indicator " + t + " to chart.");
    var n, r = (_e.slots.length - 1) * (2 + _e.px.pad) + 1 + _e.px.lbl.h,
      o = (_e.h, Math.max(_e.slots[_e.slots.length - 1].h * _e.slots.length / (_e.slots.length + 1), _e.px.slotmin)),
      s = 0, a = 0, l = 0, c = !1, u = 0, p = {t: t, h: o, px: 0, i: (new Indicator).build(t), s: []};
    for (p.s = p.i.settings(); s < o;) if (!c && _e.slots[a % _e.slots.length].h <= _e.px.slotmin) ++l == _e.slots.length && (c = !0), a++; else {
      for (l = 0, _e.slots[a % _e.slots.length].h -= 1, s += 1, n = 1 + a % _e.slots.length; n < _e.slots.length; n++) _e.slots[n].px -= 1;
      if (a++, ++u > 1500) {
        DEBUG && Pe("Emergency break. nc = " + l + " shrink: " + (c ? "true" : "false")), DEBUG && Pe(_e.slots);
        break
      }
    }
    p.px = _e.slots[_e.slots.length - 1].h + 2 + _e.px.pad + 1, _e.slots.push(p);
    for (var f = 1; f <= _e.slots.length - 2; f++) $(".control-" + f, _e.element).remove(), _e.slots[f].control = i(f), $(_e.element).append(_e.slots[f].control);
    _e.slots[_e.slots.length - 1].control = i(_e.slots.length - 1), $(_e.element).append(_e.slots[_e.slots.length - 1].control), e(), ye(), xe()
  }

  function p(e, t, n) {
    _e.slots[n].hasOwnProperty(t) && (_e.slots[n][t].splice(e, 1), $(".control-" + n + " ." + t + e, _e.element).remove(), h())
  }

  function f(e) {
    if (!_e.slots[e].hasOwnProperty("main")) {
      var t, n = +_e.slots[e].h + _e.px.pad + 3, r = -1;
      for ($(".control-" + (_e.slots.length - 1), _e.element).remove(), $(".icontrol", _e.element).each(function (e, t) {
        $(t).data("popped") && s(e)
      }), t = 0; t < _e.slots.length; t++) if (t != e && (r < 0 && t > e && (_e.slots[t].px -= _e.slots[e].h), _e.slots[t].hasOwnProperty("main"))) {
        r = t, _e.slots[t].h += n;
        break
      }
      for (t = 0; t < _e.slots.length; t++) DEBUG && Pe("Slot " + t + " h: " + _e.slots[t].h + ", px: " + _e.slots[t].px);
      _e.slots.splice(e, 1), ye(), xe()
    }
  }

  function d() {
    var e = _e.canvas.base[0].getContext("2d"), t = _e.canvas.orders[0].getContext("2d"),
      n = _e.canvas.bg[0].getContext("2d"), r = _e.canvas.main[0].getContext("2d"),
      o = _e.canvas.fg[0].getContext("2d");
    _e.flags.recompute && function (e) {
      if (_e.bars.fixTime) {
        var t, n = new Date(_e.bars.data && _e.bars.data.length > 0 ? _e.bars.data[0][0] : new Date),
          r = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + _e.bars.startTime1),
          o = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + _e.bars.endTime1),
          i = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + _e.bars.startTime2),
          s = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + _e.bars.endTime2);
        t = n <= o && n >= r ? (o.getTime() - n.getTime() + (s - i)) / 6e4 + 1 : n < i && n > o ? (s - i) / 6e4 : n <= s && n >= i ? (s.getTime() - n.getTime()) / 6e4 : n > s ? 0 : (o.getTime() - r.getTime() + s.getTime() - i.getTime()) / 6e4, t = Math.floor(t), _e.bars.blank = t < 0 ? 0 : t, _e.bars.visible = (o.getTime() - r.getTime() + s.getTime() - i.getTime()) / 6e4 + 1, _e.px.bar.spacing = 1
      } else _e.px.bar.spacing = _e.px.bar.width / 3 > 2 ? _e.px.bar.width / 3 : 2, _e.bars.visible = 0 | parseInt((_e.w - _e.px.lbl.tick - _e.px.lbl.w - 1) / (_e.px.bar.width + _e.px.bar.spacing));
      var a, l, c = oe();
      c[1] > -1 && (_e.price.high = 0, _e.price.low = 1e15);
      if (_e.mode.display == _e.CANDLE) for (a = c[0]; a <= c[1]; a++) _e.bars.data[a][2] > _e.price.high && (_e.price.high = _e.bars.data[a][2]), _e.bars.data[a][3] < _e.price.low && (_e.price.low = _e.bars.data[a][3]); else for (a = c[0]; a <= c[1]; a++) _e.bars.data[a][4] > _e.price.high && (_e.price.high = _e.bars.data[a][4]), _e.bars.data[a][4] < _e.price.low && (_e.price.low = _e.bars.data[a][4]);
      var u = _e.canvas.base[0].getContext("2d");
      u.font = _e.font.labels, _e.px.lbl.w = u.measureText(Y(10)).width + 8, _e.LblWidthChange && _e.LblWidthChange(_e.px.lbl.w);
      var p = _e.price.high - _e.price.low;
      _e.settings.logscale && (_e.price.high = Math.min(1.1 * _e.price.high, _e.price.high + .1 * p), _e.price.low = Math.max(_e.price.low / 1.1, _e.price.low - .1 * p));
      _e.price.low < 0 && (_e.price.low = 0);
      for (_e.px.bar.dx = (_e.px.bar.width - 1) / 2 | 0, _e.period.string = ke(), a = 0; a < _e.slots.length; a++) if (_e.slots[a].hasOwnProperty("main")) {
        if (_e.settings.logscale) {
          var f = _e.slots[a].px, d = f + _e.slots[a].h;
          try {
            _e.log.m = (f - d) / log10(p1 / p0), _e.log.b = (f * log10(p0) - d * log10(p1)) / log10(p0 / p1)
          } catch (e) {
            _e.log.m = 0, _e.log.b = 0
          }
        }
        _e.price.high, _e.price.low;
        for (l = 0; l < _e.slots[a].o.length; l++) if (_e.slots[a].o[l].hasOwnProperty("i")) {
          _e.slots[a].o[l].i.update(_e.bars.data, c[0], c[1]);
          if (m = _e.slots[a].o[l].i.draw()) for (v = 0; v < m.length; v++) for (var h = m[v].data, g = 0; g < c[1] - c[0]; g++) {
            (b = h[g]) > _e.price.high && (_e.price.high = b), b < _e.price.low && (_e.price.low = b)
          }
        }
        for (l = 0; l < _e.slots[a].u.length; l++) if (_e.slots[a].u[l].hasOwnProperty("i")) {
          "ema" == _e.slots[a].u[l].t && _e.slots[a].u[l].s && _e.slots[a].u[l].i.paramUpdate(0, _e.slots[a].u[l].s[0]), _e.slots[a].u[l].i.update(_e.bars.data, c[0], c[1]);
          var m = _e.slots[a].u[l].i.draw();
          if (m) for (var v = 0; v < m.length; v++) for (var h = m[v].data, g = 0; g < c[1] - c[0]; g++) {
            var b = h[g];
            b > _e.price.high && (_e.price.high = b), b < _e.price.low && (_e.price.low = b)
          }
        }
      } else _e.slots[a].i.update(_e.bars.data, c[0], c[1]);
      var y = _e.slots[0].h, $ = 40 * (_e.price.high - _e.price.low) / (y - 40),
        x = void 0 === Data.qouteFixed ? 1e-5 : Math.pow(.1, Data.qouteFixed - 2);
      $ > x ? (_e.price.high += 3 * $ / 4, _e.price.low -= $ / 4) : (_e.price.high = 1.01 * _e.price.high, _e.price.low = _e.price.low / 1.01);
      _e.price.low < 0 && (_e.price.low = 0);
      _e.price.range = _e.price.high - _e.price.low, _e.flags.recompute = !1, _e.flags.redraw.base = !0, _e.flags.redraw.main = !0, _e.flags.redraw.underlay = !0, _e.flags.redraw.overlay = !0, _e.flags.redraw.inds = !0
    }(), _e.flags.redraw.base && (e.clearRect(0, 0, _e.w, _e.h), function (e, t) {
      void 0 === t && (t = !1);
      var n, r;
      for (e.fillStyle = _e.colors.fill.bg, r = _e.w - _e.px.lbl.w - _e.px.lbl.tick, X(e, r, 0, _e.px.lbl.w + _e.px.lbl.tick, _e.h), X(e, 0, 0, _e.offset, _e.h), n = 0; n < _e.slots.length; n++) n < _e.slots.length - 1 ? X(e, 0, _e.slots[n].px + _e.slots[n].h + 2, r, _e.px.pad) : X(e, 0, _e.slots[n].px + _e.slots[n].h + 2, r, _e.px.lbl.h);
      for (function (e) {
        _e.w;
        var t, n, r, o, i, s, a, l, c, u = we(), p = Settings.localTime, f = [];
        if (j(e, !0), e.strokeStyle = _e.colors.stroke.grid, e.lineWidth = 1, s = e.measureText("00:00").width, a = e.measureText("12/30").width, e.measureText("Jan").width, l = 1.25 * s, (c = 2 * Math.ceil(l / (_e.px.bar.width + _e.px.bar.spacing))) <= 0 && (c = 1), e.beginPath(), u < 14400) {
          for (r = 0; ; r++) if (!((i = ie(r)) < 0)) {
            if (i >= _e.bars.data.length) break;
            if (x = _e.bars.data[i][0], q(x, p)) {
              if (f.push(r), 1 == F(x, p) ? 1 == I(x, p) ? U(e, O(x, p), r) : U(e, L(x, p), r) : U(e, B(x, !1, p), r), _e.settings.grid) for (o = 0; o < _e.slots.length; o++) ;
              if (r > _e.bars.visible) break;
              r += c - 1
            }
          }
          if (0 == f.length && f.push(se(_e.bars.data.length - 1)), e.stroke(), e.beginPath(), j(e, !1), e.strokeStyle = _e.colors.stroke.grid, _e.bars.fixTime) {
            var d = new Date,
              h = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + _e.bars.startTime1),
              g = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + _e.bars.endTime1),
              m = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + _e.bars.startTime2),
              v = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + _e.bars.endTime2),
              b = g.getTime() - h.getTime();
            b /= 6e4;
            var y = g.getTime() - h.getTime() + v.getTime() - m.getTime();
            y /= 6e4;
            var $ = Math.ceil(y / _e.w * 17), x = (Math.ceil(y / _e.w * _e.offset), v.getTime());
            for (t = R(x, !1, p), U(e, t, $ + Math.ceil(y / _e.w * 2)), x = (v.getTime() + m.getTime()) / 2, t = R(x, !1, p), U(e, t, 60), x = g.getTime(), t = R(x, !1, p), U(e, t, 120), x = (g.getTime() + h.getTime()) / 2, t = R(x, !1, p), U(e, t, 180), x = h.getTime(), t = R(x, !1, p), U(e, t, 240 - $), _e.mode.display != _e.CANDLE && function (e) {
              for (var t = 1; t <= 5; t++) A(e, Z(t * (_e.price.high - _e.price.low) / 6 + _e.price.low, 0), _e.DOTTED)
            }(e), o = 0; o < _e.slots.length; o++) C(e, o, 0, _e.DOTTED);
            for (o = 0; o < _e.slots.length; o++) C(e, o, y / 4, _e.DOTTED);
            for (o = 0; o < _e.slots.length; o++) C(e, o, b + 1, _e.DOTTED);
            for (o = 0; o < _e.slots.length; o++) C(e, o, y + 1, _e.DOTTED);
            for (o = 0; o < _e.slots.length; o++) C(e, o, 3 * y / 4 + 1, _e.DOTTED)
          } else for (n = f.length - 1; n >= 0; n--) for (r = f[n] - c; ; r -= c) if (!(r > _e.bars.visible)) {
            if (0 == n && r < 0) break;
            if ((i = ie(r)) < 0) break;
            if (!(i >= _e.bars.data.length)) {
              if (_e.settings.grid) for (o = 0; o < _e.slots.length; o++) ;
              if (r <= f[n - 1]) break;
              if (n > 0 && ee(r) + s / 2 >= ee(f[n - 1]) - a / 2) break;
              x = _e.bars.data[i][0], t = R(x, !1, p), U(e, t, r)
            }
          }
          e.stroke()
        } else if (u < 86400) {
          var w = -1, k = -1;
          for (r = 0; ; r++) if (!((i = ie(r)) < 0)) {
            if (i >= _e.bars.data.length - 1) break;
            if (x = _e.bars.data[i][0], k = F(x, p), w = F(_e.bars.data[i + 1][0], p), u > 86400 && I(x, p) != I(_e.bars.data[i + 1][0], p) || w > 1 && 1 == k) {
              if (f.push(r), 1 == I(x, p) ? U(e, O(x, p), r) : U(e, L(x, p), r), _e.settings.grid) for (o = 0; o < _e.slots.length; o++) ;
              if (f[f.length - 1] > _e.bars.visible) break;
              r += c - 1
            }
          }
          for (f.push(se(_e.bars.data.length - 1)), e.stroke(), e.beginPath(), j(e, !1), e.strokeStyle = _e.colors.stroke.grid, n = f.length - 1; n >= 0; n--) for (r = f[n] - c; ; r -= c) if (!(r > _e.bars.visible)) {
            if (0 == n && r < 0) break;
            if ((i = ie(r)) < 0) break;
            if (!(i >= _e.bars.data.length)) {
              if (_e.settings.grid) for (o = 0; o < _e.slots.length; o++) ;
              if (r <= f[n - 1]) break;
              if (n > 0 && ee(r) + s / 2 >= ee(f[n - 1]) - a / 2) break;
              x = _e.bars.data[i][0], t = q(x, p) ? u < 86400 ? F(x, p) : B(x, !1, p) : R(x, !1, p), U(e, t, r)
            }
          }
          e.stroke()
        } else if (u < 2592e3) {
          var w = -1, k = -1;
          for (r = 0; ; r++) if (!((i = ie(r)) < 0)) {
            if (i >= _e.bars.data.length - 1) break;
            if (x = _e.bars.data[i][0], k = F(x, p), w = F(_e.bars.data[i + 1][0], p), u > 86400 && I(x, p) != I(_e.bars.data[i + 1][0], p) || w > 1 && 1 == k) {
              if (f.push(r), 1 == I(x, p) ? U(e, O(x, p), r) : U(e, L(x, p), r), _e.settings.grid) for (o = 0; o < _e.slots.length; o++) ;
              if (f[f.length - 1] > _e.bars.visible) break;
              r += c - 1
            }
          }
          for (f.push(se(_e.bars.data.length - 1)), e.stroke(), e.beginPath(), j(e, !1), e.strokeStyle = _e.colors.stroke.grid, n = f.length - 1; n >= 0; n--) for (r = f[n] - c; ; r -= c) if (!(r > _e.bars.visible)) {
            if (0 == n && r < 0) break;
            if ((i = ie(r)) < 0) break;
            if (!(i >= _e.bars.data.length)) {
              if (_e.settings.grid) for (o = 0; o < _e.slots.length; o++) ;
              if (r <= f[n - 1]) break;
              if (n > 0 && ee(r) + s / 2 >= ee(f[n - 1]) - a / 2) break;
              x = _e.bars.data[i][0], t = u < 86400 ? F(x, p) : B(x, !1, p), U(e, t, r)
            }
          }
          e.stroke()
        }
      }(e), e.textAlign = "left", e.textBaseline = "middle", e.font = _e.font.labels, e.fillStyle = _e.colors.fill.label, n = 0; n < _e.slots.length; n++) _e.slots[n].hasOwnProperty("main") ? (e.strokeStyle = _e.colors.stroke.border, e.beginPath(), x(e, n), e.stroke()) : function (e, t) {
        var n, r, o = _e.slots[t].i.statics(), i = !0, s = _e.slots[t].i.bounds();
        if (e.lineWidth = 1, o.hasOwnProperty("minor")) {
          for (e.strokeStyle = _e.colors.stroke.minorlevel, e.fillStyle = _e.colors.fill.label, e.beginPath(), n = 0; n < o.minor.length; n++) (r = o.minor[n]) < s[0] || r > s[1] || (E(e, t, r, _e.DASHDOT), V(e, t, r, Y(r)));
          for (e.stroke(), e.strokeStyle = _e.colors.stroke.border, e.beginPath(), n = 0; n < o.minor.length; n++) (r = o.minor[n]) < s[0] || r > s[1] || V(e, t, r, Y(r));
          e.stroke(), i = !1
        }
        if (o.hasOwnProperty("major")) {
          for (e.strokeStyle = _e.colors.stroke.majorlevel, e.fillStyle = _e.colors.fill.label, e.beginPath(), n = 0; n < o.major.length; n++) (r = o.major[n]) < s[0] || r > s[1] || (E(e, t, r, _e.SOLID), V(e, t, r, Y(r)));
          for (e.stroke(), e.strokeStyle = _e.colors.stroke.border, e.beginPath(), n = 0; n < o.major.length; n++) (r = o.major[n]) < s[0] || r > s[1] || V(e, t, r, Y(r));
          e.stroke(), i = !1
        }
        i && (e.strokeStyle = _e.colors.stroke.border, e.beginPath(), x(e, t), e.stroke())
      }(e, n), function (e, t) {
        e.lineWidth = mobile ? 2 : 1, e.strokeStyle = _e.colors.stroke.border;
        var n = _e.offset - 1, r = _e.slots[t].px - 1, o = _e.w - _e.px.lbl.w - _e.offset - _e.px.lbl.tick,
          i = _e.slots[t].h + 2;
        J(e, n <= 0 ? 0 : n, r <= 0 ? 0 : r, o - (n <= 0 ? -n : 0), i - (r <= 0 ? -r : 0))
      }(e, n)
    }(e), _e.flags.redraw.base = !1, _e.settings.userorders ? m(t) : t.clearRect(0, 0, _e.w, _e.h));
    var i, s;
    for ((_e.flags.redraw.inds || _e.flags.redraw.overlay) && (o.clearRect(0, 0, _e.w, _e.h), _e.flags.redraw.inds = !0, _e.flags.redraw.overlay = !0), _e.flags.redraw.underlay && n.clearRect(0, 0, _e.w, _e.h), i = 0; i < _e.slots.length; i++) if (_e.slots[i].hasOwnProperty("main")) {
      if (_e.flags.redraw.main && (r.clearRect(0, 0, _e.w, _e.h), function (e, t) {
          if (void 0 === _e.bars.data || 0 == _e.bars.data.length) return;
          _e.settings.bidask && function (e, t) {
            if (isNaN(_e.price.bid) && isNaN(_e.price.ask)) return;
            var n = _e.price.bid, r = _e.price.ask;
            e.textBaseline = "middle", e.textAlign = "left", e.font = _e.font.labels, e.fillStyle = _e.colors.fill.flags, e.strokeStyle = _e.colors.stroke.ask, e.beginPath(), E(e, t, r, _e.SOLID), e.stroke(), W(e, t, r, Y(r)), e.fillStyle = _e.colors.fill.flags, e.strokeStyle = _e.colors.stroke.bid, e.beginPath(), E(e, t, n, _e.SOLID), e.stroke(), W(e, t, n, Y(n))
          }(e, t);
          switch (_e.mode.display) {
            case _e.CANDLE:
            case _e.OHLC:
            case _e.HLC:
              !function (e, t, n, r) {
                var o, i, s, a, l = oe(), c = null, u = [], p = [];
                o = n.length - 1 > l[1] ? n[l[1] + 1] : n[l[1]];
                switch (r) {
                  case _e.CANDLE:
                    c = function (e, t, n, r, o) {
                      var i = Z(r[1], t), s = Z(r[2], t), a = Z(r[3], t), l = Z(r[4], t), c = Math.min(i, l), u = ee(n);
                      o ? 1 == mobile && X(e, u - _e.px.bar.dx + 1, c, _e.px.bar.width - 2, Math.abs(l - i)) : _e.colors.stroke.fillUp && X(e, u - _e.px.bar.dx + 1, Math.min(i, l), _e.px.bar.width - 2, Math.abs(i - l));
                      J(e, u - _e.px.bar.dx, Math.min(i, l), _e.px.bar.width - 1, Math.abs(i - l)), s < Math.min(i, l) && (Q(e, u, s), K(e, u, Math.min(i, l) - 1));
                      a > Math.max(i, l) && (Q(e, u, a), K(e, u, Math.max(i, l)));
                      o && X(e, u - _e.px.bar.dx, c, _e.px.bar.width - 1, Math.abs(l - i))
                    };
                    break;
                  case _e.OHLC:
                    c = function (e, t, n, r) {
                      var o = Z(r[1], t), i = Z(r[2], t), s = Z(r[3], t), a = Z(r[4], t), l = ee(n);
                      Q(e, l - _e.px.bar.dx, o), K(e, l, o), Q(e, l, a), e.lineTo(.6 + (l + _e.px.bar.dx | 0), .5 + (0 | a)), Q(e, l, i), K(e, l, s)
                    };
                    break;
                  case _e.HLC:
                    c = function (e, t, n, r) {
                      var o = Z(r[2], t), i = Z(r[3], t), s = Z(r[4], t), a = ee(n);
                      Q(e, a, s), e.lineTo(.6 + (a + _e.px.bar.dx | 0), .5 + (0 | s)), Q(e, a, o), K(e, a, i)
                    };
                    break;
                  default:
                    return
                }
                var f, d, h = 0, g = 1e5;
                for (i = l[1]; i >= l[0]; i--) n[i][4] >= n[i][1] ? n[i][1] == n[i][4] && n[i + 1] && n[i + 1][4] > n[i][1] ? p.push([i, se(i)]) : u.push([i, se(i)]) : p.push([i, se(i)]), o = n[i], n[i][2] >= h && (h = n[i][2], f = i), n[i][3] <= g && (g = n[i][3], d = i);
                for (e.strokeStyle = _e.colors.stroke.down, e.fillStyle = _e.colors.fill.down, e.beginPath(), i = 0; i < p.length; i++) (s = n[p[i][0]].slice())[5] /= BTC_INT, c(e, t, p[i][1], s, !0);
                for (e.stroke(), e.strokeStyle = _e.colors.stroke.up, e.fillStyle = _e.colors.fill.up, e.beginPath(), i = 0; i < u.length; i++) (s = deepCopy(n[u[i][0]]))[5] /= BTC_INT, c(e, t, u[i][1], s, !1);
                e.stroke(), a = o[4], n.length >= 2 && n[1][4] > n[0][4] && (e.strokeStyle = _e.colors.stroke.down);
                if (e.fillStyle = _e.colors.fill.flags, e.textBaseline = "middle", e.font = _e.font.labels, W(e, t, a, Y(a)), r == _e.CANDLE) {
                  e.textBaseline = "middle", e.fillStyle = _e.colors.stroke.arrow;
                  var m = Z(h, t), v = ee(se(f)), b = Z(g, t), y = ee(se(d)), $ = e.measureText(Y(h)).width + 19,
                    x = e.measureText(Y(g)).width + 21;
                  v - $ > 0 ? (ue(e, 0, 0, v - 15, m, v - 2, m), e.fillText(Y(h), v - $, m)) : (ue(e, 0, 0, v + 15, m, v + 2, m), e.fillText(Y(h), v + 19, m)), y - x > 0 ? (ue(e, 0, 0, y - 15, b, y - 2, b), e.fillText(Y(g), y - $, b)) : (ue(e, 0, 0, y + 15, b, y + 2, b), e.fillText(Y(g), y + 19, b))
                }
              }(e, t, _e.bars.data, _e.mode.display);
              break;
            case _e.LINE:
            case _e.MOUNTAIN:
              k(e, t, _e.bars.data, _e.mode.display == _e.MOUNTAIN, !0, !0)
          }
        }(r, i), _e.flags.redraw.main = !1), _e.flags.redraw.underlay) {
        for (g(n, i), s = 0; s < _e.slots[i].u.length; s++) y(n, i, _e.slots[i].u[s].i);
        _e.flags.redraw.underlay = !1
      }
      if (_e.flags.redraw.overlay) {
        for (g(o, i), s = 0; s < _e.slots[i].o.length; s++) y(o, i, _e.slots[i].o[s].i);
        _e.flags.redraw.overlay = !1
      }
    } else (_e.flags.redraw.inds || "vol" == _e.slots[i].t) && (g(o, i), y(o, i, _e.slots[i].i));
    _e.flags.redraw.inds = !1, _e.notClicked || 1 == mobile || (o.strokeStyle = "#f9ee30", o.strokeRect(0, 0, _e.w, _e.h))
  }

  function h() {
    var e = we(), t = 0;
    if (_e.bars.data = [], Data.data.bars[e]) if (1 == _e.bars.fixTime) for (t = 0; t < Data.data.bars[e].length; t++) _e.bars.data.push(Data.data.bars[e][t]); else _e.bars.data = Data.data.bars[e];
    void 0 === _e.bars.data && (DEBUG && Pe("No data for " + e), _e.bars.data = []), _e.flags.recompute = !0, d()
  }

  function g(e, t) {
    e.clearRect(0, _e.slots[t].px - _e.px.pad, _e.w, _e.slots[t].h + 2 * _e.px.pad)
  }

  function m(e) {
    void 0 === e && (e = _e.canvas.orders[0].getContext("2d"));
    for (var t = -1, n = 0; n < _e.slots.length; n++) if (_e.slots[n].hasOwnProperty("main")) {
      t = n;
      break
    }
    if (-1 != t) {
      try {
        e.clearRect(0, 0, _e.w, _e.h)
      } catch (e) {
        return
      }
      if (_e.settings.userorders) {
        var r = UserAccount.orders(), o = "", i = "", s = {}, a = [], l = [], c = [], u = [], n = 0, p = 0;
        for (o in r) if (r.hasOwnProperty(o) && o == RTBTC.exchange()) for (i in r[o]) r[o].hasOwnProperty(i) && ((s = r[o][i]).exch = o, s.hasOwnProperty("base") && s.base == RTBTC.base() && s.hasOwnProperty("quote") && s.quote == RTBTC.quote() && ((p = Z(s.price, t)) < _e.slots[t].px || p > _e.slots[t].px + _e.slots[t].h || ("buy" == s.action ? (a.push(s), c.push(v(s))) : "sell" == s.action && (l.push(s), u.push(v(s))))));
        if (a.length + l.length > 0 && (e.textAlign = "left", e.font = _e.font.indicators), a.length > 0) {
          for (e.strokeStyle = _e.colors.stroke.bid, e.fillStyle = _e.colors.stroke.bid, e.textBaseline = "top", e.beginPath(), n = 0; n < a.length; n++) E(e, t, a[n].price, _e.DASHDOT), (p = Z(a[n].price, t) + 1) > _e.slots[t].px + _e.slots[t].h - 10 || e.fillText(c[n], 2, p);
          for (e.stroke(), e.font = _e.font.labels, e.textBaseline = "middle", n = 0; n < a.length; n++) e.fillStyle = _e.colors.fill.flags, W(e, t, a[n].price, Y(a[n].price))
        }
        if (l.length > 0) {
          for (e.strokeStyle = _e.colors.stroke.ask, e.fillStyle = _e.colors.stroke.ask, e.textBaseline = "top", e.font = _e.font.indicators, e.beginPath(), n = 0; n < l.length; n++) E(e, t, l[n].price, _e.DASHDOT), p = Z(l[n].price, t) + 1, e.fillText(u[n], 2, p);
          for (e.stroke(), e.font = _e.font.labels, e.textBaseline = "middle", n = 0; n < l.length; n++) e.fillStyle = _e.colors.fill.flags, W(e, t, l[n].price, Y(l[n].price))
        }
      }
    }
  }

  function v(e) {
    var t = "";
    return "buy" == e.action ? t += _("BUY") : "sell" == e.action ? t += _("SELL") : t += "UNKNOWN ACTION", t += " ", t += parseFloat(e.amount).toFixed(Exchanges.cur_prec(e.exch, e.base))
  }

  function b(e, t, n) {
    var r = null, o = _e.colors.stroke.i, i = null;
    return _e.slots[e].hasOwnProperty("main") && void 0 !== n && (i = _e.slots[e][n][t].i), null != i && (r = i.color()), null === r && (void 0 !== t ? r = o[t % o.length] : (r = o[_e.lastColorIndex % o.length], _e.lastColorIndex++)), r
  }

  function y(e, t, n, r) {
    if (void 0 !== n) {
      var o, i = n.draw(), s = null, a = _e.slots[t].hasOwnProperty("main");
      for (o = 0; o < i.length; o++) switch (s = null, i[o].type) {
        case _e.CANDLE:
        case _e.OHLC:
        case _e.HLC:
          break;
        case _e.LINE:
          a && (s = n.color()), null == s && (s = b(t, o)), e.strokeStyle = s, e.beginPath(), k(e, t, i[o].data, !1, !1), e.stroke();
          break;
        case _e.MOUNTAIN:
          k(e, t, i[o].data, !0, !1);
          break;
        case _e.BANDS:
          break;
        case _e.PSAR:
          a && (s = n.color()), null == s && (s = b(t, o)), e.strokeStyle = s, e.beginPath(), function (e, t, n) {
            if (!(n.hasOwnProperty("length") && n.length > 0)) return;
            var r, o, i, s, a = oe(), l = _e.slots[t].px + 3, c = l + _e.slots[t].h - 3;
            for (r = 0; r <= a[1] - a[0]; r++) o = se(r + a[0]), i = ee(o), (s = Z(n[r], t)) < l || s > c || J(e, i - 1, s - 1, 2, 2)
          }(e, t, i[o].data), e.stroke();
          break;
        case _e.HIST:
          T(e, t, i[o].data, !0);
          break;
        case _e.LBLHIST:
          T(e, t, i[o].data, !1)
      }
    }
  }

  function x(e, t) {
    var n, r, o, i, s, a, l, c, u, p, f, d, h, g, m = [], v = 0, b = 0, y = [5, 2.5, 2];
    if (_e.slots[t].hasOwnProperty("main")) r = _e.price.high, o = _e.price.low; else {
      var $ = _e.slots[t].i.bounds();
      o = $[0], r = $[1]
    }
    if (!((n = r - o) < 0 || (i = ~~(_e.slots[t].h / (4 * _e.px.lbl.font)), (s = n / i) < 0))) {
      for (c = Math.log(s) / Math.LN10, a = Math.pow(10, c > 0 ? ~~c : Math.floor(c)), .5, v = 0; v < y.length; v++) (h = Math.log(s / a / (y[v] / 10)) / Math.LN10) > 1 && m.push([a * y[v], Math.abs(.5 - h), h]);
      for (0 == m.length && m.push([a, 0, 0]), l = 1e8, v = 0; v < m.length; v++) m[v][1] < l && (l = m[v][1], s = m[v][0]);
      if (u = ~~(r / s) * s, p = _e.w - _e.px.lbl.tick - _e.px.lbl.w, f = Z(u, t), d = Z(o, t) - _e.px.lbl.font / 2 | 0, 1 != t) {
        if (_e.slots[t].hasOwnProperty("main") && 0 != _e.offset) {
          e.textAlign = "right";
          for (v = 0; v <= 6; v++) {
            var x = _e.price.low + v * (_e.price.high - _e.price.low) / 6, w = Z(x, t);
            e.textBaseline = 6 == v ? "top" : 0 == v ? "bottom" : "middle", e.fillText((100 * (_e.preClose ? x / _e.preClose - 1 : 0)).toFixed(2) + "%", _e.offset - 3, w, _e.offset - 3)
          }
          e.textAlign = "start"
        }
        for (v = 0, 2; u >= o && f < d && v < 100;) {
          for (f >= _e.slots[t].px + _e.px.lbl.font / 2 && (z(e, p, f, Y(u)), _e.settings.grid && A(e, f, _e.DASHED), b++), g = 0; g < 2; g++) !function (e, t, n) {
            var r = Z(n, t), o = _e.w - _e.px.lbl.tick - _e.px.lbl.w;
            !function (e, t, n) {
              Q(e, t, n), K(e, t + _e.px.lbl.halftick, n)
            }(e, o, r)
          }(e, t, u - (g + 1) * s / 3);
          f = Z(u -= s, t), v++
        }
        0 == b && z(e, p, f = Z(u = o + n / 2, t), Y(u))
      } else {
        z(e, p, w = Z(r, t), r.toFixed(2))
      }
    }
  }

  function k(e, t, n, r, o, i) {
    if (void 0 !== n && n.hasOwnProperty("length") && n.length > 0) {
      var s, a, l, c, u, p = oe();
      if (!r) {
        if (l = ee(se(p[1])), c = o ? Z(n[p[1]][4], t) : Z(n[p[1] - p[0]], t), o) {
          var f, d = [], h = {};
          for ((f = []).push(p[1]), l = ee(se(p[1])), c = Z(n[p[1]][4], t), h[p[1]] = [+l, +c], s = p[1] - 1; s >= p[0]; s--) l = ee(se(s)), c = Z(n[s][4], t), n[s + 1][4] <= n[s][4] ? f.push(s) : d.push(s), h[s] = [+l, +c];
          for (u = n.length + 2, e.lineWidth = 1, e.strokeStyle = _e.colors.stroke.fenshi || _e.colors.stroke.down, e.beginPath(), a = 0; a < d.length; a++) (s = d[a]) < u - 1 && h.hasOwnProperty(s + 1) && Q(e, h[s + 1][0], h[s + 1][1]), K(e, h[s][0], h[s][1]), u = s;
          for (e.stroke(), e.strokeStyle = _e.colors.stroke.fenshi || _e.colors.stroke.up, e.beginPath(), u = n.length + 2, s = 0; s < f.length; s++) f[s] < u - 1 && h.hasOwnProperty(f[s] + 1) && Q(e, h[f[s] + 1][0], h[f[s] + 1][1]), K(e, h[f[s]][0], h[f[s]][1]), u = f[s];
          e.stroke(), n.length > 1 ? e.strokeStyle = n[1][4] <= n[0][4] ? _e.colors.stroke.up : _e.colors.stroke.down : e.strokeStyle = f, u = n[0][4]
        } else {
          var g = !1;
          for (Q(e, l, c), s = p[1] - p[0]; s >= 0; s--) l = ee(se(s + p[0])), (c = Z(n[s], t)) >= _e.slots[t].px && c <= _e.slots[t].px + _e.slots[t].h ? g ? (g = !1, e.beginPath(), Q(e, l, c)) : K(e, l, c) : g || (e.stroke(), g = !0);
          u = n[0], e.stroke()
        }
        e.lineWidth = 1, e.fillStyle = _e.colors.fill.flags, e.textBaseline = "middle", e.font = _e.font.labels, i && W(e, t, u, Y(u))
      }
    }
  }

  function T(e, t, n, r) {
    if (void 0 !== n && n.hasOwnProperty("length") && n.length > 0) {
      var o, i, s = oe(), a = [], l = [];
      if (r) for (o = 0; o <= s[1] - s[0]; o++) n[o] > 0 ? a.push([o, se(o + s[0])]) : l.push([o, se(o + s[0])]); else for (o = 0; o <= s[1] - s[0]; o++) n && void 0 !== n[o] && (n[o][1] ? a.push([o, se(o + s[0])]) : l.push([o, se(o + s[0])]));
      for (e.strokeStyle = _e.colors.stroke.down, e.fillStyle = _e.colors.fill.down, e.beginPath(), o = 0; o < l.length; o++) S(e, t, l[o][1], r ? n[l[o][0]] : n[l[o][0]][0], !1);
      for (e.stroke(), e.strokeStyle = _e.colors.stroke.up, e.fillStyle = _e.colors.fill.up, e.beginPath(), o = 0; o < a.length; o++) S(e, t, a[o][1], r ? n[a[o][0]] : n[a[o][0]][0]);
      e.stroke(), r ? (i = n[0]) < 0 && (e.strokeStyle = _e.colors.stroke.down) : (i = n[0][0], n[0][1] || (e.strokeStyle = _e.colors.stroke.down)), e.lineWidth = 1, e.fillStyle = _e.colors.fill.flags, e.textBaseline = "middle", e.font = _e.font.labels, W(e, t, i, Y(i)), e.stroke()
    }
  }

  function S(e, t, n, r, o) {
    var i = Z(r, t), s = ee(n), a = Z(0, t), l = Math.abs(a - i), c = Math.min(i, a);
    i < _e.slots[t].px ? i = _e.slots[t].px : i > _e.slots[t].px + _e.slots[t].h && (i = _e.slots[t].px + _e.slots[t].h), J(e, s - _e.px.bar.dx, c, _e.px.bar.width - 1 <= 0 ? 0 : _e.px.bar.width - 1, l), !1 === o ? X(e, s - _e.px.bar.dx + 1, c + 1, _e.px.bar.width - 2 <= 0 ? 0 : _e.px.bar.width - 2, l) : _e.colors.stroke.fillUp && X(e, s - _e.px.bar.dx + 1, c + 1, _e.px.bar.width - 2 <= 0 ? 0 : _e.px.bar.width - 2, l)
  }

  function C(e, t, n, r) {
    P(e, t, ee(n), r)
  }

  function P(e, t, n, r) {
    var o, i = _e.slots[t].px - 1, s = _e.slots[t].px + _e.slots[t].h;
    if (DEBUG && assert(s > i, "Invalid bounds on vertical line drawing. y0:" + i + ", y1:" + s), s > i && !(s < 0 || n < 0 || n > _e.w || n > 25e3)) switch (Q(e, n, i), o = i, r) {
      case _e.DOTTED:
        for (; o < s;) K(e, n, ++o), Q(e, n, ++o);
        break;
      case _e.DASHED:
        for (; o < s;) K(e, n, o = (o += 6) > s ? s : o), Q(e, n, o += 2);
        break;
      case _e.DASHDOT:
        for (; o < s && (o += 7, o = o > s ? s : o, K(e, n, o), !((o += 4) >= s));) Q(e, n, o), K(e, n, o = (o += 2) > s ? s : o), Q(e, n, o += 4);
        break;
      case _e.SOLID:
      default:
        K(e, n, s)
    }
  }

  function E(e, t, n, r) {
    var o = Z(n, t);
    o < _e.slots[t].px || o > _e.slots[t].px + _e.slots[t].h || A(e, o, r)
  }

  function A(e, t, n) {
    var r, o = _e.w - _e.px.lbl.tick - _e.px.lbl.w - 1, i = _e.offset;
    if (DEBUG && assert(o > i, "Invalid bounds on line drawing. x0: " + o + ", x1: " + i), o > i) switch (Q(e, o, t), r = o, n) {
      case _e.DOTTED:
        for (; r > i + 1;) K(e, --r, t), Q(e, --r, t);
        break;
      case _e.DASHED:
        for (; r > i;) K(e, r = (r -= 6) < i ? i : r, t), Q(e, r -= 2, t);
        break;
      case _e.DASHDOT:
        for (; r > i && (r -= 7, r = r < i ? i : r, K(e, r, t), !((r -= 4) <= i));) Q(e, r, t), K(e, r = (r -= 2) < i ? i : r, t), Q(e, r -= 4, t);
        break;
      case _e.SOLID:
      default:
        K(e, i, t)
    }
  }

  function M(e, t, n) {
    if (_e.settings.crosshairs && !(e < _e.offset)) {
      var r = _e.canvas.i[0].getContext("2d"), o = ne(e), i = ae(e, t);
      if (!(null == i || i < 0)) {
        var s, a = re(i, t), l = ie(o), c = ee(o);
        if (N(r), r.textBaseline = "middle", r.textAlign = "left", r.font = _e.font.labels, r.lineWidth = 1, r.fillStyle = _e.colors.fill.crosshair, r.strokeStyle = _e.colors.stroke.crosshair, r.beginPath(), _e.showMainCrosshairs) for (_e.crossHairH && A(r, t, _e.SOLID), s = 0; s < _e.slots.length; s++) P(r, s, c, _e.SOLID);
        if (r.stroke(), r.fillStyle = _e.colors.fill.crosshair, _e.crossHairH && (n && (a = _e.bars.data[l] && _e.bars.data[l][4] || 0), function (e, t, n, r) {
            var o, i = _e.w - _e.px.lbl.tick - _e.px.lbl.w - 3;
            o = _e.slots[t].px + 1 + Math.ceil(_e.px.lbl.font / 2), n < o ? n = o : (o = _e.slots[t].px + _e.slots[t].h - Math.ceil(_e.px.lbl.font / 2), n > o && (n = o));
            G(e, i, n, r)
          }(r, i, t, Y(a))), mobile && _e.updateXFK && _e.updateXFK(!0), l >= 0 && l < _e.bars.data.length) {
          j(r, !0);
          var u = D(_e.bars.data[l][0], !1, Settings.localTime), p = r.measureText(u).width, f = r.fillStyle,
            d = r.strokeStyle;
          r.fillStyle = _e.colors.fill.crosshair, r.strokeStyle = _e.colors.stroke.crosshair, function (e, t, n) {
            var r = ee(t), o = 0 | H(r, n + 10), i = n / 2 + 5 | 0, s = H(r, 7);
            e.beginPath(), Q(e, o - i, _e.h - 1), K(e, o + i, _e.h - 1), K(e, o + i, _e.h - _e.px.lbl.h), K(e, s + 3.5, _e.h - _e.px.lbl.h), K(e, s, _e.h - _e.px.lbl.h - 4), K(e, s - 3.5, _e.h - _e.px.lbl.h), K(e, o - i, _e.h - _e.px.lbl.h), K(e, o - i, _e.h - 1), e.fill(), e.stroke()
          }(r, o, 0 | p), r.fillStyle = f, r.strokeStyle = d, function (e, t, n) {
            var r = _e.h - (_e.px.lbl.h - _e.px.lbl.font) / 2;
            e.fillText(t, n, r)
          }(r, u, H(ee(o), p + 10)), function (e) {
            var t, n, r, o, i, s = _e.canvas.lbl[0].getContext("2d"), a = ~~(1.25 * _e.px.lbl.font), l = oe(),
              c = ie(0), u = ie(e), p = (_e.colors.stroke.i, _e.w - _e.px.lbl.tick - _e.px.lbl.w - 2);
            l[0], l[1], c < 0 && (e += c), e < 0 && (e = -1), s.strokeStyle = _e.colors.fill.blankBG, s.lineWidth = 1.5, s.fillStyle = _e.colors.fill.slottext, s.textBaseline = "top", s.font = _e.font.indicators;
            var f = 3 + _e.offset, d = 3 + _e.offset;
            for (s.clearRect(0, 0, _e.w, _e.h), t = 0; t < _e.slots.length; t++) if (_e.slots[t].hasOwnProperty("main")) {
              if (o = function (e) {
                  if (_e.curIndex = e, function (e) {
                      if (_e.mode.display != _e.CANDLE) {
                        var t;
                        (t = e < 0 || e > _e.bars.data.length ? [(new Date).getTime(), 0, 0, 0, 0, 0] : _e.bars.data[e]) && ($("#time").text(new Date(t[0]).Format("hh:mm")), $("#price").text(t[4].toFixed(6)), $("#volume").text(t[5].toFixed(0)), $("#updown").text((0 == t[4] ? 0 : t[4] - _e.preClose).toFixed(6)), $("#price").css("color", t[4] >= _e.preClose ? "red" : "green"), $("#updown").css("color", t[4] >= _e.preClose ? "red" : "green"))
                      }
                    }(e), e < 0 || e >= _e.bars.data.length) return "";
                  if (0 != ae(_e.mouse.x, _e.mouse.y) && 1 != ae(_e.mouse.x, _e.mouse.y) && 2 != ae(_e.mouse.x, _e.mouse.y) && 3 != ae(_e.mouse.x, _e.mouse.y) || (_e.curIndex = e, mobile && _e.updateXFK && _e.updateXFK(!1)), void 0 === _e.bars.data[e]) return "";
                  var t = _e.bars.data[e][0], n = _e.bars.data[e][1], r = _e.bars.data[e][2], o = _e.bars.data[e][3],
                    i = _e.bars.data[e][4], s = (_e.bars.data[e][5], []), a = _e.bars.data[e + 1];
                  return s = [D(t, !1, Settings.localTime), "  ", " O:", Y(n), " H:", Y(r), " L:", Y(o), " C:", Y(i), " CHANGE:", (a ? 100 * (i - a[4]) / a[4] : 0).toFixed(2) + "%", " AMPLITUDE:", (a ? 100 * (r - o) / a[4] : 0).toFixed(2) + "%"], "cn" == localStorage.lang && (s = [D(t, !1, Settings.localTime), "  ", " 开:", Y(n), " 高:", Y(r), " 低:", Y(o), " 收:", Y(i), " 涨幅:", (a ? 100 * (i - a[4]) / a[4] : 0).toFixed(2) + "%", " 振幅:", (a ? 100 * (r - o) / a[4] : 0).toFixed(2) + "%"]), mobile ? "" : s.join("")
                }(u), r = _e.slots[t].px + 1, s.strokeText(o, d, r, p), s.fillText(o, d, r, p), d = 6 + _e.offset + s.measureText(o).width, 1 == _e.colors.stroke.priceShow) {
                var h = _e.w - _e.px.lbl.tick - _e.px.lbl.w, g = _e.canvas.base[0].getContext("2d"),
                  m = h - g.measureText(Y(_e.price.high)).width - 3, d = h - g.measureText(Y(_e.price.low)).width - 3;
                s.clearRect(m, r, p, 13), s.strokeText(Y(_e.price.high), m, r, p), s.fillText(Y(_e.price.high), m, r, p);
                var v = _e.slots[t].h - 14;
                s.strokeText(Y(_e.price.low), d, v, p), s.fillText(Y(_e.price.low), d, v, p)
              }
              for (n = 0; n < _e.slots[t].u.length; n++) if ((i = _e.slots[t].u[n].i).hasOwnProperty("label")) {
                if (r + a > _e.slots[t].px + _e.slots[t].h) break;
                1 != mobile ? (o = i.label(e), s.fillStyle = b(t, n, "u"), d + s.measureText(o).width + 2 > p && (r += a, d = 2), s.fillText(o, d, r, p), d += s.measureText(o).width + 2) : (o = i.label(e), s.fillStyle = b(t, n, "u"), s.fillText(o, f, r, p), r += a)
              }
              for (n = 0; n < _e.slots[t].o.length; n++) if ((i = _e.slots[t].o[n].i).hasOwnProperty("label")) {
                if ((r += a) + a > _e.slots[t].px + _e.slots[t].h) break;
                1 != mobile ? (o = i.label(e), s.fillStyle = b(t, n, "o"), d + s.measureText(o).width + 2 > p && (r += a, d = 2), s.fillText(o, d, 0, p), d += s.measureText(o).width + 2) : (o = i.label(e), s.fillStyle = b(t, n, "o"), s.fillText(o, f, r, p))
              }
              s.fillStyle = _e.colors.fill.flagtext
            } else {
              if (!(i = _e.slots[t].i).hasOwnProperty("label")) continue;
              o = i.label(e), r = _e.slots[t].px + 1, s.fillText(o, f, r, p)
            }
          }(o)
        }
        _e.px.crosshairs.x = c, _e.px.crosshairs.y = t, _e.mouse.bar = o
      }
    }
  }

  function N(e) {
    if (_e.settings.crosshairs) {
      var t = e || _e.canvas.i[0].getContext("2d");
      t.clearRect(0, _e.px.crosshairs.y - 30, _e.w, 60), t.clearRect(_e.px.crosshairs.x - 30, 0, 60, _e.h), t.clearRect(0, _e.h - _e.px.lbl.h - 4, _e.w, _e.px.lbl.h + 4), _e.mouse.bar = null;
      _e.canvas.lbl[0].getContext("2d").clearRect(0, 0, _e.w, _e.h)
    }
  }

  function D(e, t, n) {
    var r = new Date(e), o = "";
    return !0 === n ? (o = r.getFullYear() + "-", o += r.getMonth() + 1 < 10 ? "0" : "", o += r.getMonth() + 1 + "-", o += r.getDate() < 10 ? "0" : "", o += r.getDate() + " ", o += r.getHours() < 10 ? "0" : "", o += r.getHours() + ":", o += r.getMinutes() < 10 ? "0" : "", o += r.getMinutes(), t && (o += (r.getSeconds(), "0"), o += r.getSeconds())) : (o = r.getUTCFullYear() + "-", o += r.getUTCMonth() + 1 < 10 ? "0" : "", o += r.getUTCMonth() + 1 + "-", o += r.getUTCDate() < 10 ? "0" : "", o += r.getUTCDate() + " ", o += r.getUTCHours() < 10 ? "0" : "", o += r.getUTCHours() + ":", o += r.getUTCMinutes() < 10 ? "0" : "", o += r.getUTCMinutes(), t && (o += (r.getUTCSeconds(), "0"), o += r.getUTCSeconds())), o
  }

  function O(e, t) {
    var n = new Date(e);
    return !0 === t ? n.getFullYear() : n.getUTCFullYear()
  }

  function I(e, t) {
    var n = new Date(e);
    return !0 === t ? n.getMonth() + 1 : n.getUTCMonth() + 1
  }

  function L(e, t) {
    var n = new Date(e);
    return !0 === t ? Ne[n.getMonth()] : Ne[n.getUTCMonth()]
  }

  function B(e, t, n) {
    var r = new Date(e), o = "";
    return !0 === n ? (t && (o = r.getFullYear() + "/"), o += r.getMonth() + 1 + "/", o += r.getDate()) : (t && (o = r.getUTCFullYear() + "/"), o += r.getUTCMonth() + 1 + "/", o += r.getUTCDate()), o
  }

  function F(e, t) {
    var n = new Date(e), r = "";
    return r += !0 === t ? n.getDate() : n.getUTCDate()
  }

  function R(e, t, n) {
    var r = new Date(e), o = "";
    return !0 === n ? (o = r.getHours() + ":", o += r.getMinutes() < 10 ? "0" : "", o += r.getMinutes(), t && (o += ":" + (r.getSeconds() < 10 ? "0" : ""), o += r.getSeconds())) : (o = r.getUTCHours() + ":", o += r.getUTCMinutes() < 10 ? "0" : "", o += r.getUTCMinutes(), t && (o += ":" + (r.getUTCSeconds() < 10 ? "0" : ""), o += r.getUTCSeconds())), o
  }

  function q(e, t) {
    if (!0 === t) {
      var n = new Date(e);
      return 0 == n.getHours() && 0 == n.getMinutes() && 0 == n.getSeconds()
    }
    return e % 86400 == 0
  }

  function j(e, t) {
    e.textBaseline = "bottom", e.textAlign = "center";
    var n = _e.font.size + "px/" + _e.font.lineHeight + "em " + _e.font.face;
    t ? (n += " bold", e.fillStyle = _e.colors.stroke.crosshair) : e.fillStyle = _e.colors.fill.label, e.font = n
  }

  function U(e, t, n) {
    var r = _e.h - (_e.px.lbl.h - _e.px.lbl.font) / 2, o = ee(n);
    e.fillText(t, o, r)
  }

  function H(e, t) {
    return e > _e.w - _e.px.lbl.w - _e.px.lbl.tick - 1 - t / 2 ? _e.w - _e.px.lbl.w - _e.px.lbl.tick - 1 - t / 2 : e < t / 2 ? t / 2 : e
  }

  function V(e, t, n, r) {
    var o = Z(n, t);
    z(e, _e.w - _e.px.lbl.tick - _e.px.lbl.w, o, r)
  }

  function z(e, t, n, r) {
    Q(e, t, n), K(e, t + _e.px.lbl.tick, n), e.fillText(r, t + _e.px.lbl.tick + 2, n, _e.px.lbl.w)
  }

  function W(e, t, n, r) {
    if (1 != _e.colors.stroke.opacity) {
      var o, i = Z(n, t), s = _e.w - _e.px.lbl.tick - _e.px.lbl.w - 3;
      i < (o = _e.slots[t].px + 1 + Math.ceil(_e.px.lbl.font / 2)) ? i = o : i > (o = _e.slots[t].px + _e.slots[t].h - Math.ceil(_e.px.lbl.font / 2)) && (i = o), G(e, s, i, r)
    }
  }

  function G(e, t, n, r) {
    var o, i, s = _e.px.lbl.font / 2;
    e.beginPath(), Q(e, t, n), K(e, o = t + ~~s, i = ~~(n - 1 - s)), o = t + _e.px.lbl.w + _e.px.lbl.tick + 1, e.lineTo(.6 + (0 | o), .5 + (0 | i)), Q(e, o, i), K(e, o, i = Math.ceil(n + 1 + s)), K(e, o = t + ~~s, i), K(e, t, n), e.fill(), e.stroke(), e.fillStyle = _e.colors.fill.flagtext, e.fillText(r, t + _e.px.lbl.tick + 5, n + 1)
  }

  function Y(e) {
    return e.toFixed(Data.qouteFixed || 8)
  }

  function Q(e, t, n) {
    e.moveTo(.5 + (0 | t), .5 + (0 | n))
  }

  function K(e, t, n) {
    e.lineTo(.5 + (0 | t), .5 + (0 | n))
  }

  function X(e, t, n, r, o) {
    e.fillRect(0 | t, 0 | n, 0 | r, 0 | o)
  }

  function J(e, t, n, r, o) {
    e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | o)
  }

  function Z(e, t) {
    var n, r = null;
    if (_e.slots[t].hasOwnProperty("main")) {
      if (r = [_e.price.low, _e.price.high], _e.settings.logscale) return _e.log.m * log10(e) + _e.log.b;
      n = _e.price.range
    } else r = _e.slots[t].i.bounds(), n = Math.max(r[1] - r[0], 1e-8);
    var o = (r[1] - e) / n;
    return _e.slots[t].px + Math.ceil(_e.slots[t].h * o)
  }

  function ee(e) {
    var t = oe();
    return _e.bars.visible > _e.bars.data.length ? te(e) - te(t[1]) + (_e.px.bar.width + 1) / 2 : te(e)
  }

  function te(e) {
    return _e.w - _e.px.lbl.w - _e.px.lbl.tick - 1 - (e + 1) * (_e.px.bar.spacing + _e.px.bar.width) + (_e.px.bar.width + 1) / 2 | 0
  }

  function ne(e) {
    var t = oe();
    return _e.bars.visible > _e.bars.data.length ? t[1] - (e - (_e.px.bar.spacing + _e.px.bar.width) / 2) / (_e.px.bar.spacing + _e.px.bar.width) | 0 : function (e) {
      return (_e.w - _e.px.lbl.w - _e.px.lbl.tick - 1 - _e.px.bar.spacing / 2 - e) / (_e.px.bar.spacing + _e.px.bar.width) | 0
    }(e)
  }

  function re(e, t) {
    var n = null;
    if (_e.slots[e].hasOwnProperty("main")) {
      if (_e.settings.logscale) return Math.pow(10, (t - _e.log.b) / _e.log.m);
      n = [_e.price.low, _e.price.high]
    } else n = _e.slots[e].i.bounds();
    var r = Math.max(n[1] - n[0], 1e-8), o = (t - _e.slots[e].px) / _e.slots[e].h;
    return n[1] - o * r
  }

  function oe() {
    return void 0 === _e.bars.data || 0 == _e.bars.data.length ? [0, -1] : [Math.max(0, ie(0)), Math.min(_e.bars.data.length - 1, ie(_e.bars.visible))]
  }

  function ie(e) {
    return e + _e.bars.offset - _e.bars.blank
  }

  function se(e) {
    return e - _e.bars.offset + _e.bars.blank
  }

  function ae(e, t) {
    if (e >= _e.w - _e.px.lbl.w - _e.px.lbl.tick - 1) return null;
    if (e < _e.offset) return null;
    if (t >= _e.h - _e.px.lbl.h - 1) return null;
    if (t <= _e.slots[0].px + _e.slots[0].h) return 0;
    for (var n = 1; n < _e.slots.length; n++) {
      if (t < _e.slots[n].px) return -n;
      if (t <= _e.slots[n].px + _e.slots[n].h) return n
    }
  }

  function le(e, t) {
    return !(t < _e.h - _e.px.lbl.h) && (!(e > _e.w - _e.px.lbl.w) && !(e < _e.offset))
  }

  function ce() {
    _e.settings.crosshairs && window.reqAnimFrame(function () {
      N()
    })
  }

  function ue(e, t, n, r, o, i, s) {
    var a = new Array(r, o), l = new Array(i, s);
    e.fillStyle = _e.colors.stroke.arrow, e.strokeStyle = _e.colors.stroke.arrow, e.beginPath(), e.translate(t, n, 0), e.moveTo(a[0], a[1]), e.lineTo(l[0], l[1]), e.fill(), e.stroke(), e.save(), e.translate(l[0], l[1]);
    var c = (l[0] - a[0]) / (l[1] - a[1]);
    c = Math.atan(c), l[1] - a[1] >= 0 ? e.rotate(-c) : e.rotate(Math.PI - c), e.lineTo(-5, -10), e.lineTo(0, -5), e.lineTo(5, -10), e.lineTo(0, 0), e.fill(), e.restore(), e.closePath()
  }

  function pe() {
    _e.canvas.i.on({
      mousedown: function (e) {
        if (!_e.stopEvent && !mobile) {
          _e.mouse.origOffset = _e.bars.offset, _e.mouse.origOffsetBlank = _e.bars.blank, _e.mouse.origSpacing = _e.px.bar.spacing, de(e), _e.mouse.sx = _e.mouse.x, _e.mouse.sy = _e.mouse.y, Ae = e.offsetX, Me = e.offsetY;
          var t = ae(_e.mouse.x, _e.mouse.y);
          if (null == t ? (le(_e.mouse.x, _e.mouse.y) ? (_e.canvas.i.css("cursor", "e-resize"), _e.mouse.zoom = !0, _e.mouse.w0 = +_e.px.bar.width) : _e.canvas.i.css("cursor", "default"), ce()) : t < 0 ? (_e.canvas.i.css("cursor", "n-resize"), _e.mouse.resize = !0, _e.mouse.re_slot = -t, _e.mouse.re_slots.px0 = _e.slots[_e.mouse.re_slot - 1].px, _e.mouse.re_slots.h0 = _e.slots[_e.mouse.re_slot - 1].h, _e.mouse.re_slots.px1 = _e.slots[_e.mouse.re_slot].px, _e.mouse.re_slots.h1 = _e.slots[_e.mouse.re_slot].h, ce()) : (_e.mouse.down = !0, ce(), _e.settings.crosshairs ? (_e.canvas.i.css("cursor", "none"), window.reqAnimFrame(function () {
              M(_e.mouse.x, _e.mouse.y)
            })) : _e.canvas.i.css("cursor", "crosshair")), _e.settings.icontrols && t != _e.mouse.slot) {
            null != t && t >= 0 && $(".control-" + t, _e.element).show();
            var n, r;
            for (n = 0; n < _e.slots.length; n++) n != t && ((r = $(".control-" + n, _e.element)).data("popped") || r.hide())
          }
          _e.mouse.slot = t, me(e), e.preventDefault(), e.stopPropagation()
        }
      }, mouseup: function (e) {
        if (!_e.stopEvent && !mobile && (_e.mouse.down = !1, _e.mouse.resize = !1, _e.mouse.zoom = !1, Math.abs(Ae - e.offsetX) < 1 && Math.abs(Me - e.offsetY) < 1 && (_e.notClicked = !_e.notClicked, $(_e.element).focus(), h()), me(e), le(_e.mouse.x, _e.mouse.y) ? _e.canvas.i.css("cursor", "e-resize") : _e.canvas.i.css("cursor", "none"), e.ctrlKey && e.shiftKey)) {
          ae(_e.mouse.x, _e.mouse.y) >= 0 && _e.settings.crosshairs && (_e.canvas.i.css("cursor", "none"), M(_e.mouse.x, _e.mouse.y)), Ce()
        }
      }, contextmenu: function (e) {
        de(e);
        return ae(_e.mouse.x, _e.mouse.y) >= 0 && _e.settings.crosshairs && (_e.canvas.i.css("cursor", "none"), M(_e.mouse.x, _e.mouse.y)), Ce(), e.stopPropagation(), e.preventDefault(), !1
      }, mouseout: function (e) {
        _e.mouse.down = !1, _e.mouse.resize = !1, _e.mouse.zoom = !1, _e.canvas.i.css("cursor", "none"), ce(), _e.mouse.slot = -1
      }, mousemove: function (e) {
        if (!mobile && ((_e.mouse.down || _e.mouse.resize || _e.mouse.zoom) && (_e.flags.recompute = !0, me(e)), e.offsetY != De || e.offsetX != Oe)) {
          De = e.offsetY, Oe = e.offsetX, de(e);
          var t = ae(_e.mouse.x, _e.mouse.y);
          _e.canvas.i[0].getContext("2d");
          if (null == t ? (le(_e.mouse.x, _e.mouse.y) ? _e.canvas.i.css("cursor", "e-resize") : _e.canvas.i.css("cursor", "default"), ce()) : t < 0 ? (_e.canvas.i.css("cursor", "n-resize"), ce()) : _e.settings.crosshairs ? (_e.canvas.i.css("cursor", "none"), window.reqAnimFrame(function () {
              M(_e.mouse.x, _e.mouse.y)
            })) : _e.canvas.i.css("cursor", "crosshair"), _e.settings.icontrols && t != _e.mouse.slot) {
            null != t && t >= 0 && $(".control-" + t, _e.element).show();
            var n, r;
            for (n = 0; n < _e.slots.length; n++) n != t && ((r = $(".control-" + n, _e.element)).data("popped") || r.hide())
          }
          _e.mouse.slot = t, (_e.mouse.down || _e.mouse.resize || _e.mouse.zoom) && (_e.mouse.down || _e.mouse.zoom ? $(_e.canvas.i).css("cursor", "e-resize") : _e.canvas.i.css("cursor", "n-resize"))
        }
      }, dblclick: function (e) {
        _e.stopEvent || (_e.mode.display, _e.CANDLE, _e.mouse.down = !1)
      }, touchstart: function (e) {
        if (1 == e.originalEvent.touches.length && (timeOutEvent = setTimeout(function () {
            Ee = !0, he(e), $(".chartDetail").show(), $("html,body", parent.document).addClass("hidden")
          }, 300)), _e.mouse.origOffset = _e.bars.offset, _e.mouse.origSpacing = _e.px.bar.spacing, e.originalEvent.touches[0].clientX) _e.mouse.sx = e.originalEvent.touches[0].clientX, _e.mouse.sy = e.originalEvent.touches[0].clientY; else if (e.originalEvent.touches[0].pageX) {
          var t = _e.canvas.i.offset();
          _e.mouse.sx = e.originalEvent.touches[0].pageX - t.left, _e.mouse.sy = e.originalEvent.touches[0].pageY - t.top
        }
        _e.startTouchCoords = [];
        for (var n = 0; n < e.originalEvent.touches.length; ++n) _e.startTouchCoords.push([e.originalEvent.touches[n].clientX, e.originalEvent.touches[n].clientY])
      }, touchmove: function (e) {
        var t, n;
        if (e.originalEvent.touches[0].clientX) t = e.originalEvent.touches[0].clientX, n = e.originalEvent.touches[0].clientY; else if (e.originalEvent.touches[0].pageX) {
          var r = _e.canvas.i.offset();
          t = e.originalEvent.touches[0].pageX - r.left, n = e.originalEvent.touches[0].pageY - r.top
        }
        (Math.abs(_e.mouse.sx - t) > 6 || Math.abs(_e.mouse.sy - n) > 6) && clearTimeout(timeOutEvent), 0 != Ee ? he(e) : function (e) {
          if (_e.bars.allowScale = !0, (new Date).getTime() - _e.lastPinchTime < 1e3) return;
          if (2 == e.originalEvent.touches.length && 2 == _e.startTouchCoords.length) {
            var t = Math.sqrt(Math.pow(_e.startTouchCoords[0][0] - _e.startTouchCoords[1][0], 2) + Math.pow(_e.startTouchCoords[0][1] - _e.startTouchCoords[1][1], 2)),
              n = Math.sqrt(Math.pow(e.originalEvent.touches[0].clientX - e.originalEvent.touches[1].clientX, 2) + Math.pow(e.originalEvent.touches[0].clientY - e.originalEvent.touches[1].clientY, 2)) / t;
            if (n > 1 && (n *= 1.3), n < 1 && (n *= .7), null != n) {
              w = _e.px.bar.width;
              var r = Math.round(_e.px.bar.width * n);
              _e.px.bar.width = r + (r + 1) % 2, _e.px.bar.width < 2 && (_e.px.bar.width = 2), _e.px.bar.width > 51 && (_e.px.bar.width = 51), _e.px.bar.width != w && (ve(), h(), ge()), _e.lastZoomTime = (new Date).getTime()
            }
            return
          }
          if (e.originalEvent.touches.length > 1) return;
          if ((new Date).getTime() - _e.lastZoomTime < 1e3) return;
          _e.flags.recompute = !0, _e.bars.offset = _e.mouse.origOffset + Math.round((e.originalEvent.touches[0].clientX - _e.mouse.sx) / (_e.px.bar.width + _e.px.bar.spacing)), ve(), _e.bars.offset != _e.mouse.origOffset && (h(), ge());
          _e.canvas.i.css("cursor", "e-resize")
        }(e)
      }, touchend: function (e) {
        clearTimeout(timeOutEvent), Ee = !1, $(".chartDetail").hide(), $("html,body", parent.document).removeClass("hidden"), function (e) {
          if (_e.bars.allowScale = !0, 1 == e.originalEvent.changedTouches.length && 1 == _e.startTouchCoords.length && _e.startTouchCoords[0][1] != e.originalEvent.changedTouches[0].clientY && Math.abs((_e.startTouchCoords[0][0] - e.originalEvent.changedTouches[0].clientX) / (_e.startTouchCoords[0][1] - e.originalEvent.changedTouches[0].clientY)) < .15) {
            var t = ae(_e.mouse.sx, _e.mouse.sy), n = 0;
            n = e.originalEvent.changedTouches[0].clientY > _e.startTouchCoords[0][1] ? 1 : -1, 0 == t ? (_e.currentOverlay = (_e.currentOverlay + _e.mobileOverlays.length + n) % _e.mobileOverlays.length, function (e) {
              if (_e.overlays.hasOwnProperty(e)) {
                for (; _e.slots[0].u.length > 0;) p(_e.slots[0].u.length - 1, "u", 0);
                c(e)
              }
            }(_e.mobileOverlays[_e.currentOverlay])) : t > 0 && (_e.currentIndicator = (_e.currentIndicator + _e.mobileIndicators.length + n) % _e.mobileIndicators.length, function (e) {
              if (_e.indicators.hasOwnProperty(e)) {
                for (; _e.slots.length > 2;) f(_e.slots.length - 1);
                u(e)
              }
            }(_e.mobileIndicators[_e.currentIndicator]))
          }
        }(e), ce()
      }
    }), _e.canvas.i.bind("mousewheel", fe), _e.canvas.i.bind("pinch", function (e, t) {
      if (null != t.scale) {
        w = _e.px.bar.width;
        var n = Math.round(_e.px.bar.width * t.scale);
        _e.px.bar.width = n + (n + 1) % 2, _e.px.bar.width < 2 && (_e.px.bar.width = 2), _e.px.bar.width > 51 && (_e.px.bar.width = 51), _e.px.bar.width != w && (ve(), h(), ge()), _e.lastPinchTime = (new Date).getTime()
      }
      t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
    }), RTBTC.handler("barclose", _e.element, Se)
  }

  function fe(e, t, n, r) {
    if (!(_e.stopEvent || _e.notClicked || (stopEvent(e), isNaN(n) || isNaN(r)))) {
      if (0 != n && (_e.mouse.origOffset = _e.bars.offset, _e.bars.offset -= n, ve(), _e.bars.offset != _e.mouse.origOffset && (h(), ge())), 0 != r) {
        var o = _e.px.bar.width;
        _e.px.bar.width += r, be(), _e.px.bar.width < 2 && (_e.px.bar.width = 2), _e.px.bar.width > 51 && (_e.px.bar.width = 51), _e.px.bar.width != o && (ve(), h(), ge())
      }
      localStorage.barWidth = _e.px.bar.width
    }
  }

  function de(e) {
    if (e.offsetX) _e.mouse.x = e.offsetX, _e.mouse.y = e.offsetY; else if (e.pageX) {
      var t = _e.canvas.i.offset();
      _e.mouse.x = e.pageX - t.left, _e.mouse.y = e.pageY - t.top
    }
  }

  function he(e) {
    e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY, de(e);
    var t = ae(_e.mouse.x, _e.mouse.y);
    _e.canvas.i[0].getContext("2d");
    null == t ? ce() : t < 0 ? (_e.canvas.i.css("cursor", "n-resize"), ce()) : _e.settings.crosshairs ? (_e.canvas.i.css("cursor", "none"), window.reqAnimFrame(function () {
      M(_e.mouse.x, _e.mouse.y)
    })) : _e.canvas.i.css("cursor", "crosshair"), _e.mouse.slot = t, e.originalEvent.preventDefault(), e.originalEvent.stopPropagation()
  }

  function ge() {
    oe()[1] > -1 && _e.bars.offset >= _e.bars.data.length - _e.bars.visible + _e.bars.blank + _e.bars.endpad - 3 && Data.loadPrev(we())
  }

  function me(e) {
    if (de(e), _e.mouse.down) if (e.ctrlKey) {
      var t = _e.px.bar.spacing;
      _e.px.bar.spacing = _e.mouse.origSpacing + Math.round((_e.mouse.sx - _e.mouse.x) / 10), _e.px.bar.spacing < 0 && (_e.px.bar.spacing = 0), _e.px.bar.spacing > 51 && (_e.px.bar.spacing = 51), _e.px.bar.spacing != t && (h(), ge())
    } else 0 == _e.mouse.origOffsetBlank && (_e.bars.offset = _e.mouse.origOffset + Math.round((_e.mouse.x - _e.mouse.sx) / (_e.px.bar.width + _e.px.bar.spacing))), 0 == _e.mouse.origOffset && (_e.bars.blank = _e.mouse.origOffsetBlank + Math.round((_e.mouse.sx - _e.mouse.x) / (_e.px.bar.width + _e.px.bar.spacing)), be()), ve(), _e.bars.offset == _e.mouse.origOffset && 0 != _e.bars.offset || (h(), ge()); else if (_e.mouse.zoom) {
      var n = _e.mouse.x - _e.mouse.sx, r = +_e.px.bar.width;
      _e.px.bar.width = _e.mouse.w0 - 2 * (n / 10 | 0), _e.px.bar.width < 3 && (_e.px.bar.width = 3), _e.px.bar.width > 51 && (_e.px.bar.width = 51), _e.px.bar.width != r && (ve(), h(), ge())
    } else if (_e.mouse.resize) {
      var o = _e.mouse.y - _e.mouse.sy;
      if (_e.slots[_e.mouse.re_slot - 1].h = _e.mouse.re_slots.h0 + o, _e.slots[_e.mouse.re_slot - 1].h < _e.px.slotmin && (o = _e.px.slotmin - _e.mouse.re_slots.h0, _e.slots[_e.mouse.re_slot - 1].h = _e.px.slotmin), _e.slots[_e.mouse.re_slot].h = _e.mouse.re_slots.h1 - o, _e.slots[_e.mouse.re_slot].px = _e.mouse.re_slots.px1 + o, _e.slots[_e.mouse.re_slot].h < _e.px.slotmin && (o = _e.mouse.re_slots.h1 - _e.px.slotmin, _e.slots[_e.mouse.re_slot].h = _e.px.slotmin, _e.slots[_e.mouse.re_slot].px = _e.mouse.re_slots.px1 + o), _e.slots[_e.mouse.re_slot - 1].h = _e.mouse.re_slots.h0 + o, _e.slots[_e.mouse.re_slot - 1].h < _e.px.slotmin) {
        var i = (_e.slots[_e.mouse.re_slot - 1].h + _e.slots[_e.mouse.re_slot].h) / 2;
        _e.slots[_e.mouse.re_slot].h = i, _e.slots[_e.mouse.re_slot - 1].h = i, _e.slots[_e.mouse.re_slot].px = _e.slots[_e.mouse.re_slot - 1].px + _e.slots[_e.mouse.re_slot - 1].h + _e.px.pad + 3
      }
      for (var s = 0; s < _e.slots.length; s++) $(".control-" + s, _e.element).css("top", _e.slots[s].px + 3 + "px");
      h()
    }
  }

  function ve() {
    _e.bars.offset > _e.bars.data.length - _e.bars.visible + _e.bars.blank + _e.bars.endpad && (_e.bars.offset = _e.bars.data.length - _e.bars.visible + _e.bars.blank + _e.bars.endpad), _e.bars.offset < 0 && (_e.bars.offset = 0)
  }

  function be() {
    var e = _e.bars.visible, t = 0;
    t = _e.bars.data.length > e ? e / 2 : _e.bars.data.length > e / 2 ? (_e.bars.data.length - e / 2) / 2 : 0, t = parseInt(t), _e.bars.blank > t && (_e.bars.blank = t), _e.bars.blank < 0 && (_e.bars.blank = 0)
  }

  function ye() {
    _e.resize.avail = _e.h - (_e.slots.length * (2 + _e.px.pad) - _e.px.pad - 1 + _e.px.lbl.h), _e.resize.slots = [], _e.resize.pct = [];
    for (var e = 0; e < _e.slots.length; e++) _e.resize.slots.push(_e.slots[e].h), _e.resize.pct.push(_e.slots[e].h / _e.resize.avail);
    a()
  }

  function $e() {
    var e, t, n = (_e.slots.length - 1) * (2 + _e.px.pad) + 1 + _e.px.lbl.h, r = _e.h - n, o = -1, i = 0;
    for (e = 0; e < _e.slots.length; e++) _e.slots[e].h = _e.resize.pct[e] * r | 0, _e.slots[e].px = o, o += _e.slots[e].h + 2 + _e.px.pad, i += _e.slots[e].h;
    for (e = 0; i < r;) {
      for (_e.slots[e % _e.slots.length].h += 1, i += 1, t = 1 + e % _e.slots.length; t < _e.slots.length; t++) _e.slots[t].px += 1;
      e++
    }
    for (e = 0; i > r;) {
      for (_e.slots[e % _e.slots.length].h -= 1, i -= 1, t = 1 + e % _e.slots.length; t < _e.slots.length; t++) _e.slots[t].px -= 1;
      e++
    }
    for (e = 0; e < _e.slots.length; e++) $(".control-" + e, _e.element).css("top", _e.slots[e].px + 3 + "px")
  }

  function xe() {
    $e(), h()
  }

  function we() {
    return _e.period.avail[_e.period.current]
  }

  function ke(e) {
    var t = void 0 === e ? _e.period.avail[_e.period.current] : e;
    return 0 == t ? "Ticks" : t < 60 ? "S" + t : t < 3600 ? "M" + (t / 60 | 0) : t < 86400 ? "H" + (t / 3600 | 0) : t < 604800 ? "D" + (t / 86400 | 0) : t < 2592e3 ? "W" + (t / 604800 | 0) : (t / 2592e3 | 0) + "M"
  }

  function Te() {
    var e = RTBTC.exchangeName() + " " + RTBTC.base() + "/" + RTBTC.quote() + ", " + function () {
      switch (_e.mode.current) {
        case _e.TIME_BAR:
          return ke();
        case _e.VOL_BAR:
          return function (e) {
            var t = void 0 === e ? _e.volume.avail[_e.volume.current] : e;
            return (t |= 0) < 1e3 ? "V" + t : t < 1e6 ? "V" + ~~(t / 1e3) + "K" : t < 1e9 ? "V" + ~~(t / 1e6) + "M" : "V" + ~~(t / 1e9) + "B"
          }();
        default:
          return ""
      }
    }();
    _e.module.setTitle(e)
  }

  function Se(e) {
    void 0 === e && (e = we());
    var t = +e;
    isNaN(t) || _e.mode.current == _e.TIME_BAR && e == _e.period.avail[_e.period.current] && (DEBUG && Pe("handling bar close for period: " + e), _e.bars.data = Data.data.bars[e], h())
  }

  function Ce() {
    if (!mobile) {
      var e, t, n, r, o = _e.font.headingSize, i = 1.25 * o, s = 2.75 * i | 0,
        a = $("<canvas/>").attr("width", _e.w).attr("height", _e.h + s), l = a[0].getContext("2d"),
        c = RTBTC.base() + "/" + RTBTC.quote(), u = ", " + function (e) {
          var t = void 0 === e ? _e.period.avail[_e.period.current] : e;
          return 0 == t ? _("Ticks") : t < 60 ? t + " NaN" : t < 3600 ? (t / 60 | 0) + " " + _("minute") : t < 86400 ? (t / 3600 | 0) + " " + _("hour") : t < 604800 ? (t / 86400 | 0) + " " + _("day") : t < 2592e3 ? (t / 604800 | 0) + " " + _("week") : (t / 2592e3 | 0) + " " + _("month")
        }() + " " + _("bars"), p = oe(), f = Settings.localTime;
      if (l.fillStyle = _e.colors.fill.blankBG, l.fillRect(0, s, _e.w, _e.h), l.fillStyle = _e.colors.fill.bg, l.fillRect(0, 0, _e.w, s), l.fillStyle = _e.colors.stroke.crosshair, l.font = _e.font.headingBold, l.textBaseline = "middle", n = l.measureText(c).width, e = l.measureText(_e.watermark).width, t = _e.w - e - o, p[1] >= p[0]) {
        for (l.fillText(c, o / 2, i), l.font = _e.font.heading, l.fillStyle = _e.colors.fill.slottext, l.fillText(u, o / 2 + n, i, t - n), r = p[1]; r > p[0]; r--) if (r < _e.bars.data.length) {
          u = B(_e.bars.data[r][0], !0, f) + " " + R(_e.bars.data[r][0], f);
          break
        }
        for (u += " - ", r = p[0]; r < p[1]; r++) if (r >= 0) {
          u += B(_e.bars.data[r][0], !0, f) + " " + R(_e.bars.data[r][0], f);
          break
        }
        l.fillText(u, o / 2, 2 * i, t - _e.px.lbl.tick - _e.px.lbl.w)
      } else l.fillText(c, o / 2, 2 * i), l.font = _e.font.heading, l.fillStyle = _e.colors.fill.slottext, l.fillText(u, o / 2 + n, 2 * i, t - n);
      l.fillText(_e.watermark, _e.w - e - o / 2 - _e.px.lbl.tick - _e.px.lbl.w, 2 * i), l.drawImage(_e.canvas.base[0], 0, s), l.drawImage(_e.canvas.bg[0], 0, s), l.drawImage(_e.canvas.main[0], 0, s), l.drawImage(_e.canvas.fg[0], 0, s), l.drawImage(_e.canvas.orders[0], 0, s), l.drawImage(_e.canvas.lbl[0], 0, s), l.drawImage(_e.canvas.line[0], 0, s), l.drawImage(_e.canvas.i[0], 0, s), l.strokeStyle = _e.colors.stroke.border, l.lineWidth = 1, l.beginPath(), Q(l, 0, s), K(l, _e.w - _e.px.lbl.tick - _e.px.lbl.w, s), l.stroke();
      var d = a[0].toDataURL("image/png");
      if (has_dataURI()) window.open(d, "_blank"); else {
        var h = window.open(BASE_URL + "blank.html");
        h.data = '<img src="' + d + '"/>', h.document.write(h.data), h.focus()
      }
    }
  }

  var _e = {
    element: "",
    parent: null,
    module: null,
    self: null,
    canvas: {base: null, bg: null, main: null, fg: null, orders: null, lbl: null, i: null, line: null},
    w: 0,
    h: 0,
    mode: {current: 0, avail: ["Time Bars"], display: 0, avail_display: ["Candle", "OHLC", "HLC", "Line"]},
    TIME_BAR: 0,
    CANDLE: 0,
    OHLC: 1,
    HLC: 2,
    LINE: 3,
    MOUNTAIN: 4,
    BANDS: 5,
    PSAR: 6,
    HIST: 7,
    LBLHIST: 8,
    period: {
      current: 13,
      string: "M15",
      avail: [2592e3, 604800, 259200, 86400, 43200, 28800, 21600, 14400, 7200, 3600, 2700, 1800, 900, 300, 180, 60, 0]
    },
    bars: {
      visible: -1,
      offset: 0,
      blank: 0,
      endpad: 0,
      data: [],
      noload: {},
      startTime1: "9:30:00",
      endTime1: "11:30:00",
      startTime2: "13:00:00",
      endTime2: "15:00:00",
      ticks: [],
      fixTime: !1
    },
    slots: [{main: !0, px: 0, h: 50, u: [{t: "ema", i: null, s: [5]}], o: []}, {
      t: "vol",
      i: null,
      px: 5,
      h: 10,
      s: []
    }],
    resize: {avail: 0, slots: [], pct: []},
    price: {high: 100, low: 50, range: 50, bid: NaN, ask: NaN},
    log: {m: 0, b: 0, b10: 0},
    px: {
      pad: 5,
      lbl: {w: 65, h: 14, tick: 5, halftick: 2, font: 11},
      bar: {width: 7, dx: 4, spacing: 1},
      price: 1,
      crosshairs: {x: 0, y: 0},
      slotmin: 50
    },
    flags: {redraw: {base: !0, main: !0, underlay: !0, overlay: !0, inds: !0}, recompute: !0, widget: !1},
    mouse: {
      down: !1,
      zoom: !1,
      w0: null,
      x: 0,
      y: 0,
      bar: null,
      sx: 0,
      sy: 0,
      origOffset: 0,
      origSpacing: 1,
      resize: !1,
      re_slot: 0,
      re_slots: {px0: 0, h0: 0, px1: 0, h1: 0},
      slot: -1
    },
    colors: Colors.c,
    lastColorIndex: 0,
    defaultColors: null,
    SOLID: 0,
    DOTTED: 1,
    DASHED: 2,
    DASHDOT: 3,
    font: {
      precision: 2,
      labels: mobile ? '10px/1.0em  "Microsoft YaHei", Arial, sans-serif' : '11px/1.0em  Consolas, "Courier New", monospace',
      size: 11,
      lineHeight: 1,
      face: ' "Microsoft YaHei", Consolas, "Courier New", monospace',
      indicators: '10px/1.0em  "Microsoft YaHei", Arial, sans-serif',
      heading: '12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
      headingBold: 'bold 12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
      headingSize: 12
    },
    watermark: "bijietech.com",
    settings: {repaint: !0, grid: !0, crosshairs: !0, icontrols: !0, bidask: !0, logscale: !1, userorders: !1},
    indicators: {
      macd: "MACD",
      kdj: "KDJ",
      cci: "Commodity Channel Index",
      dmi: "Directional Movement Index",
      obv: "On-Balance Volume",
      rsi: "Relative Strength Index",
      sto: "Stochastic Oscillator",
      storsi: "Stochastic RSI",
      vol: "Volume",
      wpr: "Williams %R",
      emv: "Ease of movement value",
      mtm: "Momentum"
    },
    mobileIndicators: ["macd", "kdj", "cci", "dmi", "obv", "rsi", "sto", "storsi", "wpr", "emv", "mtm", "avl"],
    currentIndicator: 0,
    overlays: {
      ema: "Exponential Moving Average",
      bnd: "Bollinger Bands &reg;",
      psar: "Parabolic SAR",
      dcn: "Price Channels",
      sma: "Simple Moving Average",
      vwap: "Volume Weighted Average Price",
      trix: "Triple Exponentially Smoothed Average",
      avl: "avl",
      ma: "ma"
    },
    mobileOverlays: ["ema", "bnd", "psar", "dcn", "sma", "vwap", "trix", "avl", "ma"],
    currentOverlay: 0,
    lastPinchTime: -1,
    lastZoomTime: -1,
    startTouchCoords: [],
    crossHairH: !0,
    setShowRateOnLeft: !1,
    data: {},
    curIndex: 1,
    offset: 0,
    preClose: 0,
    showMainCrosshairs: !0,
    stopEvent: !1,
    preTradingDay: 0,
    notClicked: !0,
    debug: RTBTC.isDebug()
  }, Pe = RTBTC.debug;
  Date.prototype.Format = function (e) {
    var t = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    return e
  };
  var Ee, Ae, Me,
    Ne = [_("Jan"), _("Feb"), _("Mar"), _("Apr"), _("May"), _("Jun"), _("Jul"), _("Aug"), _("Sep"), _("Oct"), _("Nov"), _("Dec")],
    De = 0, Oe = 0;
  return {
    build: function (e, n, r) {
      return _e.element = e, _e.parent = n, $(_e.element).empty(), _e.w = $(_e.element).width(), _e.h = $(_e.element).height(), DEBUG && Pe("#######################_P.w, h: " + _e.w + ", " + _e.h), _e.canvas.base = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 100), _e.canvas.bg = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 101), _e.canvas.main = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 102), _e.canvas.fg = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 103), _e.canvas.orders = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 104), _e.canvas.lbl = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 105), _e.canvas.line = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 106).attr("id", "line"), _e.canvas.i = $("<canvas/>").attr("width", _e.w + "px").attr("height", _e.h + "px").attr("z-index", 107), $(_e.element).append(_e.canvas.base).append(_e.canvas.bg).append(_e.canvas.main).append(_e.canvas.fg).append(_e.canvas.orders).append(_e.canvas.lbl).append(_e.canvas.line).append(_e.canvas.i), _e.canvas.line[0].getContext("2d"), pe(), t(r), function () {
        var e, t, n;
        for (e = 0; e < _e.slots.length; e++) {
          if (_e.slots[e].hasOwnProperty("main")) {
            for (t = 0; t < _e.slots[e].u.length; t++) n = void 0 !== _e.slots[e].u[t].c && null != _e.slots[e].u[t].c ? _e.slots[e].u[t].c : b(e), _e.slots[e].u[t].i = (new Indicator).build(_e.slots[e].u[t].t, _e.slots[e].u[t].s).color(n);
            for (t = 0; t < _e.slots[e].o.length; t++) n = void 0 !== _e.slots[e].o[t].c && null != _e.slots[e].o[t].c ? _e.slots[e].o[t].c : b(e), _e.slots[e].o[t].i = (new Indicator).build(_e.slots[e].o[t].t, _e.slots[e].o[t].s).color(n)
          } else _e.slots[e].i = (new Indicator).build(_e.slots[e].t, _e.slots[e].s);
          _e.slots[e].control = i(e), $(_e.element).append(_e.slots[e].control)
        }
      }(), $(_e.element).attr("tabindex", 0).keydown(function (e) {
        if (37 == e.keyCode || 39 == e.keyCode) {
          if (_e.mouse.x < 0 && (_e.mouse.x = 0), _e.mouse.x > ee(0) && (_e.mouse.x = ee(0)), 37 == e.keyCode) {
            _e.mode.display, _e.CANDLE;
            var t = _e.mouse.x - _e.px.bar.width - _e.px.bar.spacing;
            (n = ne(t < 0 ? 0 : t)) > _e.bars.visible - 4 ? ie(n) < _e.bars.data.length && (_e.bars.offset++, h()) : (_e.mouse.x -= _e.px.bar.width + _e.px.bar.spacing, _e.mouse.x < 0 && (_e.mouse.x = 0))
          } else if (39 == e.keyCode) {
            var n = ne(_e.mouse.x + _e.px.bar.width + _e.px.bar.spacing);
            0 == n && _e.bars.offset > 0 ? (_e.bars.offset--, h()) : _e.mouse.x += _e.px.bar.width + _e.px.bar.spacing
          }
          _e.bars.data[ie(ne(_e.mouse.x))] && (_e.mouse.y = Z(_e.bars.data[ie(ne(_e.mouse.x))][4], 0)), window.reqAnimFrame(function () {
            M(_e.mouse.x, _e.mouse.y, !0)
          })
        }
      }), o(), window.setTimeout(function () {
        RTBTC.trigger("what-theme", null)
      }, 100), $(_e.element).on("mouseleave", function () {
        !function () {
          var e, t;
          for (e = 0; e < _e.slots.length; e++) (t = $(".control-" + e, _e.element)).data("popped") || t.hide()
        }()
      }), $(_e.element).on("keydown", function (e) {
        38 == e.keyCode && fe(_e.element, 0, 0, 1), 40 == e.keyCode && fe(_e.element, 0, 0, -1)
      }), this
    }, lblWidth: function () {
      return _e.px.lbl.w
    }, module: function (e) {
      return _e.module = e, Te(), RTBTC.handler("barclose", _e.module.id(), _e.self.onBarClose), RTBTC.handler("theme", _e.module.id(), _e.self.onTheme), RTBTC.handler("trade", _e.module.id(), _e.self.onTrade), RTBTC.handler("bidask", _e.module.id(), _e.self.bidask), RTBTC.handler("orders", _e.module.id(), m), RTBTC.handler("order-canceled", _e.module.id(), function () {
        var e = _e.canvas.orders[0].getContext("2d");
        DEBUG && Pe("Chart refreshing user orders.");
        try {
          m(e)
        } catch (e) {
          DEBUG && Pe("Could not clear user orders"), DEBUG && console.error(e)
        }
      }), this
    }, self: function (e) {
      return _e.self = e, this
    }, settings: function () {
      return function () {
        var e, t = [], n = [], r = [{val: 0, text: _("Indicator…")}], o = [{val: 0, text: _("Overlay…")}];
        for (e = 0; e < _e.period.avail.length; e++) t.push({val: _e.period.avail[e], text: ke(_e.period.avail[e])});
        for (e = 0; e < _e.mode.avail_display.length; e++) n.push({val: e, text: _e.mode.avail_display[e]});
        for (e in _e.indicators) _e.indicators.hasOwnProperty(e) && r.push({val: e, text: _e.indicators[e]});
        for (e in _e.overlays) _e.overlays.hasOwnProperty(e) && o.push({val: e, text: _e.overlays[e]});
        return [$("<p/>").append(RTBTC.select(_e.period.avail[_e.period.current], t, function (e) {
          _e.period.current = _e.period.avail.indexOf(+e), Te(), h()
        })).append($("<span/>").addClass("control-label").html(_("Time Period"))), $("<p/>").append(RTBTC.select(_e.mode.display, n, function (e) {
          _e.mode.display = +e, h()
        })).append($("<span/>").addClass("control-label").html(_("Draw Style"))), $("<p/>").append(RTBTC.toggle(_e.settings.bidask, function () {
          _e.settings.bidask = !0
        }, function () {
          _e.settings.bidask = !1
        }, function () {
          h()
        })).append($("<span/>").addClass("control-label").html(_("Show Bid / Ask"))), $("<p/>").append(RTBTC.toggle(_e.settings.crosshairs, function () {
          _e.settings.crosshairs = !0
        }, function () {
          _e.settings.crosshairs = !1
        }, function () {
          h()
        })).append($("<span/>").addClass("control-label").html(_("Show Crosshair"))), $("<p/>").append(RTBTC.toggle(_e.settings.grid, function () {
          _e.settings.grid = !0
        }, function () {
          _e.settings.grid = !1
        }, function () {
          h()
        })).append($("<span/>").addClass("control-label").html(_("Show Grid"))), $("<p/>").append(RTBTC.toggle(_e.settings.icontrols, function () {
          _e.settings.icontrols = !0
        }, function () {
          _e.settings.icontrols = !1;
          for (var e = 0; e < _e.slots.length; e++) $(".control-" + e, _e.element).hide().data("popped", !1)
        }, function () {
          h()
        })).append($("<span/>").addClass("control-label").html(_("Show Indicator Controls"))), $("<p/>").append(RTBTC.toggle(_e.settings.logscale, function () {
          _e.settings.logscale = !0
        }, function () {
          _e.settings.logscale = !1
        }, function () {
          h()
        })).append($("<span/>").addClass("control-label").html(_("Logarithmic Scale"))), $("<p/>").append(RTBTC.select(0, o, function (e) {
          0 != +e && c(e)
        }, !0)).append($("<span/>").addClass("control-label").html(_("Add Overlay"))), $("<p/>").append(RTBTC.select(0, r, function (e) {
          0 != +e && u(e)
        }, !0)).append($("<span/>").addClass("control-label").html(_("Add Indicator"))), $("<p/>").append(RTBTC.toggle(_e.settings.userorders, function () {
          _e.settings.userorders = !0
        }, function () {
          _e.settings.userorders = !1
        }, function () {
          h()
        })).append($("<span/>").addClass("control-label").html(_("Show User Orders")))]
      }()
    }, save: function () {
      return function () {
        var e, t, n = {};
        for (n.r = _e.settings.repaint, n.g = _e.settings.grid, n.c = _e.settings.crosshairs, n.k = _e.settings.icontrols, n.b = _e.settings.bidask, n.l = _e.settings.logscale, n.o = _e.settings.userorders, n.m = +~~_e.mode.current, n.d = +~~_e.mode.display, n.t = +~~_e.period.avail[_e.period.current], n.w = +~~_e.px.bar.width, n.s = +~~_e.px.bar.spacing, n.i = [], e = 0; e < _e.slots.length; e++) if (_e.slots[e].hasOwnProperty("main")) {
          var r, o = [], i = [];
          for (t = 0; t < _e.slots[e].o.length; t++) r = b(e, t, "o"), o.push({
            t: _e.slots[e].o[t].t,
            s: _e.slots[e].o[t].i.settings(),
            c: r
          });
          for (t = 0; t < _e.slots[e].u.length; t++) r = b(e, t, "u"), i.push({
            t: _e.slots[e].u[t].t,
            s: _e.slots[e].u[t].i.settings(),
            c: r
          });
          n.i.push({m: !0, p: +~~_e.slots[e].px, h: +~~_e.slots[e].h, o: o, u: i})
        } else n.i.push({
          m: !1,
          t: _e.slots[e].t,
          p: +~~_e.slots[e].px,
          h: +~~_e.slots[e].h,
          r: _e.slots[e].i.settings()
        });
        return n
      }()
    }, load: function (e) {
      t(e), h()
    }, unload: function () {
      RTBTC.unregisterAll(_e.module.id())
    }, onBarClose: function (e) {
      Se(e)
    }, onTheme: function (e) {
      !function (e) {
        Colors.hasOwnProperty(e) && (_e.colors = Colors[e]), h()
      }(e)
    }, setPreClose: function (e) {
      _e.preClose = Number(e)
    }, showDetail: function () {
      o()
    }, onTrade: function (e) {
      h()
    }, wheel: function (e) {
      fe(_e.element, 0, 0, -e)
    }, loadTicks: function (e) {
      var t = _e.bars.ticks;
      _e.bars.ticks = [];
      for (var o = 0; o < e.length; o++) r(e[o]) && _e.bars.ticks.push(e[o]);
      return 0 == _e.bars.ticks.length ? (_e.bars.ticks = t, Pe("Failed to load any new ticks!")) : (!function () {
        var e;
        if (_e.bars.data = [], 0 != _e.period.avail[_e.period.current]) for (_e.bars.data.push([_e.bars.ticks[0][0], _e.bars.ticks[0][1], _e.bars.ticks[0][1], _e.bars.ticks[0][1], _e.bars.ticks[0][1], _e.bars.ticks[0][2]]), e = 1; e < _e.bars.ticks.length; e++) n(_e.bars.ticks[e]); else for (e = 0; e < _e.bars.ticks.length; e++) _e.bars.splice(0, 0, [_e.bars.ticks[e][0], _e.bars.ticks[e][1], _e.bars.ticks[e][1], _e.bars.ticks[e][1], _e.bars.ticks[e][1], _e.bars.ticks[e][2]])
      }(), d()), this
    }, loadBars: function (e) {
      var t, n, o = _e.bars.ticks, i = _e.bars.data;
      if (e.length > 0) {
        for (_e.bars.ticks = [], t = e.length - 1; t >= 0; t--) r(n = [e[t][0], e[t][1], e[t][5] / 4]) && _e.bars.ticks.push(n), r(n = [e[t][0], e[t][2], e[t][5] / 4]) && _e.bars.ticks.push(n), r(n = [e[t][0], e[t][3], e[t][5] / 4]) && _e.bars.ticks.push(n), r(n = [e[t][0], e[t][4], e[t][5] / 4]) && _e.bars.ticks.push(n);
        _e.bars.ticks.length > 0 ? (_e.bars.data = e, _e.flags.redrawBG = !0, _e.flags.recompute = !0, d()) : (_e.bars.ticks = o, _e.bars.data = i)
      }
      return this
    }, tick: function (e) {
      var t = _e.bars.data.length;
      r(e) && (_e.bars.ticks.push([e[0], e[1], e[2]]), n(e), _e.bars.data.length > t && (_e.flags.redrawFG = !0), d())
    }, bar: function (e) {
      _e.bars.data.length;
      if (_e.bars.data.length > 0) {
        if (e[0] < _e.bars.data[0][0]) return;
        if (e[0] == _e.bars.data[0][0] && e[5] <= _e.bars.data[0][5]) return;
        e[0] == _e.bars.data[0][0] ? _e.bars.data[0] = e : (_e.bars.data.splice(0, 0, e), _e.flags.redrawFG = !0)
      } else _e.bars.data.splice(0, 0, e), _e.flags.redrawFG = !0;
      _e.flags.recompute = !0, d()
    }, bidask: function (e) {
      var t = !1;
      return e.hasOwnProperty("bid") && _e.price.bid != e.bid && (_e.price.bid = e.bid, t = !0), e.hasOwnProperty("ask") && _e.price.ask != e.ask && (_e.price.ask = e.ask, t = !0), t && (_e.flags.redraw.main = !0, d()), this
    }, resize: function () {
      e(), ye(), window.reqAnimFrame(function () {
        var e = $(_e.element).width(), t = $(_e.element).height();
        _e.w == e && _e.h == t || (_e.w = e, _e.h = t, DEBUG && Pe("@@@@@@@_P.w, h: " + _e.w + ", " + _e.h), $("canvas", _e.element).each(function (e, t) {
          $(t).attr("width", _e.w + "px").attr("height", _e.h + "px")
        }), $("canvas", _e.element).attr("val", !1), $e(), _e.canvas.i[0].getContext("2d"), _e.canvas.line[0].getContext("2d"), h())
      }), xe()
    }, drag: function (e) {
      switch (e) {
        case"start":
          a()
      }
    }, widget: function (e) {
      return null == e || void 0 === e ? _e.flags.widget : (_e.flags.widget = e, this)
    }, addIndicator: function (e) {
      return u(e), this
    }, addOrUpdateIndicator: function (e, t) {
      return _e.indicators.hasOwnProperty(e) ? u(e) : _e.overlays.hasOwnProperty(e) && c(e, t), this
    }, removeIndicator: function () {
      for (; _e.slots.length > 2;) f(_e.slots.length - 1);
      for (; _e.slots[0].u.length > 1;) p(_e.slots[0].u.length - 1, "u", 0);
      return this
    }, addOverlay: function (e, t) {
      c(e, t)
    }, removeIndicatorByname: function (e) {
      return e instanceof Array && e.forEach(function (e) {
        for (var t = _e.slots[0].u, n = t.length, r = 0; r < n; r++) t[r] && t[r].t == e && p(r, "u", 0);
        for (var o = _e.slots, i = 0; i < o.length; i++) o[i].t == e && f(i)
      }), this
    }, setResolution: function (e) {
      return _e.period.avail.indexOf(e) >= 0 && _e.period.current != _e.period.avail.indexOf(e) && (_e.period.current = _e.period.avail.indexOf(e), _e.bars.offset = 0, _e.bars.blank = 0), Data.setup(e), this
    }, crossHairH: function (e) {
      _e.crossHairH = e
    }, fixTime: function (e) {
      _e.bars.fixTime = e, _e.offset = e ? 40 : 0, _e.bars.offset = 0, _e.settings.grid = !0
    }, setBarwidth: function (e) {
      _e.px.bar.width = e
    }, setData: function (e) {
      _e.data = e
    }, clearData: function () {
      Data.data.bars[we()] = [], h()
    }, setOffset: function (e) {
      _e.offset = e
    }, setShowRateOnLeft: function (e) {
      _e.setShowRateOnLeft = e
    }, setLastColorIndex: function (e) {
      _e.lastColorIndex = e
    }, setMode: function (e) {
      return _e.mode.avail_display.indexOf(e) >= 0 && _e.mode.display != _e.mode.avail_display.indexOf(e) && (_e.mode.display = _e.mode.avail_display.indexOf(e)), $(".icontrol", _e.element).css("left", _e.offset + 2 + "px"), this
    }, setCrossHair: function (e) {
      _e.showMainCrosshairs = e, _e.stopEvent = !e, e ? (_e.canvas.i.removeClass("showHand"), 0 == $("#chartCtrlFixed").length && o()) : (_e.canvas.i.addClass("showHand"), $("#chartCtrlFixed").remove())
    }, getMode: function () {
      return _e.mode.display
    }, getInernal: function () {
      return _e.yToVal = re, _e.xToBar = ne, _e.toPxX = ee, _e.barToIndex = ie, _e.toPxY = Z, _e
    }, getCurDay: function () {
      if (_e.bars.data[_e.curIndex]) return $("#chartCtrlFixed").hide(), _e.bars.data[_e.curIndex][0]
    }, getPerClose: function () {
      if (_e.bars.data[_e.curIndex + 1]) return _e.bars.data[_e.curIndex + 1][4]
    }, LblWidthChangeEvent: function (e) {
      _e.LblWidthChange = e
    }, showHighlowPriceAtAngles: function () {
      _e.colors.stroke.priceShow = !0
    }, setMainSlotHeightPercent: function (e) {
      _e.mainSlotHeightPercent = e
    }, redraw: function () {
      h()
    }, isIndicator: function (e) {
      return !!_e.indicators[e]
    }, internals: (_e.debug, function () {
      return _e
    })
  }
};
Date.prototype.get8Date = function () {
  var e = 6e4 * this.getTimezoneOffset(), t = this.getTime() + e;
  return new Date(t + 288e5)
};
var Currency = function () {
  var e = [], t = {
    AUD: {symbol: "$", before: !0, digits: 2, name: _("Australian dollar")},
    BTC: {symbol: "BTC", before: !1, digits: 8, name: _("Bitcoin")},
    USDT: {symbol: "USDT", before: !1, digits: 2, name: _("USDT")},
    ANS: {symbol: "ANS", before: !1, digits: 8, name: _("Antshares")},
    BNB: {symbol: "BNB", before: !1, digits: 8, name: _("Binance")},
    ETH: {symbol: "ETH", before: !1, digits: 8, name: _("Ethereum")},
    123: {symbol: "123", before: !1, digits: 8, name: _("123")},
    456: {symbol: "456", before: !1, digits: 8, name: _("456")},
    CAD: {symbol: "$", before: !0, digits: 2, name: _("Canadian dollar")},
    CHF: {symbol: "S₣", before: !1, digits: 2, name: _("Swiss franc")},
    CLP: {symbol: "$", before: !0, digits: 2, name: _("Chilean peso")},
    CNY: {symbol: "CNY", before: !1, digits: 2, name: _("Chinese yuan")},
    DKK: {symbol: "kr", before: !1, digits: 2, name: _("Danish krone")},
    EUR: {symbol: "€", before: !0, digits: 2, name: _("Euro")},
    GBP: {symbol: "£", before: !0, digits: 2, name: _("Pound sterling")},
    HKD: {symbol: "圓", before: !0, digits: 2, name: _("Hong Kong dollar")},
    JPY: {symbol: "¥", before: !0, digits: 2, name: _("Japanese yen")},
    FTC: {symbol: "FTC", before: !1, digits: 8, name: _("Feathercoin")},
    LTC: {symbol: "Ł", before: !0, digits: 6, name: _("Litecoin")},
    NMC: {symbol: "ℕ", before: !0, digits: 8, name: _("Namecoin")},
    NVC: {symbol: "NVC", before: !1, digits: 8, name: _("Novacoin")},
    NOK: {symbol: "kr", before: !1, digits: 2, name: _("Norwegian krone")},
    NZD: {symbol: "$", before: !0, digits: 2, name: _("New Zealand dollar")},
    PLN: {symbol: "zł", before: !1, digits: 2, name: _("Polish złoty")},
    PPC: {symbol: "PPC", before: !1, digits: 8, name: _("Peercoin")},
    RUB: {symbol: "руб", before: !1, digits: 2, name: _("Russian ruble")},
    SEK: {symbol: "kr", before: !1, digits: 2, name: _("Swedish krona")},
    SGD: {symbol: "S", before: !0, digits: 2, name: _("Singapore dollar")},
    THB: {symbol: "฿", before: !0, digits: 2, name: _("Thai baht")},
    TRC: {symbol: "TRC", before: !1, digits: 8, name: _("Terracoin")},
    USD: {symbol: "$", before: !0, digits: 2, name: _("United States dollar")},
    XPM: {symbol: "Ψ", before: !0, digits: 8, name: _("Primecoin")}
  };
  for (var n in t) t.hasOwnProperty(n) && e.push(n);
  return e.sort(), {
    list: function () {
      return e
    }, before: function (e) {
      try {
        return t[e].before
      } catch (e) {
        return !0
      }
    }, fullname: function (e) {
      try {
        return t[e].name
      } catch (e) {
        return _("Currency")
      }
    }, format: function (e, n, r) {
      try {
        null == r && (r = t[e].digits);
        var o = numberWithCommas((n = parseFloat(n)).toFixed(r));
        return t[e].before ? t[e].symbol + o : o + " " + t[e].symbol
      } catch (e) {
        return "¤0.00"
      }
    }, symbol: function (e) {
      try {
        return t[e].symbol
      } catch (e) {
        return "¤"
      }
    }, valid: function (e) {
      return t.hasOwnProperty(e)
    }
  }
}(), OrderBookDaemon = function () {
  var e = null;
  return new function () {
    this.Build = function () {
      return null == e && ((e = new function () {
        var e = {book: {bid: {price: [], amount: []}, ask: {price: [], amount: []}}};
        return {
          book: e.book, sumToPrice: function (t, n) {
            return function (t, n) {
              var r = 0, o = 0, i = RTBTC.baseInt();
              if (t *= RTBTC.quoteInt(), "bid" == n) for (o = 0; o < e.book.bid.price.length && !(e.book.bid.price[o] < t); o++) r += e.book.bid.amount[o] / i; else if ("ask" == n) for (o = 0; o < e.book.ask.price.length && !(e.book.ask.price[o] > t); o++) r += e.book.ask.amount[o] / i;
              return r
            }(t, n)
          }, loadBook: function (t, n, r) {
            e.book.bid.price = [], e.book.bid.amount = [], e.book.ask.price = [], e.book.ask.amount = [];
            var o = Object.keys(n).sort(function (e, t) {
              return e - t
            }).reverse(), i = Object.keys(t).sort(function (e, t) {
              return e - t
            });
            o.slice(0, r || 20).forEach(function (t) {
              e.book.bid.price.push(parseFloat(t)), e.book.bid.amount.push(n[t])
            }), i.slice(0, r || 20).forEach(function (n) {
              e.book.ask.price.push(parseFloat(n)), e.book.ask.amount.push(t[n])
            }), RTBTC.trigger("newbook", null)
          }
        }
      }).constructor = null), e
    }
  }
}(), OBD = null, TWOPI = 2 * Math.PI, OBD = OrderBookDaemon.Build(), VisualDepth = function () {
  function e(e) {
    if (void 0 !== e) {
      var t = new Validator, n = (new Validator).create(t.FLOAT), r = (new Validator).create(t.BOOL);
      A.settings.grid = r.set(A.settings.grid).set(e.g).get(), A.settings.fill = r.set(A.settings.fill).set(e.f).get(), A.price.scale = n.set(A.price.scale).set(e.s).get()
    }
  }

  function t() {
    var e = A.canvas.bg[0].getContext("2d"), t = A.canvas.bidFill[0].getContext("2d"),
      n = A.canvas.askFill[0].getContext("2d"), a = A.canvas.bid[0].getContext("2d"),
      u = A.canvas.ask[0].getContext("2d"), p = A.canvas.axes[0].getContext("2d"), h = A.canvas.lbl[0].getContext("2d");
    if (A.flags.recompute && function (e) {
        A.price.low, A.price.high;
        var t = RTBTC.quoteInt(), n = !1, r = (N = OBD.book).bid.price, o = N.ask.price;
        if (0 == r.length && o.length > 0) N.bid.price = [o[0]], N.bid.amount = [N.ask.amount[0]]; else if (r.length > 0 && 0 == o.length) N.ask.price = [r[0]], N.ask.amount = [N.bid.amount[0]]; else if (0 == r.length && 0 == o.length) return;
        if (N.bid.price.length > 0 && N.ask.price.length > 0) {
          A.price.low < N.bid.price[N.bid.price.length - 1] / t && (n = !0, DEBUG && M("New low price: " + A.price.low)), A.price.high > N.ask.price[N.ask.price.length - 1] / t && (n = !0, DEBUG && M("New high price: " + A.price.high)), A.price.low > N.bid.price[N.bid.price.length - 1] / t && DEBUG && M("New low price: " + A.price.low), A.price.high < N.ask.price[N.ask.price.length - 1] / t && DEBUG && M("New high price: " + A.price.high);
          var i = (N.ask.price[0] + N.bid.price[0]) / 2;
          i * (1 - A.price.scale) > 0 && (A.price.high = i * (1 + A.price.scale), A.price.low = i * (1 - A.price.scale)), (0 == r.length || 1 == r.length && r[0] == o[0]) && o.length > 0 ? A.price.low < 0 && (A.price.low = 0) : r.length > 0 && (0 == o.length || 1 == o.length && (o[0], r[0])), A.allowScale ? A.allowScale = !1 : A.price.range = A.price.high - A.price.low, A.price.range = A.price.high - A.price.low, n && (DEBUG && M(A.price), A.price.range = A.price.high - A.price.low, A.price.range <= 0 && (A.price.range = 1), A.price.high < A.price.low && (A.price.high = A.price.low + 1 / RTBTC.quoteInt()), A.price.scale < A.price.minScale ? A.price.scale = A.price.minScale : A.price.scale > A.price.maxScale && (A.price.scale = A.price.maxScale), DEBUG && M("Scale: " + A.price.scale + ", range: " + A.price.range))
        }
        var s, a = 0;
        for (A.sums.bid = [], s = 0; s < N.bid.amount.length && (a += N.bid.amount[s] / RTBTC.baseInt(), A.sums.bid[s] = a, !(N.bid.price[s] / t < A.price.low)); s++) ;
        for (a = 0, A.sums.ask = [], s = 0; s < N.ask.amount.length && (a += N.ask.amount[s] / RTBTC.baseInt(), A.sums.ask[s] = a, !(N.ask.price[s] / t > A.price.high)); s++) ;
        var l = 0, c = 0;
        l = N.ask.price[A.sums.ask.length - 1] > A.price.high ? A.sums.ask[A.sums.ask.length - 2] : A.sums.ask[A.sums.ask.length - 1];
        c = N.bid.price[A.sums.bid.length - 1] < A.price.low ? A.sums.bid[A.sums.bid.length - 2] : A.sums.bid[A.sums.bid.length - 1];
        A.volume = Math.max(l, c), A.volume *= 1.15, A.flags.recompute = !1, A.flags.redraw.base = !0, A.flags.redraw.bid = !0, A.flags.redraw.ask = !0, void 0 === A.asdf && (M(A), A.asdf = !0)
      }(), A.flags.redraw.base) {
      e.clearRect(0, 0, A.w, A.h), function (e, t) {
        void 0 === t && (t = !1);
        var n = A.px.lbl.h + A.px.lbl.tick + 1, r = A.h - n;
        e.fillStyle = A.colors.fill.bg, function (e, t, n, r, o) {
          e.fillRect(0 | t, 0 | n, 0 | r, 0 | o)
        }(e, 0, r, A.w, n), e.strokeStyle = A.colors.stroke.border, e.beginPath(), v(e, 0, r), b(e, A.w, r), e.stroke()
      }(e), p.clearRect(0, A.h - A.px.lbl.h - 2 * A.px.lbl.tick - 2, A.w, A.px.lbl.h + 2 * A.px.lbl.tick + 2), p.font = A.font.labels;
      var g = p.measureText(A.volume).width;
      p.clearRect(0, 0, A.px.lbl.tick + g + 5, A.h - A.px.lbl.h - A.px.lbl.tick - 1), function (e, t) {
        (function (e, t) {
          e.font = A.font.labels, e.fillStyle = A.colors.fill.label, e.strokeStyle = A.colors.stroke.border, e.textBaseline = "middle", e.textAlign = "center";
          var n, r, o = 1 / RTBTC.quoteInt(), s = 7, a = 1.5 * A.font.size, l = 0,
            c = [1e-6, 2e-5, 1e-4, 2e-4, 5e-4, .001, .01, .5, 1, 2, 2.5, 5], u = 1e-8, p = !1;
          for (o = 1e-8, n = 0; n < 15; n++) {
            for (s = Math.max(Math.abs(Math.log(o) / Math.LN10) + 1, 2), r = 0; r < c.length; r++) if (u = o * c[r], l = e.measureText(A.price.high.toFixed(s)).width, x(2 * u) - x(u) >= l + a) {
              p = !0;
              break
            }
            if (p) break;
            o *= 10
          }
          A.price.decimals = s;
          var f = Math.ceil(A.price.high / u) * u, d = x(f), h = "";
          A.settings.grid && (t.strokeStyle = A.colors.stroke.grid, t.beginPath());
          e.beginPath();
          for (; f >= A.price.low && !(d < 0);) h = f.toFixed(s), function (e, t, n) {
            var r = A.h - (A.px.lbl.h - A.px.lbl.tick) / 2 - 2, o = x(n);
            v(e, o, A.h - A.px.lbl.h - 2 * A.px.lbl.tick - 1), b(e, o, A.h - A.px.lbl.h - .5 * A.px.lbl.tick), e.fillText(t, o, r)
          }(e, h, f), A.settings.grid && i(t, d, A.DOTTED), d = x(f -= u);
          e.stroke(), A.settings.grid && t.stroke()
        })(e, t), function (e, t) {
          e.font = A.font.labels, e.fillStyle = A.colors.fill.label, e.strokeStyle = A.colors.stroke.border, e.textBaseline = "middle", e.textAlign = "left";
          var n, r, o = 1e-8, i = 8, a = .625 * A.font.size, l = A.px.lbl.font, c = [1, 2, 2.5, 5], u = 1e-8, p = !1;
          for (n = 0; n < 20; n++) {
            for (i = Math.max(Math.abs(Math.log(o) / Math.LN10) + 1, 2), r = 0; r < c.length; r++) if (u = o * c[r], y(u) - y(2 * u) >= l + a) {
              p = !0;
              break
            }
            if (p) break;
            o *= 10
          }
          o >= 1 && (i = 0);
          var f = u, h = y(f), g = "";
          A.settings.grid && (t.strokeStyle = A.colors.stroke.grid, t.beginPath());
          e.beginPath();
          for (; f < A.volume;) g = numberWithCommas(f.toFixed(i)), function (e, t, n, r) {
            var o = y(n);
            d(e, t, o, r)
          }(e, g, f), A.settings.grid && s(t, h, A.DOTTED), h = y(f += u);
          e.stroke(), A.settings.grid && t.stroke()
        }(e, t)
      }(p, e), A.flags.redraw.base = !1
    }
    var $ = A.flags.redraw.bid || A.flags.redraw.ask;
    A.flags.redraw.bid && (!function (e, t) {
      e.clearRect(0, 0, A.w, A.h), e.strokeStyle = A.colors.stroke.bid, A.settings.fill && (t.clearRect(0, 0, A.w, A.h), t.fillStyle = A.colors.fill.down, o(t, A.sums.bid, N.bid.price, !0));
      var n = !1;
      if (A.interacted && N.bid.price.length > 0) {
        var i = N.bid.price[0] / RTBTC.quoteInt();
        A.px.crosshairs.x <= x(i) && (c(), n = !0)
      }
      r(e, A.sums.bid, N.bid.price, !0), n && l(A.mouse.x, A.mouse.y)
    }(a, t), A.flags.redraw.bid = !1), A.flags.redraw.ask && (!function (e, t) {
      e.clearRect(0, 0, A.w, A.h), e.strokeStyle = A.colors.stroke.ask, A.settings.fill && (t.clearRect(0, 0, A.w, A.h), t.fillStyle = A.colors.fill.up, o(t, A.sums.ask, N.ask.price, !1));
      var n = !1;
      if (A.interacted && N.ask.price.length > 0) {
        var i = N.ask.price[0] / RTBTC.quoteInt();
        A.px.crosshairs.x >= x(i) && (c(), n = !0)
      }
      r(e, A.sums.ask, N.ask.price, !1), n && l(A.mouse.x, A.mouse.y)
    }(u, n), A.flags.redraw.ask = !1), $ && function (e) {
      e.clearRect(0, A.h - A.px.lbl.h - A.px.lbl.tick - 1, A.w, A.px.lbl.h + A.px.lbl.tick + 1), e.clearRect(0, 0, A.w, A.font.overlaySize + A.px.lbl.tick + 5);
      var t = 0, n = 0;
      try {
        t = N.bid.price.length, n = N.ask.price.length
      } catch (e) {
        return
      }
      if (0 == t && 0 == n) return;
      var r = N.bid.price[0] / RTBTC.quoteInt(), o = N.ask.price[0] / RTBTC.quoteInt(), i = "", s = 0, a = 0,
        l = o > 0 ? 100 * (o - r) / o : NaN;
      e.font = A.font.labels, e.lineWidth = 1, e.fillStyle = A.colors.fill.crosshair, e.textAlign = "center", e.textBaseline = "middle", o > A.price.low && o < A.price.high && (i = Currency.format(RTBTC.quote(), o), s = x(o), e.strokeStyle = A.colors.stroke.ask, m(e, s, e.measureText(i).width), e.fillStyle = A.colors.fill.flagtext, f(e, i, s));
      r > A.price.low && r < A.price.high && (e.fillStyle = A.colors.fill.crosshair, i = Currency.format(RTBTC.quote(), r), a = x(r), e.strokeStyle = A.colors.stroke.bid, m(e, a, e.measureText(i).width), e.fillStyle = A.colors.fill.flagtext, f(e, i, a));
      o > A.price.low && o < A.price.high && r > A.price.low && r < A.price.high && !isNaN(l) && (i = l.toFixed(2) + "%", e.fillStyle = A.colors.fill.ordertext, e.strokeStyle = A.colors.stroke.order, e.textAlign = "center", e.textBaseline = "top", e.font = A.font.overlays, e.fillText(i, (s + a) / 2, 1), e.beginPath(), v(e, a, A.font.overlaySize + A.px.lbl.tick + 3), b(e, a, A.font.overlaySize + 3), b(e, s, A.font.overlaySize + 3), b(e, s, A.font.overlaySize + A.px.lbl.tick + 3), e.stroke())
    }(h), E()
  }

  function n(e) {
    A.flags.recompute = !0, e ? t() : window.reqAnimFrame(t)
  }

  function r(e, t, n, r, o) {
    if (0 != n.length) {
      var i, s, a, l = t.length, c = RTBTC.quoteInt(), u = x(n[l - 1] / c), p = u, f = y(t[l - 1]), d = u,
        h = void 0 !== o, g = h ? x(o) : r ? A.w + 1 : -1;
      if (e.beginPath(), h) for (d = u = g, i = l - 1; i >= 0; i--) if (r && n[i] / c > o || !r && n[i] / c < o) {
        l = i + 1;
        break
      }
      for (v(e, u, a = y(t[l - 1])), !h && u > 0 && (A.yVals[u] = a), i = l - 1; i >= 0; i--) {
        if (u = x(n[i] / c), r && u > d || !r && u < d) {
          if (a = y(t[i]), r && u > d + 1 && b(e, d + 1, a), !r && u < d - 1 && b(e, d - 1, a), b(e, u, a), !h && u > 0 && (A.yVals[u] = a), !h) {
            if (r && u > d + 1) for (s = d + 1; s < u; s++) A.yVals[s] = void 0;
            if (!r && u < d - 1) for (s = d - 1; s > u; s--) A.yVals[s] = void 0
          }
          d = u
        }
        if (u < -100 * A.w || u > 100 * A.w) {
          DEBUG && M(N), DEBUG && M("n: " + l + ", curInt: " + c + ", prices[n-1]: " + n[l - 1] + ", x: " + u + ", xf: " + p + ", sums[n-1]: " + t[l - 1] + ", yf: " + f + ", ");
          break
        }
      }
      e.stroke()
    }
  }

  function o(e, t, n, r, o) {
    if (0 != n.length) {
      var i, s = t.length, a = RTBTC.quoteInt(), l = x(n[s - 1] / a), c = l, u = l, p = 0, f = y(0),
        d = e.createLinearGradient(0, 0, 0, f), h = void 0 !== o, g = h ? x(o) : r ? A.w + 1 : -1;
      if (e.beginPath(), h) for (l = g, u = g, c = g, i = s - 1; i >= 0; i--) if (r && n[i] / a > o || !r && n[i] / a < o) {
        s = i + 1;
        break
      }
      for (v(e, l, p = y(t[s - 1])), i = s - 1; i >= 0; i--) l = x(n[i] / a), (r && l > u || !r && l < u) && (p = y(t[i]), r && l > u + 1 && b(e, u + 1, p), !r && l < u - 1 && b(e, u - 1, p), b(e, l, p), u = l);
      b(e, u, f), b(e, c, f), e.closePath(), d.addColorStop(0, e.fillStyle), d.addColorStop(1, A.colors.fill.blankBG), e.fillStyle = d, e.fill()
    }
  }

  function i(e, t, n) {
    var r, o = A.h - A.px.lbl.h - A.px.lbl.tick - 2;
    switch (v(e, t, 0), r = 0, n) {
      case A.DOTTED:
        for (; r < o;) b(e, t, ++r), v(e, t, ++r);
        break;
      case A.DASHED:
        for (; r < o;) b(e, t, r = (r += 6) > o ? o : r), v(e, t, r += 2);
        break;
      case A.DASHDOT:
        for (; r < o && (r += 7, r = r > o ? o : r, b(e, t, r), !((r += 4) >= o));) v(e, t, r), b(e, t, r = (r += 2) > o ? o : r), v(e, t, r += 4);
        break;
      case A.SOLID:
      default:
        b(e, t, o)
    }
  }

  function s(e, t, n) {
    var r, o = A.w;
    switch (v(e, o, t), r = o, n) {
      case A.DOTTED:
        for (; r > 1;) b(e, --r, t), v(e, --r, t);
        break;
      case A.DASHED:
        for (; r > 0;) b(e, r = (r -= 6) < 0 ? 0 : r, t), v(e, r -= 2, t);
        break;
      case A.DASHDOT:
        for (; r > 0 && (r -= 7, r = r < 0 ? 0 : r, b(e, r, t), !((r -= 4) <= 0));) v(e, r, t), b(e, r = (r -= 2) < 0 ? 0 : r, t), v(e, r -= 4, t);
        break;
      case A.SOLID:
      default:
        b(e, 0, t)
    }
  }

  function a(e) {
    var t = A.h - A.px.lbl.h - A.px.lbl.tick - 2;
    if (N.bid.price.length > 0 && N.ask.price.length > 0) {
      var n = N.bid.price[0] / RTBTC.quoteInt(), r = N.ask.price[0] / RTBTC.quoteInt(), o = x(n), i = x(r);
      if (e > o && e < i) return t;
      if (void 0 !== A.yVals[e]) return A.yVals[e];
      A.price.high, A.price.low;
      var s = e;
      if (k(e) >= r) for (; Math.ceil(1e6 * k(--s)) / 1e6 >= r;) {
        if (void 0 !== A.yVals[s]) return A.yVals[s];
        if (s <= 0) break
      } else if (k(e) <= n) for (; Math.floor(1e6 * k(++s)) / 1e6 <= n;) {
        if (void 0 !== A.yVals[s]) return A.yVals[s];
        if (s >= A.w) break
      }
    }
    return t
  }

  function l(e, t) {
    A.mouse.shift && (p(), function (e, t) {
      var n = A.canvas.sweep[0].getContext("2d"), i = A.canvas.sweepFill[0].getContext("2d"), s = k(e),
        a = N.bid.price[0] / RTBTC.quoteInt(), l = N.ask.price[0] / RTBTC.quoteInt();
      n.clearRect(0, 0, A.w, A.h), n.strokeStyle = A.colors.stroke.order, i.clearRect(0, 0, A.w, A.h), i.fillStyle = A.colors.fill.ordertext, s >= l ? (o(i, A.sums.ask, N.ask.price, !1, s), r(n, A.sums.ask, N.ask.price, !1, s)) : s <= a && (o(i, A.sums.bid, N.bid.price, !0, s), r(n, A.sums.bid, N.bid.price, !0, s))
    }(e));
    var n = A.canvas.i[0].getContext("2d");
    if (!T(e, t)) {
      var i = k(e), s = a(e), l = function (e) {
        return (1 - e / (A.h - A.px.lbl.h - A.px.lbl.tick - 2)) * A.volume
      }(s);
      c(n), n.font = A.font.labels, n.lineWidth = 1, n.fillStyle = A.colors.fill.crosshair, n.strokeStyle = A.colors.stroke.crosshair, n.beginPath(), n.arc(e + .5, s + .5, 2, 0, TWOPI, !1), n.stroke();
      var u = Currency.format(RTBTC.quote(), i), h = l.toFixed(A.volDecimals);
      m(n, e, n.measureText(u).width), function (e, t, n) {
        var r = A.px.lbl.tick + 2 + n + 3, o = A.px.lbl.font / 2;
        t = g(t, A.px.lbl.font + 2), e.beginPath(), v(e, 0, t), b(e, o, t - 1 - o), e.lineTo(.6 + (0 | r), .5 + (t - 1 - o | 0)), v(e, r, t - 1 - o), b(e, r, t + 1 + o), b(e, o, t + 1 + o), b(e, 0, t), e.fill(), e.stroke()
      }(n, s, n.measureText(h).width), n.fillStyle = A.colors.fill.flagtext, n.textAlign = "left", n.textBaseline = "middle", d(n, h, s, !0), n.textAlign = "center", f(n, u, e), A.px.crosshairs.x = e, A.px.crosshairs.y = t, A.interacted = !0
    }
  }

  function c(e, t) {
    A.interacted = !1;
    var n = e || A.canvas.i[0].getContext("2d");
    if (!0 !== t) {
      n.font = A.font.labels;
      var r = a(A.px.crosshairs.x),
        o = n.measureText(Currency.format("CNY", A.volume, A.volDecimals)).width + A.px.lbl.tick + 6;
      n.clearRect(A.px.crosshairs.x - 4, r - 4, 8, 8), n.clearRect(0, A.h - A.px.lbl.h - A.px.lbl.tick - 1, A.w, A.px.lbl.h + A.px.lbl.tick + 1), n.clearRect(0, r - A.px.lbl.font - 3, o, 2 * A.px.lbl.font + 6)
    } else n.clearRect(0, 0, A.w, A.h)
  }

  function u() {
    window.reqAnimFrame(function () {
      c()
    })
  }

  function p() {
    var e = A.canvas.sweep[0].getContext("2d"), t = A.canvas.sweepFill[0].getContext("2d");
    e.clearRect(0, 0, A.w, A.h), t.clearRect(0, 0, A.w, A.h)
  }

  function f(e, t, n) {
    var r = A.h - (A.px.lbl.h - A.px.lbl.tick) / 2 - 2;
    e.fillText(t, h(n, 10 + e.measureText(t).width), r)
  }

  function d(e, t, n, r) {
    !0 !== r && (v(e, 0, n), b(e, A.px.lbl.tick, n)), n = g(n, A.px.lbl.font + 2), e.save(), e.strokeStyle = A.colors.fill.blankBG, e.strokeText(t, A.px.lbl.tick + 2, n), e.restore(), e.fillText(t, A.px.lbl.tick + 2, n)
  }

  function h(e, t) {
    return e > A.w - t / 2 ? A.w - t / 2 : e < t / 2 ? t / 2 : e
  }

  function g(e, t) {
    var n = A.h - A.px.lbl.h - A.px.lbl.tick - 1 - t / 2;
    return e > n ? n : e < t / 2 ? t / 2 : e
  }

  function m(e, t, n) {
    var r = 0 | h(t, n + 10), o = n / 2 + 5 | 0, i = h(t, 7);
    e.beginPath(), v(e, r - o, A.h - 1), b(e, r + o, A.h - 1), b(e, r + o, A.h - A.px.lbl.h), b(e, i + 3.5, A.h - A.px.lbl.h), b(e, i, A.h - A.px.lbl.h - 4), b(e, i - 3.5, A.h - A.px.lbl.h), b(e, r - o, A.h - A.px.lbl.h), b(e, r - o, A.h - 1), e.fill(), e.stroke()
  }

  function v(e, t, n) {
    e.moveTo(.5 + (0 | t), .5 + (0 | n))
  }

  function b(e, t, n) {
    e.lineTo(.5 + (0 | t), .5 + (0 | n))
  }

  function y(e) {
    var t = 1 - e / A.volume;
    return (A.h - A.px.lbl.h - A.px.lbl.tick - 2) * t | 0
  }

  function x(e) {
    return A.w * (e - A.price.low) / A.price.range | 0
  }

  function k(e) {
    return A.price.low + e / A.w * A.price.range
  }

  function T(e, t) {
    return !(t < A.h - A.px.lbl.h - A.px.lbl.tick - 1)
  }

  function S(e) {
    if (e.offsetX) A.mouse.x = e.offsetX, A.mouse.y = e.offsetY; else if (e.pageX) {
      var t = A.canvas.i.offset();
      A.mouse.x = e.pageX - t.left, A.mouse.y = e.pageY - t.top
    }
    A.mouse.shift = e.shiftKey
  }

  function C() {
    if (!isNaN(parseInt(A.w)) && (A.w = 0 | A.w, A.w >= 0)) {
      try {
        A.orders = new Array(A.w + 1), A.yVals = new Array(A.w + 1)
      } catch (e) {
        DEBUG && M("Exception on Array size");
        try {
          "console" in window && console.log("Warning: " + A.w)
        } catch (e) {
        }
      }
      n()
    }
  }

  function P() {
    A.flags.recompute = !0, A.flags.redraw.base = !0, A.flags.redraw.bid = !0, A.flags.redraw.ask = !0, c(null, !0), n(!0)
  }

  function E() {
    var e, t, n = UserAccount.orders(), r = null, o = 0;
    if (n.hasOwnProperty("BIJIE")) {
      n = n.BIJIE;
      for (e in n) n.hasOwnProperty(e) && (o++, null == r && ((r = A.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, A.w, A.h), r.text = A.font.overlays, r.textBaseline = "bottom", r.strokeStyle = A.colors.stroke.order, r.fillStyle = A.colors.fill.ordertext, r.beginPath()), (t = n[e]).quote == RTBTC.quote() && function (e, t) {
        var n = x(t.price), r = 0, o = "", i = "", s = t.quote;
        if (n < 0 || n > A.w) return;
        r = a(n), v(e, n, r), b(e, n - A.px.lbl.tick / 2, r - A.px.lbl.tick), function (e, t, n) {
          e.lineTo(.6 + (0 | t), .5 + (0 | n))
        }(e, n + A.px.lbl.tick / 2, r - A.px.lbl.tick), b(e, n, r), "buy" == t.action ? (o = _("BUY"), e.textAlign = "left", n -= A.px.lbl.tick / 2) : "sell" == t.action && (o = _("SELL"), e.textAlign = "right", n += A.px.lbl.tick / 2);
        i = Currency.format(s, t.price), o += " " + RTBTC.numFormatShort(t.amount, 8) + " @ " + i, e.fillText(o, n, r - 1.5 * A.px.lbl.tick)
      }(r, t));
      null != r && (r.fill(), r.stroke()), 0 == o && A.userOrders > 0 && (r = A.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, A.w, A.h), A.userOrders = o
    }
  }

  var A = {
    element: "",
    parent: null,
    module: null,
    self: null,
    canvas: {
      bg: null,
      bidFill: null,
      askFill: null,
      bid: null,
      ask: null,
      sweepFill: null,
      sweep: null,
      orders: null,
      userOrders: null,
      axes: null,
      lbl: null,
      i: null
    },
    w: 0,
    h: 0,
    price: {low: 50, high: 100, range: 50, scale: .1, defaultScale: .1, minScale: 1e-5, maxScale: 1e5, decimals: 4},
    volume: 100,
    volDecimals: 2,
    orders: [],
    orderDelay: 1250,
    userOrders: 0,
    yVals: [],
    allowScale: !1,
    sums: {bid: [], ask: []},
    log: {m: 0, b: 0, b10: 0},
    px: {pad: 5, lbl: {w: 65, h: 16, tick: 4, halftick: 2, font: 11}, crosshairs: {x: 0, y: 0}},
    flags: {redraw: {base: !0, bid: !0, ask: !0}, recompute: !0, widget: !1},
    interacted: !1,
    mouse: {down: !1, zoom: !1, x: 0, y: 0, sx: 0, sy: 0, s0: null, shift: !1},
    colors: Colors.c1,
    SOLID: 0,
    DOTTED: 1,
    DASHED: 2,
    DASHDOT: 3,
    font: {
      precision: 6,
      labels: '11px/1.0em Consolas, "Courier New", monospace',
      size: 11,
      lineHeight: 1,
      face: 'Consolas, "Courier New", monospace',
      overlays: "10px/1.0em Arial, sans-serif",
      overlaySize: 10,
      heading: "12px/1.0em Arial, sans-serif",
      headingBold: "bold 12px/1.0em Arial, sans-serif",
      headingSize: 12
    },
    watermark: "© RTBTC",
    settings: {grid: !0, fill: !0, orders: !0},
    debug: RTBTC.isDebug()
  }, M = RTBTC.debug, N = OBD.book;
  return {
    build: function (t, r, o) {
      return A.element = t, A.parent = r, function () {
        A.parent.addClass("visualdepth"), A.element = $(".box-inner", A.parent), A.element.empty(), A.w = A.element.width(), A.h = A.element.height(), A.canvas.bg = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 100), A.canvas.bidFill = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 101), A.canvas.askFill = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 102), A.canvas.bid = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 103), A.canvas.sweepFill = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 104), A.canvas.sweep = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 105), A.canvas.ask = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 106), A.canvas.orders = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 107), A.canvas.userOrders = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 108), A.canvas.axes = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 109), A.canvas.lbl = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 110), A.canvas.i = $("<canvas/>").attr("width", A.w + "px").attr("height", A.h + "px").attr("z-index", 111), A.element.append(A.canvas.bg).append(A.canvas.bidFill).append(A.canvas.askFill).append(A.canvas.bid).append(A.canvas.ask).append(A.canvas.sweepFill).append(A.canvas.sweep).append(A.canvas.orders).append(A.canvas.userOrders).append(A.canvas.axes).append(A.canvas.lbl).append(A.canvas.i), A.defaultColors = deepCopy(A.colors);
        var e = A.canvas.bg[0].getContext("2d");
        e.font = A.font.labels, A.px.lbl.w = e.measureText("100.00").width + A.px.pad + 2
      }(), A.canvas.i.on({
        mousedown: function (e) {
          S(e), A.mouse.sx = A.mouse.x, A.mouse.sy = A.mouse.y, A.mouse.s0 = A.price.scale, A.mouse.down = !0, T(A.mouse.x, A.mouse.y) && (A.mouse.zoom = !0), stopEvent(e)
        }, click: function (e) {
          S(e), A.mouse.sx = A.mouse.x, A.mouse.sy = A.mouse.y, A.mouse.s0 = A.price.scale, l(A.mouse.x, A.mouse.y)
        }, mouseup: function (e) {
          A.mouse.down = !1, A.mouse.zoom = !1, e.ctrlKey && e.shiftKey || function (e) {
            if (S(e), !T(A.mouse.x, A.mouse.y)) {
              var t = +k(A.mouse.x).toFixed(A.price.decimals), n = "", r = 0, o = {side: "", price: t};
              N.bid.price.length > 0 && t <= N.bid.price[0] / RTBTC.quoteInt() ? A.mouse.shift ? (n = "sell", r = OBD.sumToPrice(t, "bid"), o.amount = r) : n = "buy" : N.ask.price.length > 0 && t >= N.ask.price[0] / RTBTC.quoteInt() && (A.mouse.shift ? (n = "buy", r = OBD.sumToPrice(t, "ask"), o.amount = r) : n = "sell"), o.side = n, RTBTC.trigger("set-order-entry-" + n, o), A.mouse.shift && p()
            }
          }(e)
        }, mouseout: function (e) {
          A.mouse.down = !1, A.mouse.zoom = !1, u(), p()
        }, mousemove: function (e) {
          A.mouse.down ? (function (e) {
            if (S(e), A.mouse.zoom) {
              var t = A.mouse.x - A.mouse.sx, r = A.price.scale;
              e.shiftKey ? A.price.scale = A.mouse.s0 * (1 - t / 1e3) : A.price.scale = A.mouse.s0 * (1 - t / 100), A.price.scale > A.price.maxScale && (A.price.scale = A.price.maxScale), A.price.scale < A.price.minScale && (A.price.scale = A.price.minScale), A.price.scale != r && n()
            }
          }(e), A.mouse.zoom && A.canvas.i.css("cursor", "e-resize")) : (A.mouse.shift && !e.shiftKey && p(), S(e), T(A.mouse.x, A.mouse.y) ? (u(), A.canvas.i.css("cursor", "e-resize")) : (l(A.mouse.x, A.mouse.y), A.canvas.i.css("cursor", "pointer")))
        }, dblclick: function (e) {
          A.mouse.down = !1, A.mouse.zoom = !1, A.price.scale != A.price.defaultScale && (A.price.scale = A.price.defaultScale, A.flags.recompute = !0, n(), stopEvent(e))
        }
      }), A.canvas.i.bind("pinch", function (e, t) {
        if (null != t.scale) {
          w = A.px.bar.width;
          var r = A.price.scale;
          A.price.scale *= t.scale, A.price.scale > A.price.maxScale && (A.price.scale = A.price.maxScale), A.price.scale < A.price.minScale && (A.price.scale = A.price.minScale), A.price.scale != r && n()
        }
        t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
      }), A.canvas.i.bind("mousewheel", function (e, t, r, o) {
        A.allowScale = !0, stopEvent(e);
        var i = 1;
        if (void 0 !== r || void 0 !== o) {
          0 != r ? i = 1 - .01 * r : 0 != o && (i = 1 - .1 * o);
          var s = A.price.scale;
          A.price.scale *= i, A.price.scale > A.price.maxScale && (A.price.scale = A.price.maxScale), A.price.scale < A.price.minScale && (A.price.scale = A.price.minScale), A.price.scale != s && n()
        }
      }), RTBTC.handler("newbook", A.element, P), RTBTC.handler("orders", A.element, E), e(o), window.setTimeout(function () {
        RTBTC.trigger("what-theme", null)
      }, 100), this
    }, module: function (e) {
      return A.module = e, A.module.setTitle(_("Visual Depth")), RTBTC.handler("newbook", A.module.id(), A.self.onBook), RTBTC.handler("depth", A.module.id(), A.self.onDepth), RTBTC.handler("theme", A.module.id(), A.self.onTheme), RTBTC.handler("orders", A.module.id(), E), RTBTC.handler("order-canceled", A.module.id(), E), this
    }, self: function (e) {
      A.self = e
    }, settings: function () {
      return [$("<p/>").append(RTBTC.toggle(A.settings.fill, function () {
        A.settings.fill = !0
      }, function () {
        A.settings.fill = !1, function () {
          var e = A.canvas.bidFill[0].getContext("2d");
          e.clearRect(0, 0, A.w, A.h), (e = A.canvas.askFill[0].getContext("2d")).clearRect(0, 0, A.w, A.h)
        }()
      }, function () {
        n()
      })).append($("<span/>").addClass("control-label").html(_("Fill the Chart"))), $("<p/>").append(RTBTC.toggle(A.settings.grid, function () {
        A.settings.grid = !0
      }, function () {
        A.settings.grid = !1
      }, function () {
        n()
      })).append($("<span/>").addClass("control-label").html(_("Show Grid")))]
    }, save: function () {
      return function () {
        var e = {};
        return e.g = A.settings.grid, e.f = A.settings.fill, e.s = A.price.scale, e
      }()
    }, load: function (t) {
      e(t), n()
    }, unload: function () {
      RTBTC.unregisterAll(A.module.id())
    }, onDepth: function (e) {
      !function (e) {
        var n = e.price / RTBTC.quoteInt();
        !function () {
          var e = N.bid.amount.length, t = N.ask.amount.length, n = RTBTC.quoteInt();
          N.bid.price[e - 1] / n < A.price.low && A.sums.bid.length > 0 && N.bid.price[A.sums.bid.length - 1] > A.price.low ? A.flags.recompute = !0 : N.ask.price[t - 1] / n > A.price.high && A.sums.ask.length > 0 && N.ask.price[A.sums.ask.length - 1] < A.price.high && (A.flags.recompute = !0)
        }(), "bid" == e.location ? n >= A.price.low && (A.flags.redraw.bid = !0, t()) : "ask" == e.location && n <= A.price.high && (A.flags.redraw.ask = !0, t()), A.settings.orders && function (e) {
          var t = A.canvas.orders[0].getContext("2d"), n = x(e.price / RTBTC.quoteInt());
          if (!(n < 0 || n > A.w)) {
            if (e.amount > 0) t.strokeStyle = A.colors.stroke.up; else {
              if (!(e.amount < 0)) return;
              t.strokeStyle = A.colors.stroke.down
            }
            A.orders.length > n && n >= 0 && (t.beginPath(), v(t, n, A.h), b(t, n, A.h - A.px.lbl.h - A.px.lbl.tick), t.stroke(), void 0 === A.orders[n] ? A.orders[n] = 1 : A.orders[n]++), window.setTimeout(function (e) {
              return function () {
                !function (e) {
                  if (A.orders.length > e && e >= 0) {
                    if (void 0 === A.orders[e]) return;
                    if (--A.orders[e] > 0) return;
                    A.canvas.orders[0].getContext("2d").clearRect(e, A.h - A.px.lbl.h - A.px.lbl.tick, 1, A.px.lbl.h + A.px.lbl.tick)
                  }
                }(e)
              }
            }(n), A.orderDelay)
          }
        }(e)
      }(e)
    }, onTheme: function (e) {
      !function (e) {
        Colors.hasOwnProperty(e) && (A.colors = Colors[e], n())
      }(e)
    }, onBook: function (e) {
      P()
    }, resize: function (e) {
      window.reqAnimFrame(function () {
        var e = $(A.element).width(), t = $(A.element).height();
        A.w == e && A.h == t || (A.w = e, A.h = t, $("canvas", A.element).each(function (e, t) {
          $(t).attr("width", A.w + "px").attr("height", A.h + "px")
        }), n(!0))
      }), C()
    }, resizeStop: function () {
      C()
    }, drag: function (e) {
      e
    }, widget: function (e) {
      return null == e || void 0 === e ? A.flags.widget : (A.flags.widget = e, this)
    }, internals: A.debug ? function () {
      return A
    } : function () {
      return {}
    }
  }
}, custLine = function () {
  function e() {
    window.reqAnimFrame(function () {
      !function () {
        f.canvas[0].getContext("2d").clearRect(0, 0, f.chart.w, f.chart.h);
        for (var e = 0; e < f.objLines.length; e++) f.objLines[e].draw();
        t()
      }()
    })
  }

  function t() {
    var e = p();
    d.globalCompositeOperation = "destination-out", d.fillStyle = "rgba(250,250,250,1)", d.beginPath(), d.rect(0, 0, f.chart.w, f.chart.h), n(d, e.x, e.y), r(d, e.x, e.y + e.h), r(d, e.x + e.w, e.y + e.h), r(d, e.x + e.w, e.y), r(d, e.x, e.y), d.closePath(), d.fill(), d.globalCompositeOperation = "source-over"
  }

  function n(e, t, n) {
    e.moveTo(.5 + (0 | t), .5 + (0 | n))
  }

  function r(e, t, n) {
    e.lineTo(.5 + (0 | t), .5 + (0 | n))
  }

  function o(e) {
    d.strokeStyle = C.line, d.lineWidth = 1, d.beginPath();
    for (o = 0; o < e.points.length; o++) {
      i = e.points[o];
      n(d, i[0], i[1]), r(d, i[2], i[3])
    }
    d.stroke(), d.fillStyle = C.text, d.textBaseline = "bottom", d.textAlign = "left", d.font = "12px Arial";
    var t = 0;
    if ("periodicLine" != e.name && "fibonacciSequence" != e.name || (t = 40), e.text.length > 0) {
      for (var o = 0; o < e.points.length; o++) {
        var i = e.points[o];
        d.fillText(e.text[o], i[0], i[1] + t)
      }
      d.stroke()
    }
    f.selectDrawObj && e.id == f.selectDrawObj.id && s(e)
  }

  function i(e) {
    d.fillStyle = d.strokeStyle = e.up ? C.upArrow : C.downArrow, d.lineWidth = 1, d.beginPath();
    var t = e.points[0];
    n(d, t[0], t[1]);
    for (var o = 0; o < e.points.length; o++) t = e.points[o], r(d, t[0], t[1]);
    d.stroke(), d.fill()
  }

  function s(e) {
    d.strokeStyle = C.pot, d.fillStyle = "black", d.lineWidth = 1;
    var t = 3;
    1 == e.large && (t = 5), e.pots.forEach(function (e) {
      d.beginPath(), d.arc(e[0] + .5, e[1] + .5, t, 0, 2 * Math.PI, !0), d.stroke(), d.beginPath(), d.arc(e[0] + .5, e[1] + .5, t - 1, 0, 2 * Math.PI, !0), d.fill()
    })
  }

  function a() {
    function e() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    return e() + e() + "-" + e() + "-" + e()
  }

  function l(e) {
    var t = !1;
    return e.forEach(function (e) {
      var n = f.mouse.x, r = f.mouse.y, o = e[0], i = e[1], s = e[2], a = e[3], l = a - i, c = o - s, u = s * i - o * a,
        p = l, d = c, h = u + 5 * Math.sqrt(l * l + c * c), g = l, m = c, v = u - 5 * Math.sqrt(l * l + c * c);
      p * n + d * r + h > 0 && g * n + m * r + v < 0 && -c * n + l * r + (c * o - l * i) > 0 && -c * n + l * r + (c * s - l * a) < 0 && (t = !0)
    }), t
  }

  function c(e) {
    var t = !1;
    return e.pots.forEach(function (n, r) {
      var o = f.mouse.x, i = f.mouse.y;
      Math.sqrt((o - n[0]) * (o - n[0]) + (i - n[1]) * (i - n[1])) <= 5 && (e.selectPotIndex = r, t = !0)
    }), t
  }

  function u(e) {
    if (e.offsetX) f.mouse.x = e.offsetX, f.mouse.y = e.offsetY; else if (e.pageX) {
      var t = f.canvas.offset();
      f.mouse.x = e.pageX - t.left, f.mouse.y = e.pageY - t.top
    }
  }

  function p() {
    return {
      x: f.chart.offset,
      y: 0,
      w: f.chart.w - f.chart.offset - f.chart.px.lbl.w - f.chart.px.lbl.tick - 1,
      h: f.chart.slots[0].px + f.chart.slots[0].h
    }
  }

  var f = {
    canvas: $("#line"),
    chart: null,
    w: 0,
    h: 0,
    objLines: [],
    curLine: null,
    points: [],
    selectDrawObj: null,
    LINES: 0,
    CIRCLE: 1,
    RECT: 2,
    ARROW: 3,
    mouse: {},
    mouseOri: {}
  }, d = f.canvas[0].getContext("2d");
  return {
    build: function () {
      return f.w = f.canvas.width(), f.h = f.canvas.height(), this
    }, add: function (e, t) {
      switch (e) {
        case"percentLine":
          f.curLine = new function () {
            this.name = "percentLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
            var e = [0, 1 / 8, .25, 1 / 3, 3 / 8, .5, 5 / 8, 2 / 3, .75, 7 / 8, 1];
            this.init = function () {
              var t = p();
              this.points = [];
              for (var n = f.chart.yToVal(0, f.mouse.y), r = 0; r < 11; r++) this.points.push([t.x, f.mouse.y, t.w + t.x, f.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
              return this.pots = [], this.pots.push([f.w / 2, f.mouse.y, 0]), this.pots.push([f.w / 2, f.mouse.y, 10]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.y - f.mouseOri.y;
                null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function (n, r, o) {
                  n[1] = n[3] += t * e[r]
                }), this.pots.forEach(function (n, r, o) {
                  n[1] += t * e[n[2]]
                })) : 0 == this.selectPotIndex && (this.points.forEach(function (n, r, o) {
                  n[1] = n[3] += t * (1 - e[r])
                }), this.pots.forEach(function (n, r, o) {
                  n[1] += t * (1 - e[n[2]])
                })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function (e, n, r) {
                  e[1] = e[3] += t
                }), this.pots.forEach(function (e, n, r) {
                  e[1] += t
                })), this.text = [];
                var n = this;
                this.points.forEach(function (t, r) {
                  var o = f.chart.yToVal(0, t[1]);
                  n.text.push((100 * e[r]).toFixed(2) + "% " + o.toFixed(2))
                }), f.mouseOri.y = f.mouse.y
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"godPercentLine":
          f.curLine = new function () {
            this.name = "godPercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
            var e = [0, .191, .382, .5, .618, 1, 1.191, 1.382, 1.5, 1.618, 2];
            this.init = function () {
              var t = p();
              this.points = [];
              for (var n = f.chart.yToVal(0, f.mouse.y), r = 0; r < 11; r++) this.points.push([t.x, f.mouse.y, t.w + t.x, f.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
              return this.pots = [], this.pots.push([f.w / 2, f.mouse.y, 0]), this.pots.push([f.w / 2, f.mouse.y, 5]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.y - f.mouseOri.y;
                null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function (n, r, o) {
                  n[1] = n[3] += t * e[r]
                }), this.pots.forEach(function (n, r, o) {
                  n[1] += t * e[n[2]]
                })) : 0 == this.selectPotIndex && (this.points.forEach(function (n, r, o) {
                  n[1] = n[3] += t * (1 - e[r])
                }), this.pots.forEach(function (n, r, o) {
                  n[1] += t * (1 - e[n[2]])
                })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function (e, n, r) {
                  e[1] = e[3] += t
                }), this.pots.forEach(function (e, n, r) {
                  e[1] += t
                })), this.text = [];
                var n = this;
                this.points.forEach(function (t, r) {
                  var o = f.chart.yToVal(0, t[1]);
                  n.text.push((100 * e[r]).toFixed(2) + "% " + o.toFixed(2))
                }), f.mouseOri.y = f.mouse.y
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"wavePercentLines":
          f.curLine = new function () {
            this.name = "wavePercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
            var e = [0, .25, .333, .5, 1];
            this.init = function () {
              var t = p();
              this.points = [];
              for (var n = f.chart.yToVal(0, f.mouse.y), r = 0; r < 5; r++) this.points.push([t.x, f.mouse.y, t.w + t.x, f.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
              return this.pots = [], this.pots.push([f.w / 2, f.mouse.y, 0]), this.pots.push([f.w / 2, f.mouse.y, 4]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.y - f.mouseOri.y;
                null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function (n, r, o) {
                  n[1] = n[3] += t * e[r]
                }), this.pots.forEach(function (n, r) {
                  n[1] += t * e[n[2]]
                })) : 0 == this.selectPotIndex && (this.points.forEach(function (n, r, o) {
                  n[1] = n[3] += t * (1 - e[r])
                }), this.pots.forEach(function (n, r, o) {
                  n[1] += t * (1 - e[n[2]])
                })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function (e, n, r) {
                  e[1] = e[3] += t
                }), this.pots.forEach(function (e, n, r) {
                  e[1] += t
                })), this.text = [];
                var n = this;
                this.points.forEach(function (t, r) {
                  var o = f.chart.yToVal(0, t[1]);
                  n.text.push((100 * e[r]).toFixed(2) + "% " + o.toFixed(2))
                }), f.mouseOri.y = f.mouse.y
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"fibonacciSequence":
          f.curLine = new function () {
            this.name = "fibonacciSequence", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
            var e = [];
            this.id = a(), this.init = function () {
              var t = p();
              this.points = [], f.chart.yToVal(0, f.mouse.y);
              for (var n = 0; n < 100; n++) 0 == n ? e.push(0) : e.push(n + e[n - 1]);
              for (var r = f.chart.xToBar(f.mouse.x), o = 0; o < e.length; o++) {
                var i = f.chart.toPxX(r - e[o]);
                if (i > t.x + t.w) break;
                this.points.push([i, 0, i, t.h]), this.text.push(o)
              }
              return this.pots = [], this.pots.push([f.chart.toPxX(r), t.h / 2, 0]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = p();
                this.points = [], this.text = [];
                for (var n = f.chart.xToBar(f.mouse.x), r = 0; r < e.length; r++) {
                  var o = f.chart.toPxX(n - e[r]);
                  if (o > t.x + t.w) break;
                  this.points.push([o, 0, o, t.h]), this.text.push(r)
                }
                this.pots.forEach(function (e, t, r) {
                  e[0] = f.chart.toPxX(n)
                })
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"periodicLine":
          f.curLine = new function () {
            this.name = "periodicLine", this.points = [], this.pots = [], this.text = [], this.id = a(), this.selectPotIndex = 1;
            var e = 0;
            this.init = function () {
              var e = p();
              this.points = [], f.chart.yToVal(0, f.mouse.y);
              for (var t = f.chart.xToBar(f.mouse.x), n = 0; n < 300; n++) {
                var r = f.chart.toPxX(t - n);
                this.points.push([r, 0, r, e.h]), this.text.push(n)
              }
              return this.pots = [], this.pots.push([f.chart.toPxX(t), e.h / 2, 0]), this.pots.push([f.chart.toPxX(t - 1), e.h / 2, 0]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                p();
                var t = f.mouse.x - f.mouseOri.x;
                if (null != this.selectPotIndex && 0 != t) if (0 == this.selectPotIndex) {
                  e += t;
                  for (var n = parseInt(e / (f.chart.px.bar.spacing + f.chart.px.bar.width)), r = 0; r < this.points.length; r++) this.points[r][0] = this.points[r][2] += n * (f.chart.px.bar.spacing + f.chart.px.bar.width);
                  this.pots[1][0] += n * (f.chart.px.bar.spacing + f.chart.px.bar.width), this.pots[0][0] += n * (f.chart.px.bar.spacing + f.chart.px.bar.width), e %= f.chart.px.bar.spacing + f.chart.px.bar.width
                } else {
                  e += t;
                  for (var n = parseInt(e / (f.chart.px.bar.spacing + f.chart.px.bar.width)), r = 0; r < this.points.length; r++) this.points[r][0] = this.points[r][2] += r * n * (f.chart.px.bar.spacing + f.chart.px.bar.width), this.text[r] += n * r;
                  this.pots[1][0] += n * (f.chart.px.bar.spacing + f.chart.px.bar.width), e %= f.chart.px.bar.spacing + f.chart.px.bar.width
                }
                f.mouseOri.x = f.mouse.x
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"lineSegment":
          f.curLine = new function () {
            this.name = "lineSegment", this.points = [], this.pots = [], this.text = [], this.id = a(), this.selectPotIndex = 1;
            var e = 0;
            this.init = function () {
              p(), this.points = [];
              for (var e = f.chart.yToVal(0, f.mouse.y), t = f.chart.xToBar(f.mouse.x), n = f.chart.barToIndex(t), r = new Date(f.chart.bars.data[n][0]).Format("yyyy.MM.dd") + " " + e.toFixed(2), o = f.chart.toPxX(t), i = f.chart.toPxY(e, 0), s = 0; s < 1; s++) this.points.push([o, i, o, i]), this.text.push(r);
              return this.pots = [], this.pots.push([o, i]), this.pots.push([o, i]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.y - f.mouseOri.y, n = f.mouse.x - f.mouseOri.x;
                e += n;
                var r = parseInt(e / (f.chart.px.bar.spacing + f.chart.px.bar.width)) * (f.chart.px.bar.spacing + f.chart.px.bar.width);
                null == this.selectPotIndex || 0 == t && 0 == r ? null != this.selectPotIndex || 0 == t && 0 == r || (this.points.forEach(function (e, n, o) {
                  e[0] += r, e[1] += t, e[2] += r, e[3] += t
                }), this.pots.forEach(function (e, n, o) {
                  e[1] += t, e[0] += r
                })) : 1 == this.selectPotIndex ? (this.points[0][2] += r, this.points[0][3] += t, this.pots[1][0] += r, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += r, this.points[0][1] += t, this.pots[0][0] += r, this.pots[0][1] += t), this.text = [];
                var o = this.points[0], i = f.chart.yToVal(0, o[1]), s = f.chart.xToBar(o[0]),
                  a = f.chart.barToIndex(s),
                  l = f.chart.bars.data[a] ? new Date(f.chart.bars.data[a][0]).Format("yyyy.MM.dd") : "";
                this.text.push(l + " " + i.toFixed(2)), i = f.chart.yToVal(0, o[3]), s = f.chart.xToBar(o[2]), a = f.chart.barToIndex(s), l = f.chart.bars.data[a] ? new Date(f.chart.bars.data[a][0]).Format("yyyy.MM.dd") : "", this.text.push(l + " " + i.toFixed(2)), e %= f.chart.px.bar.spacing + f.chart.px.bar.width, f.mouseOri.y = f.mouse.y, f.mouseOri.x = f.mouse.x
              }
            }, this.draw = function () {
              !function (e) {
                d.strokeStyle = C.line, d.lineWidth = 1, d.beginPath();
                for (var t = 0; t < e.points.length; t++) o = e.points[t], n(d, o[0], o[1]), r(d, o[2], o[3]);
                d.stroke(), d.fillStyle = C.text, d.textBaseline = "bottom", d.textAlign = "left", d.font = "12px Arial";
                var o = e.points[0];
                d.fillText(e.text[0], o[0], o[1]), d.fillText(e.text[1], o[2], o[3]), d.stroke(), f.selectDrawObj && e.id == f.selectDrawObj.id && s(e)
              }(this)
            }
          };
          break;
        case"regressionLine":
          f.curLine = new function () {
            function e(e, t) {
              var n = f.chart.bars.data.slice(e, t + 1), r = n.length, o = (1 + r) / 2, i = 0, s = 0, a = 0;
              n.forEach(function (e, t) {
                i += e[4], s += e[4] * (t + 1), a += (t + 1) * (t + 1)
              });
              var l, c, u = i / r, p = (s - r * o * u) / (a - r * o * o), d = u - p * o, h = d + 1 * p, g = d + p * r,
                m = 0, v = 0;
              n.forEach(function (e, t) {
                (n = (e[2] - (t + 1) * p - d) / Math.sqrt(d * d + p * p)) > m && (m = n, l = t);
                var n;
                (n = (e[3] - (t + 1) * p - d) / Math.sqrt(d * d + p * p)) < v && (v = n, c = t)
              });
              var b = n[l || 0][2] - ((l || 0) + 1) * p, y = p, $ = b + 1 * y, x = b + y * r,
                w = n[c || 0][3] - ((c || 0) + 1) * p, k = p;
              return [[h, g], [$, x], [w + 1 * k, w + k * r]]
            }

            this.name = "regressionLine", this.points = [], this.pots = [], this.text = [], this.id = a(), this.selectPotIndex = 1;
            var t = 0;
            this.init = function () {
              var e = p();
              this.points = [];
              for (var t = f.chart.yToVal(0, f.mouse.y), n = f.chart.xToBar(f.mouse.x), r = (f.chart.barToIndex(n), f.chart.toPxX(n)), o = (f.chart.toPxY(t, 0), 0); o < 2; o++) this.points.push([r, 0, r, e.h]);
              for (var i = 0; i < 3; i++) this.points.push([r, 0, r, 0]);
              return this.pots = [], this.pots.push([r, e.h / 2]), this.pots.push([r, e.h / 2]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var n = f.mouse.y - f.mouseOri.y, r = f.mouse.x - f.mouseOri.x;
                t += r;
                var o = parseInt(t / (f.chart.px.bar.spacing + f.chart.px.bar.width)) * (f.chart.px.bar.spacing + f.chart.px.bar.width);
                null == this.selectPotIndex || 0 == n && 0 == o ? null != this.selectPotIndex || 0 == n && 0 == o || (this.points.forEach(function (e, t, n) {
                  e[0] += o, e[2] += o
                }), this.pots.forEach(function (e, t, n) {
                  e[0] += o
                })) : 1 == this.selectPotIndex ? (this.points[1][0] = this.points[1][2] += o, this.points[2][2] += o, this.points[3][2] += o, this.points[4][2] += o, this.pots[1][0] += o) : 0 == this.selectPotIndex && (this.points[0][0] = this.points[0][2] += o, this.points[2][0] += o, this.points[3][0] += o, this.points[4][0] += o, this.pots[0][0] += o), index1 = f.chart.barToIndex(f.chart.xToBar(this.points[0][0])), index2 = f.chart.barToIndex(f.chart.xToBar(this.points[1][0]));
                var i, s = 0, a = 0;
                index1 > index2 ? (i = e(index2, index1), s = f.chart.toPxY(i[0][0], 0), a = f.chart.toPxY(i[0][1], 0), y2 = f.chart.toPxY(i[1][0], 0), y3 = f.chart.toPxY(i[1][1], 0), y4 = f.chart.toPxY(i[2][0], 0), y5 = f.chart.toPxY(i[2][1], 0), this.points[2][3] = s, this.points[2][1] = a, this.points[3][3] = y2, this.points[3][1] = y3, this.points[4][3] = y4, this.points[4][1] = y5) : index1 < index2 ? (i = e(index1, index2), s = f.chart.toPxY(i[0][0], 0), a = f.chart.toPxY(i[0][1], 0), y2 = f.chart.toPxY(i[1][0], 0), y3 = f.chart.toPxY(i[1][1], 0), y4 = f.chart.toPxY(i[2][0], 0), y5 = f.chart.toPxY(i[2][1], 0), this.points[2][3] = a, this.points[2][1] = s, this.points[3][3] = y3, this.points[3][1] = y2, this.points[4][3] = y5, this.points[4][1] = y4) : (this.points[2][3] = 0, this.points[2][1] = 0, this.points[3][3] = 0, this.points[3][1] = 0, this.points[4][3] = 0, this.points[4][1] = 0), t %= f.chart.px.bar.spacing + f.chart.px.bar.width, f.mouseOri.y = f.mouse.y, f.mouseOri.x = f.mouse.x
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"rectLine":
          f.curLine = new function () {
            this.name = "rectLine", this.drawType = f.RECT, this.id = a(), this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
            var e = 0;
            this.init = function () {
              p(), this.points = [];
              for (var e = f.chart.yToVal(0, f.mouse.y), t = f.chart.xToBar(f.mouse.x), n = f.chart.barToIndex(t), r = new Date(f.chart.bars.data[n][0]).Format("yyyy.MM.dd") + " " + e.toFixed(2), o = f.chart.toPxX(t), i = f.chart.toPxY(e, 0), s = 0; s < 1; s++) this.points.push([o, i, o, i]);
              return this.text.push(r), this.text.push(r), this.pots = [], this.pots.push([o, i]), this.pots.push([o, i]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.y - f.mouseOri.y, n = f.mouse.x - f.mouseOri.x;
                e += n;
                var r = parseInt(e / (f.chart.px.bar.spacing + f.chart.px.bar.width)) * (f.chart.px.bar.spacing + f.chart.px.bar.width);
                null == this.selectPotIndex || 0 == t && 0 == r ? null != this.selectPotIndex || 0 == t && 0 == r || (this.points.forEach(function (e, n, o) {
                  e[0] += r, e[1] += t, e[2] += r, e[3] += t
                }), this.pots.forEach(function (e, n, o) {
                  e[1] += t, e[0] += r
                })) : 1 == this.selectPotIndex ? (this.points[0][2] += r, this.points[0][3] += t, this.pots[1][0] += r, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += r, this.points[0][1] += t, this.pots[0][0] += r, this.pots[0][1] += t), this.text = [];
                var o = this.points[0], i = f.chart.yToVal(0, o[1]), s = f.chart.xToBar(o[0]),
                  a = f.chart.barToIndex(s),
                  l = f.chart.bars.data[a] ? new Date(f.chart.bars.data[a][0]).Format("yyyy.MM.dd") : "";
                this.text.push(l + " " + i.toFixed(2)), i = f.chart.yToVal(0, o[3]), s = f.chart.xToBar(o[2]), a = f.chart.barToIndex(s), l = f.chart.bars.data[a] ? new Date(f.chart.bars.data[a][0]).Format("yyyy.MM.dd") : "", this.text.push(l + " " + i.toFixed(2)), e %= f.chart.px.bar.spacing + f.chart.px.bar.width, f.mouseOri.y = f.mouse.y, f.mouseOri.x = f.mouse.x
              }
            }, this.draw = function () {
              !function (e) {
                d.strokeStyle = C.line, d.lineWidth = 1;
                for (var t = 0; t < e.points.length; t++) n = e.points[t], function (e, t, n, r, o) {
                  e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | o)
                }(d, n[0], n[1], n[2] - n[0], n[3] - n[1]);
                d.fillStyle = C.text, d.textBaseline = "bottom", d.textAlign = "left", d.font = "12px Arial";
                var n;
                (n = e.points[0])[0] <= n[2] ? d.textAlign = "left" : d.textAlign = "right", d.fillText(e.text[0], n[0], n[1]), n[0] > n[2] ? d.textAlign = "left" : d.textAlign = "right", d.textBaseline = "top", d.fillText(e.text[1], n[2], n[3]), f.selectDrawObj && e.id == f.selectDrawObj.id && s(e)
              }(this)
            }
          };
          break;
        case"singleLine":
          f.curLine = new function () {
            this.name = "singleLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null, this.init = function () {
              var e = p();
              this.points = [];
              for (var t = f.chart.yToVal(0, f.mouse.y), n = 0; n < 1; n++) this.points.push([e.x, f.mouse.y, e.w + e.x, f.mouse.y]), this.text.push(t.toFixed(2));
              return this.pots = [], this.pots.push([f.w / 2, f.mouse.y, 0]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var e = f.mouse.y - f.mouseOri.y;
                0 != e && (this.points.forEach(function (t, n, r) {
                  t[1] = t[3] += e
                }), this.pots.forEach(function (t, n, r) {
                  t[1] += e
                })), this.text = [];
                var t = this;
                this.points.forEach(function (e, n) {
                  var r = f.chart.yToVal(0, e[1]);
                  t.text.push(r.toFixed(2))
                }), f.mouseOri.y = f.mouse.y
              }
            }, this.draw = function () {
              o(this)
            }
          };
          break;
        case"upArrow":
          f.curLine = new function () {
            this.name = "upArrow", this.up = !0, this.id = a(), this.drawType = f.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
            var e = 0;
            this.init = function () {
              p(), this.points = [];
              var e = f.chart.toPxX(f.chart.xToBar(f.mouse.x)), t = f.mouse.y;
              return this.points.push([e, t]), this.points.push([e + 10, t + 10]), this.points.push([e + 10, t + 14]), this.points.push([e + 2, t + 6]), this.points.push([e + 2, t + 20]), this.points.push([e - 2, t + 20]), this.points.push([e - 2, t + 6]), this.points.push([e - 10, t + 14]), this.points.push([e - 10, t + 10]), this.points.push([e, t]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.x - f.mouseOri.x, n = f.mouse.y - f.mouseOri.y;
                e += t, 0 == n && 0 == t || this.points.forEach(function (t, r, o) {
                  t[0] += e - e % (f.chart.px.bar.spacing + f.chart.px.bar.width), t[1] += n
                }), e %= f.chart.px.bar.spacing + f.chart.px.bar.width, f.mouseOri.x = f.mouse.x, f.mouseOri.y = f.mouse.y
              }
            }, this.draw = function () {
              i(this)
            }
          };
          break;
        case"downArrow":
          f.curLine = new function () {
            this.name = "downArrow", this.up = !1, this.id = a(), this.drawType = f.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
            var e = 0;
            this.init = function () {
              p(), this.points = [];
              var e = f.chart.toPxX(f.chart.xToBar(f.mouse.x)), t = f.mouse.y;
              return this.points.push([e, t]), this.points.push([e + 10, t - 10]), this.points.push([e + 10, t - 14]), this.points.push([e + 2, t - 6]), this.points.push([e + 2, t - 20]), this.points.push([e - 2, t - 20]), this.points.push([e - 2, t - 6]), this.points.push([e - 10, t - 14]), this.points.push([e - 10, t - 10]), this.points.push([e, t]), this.points
            }, this.moving = function () {
              if (f.mouseDown) {
                var t = f.mouse.x - f.mouseOri.x, n = f.mouse.y - f.mouseOri.y;
                e += t, 0 == n && 0 == t || this.points.forEach(function (t, r, o) {
                  t[0] += e - e % (f.chart.px.bar.spacing + f.chart.px.bar.width), t[1] += n
                }), e %= f.chart.px.bar.spacing + f.chart.px.bar.width, f.mouseOri.x = f.mouse.x, f.mouseOri.y = f.mouse.y
              }
            }, this.draw = function () {
              i(this)
            }
          }
      }
    }, setType: function (e) {
      f._drawType = e
    }, resize: function () {
      return f.w = f.canvas.width(), f.h = f.canvas.height(), this
    }, setChartData: function (t) {
      f.chart = t, f.chart.canvas.i.on({
        mousedown: function (t) {
          0 == t.button && (u(t), f.mouseOri.x = f.mouse.x, f.mouseOri.y = f.mouse.y, f.mouseDown = !0, f.curLine ? (f.objLines.push(f.curLine), f.curLine.init(), f.selectDrawObj = f.curLine, f.curLine = null) : function () {
            f.selectDrawObj = null;
            for (var t = 0; t < f.objLines.length; t++) switch (drawType = f.objLines[t].drawType || f.LINES, drawType) {
              case f.LINES:
                var n = l(f.objLines[t].points), r = c(f.objLines[t]);
                1 != n && 1 != r || (f.selectDrawObj = f.objLines[t], 0 == r && (f.selectDrawObj.selectPotIndex = null));
                break;
              case f.RECT:
                var o = [];
                f.objLines[t].points.forEach(function (e) {
                  o.push([e[0], e[1], e[2], e[1]]), o.push([e[2], e[1], e[2], e[3]]), o.push([e[2], e[3], e[0], e[3]]), o.push([e[0], e[3], e[0], e[1]])
                });
                var n = l(o), r = c(f.objLines[t]);
                1 != n && 1 != r || (f.selectDrawObj = f.objLines[t], 0 == r && (f.selectDrawObj.selectPotIndex = null));
                break;
              case f.ARROW:
                PtInPolygon([f.mouse.x, f.mouse.y], f.objLines[t].points) && (f.selectDrawObj = f.objLines[t])
            }
            e()
          }(), e())
        }, mousemove: function (t) {
          u(t);
          var n = !1;
          if (f.selectDrawObj && 1 == f.mouseDown && (f.selectDrawObj.moving(), n = !0), f.selectDrawObj && 0 == f.mouseDown) {
            var r = f.selectDrawObj.large, o = c(f.selectDrawObj);
            f.selectDrawObj.large = 1 == o
          }
          f.selectDrawObj && (n || r != f.selectDrawObj.large) && e()
        }
      }), $(document).on({
        mouseup: function (e) {
          1 == f.mouseDown && (f.mouseDown = !1, f.objLines && f.objLines.forEach(function (e) {
            e.selectPotIndex = null
          }))
        }, keydown: function (t) {
          var n = t || window.event;
          46 == (n.keyCode || n.which || n.charCode) && f.selectDrawObj && (f.objLines.forEach(function (e, t) {
            e.name == f.selectDrawObj.name && e.id == f.selectDrawObj.id && (f.objLines.splice(t, 1), 0 == f.objLines.length && f.nullDrawObj && f.nullDrawObj())
          }), e())
        }
      })
    }, ifNull: function (e) {
      f.nullDrawObj = e
    }, clean: function () {
      f.objLines = [], f.curLine = null, f.selectDrawObj = null, d.clearRect(0, 0, f.w, f.h), f.nullDrawObj && f.nullDrawObj()
    }, deleteLine: function () {
      f.selectDrawObj && (f.objLines.forEach(function (e, t) {
        e.name == f.selectDrawObj.name && e.id == f.selectDrawObj.id && (f.objLines.splice(t, 1), 0 == f.objLines.length && f.nullDrawObj && f.nullDrawObj())
      }), e())
    }
  }
}, C = {upArrow: "#ff4056", downArrow: "#34ce6b", line: "#787878", text: "#20acea", pot: "#20acea"};
Array.prototype.clone = function () {
  return JSON.parse(JSON.stringify(this))
};
var UserAccount_Class = function () {
    var e = null;
    return new function () {
      this.Build = function () {
        return null == e && ((e = new function () {
          var e = {orders: {}};
          return {
            orders: function () {
              return e.orders
            }, ordersAdd: function (t) {
              !function (t) {
                if (null != t && void 0 !== t) {
                  var n = null;
                  t.hasOwnProperty("exch") ? (n = t.exch, t.hasOwnProperty("orders") && null != t.orders && t.orders.hasOwnProperty("length") && (function (t, n) {
                    var r = "", o = 0;
                    millitime();
                    for (r in e.orders[n]) e.orders[n].hasOwnProperty(r) && (e.orders[n][r], delete e.orders[n][r]);
                    for (o = 0; o < t.length; o++) !function (t, n) {
                      var r = t.id, o = millitime();
                      null != n && void 0 !== n ? (e.orders[n] || (e.orders[n] = {}), e.orders[n].hasOwnProperty(r) ? e.orders[n][r].hasOwnProperty("added") && (e.orders[n][r].added = 0) : (e.orders[n][r] = {}, e.orders[n][r].added = o), e.orders[n][r].action = t.action, e.orders[n][r].amount = parseFloat(t.amount), e.orders[n][r].price = parseFloat(t.price), e.orders[n][r].base = t.base, e.orders[n][r].quote = t.quote, e.orders[n][r].status = t.status, "Unknown" == e.orders[n][r].status && (e.orders[n][r].status = "Open")) : DEBUG && _debug("Order triggered with no exchange!", RTBTC.ERROR)
                    }(t[o], n)
                  }(t.orders, n), RTBTC.trigger("orders"))) : DEBUG && _debug("No exchange sent with orders!", RTBTC.ERROR)
                } else _ordersFail()
              }(t)
            }
          }
        }).constructor = null), e
      }
    }
  }(), UserAccount, timesList = [], timeLimit = 1e3, times = 7,
  app = angular.module("tradeApp", ["ngCookies", "pascalprecht.translate", "sly"]).config(["$httpProvider", "$translateProvider", function (e, t) {
    e.interceptors.push("myInterceptor")
  }]).controller("tradeController", ["$scope", "$rootScope", "$http", "$cookies", "$timeout", "streamer", "klineStreamer", "tradeStreamer", "trollboxStreamer", "mktdataStreamer", "userStreamer", "$translate", "$q", "$interval", "pageLoading1", "urlSearch", "SPA", "divLoading", function ($scope, $rootScope, $http, $cookies, $timeout, streamer, klineStreamer, tradeStreamer, trollboxStreamer, mktdataStreamer, userStreamer, $translate, $q, $interval, pageLoading1, urlSearch, SPA, divLoading) {
    function changeChannel(e) {
      switch (e) {
        case"en":
          $scope.trollboxChannel = "en";
          break;
        case"cn":
          $scope.trollboxChannel = "zh";
          break;
        case"jp":
          $scope.trollboxChannel = "jp"
      }
      window.channel = $scope.trollboxChannel
    }

    function setFavorite(e) {
      angular.forEach($scope.products, function (t, n) {
        -1 != jQuery.inArray(t.symbol, e) && ($scope.products[n].pro = !0)
      }), $scope.getProNum()
    }

    function setProducts(e) {
      setCurProduct(e), angular.forEach(e, function (e, t) {
        var n = Math.abs(Math.log10(e.tickSize)), r = Math.abs(Math.log10(e.minTrade));
        e.priceTick = n, e.close = Number(e.close);
        var o = {};
        o.priceTick = n, o.qtyTick = r, $scope.productAccuracy[e.symbol] = o;
        var i;
        i = null == e.close || 0 == e.close ? "--" : 100 * Number(e.close - e.open) / e.open, e.changeRate = i, e.pro = !1, $scope.products.push(e), $scope.twoAsset[e.symbol] = {
          base: e.baseAsset,
          quote: e.quoteAsset
        }, $scope.lastPrices[e.symbol] = e.close
      }), $scope.sortProducts = $scope.products, $scope.getTransToUSDT($scope.products), $scope.getTotalTradeMoney($scope.products), localStorage.orderKey ? ($scope.orderKey = localStorage.orderKey, $scope.orderDesc = "true" == localStorage.orderDesc, $scope.isSameKey = localStorage.isSameKey, $scope.sortByKey(localStorage.orderKey, 1)) : ($scope.orderKey = "baseAsset", $scope.isSameKey = "baseAsset", $scope.orderDesc = !0, $scope.sortByKey("baseAsset")), setTimeout(function () {
        $scope.changeMarket($scope.getQuoteAsset)
      }, 500)
    }

    function setCurProduct(e) {
      angular.forEach(e, function (e, t) {
        if (e.symbol == $scope.product.symbol) {
          $scope.currentProduct = e, -1 == $scope.product.oriSymbol.indexOf("_") && location.replace("?symbol=" + $scope.currentProduct.baseAsset + "_" + $scope.currentProduct.quoteAsset), $scope.setInfoHref($scope.currentProduct.baseAsset, $scope.currentProduct.baseAssetName, window.localStorage.lang), Data.qouteFixed = $scope.currentProduct.priceTick = Math.abs(Math.log10($scope.currentProduct.tickSize)), Data.baseFixed = $scope.currentProduct.qtyTick = Math.abs(Math.log10($scope.currentProduct.minTrade)), chart.redraw(), $scope.currentProduct.amountTick = Math.abs(Math.log10($scope.currentProduct.tickSize * $scope.currentProduct.minTrade)), $scope.currentProduct.amountTick = Math.min($scope.currentProduct.amountTick, 8), $scope.depthMergeUnit = $scope.currentProduct.priceTick, $scope.depthUnits = $scope.depthUnits.filter(function (e) {
            return !(e.value >= $scope.currentProduct.priceTick)
          }), $scope.depthUnits = [];
          for (var n = 3; n >= 0;) $scope.currentProduct.priceTick - n < 0 ? n-- : ($scope.depthUnits.push({
            label: $scope.currentProduct.priceTick - n + " " + $translate.instant("decimal"),
            value: $scope.currentProduct.priceTick - n
          }), n--);
          $scope.selecteDepthUnit = $scope.depthUnits[$scope.depthUnits.length - 1], $scope.sell_order.sell_price = $scope.buy_order.price = Number(e.close).toFixed($scope.currentProduct.priceTick)
        }
      })
    }

    function userOrdersOndepth(e) {
      if (e && e instanceof Array) {
        var t = {};
        t.exch = "BIJIE", t.orders = [], e.forEach(function (e) {
          e.symbol == $scope.product.symbol && t.orders.push({
            id: e.id || e.orderId,
            action: e.side.toLowerCase(),
            amount: e.origQty,
            price: e.price,
            base: e.symbol,
            quote: $scope.quoteAsset,
            status: "Open"
          })
        }), UserAccount.ordersAdd(t)
      }
    }

    function floor(e, t) {
      return Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
    }

    function ceil(e, t) {
      return Math.ceil(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
    }

    function toOne(e, t) {
      return Math.atan(e) / Math.atan(t)
    }

    function GroupDepth(e, t, n, r) {
      angular.forEach(e, function (e) {
        if (8 != $scope.depthMergeUnit) {
          var o = !1;
          n.forEach(function (n) {
            n[0] == r(Number(e), $scope.depthMergeUnit) && (n[1] += Number(t[e]), n[2] += Number(t[e] * e), o = !0)
          }), o || n.push([r(Number(e), $scope.depthMergeUnit), Number(t[e]), Number(t[e]) * Number(e)])
        } else n.push([Number(e), Number(t[e]), Number(e) * Number(t[e])])
      })
    }

    function setUserOrders(e, t, n) {
      [e, t].forEach(function (e) {
        e && e.forEach(function (e) {
          "--" != e[0] && (e[4] = !1, n && n.forEach(function (t) {
            if (t.symbol == $scope.product.symbol) {
              var n = t.price;
              "SELL" == t.side ? n = ceil(n, $scope.depthMergeUnit) : "BUY" == t.side && (n = floor(n, $scope.depthMergeUnit)), e[0] == n && (e[4] = !0)
            }
          }))
        })
      })
    }

    function computBarWidth(e, t) {
      var n = [], r = [];
      angular.forEach(e, function (e) {
        n.push(e)
      }), angular.forEach(t, function (e) {
        r.push(e)
      });
      var o = sortDepth.medianUnit(n, r, 48);
      angular.forEach(e, function (e) {
        e.push({width: sortDepth.width(e[1], o) * depthDivWidth / 100})
      }), angular.forEach(t, function (e) {
        e.push({width: sortDepth.width(e[1], o) * depthDivWidth / 100})
      })
    }

    function AddBlankDepth(e) {
      for (; e.length < 31;) e.push(["--", "--", {width: 0}])
    }

    function InsertBlankDepth(e) {
      for (; e.length < 31;) e.unshift(["--", "--", {width: 0}])
    }

    function filterDepth(e, t) {
      e && e.forEach(function (e) {
        var n = Number(e[0]), r = Number(e[1]);
        0 != r ? t[n] = r : delete t[n]
      })
    }

    function statChange(e) {
      $scope.depthWrong = e;
      var t = $scope.$root.$$phase;
      "$apply" != t && "$digest" != t && $scope.$apply()
    }

    window.log = console.log, console.log = function () {
    }, SPA.UrlChange = function () {
      $scope.product = {}, $scope.product.oriSymbol = urlSearch.getUrlParam("symbol") || "BNB_BTC", $scope.product.symbol = $scope.product.oriSymbol.replace("_", ""), $scope.baseAsset = $scope.product.oriSymbol.split("_")[0], $scope.quoteAsset = $scope.product.oriSymbol.split("_")[1], $scope.buy_order.quantity = "", $scope.sell_order.sell_quantity = "", $scope.market_buy_order.quantity = "", $scope.market_sell_order.quantity = "", divLoading.loading("#chart"), RTBTC.instrument("Binance", $scope.product.symbol, $scope.quoteAsset), chart.setResolution(Number(periord[$scope.curIndex])), $scope.Islogin && ($scope.getCommission($scope.product.symbol), $scope.getDealOrders($scope.product.symbol), $scope.getUserAsset()), setCurProduct($scope.products), $scope.getStreamers(), $scope.getLocalProStatus()
    }, $rootScope.pageTitle = $translate.instant("zypro"), pageLoading1.loading(), $rootScope.curPage = "trade", $scope.callInfoArr = eval("(" + localStorage.callInfoArr + ")"), $scope.urlPath = encodeURIComponent(location.pathname + location.search), $scope.curIndex = 1 * localStorage.curIndexApp || 0;
    var periord = [60, 60, 300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 604800], maxMessage;
    $scope.loadTrollbox = function () {
      maxMessage = 30, null != $scope.trollboxStreamerInstance && ($scope.trollboxStreamerInstance.stopStream(), $scope.trollboxStreamerInstance = null), $scope.msgCount = maxMessage, $scope.connectTrollbox = function (e) {
        null == $scope.trollboxStreamerInstance && ($scope.trollboxStreamerInstance = new trollboxStreamer, $scope.trollboxStreamerInstance.startStream("trollbox_" + $scope.trollboxChannel, e, function (e) {
          $scope.trollboxCallback(e)
        }))
      };
      $scope.getLast = function () {
        $http.get("/exchange/trollbox/last?channel=" + $scope.trollboxChannel).success(function (e) {
          data = e.msg, data.reverse(), $(".trollbox-list").html("");
          for (var t in data) d = {}, d.u = data[t].username.split("@")[0], d.m = data[t].message, d.d = data[t].datetime, d.id = data[t].id, d.to = data[t].toUserId, $scope.trollboxCallback(d)
        })
      }, $scope.getLast(), window.WebSocket ? $scope.trollboxUrl ? $scope.connectTrollbox($scope.trollboxUrl) : $http.get("/exchange/public/trollboxWssUrl").success(function (e) {
        $scope.trollboxUrl = e, $scope.connectTrollbox(e)
      }) : $interval(function () {
        $scope.getLast()
      }, 1e3), $scope.getTopMsg = function (e) {
        maxMessage = e, $scope.showTool = !1, $scope.msgCount != e && $scope.getLast(), $scope.msgCount = e
      }
    }, $rootScope.switching = function (e) {
      window.localStorage.lang = e, $scope.cur_lang = e, changeChannel(e), $scope.setInfoHref($scope.currentProduct.baseAsset, $scope.currentProduct.baseAssetName, e)
    }, $scope.cur_lang = window.localStorage.lang, window.channel = window.localStorage.lang, changeChannel(window.localStorage.lang), $scope.getUserAsset = function () {
      $http.post("/exchange/private/userAsset").success(function (e) {
        $scope.userAssets = e, angular.forEach(e, function (e, t) {
          e.asset == $scope.quoteAsset ? $scope.qouteFree = 1 * e.free : e.asset == $scope.baseAsset && ($scope.baseFree = 1 * e.free)
        })
      })
    }, $scope.getCommission = function (e, t) {
      $http.get("/exchange/public/userTradeFee?symbol=" + e).success(function (e) {
        $scope.buyFee = e.buyMakerCommission, $scope.sellFee = e.sellMakerCommission
      })
    }, $scope.getCnyusd = function () {
      $http.get("/exchange/public/cnyusd").success(function (e) {
        $scope.cnyusdRate = e.rate
      })
    }, $scope.getCnyusd(), $scope.getTransToUSDT = function (e) {
      angular.forEach(e, function (e, t) {
        "USDT" == e.quoteAsset && ($scope.transToUSDT[e.baseAsset] = e.close)
      }), $scope.transToUSDT.USDT = 1
    };
    var lastProcductclicktime;
    $scope.changeProduct = function (e, t, n, r, o) {
      if (n.stopPropagation(), lastProcductclicktime) {
        if ((new Date).getTime() - lastProcductclicktime < 500) return
      } else lastProcductclicktime = (new Date).getTime();
      lastProcductclicktime = (new Date).getTime(), localStorage.ProStatus = e + t, localStorage.setStatus = e + "_" + t, localStorage.quoteAsset = t, localStorage.curMarket = r, localStorage.thisMarket = "" == r ? "Favorete" : t, SPA.setUrl("?symbol=" + e + "_" + t)
    }, $scope.getLocalProStatus = function () {
      void 0 !== localStorage.ProStatus && ($scope.proStatus = localStorage.ProStatus, window.location.search.indexOf("symbol") < 0 && (window.location.href = "/trade.html?symbol=" + localStorage.setStatus)), void 0 !== localStorage.quoteAsset ? void 0 !== localStorage.thisMarket && "Favorete" == localStorage.thisMarket ? ($scope.getQuoteAsset = "", $scope.curMarket = "", $scope.isPro = !0) : $scope.getQuoteAsset = localStorage.quoteAsset : $scope.getQuoteAsset = "BTC"
    }, $scope.infoLink = "", $scope.infoFullName = "", $scope.setInfoHref = function (e, t, n) {
      console.log(e, t), $.getJSON("https://info.binance.com/getInfo?name=" + t, function (t) {
        t.length > 0 ? t[0].name == e ? ($scope.infoFullName = t[0].fullName, $scope.infoLink = "cn" == n ? "https://info.binance.com/cn/currencies/" + t[0].pathName : "https://info.binance.com/en/currencies/" + t[0].pathName) : (console.log("没有匹配的币种"), $scope.infoLink = "", $scope.infoFullName = "") : ($scope.infoLink = "", $scope.infoFullName = "")
      })
    }, $scope.localListData = [], $scope.favoriteFun = function (e, t, n) {
      if (e.stopPropagation(), n) $scope.Islogin ? $http.post("/exchange/private/deletePortfolio", $.param({symbol: t})).success(function (e) {
        for (var n = 0; n < $scope.sortProducts.length; n++) if (t == $scope.sortProducts[n].symbol) {
          $scope.sortProducts[n].pro = !1;
          break
        }
        $scope.getProNum()
      }) : (console.log("未登录，删除本地"), angular.forEach($scope.sortProducts, function (e, n) {
        t == e.symbol && (e.pro = !1)
      }), $scope.getProNum(), $scope.removeByValue($scope.localListData, t), localStorage.sortLists = JSON.stringify($scope.localListData), console.log(localStorage.sortLists)); else if ($scope.Islogin) $http.post("/exchange/private/addPortfolio", $.param({symbol: t})).success(function (e) {
        for (var n = 0; n < $scope.sortProducts.length; n++) t == $scope.sortProducts[n].symbol && ($scope.sortProducts[n].pro = !0);
        $scope.getProNum()
      }); else {
        console.log("未登录，添加到本地");
        for (var r = 0; r < $scope.sortProducts.length; r++) t == $scope.sortProducts[r].symbol && ($scope.sortProducts[r].pro = !0, $scope.localListData.push($scope.sortProducts[r].symbol));
        $scope.getProNum(), localStorage.sortLists = JSON.stringify($scope.localListData), console.log(JSON.parse(localStorage.sortLists).length)
      }
    }, $scope.removeByValue = function (e, t) {
      for (var n = 0; n < e.length; n++) if (e[n] == t) {
        e.splice(n, 1);
        break
      }
    }, $scope.noLoginFavoreteFun = function () {
      void 0 !== localStorage.sortLists && ($scope.localListData = JSON.parse(localStorage.sortLists));
      var e = $scope.localListData, t = $scope.sortProducts;
      angular.forEach(e, function (e) {
        angular.forEach(t, function (t) {
          e == t.symbol && (t.pro = !0)
        })
      }), $scope.getProNum()
    }, $scope.getFocus = function () {
      $("#search-int").addClass("active")
    }, $scope.getBlur = function () {
      $("#search-int").removeClass("active"), $scope.marketsKeyWords = ""
    }, $scope.getFavorite = function () {
      if ($scope.Islogin) $http.post("/exchange/private/portfolios").success(function (e) {
        setFavorite(e.data)
      }); else if (localStorage.sortLists) {
        setFavorite(JSON.parse(localStorage.sortLists))
      }
    }, $scope.getProNum = function () {
      var e = 0;
      angular.forEach($scope.products, function (t, n) {
        t.pro && e++
      }), e > 0 ? $scope.noPro = !1 : ($scope.noPro = !0, localStorage.thisMarket = "")
    }, $scope.isShowLegal = !1, $scope.showLegal = function (e, t, n, r) {
      $scope.isShowLegal = !0;
      var o, i = $(".market-con ul").eq(e).offset();
      o = "cn" != $scope.cur_lang ? "$" + (t * $scope.transToUSDT[r]).toFixed(2) : "￥" + (t * $scope.transToUSDT[r] * $scope.cnyusdRate).toFixed(2), $(".legal").css({
        position: "absolute",
        left: i.left,
        top: i.top
      }), $scope.legal = o, $scope.legalLink = "/trade.html?symbol=" + n + "_" + r
    }, $scope.hideLegal = function () {
      $scope.isShowLegal = !1
    }, $scope.product = {}, $scope.product.oriSymbol = urlSearch.getUrlParam("symbol") || "BNB_BTC", $scope.product.symbol = $scope.product.oriSymbol.replace("_", ""), $scope.baseAsset = $scope.product.oriSymbol.split("_")[0], $scope.quoteAsset = $scope.product.oriSymbol.split("_")[1], $scope.depthUnits = [], $scope.products = [], $scope.sortProducts = [], $scope.transToUSDT = {}, $scope.currentProduct = {}, $scope.getTradeLists = function () {
      $http.get("/exchange/public/product").success(function (e) {
        if (e.data.length) {
          for (var t = e.data, n = !1, r = 0; r < t.length; r++) t[r].symbol == $scope.product.symbol && (n = !0);
          n ? setProducts(t) : $http.get("/exchange/public/product?symbol=" + $scope.product.symbol).success(function (e) {
            t.push(e.data[0]), setProducts(t)
          })
        } else $scope.products = [];
        $scope.Islogin && $scope.getUserInfo(e.data)
      })
    }, $scope.twoAsset = {}, $scope.productAccuracy = {}, $scope.getTotalTradeMoney = function (e) {
      var t = {};
      $rootScope.totalTradeMoney = [], angular.forEach(e, function (e, n) {
        t[e.quoteAsset] || (t[e.quoteAsset] = 0), t[e.quoteAsset] += Number(e.tradedMoney)
      });
      for (var n in t) $rootScope.totalTradeMoney.push([n, t[n]]);
      console.log($rootScope.totalTradeMoney)
    }, localStorage.marketChange ? $scope.marketChange = localStorage.marketChange : $scope.marketChange = "changeRate", $scope.selectMarketKey = function () {
      localStorage.marketChange = $scope.marketChange
    };
    var root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1",
      klineDataCach = {};
    $scope.cal = function (e, t, n, r) {
      var o = $(n.target).parent("span"), i = Math.pow(.1, e), s = o.siblings("input"), a = s.val();
      a ? t ? s.val((1 * a + i).toFixed(e)) : a > i && s.val((1 * a - i).toFixed(e)) : (a = i, s.val(a.toFixed(e))), "buy" == r ? $scope.buy_order.total = Math.round((1 * a).toFixed(e) * $scope.buy_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8) : "sell" == r ? $scope.sell_order.sell_total = Math.round($scope.sell_order.sell_quantity * (1 * a).toFixed(e) * Math.pow(10, 8)) / Math.pow(10, 8) : "stopbuy" == r ? $scope.stopBuy_order.total = Math.round((1 * a).toFixed(e) * $scope.stopBuy_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8) : "stopsell" == r && ($scope.stopSell_order.total = Math.round((1 * a).toFixed(e) * $scope.stopSell_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8)), s.trigger("input")
    }, $scope.changeMarket = function (e) {
      $scope.Islogin ? $scope.getFavorite() : $scope.noLoginFavoreteFun()
    }, $scope.changeZixuan = function () {
      $scope.Islogin ? $scope.getFavorite() : $scope.noLoginFavoreteFun()
    }, $scope.getLocalProStatus(), $scope.getTradeLists(), $scope.sortByKey = function (e, t) {
      $scope.orderKey = e, $scope.isSameKey != e ? ($scope.isSameKey = e, $scope.orderDesc = !0) : t || ($scope.orderDesc = !$scope.orderDesc), localStorage.orderKey = e, localStorage.orderDesc = $scope.orderDesc, localStorage.isSameKey = $scope.isSameKey
    };
    var translateResolution = function (e) {
      switch (e) {
        case"0":
        case"60":
          return "1m";
        case"180":
          return "3m";
        case"300":
          return "5m";
        case"900":
          return "15m";
        case"1800":
          return "30m";
        case"3600":
          return "1h";
        case"7200":
          return "2h";
        case"14400":
          return "4h";
        case"21600":
          return "6h";
        case"43200":
          return "12h";
        case"86400":
          return "1d";
        case"259200":
          return "3d";
        case"604800":
          return "1w"
      }
      console.log("Error parsing resolution: " + e)
    }, interval = "60", exchangeInterval = translateResolution(interval), settings = {
      t: Number(interval),
      icontrols: !0,
      i: [{m: !0, p: 0, h: 50, u: [], o: []}, {m: !1, t: "vol", i: null, p: 5, h: 10, r: []}, {
        m: !1,
        t: "macd",
        i: null,
        p: 5,
        h: 10,
        r: []
      }]
    };
    window.chart = (new Chart).build("#chart", null, settings), chart.onTheme("chart-white2"), window.UserAccount = UserAccount_Class.Build(), RTBTC.instrument("BIJIE", $scope.product.symbol, $scope.quoteAsset);
    var depthChart = (new VisualDepth).build("#depth", $("#p"));
    depthChart.onTheme("depth-white"), $scope.getOrders = function () {
      $http({method: "post", url: "/exchange/private/openOrders"}).success(function (e) {
        $scope.openOrders = e, userOrdersOndepth(e), setUserOrders($scope.asksTwenty, $scope.bidsTwenty, $scope.openOrders)
      })
    }, $scope.getTradeOrders = function () {
      var e = new Date, t = e.getTime(), n = e.setDate(e.getDate() - 1),
        r = $.param({start: n, end: t, page: 1, rows: 20});
      $http.post("/exchange/private/tradeOrders", r).success(function (e) {
        $scope.allOrders = e.data, angular.forEach($scope.allOrders, function (e, t) {
          0 == e.statusCode && ($scope.allOrders[t].executedPrice = e.price)
        })
      })
    }, $scope.deleteOrder = function (e, t) {
      var n = {method: "post", url: "/exchange/private/deleteOrder", data: $.param({orderId: e, symbol: t})};
      $http(n).then(function (e) {
        layer.msg($translate.instant("cancelOrderSucceed"), {icon: 1, shift: 1, time: 500})
      }, function (e) {
        layer.msg($translate.instant("cancelOrderFail") + e.data.msg, {icon: 5, shift: 1, time: 500})
      })
    }, $scope.caculateNum = function (e) {
      var t = 0;
      return "All" == e ? t = $scope.openOrders.length : "Stop-Limit" == e ? angular.forEach($scope.openOrders, function (e, n) {
        e.stopPrice && (t += 1)
      }) : "Limit" == e && angular.forEach($scope.openOrders, function (e, n) {
        e.stopPrice || (t += 1)
      }), t
    }, $scope.deleteAllOrderAsk = function (e) {
      var t, n;
      "Limit" == e ? (n = $scope.caculateNum("Limit"), t = "Are you sure to cancel all Limit orders?") : "Stop-Limit" == e ? (n = $scope.caculateNum("Stop-Limit"), t = "Are you sure to cancel all Stop-Limit orders?") : "All" == e && (n = $scope.caculateNum("All"), t = "Are you sure you want to cancel all?"), n && layer.confirm($translate.instant(t), {
        closeBtn: 1,
        title: null,
        btn: [$translate.instant("Yes"), $translate.instant("No")]
      }, function () {
        angular.forEach($scope.openOrders, function (t) {
          var n = {
            method: "post",
            url: "/exchange/private/deleteOrder",
            data: $.param({orderId: t.orderId, symbol: t.symbol})
          };
          "All" == e ? $http(n).then(function (e) {
            layer.msg($translate.instant("cancelOrderSucceed"), {icon: 1, shift: 1, time: 500})
          }, function (e) {
            layer.msg($translate.instant("cancelFailed") + e.data.msg, {icon: 2, shift: 1, time: 500})
          }) : "Limit" == e ? t.stopPrice || $http(n).then(function (e) {
            layer.msg($translate.instant("cancelOrderSucceed"), {icon: 1, shift: 1, time: 500})
          }, function (e) {
            layer.msg($translate.instant("cancelFailed") + e.data.msg, {icon: 2, shift: 1, time: 500})
          }) : "Stop-Limit" == e && t.stopPrice && $http(n).then(function (e) {
            layer.msg($translate.instant("cancelOrderSucceed"), {icon: 1, shift: 1, time: 500})
          }, function (e) {
            layer.msg($translate.instant("cancelFailed") + e.data.msg, {icon: 2, shift: 1, time: 500})
          })
        })
      }, function () {
        layer.close()
      })
    };
    var showAskCount = 5, showBidCount = 5;
    $scope.depthMergeUnit = 8;
    var initScroll = 0;
    $scope.trades = [], $scope.todayTrades = [], $scope.streamBids = {}, $scope.streamBidsKeys = [], $scope.streamAsks = {}, $scope.streamAsksKeys = [];
    var callback = function (e) {
      if ("depthUpdate" == e.eventType) {
        console.log(e.bids), filterDepth(e.bids, $scope.streamBids), filterDepth(e.asks, $scope.streamAsks), OBD.loadBook($scope.streamAsks, $scope.streamBids, 9999999), $scope.streamBidsKeys = Object.keys($scope.streamBids).sort(function (e, t) {
          return e - t
        }).reverse(), $scope.streamAsksKeys = Object.keys($scope.streamAsks).sort(function (e, t) {
          return e - t
        });
        var t = [], n = [];
        GroupDepth($scope.streamBidsKeys, $scope.streamBids, t, floor), GroupDepth($scope.streamAsksKeys, $scope.streamAsks, n, ceil), t[0] && n[0] && !isNaN(Number(t[0][0])) && !isNaN(Number(n[0][0])) && Number(t[0][0]) >= Number(n[0][0]) && $scope.streamerInstance.RePull(), t.length > 100 && (t = t.slice(0, 100)), $scope.bidsTwenty = t, n.length > 100 && (n = n.slice(0, 100)), $scope.asksTwenty = n.reverse(), ($scope.bidsTwenty.length || $scope.asksTwenty.length) && computBarWidth($scope.bidsTwenty, $scope.asksTwenty), setUserOrders($scope.asksTwenty, $scope.bidsTwenty, $scope.openOrders), AddBlankDepth($scope.bidsTwenty), InsertBlankDepth($scope.asksTwenty);
        var r = Math.abs(document.getElementById("askScrollBox").scrollHeight - $("#askScrollBox").height() - document.getElementById("askScrollBox").scrollTop) < 1;
        "$apply" != (s = $scope.$root.$$phase) && "$digest" != s && $scope.$apply(), r && $timeout(function () {
          document.getElementById("askScrollBox").scrollTop = document.getElementById("askScrollBox").scrollHeight
        })
      } else if ("trade" == e.eventType) {
        if (e.price = Number(e.price).toFixed(8), e.qty = Number(e.qty).toFixed(8), (0 == $scope.trades.length || $scope.trades[0].aggTradeId < e.aggTradeId) && $scope.trades.unshift(e), !$scope.currentProduct.lastAggTradeId || null == $scope.currentProduct.lastAggTradeId || $scope.currentProduct.lastAggTradeId >= e.aggTradeId) return;
        var o = Number(e.price);
        for (var i in $scope.products) $scope.products[i].symbol == e.symbol && ($scope.products[i].lastAggTradeId = e.aggTradeId, $scope.lastPrices[e.symbol] = o, $scope.products[i].close = o);
        var s = $scope.$root.$$phase;
        "$apply" != s && "$digest" != s && $scope.$apply()
      } else "kline" == e.eventType ? e.kline.interval == exchangeInterval && Data.onBar([e.kline.time, Number(e.kline.open), Number(e.kline.high), Number(e.kline.low), Number(e.kline.close), Number(e.kline.volume), Number(e.kline.quoteVolume)], Number(interval)) : (console.log("Error! Bad data received:"), console.log(e))
    };
    $scope.depthMergeChange = function (e) {
      $scope.depthMergeUnit = e, callback({eventType: "depthUpdate"})
    };
    var depthDivWidth = 253, isPreKLine = !0, isKLine = !0, setResolution = function (e, t) {
      chart.setCrossHair(!0), t ? (isPreKLine || (chart.fixTime(!1), chart.setBarwidth(5), chart.clearData(), chart.removeIndicatorByname(["avl"]), chart.addOrUpdateIndicator("ma", 7), chart.addOrUpdateIndicator("ma", 25), chart.addOrUpdateIndicator("ma", 99), chart.setMode("Candle"), isPreKLine = !0), exchangeInterval = translateResolution(interval = e), chart.setResolution(Number(e))) : (isPreKLine && (chart.fixTime(!1), chart.clearData(), chart.setLastColorIndex(0), chart.removeIndicatorByname(["ma", "ma", "ma"]), chart.addOrUpdateIndicator("avl"), chart.setMode("Line"), isPreKLine = !1), exchangeInterval = translateResolution(interval = "60"), chart.setResolution(60))
    };
    $scope.getByInterval = function (e, t) {
      firstLoad != t && (setResolution(e, !0), $scope.curIndex = t, firstLoad = t, localStorage.curIndexApp = t)
    }, $scope.setTimeLine = function (e) {
      firstLoad != e && (setResolution("60", !1), $scope.curIndex = e, localStorage.curIndexApp = e, firstLoad = e)
    }, parseInt($scope.curIndex) ? (isPreKLine = !1, chart.setLastColorIndex(1), $scope.getByInterval(periord[parseInt($scope.curIndex)] + "", parseInt($scope.curIndex))) : (isPreKLine = !0, $scope.setTimeLine($scope.curIndex)), $scope.chartLoaded = function () {
      $scope.klineStreamer && $scope.klineStreamer.stopStream(), $scope.loaded = !0, $http.get("/exchange/public/klineUrl").success(function (e) {
        $scope.connectToKlineStreamer(e)
      })
    };
    var firstLoad = "-1";
    Data.onLoaded(function () {
      divLoading.close("#chart"), $scope.chartLoaded()
    }), $scope.dealOrders = [], $scope.getDealOrders = function (e) {
      var t = new Date, n = t.getTime(), r = t.setDate(t.getDate() - 1),
        o = $.param({page: 1, rows: 40, start: r, end: n, symbol: e});
      $http.post("/exchange/private/userTrades", o).success(function (e) {
        $scope.dealOrders = [], e.data ? ($scope.scrollLoading = !1, angular.forEach(e.data, function (e) {
          -1 == $scope.dealOrders.indexOf(e) && $scope.dealOrders.push(e)
        })) : $scope.dealOrders = []
      })
    }, $scope.delayHide = function (e, t) {
      $scope[t] = $timeout(function () {
        $scope[e] = !1
      }, 500)
    }, $scope.clearTimer = function (e) {
      $timeout.cancel($scope[e])
    }, $scope.isLogin = function () {
      if ("y" == $cookies.logined) {
        $scope.Islogin = !0;
        $cookies.userId;
        return $scope.getOrders(), $scope.getTradeOrders(), $scope.getDealOrders($scope.product.symbol), $scope.getUserAsset($scope.product.symbol), $scope.getCommission($scope.product.symbol), !0
      }
      return $scope.Islogin = !1, !1
    }, $scope.isLogin(), $scope.disconnect = function () {
      $scope.streamerInstance.stopStream(), $scope.streamerInstance = null
    }, $scope.connectToSymbol = function (e) {
      null == $scope.streamerInstance ? $scope.streamerInstance = new streamer : $scope.streamerInstance.stopStream(), $scope.streamerInstance.startStream($scope.product.symbol, e, function (e) {
        e.clean && ($scope.streamBids = {}, $scope.streamAsks = {}), callback(e)
      }, statChange)
    }, $scope.connectToTradeStream = function (e) {
      divLoading.loading("#tradeHistory"), null == $scope.streamerTrade ? $scope.streamerTrade = new tradeStreamer : $scope.streamerTrade.stopStream(), $scope.streamerTrade.startStream($scope.product.symbol, e, function (e) {
        1 == e.clean && ($scope.trades = [], $scope.todayTrades = []), callback(e), divLoading.close("#tradeHistory")
      })
    }, $scope.connectToKlineStreamer = function (e) {
      null == $scope.klineStreamer ? $scope.klineStreamer = new klineStreamer : $scope.klineStreamer.stopStream(), $scope.klineStreamer.startStream($scope.product.symbol, e, translateResolution(interval), function (e) {
        callback(e)
      })
    }, $scope.lastPrices = {}, $scope.connectToMktdata = function (e) {
      null == $scope.streamerMktdata && ($scope.streamerMktdata = new mktdataStreamer, $scope.streamerMktdata.startStream(e, function (e) {
        e.forEach(function (e) {
          if ("trade" == e.eventType) {
            for (var t in $scope.products) $scope.products[t].symbol == e.symbol && ($scope.lastPrices[e.symbol] = $scope.products[t].close, $scope.products[t].close = Number(e.price), $scope.products[t].open = e.open, $scope.products[t].high = e.high, $scope.products[t].low = e.low, $scope.products[t].volume = Number(e.volume), $scope.products[t].changeRate = 100 * Number(1 * e.price - e.open) / e.open, $scope.products[t].tradedMoney = Number(e.quoteVolume));
            $scope.getTransToUSDT($scope.products), $scope.getTotalTradeMoney($scope.products), $scope.sortByKey($scope.orderKey, 1)
          }
        });
        var t = $scope.$root.$$phase;
        "$apply" != t && "$digest" != t && $scope.$apply()
      }))
    }, $scope.getStreamers = function () {
      $scope.connectToTradeStream($scope.wssUrl), $scope.connectToSymbol($scope.wssUrl)
    }, window.WebSocket ? ($http.get("/exchange/public/wssUrl").success(function (e) {
      $scope.wssUrl = e, $scope.connectToSymbol(e), $scope.connectToTradeStream(e)
    }), $http.get("/exchange/public/mktdataWssUrl").success(function (e) {
      $scope.connectToMktdata(e)
    })) : $interval(function () {
      $scope.getNewest(), $scope.getBestTwenty(), $scope.getTodayTrades(), $scope.getTradeLists()
    }, 1e3), $scope.userCallback = function (e) {
      if ("outboundAccountInfo" == e.eventType) {
        e.balances.forEach(function (e) {
          if (e.asset == $scope.quoteAsset && ($scope.qouteFree = e.free), e.asset == $scope.baseAsset && ($scope.baseFree = e.free), $scope.userAssets instanceof Array) {
            var t;
            $scope.userAssets.forEach(function (n, r) {
              n.asset == e.asset && (n.locked = e.locked, n.free = e.free, $scope.currentUserAsset = n.free, 0 == $scope.currentUserAsset ? $scope.takeDelivery = !1 : $scope.takeDelivery = !0, 0 == parseFloat(n.free).toFixed(2) && 0 == parseFloat(n.locked).toFixed(2) && 0 == parseFloat(n.freeze).toFixed(2) && 0 == parseFloat(n.ipoing).toFixed(2) && 0 == parseFloat(n.ipoable).toFixed(2) && 0 == parseFloat(n.storage).toFixed(2) && (t = r))
            }), void 0 !== t && $scope.userAssets.splice(t, 1)
          }
        })
      }
      if ("executionReport" == e.eventType) {
        var t = {};
        switch (t.time = e.time, t.symbol = e.symbol, t.side = e.side, t.type = e.orderType, t.orderType = $translate.instant(t.type), t.status = e.orderStatus, t.workingIndicator = e.workingIndicator, t.origQty = parseFloat(e.qty), t.price = parseFloat(e.price), t.stopPrice = parseFloat(e.stopPrice), t.executedQty = parseFloat(e.cummulativeQty), t.commissionAsset = e.commissionAsset, t.orderId = e.orderId, "STOP_LOSS_LIMIT" != t.type && "TAKE_PROFIT_LIMIT" != t.type || (t.orderType = $translate.instant("Stop-Limit")), e.orderStatus) {
          case"NEW":
            t.executedQty = 0, t.executedPrice = 0, console.log(t.symbol + " 委托" + t.origQty), "LIMIT" == t.type || "MARKET" == t.type ? ($scope.openOrders.splice(0, 0, t), $scope.IsopenOrdersNull = !1) : "STOP_LOSS_LIMIT" != t.type && "TAKE_PROFIT_LIMIT" != t.type || (t.workingIndicator ? angular.forEach($scope.openOrders, function (e, n) {
              t.orderId == e.orderId && t.symbol == e.symbol && ($scope.openOrders[n].workingIndicator = t.workingIndicator)
            }) : ($scope.openOrders.splice(0, 0, t), $scope.IsopenOrdersNull = !1));
            break;
          case"PARTIALLY_FILLED":
            var n = parseFloat(e.lastQty), r = parseFloat(e.lastPrice), o = parseFloat(e.cummulativeQty);
            $scope.openOrders instanceof Array && $scope.openOrders.forEach(function (e) {
              e.symbol == t.symbol && e.orderId == t.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + r * n) / o, e.executedQty = o, e.executedQuoteQty = e.executedPrice * e.executedQty, e.status = $translate.instant("PARTIALLY_FILLED"))
            });
            var i = {};
            i.symbol = e.symbol, i.time = e.time, i.side = e.side, i.qty = e.lastQty, i.price = e.lastPrice, i.totalQuota = n * r, i.fee = parseFloat(e.commission), t.symbol == $scope.product.symbol && ($scope.dealOrders.splice(0, 0, i), $scope.dealBigTotalItems = $scope.dealOrders.length);
            break;
          case"FILLED":
            var s = parseFloat(e.lastQty), a = parseFloat(e.lastPrice), l = parseFloat(e.cummulativeQty);
            console.log(e), $scope.openOrders instanceof Array && $scope.openOrders.forEach(function (e) {
              e.symbol == t.symbol && e.orderId == t.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + a * s) / l, e.executedQty = l, e.status = $translate.instant("FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty, d = e)
            });
            var c = {};
            c.symbol = t.symbol, c.time = t.time, c.side = t.side, c.qty = s, c.price = a;
            var u = parseFloat(e.commission);
            c.fee = u, c.totalQuota = s * a, t.symbol == $scope.product.symbol && ($scope.dealOrders.splice(0, 0, c), $scope.dealBigTotalItems = $scope.dealOrders.length), $scope.allOrders.splice(0, 0, d);
            var p;
            $scope.openOrders.forEach(function (e, n) {
              e.symbol == t.symbol && e.orderId == t.orderId && (p = n)
            }), $scope.openOrders.splice(p, 1), 0 == $scope.openOrders.length ? $scope.IsopenOrdersNull = !0 : $scope.IsopenOrdersNull = !1;
            break;
          case"CANCELED":
          case"EXPIRED":
            var f, d, s = parseFloat(e.lastQty), a = parseFloat(e.lastPrice), l = parseFloat(e.cummulativeQty);
            $scope.openOrders.forEach(function (e, n) {
              e.symbol == t.symbol && e.orderId == t.orderId && (f = n, 0 == l ? (e.executedPrice = t.price, e.status = $translate.instant("CANCELED"), "MARKET" == t.type && (e.status = $translate.instant("EXPIRED")), e.executedQuoteQty = 0) : (e.executedPrice = (e.executedQty * e.executedPrice + a * s) / l, e.executedQty = l, e.status = $translate.instant("PARTIALLY_FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty), d = e)
            }), $scope.openOrders.splice(f, 1), 0 == $scope.openOrders.length ? $scope.IsopenOrdersNull = !0 : $scope.IsopenOrdersNull = !1, $scope.allOrders.splice(0, 0, d)
        }
      }
      userOrdersOndepth($scope.openOrders), setUserOrders($scope.asksTwenty, $scope.bidsTwenty, $scope.openOrders);
      var h = $scope.$root.$$phase;
      "$apply" != h && "$digest" != h && $scope.$apply()
    }, $scope.updatePosition = function (e, t, n, r) {
      var o, i;
      if ($scope.userAssets instanceof Array && $scope.userAssets.forEach(function (t, n) {
          t.asset == e.symbol.substr(0, 3) && (o = t, i = n)
        }), !o && "BUY" == e.side) {
        var s = {};
        s.asset = e.symbol.replace(e.commissionAsset, ""), s.productName = e.productName, s.free = t, s.locked = 0, s.freeze = 0, s.withdrawing = 0, s.ipoing = 0, s.ipoable = 0, s.storage = 0, s.quoteAsset = e.commissionAsset, s.price = n, s.marketValue = t * n, s.profitLoss = -r, $scope.userAssets.splice(0, 0, s)
      }
      0 == $scope.userAssets.length && ($scope.totalMarketValue = 0, $scope.totalProfit = 0)
    }, $scope.getUserInfo = function (e) {
      var t = {};
      t.method = "post", t.url = "/exchange/private/startStream", $http(t).success(function (t) {
        $http.get("/exchange/public/wssUrl").success(function (n) {
          var r = n + "/" + t.listenKey;
          $interval(function () {
            $http({
              url: "/exchange/private/pingStream",
              method: "post",
              data: "listenKey=" + t.listenKey
            }).success(function () {
              console.log("pingStream success")
            })
          }, 18e5), null == $scope.userStreamerInstance && ($scope.userStreamerInstance = new userStreamer, $scope.userStreamerInstance.startStream(r, function (t) {
            $scope.userCallback(t, e)
          }))
        })
      })
    }, $scope.trade = function (e) {
      isNaN(Number(e)) || ("limit" == $scope.orderType.v ? ($scope.buy_order.price = Number(e).toFixed($scope.currentProduct.priceTick), $scope.sell_order.sell_price = Number(e).toFixed($scope.currentProduct.priceTick), $scope.buy_order.price && !$scope.buy_order.quantity && $scope.buy_order.total ? $scope.buy_order.quantity = Math.floor($scope.buy_order.total / $scope.buy_order.price * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.buy_order.price && $scope.buy_order.quantity && ($scope.buy_order.total = Math.round($scope.buy_order.price * $scope.buy_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8)), $scope.sell_order.sell_price && !$scope.sell_order.sell_quantity && $scope.sell_order.sell_total ? $scope.sell_order.sell_quantity = Math.floor($scope.sell_order.sell_total / $scope.sell_order.sell_price * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.sell_order.sell_price && $scope.sell_order.sell_quantity && ($scope.sell_order.sell_total = Math.round($scope.sell_order.sell_price * $scope.sell_order.sell_quantity * Math.pow(10, 8)) / Math.pow(10, 8))) : "stopLimit" == $scope.orderType.v && ($scope.stopBuy_order.stopPrice = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopBuy_order.price = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopSell_order.stopPrice = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopSell_order.curPrice = Number(e).toFixed($scope.currentProduct.priceTick), $scope.stopBuy_order.price && !$scope.stopBuy_order.quantity && $scope.stopBuy_order.total ? $scope.stopBuy_order.quantity = Math.floor($scope.stopBuy_order.total / $scope.stopBuy_order.price * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.stopBuy_order.price && $scope.stopBuy_order.quantity && ($scope.stopBuy_order.total = Math.round($scope.stopBuy_order.price * $scope.stopBuy_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8)), $scope.stopSell_order.curPrice && !$scope.stopSell_order.quantity && $scope.stopSell_order.total ? $scope.stopSell_order.quantity = Math.floor($scope.stopSell_order.total / $scope.stopSell_order.curPrice * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.stopSell_order.curPrice && $scope.stopSell_order.quantity && ($scope.stopSell_order.total = Math.round($scope.stopSell_order.curPrice * $scope.stopSell_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8))))
    }, $scope.tradeBuyVol = function (e) {
      for (var t = $scope.bidsTwenty.indexOf(e), n = 0, r = 0; r <= t; r++) n += Number($scope.bidsTwenty[r][1]);
      $scope.Islogin ? n < Number($scope.baseFree) ? "limit" == $scope.orderType.v ? ($scope.sell_order.sell_quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.sell_order.sell_total = Math.round($scope.sell_order.sell_quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "stopLimit" == $scope.orderType.v && ($scope.stopSell_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.stopSell_order.total = Math.round(e[0] * $scope.stopSell_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8)) : "limit" == $scope.orderType.v ? ($scope.sell_order.sell_quantity = floorToFixed($scope.baseFree, $scope.currentProduct.qtyTick), $scope.sell_order.sell_total = Math.round($scope.sell_order.sell_quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "stopLimit" == $scope.orderType.v && ($scope.stopSell_order.quantity = floorToFixed($scope.baseFree, $scope.currentProduct.qtyTick), $scope.stopSell_order.total = Math.round(e[0] * $scope.stopSell_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8)) : "limit" == $scope.orderType.v ? ($scope.sell_order.sell_quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.sell_order.sell_total = Math.round($scope.sell_order.sell_quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "stopLimit" == $scope.orderType.v && ($scope.stopSell_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.stopSell_order.total = Math.round(e[0] * $scope.stopSell_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8))
    }, $scope.tradeSellVol = function (e) {
      for (var t = $scope.asksTwenty.indexOf(e), n = 0, r = $scope.asksTwenty.length - 1; r >= t; r--) n += Number($scope.asksTwenty[r][1]);
      $scope.Islogin ? n < Number($scope.qouteFree / $scope.buy_order.price) ? "limit" == $scope.orderType.v ? ($scope.buy_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.buy_order.total = Math.round($scope.buy_order.quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "stopLimit" == $scope.orderType.v && ($scope.stopBuy_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.stopBuy_order.total = Math.round($scope.stopBuy_order.quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "limit" == $scope.orderType.v ? ($scope.buy_order.quantity = floorToFixed($scope.qouteFree / e[0], $scope.currentProduct.qtyTick), $scope.buy_order.total = Math.round($scope.buy_order.quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "stopLimit" == $scope.orderType.v && ($scope.stopBuy_order.quantity = floorToFixed($scope.qouteFree / e[0], $scope.currentProduct.qtyTick), $scope.stopBuy_order.total = Math.round($scope.stopBuy_order.quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "limit" == $scope.orderType.v ? ($scope.buy_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.buy_order.total = Math.round($scope.buy_order.quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8)) : "stopLimit" == $scope.orderType.v && ($scope.stopBuy_order.quantity = floorToFixed(n, $scope.currentProduct.qtyTick), $scope.stopBuy_order.total = Math.round($scope.stopBuy_order.quantity * e[0] * Math.pow(10, 8)) / Math.pow(10, 8))
    };
    var floorToFixed = function (e, t) {
      return (Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)).toFixed(t)
    };
    $scope.showerror = function (e, t, n) {
      angular.element("#" + t).text(n), angular.element("#" + e).addClass("ipterror")
    }, $scope.hideerror = function (e, t) {
      angular.element("#" + t).text(""), $(e.target).removeClass("ipterror")
    }, $scope.checkinput = function (e, t, n, r) {
      if ("" == (i = $(e.target).val()) || null == i) return !1;
      if (!new RegExp("^\\d+(\\.\\d{0," + t + "})?$").test(i) && ($(e.target).val(i.replace(/[^\d\.]/g, "")), -1 != i.indexOf("."))) {
        var o = i.toString().split(".")[1].length;
        o > t && $(e.target).val(i.slice(0, -(o - t)))
      }
      if ($(e.target).trigger("input"), $(e.target).trigger("change"), "buy_order" == r) {
        if ("price" == n) {
          i = $(e.target).val();
          $scope.buy_order.price && !$scope.buy_order.quantity && $scope.buy_order.total && 0 != i ? $scope.buy_order.quantity = Math.floor($scope.buy_order.total / i * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.buy_order.price && $scope.buy_order.quantity && ($scope.buy_order.total = Math.round(i * $scope.buy_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8))
        } else if ("num" == n) {
          i = $(e.target).val();
          !$scope.buy_order.price && $scope.buy_order.total && $scope.buy_order.quantity && 0 != i ? $scope.buy_order.price = Math.floor($scope.buy_order.total / i * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.buy_order.price && $scope.buy_order.quantity && ($scope.buy_order.total = Math.round(i * $scope.buy_order.price * Math.pow(10, 8)) / Math.pow(10, 8))
        } else if ("total" == n) {
          i = $(e.target).val();
          $scope.buy_order.total && !$scope.buy_order.price && $scope.buy_order.quantity && 0 != $scope.buy_order.quantity ? $scope.buy_order.price = Math.floor(i / $scope.buy_order.quantity * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.buy_order.total && $scope.buy_order.price && 0 != $scope.buy_order.price && ($scope.buy_order.quantity = Math.floor(i / $scope.buy_order.price * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick))
        }
      } else if ("sell_order" == r) {
        if ("price" == n) {
          i = $(e.target).val();
          $scope.sell_order.sell_price && !$scope.sell_order.sell_quantity && $scope.sell_order.sell_total && 0 != i ? $scope.sell_order.sell_quantity = Math.floor($scope.sell_order.sell_total / i * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.sell_order.sell_quantity && $scope.sell_order.sell_price && ($scope.sell_order.sell_total = Math.round(i * $scope.sell_order.sell_quantity * Math.pow(10, 8)) / Math.pow(10, 8))
        } else if ("num" == n) {
          i = $(e.target).val();
          !$scope.sell_order.sell_price && $scope.sell_order.sell_total && $scope.sell_order.sell_quantity && 0 != i ? $scope.sell_order.sell_price = Math.floor($scope.sell_order.sell_total / i * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.sell_order.sell_price && $scope.sell_order.sell_quantity && ($scope.sell_order.sell_total = Math.round(i * $scope.sell_order.sell_price * Math.pow(10, 8)) / Math.pow(10, 8))
        } else if ("total" == n) {
          i = $(e.target).val();
          $scope.sell_order.sell_total && !$scope.sell_order.sell_price && $scope.sell_order.sell_quantity && 0 != $scope.sell_order.sell_quantity ? $scope.sell_order.sell_price = Math.floor(i / $scope.sell_order.sell_quantity * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.sell_order.sell_total && $scope.sell_order.sell_price && 0 != $scope.sell_order.sell_price && ($scope.sell_order.sell_quantity = Math.floor(i / $scope.sell_order.sell_price * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick))
        }
      } else if ("stopBuy_order" == r) {
        if ("price" == n) {
          i = $(e.target).val();
          $scope.stopBuy_order.price && !$scope.stopBuy_order.quantity && $scope.stopBuy_order.total && 0 != i ? $scope.stopBuy_order.quantity = Math.floor($scope.stopBuy_order.total / i * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.stopBuy_order.price && $scope.stopBuy_order.quantity && ($scope.stopBuy_order.total = Math.round(i * $scope.stopBuy_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8))
        } else if ("num" == n) {
          i = $(e.target).val();
          !$scope.stopBuy_order.price && $scope.stopBuy_order.total && $scope.stopBuy_order.quantity && 0 != i ? $scope.stopBuy_order.price = Math.floor($scope.stopBuy_order.total / i * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.stopBuy_order.price && $scope.stopBuy_order.quantity && ($scope.stopBuy_order.total = Math.round(i * $scope.stopBuy_order.price * Math.pow(10, 8)) / Math.pow(10, 8))
        } else if ("total" == n) {
          i = $(e.target).val();
          $scope.stopBuy_order.total && !$scope.stopBuy_order.price && $scope.stopBuy_order.quantity && 0 != $scope.stopBuy_order.quantity ? $scope.stopBuy_order.price = Math.floor(i / $scope.stopBuy_order.quantity * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.stopBuy_order.total && $scope.stopBuy_order.price && 0 != $scope.stopBuy_order.price && ($scope.stopBuy_order.quantity = Math.floor(i / $scope.stopBuy_order.price * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick))
        }
      } else if ("stopSell_order" == r) if ("price" == n) {
        i = $(e.target).val();
        $scope.stopSell_order.curPrice && !$scope.stopSell_order.quantity && $scope.stopSell_order.total && 0 != i ? $scope.stopSell_order.quantity = Math.floor($scope.stopSell_order.total / i * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick) : $scope.stopSell_order.curPrice && $scope.stopSell_order.quantity && ($scope.stopSell_order.total = Math.round(i * $scope.stopSell_order.quantity * Math.pow(10, 8)) / Math.pow(10, 8))
      } else if ("num" == n) {
        i = $(e.target).val();
        !$scope.stopSell_order.curPrice && $scope.stopSell_order.total && $scope.stopSell_order.quantity && 0 != i ? $scope.stopSell_order.curPrice = Math.floor($scope.stopSell_order.total / i * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.stopSell_order.curPrice && $scope.stopSell_order.quantity && ($scope.stopSell_order.total = Math.round(i * $scope.stopSell_order.curPrice * Math.pow(10, 8)) / Math.pow(10, 8))
      } else if ("total" == n) {
        var i = $(e.target).val();
        $scope.stopSell_order.total && !$scope.stopSell_order.curPrice && $scope.stopSell_order.quantity && 0 != $scope.stopSell_order.quantity ? $scope.stopSell_order.curPrice = Math.floor(i / $scope.stopSell_order.quantity * Math.pow(10, $scope.currentProduct.priceTick)) / Math.pow(10, $scope.currentProduct.priceTick) : $scope.stopSell_order.total && $scope.stopSell_order.curPrice && 0 != $scope.stopSell_order.curPrice && ($scope.stopSell_order.quantity = Math.floor(i / $scope.stopSell_order.curPrice * Math.pow(10, $scope.currentProduct.qtyTick)) / Math.pow(10, $scope.currentProduct.qtyTick))
      }
    }, $(document).find("#buyPrice").on("input propertychange", function () {
      "" == $(this).val() && ($("#buy_order_total").val(""), $("#buy_order_total").trigger("input"), $("#buy_order_total").trigger("change"))
    }), $(document).find("#buyQuanity").on("input propertychange", function () {
      "" == $(this).val() && ($("#buy_order_total").val(""), $("#buy_order_total").trigger("input"), $("#buy_order_total").trigger("change"))
    }), $(document).find("#sellPrice").on("input propertychange", function () {
      "" == $(this).val() && ($("#sell_order_sell_total").val(""), $("#sell_order_sell_total").trigger("input"), $("#sell_order_sell_total").trigger("change"))
    }), $(document).find("#sellQuanity").on("input propertychange", function () {
      "" == $(this).val() && ($("#sell_order_sell_total").val(""), $("#sell_order_sell_total").trigger("input"), $("#sell_order_sell_total").trigger("change"))
    }), $(document).find("#stop_curPrice").on("input propertychange", function () {
      "" == $(this).val() && ($("#stopBuy_order_total").val(""), $("#stopBuy_order_total").trigger("input"), $("#stopBuy_order_total").trigger("change"))
    }), $(document).find("#stop_buyQuanity").on("input propertychange", function () {
      "" == $(this).val() && ($("#stopBuy_order_total").val(""), $("#stopBuy_order_total").trigger("input"), $("#stopBuy_order_total").trigger("change"))
    }), $(document).find("#stopSell_curPrice").on("input propertychange", function () {
      "" == $(this).val() && ($("#stopSell_order_total").val(""), $("#stopSell_order_total").trigger("input"), $("#stopSell_order_total").trigger("change"))
    }), $(document).find("#stopSell_Quanity").on("input propertychange", function () {
      "" == $(this).val() && ($("#stopSell_order_total").val(""), $("#stopSell_order_total").trigger("input"), $("#stopSell_order_total").trigger("change"))
    }), $scope.loadMore = function (e) {
      "ask" == e ? showAskCount += showAskCount : showBidCount += showBidCount, callback({
        eventType: "depthUpdate",
        bids: [],
        asks: []
      })
    }, $scope.buy_order = {}, $scope.sell_order = {}, $scope.market_buy_order = {}, $scope.market_sell_order = {}, $scope.stopBuy_order = {}, $scope.stopSell_order = {}, $scope.orderPercent = function (e, t, n) {
      var r = {};
      if ($scope.userAssets) {
        for (var o = 0; o < $scope.userAssets.length; o++) r[$scope.userAssets[o].asset] = $scope.userAssets[o].free;
        "limit" == n ? "buy" == t && $scope.buy_order.price ? ($scope.buy_order.quantity = floorToFixed(e * r[$scope.currentProduct.quoteAsset] / $scope.buy_order.price, $scope.currentProduct.qtyTick), $scope.buy_order.total = Math.round($scope.buy_order.quantity * $scope.buy_order.price * Math.pow(10, 8)) / Math.pow(10, 8)) : "sell" == t && ($scope.sell_order.sell_quantity = floorToFixed(e * r[$scope.currentProduct.baseAsset], $scope.currentProduct.qtyTick), $scope.sell_order.sell_total = Math.round($scope.sell_order.sell_quantity * $scope.sell_order.sell_price * Math.pow(10, 8)) / Math.pow(10, 8)) : "market" == n ? "buy" == t ? $scope.market_buy_order.quantity = floorToFixed(e * r[$scope.currentProduct.quoteAsset] / $scope.currentProduct.close, $scope.currentProduct.qtyTick) : $scope.market_sell_order.quantity = floorToFixed(e * r[$scope.currentProduct.baseAsset], $scope.currentProduct.qtyTick) : "stopLimit" == n && ("buy" == t ? $scope.stopBuy_order.price && ($scope.stopBuy_order.quantity = floorToFixed(e * r[$scope.currentProduct.quoteAsset] / $scope.stopBuy_order.price, $scope.currentProduct.qtyTick), $scope.stopBuy_order.total = Math.round($scope.stopBuy_order.quantity * $scope.stopBuy_order.price * Math.pow(10, 8)) / Math.pow(10, 8)) : "sell" == t && ($scope.stopSell_order.quantity = floorToFixed(e * r[$scope.currentProduct.baseAsset], $scope.currentProduct.qtyTick), $scope.stopSell_order.total = Math.round($scope.stopSell_order.quantity * $scope.stopSell_order.curPrice * Math.pow(10, 8)) / Math.pow(10, 8)))
      }
    }, $scope.buy_submit = function () {
      var e = angular.element("#buyPrice").val(), t = angular.element("#buyQuanity").val(), n = e * t,
        r = $scope.currentProduct.qtyTick, o = $scope.currentProduct.priceTick,
        i = new RegExp("^\\d+(\\.\\d{0," + r + "}0*)?$"), s = new RegExp("^\\d+(\\.\\d{0," + o + "}0*)?$");
      if ("0" === e) return $scope.showerror("buyPrice", "buyform-error", $translate.instant("notBeZero")), !1;
      if ("" == e || null == e) return $scope.showerror("buyPrice", "buyform-error", $translate.instant("inputCrrectPrice")), !1;
      if ("0" === t) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("notBeZero")), !1;
      if ("" == t || null == t) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("inputVolume")), !1;
      if (!i.test(t)) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
      if (n > Number($scope.qouteFree)) return $scope.showerror("buyQuanity", "buyform-error", $translate.instant("Your balance is not enough")), !1;
      if (!s.test(e)) return $scope.showerror("buyPrice", "buyform-error", $translate.instant("inputCrrectPrice")), !1;
      var a = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({price: e, quantity: t, symbol: $scope.product.symbol, side: "BUY", type: "LIMIT"})
      };
      0 != $scope.currentProduct.close && (e - $scope.currentProduct.close) / $scope.currentProduct.close > .05 ? layer.confirm($translate.instant("buyorderConfirmTip"), {
        title: "",
        area: "320px",
        skin: "orderLayer",
        btn: [$translate.instant("Yes"), $translate.instant("No")]
      }, function () {
        $http(a).then(function (e) {
          layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
            $scope.buy_order.quantity = "", $scope.buy_order.total = ""
          }, 500)
        }, function (e) {
          layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
        })
      }, function () {
        layer.closeAll()
      }) : $http(a).then(function (e) {
        layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
          $scope.buy_order.quantity = "", $scope.buy_order.total = ""
        }, 500)
      }, function (e) {
        layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
      })
    }, $scope.sell_submit = function () {
      var e = angular.element("#sellPrice").val(), t = angular.element("#sellQuanity").val(), n = t,
        r = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.qtyTick + "})?$"),
        o = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.priceTick + "})?$");
      if ("0" === e) return $scope.showerror("sellPrice", "sellform-error", $translate.instant("notBeZero")), !1;
      if ("" == e || null == e) return $scope.showerror("sellPrice", "sellform-error", $translate.instant("inputCrrectPrice")), !1;
      if ("0" === t) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("notBeZero")), !1;
      if ("" == t || null == t) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("inputSellVolume")), !1;
      if (!r.test(t)) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("inputCorrectsellQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
      if (n > Number($scope.baseFree)) return $scope.showerror("sellQuanity", "sellform-error", $translate.instant("Your balance is not enough")), !1;
      if (!o.test(e)) return $scope.showerror("sellPrice", "sellform-error", $translate.instant("inputCrrectPrice")), !1;
      var i = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({price: e, quantity: t, symbol: $scope.product.symbol, side: "SELL", type: "LIMIT"})
      };
      0 != $scope.currentProduct.close && ($scope.currentProduct.close - e) / $scope.currentProduct.close > .05 ? layer.confirm($translate.instant("sellorderConfirmTip"), {
        title: "",
        area: "320px",
        skin: "orderLayer",
        btn: [$translate.instant("Yes"), $translate.instant("No")]
      }, function () {
        $http(i).then(function (e) {
          layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
            $scope.sell_order.sell_quantity = "", $scope.sell_order.sell_total = ""
          }, 500)
        }, function (e) {
          layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
        })
      }, function () {
        layer.closeAll()
      }) : $http(i).then(function (e) {
        layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
          $scope.sell_order.sell_quantity = "", $scope.sell_order.sell_total = ""
        }, 500)
      }, function (e) {
        layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
      })
    }, $scope.market_buy_submit = function () {
      var e = angular.element("#market_buyQuanity").val(), t = $scope.currentProduct.qtyTick,
        n = new RegExp("^\\d+(\\.\\d{0," + t + "}0*)?$");
      if ("0" === e) return $scope.showerror("market_buyQuanity", "market_buyform-error", $translate.instant("notBeZero")), !1;
      if ("" == e || null == e) return $scope.showerror("market_buyQuanity", "market_buyform-error", $translate.instant("inputVolume")), !1;
      if (!n.test(e)) return $scope.showerror("market_buyQuanity", "market_buyform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
      var r = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({quantity: e, symbol: $scope.product.symbol, side: "BUY", type: "MARKET"})
      };
      $http(r).then(function (e) {
        layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
          $scope.market_buy_order.quantity = ""
        }, 500)
      }, function (e) {
        layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
      })
    }, $scope.market_sell_submit = function () {
      var e = angular.element("#market_sellQuanity").val(), t = $scope.currentProduct.qtyTick,
        n = new RegExp("^\\d+(\\.\\d{0," + t + "}0*)?$");
      if ("0" === e) return $scope.showerror("market_sellQuanity", "market_sellform-error", $translate.instant("notBeZero")), !1;
      if ("" == e || null == e) return $scope.showerror("market_sellQuanity", "market_sellform-error", $translate.instant("inputVolume")), !1;
      if (!n.test(e)) return $scope.showerror("market_sellQuanity", "market_sellform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
      var r = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({quantity: e, symbol: $scope.product.symbol, side: "SELL", type: "MARKET"})
      };
      $http(r).then(function (e) {
        layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
          $scope.market_sell_order.quantity = ""
        }, 500)
      }, function (e) {
        layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
      })
    }, $scope.stopLimit_buy_submit = function () {
      var e = angular.element("#buy_stopPrice").val(), t = angular.element("#stop_curPrice").val(),
        n = angular.element("#stop_buyQuanity").val(), r = t * n, o = $scope.currentProduct.qtyTick,
        i = $scope.currentProduct.priceTick, s = new RegExp("^\\d+(\\.\\d{0," + o + "}0*)?$"),
        a = new RegExp("^\\d+(\\.\\d{0," + i + "}0*)?$");
      if ("0" === e) return $scope.showerror("buy_stopPrice", "stopBuyform-error", $translate.instant("notBeZero")), !1;
      if ("" == e || null == e) return $scope.showerror("buy_stopPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
      if ("0" === t) return $scope.showerror("stop_curPrice", "stopBuyform-error", $translate.instant("notBeZero")), !1;
      if ("" == t || null == t) return $scope.showerror("stop_curPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
      if ("0" === n) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("notBeZero")), !1;
      if ("" == n || null == n) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("inputVolume")), !1;
      if (!s.test(n)) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("inputCorrectbuyQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
      if (r > Number($scope.qouteFree)) return $scope.showerror("stop_buyQuanity", "stopBuyform-error", $translate.instant("Your balance is not enough")), !1;
      if (!a.test(t)) return $scope.showerror("stop_curPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
      if (!a.test(e)) return $scope.showerror("buy_stopPrice", "stopBuyform-error", $translate.instant("inputCrrectPrice")), !1;
      var l, c;
      Number(e) >= Number($scope.currentProduct.close) ? (l = "STOP_LOSS_LIMIT", c = "cn" != $scope.cur_lang ? "If the last price rises to or above " + e + " " + $scope.currentProduct.quoteAsset + " ,an order to buy " + n + " " + $scope.currentProduct.baseAsset + " at a price of " + t + " " + $scope.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + e + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + t + " " + $scope.currentProduct.quoteAsset + "的价格买入" + n + " " + $scope.currentProduct.baseAsset + "的订单") : Number(e) < Number($scope.currentProduct.close) && (l = "TAKE_PROFIT_LIMIT", c = "cn" != $scope.cur_lang ? "If the last price drops to or below " + e + " " + $scope.currentProduct.quoteAsset + ", an order to buy" + n + " " + $scope.currentProduct.baseAsset + "at a price of" + t + " " + $scope.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + e + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + t + " " + $scope.currentProduct.quoteAsset + "的价格买入" + n + " " + $scope.currentProduct.baseAsset + "的订单");
      var u = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({price: t, quantity: n, symbol: $scope.product.symbol, side: "BUY", stopPrice: e, type: l})
      };
      layer.confirm(c, {
        title: "",
        area: "320px",
        skin: "orderLayer",
        btn: [$translate.instant("Yes"), $translate.instant("No")]
      }, function () {
        $http(u).then(function (e) {
          layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
            $scope.stopBuy_order.quantity = "", $scope.stopBuy_order.total = ""
          }, 500)
        }, function (e) {
          "Order would trigger immediately." == e.data.msg ? layer.msg($translate.instant("orderFailed01"), {
            icon: 2,
            shift: 1,
            time: 2e3
          }) : layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
        })
      }, function () {
        layer.closeAll()
      })
    }, $scope.stopLimit_sell_submit = function () {
      var e = angular.element("#stopSell_StopPrice").val(), t = angular.element("#stopSell_curPrice").val(),
        n = angular.element("#stopSell_Quanity").val(), r = n,
        o = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.qtyTick + "})?$"),
        i = new RegExp("^\\d+(\\.\\d{0," + $scope.currentProduct.priceTick + "})?$");
      if ("0" === e) return $scope.showerror("stopSell_StopPrice", "stopSellform-error", $translate.instant("notBeZero")), !1;
      if ("" == e || null == e) return $scope.showerror("stopSell_StopPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
      if ("0" === t) return $scope.showerror("stopSell_curPrice", "stopSellform-error", $translate.instant("notBeZero")), !1;
      if ("" == t || null == t) return $scope.showerror("stopSell_curPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
      if ("0" === n) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("notBeZero")), !1;
      if ("" == n || null == n) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("inputSellVolume")), !1;
      if (!o.test(n)) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("inputCorrectsellQuanity").replace("###", Number($scope.currentProduct.minTrade).toFixed($scope.currentProduct.qtyTick))), !1;
      if (r > Number($scope.baseFree)) return $scope.showerror("stopSell_Quanity", "stopSellform-error", $translate.instant("Your balance is not enough")), !1;
      if (!i.test(e)) return $scope.showerror("stopSell_StopPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
      if (!i.test(t)) return $scope.showerror("stopSell_curPrice", "stopSellform-error", $translate.instant("inputCrrectPrice")), !1;
      var s, a;
      Number(e) > Number($scope.currentProduct.close) ? (s = "TAKE_PROFIT_LIMIT", a = "cn" != $scope.cur_lang ? "If the last price rises to or above " + e + " " + $scope.currentProduct.quoteAsset + " ,an order to sell " + n + " " + $scope.currentProduct.baseAsset + " at a price of " + t + " " + $scope.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + e + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + t + " " + $scope.currentProduct.quoteAsset + "的价格卖出" + n + " " + $scope.currentProduct.baseAsset + "的订单") : Number(e) <= Number($scope.currentProduct.close) && (s = "STOP_LOSS_LIMIT", a = "cn" != $scope.cur_lang ? "If the last price drops to or below " + e + " " + $scope.currentProduct.quoteAsset + ", an order to sell" + n + " " + $scope.currentProduct.baseAsset + "at a price of" + t + " " + $scope.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + e + " " + $scope.currentProduct.quoteAsset + "时，则触发以" + t + " " + $scope.currentProduct.quoteAsset + "的价格卖出" + n + " " + $scope.currentProduct.baseAsset);
      var l = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({price: t, quantity: n, symbol: $scope.product.symbol, side: "SELL", stopPrice: e, type: s})
      };
      layer.confirm(a, {
        title: "",
        area: "320px",
        skin: "orderLayer",
        btn: [$translate.instant("Yes"), $translate.instant("No")]
      }, function () {
        $http(l).then(function (e) {
          layer.msg($translate.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), $timeout(function () {
            $scope.stopSell_order.quantity = "", $scope.stopSell_order_total = ""
          }, 500)
        }, function (e) {
          "Order would trigger immediately." == e.data.msg ? layer.msg($translate.instant("orderFailed01"), {
            icon: 2,
            shift: 1,
            time: 2e3
          }) : layer.msg(e.data.msg, {icon: 2, shift: 1, time: 2e3})
        })
      }, function () {
        layer.closeAll()
      })
    }, $scope.stopBubble = function (e) {
      e.stopPropagation()
    };
    var sendToUserId;
    $scope.getPersonalMsg = function (e) {
      sendToUserId = e;
      var t = $q.defer();
      return $http.get("/exchange/trollbox/personal/last?channel=zh&userId=" + e).success(function (e) {
        $scope.personalMsg = e.msg
      }), t.promise
    }, $scope.getPersonalMsg($cookies.userId), $scope.showPop = function () {
      $("body").css({overflow: "auto"}), $("#privateMsg").val(""), $scope.showPopUser = !1
    }, $scope.getUserBaseDetail = function () {
      var e = $q.defer();
      return $http({method: "post", url: "/user/basedetail.html"}).success(function (e) {
        $scope.userBaseInfo = e, e.pic || ($scope.userBaseInfo.pic = "/resources/img/header_tx.png")
      }), e.promise
    }, "y" == $cookies.logined && $scope.getUserBaseDetail(), $scope.connectTrollboxPrivate = function (e, t) {
      null != $scope.trollboxPrivateStreamerInstance && ($scope.trollboxPrivateStreamerInstance.stopStream(), $scope.trollboxPrivateStreamerInstance = null), $scope.trollboxPrivateStreamerInstance = new trollboxStreamer, $scope.trollboxPrivateStreamerInstance.startStream(t, e, function (e) {
        $scope.trollboxCallback(e)
      })
    }, $scope.trollboxCallback = function (e) {
      if (!($(".trollbox-list dl dt[cid=" + e.id + "]").length > 0)) {
        $(".trollbox-list").append("<dl>\t<dt uid=" + e.u + ' cid="' + e.id + '">' + e.u + " : " + ((e.to || "") && "<span>Private</span>") + "</dt>\t<dd>" + e.m + "</dd></dl>"), liSize = $(".trollbox-list dl").size(), liSize > maxMessage && $(".trollbox-list dl:lt(" + (liSize - maxMessage) + ")").remove(), $(".trollbox-list dt[cid=" + e.id + "]").click(function (e) {
          $scope.getPersonalMsg($(e.target).attr("uid")).then(function () {
            $scope.showPopUser = !0
          })
        });
        var t = document.getElementById("trollbox-list");
        t.scrollHeight, t.clientHeight;
        t.scrollTop = t.scrollHeight - t.clientHeight
      }
    }, $scope.sendPrivateMsg = function () {
      if ($("#privateMsg").val()) if ($scope.listenkey) {
        var e = {
          method: "post",
          url: "/exchange/trollbox/send",
          data: "message=" + $("#privateMsg").val() + "&channel=" + $scope.trollboxChannel + "&toUserId=" + sendToUserId
        };
        $http(e).success(function (e) {
          $("#privateMsg").val(""), layer.msg("Send successfully", {icon: 1, shift: 1, time: 600})
        })
      } else layer.msg("Please login first", {icon: 5, shift: 1, time: 1500})
    }, $(window).load(function () {
      setTimeout(function () {
        pageLoading1.close()
      }, 200)
    }), $scope.isFull = !1;
    var klineCon = $("#kline-con"), chart_container = $("#chart"), depth_con = $(".box-inner");
    $scope.fullpage = function () {
      var e = angular.element(window).height();
      $scope.isFull = !0, klineCon.css({
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        "z-index": 9999
      }), chart_container.css({
        width: angular.element(window).width(),
        height: e - 22 + "px"
      }), depth_con.css({
        width: angular.element(window).width(),
        height: e - 22 + "px"
      }), chart.resize(), depthChart.resize()
    }, $(window).keydown(function (e) {
      27 == e.keyCode && $scope.isFull && $scope.offFullpage()
    }), $scope.offFullpage = function () {
      $scope.isFull = !1, klineCon.css({position: "static"}), chart_container.css({
        width: "648px",
        height: "347px"
      }), depth_con.css({width: "648px", height: "347px"}), chart.resize(), depthChart.resize()
    };
    var scroll = document.getElementById("askScrollBox");
    scroll.addEventListener(getTransitionEvent().type, function () {
      document.getElementById("askScrollBox").scrollTop = document.getElementById("askScrollBox").scrollHeight
    });
    var scrollb = document.getElementById("bidScrollBox");
    scrollb.addEventListener(getTransitionEvent().type, function () {
      document.getElementById("bidScrollBox").scrollTop = 0
    })
  }]).controller("noticeCtrl", ["$scope", "$http", function (e, t) {
    e.getNotice = function () {
      t.post("/public/getNotice.html?page=1&rows=15").success(function (t) {
        e.notices = t.data
      })
    }, e.$watch("cur_lang", function () {
      e.getNotice()
    })
  }]).filter("reverse", function () {
    return function (e) {
      if (void 0 !== e) return e.slice().reverse()
    }
  }).filter("unique", function () {
    return function (e, t) {
      var n = [], r = [];
      return angular.forEach(e, function (e) {
        var o = e[t];
        -1 === r.indexOf(o) && (r.push(o), n.push(e))
      }), n
    }
  }).filter("filterol", function () {
    return function (e) {
      return e ? Number(e).toFixed(8) : "--"
    }
  }).filter("T", ["$translate", function (e) {
    return function (t) {
      if (t) return e.instant(t)
    }
  }]).filter("symbol", function () {
    return function (e) {
      return e = e || 0, Number(e) > 0 ? "+" + e : e
    }
  }).filter("FilterString", function () {
    return function (e) {
      var t = new Array(e.length + parseInt(e.length / 3, 10)), n = e.split("");
      t[t.length - 1] = n[n.length - 1];
      for (var r = n.length - 1, o = t.length - 1; o >= 0; o--) (t.length - o) % 4 == 0 ? t[o] = "/" : t[o] = n[r--];
      return 0 === t.indexOf("/") && t.splice(0, 1), t.join("")
    }
  }), sortDepth = new function () {
    this.sort = function (e) {
      return e.sort(function (e, t) {
        return e[1] - t[1]
      }), e
    }, this.median = function (e) {
      var t = Math.floor(e.length / 3 * 2);
      return e[t][1] < 1 ? 1 : e[t][1]
    }, this.medianUnit = function (e, t, n) {
      var r = new Array(e);
      r = r[0];
      var o = new Array(t);
      o = o[0], r = r.concat(o);
      var i = this.median(this.sort(r)) / n;
      return r = null, o = null, i
    }, this.width = function (e, t) {
      if (0 == t) return 1;
      var n = Math.round(Number(e) / t);
      return n <= 0 ? 1 : n > 160 ? 160 : n
    }
  }, KlineDataConvert = new function () {
    var e = this;
    this.barCount = 23, this.setData = function (t, n, r) {
      e.max = 0, e.min = 1e9, e.Data = t, e.h = r, e.w = n;
      for (var o = 0; o < e.Data.length; o++) {
        var i = this.Data[o], s = Number(i[4]);
        e.max < s && (e.max = s), e.min > s && (e.min = s)
      }
      e.max == e.min && (e.min = .9 * e.min, e.max = 1.1 * e.max)
    }, this.getY = function (t) {
      return e.h * (1 - (t - e.min) / (e.max - e.min))
    }, this.getX = function (t) {
      return e.w * (t / e.barCount)
    }, this.getPath = function () {
      var t = [];
      return e.Data.forEach(function (n, r) {
        0 == r ? t.push("M" + Math.round(e.getX(r)) + " " + Math.round(e.getY(n[4] || 1))) : t.push("L" + Math.round(e.getX(r)) + " " + Math.round(e.getY(n[4] || 1)))
      }), t.join(" ")
    }
  }, getTransitionEvent = function () {
    var e, t, n = !1, r = document.createElement("fakeelement"), o = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "otransitionend",
      transition: "transitionend"
    };
    for (e in o) if (void 0 !== r.style[e]) {
      t = o[e], n = !0;
      break
    }
    return {type: t, supported: n}
  };
app.factory("streamer", ["$http", "$interval", function (e, t) {
  return function () {
    var t, n = {};
    return n.isRunning = !1, n.restart = !1, n.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", n.startStream = function (e, t, r, o) {
      n.isRunning = !0, n.url = t, n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.restart = !0, n.lastConntectTime, n.callback = r, n.symbol = e, n.lowerCaseSymbol = e.toLowerCase(), n.stateChange = o || function () {
      }, n.stateChange(!0), n.ws && n.stopStream(), n.ws = n._makeStream()
    }, n.processData = function (e) {
      n._isDuplicate(e) || n.callback(e)
    }, n.stopStream = function () {
      n.restart = !1, n.ws && (n._clear(n.ws), n.ws.handClose = !0, n.ws.close()), n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.isRunning = !1
    }, n._rolloverStream = function () {
      console.log("Rolling over stream!"), n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.stateChange(!0), n.ws = n._makeStream()
    }, n._makeStream = function () {
      var r = new WebSocket(n.url + "/" + n.lowerCaseSymbol + "@depth.b10");
      return n._buildState(), r.onopen = function () {
        console.log("Socket has been opened for: " + n.symbol + "!"), n.lastConntectTime = new Date, n.wsbuildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState)), clearInterval(t)
      }, r.onclose = function (e) {
        console.log("Socket has been CLOSED for: " + n.symbol + "!"), n.wsbuildingState = !0, n.stateChange(!0), r.handClose ? (r.handClose = !1, console.log("Socket done!")) : (new Date).getTime() - n.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), n._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), n._rolloverStream())
      }, r.onmessage = function (e) {
        if (r == n.ws) {
          var t = JSON.parse(e.data);
          console.log("WS recv: " + t), t = n.converter(t), n.buildingState ? (n.backedMsg.push(t), console.log("Adding msg to backlog: " + t)) : n._isLoss(t) ? (n.backedMsg = [], n.backedMsg.push(t), n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()) : n.processData(t)
        }
      }, r.onerror = function (r) {
        n.wsbuildingState = !0, n.stateChange(!0), t || (t = setInterval(function () {
          var t = {};
          t.method = "get", t.url = n.root_url + "/depth", t.params = {
            symbol: n.symbol,
            limit: 100
          }, e(t).success(function (e) {
            var t = {};
            t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, n.processData(t)
          })
        }, 3e3)), setTimeout(function () {
          console.log("streamer reconntect now=========="), n.stopStream(), n._rolloverStream()
        }, 6e4)
      }, r
    }, n.RePull = function () {
      n.backedMsg = [], n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()
    }, n._buildState = function () {
      var t = {};
      t.method = "get", t.url = n.root_url + "/depth", t.params = {symbol: n.symbol};
      var r = function () {
        e(t).success(function (e) {
          n.lastDepthId = -1;
          var t = {};
          t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, t.clean = !0, console.log("GET All Depth Success "), n.processData(t), console.log("Initial state set!"), console.log("Replaying " + n.backedMsg.length + " backed msgs!");
          var o = !1;
          if (n.backedMsg && n.backedMsg.length > 0) {
            var i = n.backedMsg[0];
            n._isLoss(i) && (o = !0, setTimeout(function () {
              r()
            }, 500))
          }
          o || n.backedMsg.forEach(function (e, t) {
            n.processData(e), console.log("Replayed: " + e.eventType)
          }), n.buildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState))
        })
      };
      r()
    }, n.converter = function (e) {
      var t = {};
      return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "depthUpdate" == t.eventType ? (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.updateId = e.u, t.fupdateId = e.U, t.bids = e.b, t.asks = e.a) : (console.log("Error! Bad data received:"), console.log(t)), t
    }, n._isDuplicate = function (e) {
      if ("depthUpdate" == e.eventType) {
        if (e.updateId > n.lastDepthId) return n.lastDepthId = e.updateId, !1
      } else console.log("Error! Bad data received:"), console.log(e);
      return !0
    }, n._isLoss = function (e) {
      if ("depthUpdate" == e.eventType) {
        if (e.fupdateId <= n.lastDepthId + 1) return !1
      } else console.log("Error! Has Loss data");
      return !0
    }, n._clear = function (e) {
      e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
    }, n
  }
}]), app.factory("userStreamer", function () {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.lastConntectTime = new Date, e.startStream = function (t, n) {
      e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
    }, e.processData = function (t) {
      e._isDuplicate(t) || e.callback(t)
    }, e.stopStream = function () {
      e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url);
      return t.onopen = function () {
        console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
      }, t.onclose = function (t) {
        console.log("Socket has been CLOSED for: market data!"), e.restart ? (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), e._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()) : (delete e.ws, console.log("Socket done!"))
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        n = e.converter(n), console.log("User data WS recv, eventType: " + n.eventType + ", eventTime: " + n.eventTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
      }, t
    }, e._buildState = function () {
      e.buildingState = !1
    }, e.converter = function (e) {
      var t = {};
      return t.eventType = e.e, "outboundAccountInfo" == t.eventType ? (t.eventTime = e.E, t.makerCommission = e.m, t.takerCommission = e.t, t.buyerCommission = e.b, t.sellerCommission = e.s, t.isActive = e.a, t.balances = [], e.B && e.B.forEach(function (e) {
        t.balances.push({asset: e.a, free: e.f, locked: e.l})
      }), t.leverage = e.l, t.positions = [], e.p && e.p.forEach(function (e) {
        t.positions.push({
          symbol: e.s,
          usedQty: e.u,
          usedMargin: e.U,
          avgQuotePrice: e.q,
          pendingQtyBuy: e.b,
          pendingMarginBuy: e.B,
          pendingQtySell: e.a,
          pendingMarginSell: e.A,
          lockedProfitLoss: e.l
        })
      })) : "executionReport" == t.eventType && (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.clOrdId = e.c, t.side = e.S, t.orderType = e.o, t.timeInForce = e.f, t.qty = e.q, t.price = e.p, t.stopPrice = e.P, t.maxFloor = e.F, t.originalClOrdId = e.C, t.executionType = e.x, t.orderStatus = e.X, t.orderRejectReason = e.r, t.orderId = e.i, t.lastQty = e.l, t.cummulativeQty = e.z, t.lastPrice = e.L, t.commission = e.n, t.commissionAsset = e.N, t.time = e.T, t.executionId = e.I, t.tradeId = e.t, t.workingIndicator = e.w, t.isMaker = e.m, t.commissionAsset = e.N), t
    }, e._isDuplicate = function (e) {
      return !1
    }, e
  }
}), app.factory("klineStreamer", ["$http", "$interval", "$rootScope", function (e, t, n) {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.lastTradeId = -1, e.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", e.startStream = function (t, n, r, o) {
      e.isRunning = !0, e.url = n, e.interval = r, e.lastDepthId = -2, e.lastKlineId = -1, e.backedMsg = [], e.restart = !0, e.lastConntectTime = new Date, e.symbol = t, e.lowerCaseSymbol = t.toLowerCase(), e.callback = o, e.ws && e.stopStream(), e.ws = e._makeStream()
    }, e.processData = function (t) {
      e._isDuplicate(t) || e.callback(t)
    }, e.stopStream = function () {
      e.restart = !1, e.ws && (e._clear(e.ws), e.ws.HandClose = !0, e.ws.close()), e.lastDepthId = -1, e.lastKlineId = -1, e.backedMsg = [], e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url + "/" + e.lowerCaseSymbol + "@kline_" + e.interval + ".b10");
      return n.websocketStatus = "connecting", t.onopen = function () {
        n.websocketStatus = "connected", console.log("Socket has been opened for: " + e.symbol + "!"), e.lastConntectTime = new Date
      }, t.onclose = function (r) {
        console.log("Socket has been CLOSED for: " + e.symbol + "!"), t.HandClose ? (t.HandClose = !0, console.log("Socket done!")) : (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), e._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()))
      }, t.onerror = function () {
        n.websocketStatus = "error"
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        n = e.converter(n), console.log("WS recv: " + n), e.processData(n)
      }, t
    }, e.converter = function (e) {
      var t = {};
      return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = {}, t.kline.time = e.k.t, t.kline.closeTime = e.k.T, t.kline.symbol = e.k.s, t.kline.interval = e.k.i, t.kline.firstId = e.k.f, t.kline.lastId = e.k.L, t.kline.open = e.k.o, t.kline.close = e.k.c, t.kline.high = e.k.h, t.kline.low = e.k.l, t.kline.volume = e.k.v, t.kline.quoteVolume = e.k.q, t.kline.count = e.k.n, t.kline.closed = e.k.x, t
    }, e._isDuplicate = function (e) {
      return "kline" != e.eventType && (console.log("Error! Bad data received:"), console.log(e), !0)
    }, e._clear = function (e) {
      e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
    }, e
  }
}]);
var tradeSymbol = "";
app.factory("tradeStreamer", ["$http", "$interval", function (e, t) {
  return function () {
    var t = {};
    return t.isRunning = !1, t.restart = !1, t.lastAggTradeId = -2, t.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", t.startStream = function (e, n, r) {
      t.isRunning = !0, t.lastDepthId = -2, t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.restart = !0, t.lastConntectTime, t.symbol = e, tradeSymbol = e, t.lowerCaseSymbol = e.toLowerCase(), t.url = n, t.callback = r, t.ws && t.stopStream(), t.ws = t._makeStream()
    }, t.processData = function (e) {
      t._isDuplicate(e) || t.callback(e)
    }, t.stopStream = function () {
      t.restart = !1, t.ws && (t._clear(t.ws), t.ws.HandClose = !0, t.ws.close()), t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.isRunning = !1
    }, t._rolloverStream = function () {
      console.log("Rolling over stream!"), t.backedMsg = [], t.buildingState = !0, t.ws = t._makeStream()
    }, t._makeStream = function () {
      var n = new WebSocket(t.url + "/" + t.lowerCaseSymbol + "@aggTrade.b10");
      return n.onopen = function () {
        console.log("Socket has been opened for: " + t.symbol + "!"), t.lastConntectTime = new Date, t._buildState(), clearInterval(void 0)
      }, n.onclose = function (e) {
        console.log("Socket has been CLOSED for: " + t.symbol + "!"), n.HandClose ? (n.HandClose = !1, console.log("Socket done!")) : (new Date).getTime() - t.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), t._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), t._rolloverStream())
      }, n.onmessage = function (e) {
        var n = JSON.parse(e.data);
        console.log("WS recv: " + n), n = t.converter(n), t.buildingState ? (t.backedMsg.push(n), console.log("Adding msg to backlog: " + n)) : t.processData(n)
      }, n.onerror = function (n) {
        var r = {};
        r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
          symbol: t.symbol,
          limit: 40
        }, e(r).success(function (e) {
          for (var n = 0; n < e.length; n++) {
            var r = {};
            r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.processData(r)
          }
        }), setTimeout(function () {
          console.log("streamer reconntect now=========="), t.stopStream(), t._rolloverStream()
        }, 6e4)
      }, n
    }, t._buildState = function () {
      var n = {};
      n.method = "get", n.url = t.root_url + "/aggTrades", n.params = {
        symbol: t.symbol,
        limit: 40
      }, e(n).success(function (e) {
        if (console.log("Successfully Get Trades Second Time"), tradeSymbol == t.symbol) {
          t.lastAggTradeId = -1;
          var n = {};
          n.clean = !0, 0 == e.length && (n.eventType = "trade", n.aggTradeId = 1, t.processData(n));
          for (var r = 0; r < e.length; r++) n.eventType = "trade", n.aggTradeId = e[r].a, n.firstTradeId = e[r].f, n.lastTradeId = e[r].l, n.price = e[r].p, n.qty = e[r].q, n.symbol = e[r].s, n.time = e[r].T, n.isBuyerMaker = e[r].m, n.buyerOrderId = -1, n.sellerOrderId = -1, t.processData(n), n = {};
          console.log("Initial state set!"), console.log("Replaying " + t.backedMsg.length + " backed msgs!");
          for (var o = t.backedMsg.shift(); o;) t.processData(o), console.log("Replayed: " + o.eventType), o = t.backedMsg.shift();
          if (t.buildingState = !1, console.log("Replaying DONE! " + t.backedMsg.length + " backed msgs remain."), 0 != t.backedMsg.length) for (console.log("OMG!! ME SMASH!!! GIVE ME A REAL THREADING MODEL PLEASE!!"), o = t.backedMsg.shift(); o;) t.processData(o), o = t.backedMsg.shift()
        }
      })
    }, t._getLastTrade = function (n) {
      var r = {};
      r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
        symbol: t.symbol,
        limit: 40
      }, e(r).success(function (e) {
        n(e)
      })
    }, t.converterGets = function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = {};
        r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.push(r)
      }
      return t
    }, t.converter = function (e) {
      var t = {};
      return t.eventType = "aggTrade" == e.e && "trade", t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "trade" == t.eventType ? (t.aggTradeId = e.a, t.event = e.e, t.eventTime = e.E, t.firstTradeId = e.f, t.lastTradeId = e.l, t.price = e.p, t.qty = e.q, t.symbol = e.s, t.time = e.T, t.isBuyerMaker = e.m) : (console.log("Error! Bad data received:"), console.log(t)), t
    }, t._isDuplicate = function (e) {
      if ("trade" == e.eventType) {
        if (e.aggTradeId > t.lastAggTradeId) return t.lastAggTradeId = e.aggTradeId, !1
      } else console.log("Error! Bad data received:"), console.log(e);
      return !0
    }, t._clear = function (e) {
      e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
    }, t
  }
}]), app.factory("mktdataStreamer", ["$http", "$interval", "$rootScope", function (e, t, n) {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.startStream = function (t, n) {
      e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
    }, e.processData = function (t) {
      e.callback(t)
    }, e.stopStream = function () {
      e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url + "/!miniTicker@arr@3000ms");
      return n.websocketStatus = "connecting", t.onopen = function () {
        n.websocketStatus = "connected", console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
      }, t.onclose = function (t) {
        console.log("Socket has been CLOSED for: market data!"), e.restart ? (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), e._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream())) : (delete e.ws, console.log("Socket done!"))
      }, t.onerror = function () {
        n.websocketStatus = "error"
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        n = e.converter(n), console.log("Market data WS recv, symbol: " + n.symbol + ", lastUpdateTime: " + n.lastUpdateTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
      }, t
    }, e._buildState = function () {
      e.buildingState = !1
    }, e.converter = function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = {}, o = e[n];
        r.eventType = "trade", r.symbol = o.s, r.price = o.c, r.open = o.o, r.high = o.h, r.low = o.l, r.volume = o.v, r.quoteVolume = o.q, t.push(r)
      }
      return t
    }, e._isDuplicate = function (t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if ("trade" == r.eventType && (void 0 == e.lastTradeIds[r.symbol] || e.lastTradeIds[r.symbol] < r.tradeId)) return e.lastTradeIds[r.symbol] = r.tradeId, !1
      }
      return !0
    }, e
  }
}]), app.factory("trollboxStreamer", ["$http", "$interval", function (e, t) {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.lastTradeId = -1, e.startStream = function (t, n, r) {
      e.isRunning = !0, e.url = n, e.lastDepthId = -2, e.lastKlineId = -1, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.lang = t, e.processData = function (t) {
        e._isDuplicate(t) || r(t)
      }, e.ws ? e.ws.close() : e.ws = e._makeStream()
    }, e.stopStream = function () {
      e.restart = !1, e.ws && e.ws.close(), e.lastDepthId = -1, e.lastKlineId = -1, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url.msg + "/" + e.lang + ".b10");
      return t.onopen = function () {
        console.log("Socket has been opened for: " + e.lang + "!"), e._buildState()
      }, t.onclose = function (t) {
        console.log("Socket has been CLOSED for: " + e.lang + "!"), e.restart ? e._rolloverStream() : (delete e.ws, console.log("Socket done!"))
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        console.log("WS recv: " + n.eventType), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
      }, t
    }, e._buildState = function () {
      console.log("Initial state set!"), console.log("Replaying " + e.backedMsg.length + " backed msgs!");
      for (var t = e.backedMsg.shift(); t;) e.processData(t), console.log("Replayed: " + t.eventType), t = e.backedMsg.shift();
      if (e.buildingState = !1, console.log("Replaying DONE! " + e.backedMsg.length + " backed msgs remain."), 0 != e.backedMsg.length) for (console.log("OMG!! ME SMASH!!! GIVE ME A REAL THREADING MODEL PLEASE!!"), t = e.backedMsg.shift(); t;) e.processData(t), t = e.backedMsg.shift()
    }, e._isDuplicate = function (e) {
      return !1
    }, e
  }
}]), app.factory("myInterceptor", ["$q", "$cookies", function (e, t) {
  return {
    request: function (e) {
      return e.headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        lang: localStorage.lang,
        clientType: "web"
      }, t.CSRFToken && (e.headers.CSRFToken = $.md5(t.CSRFToken)), e
    }, response: function (e) {
      return e
    }, requestError: function (t) {
      return e.reject(t)
    }, responseError: function (t) {
      if (console.log(t), 401 == t.status) {
        var n = new Date;
        n.setTime(n.getTime() - 1e3), t = JSON.stringify(t), localStorage.setItem("temp2", t), localStorage.getItem("temp2"), localStorage.getItem("temp2"), localStorage.a = document.cookie, document.cookie = "logined=;path=/;expires=" + n.toGMTString(), location.href = "/login.html?callback=" + encodeURIComponent(location.pathname) + encodeURIComponent(location.search)
      }
      return e.reject(t)
    }
  }
}]), app.factory("user", ["$http", "$cookies", "$translate", function (e, t, n) {
  var r = {};
  return r.logout = function () {
    e({method: "post", url: "/user/loginOut.html"}).success(function (e) {
      if (e.success) {
        var t = new Date;
        t.setTime(t.getTime() - 1e3), document.cookie = "logined=;path=/;expires=" + t.toGMTString(), window.location.reload()
      }
    })
  }, r.login = function () {
    setTimeout(function () {
      angular.element("#userId").focus()
    }), layer.open({
      type: 1,
      title: null,
      shade: [.85, "#000"],
      shadeClose: !0,
      shift: 1,
      closeBtn: 1,
      area: "auto",
      content: $("#login-box"),
      end: function () {
      }
    })
  }, r.gauth = function () {
    angular.element(".wrap").addClass("blur"), angular.element("#imageStream1").click(), layer.open({
      type: 1,
      title: n.instant("gauth"),
      shadeClose: !0,
      shift: 1,
      area: ["300px", "200px"],
      content: $("#gauth-box"),
      end: function () {
        angular.element(".wrap").removeClass("blur")
      }
    })
  }, r
}]), app.factory("getRequest", function () {
  var e = location.search, t = new Object;
  if (-1 != e.indexOf("?")) for (var n = e.substr(1).split("&"), r = 0; r < n.length; r++) t[n[r].split("=")[0]] = unescape(n[r].split("=")[1]);
  return t
}), app.factory("layout", function () {
  var e = {};
  return e.set = function () {
    var e = angular.element(".header").outerHeight(!0), t = angular.element(".tradelist-main-bottom").outerHeight(!0),
      n = angular.element(window).height();
    angular.element(".tradelist-main-top").css({
      height: n - e - t,
      "max-height": n - e - t
    }), angular.element(".list-table").css({height: n - e - t - 79, "max-height": n - e - t - 79})
  }, e
}), app.factory("intro", ["$rootScope", function (e) {
  var t = {};
  return t.init = function () {
    e.ShouldAutoStart = !1, e.IntroOptions = {
      steps: [{
        element: "#step1",
        intro: '<img src="/exchange/resources/img/guide/step1.png"/>',
        position: "right"
      }, {
        element: "#step2",
        intro: '<img src="/exchange/resources/img/guide/step2.png"/>',
        position: "bottom"
      }, {
        element: "#step3",
        intro: '<img src="/exchange/resources/img/guide/step3.png"/>',
        position: "bottom"
      }, {
        element: "#step4",
        intro: '<img src="/exchange/resources/img/guide/step4.png"/>',
        position: "right"
      }, {
        element: "#step5",
        intro: '<img src="/exchange/resources/img/guide/step5.png"/>',
        position: "left"
      }, {
        element: "#step6",
        intro: '<img src="/exchange/resources/img/guide/step6.png"/><span class="start-btn" onclick="document.getElementsByClassName(\'introjs-overlay\')[0].click()">开始交易</span>',
        position: "left"
      }],
      showStepNumbers: !1,
      exitOnOverlayClick: !0,
      exitOnEsc: !0,
      keyboardNavigation: !0,
      showBullets: !1,
      overlayOpacity: 1,
      nextLabel: "<strong>下一步</strong>",
      prevLabel: '<span style="color:green">上一步</span>',
      skipLabel: '<i class="font font-close"></i>',
      doneLabel: '<i class="font font-close"></i>'
    }, e.showHelp = function () {
      angular.element("body").append('<div class="overlayer"></div>'), angular.element("#guide-box").show()
    }, e.hideHelp = function () {
      angular.element(".overlayer").remove(), angular.element("#guide-box").hide()
    }, e.startGuide = function () {
      e.hideHelp()
    }
  }, t
}]), app.factory("scroll", function () {
  var e, t = {};
  return t.scrollTop = function (t) {
    var n = $(t), r = n.find("li"), o = "-" + r.height() + "px";
    r.length > 1 && (e = setInterval(function () {
      n.animate({top: o}, 500, function () {
        n.find("li:first").appendTo(n), n.css("top", 0)
      })
    }, 5e3))
  }, t.stop = function () {
    clearInterval(e)
  }, t
}), app.factory("pageLoading", function () {
  var e = {};
  return e.loading = function () {
    var t = ['<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>"].join("");
    e.loading = layer.open({type: 1, title: null, closeBtn: !1, shade: .9, area: ["100%", "100%"], content: t})
  }, e.close = function () {
    layer.close(e.loading)
  }, e
}), app.factory("pageLoading1", function () {
  var e = {};
  return e.loading = function () {
    if (!$("#pageLoading").html()) {
      var e = ['<div id="pageLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
      $("body").append(e)
    }
  }, e.close = function () {
    $("#pageLoading").hide()
  }, e
}), app.factory("divLoading", function () {
  var e = {}, t = {};
  return e.loading = function (e) {
    if ($(e + " #divLoading").html()) $(e + " #divLoading").show(); else {
      var n = ['<div id="divLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
      $(e).append(n)
    }
    t[e] || (t[e] = 0), t[e] += 1
  }, e.close = function (e, n) {
    n ? (t[e] -= 1, t[e] <= 0 && $(e + " #divLoading").hide()) : $(e + " #divLoading").hide()
  }, e
}), app.factory("T", ["$translate", function (e) {
  return {
    T: function (t) {
      return t ? e.instant(t) : t
    }
  }
}]), app.factory("form", function () {
  var e, t = {};
  return t.validate = function (t, n, r, o) {
    return $(t).Validform({
      btnSubmit: n,
      showAllError: !1,
      datatype: {
        amount: /^(([1-9]\d{0,9})|0)(\.\d{1,8})?$/,
        pwd: /^(?=.*\d)(?=.*[A-Z])[\da-zA-Z~!@#$%^&*-_——\\\/]{8,}$/,
        mobile: /^[1]\d{10}$/
      },
      postonce: !1,
      ajaxPost: !0,
      tiptype: function (t, n, r) {
        if (n.obj.is("form")) e = layer.load("正在提交...", 3); else {
          var o = n.obj.siblings(".Validform_checktip");
          r(o, n.type), o.text(t)
        }
      },
      beforeSubmit: function (e) {
        $(this.btnSubmit).attr("disabled", !0), o && o()
      },
      callback: function (t) {
        layer.close(e), $(this.btnSubmit).attr("disabled", !1), r(t)
      }
    })
  }, t
}), app.factory("mobile", ["$http", "$translate", function (e, t) {
  var n = {}, r = null;
  return n.flag = !0, n.showError = function (e, t) {
    angular.element("#" + e).focus().siblings(".Validform_checktip").text(t).addClass("Validform_wrong")
  }, n.picVerifyCode = function (e, t) {
    angular.element("#" + e).val("").focus(), angular.element("#" + t).click()
  }, n.clearCountDown = function (e, o) {
    n.flag = !0, angular.element("#" + o).text(t.instant("Regain")).removeClass("btn-disabled"), clearInterval(r)
  }, n.countDown = function (e, o) {
    angular.element("#" + e).val(""), angular.element("#" + o).addClass("btn-disabled");
    var i = 60;
    r = setInterval(function () {
      angular.element("#" + o).text(t.instant("Regain") + "(" + i + ")"), -1 == --i && n.clearCountDown(e, o)
    }, 1e3)
  }, n.sendVerifyCode = function (t, r, o, i) {
    if (n.flag) {
      if (n.flag = !1, n.countDown(r, o), i) s = $.param({mobile: i}); else var s;
      e.post(t, s).then(function (e) {
        if (!e.data.success) return layer.msg(e.data.msg, {
          icon: 2,
          shift: 1,
          time: 1500
        }), n.picVerifyCode("registerValiCode", "imageStream1"), n.flag = !0, n.clearCountDown(r, o), !1
      }, function (e) {
        layer.msg(e.data.msg, {icon: 2, shift: 1, time: 1500}), n.clearCountDown(r, o)
      })
    }
  }, n
}]), app.factory("urlSearch", function () {
  var e = {};
  return e.getUrlParam = function (e) {
    for (var t = location.search.substr(1).split("&"), n = 0; n < t.length; n++) {
      var r = t[n].split("=");
      if (e == r[0]) return r[1]
    }
  }, e
}), app.factory("SPA", function () {
  var e = {};
  return e.setUrl = function (t) {
    history.replaceState(null, "", t), e.UrlChange && e.UrlChange()
  }, e
}), app.filter("filterFloor", function () {
  return function (e) {
    return Math.floor(e)
  }
}).filter("marketPrice", function () {
  return function (e) {
    return -1 == e ? "市价" : e
  }
}).filter("filterol", function () {
  return function (e) {
    return null != e ? Number(e).toFixed(8) : "--"
  }
}).filter("filterProfitRatio", function () {
  return function (e) {
    return e > 9999 ? "+9999" : e
  }
}).filter("phone", function () {
  return function (e) {
    var t;
    return e && (t = e.substr(0, 3) + "****" + e.substr(e.length - 4)), t
  }
}).filter("filtermn", function () {
  return function (e) {
    return e >= 0 ? "+" + Number(e).toFixed(2) : Number(e).toFixed(2)
  }
}).filter("filtermnq", function () {
  return function (e) {
    var t;
    return 0 == e ? t = Number(e).toFixed(2) + "%" : e > 0 || e < 0 ? t = Number(e).toFixed(2) + "%" : "--" == e && (t = "--"), t
  }
}).filter("filtermns", function () {
  return function (e) {
    var t;
    return 0 == e ? t = Number(e).toFixed(2) : e > 0 || e < 0 ? t = Number(e).toFixed(2) : "--" == e && (t = "--"), t
  }
}).filter("get8Date", function () {
  return function (e) {
    var t = new Date(e), n = 6e4 * t.getTimezoneOffset(), r = t.getTime() + n;
    return new Date(r + 288e5)
  }
}).filter("T", ["$translate", function (e) {
  return function (t) {
    if (t) return e.instant(t)
  }
}]).filter("floor", function () {
  return function (e) {
    var t = Array.prototype.slice.call(arguments);
    return (Math.floor(Number(e) * Math.pow(10, Number(t[1]))) / Math.pow(10, Number(t[1]))).toFixed(t[1])
  }
}).filter("ifnull", function () {
  return function (e) {
    return e && 0 != Number(e) ? e : "--"
  }
}).filter("symbol", function () {
  return function (e) {
    return e = e || 0, Number(e) >= 0 ? "+" + e : e
  }
}).filter("sameGray", ["$sce", function (e) {
  return function (t, n, r) {
    var o;
    return t = t && (t + "").replace(",", ""), o = n && t.substring(0, t.length - 2) == Number(n).toFixed(r).substring(0, t.length - 2) ? '<span class="gray">' + t.substring(0, t.length - 2) + "</span>" + t.substr(t.length - 2, 2) : Number(t).toFixed(r), o = "<span>" + o + "</span>", e.trustAsHtml(o)
  }
}]).filter("getDigit", function () {
  return function (e) {
    return (1 / Math.pow(10, e)).toFixed(e)
  }
}), Date.prototype.get8Date = function () {
  var e = 6e4 * this.getTimezoneOffset(), t = this.getTime() + e;
  return new Date(t + 288e5)
};
