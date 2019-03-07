(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 330 ) {
					return 310;
				} else {
					return 330;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

	var cont = document.getElementById('fh5co-projects-feed');
			
			function mostrar(){
				fetch('https://cors-anywhere.herokuapp.com/https://ventas-ch.blogspot.com//feeds/posts/default?alt=json')
				.then(datos => datos.json())
				.then(data => {
					console.log(data)
					cont.innerHTML = ``
		
					for(let valor of data.feed.entry){
						let url = valor.content.$t.match("<img .*?src=\"([^\"]*)");
						let fechaOriginal = valor.published.$t;
						let SoloFecha = fechaOriginal.substr( 0, 9);
						console.log(SoloFecha);
						// console.log(url[1])
						// console.log(valor)
						cont.innerHTML += `<div class="fh5co-project masonry-brick">
						<img src="${url[1]}" alt="...">
						<h2>${valor.title.$t}</h2>
						Hacelo simple, mandanos un mensaje y compra!<br>
						<div class="row text-center">
						<h3><i class="fas fa-coins"></i>${valor.category[0].term}</h3>
						</div>
						<a class="btn btn-primary btn-lg" href="https://api.whatsapp.com/send?phone=5491164179643&text=Hola%me%interesa%comprarte%--->%${valor.title.$t}%" role="button">comprar</a>															
					    <h4 class="text-center">publicado el ${SoloFecha}</h4>
					</a>
				</div>`
				 }
				})
			}
			mostrar();   

})(window.jQuery);
