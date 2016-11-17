function niveis(){	
	if(nivel == 1){
		runWebGL();
		document.getElementById("nivel").src="imgs/nivel1.png";
		document.getElementById("nome_nivel").innerHTML="Nivel 1";
	}
	if(nivel == 2){
		runWebGL();
	}
	if(nivel == 3){
		runWebGL();
	}
}