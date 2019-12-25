function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};

window.onload=function(){
	var  text=document.getElementById('text');
	text.onfocus = function(){
		if(text.value=='请输入卡密'){
			text.value='';
			this.style.color='#000';
		}
	}
	text.onblur = function(){
		if(text.value==''){
			text.value='请输入卡密';
			this.style.color='#fff';
		}
	}
		
}
