

function niveis(){	
	if(nivel == 1){
		runWebGL();
		document.getElementById("nivel").src="imgs/nivel1.png";
		document.getElementById("nivel_2").src="imgs/nivel1.png";
		document.getElementById("nome_nivel").innerHTML="Nível 1: ";
	}
	if(nivel == 2){
		runWebGL();
	}
	if(nivel == 3){
		runWebGL();
	}
}