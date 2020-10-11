let glav = document.getElementById("canvas");
let ris = glav.getContext("2d");

let platforma = new Image();
let plat = new Image();
let fon = new Image();
let block1 = new Image();


fon.src = "img/4ca347667700403382d11aacf52f0e43.max-2000x1000.jpg";
block1.src = "img/блок1.jpg";
platforma.src = "img/depositphotos_87609830-stock-illustration-a-set-of-vector-game.RKvjo.jpg";


let grav =3;
let xrandom1 = 0;
let yrandom1= 300;
let xrandom2 = 400;
let yrandom2= 0;
let x =75;
let y = 350;
let xrandom = 250;
let yrandom = 300;
let taimer=0;
let a = 0;
let i = 0;
let g = 1;
let b =2.6;
let h = 2;
let j = 2;
let stop = 0;
//создание элементов

function draw() {
	ris.drawImage(fon,0,0);
	requestAnimationFrame(draw);
	ris.drawImage(platforma,-25,467);
	ris.drawImage(block1,x,y,);
	 //отрисовка элементов

	 taimer+=0.02;
	 document.getElementById("taimer").innerHTML=Math.trunc(taimer);

  if(grav>3){
	taimer=(taimer+0.08);
  }

  if(grav<3){
	taimer=(taimer+0.005)-0.02;
	
  }
//таймер
	y=y+grav;
 //гравитация


	if (y>430) {
    	y=430;
    	stop=0;
    	}
//нижняя граница

	document.onkeydown = function (event){
		if (event.keyCode == "90") {
          while(h>1){
			grav = 3;
			a =0;
			a+=50;
			grav = grav + 3;
			h= h -1;
			j =2;
		  }
		}
		if (event.keyCode == "88") {
			while (j>1){
			grav = 3;
			 a =0;
			a-=40;
			grav = grav- 1;
			j= j-1;
			h=2
			}	
		}
		if (event.keyCode == "67")
		{
			grav = 3;
			a =0;
			h =2;
			j =2;
		}
//изменение времени


	if (event.keyCode =="82")
	{

       x= Math.random()* (950-10) + 10;
       y = Math.random() *(450 - 10) + 10 ;

	}
  //рандомный спавн


	if (event.keyCode =="68"){
		x=x+50+a;
		if (x>960) {
			x=960;
		}
      }

	if (event.keyCode =="65"){    
	   x=x-50-a;
        if (x<0) {
	     x=0;	
		}        
    } 

    if (event.keyCode == "87"){
    	y=y-100+stop;
		if (y<350)
		stop = 100;
       
    } 
 }
   //управление
}