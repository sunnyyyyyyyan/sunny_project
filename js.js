function get(){
		var money=document.getElementById("month").value;
		var n=document.getElementById("nianzh").value;
		var m=getSalary(money);
		var x=getWhole(n);
		var y=12*m+x;
   		document.getElementById("output").innerHTML="月收："+money+"元，每月所得税："+m+"元年终奖："+ n+"元，一次性所得税："+x+"元全年所得税共计："+y+"元";
		alert(document.getElementById("output").innerHTML);
	}

function getSalary(money) {

	money = money - 3500;
	var salary = 0;
	if (money <= 1500) 
		salary = money* 0.03;

	  else if (money <= 4500) 
		salary = money * 0.1-105 ;
		
		
	  else if (money <= 9000) 
		salary = money * 0.2 -555 ;
		
	  else if (money <= 35000) 
		salary = money * 0.25 -1005 ;
		
	  else if (money <= 55000) 
		salary = money * 0.3 -2755;
		
	  else if (money <= 80000) 
		salary = money * 0.35 -5505 ;
		
	 else 
		salary = money * 0.45 -13505;
		
	 
	return salary;
}

function getWhole(nianzh){
	var whole=0;
	if(nianzh/12 <= 1500)
		whole=nianzh*0.03;
		else if(nianzh/12 <= 4500)
			whole=nianzh*0.1-105;
		else if(nianzh/12 <= 9000)
			whole=nianzh*0.2-555;
		else if(nianzh/12 <= 35000)
			whole=nianzh*0.25-1005;
		else if(nianzh/12 <= 55000)
			whole=nianzh*0.3-2755;
		else if(nianzh/12 <= 80000)
			whole=nianzh*0.35-5505;
	else
		whole=nianzh*0.45-13505;

	return whole;

}




function rnd(min, max){  
	return min + Math.floor(Math.random() * (max - min + 1));
}

function gtt(){
	var x=1500.0;
	var y=15*x;
	document.getElementById('month').value=rnd(x,y);
	var z=document.getElementById('month').value;
	document.getElementById('nianzh').value=rnd(7*z,10*z);
}