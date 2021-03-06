var pJS = function(e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: a,
            w: a.offsetWidth,
            h: a.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var d = this.pJS;
    t && Object.deepExtend(d, t), d.tmp.obj = {
        size_value: d.particles.size.value,
        size_anim_speed: d.particles.size.anim.speed,
        move_speed: d.particles.move.speed,
        line_linked_distance: d.particles.line_linked.distance,
        line_linked_width: d.particles.line_linked.width,
        mode_grab_distance: d.interactivity.modes.grab.distance,
        mode_bubble_distance: d.interactivity.modes.bubble.distance,
        mode_bubble_size: d.interactivity.modes.bubble.size,
        mode_repulse_distance: d.interactivity.modes.repulse.distance
    }, d.fn.retinaInit = function() {
        d.retina_detect && 1 < window.devicePixelRatio ? (d.canvas.pxratio = window.devicePixelRatio, d.tmp.retina = !0) : (d.canvas.pxratio = 1, d.tmp.retina = !1), d.canvas.w = d.canvas.el.offsetWidth * d.canvas.pxratio, d.canvas.h = d.canvas.el.offsetHeight * d.canvas.pxratio, d.particles.size.value = d.tmp.obj.size_value * d.canvas.pxratio, d.particles.size.anim.speed = d.tmp.obj.size_anim_speed * d.canvas.pxratio, d.particles.move.speed = d.tmp.obj.move_speed * d.canvas.pxratio, d.particles.line_linked.distance = d.tmp.obj.line_linked_distance * d.canvas.pxratio, d.interactivity.modes.grab.distance = d.tmp.obj.mode_grab_distance * d.canvas.pxratio, d.interactivity.modes.bubble.distance = d.tmp.obj.mode_bubble_distance * d.canvas.pxratio, d.particles.line_linked.width = d.tmp.obj.line_linked_width * d.canvas.pxratio, d.interactivity.modes.bubble.size = d.tmp.obj.mode_bubble_size * d.canvas.pxratio, d.interactivity.modes.repulse.distance = d.tmp.obj.mode_repulse_distance * d.canvas.pxratio
    }, d.fn.canvasInit = function() {
        d.canvas.ctx = d.canvas.el.getContext("2d")
    }, d.fn.canvasSize = function() {
        d.canvas.el.width = d.canvas.w, d.canvas.el.height = d.canvas.h, d && d.interactivity.events.resize && window.addEventListener("resize", function() {
            d.canvas.w = d.canvas.el.offsetWidth, d.canvas.h = d.canvas.el.offsetHeight, d.tmp.retina && (d.canvas.w *= d.canvas.pxratio, d.canvas.h *= d.canvas.pxratio), d.canvas.el.width = d.canvas.w, d.canvas.el.height = d.canvas.h, d.particles.move.enable || (d.fn.particlesEmpty(), d.fn.particlesCreate(), d.fn.particlesDraw(), d.fn.vendors.densityAutoParticles()), d.fn.vendors.densityAutoParticles()
        })
    }, d.fn.canvasPaint = function() {
        d.canvas.ctx.fillRect(0, 0, d.canvas.w, d.canvas.h)
    }, d.fn.canvasClear = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h)
    }, d.fn.particle = function(e, t, a) {
        if (this.radius = (d.particles.size.random ? Math.random() : 1) * d.particles.size.value, d.particles.size.anim.enable && (this.size_status = !1, this.vs = d.particles.size.anim.speed / 100, d.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = a ? a.x : Math.random() * d.canvas.w, this.y = a ? a.y : Math.random() * d.canvas.h, this.x > d.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > d.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), d.particles.move.bounce && d.fn.vendors.checkOverlap(this, a), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var i = e.value[Math.floor(Math.random() * d.particles.color.value.length)];
                this.color.rgb = hexToRgb(i)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (d.particles.opacity.random ? Math.random() : 1) * d.particles.opacity.value, d.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = d.particles.opacity.anim.speed / 100, d.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var s = {};
        switch (d.particles.move.direction) {
            case "top":
                s = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                s = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                s = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                s = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                s = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                s = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                s = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                s = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                s = {
                    x: 0,
                    y: 0
                }
        }
        d.particles.move.straight ? (this.vx = s.x, this.vy = s.y, d.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var n = d.particles.shape.type;
        if ("object" == typeof n) {
            if (n instanceof Array) {
                var r = n[Math.floor(Math.random() * n.length)];
                this.shape = r
            }
        } else this.shape = n;
        if ("image" == this.shape.substring(0, 5)) {
            var c = d.particles.shape;
            this.img = {
                src: c.image.src,
                ratio: c.image.width / c.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == d.tmp.img_type && null != d.tmp.source_svg && (d.fn.vendors.createSvgImg(this), d.tmp.pushing && (this.img.loaded = !1))
        }
    }, d.fn.particle.prototype.draw = function() {
        var e = this;

        function t() {
            d.canvas.ctx.drawImage(n, e.x - a, e.y - a, 2 * a, 2 * a / e.img.ratio)
        }
        if (null != e.radius_bubble) var a = e.radius_bubble;
        else a = e.radius;
        if (null != e.opacity_bubble) var i = e.opacity_bubble;
        else i = e.opacity;
        if (e.color.rgb) var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
        else s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
        switch (d.canvas.ctx.fillStyle = s, d.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                d.canvas.ctx.arc(e.x, e.y, a, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                d.canvas.ctx.rect(e.x - a, e.y - a, 2 * a, 2 * a);
                break;
            case "triangle":
                d.fn.vendors.drawShape(d.canvas.ctx, e.x - a, e.y + a / 1.66, 2 * a, 3, 2);
                break;
            case "polygon":
                d.fn.vendors.drawShape(d.canvas.ctx, e.x - a / (d.particles.shape.polygon.nb_sides / 3.5), e.y - a / .76, 2.66 * a / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                d.fn.vendors.drawShape(d.canvas.ctx, e.x - 2 * a / (d.particles.shape.polygon.nb_sides / 4), e.y - a / 1.52, 2 * a * 2.66 / (d.particles.shape.polygon.nb_sides / 3), d.particles.shape.polygon.nb_sides, 2);
                break;
            case "image3":
                if ("svg" == d.tmp.img_type) var n = e.img.obj;
                else n = d.tmp.img_obj;
                (r = document.createElement("img")).src = "images/s3.png", (n = r) && t();
                break;
            case "image4":
                if ("svg" == d.tmp.img_type) n = e.img.obj;
                else n = d.tmp.img_obj;
                (r = document.createElement("img")).src = "images/s4.png", (n = r) && t();
                break;
            case "image5":
                if ("svg" == d.tmp.img_type) n = e.img.obj;
                else n = d.tmp.img_obj;
                var r;
                (r = document.createElement("img")).src = "images/s5.png", (n = r) && t()
        }
        d.canvas.ctx.closePath(), 0 < d.particles.shape.stroke.width && (d.canvas.ctx.strokeStyle = d.particles.shape.stroke.color, d.canvas.ctx.lineWidth = d.particles.shape.stroke.width, d.canvas.ctx.stroke()), d.canvas.ctx.fill()
    }, d.fn.particlesCreate = function() {
        for (var e = 0; e < d.particles.number.value; e++) d.particles.array.push(new d.fn.particle(d.particles.color, d.particles.opacity.value))
    }, d.fn.particlesUpdate = function() {
        for (var e = 0; e < d.particles.array.length; e++) {
            var t = d.particles.array[e];
            if (d.particles.move.enable) {
                var a = d.particles.move.speed / 2;
                t.x += t.vx * a, t.y += t.vy * a
            }
            if (d.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= d.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= d.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), d.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= d.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= d.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == d.particles.move.out_mode) var i = {
                x_left: t.radius,
                x_right: d.canvas.w,
                y_top: t.radius,
                y_bottom: d.canvas.h
            };
            else i = {
                x_left: -t.radius,
                x_right: d.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: d.canvas.h + t.radius
            };
            switch (t.x - t.radius > d.canvas.w ? (t.x = i.x_left, t.y = Math.random() * d.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right, t.y = Math.random() * d.canvas.h), t.y - t.radius > d.canvas.h ? (t.y = i.y_top, t.x = Math.random() * d.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom, t.x = Math.random() * d.canvas.w), d.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > d.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > d.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", d.interactivity.events.onhover.mode) && d.fn.modes.grabParticle(t), (isInArray("bubble", d.interactivity.events.onhover.mode) || isInArray("bubble", d.interactivity.events.onclick.mode)) && d.fn.modes.bubbleParticle(t), (isInArray("repulse", d.interactivity.events.onhover.mode) || isInArray("repulse", d.interactivity.events.onclick.mode)) && d.fn.modes.repulseParticle(t), d.particles.line_linked.enable || d.particles.move.attract.enable)
                for (var s = e + 1; s < d.particles.array.length; s++) {
                    var n = d.particles.array[s];
                    d.particles.line_linked.enable && d.fn.interact.linkParticles(t, n), d.particles.move.attract.enable && d.fn.interact.attractParticles(t, n), d.particles.move.bounce && d.fn.interact.bounceParticles(t, n)
                }
        }
    }, d.fn.particlesDraw = function() {
        d.canvas.ctx.clearRect(0, 0, d.canvas.w, d.canvas.h), d.fn.particlesUpdate();
        for (var e = 0; e < d.particles.array.length; e++) {
            d.particles.array[e].draw()
        }
    }, d.fn.particlesEmpty = function() {
        d.particles.array = []
    }, d.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(d.fn.checkAnimFrame), cancelRequestAnimFrame(d.fn.drawAnimFrame), d.tmp.source_svg = void 0, d.tmp.img_obj = void 0, d.tmp.count_svg = 0, d.fn.particlesEmpty(), d.fn.canvasClear(), d.fn.vendors.start()
    }, d.fn.interact.linkParticles = function(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y,
            s = Math.sqrt(a * a + i * i);
        if (s <= d.particles.line_linked.distance) {
            var n = d.particles.line_linked.opacity - s / (1 / d.particles.line_linked.opacity) / d.particles.line_linked.distance;
            if (0 < n) {
                var r = d.particles.line_linked.color_rgb_line;
                d.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", d.canvas.ctx.lineWidth = d.particles.line_linked.width, d.canvas.ctx.beginPath(), d.canvas.ctx.moveTo(e.x, e.y), d.canvas.ctx.lineTo(t.x, t.y), d.canvas.ctx.stroke(), d.canvas.ctx.closePath()
            }
        }
    }, d.fn.interact.attractParticles = function(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y;
        if (Math.sqrt(a * a + i * i) <= d.particles.line_linked.distance) {
            var s = a / (1e3 * d.particles.move.attract.rotateX),
                n = i / (1e3 * d.particles.move.attract.rotateY);
            e.vx -= s, e.vy -= n, t.vx += s, t.vy += n
        }
    }, d.fn.interact.bounceParticles = function(e, t) {
        var a = e.x - t.x,
            i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, d.fn.modes.pushParticles = function(e, t) {
        d.tmp.pushing = !0;
        for (var a = 0; a < e; a++) d.particles.array.push(new d.fn.particle(d.particles.color, d.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * d.canvas.w,
            y: t ? t.pos_y : Math.random() * d.canvas.h
        })), a == e - 1 && (d.particles.move.enable || d.fn.particlesDraw(), d.tmp.pushing = !1)
    }, d.fn.modes.removeParticles = function(e) {
        d.particles.array.splice(0, e), d.particles.move.enable || d.fn.particlesDraw()
    }, d.fn.modes.bubbleParticle = function(c) {
        if (d.interactivity.events.onhover.enable && isInArray("bubble", d.interactivity.events.onhover.mode)) {
            var e = c.x - d.interactivity.mouse.pos_x,
                t = c.y - d.interactivity.mouse.pos_y,
                a = 1 - (o = Math.sqrt(e * e + t * t)) / d.interactivity.modes.bubble.distance;

            function i() {
                c.opacity_bubble = c.opacity, c.radius_bubble = c.radius
            }
            if (o <= d.interactivity.modes.bubble.distance) {
                if (0 <= a && "mousemove" == d.interactivity.status) {
                    if (d.interactivity.modes.bubble.size != d.particles.size.value)
                        if (d.interactivity.modes.bubble.size > d.particles.size.value) {
                            0 <= (n = c.radius + d.interactivity.modes.bubble.size * a) && (c.radius_bubble = n)
                        } else {
                            var s = c.radius - d.interactivity.modes.bubble.size,
                                n = c.radius - s * a;
                            c.radius_bubble = 0 < n ? n : 0
                        }
                    var r;
                    if (d.interactivity.modes.bubble.opacity != d.particles.opacity.value)
                        if (d.interactivity.modes.bubble.opacity > d.particles.opacity.value)(r = d.interactivity.modes.bubble.opacity * a) > c.opacity && r <= d.interactivity.modes.bubble.opacity && (c.opacity_bubble = r);
                        else(r = c.opacity - (d.particles.opacity.value - d.interactivity.modes.bubble.opacity) * a) < c.opacity && r >= d.interactivity.modes.bubble.opacity && (c.opacity_bubble = r)
                }
            } else i();
            "mouseleave" == d.interactivity.status && i()
        } else if (d.interactivity.events.onclick.enable && isInArray("bubble", d.interactivity.events.onclick.mode)) {
            if (d.tmp.bubble_clicking) {
                e = c.x - d.interactivity.mouse.click_pos_x, t = c.y - d.interactivity.mouse.click_pos_y;
                var o = Math.sqrt(e * e + t * t),
                    l = ((new Date).getTime() - d.interactivity.mouse.click_time) / 1e3;
                l > d.interactivity.modes.bubble.duration && (d.tmp.bubble_duration_end = !0), l > 2 * d.interactivity.modes.bubble.duration && (d.tmp.bubble_clicking = !1, d.tmp.bubble_duration_end = !1)
            }

            function v(e, t, a, i, s) {
                if (e != t)
                    if (d.tmp.bubble_duration_end) null != a && (r = e + (e - (i - l * (i - e) / d.interactivity.modes.bubble.duration)), "size" == s && (c.radius_bubble = r), "opacity" == s && (c.opacity_bubble = r));
                    else if (o <= d.interactivity.modes.bubble.distance) {
                    if (null != a) var n = a;
                    else n = i;
                    if (n != e) {
                        var r = i - l * (i - e) / d.interactivity.modes.bubble.duration;
                        "size" == s && (c.radius_bubble = r), "opacity" == s && (c.opacity_bubble = r)
                    }
                } else "size" == s && (c.radius_bubble = void 0), "opacity" == s && (c.opacity_bubble = void 0)
            }
            d.tmp.bubble_clicking && (v(d.interactivity.modes.bubble.size, d.particles.size.value, c.radius_bubble, c.radius, "size"), v(d.interactivity.modes.bubble.opacity, d.particles.opacity.value, c.opacity_bubble, c.opacity, "opacity"))
        }
    }, d.fn.modes.repulseParticle = function(i) {
        if (d.interactivity.events.onhover.enable && isInArray("repulse", d.interactivity.events.onhover.mode) && "mousemove" == d.interactivity.status) {
            var e = i.x - d.interactivity.mouse.pos_x,
                t = i.y - d.interactivity.mouse.pos_y,
                a = Math.sqrt(e * e + t * t),
                s = e / a,
                n = t / a,
                r = clamp(1 / (o = d.interactivity.modes.repulse.distance) * (-1 * Math.pow(a / o, 2) + 1) * o * 100, 0, 50),
                c = {
                    x: i.x + s * r,
                    y: i.y + n * r
                };
            "bounce" == d.particles.move.out_mode ? (0 < c.x - i.radius && c.x + i.radius < d.canvas.w && (i.x = c.x), 0 < c.y - i.radius && c.y + i.radius < d.canvas.h && (i.y = c.y)) : (i.x = c.x, i.y = c.y)
        } else if (d.interactivity.events.onclick.enable && isInArray("repulse", d.interactivity.events.onclick.mode))
            if (d.tmp.repulse_finish || (d.tmp.repulse_count++, d.tmp.repulse_count == d.particles.array.length && (d.tmp.repulse_finish = !0)), d.tmp.repulse_clicking) {
                var o = Math.pow(d.interactivity.modes.repulse.distance / 6, 3),
                    l = d.interactivity.mouse.click_pos_x - i.x,
                    v = d.interactivity.mouse.click_pos_y - i.y,
                    p = l * l + v * v,
                    m = -o / p * 1;
                p <= o && function() {
                    var e = Math.atan2(v, l);
                    if (i.vx = m * Math.cos(e), i.vy = m * Math.sin(e), "bounce" == d.particles.move.out_mode) {
                        var t = i.x + i.vx,
                            a = i.y + i.vy;
                        t + i.radius > d.canvas.w ? i.vx = -i.vx : t - i.radius < 0 && (i.vx = -i.vx), a + i.radius > d.canvas.h ? i.vy = -i.vy : a - i.radius < 0 && (i.vy = -i.vy)
                    }
                }()
            } else 0 == d.tmp.repulse_clicking && (i.vx = i.vx_i, i.vy = i.vy_i)
    }, d.fn.modes.grabParticle = function(e) {
        if (d.interactivity.events.onhover.enable && "mousemove" == d.interactivity.status) {
            var t = e.x - d.interactivity.mouse.pos_x,
                a = e.y - d.interactivity.mouse.pos_y,
                i = Math.sqrt(t * t + a * a);
            if (i <= d.interactivity.modes.grab.distance) {
                var s = d.interactivity.modes.grab.line_linked.opacity - i / (1 / d.interactivity.modes.grab.line_linked.opacity) / d.interactivity.modes.grab.distance;
                if (0 < s) {
                    var n = d.particles.line_linked.color_rgb_line;
                    d.canvas.ctx.strokeStyle = "rgba(" + n.r + "," + n.g + "," + n.b + "," + s + ")", d.canvas.ctx.lineWidth = d.particles.line_linked.width, d.canvas.ctx.beginPath(), d.canvas.ctx.moveTo(e.x, e.y), d.canvas.ctx.lineTo(d.interactivity.mouse.pos_x, d.interactivity.mouse.pos_y), d.canvas.ctx.stroke(), d.canvas.ctx.closePath()
                }
            }
        }
    }, d.fn.vendors.eventsListeners = function() {
        "window" == d.interactivity.detect_on ? d.interactivity.el = window : d.interactivity.el = d.canvas.el, (d.interactivity.events.onhover.enable || d.interactivity.events.onclick.enable) && (d.interactivity.el.addEventListener("mousemove", function(e) {
            if (d.interactivity.el == window) var t = e.clientX,
                a = e.clientY;
            else t = e.offsetX || e.clientX, a = e.offsetY || e.clientY;
            d.interactivity.mouse.pos_x = t, d.interactivity.mouse.pos_y = a, d.tmp.retina && (d.interactivity.mouse.pos_x *= d.canvas.pxratio, d.interactivity.mouse.pos_y *= d.canvas.pxratio), d.interactivity.status = "mousemove"
        }), d.interactivity.el.addEventListener("mouseleave", function(e) {
            d.interactivity.mouse.pos_x = null, d.interactivity.mouse.pos_y = null, d.interactivity.status = "mouseleave"
        })), d.interactivity.events.onclick.enable && d.interactivity.el.addEventListener("click", function() {
            if (d.interactivity.mouse.click_pos_x = d.interactivity.mouse.pos_x, d.interactivity.mouse.click_pos_y = d.interactivity.mouse.pos_y, d.interactivity.mouse.click_time = (new Date).getTime(), d.interactivity.events.onclick.enable) switch (d.interactivity.events.onclick.mode) {
                case "push":
                    d.particles.move.enable ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : 1 == d.interactivity.modes.push.particles_nb ? d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb, d.interactivity.mouse) : 1 < d.interactivity.modes.push.particles_nb && d.fn.modes.pushParticles(d.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    d.fn.modes.removeParticles(d.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    d.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    d.tmp.repulse_clicking = !0, d.tmp.repulse_count = 0, d.tmp.repulse_finish = !1, setTimeout(function() {
                        d.tmp.repulse_clicking = !1
                    }, 1e3 * d.interactivity.modes.repulse.duration)
            }
        })
    }, d.fn.vendors.densityAutoParticles = function() {
        if (d.particles.number.density.enable) {
            var e = d.canvas.el.width * d.canvas.el.height / 1e3;
            d.tmp.retina && (e /= 2 * d.canvas.pxratio);
            var t = e * d.particles.number.value / d.particles.number.density.value_area,
                a = d.particles.array.length - t;
            a < 0 ? d.fn.modes.pushParticles(Math.abs(a)) : d.fn.modes.removeParticles(a)
        }
    }, d.fn.vendors.checkOverlap = function(e, t) {
        for (var a = 0; a < d.particles.array.length; a++) {
            var i = d.particles.array[a],
                s = e.x - i.x,
                n = e.y - i.y;
            Math.sqrt(s * s + n * n) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * d.canvas.w, e.y = t ? t.y : Math.random() * d.canvas.h, d.fn.vendors.checkOverlap(e))
        }
    }, d.fn.vendors.createSvgImg = function(n) {
        var e = d.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, a, i) {
                if (n.color.rgb) var s = "rgba(" + n.color.rgb.r + "," + n.color.rgb.g + "," + n.color.rgb.b + "," + n.opacity + ")";
                else s = "hsla(" + n.color.hsl.h + "," + n.color.hsl.s + "%," + n.color.hsl.l + "%," + n.opacity + ")";
                return s
            }),
            t = new Blob([e], {
                type: "image/svg+xml;charset=utf-8"
            }),
            a = window.URL || window.webkitURL || window,
            i = a.createObjectURL(t),
            s = new Image;
        s.addEventListener("load", function() {
            n.img.obj = s, n.img.loaded = !0, a.revokeObjectURL(i), d.tmp.count_svg++
        }), s.src = i
    }, d.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(d.fn.drawAnimFrame), a.remove(), pJSDom = null
    }, d.fn.vendors.drawShape = function(e, t, a, i, s, n) {
        var r = s * n,
            c = s / n,
            o = 180 * (c - 2) / c,
            l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
        for (var v = 0; v < r; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore()
    }, d.fn.vendors.exportImg = function() {
        window.open(d.canvas.el.toDataURL("image/png"), "_blank")
    }, d.fn.vendors.loadImg = function(e) {
        if (d.tmp.img_error = void 0, "" != d.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", d.particles.shape.image.src), t.onreadystatechange = function(e) {
                    4 == t.readyState && (200 == t.status ? (d.tmp.source_svg = e.currentTarget.response, d.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), d.tmp.img_error = !0))
                }, t.send()
            } else {
                var a = new Image;
                a.addEventListener("load", function() {
                    d.tmp.img_obj = a, d.fn.vendors.checkBeforeDraw()
                }), a.src = d.particles.shape.image.src
            } else console.log("Error pJS - No image.src"), d.tmp.img_error = !0
    }, d.fn.vendors.draw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type ? d.tmp.count_svg >= d.particles.number.value ? (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : null != d.tmp.img_obj ? (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame)) : d.tmp.img_error || (d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw)) : (d.fn.particlesDraw(), d.particles.move.enable ? d.fn.drawAnimFrame = requestAnimFrame(d.fn.vendors.draw) : cancelRequestAnimFrame(d.fn.drawAnimFrame))
    }, d.fn.vendors.checkBeforeDraw = function() {
        "image" == d.particles.shape.type ? "svg" == d.tmp.img_type && null == d.tmp.source_svg ? d.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(d.tmp.checkAnimFrame), d.tmp.img_error || (d.fn.vendors.init(), d.fn.vendors.draw())) : (d.fn.vendors.init(), d.fn.vendors.draw())
    }, d.fn.vendors.init = function() {
        d.fn.retinaInit(), d.fn.canvasInit(), d.fn.canvasSize(), d.fn.canvasPaint(), d.fn.particlesCreate(), d.fn.vendors.densityAutoParticles(), d.particles.line_linked.color_rgb_line = hexToRgb(d.particles.line_linked.color)
    }, d.fn.vendors.start = function() {
        isInArray("image", d.particles.shape.type) ? (d.tmp.img_type = d.particles.shape.image.src.substr(d.particles.shape.image.src.length - 3), d.fn.vendors.loadImg(d.tmp.img_type)) : d.fn.vendors.checkBeforeDraw()
    }, d.fn.vendors.eventsListeners(), d.fn.vendors.start()
};

function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, i) {
        return t + t + a + a + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function clamp(e, t, a) {
    return Math.min(Math.max(e, t), a)
}

function isInArray(e, t) {
    return -1 < t.indexOf(e)
}
Object.deepExtend = function(e, t) {
    for (var a in t) t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {}, arguments.callee(e[a], t[a])) : e[a] = t[a];
    return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var a = document.getElementById(e),
        i = "particles-js-canvas-el",
        s = a.getElementsByClassName(i);
    if (s.length)
        for (; 0 < s.length;) a.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i, n.style.width = "100%", n.style.height = "100%", null != document.getElementById(e).appendChild(n) && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function(a, e, i) {
    var s = new XMLHttpRequest;
    s.open("GET", e), s.onreadystatechange = function(e) {
        if (4 == s.readyState)
            if (200 == s.status) {
                var t = JSON.parse(e.currentTarget.response);
                window.particlesJS(a, t), i && i()
            } else console.log("Error pJS - XMLHttpRequest status: " + s.status), console.log("Error pJS - File config not found")
    }, s.send()
};