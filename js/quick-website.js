"use strict";
var Popover = function() {
		var t = $('[data-toggle="popover"]');
		t.length && t.each(function() {
			! function(t) {
				var e = "";
				t.data("color") && (e = " popover-" + t.data("color"));
				var a = {
					trigger: "focus",
					template: '<div class="popover' + e + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div><div class="popover-navigation"><button class="btn btn-primary" data-role="prev">« Prev</button><button class="btn btn-primary" data-role="next">Next »</button><button class="btn btn-primary" data-role="end">End tour</button></div></div>'
				};
				t.popover(a), t.popover("show")
			}($(this))
		})
	}(),
	PurposeStyle = function() {
		var t = getComputedStyle(document.body);
		return {
			colors: {
				gray: {
					100: "#f6f9fc",
					200: "#e9ecef",
					300: "#dee2e6",
					400: "#ced4da",
					500: "#adb5bd",
					600: "#8898aa",
					700: "#525f7f",
					800: "#32325d",
					900: "#212529"
				},
				theme: {
					primary: t.getPropertyValue("--primary") ? t.getPropertyValue("--primary").replace(" ", "") : "#008aff",
					info: t.getPropertyValue("--info") ? t.getPropertyValue("--info").replace(" ", "") : "#50b5ff",
					success: t.getPropertyValue("--success") ? t.getPropertyValue("--success").replace(" ", "") : "#5cc9a7",
					danger: t.getPropertyValue("--danger") ? t.getPropertyValue("--danger").replace(" ", "") : "#f25767",
					warning: t.getPropertyValue("--warning") ? t.getPropertyValue("--warning").replace(" ", "") : "#FFBE3D",
					dark: t.getPropertyValue("--dark") ? t.getPropertyValue("--dark").replace(" ", "") : "#171347"
				},
				transparent: "transparent"
			},
			fonts: {
				base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
			}
		}
	}(),
	SvgInjector = function() {
		var t = document.querySelectorAll("img.svg-inject"),
			e = !1;
		return t.length && SVGInjector(t, {}, function() {
			e = !0
		}), {
			status: e
		}
	}(),
	Tooltip = function() {
		var t = $('[data-toggle="tooltip"]');
		t.length && t.tooltip()
	}(),
	CopyType = function() {
		var t, e = ".btn-type-clipboard",
			a = $(e);
		a.length && ((t = a).tooltip().on("mouseleave", function() {
			t.tooltip("hide")
		}), new ClipboardJS(e).on("success", function(t) {
			$(t.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"), t.clearSelection()
		}))
	}(),
	DarkMode = function() {
		var i = document.getElementById("btnSwitchMode"),
			s = document.getElementById("stylesheet"),
			t = {
				mode: localStorage.getItem("mode") ? localStorage.getItem("mode") : null
			};

		function e(t, e) {
			if (t) {
				var a, o = s.getAttribute("href").split("/"),
					n = o[o.length - 1];
				a = "dark" == t ? "quick-website-dark.css" : "quick-website.css", a = s.getAttribute("href").replace(n, a), s.setAttribute("href", a), localStorage.setItem("mode", t), "dark" == t ? (i.classList.add("text-warning"), i.setAttribute("data-mode", "light")) : (i.classList.remove("text-warning"), i.setAttribute("data-mode", "dark")), document.getElementById("header-main") && function(t) {
					var e, a = document.getElementById("header-main"),
						o = document.getElementById("navbar-main"),
						n = document.getElementById("navbar-logo"),
						i = n.getAttribute("src").split("/"),
						s = i[i.length - 1];
					a.classList.contains("header-transparent") || (e = "dark" == t ? (o.classList.remove("navbar-light", "bg-white"), o.classList.add("navbar-dark", "bg-dark"), n.getAttribute("src").replace(s, "moi_logo.png")) : (o.classList.remove("navbar-dark", "bg-dark"), o.classList.add("navbar-light", "bg-white"), n.getAttribute("src").replace(s, "moi_logo.png")), n.setAttribute("src", e))
				}(t), e && e()
			}
		}
		i && s && (window.addEventListener("load", function() {
			e(t.mode, function() {
				document.body.style.opacity = "1"
			})
		}), i.addEventListener("click", function() {
			var t = i.dataset.mode;
			document.body.style.opacity = "0", e(t, function() {
				document.body.style.opacity = "1"
			})
		}))
	}(),
	Demo = void $('[data-toggle="sweet-alert"]').on("click", function() {
		switch ($(this).data("sweet-alert")) {
			case "basic":
				Swal.fire({
					title: "Here's a message!",
					text: "A few words about this sweet alert ...",
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-primary"
				});
				break;
			case "info":
			case "info":
				Swal.fire({
					title: "Info",
					text: "A few words about this sweet alert ...",
					type: "info",
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-info"
				});
				break;
			case "success":
				Swal.fire({
					title: "Success",
					text: "A few words about this sweet alert ...",
					type: "success",
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-success"
				});
				break;
			case "warning":
				Swal.fire({
					title: "Warning",
					text: "A few words about this sweet alert ...",
					type: "warning",
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-warning"
				});
				break;
			case "question":
				Swal.fire({
					title: "Are you sure?",
					text: "A few words about this sweet alert ...",
					type: "question",
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-dark"
				});
				break;
			case "confirm":
				Swal.fire({
					title: "Are you sure?",
					text: "You won't be able to revert this!",
					type: "warning",
					showCancelButton: !0,
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-danger",
					confirmButtonText: "Yes, delete it!",
					cancelButtonClass: "btn btn-secondary"
				}).then(function(t) {
					t.value && Swal.fire({
						title: "Deleted!",
						text: "Your file has been deleted.",
						type: "success",
						buttonsStyling: !1,
						confirmButtonClass: "btn btn-primary"
					})
				});
				break;
			case "image":
				Swal.fire({
					title: "Sweet",
					text: "Modal with a custom image ...",
					imageUrl: "../../assets/img/prv/splash.png",
					buttonsStyling: !1,
					confirmButtonClass: "btn btn-primary",
					confirmButtonText: "Super!"
				});
				break;
			case "timer":
				Swal.fire({
					title: "Auto close alert!",
					text: "I will close in 2 seconds.",
					timer: 2e3,
					showConfirmButton: !1
				})
		}
	}),
	Dropdown = function() {
		var t = $(".dropdown-animate"),
			e = $('.dropdown-submenu [data-toggle="dropdown"]');
		t.length && t.on({
			"hide.bs.dropdown": function(t) {
				! function(t) {
					var e = t.find(".dropdown-menu");
					e.addClass("hide"), setTimeout(function() {
						e.removeClass("hide")
					}, 300)
				}($(this))
			}
		}), e.length && e.on("click", function() {
			return function(t) {
				t.next().hasClass("show") || t.parents(".dropdown-menu").first().find(".show").removeClass("show");
				var e = t.next(".dropdown-menu");
				e.toggleClass("show"), e.parent().toggleClass("show"), t.parents(".nav-item.dropdown.show").on("hidden.bs.dropdown", function() {
					$(".dropdown-submenu .show").removeClass("show")
				})
			}($(this)), !1
		}), $(".dropdown-menu").on("click", function(t) {
			var e = $._data(document, "events") || {};
			e = e.click || [];
			for (var a = 0; a < e.length; a++) e[a].selector && ($(t.target).is(e[a].selector) && e[a].handler.call(t.target, t), $(t.target).parents(e[a].selector).each(function() {
				e[a].handler.call(this, t)
			}));
			t.stopPropagation()
		})
	}(),
	FormControl = function() {
		var t = $(".form-control"),
			e = $('[data-toggle="indeterminate"]');
		t.length && t.on("focus blur", function(t) {
			$(this).parents(".form-group").toggleClass("focused", "focus" === t.type)
		}).trigger("blur"), e.length && e.each(function() {
			$(this).prop("indeterminate", !0)
		})
	}(),
	CustomInputFile = function() {
		var t = $(".custom-input-file");
		t.length && t.each(function() {
			var e = $(this);
			e.on("change", function(t) {
				! function(t, e, a) {
					var o, n = t.next("label"),
						i = n.html();
					e && 1 < e.files.length ? o = (e.getAttribute("data-multiple-caption") || "").replace("{count}", e.files.length) : a.target.value && (o = a.target.value.split("\\").pop()), o ? n.find("span").html(o) : n.html(i)
				}(e, this, t)
			}), e.on("focus", function() {
				! function(t) {
					t.addClass("has-focus")
				}(e)
			}).on("blur", function() {
				! function(t) {
					t.removeClass("has-focus")
				}(e)
			})
		})
	}(),
	NavbarSticky = function() {
		var t = $(".navbar-sticky"),
			o = 0,
			e = !1;
		t.length && (o = t.offset().top, $(window).on({
			scroll: function() {
				e = !0, setInterval(function() {
					e && (e = !1, function(t) {
						var e = $(window).scrollTop(),
							a = t.outerHeight();
						o + 200 < e ? (t.addClass("sticky"), $("body").css("padding-top", a + "px")) : (t.removeClass("sticky"), $("body").css("padding-top", "0"))
					}(t))
				}, 250)
			}
		}))
	}(),
	PasswordText = function() {
		var t = $('[data-toggle="password-text"]');
		t.length && t.on("click", function() {
			! function(t) {
				var e = $(t.data("target"));
				"password" == e.attr("type") ? e.attr("type", "text") : e.attr("type", "password")
			}($(this))
		})
	}(),
	Pricing = function() {
		var t = $(".pricing-container"),
			e = $(".pricing-container button[data-pricing]");
		t.length && e.on({
			click: function() {
				! function(t) {
					t.data("pricing");
					var e = t.parents(".pricing-container"),
						a = $("." + e.attr("class") + " [data-pricing-value]");
					t.hasClass("active") || ($("." + e.attr("class") + " button[data-pricing]").removeClass("active"), t.addClass("active"), a.each(function() {
						var t = $(this).data("pricing-value"),
							e = $(this).find("span.price").text();
						$(this).find("span.price").text(t), $(this).data("pricing-value", e)
					}))
				}($(this))
			}
		})
	}(),
	ScrollTo = function() {
		var t = $(".scroll-me, [data-scroll-to], .toc-entry a"),
			e = window.location.hash;
		t.length && t.on("click", function() {
			! function(t) {
				var e = t.attr("href"),
					a = t.data("scroll-to-offset") ? t.data("scroll-to-offset") : 0,
					o = {
						scrollTop: $(e).offset().top - a
					};
				$("html, body").stop(!0, !0).animate(o, 300), event.preventDefault()
			}($(this))
		}), $(window).on("load", function() {
			e && "#!" != e && $(e).length && function(t) {
				$("html, body").animate({
					scrollTop: $(t).offset().top
				}, "slow")
			}(e)
		})
	}(),
	GoogleMapCustom = function() {
		var i, s, r, l, t = document.getElementById("map-custom");
		void 0 !== t && null != t && google.maps.event.addDomListener(window, "load", function(t) {
			i = t.getAttribute("data-lat"), s = t.getAttribute("data-lng"), r = t.getAttribute("data-color"), l = t.getAttribute("data-zoom") ? parseInt(t.getAttribute("data-zoom")) : 12;
			var e = new google.maps.LatLng(i, s),
				a = {
					zoom: l,
					scrollwheel: !1,
					center: e,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					styles: [{
						featureType: "administrative",
						elementType: "labels.text.fill",
						stylers: [{
							color: "#444444"
						}]
					}, {
						featureType: "landscape",
						elementType: "all",
						stylers: [{
							color: "#f2f2f2"
						}]
					}, {
						featureType: "poi",
						elementType: "all",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "road",
						elementType: "all",
						stylers: [{
							saturation: -100
						}, {
							lightness: 45
						}]
					}, {
						featureType: "road.highway",
						elementType: "all",
						stylers: [{
							visibility: "simplified"
						}]
					}, {
						featureType: "road.arterial",
						elementType: "labels.icon",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "transit",
						elementType: "all",
						stylers: [{
							visibility: "off"
						}]
					}, {
						featureType: "water",
						elementType: "all",
						stylers: [{
							color: r
						}, {
							visibility: "on"
						}]
					}]
				};
			t = new google.maps.Map(t, a);
			var o = new google.maps.Marker({
					position: e,
					map: t,
					animation: google.maps.Animation.DROP,
					title: "Hello World!"
				}),
				n = new google.maps.InfoWindow({
					content: '<div class="info-window-content"><h5>Company Name</h5><p>Description comes here...</p></div>'
				});
			google.maps.event.addListener(o, "click", function() {
				n.open(t, o)
			})
		}(t))
	}(),
	GoogleMap = function() {
		var i, s, r, t = document.getElementById("map-default");
		void 0 !== t && null != t && google.maps.event.addDomListener(window, "load", function(t) {
			i = t.getAttribute("data-lat"), s = t.getAttribute("data-lng"), r = t.getAttribute("data-zoom") ? parseInt(t.getAttribute("data-zoom")) : 12;
			var e = new google.maps.LatLng(i, s),
				a = {
					zoom: r,
					scrollwheel: !1,
					center: e,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
			t = new google.maps.Map(t, a);
			var o = new google.maps.Marker({
					position: e,
					map: t,
					animation: google.maps.Animation.DROP,
					title: "Hello World!"
				}),
				n = new google.maps.InfoWindow({
					content: '<div class="info-window-content"><h2>{{ site.product.name }} {{ site.product.name_long }}</h2><p>{{ site.product.description }}</p></div>'
				});
			google.maps.event.addListener(o, "click", function() {
				n.open(t, o)
			})
		}(t))
	}(),
	TextareaAutosize = function() {
		var t = $('[data-toggle="autosize"]');
		t.length && autosize(t)
	}(),
	Countdown = function() {
		var t = $(".countdown");
		t.length && t.each(function() {
			! function(t) {
				var e = t.data("countdown-date");
				t.countdown(e).on("update.countdown", function(t) {
					$(this).html(t.strftime('<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!D</span></div><div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hrs</span></div><div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div><div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>'))
				})
			}($(this))
		})
	}();
! function(d) {
	d.fn.countTo = function(c) {
		return c = c || {}, d(this).each(function() {
			var a = d.extend({}, d.fn.countTo.defaults, {
					from: d(this).data("from"),
					to: d(this).data("to"),
					speed: d(this).data("speed"),
					refreshInterval: d(this).data("refresh-interval"),
					decimals: d(this).data("decimals")
				}, c),
				t = Math.ceil(a.speed / a.refreshInterval),
				e = (a.to - a.from) / t,
				o = this,
				n = d(this),
				i = 0,
				s = a.from,
				r = n.data("countTo") || {};

			function l(t) {
				var e = a.formatter.call(o, t, a);
				n.text(e)
			}
			n.data("countTo", r), r.interval && clearInterval(r.interval), r.interval = setInterval(function() {
				i++, l(s += e), "function" == typeof a.onUpdate && a.onUpdate.call(o, s), t <= i && (n.removeData("countTo"), clearInterval(r.interval), s = a.to, "function" == typeof a.onComplete && a.onComplete.call(o, s))
			}, a.refreshInterval), l(s)
		})
	}, d.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1e3,
		refreshInterval: 100,
		decimals: 0,
		formatter: function(t, e) {
			return t.toFixed(e.decimals)
		},
		onUpdate: null,
		onComplete: null
	}
}(jQuery);
var Counter = function() {
		var t, e = ".counter",
			a = $(e);
		a.length && (t = a, inView(e).on("enter", function() {
			t.hasClass("counting-finished") || t.countTo({
				formatter: function(t, e) {
					return t.toFixed(e.decimals)
				},
				onUpdate: function(t) {},
				onComplete: function(t) {
					$(this).addClass("counting-finished")
				}
			})
		}))
	}(),
	Datepicker = function() {
		var t = $('[data-toggle="date"]'),
			e = $('[data-toggle="datetime"]'),
			a = $('[data-toggle="time"]');
		t.length && t.each(function() {
			! function(t) {
				t.flatpickr({
					enableTime: !1,
					allowInput: !0
				})
			}($(this))
		}), e.length && e.each(function() {
			! function(t) {
				t.flatpickr({
					enableTime: !0,
					allowInput: !0
				})
			}($(this))
		}), a.length && a.each(function() {
			! function(t) {
				t.flatpickr({
					noCalendar: !0,
					enableTime: !0,
					allowInput: !0
				})
			}($(this))
		})
	}(),
	Highlight = void $(".highlight").each(function(t, e) {
		! function(t, e) {
			$(e).before('<button class="action-item btn-clipboard" title="Copy to clipboard"><i data-feather="copy"></i></button>'), $(".btn-clipboard").tooltip().on("mouseleave", function() {
				$(this).tooltip("hide")
			});
			var a = new ClipboardJS(".btn-clipboard", {
				target: function(t) {
					return t.nextElementSibling
				}
			});
			a.on("success", function(t) {
				$(t.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"), t.clearSelection()
			}), a.on("error", function(t) {
				var e = "Press " + (/Mac/i.test(navigator.userAgent) ? "⌘" : "Ctrl-") + "C to copy";
				$(t.trigger).attr("title", e).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
			}), hljs.highlightBlock(e)
		}(0, e)
	}),
	Masonry = function() {
		var t = $(".masonry-container");
		t.length && t.each(function() {
			! function(t) {
				var e = t.find(".masonry"),
					o = t.find(".masonry-filter-menu"),
					a = o.find(".active"),
					n = a.data("filter"),
					i = e.imagesLoaded(function() {
						null != n && "" != n && ("*" != n && (n = "." + n), a.addClass("active"));
						var t = {
							itemSelector: ".masonry-item",
							filter: n
						};
						i.isotope(t)
					});
				o.on("click", "a", function(t) {
					t.preventDefault();
					var e = $(this),
						a = $(this).attr("data-filter");
					a = "*" == a ? "" : "." + a, i.isotope({
						filter: a
					}).on("arrangeComplete", function() {
						o.find("[data-filter]").removeClass("active"), e.addClass("active")
					})
				})
			}($(this))
		})
	}(),
	Notify = function() {
		var t = $('[data-toggle="notify"]');
		t.length && t.on("click", function(t) {
			t.preventDefault(),
				function(t, e, a, o, n, i) {
					$.notify({
						icon: a,
						title: " Bootstrap Notify",
						message: "Turning standard Bootstrap alerts into awesome notifications",
						url: ""
					}, {
						element: "body",
						type: o,
						allow_dismiss: !0,
						placement: {
							from: t,
							align: e
						},
						offset: {
							x: 15,
							y: 15
						},
						spacing: 10,
						z_index: 1080,
						delay: 2500,
						timer: 25e3,
						url_target: "_blank",
						mouse_over: !1,
						animate: {
							enter: n,
							exit: i
						},
						template: '<div class="alert alert-{0} alert-icon alert-group alert-notify" data-notify="container" role="alert"><div class="alert-group-prepend align-self-start"><span class="alert-group-icon"><i data-notify="icon"></i></span></div><div class="alert-content"><strong data-notify="title">{1}</strong><div data-notify="message">{2}</div></div><button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
					})
				}($(this).attr("data-placement"), $(this).attr("data-align"), $(this).attr("data-icon"), $(this).attr("data-type"), $(this).attr("data-animation-in"), $(this).attr("data-animation-out"))
		})
	}(),
	ProgressCircle = function() {
		var t = $(".progress-circle");
		t.length && t.each(function() {
			! function(t) {
				var e = t.data().progress,
					a = t.data().text ? t.data().text : "",
					o = t.data().textclass ? t.data().textclass : "progressbar-text",
					n = t.data().color ? t.data().color : "primary",
					i = t.data().trailwidth ? t.data().trailwidth : 2,
					s = t.data().shape ? t.data().shape : "circle",
					r = {
						color: PurposeStyle.colors.theme[n],
						strokeWidth: 7,
						trailWidth: i,
						text: {
							value: a,
							className: o
						},
						svgStyle: {
							display: "block"
						},
						duration: 1500,
						easing: "easeInOut"
					};
				if ("circle" == s) var l = new ProgressBar.Circle(t[0], r);
				else if ("semi-circle" == s) l = new ProgressBar.SemiCircle(t[0], r);
				l.animate(e / 100)
			}($(this))
		})
	}(),
	Select = function() {
		var t = $('[data-toggle="select"]');
		t.length && t.each(function() {
			! function(t) {
				t.select2({})
			}($(this))
		})
	}(),
	Sticky = function() {
		var t = $('[data-toggle="sticky"]');
		$(window).on("load resize", function() {
			t.length && t.each(function() {
				! function(t) {
					var e = {
						offset_top: t.data("sticky-offset") ? t.data("sticky-offset") : 0
					};
					1e3 < $(window).width() ? t.stick_in_parent(e) : t.trigger("sticky_kit:detach")
				}($(this))
			})
		})
	}(),
	WpxSwiper = function() {
		var t = $(".swiper-js-container");
		$(document).ready(function() {
			t.length && t.each(function(t, e) {
				! function(t) {
					var e = t.find(".swiper-container"),
						a = t.find(".swiper-pagination"),
						o = t.find(".swiper-button-next"),
						n = t.find(".swiper-button-prev"),
						i = e.data("swiper-effect") ? e.data("swiper-effect") : "slide",
						s = e.data("swiper-direction") ? e.data("swiper-direction") : "horizontal",
						r = e.data("swiper-initial-slide") ? e.data("swiper-initial-slide") : 0,
						l = !!e.data("swiper-autoheight") && e.data("swiper-autoheight"),
						c = !!e.data("swiper-autoplay") && e.data("swiper-autoplay"),
						d = !!e.data("swiper-centered-slides") && e.data("swiper-centered-slides"),
						p = e.data("swiper-pagination-type") ? e.data("swiper-pagination-type") : "bullets",
						u = e.data("swiper-items"),
						f = e.data("swiper-sm-items"),
						g = e.data("swiper-md-items"),
						m = e.data("swiper-lg-items"),
						h = e.data("swiper-xl-items"),
						y = e.data("swiper-space-between"),
						w = e.data("swiper-sm-space-between"),
						b = e.data("swiper-md-space-between"),
						v = e.data("swiper-lg-space-between"),
						$ = e.data("swiper-xl-space-between");
					u = u || 1, f = f || u, g = g || f, m = m || g, h = h || m, y = y || 0, w = w || y, b = b || w, v = v || b, $ = $ || v, new Swiper(e, {
						pagination: {
							el: a,
							clickable: !0,
							type: p
						},
						navigation: {
							nextEl: o,
							prevEl: n
						},
						slidesPerView: u,
						spaceBetween: y,
						initialSlide: r,
						autoHeight: l,
						centeredSlides: d,
						mousewheel: !1,
						keyboard: {
							enabled: !0,
							onlyInViewport: !1
						},
						grabCursor: !0,
						autoplay: c,
						effect: i,
						coverflowEffect: {
							rotate: 0,
							stretch: 0,
							depth: 50,
							modifier: 3,
							slideShadows: !1
						},
						speed: 800,
						direction: s,
						preventClicks: !0,
						preventClicksPropagation: !0,
						observer: !0,
						observeParents: !0,
						breakpointsInverse: !0,
						breakpoints: {
							575: {
								slidesPerView: f,
								spaceBetween: w
							},
							767: {
								slidesPerView: g,
								spaceBetween: b
							},
							991: {
								slidesPerView: m,
								spaceBetween: v
							},
							1199: {
								slidesPerView: h,
								spaceBetween: $
							}
						}
					})
				}($(e))
			})
		})
	}(),
	Tags = function() {
		var t = $('[data-toggle="tags"]');
		t.length && t.each(function() {
			! function(t) {
				t.tagsinput({
					tagClass: "badge badge-primary"
				})
			}($(this))
		})
	}(),
	Typed = function() {
		var t = $(".typed");
		t.length && t.each(function() {
			! function(t) {
				var e = "#" + t.attr("id"),
					a = (a = t.data("type-this")).split(","),
					o = new Typed(e, {
						strings: a,
						typeSpeed: 100,
						backSpeed: 70,
						loop: !0
					});
				inView(e).on("enter", function() {
					o.start()
				}).on("exit", function() {
					o.stop()
				})
			}($(this))
		})
	}(),
	ApexOrdersChart = function() {
		var a, t, e, o = document.querySelector("#apex-orders"),
			n = ($(".legend input"), [PurposeStyle.colors.theme.primary, PurposeStyle.colors.theme.warning]);
		if (o) return t = {
			chart: {
				type: "bar",
				stacked: !1,
				zoom: {
					enabled: !1
				},
				toolbar: {
					show: !1
				},
				shadow: {
					enabled: !1
				},
				animations: {
					enabled: !0,
					easing: "easeinout",
					speed: 800,
					animateGradually: {
						enabled: !0,
						delay: 150
					},
					dynamicAnimation: {
						enabled: !0,
						speed: 350
					}
				}
			},
			colors: n,
			plotOptions: {
				bar: {
					columnWidth: "20%",
					endingShape: "rounded"
				}
			},
			stroke: {
				width: 0,
				curve: "smooth"
			},
			series: [{
				name: "Delivered",
				type: "bar",
				data: [50, 30, 40, 60, 80, 100, 90, 90, 70, 90, 100]
			}, {
				name: "Rejected",
				type: "bar",
				data: [15, 20, 20, 15, 15, 30, 20, 15, 30, 20, 30]
			}],
			markers: {
				size: 0
			},
			xaxis: {
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				labels: {
					style: {
						colors: PurposeStyle.colors.gray[500],
						fontSize: "13px",
						fontFamily: PurposeStyle.fonts.base,
						cssClass: "apexcharts-xaxis-label"
					}
				}
			},
			yaxis: {
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				labels: {
					style: {
						color: PurposeStyle.colors.gray[500],
						fontSize: "13px",
						fontFamily: PurposeStyle.fonts.base,
						cssClass: "apexcharts-xaxis-label"
					}
				}
			},
			legend: {
				show: !1
			},
			grid: {
				borderColor: PurposeStyle.colors.gray[200],
				strokeDashArray: 3
			},
			dataLabels: {
				enabled: !1
			},
			tooltip: {
				shared: !0,
				intersect: !1,
				y: {
					formatter: function(t) {
						return void 0 !== t ? t.toFixed(0) + " orders" : t
					}
				}
			}
		}, e = o.dataset.height, t.colors = n, t.chart.height = e || 350, a = new ApexCharts(o, t), setTimeout(function() {
			a.render(),
				function() {
					for (var t = document.querySelectorAll(".legend input[type='checkbox']"), e = 0; e < t.length; e++) t[e].checked || a.toggleSeries(t[e].value)
				}()
		}, 300), {
			toggleSeries: function(t) {
				a.toggleSeries(t.value)
			}
		}
	}(),
	ApexTasksChart = function() {
		var t, e, a, o = document.querySelector("#apex-tasks"),
			n = ($(".legend input"), [PurposeStyle.colors.theme.primary, PurposeStyle.colors.theme.warning]);
		o && (e = {
			chart: {
				type: "bar",
				stacked: !0,
				zoom: {
					enabled: !1
				},
				toolbar: {
					show: !1
				},
				shadow: {
					enabled: !1
				},
				animations: {
					enabled: !0,
					easing: "easeinout",
					speed: 800,
					animateGradually: {
						enabled: !0,
						delay: 150
					},
					dynamicAnimation: {
						enabled: !0,
						speed: 350
					}
				}
			},
			colors: n,
			plotOptions: {
				bar: {
					columnWidth: "20%",
					endingShape: "rounded"
				}
			},
			stroke: {
				width: 0,
				curve: "smooth"
			},
			series: [{
				name: "Finished",
				type: "bar",
				data: [50, 30, 40, 60, 80, 100, 90, 90, 70, 90, 100]
			}, {
				name: "Unfinished",
				type: "bar",
				data: [15, 20, 20, 15, 15, 30, 20, 15, 30, 20, 30]
			}],
			markers: {
				size: 0
			},
			xaxis: {
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				labels: {
					style: {
						colors: PurposeStyle.colors.gray[500],
						fontSize: "13px",
						fontFamily: PurposeStyle.fonts.base,
						cssClass: "apexcharts-xaxis-label"
					}
				}
			},
			yaxis: {
				axisBorder: {
					show: !1
				},
				axisTicks: {
					show: !1
				},
				labels: {
					style: {
						color: PurposeStyle.colors.gray[500],
						fontSize: "13px",
						fontFamily: PurposeStyle.fonts.base,
						cssClass: "apexcharts-xaxis-label"
					}
				}
			},
			legend: {
				show: !1
			},
			grid: {
				borderColor: PurposeStyle.colors.gray[200],
				strokeDashArray: 3
			},
			dataLabels: {
				enabled: !1
			},
			tooltip: {
				shared: !0,
				intersect: !1,
				y: {
					formatter: function(t) {
						return void 0 !== t ? t.toFixed(0) + " tasks" : t
					}
				}
			}
		}, a = o.dataset.height, e.colors = n, e.chart.height = a || 350, t = new ApexCharts(o, e), setTimeout(function() {
			t.render()
		}, 300))
	}();
//# sourceMappingURL=quick-website.js.map