
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
		figura3_on = 0;
		if(document.getElementById("figura1").innerHTML=="pirâmide"){
			getBarsReset(1,0,0,0,0,0,0,0);
		}else if(document.getElementById("figura1").innerHTML=="estrela"){
			getBarsReset(0,0,1,0,0,0,0,0);
		}else if(document.getElementById("figura1").innerHTML=="Pirâmide"){
			getBarsReset(0,0,0,0,0,1,0,0);
		}
		getVisibleBars();
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tx1 > limite_esq){
					tx1 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Segundo nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
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
					  title: "Terceiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tx1 > limite_esq){
					tx1 += 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Segundo nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});;
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tx1 > limite_esq){
					tx1 += 0.05;		
				}
				drawScene();
			}				  
		};

		document.getElementById("move-up-button").onclick = function(){			
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(ty1 < limite_sup){
					ty1 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(ty1 < limite_sup){
					ty1 += 0.05;	
				}
				drawScene();
			}		 
		};

		document.getElementById("move-down-button").onclick = function(){		
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(ty1 > limite_inf){
					ty1 -= 0.05;
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(ty1 < limite_sup){
					ty1 -= 0.05;	
				}
				drawScene();
			}
		};


		document.getElementById("move-front-button").onclick = function(){
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tz1 < limite_sup){
					tz1 += 0.1;
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tz1 < limite_sup){
					tz1 += 0.1;	
				}
				drawScene();
			}	 
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tz1+block > tz_back){
					tz1 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tz1+block > tz_back){
					tz1 -= 0.1;	
				}
				drawScene();
			}		  
		};

		document.getElementById("rotate-xx-up").onclick = function(){				
			if(nivel == 1){			
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleXX1 -= 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}
				drawScene();
			}			 
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			if(nivel == 1){			
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleXX1 += 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}
				drawScene();
			}	  
		};

		document.getElementById("rotate-yy-right").onclick = function(){			
			if(nivel == 1){		
				angleYY1 += 45;	
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}	
				alert(angleYY1);
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleYY1 += 45;
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}
				drawScene();
			}	 
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			if(nivel == 1){	
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleYY1 -= 45;
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}
				drawScene();
			}	  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			if(nivel == 1){		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleZZ1 -= 45;		
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}
				drawScene();
			}	  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleZZ1 += 45;		
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}
				drawScene();
			}	 	  
		};		      
	};

	document.getElementById("figura2").onclick = function(){
		figura2_on = 1;
		figura1_on = 0;
		figura3_on = 0;
		if(document.getElementById("figura2").innerHTML=="cubo"){
			getBarsReset(0,1,0,0,0,0,0,0);
		}else if(document.getElementById("figura2").innerHTML=="pirâmide"){
			getBarsReset(0,0,0,1,0,0,0,0);
		}else if(document.getElementById("figura2").innerHTML=="Cubo"){
			getBarsReset(0,0,0,0,0,0,1,0);
		}
		getVisibleBars();
		document.getElementById("move-left-button").onclick = function(){			
			if(nivel == 1){		
				if(tx2 > limite_inf){
					tx2 -= 0.05;		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tx2 > limite_inf){
					tx2 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tx2 > limite_inf){
					tx2 -= 0.05;		
				}
				drawScene();
			}  
		};

		document.getElementById("move-right-button").onclick = function(){		
			if(nivel == 1){
				if(tx2 < limite_sup){
					tx2 += 0.05;		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tx2 < limite_sup){
					tx2 += 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tx2 < limite_sup){
					tx2 += 0.05;		
				}
				drawScene();
			}	  
		};

		document.getElementById("move-up-button").onclick = function(){			
			if(nivel == 1){
				if(ty2 < limite_sup){
					ty2 += 0.05;	
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(ty2 < limite_sup){
					ty2 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(ty2 < limite_sup){
					ty2 += 0.05;	
				}
				drawScene();
			}	  
		};

		document.getElementById("move-down-button").onclick = function(){		
			if(nivel == 1){
				if(ty2 > limite_inf){
					ty2 -= 0.05;	
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(ty2 > limite_inf){
					ty2 -= 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(ty2 < limite_sup){
					ty2 -= 0.05;	
				}
				drawScene();
			}		  
		};

		document.getElementById("move-front-button").onclick = function(){
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tz2 < limite_sup){
					tz2 += 0.1;		
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tz2 < limite_sup){
					tz2 += 0.1;		
				}
				drawScene();
			}	 
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
				if(tz2+block > tz_back){
					tz2 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				if(tz2+block > tz_back){
					tz2 -= 0.1;
				}
				drawScene();
			}
		};   
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			if(nivel == 1){		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleXX2 -= 45;			
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}	
				drawScene();
			} 
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			if(nivel == 1){		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();	
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();	
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
			else if(nivel == 3){
				angleXX2 += 45;				
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}
				drawScene();
			}	  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			if(nivel == 1){		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleYY2 += 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}	
				drawScene();
			}  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			if(nivel == 1){		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleYY2 -= 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}
				drawScene();
			}	  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			if(nivel == 1){		
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			}
			else if(nivel == 3){
				angleZZ2 -= 45;			
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}
				drawScene();
			}	 
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			if(nivel == 1){
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
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 2){
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
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					background = 0;
					nivel = nivel+1;
					points_fim_nivel = points;
					niveis();
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
			else if(nivel == 3){
				angleZZ2 += 45;				
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}	
				drawScene();
			}  
		};
	};
	if(nivel == 2){
		document.getElementById("figura3").onclick = function(){
		figura2_on = 0;
		figura1_on = 0;
		figura3_on = 1;
		getBarsReset(0,0,0,0,1,0,0,0);
		getVisibleBars();
		document.getElementById("move-left-button").onclick = function(){			
			// Updating		
			if(tx3 > limite_inf){
				tx3 -= 0.1;		
			}	
			var tentativa = verificarPosicaoTx(tx3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("move-right-button").onclick = function(){		
			// Updating	
			if(tx3 < limite_sup){
				tx3 += 0.1;		
			}		
			var tentativa = verificarPosicaoTx(tx3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("move-up-button").onclick = function(){			
			// Updating	
			if(ty3 < limite_sup){
				ty3 += 0.05;	
			}	
			var tentativa = verificarPosicaoTy(ty3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("move-down-button").onclick = function(){		
			// Updating	
			if(ty3 > limite_inf){
				ty3 -= 0.05;	
			}		
			var tentativa = verificarPosicaoTy(ty3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("move-front-button").onclick = function(){
			// Updating
			if(tz3 < limite_sup){
				tz3 += 0.1;		
			}
			var tentativa = verificarPosicaoTz(tz3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(tz3+block > tz_back){
				tz3 -= 0.1;
			}
			var tentativa = verificarPosicaoTz(tz3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};   
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			// Updating			
			angleXX3 -= 45;			
			if(angleXX3 == 360 || angleXX3 == -360){
				angleXX3 = 0;
			}
			var tentativa = verificarPosicaoAngleXX(angleXX3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			// Updating			
			angleXX3 += 45;				
			if(angleXX3 == 360 || angleXX3 == -360){
				angleXX3 = 0;
			}
			var tentativa = verificarPosicaoAngleXX(angleXX3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			// Updating			
			angleYY3 += 45;		
			if(angleYY3 == 360 || angleYY3 == -360){
				angleYY3 = 0;
			}	
			var tentativa = verificarPosicaoAngleYY(angleYY3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			// Updating		
			angleYY3 -= 45;		
			if(angleYY3 == 360 || angleYY3 == -360){
				angleYY3 = 0;
			}
			var tentativa = verificarPosicaoAngleYY(angleYY3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			// Updating		
			angleZZ3 -= 45;			
			if(angleZZ3 == 360 || angleZZ3 == -360){
				angleZZ3 = 0;
			}
			var tentativa = verificarPosicaoAngleZZ(angleZZ3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			// Updating
			angleZZ3 += 45;				
			if(angleZZ3 == 360 || angleZZ3 == -360){
				angleZZ3 = 0;
			}
			var tentativa = verificarPosicaoAngleZZ(angleZZ3,nivel,points,fase,jogadas_nivel,"figura3");
			points = tentativa[0];
			document.getElementById("points").innerHTML=points;
			fase = tentativa[1];
			jogadas_nivel = tentativa[2];
			document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
			if(acertou == 18){
				swal({
					  title: "Segundo nivel concluido!",
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
		};
	};
	}
	document.getElementById("reset-button").onclick = function(){	
		reset();
		drawScene();  
	};            
}