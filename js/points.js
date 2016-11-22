
/* Points related */

var acertou = 0;
	//figura1
var hit_x1 = false;
var hit_y1 = false;
var hit_z1 = false;
var hit_angY1 = false;
var hit_angX1 = false;
var hit_angZ1 = false;
		//nivel 1
var tx1_certo_nivel1 = 0.0;
var ty1_certo_nivel1 = 0.25;
var tz1_certo_nivel1 = -0.1;
var angleXX1_certo_nivel1 = 0.0;
var angleYY1_certo_nivel1 = -90;
var angleZZ1_certo_nivel1 = 0.0;
		//nivel 2
var tx1_certo_nivel2 = 0.0;
var ty1_certo_nivel2 = 0.65;
var tz1_certo_nivel2 = -0.2;
var angleXX1_certo_nivel2 = 0.0;
var angleYY1_certo_nivel2 = 180;
var angleZZ1_certo_nivel2 = 45;
	//figura2
var hit_x2 = false;
var hit_y2 = false;
var hit_z2 = false;
var hit_angY2 = false;
var hit_angX2 = false;
var hit_angZ2 = false;
		//nivel 1
var tx2_certo_nivel1 = 0.0;
var ty2_certo_nivel1 = 0.0;
var tz2_certo_nivel1 = -0.1;
var angleYY2_certo_nivel1 = 0.0;
var angleXX2_certo_nivel1 = 90;
var angleZZ2_certo_nivel1 = 0.0;
		//nivel 2
var tx2_certo_nivel2 = 0.0;
var ty2_certo_nivel2 = 0.35;
var tz2_certo_nivel2 = -0.2;
var angleYY2_certo_nivel2 = 90;
var angleXX2_certo_nivel2 = 0.0;
var angleZZ2_certo_nivel2 = 0.0;
	//figura 3
var hit_x3 = false;
var hit_y3 = false;
var hit_z3 = false;
var hit_angY3 = false;
var hit_angX3 = false;
var hit_angZ3 = false;	
var tx3_certo_nivel2 = 0.0;
var ty3_certo_nivel2 = -0.15;
var tz3_certo_nivel2 = -0.2;
var angleYY3_certo_nivel2 = 0.0;
var angleXX3_certo_nivel2 = 90;
var angleZZ3_certo_nivel2 = -90;

