var feed = new Instafeed({
    get: 'tagged',
    tagName: 'rebelsunleashed',
    clientId: '0fbcd4c4a9114d3ab6e301c32c932864',
    template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}"></a></li>',
    resolution: 'standard_resolution'
});
feed.run();

function checkSize(){
    if ($(".wrapper").css("padding") == 0 ){
    	$(".halloweenBat").hide();
    }
}

$(document).ready(function() {
	$(".more").click(function() {
		$("ul#instafeed li").addClass("active");
		$(this).hide();
	});

    checkSize();
    $(window).resize(checkSize);

});

$.fn.halloweenBats({
    image: '/bats/bats.png', // Path to the image.
    zIndex: 10000, // The z-index you need.
    amount: 10, // Bat amount.
    width: 35, // Image width.
    height: 20, // Animation frame height.
    frames: 4, // Amount of animation frames.
    speed: 20, // Higher value = faster.
    flickering: 15 // Higher value = slower.
});