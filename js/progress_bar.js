
var bars_fig1 = 1;

function setProgressBars(){
  var classes = ["success","info","warning"];
  var id_bars_fig1 = ["bar1_fig1", "bar2_fig1", "bar3_fig1"];
  var id_bars2_fig1 = ["bar4_fig1", "bar5_fig1", "bar6_fig1"];
  var id_bars_fig2 = ["bar1_fig2", "bar2_fig2", "bar3_fig2"];
  var id_bars2_fig2 = ["bar4_fig2", "bar5_fig2", "bar6_fig2"];
  var titles_bars = ["X", "Y", "Z"];
  var classes_i = 0;

  for(var i=0; i<classes.length; i++){
	  $("#bars_fig1").append('<div class="progress"><div id="'+ id_bars_fig1[classes_i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
	  	title="Transação em '+ titles_bars[classes_i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:40%">40%</div></div>');

    $("#bars_fig2").append('<div class="progress"><div id="'+ id_bars_fig2[classes_i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Transação em '+ titles_bars[classes_i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:40%">40%</div></div>');

	  classes_i = (classes_i + 1) % classes.length;
  }

  for(var i=0; i<classes.length; i++){
	  $("#bars2_fig1").append('<div class="progress"><div id="'+ id_bars2_fig1[classes_i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
	  	title="Ângulo em '+ titles_bars[classes_i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:40%">40%</div></div>');

    $("#bars2_fig2").append('<div class="progress"><div id="'+ id_bars2_fig2[classes_i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[classes_i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:40%">40%</div></div>');

	  classes_i = (classes_i + 1) % classes.length;
  }

  getVisibleBars();
}

// figura 1
var tx1_correto=0;
var ty1_correto=0;
var tz1_correto=0;

// figura 2
var tx2_correto=0;
var ty2_correto=0;
var tz2_correto=0;

// posicoes
var figure1_tx = -0.6;
var figure1_ty = -0.6;

function getVisibleBars(){
  if(bars_fig1){
    document.getElementById("bars_fig1").style.display = "block";
    document.getElementById("bars2_fig1").style.display = "block";
    //
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
  }else{
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    //
    document.getElementById("bars_fig2").style.display = "block";
    document.getElementById("bars2_fig2").style.display = "block";
  }     
}

function getPercentage(figure, f_valor){
  var valor = Math.abs(100-((figure-f_valor)*100));
  if (valor > 100){ 
    valor = 100 - valor + 100; 
  }
  return valor;
}

function verifyPositions(figure){
  getVisibleBars();
  if(nivel==1){
    if(figure == "figura1"){
        if(tx1 == figure1_tx){
          $('#bar1_fig1').removeClass('progress-bar progress-bar-info progress-bar-striped');
          $("#bar1_fig1").addClass("progress-bar progress-bar-success progress-bar-striped");
          //document.getElementById("bar1").style["width"] = "100%";
          $("#bar1_fig1").attr("style", "width:100%");
          $("#bar1_fig1").text("100%");
          tx1_correto=1;
        }else{
          $('#bar1_fig1').removeClass('progress-bar progress-bar-success progress-bar-striped');
          $("#bar1_fig1").addClass("progress-bar progress-bar-info progress-bar-striped");
          $("#bar1_fig1").attr("style", "width:"+getPercentage(figure1_tx, tx1)+"%");
          if(getPercentage(figure1_tx, tx1)<=0){
             $("#bar1_fig1").attr("style", "color:black");
          }
          $("#bar1_fig1").text(parseInt(getPercentage(figure1_tx, tx1))+"%");
          tx1_correto=0;
        }
        if(ty1 == figure1_ty){

          ty1_correto=1;
        }else{
          ty1_correto=0;
        }
        if(tz1 == figure1_tz){
          tz1_correto=1;
        }else{
          tz1_correto=0;
        }
    }else if(figure = "figura2"){
      if(tx2 == figure2_tx){
          $('#bar1_fig2').removeClass('progress-bar progress-bar-info progress-bar-striped');
          $("#bar1_fig2").addClass("progress-bar progress-bar-success progress-bar-striped");
          $("#bar1_fig2").attr("style", "width:100%");
          $("#bar1_fig2").text("100%");
          tx2_correto=1;
        }else{
          $('#bar1_fig2').removeClass('progress-bar progress-bar-success progress-bar-striped');
          $("#bar1_fig2").addClass("progress-bar progress-bar-info progress-bar-striped");
          $("#bar1_fig2").attr("style", "width:"+getPercentage(figure2_tx, tx2)+"%");
          if(getPercentage(figure2_tx, tx2)<=0){
             $("#bar1_fig2").attr("style", "color:black");
          }
          $("#bar1_fig2").text(parseInt(getPercentage(figure2_tx, tx2))+"%");
          tx2_correto=0;
        }

    }
    if(tx1_correto && ty1_correto && tz1_correto && tx2_correto && ty2_correto && tz2_correto){
      // Só para teste
      alert("Parabéns!! Passaste ao nível 2!!!");
      nivel = 2;
    }
    
  }else if(nivel == 2){

  }else if(nivel == 3){

  }
}

