// Upon Click, create a child-card and append to canvas.
$('#create-child').click(function(event) {
  var cardWidth = getSliderWidth();
  var cardHeight = getSliderHeight();
  // Create Exit Button
  var $exitButton = $("<button>", {type: "button", class: "close"});
  $exitButton.html('&times;');
  // Create Number
  var $number = $("<h1>").append($('.child-card').length + 1);
  // Create Child
  var $child = $("<div>", {class: "child-card"});
  $child.css('height', cardHeight + "rem");
  $child.css('width', cardWidth + "rem");

  // Combine Button and Number
  $child.append($exitButton);
  $child.append($number);
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

function refactorNumber(){
  $('.child-card').each(function(index, el) {
      $(this).children('h1').text(index + 1);
  });
}

$(document).on('click', '.close', function(event) {
  var $parent = $(this).parent().remove();
  refactorNumber();
});
