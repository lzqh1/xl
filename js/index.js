$(function(){
$(".img").click(function()
	{
		$(".ul").stop().toggle()
	})
	$(".ul>li").click(function(){
		$(".p").html(parseInt($(this).text()))
		
		
	})
	$(".img1").click(function()
	{
		$(".ul1").stop().toggle()
	})
	$(".ul1>li").click(function(){
		$(".p2").html($(this).text())
	  
		
		
	})

})
