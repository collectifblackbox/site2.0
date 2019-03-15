
$( document ).ready(function() {

/*	var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  }); 
});*/
logofolder = "black"
colorReserve = 0;

if(colorReserve){
	logofolder = "white"
}

$(".logo").css("background-image", "url('img/logo/"+logofolder+"/logo"+Math.floor((Math.random() * 3) + 1)+".png')");
});

$(window).scroll(init);

	
function init(){

	
				
}
