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

<!--  -->