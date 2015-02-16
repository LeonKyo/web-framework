# XM-Web-starter-kit 

Frontend code structure for XM-Web-starter-kit. 

Generated 13 February 2015 using [Frontend.md](http://github.com/animade/frontend-md)

---

### Stylesheets

````
assets/
|
|- scss/
|  |- _ie.scss _______________________________ # IE Styles -----------------------------------------------------------------
|  |- main.scss ______________________________ # General imports ------------------------------------------------------------
|
|  |- vendor/
|    |- _magnific-popups.scss ________________ # Magnific Popup CSS
|    |- _selectize.default.scss ______________ # 
|
|    |- neat/
|      |- _neat-helpers.scss _________________ # Functions
|      |- _neat.scss _________________________ # Bourbon Neat 1.6.0.pre
|
|      |- settings/
|        |- _grid.scss _______________________ # 
|        |- _visual-grid.scss ________________ # 
|
|      |- grid/
|        |- _fill-parent.scss ________________ # 
|        |- _grid.scss _______________________ # 
|        |- _media.scss ______________________ # 
|        |- _omega.scss ______________________ # Remove last element gutter
|        |- _outer-container.scss ____________ # 
|        |- _pad.scss ________________________ # 
|        |- _private.scss ____________________ # 
|        |- _reset.scss ______________________ # 
|        |- _row.scss ________________________ # 
|        |- _shift.scss ______________________ # 
|        |- _span-columns.scss _______________ # 
|        |- _to-deprecate.scss _______________ # 
|        |- _visual-grid.scss ________________ # 
|
|      |- functions/
|        |- _new-breakpoint.scss _____________ # 
|        |- _private.scss ____________________ # Checks if a number is even
|
|    |- bourbon/
|      |- _bourbon-deprecated-upcoming.scss __ # These mixins/functions are deprecated
|      |- _bourbon.scss ______________________ # Settings
|
|      |- settings/
|        |- _prefixer.scss ___________________ # Variable settings for /addons/prefixer.scss
|        |- _px-to-em.scss ___________________ # 
|
|      |- helpers/
|        |- _convert-units.scss ______________ # Helper function for str-to-num fn.
|        |- _gradient-positions-parser.scss __ # 
|        |- _is-num.scss _____________________ # Helper for linear-gradient-parser
|        |- _linear-angle-parser.scss ________ # Private function for linear-gradient-parser
|        |- _linear-gradient-parser.scss _____ # 
|        |- _linear-positions-parser.scss ____ # 
|        |- _linear-side-corner-parser.scss __ # Private function for linear-gradient-parser
|        |- _radial-arg-parser.scss __________ # 
|        |- _radial-gradient-parser.scss _____ # 
|        |- _radial-positions-parser.scss ____ # 
|        |- _render-gradients.scss ___________ # User for linear and radial gradients within background-image or border-image properties
|        |- _shape-size-stripper.scss ________ # 
|        |- _str-to-num.scss _________________ # Helper function for linear/radial-gradient-parsers.
|
|      |- functions/
|        |- _assign.scss _____________________ # 
|        |- _color-lightness.scss ____________ # Programatically determines whether a color is light or dark
|        |- _flex-grid.scss __________________ # Flexible grid
|        |- _golden-ratio.scss _______________ # 
|        |- _grid-width.scss _________________ # 
|        |- _modular-scale.scss ______________ # Scaling Variables
|        |- _px-to-em.scss ___________________ # Convert pixels to ems
|        |- _px-to-rem.scss __________________ # Convert pixels to rems
|        |- _strip-units.scss ________________ # Srtips the units from a value. e.g. 12px -> 12
|        |- _tint-shade.scss _________________ # Add percentage of white to a color
|        |- _transition-property-name.scss ___ # Return vendor-prefixed property names if appropriate
|        |- _unpack.scss _____________________ # Convert shorthand to the 4-value syntax
|
|      |- css3/
|        |- _animation.scss __________________ # http://www.w3.org/TR/css3-animations/#the-animation-name-property-
|        |- _appearance.scss _________________ # 
|        |- _backface-visibility.scss ________ # Backface-visibility mixin
|        |- _background-image.scss ___________ # Background-image property for adding multiple background images with
|        |- _background.scss _________________ # Background property for adding multiple backgrounds using shorthand
|        |- _border-image.scss _______________ # 
|        |- _border-radius.scss ______________ # Shorthand Border-radius mixins
|        |- _box-sizing.scss _________________ # 
|        |- _calc.scss _______________________ # 
|        |- _columns.scss ____________________ # 
|        |- _filter.scss _____________________ # 
|        |- _flex-box.scss ___________________ # CSS3 Flexible Box Model and property defaults
|        |- _font-face.scss __________________ # Order of the includes matters, and it is: normal, bold, italic, bold+italic.
|        |- _font-feature-settings.scss ______ # Font feature settings mixin and property default.
|        |- _hidpi-media-query.scss __________ # HiDPI mixin. Default value set to 1.3 to target Google Nexus 7 (http://bjango.com/articles/min-device-pixel-ratio/)
|        |- _hyphens.scss ____________________ # 
|        |- _image-rendering.scss ____________ # 
|        |- _keyframes.scss __________________ # Adds keyframes blocks for supported prefixes, removing redundant prefixes in the block's content
|        |- _linear-gradient.scss ____________ # 
|        |- _perspective.scss ________________ # 
|        |- _placeholder.scss ________________ # 
|        |- _radial-gradient.scss ____________ # Requires Sass 3.1+
|        |- _transform.scss __________________ # 
|        |- _transition.scss _________________ # Shorthand mixin. Supports multiple parentheses-deliminated values for each variable.
|        |- _user-select.scss ________________ # 
|
|      |- addons/
|        |- _button.scss _____________________ # 
|        |- _clearfix.scss ___________________ # Modern micro clearfix provides an easy way to contain floats without adding additional markup.
|        |- _directional-values.scss _________ # directional-property mixins are shorthands
|        |- _ellipsis.scss ___________________ # 
|        |- _font-family.scss ________________ # 
|        |- _hide-text.scss __________________ # 
|        |- _html5-input-types.scss __________ # Generate a variable ($all-text-inputs) with a list of all html5
|        |- _position.scss ___________________ # 
|        |- _prefixer.scss ___________________ # Example: @include prefixer(border-radius, $radii, webkit ms spec);
|        |- _retina-image.scss _______________ # 
|        |- _size.scss _______________________ # 
|        |- _timing-functions.scss ___________ # CSS cubic-bezier timing functions. Timing functions courtesy of jquery.easie (github.com/jaukia/easie)
|        |- _triangle.scss ___________________ # 
|        |- _word-wrap.scss __________________ # 
|
|  |- tpl/
|    |- _svgsprite-template.scss _____________ # 
|    |- scss.imgsprite.template.mustache _____ # -
|
|  |- partials/
|    |- _base.scss ___________________________ # 
|    |- _buttons.scss ________________________ # 
|    |- _forms.scss __________________________ # 
|    |- _helper.scss _________________________ # 
|    |- _links.scss __________________________ # 
|    |- _lists.scss __________________________ # 
|    |- _normalize.scss ______________________ # Normalize.scss based on Nicolas Gallagher and Jonathan Neal's
|    |- _tables.scss _________________________ # 
|    |- _typography.scss _____________________ # 
|
|  |- module/
|    |- _footer.scss _________________________ # 
|    |- _header.scss _________________________ # 
|
|  |- mixin/
|    |- _all.scss ____________________________ # Wrapper that imports all other mixins
|    |- _baseline.scss _______________________ # Baseline mixin -------------------------------------------------------------
|    |- _grid.scss ___________________________ # Column mixin --------------------------------------------------------------
|    |- _imgsprite.scss ______________________ # 
|    |- _media.scss __________________________ # Media-max mixin ------------------------------------------------------------
|    |- _rem.scss ____________________________ # Rem mixin -----------------------------------------------------------------
|    |- _svg.scss ____________________________ # 
|    |- _svgsprite.scss ______________________ # 
|    |- _triangle.scss _______________________ # Triangle mixin -------------------------------------------------------------
|
|  |- base/
|    |- _config_global.scss __________________ # Library imports ------------------------------------------------------------
|    |- _config_site.scss ____________________ # Accent colors --------------------------------------------------------------
|    |- _functions.scss ______________________ # Functions ------------------------------------------------------------------
|    |- _state.scss __________________________ # Global states -------------------------------------------------------------
````

### Javascripts

````
assets/
|
|- js/
|
|  |- modules/
|    |- helper.js ____________________________ # module.exports = {
|    |- main.js ______________________________ # 
|    |- test.js ______________________________ # Dom ready
|
|  |- ie/
|
|    |- head/
|      |- html5shiv.min.js ___________________ # 
|
|    |- body/
|      |- ie-behavior-span.js ________________ # HTML5 Placeholder Attribute Polyfill (IE Behavior)
|      |- respond.min.js _____________________ # 
|
|  |- bower_components/
|
|    |- velocity/
|      |- .bower.json ________________________ # -
|      |- bower.json _________________________ # -
|      |- velocity.js ________________________ # 
|      |- velocity.min.js ____________________ # 
|      |- velocity.ui.js _____________________ # 
|      |- velocity.ui.min.js _________________ # VelocityJS.org UI Pack (5.0.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci.
|
|    |- underscore/
|      |- .bower.json ________________________ # -
|      |- .eslintrc __________________________ # -
|      |- .gitignore _________________________ # -
|
|      |- LICENSE/
|      |- README.md __________________________ # -
|      |- bower.json _________________________ # -
|      |- component.json _____________________ # -
|      |- package.json _______________________ # -
|      |- underscore-min.js __________________ # Underscore.js 1.7.0
|      |- underscore-min.map _________________ # -
|      |- underscore.js ______________________ # Underscore.js 1.7.0
|
|    |- sifter/
|      |- .bower.json ________________________ # -
|      |- .gitignore _________________________ # -
|      |- .npmignore _________________________ # -
|      |- README.md __________________________ # -
|      |- bower.json _________________________ # -
|      |- package.json _______________________ # -
|      |- sifter.js __________________________ # 
|      |- sifter.min.js ______________________ # 
|
|    |- selectize/
|      |- .bower.json ________________________ # -
|      |- .gitignore _________________________ # -
|
|      |- LICENSE/
|      |- README.md __________________________ # -
|      |- bower.json _________________________ # -
|
|      |- dist/
|
|        |- less/
|          |- selectize.bootstrap2.less ______ # 
|          |- selectize.bootstrap3.less ______ # 
|          |- selectize.default.less _________ # 
|          |- selectize.legacy.less __________ # 
|          |- selectize.less _________________ # 
|
|          |- plugins/
|            |- drag_drop.less _______________ # 
|            |- dropdown_header.less _________ # 
|            |- optgroup_columns.less ________ # 
|            |- remove_button.less ___________ # 
|
|        |- js/
|          |- selectize.js ___________________ # 
|          |- selectize.min.js _______________ # 
|
|          |- standalone/
|            |- selectize.js _________________ # 
|            |- selectize.min.js _____________ # 
|
|        |- css/
|          |- selectize.bootstrap2.css _______ # -
|          |- selectize.bootstrap3.css _______ # -
|          |- selectize.css __________________ # -
|          |- selectize.default.css __________ # -
|          |- selectize.legacy.css ___________ # -
|
|    |- modernizr/
|      |- .bower.json ________________________ # -
|      |- .editorconfig ______________________ # -
|      |- .gitignore _________________________ # -
|      |- .travis.yml ________________________ # -
|      |- grunt.js ___________________________ # global module
|      |- modernizr.js _______________________ # 
|      |- readme.md __________________________ # -
|
|      |- test/
|        |- basic.html _______________________ # -
|        |- caniuse.html _____________________ # -
|        |- index.html _______________________ # -
|
|        |- qunit/
|          |- qunit.css ______________________ # -
|          |- qunit.js _______________________ # 
|          |- run-qunit.js ___________________ # Wait until the test condition is true or a timeout occurs. Useful for waiting
|
|        |- js/
|          |- basic.html _____________________ # -
|          |- dumpdata.js ____________________ # 
|          |- setup.js _______________________ # 
|          |- unit-caniuse.js ________________ # 
|          |- unit.js ________________________ # 
|
|          |- lib/
|            |- detect-global.js _____________ # https://github.com/kangax/detect-global
|            |- jquery-1.7b2.js ______________ # 
|            |- jsonselect.js ________________ # 
|            |- polyfills.js _________________ # 
|            |- uaparser.js __________________ # uaparser by lindsey simon,
|
|        |- caniuse_files/
|          |- Windsong-webfont.eot ___________ # -
|          |- Windsong-webfont.otf ___________ # -
|          |- Windsong-webfont.svg ___________ # -
|          |- Windsong-webfont.ttf ___________ # -
|          |- Windsong-webfont.woff __________ # -
|          |- alpha.png ______________________ # -
|          |- apng_test.png __________________ # -
|          |- before-after.png _______________ # -
|          |- form_validation.html ___________ # -
|          |- ga.js __________________________ # 
|          |- green5x5.png ___________________ # -
|          |- hashchange.html ________________ # -
|          |- jquery.min.js __________________ # 
|          |- mathml.html ____________________ # -
|          |- mathml_ref.png _________________ # -
|          |- modernizr-1.7.min.js ___________ # Modernizr v1.7  www.modernizr.com
|          |- png_alpha_result.png ___________ # -
|          |- pushstate.html _________________ # -
|          |- red30x30.png ___________________ # -
|          |- ruby.png _______________________ # -
|          |- stroked-text.png _______________ # -
|          |- style.css ______________________ # -
|          |- svg-html-blur.png ______________ # -
|          |- svg-img.svg ____________________ # -
|          |- svg-img.svg.1 __________________ # -
|          |- svg_blur.png ___________________ # -
|          |- table.png ______________________ # -
|          |- text-shadow1.png _______________ # -
|          |- text-shadow2.png _______________ # -
|          |- windsong_font.png ______________ # -
|          |- xhtml.html _____________________ # -
|
|      |- media/
|        |- Modernizr 2 Logo.ai ______________ # -
|        |- Modernizr 2 Logo.eps _____________ # -
|        |- Modernizr 2 Logo.pdf _____________ # -
|        |- Modernizr 2 Logo.png _____________ # -
|        |- Modernizr 2 Logo.svg _____________ # -
|
|      |- feature-detects/
|        |- a-download.js ____________________ # 
|        |- audio-audiodata-api.js ___________ # Mozilla Audio Data API
|        |- audio-webaudio-api.js ____________ # Web Audio API
|        |- battery-api.js ___________________ # 
|        |- battery-level.js _________________ # 
|        |- blob-constructor.js ______________ # Blob constructor
|        |- canvas-todataurl-type.js _________ # canvas.toDataURL type support
|        |- contenteditable.js _______________ # contentEditable
|        |- contentsecuritypolicy.js _________ # Test for (experimental) Content Security Policy 1.1 support.
|        |- contextmenu.js ___________________ # http://www.w3.org/TR/html5/interactive-elements.html#context-menus
|        |- cookies.js _______________________ # 
|        |- cors.js __________________________ # cors
|        |- css-backgroundposition-shorthand.js  # 
|        |- css-backgroundposition-xy.js _____ # 
|        |- css-backgroundrepeat.js __________ # developer.mozilla.org/en/CSS/background-repeat
|        |- css-backgroundsizecover.js _______ # 
|        |- css-boxsizing.js _________________ # 
|        |- css-calc.js ______________________ # Method of allowing calculated values for length units, i.e. width: calc(100%-3em) http://caniuse.com/#search=calc
|        |- css-cubicbezierrange.js __________ # cubic-bezier values can't be > 1 for Webkit until bug #45761 (https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed
|        |- css-displayrunin.js ______________ # 
|        |- css-displaytable.js ______________ # display: table and table-cell test. (both are tested under one name "table-cell" )
|        |- css-filters.js ___________________ # https://github.com/Modernizr/Modernizr/issues/615
|        |- css-hyphens.js ___________________ # see http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web
|        |- css-lastchild.js _________________ # last-child pseudo selector
|        |- css-mask.js ______________________ # this tests passes for webkit's proprietary `-webkit-mask` feature
|        |- css-mediaqueries.js ______________ # 
|        |- css-objectfit.js _________________ # 
|        |- css-overflow-scrolling.js ________ # 
|        |- css-pointerevents.js _____________ # 
|        |- css-positionsticky.js ____________ # Sticky positioning - constrains an element to be positioned inside the
|        |- css-regions.js ___________________ # CSS Regions
|        |- css-remunit.js ___________________ # 
|        |- css-resize.js ____________________ # 
|        |- css-scrollbars.js ________________ # Stylable scrollbars detection
|        |- css-shapes.js ____________________ # 
|        |- css-subpixelfont.js ______________ # 
|        |- css-supports.js __________________ # http://dev.w3.org/csswg/css3-conditional/#at-supports
|        |- css-userselect.js ________________ # 
|        |- css-vhunit.js ____________________ # https://github.com/Modernizr/Modernizr/issues/572
|        |- css-vmaxunit.js __________________ # https://github.com/Modernizr/Modernizr/issues/572
|        |- css-vminunit.js __________________ # https://github.com/Modernizr/Modernizr/issues/572
|        |- css-vwunit.js ____________________ # https://github.com/Modernizr/Modernizr/issues/572
|        |- custom-protocol-handler.js _______ # 
|        |- dart.js __________________________ # Dart
|        |- dataview-api.js __________________ # DataView
|        |- dom-classlist.js _________________ # classList
|        |- dom-createElement-attrs.js _______ # by james a rosen.
|        |- dom-dataset.js ___________________ # 
|        |- dom-microdata.js _________________ # Microdata support
|        |- elem-datalist.js _________________ # 
|        |- elem-details.js __________________ # By @mathias, based on http://mths.be/axh
|        |- elem-output.js ___________________ # http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-output-element
|        |- elem-progress-meter.js ___________ # By Stefan Wallin
|        |- elem-ruby.js _____________________ # Browser support test for the HTML5 <ruby>, <rt> and <rp> elements
|        |- elem-time.js _____________________ # http://www.whatwg.org/specs/web-apps/current-work/multipage/rendering.html#the-time-element-0
|        |- elem-track.js ____________________ # Track element + Timed Text Track API
|        |- emoji.js _________________________ # Requires a Modernizr build with `canvastext` included
|        |- es5-strictmode.js ________________ # strict mode
|        |- event-deviceorientation-motion.js  # By Shi Chuan
|        |- exif-orientation.js ______________ # EXIF Orientation test
|        |- file-api.js ______________________ # 
|        |- file-filesystem.js _______________ # Filesystem API
|        |- forms-fileinput.js _______________ # 
|        |- forms-formattribute.js ___________ # Detects whether input form="form_id" is available on the platform
|        |- forms-inputnumber-l10n.js ________ # input[type="number"] localized input/output
|        |- forms-placeholder.js _____________ # testing for placeholder attribute in inputs and textareas
|        |- forms-speechinput.js _____________ # speech input for inputs
|        |- forms-validation.js ______________ # This implementation only tests support for interactive form validation.
|        |- fullscreen-api.js ________________ # 
|        |- gamepad.js _______________________ # GamePad API
|        |- getusermedia.js __________________ # getUserMedia
|        |- ie8compat.js _____________________ # 
|        |- iframe-sandbox.js ________________ # Test for `sandbox` attribute in iframes.
|        |- iframe-seamless.js _______________ # Test for `seamless` attribute in iframes.
|        |- iframe-srcdoc.js _________________ # Test for `srcdoc` attribute in iframes.
|        |- img-apng.js ______________________ # Animated PNG
|        |- img-webp.js ______________________ # code.google.com/speed/webp
|        |- json.js __________________________ # native JSON support.
|        |- lists-reversed.js ________________ # 
|        |- mathml.js ________________________ # MathML
|        |- network-connection.js ____________ # determining low-bandwidth via navigator.connection
|        |- network-eventsource.js ___________ # 
|        |- network-xhr2.js __________________ # 
|        |- notification.js __________________ # Notifications
|        |- performance.js ___________________ # Navigation Timing (Performance)
|        |- pointerlock-api.js _______________ # https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API
|        |- quota-management-api.js __________ # Quota Storage Management API
|        |- requestanimationframe.js _________ # 
|        |- script-async.js __________________ # async script
|        |- script-defer.js __________________ # defer script
|        |- style-scoped.js __________________ # Browser support test for <style scoped>
|        |- svg-filters.js ___________________ # Detect support for svg filters - http://www.w3.org/TR/SVG11/filters.html.
|        |- unicode.js _______________________ # 
|        |- url-data-uri.js __________________ # data uri test.
|        |- userdata.js ______________________ # test if IE userdata supported
|        |- vibration.js _____________________ # Vibration API
|        |- web-intents.js ___________________ # Tests for the ability to use Web Intents (http://webintents.org).
|        |- webgl-extensions.js ______________ # 
|        |- websockets-binary.js _____________ # 
|        |- window-framed.js _________________ # 
|        |- workers-blobworkers.js ___________ # by jussi-kalliokoski
|        |- workers-dataworkers.js ___________ # by jussi-kalliokoski
|        |- workers-sharedworkers.js _________ # 
|
|    |- microplugin/
|      |- .bower.json ________________________ # -
|      |- .gitignore _________________________ # -
|      |- .npmignore _________________________ # -
|      |- README.md __________________________ # -
|      |- bower.json _________________________ # -
|      |- package.json _______________________ # -
|
|      |- src/
|        |- microplugin.js ___________________ # 
|
|    |- magnific-popup/
|      |- .bower.json ________________________ # -
|      |- .gitignore _________________________ # -
|      |- .jshintrc __________________________ # -
|      |- .travis.yml ________________________ # -
|      |- Gruntfile.js _______________________ # 
|
|      |- LICENSE/
|      |- README.md __________________________ # -
|      |- bower.json _________________________ # -
|      |- composer.json ______________________ # -
|      |- magnific-popup.jquery.json _________ # -
|      |- package.json _______________________ # -
|
|      |- src/
|
|        |- js/
|          |- ajax.js ________________________ # 
|          |- core.js ________________________ # 
|          |- fastclick.js ___________________ # 
|          |- gallery.js _____________________ # 
|          |- iframe.js ______________________ # 
|          |- image.js _______________________ # 
|          |- inline.js ______________________ # 
|          |- retina.js ______________________ # 
|          |- zoom.js ________________________ # 
|
|        |- css/
|          |- _settings.scss _________________ # Settings
|          |- main.scss ______________________ # Magnific Popup CSS
|
|      |- dist/
|        |- jquery.magnific-popup.js _________ # http://dimsemenov.com/plugins/magnific-popup
|        |- jquery.magnific-popup.min.js _____ # http://dimsemenov.com/plugins/magnific-popup
|        |- magnific-popup.css _______________ # -
|
|    |- jquery/
|      |- .bower.json ________________________ # -
|      |- MIT-LICENSE.txt ____________________ # -
|      |- bower.json _________________________ # -
|
|      |- src/
|        |- ajax.js __________________________ # 
|        |- attributes.js ____________________ # 
|        |- callbacks.js _____________________ # 
|        |- core.js __________________________ # 
|        |- css.js ___________________________ # 
|        |- data.js __________________________ # 
|        |- deferred.js ______________________ # 
|        |- deprecated.js ____________________ # 
|        |- dimensions.js ____________________ # 
|        |- effects.js _______________________ # 
|        |- event.js _________________________ # 
|        |- intro.js _________________________ # 
|        |- jquery.js ________________________ # 
|        |- manipulation.js __________________ # 
|        |- offset.js ________________________ # 
|        |- outro.js _________________________ # 
|        |- queue.js _________________________ # 
|        |- selector-sizzle.js _______________ # 
|        |- selector.js ______________________ # 
|        |- serialize.js _____________________ # 
|        |- support.js _______________________ # 
|        |- traversing.js ____________________ # 
|        |- wrap.js __________________________ # 
|
|        |- var/
|          |- class2type.js __________________ # 
|          |- concat.js ______________________ # 
|          |- deletedIds.js __________________ # 
|          |- hasOwn.js ______________________ # 
|          |- indexOf.js _____________________ # 
|          |- pnum.js ________________________ # 
|          |- push.js ________________________ # 
|          |- rnotwhite.js ___________________ # 
|          |- slice.js _______________________ # 
|          |- strundefined.js ________________ # 
|          |- support.js _____________________ # 
|          |- toString.js ____________________ # 
|
|        |- traversing/
|          |- findFilter.js __________________ # 
|
|          |- var/
|            |- rneedsContext.js _____________ # 
|
|        |- sizzle/
|
|          |- dist/
|            |- sizzle.js ____________________ # 
|            |- sizzle.min.js ________________ # 
|            |- sizzle.min.map _______________ # -
|
|        |- queue/
|          |- delay.js _______________________ # 
|
|        |- manipulation/
|          |- _evalUrl.js ____________________ # 
|          |- support.js _____________________ # 
|
|          |- var/
|            |- rcheckableType.js ____________ # 
|
|        |- exports/
|          |- amd.js _________________________ # 
|          |- global.js ______________________ # 
|
|        |- event/
|          |- ajax.js ________________________ # 
|          |- alias.js _______________________ # 
|          |- support.js _____________________ # 
|
|        |- effects/
|          |- Tween.js _______________________ # 
|          |- animatedSelector.js ____________ # 
|          |- support.js _____________________ # 
|
|        |- data/
|          |- accepts.js _____________________ # 
|          |- support.js _____________________ # 
|
|        |- css/
|          |- addGetHookIf.js ________________ # 
|          |- curCSS.js ______________________ # 
|          |- defaultDisplay.js ______________ # 
|          |- hiddenVisibleSelectors.js ______ # 
|          |- support.js _____________________ # 
|          |- swap.js ________________________ # 
|
|          |- var/
|            |- cssExpand.js _________________ # 
|            |- isHidden.js __________________ # 
|            |- rmargin.js ___________________ # 
|            |- rnumnonpx.js _________________ # 
|
|        |- core/
|          |- access.js ______________________ # 
|          |- init.js ________________________ # Initialize a jQuery object
|          |- parseHTML.js ___________________ # 
|          |- ready.js _______________________ # 
|
|          |- var/
|            |- rsingleTag.js ________________ # 
|
|        |- attributes/
|          |- attr.js ________________________ # 
|          |- classes.js _____________________ # 
|          |- prop.js ________________________ # 
|          |- support.js _____________________ # 
|          |- val.js _________________________ # 
|
|        |- ajax/
|          |- jsonp.js _______________________ # 
|          |- load.js ________________________ # 
|          |- parseJSON.js ___________________ # 
|          |- parseXML.js ____________________ # 
|          |- script.js ______________________ # 
|          |- xhr.js _________________________ # 
|
|          |- var/
|            |- nonce.js _____________________ # 
|            |- rquery.js ____________________ # 
|
|      |- dist/
|        |- jquery.js ________________________ # 
|        |- jquery.min.js ____________________ # 
|        |- jquery.min.map ___________________ # -
|
|    |- fastclick/
|      |- .bower.json ________________________ # -
|
|      |- LICENSE/
|      |- README.md __________________________ # -
|      |- bower.json _________________________ # -
|
|      |- lib/
|        |- fastclick.js _____________________ # 
````