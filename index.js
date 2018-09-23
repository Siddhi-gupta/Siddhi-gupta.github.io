$('.dropdown-button').click( () => {
	$('.dropdown').toggle();
});

$('.collapse-button').click(() => {
	$('.collapse-data').toggle();
});

$('.modal-button').click(() => {
	$('.modal').toggle();
	$(".modal").css({"display":"flex"});
	$('.container').addClass("backdrop");
	$('.nav-bar-container').addClass("backdrop");
});

$(".modal-close").click(() => {
   $(".modal").css({"display":"none"});
   $('.container').removeClass("backdrop");
	$('.nav-bar-container').removeClass("backdrop");
});

$("input").focus(function () {
	$(this).addClass('on-focus');
});

$("input").blur(function () {
	$(this).removeClass('on-focus');
});

$( ".coin" ).hover(
  function() {
    $( this ).addClass( "highlight" );
  }, function() {
    $( this ).removeClass( "highlight" );
  }
);

$( ".button" ).hover(
  function() {
    $( this ).addClass( "button-focus" );
  }, function() {
    $( this ).removeClass( "button-focus" );
  }
);