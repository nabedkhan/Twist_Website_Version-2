$(document).ready(function(){
  $(".team-member-list").owlCarousel({
  	items:3,
  	margin:20,
  	loop:true,
  	nav:false,
  	dots:true,
  	autoplay:false,
  });
  $(".logos").owlCarousel({
  	items:5,
  	margin:20,
  	loop:true,
  	nav:false,
  	dots:false,
  	autoplay:true,
  });
});