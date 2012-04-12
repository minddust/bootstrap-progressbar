/* ========================================================
 * bootstrap-progressbar v0.4.0
 * ========================================================
 * Copyright 2012 minddust.com
 *
 * bootstrap-progressbar is published under Apache License,
 * Version 2.0 (see LICENSE file).
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * ======================================================== */

function($){

    "use strict";

    /* PROGRESSBAR CLASS DEFINITION
     * ============================ */

    var Progressbar = function (element, options) {
        this.element = $(element);
        this.options = $.extend({}, $.fn.progressbar.defaults, options);
        this.transition();
    };

    Progressbar.prototype = {

        constructor: Progressbar

        , transition: function () {
            var $this = this.element
                , $parent = $this.parent()
                , options = this.options
                , percentage = $this.attr('data-percentage')
                , amount_part = $this.attr('data-amount-part')
                , amount_total = $this.attr('data-amount-total')
                , callback

            if ( options.use_percentage && !percentage ) return
            else if ( !options.use_percentage ) {
                if ( !amount_part && !amount_total )
                    return
                else {
                    percentage = Math.round(100 * amount_part / amount_total)
                }
            }

            if ( options.callback && typeof(options.callback) == 'function' ) callback = options.callback
            else callback = $.fn.progressbar.defaults.callback

            if ( options.display_text ===  $.fn.progressbar.display_text.center ) {
                $parent.css('position', 'relative')
                $this.css({
                    'position': 'absolute'
                ,   'float': 'left'
                ,   'overflow': 'hidden'
                ,   '-webkit-border-radius': options.border_radius
                ,   '-moz-border-radius': options.border_radius
                ,   'border-radius': options.border_radius
                })
                $parent.prepend('<span class="progressbar-back-text" style="position:absolute;width:100%;text-align:center"></span>')
                $this.prepend('<span class="progressbar-front-text" style="display:block;text-align:center"></span>')
                var $back = $parent.find('.progressbar-back-text')
                    , $front = $parent.find('.progressbar-front-text')
                $front.css('width', $parent.css('width'))
                $(window).resize(function() { $front.css('width', $parent.css('width')) })
            }

            setTimeout(function() {
                $this.css('width', percentage+'%')

                var current_percentage
                    , current_value
                    , parent_width
                    , text

                var progress = setInterval(function() {
                    parent_width = $this.parent().width()
                    current_percentage = Math.round(100 * $this.width() / parent_width)
                    current_value = Math.round($this.width() / parent_width * amount_total)

                    if ( current_percentage >= percentage ) {
                        current_percentage = percentage
                        current_value = amount_part
                        clearInterval(progress)
                    }

                    if ( options.use_percentage ) text = current_percentage +'%'
                    else text = current_value + ' / ' + amount_total

                    if ( options.display_text ===  $.fn.progressbar.display_text.filled ) $this.text(text)
                    else if ( options.display_text ===  $.fn.progressbar.display_text.center ) {
                        $front.text(text)
                        $back.text(text)
                    }

                    callback(current_percentage)
                }, options.refresh_speed)

            }, options.transition_delay)
        }
    }

    /* PROGRESSBAR PLUGIN DEFINITION
     * ============================= */

    $.fn.progressbar = function ( option ) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('progressbar')
                , options = typeof option == 'object' && option
            if (!data) $this.data('progressbar', (data = new Progressbar(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.progressbar.display_text = {
        none: 0
        ,   filled: 1
        ,   center: 2
    }

    $.fn.progressbar.defaults = {
        transition_delay: 300
        ,   refresh_speed: 50
        ,   display_text: $.fn.progressbar.display_text.none
        ,   use_percentage: true
        ,   border_radius: '4px'
        ,   callback: $.noop
    }

    $.fn.progressbar.Constructor = Progressbar

}( window.jQuery );