window.onload=function(){
     var box=document.getElementsByClassName('info');
        var aa=document.getElementsByClassName('a1');
        var xian=document.getElementById('xi');
        var tu=document.getElementsByClassName('hei');
        
        for(var n=0;n<aa.length;n++){
            aa[n].index=n;
            aa[n].onmouseover=function(){
                for(var j=0;j<box.length;j++){
                    box[j].style.display='none';
                    tu[j].style.opacity='0';
                }
                // for(var i=0;i<hei.length;i++){

                // }
                var h=this.index*52;
                xian.style.top=h+'px';
                box[this.index].style.display='block';
                tu[this.index].style.opacity='1';
            }
        }
}