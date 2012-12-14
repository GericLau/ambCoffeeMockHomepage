$(document).ready(function(){
  $("#slider").scrollLeft(1020);
  $("#dots li").click(function(e){
    var obj = $(this);
    var index = $("#dots li").index(obj);
    var scollLeft = index * 1020;
    $("#dots li.active").removeClass("active");
    obj.addClass("active");
    $("#slider").animate({scrollLeft: scollLeft + "px"}, {duration: 1000, easing: "swing"})
  });
});