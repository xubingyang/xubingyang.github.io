window.dataLayer =
  window.dataLayer ||
  [](
    // Copyright 2012 Google Inc. All rights reserved.
    function () {
      var data = {
        resource: {
          version: '1',

          macros: [{ function: '__e' }, { function: '__cid' }],
          tags: [
            {
              function: '__rep',
              once_per_event: true,
              vtp_containerId: ['macro', 1],
              tag_id: 1
            }
          ],
          predicates: [{ function: '_eq', arg0: ['macro', 0], arg1: 'gtm.js' }],
          rules: [
            [
              ['if', 0],
              ['add', 0]
            ]
          ]
        },
        runtime: []
      }

      /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
      var aa,
        ca = function (a) {
          var b = 0
          return function () {
            return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
          }
        },
        da =
          'function' == typeof Object.create
            ? Object.create
            : function (a) {
                var b = function () {}
                b.prototype = a
                return new b()
              },
        ha
      if ('function' == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf
      else {
        var ia
        a: {
          var ja = { a: !0 },
            ka = {}
          try {
            ka.__proto__ = ja
            ia = ka.a
            break a
          } catch (a) {}
          ia = !1
        }
        ha = ia
          ? function (a, b) {
              a.__proto__ = b
              if (a.__proto__ !== b)
                throw new TypeError(a + ' is not extensible')
              return a
            }
          : null
      }
      var la = ha,
        ma = function (a, b) {
          a.prototype = da(b.prototype)
          a.prototype.constructor = a
          if (la) la(a, b)
          else
            for (var c in b)
              if ('prototype' != c)
                if (Object.defineProperties) {
                  var d = Object.getOwnPropertyDescriptor(b, c)
                  d && Object.defineProperty(a, c, d)
                } else a[c] = b[c]
          a.bl = b.prototype
        },
        na = this || self,
        oa = function (a) {
          return a
        }
      var pa = function () {},
        qa = function (a) {
          return 'function' === typeof a
        },
        h = function (a) {
          return 'string' === typeof a
        },
        ra = function (a) {
          return 'number' === typeof a && !isNaN(a)
        },
        sa = Array.isArray,
        ta = function (a, b) {
          if (a && sa(a))
            for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
        },
        ua = function (a, b) {
          if (!ra(a) || !ra(b) || a > b) (a = 0), (b = 2147483647)
          return Math.floor(Math.random() * (b - a + 1) + a)
        },
        xa = function (a, b) {
          for (var c = new va(), d = 0; d < a.length; d++) c.set(a[d], !0)
          for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0
          return !1
        },
        k = function (a, b) {
          for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        za = function (a) {
          return (
            !!a &&
            ('[object Arguments]' === Object.prototype.toString.call(a) ||
              Object.prototype.hasOwnProperty.call(a, 'callee'))
          )
        },
        Aa = function (a) {
          return Math.round(Number(a)) || 0
        },
        Ba = function (a) {
          return 'false' === String(a).toLowerCase() ? !1 : !!a
        },
        Ca = function (a) {
          var b = []
          if (sa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]))
          return b
        },
        Da = function (a) {
          return a ? a.replace(/^\s+|\s+$/g, '') : ''
        },
        Ea = function () {
          return new Date(Date.now())
        },
        Fa = function () {
          return Ea().getTime()
        },
        va = function () {
          this.prefix = 'gtm.'
          this.values = {}
        }
      va.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
      }
      va.prototype.get = function (a) {
        return this.values[this.prefix + a]
      }
      var Ga = function (a, b, c) {
          return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ha = function (a) {
          var b = a
          return function () {
            if (b) {
              var c = b
              b = void 0
              try {
                c()
              } catch (d) {}
            }
          }
        },
        Ia = function (a, b) {
          for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ja = function (a) {
          for (var b in a) if (a.hasOwnProperty(b)) return !0
          return !1
        },
        La = function (a, b) {
          for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]), c.push.apply(c, b[a[d]] || [])
          return c
        },
        Ma = function (a, b) {
          for (
            var c = {}, d = c, e = a.split('.'), f = 0;
            f < e.length - 1;
            f++
          )
            d = d[e[f]] = {}
          d[e[e.length - 1]] = b
          return c
        },
        Na = /^\w{1,9}$/,
        Pa = function (a, b) {
          a = a || {}
          b = b || ','
          var c = []
          k(a, function (d, e) {
            Na.test(d) && e && c.push(d)
          })
          return c.join(b)
        },
        Qa = function (a, b) {
          function c() {
            ++d === b && (e(), (e = null), (c.done = !0))
          }
          var d = 0,
            e = a
          c.done = !1
          return c
        }
      function Ra() {
        for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c
        return b
      }
      function Ta() {
        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        a += a.toLowerCase() + '0123456789-_'
        return a + '.'
      }
      var Sa, Ua
      function Va(a) {
        Sa = Sa || Ta()
        Ua = Ua || Ra()
        for (var b = [], c = 0; c < a.length; c += 3) {
          var d = c + 1 < a.length,
            e = c + 2 < a.length,
            f = a.charCodeAt(c),
            g = d ? a.charCodeAt(c + 1) : 0,
            l = e ? a.charCodeAt(c + 2) : 0,
            m = f >> 2,
            n = ((f & 3) << 4) | (g >> 4),
            p = ((g & 15) << 2) | (l >> 6),
            q = l & 63
          e || ((q = 64), d || (p = 64))
          b.push(Sa[m], Sa[n], Sa[p], Sa[q])
        }
        return b.join('')
      }
      function Wa(a) {
        function b(m) {
          for (; d < a.length; ) {
            var n = a.charAt(d++),
              p = Ua[n]
            if (null != p) return p
            if (!/^[\s\xa0]*$/.test(n))
              throw Error('Unknown base64 encoding at char: ' + n)
          }
          return m
        }
        Sa = Sa || Ta()
        Ua = Ua || Ra()
        for (var c = '', d = 0; ; ) {
          var e = b(-1),
            f = b(0),
            g = b(64),
            l = b(64)
          if (64 === l && -1 === e) return c
          c += String.fromCharCode((e << 2) | (f >> 4))
          64 != g &&
            ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
            64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)))
        }
      }
      var Xa = {},
        Ya = function (a, b) {
          Xa[a] = Xa[a] || []
          Xa[a][b] = !0
        },
        Za = function () {
          delete Xa.GA4_EVENT
        },
        $a = function (a) {
          var b = Xa[a]
          if (!b || 0 === b.length) return ''
          for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
              b[e] && (d |= 1 << e % 8)
          0 < d && c.push(String.fromCharCode(d))
          return Va(c.join('')).replace(/\.+$/, '')
        }
      var ab = Array.prototype.indexOf
        ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
          }
        : function (a, b) {
            if ('string' === typeof a)
              return 'string' !== typeof b || 1 != b.length
                ? -1
                : a.indexOf(b, 0)
            for (var c = 0; c < a.length; c++)
              if (c in a && a[c] === b) return c
            return -1
          }
      var bb,
        cb = function () {
          if (void 0 === bb) {
            var a = null,
              b = na.trustedTypes
            if (b && b.createPolicy) {
              try {
                a = b.createPolicy('goog#html', {
                  createHTML: oa,
                  createScript: oa,
                  createScriptURL: oa
                })
              } catch (c) {
                na.console && na.console.error(c.message)
              }
              bb = a
            } else bb = a
          }
          return bb
        }
      var eb = function (a, b) {
        this.h = b === db ? a : ''
      }
      eb.prototype.toString = function () {
        return this.h + ''
      }
      var db = {}
      var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
      var gb, hb
      a: {
        for (var ib = ['CLOSURE_FLAGS'], jb = na, kb = 0; kb < ib.length; kb++)
          if (((jb = jb[ib[kb]]), null == jb)) {
            hb = null
            break a
          }
        hb = jb
      }
      var lb = hb && hb[610401301]
      gb = null != lb ? lb : !1
      function mb() {
        var a = na.navigator
        if (a) {
          var b = a.userAgent
          if (b) return b
        }
        return ''
      }
      var nb,
        ob = na.navigator
      nb = ob ? ob.userAgentData || null : null
      function pb(a) {
        return gb
          ? nb
            ? nb.brands.some(function (b) {
                var c = b.brand
                return c && -1 != c.indexOf(a)
              })
            : !1
          : !1
      }
      function qb(a) {
        return -1 != mb().indexOf(a)
      }
      function rb() {
        return gb ? !!nb && 0 < nb.brands.length : !1
      }
      function sb() {
        return rb() ? !1 : qb('Opera')
      }
      function tb() {
        return qb('Firefox') || qb('FxiOS')
      }
      function ub() {
        return rb()
          ? pb('Chromium')
          : ((qb('Chrome') || qb('CriOS')) && !(rb() ? 0 : qb('Edge'))) ||
              qb('Silk')
      }
      var vb = {},
        wb = function (a, b) {
          this.h = b === vb ? a : ''
        }
      wb.prototype.toString = function () {
        return this.h.toString()
      } /*
  
   SPDX-License-Identifier: Apache-2.0
  */
      function xb(a, b) {
        if (void 0 !== a.tagName) {
          if ('script' === a.tagName.toLowerCase()) throw Error('')
          if ('style' === a.tagName.toLowerCase()) throw Error('')
        }
        a.innerHTML =
          b instanceof wb && b.constructor === wb ? b.h : 'type_error:SafeHtml'
      }
      function yb(a) {
        var b = (a = zb(a)),
          c = cb(),
          d = c ? c.createHTML(b) : b
        return new wb(d, vb)
      }
      function zb(a) {
        return null === a ? 'null' : void 0 === a ? 'undefined' : a
      }
      var z = window,
        C = document,
        Ab = navigator,
        Bb = C.currentScript && C.currentScript.src,
        Cb = function (a, b) {
          var c = z[a]
          z[a] = void 0 === c ? b : c
          return z[a]
        },
        Db = function (a, b) {
          b &&
            (a.addEventListener
              ? (a.onload = b)
              : (a.onreadystatechange = function () {
                  a.readyState in { loaded: 1, complete: 1 } &&
                    ((a.onreadystatechange = null), b())
                }))
        },
        Eb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Fb = { onload: 1, src: 1, width: 1, height: 1, style: 1 }
      function Gb(a, b, c) {
        b &&
          k(b, function (d, e) {
            d = d.toLowerCase()
            c.hasOwnProperty(d) || a.setAttribute(d, e)
          })
      }
      var Hb = function (a, b, c, d, e) {
          var f = C.createElement('script')
          Gb(f, d, Eb)
          f.type = 'text/javascript'
          f.async = !0
          var g,
            l = zb(a),
            m = cb(),
            n = m ? m.createScriptURL(l) : l
          g = new eb(n, db)
          f.src =
            g instanceof eb && g.constructor === eb
              ? g.h
              : 'type_error:TrustedResourceUrl'
          var p,
            q,
            t,
            r =
              null ==
              (t = (q = (
                (f.ownerDocument && f.ownerDocument.defaultView) ||
                window
              ).document).querySelector)
                ? void 0
                : t.call(q, 'script[nonce]')
          ;(p = r ? r.nonce || r.getAttribute('nonce') || '' : '') &&
            f.setAttribute('nonce', p)
          Db(f, b)
          c && (f.onerror = c)
          if (e) e.appendChild(f)
          else {
            var u = C.getElementsByTagName('script')[0] || C.body || C.head
            u.parentNode.insertBefore(f, u)
          }
          return f
        },
        Ib = function () {
          if (Bb) {
            var a = Bb.toLowerCase()
            if (0 === a.indexOf('https://')) return 2
            if (0 === a.indexOf('http://')) return 3
          }
          return 1
        },
        Jb = function (a, b, c, d, e) {
          var f
          f = void 0 === f ? !0 : f
          var g = e,
            l = !1
          g || ((g = C.createElement('iframe')), (l = !0))
          Gb(g, c, Fb)
          d &&
            k(d, function (n, p) {
              g.dataset[n] = p
            })
          f &&
            ((g.height = '0'),
            (g.width = '0'),
            (g.style.display = 'none'),
            (g.style.visibility = 'hidden'))
          if (l) {
            var m = (C.body && C.body.lastChild) || C.body || C.head
            m.parentNode.insertBefore(g, m)
          }
          Db(g, b)
          void 0 !== a && (g.src = a)
          return g
        },
        Kb = function (a, b, c, d) {
          var e = new Image(1, 1)
          Gb(e, d, {})
          e.onload = function () {
            e.onload = null
            b && b()
          }
          e.onerror = function () {
            e.onerror = null
            c && c()
          }
          e.src = a
        },
        Lb = function (a, b, c, d) {
          a.addEventListener
            ? a.addEventListener(b, c, !!d)
            : a.attachEvent && a.attachEvent('on' + b, c)
        },
        Mb = function (a, b, c) {
          a.removeEventListener
            ? a.removeEventListener(b, c, !1)
            : a.detachEvent && a.detachEvent('on' + b, c)
        },
        E = function (a) {
          z.setTimeout(a, 0)
        },
        Nb = function (a, b) {
          return a && b && a.attributes && a.attributes[b]
            ? a.attributes[b].value
            : null
        },
        Ob = function (a) {
          var b = a.innerText || a.textContent || ''
          b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''))
          b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '))
          return b
        },
        Pb = function (a) {
          var b = C.createElement('div')
          xb(b, yb('A<div>' + a + '</div>'))
          b = b.lastChild
          for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild))
          return c
        },
        Qb = function (a, b, c) {
          c = c || 100
          for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0
          for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f
            f = f.parentElement
          }
          return null
        },
        Rb = function (a) {
          var b
          try {
            b = Ab.sendBeacon && Ab.sendBeacon(a)
          } catch (c) {
            Ya('TAGGING', 15)
          }
          b || Kb(a)
        },
        Sb = function (a, b) {
          var c = a[b]
          c && 'string' === typeof c.animVal && (c = c.animVal)
          return c
        },
        Tb = function () {
          var a = z.performance
          if (a && qa(a.now)) return a.now()
        },
        Ub = function () {
          return z.performance || void 0
        } /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
      var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wb = function (a) {
          if (null == a) return String(a)
          var b = Vb.exec(Object.prototype.toString.call(Object(a)))
          return b ? b[1].toLowerCase() : 'object'
        },
        Xb = function (a, b) {
          return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Yb = function (a) {
          if (!a || 'object' != Wb(a) || a.nodeType || a == a.window) return !1
          try {
            if (
              a.constructor &&
              !Xb(a, 'constructor') &&
              !Xb(a.constructor.prototype, 'isPrototypeOf')
            )
              return !1
          } catch (c) {
            return !1
          }
          for (var b in a);
          return void 0 === b || Xb(a, b)
        },
        G = function (a, b) {
          var c = b || ('array' == Wb(a) ? [] : {}),
            d
          for (d in a)
            if (Xb(a, d)) {
              var e = a[d]
              'array' == Wb(e)
                ? ('array' != Wb(c[d]) && (c[d] = []), (c[d] = G(e, c[d])))
                : Yb(e)
                ? (Yb(c[d]) || (c[d] = {}), (c[d] = G(e, c[d])))
                : (c[d] = e)
            }
          return c
        }
      var Zb = function (a) {
        if (void 0 === a || sa(a) || Yb(a)) return !0
        switch (typeof a) {
          case 'boolean':
          case 'number':
          case 'string':
          case 'function':
            return !0
        }
        return !1
      }
      var $b = (function () {
        var a = function (b) {
          return {
            toString: function () {
              return b
            }
          }
        }
        return {
          Yh: a('consent'),
          eg: a('convert_case_to'),
          fg: a('convert_false_to'),
          gg: a('convert_null_to'),
          hg: a('convert_true_to'),
          ig: a('convert_undefined_to'),
          Kk: a('debug_mode_metadata'),
          Qa: a('function'),
          jf: a('instance_name'),
          Vi: a('live_only'),
          Wi: a('malware_disabled'),
          Xi: a('metadata'),
          aj: a('original_activity_id'),
          Ok: a('original_vendor_template_id'),
          Nk: a('once_on_load'),
          Zi: a('once_per_event'),
          dh: a('once_per_load'),
          Qk: a('priority_override'),
          Rk: a('respected_consent_types'),
          hh: a('setup_tags'),
          Nc: a('tag_id'),
          mh: a('teardown_tags')
        }
      })()
      var vc
      var wc = [],
        xc = [],
        yc = [],
        zc = [],
        Ac = [],
        Bc = {},
        Cc,
        Dc,
        Fc = function () {
          var a = Ec
          Dc = Dc || a
        },
        Gc,
        Hc = function (a, b) {
          var c = a['function'],
            d = b && b.event
          if (!c)
            throw Error('Error: No function name given for function call.')
          var e = Bc[c],
            f = {},
            g
          for (g in a)
            a.hasOwnProperty(g) &&
              0 === g.indexOf('vtp_') &&
              (e && d && d.rh && d.rh(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]))
          e && d && d.qh && (f.vtp_gtmCachedValues = d.qh)
          if (b) {
            if (null == b.name) {
              var l
              a: {
                var m = b.index
                if (null == m) l = ''
                else {
                  var n
                  switch (b.type) {
                    case 2:
                      n = wc[m]
                      break
                    case 1:
                      n = zc[m]
                      break
                    default:
                      l = ''
                      break a
                  }
                  var p = n && n[$b.jf]
                  l = p ? String(p) : ''
                }
              }
              b.name = l
            }
            e &&
              ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name))
          }
          return void 0 !== e ? e(f) : vc(c, f, b)
        },
        Jc = function (a, b, c) {
          c = c || []
          var d = {},
            e
          for (e in a) a.hasOwnProperty(e) && (d[e] = Ic(a[e], b, c))
          return d
        },
        Ic = function (a, b, c) {
          if (sa(a)) {
            var d
            switch (a[0]) {
              case 'function_id':
                return a[1]
              case 'list':
                d = []
                for (var e = 1; e < a.length; e++) d.push(Ic(a[e], b, c))
                return d
              case 'macro':
                var f = a[1]
                if (c[f]) return
                var g = wc[f]
                if (!g || b.Cf(g)) return
                c[f] = !0
                var l = String(g[$b.jf])
                try {
                  var m = Jc(g, b, c)
                  m.vtp_gtmEventId = b.id
                  b.priorityId && (m.vtp_gtmPriorityId = b.priorityId)
                  d = Hc(m, { event: b, index: f, type: 2, name: l })
                  Gc && (d = Gc.oj(d, m))
                } catch (x) {
                  b.Ch && b.Ch(x, Number(f), l), (d = !1)
                }
                c[f] = !1
                return d
              case 'map':
                d = {}
                for (var n = 1; n < a.length; n += 2)
                  d[Ic(a[n], b, c)] = Ic(a[n + 1], b, c)
                return d
              case 'template':
                d = []
                for (var p = !1, q = 1; q < a.length; q++) {
                  var t = Ic(a[q], b, c)
                  Dc && (p = p || t === Dc.Vd)
                  d.push(t)
                }
                return Dc && p ? Dc.qj(d) : d.join('')
              case 'escape':
                d = Ic(a[1], b, c)
                if (Dc && sa(a[1]) && 'macro' === a[1][0] && Dc.Pj(a))
                  return Dc.jk(d)
                d = String(d)
                for (var r = 2; r < a.length; r++) ac[a[r]] && (d = ac[a[r]](d))
                return d
              case 'tag':
                var u = a[1]
                if (!zc[u])
                  throw Error('Unable to resolve tag reference ' + u + '.')
                return (d = { wh: a[2], index: u })
              case 'zb':
                var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] }
                v['function'] = a[1]
                var w = Kc(v, b, c),
                  y = !!a[4]
                return y || 2 !== w ? y !== (1 === w) : null
              default:
                throw Error(
                  'Attempting to expand unknown Value type: ' + a[0] + '.'
                )
            }
          }
          return a
        },
        Kc = function (a, b, c) {
          try {
            return Cc(Jc(a, b, c))
          } catch (d) {
            JSON.stringify(a)
          }
          return 2
        }
      var Nc = function (a) {
          function b(t) {
            for (var r = 0; r < t.length; r++) d[t[r]] = !0
          }
          for (var c = [], d = [], e = Lc(a), f = 0; f < xc.length; f++) {
            var g = xc[f],
              l = Mc(g, e)
            if (l) {
              for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0
              b(g.block || [])
            } else null === l && b(g.block || [])
          }
          for (var p = [], q = 0; q < zc.length; q++)
            c[q] && !d[q] && (p[q] = !0)
          return p
        },
        Mc = function (a, b) {
          for (var c = a['if'] || [], d = 0; d < c.length; d++) {
            var e = b(c[d])
            if (0 === e) return !1
            if (2 === e) return null
          }
          for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var l = b(f[g])
            if (2 === l) return null
            if (1 === l) return !1
          }
          return !0
        },
        Lc = function (a) {
          var b = []
          return function (c) {
            void 0 === b[c] && (b[c] = Kc(yc[c], a))
            return b[c]
          }
        }
      var Oc = {
        oj: function (a, b) {
          b[$b.eg] &&
            'string' === typeof a &&
            (a = 1 == b[$b.eg] ? a.toLowerCase() : a.toUpperCase())
          b.hasOwnProperty($b.gg) && null === a && (a = b[$b.gg])
          b.hasOwnProperty($b.ig) && void 0 === a && (a = b[$b.ig])
          b.hasOwnProperty($b.hg) && !0 === a && (a = b[$b.hg])
          b.hasOwnProperty($b.fg) && !1 === a && (a = b[$b.fg])
          return a
        }
      }
      var gd = [
        'matches',
        'webkitMatchesSelector',
        'mozMatchesSelector',
        'msMatchesSelector',
        'oMatchesSelector'
      ]
      function hd(a, b) {
        a = String(a)
        b = String(b)
        var c = a.length - b.length
        return 0 <= c && a.indexOf(b, c) === c
      }
      var id = new va()
      function jd(a, b, c) {
        var d = c ? 'i' : void 0
        try {
          var e = String(b) + d,
            f = id.get(e)
          f || ((f = new RegExp(b, d)), id.set(e, f))
          return f.test(a)
        } catch (g) {
          return !1
        }
      }
      var sd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/
      function td(a, b) {
        return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
          (a << 2) | b
        ]
      }
      var vd = function (a) {
          return ud ? C.querySelectorAll(a) : null
        },
        wd = function (a, b) {
          if (!ud) return null
          if (Element.prototype.closest)
            try {
              return a.closest(b)
            } catch (e) {
              return null
            }
          var c =
              Element.prototype.matches ||
              Element.prototype.webkitMatchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector,
            d = a
          if (!C.documentElement.contains(d)) return null
          do {
            try {
              if (c.call(d, b)) return d
            } catch (e) {
              break
            }
            d = d.parentElement || d.parentNode
          } while (null !== d && 1 === d.nodeType)
          return null
        },
        xd = !1
      if (C.querySelectorAll)
        try {
          var yd = C.querySelectorAll(':root')
          yd && 1 == yd.length && yd[0] == C.documentElement && (xd = !0)
        } catch (a) {}
      var ud = xd
      var J = function (a) {
        Ya('GTM', a)
      }
      var N = {
          g: {
            H: 'ad_storage',
            R: 'analytics_storage',
            pd: 'region',
            we: 'consent_updated',
            Zf: 'wait_for_update',
            ci: 'app_remove',
            di: 'app_store_refund',
            ei: 'app_store_subscription_cancel',
            fi: 'app_store_subscription_convert',
            gi: 'app_store_subscription_renew',
            jg: 'add_payment_info',
            kg: 'add_shipping_info',
            mc: 'add_to_cart',
            nc: 'remove_from_cart',
            lg: 'view_cart',
            Ob: 'begin_checkout',
            oc: 'select_item',
            rb: 'view_item_list',
            Pb: 'select_promotion',
            sb: 'view_promotion',
            Ga: 'purchase',
            qc: 'refund',
            Ha: 'view_item',
            mg: 'add_to_wishlist',
            hi: 'first_open',
            ii: 'first_visit',
            ma: 'gtag.config',
            Aa: 'gtag.get',
            ji: 'in_app_purchase',
            sc: 'page_view',
            ki: 'session_start',
            Be: 'user_engagement',
            tb: 'gclid',
            fa: 'ads_data_redaction',
            W: 'allow_ad_personalization_signals',
            rd: 'allow_custom_scripts',
            li: 'allow_display_features',
            sd: 'allow_enhanced_conversions',
            kb: 'allow_google_signals',
            wa: 'allow_interest_groups',
            uc: 'auid',
            mi: 'auto_detection_enabled',
            ub: 'aw_remarketing',
            Ce: 'aw_remarketing_only',
            ud: 'discount',
            vd: 'aw_feed_country',
            wd: 'aw_feed_language',
            aa: 'items',
            xd: 'aw_merchant_id',
            ng: 'aw_basket_type',
            yd: 'campaign_content',
            zd: 'campaign_id',
            Ad: 'campaign_medium',
            Bd: 'campaign_name',
            vc: 'campaign',
            Cd: 'campaign_source',
            Dd: 'campaign_term',
            lb: 'client_id',
            ni: 'content_group',
            oi: 'content_type',
            Ba: 'conversion_cookie_prefix',
            wc: 'conversion_id',
            na: 'conversion_linker',
            Qb: 'conversion_api',
            Oa: 'cookie_domain',
            Ca: 'cookie_expires',
            Pa: 'cookie_flags',
            Rb: 'cookie_name',
            Ed: 'cookie_path',
            Ia: 'cookie_prefix',
            nb: 'cookie_update',
            vb: 'country',
            oa: 'currency',
            Fd: 'customer_lifetime_value',
            wb: 'custom_map',
            ri: 'gcldc',
            si: 'debug_mode',
            V: 'developer_id',
            ui: 'disable_merchant_reported_purchases',
            De: 'dc_custom_params',
            og: 'dc_natural_search',
            Ee: 'dynamic_event_settings',
            vi: 'affiliation',
            pg: 'checkout_option',
            qg: 'checkout_step',
            wi: 'coupon',
            Fe: 'item_list_name',
            Ge: 'list_name',
            xi: 'promotions',
            Gd: 'shipping',
            rg: 'tax',
            Hd: 'engagement_time_msec',
            xc: 'enhanced_client_id',
            yc: 'enhanced_conversions',
            sg: 'enhanced_conversions_automatic_settings',
            Id: 'estimated_delivery_date',
            He: 'euid_logged_in_state',
            Sb: 'event_callback',
            xb: 'event_developer_id_string',
            ug: 'event',
            Jd: 'event_settings',
            Kd: 'event_timeout',
            yi: 'experiments',
            Ie: 'firebase_id',
            Ld: 'first_party_collection',
            Md: '_x_20',
            yb: '_x_19',
            vg: 'fledge',
            wg: 'flight_error_code',
            xg: 'flight_error_message',
            zi: 'fl_activity_category',
            Ai: 'fl_activity_group',
            Bi: 'fl_advertiser_id',
            Ci: 'fl_ar_dedupe',
            Di: 'fl_random_number',
            Ei: 'tran',
            Fi: 'u',
            Je: 'gac_gclid',
            zc: 'gac_wbraid',
            yg: 'gac_wbraid_multiple_conversions',
            Ke: 'ga_restrict_domain',
            Le: 'ga_temp_client_id',
            Me: 'gdpr_applies',
            zg: 'geo_granularity',
            Ua: 'value_callback',
            Ja: 'value_key',
            Lk: 'google_ono',
            Va: 'google_signals',
            Nd: 'google_tld',
            Od: 'groups',
            Ag: 'gsa_experiment_id',
            Bg: 'iframe_state',
            Pd: 'ignore_referrer',
            Ne: 'internal_traffic_results',
            Qd: 'is_legacy_loaded',
            Oe: 'is_passthrough',
            Da: 'language',
            Pe: 'legacy_developer_id_string',
            qa: 'linker',
            Tb: 'accept_incoming',
            Ab: 'decorate_forms',
            O: 'domains',
            Ub: 'url_position',
            Cg: 'method',
            Ac: 'new_customer',
            Dg: 'non_interaction',
            Gi: 'optimize_id',
            Eg: 'page_hostname',
            Vb: 'page_path',
            Ea: 'page_referrer',
            Bb: 'page_title',
            Fg: 'passengers',
            Gg: 'phone_conversion_callback',
            Hi: 'phone_conversion_country_code',
            Hg: 'phone_conversion_css_class',
            Ii: 'phone_conversion_ids',
            Ig: 'phone_conversion_number',
            Jg: 'phone_conversion_options',
            Rd: 'quantity',
            Bc: 'redact_device_info',
            Qe: 'redact_enhanced_user_id',
            Ji: 'redact_ga_client_id',
            Ki: 'redact_user_id',
            Sd: 'referral_exclusion_definition',
            Cb: 'restricted_data_processing',
            Li: 'retoken',
            Kg: 'screen_name',
            Db: 'screen_resolution',
            Mi: 'search_term',
            Ka: 'send_page_view',
            Eb: 'send_to',
            Cc: 'session_duration',
            Td: 'session_engaged',
            Re: 'session_engaged_time',
            Wa: 'session_id',
            Ud: 'session_number',
            Dc: 'delivery_postal_code',
            Lg: 'temporary_client_id',
            Te: 'topmost_url',
            Ni: 'tracking_id',
            Ue: 'traffic_type',
            sa: 'transaction_id',
            va: 'transport_url',
            Mg: 'trip_type',
            Ec: 'update',
            Xa: 'url_passthrough',
            Ve: '_user_agent_architecture',
            We: '_user_agent_bitness',
            Xe: '_user_agent_full_version_list',
            Ye: '_user_agent_mobile',
            Ze: '_user_agent_model',
            af: '_user_agent_platform',
            bf: '_user_agent_platform_version',
            cf: '_user_agent_wow64',
            ia: 'user_data',
            Ng: 'user_data_auto_latency',
            Og: 'user_data_auto_meta',
            Pg: 'user_data_auto_multi',
            Qg: 'user_data_auto_selectors',
            Rg: 'user_data_auto_status',
            df: 'user_data_mode',
            ef: 'user_data_settings',
            xa: 'user_id',
            La: 'user_properties',
            Sg: 'us_privacy_string',
            ja: 'value',
            Fc: 'wbraid',
            Tg: 'wbraid_multiple_conversions',
            Zg: '_host_name',
            ah: '_in_page_command',
            bh: '_is_passthrough_cid',
            kf: 'non_personalized_ads',
            Mc: '_sst_parameters',
            Ta: 'conversion_label',
            ra: 'page_location',
            zb: 'global_developer_id_string',
            Se: 'tc_privacy_string'
          }
        },
        Wd = {},
        Xd = Object.freeze(
          ((Wd[N.g.W] = 1),
          (Wd[N.g.sd] = 1),
          (Wd[N.g.kb] = 1),
          (Wd[N.g.aa] = 1),
          (Wd[N.g.Oa] = 1),
          (Wd[N.g.Ca] = 1),
          (Wd[N.g.Pa] = 1),
          (Wd[N.g.Rb] = 1),
          (Wd[N.g.Ed] = 1),
          (Wd[N.g.Ia] = 1),
          (Wd[N.g.nb] = 1),
          (Wd[N.g.wb] = 1),
          (Wd[N.g.V] = 1),
          (Wd[N.g.Ee] = 1),
          (Wd[N.g.Sb] = 1),
          (Wd[N.g.Jd] = 1),
          (Wd[N.g.Kd] = 1),
          (Wd[N.g.Ld] = 1),
          (Wd[N.g.Ke] = 1),
          (Wd[N.g.Va] = 1),
          (Wd[N.g.Nd] = 1),
          (Wd[N.g.Od] = 1),
          (Wd[N.g.Ne] = 1),
          (Wd[N.g.Qd] = 1),
          (Wd[N.g.qa] = 1),
          (Wd[N.g.Qe] = 1),
          (Wd[N.g.Sd] = 1),
          (Wd[N.g.Cb] = 1),
          (Wd[N.g.Ka] = 1),
          (Wd[N.g.Eb] = 1),
          (Wd[N.g.Cc] = 1),
          (Wd[N.g.Re] = 1),
          (Wd[N.g.Dc] = 1),
          (Wd[N.g.va] = 1),
          (Wd[N.g.Ec] = 1),
          (Wd[N.g.ef] = 1),
          (Wd[N.g.La] = 1),
          (Wd[N.g.Mc] = 1),
          Wd)
        )
      Object.freeze([
        N.g.ra,
        N.g.Ea,
        N.g.Bb,
        N.g.Da,
        N.g.Kg,
        N.g.xa,
        N.g.Ie,
        N.g.ni
      ])
      var Yd = {},
        Zd = Object.freeze(
          ((Yd[N.g.ci] = 1),
          (Yd[N.g.di] = 1),
          (Yd[N.g.ei] = 1),
          (Yd[N.g.fi] = 1),
          (Yd[N.g.gi] = 1),
          (Yd[N.g.hi] = 1),
          (Yd[N.g.ii] = 1),
          (Yd[N.g.ji] = 1),
          (Yd[N.g.ki] = 1),
          (Yd[N.g.Be] = 1),
          Yd)
        ),
        $d = {},
        ae = Object.freeze(
          (($d[N.g.jg] = 1),
          ($d[N.g.kg] = 1),
          ($d[N.g.mc] = 1),
          ($d[N.g.nc] = 1),
          ($d[N.g.lg] = 1),
          ($d[N.g.Ob] = 1),
          ($d[N.g.oc] = 1),
          ($d[N.g.rb] = 1),
          ($d[N.g.Pb] = 1),
          ($d[N.g.sb] = 1),
          ($d[N.g.Ga] = 1),
          ($d[N.g.qc] = 1),
          ($d[N.g.Ha] = 1),
          ($d[N.g.mg] = 1),
          $d)
        ),
        ce = Object.freeze([N.g.W, N.g.kb, N.g.nb]),
        de = Object.freeze([].concat(ce)),
        ee = Object.freeze([N.g.Ca, N.g.Kd, N.g.Cc, N.g.Re, N.g.Hd]),
        fe = Object.freeze([].concat(ee)),
        ge = {},
        he = ((ge[N.g.H] = '1'), (ge[N.g.R] = '2'), ge),
        ie = {},
        je = Object.freeze(
          ((ie[N.g.W] = 1),
          (ie[N.g.sd] = 1),
          (ie[N.g.wa] = 1),
          (ie[N.g.ub] = 1),
          (ie[N.g.Ce] = 1),
          (ie[N.g.ud] = 1),
          (ie[N.g.vd] = 1),
          (ie[N.g.wd] = 1),
          (ie[N.g.aa] = 1),
          (ie[N.g.xd] = 1),
          (ie[N.g.Ba] = 1),
          (ie[N.g.na] = 1),
          (ie[N.g.Oa] = 1),
          (ie[N.g.Ca] = 1),
          (ie[N.g.Pa] = 1),
          (ie[N.g.Ia] = 1),
          (ie[N.g.oa] = 1),
          (ie[N.g.Fd] = 1),
          (ie[N.g.V] = 1),
          (ie[N.g.ui] = 1),
          (ie[N.g.yc] = 1),
          (ie[N.g.Id] = 1),
          (ie[N.g.Ie] = 1),
          (ie[N.g.Ld] = 1),
          (ie[N.g.Qd] = 1),
          (ie[N.g.Da] = 1),
          (ie[N.g.Ac] = 1),
          (ie[N.g.ra] = 1),
          (ie[N.g.Ea] = 1),
          (ie[N.g.Gg] = 1),
          (ie[N.g.Hg] = 1),
          (ie[N.g.Ig] = 1),
          (ie[N.g.Jg] = 1),
          (ie[N.g.Cb] = 1),
          (ie[N.g.Ka] = 1),
          (ie[N.g.Eb] = 1),
          (ie[N.g.Dc] = 1),
          (ie[N.g.sa] = 1),
          (ie[N.g.va] = 1),
          (ie[N.g.Ec] = 1),
          (ie[N.g.Xa] = 1),
          (ie[N.g.ia] = 1),
          (ie[N.g.xa] = 1),
          (ie[N.g.ja] = 1),
          ie)
        )
      Object.freeze(N.g)
      var ke = {},
        le = (z.google_tag_manager = z.google_tag_manager || {}),
        me = Math.random()
      ke.nf = '34a0'
      ke.Lc = Number('0') || 0
      ke.ca = 'dataLayer'
      ke.ai =
        'ChEI8K3ZoQYQrJSOsauotMicARImAMJmGmjjxvPJFSYaC5Ykscc+UA8J0Zn8QyUmVwJLO9B7HVTLR0QaAjTU'
      var ne = {
          __cl: !0,
          __ecl: !0,
          __ehl: !0,
          __evl: !0,
          __fal: !0,
          __fil: !0,
          __fsl: !0,
          __hl: !0,
          __jel: !0,
          __lcl: !0,
          __sdl: !0,
          __tl: !0,
          __ytl: !0
        },
        oe = { __paused: !0, __tg: !0 },
        pe
      for (pe in ne) ne.hasOwnProperty(pe) && (oe[pe] = !0)
      var qe = Ba(''),
        re,
        se = !1
      se = !0
      re = se
      var te,
        ue = !1
      te = ue
      var ve,
        we = !1
      ve = we
      var xe,
        ye = !1
      xe = ye
      ke.qd = 'www.googletagmanager.com'
      var ze = '' + ke.qd + (re ? '/gtag/js' : '/gtm.js'),
        Ae = null,
        Be = null,
        Ce = {},
        De = {},
        Ee = {},
        Fe = function () {
          var a = le.sequence || 1
          le.sequence = a + 1
          return a
        }
      ke.Zh = ''
      var Ge = ''
      ke.Zd = Ge
      var He = new va(),
        Ie = {},
        Je = {},
        Me = {
          name: ke.ca,
          set: function (a, b) {
            G(Ma(a, b), Ie)
            Ke()
          },
          get: function (a) {
            return Le(a, 2)
          },
          reset: function () {
            He = new va()
            Ie = {}
            Ke()
          }
        },
        Le = function (a, b) {
          return 2 != b ? He.get(a) : Ne(a)
        },
        Ne = function (a) {
          var b,
            c = a.split('.')
          b = b || []
          for (var d = Ie, e = 0; e < c.length; e++) {
            if (null === d) return !1
            if (void 0 === d) break
            d = d[c[e]]
            if (-1 !== b.indexOf(d)) return
          }
          return d
        },
        Oe = function (a, b) {
          Je.hasOwnProperty(a) || (He.set(a, b), G(Ma(a, b), Ie), Ke())
        },
        Ke = function (a) {
          k(Je, function (b, c) {
            He.set(b, c)
            G(Ma(b), Ie)
            G(Ma(b, c), Ie)
            a && delete Je[b]
          })
        },
        Pe = function (a, b) {
          var c,
            d = 1 !== (void 0 === b ? 2 : b) ? Ne(a) : He.get(a)
          'array' === Wb(d) || 'object' === Wb(d) ? (c = G(d)) : (c = d)
          return c
        }
      var Qe = new (function (a, b) {
        this.h = a
        this.defaultValue = void 0 === b ? !1 : b
      })(1933)
      var Re = function (a) {
        Re[' '](a)
        return a
      }
      Re[' '] = function () {}
      var Te = function () {
        var a = Se,
          b = 'Af'
        if (a.Af && a.hasOwnProperty(b)) return a.Af
        var c = new a()
        return (a.Af = c)
      }
      var Se = function () {
        var a = {}
        this.h = function () {
          var b = Qe.h,
            c = Qe.defaultValue
          return null != a[b] ? a[b] : c
        }
        this.m = function () {
          a[Qe.h] = !0
        }
      }
      var Ue = !1,
        Ve = !1,
        We = [],
        Xe = { ad_storage: !1, ad_user_data: !1, ad_data_sharing: !1 },
        Ye = !1
      function bf() {
        var a = Cb('google_tag_data', {})
        a.ics ||
          (a.ics = {
            entries: {},
            set: cf,
            update: df,
            declare: ef,
            addListener: ff,
            notifyListeners: gf,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
          })
        return a.ics
      }
      function ef(a, b, c, d, e) {
        var f = bf()
        f.active = !0
        f.usedDeclare = !0
        var g = f.entries,
          l = g[a] || {},
          m = l.declare_region,
          n = c && h(c) ? c.toUpperCase() : void 0
        d = d.toUpperCase()
        e = e.toUpperCase()
        if ('' === d || n === e || (n === d ? m !== e : !n && !m)) {
          var p = {
            region: l.region,
            declare_region: n,
            declare: 'granted' === b,
            initial: l.initial,
            update: l.update,
            quiet: l.quiet
          }
          if ('' !== d || !1 !== l.declare) g[a] = p
        }
      }
      function cf(a, b, c, d, e, f) {
        var g = bf()
        g.usedDefault ||
          (!g.accessedDefault && !g.accessedAny) ||
          (g.wasSetLate = !0)
        g.active = !0
        g.usedDefault = !0
        Ya('TAGGING', 19)
        if (void 0 == b) Ya('TAGGING', 18)
        else {
          var l = g.entries,
            m = l[a] || {},
            n = m.region,
            p = c && h(c) ? c.toUpperCase() : void 0
          d = d.toUpperCase()
          e = e.toUpperCase()
          if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
            var q = !!(f && 0 < f && void 0 === m.update),
              t = {
                region: p,
                declare_region: m.declare_region,
                initial: 'granted' === b,
                declare: m.declare,
                update: m.update,
                quiet: q
              }
            if ('' !== d || !1 !== m.initial) l[a] = t
            q &&
              z.setTimeout(function () {
                l[a] === t &&
                  t.quiet &&
                  ((t.quiet = !1), hf(a), gf(), Ya('TAGGING', 2))
              }, f)
          }
        }
      }
      function df(a, b) {
        var c = bf()
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0)
        c.active = !0
        c.usedUpdate = !0
        if (void 0 != b) {
          var d = jf(c, a),
            e = c.entries,
            f = (e[a] = e[a] || {})
          f.update = 'granted' === b
          var g = jf(c, a)
          f.quiet ? ((f.quiet = !1), hf(a)) : g !== d && hf(a)
        }
      }
      function ff(a, b) {
        We.push({ consentTypes: a, xj: b })
      }
      function hf(a) {
        for (var b = 0; b < We.length; ++b) {
          var c = We[b]
          sa(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Gh = !0)
        }
      }
      function gf(a, b) {
        for (var c = 0; c < We.length; ++c) {
          var d = We[c]
          if (d.Gh) {
            d.Gh = !1
            try {
              d.xj({ consentEventId: a, consentPriorityId: b })
            } catch (e) {}
          }
        }
      }
      function jf(a, b) {
        var c = a.entries[b] || {},
          d = c.update
        if (void 0 !== d) return d
        d = c.initial
        if (void 0 !== d) return d
        d = c.declare
        if (void 0 !== d) return d
        if (Ye && Xe.hasOwnProperty(b)) return Xe[b]
      }
      var kf = function (a) {
          var b = bf()
          b.accessedAny = !0
          return jf(b, a)
        },
        lf = function (a) {
          var b = bf()
          b.accessedDefault = !0
          return (b.entries[a] || {}).initial
        },
        mf = function (a) {
          return (bf().entries[a] || {}).declare
        },
        nf = function (a) {
          var b = bf()
          b.accessedAny = !0
          return !(b.entries[a] || {}).quiet
        },
        of = function () {
          if (!Te().h()) return !1
          var a = bf()
          a.accessedAny = !0
          return a.active
        },
        pf = function () {
          var a = bf()
          a.accessedDefault = !0
          return a.usedDefault
        },
        qf = function (a, b) {
          bf().addListener(a, b)
        },
        rf = function (a, b) {
          bf().notifyListeners(a, b)
        },
        sf = function (a, b) {
          function c() {
            for (var e = 0; e < b.length; e++) if (!nf(b[e])) return !0
            return !1
          }
          if (c()) {
            var d = !1
            qf(b, function (e) {
              d || c() || ((d = !0), a(e))
            })
          } else a({})
        },
        tf = function (a, b) {
          function c() {
            for (var f = [], g = 0; g < d.length; g++) {
              var l = d[g]
              !1 === kf(l) || e[l] || (f.push(l), (e[l] = !0))
            }
            return f
          }
          var d = h(b) ? [b] : b,
            e = {}
          c().length !== d.length &&
            qf(d, function (f) {
              var g = c()
              0 < g.length && ((f.consentTypes = g), a(f))
            })
        }
      var uf = /:[0-9]+$/,
        vf = /^\d+\.fls\.doubleclick\.net$/,
        wf = function (a, b, c) {
          for (var d = a.split('&'), e = 0; e < d.length; e++) {
            var f = d[e].split('=')
            if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
              var g = f.slice(1).join('=')
              return c ? g : decodeURIComponent(g).replace(/\+/g, ' ')
            }
          }
        },
        zf = function (a, b, c, d, e) {
          b && (b = String(b).toLowerCase())
          if ('protocol' === b || 'port' === b)
            a.protocol = xf(a.protocol) || xf(z.location.protocol)
          'port' === b
            ? (a.port = String(
                Number(a.hostname ? a.port : z.location.port) ||
                  ('http' === a.protocol
                    ? 80
                    : 'https' === a.protocol
                    ? 443
                    : '')
              ))
            : 'host' === b &&
              (a.hostname = (a.hostname || z.location.hostname)
                .replace(uf, '')
                .toLowerCase())
          return yf(a, b, c, d, e)
        },
        yf = function (a, b, c, d, e) {
          var f,
            g = xf(a.protocol)
          b && (b = String(b).toLowerCase())
          switch (b) {
            case 'url_no_fragment':
              f = Af(a)
              break
            case 'protocol':
              f = g
              break
            case 'host':
              f = a.hostname.replace(uf, '').toLowerCase()
              if (c) {
                var l = /^www\d*\./.exec(f)
                l && l[0] && (f = f.substr(l[0].length))
              }
              break
            case 'port':
              f = String(
                Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : '')
              )
              break
            case 'path':
              a.pathname || a.hostname || Ya('TAGGING', 1)
              f =
                '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname
              var m = f.split('/')
              0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = '')
              f = m.join('/')
              break
            case 'query':
              f = a.search.replace('?', '')
              e && (f = wf(f, e))
              break
            case 'extension':
              var n = a.pathname.split('.')
              f = 1 < n.length ? n[n.length - 1] : ''
              f = f.split('/')[0]
              break
            case 'fragment':
              f = a.hash.replace('#', '')
              break
            default:
              f = a && a.href
          }
          return f
        },
        xf = function (a) {
          return a ? a.replace(':', '').toLowerCase() : ''
        },
        Af = function (a) {
          var b = ''
          if (a && a.href) {
            var c = a.href.indexOf('#')
            b = 0 > c ? a.href : a.href.substr(0, c)
          }
          return b
        },
        Bf = function (a) {
          var b = C.createElement('a')
          a && (b.href = a)
          var c = b.pathname
          '/' !== c[0] && (a || Ya('TAGGING', 1), (c = '/' + c))
          var d = b.hostname.replace(uf, '')
          return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
          }
        },
        Cf = function (a) {
          function b(n) {
            var p = n.split('=')[0]
            return 0 > d.indexOf(p) ? n : p + '=0'
          }
          function c(n) {
            return n
              .split('&')
              .map(b)
              .filter(function (p) {
                return void 0 !== p
              })
              .join('&')
          }
          var d =
              'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(
                ' '
              ),
            e = Bf(a),
            f = a.split(/[?#]/)[0],
            g = e.search,
            l = e.hash
          '?' === g[0] && (g = g.substring(1))
          '#' === l[0] && (l = l.substring(1))
          g = c(g)
          l = c(l)
          '' !== g && (g = '?' + g)
          '' !== l && (l = '#' + l)
          var m = '' + f + g + l
          '/' === m[m.length - 1] && (m = m.substring(0, m.length - 1))
          return m
        },
        Df = function (a) {
          var b = Bf(z.location.href),
            c = zf(b, 'host', !1)
          if (c && c.match(vf)) {
            var d = zf(b, 'path').split(a + '=')
            if (1 < d.length) return d[1].split(';')[0].split('?')[0]
          }
        }
      var Ef = function (a) {
        var b = 1,
          c,
          d,
          e
        if (a)
          for (b = 0, d = a.length - 1; 0 <= d; d--)
            (e = a.charCodeAt(d)),
              (b = ((b << 6) & 268435455) + e + (e << 14)),
              (c = b & 266338304),
              (b = 0 !== c ? b ^ (c >> 21) : b)
        return b
      }
      var Ff = function (a, b, c) {
        for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
          var g = e[f].split('='),
            l = g[0].replace(/^\s*|\s*$/g, '')
          if (l && l == a) {
            var m = g
              .slice(1)
              .join('=')
              .replace(/^\s*|\s*$/g, '')
            m && c && (m = decodeURIComponent(m))
            d.push(m)
          }
        }
        return d
      }
      var Gf = function (a, b) {
          var c = function () {}
          c.prototype = a.prototype
          var d = new c()
          a.apply(d, Array.prototype.slice.call(arguments, 1))
          return d
        },
        Hf = function (a) {
          var b = a
          return function () {
            if (b) {
              var c = b
              b = null
              c()
            }
          }
        }
      function If(a) {
        return 'null' !== a.origin
      }
      var Lf = function (a, b, c, d) {
          return Jf(d) ? Ff(a, String(b || Kf()), c) : []
        },
        Of = function (a, b, c, d, e) {
          if (Jf(e)) {
            var f = Mf(a, d, e)
            if (1 === f.length) return f[0].id
            if (0 !== f.length) {
              f = Nf(
                f,
                function (g) {
                  return g.ee
                },
                b
              )
              if (1 === f.length) return f[0].id
              f = Nf(
                f,
                function (g) {
                  return g.bd
                },
                c
              )
              return f[0] ? f[0].id : void 0
            }
          }
        }
      function Pf(a, b, c, d) {
        var e = Kf(),
          f = window
        If(f) && (f.document.cookie = a)
        var g = Kf()
        return e != g || (void 0 != c && 0 <= Lf(b, g, !1, d).indexOf(c))
      }
      var Tf = function (a, b, c) {
          function d(r, u, v) {
            if (null == v) return delete g[u], r
            g[u] = v
            return r + '; ' + u + '=' + v
          }
          function e(r, u) {
            if (null == u) return delete g[u], r
            g[u] = !0
            return r + '; ' + u
          }
          if (!Jf(c.cb)) return 2
          var f
          void 0 == b
            ? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
            : (c.encode && (b = encodeURIComponent(b)),
              (b = Qf(b)),
              (f = a + '=' + b))
          var g = {}
          f = d(f, 'path', c.path)
          var l
          c.expires instanceof Date
            ? (l = c.expires.toUTCString())
            : null != c.expires && (l = '' + c.expires)
          f = d(f, 'expires', l)
          f = d(f, 'max-age', c.Yk)
          f = d(f, 'samesite', c.Zk)
          c.al && (f = e(f, 'secure'))
          var m = c.domain
          if (m && 'auto' === m.toLowerCase()) {
            for (var n = Rf(), p = 0; p < n.length; ++p) {
              var q = 'none' !== n[p] ? n[p] : void 0,
                t = d(f, 'domain', q)
              t = e(t, c.flags)
              if (!Sf(q, c.path) && Pf(t, a, b, c.cb)) return 0
            }
            return 1
          }
          m && 'none' !== m.toLowerCase() && (f = d(f, 'domain', m))
          f = e(f, c.flags)
          return Sf(m, c.path) ? 1 : Pf(f, a, b, c.cb) ? 0 : 1
        },
        Uf = function (a, b, c) {
          null == c.path && (c.path = '/')
          c.domain || (c.domain = 'auto')
          return Tf(a, b, c)
        }
      function Nf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
          var l = a[g],
            m = b(l)
          m === c
            ? d.push(l)
            : void 0 === f || m < f
            ? ((e = [l]), (f = m))
            : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
      }
      function Mf(a, b, c) {
        for (
          var d = [], e = Lf(a, void 0, void 0, c), f = 0;
          f < e.length;
          f++
        ) {
          var g = e[f].split('.'),
            l = g.shift()
          if (!b || -1 !== b.indexOf(l)) {
            var m = g.shift()
            m &&
              ((m = m.split('-')),
              d.push({ id: g.join('.'), ee: 1 * m[0] || 1, bd: 1 * m[1] || 1 }))
          }
        }
        return d
      }
      var Qf = function (a) {
          a && 1200 < a.length && (a = a.substring(0, 1200))
          return a
        },
        Vf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Wf = /(^|\.)doubleclick\.net$/i,
        Sf = function (a, b) {
          return (
            Wf.test(window.document.location.hostname) ||
            ('/' === b && Vf.test(a))
          )
        },
        Kf = function () {
          return If(window) ? window.document.cookie : ''
        },
        Rf = function () {
          var a = [],
            b = window.document.location.hostname.split('.')
          if (4 === b.length) {
            var c = b[b.length - 1]
            if (parseInt(c, 10).toString() === c) return ['none']
          }
          for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'))
          var e = window.document.location.hostname
          Wf.test(e) || Vf.test(e) || a.push('none')
          return a
        },
        Jf = function (a) {
          if (!Te().h() || !a || !of()) return !0
          if (!nf(a)) return !1
          var b = kf(a)
          return null == b ? !0 : !!b
        }
      var Xf = function (a) {
          var b = Math.round(2147483647 * Math.random())
          return a ? String(b ^ (Ef(a) & 2147483647)) : String(b)
        },
        Yf = function (a) {
          return [Xf(a), Math.round(Fa() / 1e3)].join('.')
        },
        ag = function (a, b, c, d, e) {
          var f = Zf(b)
          return Of(a, f, $f(c), d, e)
        },
        bg = function (a, b, c, d) {
          var e = '' + Zf(c),
            f = $f(d)
          1 < f && (e += '-' + f)
          return [b, e, a].join('.')
        },
        Zf = function (a) {
          if (!a) return 1
          a = 0 === a.indexOf('.') ? a.substr(1) : a
          return a.split('.').length
        },
        $f = function (a) {
          if (!a || '/' === a) return 1
          '/' !== a[0] && (a = '/' + a)
          '/' !== a[a.length - 1] && (a += '/')
          return a.split('/').length - 1
        }
      function cg(a, b, c, d) {
        var e,
          f = Number(null != a.Za ? a.Za : void 0)
        0 !== f && (e = new Date((b || Fa()) + 1e3 * (f || 7776e3)))
        return {
          path: a.path,
          domain: a.domain,
          flags: a.flags,
          encode: !!c,
          expires: e,
          cb: d
        }
      }
      var dg
      var hg = function () {
          var a = eg,
            b = fg,
            c = gg(),
            d = function (g) {
              a(g.target || g.srcElement || {})
            },
            e = function (g) {
              b(g.target || g.srcElement || {})
            }
          if (!c.init) {
            Lb(C, 'mousedown', d)
            Lb(C, 'keyup', d)
            Lb(C, 'submit', e)
            var f = HTMLFormElement.prototype.submit
            HTMLFormElement.prototype.submit = function () {
              b(this)
              f.call(this)
            }
            c.init = !0
          }
        },
        ig = function (a, b, c, d, e) {
          var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
          }
          gg().decorators.push(f)
        },
        jg = function (a, b, c) {
          for (var d = gg().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
              l
            if ((l = !c || g.forms))
              a: {
                var m = g.domains,
                  n = a,
                  p = !!g.sameHost
                if (m && (p || n !== C.location.hostname))
                  for (var q = 0; q < m.length; q++)
                    if (m[q] instanceof RegExp) {
                      if (m[q].test(n)) {
                        l = !0
                        break a
                      }
                    } else if (
                      0 <= n.indexOf(m[q]) ||
                      (p && 0 <= m[q].indexOf(n))
                    ) {
                      l = !0
                      break a
                    }
                l = !1
              }
            if (l) {
              var t = g.placement
              void 0 == t && (t = g.fragment ? 2 : 1)
              t === b && Ia(e, g.callback())
            }
          }
          return e
        }
      function gg() {
        var a = Cb('google_tag_data', {}),
          b = a.gl
        ;(b && b.decorators) || ((b = { decorators: [] }), (a.gl = b))
        return b
      }
      var kg = /(.*?)\*(.*?)\*(.*)/,
        lg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        mg = /^(?:www\.|m\.|amp\.)+/,
        ng = /([^?#]+)(\?[^#]*)?(#.*)?/
      function og(a) {
        return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)')
      }
      var qg = function (a) {
        var b = [],
          c
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = a[c]
            void 0 !== d &&
              d === d &&
              null !== d &&
              '[object Object]' !== d.toString() &&
              (b.push(c), b.push(Va(String(d))))
          }
        var e = b.join('*')
        return ['1', pg(e), e].join('*')
      }
      function pg(a, b) {
        var c = [
            Ab.userAgent,
            new Date().getTimezoneOffset(),
            Ab.userLanguage || Ab.language,
            Math.floor(Fa() / 60 / 1e3) - (void 0 === b ? 0 : b),
            a
          ].join('*'),
          d
        if (!(d = dg)) {
          for (var e = Array(256), f = 0; 256 > f; f++) {
            for (var g = f, l = 0; 8 > l; l++)
              g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1
            e[f] = g
          }
          d = e
        }
        dg = d
        for (var m = 4294967295, n = 0; n < c.length; n++)
          m = (m >>> 8) ^ dg[(m ^ c.charCodeAt(n)) & 255]
        return ((m ^ -1) >>> 0).toString(36)
      }
      function rg() {
        return function (a) {
          var b = Bf(z.location.href),
            c = b.search.replace('?', ''),
            d = wf(c, '_gl', !0) || ''
          a.query = sg(d) || {}
          var e = zf(b, 'fragment').match(og('_gl'))
          a.fragment = sg((e && e[3]) || '') || {}
        }
      }
      function tg(a, b) {
        var c = og(a).exec(b),
          d = b
        if (c) {
          var e = c[2],
            f = c[4]
          d = c[1]
          f && (d = d + e + f)
        }
        return d
      }
      var ug = function (a, b) {
          b || (b = '_gl')
          var c = ng.exec(a)
          if (!c) return ''
          var d = c[1],
            e = tg(b, (c[2] || '').slice(1)),
            f = tg(b, (c[3] || '').slice(1))
          e.length && (e = '?' + e)
          f.length && (f = '#' + f)
          return '' + d + e + f
        },
        vg = function (a) {
          var b = rg(),
            c = gg()
          c.data || ((c.data = { query: {}, fragment: {} }), b(c.data))
          var d = {},
            e = c.data
          e && (Ia(d, e.query), a && Ia(d, e.fragment))
          return d
        },
        sg = function (a) {
          try {
            var b = wg(a, 3)
            if (void 0 !== b) {
              for (
                var c = {}, d = b ? b.split('*') : [], e = 0;
                e + 1 < d.length;
                e += 2
              ) {
                var f = d[e],
                  g = Wa(d[e + 1])
                c[f] = g
              }
              Ya('TAGGING', 6)
              return c
            }
          } catch (l) {
            Ya('TAGGING', 8)
          }
        }
      function wg(a, b) {
        if (a) {
          var c
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = kg.exec(d)
              if (f) {
                c = f
                break a
              }
              d = decodeURIComponent(d)
            }
            c = void 0
          }
          var g = c
          if (g && '1' === g[1]) {
            var l = g[3],
              m
            a: {
              for (var n = g[2], p = 0; p < b; ++p)
                if (n === pg(l, p)) {
                  m = !0
                  break a
                }
              m = !1
            }
            if (m) return l
            Ya('TAGGING', 7)
          }
        }
      }
      function xg(a, b, c, d) {
        function e(p) {
          p = tg(a, p)
          var q = p.charAt(p.length - 1)
          p && '&' !== q && (p += '&')
          return p + n
        }
        d = void 0 === d ? !1 : d
        var f = ng.exec(c)
        if (!f) return ''
        var g = f[1],
          l = f[2] || '',
          m = f[3] || '',
          n = a + '=' + b
        d ? (m = '#' + e(m.substring(1))) : (l = '?' + e(l.substring(1)))
        return '' + g + l + m
      }
      function yg(a, b) {
        var c = 'FORM' === (a.tagName || '').toUpperCase(),
          d = jg(b, 1, c),
          e = jg(b, 2, c),
          f = jg(b, 3, c)
        if (Ja(d)) {
          var g = qg(d)
          c ? zg('_gl', g, a) : Ag('_gl', g, a, !1)
        }
        if (!c && Ja(e)) {
          var l = qg(e)
          Ag('_gl', l, a, !0)
        }
        for (var m in f)
          if (f.hasOwnProperty(m))
            a: {
              var n = m,
                p = f[m],
                q = a
              if (q.tagName) {
                if ('a' === q.tagName.toLowerCase()) {
                  Ag(n, p, q)
                  break a
                }
                if ('form' === q.tagName.toLowerCase()) {
                  zg(n, p, q)
                  break a
                }
              }
              'string' == typeof q && xg(n, p, q)
            }
      }
      function Ag(a, b, c, d) {
        if (c.href) {
          var e = xg(a, b, c.href, void 0 === d ? !1 : d)
          fb.test(e) && (c.href = e)
        }
      }
      function zg(a, b, c) {
        if (c && c.action) {
          var d = (c.method || '').toLowerCase()
          if ('get' === d) {
            for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
              var l = e[g]
              if (l.name === a) {
                l.setAttribute('value', b)
                f = !0
                break
              }
            }
            if (!f) {
              var m = C.createElement('input')
              m.setAttribute('type', 'hidden')
              m.setAttribute('name', a)
              m.setAttribute('value', b)
              c.appendChild(m)
            }
          } else if ('post' === d) {
            var n = xg(a, b, c.action)
            fb.test(n) && (c.action = n)
          }
        }
      }
      function eg(a) {
        try {
          var b
          a: {
            for (var c = a, d = 100; c && 0 < d; ) {
              if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                b = c
                break a
              }
              c = c.parentNode
              d--
            }
            b = null
          }
          var e = b
          if (e) {
            var f = e.protocol
            ;('http:' !== f && 'https:' !== f) || yg(e, e.hostname)
          }
        } catch (g) {}
      }
      function fg(a) {
        try {
          if (a.action) {
            var b = zf(Bf(a.action), 'host')
            yg(a, b)
          }
        } catch (c) {}
      }
      var Bg = function (a, b, c, d) {
          hg()
          ig(a, b, 'fragment' === c ? 2 : 1, !!d, !1)
        },
        Cg = function (a, b) {
          hg()
          ig(a, [yf(z.location, 'host', !0)], b, !0, !0)
        },
        Dg = function () {
          var a = C.location.hostname,
            b = lg.exec(C.referrer)
          if (!b) return !1
          var c = b[2],
            d = b[1],
            e = ''
          if (c) {
            var f = c.split('/'),
              g = f[1]
            e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
          } else if (d) {
            if (0 === d.indexOf('xn--')) return !1
            e = d.replace(/-/g, '.').replace(/\.\./g, '-')
          }
          var l = a.replace(mg, ''),
            m = e.replace(mg, ''),
            n
          if (!(n = l === m)) {
            var p = '.' + m
            n = l.substring(l.length - p.length, l.length) === p
          }
          return n
        },
        Eg = function (a, b) {
          return !1 === a ? !1 : a || b || Dg()
        }
      var Fg = {},
        Pg = function (a) {
          return void 0 == Fg[a] ? !1 : Fg[a]
        }
      var Qg = ['1'],
        Rg = {},
        Sg = {},
        Ug = function (a) {
          return Rg[Tg(a)]
        },
        Yg = function (a, b) {
          b = void 0 === b ? !0 : b
          var c = Tg(a.prefix)
          if (!Rg[c])
            if (Vg(c, a.path, a.domain)) {
              if (Pg('enable_auid_cross_domain')) {
                var d = Sg[Tg(a.prefix)]
                Wg(a, d ? d.id : void 0, d ? d.Ff : void 0)
              }
            } else {
              if (Pg('enable_auid_fl_iframe')) {
                var e = Df('auiddc')
                if (e) {
                  Ya('TAGGING', 17)
                  Rg[c] = e
                  return
                }
              }
              if (b) {
                var f = Tg(a.prefix),
                  g = Yf()
                if (0 === Xg(f, g, a)) {
                  var l = Cb('google_tag_data', {})
                  l._gcl_au || (l._gcl_au = g)
                }
                Vg(c, a.path, a.domain)
              }
            }
        }
      function Wg(a, b, c) {
        var d = Tg(a.prefix),
          e = Rg[d]
        if (e) {
          var f = e.split('.')
          if (2 === f.length) {
            var g = Number(f[1]) || 0
            if (g) {
              var l = e
              b && (l = e + '.' + b + '.' + (c ? c : Math.floor(Fa() / 1e3)))
              Xg(d, l, a, 1e3 * g)
            }
          }
        }
      }
      function Xg(a, b, c, d) {
        var e = bg(b, '1', c.domain, c.path),
          f = cg(c, d)
        f.cb = 'ad_storage'
        return Uf(a, e, f)
      }
      function Vg(a, b, c) {
        var d = ag(a, b, c, Qg, 'ad_storage')
        if (!d) return !1
        Zg(a, d)
        return !0
      }
      function Zg(a, b) {
        var c = b.split('.')
        5 === c.length
          ? ((Rg[a] = c.slice(0, 2).join('.')),
            (Sg[a] = { id: c.slice(2, 4).join('.'), Ff: Number(c[4]) || 0 }))
          : 3 === c.length
          ? (Sg[a] = { id: c.slice(0, 2).join('.'), Ff: Number(c[2]) || 0 })
          : (Rg[a] = b)
      }
      function Tg(a) {
        return (a || '_gcl') + '_au'
      }
      function $g(a) {
        of() || a()
        sf(
          function () {
            kf('ad_storage') && a()
            tf(a, 'ad_storage')
          },
          ['ad_storage']
        )
      }
      function ah(a) {
        var b = vg(!0),
          c = Tg(a.prefix)
        $g(function () {
          var d = b[c]
          if (d) {
            Zg(c, d)
            var e = 1e3 * Number(Rg[c].split('.')[1])
            if (e) {
              Ya('TAGGING', 16)
              var f = cg(a, e)
              f.cb = 'ad_storage'
              var g = bg(d, '1', a.domain, a.path)
              Uf(c, g, f)
            }
          }
        })
      }
      function bh(a, b, c, d) {
        d = d || {}
        var e = function () {
          var f = Tg(d.prefix),
            g = {},
            l = ag(f, d.path, d.domain, Qg, 'ad_storage')
          if (!l) return g
          g[f] = l
          return g
        }
        $g(function () {
          Bg(e, a, b, c)
        })
      }
      var O = []
      O[7] = !0
      O[9] = !0
      O[27] = !0
      O[11] = !0
      O[13] = !0
      O[15] = !0
      O[16] = !0
      O[25] = !0
      O[36] = !0
      O[38] = !0
      O[39] = !0
      O[40] = !0
      O[41] = !0
      O[43] = !0
      O[52] = !0
      O[57] = !0
      O[58] = !0
      O[59] = !0
      O[61] = !0
      O[68] = !0
      O[69] = !0
      O[72] = !0
      O[75] = !0
      O[76] = !0
      O[77] = !0
      O[79] = !0
      O[80] = !0
      O[83] = !0
      O[88] = !0
      O[89] = !0
      O[91] = !0
      O[92] = !0
      O[93] = !0
      O[94] = !0
      O[95] = !0
      O[96] = !0
      O[97] = !0
      O[98] = !0

      var P = function (a) {
        return !!O[a]
      }
      var dh = ch()
      function ch() {
        if (!P(87)) return {}
        try {
          return JSON.parse(
            Wa(
              'eyIwIjoiSlAiLCIxIjoiSlAtMTMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5qcCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9'
            )
          )
        } catch (a) {
          return J(123), Ya('HEALTH', 2), {}
        }
      }
      var eh = { pj: 'JP', Jh: 'JP-13', Lj: 'true', yj: '' },
        fh = function () {
          return P(87) ? dh['0'] || '' : eh.pj
        },
        gh = function () {
          var a = ''
          return a
        },
        hh = function () {
          var a = !1
          return a
        }
      var ih,
        jh = !1,
        kh = function (a) {
          if (!jh) {
            jh = !0
            ih = ih || {}
          }
          return ih[a]
        }
      var lh = function () {
          var a = z.screen
          return { width: a ? a.width : 0, height: a ? a.height : 0 }
        },
        mh = function (a) {
          if (C.hidden) return !0
          var b = a.getBoundingClientRect()
          if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
            return !0
          var c = z.getComputedStyle(a, null)
          if ('hidden' === c.visibility) return !0
          for (var d = a, e = c; d; ) {
            if ('none' === e.display) return !0
            var f = e.opacity,
              g = e.filter
            if (g) {
              var l = g.indexOf('opacity(')
              0 <= l &&
                ((g = g.substring(l + 8, g.indexOf(')', l))),
                '%' == g.charAt(g.length - 1) &&
                  (g = g.substring(0, g.length - 1)),
                (f = Math.min(g, f)))
            }
            if (void 0 !== f && 0 >= f) return !0
            ;(d = d.parentElement) && (e = z.getComputedStyle(d, null))
          }
          return !1
        }
      function Sh() {}
      function Th() {}
      function Uh(a) {
        for (var b = [], c = 0; c < Vh.length; c++) {
          var d = a(Vh[c])
          b[c] = !0 === d ? '1' : !1 === d ? '0' : '-'
        }
        return b.join('')
      }
      var Vh = [N.g.H, N.g.R],
        Wh = function (a) {
          for (
            var b = a[N.g.pd], c = Array.isArray(b) ? b : [b], d = { hc: 0 };
            d.hc < c.length;
            d = { hc: d.hc }, ++d.hc
          )
            k(
              a,
              (function (e) {
                return function (f, g) {
                  if (f !== N.g.pd) {
                    var l = c[e.hc],
                      m = fh(),
                      n = P(87) ? dh['1'] || '' : eh.Jh
                    Ve = !0
                    Ue && Ya('TAGGING', 20)
                    bf().declare(f, g, l, m, n)
                  }
                }
              })(d)
            )
        },
        Xh = function (a) {
          var b = a[N.g.pd]
          b && J(40)
          var c = a[N.g.Zf]
          c && J(41)
          for (
            var d = sa(b) ? b : [b], e = { ic: 0 };
            e.ic < d.length;
            e = { ic: e.ic }, ++e.ic
          )
            k(
              a,
              (function (f) {
                return function (g, l) {
                  if (g !== N.g.pd && g !== N.g.Zf) {
                    var m = d[f.ic],
                      n = Number(c),
                      p = fh(),
                      q = P(87) ? dh['1'] || '' : eh.Jh
                    Ue = !0
                    Ve && Ya('TAGGING', 20)
                    bf().set(g, l, m, p, q, n)
                  }
                }
              })(e)
            )
        },
        Yh = function (a, b) {
          k(a, function (c, d) {
            Ue = !0
            Ve && Ya('TAGGING', 20)
            bf().update(c, d)
          })
          rf(b.eventId, b.priorityId)
        },
        Zh = function (a) {
          var b = kf(a)
          return void 0 != b ? b : !0
        },
        $h = function () {
          return 'G1' + Uh(kf)
        },
        ai = function (a, b) {
          tf(a, b)
        },
        bi = function (a, b) {
          sf(a, b)
        }
      var ci = function () {
        le.dedupe_gclid || (le.dedupe_gclid = '' + Yf())
        return le.dedupe_gclid
      }
      var di = function () {
        var a = !1
        return a
      }
      var ei = function () {
          this.container = {}
          this.destination = {}
          this.canonical = {}
        },
        fi = function () {
          var a = Cb('google_tag_manager', {}),
            b = Cb('google_tag_data', {}),
            c = a.tidr
          c || (c = b.tidr)
          c || ((c = new ei()), (a.tidr = c), (b.tidr = c))
          return c
        }
      var R = { C: 'UA-25150502-1', jb: '' },
        gi = { Eh: 'UA-25150502-1', Fh: 'UA-25150502-1' }
      R.Ic = Ba('')
      var hi = function () {
          return gi.Eh ? gi.Eh.split('|') : [R.C]
        },
        ii = function () {
          return gi.Fh ? gi.Fh.split('|') : []
        },
        ji = function () {
          for (var a = fi(), b = hi(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]]
            d
              ? ((d.state = 2), (d.containers = hi()), (d.destinations = ii()))
              : (a.container[b[c]] = {
                  state: 2,
                  containers: hi(),
                  destinations: ii()
                })
          }
          for (var e = ii(), f = 0; f < e.length; f++) {
            var g = a.destination[e[f]]
            g && 0 === g.state && J(93)
            g
              ? ((g.state = 2), (g.containers = hi()), (g.destinations = ii()))
              : (a.destination[e[f]] = {
                  state: 2,
                  containers: hi(),
                  destinations: ii()
                })
          }
          a.canonical[R.jb] = 2
        },
        ki = function (a) {
          return !!fi().container[a]
        }
      function li() {
        return { ctid: R.C, isDestination: R.Ic }
      }
      var mi = function () {
          var a = fi().container,
            b
          for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0
          return !1
        },
        ni = function () {
          var a = {}
          k(fi().destination, function (b, c) {
            0 === c.state && (a[b] = c)
          })
          return a
        }
      var oi = {
          UA: 1,
          AW: 2,
          DC: 3,
          G: 4,
          GF: 5,
          GT: 12,
          GTM: 14,
          HA: 6,
          MC: 7
        },
        pi = function (a) {
          var b = R.C.split('-')[0].toUpperCase(),
            c = {}
          c.ctid = R.C
          c.tk = ke.Lc
          c.wk = ke.nf
          c.Zj = R.Ic ? 2 : 1
          re ? ((c.qe = oi[b]), c.qe || (c.qe = 0)) : (c.qe = xe ? 13 : 10)
          ve ? (c.If = 1) : di() ? (c.If = 2) : (c.If = 3)
          var d
          var e = c.qe,
            f = c.If
          void 0 === e
            ? (d = '')
            : (f || (f = 0),
              (d =
                '' +
                td(1, 1) +
                '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
                  (e << 2) | f
                ]))
          var g = c.Sk,
            l =
              4 +
              d +
              (g
                ? '' +
                  td(2, 1) +
                  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
                    g
                  ]
                : ''),
            m,
            n = c.wk
          m = n && sd.test(n) ? '' + td(3, 2) + n : ''
          var p,
            q = c.tk
          p = q
            ? '' +
              td(4, 1) +
              '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
                q
              ]
            : ''
          var t
          var r = c.ctid
          if (r && a) {
            var u = r.split('-'),
              v = u[0].toUpperCase()
            if ('GTM' !== v && 'OPT' !== v) t = ''
            else {
              var w = u[1]
              t =
                '' +
                td(5, 3) +
                '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
                  1 + w.length
                ] +
                (c.Zj || 0) +
                w
            }
          } else t = ''
          return l + m + p + t
        }
      function qi(a, b) {
        if ('' === a) return b
        var c = Number(a)
        return isNaN(c) ? b : c
      }
      var ri = function (a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
      }
      function si() {
        return gb ? !!nb && !!nb.platform : !1
      }
      function ti() {
        return qb('iPhone') && !qb('iPod') && !qb('iPad')
      }
      function ui() {
        ti() || qb('iPad') || qb('iPod')
      }
      sb()
      rb() || qb('Trident') || qb('MSIE')
      qb('Edge')
      !qb('Gecko') ||
        (-1 != mb().toLowerCase().indexOf('webkit') && !qb('Edge')) ||
        qb('Trident') ||
        qb('MSIE') ||
        qb('Edge')
      ;-1 != mb().toLowerCase().indexOf('webkit') && !qb('Edge') && qb('Mobile')
      si() || qb('Macintosh')
      si() || qb('Windows')
      ;(si() ? 'Linux' === nb.platform : qb('Linux')) || si() || qb('CrOS')
      var vi = na.navigator || null
      vi && (vi.appVersion || '').indexOf('X11')
      si() || qb('Android')
      ti()
      qb('iPad')
      qb('iPod')
      ui()
      mb().toLowerCase().indexOf('kaios')
      var wi = function (a, b, c, d) {
          for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1)
            if (38 == g || 63 == g) {
              var l = a.charCodeAt(e + f)
              if (!l || 61 == l || 38 == l || 35 == l) return e
            }
            e += f + 1
          }
          return -1
        },
        xi = /#|$/,
        yi = function (a, b) {
          var c = a.search(xi),
            d = wi(a, 0, b, c)
          if (0 > d) return null
          var e = a.indexOf('&', d)
          if (0 > e || e > c) e = c
          d += b.length + 1
          return decodeURIComponent(
            a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' ')
          )
        },
        zi = /[?&]($|#)/,
        Ai = function (a, b, c) {
          for (
            var d, e = a.search(xi), f = 0, g, l = [];
            0 <= (g = wi(a, f, b, e));

          )
            l.push(a.substring(f, g)),
              (f = Math.min(a.indexOf('&', g) + 1 || e, e))
          l.push(a.slice(f))
          d = l.join('').replace(zi, '$1')
          var m,
            n = null != c ? '=' + encodeURIComponent(String(c)) : ''
          var p = b + n
          if (p) {
            var q,
              t = d.indexOf('#')
            0 > t && (t = d.length)
            var r = d.indexOf('?'),
              u
            0 > r || r > t ? ((r = t), (u = '')) : (u = d.substring(r + 1, t))
            q = [d.slice(0, r), u, d.slice(t)]
            var v = q[1]
            q[1] = p ? (v ? v + '&' + p : p) : v
            m = q[0] + (q[1] ? '?' + q[1] : '') + q[2]
          } else m = d
          return m
        }
      var Bi = function (a) {
          try {
            var b
            if ((b = !!a && null != a.location.href))
              a: {
                try {
                  Re(a.foo)
                  b = !0
                  break a
                } catch (c) {}
                b = !1
              }
            return b
          } catch (c) {
            return !1
          }
        },
        Ci = function (a, b) {
          if (a)
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        }
      function Di() {
        if (!C.head) return null
        var a = Ei('META')
        C.head.appendChild(a)
        a.httpEquiv = 'origin-trial'
        a.content =
          'A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'
        return a
      }
      var Fi = function () {
          if (z.top == z) return 0
          var a = z.location.ancestorOrigins
          return a
            ? a[a.length - 1] == z.location.origin
              ? 1
              : 2
            : Bi(z.top)
            ? 1
            : 2
        },
        Ei = function (a, b) {
          b = void 0 === b ? document : b
          return b.createElement(String(a).toLowerCase())
        }
      function Gi(a, b, c, d) {
        d = void 0 === d ? !1 : d
        a.google_image_requests || (a.google_image_requests = [])
        var e = Ei('IMG', a.document)
        if (c) {
          var f = function () {
            if (c) {
              var g = a.google_image_requests,
                l = ab(g, e)
              0 <= l && Array.prototype.splice.call(g, l, 1)
            }
            e.removeEventListener && e.removeEventListener('load', f, !1)
            e.removeEventListener && e.removeEventListener('error', f, !1)
          }
          ri(e, 'load', f)
          ri(e, 'error', f)
        }
        d && (e.attributionSrc = '')
        e.src = b
        a.google_image_requests.push(e)
      }
      var Ii = function (a) {
          var b
          b = void 0 === b ? !1 : b
          var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe'
          Ci(a, function (d, e) {
            if (d || 0 === d) c += '&' + e + '=' + encodeURIComponent('' + d)
          })
          Hi(c, b)
        },
        Hi = function (a, b) {
          var c = window,
            d
          b = void 0 === b ? !1 : b
          d = void 0 === d ? !1 : d
          if (c.fetch) {
            var e = {
              keepalive: !0,
              credentials: 'include',
              redirect: 'follow',
              method: 'get',
              mode: 'no-cors'
            }
            d &&
              ((e.mode = 'cors'),
              (e.headers = {
                'Attribution-Reporting-Eligible': 'event-source'
              }))
            c.fetch(a, e)
          } else Gi(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        }
      var Ji = function () {}
      var Ki = function (a) {
          void 0 !== a.addtlConsent &&
            'string' !== typeof a.addtlConsent &&
            (a.addtlConsent = void 0)
          void 0 !== a.gdprApplies &&
            'boolean' !== typeof a.gdprApplies &&
            (a.gdprApplies = void 0)
          return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
            (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
            ? 2
            : a.cmpStatus && 'error' !== a.cmpStatus
            ? 0
            : 3
        },
        Li = function (a, b) {
          b = void 0 === b ? {} : b
          this.m = a
          this.h = null
          this.M = {}
          this.qb = 0
          var c
          this.X = null != (c = b.Fk) ? c : 500
          var d
          this.J = null != (d = b.Tk) ? d : !1
          this.B = null
        }
      ma(Li, Ji)
      Li.prototype.addEventListener = function (a) {
        var b = this,
          c = { internalBlockOnErrors: this.J },
          d = Hf(function () {
            return a(c)
          }),
          e = 0
        ;-1 !== this.X &&
          (e = setTimeout(function () {
            c.tcString = 'tcunavailable'
            c.internalErrorState = 1
            d()
          }, this.X))
        var f = function (g, l) {
          clearTimeout(e)
          g
            ? ((c = g),
              (c.internalErrorState = Ki(c)),
              (c.internalBlockOnErrors = b.J),
              (l && 0 === c.internalErrorState) ||
                ((c.tcString = 'tcunavailable'),
                l || (c.internalErrorState = 3)))
            : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3))
          a(c)
        }
        try {
          Mi(this, 'addEventListener', f)
        } catch (g) {
          ;(c.tcString = 'tcunavailable'),
            (c.internalErrorState = 3),
            e && (clearTimeout(e), (e = 0)),
            d()
        }
      }
      Li.prototype.removeEventListener = function (a) {
        a && a.listenerId && Mi(this, 'removeEventListener', null, a.listenerId)
      }
      var Oi = function (a, b, c) {
          var d
          d = void 0 === d ? '755' : d
          var e
          a: {
            if (a.publisher && a.publisher.restrictions) {
              var f = a.publisher.restrictions[b]
              if (void 0 !== f) {
                e = f[void 0 === d ? '755' : d]
                break a
              }
            }
            e = void 0
          }
          var g = e
          if (0 === g) return !1
          var l = c
          2 === c
            ? ((l = 0), 2 === g && (l = 1))
            : 3 === c && ((l = 1), 1 === g && (l = 0))
          var m
          if (0 === l)
            if (a.purpose && a.vendor) {
              var n = Ni(a.vendor.consents, void 0 === d ? '755' : d)
              m =
                n &&
                '1' === b &&
                a.purposeOneTreatment &&
                'CH' === a.publisherCC
                  ? !0
                  : n && Ni(a.purpose.consents, b)
            } else m = !0
          else
            m =
              1 === l
                ? a.purpose && a.vendor
                  ? Ni(a.purpose.legitimateInterests, b) &&
                    Ni(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
                  : !0
                : !0
          return m
        },
        Ni = function (a, b) {
          return !(!a || !a[b])
        },
        Mi = function (a, b, c, d) {
          c || (c = function () {})
          if ('function' === typeof a.m.__tcfapi) {
            var e = a.m.__tcfapi
            e(b, 2, c, d)
          } else if (Pi(a)) {
            Qi(a)
            var f = ++a.qb
            a.M[f] = c
            if (a.h) {
              var g = {}
              a.h.postMessage(
                ((g.__tcfapiCall = {
                  command: b,
                  version: 2,
                  callId: f,
                  parameter: d
                }),
                g),
                '*'
              )
            }
          } else c({}, !1)
        },
        Pi = function (a) {
          if (a.h) return a.h
          var b
          a: {
            for (var c = a.m, d = 0; 50 > d; ++d) {
              var e
              try {
                e = !(!c.frames || !c.frames.__tcfapiLocator)
              } catch (l) {
                e = !1
              }
              if (e) {
                b = c
                break a
              }
              var f
              b: {
                try {
                  var g = c.parent
                  if (g && g != c) {
                    f = g
                    break b
                  }
                } catch (l) {}
                f = null
              }
              if (!(c = f)) break
            }
            b = null
          }
          a.h = b
          return a.h
        },
        Qi = function (a) {
          a.B ||
            ((a.B = function (b) {
              try {
                var c
                c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
                  .__tcfapiReturn
                a.M[c.callId](c.returnValue, c.success)
              } catch (d) {}
            }),
            ri(a.m, 'message', a.B))
        },
        Ri = function (a) {
          if (!1 === a.gdprApplies) return !0
          void 0 === a.internalErrorState && (a.internalErrorState = Ki(a))
          return 'error' === a.cmpStatus || 0 !== a.internalErrorState
            ? a.internalBlockOnErrors
              ? (Ii({ e: String(a.internalErrorState) }), !1)
              : !0
            : 'loaded' !== a.cmpStatus ||
              ('tcloaded' !== a.eventStatus &&
                'useractioncomplete' !== a.eventStatus)
            ? !1
            : !0
        }
      var Si = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        Ti = qi('', 500)
      function Ui() {
        var a = le.tcf || {}
        return (le.tcf = a)
      }
      var $i = function () {
        var a = Ui(),
          b = new Li(z, { Fk: -1 })
        Vi(b) && Wi() && J(124)
        if (!Wi() && !a.active && Vi(b)) {
          a.active = !0
          a.ne = {}
          Xi()
          a.tcString = 'tcunavailable'
          try {
            b.addEventListener(function (c) {
              if (0 !== c.internalErrorState) Yi(a), Zi(a)
              else {
                var d
                a.gdprApplies = c.gdprApplies
                if (!1 === c.gdprApplies) {
                  var e = {},
                    f
                  for (f in Si) Si.hasOwnProperty(f) && (e[f] = !0)
                  d = e
                  b.removeEventListener(c)
                } else if (
                  'tcloaded' === c.eventStatus ||
                  'useractioncomplete' === c.eventStatus ||
                  'cmpuishown' === c.eventStatus
                ) {
                  var g = {},
                    l
                  for (l in Si)
                    if (Si.hasOwnProperty(l))
                      if ('1' === l) {
                        var m,
                          n = c,
                          p = !0
                        p = void 0 === p ? !1 : p
                        m = Ri(n)
                          ? !1 === n.gdprApplies ||
                            'tcunavailable' === n.tcString ||
                            (void 0 === n.gdprApplies && !p) ||
                            'string' !== typeof n.tcString ||
                            !n.tcString.length
                            ? !0
                            : Oi(n, '1', 0)
                          : !1
                        g['1'] = m
                      } else g[l] = Oi(c, l, Si[l])
                  d = g
                }
                d && ((a.tcString = c.tcString || 'tcempty'), (a.ne = d), Zi(a))
              }
            })
          } catch (c) {
            Yi(a), Zi(a)
          }
        }
      }
      function Yi(a) {
        a.type = 'e'
        a.tcString = 'tcunavailable'
      }
      function Xi() {
        var a = {},
          b = ((a.ad_storage = 'denied'), (a.wait_for_update = Ti), a)
        Xh(b)
      }
      function Vi(a) {
        return 'function' === typeof z.__tcfapi ||
          'function' === typeof a.m.__tcfapi ||
          null != Pi(a)
          ? !0
          : !1
      }
      var Wi = function () {
        return !0 !== z.gtag_enable_tcf_support
      }
      function Zi(a) {
        var b = {},
          c = ((b.ad_storage = a.ne['1'] ? 'granted' : 'denied'), b)
        Yh(
          c,
          { eventId: 0 },
          { gdprApplies: a ? a.gdprApplies : void 0, tcString: aj() }
        )
      }
      var aj = function () {
          var a = Ui()
          return a.active ? a.tcString || '' : ''
        },
        bj = function () {
          var a = Ui()
          return a.active && void 0 !== a.gdprApplies
            ? a.gdprApplies
              ? '1'
              : '0'
            : ''
        },
        cj = function (a) {
          if (!Si.hasOwnProperty(String(a))) return !0
          var b = Ui()
          return b.active && b.ne ? !!b.ne[String(a)] : !0
        }
      var dj = function (a) {
          var b = String(a[$b.Qa] || '').replace(/_/g, '')
          0 === b.indexOf('cvt') && (b = 'cvt')
          return b
        },
        ej =
          0 <= z.location.search.indexOf('?gtm_latency=') ||
          0 <= z.location.search.indexOf('&gtm_latency=')
      var fj = {
          sampleRate: '0.005000',
          Vh: '',
          Uh: Number('5'),
          fl: Number('')
        },
        gj
      if (!(gj = ej)) {
        var hj = Math.random(),
          ij = fj.sampleRate
        gj = hj < ij
      }
      var jj = gj,
        kj = 'https://www.googletagmanager.com/a?id=' + R.C + '&cv=1'
      function lj() {
        return [kj, '&v=3&t=t', '&pid=' + ua(), '&rv=' + ke.nf].join('')
      }
      var mj = lj()
      function nj() {
        mj = lj()
      }
      var oj = {},
        pj = '',
        qj = '',
        rj = '',
        sj = '',
        tj = [],
        uj = '',
        vj = '',
        wj = void 0,
        xj = {},
        Pj = {},
        Qj = void 0,
        Rj = 5
      0 < fj.Uh && (Rj = fj.Uh)
      var Sj = (function (a, b) {
          for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0)
          return {
            Qj: function () {
              return c < a ? !1 : Fa() - d[c % a] < b
            },
            qk: function () {
              var f = c++ % a
              d[f] = Fa()
            }
          }
        })(Rj, 1e3),
        Tj = 1e3
      function Uj(a) {
        var b = wj
        if (void 0 === b) return ''
        var c = $a('GTM'),
          d = $a('TAGGING'),
          e = $a('HEALTH'),
          f = mj,
          g = oj[b] ? '' : '&es=1',
          l = xj[b],
          m = Vj(),
          n = pj,
          p = qj,
          q = vj,
          t = rj,
          r = sj,
          u
        return [
          f,
          g,
          l,
          c ? '&u=' + c : '',
          d ? '&ut=' + d : '',
          e ? '&h=' + e : '',
          m,
          n,
          p,
          q,
          t,
          r,
          u,
          uj ? '&dl=' + encodeURIComponent(uj) : '',
          0 < tj.length ? '&tdp=' + tj.join('.') : '',
          ke.Lc ? '&x=' + ke.Lc : '',
          '&z=0'
        ].join('')
      }
      function Xj() {
        Qj && (z.clearTimeout(Qj), (Qj = void 0))
        if (void 0 !== wj && (!oj[wj] || pj || qj))
          if (Pj[wj] || Sj.Qj() || 0 >= Tj--) J(1), (Pj[wj] = !0)
          else {
            Sj.qk()
            var a = Uj(!0)
            Kb(a)
            if (sj || (uj && 0 < tj.length)) {
              var b = a.replace('/a?', '/td?')
              Kb(b)
            }
            oj[wj] = !0
            uj = sj = rj = vj = qj = pj = ''
            tj = []
          }
      }
      function Yj() {
        Qj || (Qj = z.setTimeout(Xj, 500))
      }
      function Zj() {
        2022 <= Uj().length && Xj()
      }
      function Vj() {
        return (
          '&tc=' +
          zc.filter(function (a) {
            return a
          }).length
        )
      }
      var ak = function (a, b) {
          if (jj && !Pj[a] && wj !== a) {
            Xj()
            wj = a
            rj = pj = ''
            var c
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : '*'
            xj[a] = '&e=' + c + '&eid=' + a
            Yj()
          }
        },
        bk = function (a, b, c) {
          if (jj && b) {
            var d = dj(b),
              e = c + d
            if (!Pj[a]) {
              a !== wj && (Xj(), (wj = a))
              pj = pj ? pj + '.' + e : '&tr=' + e
              var f = b['function']
              if (!f)
                throw Error('Error: No function name given for function call.')
              var g = (Bc[f] ? '1' : '2') + d
              rj = rj ? rj + '.' + g : '&ti=' + g
              Yj()
              Zj()
            }
          }
        },
        ck = function (a, b, c) {
          if (jj && void 0 !== a && !Pj[a]) {
            a !== wj && (Xj(), (wj = a))
            var d = c + b
            qj = qj ? qj + '.' + d : '&epr=' + d
            Yj()
            Zj()
          }
        },
        dk = function (a, b, c) {},
        Wj = void 0
      tb()
      ti() || qb('iPod')
      qb('iPad')
      !qb('Android') || ub() || tb() || sb() || qb('Silk')
      ub()
      !qb('Safari') ||
        ub() ||
        (rb() ? 0 : qb('Coast')) ||
        sb() ||
        (rb() ? 0 : qb('Edge')) ||
        (rb() ? pb('Microsoft Edge') : qb('Edg/')) ||
        (rb() ? pb('Opera') : qb('OPR')) ||
        tb() ||
        qb('Silk') ||
        qb('Android') ||
        ui()
      var ek = {},
        fk = null,
        gk = function (a) {
          for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d)
            255 < e && ((b[c++] = e & 255), (e >>= 8))
            b[c++] = e
          }
          var f = 4
          void 0 === f && (f = 0)
          if (!fk) {
            fk = {}
            for (
              var g =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                    ''
                  ),
                l = ['+/=', '+/', '-_=', '-_.', '-_'],
                m = 0;
              5 > m;
              m++
            ) {
              var n = g.concat(l[m].split(''))
              ek[m] = n
              for (var p = 0; p < n.length; p++) {
                var q = n[p]
                void 0 === fk[q] && (fk[q] = p)
              }
            }
          }
          for (
            var t = ek[f],
              r = Array(Math.floor(b.length / 3)),
              u = t[64] || '',
              v = 0,
              w = 0;
            v < b.length - 2;
            v += 3
          ) {
            var y = b[v],
              x = b[v + 1],
              A = b[v + 2],
              B = t[y >> 2],
              D = t[((y & 3) << 4) | (x >> 4)],
              I = t[((x & 15) << 2) | (A >> 6)],
              H = t[A & 63]
            r[w++] = '' + B + D + I + H
          }
          var F = 0,
            L = u
          switch (b.length - v) {
            case 2:
              ;(F = b[v + 1]), (L = t[(F & 15) << 2] || u)
            case 1:
              var K = b[v]
              r[w] = '' + t[K >> 2] + t[((K & 3) << 4) | (F >> 4)] + L + u
          }
          return r.join('')
        }
      var hk =
        'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
          ' '
        )
      function ik() {
        var a
        return null != (a = z.google_tag_data) ? a : (z.google_tag_data = {})
      }
      function jk() {
        var a = z.google_tag_data,
          b
        if (null != a && a.uach) {
          var c = a.uach,
            d = Object.assign({}, c)
          c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0))
          b = d
        } else b = null
        return b
      }
      function kk() {
        var a, b
        return null !=
          (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
          ? b
          : null
      }
      function lk() {
        var a, b
        return (
          'function' ===
          typeof (null == (a = z.navigator)
            ? void 0
            : null == (b = a.userAgentData)
            ? void 0
            : b.getHighEntropyValues)
        )
      }
      function mk() {
        if (!lk()) return null
        var a = ik()
        if (a.uach_promise) return a.uach_promise
        var b = z.navigator.userAgentData
          .getHighEntropyValues(hk)
          .then(function (c) {
            null != a.uach || (a.uach = c)
            return c
          })
        return (a.uach_promise = b)
      }
      var sk = function (a) {
        for (
          var b = [],
            c = C.cookie.split(';'),
            d = new RegExp(
              '^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'
            ),
            e = 0;
          e < c.length;
          e++
        ) {
          var f = c[e].match(d)
          f &&
            b.push({
              Uf: f[1],
              value: f[2],
              timestamp: Number(f[2].split('.')[1]) || 0
            })
        }
        b.sort(function (g, l) {
          return l.timestamp - g.timestamp
        })
        return b
      }
      function tk(a, b) {
        var c = sk(a),
          d = {}
        if (!c || !c.length) return d
        for (var e = 0; e < c.length; e++) {
          var f = c[e].value.split('.')
          if (
            !('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
            Number(f[1])
          ) {
            d[c[e].Uf] || (d[c[e].Uf] = [])
            var g = { version: f[0], timestamp: 1e3 * Number(f[1]), ba: f[2] }
            b && 3 < f.length && (g.labels = f.slice(3))
            d[c[e].Uf].push(g)
          }
        }
        return d
      }
      var uk = /^\w+$/,
        vk = /^[\w-]+$/,
        wk = {
          aw: '_aw',
          dc: '_dc',
          gf: '_gf',
          ha: '_ha',
          gp: '_gp',
          gb: '_gb'
        },
        xk = function () {
          if (!Te().h() || !of()) return !0
          var a = kf('ad_storage')
          return null == a ? !0 : !!a
        },
        yk = function (a, b) {
          nf('ad_storage')
            ? xk()
              ? a()
              : tf(a, 'ad_storage')
            : b
            ? Ya('TAGGING', 3)
            : sf(
                function () {
                  yk(a, !0)
                },
                ['ad_storage']
              )
        },
        Ak = function (a) {
          return zk(a).map(function (b) {
            return b.ba
          })
        },
        zk = function (a) {
          var b = []
          if (!If(z) || !C.cookie) return b
          var c = Lf(a, C.cookie, void 0, 'ad_storage')
          if (!c || 0 == c.length) return b
          for (var d = {}, e = 0; e < c.length; d = { kd: d.kd }, e++) {
            var f = Bk(c[e])
            if (null != f) {
              var g = f,
                l = g.version
              d.kd = g.ba
              var m = g.timestamp,
                n = g.labels,
                p = ta(
                  b,
                  (function (q) {
                    return function (t) {
                      return t.ba === q.kd
                    }
                  })(d)
                )
              p
                ? ((p.timestamp = Math.max(p.timestamp, m)),
                  (p.labels = Ck(p.labels, n || [])))
                : b.push({ version: l, ba: d.kd, timestamp: m, labels: n })
            }
          }
          b.sort(function (q, t) {
            return t.timestamp - q.timestamp
          })
          return Dk(b)
        }
      function Ck(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
          (c[a[e]] = !0), d.push(a[e])
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f])
        return d
      }
      function Ek(a) {
        return a && 'string' == typeof a && a.match(uk) ? a : '_gcl'
      }
      var Gk = function () {
          var a = Bf(z.location.href),
            b = zf(a, 'query', !1, void 0, 'gclid'),
            c = zf(a, 'query', !1, void 0, 'gclsrc'),
            d = zf(a, 'query', !1, void 0, 'wbraid'),
            e = zf(a, 'query', !1, void 0, 'dclid')
          if (!b || !c || !d) {
            var f = a.hash.replace('#', '')
            b = b || wf(f, 'gclid')
            c = c || wf(f, 'gclsrc')
            d = d || wf(f, 'wbraid')
          }
          return Fk(b, c, e, d)
        },
        Fk = function (a, b, c, d) {
          var e = {},
            f = function (g, l) {
              e[l] || (e[l] = [])
              e[l].push(g)
            }
          e.gclid = a
          e.gclsrc = b
          e.dclid = c
          void 0 !== d && vk.test(d) && ((e.gbraid = d), f(d, 'gb'))
          if (void 0 !== a && a.match(vk))
            switch (b) {
              case void 0:
                f(a, 'aw')
                break
              case 'aw.ds':
                f(a, 'aw')
                f(a, 'dc')
                break
              case 'ds':
                f(a, 'dc')
                break
              case '3p.ds':
                f(a, 'dc')
                break
              case 'gf':
                f(a, 'gf')
                break
              case 'ha':
                f(a, 'ha')
            }
          c && f(c, 'dc')
          return e
        },
        Ik = function (a) {
          var b = Gk()
          yk(function () {
            Hk(b, !1, a)
          })
        }
      function Hk(a, b, c, d, e) {
        function f(w, y) {
          var x = Jk(w, g)
          x && (Uf(x, y, l), (m = !0))
        }
        c = c || {}
        e = e || []
        var g = Ek(c.prefix)
        d = d || Fa()
        var l = cg(c, d, !0)
        l.cb = 'ad_storage'
        var m = !1,
          n = Math.round(d / 1e3),
          p = function (w) {
            var y = ['GCL', n, w]
            0 < e.length && y.push(e.join('.'))
            return y.join('.')
          }
        a.aw && f('aw', p(a.aw[0]))
        a.dc && f('dc', p(a.dc[0]))
        a.gf && f('gf', p(a.gf[0]))
        a.ha && f('ha', p(a.ha[0]))
        a.gp && f('gp', p(a.gp[0]))
        if (!m && a.gb) {
          var q = a.gb[0],
            t = Jk('gb', g),
            r = !1
          if (!b)
            for (var u = zk(t), v = 0; v < u.length; v++)
              u[v].ba === q && u[v].labels && 0 < u[v].labels.length && (r = !0)
          r || f('gb', p(q))
        }
      }
      var Lk = function (a, b) {
          var c = vg(!0)
          yk(function () {
            for (var d = Ek(b.prefix), e = 0; e < a.length; ++e) {
              var f = a[e]
              if (void 0 !== wk[f]) {
                var g = Jk(f, d),
                  l = c[g]
                if (l) {
                  var m = Math.min(Kk(l), Fa()),
                    n
                  b: {
                    var p = m
                    if (If(z))
                      for (
                        var q = Lf(g, C.cookie, void 0, 'ad_storage'), t = 0;
                        t < q.length;
                        ++t
                      )
                        if (Kk(q[t]) > p) {
                          n = !0
                          break b
                        }
                    n = !1
                  }
                  if (!n) {
                    var r = cg(b, m, !0)
                    r.cb = 'ad_storage'
                    Uf(g, l, r)
                  }
                }
              }
            }
            Hk(Fk(c.gclid, c.gclsrc), !1, b)
          })
        },
        Jk = function (a, b) {
          var c = wk[a]
          if (void 0 !== c) return b + c
        },
        Kk = function (a) {
          return 0 !== Mk(a.split('.')).length
            ? 1e3 * (Number(a.split('.')[1]) || 0)
            : 0
        }
      function Bk(a) {
        var b = Mk(a.split('.'))
        return 0 === b.length
          ? null
          : {
              version: b[0],
              ba: b[2],
              timestamp: 1e3 * (Number(b[1]) || 0),
              labels: b.slice(3)
            }
      }
      function Mk(a) {
        return 3 > a.length ||
          ('GCL' !== a[0] && '1' !== a[0]) ||
          !/^\d+$/.test(a[1]) ||
          !vk.test(a[2])
          ? []
          : a
      }
      var Nk = function (a, b, c, d, e) {
          if (sa(b) && If(z)) {
            var f = Ek(e),
              g = function () {
                for (var l = {}, m = 0; m < a.length; ++m) {
                  var n = Jk(a[m], f)
                  if (n) {
                    var p = Lf(n, C.cookie, void 0, 'ad_storage')
                    p.length && (l[n] = p.sort()[p.length - 1])
                  }
                }
                return l
              }
            yk(function () {
              Bg(g, b, c, d)
            })
          }
        },
        Dk = function (a) {
          return a.filter(function (b) {
            return vk.test(b.ba)
          })
        },
        Ok = function (a, b) {
          if (If(z)) {
            for (var c = Ek(b.prefix), d = {}, e = 0; e < a.length; e++)
              wk[a[e]] && (d[a[e]] = wk[a[e]])
            yk(function () {
              k(d, function (f, g) {
                var l = Lf(c + g, C.cookie, void 0, 'ad_storage')
                l.sort(function (r, u) {
                  return Kk(u) - Kk(r)
                })
                if (l.length) {
                  var m = l[0],
                    n = Kk(m),
                    p =
                      0 !== Mk(m.split('.')).length
                        ? m.split('.').slice(3)
                        : [],
                    q = {},
                    t
                  t = 0 !== Mk(m.split('.')).length ? m.split('.')[2] : void 0
                  q[f] = [t]
                  Hk(q, !0, b, n, p)
                }
              })
            })
          }
        }
      function Pk(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0
        return !1
      }
      var Qk = function (a) {
          function b(e, f, g) {
            g && (e[f] = g)
          }
          if (of()) {
            var c = Gk()
            if (Pk(c, a)) {
              var d = {}
              b(d, 'gclid', c.gclid)
              b(d, 'dclid', c.dclid)
              b(d, 'gclsrc', c.gclsrc)
              b(d, 'wbraid', c.gbraid)
              Cg(function () {
                return d
              }, 3)
              Cg(function () {
                var e = {}
                return (e._up = '1'), e
              }, 1)
            }
          }
        },
        Rk = function (a, b, c, d) {
          var e = []
          c = c || {}
          if (!xk()) return e
          var f = zk(a)
          if (!f.length) return e
          for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1)
          if (d) return e
          if (1 !== e[0]) {
            var l = f[0],
              m = f[0].timestamp,
              n = [l.version, Math.round(m / 1e3), l.ba]
                .concat(l.labels || [], [b])
                .join('.'),
              p = cg(c, m, !0)
            p.cb = 'ad_storage'
            Uf(a, n, p)
          }
          return e
        }
      function Sk(a, b) {
        var c = Ek(b),
          d = Jk(a, c)
        if (!d) return 0
        for (var e = zk(d), f = 0, g = 0; g < e.length; g++)
          f = Math.max(f, e[g].timestamp)
        return f
      }
      function Tk(a) {
        var b = 0,
          c
        for (c in a)
          for (var d = a[c], e = 0; e < d.length; e++)
            b = Math.max(b, Number(d[e].timestamp))
        return b
      }
      var Uk = function (a) {
        var b = Math.max(Sk('aw', a), Tk(xk() ? tk() : {}))
        return Math.max(Sk('gb', a), Tk(xk() ? tk('_gac_gb', !0) : {})) > b
      }
      var Zk = /[A-Z]+/,
        $k = /\s/,
        al = function (a) {
          if (h(a)) {
            a = Da(a)
            var b = a.indexOf('-')
            if (!(0 > b)) {
              var c = a.substring(0, b)
              if (Zk.test(c)) {
                for (
                  var d = a.substring(b + 1).split('/'), e = 0;
                  e < d.length;
                  e++
                )
                  if (!d[e] || ($k.test(d[e]) && ('AW' !== c || 1 !== e)))
                    return
                return { id: a, prefix: c, U: c + '-' + d[0], K: d }
              }
            }
          }
        },
        cl = function (a) {
          for (var b = {}, c = 0; c < a.length; ++c) {
            var d = al(a[c])
            d && (b[d.id] = d)
          }
          bl(b)
          var e = []
          k(b, function (f, g) {
            e.push(g)
          })
          return e
        }
      function bl(a) {
        var b = [],
          c
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var d = a[c]
            'AW' === d.prefix && d.K[1] && b.push(d.U)
          }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
      }
      var dl = function (a, b, c, d) {
        var e = Ib(),
          f
        if (1 === e)
          a: {
            var g = ze
            g = g.toLowerCase()
            for (
              var l = 'https://' + g,
                m = 'http://' + g,
                n = 1,
                p = C.getElementsByTagName('script'),
                q = 0;
              q < p.length && 100 > q;
              q++
            ) {
              var t = p[q].src
              if (t) {
                t = t.toLowerCase()
                if (0 === t.indexOf(m)) {
                  f = 3
                  break a
                }
                1 === n && 0 === t.indexOf(l) && (n = 2)
              }
            }
            f = n
          }
        else f = e
        return (2 === f || d || 'http:' != z.location.protocol ? a : b) + c
      }
      var fl = function (a, b, c) {
          if (z[a.functionName]) return b.Lf && E(b.Lf), z[a.functionName]
          var d = el()
          z[a.functionName] = d
          if (a.be)
            for (var e = 0; e < a.be.length; e++)
              z[a.be[e]] = z[a.be[e]] || el()
          a.me && void 0 === z[a.me] && (z[a.me] = c)
          Hb(dl('https://', 'http://', a.Tf), b.Lf, b.ek)
          return d
        },
        el = function () {
          var a = function () {
            a.q = a.q || []
            a.q.push(arguments)
          }
          return a
        },
        gl = {
          functionName: '_googWcmImpl',
          me: '_googWcmAk',
          Tf: 'www.gstatic.com/wcm/loader.js'
        },
        hl = {
          functionName: '_gaPhoneImpl',
          me: 'ga_wpid',
          Tf: 'www.gstatic.com/gaphone/loader.js'
        },
        il = { Xh: '', cj: '5' },
        jl = {
          functionName: '_googCallTrackingImpl',
          be: [hl.functionName, gl.functionName],
          Tf:
            'www.gstatic.com/call-tracking/call-tracking_' +
            (il.Xh || il.cj) +
            '.js'
        },
        kl = {},
        ll = function (a, b, c, d) {
          J(22)
          if (c) {
            d = d || {}
            var e = fl(gl, d, a),
              f = { ak: a, cl: b }
            void 0 === d.ab && (f.autoreplace = c)
            e(2, d.ab, f, c, 0, Ea(), d.options)
          }
        },
        ml = function (a, b, c, d) {
          J(21)
          if (b && c) {
            d = d || {}
            for (
              var e = {
                  countryNameCode: c,
                  destinationNumber: b,
                  retrievalTime: Ea()
                },
                f = 0;
              f < a.length;
              f++
            ) {
              var g = a[f]
              kl[g.id] ||
                (g && 'AW' === g.prefix && !e.adData && 2 <= g.K.length
                  ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (kl[g.id] = !0))
                  : g &&
                    'UA' === g.prefix &&
                    !e.gaData &&
                    ((e.gaData = { gaWpid: g.U }), (kl[g.id] = !0)))
            }
            ;(e.gaData || e.adData) && fl(jl, d)(d.ab, e, d.options)
          }
        },
        nl = function () {
          var a = !1
          return a
        },
        ol = function (a, b) {
          if (a)
            if (di()) {
            } else {
              if (h(a)) {
                var c = al(a)
                if (!c) return
                a = c
              }
              var d = void 0,
                e = !1,
                f = Q(b, N.g.Ii)
              if (f && sa(f)) {
                d = []
                for (var g = 0; g < f.length; g++) {
                  var l = al(f[g])
                  l &&
                    (d.push(l),
                    (a.id === l.id || (a.id === a.U && a.U === l.U)) &&
                      (e = !0))
                }
              }
              if (!d || e) {
                var m = Q(b, N.g.Ig),
                  n
                if (m) {
                  sa(m) ? (n = m) : (n = [m])
                  var p = Q(b, N.g.Gg),
                    q = Q(b, N.g.Hg),
                    t = Q(b, N.g.Jg),
                    r = Q(b, N.g.Hi),
                    u = p || q,
                    v = 1
                  'UA' !== a.prefix || d || (v = 5)
                  for (var w = 0; w < n.length; w++)
                    if (w < v)
                      if (d) ml(d, n[w], r, { ab: u, options: t })
                      else if ('AW' === a.prefix && a.K[1])
                        nl()
                          ? ml([a], n[w], r || 'US', { ab: u, options: t })
                          : ll(a.K[0], a.K[1], n[w], { ab: u, options: t })
                      else if ('UA' === a.prefix)
                        if (nl()) ml([a], n[w], r || 'US', { ab: u })
                        else {
                          var y = a.U,
                            x = n[w],
                            A = { ab: u }
                          J(23)
                          if (x) {
                            A = A || {}
                            var B = fl(hl, A, y),
                              D = {}
                            void 0 !== A.ab
                              ? (D.receiver = A.ab)
                              : (D.replace = x)
                            D.ga_wpid = y
                            D.destination = x
                            B(2, Ea(), D)
                          }
                        }
                }
              }
            }
        }
      var pl = function (a, b, c) {
        this.target = a
        this.eventName = b
        this.h = c
        this.m = {}
        this.metadata = G(c.eventMetadata || {})
        this.I = !1
      }
      pl.prototype.copyToHitData = function (a, b) {
        var c = Q(this.h, a)
        void 0 !== c ? (this.m[a] = c) : void 0 !== b && (this.m[a] = b)
      }
      var ql = function (a, b, c) {
        var d = kh(a.target.U)
        return d && d.hasOwnProperty(b) ? d[b] : c
      }
      function rl(a) {
        return {
          getDestinationId: function () {
            return a.target.U
          },
          getEventName: function () {
            return a.eventName
          },
          setEventName: function (b) {
            a.eventName = b
          },
          getHitData: function (b) {
            return a.m[b]
          },
          setHitData: function (b, c) {
            a.m[b] = c
          },
          setHitDataIfNotDefined: function (b, c) {
            void 0 === a.m[b] && (a.m[b] = c)
          },
          copyToHitData: function (b, c) {
            a.copyToHitData(b, c)
          },
          getMetadata: function (b) {
            return a.metadata[b]
          },
          setMetadata: function (b, c) {
            a.metadata[b] = c
          },
          abort: function () {
            a.I = !0
          },
          getFromEventContext: function (b) {
            return Q(a.h, b)
          },
          Xk: function () {
            return a
          },
          getHitKeys: function () {
            return Object.keys(a.m)
          }
        }
      }
      var Ll = function (a, b, c, d, e, f, g, l, m, n, p, q) {
          this.eventId = a
          this.priorityId = b
          this.h = c
          this.M = d
          this.m = e
          this.J = f
          this.X = g
          this.B = l
          this.eventMetadata = m
          this.N = n
          this.P = p
          this.D = q
        },
        Q = function (a, b, c) {
          if (void 0 !== a.h[b]) return a.h[b]
          if (void 0 !== a.M[b]) return a.M[b]
          if (void 0 !== a.m[b]) return a.m[b]
          jj && Ml(a, a.J[b], a.X[b]) && (J(71), J(79))
          return void 0 !== a.J[b] ? a.J[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Nl = function (a) {
          function b(g) {
            for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
          }
          var c = {}
          b(a.h)
          b(a.M)
          b(a.m)
          b(a.J)
          if (jj)
            for (var d = Object.keys(a.X), e = 0; e < d.length; e++) {
              var f = d[e]
              if (
                'event' !== f &&
                'gtm' !== f &&
                'tagTypeBlacklist' !== f &&
                !c.hasOwnProperty(f)
              ) {
                J(71)
                J(80)
                break
              }
            }
          return Object.keys(c)
        },
        Ol = function (a, b, c) {
          function d(m) {
            Yb(m) &&
              k(m, function (n, p) {
                f = !0
                e[n] = p
              })
          }
          var e = {},
            f = !1
          ;(c && 1 !== c) || (d(a.B[b]), d(a.J[b]), d(a.m[b]), d(a.M[b]))
          ;(c && 2 !== c) || d(a.h[b])
          if (jj) {
            var g = f,
              l = e
            e = {}
            f = !1
            ;(c && 1 !== c) || (d(a.B[b]), d(a.X[b]), d(a.m[b]), d(a.M[b]))
            ;(c && 2 !== c) || d(a.h[b])
            if (f !== g || Ml(a, e, l)) J(71), J(81)
            f = g
            e = l
          }
          return f ? e : void 0
        },
        Pl = function (a) {
          var b = [N.g.vc, N.g.yd, N.g.zd, N.g.Ad, N.g.Bd, N.g.Cd, N.g.Dd],
            c = {},
            d = !1,
            e = function (l) {
              for (var m = 0; m < b.length; m++)
                void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0))
              return d
            }
          if (e(a.h) || e(a.M) || e(a.m)) return c
          e(a.J)
          if (jj) {
            var f = c,
              g = d
            c = {}
            d = !1
            e(a.X)
            Ml(a, c, f) && (J(71), J(82))
            c = f
            d = g
          }
          if (d) return c
          e(a.B)
          return c
        },
        Ml = function (a, b, c) {
          if (!jj) return !1
          try {
            if (b === c) return !1
            var d = Wb(b)
            if (d !== Wb(c) || !((Yb(b) && Yb(c)) || 'array' === d)) return !0
            if ('array' === d) {
              if (b.length !== c.length) return !0
              for (var e = 0; e < b.length; e++)
                if (Ml(a, b[e], c[e])) return !0
            } else {
              for (var f in c) if (!b.hasOwnProperty(f)) return !0
              for (var g in b)
                if (!c.hasOwnProperty(g) || Ml(a, b[g], c[g])) return !0
            }
          } catch (l) {
            J(72)
          }
          return !1
        },
        Ql = function (a, b) {
          this.Qi = a
          this.Ri = b
          this.J = {}
          this.Xg = {}
          this.h = {}
          this.M = {}
          this.m = {}
          this.Hc = {}
          this.B = {}
          this.kc = function () {}
          this.qb = function () {}
          this.X = !1
        },
        Rl = function (a, b) {
          a.J = b
          return a
        },
        Sl = function (a, b) {
          a.Xg = b
          return a
        },
        Tl = function (a, b) {
          a.h = b
          return a
        },
        Ul = function (a, b) {
          a.M = b
          return a
        },
        Vl = function (a, b) {
          a.m = b
          return a
        },
        Wl = function (a, b) {
          a.Hc = b
          return a
        },
        Xl = function (a, b) {
          a.B = b || {}
          return a
        },
        Yl = function (a, b) {
          a.kc = b
          return a
        },
        Zl = function (a, b) {
          a.qb = b
          return a
        },
        $l = function (a) {
          a.X = !0
          return a
        },
        am = function (a) {
          return new Ll(
            a.Qi,
            a.Ri,
            a.J,
            a.Xg,
            a.h,
            a.M,
            a.m,
            a.Hc,
            a.B,
            a.kc,
            a.qb,
            a.X
          )
        }
      function fm() {
        return 'attribution-reporting'
      }
      function gm(a) {
        var b
        b = void 0 === b ? document : b
        var c
        return !(
          null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a)
        )
      }
      var hm = !1
      function im() {
        if (gm('join-ad-interest-group') && qa(Ab.joinAdInterestGroup))
          return !0
        hm || (Di(), (hm = !0))
        return gm('join-ad-interest-group') && qa(Ab.joinAdInterestGroup)
      }
      function jm(a, b) {
        var c = void 0
        try {
          c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
          var d = Number(c.dataset.loadTime)
          if (d && 6e4 > Fa() - d) {
            Ya('TAGGING', 9)
            return
          }
        } else
          try {
            if (
              50 <=
              C.querySelectorAll(
                'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
              ).length
            ) {
              Ya('TAGGING', 10)
              return
            }
          } catch (e) {}
        Jb(
          a,
          void 0,
          { allow: 'join-ad-interest-group' },
          { taggingId: b, loadTime: Fa() },
          c
        )
      }
      function km() {
        return 'https://td.doubleclick.net'
      }
      var lm = RegExp(
          '^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$'
        ),
        mm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        nm = /^\d+\.fls\.doubleclick\.net$/,
        om = /;gac=([^;?]+)/,
        pm = /;gacgb=([^;?]+)/,
        qm = /;gclaw=([^;?]+)/,
        rm = /;gclgb=([^;?]+)/
      function sm(a, b) {
        if (nm.test(C.location.host)) {
          var c = C.location.href.match(b)
          return c && 2 == c.length && c[1].match(lm)
            ? decodeURIComponent(c[1])
            : ''
        }
        var d = [],
          e
        for (e in a) {
          for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].ba)
          d.push(e + ':' + f.join(','))
        }
        return 0 < d.length ? d.join(';') : ''
      }
      var tm = function (a, b, c) {
        var d = xk() ? tk('_gac_gb', !0) : {},
          e = [],
          f = !1,
          g
        for (g in d) {
          var l = Rk('_gac_gb_' + g, a, b, c)
          f =
            f ||
            (0 !== l.length &&
              l.some(function (m) {
                return 1 === m
              }))
          e.push(g + ':' + l.join(','))
        }
        return { Bj: f ? e.join(';') : '', Aj: sm(d, pm) }
      }
      function um(a, b, c) {
        if (nm.test(C.location.host)) {
          var d = C.location.href.match(c)
          if (d && 2 == d.length && d[1].match(mm)) return [{ ba: d[1] }]
        } else return zk((a || '_gcl') + b)
        return []
      }
      var vm = function (a) {
          return um(a, '_aw', qm)
            .map(function (b) {
              return b.ba
            })
            .join('.')
        },
        wm = function (a) {
          return um(a, '_gb', rm)
            .map(function (b) {
              return b.ba
            })
            .join('.')
        },
        xm = function (a, b) {
          var c = Rk(((b && b.prefix) || '_gcl') + '_gb', a, b)
          return 0 === c.length ||
            c.every(function (d) {
              return 0 === d
            })
            ? ''
            : c.join('.')
        }
      var ym = function () {
        if (qa(z.__uspapi)) {
          var a = ''
          try {
            z.__uspapi('getUSPData', 1, function (b, c) {
              if (c && b) {
                var d = b.uspString
                d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d)
              }
            })
          } catch (b) {}
          return a
        }
      }
      var jn = {
        F: {
          Yf: 'ads_conversion_hit',
          xe: 'container_execute_start',
          cg: 'container_setup_end',
          ye: 'container_setup_start',
          ag: 'container_execute_end',
          dg: 'container_yield_end',
          ze: 'container_yield_start',
          Ug: 'event_execute_end',
          Vg: 'event_setup_end',
          Gc: 'event_setup_start',
          Wg: 'ga4_conversion_hit',
          Jc: 'page_load',
          Pk: 'pageview',
          ob: 'snippet_load',
          ih: 'tag_callback_error',
          jh: 'tag_callback_failure',
          kh: 'tag_callback_success',
          lh: 'tag_execute_end',
          Xb: 'tag_execute_start'
        }
      }
      var kn = !1,
        ln = 'L S Y E TC HTC'.split(' '),
        mn = ['S', 'E'],
        nn = ['TS', 'TE']
      var On = function (a) {},
        Pn = function (a) {},
        on = function (a, b, c, d, e, f) {
          var g
          g = void 0 === g ? !1 : g
          var l = {}
          return l
        },
        pn = function (a) {
          var b = !1
          return b
        },
        qn = function (a, b) {},
        Qn = function () {
          var a = {}
          return a
        },
        Hn = function (a) {
          a = void 0 === a ? !0 : a
          var b = {}
          return b
        },
        Rn = function () {},
        Sn = function (a, b, c) {}
      var Tn = function (a, b) {
        var c,
          d = z.GooglebQhCsO
        d || ((d = {}), (z.GooglebQhCsO = d))
        c = d
        if (c[a]) return !1
        c[a] = []
        c[a][0] = b
        return !0
      }
      var Un = function (a, b, c) {
        var d = yi(a, 'fmt')
        if (b) {
          var e = yi(a, 'random'),
            f = yi(a, 'label') || ''
          if (!e) return !1
          var g = gk(
            decodeURIComponent(f.replace(/\+/g, ' ')) +
              ':' +
              decodeURIComponent(e.replace(/\+/g, ' '))
          )
          if (!Tn(g, b)) return !1
        }
        d && 4 != d && (a = Ai(a, 'rfmt', d))
        var l = Ai(a, 'fmt', 4)
        Hb(
          l,
          function () {
            z.google_noFurtherRedirects &&
              b &&
              b.call &&
              ((z.google_noFurtherRedirects = null), b())
          },
          void 0,
          c,
          C.getElementsByTagName('script')[0].parentElement || void 0
        )
        return !0
      }
      var ko = function () {
          this.h = {}
        },
        lo = function (a, b, c) {
          null != c && (a.h[b] = c)
        },
        mo = function (a) {
          return Object.keys(a.h)
            .map(function (b) {
              return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b])
            })
            .join('&')
        },
        oo = function (a, b, c, d) {}
      function qo(a, b) {
        if (a) {
          var c = '' + a
          0 !== c.indexOf('http://') &&
            0 !== c.indexOf('https://') &&
            (c = 'https://' + c)
          '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1))
          return Bf('' + c + b).href
        }
      }
      function ro() {
        return !!ke.Zd && 'SGTM_TOKEN' !== ke.Zd.split('@@').join('')
      }
      var to = function (a, b, c, d) {
          if (!so() && !ki(a)) {
            var e = c ? '/gtag/js' : '/gtm.js',
              f = '?id=' + encodeURIComponent(a) + '&l=' + ke.ca,
              g = 0 === a.indexOf('GTM-')
            g || (f += '&cx=c')
            var l = ro()
            l && (f += '&sign=' + ke.Zd)
            var m = te || ve ? qo(b, e + f) : void 0
            if (!m) {
              var n = ke.qd + e
              l &&
                Bb &&
                g &&
                (n = Bb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0])
              m = dl('https://', 'http://', n + f)
            }
            var p = li()
            fi().container[a] = { state: 1, context: d, parent: p }
            Hb(m)
          }
        },
        uo = function (a, b, c) {
          var d
          if ((d = !so())) {
            var e = fi().destination[a]
            d = !(e && e.state)
          }
          if (d)
            if (mi())
              (fi().destination[a] = {
                state: 0,
                transportUrl: b,
                context: c,
                parent: li()
              }),
                J(91)
            else {
              var f =
                '/gtag/destination?id=' +
                encodeURIComponent(a) +
                '&l=' +
                ke.ca +
                '&cx=c'
              ro() && (f += '&sign=' + ke.Zd)
              var g = te || ve ? qo(b, f) : void 0
              g || (g = dl('https://', 'http://', ke.qd + f))
              fi().destination[a] = { state: 1, context: c, parent: li() }
              Hb(g)
            }
        }
      function so() {
        if (di()) {
          return !0
        }
        return !1
      }
      var vo = new RegExp(
          /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
        ),
        wo = {
          cl: ['ecl'],
          customPixels: ['nonGooglePixels'],
          ecl: ['cl'],
          ehl: ['hl'],
          hl: ['ehl'],
          html: [
            'customScripts',
            'customPixels',
            'nonGooglePixels',
            'nonGoogleScripts',
            'nonGoogleIframes'
          ],
          customScripts: [
            'html',
            'customPixels',
            'nonGooglePixels',
            'nonGoogleScripts',
            'nonGoogleIframes'
          ],
          nonGooglePixels: [],
          nonGoogleScripts: ['nonGooglePixels'],
          nonGoogleIframes: ['nonGooglePixels']
        },
        xo = {
          cl: ['ecl'],
          customPixels: ['customScripts', 'html'],
          ecl: ['cl'],
          ehl: ['hl'],
          hl: ['ehl'],
          html: ['customScripts'],
          customScripts: ['html'],
          nonGooglePixels: [
            'customPixels',
            'customScripts',
            'html',
            'nonGoogleScripts',
            'nonGoogleIframes'
          ],
          nonGoogleScripts: ['customScripts', 'html'],
          nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts']
        },
        yo =
          'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
            ' '
          ),
        Bo = function (a) {
          var b = Le('gtm.allowlist') || Le('gtm.whitelist')
          b && J(9)
          re && (b = ['google', 'gtagfl', 'lcl', 'zone'])
          zo() &&
            (re ? J(116) : J(117),
            Ao &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log('GTM blocked. See go/13687728.')))
          var c = b && La(Ca(b), wo),
            d = Le('gtm.blocklist') || Le('gtm.blacklist')
          d || ((d = Le('tagTypeBlacklist')) && J(3))
          d ? J(8) : (d = [])
          zo() &&
            ((d = Ca(d)),
            d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'))
          0 <= Ca(d).indexOf('google') && J(2)
          var e = d && La(Ca(d), xo),
            f = {}
          return function (g) {
            var l = g && g[$b.Qa]
            if (!l || 'string' != typeof l) return !0
            l = l.replace(/^_*/, '')
            if (void 0 !== f[l]) return f[l]
            var m = De[l] || [],
              n = a(l, m)
            if (b) {
              var p
              if ((p = n))
                a: {
                  if (0 > c.indexOf(l))
                    if (m && 0 < m.length)
                      for (var q = 0; q < m.length; q++) {
                        if (0 > c.indexOf(m[q])) {
                          J(11)
                          p = !1
                          break a
                        }
                      }
                    else {
                      p = !1
                      break a
                    }
                  p = !0
                }
              n = p
            }
            var t = !1
            if (d) {
              var r = 0 <= e.indexOf(l)
              if (r) t = r
              else {
                var u = xa(e, m || [])
                u && J(10)
                t = u
              }
            }
            var v = !n || t
            v ||
              !(0 <= m.indexOf('sandboxedScripts')) ||
              (c && -1 !== c.indexOf('sandboxedScripts')) ||
              (v = xa(e, yo))
            return (f[l] = v)
          }
        },
        Ao = !1
      var zo = function () {
        return vo.test(z.location && z.location.hostname)
      }
      var Co = { initialized: 11, complete: 12, interactive: 13 },
        Do = {},
        Eo = Object.freeze(((Do[N.g.Ka] = !0), Do)),
        Fo =
          0 <= C.location.search.indexOf('?gtm_diagnostics=') ||
          0 <= C.location.search.indexOf('&gtm_diagnostics='),
        Ho = function (a, b, c) {
          if (jj && 'config' === a && !(1 < al(b).K.length)) {
            var d,
              e = Cb('google_tag_data', {})
            e.td || (e.td = {})
            d = e.td
            var f = G(c.J)
            G(c.h, f)
            var g = [],
              l
            for (l in d) {
              var m = Go(d[l], f)
              m.length && (Fo && console.log(m), g.push(l))
            }
            if (g.length) {
              if (g.length) {
                var n = b + '*' + g.join('.')
                sj = sj ? sj + '!' + n : '&tdc=' + n
              }
              Ya('TAGGING', Co[C.readyState] || 14)
            }
            d[b] = f
          }
        }
      function Io(a, b) {
        var c = {},
          d
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0)
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0)
        return c
      }
      function Go(a, b, c, d) {
        c = void 0 === c ? {} : c
        d = void 0 === d ? '' : d
        if (a === b) return []
        var e = function (q, t) {
            var r = t[q]
            return void 0 === r ? Eo[q] : r
          },
          f
        for (f in Io(a, b)) {
          var g = (d ? d + '.' : '') + f,
            l = e(f, a),
            m = e(f, b),
            n = 'object' === Wb(l) || 'array' === Wb(l),
            p = 'object' === Wb(m) || 'array' === Wb(m)
          if (n && p) Go(l, m, c, g)
          else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
      }
      var Jo = !1,
        Ko = 0,
        Lo = []
      function Mo(a) {
        if (!Jo) {
          var b = C.createEventObject,
            c = 'complete' == C.readyState,
            d = 'interactive' == C.readyState
          if (!a || 'readystatechange' != a.type || c || (!b && d)) {
            Jo = !0
            for (var e = 0; e < Lo.length; e++) E(Lo[e])
          }
          Lo.push = function () {
            for (var f = 0; f < arguments.length; f++) E(arguments[f])
            return 0
          }
        }
      }
      function No() {
        if (!Jo && 140 > Ko) {
          Ko++
          try {
            C.documentElement.doScroll('left'), Mo()
          } catch (a) {
            z.setTimeout(No, 50)
          }
        }
      }
      var Oo = function (a) {
        Jo ? a() : Lo.push(a)
      }
      var Po = function (a, b) {
        return {
          entityType: 1,
          indexInOriginContainer: a,
          nameInOriginContainer: b,
          originContainerId: R.C
        }
      }
      var Ro = function (a, b) {
          this.h = !1
          this.J = []
          this.M = { tags: [] }
          this.X = !1
          this.m = this.B = 0
          Qo(this, a, b)
        },
        So = function (a, b, c, d) {
          if (oe.hasOwnProperty(b) || '__zone' === b) return -1
          var e = {}
          Yb(d) && (e = G(d, e))
          e.id = c
          e.status = 'timeout'
          return a.M.tags.push(e) - 1
        },
        To = function (a, b, c, d) {
          var e = a.M.tags[b]
          e && ((e.status = c), (e.executionTime = d))
        },
        Uo = function (a) {
          if (!a.h) {
            for (var b = a.J, c = 0; c < b.length; c++) b[c]()
            a.h = !0
            a.J.length = 0
          }
        },
        Qo = function (a, b, c) {
          void 0 !== b && Vo(a, b)
          c &&
            z.setTimeout(function () {
              return Uo(a)
            }, Number(c))
        },
        Vo = function (a, b) {
          var c = Ha(function () {
            return E(function () {
              b(R.C, a.M)
            })
          })
          a.h ? c() : a.J.push(c)
        },
        Wo = function (a) {
          a.B++
          return Ha(function () {
            a.m++
            a.X && a.m >= a.B && Uo(a)
          })
        },
        Xo = function (a) {
          a.X = !0
          a.m >= a.B && Uo(a)
        }
      var Yo = {},
        Zo = function () {
          return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        $o = !1
      var ap = function (a) {
          z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || 'ga')
          var b = z.GoogleAnalyticsObject
          if (z[b]) z.hasOwnProperty(b)
          else {
            var c = function () {
              c.q = c.q || []
              c.q.push(arguments)
            }
            c.l = Number(Ea())
            z[b] = c
          }
          return z[b]
        },
        bp = function (a) {
          if (of()) {
            var b = Zo()
            b(a + 'require', 'linker')
            b(a + 'linker:passthrough', !0)
          }
        }
      function cp() {
        return z.GoogleAnalyticsObject || 'ga'
      }
      var dp = function (a) {},
        ep = function (a, b) {
          return function () {
            var c = Zo(),
              d = c && c.getByName && c.getByName(a)
            if (d) {
              var e = d.get('sendHitTask')
              d.set('sendHitTask', function (f) {
                var g = f.get('hitPayload'),
                  l = f.get('hitCallback'),
                  m = 0 > g.indexOf('&tid=' + b)
                m &&
                  (f.set(
                    'hitPayload',
                    g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b),
                    !0
                  ),
                  f.set('hitCallback', void 0, !0))
                e(f)
                m &&
                  (f.set('hitPayload', g, !0),
                  f.set('hitCallback', l, !0),
                  f.set('_x_19', void 0, !0),
                  e(f))
              })
            }
          }
        }
      function jp(a, b, c, d) {
        var e = zc[a],
          f = kp(a, b, c, d)
        if (!f) return null
        var g = Ic(e[$b.hh], c, [])
        if (g && g.length) {
          var l = g[0]
          f = jp(
            l.index,
            { N: f, P: 1 === l.wh ? b.terminate : f, terminate: b.terminate },
            c,
            d
          )
        }
        return f
      }
      function kp(a, b, c, d) {
        function e() {
          if (f[$b.Wi]) l()
          else {
            var w = Jc(f, c, []),
              y = w[$b.Yh]
            if (null != y)
              for (var x = 0; x < y.length; x++)
                if (!Zh(y[x])) {
                  l()
                  return
                }
            var A = So(c.Fb, String(f[$b.Qa]), Number(f[$b.Nc]), w[$b.Xi]),
              B = !1
            w.vtp_gtmOnSuccess = function () {
              if (!B) {
                B = !0
                var F = Fa() - H
                bk(c.id, zc[a], '5')
                To(c.Fb, A, 'success', F)
                P(70) && Sn(c, f, jn.F.kh)
                g()
              }
            }
            w.vtp_gtmOnFailure = function () {
              if (!B) {
                B = !0
                var F = Fa() - H
                bk(c.id, zc[a], '6')
                To(c.Fb, A, 'failure', F)
                P(70) && Sn(c, f, jn.F.jh)
                l()
              }
            }
            w.vtp_gtmTagId = f.tag_id
            w.vtp_gtmEventId = c.id
            c.priorityId && (w.vtp_gtmPriorityId = c.priorityId)
            bk(c.id, f, '1')
            var D = function () {
              var F = Fa() - H
              bk(c.id, f, '7')
              To(c.Fb, A, 'exception', F)
              P(70) && Sn(c, f, jn.F.ih)
              B || ((B = !0), l())
            }
            if (P(70)) {
              var I = on(jn.F.Xb, R.C, c.id, Number(f[$b.Nc]), c.name, dj(f))
              pn(I)
            }
            var H = Fa()
            try {
              Hc(w, { event: c, index: a, type: 1 })
            } catch (F) {
              D(F)
            }
            P(70) && Sn(c, f, jn.F.lh)
          }
        }
        var f = zc[a],
          g = b.N,
          l = b.P,
          m = b.terminate
        if (c.Cf(f)) return null
        var n = Ic(f[$b.mh], c, [])
        if (n && n.length) {
          var p = n[0],
            q = jp(p.index, { N: g, P: l, terminate: m }, c, d)
          if (!q) return null
          g = q
          l = 2 === p.wh ? m : q
        }
        if (f[$b.dh] || f[$b.Zi]) {
          var t = f[$b.dh] ? Ac : c.Dk,
            r = g,
            u = l
          if (!t[a]) {
            e = Ha(e)
            var v = lp(a, t, e)
            g = v.N
            l = v.P
          }
          return function () {
            t[a](r, u)
          }
        }
        return e
      }
      function lp(a, b, c) {
        var d = [],
          e = []
        b[a] = mp(d, e, c)
        return {
          N: function () {
            b[a] = np
            for (var f = 0; f < d.length; f++) d[f]()
          },
          P: function () {
            b[a] = op
            for (var f = 0; f < e.length; f++) e[f]()
          }
        }
      }
      function mp(a, b, c) {
        return function (d, e) {
          a.push(d)
          b.push(e)
          c()
        }
      }
      function np(a) {
        a()
      }
      function op(a, b) {
        b()
      }
      var Up = function (a, b) {
          return 1 === arguments.length ? Gp('config', a) : Gp('config', a, b)
        },
        Vp = function (a, b, c) {
          c = c || {}
          c[N.g.Eb] = a
          return Gp('event', b, c)
        }
      function Gp(a) {
        return arguments
      }
      var Wp = function () {
        this.h = []
        this.m = []
      }
      Wp.prototype.enqueue = function (a, b, c) {
        var d = this.h.length + 1
        a['gtm.uniqueEventId'] = b
        a['gtm.priorityId'] = d
        c.eventId = b
        c.fromContainerExecution = !0
        c.priorityId = d
        var e = {
          message: a,
          notBeforeEventId: b,
          priorityId: d,
          messageContext: c
        }
        this.h.push(e)
        for (var f = 0; f < this.m.length; f++)
          try {
            this.m[f](e)
          } catch (g) {}
      }
      Wp.prototype.listen = function (a) {
        this.m.push(a)
      }
      Wp.prototype.get = function () {
        for (var a = {}, b = 0; b < this.h.length; b++) {
          var c = this.h[b],
            d = a[c.notBeforeEventId]
          d || ((d = []), (a[c.notBeforeEventId] = d))
          d.push(c)
        }
        return a
      }
      Wp.prototype.prune = function (a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
          var e = this.h[d]
          e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c
        return b
      }
      var Yp = function (a, b, c) {
          Xp().enqueue(a, b, c)
        },
        $p = function () {
          var a = Zp
          Xp().listen(a)
        }
      function Xp() {
        var a = le.mb
        a || ((a = new Wp()), (le.mb = a))
        return a
      }
      var hq = function (a) {
          var b = le.zones
          return b
            ? b.getIsAllowedFn(hi(), a)
            : function () {
                return !0
              }
        },
        iq = function (a) {
          var b = le.zones
          return b ? b.isActive(hi(), a) : !0
        }
      var lq = function (a, b) {
        for (var c = [], d = 0; d < zc.length; d++)
          if (a[d]) {
            var e = zc[d]
            var f = Wo(b.Fb)
            try {
              var g = jp(d, { N: f, P: f, terminate: f }, b, d)
              if (g) {
                var l = c,
                  m = l.push,
                  n = d,
                  p = e['function']
                if (!p) throw 'Error: No function name given for function call.'
                var q = Bc[p]
                m.call(l, {
                  Qh: n,
                  Hh: q ? q.priorityOverride || 0 : 0,
                  execute: g
                })
              } else jq(d, b), f()
            } catch (r) {
              f()
            }
          }
        c.sort(kq)
        for (var t = 0; t < c.length; t++) c[t].execute()
        return 0 < c.length
      }
      function kq(a, b) {
        var c,
          d = b.Hh,
          e = a.Hh
        c = d > e ? 1 : d < e ? -1 : 0
        var f
        if (0 !== c) f = c
        else {
          var g = a.Qh,
            l = b.Qh
          f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
      }
      function jq(a, b) {
        if (jj) {
          var c = function (d) {
            var e = b.Cf(zc[d]) ? '3' : '4',
              f = Ic(zc[d][$b.hh], b, [])
            f && f.length && c(f[0].index)
            bk(b.id, zc[d], e)
            var g = Ic(zc[d][$b.mh], b, [])
            g && g.length && c(g[0].index)
          }
          c(a)
        }
      }
      var oq = !1,
        mq
      var tq = function (a) {
        var b = a['gtm.uniqueEventId'],
          c = a['gtm.priorityId'],
          d = a.event
        if (P(70)) {
          var e = on(jn.F.Gc, R.C, b, void 0, d)
          pn(e)
        }
        if ('gtm.js' === d) {
          if (oq) return !1
          oq = !0
        }
        var f,
          g = !1
        if (iq(b)) f = hq(b)
        else {
          if ('gtm.js' !== d && 'gtm.init' !== d && 'gtm.init_consent' !== d)
            return !1
          g = !0
          f = hq(Number.MAX_SAFE_INTEGER)
        }
        ak(b, d)
        var l = a.eventCallback,
          m = a.eventTimeout,
          n = {
            id: b,
            priorityId: c,
            name: d,
            Cf: Bo(f),
            Dk: [],
            Ch: function () {
              J(6)
              Ya('HEALTH', 0)
            },
            qh: pq(),
            rh: qq(b),
            Fb: new Ro(function () {
              if (P(70)) {
                var v = on(jn.F.Ug, R.C, b, void 0, d)
                if (pn(v)) {
                  var w = on(jn.F.Gc, R.C, b, void 0, d)
                  qn(v, w)
                }
                if ('gtm.load' === d) {
                  var y = on(jn.F.ag, R.C)
                  if (pn(y)) {
                    var x = on(jn.F.xe, R.C)
                    qn(y, x)
                  }
                  Rn()
                }
              }
              l && l.apply(l, [].slice.call(arguments, 0))
            }, m)
          },
          p = Nc(n)
        g && (p = rq(p))
        if (P(70)) {
          var q = on(jn.F.Vg, R.C, b, void 0, d)
          if (pn(q)) {
            var t = on(jn.F.Gc, R.C, b, void 0, d)
            qn(q, t)
          }
        }
        var r = lq(p, n),
          u = !1
        Xo(n.Fb)
        ;('gtm.js' !== d && 'gtm.sync' !== d) || dp(R.C)
        return sq(p, r) || u
      }
      function qq(a) {
        return function (b) {
          jj && (Zb(b) || dk(a, 'input', b))
        }
      }
      function pq() {
        var a = {}
        a.event = Pe('event', 1)
        a.ecommerce = Pe('ecommerce', 1)
        a.gtm = Pe('gtm')
        a.eventModel = Pe('eventModel')
        return a
      }
      function rq(a) {
        for (var b = [], c = 0; c < a.length; c++)
          if (a[c]) {
            var d = String(zc[c][$b.Qa])
            if (ne[d] || void 0 !== zc[c][$b.aj] || Ee[d]) b[c] = !0
            P(58) ||
              (0 !== zc[c][$b.Qa].indexOf('__ccd') &&
                0 !== zc[c][$b.Qa].indexOf('__ogt') &&
                '__set_product_settings' !== zc[c][$b.Qa]) ||
              (b[c] = !0)
          }
        return b
      }
      function sq(a, b) {
        if (!b) return b
        for (var c = 0; c < a.length; c++)
          if (a[c] && zc[c] && !oe[String(zc[c][$b.Qa])]) return !0
        return !1
      }
      var vq = function (a, b, c, d) {
          uq.push('event', [b, a], c, d)
        },
        wq = function (a, b, c, d) {
          uq.push('get', [a, b], c, d)
        },
        xq = function () {
          this.status = 1
          this.J = {}
          this.h = {}
          this.M = {}
          this.X = null
          this.B = {}
          this.m = !1
        },
        yq = function (a, b, c, d) {
          var e = Fa()
          this.type = a
          this.m = e
          this.Z = b || ''
          this.h = c
          this.messageContext = d
        },
        zq = function () {
          this.m = {}
          this.B = {}
          this.h = []
        },
        Aq = function (a, b) {
          var c = al(b)
          return (a.m[c.U] = a.m[c.U] || new xq())
        },
        Bq = function (a, b, c, d) {
          if (d.Z) {
            var e = Aq(a, d.Z),
              f = e.X
            if (f) {
              var g = G(c),
                l = G(e.J[d.Z]),
                m = G(e.B),
                n = G(e.h),
                p = G(a.B),
                q = {}
              if (jj)
                try {
                  q = G(Ie)
                } catch (v) {
                  J(72)
                }
              var t = al(d.Z).prefix,
                r = function (v) {
                  ck(d.messageContext.eventId, t, v)
                  var w = g[N.g.Sb]
                  w && E(w)
                },
                u = am(
                  Zl(
                    Yl(
                      Xl(
                        Vl(
                          Ul(
                            Wl(
                              Tl(
                                Sl(
                                  Rl(
                                    new Ql(
                                      d.messageContext.eventId,
                                      d.messageContext.priorityId
                                    ),
                                    g
                                  ),
                                  l
                                ),
                                m
                              ),
                              n
                            ),
                            p
                          ),
                          q
                        ),
                        d.messageContext.eventMetadata
                      ),
                      function () {
                        if (r) {
                          var v = r
                          r = void 0
                          v('2')
                        }
                      }
                    ),
                    function () {
                      if (r) {
                        var v = r
                        r = void 0
                        v('3')
                      }
                    }
                  )
                )
              try {
                ck(d.messageContext.eventId, t, '1'),
                  Ho(d.type, d.Z, u),
                  f(d.Z, b, d.m, u)
              } catch (v) {
                ck(d.messageContext.eventId, t, '4')
              }
            }
          }
        }
      zq.prototype.register = function (a, b, c) {
        var d = Aq(this, a)
        3 !== d.status &&
          ((d.X = b), (d.status = 3), c && (G(d.h, c), (d.h = c)), this.flush())
      }
      zq.prototype.push = function (a, b, c, d) {
        if (void 0 !== c) {
          if (!al(c)) return
          if (c) {
            var e = al(c)
            e &&
              1 === Aq(this, c).status &&
              ((Aq(this, c).status = 2), this.push('require', [{}], e.U, {}))
          }
          Aq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new yq(a, c, b, d))
        d.deferrable || this.flush()
      }
      zq.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
          var f = this.h[0]
          if (f.messageContext.deferrable)
            !f.Z || Aq(this, f.Z).m
              ? ((f.messageContext.deferrable = !1), this.h.push(f))
              : c.push(f),
              this.h.shift()
          else {
            var g = void 0
            switch (f.type) {
              case 'require':
                g = Aq(this, f.Z)
                if (3 !== g.status && !a) {
                  this.h.push.apply(this.h, c)
                  return
                }
                break
              case 'set':
                k(f.h[0], function (t, r) {
                  G(Ma(t, r), b.B)
                })
                break
              case 'config':
                g = Aq(this, f.Z)
                e.fb = {}
                k(
                  f.h[0],
                  (function (t) {
                    return function (r, u) {
                      G(Ma(r, u), t.fb)
                    }
                  })(e)
                )
                var l = !!e.fb[N.g.Ec]
                delete e.fb[N.g.Ec]
                var m = al(f.Z),
                  n = m.U === m.id
                l || (n ? (g.B = {}) : (g.J[f.Z] = {}))
                ;(g.m && l) || Bq(this, N.g.ma, e.fb, f)
                g.m = !0
                n ? G(e.fb, g.B) : (G(e.fb, g.J[f.Z]), J(70))
                d = !0
                break
              case 'event':
                g = Aq(this, f.Z)
                e.jd = {}
                k(
                  f.h[0],
                  (function (t) {
                    return function (r, u) {
                      G(Ma(r, u), t.jd)
                    }
                  })(e)
                )
                Bq(this, f.h[1], e.jd, f)
                break
              case 'get':
                g = Aq(this, f.Z)
                var p = {},
                  q = ((p[N.g.Ja] = f.h[0]), (p[N.g.Ua] = f.h[1]), p)
                Bq(this, N.g.Aa, q, f)
            }
            this.h.shift()
            Cq(this, f)
          }
          e = { fb: e.fb, jd: e.jd }
        }
        this.h.push.apply(this.h, c)
        d && this.flush()
      }
      var Cq = function (a, b) {
          if ('require' !== b.type)
            if (b.Z)
              for (var c = Aq(a, b.Z).M[b.type] || [], d = 0; d < c.length; d++)
                c[d]()
            else
              for (var e in a.m)
                if (a.m.hasOwnProperty(e)) {
                  var f = a.m[e]
                  if (f && f.M)
                    for (var g = f.M[b.type] || [], l = 0; l < g.length; l++)
                      g[l]()
                }
        },
        Dq = function (a, b) {
          var c = uq,
            d = G(b)
          G(Aq(c, a).h, d)
          Aq(c, a).h = d
        },
        uq = new zq()
      var Eq = {},
        Fq = {},
        Gq = function (a) {
          for (
            var b = [], c = [], d = {}, e = 0;
            e < a.length;
            d = { od: d.od, ld: d.ld }, e++
          ) {
            var f = a[e]
            if (0 <= f.indexOf('-'))
              (d.od = al(f)),
                d.od &&
                  (ta(
                    ii(),
                    (function (p) {
                      return function (q) {
                        return p.od.U === q
                      }
                    })(d)
                  )
                    ? b.push(f)
                    : c.push(f))
            else {
              var g = Eq[f] || []
              d.ld = {}
              g.forEach(
                (function (p) {
                  return function (q) {
                    return (p.ld[q] = !0)
                  }
                })(d)
              )
              for (var l = hi(), m = 0; m < l.length; m++)
                if (d.ld[l[m]]) {
                  b = b.concat(ii())
                  break
                }
              var n = Fq[f] || []
              n.length && (b = b.concat(n))
            }
          }
          return { bk: b, dk: c }
        },
        Hq = function (a) {
          k(Eq, function (b, c) {
            var d = c.indexOf(a)
            0 <= d && c.splice(d, 1)
          })
        },
        Iq = function (a) {
          k(Fq, function (b, c) {
            var d = c.indexOf(a)
            0 <= d && c.splice(d, 1)
          })
        }
      var Jq = 'HA GF G UA AW DC MC'.split(' '),
        Kq = !1,
        Lq = !1
      function Mq(a, b) {
        a.hasOwnProperty('gtm.uniqueEventId') ||
          Object.defineProperty(a, 'gtm.uniqueEventId', { value: Fe() })
        b.eventId = a['gtm.uniqueEventId']
        b.priorityId = a['gtm.priorityId']
        return { eventId: b.eventId, priorityId: b.priorityId }
      }
      var Nq = {
          config: function (a, b) {
            var c = Mq(a, b)
            if (!(2 > a.length) && h(a[1])) {
              var d = {}
              if (2 < a.length) {
                if ((void 0 != a[2] && !Yb(a[2])) || 3 < a.length) return
                d = a[2]
              }
              var e = al(a[1])
              if (e) {
                ak(c.eventId, 'gtag.config')
                var f = e.U,
                  g = e.id !== f
                if (g ? -1 === ii().indexOf(f) : -1 === hi().indexOf(f)) {
                  if (!P(61) || !d[N.g.Qd]) {
                    var l = d[N.g.va] || uq.B[N.g.va]
                    g
                      ? uo(f, l, {
                          source: 2,
                          fromContainerExecution: b.fromContainerExecution
                        })
                      : to(f, l, !0, {
                          source: 2,
                          fromContainerExecution: b.fromContainerExecution
                        })
                  }
                } else {
                  if (qe && !g && !d[N.g.Ec]) {
                    var m = Lq
                    Lq = !0
                    if (m) return
                  }
                  Kq || J(43)
                  if (!b.noTargetGroup)
                    if (g) {
                      Iq(e.id)
                      var n = e.id,
                        p = d[N.g.Od] || 'default'
                      p = String(p).split(',')
                      for (var q = 0; q < p.length; q++) {
                        var t = Fq[p[q]] || []
                        Fq[p[q]] = t
                        0 > t.indexOf(n) && t.push(n)
                      }
                    } else {
                      Hq(e.id)
                      var r = e.id,
                        u = d[N.g.Od] || 'default'
                      u = u.toString().split(',')
                      for (var v = 0; v < u.length; v++) {
                        var w = Eq[u[v]] || []
                        Eq[u[v]] = w
                        0 > w.indexOf(r) && w.push(r)
                      }
                    }
                  delete d[N.g.Od]
                  var y = b.eventMetadata || {}
                  y.hasOwnProperty('is_external_event') ||
                    (y.is_external_event = !b.fromContainerExecution)
                  b.eventMetadata = y
                  delete d[N.g.Sb]
                  for (var x = g ? [e.id] : ii(), A = 0; A < x.length; A++) {
                    var B = G(b)
                    uq.push('config', [d], x[A], B)
                  }
                }
              }
            }
          },
          consent: function (a, b) {
            if (3 === a.length) {
              J(39)
              var c = Mq(a, b),
                d = a[1]
              'default' === d
                ? Xh(a[2])
                : 'update' === d
                ? Yh(a[2], c)
                : 'declare' === d && b.fromContainerExecution && Wh(a[2])
            }
          },
          event: function (a, b) {
            var c = a[1]
            if (!(2 > a.length) && h(c)) {
              var d
              if (2 < a.length) {
                if ((!Yb(a[2]) && void 0 != a[2]) || 3 < a.length) return
                d = a[2]
              }
              var e = d,
                f = {},
                g = ((f.event = c), f)
              e &&
                ((g.eventModel = G(e)),
                e[N.g.Sb] && (g.eventCallback = e[N.g.Sb]),
                e[N.g.Kd] && (g.eventTimeout = e[N.g.Kd]))
              var l = Mq(a, b),
                m = l.eventId,
                n = l.priorityId
              g['gtm.uniqueEventId'] = m
              n && (g['gtm.priorityId'] = n)
              if ('optimize.callback' === c)
                return (g.eventModel = g.eventModel || {}), g
              var p
              var q = d,
                t = q && q[N.g.Eb]
              void 0 === t &&
                ((t = Le(N.g.Eb, 2)), void 0 === t && (t = 'default'))
              if (h(t) || sa(t)) {
                var r = t.toString().replace(/\s+/g, '').split(','),
                  u = Gq(r),
                  v = u.bk,
                  w = u.dk
                if (w.length)
                  for (
                    var y = (q && q[N.g.va]) || uq.B[N.g.va], x = 0;
                    x < w.length;
                    x++
                  ) {
                    var A = al(w[x])
                    A &&
                      uo(A.U, y, {
                        source: 3,
                        fromContainerExecution: b.fromContainerExecution
                      })
                  }
                p = cl(v)
              } else p = void 0
              var B = p
              if (B) {
                ak(m, c)
                for (var D = [], I = 0; I < B.length; I++) {
                  var H = B[I],
                    F = G(b)
                  if (-1 !== Jq.indexOf(H.prefix)) {
                    var L = G(d),
                      K = F.eventMetadata || {}
                    K.hasOwnProperty('is_external_event') ||
                      (K.is_external_event = !F.fromContainerExecution)
                    F.eventMetadata = K
                    delete L[N.g.Sb]
                    vq(c, L, H.id, F)
                  }
                  D.push(H.id)
                }
                g.eventModel = g.eventModel || {}
                0 < B.length
                  ? (g.eventModel[N.g.Eb] = D.join())
                  : delete g.eventModel[N.g.Eb]
                Kq || J(43)
                P(101) &&
                  void 0 === b.noGtmEvent &&
                  b.eventMetadata.syn_or_mod &&
                  (b.noGtmEvent = !0)
                return b.noGtmEvent ? void 0 : g
              }
            }
          },
          get: function (a, b) {
            J(53)
            if (4 === a.length && h(a[1]) && h(a[2]) && qa(a[3])) {
              var c = al(a[1]),
                d = String(a[2]),
                e = a[3]
              if (c) {
                Kq || J(43)
                var f = uq.B[N.g.va]
                if (
                  !ta(ii(), function (l) {
                    return c.U === l
                  })
                )
                  uo(c.U, f, {
                    source: 4,
                    fromContainerExecution: b.fromContainerExecution
                  })
                else if (-1 !== Jq.indexOf(c.prefix)) {
                  Mq(a, b)
                  var g = {}
                  Sh(G(((g[N.g.Ja] = d), (g[N.g.Ua] = e), g)))
                  wq(
                    d,
                    function (l) {
                      E(function () {
                        return e(l)
                      })
                    },
                    c.id,
                    b
                  )
                }
              }
            }
          },
          js: function (a, b) {
            if (2 == a.length && a[1].getTime) {
              Kq = !0
              var c = Mq(a, b),
                d = c.eventId,
                e = c.priorityId,
                f = {}
              return (
                (f.event = 'gtm.js'),
                (f['gtm.start'] = a[1].getTime()),
                (f['gtm.uniqueEventId'] = d),
                (f['gtm.priorityId'] = e),
                f
              )
            }
          },
          policy: function () {},
          set: function (a, b) {
            var c
            2 == a.length && Yb(a[1])
              ? (c = G(a[1]))
              : 3 == a.length &&
                h(a[1]) &&
                ((c = {}),
                Yb(a[2]) || sa(a[2]) ? (c[a[1]] = G(a[2])) : (c[a[1]] = a[2]))
            if (c) {
              var d = Mq(a, b),
                e = d.eventId,
                f = d.priorityId
              G(c)
              var g = G(c)
              uq.push('set', [g], void 0, b)
              c['gtm.uniqueEventId'] = e
              f && (c['gtm.priorityId'] = f)
              P(30) && delete c.event
              b.overwriteModelFields = !0
              return c
            }
          }
        },
        Oq = { policy: !0 }
      var Pq = function (a) {
          var b = z[ke.ca].hide
          if (b && void 0 !== b[a] && b.end) {
            b[a] = !1
            var c = !0,
              d
            for (d in b)
              if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1
                break
              }
            c && (b.end(), (b.end = null))
          }
        },
        Qq = function (a) {
          var b = z[ke.ca],
            c = b && b.hide
          c && c.end && (c[a] = !0)
        }
      var Rq = !1,
        Sq = []
      function Tq() {
        if (!Rq) {
          Rq = !0
          for (var a = 0; a < Sq.length; a++) E(Sq[a])
        }
      }
      var Uq = function (a) {
        Rq ? E(a) : Sq.push(a)
      }
      var kr = function (a) {
        if (jr(a)) return a
        this.h = a
      }
      kr.prototype.getUntrustedMessageValue = function () {
        return this.h
      }
      var jr = function (a) {
        return !a || 'object' !== Wb(a) || Yb(a)
          ? !1
          : 'getUntrustedMessageValue' in a
      }
      kr.prototype.getUntrustedMessageValue =
        kr.prototype.getUntrustedMessageValue
      var lr = 0,
        mr = {},
        nr = [],
        or = [],
        pr = !1,
        qr = !1
      function rr(a, b) {
        return (
          a.messageContext.eventId - b.messageContext.eventId ||
          a.messageContext.priorityId - b.messageContext.priorityId
        )
      }
      var sr = function (a) {
          return z[ke.ca].push(a)
        },
        tr = function (a, b) {
          var c = le[ke.ca],
            d = c ? c.subscribers : 1,
            e = 0,
            f = !1,
            g = void 0
          b &&
            (g = z.setTimeout(function () {
              f || ((f = !0), a())
              g = void 0
            }, b))
          return function () {
            ++e === d &&
              (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)))
          }
        }
      function ur(a, b) {
        var c = a._clear || b.overwriteModelFields
        k(a, function (e, f) {
          '_clear' !== e && (c && Oe(e), Oe(e, f))
        })
        Ae || (Ae = a['gtm.start'])
        var d = a['gtm.uniqueEventId']
        if (!a.event) return !1
        'number' !== typeof d &&
          ((d = Fe()), (a['gtm.uniqueEventId'] = d), Oe('gtm.uniqueEventId', d))
        return tq(a)
      }
      function vr(a) {
        if (null == a || 'object' !== typeof a) return !1
        if (a.event) return !0
        if (za(a)) {
          var b = a[0]
          if ('config' === b || 'event' === b || 'js' === b || 'get' === b)
            return !0
        }
        return !1
      }
      function wr() {
        var a
        if (or.length) a = or.shift()
        else if (nr.length) a = nr.shift()
        else return
        var b
        var c = a
        if (pr || !vr(c.message)) b = c
        else {
          pr = !0
          var d = c.message['gtm.uniqueEventId']
          'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = Fe())
          var e = {},
            f = {
              message:
                ((e.event = 'gtm.init_consent'),
                (e['gtm.uniqueEventId'] = d - 2),
                e),
              messageContext: { eventId: d - 2 }
            },
            g = {},
            l = {
              message:
                ((g.event = 'gtm.init'), (g['gtm.uniqueEventId'] = d - 1), g),
              messageContext: { eventId: d - 1 }
            }
          nr.unshift(l, c)
          if (jj && R.C) {
            var m
            if (R.Ic) {
              var n = R.C,
                p = fi().destination[n]
              m = p && p.context
            } else {
              var q = R.C,
                t = fi().container[q]
              m = t && t.context
            }
            var r = m,
              u,
              v = Bf(z.location.href)
            u = v.hostname + v.pathname
            var w = r && r.fromContainerExecution,
              y = r && r.source,
              x = R.C,
              A = R.jb,
              B = R.Ic
            uj || (uj = u)
            tj.push(
              x +
                ';' +
                A +
                ';' +
                (w ? 1 : 0) +
                ';' +
                (y || 0) +
                ';' +
                (B ? 1 : 0)
            )
          }
          b = f
        }
        return b
      }
      function xr() {
        for (var a = !1, b; !qr && (b = wr()); ) {
          qr = !0
          delete Ie.eventModel
          Ke()
          var c = b,
            d = c.message,
            e = c.messageContext
          if (null == d) qr = !1
          else {
            if (e.fromContainerExecution)
              for (
                var f = [
                    'gtm.allowlist',
                    'gtm.blocklist',
                    'gtm.whitelist',
                    'gtm.blacklist',
                    'tagTypeBlacklist'
                  ],
                  g = 0;
                g < f.length;
                g++
              ) {
                var l = f[g],
                  m = Le(l, 1)
                if (sa(m) || Yb(m)) m = G(m)
                Je[l] = m
              }
            try {
              if (qa(d))
                try {
                  d.call(Me)
                } catch (D) {}
              else if (sa(d)) {
                var n = d
                if (h(n[0])) {
                  var p = n[0].split('.'),
                    q = p.pop(),
                    t = n.slice(1),
                    r = Le(p.join('.'), 2)
                  if (null != r)
                    try {
                      r[q].apply(r, t)
                    } catch (D) {}
                }
              } else {
                var u = void 0,
                  v = !1
                if (za(d)) {
                  a: {
                    if (d.length && h(d[0])) {
                      var w = Nq[d[0]]
                      if (w && (!e.fromContainerExecution || !Oq[d[0]])) {
                        u = w(d, e)
                        break a
                      }
                    }
                    u = void 0
                  }
                  ;(v = u && 'set' === d[0] && !!u.event) && J(101)
                } else u = d
                if (u) {
                  var y = ur(u, e)
                  a = y || a
                  v && y && J(113)
                }
              }
            } finally {
              e.fromContainerExecution && Ke(!0)
              var x = d['gtm.uniqueEventId']
              if ('number' === typeof x) {
                for (var A = mr[String(x)] || [], B = 0; B < A.length; B++)
                  or.push(yr(A[B]))
                A.length && or.sort(rr)
                delete mr[String(x)]
                x > lr && (lr = x)
              }
              qr = !1
            }
          }
        }
        return !a
      }
      function zr() {
        if (P(70)) {
          var a = on(jn.F.xe, R.C)
          pn(a)
          if (Ar()) {
            var b = on(jn.F.dg, R.C)
            if (pn(b)) {
              var c = on(jn.F.ze, R.C)
              qn(b, c)
            }
          }
        }
        var d = xr()
        try {
          Pq(R.C)
        } catch (e) {}
        return d
      }
      function Zp(a) {
        if (lr < a.notBeforeEventId) {
          var b = String(a.notBeforeEventId)
          mr[b] = mr[b] || []
          mr[b].push(a)
        } else
          or.push(yr(a)),
            or.sort(rr),
            E(function () {
              qr || xr()
            })
      }
      function yr(a) {
        return { message: a.message, messageContext: a.messageContext }
      }
      var Br = function () {
          function a(g) {
            var l = {}
            if (jr(g)) {
              var m = g
              g = jr(m) ? m.getUntrustedMessageValue() : void 0
              l.fromContainerExecution = !0
            }
            return { message: g, messageContext: l }
          }
          var b = Cb(ke.ca, []),
            c = (le[ke.ca] = le[ke.ca] || {})
          !0 === c.pruned && J(83)
          mr = Xp().get()
          $p()
          Oo(function () {
            if (!c.gtmDom) {
              c.gtmDom = !0
              var g = {}
              b.push(((g.event = 'gtm.dom'), g))
            }
          })
          Uq(function () {
            if (!c.gtmLoad) {
              c.gtmLoad = !0
              var g = {}
              b.push(((g.event = 'gtm.load'), g))
            }
          })
          c.subscribers = (c.subscribers || 0) + 1
          var d = b.push
          b.push = function () {
            var g
            if (0 < le.SANDBOXED_JS_SEMAPHORE) {
              g = []
              for (var l = 0; l < arguments.length; l++)
                g[l] = new kr(arguments[l])
            } else g = [].slice.call(arguments, 0)
            var m = g.map(function (t) {
              return a(t)
            })
            nr.push.apply(nr, m)
            var n = d.apply(b, g),
              p = Math.max(100, Number('1000') || 300)
            if (this.length > p)
              for (J(4), c.pruned = !0; this.length > p; ) this.shift()
            var q = 'boolean' !== typeof n || n
            return xr() && q
          }
          var e = b.slice(0).map(function (g) {
            return a(g)
          })
          nr.push.apply(nr, e)
          if (Ar()) {
            if (P(70)) {
              var f = on(jn.F.ze, R.C)
              pn(f)
            }
            E(zr)
          }
        },
        Ar = function () {
          var a = !0
          return a
        }
      function Cr(a) {
        if (null == a || 0 === a.length) return !1
        var b = Number(a),
          c = Fa()
        return b < c + 3e5 && b > c - 9e5
      }
      function Dr(a) {
        return a && 0 === a.indexOf('pending:') ? Cr(a.substr(8)) : !1
      }
      var Ec = {}
      Ec.Vd = new String('undefined')
      var ds = z.clearTimeout,
        es = z.setTimeout,
        T = function (a, b, c, d) {
          if (di()) {
            b && E(b)
          } else return Hb(a, b, c, d)
        },
        fs = function () {
          return new Date()
        },
        gs = function () {
          return z.location.href
        },
        hs = function (a) {
          return zf(Bf(a), 'fragment')
        },
        is = function (a) {
          return Af(Bf(a))
        },
        js = function (a, b) {
          return Le(a, b || 2)
        },
        ks = function (a, b, c) {
          var d
          b
            ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = sr(a)))
            : (d = sr(a))
          return d
        },
        ls = function (a, b) {
          z[a] = b
        },
        U = function (a, b, c) {
          b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b)
          return z[a]
        },
        ms = function (a, b, c) {
          return Lf(a, b, void 0 === c ? !0 : !!c)
        },
        ns = function (a, b, c) {
          return 0 === Uf(a, b, c)
        },
        os = function (a, b) {
          if (di()) {
            b && E(b)
          } else Jb(a, b)
        },
        ps = function (a) {
          return !!Kr(a, 'init', !1)
        },
        qs = function (a) {
          Ir(a, 'init', !0)
        },
        rs = function (a, b, c) {
          jj && (Zb(a) || dk(c, b, a))
        }
      function Ps(a, b) {
        function c(g) {
          var l = Bf(g),
            m = zf(l, 'protocol'),
            n = zf(l, 'host', !0),
            p = zf(l, 'port'),
            q = zf(l, 'path').toLowerCase().replace(/\/$/, '')
          if (
            void 0 === m ||
            ('http' === m && '80' === p) ||
            ('https' === m && '443' === p)
          )
            (m = 'web'), (p = 'default')
          return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
          if (d[f] !== e[f]) return !1
        return !0
      }
      function Qs(a) {
        return Rs(a) ? 1 : 0
      }
      function Rs(a) {
        var b = a.arg0,
          c = a.arg1
        if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
            var e = G(a, {})
            G({ arg1: c[d], any_of: void 0 }, e)
            if (Qs(e)) return !0
          }
          return !1
        }
        switch (a['function']) {
          case '_cn':
            return 0 <= String(b).indexOf(String(c))
          case '_css':
            var f
            a: {
              if (b)
                try {
                  for (var g = 0; g < gd.length; g++) {
                    var l = gd[g]
                    if (b[l]) {
                      f = b[l](c)
                      break a
                    }
                  }
                } catch (m) {}
              f = !1
            }
            return f
          case '_ew':
            return hd(b, c)
          case '_eq':
            return String(b) === String(c)
          case '_ge':
            return Number(b) >= Number(c)
          case '_gt':
            return Number(b) > Number(c)
          case '_lc':
            return 0 <= String(b).split(',').indexOf(String(c))
          case '_le':
            return Number(b) <= Number(c)
          case '_lt':
            return Number(b) < Number(c)
          case '_re':
            return jd(b, c, a.ignore_case)
          case '_sw':
            return 0 === String(b).indexOf(String(c))
          case '_um':
            return Ps(b, c)
        }
        return !1
      }
      hh()
      function ot() {
        return (z.gaGlobal = z.gaGlobal || {})
      }
      var pt = function () {
          var a = ot()
          a.hid = a.hid || ua()
          return a.hid
        },
        qt = function (a, b) {
          var c = ot()
          if (void 0 == c.vid || (b && !c.from_cookie))
            (c.vid = a), (c.from_cookie = b)
        }
      var Ot = function () {
          var a = !0
          ;(cj(7) && cj(9) && cj(10)) || (a = !1)
          return a
        },
        Pt = function () {
          var a = !0
          ;(cj(3) && cj(4)) || (a = !1)
          return a
        }
      var qu = window,
        ru = document,
        su = function (a) {
          var b = qu._gaUserPrefs
          if (
            (b && b.ioo && b.ioo()) ||
            ru.documentElement.hasAttribute('data-google-analytics-opt-out') ||
            (a && !0 === qu['ga-disable-' + a])
          )
            return !0
          try {
            var c = qu.external
            if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0
          } catch (f) {}
          for (
            var d = Ff('AMP_TOKEN', String(ru.cookie), !0), e = 0;
            e < d.length;
            e++
          )
            if ('$OPT_OUT' == d[e]) return !0
          return ru.getElementById('__gaOptOutExtension') ? !0 : !1
        }
      function zu(a) {
        k(a, function (c) {
          '_' === c.charAt(0) && delete a[c]
        })
        var b = a[N.g.La] || {}
        k(b, function (c) {
          '_' === c.charAt(0) && delete b[c]
        })
      }
      var Iu = function (a, b) {}
      function Hu(a, b) {
        var c = function () {}
        return c
      }
      function Ju(a, b, c) {}
      var wv = function (a, b) {
          if (!b.D) {
            var c = Q(b, N.g.Ja),
              d = Q(b, N.g.Ua),
              e = Q(b, c)
            if (void 0 === e) {
              var f = void 0
              tv.hasOwnProperty(c)
                ? (f = tv[c])
                : uv.hasOwnProperty(c) && (f = uv[c])
              1 === f && (f = vv(c))
              h(f)
                ? Zo()(function () {
                    var g = Zo().getByName(a).get(f)
                    d(g)
                  })
                : d(void 0)
            } else d(e)
          }
        },
        xv = function (a, b) {
          var c = a[N.g.Ub],
            d = b + '.',
            e = a[N.g.O] || '',
            f = void 0 === c ? !!a.use_anchor : 'fragment' === c,
            g = !!a[N.g.Ab]
          e = String(e).replace(/\s+/g, '').split(',')
          var l = Zo()
          l(d + 'require', 'linker')
          l(d + 'linker:autoLink', e, f, g)
        },
        Bv = function (a, b, c) {
          if (of() && (!c.D || !yv[a])) {
            var d = !Zh(N.g.R),
              e = function (f) {
                var g,
                  l,
                  m = Zo(),
                  n = zv(b, '', c),
                  p,
                  q = n.createOnlyFields._useUp
                if (c.D || Av(b, n.createOnlyFields)) {
                  c.D &&
                    ((g = 'gtm' + Fe()),
                    (l = n.createOnlyFields),
                    n.gtmTrackerName && (l.name = g))
                  m(function () {
                    var r = m.getByName(b)
                    r && (p = r.get('clientId'))
                    c.D || m.remove(b)
                  })
                  m('create', a, c.D ? l : n.createOnlyFields)
                  d &&
                    Zh(N.g.R) &&
                    ((d = !1),
                    m(function () {
                      var r = Zo().getByName(c.D ? g : b)
                      !r ||
                        (r.get('clientId') == p && q) ||
                        (c.D
                          ? ((n.fieldsToSet['&gcu'] = '1'),
                            (n.fieldsToSet['&sst.gcut'] = he[f]))
                          : ((n.fieldsToSend['&gcu'] = '1'),
                            (n.fieldsToSend['&sst.gcut'] = he[f])),
                        r.set(n.fieldsToSet),
                        c.D
                          ? r.send('pageview')
                          : r.send('pageview', n.fieldsToSend))
                    }))
                  c.D &&
                    m(function () {
                      m.remove(g)
                    })
                }
              }
            ai(function () {
              return e(N.g.R)
            }, N.g.R)
            ai(function () {
              return e(N.g.H)
            }, N.g.H)
            c.D && (yv[a] = !0)
          }
        },
        Cv = function (a, b) {
          ro() && b && (a[N.g.yb] = b)
        },
        Lv = function (a, b, c) {
          function d() {
            var F = Q(c, N.g.wb)
            l(function () {
              if (!c.D && Yb(F)) {
                var L = u.fieldsToSend,
                  K = m().getByName(n),
                  W
                for (W in F)
                  if (
                    F.hasOwnProperty(W) &&
                    /^(dimension|metric)\d+$/.test(W) &&
                    void 0 != F[W]
                  ) {
                    var fa = K.get(vv(F[W]))
                    Dv(L, W, fa)
                  }
              }
            })
          }
          function e() {
            if (u.displayfeatures) {
              var F = '_dc_gtm_' + f.replace(/[^A-Za-z0-9-]/g, '')
              p('require', 'displayfeatures', void 0, { cookieName: F })
            }
          }
          var f = a,
            g = 'https://www.google-analytics.com/analytics.js',
            l = c.D ? ap(Q(c, 'gaFunctionName')) : ap()
          if (qa(l)) {
            var m = Zo,
              n
            c.D
              ? (n = Q(c, 'name') || Q(c, 'gtmTrackerName'))
              : (n = 'gtag_' + f.split('-').join('_'))
            var p = function (F) {
                var L = [].slice.call(arguments, 0)
                L[0] = n ? n + '.' + L[0] : '' + L[0]
                l.apply(window, L)
              },
              q = function (F) {
                var L = function (ea, Z) {
                    for (var Y = 0; Z && Y < Z.length; Y++) p(ea, Z[Y])
                  },
                  K = c.D,
                  W = K ? Ev(u) : Fv(b, c)
                if (W) {
                  var fa = {}
                  Cv(fa, F)
                  p('require', 'ec', 'ec.js', fa)
                  K && W.vf && p('set', '&cu', W.vf)
                  var S = W.action
                  if (K || 'impressions' === S)
                    if ((L('ec:addImpression', W.Bh), !K)) return
                  if (
                    'promo_click' === S ||
                    'promo_view' === S ||
                    (K && W.cd)
                  ) {
                    var M = W.cd
                    L('ec:addPromo', M)
                    if (M && 0 < M.length && 'promo_click' === S) {
                      K ? p('ec:setAction', S, W.Ra) : p('ec:setAction', S)
                      return
                    }
                    if (!K) return
                  }
                  'promo_view' !== S &&
                    'impressions' !== S &&
                    (L('ec:addProduct', W.Ib), p('ec:setAction', S, W.Ra))
                }
              },
              t = function (F) {
                if (F) {
                  var L = {}
                  if (Yb(F))
                    for (var K in Gv)
                      Gv.hasOwnProperty(K) && Hv(Gv[K], K, F[K], L)
                  Cv(L, y)
                  p('require', 'linkid', L)
                }
              },
              r = function () {
                if (di()) {
                } else {
                  var F = Q(c, N.g.Gi)
                  F &&
                    (p('require', F, { dataLayer: ke.ca }),
                    p('require', 'render'))
                }
              },
              u = zv(n, b, c),
              v = function (F, L, K) {
                K && (L = '' + L)
                u.fieldsToSend[F] = L
              }
            !c.D &&
              Av(n, u.createOnlyFields) &&
              (l(function () {
                m() && m().remove(n)
              }),
              (Iv[n] = !1))
            l('create', f, u.createOnlyFields)
            if (u.createOnlyFields[N.g.yb] && !c.D) {
              var w =
                te || ve
                  ? qo(u.createOnlyFields[N.g.yb], '/analytics.js')
                  : void 0
              w && (g = w)
            }
            var y = c.D ? u.fieldsToSet[N.g.yb] : u.createOnlyFields[N.g.yb]
            if (y) {
              var x = c.D ? u.fieldsToSet[N.g.Md] : u.createOnlyFields[N.g.Md]
              x && !Iv[n] && ((Iv[n] = !0), l(ep(n, x)))
            }
            c.D
              ? u.enableRecaptcha && p('require', 'recaptcha', 'recaptcha.js')
              : (d(), t(u.linkAttribution))
            var A = u[N.g.qa]
            A && A[N.g.O] && xv(A, n)
            p('set', u.fieldsToSet)
            if (c.D) {
              if (u.enableLinkId) {
                var B = {}
                Cv(B, y)
                p('require', 'linkid', 'linkid.js', B)
              }
              of() && Bv(f, n, c)
            }
            if (b === N.g.sc)
              if (c.D) {
                e()
                if (u.remarketingLists) {
                  var D = '_dc_gtm_' + f.replace(/[^A-Za-z0-9-]/g, '')
                  p('require', 'adfeatures', { cookieName: D })
                }
                q(y)
                p('send', 'pageview')
                u.createOnlyFields._useUp && bp(n + '.')
              } else r(), p('send', 'pageview', u.fieldsToSend)
            else
              b === N.g.ma
                ? (r(),
                  ol(f, c),
                  Q(c, N.g.Xa) && (Qk(['aw', 'dc']), bp(n + '.')),
                  0 != u.sendPageView && p('send', 'pageview', u.fieldsToSend),
                  Bv(f, n, c))
                : b === N.g.Aa
                ? wv(n, c)
                : 'screen_view' === b
                ? p('send', 'screenview', u.fieldsToSend)
                : 'timing_complete' === b
                ? ((u.fieldsToSend.hitType = 'timing'),
                  v('timingCategory', u.eventCategory, !0),
                  c.D
                    ? v('timingVar', u.timingVar, !0)
                    : v('timingVar', u.name, !0),
                  v('timingValue', Aa(u.value)),
                  void 0 !== u.eventLabel && v('timingLabel', u.eventLabel, !0),
                  p('send', u.fieldsToSend))
                : 'exception' === b
                ? p('send', 'exception', u.fieldsToSend)
                : ('' === b && c.D) ||
                  ('track_social' === b && c.D
                    ? ((u.fieldsToSend.hitType = 'social'),
                      v('socialNetwork', u.socialNetwork, !0),
                      v('socialAction', u.socialAction, !0),
                      v('socialTarget', u.socialTarget, !0))
                    : ((c.D || Jv[b]) && q(y),
                      c.D && e(),
                      (u.fieldsToSend.hitType = 'event'),
                      v('eventCategory', u.eventCategory, !0),
                      v('eventAction', u.eventAction || b, !0),
                      void 0 !== u.eventLabel &&
                        v('eventLabel', u.eventLabel, !0),
                      void 0 !== u.value && v('eventValue', Aa(u.value))),
                  p('send', u.fieldsToSend))
            if (!Kv && !c.D) {
              Kv = !0
              var I = function () {
                  c.P()
                },
                H = function () {
                  m().loaded || I()
                }
              di() ? E(H) : Hb(g, H, I)
            }
          } else E(c.P)
        },
        Mv = function (a, b, c, d) {
          bi(
            function () {
              Lv(a, b, d)
            },
            [N.g.R, N.g.H]
          )
        },
        Ov = function (a) {
          function b(e) {
            function f(l, m) {
              for (var n = 0; n < m.length; n++) {
                var p = m[n]
                if (e[p]) {
                  g[l] = e[p]
                  break
                }
              }
            }
            var g = G(e)
            f('id', ['id', 'item_id', 'promotion_id'])
            f('name', ['name', 'item_name', 'promotion_name'])
            f('brand', ['brand', 'item_brand'])
            f('variant', ['variant', 'item_variant'])
            f('list', ['list_name', 'item_list_name'])
            f('position', ['list_position', 'creative_slot', 'index'])
            ;(function () {
              if (e.category) g.category = e.category
              else {
                for (var l = '', m = 0; m < Nv.length; m++)
                  void 0 !== e[Nv[m]] && (l && (l += '/'), (l += e[Nv[m]]))
                l && (g.category = l)
              }
            })()
            f('listPosition', ['list_position'])
            f('creative', ['creative_name'])
            f('list', ['list_name'])
            f('position', ['list_position', 'creative_slot'])
            return g
          }
          for (var c = [], d = 0; a && d < a.length; d++)
            a[d] && Yb(a[d]) && c.push(b(a[d]))
          return c.length ? c : void 0
        },
        Pv = function (a) {
          return Zh(a)
        },
        Qv = !1
      var Kv,
        Iv = {},
        yv = {},
        Rv = {},
        Sv = Object.freeze(
          ((Rv.page_hostname = 1),
          (Rv[N.g.W] = 1),
          (Rv[N.g.kb] = 1),
          (Rv[N.g.Oa] = 1),
          (Rv[N.g.Ca] = 1),
          (Rv[N.g.Pa] = 1),
          (Rv[N.g.Rb] = 1),
          (Rv[N.g.Ed] = 1),
          (Rv[N.g.Ia] = 1),
          (Rv[N.g.nb] = 1),
          (Rv[N.g.ra] = 1),
          (Rv[N.g.Vb] = 1),
          (Rv[N.g.Ea] = 1),
          (Rv[N.g.Bb] = 1),
          Rv)
        ),
        Tv = {},
        tv = Object.freeze(
          ((Tv.client_storage = 'storage'),
          (Tv.sample_rate = 1),
          (Tv.site_speed_sample_rate = 1),
          (Tv.store_gac = 1),
          (Tv.use_amp_client_id = 1),
          (Tv[N.g.lb] = 1),
          (Tv[N.g.na] = 'storeGac'),
          (Tv[N.g.Oa] = 1),
          (Tv[N.g.Ca] = 1),
          (Tv[N.g.Pa] = 1),
          (Tv[N.g.Rb] = 1),
          (Tv[N.g.Ed] = 1),
          (Tv[N.g.nb] = 1),
          Tv)
        ),
        Uv = {},
        Vv = Object.freeze(
          ((Uv._cs = 1),
          (Uv._useUp = 1),
          (Uv.allowAnchor = 1),
          (Uv.allowLinker = 1),
          (Uv.alwaysSendReferrer = 1),
          (Uv.clientId = 1),
          (Uv.cookieDomain = 1),
          (Uv.cookieExpires = 1),
          (Uv.cookieFlags = 1),
          (Uv.cookieName = 1),
          (Uv.cookiePath = 1),
          (Uv.cookieUpdate = 1),
          (Uv.legacyCookieDomain = 1),
          (Uv.legacyHistoryImport = 1),
          (Uv.name = 1),
          (Uv.sampleRate = 1),
          (Uv.siteSpeedSampleRate = 1),
          (Uv.storage = 1),
          (Uv.storeGac = 1),
          (Uv.useAmpClientId = 1),
          (Uv._cd2l = 1),
          Uv)
        ),
        Wv = Object.freeze({ anonymize_ip: 1 }),
        Xv = {},
        uv = Object.freeze(
          ((Xv.campaign = {
            content: 'campaignContent',
            id: 'campaignId',
            medium: 'campaignMedium',
            name: 'campaignName',
            source: 'campaignSource',
            term: 'campaignKeyword'
          }),
          (Xv.app_id = 1),
          (Xv.app_installer_id = 1),
          (Xv.app_name = 1),
          (Xv.app_version = 1),
          (Xv.description = 'exDescription'),
          (Xv.fatal = 'exFatal'),
          (Xv.language = 1),
          (Xv.page_hostname = 'hostname'),
          (Xv.transport_type = 'transport'),
          (Xv[N.g.oa] = 'currencyCode'),
          (Xv[N.g.Dg] = 1),
          (Xv[N.g.ra] = 'location'),
          (Xv[N.g.Vb] = 'page'),
          (Xv[N.g.Ea] = 'referrer'),
          (Xv[N.g.Bb] = 'title'),
          (Xv[N.g.Kg] = 1),
          (Xv[N.g.xa] = 1),
          Xv)
        ),
        Yv = {},
        Zv = Object.freeze(
          ((Yv.content_id = 1),
          (Yv.event_action = 1),
          (Yv.event_category = 1),
          (Yv.event_label = 1),
          (Yv.link_attribution = 1),
          (Yv.name = 1),
          (Yv[N.g.qa] = 1),
          (Yv[N.g.Cg] = 1),
          (Yv[N.g.Ka] = 1),
          (Yv[N.g.ja] = 1),
          Yv)
        ),
        $v = Object.freeze({
          displayfeatures: 1,
          enableLinkId: 1,
          enableRecaptcha: 1,
          eventAction: 1,
          eventCategory: 1,
          eventLabel: 1,
          gaFunctionName: 1,
          gtmEcommerceData: 1,
          gtmTrackerName: 1,
          linker: 1,
          remarketingLists: 1,
          socialAction: 1,
          socialNetwork: 1,
          socialTarget: 1,
          timingVar: 1,
          value: 1
        }),
        Nv = Object.freeze([
          'item_category',
          'item_category2',
          'item_category3',
          'item_category4',
          'item_category5'
        ]),
        aw = {},
        Gv = Object.freeze(
          ((aw.levels = 1), (aw[N.g.Ca] = 'duration'), (aw[N.g.Rb] = 1), aw)
        ),
        bw = {},
        cw = Object.freeze(
          ((bw.anonymize_ip = 1),
          (bw.fatal = 1),
          (bw.send_page_view = 1),
          (bw.store_gac = 1),
          (bw.use_amp_client_id = 1),
          (bw[N.g.na] = 1),
          (bw[N.g.Dg] = 1),
          bw)
        ),
        Hv = function (a, b, c, d) {
          if (void 0 !== c)
            if (
              (cw[b] && (c = Ba(c)),
              'anonymize_ip' !== b || c || (c = void 0),
              1 === a)
            )
              d[vv(b)] = c
            else if (h(a)) d[a] = c
            else
              for (var e in a)
                a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        vv = function (a) {
          return a && h(a)
            ? a.replace(/(_[a-z])/g, function (b) {
                return b[1].toUpperCase()
              })
            : a
        },
        dw = {},
        Jv = Object.freeze(
          ((dw.checkout_progress = 1),
          (dw.select_content = 1),
          (dw.set_checkout_option = 1),
          (dw[N.g.mc] = 1),
          (dw[N.g.nc] = 1),
          (dw[N.g.Ob] = 1),
          (dw[N.g.oc] = 1),
          (dw[N.g.rb] = 1),
          (dw[N.g.Pb] = 1),
          (dw[N.g.sb] = 1),
          (dw[N.g.Ga] = 1),
          (dw[N.g.qc] = 1),
          (dw[N.g.Ha] = 1),
          dw)
        ),
        ew = {},
        fw = Object.freeze(
          ((ew.checkout_progress = 1),
          (ew.set_checkout_option = 1),
          (ew[N.g.jg] = 1),
          (ew[N.g.kg] = 1),
          (ew[N.g.mc] = 1),
          (ew[N.g.nc] = 1),
          (ew[N.g.lg] = 1),
          (ew[N.g.Ob] = 1),
          (ew[N.g.Ga] = 1),
          (ew[N.g.qc] = 1),
          (ew[N.g.mg] = 1),
          ew)
        ),
        gw = {},
        hw = Object.freeze(
          ((gw.generate_lead = 1),
          (gw.login = 1),
          (gw.search = 1),
          (gw.select_content = 1),
          (gw.share = 1),
          (gw.sign_up = 1),
          (gw.view_search_results = 1),
          (gw[N.g.oc] = 1),
          (gw[N.g.rb] = 1),
          (gw[N.g.Pb] = 1),
          (gw[N.g.sb] = 1),
          (gw[N.g.Ha] = 1),
          gw)
        ),
        iw = function (a) {
          var b = 'general'
          fw[a]
            ? (b = 'ecommerce')
            : hw[a]
            ? (b = 'engagement')
            : 'exception' === a && (b = 'error')
          return b
        },
        jw = {},
        kw = Object.freeze(
          ((jw.view_search_results = 1),
          (jw[N.g.rb] = 1),
          (jw[N.g.sb] = 1),
          (jw[N.g.Ha] = 1),
          jw)
        ),
        Dv = function (a, b, c) {
          a.hasOwnProperty(b) || (a[b] = c)
        },
        lw = function (a) {
          if (sa(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
              var d = a[c]
              if (void 0 != d) {
                var e = d.id,
                  f = d.variant
                void 0 != e &&
                  void 0 != f &&
                  b.push(String(e) + '.' + String(f))
              }
            }
            return 0 < b.length ? b.join('!') : void 0
          }
        },
        zv = function (a, b, c) {
          var d = function (K) {
              return Q(c, K)
            },
            e = {},
            f = {},
            g = {},
            l = {},
            m = lw(d(N.g.yi))
          !c.D && m && Dv(f, 'exp', m)
          g['&gtm'] = pi(!0)
          P(69) && !c.D && (g._no_slc = !0)
          of() && (l._cs = Pv)
          var n = d(N.g.wb)
          if (!c.D && Yb(n))
            for (var p in n)
              if (
                n.hasOwnProperty(p) &&
                /^(dimension|metric)\d+$/.test(p) &&
                void 0 != n[p]
              ) {
                var q = d(String(n[p]))
                void 0 !== q && Dv(f, p, q)
              }
          for (var t = !c.D, r = Nl(c), u = 0; u < r.length; ++u) {
            var v = r[u]
            if (c.D) {
              var w = d(v)
              $v.hasOwnProperty(v)
                ? (e[v] = w)
                : Vv.hasOwnProperty(v)
                ? (l[v] = w)
                : (g[v] = w)
            } else {
              var y = void 0
              y = v !== N.g.V ? d(v) : Ol(c, v)
              if (Zv.hasOwnProperty(v)) Hv(Zv[v], v, y, e)
              else if (Wv.hasOwnProperty(v)) Hv(Wv[v], v, y, g)
              else if (uv.hasOwnProperty(v)) Hv(uv[v], v, y, f)
              else if (tv.hasOwnProperty(v)) Hv(tv[v], v, y, l)
              else if (/^(dimension|metric|content_group)\d+$/.test(v))
                Hv(1, v, y, f)
              else if (v === N.g.V) {
                if (!Qv) {
                  var x = Pa(y)
                  x && (f['&did'] = x)
                }
                var A = void 0,
                  B = void 0
                b === N.g.ma
                  ? (A = Pa(Ol(c, v), '.'))
                  : ((A = Pa(Ol(c, v, 1), '.')), (B = Pa(Ol(c, v, 2), '.')))
                A && (f['&gdid'] = A)
                B && (f['&edid'] = B)
              } else
                v === N.g.Ia &&
                  0 > r.indexOf(N.g.Rb) &&
                  (l.cookieName = y + '_ga')
              P(96) &&
                Sv[v] &&
                (c.m.hasOwnProperty(v) ||
                  (b === N.g.ma && c.h.hasOwnProperty(v))) &&
                (t = !1)
            }
          }
          P(96) && t && (f['&jsscut'] = '1')
          ;(!1 !== d(N.g.li) && !1 !== d(N.g.kb) && Ot()) ||
            (g.allowAdFeatures = !1)
          ;(!1 !== d(N.g.W) && Pt()) || (g.allowAdPersonalizationSignals = !1)
          !c.D && d(N.g.Xa) && (l._useUp = !0)
          if (c.D) {
            l.name = l.name || e.gtmTrackerName
            var D = g.hitCallback
            g.hitCallback = function () {
              qa(D) && D()
              c.N()
            }
          } else {
            Dv(l, 'cookieDomain', 'auto')
            Dv(g, 'forceSSL', !0)
            Dv(e, 'eventCategory', iw(b))
            kw[b] && Dv(f, 'nonInteraction', !0)
            'login' === b || 'sign_up' === b || 'share' === b
              ? Dv(e, 'eventLabel', d(N.g.Cg))
              : 'search' === b || 'view_search_results' === b
              ? Dv(e, 'eventLabel', d(N.g.Mi))
              : 'select_content' === b && Dv(e, 'eventLabel', d(N.g.oi))
            var I = e[N.g.qa] || {},
              H = I[N.g.Tb]
            H || (0 != H && I[N.g.O])
              ? (l.allowLinker = !0)
              : !1 === H && Dv(l, 'useAmpClientId', !1)
            f.hitCallback = c.N
            l.name = a
          }
          of() &&
            ((g['&gcs'] = $h()),
            Zh(N.g.R) || (l.storage = 'none'),
            Zh(N.g.H) || ((g.allowAdFeatures = !1), (l.storeGac = !1)))
          var F = d(N.g.va) || d(N.g.yb),
            L = d(N.g.Md)
          F && (c.D || (l[N.g.yb] = F), (l._cd2l = !0))
          L && !c.D && (l[N.g.Md] = L)
          e.fieldsToSend = f
          e.fieldsToSet = g
          e.createOnlyFields = l
          return e
        },
        Ev = function (a) {
          var b = a.gtmEcommerceData
          if (!b) return null
          var c = {}
          b.currencyCode && (c.vf = b.currencyCode)
          if (b.impressions) {
            c.action = 'impressions'
            var d = b.impressions
            c.Bh = 'impressions' === b.translateIfKeyEquals ? Ov(d) : d
          }
          if (b.promoView) {
            c.action = 'promo_view'
            var e = b.promoView.promotions
            c.cd = 'promoView' === b.translateIfKeyEquals ? Ov(e) : e
          }
          if (b.promoClick) {
            c.action = 'promo_click'
            var f = b.promoClick.promotions
            c.cd = 'promoClick' === b.translateIfKeyEquals ? Ov(f) : f
            c.Ra = b.promoClick.actionField
            return c
          }
          for (var g in b)
            if (
              b.hasOwnProperty(g) &&
              'translateIfKeyEquals' !== g &&
              'impressions' !== g &&
              'promoView' !== g &&
              'promoClick' !== g &&
              'currencyCode' !== g
            ) {
              c.action = g
              var l = b[g].products
              c.Ib = 'products' === b.translateIfKeyEquals ? Ov(l) : l
              c.Ra = b[g].actionField
              break
            }
          return Object.keys(c).length ? c : null
        },
        Fv = function (a, b) {
          function c(u) {
            return {
              id: d(N.g.sa),
              affiliation: d(N.g.vi),
              revenue: d(N.g.ja),
              tax: d(N.g.rg),
              shipping: d(N.g.Gd),
              coupon: d(N.g.wi),
              list: d(N.g.Ge) || d(N.g.Fe) || u
            }
          }
          for (
            var d = function (u) {
                return Q(b, u)
              },
              e = d(N.g.aa),
              f,
              g = 0;
            e && g < e.length && !(f = e[g][N.g.Ge] || e[g][N.g.Fe]);
            g++
          );
          var l = d(N.g.wb)
          if (Yb(l))
            for (var m = 0; e && m < e.length; ++m) {
              var n = e[m],
                p
              for (p in l)
                l.hasOwnProperty(p) &&
                  /^(dimension|metric)\d+$/.test(p) &&
                  void 0 != l[p] &&
                  Dv(n, p, n[l[p]])
            }
          var q = null,
            t = d(N.g.xi)
          if (a === N.g.Ga || a === N.g.qc)
            q = { action: a, Ra: c(), Ib: Ov(e) }
          else if (a === N.g.mc) q = { action: 'add', Ra: c(), Ib: Ov(e) }
          else if (a === N.g.nc) q = { action: 'remove', Ra: c(), Ib: Ov(e) }
          else if (a === N.g.Ha) q = { action: 'detail', Ra: c(f), Ib: Ov(e) }
          else if (a === N.g.rb) q = { action: 'impressions', Bh: Ov(e) }
          else if (a === N.g.sb)
            q = { action: 'promo_view', cd: Ov(t) || Ov(e) }
          else if (
            ('select_content' === a && t && 0 < t.length) ||
            a === N.g.Pb
          )
            q = { action: 'promo_click', cd: Ov(t) || Ov(e) }
          else if ('select_content' === a || a === N.g.oc)
            q = {
              action: 'click',
              Ra: { list: d(N.g.Ge) || d(N.g.Fe) || f },
              Ib: Ov(e)
            }
          else if (a === N.g.Ob || 'checkout_progress' === a) {
            var r = { step: a === N.g.Ob ? 1 : d(N.g.qg), option: d(N.g.pg) }
            q = { action: 'checkout', Ib: Ov(e), Ra: G(c(), r) }
          } else
            'set_checkout_option' === a &&
              (q = {
                action: 'checkout_option',
                Ra: { step: d(N.g.qg), option: d(N.g.pg) }
              })
          q && (q.vf = d(N.g.oa))
          return q
        },
        mw = {},
        Av = function (a, b) {
          var c = mw[a]
          mw[a] = G(b)
          if (!c) return !1
          for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0
          for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0
          return !1
        }
      var nw = Hu
      Object.freeze({ dl: 1, id: 1 })
      Object.freeze(['config', 'event', 'get', 'set'])
      var pw = encodeURI,
        V = encodeURIComponent,
        qw = function (a, b, c) {
          Kb(a, b, c)
        },
        rw = function (a, b) {
          if (!a) return !1
          var c = zf(Bf(a), 'host')
          if (!c) return !1
          for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase()
            if (e) {
              var f = c.length - e.length
              0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e))
              if (0 <= f && c.indexOf(e, f) == f) return !0
            }
          }
          return !1
        },
        sw = function (a, b, c) {
          for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] &&
              a[f].hasOwnProperty(b) &&
              a[f].hasOwnProperty(c) &&
              ((d[a[f][b]] = a[f][c]), (e = !0))
          return e ? d : null
        }
      var X = { o: {} }
      ;(X.o.e = ['google']),
        (function () {
          ;(function (a) {
            X.__e = a
            X.__e.s = 'e'
            X.__e.isVendorTemplate = !0
            X.__e.priorityOverride = 0
            X.__e.isInfrastructure = !1
          })(function (a) {
            return String(a.vtp_gtmCachedValues.event)
          })
        })()
      ;(X.o.v = ['google']),
        (function () {
          ;(function (a) {
            X.__v = a
            X.__v.s = 'v'
            X.__v.isVendorTemplate = !0
            X.__v.priorityOverride = 0
            X.__v.isInfrastructure = !1
          })(function (a) {
            var b = a.vtp_name
            if (!b || !b.replace) return !1
            var c = js(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
              d = void 0 !== c ? c : a.vtp_defaultValue
            rs(d, 'v', a.vtp_gtmEventId)
            return d
          })
        })()
      ;(X.o.rep = ['google']),
        (function () {
          ;(function (a) {
            X.__rep = a
            X.__rep.s = 'rep'
            X.__rep.isVendorTemplate = !0
            X.__rep.priorityOverride = 0
            X.__rep.isInfrastructure = !1
          })(function (a) {
            var b = al(a.vtp_containerId),
              c
            switch (b.prefix) {
              case 'AW':
                c = Nu
                break
              case 'DC':
                c = ev
                break
              case 'GF':
                c = kv
                break
              case 'HA':
                c = pv
                break
              case 'UA':
                c = Mv
                break
              case 'MC':
                c = nw(b, a.vtp_gtmEventId)
                break
              default:
                E(a.vtp_gtmOnFailure)
                return
            }
            c
              ? (E(a.vtp_gtmOnSuccess),
                uq.register(a.vtp_containerId, c),
                a.vtp_remoteConfig &&
                  Dq(a.vtp_containerId, a.vtp_remoteConfig || {}))
              : E(a.vtp_gtmOnFailure)
          })
        })()
      ;(X.o.cid = ['google']),
        (function () {
          ;(function (a) {
            X.__cid = a
            X.__cid.s = 'cid'
            X.__cid.isVendorTemplate = !0
            X.__cid.priorityOverride = 0
            X.__cid.isInfrastructure = !1
          })(function () {
            return R.C
          })
        })()
      ;(X.o.get = ['google']),
        (function () {
          ;(function (a) {
            X.__get = a
            X.__get.s = 'get'
            X.__get.isVendorTemplate = !0
            X.__get.priorityOverride = 0
            X.__get.isInfrastructure = !1
          })(function (a) {
            var b = a.vtp_settings,
              c = b.eventParameters || {},
              d = String(a.vtp_eventName),
              e = {}
            e.eventId = a.vtp_gtmEventId
            e.priorityId = a.vtp_gtmPriorityId
            a.vtp_deferrable && (e.deferrable = !0)
            var f = Vp(String(b.streamId), d, c)
            Yp(f, e.eventId, e)
            a.vtp_gtmOnSuccess()
          })
        })()

      var Mx = {}
      Mx.dataLayer = Me
      Mx.callback = function (a) {
        Ce.hasOwnProperty(a) && qa(Ce[a]) && Ce[a]()
        delete Ce[a]
      }
      Mx.bootstrap = 0
      Mx._spx = !1
      function Nx() {
        le[R.C] = le[R.C] || Mx
        R.jb && (le['ctid_' + R.jb] = Mx)
        ji()
        mi() ||
          k(ni(), function (a, b) {
            uo(a, b.transportUrl, b.context)
            J(92)
          })
        Ia(De, X.o)
        Gc = Oc
      }
      ;(function (a) {
        function b() {
          m = C.documentElement.getAttribute('data-tag-assistant-present')
          Cr(m) && (l = g.Oi)
        }
        if (!z['__TAGGY_INSTALLED']) {
          var c = !1
          if (C.referrer) {
            var d = Bf(C.referrer)
            c = 'cct.google' === yf(d, 'host')
          }
          if (!c) {
            var e = Lf('googTaggyReferrer')
            c = e.length && e[0].length
          }
          c &&
            ((z['__TAGGY_INSTALLED'] = !0),
            Hb('https://cct.google/taggy/agent.js'))
        }
        if (xe) a()
        else {
          var f = function (u) {
              var v = 'GTM',
                w = 'GTM'
              re ? ((v = 'OGT'), (w = 'GTAG')) : xe && (w = v = 'OPT')
              var y = z['google.tagmanager.debugui2.queue']
              y ||
                ((y = []),
                (z['google.tagmanager.debugui2.queue'] = y),
                Hb(
                  'https://' +
                    ke.qd +
                    '/debug/bootstrap?id=' +
                    R.C +
                    '&src=' +
                    w +
                    '&cond=' +
                    u +
                    '&gtm=' +
                    pi()
                ))
              var x = {
                messageType: 'CONTAINER_STARTING',
                data: {
                  scriptSource: Bb,
                  containerProduct: v,
                  debug: !1,
                  id: R.C,
                  isGte: qe
                }
              }
              x.data.resume = function () {
                a()
              }
              ke.Zh && (x.data.initialPublish = !0)
              y.push(x)
            },
            g = { Mk: 1, Pi: 2, bj: 3, bi: 4, Oi: 5 },
            l = void 0,
            m = void 0,
            n = zf(z.location, 'query', !1, void 0, 'gtm_debug')
          Cr(n) && (l = g.Pi)
          if (!l && C.referrer) {
            var p = Bf(C.referrer)
            'tagassistant.google.com' === yf(p, 'host') && (l = g.bj)
          }
          if (!l) {
            var q = Lf('__TAG_ASSISTANT')
            q.length && q[0].length && (l = g.bi)
          }
          l || b()
          if (!l && Dr(m)) {
            var t = function () {
                if (r) return !0
                r = !0
                b()
                l && Bb ? f(l) : a()
              },
              r = !1
            Lb(
              C,
              'TADebugSignal',
              function () {
                t()
              },
              !1
            )
            z.setTimeout(function () {
              t()
            }, 200)
          } else l && Bb ? f(l) : a()
        }
      })(function () {
        if (P(70)) {
          var a = on(jn.F.ye, R.C)
          pn(a)
        }
        Te().m()
        $i()
        if (R.jb ? le['ctid_' + R.jb] : le[R.C]) {
          var b = le.zones
          b && b.unregisterChild(hi())
        } else {
          for (
            var c = data.resource || {}, d = c.macros || [], e = 0;
            e < d.length;
            e++
          )
            wc.push(d[e])
          for (var f = c.tags || [], g = 0; g < f.length; g++) zc.push(f[g])
          for (var l = c.predicates || [], m = 0; m < l.length; m++)
            yc.push(l[m])
          for (var n = c.rules || [], p = 0; p < n.length; p++) {
            for (var q = n[p], t = {}, r = 0; r < q.length; r++)
              t[q[r][0]] = Array.prototype.slice.call(q[r], 1)
            xc.push(t)
          }
          Bc = X
          Cc = Qs
          Nx()
          Br()
          Jo = !1
          Ko = 0
          if (
            ('interactive' == C.readyState && !C.createEventObject) ||
            'complete' == C.readyState
          )
            Mo()
          else {
            Lb(C, 'DOMContentLoaded', Mo)
            Lb(C, 'readystatechange', Mo)
            if (C.createEventObject && C.documentElement.doScroll) {
              var u = !0
              try {
                u = !z.frameElement
              } catch (B) {}
              u && No()
            }
            Lb(z, 'load', Mo)
          }
          Rq = !1
          'complete' === C.readyState ? Tq() : Lb(z, 'load', Tq)
          jj && z.setInterval(nj, 864e5)
          Ya('HEALTH', 1)
          Be = Fa()
          Mx.bootstrap = Be
          if (P(70)) {
            var x = on(jn.F.cg, R.C)
            if (pn(x)) {
              var A = on(jn.F.ye, R.C)
              qn(x, A)
            }
          }
          P(102) && (Ye = !0)
        }
      })
    }
  )()

function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'UA-25150502-1')
