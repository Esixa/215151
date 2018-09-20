
$('.cl').hover(function(){
    $(this).find('h2').css('color','#00c1de');
    var n=0;
    var bb=$(this);
    var aa=setInterval(function(){
        n+=1;
        bb.find('img').css('top','-=75px')
        if(n===59){
        clearInterval(aa)
    }
  
    },15)
    
},function(){
     $(this).find('h2').css('color','#373d41');
     var n=0;
     var bb=$(this);
    var aa=setInterval(function(){
        n+=1;
        bb.find('img').css('top','+=75px')
        if(n===59){
        clearInterval(aa)
    }
  
    },15)
})
