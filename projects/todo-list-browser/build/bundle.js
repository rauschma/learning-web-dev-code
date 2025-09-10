// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n4, l4) {
  for (var u4 in l4) n4[u4] = l4[u4];
  return n4;
}
function g(n4) {
  n4 && n4.parentNode && n4.parentNode.removeChild(n4);
}
function _(l4, u4, t5) {
  var i4, r4, o4, e4 = {};
  for (o4 in u4) "key" == o4 ? i4 = u4[o4] : "ref" == o4 ? r4 = u4[o4] : e4[o4] = u4[o4];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t5), "function" == typeof l4 && null != l4.defaultProps) for (o4 in l4.defaultProps) void 0 === e4[o4] && (e4[o4] = l4.defaultProps[o4]);
  return m(l4, e4, i4, r4, null);
}
function m(n4, t5, i4, r4, o4) {
  var e4 = { type: n4, props: t5, key: i4, ref: r4, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o4 ? ++u : o4, __i: -1, __u: 0 };
  return null == o4 && null != l.vnode && l.vnode(e4), e4;
}
function k(n4) {
  return n4.children;
}
function x(n4, l4) {
  this.props = n4, this.context = l4;
}
function S(n4, l4) {
  if (null == l4) return n4.__ ? S(n4.__, n4.__i + 1) : null;
  for (var u4; l4 < n4.__k.length; l4++) if (null != (u4 = n4.__k[l4]) && null != u4.__e) return u4.__e;
  return "function" == typeof n4.type ? S(n4) : null;
}
function C(n4) {
  var l4, u4;
  if (null != (n4 = n4.__) && null != n4.__c) {
    for (n4.__e = n4.__c.base = null, l4 = 0; l4 < n4.__k.length; l4++) if (null != (u4 = n4.__k[l4]) && null != u4.__e) {
      n4.__e = n4.__c.base = u4.__e;
      break;
    }
    return C(n4);
  }
}
function M(n4) {
  (!n4.__d && (n4.__d = true) && i.push(n4) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n4, u4, t5, r4, o4, f4, c4, s4 = 1; i.length; ) i.length > s4 && i.sort(e), n4 = i.shift(), s4 = i.length, n4.__d && (t5 = void 0, o4 = (r4 = (u4 = n4).__v).__e, f4 = [], c4 = [], u4.__P && ((t5 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(t5), O(u4.__P, t5, r4, u4.__n, u4.__P.namespaceURI, 32 & r4.__u ? [o4] : null, f4, null == o4 ? S(r4) : o4, !!(32 & r4.__u), c4), t5.__v = r4.__v, t5.__.__k[t5.__i] = t5, N(f4, t5, c4), t5.__e != o4 && C(t5)));
  $.__r = 0;
}
function I(n4, l4, u4, t5, i4, r4, o4, e4, f4, c4, s4) {
  var a4, h5, y5, w5, d4, g4, _4, m5 = t5 && t5.__k || v, b3 = l4.length;
  for (f4 = P(u4, l4, m5, f4, b3), a4 = 0; a4 < b3; a4++) null != (y5 = u4.__k[a4]) && (h5 = -1 == y5.__i ? p : m5[y5.__i] || p, y5.__i = a4, g4 = O(n4, y5, h5, i4, r4, o4, e4, f4, c4, s4), w5 = y5.__e, y5.ref && h5.ref != y5.ref && (h5.ref && B(h5.ref, null, y5), s4.push(y5.ref, y5.__c || w5, y5)), null == d4 && null != w5 && (d4 = w5), (_4 = !!(4 & y5.__u)) || h5.__k === y5.__k ? f4 = A(y5, f4, n4, _4) : "function" == typeof y5.type && void 0 !== g4 ? f4 = g4 : w5 && (f4 = w5.nextSibling), y5.__u &= -7);
  return u4.__e = d4, f4;
}
function P(n4, l4, u4, t5, i4) {
  var r4, o4, e4, f4, c4, s4 = u4.length, a4 = s4, h5 = 0;
  for (n4.__k = new Array(i4), r4 = 0; r4 < i4; r4++) null != (o4 = l4[r4]) && "boolean" != typeof o4 && "function" != typeof o4 ? (f4 = r4 + h5, (o4 = n4.__k[r4] = "string" == typeof o4 || "number" == typeof o4 || "bigint" == typeof o4 || o4.constructor == String ? m(null, o4, null, null, null) : w(o4) ? m(k, { children: o4 }, null, null, null) : null == o4.constructor && o4.__b > 0 ? m(o4.type, o4.props, o4.key, o4.ref ? o4.ref : null, o4.__v) : o4).__ = n4, o4.__b = n4.__b + 1, e4 = null, -1 != (c4 = o4.__i = L(o4, u4, f4, a4)) && (a4--, (e4 = u4[c4]) && (e4.__u |= 2)), null == e4 || null == e4.__v ? (-1 == c4 && (i4 > s4 ? h5-- : i4 < s4 && h5++), "function" != typeof o4.type && (o4.__u |= 4)) : c4 != f4 && (c4 == f4 - 1 ? h5-- : c4 == f4 + 1 ? h5++ : (c4 > f4 ? h5-- : h5++, o4.__u |= 4))) : n4.__k[r4] = null;
  if (a4) for (r4 = 0; r4 < s4; r4++) null != (e4 = u4[r4]) && 0 == (2 & e4.__u) && (e4.__e == t5 && (t5 = S(e4)), D(e4, e4));
  return t5;
}
function A(n4, l4, u4, t5) {
  var i4, r4;
  if ("function" == typeof n4.type) {
    for (i4 = n4.__k, r4 = 0; i4 && r4 < i4.length; r4++) i4[r4] && (i4[r4].__ = n4, l4 = A(i4[r4], l4, u4, t5));
    return l4;
  }
  n4.__e != l4 && (t5 && (l4 && n4.type && !l4.parentNode && (l4 = S(n4)), u4.insertBefore(n4.__e, l4 || null)), l4 = n4.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 == l4.nodeType);
  return l4;
}
function L(n4, l4, u4, t5) {
  var i4, r4, o4, e4 = n4.key, f4 = n4.type, c4 = l4[u4], s4 = null != c4 && 0 == (2 & c4.__u);
  if (null === c4 && null == n4.key || s4 && e4 == c4.key && f4 == c4.type) return u4;
  if (t5 > (s4 ? 1 : 0)) {
    for (i4 = u4 - 1, r4 = u4 + 1; i4 >= 0 || r4 < l4.length; ) if (null != (c4 = l4[o4 = i4 >= 0 ? i4-- : r4++]) && 0 == (2 & c4.__u) && e4 == c4.key && f4 == c4.type) return o4;
  }
  return -1;
}
function T(n4, l4, u4) {
  "-" == l4[0] ? n4.setProperty(l4, null == u4 ? "" : u4) : n4[l4] = null == u4 ? "" : "number" != typeof u4 || y.test(l4) ? u4 : u4 + "px";
}
function j(n4, l4, u4, t5, i4) {
  var r4, o4;
  n: if ("style" == l4) if ("string" == typeof u4) n4.style.cssText = u4;
  else {
    if ("string" == typeof t5 && (n4.style.cssText = t5 = ""), t5) for (l4 in t5) u4 && l4 in u4 || T(n4.style, l4, "");
    if (u4) for (l4 in u4) t5 && u4[l4] == t5[l4] || T(n4.style, l4, u4[l4]);
  }
  else if ("o" == l4[0] && "n" == l4[1]) r4 = l4 != (l4 = l4.replace(f, "$1")), o4 = l4.toLowerCase(), l4 = o4 in n4 || "onFocusOut" == l4 || "onFocusIn" == l4 ? o4.slice(2) : l4.slice(2), n4.l || (n4.l = {}), n4.l[l4 + r4] = u4, u4 ? t5 ? u4.u = t5.u : (u4.u = c, n4.addEventListener(l4, r4 ? a : s, r4)) : n4.removeEventListener(l4, r4 ? a : s, r4);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n4) try {
      n4[l4] = null == u4 ? "" : u4;
      break n;
    } catch (n5) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l4[4] ? n4.removeAttribute(l4) : n4.setAttribute(l4, "popover" == l4 && 1 == u4 ? "" : u4));
  }
}
function F(n4) {
  return function(u4) {
    if (this.l) {
      var t5 = this.l[u4.type + n4];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t5.u) return;
      return t5(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n4, u4, t5, i4, r4, o4, e4, f4, c4, s4) {
  var a4, h5, p5, v4, y5, _4, m5, b3, S2, C3, M2, $2, P2, A3, H, L2, T3, j3 = u4.type;
  if (null != u4.constructor) return null;
  128 & t5.__u && (c4 = !!(32 & t5.__u), o4 = [f4 = u4.__e = t5.__e]), (a4 = l.__b) && a4(u4);
  n: if ("function" == typeof j3) try {
    if (b3 = u4.props, S2 = "prototype" in j3 && j3.prototype.render, C3 = (a4 = j3.contextType) && i4[a4.__c], M2 = a4 ? C3 ? C3.props.value : a4.__ : i4, t5.__c ? m5 = (h5 = u4.__c = t5.__c).__ = h5.__E : (S2 ? u4.__c = h5 = new j3(b3, M2) : (u4.__c = h5 = new x(b3, M2), h5.constructor = j3, h5.render = E), C3 && C3.sub(h5), h5.props = b3, h5.state || (h5.state = {}), h5.context = M2, h5.__n = i4, p5 = h5.__d = true, h5.__h = [], h5._sb = []), S2 && null == h5.__s && (h5.__s = h5.state), S2 && null != j3.getDerivedStateFromProps && (h5.__s == h5.state && (h5.__s = d({}, h5.__s)), d(h5.__s, j3.getDerivedStateFromProps(b3, h5.__s))), v4 = h5.props, y5 = h5.state, h5.__v = u4, p5) S2 && null == j3.getDerivedStateFromProps && null != h5.componentWillMount && h5.componentWillMount(), S2 && null != h5.componentDidMount && h5.__h.push(h5.componentDidMount);
    else {
      if (S2 && null == j3.getDerivedStateFromProps && b3 !== v4 && null != h5.componentWillReceiveProps && h5.componentWillReceiveProps(b3, M2), !h5.__e && null != h5.shouldComponentUpdate && false === h5.shouldComponentUpdate(b3, h5.__s, M2) || u4.__v == t5.__v) {
        for (u4.__v != t5.__v && (h5.props = b3, h5.state = h5.__s, h5.__d = false), u4.__e = t5.__e, u4.__k = t5.__k, u4.__k.some(function(n5) {
          n5 && (n5.__ = u4);
        }), $2 = 0; $2 < h5._sb.length; $2++) h5.__h.push(h5._sb[$2]);
        h5._sb = [], h5.__h.length && e4.push(h5);
        break n;
      }
      null != h5.componentWillUpdate && h5.componentWillUpdate(b3, h5.__s, M2), S2 && null != h5.componentDidUpdate && h5.__h.push(function() {
        h5.componentDidUpdate(v4, y5, _4);
      });
    }
    if (h5.context = M2, h5.props = b3, h5.__P = n4, h5.__e = false, P2 = l.__r, A3 = 0, S2) {
      for (h5.state = h5.__s, h5.__d = false, P2 && P2(u4), a4 = h5.render(h5.props, h5.state, h5.context), H = 0; H < h5._sb.length; H++) h5.__h.push(h5._sb[H]);
      h5._sb = [];
    } else do {
      h5.__d = false, P2 && P2(u4), a4 = h5.render(h5.props, h5.state, h5.context), h5.state = h5.__s;
    } while (h5.__d && ++A3 < 25);
    h5.state = h5.__s, null != h5.getChildContext && (i4 = d(d({}, i4), h5.getChildContext())), S2 && !p5 && null != h5.getSnapshotBeforeUpdate && (_4 = h5.getSnapshotBeforeUpdate(v4, y5)), L2 = a4, null != a4 && a4.type === k && null == a4.key && (L2 = V(a4.props.children)), f4 = I(n4, w(L2) ? L2 : [L2], u4, t5, i4, r4, o4, e4, f4, c4, s4), h5.base = u4.__e, u4.__u &= -161, h5.__h.length && e4.push(h5), m5 && (h5.__E = h5.__ = null);
  } catch (n5) {
    if (u4.__v = null, c4 || null != o4) if (n5.then) {
      for (u4.__u |= c4 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o4[o4.indexOf(f4)] = null, u4.__e = f4;
    } else {
      for (T3 = o4.length; T3--; ) g(o4[T3]);
      z(u4);
    }
    else u4.__e = t5.__e, u4.__k = t5.__k, n5.then || z(u4);
    l.__e(n5, u4, t5);
  }
  else null == o4 && u4.__v == t5.__v ? (u4.__k = t5.__k, u4.__e = t5.__e) : f4 = u4.__e = q(t5.__e, u4, t5, i4, r4, o4, e4, c4, s4);
  return (a4 = l.diffed) && a4(u4), 128 & u4.__u ? void 0 : f4;
}
function z(n4) {
  n4 && n4.__c && (n4.__c.__e = true), n4 && n4.__k && n4.__k.forEach(z);
}
function N(n4, u4, t5) {
  for (var i4 = 0; i4 < t5.length; i4++) B(t5[i4], t5[++i4], t5[++i4]);
  l.__c && l.__c(u4, n4), n4.some(function(u5) {
    try {
      n4 = u5.__h, u5.__h = [], n4.some(function(n5) {
        n5.call(u5);
      });
    } catch (n5) {
      l.__e(n5, u5.__v);
    }
  });
}
function V(n4) {
  return "object" != typeof n4 || null == n4 || n4.__b && n4.__b > 0 ? n4 : w(n4) ? n4.map(V) : d({}, n4);
}
function q(u4, t5, i4, r4, o4, e4, f4, c4, s4) {
  var a4, h5, v4, y5, d4, _4, m5, b3 = i4.props, k3 = t5.props, x3 = t5.type;
  if ("svg" == x3 ? o4 = "http://www.w3.org/2000/svg" : "math" == x3 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a4 = 0; a4 < e4.length; a4++) if ((d4 = e4[a4]) && "setAttribute" in d4 == !!x3 && (x3 ? d4.localName == x3 : 3 == d4.nodeType)) {
      u4 = d4, e4[a4] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x3) return document.createTextNode(k3);
    u4 = document.createElementNS(o4, x3, k3.is && k3), c4 && (l.__m && l.__m(t5, e4), c4 = false), e4 = null;
  }
  if (null == x3) b3 === k3 || c4 && u4.data == k3 || (u4.data = k3);
  else {
    if (e4 = e4 && n.call(u4.childNodes), b3 = i4.props || p, !c4 && null != e4) for (b3 = {}, a4 = 0; a4 < u4.attributes.length; a4++) b3[(d4 = u4.attributes[a4]).name] = d4.value;
    for (a4 in b3) if (d4 = b3[a4], "children" == a4) ;
    else if ("dangerouslySetInnerHTML" == a4) v4 = d4;
    else if (!(a4 in k3)) {
      if ("value" == a4 && "defaultValue" in k3 || "checked" == a4 && "defaultChecked" in k3) continue;
      j(u4, a4, null, d4, o4);
    }
    for (a4 in k3) d4 = k3[a4], "children" == a4 ? y5 = d4 : "dangerouslySetInnerHTML" == a4 ? h5 = d4 : "value" == a4 ? _4 = d4 : "checked" == a4 ? m5 = d4 : c4 && "function" != typeof d4 || b3[a4] === d4 || j(u4, a4, d4, b3[a4], o4);
    if (h5) c4 || v4 && (h5.__html == v4.__html || h5.__html == u4.innerHTML) || (u4.innerHTML = h5.__html), t5.__k = [];
    else if (v4 && (u4.innerHTML = ""), I("template" == t5.type ? u4.content : u4, w(y5) ? y5 : [y5], t5, i4, r4, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o4, e4, f4, e4 ? e4[0] : i4.__k && S(i4, 0), c4, s4), null != e4) for (a4 = e4.length; a4--; ) g(e4[a4]);
    c4 || (a4 = "value", "progress" == x3 && null == _4 ? u4.removeAttribute("value") : null != _4 && (_4 !== u4[a4] || "progress" == x3 && !_4 || "option" == x3 && _4 != b3[a4]) && j(u4, a4, _4, b3[a4], o4), a4 = "checked", null != m5 && m5 != u4[a4] && j(u4, a4, m5, b3[a4], o4));
  }
  return u4;
}
function B(n4, u4, t5) {
  try {
    if ("function" == typeof n4) {
      var i4 = "function" == typeof n4.__u;
      i4 && n4.__u(), i4 && null == u4 || (n4.__u = n4(u4));
    } else n4.current = u4;
  } catch (n5) {
    l.__e(n5, t5);
  }
}
function D(n4, u4, t5) {
  var i4, r4;
  if (l.unmount && l.unmount(n4), (i4 = n4.ref) && (i4.current && i4.current != n4.__e || B(i4, null, u4)), null != (i4 = n4.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n5) {
      l.__e(n5, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n4.__k) for (r4 = 0; r4 < i4.length; r4++) i4[r4] && D(i4[r4], u4, t5 || "function" != typeof n4.type);
  t5 || g(n4.__e), n4.__c = n4.__ = n4.__e = void 0;
}
function E(n4, l4, u4) {
  return this.constructor(n4, u4);
}
function G(u4, t5, i4) {
  var r4, o4, e4, f4;
  t5 == document && (t5 = document.documentElement), l.__ && l.__(u4, t5), o4 = (r4 = "function" == typeof i4) ? null : i4 && i4.__k || t5.__k, e4 = [], f4 = [], O(t5, u4 = (!r4 && i4 || t5).__k = _(k, null, [u4]), o4 || p, p, t5.namespaceURI, !r4 && i4 ? [i4] : o4 ? null : t5.firstChild ? n.call(t5.childNodes) : null, e4, !r4 && i4 ? i4 : o4 ? o4.__e : t5.firstChild, r4, f4), N(e4, u4, f4);
}
n = v.slice, l = { __e: function(n4, l4, u4, t5) {
  for (var i4, r4, o4; l4 = l4.__; ) if ((i4 = l4.__c) && !i4.__) try {
    if ((r4 = i4.constructor) && null != r4.getDerivedStateFromError && (i4.setState(r4.getDerivedStateFromError(n4)), o4 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n4, t5 || {}), o4 = i4.__d), o4) return i4.__E = i4;
  } catch (l5) {
    n4 = l5;
  }
  throw n4;
} }, u = 0, t = function(n4) {
  return null != n4 && null == n4.constructor;
}, x.prototype.setState = function(n4, l4) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n4 && (n4 = n4(d({}, u4), this.props)), n4 && d(u4, n4), null != n4 && this.__v && (l4 && this._sb.push(l4), M(this));
}, x.prototype.forceUpdate = function(n4) {
  this.__v && (this.__e = true, n4 && this.__h.push(n4), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n4, l4) {
  return n4.__v.__b - l4.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/htm/dist/htm.module.js
var n2 = function(t5, s4, r4, e4) {
  var u4;
  s4[0] = 0;
  for (var h5 = 1; h5 < s4.length; h5++) {
    var p5 = s4[h5++], a4 = s4[h5] ? (s4[0] |= p5 ? 1 : 2, r4[s4[h5++]]) : s4[++h5];
    3 === p5 ? e4[0] = a4 : 4 === p5 ? e4[1] = Object.assign(e4[1] || {}, a4) : 5 === p5 ? (e4[1] = e4[1] || {})[s4[++h5]] = a4 : 6 === p5 ? e4[1][s4[++h5]] += a4 + "" : p5 ? (u4 = t5.apply(a4, n2(t5, a4, r4, ["", null])), e4.push(u4), a4[0] ? s4[0] |= 2 : (s4[h5 - 2] = 0, s4[h5] = u4)) : e4.push(a4);
  }
  return e4;
};
var t2 = /* @__PURE__ */ new Map();
function htm_module_default(s4) {
  var r4 = t2.get(this);
  return r4 || (r4 = /* @__PURE__ */ new Map(), t2.set(this, r4)), (r4 = n2(this, r4.get(s4) || (r4.set(s4, r4 = (function(n4) {
    for (var t5, s5, r5 = 1, e4 = "", u4 = "", h5 = [0], p5 = function(n5) {
      1 === r5 && (n5 || (e4 = e4.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h5.push(0, n5, e4) : 3 === r5 && (n5 || e4) ? (h5.push(3, n5, e4), r5 = 2) : 2 === r5 && "..." === e4 && n5 ? h5.push(4, n5, 0) : 2 === r5 && e4 && !n5 ? h5.push(5, 0, true, e4) : r5 >= 5 && ((e4 || !n5 && 5 === r5) && (h5.push(r5, 0, e4, s5), r5 = 6), n5 && (h5.push(r5, n5, 0, s5), r5 = 6)), e4 = "";
    }, a4 = 0; a4 < n4.length; a4++) {
      a4 && (1 === r5 && p5(), p5(a4));
      for (var l4 = 0; l4 < n4[a4].length; l4++) t5 = n4[a4][l4], 1 === r5 ? "<" === t5 ? (p5(), h5 = [h5], r5 = 3) : e4 += t5 : 4 === r5 ? "--" === e4 && ">" === t5 ? (r5 = 1, e4 = "") : e4 = t5 + e4[0] : u4 ? t5 === u4 ? u4 = "" : e4 += t5 : '"' === t5 || "'" === t5 ? u4 = t5 : ">" === t5 ? (p5(), r5 = 1) : r5 && ("=" === t5 ? (r5 = 5, s5 = e4, e4 = "") : "/" === t5 && (r5 < 5 || ">" === n4[a4][l4 + 1]) ? (p5(), 3 === r5 && (h5 = h5[0]), r5 = h5, (h5 = h5[0]).push(2, 0, r5), r5 = 0) : " " === t5 || "	" === t5 || "\n" === t5 || "\r" === t5 ? (p5(), r5 = 2) : e4 += t5), 3 === r5 && "!--" === e4 && (r5 = 4, h5 = h5[0]);
    }
    return p5(), h5;
  })(s4)), r4), arguments, [])).length > 1 ? r4 : r4[0];
}

// node_modules/htm/preact/index.module.js
var m2 = htm_module_default.bind(_);

// node_modules/preact/hooks/dist/hooks.module.js
var t3;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m3 = c2.unmount;
var s2 = c2.__;
function p2(n4, t5) {
  c2.__h && c2.__h(r2, n4, o2 || t5), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n4 >= u4.__.length && u4.__.push({}), u4.__[n4];
}
function d2(n4) {
  return o2 = 1, h2(D2, n4);
}
function h2(n4, u4, i4) {
  var o4 = p2(t3++, 2);
  if (o4.t = n4, !o4.__c && (o4.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n5) {
    var t5 = o4.__N ? o4.__N[0] : o4.__[0], r4 = o4.t(t5, n5);
    t5 !== r4 && (o4.__N = [r4, o4.__[1]], o4.__c.setState({}));
  }], o4.__c = r2, !r2.__f)) {
    var f4 = function(n5, t5, r4) {
      if (!o4.__c.__H) return true;
      var u5 = o4.__c.__H.__.filter(function(n6) {
        return !!n6.__c;
      });
      if (u5.every(function(n6) {
        return !n6.__N;
      })) return !c4 || c4.call(this, n5, t5, r4);
      var i5 = o4.__c.props !== n5;
      return u5.forEach(function(n6) {
        if (n6.__N) {
          var t6 = n6.__[0];
          n6.__ = n6.__N, n6.__N = void 0, t6 !== n6.__[0] && (i5 = true);
        }
      }), c4 && c4.call(this, n5, t5, r4) || i5;
    };
    r2.__f = true;
    var c4 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n5, t5, r4) {
      if (this.__e) {
        var u5 = c4;
        c4 = void 0, f4(n5, t5, r4), c4 = u5;
      }
      e4 && e4.call(this, n5, t5, r4);
    }, r2.shouldComponentUpdate = f4;
  }
  return o4.__N || o4.__;
}
function A2(n4) {
  return o2 = 5, T2(function() {
    return { current: n4 };
  }, []);
}
function T2(n4, r4) {
  var u4 = p2(t3++, 7);
  return C2(u4.__H, r4) && (u4.__ = n4(), u4.__H = r4, u4.__h = n4), u4.__;
}
function j2() {
  for (var n4; n4 = f2.shift(); ) if (n4.__P && n4.__H) try {
    n4.__H.__h.forEach(z2), n4.__H.__h.forEach(B2), n4.__H.__h = [];
  } catch (t5) {
    n4.__H.__h = [], c2.__e(t5, n4.__v);
  }
}
c2.__b = function(n4) {
  r2 = null, e2 && e2(n4);
}, c2.__ = function(n4, t5) {
  n4 && t5.__k && t5.__k.__m && (n4.__m = t5.__k.__m), s2 && s2(n4, t5);
}, c2.__r = function(n4) {
  a2 && a2(n4), t3 = 0;
  var i4 = (r2 = n4.__c).__H;
  i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n5) {
    n5.__N && (n5.__ = n5.__N), n5.u = n5.__N = void 0;
  })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t3 = 0)), u2 = r2;
}, c2.diffed = function(n4) {
  v2 && v2(n4);
  var t5 = n4.__c;
  t5 && t5.__H && (t5.__H.__h.length && (1 !== f2.push(t5) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t5.__H.__.forEach(function(n5) {
    n5.u && (n5.__H = n5.u), n5.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n4, t5) {
  t5.some(function(n5) {
    try {
      n5.__h.forEach(z2), n5.__h = n5.__h.filter(function(n6) {
        return !n6.__ || B2(n6);
      });
    } catch (r4) {
      t5.some(function(n6) {
        n6.__h && (n6.__h = []);
      }), t5 = [], c2.__e(r4, n5.__v);
    }
  }), l2 && l2(n4, t5);
}, c2.unmount = function(n4) {
  m3 && m3(n4);
  var t5, r4 = n4.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n5) {
    try {
      z2(n5);
    } catch (n6) {
      t5 = n6;
    }
  }), r4.__H = void 0, t5 && c2.__e(t5, r4.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n4) {
  var t5, r4 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t5), setTimeout(n4);
  }, u4 = setTimeout(r4, 35);
  k2 && (t5 = requestAnimationFrame(r4));
}
function z2(n4) {
  var t5 = r2, u4 = n4.__c;
  "function" == typeof u4 && (n4.__c = void 0, u4()), r2 = t5;
}
function B2(n4) {
  var t5 = r2;
  n4.__c = n4.__(), r2 = t5;
}
function C2(n4, t5) {
  return !n4 || n4.length !== t5.length || t5.some(function(t6, r4) {
    return t6 !== n4[r4];
  });
}
function D2(n4, t5) {
  return "function" == typeof t5 ? t5(n4) : t5;
}

// node_modules/@preact/signals-core/dist/signals-core.module.js
var i3 = Symbol.for("preact-signals");
function t4() {
  if (!(s3 > 1)) {
    var i4, t5 = false;
    while (void 0 !== h3) {
      var r4 = h3;
      h3 = void 0;
      f3++;
      while (void 0 !== r4) {
        var o4 = r4.o;
        r4.o = void 0;
        r4.f &= -3;
        if (!(8 & r4.f) && c3(r4)) try {
          r4.c();
        } catch (r5) {
          if (!t5) {
            i4 = r5;
            t5 = true;
          }
        }
        r4 = o4;
      }
    }
    f3 = 0;
    s3--;
    if (t5) throw i4;
  } else s3--;
}
function r3(i4) {
  if (s3 > 0) return i4();
  s3++;
  try {
    return i4();
  } finally {
    t4();
  }
}
var o3 = void 0;
function n3(i4) {
  var t5 = o3;
  o3 = void 0;
  try {
    return i4();
  } finally {
    o3 = t5;
  }
}
var h3 = void 0;
var s3 = 0;
var f3 = 0;
var v3 = 0;
function e3(i4) {
  if (void 0 !== o3) {
    var t5 = i4.n;
    if (void 0 === t5 || t5.t !== o3) {
      t5 = { i: 0, S: i4, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t5 };
      if (void 0 !== o3.s) o3.s.n = t5;
      o3.s = t5;
      i4.n = t5;
      if (32 & o3.f) i4.S(t5);
      return t5;
    } else if (-1 === t5.i) {
      t5.i = 0;
      if (void 0 !== t5.n) {
        t5.n.p = t5.p;
        if (void 0 !== t5.p) t5.p.n = t5.n;
        t5.p = o3.s;
        t5.n = void 0;
        o3.s.n = t5;
        o3.s = t5;
      }
      return t5;
    }
  }
}
function u3(i4, t5) {
  this.v = i4;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.W = null == t5 ? void 0 : t5.watched;
  this.Z = null == t5 ? void 0 : t5.unwatched;
  this.name = null == t5 ? void 0 : t5.name;
}
u3.prototype.brand = i3;
u3.prototype.h = function() {
  return true;
};
u3.prototype.S = function(i4) {
  var t5 = this, r4 = this.t;
  if (r4 !== i4 && void 0 === i4.e) {
    i4.x = r4;
    this.t = i4;
    if (void 0 !== r4) r4.e = i4;
    else n3(function() {
      var i5;
      null == (i5 = t5.W) || i5.call(t5);
    });
  }
};
u3.prototype.U = function(i4) {
  var t5 = this;
  if (void 0 !== this.t) {
    var r4 = i4.e, o4 = i4.x;
    if (void 0 !== r4) {
      r4.x = o4;
      i4.e = void 0;
    }
    if (void 0 !== o4) {
      o4.e = r4;
      i4.x = void 0;
    }
    if (i4 === this.t) {
      this.t = o4;
      if (void 0 === o4) n3(function() {
        var i5;
        null == (i5 = t5.Z) || i5.call(t5);
      });
    }
  }
};
u3.prototype.subscribe = function(i4) {
  var t5 = this;
  return E2(function() {
    var r4 = t5.value, n4 = o3;
    o3 = void 0;
    try {
      i4(r4);
    } finally {
      o3 = n4;
    }
  }, { name: "sub" });
};
u3.prototype.valueOf = function() {
  return this.value;
};
u3.prototype.toString = function() {
  return this.value + "";
};
u3.prototype.toJSON = function() {
  return this.value;
};
u3.prototype.peek = function() {
  var i4 = o3;
  o3 = void 0;
  try {
    return this.value;
  } finally {
    o3 = i4;
  }
};
Object.defineProperty(u3.prototype, "value", { get: function() {
  var i4 = e3(this);
  if (void 0 !== i4) i4.i = this.i;
  return this.v;
}, set: function(i4) {
  if (i4 !== this.v) {
    if (f3 > 100) throw new Error("Cycle detected");
    this.v = i4;
    this.i++;
    v3++;
    s3++;
    try {
      for (var r4 = this.t; void 0 !== r4; r4 = r4.x) r4.t.N();
    } finally {
      t4();
    }
  }
} });
function d3(i4, t5) {
  return new u3(i4, t5);
}
function c3(i4) {
  for (var t5 = i4.s; void 0 !== t5; t5 = t5.n) if (t5.S.i !== t5.i || !t5.S.h() || t5.S.i !== t5.i) return true;
  return false;
}
function a3(i4) {
  for (var t5 = i4.s; void 0 !== t5; t5 = t5.n) {
    var r4 = t5.S.n;
    if (void 0 !== r4) t5.r = r4;
    t5.S.n = t5;
    t5.i = -1;
    if (void 0 === t5.n) {
      i4.s = t5;
      break;
    }
  }
}
function l3(i4) {
  var t5 = i4.s, r4 = void 0;
  while (void 0 !== t5) {
    var o4 = t5.p;
    if (-1 === t5.i) {
      t5.S.U(t5);
      if (void 0 !== o4) o4.n = t5.n;
      if (void 0 !== t5.n) t5.n.p = o4;
    } else r4 = t5;
    t5.S.n = t5.r;
    if (void 0 !== t5.r) t5.r = void 0;
    t5 = o4;
  }
  i4.s = r4;
}
function y2(i4, t5) {
  u3.call(this, void 0);
  this.x = i4;
  this.s = void 0;
  this.g = v3 - 1;
  this.f = 4;
  this.W = null == t5 ? void 0 : t5.watched;
  this.Z = null == t5 ? void 0 : t5.unwatched;
  this.name = null == t5 ? void 0 : t5.name;
}
y2.prototype = new u3();
y2.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === v3) return true;
  this.g = v3;
  this.f |= 1;
  if (this.i > 0 && !c3(this)) {
    this.f &= -2;
    return true;
  }
  var i4 = o3;
  try {
    a3(this);
    o3 = this;
    var t5 = this.x();
    if (16 & this.f || this.v !== t5 || 0 === this.i) {
      this.v = t5;
      this.f &= -17;
      this.i++;
    }
  } catch (i5) {
    this.v = i5;
    this.f |= 16;
    this.i++;
  }
  o3 = i4;
  l3(this);
  this.f &= -2;
  return true;
};
y2.prototype.S = function(i4) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.S(t5);
  }
  u3.prototype.S.call(this, i4);
};
y2.prototype.U = function(i4) {
  if (void 0 !== this.t) {
    u3.prototype.U.call(this, i4);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t5 = this.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
    }
  }
};
y2.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i4 = this.t; void 0 !== i4; i4 = i4.x) i4.t.N();
  }
};
Object.defineProperty(y2.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i4 = e3(this);
  this.h();
  if (void 0 !== i4) i4.i = this.i;
  if (16 & this.f) throw this.v;
  return this.v;
} });
function w3(i4, t5) {
  return new y2(i4, t5);
}
function _2(i4) {
  var r4 = i4.u;
  i4.u = void 0;
  if ("function" == typeof r4) {
    s3++;
    var n4 = o3;
    o3 = void 0;
    try {
      r4();
    } catch (t5) {
      i4.f &= -2;
      i4.f |= 8;
      b(i4);
      throw t5;
    } finally {
      o3 = n4;
      t4();
    }
  }
}
function b(i4) {
  for (var t5 = i4.s; void 0 !== t5; t5 = t5.n) t5.S.U(t5);
  i4.x = void 0;
  i4.s = void 0;
  _2(i4);
}
function g2(i4) {
  if (o3 !== this) throw new Error("Out-of-order effect");
  l3(this);
  o3 = i4;
  this.f &= -2;
  if (8 & this.f) b(this);
  t4();
}
function p3(i4, t5) {
  this.x = i4;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
  this.name = null == t5 ? void 0 : t5.name;
}
p3.prototype.c = function() {
  var i4 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t5 = this.x();
    if ("function" == typeof t5) this.u = t5;
  } finally {
    i4();
  }
};
p3.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _2(this);
  a3(this);
  s3++;
  var i4 = o3;
  o3 = this;
  return g2.bind(this, i4);
};
p3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h3;
    h3 = this;
  }
};
p3.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) b(this);
};
p3.prototype.dispose = function() {
  this.d();
};
function E2(i4, t5) {
  var r4 = new p3(i4, t5);
  try {
    r4.c();
  } catch (i5) {
    r4.d();
    throw i5;
  }
  var o4 = r4.d.bind(r4);
  o4[Symbol.dispose] = o4;
  return o4;
}

