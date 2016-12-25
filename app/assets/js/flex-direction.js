$canvas = $('.canvas');
// flex-direction: "row"
$('#opt-row').click(function(event) {
  console.log('flex-direction: "row"');
  $canvas.css('flex-direction', 'row');
});
// flex-direction: "column"
$('#opt-col').click(function(event) {
  console.log('flex-direction: "column"');
  $canvas.css('flex-direction', 'column');
});
// flex-direction: "row-reverse"
$('#opt-row-r').click(function(event) {
  console.log('flex-direction: "row-reverse"');
  $canvas.css('flex-direction', 'row-reverse');
});
// flex-direction: "column-reverse"
$('#opt-col-r').click(function(event) {
  console.log('flex-direction: "column-reverse"');
  $canvas.css('flex-direction', 'column-reverse');
});
