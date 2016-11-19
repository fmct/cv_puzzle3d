

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
		runWebGL();
		var button = document.createElement("button");
		button.innerHTML = "figura3";
		button.className = "btn btn-tumblr btn3d";
		button.id = "figura3";
		document.getElementById("choose_fig").appendChild(button);
	}
	if(nivel == 3){
		runWebGL();
	}
}