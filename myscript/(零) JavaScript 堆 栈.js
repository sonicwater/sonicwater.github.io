(function(){
	var canvas=document.getElementById("canvas");
	var cxt = canvas.getContext("2d");
	cxt.translate(0.5, 0.5);
	canvas.width=600.5;
	canvas.height=350.5;
	canvas.style.border = "1px solid #000";

	
	cxt.moveTo(20.5, 20.5);
	cxt.lineTo(180.5,20.5);
	cxt.lineTo(180.5,300.5);
	cxt.lineTo(20.5,300.5);
	cxt.lineTo(20.5,20.5);

	cxt.moveTo(20.5, 60.5);
	cxt.lineTo(180.5,60.5);

	cxt.moveTo(20.5, 100.5);
	cxt.lineTo(180.5,100.5);

	cxt.moveTo(20.5, 140.5);
	cxt.lineTo(180.5,140.5);

	cxt.moveTo(20.5, 180.5);
	cxt.lineTo(180.5,180.5);

	cxt.moveTo(20.5, 220.5);
	cxt.lineTo(180.5,220.5);

	cxt.moveTo(20.5, 260.5);
	cxt.lineTo(180.5,260.5);

	cxt.moveTo(80.5, 20.5);
	cxt.lineTo(80.5,300.5);
	cxt.stroke();

	//设置字体样式
	cxt.font = "10pt Calibri";
	//设置字体填充颜色
	cxt.fillStyle = "black";
	//从坐标点(50,50)开始绘制文字
	cxt.fillText("变量名", 30, 46);
	cxt.fillText("变量值", 108, 46);

	//设置字体填充颜色
	cxt.font = "12pt Calibri";
	cxt.fillStyle = "SlateBlue";
	cxt.fillText("a", 45, 85);
	cxt.fillText("b", 45, 125);
	cxt.fillText("c", 45, 165);
	cxt.fillText("d", 45, 205);
	cxt.fillText("e", 45, 245);
	cxt.fillText("f", 45, 285);

	//设置字体填充颜色
	cxt.font = "12pt Calibri";
	cxt.fillStyle = "LightSeaGreen";
	cxt.lineWidth = 1; 
	cxt.fillText("1", 123, 85);
	cxt.fillText('"1"', 115, 125);
	cxt.fillText("true", 108, 165);
	cxt.fillText("null", 114, 205);
	cxt.fillText("undefined", 86, 245);
	cxt.font = "14px Microsoft YaHei";
	cxt.fillStyle = "Crimson";
	cxt.fillText("0x0011AD08", 89, 285);

	cxt.font = "12pt Calibri";
	cxt.fillStyle = "DarkSlateGray";
	cxt.fillText("栈内存（stack）", 48, 320);
	cxt.fillText("存放基本数据类型", 40, 340);

}());



