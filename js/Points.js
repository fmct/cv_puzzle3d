var acertou = 0;
//------nivel 1 --------
	//figura1
var hit_x1 = false;
var hit_y1 = false;
var hit_z1 = false;
var hit_angY1 = false;
var hit_angX1 = false;
var hit_angZ1 = false;
var tx1_certo_nivel1 = 0.0;
var ty1_certo_nivel1 = 0.25;
var tz1_certo_nivel1 = -0.1;
var angleYY1_certo_nivel1 = -90;
var angleXX1_certo_nivel1 = 0.0;
var angleZZ1_certo_nivel1 = 0.0;
	//figura2
var hit_x2 = false;
var hit_y2 = false;
var hit_z2 = false;
var hit_angY2 = false;
var hit_angX2 = false;
var hit_angZ2 = false;
var tx2_certo_nivel1 = 0.0;
var ty2_certo_nivel1 = 0.0;
var tz2_certo_nivel1 = -0.1;
var angleYY2_certo_nivel1 = 0.0;
var angleXX2_certo_nivel1 = 90;
var angleZZ2_certo_nivel1 = 0.0;


function acertou_x(tx, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( !(tx >= tx1_certo_nivel1-0.05 && tx <= tx1_certo_nivel1)){
				points -= 10;
				jogadas -= 1;
				if(hit_x1 == true){
					hit_x1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x1 =true;
				alert("acertou x f1");
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
		if(figura == "figura2"){
			if( !(tx >= tx2_certo_nivel1-0.05 && tx <= tx2_certo_nivel1)){
				points -= 10;
				jogadas -= 1;
				if(hit_x2 == true){
					hit_x2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x2 =true;
				alert("acertou x f2");
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_y(ty, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( ty != ty1_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_y1 == true){
					hit_y1 = false;
					acertou -= 1; 
				}
			}
			else{
				acertou += 1;
				hit_y1 = true;
				alert("acertou y f1");
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
		if(figura == "figura2"){
			if( ty != ty2_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_y2 == true){
					hit_y2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_y2 = true;
				alert("acertou y f2");
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_z(tz, nivel, points, fase,jogadas, figura){

	if(nivel == 1){
		if(figura == "figura1"){
			if( tz != tz1_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_z1 == true){
					hit_z1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_z1 = true;
				alert("acertou z f1")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
		if(figura == "figura2"){
			if( tz != tz2_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_z2 == true){
					hit_z2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_z2 = true;
				alert("acertou z f2")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_angY(angleYY, nivel, points, fase,jogadas, figura){

	if(nivel == 1){
		if(figura == "figura1"){
			if( angleYY != angleYY1_certo_nivel1 && angleYY != angleYY1_certo_nivel1 + 360 ){
				points -= 10;
				jogadas -= 1;
				if(hit_angY1 == true){
					hit_angY1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_angY1 = true;
				alert("acertou angY f1")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
		if(figura == "figura2"){
			if( angleYY != angleYY2_certo_nivel1 ){
				points -= 10;
				jogadas -= 1;
				if(hit_angY2 == true){
					hit_angY2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_angY2 = true;
				alert("acertou angY f2")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_angX(angleXX, nivel, points, fase,jogadas, figura){

	if(nivel == 1){
		if(figura == "figura1"){
			if( angleXX != angleXX1_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_angX1 == true){
					hit_angX1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_angX1 = true;
				alert("acertou angX f1")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
		if(figura == "figura2"){
			if( angleXX != angleXX2_certo_nivel1 - 360 && angleXX != angleXX2_certo_nivel1 ){
				points -= 10;
				jogadas -= 1;
				if(hit_angX2 == true){
					hit_angX2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_angX2 = true;
				alert("acertou angX f2")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_angZ(angleZZ, nivel, points, fase,jogadas, figura){

	if(nivel == 1){
		if(figura == "figura1"){
			if( angleZZ != angleZZ1_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_angZ1 == true){
					hit_angZ1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_angZ1 = true;
				alert("acertou angY f1")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
		if(figura == "figura2"){
			if( angleZZ != angleZZ2_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				if(hit_angZ2 == true){
					hit_angZ2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_angZ2 = true;
				alert("acertou angY f1")
				if(acertou == 12){
					alert("acertou");
				}
			}
		}
	}
	return [points,fase,jogadas];
}


function acertou_inicial(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX,angleYY2,angleZZ2){
	if(nivel == 1){
		//figura1
		if(tx1 == tx1_certo_nivel1){
			hit_x1 = true;
			acertou += 1;
		}
		if(ty1 == ty1_certo_nivel1){
			hit_y1 = true;
			acertou +=1
		}
		if(tz1 == tz1_certo_nivel1){
			hit_z1 = true;
			acertou += 1;
		}
		if(angleXX1 == angleXX1_certo_nivel1){
			hit_angX1 = true;
			acertou += 1;
		}
		if(angleYY1 == angleYY1_certo_nivel1){
			hit_angY1 = true;
			acertou += 1;
		}
		if(angleZZ1 == angleZZ1_certo_nivel1){
			hit_angZ1 = true;
			acertou += 1;
		}
		//figura2
		if(tx2 == tx2_certo_nivel1){
			hit_x2 = true;
			acertou += 1;
		}
		if(ty2 == ty2_certo_nivel1){
			hit_y2 = true;
			acertou +=1
		}
		if(tz2 == tz2_certo_nivel1){
			hit_z2 = true;
			acertou += 1;
		}
		if(angleXX2 == angleXX2_certo_nivel1){
			hit_angX2 = true;
			acertou += 1;
		}
		if(angleYY2 == angleYY2_certo_nivel1){
			hit_angY2 = true;
			acertou += 1;
		}
		if(angleZZ2 == angleZZ2_certo_nivel1){
			hit_angZ2 = true;
			acertou += 1;
		}
	}
}