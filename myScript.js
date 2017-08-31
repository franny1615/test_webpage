$(document).ready(function(){
	$("#toggleP").click(function(){
		$("p").slideToggle("fast");
	})
});

$(document).ready(function(){
	$("h1").click(function(){
		$("p").css({"color":"red","backgroundColor":"powderblue"});
		$(".image4").css("boder","25px solid green");
	})
});