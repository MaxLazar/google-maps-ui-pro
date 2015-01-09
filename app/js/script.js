 var WebFontConfig = {
         google: {
             families: ["Open+Sans:400,700:latin"]
         }
     },
     getLuma = function(a) {
         var n, e, i, t;
         return a = a.substring(1), n = parseInt(a, 16), e = n >> 16 & 255, i = n >> 8 & 255, t = n >> 0 & 255, .2126 * e + .7152 * i + .0722 * t
     };
 ! function() {
     var a = document.createElement("script");
     a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", a.type = "text/javascript", a.async = "true";
     var n = document.getElementsByTagName("script")[0];
     n.parentNode.insertBefore(a, n)
 }();

 var mx_gmaps_lang = {
     search: "Search",
     marker: "Marker",
     marker_icon: "Icon",
     line: "Line",
     polygon: "Polygon",
     marker_show: "For create a marker - click on map",
     cancel: "Cancel",
     title_placeholder: "Untitled",
     text: "Text",
     style: "Style",
     symbol: "Symbol",
     latlong: "Lat / Lon",
     latitude: "Latitude",
     longitude: "Longitude",
     delete_message: "Are you sure you want to delete this?",
     delete_confirm: "Delete",
     line_show: "For create a line - click on map",
     desc_placeholder: "No description",
     stroke: "Stroke",
     fill: "Fill",
     polygon_show: "For create a polygon - click on map",
     objects: "Objects"
 };

 var data = {
     color_set1: ["#eef278", "#ecf8cd", "#caec71", "#aee66c", "#91ccb4", "#c3dff4", "#7fb8e7", "#5fa3d5", "#478ac3", "#688fbe", "#7280ac", "#a28dd0"],
     color_set2: ["#c294e9", "#cb7b97", "#e96f6e", "#dd8c86", "#ed9b75", "#edc777", "#edeae6", "#ffffff", "#cfcfcf", "#707070", "#1a1a1a", "#000000"],
     //markers_icons: ["marker_1_1", "marker_1_2", "marker_1_3", "marker_1_4", "marker_1_5", "marker_1_6", "marker_1_7", "marker_1_8", "marker_1_9", "marker_1_10", "marker_1_11", "marker_1_12", "marker_2_1", "marker_2_2", "marker_2_3", "marker_2_4", "marker_2_5", "marker_2_6", "marker_2_7", "marker_2_8", "marker_2_9", "marker_2_10", "marker_2_11", "marker_2_12", "marker_3_1", "marker_3_2", "marker_3_3", "marker_3_4", "marker_3_5", "marker_3_6", "marker_3_7", "marker_3_8", "marker_3_9", "marker_3_10", "marker_3_11", "marker_3_12", "marker_4_1", "marker_4_2", "marker_4_3", "marker_4_4", "marker_4_5", "marker_4_6", "marker_4_7", "marker_4_8", "marker_4_9", "marker_4_10", "marker_4_11", "marker_4_12"],
     markers_icons: ['accountancy.png', 'arts-crafts.png', 'astrology.png', 'automotive.png', 'bars.png', 'birds.png', 'books-media.png', 'breakfast-n-brunch.png', 'business.png', 'cake-shop.png', 'clothings.png', 'clubs.png', 'coffee-n-tea.png', 'commercial-places.png', 'community.png', 'computers.png', 'concerts.png', 'cookbooks.png', 'dance-clubs.png', 'default.png', 'dental.png', 'doctors.png', 'education.png', 'electronics.png', 'employment.png', 'engineering.png', 'entertainment.png', 'event.png', 'exhibitions.png', 'fashion.png', 'festivals.png', 'financial-services.png', 'food.png', 'furniture-stores.png', 'games.png', 'gifts-flowers.png', 'government.png', 'halloween.png', 'health-medical.png', 'home-services.png', 'hotels.png', 'industries.png', 'internet.png', 'jewelry.png', 'jobs.png', 'karaoke.png', 'law.png', 'lawn-garden.png', 'libraries.png', 'local-services.png', 'lounges.png', 'magazines.png', 'manufacturing.png', 'marker-new1_12.png', 'mass-media.png', 'massage-therapy.png', 'matrimonial.png', 'medical.png', 'meetups.png', 'miscellaneous-for-sale.png', 'mobile-phones.png', 'movies.png', 'museums.png', 'musical-instruments.png', 'musical.png', 'nightlife.png', 'parks.png', 'parties.png', 'pets.png', 'photography.png', 'pizza.png', 'places.png', 'play-schools.png', 'playgrounds.png', 'pool-halls.png', 'printing-graphic-arts.png', 'professional.png', 'real-estate.png', 'religious-organizations.png', 'residential-places.png', 'restaurants.png', 'retail-stores.png', 'saloon.png', 'schools.png', 'science.png', 'shopping.png', 'sporting-goods.png', 'sports.png', 'swimming-pools.png', 'telemarketing.png', 'tickets.png', 'tiffin-services.png', 'tires-accessories.png', 'tools-hardware.png', 'tours.png', 'toys-store.png', 'transport.png', 'travel.png', 'tutors.png', 'vacant-land.png'],
     object_list: [{
         title: "New York City",
         description: "",
         color: "",
         symbol: "",
         lat: "",
         lng: "",
         icon: ""
     }, {
         title: "Dingshu",
         description: "",
         color: "",
         symbol: "",
         lat: "",
         lng: "",
         icon: ""
     }, {
         title: "Göteborg",
         description: "",
         color: "",
         symbol: "",
         lat: "",
         lng: "",
         icon: ""
     }, {
         title: "Bastan",
         description: "",
         color: "",
         symbol: "",
         lat: "",
         lng: "",
         icon: ""
     }, {
         title: "Itaberaba",
         description: "",
         color: "",
         symbol: "",
         lat: "",
         lng: "",
         icon: ""
     }, {
         title: "Kyjov",
         description: "",
         color: "",
         symbol: "",
         lat: "",
         lng: "",
         icon: ""
     }]

 };


 //http://www.jqueryrain.com/?o_JANjxW
 ;
 (function($) {
     if (!$.mx) {
         $.mx = {};
     };

     $.mx.gMaps = function(el, options) {
         var base = this;
         base._shapes = Array();
         base._newShapeNextId = 0;

         // types

         var RECTANGLE = google.maps.drawing.OverlayType.RECTANGLE;
         var CIRCLE = google.maps.drawing.OverlayType.CIRCLE;
         var POLYGON = google.maps.drawing.OverlayType.POLYGON;
         var POLYLINE = google.maps.drawing.OverlayType.POLYLINE;
         var MARKER = google.maps.drawing.OverlayType.MARKER;

         // map types
         var SATELLITE = google.maps.MapTypeId.SATELLITE;
         var ROADMAP = google.maps.MapTypeId.ROADMAP
         var HYBRID = google.maps.MapTypeId.HYBRID
         var TERRAIN = google.maps.MapTypeId.TERRAIN

         base.typeDesc = function(type) {
             switch (type) {
                 case RECTANGLE:
                     return "rectangle";

                 case CIRCLE:
                     return "circle";

                 case POLYGON:
                     return "polygon";

                 case POLYLINE:
                     return "polyline";

                 case MARKER:
                     return "marker";

                 case null:
                     return "null";

                 default:
                     return "UNKNOWN GOOGLE MAPS OVERLAY TYPE";
             }
         }

         // Access to jQuery and DOM versions of element
         base.$el = $(el);
         base.el = el;

         // Add a reverse reference to the DOM object
         base.$el.data("mx.gMaps", base);

         base.init = function() {
             base.options = $.extend({},
                 $.mx.gMaps.defaultOptions, options);

             if (base.options.prefix == '') {
                 base.options.prefix = 'ft_' + Math.floor(Math.random() * 100000000) + '_';
             }

             base.map_init();
             base.addMenu();
             base.addUIhooks();
             base.RedactorOn();
         };

         base.map_init = function() {
             var mapconteiner = document.createElement('div');
             mapconteiner.style.width = "100%";
             mapconteiner.style.height = "100%";
             mapconteiner.className = "map-canvas";
             base.$el.append(mapconteiner);

             var mapOptions = {
                 zoom: 8,
                 center: new google.maps.LatLng(base.options.latitude, base.options.longitude)
             };

             base.map = new google.maps.Map(mapconteiner,
                 mapOptions);

             //add geocoding;
             base.geocoder = new google.maps.Geocoder();

             base.drawingmanager();
         }

         base.drawingmanager = function(shape) {
             base.drawing = new google.maps.drawing.DrawingManager(base.options.DrawingManagerOptions), base.drawing.setMap(base.map);

             google.maps.event.addListener(base.drawing, 'overlaycomplete', function(event) {
                 base.newShape(event);
             });
         }


         base.newShape = function(event) {
             event.overlay.setOptions({
                 editable: false,
                 fillColor: '#5FA3D5',
                 strokeColor: '#478AC3'
             });

             var shape = event.overlay;

             shape.type = event.type;
             shape.action = base.action;
             shape.appId = base._newShapeNextId;

             base._newShapeNextId++;

             base.selectionSet(shape);
             base.AddListeners(shape);
             base._shapes.push(shape);

             base.drawing.setOptions({
                 drawingMode: null
             });

             base.openEditPanel();
         };


         base.openEditPanel = function() {
             var n = base.$el.find(".js-tab-content__" + base.ActiveObject.action + "-expanded");
             base.$el.find(".js-tab-content").removeClass("is-active");
             n.addClass("is-active");
             n.find(".js-subtab__radio").attr("checked", !1).first().prop("checked", !0).change();
             base.action == 'none';
         }

         base.selectionSet = function(newSelection) {
             if (newSelection == base.ActiveObject) {
                 return;
             }

             if (base.ActiveObject != null) {
                 base.ActiveObject.setOptions({
                     editable: false
                 });
                 base.ActiveObject = null;


             }

             if (newSelection != null) {
                 base.ActiveObject = newSelection;
                 newSelection.setOptions({

                     editable: true
                 });
             }
         }


         base.RemoveShape = function(id) {
             var found = false;

             for (var i = 0; i < base._shapes.length && !found; i++) {
                 if (base._shapes[i].appId === base.ActiveObject.appId) {
                     base._shapes.splice(i, 1);
                     found = true;
                 }
             }
             base.ActiveObject = null;
         }

         base.AddPathListeners = function(shape, path) {
             google.maps.event.addListener(
                 path,
                 'insert_at',
                 function() {
                     base.onShapeEdited(shape)
                 });
             google.maps.event.addListener(
                 path,
                 'remove_at',
                 function() {
                     base.onShapeEdited(shape)
                 });
             google.maps.event.addListener(
                 path,
                 'set_at',
                 function() {
                     base.onShapeEdited(shape)
                 });
         }


         base.onShapeClicked = function(shape) {
             base.selectionSet(shape);
             base.openEditPanel();
         }

         base.onShapeEdited = function(shape) {
             console.log('edit')
         }

         base.AddListeners = function(shape) {

             google.maps.event.addListener(
                 shape,
                 'click',
                 function() {
                     base.onShapeClicked(shape);
                 });

             switch (shape.type) {
                 case RECTANGLE:
                     google.maps.event.addListener(
                         shape,
                         'bounds_changed',
                         function() {
                             base.onShapeEdited(shape);
                         });
                     break;

                 case CIRCLE:
                     google.maps.event.addListener(
                         shape,
                         'center_changed',
                         function() {
                             base.onShapeEdited(shape);
                         });
                     google.maps.event.addListener(
                         shape,
                         'radius_changed',
                         function() {
                             base.onShapeEdited(shape);
                         });
                     break;

                 case POLYLINE:
                     var path = shape.getPath();
                     base.AddPathListeners(shape, path);
                     break;

                 case POLYGON:
                     var paths = shape.getPaths();

                     var n = paths.getLength();
                     for (var i = 0; i < n; i++) {
                         var path = paths.getAt(i);
                         base.AddPathListeners(shape, path);
                     }
                     break;
             }
         }

         base.SaveData = function() {
             switch (base.ActiveObject.type) {
                 case 'polygon':
                     options = {
                         fillColor: base.pFillColor.val(),
                         fillOpacity: base.pFillOpacity.val() / 100,
                         strokeColor: base.pStColor.val(),
                         strokeOpacity: base.pStOpacity.val() / 100,
                         strokeWeight: base.pStWeight.val()
                     }
                     break;
                 case 'polyline':
                     options = {
                         strokeColor: base.lStColor.val(),
                         strokeOpacity: base.lStOpacity.val() / 100,
                         strokeWeight: base.lStWeight.val()
                     }
                     break;
                 case 'marker':
                     options = {
                         title: base.mTitle.val(),
                         icon: base.mIcon.val()
                     }
                     /*
                      'mTitle', 'mDesc'
                     */
                     base.ActiveObject.infowindow = new google.maps.InfoWindow({
                         content: base.mDesc.val()
                     });
                     base.ActiveObject.infowindow.open(base.map, base.ActiveObject);
                     break;
             }
             base.ActiveObject.setOptions(options);
         }

         base.SetTool = function() {
             switch (base.action) {
                 case 'marker':
                     base.drawing.setOptions({
                         drawingMode: MARKER
                     });
                     break;

                 case 'line':
                     base.drawing.setOptions({
                         drawingMode: POLYLINE
                     });
                     break;
                 case 'polygon':
                     base.drawing.setOptions({
                         drawingMode: POLYGON
                     });
                     break;
                 default:
                     base.drawing.setOptions({
                         drawingMode: null
                     });
                     break;
             }
         }

         base.changeType = function($type) {
             base.map.setOptions({
                 mapTypeId: eval($type)
             });
         }

         base.changeStyle = function($styles) {
             base.map.setOptions({
                 styles: $styles
             });
         }

         base.addTransit = function() {
             if (!base.transitLayer) {
                 base.transitLayer = new google.maps.TransitLayer();
                 base.transitLayer.setMap(base.map);

             }
             return true;
         }

         base.removeTransit = function() {
             if (base.transitLayer) {
                 base.transitLayer.setMap(null);
                 base.transitLayer = null;
             }
             return true;
         }

         base.addTraffic = function() {
             if (!base.trafficLayer) {
                 base.trafficLayer = new google.maps.TrafficLayer();
                 base.trafficLayer.setMap(base.map);

             }
             return true;
         }

         base.removeTraffic = function() {
             if (base.trafficLayer) {
                 base.trafficLayer.setMap(null);
                 base.trafficLayer = null;
             }
             return true;
         }
         base.addCloud = function() {
             if (!base.cloudLayer) {
                 base.cloudLayer = new google.maps.weather.CloudLayer();
                 base.cloudLayer.setMap(base.map);

             }
             return true;
         }

         base.removeCloud = function() {
             if (base.cloudLayer) {
                 base.cloudLayer.setMap(null);
                 base.cloudLayer = null;
             }
             return true;
         }
         //@todo add TemperatureUnit switch
         base.addWeather = function() {
             if (!base.weatherLayer) {
                 base.weatherLayer = new google.maps.weather.WeatherLayer({
                     temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
                 });
                 base.weatherLayer.setMap(base.map);

             }
             return true;
         }

         base.removeWeather = function() {
             if (base.weatherLayer) {
                 base.weatherLayer.setMap(null);
                 base.weatherLayer = null;
             }
             return true;
         }

         base.geoCoding = function(address) {
             console.log('search');



             if (base.geocoder) {
                 base.geocoder.geocode({
                     'address': address
                 }, function(results, status) {
                     if (status == google.maps.GeocoderStatus.OK) {
                         console.log(results[0].geometry.location);
                     } else {
                         console.log("Geocoding failed: " + status);
                     }
                 });
             }
         }

         base.RedactorOn = function() {

             base.$el.find('.input_type_description').redactor({
                 focus: false,
                 buttons: ['formatting', 'bold', 'italic', 'deleted',
                     'unorderedlist', 'orderedlist', 'outdent', 'indent',
                     'image', 'video', 'link', 'alignment'
                 ],
                 maxHeight: 125,
                 minHeight: 125
             });

         }

         base.RedactorOff = function() {
             base.$el.find('.input_type_description').redactor('destroy');

         }

         base.addMenu = function() {

             $.extend(data, data, mx_gmaps_lang, base.options);
             var source = $("#entry-template").html();
             var output = Mustache.render(source, data);
             base.$el.append(output);

             base.$el.find('.js-tab__radio').each(function() {
                 $(this).parent("label").toggleClass("is-active", $(this).is(":checked"));

             });

             base.$el.find('.js-tab__radio').on("change", function() {
                 base.action = $(this).val();
                 base.SetTool();
                 base.selectionSet();

                 var a = base.$el.find(".js-tab-content__" + $(this).val());
                 base.$el.find(".js-tab__radio").parent("label").removeClass("is-active");
                 $(this).parent("label").toggleClass("is-active", $(this).is(":checked"))

                 base.$el.find(".js-tab-content").removeClass("is-active");
                 a.find(".js-subtab__radio").attr("checked", !1).first().prop("checked", !0).change();
                 $(this).is(":checked") && a.addClass("is-active");
             });

             $('[type="radio"]').on("change", function() {
                 $('[name="' + $(this).attr("name") + '"]').parent("label").removeClass("is-active"), $(this).parent("label").toggleClass("is-active", $(this).is(":checked"))

             });

             $('.color__radio, .input_type_latitude, .input_type_longitude, .input_type_opacity, .input_type_stroke').on("change", function() {
                 if (window.event && event.type == "propertychange" && event.propertyName != "value")
                     return;
                 window.clearTimeout($(this).data("timeout"));
                 $(this).data("timeout", setTimeout(function() {
                     base.SaveData();
                 }, 500));
             });

             base.$el.find(".js-cancel").on("click", function(a) {
                 a.preventDefault(), base.$el.find(".mx_js-tabs :checked").attr("checked", !1).change()
                 base.action = 'none';
                 base.SetTool();
             });

             base.$el.find(".delete_confirm").on("click", function(e) {
                 e.preventDefault();
                 base.ActiveObject.setMap(null);
                 base.RemoveShape();
                 base.$el.find(".mx_js-tabs :checked").attr("checked", !1).change();
             });

             base.$el.find(".js-subtab__radio").on("change", function() {
                 "close-tab" === $(this).val() ? base.$el.find(".mx_js-tabs :checked").attr("checked", !1).change() : $(this).parents('.mx_tab-content:first').find(" .js-subtab-content:first-child").css("marginLeft", -101 * $(this).val() + "%")
             });

             base.$el.find(".input_type_search").bind("input propertychange", function(evt) {
                 if (window.event && event.type == "propertychange" && event.propertyName != "value")
                     return;
                 window.clearTimeout($(this).data("timeout"));
                 var address = $(this).val();
                 $(this).data("timeout", setTimeout(function() {
                     base.geoCoding(address);
                 }, 500));

             });

             base.$el.find(".marker__icon").bind("click", function(evt) {
                 var _img_url = $(this).attr('src');
                 base.mIcon.val(_img_url);
                 base.SaveData();
             });

             base.$el.find(".js-color__radio").on("change", function() {
                 var a = $(this).val();
                 //	$(this).parents(".color-picker:first").find(".is-active").removeClass("is-active")
                 //	 $(this).parent("label").addClass("is-active");
                 console.log(".js-color-probe__" + $(this).attr("name"));
                 $(".js-color-probe__" + $(this).attr("name")).toggleClass("is-inverted", getLuma(a) < 160).css("backgroundColor", a), $(".js-color-input__" + $(this).attr("name")).val(a).css("backgroundColor", a);
             });

             base.$el.find(".js-plus, .js-minus").on("click", function() {
                 var a = $(this).siblings(".js-input"),
                     n = parseInt(a.data("increment")) || 1,
                     e = parseInt(a.data("min")) || 0,
                     i = parseInt(a.data("max")) || 65536;
                 "" === a.val() ? a.val(e) : $(this).is(".js-plus") ? a.val(parseInt(a.val()) + n) : $(this).is(".js-minus") && a.val(parseInt(a.val()) - n), parseInt(a.val()) < e ? a.val(e) : parseInt(a.val()) > i && a.val(i)
             });

             base.$el.find(".js-features-list__item-delete").on("click", function() {
                 $(this).parent().remove()
             });

             base.$el.find(" .input_type_opacity, .input_type_stroke, .input_type_color, .input_type_title, .input_type_description").bind("input propertychange", function(evt) {
                 if (window.event && event.type == "propertychange" && event.propertyName != "value")
                     return;
                 window.clearTimeout($(this).data("timeout"));
                 $(this).data("timeout", setTimeout(function() {
                     base.SaveData();
                 }, 500));
             });
             //http://iscrolljs.com/
             //$('.sortable').sortable('destroy');


             /*
            var myScroll = new IScroll('.js-subtab-content__features', {
                scrollbars: true,
                fadeScrollbars: true,
                interactiveScrollbars: true
            });
*/
             $('.sortable').sortable().bind('sortupdate', function() {
                 console.log('sort');
             });

         };

         base.addUIhooks = function() {
             base.search_field = base.$el.find('#' + base.options.prefix + '_search_field');
             var field = [
                 'mTitle', 'mDesc', 'mColor', 'mIcon', 'mLat', 'mlng', 'lTitle', 'lDesc', 'lStOpacity', 'lStWeight', 'lStColor', 'pTitle', 'pDesc', 'pStWeight', 'pStOpacity', 'pStColor', 'pFillOpacity', 'pFillColor'
             ];
             $.each(field, function(index, name) {
                 base[name] = base.$el.find('#' + base.options.prefix + '_' + name);
             })
         }

         // Run initializer
         base.init();




     };



     $.mx.gMaps.defaultOptions = {
         address: '',
         latitude: 40.714623,
         longitude: -74.006605,
         zoom: 1,
         markers: [],
         controls: [],
         icons_path: '/images/icons/',
         scrollwheel: true,
         html_prepend: '',
         html_append: '',
         icon: {
             image: "http://www.google.com/mapfiles/marker.png",
             shadow: "http://www.google.com/mapfiles/shadow50.png",
             iconsize: [20, 34],
             shadowsize: [37, 34],
             iconanchor: [9, 34],
             infowindowanchor: [9, 2]
         },
         prefix: '',
         action: 'none',
         DrawingManagerOptions: {
             drawingControl: false,
             drawingMode: null,
             polygonOptions: {
                 fillColor: '#E96F6E',
                 fillOpacity: 0.5,
                 strokeColor: '#CB7B97',
                 strokeWeight: 2,
                 clickable: true,
                 editable: true,
                 zIndex: 1
             },
             polylineOptions: {
                 strokeColor: '#E96F6E',
                 strokeWeight: 2,
                 strokeOpacity: 0.8,
                 clickable: true,
                 editable: true,
                 zIndex: 1
             },
             markerOptions: {
                 title: 'Untitled',
                 draggable: true
             }
         }
     };

     $.fn.mx_gMaps = function(options) {
         return this.each(function() {
             (new $.mx.gMaps(this, options));
         });
     };

 })(jQuery);


 $(function() {

     $(".mx_map_container").mx_gMaps({
         icons_path: 'img/icons/'
     });

 });