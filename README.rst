=============================
bootstrap-progressbar - 0.4.0
=============================

``bootstrap-progressbar`` is a jQuery_ plugin which extends the basic twitter-bootstrap_ progressbar. It provides the ability to animate the progressbar by adding Javascript in combination with the preexisting css transitions. Additionally you can display the current progress information in the bar or via callback.

.. _jQuery: http://jquery.com/
.. _twitter-bootstrap: http://twitter.github.com/bootstrap/

Usage
=====

1. include ``bootstrap-progressbar.js``::

    <script type="text/javascript" src="bootstrap-progressbar.js"></script>

#. activate ``bootstrap-progressbar`` functionality on progressbars of your choice::

    $(document).ready(function() {
        $('.progress .bar').progressbar();
    });

#. set the ``data`` attribute and **remove** the ``width`` style attribute (alternatively you can set it to 0)

    1. ``data-percentage``::

        <div class="progress progress-info">
            <div class="bar" data-percentage="75"></div>
        </div>

    #. ``data-amount-part`` and ``data-amount-total``::

         <div class="progress progress-info">
             <div class="bar" data-amount-part="1337" data-amount-total="9000"></div>
         </div>

Customization
=============

1. text and delay

    simply add additional parameters when activating the script::

        $(document).ready(function() {
            $('.progress .bar').progressbar({
                transition_delay: 300
            ,   refresh_speed: 50
            ,   display_text: 2
            ,   use_percentage: true
            ,   border_radius: '4px'
            ,   update: doSomethingCool( current_percentage ) { .. }
            ,   done: doSomethingCool( ) { .. }
            ,   fail: doSomethingCool( error_message ) { .. }
            });
        });

    * ``transition_delay`` is the time in milliseconds until the animation starts
    * ``refresh_speed`` is the time in milliseconds which will elapse between every text refresh / callback call
    * ``display_text`` determines whether the text will be displayed

        * ``0`` **no text** *(this mode doesn't change any css / html)*
        * ``1`` **text on filled bar** *(this mode doesn't change any css / html)*
        * ``2`` **text on center** *(this mode changes css / html due to styling requirements)*
    * ``use_percentage`` determines whether the text will be displayed in percent or amount
    * ``border_radius`` hook to change the border radius of the progressbar

        * **you only have to set this if you are using centered text AND have overwritten the default bootstrap value**
    * ``update`` hook where you can grab the actual percentage value
    * ``done`` hook which indicates when progressbar is filled to the given value
    * ``fail`` hook where you can grab an error message when something went wrong

#. to change the animation itself you have to overwrite either less or css

    * less::

        .progress .bar {
          .transition(width 2s ease-in-out);
        }

    * css::

        .progress .bar {
            -webkit-transition: width 2s ease-in-out;
            -moz-transition: width 2s ease-in-out;
            -ms-transition: width 2s ease-in-out;
            -o-transition: width 2s ease-in-out;
            transition: width 2s ease-in-out;
        }

Demo
====

* http://www.minddust.com/bootstrap-progressbar-demo/

License
=======

Copyright 2012 minddust.com_

.. _minddust.com: http://www.minddust.com/

bootstrap-progressbar is published under Apache License, Version 2.0 (see LICENSE file).