// Creamos función anónima

(function(){

	var cajaRoja = $('.cajaRoja');

	// Me refresca la tecla y no me la concatena
	cajaRoja.clearQueue();

	// Utilizamos la librería Tween
	var cajaAzul = $('.cajaAzul');
	var tl = new TimelineMax();

	function mover(dir){
		switch(dir){
			case "arr":
				cajaRoja.animate({
					// Para subir la caja tengo que restas posiciones
					// -= Signifcia (A la posición que tenga le restas 50 px)
					top: "-=50px"
				},100);
				/*
					Parámetros de configuración:
						1.- Objeto a move - cajaAzul.
						2.- Retardo en segundos (con 0.xxx se le indica en ms)
						3.- Hacía donde se va a movr el objeto (y: arriba x: abajo)
				*/
				tl.to( cajaAzul, 0.100,{y:"-=50"});
			break;
			case "aba":
				cajaRoja.animate({
					top: "+=50px"
				},100);

				tl.to( cajaAzul, 0.100,{y:"+=50"});
			break;
			case "izq":
				cajaRoja.animate({
					left: "+=50px"
				},100);
				tl.to( cajaAzul, 0.100,{x:"+=50"});
			break;
			case "der":
				cajaRoja.animate({
					left: "-=50px"
				},100);
				tl.to( cajaAzul, 0.100,{x:"-=50"});
			break;

			default:
				cajaRoja.animate({
					top: "0px",
					left: "0px"
				});
				tl.to( cajaAzul, 0.45,{x:"0px", y:"0px"});
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
