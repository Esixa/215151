window.onload=function(){
	var faa=document.getElementsByClassName("box_fa")[0].getElementsByTagName("p");
	var fb=document.getElementsByClassName("box_fb");
	var k=[8,2,4,3,5,2,4,1];
	for(i=0;i<faa.length;i++){
		faa[i].index=i;
		faa[i].onclick=function(){
			for(j=0;j<faa.length;j++){
				faa[j].style.color="#19001d"
			}
			for(m=0;m<fb.length;m++){
				fb[m].style.display="none"
			}
			for(n=0;n<k[this.index];n++){
				fb[n].style.display="block"
			}
			faa[this.index].style.color="#00c1d4"
		}
	}
}
