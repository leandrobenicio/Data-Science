/**
 * GetParametersScript
 * Função que recupera os parametros do script do governo
 * */

var opcao=[] //array que vai armazenar os parametros passados pela url do script
GetParametersScript = function (scriptName){
    var script = document.getElementsByTagName("SCRIPT");
	var url = ""
	
	
	// pega a url do script informado
	
	for (var i = 0; i < script.length; i++) {
		if (script[i].src.toLowerCase().indexOf(scriptName) > 0){
			url = script[i].src.toLowerCase().split("?");
			break;
		}
    }
	
	
	if (url.length > 1){
		opcao["configurar"] = "true";
		var variaveis=url[1].replace(/\x3F/,"").replace(/\x2B/g," ").split("&");
		if(variaveis.length > 0){
		  for(var i=0;i<variaveis.length;i++){
			 nvar=variaveis[i].split("=");
			 opcao[nvar[0]]=unescape(nvar[1]);
		  }
	   }
	}
	return true;
}

GetParametersScript("barragov");

//alert('');



strHTML = '';
/*
strHTML = strHTML + '<div id="barra-brasil">'; 
strHTML = strHTML + '    <a href="http://brasil.gov.br" style="background:#7F7F7F; height: 20px; padding:4px 0 4px 10px; display: block; font-family:sans,sans-serif; text-decoration:none; color:white; ">Portal do Governo Brasileiro</a>'; 
strHTML = strHTML + '</div>'; 
strHTML = strHTML + '<script src="http://barra.brasil.gov.br/barra.js" type="text/javascript"></script>'; 
*/

strHTML = strHTML + '<div id="barra-brasil">';
strHTML = strHTML + '	<a href="http://brasil.gov.br" style="background:#7F7F7F; height: 20px; padding:4px 0 4px 10px; display: block; font-family:sans,sans-serif; text-decoration:none; color:white; ">Portal do Governo Brasileiro</a>';
strHTML = strHTML + '</div>';
strHTML = strHTML + '<script src="http://barra.brasil.gov.br/barra.js" type="text/javascript" defer async></script></div>';



document.write(strHTML);
//strHTML = '';



/*  configurando opções
***********************/

opcao["configurar"]  = true;
if (opcao["configurar"]) {

	
	
	
	strHTML = strHTML + '<style type="text/css"> ';
	//strHTML = strHTML + '#barra-brasil *{list-style:none !important;padding:0; margin:0 }';
	
	
	
	
	if (opcao["width"]){
		strHTML = strHTML + '#imagem-barra-governo{width:'+opcao["width"]+'px !important;}';
	}


	if (opcao["color"]){
		switch(opcao["color"])
		{
			case "verde":
			  backgoundcolor = "background:#00500f !important;"
			  //backgroundimg  = "background: url(http://portal.ana.gov.br/BarraGoverno/v3/img/barra-brasil-v3-verde.gif) right top no-repeat !important;"
			  break;
			case "azul":
			  backgoundcolor = "background:#004b82 !important;"
			  //backgroundimg  = "background: url(http://portal.ana.gov.br/BarraGoverno/v3/img/barra-brasil-v3-azul.gif) right top no-repeat !important;"
			  break;
			case "cinza":
			  backgoundcolor = "background:#7f7f7f !important;"
			  //backgroundimg  = "background: url(http://portal.ana.gov.br/BarraGoverno/v3/img/barra-brasil-v3-cinza.gif) right top no-repeat !important;"
			  break;
			case "preto":
			  backgoundcolor = "background:#000000 !important;"
			  //backgroundimg  = "background: url(http://portal.ana.gov.br/BarraGoverno/v3/img/barra-brasil-v3-preto.gif) right top no-repeat !important;"
			  break;
			default:
			  break;
		}		
		
		
		strHTML = strHTML + '#barra-brasil-v3{'+backgoundcolor+'} ';
	
	}
	

	strHTML = strHTML + '</style>';

}


//document.write(strHTML);


