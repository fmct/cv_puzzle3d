
/* Events related */

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
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
				}
				else{
					if(jogadas_nivel == 0){
						swal({
							  title: "Jogadas disponiveis esgotadas",
							  text: "Começar do inicio",
							  imageUrl: "imgs/sadSmile.png"
						});
						reset();
					}
					drawScene();
				}
			}			  
		};

		document.getElementById("move-right-button").onclick = function(){		
			if(nivel == 1){
				if(tx1 < limite_dir){
					tx1 += 0.05;		
				}	
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});;
					//nivel = 2;
				}
				else{
					if(jogadas_nivel == 0){
						swal({
							  title: "Jogadas disponiveis esgotadas",
							  text: "Começar do inicio",
							  imageUrl: "imgs/sadSmile.png"
						});
						reset();
					}
					drawScene();
				}
			}			  
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			if(ty1 < limite_sup){
				ty1 += 0.05;	
			}
			var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];	
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}		 
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating	
			if(ty1 > limite_inf){
				ty1 -= 0.05;
			}	
			var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];	
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			} 
		};


		document.getElementById("move-front-button").onclick = function(){
			// Updating
			if(tz1 < limite_sup){
				tz1 += 0.1;
			}	
			var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	 
		};      

		document.getElementById("move-back-button").onclick = function(){
			// Updating
			if(tz1+block > tz_back){
				tz1 -= 0.1;
			}
			var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene();
			}		  
		};

		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX1 -= 45;
			if(angleXX1 == 360 || angleXX1 == -360){
				angleXX1 = 0;
			}			
			var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}			 
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX1 += 45;
			if(angleXX1 == 360 || angleXX1 == -360){
				angleXX1 = 0;
			}						
			var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY1 += 45;	
			if(angleYY1 == 360 || angleYY1 == -360){
				angleYY1 = 0;
			}	
			var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	 
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY1 -= 45;	
			if(angleYY1 == 360 || angleYY1 == -360){
				angleYY1 = 0;
			}		
			var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ1 -= 45;		
			if(angleZZ1 == 360 || angleZZ1 == -360){
				angleZZ1 = 0;
			}		
			var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}				
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ1 += 45;
			if(angleZZ1 == 360 || angleZZ1 == -360){
				angleZZ1 = 0;
			}					
			var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];	
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}			
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
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
			var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("move-right-button").onclick = function(){		
			// Updating	
			if(tx2 < limite_sup){
				tx2 += 0.1;		
			}		
			var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			if(ty2 < limite_sup){
				ty2 += 0.1;	
			}	
			var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating	
			if(ty2 > limite_inf){
				ty2 -= 0.1;	
			}		
			var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("move-front-button").onclick = function(){
			// Updating
			if(tz2 < limite_sup){
				tz2 += 0.1;		
			}
			var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	 
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(tz2+block > tz_back){
				tz2 -= 0.1;
			}
			var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	   
		};   
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX2 -= 45;			
			if(angleXX2 == 360 || angleXX2 == -360){
				angleXX2 = 0;
			}
			var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}			
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	 
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX2 += 45;				
			if(angleXX2 == 360 || angleXX2 == -360){
				angleXX2 = 0;
			}
			var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY2 += 45;		
			if(angleYY2 == 360 || angleYY2 == -360){
				angleYY2 = 0;
			}	
			var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY2 -= 45;		
			if(angleYY2 == 360 || angleYY2 == -360){
				angleYY2 = 0;
			}
			var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ2 -= 45;			
			if(angleZZ2 == 360 || angleZZ2 == -360){
				angleZZ2 = 0;
			}
			var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}
			if(jogadas_nivel == 0 && nivel == 1){
				swal({
					  title: "Jogadas disponiveis esgotadas",
					  text: "Começar do inicio",
					  imageUrl: "imgs/sadSmile.png"
				});
				reset();
			}	
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	 
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ2 += 45;				
			if(angleZZ2 == 360 || angleZZ2 == -360){
				angleZZ2 = 0;
			}
			var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
				});
				//nivel = 2;
			}			
			else{
				if(jogadas_nivel == 0){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}
				drawScene(); 
			}	  
		};
	};
	
	document.getElementById("reset-button").onclick = function(){	
		reset();
		drawScene();  
	};            
}