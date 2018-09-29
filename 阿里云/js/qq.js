var n=2;
$('.left-btn:first').click(function(){
  if(n<4){
                n++
                $('.aul').css('left','-=288px');
               
            }else{
               
                
            }
})
$('.left-btn:last').click(function(){
     if(n>0){
                n--;
                 $('.aul').css('left','+=288px');
                
            }else{
               
     }
})
$('.qop:first').css('display','none');
$('.qopq:first').css('display','block');
setTimeout(function(){
   $('.diqiu').animate({'opacity':'1'},1000);
   $('.diqiu').delay(1000).animate({'opacity':'0'},1000);
},0)
setInterval(function(){
   $('.diqiu').animate({'opacity':'1'},1000);
   $('.diqiu').delay(1000).animate({'opacity':'0'},1000);
},4000)

 var m=1;
  var i=0;
  
        function add(i){
            $('.tiao:nth-child('+m+') span').css('width',i+"%")
            $('.tiao:nth-child('+m+') span').css('background','#fff')
        }
        var l;
        function my(){
          clearTimeout(l);
            if(i>100){
                    if(m<5){
                    i=0;
                    $('.tiao span').css('background','rgba(192,192,192,0)')
                    $('.bg').css('transition','all 0s');
                    $('.bg').css('opacity','0');
                    // $('.bg').css('top','30px');
                    $('.diqiu').css('transition','all 0s');
                    //  $('.diqiu').css('top','30px');
                    $('.diqiu').css('display','none');
                    m++;
                    $('.bg:nth-child('+m+')').css('transition','all .6s');
                    $('.bg:nth-child('+m+')').css('opacity','1');
                    // $('.bg:nth-child('+m+')').css('top','0');
                    $('.diqiu:nth-child('+(m+5)+')').css('transition','all .6s');
                    $('.diqiu:nth-child('+(m+5)+')').css('display','block');
                    // $('.diqiu:nth-child('+(m+5)+')').css('top','0');
                    my();
                    }else{
                    i=0;
                    $('.tiao span').css('background','rgba(192,192,192,0)')
                    $('.bg').css('transition','all 0s');
                    $('.bg').css('opacity','0');
                    // $('.bg').css('top','30px');
                    $('.diqiu').css('transition','all 0s');
                    $('.diqiu').css('display','none');
                    //  $('.diqiu').css('top','30px');
                     m=1;
                     $('.bg:nth-child('+m+')').css('transition','all .6s');
                    $('.bg:nth-child('+m+')').css('opacity','1');
                    // $('.bg:nth-child('+m+')').css('top','0');
                    $('.diqiu:nth-child('+(m+5)+')').css('transition','all .6s');
                    $('.diqiu:nth-child('+(m+5)+')').css('display','block');
                    // $('.diqiu:nth-child('+(m+5)+')').css('top','0');
                   
                    my();
                    }
                    
                  }

            if(i<=100){

              l=setTimeout("my()",75)
                    add(i);
                    i++;
                    
                }

            }
        $(document).ready(function(){	

		my();

	

	});