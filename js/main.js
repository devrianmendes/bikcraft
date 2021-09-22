/*Hamburguer menu*/
var hamburguer = document.querySelector('.hamburguer');
var body = document.querySelector('.body');

hamburguer.addEventListener('click', clicar);

function clicar() {
    body.classList.toggle('show-menu');
}

/*Jquery slide control panel*/
    /* Slide initializer */
    $(function() {
        $(".rslides").responsiveSlides();
    });

    /* Blockquote slide - portfolio.html */
    $(".rslides").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 400, // Integer: Speed of the transition, in milliseconds
        timeout: 5000, // Integer: Time between slide transitions, in milliseconds
    });

    /* Mosaic slide - portfolio.html */
    $(".rslides_portfolio").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 400, // Integer: Speed of the transition, in milliseconds
        timeout: 3000, // Integer: Time between slide transitions, in milliseconds
        pager: true, // Boolean: Show pager, true or false
    });

/* Visibility initializer - by timeout */
    Visibility.onVisible(function() {
        setTimeout(function() {
            $(".animar").addClass("animate__animated animate__fadeInDown");
        }, 200);
    });

    Visibility.onVisible(function() {
        setTimeout(function() {
            $(".animar_300").addClass("animate__animated animate__fadeInDown");
        }, 300);
    });

    Visibility.onVisible(function() {
        setTimeout(function() {
            $(".animar_600").addClass("animate__animated animate__fadeInDown");
        }, 600);
    });

    Visibility.onVisible(function() {
        setTimeout(function() {
            $(".animar_900").addClass("animate__animated animate__fadeInDown");
        }, 900);
    });

    Visibility.onVisible(function() {
        setTimeout(function() {
            $(".animar_1200").addClass("animate__animated animate__fadeInDown");
        }, 1200);
    });

    Visibility.onVisible(function() {
        setTimeout(function() {
            $(".animar_1500").addClass("animate__animated animate__fadeInDown");
        }, 1500);
    });

/* Form javascript */
$('.formphp').on('submit', function() {
	var emailContato = "dev.rianmendes@outlook.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {

            // Filtro de robô
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
            //Filtro de robô
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});