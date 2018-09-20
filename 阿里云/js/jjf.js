window.onload=function(){
	var da=document.getElementsByClassName("box_da");
	var ca=document.getElementsByClassName("box_ca")[0].getElementsByTagName("div");
	var fontg=document.getElementsByClassName("font_g");
	for(i=0;i<ca.length;i++){
		ca[i].index=i;
		ca[i].onclick=function(){
			for(j=0;j<fontg.length;j++){
				fontg[j].style.display="none";
			}
			for(m=0;m<ca.length;m++){ca[m].style.border="none"}
			fontg[this.index].style.display="block";
			ca[this.index].style.borderBottom="1px solid #00a2ca";
		}
	}
}
