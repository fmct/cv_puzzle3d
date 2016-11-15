function Points(tx, ty, tz, angleXX, angleYY, angleZZ, nivel, points, fase){

	tx_certo_nivel1 = 1.0;
	ty_certo_nivel1 = 1.0;
	tz_certo_nivel1 = 1.0;
	angleXX_certo_nivel1 = 1.0;  //valores fixos so para teste
	angleYY_certo_nivel1 = 1.0;
	angleZZ_certo_nivel1 = 1.0;
	this.points = points;
	this.fase = fase;

	if(nivel == 1 && tx = tx_certo_nivel1){
		if(this.fase == 0){
			this.points += 10;
		}
		this.fase = 1;
		if(ty == ty_certo_nivel1){
			if(this.fase == 1){
				this.points += 10;
			}
			this.fase = 2;
			if(tz == tz_certo_nivel1){
				if(this.fase == 2){
					this.points += 10;
				}
				this.fase = 3;
				if(angleXX == angleXX_certo_nivel1){
					if(this.fase == 3){
						this.points += 10;
					}
					this.fase = 4;
					if(angleYY == angleYY_certo_nivel1){
						if(this.fase == 4){
							this.points += 10;
						}
						this.fase = 5;
						if(angleZZ == angleZZ_certo_nivel1){
							point += 10;
							this.fase = 6;
						}
					}
				}
			}
			else if()
		}
		else if(tz == tz_certo_nivel1){
			if(this.fase == 1){
				this.points += 10;
			}
			this.fase = 2;
		}
		else if(angleXX == angleXX_certo_nivel1){
			if(this.fase == 1){
				this.points += 10;
			}
			this.fase = 2;
		}
		else if(angleYY == angleYY_certo_nivel1){
			if(this.fase == 1){
				this.points += 10;
			}
			this.fase = 2;
		}
		else if(angleZZ == angleZZ_certo_nivel1){
			if(this.fase == 1){
				this.points += 10;
			}
			this.fase = 2;
		}
		else{
			if(this.fase == 2){
				this.points -= 10; 
			}
			else if(this.fase == 3){
				this.points -= 20;
			}
			else if(this.fase == 4){
				this.points -= 30;
			}
			else if(this.fase == 5){
				this.points -= 40;
			}
		}
	}
	else if(nivel == 1 && ty == ty_certo_nivel1){
		if(this.fase == 0){
			this.points += 10;
		}
		this.fase = 1;
	}
	//falta acabar, mas é esta a ideia
	return [this.points,this.fase];
}