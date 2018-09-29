$('.box_caa').hover(function(){
    $('box_caa').css('zIndex','0')
    $('.box_caa').css('transform','scale(1)')
    $(this).css('transform','scale(1.1)')
    $(this).css('zIndex','5')
    $('.box_caaa').css('background','#333333')
    $(this).find('.box_caaa').css('background','#00a2ca')
    $('.box_caa').css('boxShadow','0 0 22px rgba(0,0,0,0)')
    
    $(this).css('boxShadow','0 0 22px rgba(0,0,0,.4)')
    
},function(){
    $('.box_caa').css('transform','scale(1)')
    $('.box_caa').css('zIndex','0')
    $('.box_caa:nth-child(2)').css('transform','scale(1.1)')
    
     $('.box_caa:nth-child(2)').css('zIndex','4')
     $('.box_caaa').css('background','#333333')
     $('.box_caa:nth-child(2)').find('.box_caaa').css('background','#00a2ca')
     $('.box_caa').css('boxShadow','0 0 22px rgba(0,0,0,0)')
    
    $('.box_caa:nth-child(2)').css('boxShadow','0 0 22px rgba(0,0,0,.4)')
})