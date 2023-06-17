// Creamos función anónima

(function(){

	var cajaRoja = $('.cajaRoja');


	function mover(dir){
		switch(dir){
			case "arr":
				cajaRoja.animate({
					// Para subir la caja tengo que restas posiciones
					// -= Signifcia (A la posición que tenga le restas 50 px)
					top: "-=50px"
				},100);
			break;
			case "aba":
				cajaRoja.animate({
					top: "+=50px"
				},100);
			break;
			case "izq":
				cajaRoja.animate({
					left: "+=50px"
				},100);
			break;
			case "der":
				cajaRoja.animate({
					left: "-=50px"
				},100);
			break;

			default:
				cajaRoja.animate({
					top: "0px",
					left: "0px"
				});
		}
	}


	$(document).on("keypress", function(e){
		var keyCode = e.keyCode;
		console.log("Tecla pulsada: ", keyCode);
		// manejo de la animación con las teclas w,s,d,e
		switch(keyCode){
			case 119:
					mover("arr");
				break;
			case 115:
				mover("aba");
				break;
			case 97:
				mover("der");
				break;
			case 100:
				mover("izq");
				break;
		}
	});



	$("button").on('click',function(){
		var dir = $(this).data("dir");
		mover(dir);
	});


})();
