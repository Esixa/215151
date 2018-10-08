window.onload=function(){
    var aipt1=document.getElementById('shouji');
    var aipt2=document.getElementById('mima');
    var aipt3=document.getElementById('mima2');
    var aipt4=document.getElementById('yzm');
    var aipt5=document.getElementById('aipt5');
    var aipt6=document.getElementById('aipt6');
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    var img3=document.getElementById('img3');
    var te1=document.getElementById('te');
    var te2=document.getElementById('te2');
    var te3=document.getElementById('te3');
    var zc=document.getElementById('zc');
    var block1=document.getElementById('block1');
    var block2=document.getElementById('block2');
    var block3=document.getElementById('block3');
    var block5=document.getElementById('ic1');
    var block6=document.getElementById('ic2');
   
    
    aipt1.onclick=function(){
        setInterval(function(){
    if(aipt1==document.activeElement){
   
  }
    else{
        if(aipt1.value==""){
       block1.style.border="1px solid #ea2927";
       img1.style.display='block';
       te1.innerHTML="不能为空";
        }
        else if(aipt1.value.match(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/)){
       block1.style.border="1px solid #dbdbdb";
       img1.style.display='none';
       te1.innerHTML="";
        }
        else{
         block1.style.border="1px solid #ea2927";
       img1.style.display='block';
       te1.innerHTML="手机号格式不正确";
        }
    }
        },100)
    }

     aipt2.onclick=function(){
        setInterval(function(){
    if(aipt2==document.activeElement){
   
  }
    else{
        if(aipt2.value==""){
       block2.style.border="1px solid #ea2927";
       img2.style.display='block';
       te2.innerHTML="不能为空";
        }
        else if(aipt2.value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/)){
       block2.style.border="1px solid #dbdbdb";
       img2.style.display='none';
       te2.innerHTML="";
        }
        else{
         block2.style.border="1px solid #ea2927";
       img2.style.display='block';
       te2.innerHTML="密码格式不正确";
        }
    }
        },100)
    }
    
    
    aipt3.onclick=function(){
        setInterval(function(){
  
        if(aipt2.value!=aipt3.value){
       block3.style.border="1px solid #ea2927";
       img3.style.display='block';
       te3.innerHTML="两次输入的密码不一致";
        }
        else{
      block3.style.border="1px solid #dbdbdb";
       img3.style.display='none';
       te3.innerHTML="";
      
        }
          },100)
    }

 
    
 zc.onclick=function(){
     if((aipt1.value.match(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/))!=null&&(aipt2.value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/))!=null&&aipt3.value==aipt2.value&&aipt4.value!="")
     {
     
         alert('注册成功');
         window.location.href="登录.html";

     }
 }


}