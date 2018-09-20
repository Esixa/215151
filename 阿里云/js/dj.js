window.onload=function(){
	var bap=document.getElementsByClassName("box_ba")[0].getElementsByTagName("p");
	var dad=document.getElementsByClassName("box_da")[0].getElementsByTagName("div");
	var taba=document.getElementsByClassName("box_d")[0].getElementsByTagName("table")[0];
	var bb=document.getElementsByClassName("box_bb");
	var db=document.getElementsByClassName("box_db");
	var e1=document.getElementsByClassName("e1")[0];
	var e2=document.getElementsByClassName("e2")[0];
	var k=[10,5,10,6,2,5,3,5,4,6,3,3]
	for(i=0;i<bap.length;i++){
		bap[i].index=i;
		bap[i].onclick=function(){
			for(j=0;j<bap.length;j++){
				bap[j].style.color="#373d41"
			}
			for(m=0;m<bb.length;m++){
				bb[m].style.display="none"
			}
			bap[this.index].style.color="#00a2ca";
			for(n=0;n<k[this.index];n++){
				bb[n].style.display="block";
			}
		}
	}
	dad[0].onclick=function(){
		for(l=0;l<db.length;l++){
			db[l].style.display="block";
		}
		e1.style.display="block";
		taba.style.display="none";
		e2.style.display="none";
		dad[0].style.height="37px";
		dad[0].style.borderTop="2px solid #00c1de;"
		dad[1].style.height="38px";
		dad[1].style.borderTop="1px solid #d7d8d9;"
	}
	dad[1].onclick=function(){
		for(g=0;g<db.length;g++){
			db[g].style.display="none";
		}
		e1.style.display="none";
		e2.style.display="block";
		taba.style.display="block";
		dad[1].style.height="37px";
		dad[1].style.borderTop="2px solid #00c1de;"
		dad[0].style.height="38px";
		dad[0].style.borderTop="1px solid #d7d8d9;"
	}
}
