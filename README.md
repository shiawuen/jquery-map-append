# Map Append

Simple helper to solve bad practice of inserting element one by one into DOM instead of generate all and insert once

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/shiawuen/jquery-map-append/master/dist/map-append.min.js
[max]: https://raw.github.com/shiawuen/jquery-map-append/master/dist/map-append.js

## Examples

```html
<script src="jquery.js"></script>
<script src="dist/map-append.min.js"></script>
<script>
jQuery(function($) {
  $('#container').mapAppend(collection, function(val, key){
  	return '<div>' + val + '</div>';
  });
});
</script>
```
