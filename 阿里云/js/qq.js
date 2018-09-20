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