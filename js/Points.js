function Points(tx, ty, tz, angleXX, angleYY, angleZZ, nivel, points, fase){

	tx_certo_nivel1 = 1.0;
	ty_certo_nivel1 = 1.0;
	tz_certo_nivel1 = 1.0;
	angleXX_certo_nivel1 = 1.0;  //valores fixos so para teste
	angleYY_certo_nivel1 = 1.0;
	angleZZ_certo_nivel1 = 1.0;

	if(nivel == 1 && tx = tx_certo_nivel1){
		if(fase == 0){
			points += 10;
		}
		fase = 1;
		if(ty == ty_certo_nivel1){
			if(fase == 1){
				points += 10;
			}
			fase = 2;
			if(tz == tz_certo_nivel1){
				if(fase == 2){
					points += 10;
				}
				fase = 3;
				if(angleXX == angleXX_certo_nivel1){
					if(fase == 3){
						points += 10;
					}
					fase = 4;
					if(angleYY == angleYY_certo_nivel1){
						if(fase == 4){
							points += 10;
						}
						fase = 5;
						if(angleZZ == angleZZ_certo_nivel1){
							point += 10;
							fase = 6;
						}
					}
				}
			}
			else if()
		}
		else if(tz == tz_certo_nivel1){
			if(fase == 1){
				points += 10;
			}
			fase = 2;
		}
		else if(angleXX == angleXX_certo_nivel1){
			if(fase == 1){
				points += 10;
			}
			fase = 2;
		}
		else if(angleYY == angleYY_certo_nivel1){
			if(fase == 1){
				points += 10;
			}
			fase = 2;
		}
		else if(angleZZ == angleZZ_certo_nivel1){
			if(fase == 1){
				points += 10;
			}
			fase = 2;
		}
		else{
			if(fase == 2){
				points -= 10; 
			}
			else if(fase == 3){
				points -= 20;
			}
			else if(fase == 4){
				points -= 30;
			}
			else if(fase == 5){
				points -= 40;
			}
		}
	}
	else if(nivel == 1 && ty == ty_certo_nivel1){
		if(fase == 0){
			points += 10;
		}
		fase = 1;
	}
	//falta acabar, mas é esta a ideia
	return [points,fase];
}