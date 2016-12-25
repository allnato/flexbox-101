$canvas = $('.canvas');
// flex-wrap: "nowrap"
$('#opt-nowrap').click(function(event) {
  console.log('flex-wrap: "nowrap"');
  $canvas.css('flex-wrap', 'nowrap');
});
// flex-wrap: "wrap"
$('#opt-wrap').click(function(event) {
  console.log('flex-wrap: "wrap"');
  $canvas.css('flex-wrap', 'wrap');
});
// flex-wrap: "wrap-reverse"
$('#opt-wrap-r').click(function(event) {
  console.log('flex-wrap: "wrap-reverse"');
  $canvas.css('flex-wrap', 'wrap-reverse');
});
