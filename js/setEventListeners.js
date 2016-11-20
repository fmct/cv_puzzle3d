function setEventListeners(canvas){

	canvas.onmousedown = handleMouseDown;

    document.onmouseup = handleMouseUp;

    document.onmousemove = handleMouseMove;

    function handleKeyDown(event) {
		
        currentlyPressedKeys[event.keyCode] = true;
    }

    function handleKeyUp(event) {
		
        currentlyPressedKeys[event.keyCode] = false;
    }

	document.onkeydown = handleKeyDown;
    
    document.onkeyup = handleKeyUp;      

	// Button events
	document.getElementById("figura1").onclick = function(){
		figura1_on = 1;
		figura2_on = 0;
		bars_fig1 = 1;
		document.getElementById("move-left-button").onclick = function(){			
			if(nivel == 1){		
				if(tx1 > limite_esq){
					tx1 -= 0.05;		
				}
				var tentativa = acertou_x(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
				}
			}		
			verifyPositions("figura1");
			drawScene();  
		};

		document.getElementById("move-right-button").onclick = function(){		
			if(nivel == 1){
				if(tx1 < limite_dir){
					tx1 += 0.05;		
				}	
				var tentativa = acertou_x(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});;
					//nivel = 2;
				}
			}
			verifyPositions("figura1");			
			drawScene();  
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			if(ty1 < limite_sup){
				ty1 += 0.05;	
			}
			var tentativa = acertou_y(ty1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];	
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}

			verifyPositions("figura1");			
			drawScene();  
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating	
			if(ty1 > limite_inf){
				ty1 -= 0.05;
			}	
			var tentativa = acertou_y(ty1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];	
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			verifyPositions("figura1");
			drawScene();  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ1 -= 45;		
			if(angleZZ1 == 360 || angleZZ1 == -360){
				angleZZ1 = 0;
			}		
			var tentativa = acertou_angZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}			
			verifyPositions("figura1");		
			drawScene();  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ1 += 45;
			if(angleZZ1 == 360 || angleZZ1 == -360){
				angleZZ1 = 0;
			}					
			var tentativa = acertou_angZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			verifyPositions("figura1");			
			drawScene();  
		};
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX1 -= 45;
			if(angleXX1 == 360 || angleXX1 == -360){
				angleXX1 = 0;
			}			
			var tentativa = acertou_angX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			verifyPositions("figura1");			
			drawScene();  
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX1 += 45;
			if(angleXX1 == 360 || angleXX1 == -360){
				angleXX1 = 0;
			}						
			var tentativa = acertou_angX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			verifyPositions("figura1");
			drawScene();  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY1 += 45;	
			if(angleYY1 == 360 || angleYY1 == -360){
				angleYY1 = 0;
			}	
			var tentativa = acertou_angY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			verifyPositions("figura1");
			drawScene();  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY1 -= 45;	
			if(angleYY1 == 360 || angleYY1 == -360){
				angleYY1 = 0;
			}		
			var tentativa = acertou_angY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			verifyPositions("figura1");
			drawScene();  
		};

		document.getElementById("move-front-button").onclick = function(){
			// Updating
			if(tz1 < limite_sup){
				tz1 += 0.1;
			}	
			var tentativa = acertou_z(tz1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			verifyPositions("figura1");
			drawScene();  
		};      

		document.getElementById("move-back-button").onclick = function(){
			// Updating
			if(tz1+block > tz_back){
				tz1 -= 0.1;
			}
			var tentativa = acertou_z(tz1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			verifyPositions("figura1");
			drawScene();  
		};      
	};
	document.getElementById("figura2").onclick = function(){
		figura2_on = 1;
		figura1_on = 0;
		bars_fig1 = 0;
		//verifyPositions("figura2");	
		document.getElementById("move-left-button").onclick = function(){			
			// Updating		
			if(tx2 > limite_inf){
				tx2 -= 0.1;		
			}	
			var tentativa = acertou_x(tx2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			verifyPositions("figura2");	
			drawScene();  
		};

		document.getElementById("move-right-button").onclick = function(){		
			// Updating	
			if(tx2 < limite_sup){
				tx2 += 0.1;		
			}		
			var tentativa = acertou_x(tx2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			if(ty2 < limite_sup){
				ty2 += 0.1;	
			}	
			var tentativa = acertou_y(ty2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating	
			if(ty2 > limite_inf){
				ty2 -= 0.1;	
			}		
			var tentativa = acertou_y(ty2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ2 -= 45;			
			if(angleZZ2 == 360 || angleZZ2 == -360){
				angleZZ2 = 0;
			}
			var tentativa = acertou_angZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ2 += 45;				
			if(angleZZ2 == 360 || angleZZ2 == -360){
				angleZZ2 = 0;
			}
			var tentativa = acertou_angZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}			
			drawScene();  
		};
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX2 -= 45;			
			if(angleXX2 == 360 || angleXX2 == -360){
				angleXX2 = 0;
			}
			var tentativa = acertou_angX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}			
			drawScene();  
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX2 += 45;				
			if(angleXX2 == 360 || angleXX2 == -360){
				angleXX2 = 0;
			}
			var tentativa = acertou_angX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY2 += 45;		
			if(angleYY2 == 360 || angleYY2 == -360){
				angleYY2 = 0;
			}	
			var tentativa = acertou_angY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY2 -= 45;		
			if(angleYY2 == 360 || angleYY2 == -360){
				angleYY2 = 0;
			}
			var tentativa = acertou_angY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};


		document.getElementById("move-front-button").onclick = function(){
			// Updating
			if(tz2 < limite_sup){
				tz2 += 0.1;		
			}
			var tentativa = acertou_z(tz2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();  
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(tz2+block > tz_back){
				tz2 -= 0.1;
			}
			var tentativa = acertou_z(tz2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			drawScene();   
		};   
	};
	
	document.getElementById("reset-button").onclick = function(){	
	if(nivel == 1){	
		tx1 = -0.5;
		ty1 = 0.0; 
		tz1 = 0.0;
		angleXX1 = 0.0;
		angleYY1 = 0.0;
		angleZZ1 = 0.0;  
		tx2 = 0.0;
		ty2 = 0.0; 
		tz2 = 0.0;
		angleXX2 = 0.0;
		angleYY2 = 0.0;
		angleZZ2 = 0.0;  
		tx_back = 0.0;
		ty_back = 0.0;
		tz_back = 0.0;
		angleXX_back = 0.0;
		angleYY_back = 0.0;
		angleZZ_back = 0.0; 
		globalAngleXX = 0.0;
		globalAngleYY = 0.0;
		globalAngleXX_back = 0.0;
		globalAngleYY_back = 0.0;
		if(nivel == 1){
			jogadas_nivel = 25;
			document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
			points = 500; 
			document.getElementById("points").innerHTML=points;

		}
		drawScene();  
	};            
  }
}