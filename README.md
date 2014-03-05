# bootstrap-progressbar - 0.7.1 [![Build Status](https://secure.travis-ci.org/minddust/bootstrap-progressbar.png)](http://travis-ci.org/minddust/bootstrap-progressbar)

`bootstrap-progressbar` is a [jQuery](http://jquery.com) plugin which extends the basic [twitter-bootstrap](https://github.com/twbs/bootstrap) progressbar. It provides the ability to animate the progressbar by adding Javascript in combination with the preexisting css transitions. Additionally you can display the current progress information in the bar or get the value via callback.


## What's new in v0.7.1?

* Add bootstrap 3.1.1 styles
* Switch to Gulp
* Remove bs dotfiles
* Fix #30 compile errors with old markup
* Fix #29 wrong style generation
* Fix #28 element creation which will brick with `django-compressor`

> Note: this version sets (fixes) some vertical styles which may affect (or brick) your styles. Please checkout the css or less before updating.


## Demo

* http://minddust.github.com/bootstrap-progressbar


## Installation

* Download the latest release: [v0.7.1](https://github.com/minddust/bootstrap-progressbar/archive/v0.7.1.zip)
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
    * for any vertical bars or the horizontal bar with centered text or right aligned bar: __YES__

       less:

       ```html
       <link rel="stylesheet/less" type="text/css" href="bootstrap-progressbar.less">
       ```

       css:

       ```html
       <link rel="stylesheet" type="text/css" href="bootstrap-progressbar.css">
       ```

       you can find your needed css or less file inside the css or less folder.

* Multiple trigger

    You can trigger progressbar as much as you want. Just change your `aria` attribute(s) and trigger `.progressbar()` again. All settings made before will be kept.


## Settings

### default values

```javascript
Progressbar.defaults = {
    transition_delay: 300,
    refresh_speed: 50,
    display_text: 'none',
    use_percentage: true,
    percent_format: function(percent) { return percent + '%'; },
    amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
    update: $.noop,
    done: $.noop,
    fail: $.noop
};
```

### transition_delay

Is the time in milliseconds until the animation starts.

This could be useful to delay the start on the initial page load like:

```javascript
$(document).ready(function() {
    $('.progress .progress-bar').progressbar({
        transition_delay: 1500
    });
});
```

### refresh_speed

Is the time in milliseconds which will elapse between every text refresh, `aria-valuenow` attribute update and `update` callback call.

### display_text

Determines if and where to display text on the progressbar. Possible options:

* `none` __no text__
* `fill` __text on filled bar__
* `center` __text on center__ *(this mode changes css / html due to styling requirements)*

### use_percentage

If text will be displayed - this option determines whether to show the percentage value or the amount.

So if `use_percentage` is false and `aria-valuemin` and `aria-valuemax` are not set (or to `0` and `100`) the value will be the same but `amount_format` will be used to format the result.

Example:

`<div class="progress-bar" aria-valuetransitiongoal="75">`

with `use_percentage: true` is the final text: `75%`

with `use_percentage: false` is the final text: `75 / 100`

### percent_format

Is a function which returns the text format for progressbar with `use_percentage: true`.

It takes 1 argument which is the current percent value.

### amount_format

Is a function which returns the text format for progressbar with `use_percentage: false`.

It takes 2 argument which are the current and total amount.

### update

Is a callback function which will be called while the progressbar is transitioning ;)

Depends on `refresh_speed`.

It takes 1 argument which is the current percent value.

### done

Is a callback function which will be called when the transition process is done.

### fail

Is a callback function which will be called when an error occurs.

It takes 1 argument which is the error message.


## Customisation

### alignment
* to use a horizontal progressbar which is align to the right you have to add `right` to the `progress` element.

   ```html
   <div class="progress right">
   ```
* to use a vertical progressbar you have to add `vertical` to the `progress` element.

   ```html
   <div class="progress vertical">
   ```
* to use a vertical progressbar which is align to the bottom you have to add `vertical` and `bottom` to the `progress` element.

   ```html
   <div class="progress vertical bottom">
   ```

### animation

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

## Copyright and license

Copyright 2013-2014 Stephan Groß, under [MIT license](https://github.com/minddust/bootstrap-progressbar/blob/master/LICENSE).

Want to appreciate my work? [minddust at Gittip](https://www.gittip.com/minddust/)
