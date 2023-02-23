(function(){
    var header = $('header');
  
      $(window).scroll(function(e){
          if(header.offset().top !== 0){
              if(!header.hasClass('shadow')){
                  header.addClass('shadow');
              }
          }else{
              header.removeClass('shadow');
          }
      });
    
  //   var slideCount = $(".imgSlide").length;
  //   var slideIndex = 0;
  //   var slidePosition;
    
  //   setInterval(function(){
  //     if(slideIndex < slideCount-1){
  //       slideIndex++;
  //     }else{
  //       slideIndex = 0;
  //     }
  //     slidePosition = slideIndex * (-600)+"px";
  //     $(".imgList").animate({left:slidePosition});
  //   },3000);
    
    var gall  = setInterval(galleryFun, 2000);
    var inter = true;
    var idx = 2;
  
    function galleryFun(){
      $(".imgList ul").animate({"left":-600*idx+"px"},300);
      $(".imgItem ul li").eq(idx-1).addClass("on").siblings().removeClass("on");
      idx++;
      if(idx> $(".imgList ul li").length-3){
        $(".imgList ul").animate({"left":0},0);
        idx=0;
      }
    }
  
  
    $(".imgList , .imgItem").hover(function(){
      if(inter==true){
        clearInterval(gall);
        inter=false;
      }
    },function(){
      if(inter==false){
        gall  = setInterval(galleryFun, 2000);
        inter=true;
      }
  
    });
  
  
  
    $(".imgItem ul li").on('click',function(){
      $(this).addClass("on").siblings().removeClass("on");
      idx = $(this).index()+1;
      $(".imgList ul").animate({"left":-600*idx+"px"},1000);
    });
    
    $(".imgCon").hide();
    $(".imgSlide").hover(function(){
      $(this).find(".imgCon").stop().show(500);
    },function(){
      $(this).find(".imgCon").stop().hide(500);
    });
    
    function email_check( email ) {    
      var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return (email != '' && email != 'undefined' && regex.test(email)); 
  }
  
  $("input[type=email]").blur(function(){
    var email = $(this).val();
    if( email == '' || email == 'undefined') return;
    if(! email_check(email) ) {
        $(".result-email").text('Please wirte it in E-mail format');
      $(this).focus();
      return false;
    }else {
      $(".result-email").text('');
    }
  });
    
    document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    };
  }, true);
    
})(jQuery);
  
  