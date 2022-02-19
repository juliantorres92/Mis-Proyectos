$(document).ready(function() {

    // Accionamiento Menu Lateral / :
    $('#burguer').click(function(){
        $('#burguer').toggleClass('abierto');
        $('.menu').toggleClass('abierto'); //Metodo que quita o pone una clase
    })

    //Barra Transparente Cambio de Header:
    $(window).on('scroll', function(){//Cuando hagamos scroll ejecutara lo siguiente:
        let posicion = $('#pr').offset(); //guardamos en la variable posicion la ubicacion del elemento pr (id) con el metodo offset 
        if ($(window).scrollTop() >= posicion.top){
            $('header').removeClass('transparente');
            }
            else{
            $('header').addClass('transparente'); 
            }
    })

    // Smooth Scroll Flecha Hero
    $('a').on('click', function(){
        if (this.hash !== ''){ //si, su hash es distinto de vacio, es decir si tiene un hash (en este caso el identifador pr)
            let hash = this.hash; //crear una variable con el mismo nombre
            $('html, body').animate({scrollTop: $(hash).offset().top}, 800) //realizar animacion
        }
    }
    
    )

})