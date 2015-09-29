<!-- Smooth_anchor_scroll -->
  
$("a.toplink").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
 });



<!-- Landing elements -->

$(window).scroll(function(){
  
  
  var wscroll = $(this).scrollTop();
  
  if (wscroll > $(".project-choose").offset().top - ($(window).height() / 1.4)) {
    
    $(".container").each(function(i){
      
      setTimeout(function(){
       $(".container").eq(i).addClass("show"); 
      }, 150 * (i+1));
      
    
    });
    
  }
  
  
});
