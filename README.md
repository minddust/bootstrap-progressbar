# bootstrap-progressbar - 0.6.0

`bootstrap-progressbar` is a [jQuery](http://jquery.com) plugin which extends the basic [twitter-bootstrap](https://github.com/twbs/bootstrap) progressbar. It provides the ability to animate the progressbar by adding Javascript in combination with the preexisting css transitions. Additionally you can display the current progress information in the bar or get the value via callback.

## What's new in v0.6.0? :tada:

* bootstrap 3 support
* `noConflict` fallback
* aria support
* custom string formatting
* reduced lib size by 46% - just 2.2kb minified
* new demo page
* now with MIT license
* code cleanup and style fixes

> NOTE: this version is not 100% backwards compatible - please read the following information

## Demo

* http://minddust.github.com/bootstrap-progressbar

## Installation

* Download the latest release: [v0.6.0](https://github.com/minddust/bootstrap-progressbar/archive/v0.6.0.zip)
* Clone the repository: `git clone git@github.com:minddust/bootstrap-progressbar.git`
* Install with [Bower](http://bower.io): `bower install bootstrap-progressbar`


## Usage

1. include `bootstrap-progressbar.js`

    ```html
    <script type="text/javascript" src="bootstrap-progressbar.js"></script>
    ```

2. activate `bootstrap-progressbar` functionality on progressbars of your choice:


    ```javascript
    $('.progress .bar').progressbar();           // bootstrap 2
    $('.progress .progress-bar').progressbar();  // bootstrap 3
    ```

3. set the `aria` attribute and __remove__ the `width` style attribute (alternatively you can set it to 0)

    1. `aria-valuetransitiongoal`

        ```html
        <div class="progress">
            <div class="progress-bar" aria-valuetransitiongoal="75"></div>
        </div>
        ```

    2. `aria-valuemin` (default: 0) and `aria-valuemax` (default: 100)

        ```html
        <div class="progress">
            <div class="progress-bar" aria-valuetransitiongoal="75" aria-valuemin="-1337" aria-valuemax="9000"></div>
        </div>

## Usage Extended

* Do I need the additional style file?

    * for the horizontal bar with no or filled text: __NO__
    * for any vertical bars or the horizontal bar with centered text: __YES__

       less:

       ```html
       <link rel="stylesheet/less" type="text/css" href="bootstrap-progressbar-2.x.x.less">
       <link rel="stylesheet/less" type="text/css" href="bootstrap-progressbar-3.x.x.less">
       ```

       css:

       ```html
       <link rel="stylesheet" type="text/css" href="bootstrap-progressbar.css">
       ```

* Multiple trigger

    You can trigger progressbar as much as you want. Just change your `data` attribute and trigger `.progressbar()` again. All settings made before will be kept. Please have a look at the demo page for a working example.

## Customization

1. alignment
    * to use a horizontal progressbar which is align to the right you have to add `right` to the `progress` element

       ```html
       <div class="progress right progress-info">
       ```
    * to use a vertical progressbar you have to add `vertical` to the `progress` element

       ```html
       <div class="progress vertical progress-info">
       ```
    * to use a vertical progressbar which is align to the bottom you have to add `vertical` and `bottom` to the `progress` element

       ```html
       <div class="progress vertical bottom progress-info">
       ```

2. text and delay

    simply add additional parameters when activating the script

    ```javascript
    $(document).ready(function() {
        $('.progress .bar').progressbar({
            transition_delay: 300,
            refresh_speed: 50,
            display_text: 2,
            use_percentage: true,
            update: doSomethingCool( current_percentage ) { .. },
            done: doSomethingCool( ) { .. },
            fail: doSomethingCool( error_message ) { .. },
        });
    });
    ```
    * `transition_delay` is the time in milliseconds until the animation starts
    * `refresh_speed` is the time in milliseconds which will elapse between every text refresh / callback call
    * `display_text` determines whether the text will be displayed
        * `0` __no text__ *(this mode doesn't change any css / html)*
        * `1` __text on filled bar__ *(this mode doesn't change any css / html)*
        * `2` __text on center__ *(this mode changes css / html due to styling requirements)*
    * `use_percentage` determines whether the text will be displayed in percent or amount
    * `update` callback where you can grab the actual percentage value
    * `done` callback which indicates when progressbar is filled to the given value
    * `fail` callback where you can grab an error message when something went wrong

3. animation

    to change the animation itself you have to overwrite either less or css

    1. horizontal
        * less

            ```css
            .progress .bar {
                .transition(width 2s ease-in-out);
            }
            ```
        * css

            ```css
            .progress .bar {
                -webkit-transition: width 2s ease-in-out;
                -moz-transition: width 2s ease-in-out;
                -ms-transition: width 2s ease-in-out;
                -o-transition: width 2s ease-in-out;
                transition: width 2s ease-in-out;
            }
            ```

    1. vertical
        * less

            ```css
            .progress.vertical .bar {
                .transition(height 2s ease-in-out);
            }
            ```
        * css

            ```css
            .progress.vertical .bar {
                -webkit-transition: height 2s ease-in-out;
                -moz-transition: height 2s ease-in-out;
                -ms-transition: height 2s ease-in-out;
                -o-transition: height 2s ease-in-out;
                transition: height 2s ease-in-out;
            }
            ```

## Known Problems

* Looks like iOS Safari is flooring the width of the transition. So if you want to display text with a correct value you have to use a full bar width **greater or equal 100px**.

## License

Copyright 2012 [minddust.com](http://www.minddust.com)

bootstrap-progressbar is published under Apache License, Version 2.0 (see LICENSE file).
