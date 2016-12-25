$canvas = $('.canvas');
// justify-content: "flex-start"
$('#opt-start').click(function(event) {
  console.log('justify-content: "flex-start"');
  $canvas.css('justify-content', 'flex-start');
});
// justify-content: "flex-end"
$('#opt-end').click(function(event) {
  console.log('justify-content: "flex-end"');
  $canvas.css('justify-content', 'flex-end');
});
// justify-content: "center"
$('#opt-center').click(function(event) {
  console.log('justify-content: "center"');
  $canvas.css('justify-content', 'center');
});
// justify-content: "space-around"
$('#opt-space-a').click(function(event) {
  console.log('justify-content: "space-around"');
  $canvas.css('justify-content', 'space-around');
});
// justify-content: "space-between"
$('#opt-space-b').click(function(event) {
  console.log('justify-content: "space-between"');
  $canvas.css('justify-content', 'space-between');
});
