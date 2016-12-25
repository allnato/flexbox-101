$canvas = $('.canvas');
// align-items: "flex-start"
$('#opt-start').click(function(event) {
  console.log('align-items: "flex-start"');
  $canvas.css('align-items', 'flex-start');
});
// align-items: "flex-end"
$('#opt-end').click(function(event) {
  console.log('align-items: "flex-end"');
  $canvas.css('align-items', 'flex-end');
});
// align-items: "center"
$('#opt-center').click(function(event) {
  console.log('align-items: "center"');
  $canvas.css('align-items', 'center');
});
// align-items: "stretch"
$('#opt-stretch').click(function(event) {
  console.log('align-items: "stretch"');
  $canvas.css('align-items', 'stretch');
});
// align-items: "baseline"
$('#opt-baseline').click(function(event) {
  console.log('align-items: "baseline"');
  $canvas.css('align-items', 'baseline');
});

function removeHeight(){
  $('.child-card').each(function(index, el) {
    $(this).css('height', '');
  });
}

function normalizeHeight(){
  $('.child-card').each(function(index, el) {
    $(this).css('height', '20rem');
  });
}
