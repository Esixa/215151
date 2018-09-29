window.onload=function(){
 var menu1=document.getElementById('menu1').getElementsByTagName('div');
 var menu2=document.getElementById('menu2').getElementsByTagName('div');
 var menu3=document.getElementById('menu3').getElementsByTagName('div');
 var sanjiao1=document.getElementById('menu1').getElementsByClassName('sanjiao');
 var sanjiao2=document.getElementById('menu2').getElementsByClassName('sanjiao');
 var sanjiao3=document.getElementById('menu3').getElementsByClassName('sanjiao');
 var open_menu1=document.getElementById('open_menu1').getElementsByClassName('open');
 var open_menu2=document.getElementById('open_menu2').getElementsByClassName('open');
 var open_menu3=document.getElementById('open_menu3').getElementsByClassName('open');
 var p1=document.getElementById('menu1').getElementsByClassName('pbox');
 var p2=document.getElementById('menu2').getElementsByClassName('pbox');
 var p3=document.getElementById('menu3').getElementsByClassName('pbox');
 

  

  for(var n=0;n<menu1.length;n++){
      menu1[n].index=n;
      menu1[n].onclick=function(){
        for(var j=0;j<open_menu1.length;j++){
            open_menu1[j].style.display='none';
            open_menu2[j].style.display='none';
            menu1[j].style.color='#333';
            menu2[j].style.color='#333';
 
        }
       
         for(var i=0;i<open_menu3.length;i++){
            open_menu3[i].style.display='none';
            menu3[i].style.color='#333';
 
            
         }
         for(var k=0;k<sanjiao1.length;k++){
            sanjiao1[k].style.display='none';
            sanjiao2[k].style.display='none';
            

        }
         for(var l=0;l<sanjiao3.length;l++){
            sanjiao3[l].style.display='none';
            
         }
         open_menu1[this.index].style.display='block';
         sanjiao1[this.index].style.display='block';
         menu1[this.index].style.color='#00c1de';
     
         
         
      }
  }
  for(var m=0;m<menu2.length;m++){
      menu2[m].index=m;
      menu2[m].onclick=function(){
           for(var j=0;j<open_menu2.length;j++){
            open_menu1[j].style.display='none';
            open_menu2[j].style.display='none';
            menu1[j].style.color='#333';
            menu2[j].style.color='#333';


        }
         for(var i=0;i<open_menu3.length;i++){
            open_menu3[i].style.display='none';
            menu3[i].style.color='#333';
     
            
             

         }
           for(var k=0;k<sanjiao2.length;k++){
            sanjiao1[k].style.display='none';
            sanjiao2[k].style.display='none';
            

        }
         for(var l=0;l<sanjiao3.length;l++){
            sanjiao3[l].style.display='none';
            
         }
       
         open_menu2[this.index].style.display='block';
         sanjiao2[this.index].style.display='block';
          menu2[this.index].style.color='#00c1de';
    


      }
  }
 
  for(var h=0;h<menu3.length;h++){
      menu3[h].index=h;
      menu3[h].onclick=function(){
        for(var j=0;j<open_menu3.length;j++){
            open_menu3[j].style.display='none';
            menu1[j].style.color='#333';
            menu2[j].style.color='#333';
        

        }
         for(var i=0;i<open_menu2.length;i++){
            open_menu2[i].style.display='none';
             open_menu1[i].style.display='none';
          
             

         }
         for(var k=0;k<sanjiao3.length;k++){
            sanjiao3[k].style.display='none';
             menu3[k].style.color='#333';
            
            

        }
         for(var l=0;l<sanjiao2.length;l++){
            sanjiao2[l].style.display='none';
            sanjiao1[l].style.display='none';
             

         }
         open_menu3[this.index].style.display='block';
         sanjiao3[this.index].style.display='block';
          menu3[this.index].style.color='#00c1de';
        

      }
  }
}