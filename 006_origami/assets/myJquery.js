$(document).ready(init);
	function init(){
		$(".topicA_content").hover(enterHandler1,leaveHandler1);
		$(".priceBtn1").hover(enterHandler2,leaveHandler2);

	for (var i=1; i<=5; i++){
		$(".changePic").append("<img src='images/index_pic_"+i+".jpg' />");
		}
	$(".changePic img:not(:first)").fadeOut(0);//將上面的照片全部fadeOut隱藏
	}
/*--------------------------------------------------------------*/
	setInterval(nextHandler,5000);
	var index=1;
	function nextHandler(event){
		if(index<5){
			index++;
		console.log(index);1
		}else{
			index=1;
		console.log(index);
		}
		$(".changePic img:eq(" +(index-1)+ ")").fadeIn(1500);
		$(".changePic img:gt(" +(index-1)+ ")").fadeOut(1500);
	}	
/*--------------------------------------------------------------*/
	function enterHandler1(){
		$(".triangleBtn p").css("color","#fff");
	}
	function leaveHandler1(){
		$(".triangleBtn p").css("color","#000");
	}
/*--------------------------------------------------------------*/
function enterHandler2(){
		$(".priceBtn1 h3").css("margin","100px 0px 0px 105px");
	}
	function leaveHandler2(){
		$(".priceBtn1 h3").css("margin","85px 0px 0px 90px");
	}
/*--------------------------------------------------------------*/