function verificarPosicaoTx(tx, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( !(tx >= tx1_certo_nivel1-0.04 && tx <= tx1_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 1, tx1_certo_nivel1, tx);
				if(hit_x1 == true){
					hit_x1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x1 =true;
				setBarAttributesTranslationsOrAngles(1, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel X da pirâmide", "success");
				}
			}
		}	
		if(figura == "figura2"){
			if( !(tx >= tx2_certo_nivel1-0.04 && tx <= tx2_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 2, tx2_certo_nivel1, tx);
				if(hit_x2 == true){
					hit_x2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x2 =true;
				setBarAttributesTranslationsOrAngles(1, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel X do cubo", "success");
				}
			}
		}
	}	
	else if(nivel == 2){
		alert(acertou);
		if(figura == "figura1"){
			if( !(tx >= tx1_certo_nivel2-0.04 && tx <= tx1_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 3, tx1_certo_nivel2, tx);
				if(hit_x1 == true){
					hit_x1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x1 =true;
				setBarAttributesTranslationsOrAngles(1, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X da estrela", "success");
				}
			}
		}	
		if(figura == "figura2"){
			if( !(tx >= tx2_certo_nivel2-0.04 && tx <= tx2_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 4, tx2_certo_nivel2, tx);
				if(hit_x2 == true){
					hit_x2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x2 =true;
				setBarAttributesTranslationsOrAngles(1, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( !(tx >= tx3_certo_nivel2-0.04 && tx <= tx3_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 5, tx3_certo_nivel2, tx);
				if(hit_x3 == true){
					hit_x3 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x3 =true;
				setBarAttributesTranslationsOrAngles(1, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X do paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoTy(ty, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( !(ty >= ty1_certo_nivel1-0.04 && ty <= ty1_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 1, ty1_certo_nivel1, ty);
				if(hit_y1 == true){
					hit_y1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_y1 = true;
				setBarAttributesTranslationsOrAngles(2, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){

			if( !(ty >= ty2_certo_nivel1-0.04 && ty <= ty2_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 2, ty2_certo_nivel1, ty);
				if(hit_y2 == true){
					hit_y2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y2 = true;
				setBarAttributesTranslationsOrAngles(2, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Y do cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if( !(ty >= ty1_certo_nivel2-0.04 && ty <= ty1_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 3, ty1_certo_nivel2, ty);
				if(hit_y1 == true){
					hit_y1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_y1 = true;
				setBarAttributesTranslationsOrAngles(2, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( !(ty >= ty2_certo_nivel2-0.04 && ty <= ty2_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 4, ty2_certo_nivel2, ty);
				if(hit_y2 == true){
					hit_y2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y2 = true;
				setBarAttributesTranslationsOrAngles(2, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( !(ty >= ty3_certo_nivel2-0.04 && ty <= ty3_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 5, ty3_certo_nivel2, ty);
				if(hit_y3 == true){
					hit_y3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y3 = true;
				setBarAttributesTranslationsOrAngles(2, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y do paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}


function verificarPosicaoTz(tz, nivel, points, fase,jogadas, figura){
	alert(acertou);
	if(nivel == 1){
		if(figura == "figura1"){
			if(!(tz >= tz1_certo_nivel1-0.04 && tz <= tz1_certo_nivel1+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 1, tz1_certo_nivel1, tz);
				if(hit_z1 == true){
					hit_z1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z1 = true;
				setBarAttributesTranslationsOrAngles(3, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if(!(tz >= tz2_certo_nivel1-0.04 && tz <= tz2_certo_nivel1+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 2, tz2_certo_nivel1, tz);
				if(hit_z2 == true){
					hit_z2 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z2 = true;
				setBarAttributesTranslationsOrAngles(3, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Z do cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if(!(tz >= tz1_certo_nivel2-0.04 && tz <= tz1_certo_nivel2+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 3, tz1_certo_nivel2, tz);
				if(hit_z1 == true){
					hit_z1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z1 = true;
				setBarAttributesTranslationsOrAngles(3, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if(!(tz >= tz2_certo_nivel2-0.04 && tz <= tz2_certo_nivel2+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 4, tz2_certo_nivel2, tz);
				if(hit_z2 == true){
					hit_z2 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z2 = true;
				setBarAttributesTranslationsOrAngles(3, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if(!(tz >= tz3_certo_nivel2-0.04 && tz <= tz3_certo_nivel2+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 5, tz3_certo_nivel2, tz);
				if(hit_z3 == true){
					hit_z3 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z3 = true;
				setBarAttributesTranslationsOrAngles(3, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z do paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoAngleXX(angleXX, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){ 
			if( angleXX != angleXX1_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 1, angleXX1_certo_nivel1, angleXX);			
				if(hit_angX1 == true){
					hit_angX1 = false;
					acertou -= 1;
				}			
			}
			else{
				acertou += 1;
				hit_angX1 = true;	
				setBarAttributesTranslationsOrAngles(4, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo X da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleXX != angleXX2_certo_nivel1 - 360 && angleXX != angleXX2_certo_nivel1 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 2, angleXX2_certo_nivel1, angleXX);	
				if(hit_angX2 == true){
					hit_angX2 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX2 = true;
				setBarAttributesTranslationsOrAngles(4, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo X do cubo", "success");
				}
			}				
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){ 
			if( angleXX != angleXX1_certo_nivel2){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 3, angleXX1_certo_nivel2, angleXX);			
				if(hit_angX1 == true){
					hit_angX1 = false;
					acertou -= 1;
				}			
			}
			else{
				acertou += 1;
				hit_angX1 = true;	
				setBarAttributesTranslationsOrAngles(4, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleXX != angleXX2_certo_nivel2 + 360 && angleXX != angleXX2_certo_nivel2 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 4, angleXX2_certo_nivel2, angleXX);	
				if(hit_angX2 == true){
					hit_angX2 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX2 = true;
				setBarAttributesTranslationsOrAngles(4, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X da pirâmide", "success");
				}
			}				
		}
		if(figura == "figura3"){
			if( angleXX != angleXX3_certo_nivel2 - 360 && angleXX != angleXX3_certo_nivel2){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 5, angleXX3_certo_nivel2, angleXX);	
				if(hit_angX3 == true){
					hit_angX3 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX3 = true;
				setBarAttributesTranslationsOrAngles(4, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X do paralelipipedo", "success");
				}
			}				
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoAngleYY(angleYY, nivel, points, fase,jogadas, figura){
	
	if(nivel == 1){
		if(figura == "figura1"){
			if( angleYY != angleYY1_certo_nivel1 && angleYY != angleYY1_certo_nivel1 - 360 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 1, angleYY1_certo_nivel1, angleYY);	
				if(hit_angY1 == true){
					hit_angY1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angY1 = true;
				setBarAttributesTranslationsOrAngles(5, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleYY != angleYY2_certo_nivel1 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 2, angleYY1_certo_nivel1, angleYY);	
				if(hit_angY2 == true){
					hit_angY2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY2 = true;
				setBarAttributesTranslationsOrAngles(5, 2);	
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Y do cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if( angleYY != angleYY1_certo_nivel2 && angleYY != angleYY1_certo_nivel2 - 360 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 3, angleYY1_certo_nivel2, angleYY);	
				if(hit_angY1 == true){
					hit_angY1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angY1 = true;
				setBarAttributesTranslationsOrAngles(5, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleYY != angleYY2_certo_nivel2 && angleYY != angleYY2_certo_nivel2 - 360 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 4, angleYY2_certo_nivel2, angleYY);	
				if(hit_angY2 == true){
					hit_angY2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY2 = true;
				setBarAttributesTranslationsOrAngles(5, 4);	
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( angleYY != angleYY3_certo_nivel2){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 5, angleYY3_certo_nivel2, angleYY);	
				if(hit_angY3 == true){
					hit_angY3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY3 = true;
				setBarAttributesTranslationsOrAngles(5, 5);	
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y do paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoAngleZZ(angleZZ, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( angleZZ != angleZZ1_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 1, angleZZ1_certo_nivel1, angleZZ);
				if(hit_angZ1 == true){
					hit_angZ1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angZ1 = true;
				setBarAttributesTranslationsOrAngles(6, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleZZ != angleZZ2_certo_nivel1 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 2, angleZZ2_certo_nivel1, angleZZ);	
				if(hit_angZ2 == true){
					hit_angZ2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ2 = true;
				setBarAttributesTranslationsOrAngles(6, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Z da cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if( angleZZ != angleZZ1_certo_nivel2 && angleZZ != angleZZ1_certo_nivel2 - 360){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 3, angleZZ1_certo_nivel2, angleZZ);
				if(hit_angZ1 == true){
					hit_angZ1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angZ1 = true;
				setBarAttributesTranslationsOrAngles(6, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleZZ != angleZZ2_certo_nivel2 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 4, angleZZ2_certo_nivel2, angleZZ);	
				if(hit_angZ2 == true){
					hit_angZ2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ2 = true;
				setBarAttributesTranslationsOrAngles(6, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( angleZZ != angleZZ3_certo_nivel2 && angleZZ != angleZZ3_certo_nivel2 + 360){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 5, angleZZ3_certo_nivel2, angleZZ);	
				if(hit_angZ3 == true){
					hit_angZ3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ3 = true;
				setBarAttributesTranslationsOrAngles(6, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z do paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_inicial_nivel1(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2){
	if(nivel == 1){
		//figura1
		if(tx1 == tx1_certo_nivel1){
			hit_x1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(1, 1);
		}
		if(ty1 == ty1_certo_nivel1){
			hit_y1 = true;
			acertou +=1
			setBarAttributesTranslationsOrAngles(2, 1);
		}
		if(tz1 == tz1_certo_nivel1){
			hit_z1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(3, 1);
		}
		if(angleXX1 == angleXX1_certo_nivel1){
			hit_angX1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(4, 1);
		}
		if(angleYY1 == angleYY1_certo_nivel1){
			hit_angY1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(5, 1);
		}
		if(angleZZ1 == angleZZ1_certo_nivel1){
			hit_angZ1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(6, 1);
		}
		//figura2
		if(tx2 == tx2_certo_nivel1){
			hit_x2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(1, 2);
		}
		if(ty2 == ty2_certo_nivel1){
			hit_y2 = true;
			acertou +=1
			setBarAttributesTranslationsOrAngles(2, 2);
		}
		if(tz2 == tz2_certo_nivel1){
			hit_z2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(3, 2);
		}
		if(angleXX2 == angleXX2_certo_nivel1){
			hit_angX2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(4, 2);
		}
		if(angleYY2 == angleYY2_certo_nivel1){
			hit_angY2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(5, 2);
		}
		if(angleZZ2 == angleZZ2_certo_nivel1){
			hit_angZ2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(6, 2);
		}
	}
}

function acertou_inicial_nivel2(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3){	
	//figura1_nivel2 -> fig3
	if(tx1 == tx1_certo_nivel2){
		hit_x1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 3);
	}
	if(ty1 == ty1_certo_nivel2){
		hit_y1 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 3);
	}
	if(tz1 == tz1_certo_nivel2){
		hit_z1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 3);
	}
	if(angleXX1 == angleXX1_certo_nivel2){
		hit_angX1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 3);
	}
	if(angleYY1 == angleYY1_certo_nivel2){
		hit_angY1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 3);
	}
	if(angleZZ1 == angleZZ1_certo_nivel2){
		hit_angZ1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 3);
	}
	//figura2_nivel2 -> fig4
	if(tx2 == tx2_certo_nivel2){
		hit_x2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 4);
	}
	if(ty2 == ty2_certo_nivel2){
		hit_y2 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 4);
	}
	if(tz2 == tz2_certo_nivel2){
		hit_z2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 4);
	}
	if(angleXX2 == angleXX2_certo_nivel2){
		hit_angX2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 4);
	}
	if(angleYY2 == angleYY2_certo_nivel2){
		hit_angY2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 4);
	}
	if(angleZZ2 == angleZZ2_certo_nivel2){
		hit_angZ2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 4);
	}
	//figura3_nivel2 -> fig5
	if(tx3 == tx3_certo_nivel2){
		hit_x3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 5);
	}
	if(ty3 == ty3_certo_nivel2){
		hit_y3 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 5);
	}
	if(tz3 == tz3_certo_nivel2){
		hit_z3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 5);
	}
	if(angleXX3 == angleXX3_certo_nivel2){
		hit_angX3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 5);
	}
	if(angleYY3 == angleYY3_certo_nivel2){
		hit_angY3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 5);
	}
	if(angleZZ3 == angleZZ3_certo_nivel2){
		hit_angZ3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 5);
	}
}