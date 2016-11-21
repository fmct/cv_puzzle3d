

function niveis(){	
	if(nivel == 1){
		runWebGL();
		document.getElementById("nivel").src="imgs/nivel1.png";
		document.getElementById("nivel_2").src="imgs/nivel1_2.png";
		document.getElementById("nome_nivel").innerHTML="Nível 1: ";
		document.getElementById("points").innerHTML=points;
		document.getElementById("jogadas").innerHTML="jogadas disponiveis: " + jogadas_nivel;
		document.getElementById("figura1").innerHTML="pirâmide";
		document.getElementById("figura2").innerHTML="cubo";

	}
	if(nivel == 2){
		reset();
		runWebGL();
		document.getElementById("nivel").src="imgs/nivel2.png";
		document.getElementById("nivel_2").src="imgs/nivel2_2.png";
		document.getElementById("nome_nivel").innerHTML="Nível 2: ";
		document.getElementById("figura1").innerHTML="estrela";
		document.getElementById("figura2").innerHTML="pirâmide"
		
	}
	if(nivel == 3){
		runWebGL();
	}
}