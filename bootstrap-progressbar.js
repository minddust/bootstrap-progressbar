/* ========================================================
 * bootstrap-progressbar v0.1.0
 * ========================================================
 * Copyright 2012 minddust.com
 *
 * bootstrap-progressbar is published under Apache License,
 * Version 2.0 (see LICENSE file).
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * ======================================================== */

function( $ ){

    "use strict"

    /* PROGRESSBAR CLASS DEFINITION
     * ============================ */

    var Progressbar = function ( element, options ) {
        this.element = $(element)
        this.options = $.extend({}, $.fn.progressbar.defaults, options)
        this.transition()
    };

    Progressbar.prototype = {

        constructor: Progressbar

        , transition: function () {
            var $this = this.element
                , options = this.options
                , percentage = $this.attr('data-percentage')
                , callback

            if ( !percentage ) return

            if ( options.callback && typeof(options.callback) == 'function' ) callback = options.callback
            else callback = $.fn.progressbar.defaults.callback

            setTimeout(function() {
                $this.css('width', percentage+'%')

                var current_percentage
                    , parent_width
                    , precision_helper = Math.pow(10, options.precision)

                var progress = setInterval(function() {
                    parent_width = $this.parent().width()
                    current_percentage = Math.round(100 * $this.width() / parent_width * precision_helper) / precision_helper

                    if ( current_percentage >= percentage ) clearInterval(progress)
                    if ( options.display_text ) $this.text(current_percentage+'%')

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

    $.fn.progressbar.defaults = {
        transition_delay: 300
        ,   display_text: true
        ,   refresh_speed: 50
        ,   precision: 1
        ,   callback: $.noop
    }

    $.fn.progressbar.Constructor = Progressbar

}( window.jQuery );