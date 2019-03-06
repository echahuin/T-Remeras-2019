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
			
			// function mostrar(){
			// 	fetch('https://cors-anywhere.herokuapp.com/https://chahuincc-ventas.blogspot.com/feeds/posts/default?alt=json')
			// 	.then(datos => datos.json())
			// 	.then(data => {
			// 		console.log(data)
			// 		cont.innerHTML = ``
		
			// 		for(let valor of data.feed.entry){
			// 			let url = valor.content.$t.match("<img .*?src=\"([^\"]*)");
			// 			// console.log(url[1])
			// 			// console.log(valor)

			// 			cont.innerHTML += `<div class="fh5co-project masonry-brick">
			// 		<a href="single.html">
			// 			<img src="${url[1]}" alt="...">
			// 			<h2>${valor.title.$t}</h2>
			// 			<p>Hacelo simple, y compra!</p><br>
			// 			<a class="btn btn-outline-primary" href="https://api.whatsapp.com/send?phone=5491164179643&text=Hola%quiero%comprar:%${valor.title.$t}%" role="button">comprar</a>															
			// 			<h5>${valor.published.$t}</h5>
			// 		</a>
			// 	</div>`
			// 	 }
			// 	})
			// }
			// mostrar();   

})(window.jQuery);
