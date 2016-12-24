// Upon Click, create a child-card and append to canvas.
$('#create-child').click(function(event) {
  var cardWidth = getSliderWidth();
  var cardHeight = getSliderHeight();
  // Create Child
  var $child = $("<div>", {class: "child-card"});
  $child.css('height', cardHeight + "rem");
  $child.css('width', cardWidth + "rem");
  // Append Child
  $(".canvas").append($child);

});

function getSliderWidth(){
  var size = $('#slider-width').text();
  return parseInt(size)
}

function getSliderHeight(){
  var size = $('#slider-height').text();
  return parseInt(size);
}
