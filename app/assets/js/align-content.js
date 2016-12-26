$canvas = $('.canvas');
// align-content: "flex-start"
$('#opt-start').click(function(event) {
  console.log('align-content: "flex-start"');
  $canvas.css('align-content', 'flex-start');
});
// align-content: "flex-end"
$('#opt-end').click(function(event) {
  console.log('align-content: "flex-end"');
  $canvas.css('align-content', 'flex-end');
});
// align-content: "center"
$('#opt-center').click(function(event) {
  console.log('align-content: "center"');
  $canvas.css('align-content', 'center');
});
// align-content: "stretch"
$('#opt-stretch').click(function(event) {
  console.log('align-content: "stretch"');
  $canvas.css('align-content', 'stretch');
});
// align-content: "space-around"
$('#opt-space-a').click(function(event) {
  console.log('align-content: "space-around"');
  $canvas.css('align-content', 'space-around');
});
// align-content: "space-between"
$('#opt-space-b').click(function(event) {
  console.log('align-content: "space-between"');
  $canvas.css('align-content', 'space-between');
});