// node_modules/@preact/signals/dist/signals.module.js
var h4;
var w4;
var p4;
var m4 = [];
E2(function() {
  h4 = this.N;
})();
function y4(i4, t5) {
  l[i4] = t5.bind(null, l[i4] || function() {
  });
}
function _3(i4) {
  if (p4) p4();
  p4 = i4 && i4.S();
}
function g3(i4) {
  var n4 = this, r4 = i4.data, f4 = useSignal(r4);
  f4.value = r4;
  var e4 = T2(function() {
    var i5 = n4, r5 = n4.__v;
    while (r5 = r5.__) if (r5.__c) {
      r5.__c.__$f |= 4;
      break;
    }
    var o4 = w3(function() {
      var i6 = f4.value.value;
      return 0 === i6 ? 0 : true === i6 ? "" : i6 || "";
    }), e5 = w3(function() {
      return !Array.isArray(o4.value) && !t(o4.value);
    }), u5 = E2(function() {
      this.N = F2;
      if (e5.value) {
        var n5 = o4.value;
        if (i5.__v && i5.__v.__e && 3 === i5.__v.__e.nodeType) i5.__v.__e.data = n5;
      }
    }), c5 = n4.__$u.d;
    n4.__$u.d = function() {
      u5();
      c5.call(this);
    };
    return [e5, o4];
  }, []), u4 = e4[0], c4 = e4[1];
  return u4.value ? c4.peek() : c4.value;
}
g3.displayName = "ReactiveTextNode";
Object.defineProperties(u3.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: g3 }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
y4("__b", function(i4, n4) {
  if ("function" == typeof n4.type && "undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  if ("string" == typeof n4.type) {
    var t5, r4 = n4.props;
    for (var o4 in r4) if ("children" !== o4) {
      var f4 = r4[o4];
      if (f4 instanceof u3) {
        if (!t5) n4.__np = t5 = {};
        t5[o4] = f4;
        r4[o4] = f4.peek();
      }
    }
  }
  i4(n4);
});
y4("__r", function(i4, n4) {
  if ("function" == typeof n4.type && "undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(n4.type.displayName || n4.type.name || "Unknown");
  if (n4.type !== k) {
    _3();
    var t5, o4 = n4.__c;
    if (o4) {
      o4.__$f &= -2;
      if (void 0 === (t5 = o4.__$u)) o4.__$u = t5 = (function(i5) {
        var n5;
        E2(function() {
          n5 = this;
        });
        n5.c = function() {
          o4.__$f |= 1;
          o4.setState({});
        };
        return n5;
      })();
    }
    w4 = o4;
    _3(t5);
  }
  i4(n4);
});
y4("__e", function(i4, n4, t5, r4) {
  if ("undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  _3();
  w4 = void 0;
  i4(n4, t5, r4);
});
y4("diffed", function(i4, n4) {
  if ("function" == typeof n4.type && "undefined" != typeof window && window.__PREACT_SIGNALS_DEVTOOLS__) window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent();
  _3();
  w4 = void 0;
  var t5;
  if ("string" == typeof n4.type && (t5 = n4.__e)) {
    var r4 = n4.__np, o4 = n4.props;
    if (r4) {
      var f4 = t5.U;
      if (f4) for (var e4 in f4) {
        var u4 = f4[e4];
        if (void 0 !== u4 && !(e4 in r4)) {
          u4.d();
          f4[e4] = void 0;
        }
      }
      else {
        f4 = {};
        t5.U = f4;
      }
      for (var a4 in r4) {
        var c4 = f4[a4], v4 = r4[a4];
        if (void 0 === c4) {
          c4 = b2(t5, a4, v4, o4);
          f4[a4] = c4;
        } else c4.o(v4, o4);
      }
    }
  }
  i4(n4);
});
function b2(i4, n4, t5, r4) {
  var o4 = n4 in i4 && void 0 === i4.ownerSVGElement, f4 = d3(t5);
  return { o: function(i5, n5) {
    f4.value = i5;
    r4 = n5;
  }, d: E2(function() {
    this.N = F2;
    var t6 = f4.value.value;
    if (r4[n4] !== t6) {
      r4[n4] = t6;
      if (o4) i4[n4] = t6;
      else if (t6) i4.setAttribute(n4, t6);
      else i4.removeAttribute(n4);
    }
  }) };
}
y4("unmount", function(i4, n4) {
  if ("string" == typeof n4.type) {
    var t5 = n4.__e;
    if (t5) {
      var r4 = t5.U;
      if (r4) {
        t5.U = void 0;
        for (var o4 in r4) {
          var f4 = r4[o4];
          if (f4) f4.d();
        }
      }
    }
  } else {
    var e4 = n4.__c;
    if (e4) {
      var u4 = e4.__$u;
      if (u4) {
        e4.__$u = void 0;
        u4.d();
      }
    }
  }
  i4(n4);
});
y4("__h", function(i4, n4, t5, r4) {
  if (r4 < 3 || 9 === r4) n4.__$f |= 2;
  i4(n4, t5, r4);
});
x.prototype.shouldComponentUpdate = function(i4, n4) {
  var t5 = this.__$u, r4 = t5 && void 0 !== t5.s;
  for (var o4 in n4) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    var f4 = 2 & this.__$f;
    if (!(r4 || f4 || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(r4 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var e4 in i4) if ("__source" !== e4 && i4[e4] !== this.props[e4]) return true;
  for (var u4 in this.props) if (!(u4 in i4)) return true;
  return false;
};
function useSignal(i4, n4) {
  return d2(function() {
    return d3(i4, n4);
  })[0];
}
var q2 = function(i4) {
  queueMicrotask(function() {
    queueMicrotask(i4);
  });
};
function x2() {
  r3(function() {
    var i4;
    while (i4 = m4.shift()) h4.call(i4);
  });
}
function F2() {
  if (1 === m4.push(this)) (l.requestAnimationFrame || q2)(x2);
}

// js/app-model.js
var createCoreModel = () => ({
  todos: []
});
var deepCopyTodos = (todos) => {
  return todos.map(
    (todo) => ({ ...todo })
  );
};
var createAppModel = () => d3(
  createCoreModel()
);
var addTodo = (appModel2, text) => {
  const oldCoreModel = appModel2.value;
  const newCoreModel = {
    todos: [
      ...deepCopyTodos(oldCoreModel.todos),
      { text, checked: false }
    ]
  };
  appModel2.value = newCoreModel;
};
var deleteTodo = (appModel2, index) => {
  const oldCoreModel = appModel2.value;
  const newCoreModel = createCoreModel();
  for (const [i4, todo] of oldCoreModel.todos.entries()) {
    if (i4 !== index) {
      newCoreModel.todos.push(
        { ...todo }
        // copy
      );
    }
  }
  appModel2.value = newCoreModel;
};
var updateChecked = (appModel2, index, checked) => {
  const oldCoreModel = appModel2.value;
  const newCoreModel = {
    todos: oldCoreModel.todos.map(
      (todo, i4) => {
        if (i4 === index) {
          return {
            text: todo.text,
            checked
          };
        } else {
          return { ...todo };
        }
      }
    )
  };
  appModel2.value = newCoreModel;
};

// js/main.js
var appModel = createAppModel();
function Todo({ index, todo }) {
  function onchange(event) {
    updateChecked(appModel, index, event.target.checked);
  }
  function onclick() {
    deleteTodo(appModel, index);
  }
  return m2`
    <div>
      <label>
        <input type="checkbox" checked=${todo.checked} onchange=${onchange} />
        ${" "}
        ${todo.text}
      </label>
      ${" "}
      <span class="delete-icon" onclick=${onclick}>×</span>
    </div>
  `;
}
function Todos({ todos }) {
  return todos.map(
    (todo, index) => {
      return m2`
        <${Todo} index=${index} todo=${todo} />
      `;
    }
  );
}
function App() {
  const inputRef = A2(null);
  const add = () => {
    const todoInput = inputRef.current;
    const todoText = todoInput.value;
    todoInput.value = "";
    addTodo(appModel, todoText);
  };
  return m2`
    <h1>Todo list</h1>
    <${Todos} todos=${appModel.value.todos}
              editedIndex=${appModel.value.editedIndex}
    />
    <div>
      <button onclick=${add}>Add:</button>
      ${" "}
      <input type="text" ref=${inputRef} />
    </div>
  `;
}
G(
  m2`<${App} />`,
  document.body
);
