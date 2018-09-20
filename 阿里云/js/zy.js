window.onload=function(){
	var ipt=document.getElementsByClassName("_input")[0];
	var ipta=document.getElementsByClassName("_input")[0].getElementsByTagName("input")[0];
	function set(){
		if(ipta==document.activeElement){
			ipt.style.width="220px";
		}else{
			ipt.style.width="162px";
		}
	}
	setInterval(set,1000)
}