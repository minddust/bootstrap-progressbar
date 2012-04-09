/* ========================================================
 * bootstrap-progressbar v0.2.0
 * ========================================================
 * Copyright 2012 minddust.com
 *
 * bootstrap-progressbar is published under Apache License,
 * Version 2.0 (see LICENSE file).
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * ======================================================== */

!function( $ ){

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

            setTimeout(function() {
                $this.css('width', percentage+'%')

                var current_percentage
                    , current_value
                    , parent_width

                var progress = setInterval(function() {
                    parent_width = $this.parent().width()
                    current_percentage = Math.round(100 * $this.width() / parent_width)
                    current_value = Math.round($this.width() / parent_width * amount_total)

                    if ( current_value > amount_part ) current_value = amount_part

                    if ( options.display_text ) {
                        if ( options.use_percentage )
                            $this.text(current_percentage +'%')
                        else
                            $this.text(current_value + ' / ' + amount_total)
                    }
                    if ( current_percentage >= percentage ) clearInterval(progress)

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
        ,   refresh_speed: 50
        ,   display_text: true
        ,   use_percentage: true
        ,   callback: $.noop
    }

    $.fn.progressbar.Constructor = Progressbar

}( window.jQuery );