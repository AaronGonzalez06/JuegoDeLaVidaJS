$(document).ready(function(){
    console.log("jquery cargao");
    $("#tabla tr td").click(function(){
        //console.log($(this).hasClass('negro'));
        if($(this).hasClass('negro') == true ){
            //console.log($(this).attr('rojo'));
            $(this).removeClass('negro');
            $(this).addClass('rojo');
            var posicion = $(this)[0].className.replace('rojo','');

            //console.log(posicion.indexOf('-'));
            var barra =posicion.indexOf('-')
            var long = posicion.length;
            console.log("antes: " + posicion.substring(0,barra));
            console.log("despues: " + posicion.substring(barra,long).replace('-',''));

            var x = posicion.substring(0,barra).trim();
            var y = posicion.substring(barra,long).replace('-','').trim();
            matriz[x][y]=1;
            /*for(var x = 0; x<posicion.length; x++){
                var caracter = posicion.charAt(x);


                console.log(caracter);
                //console.log(posicion.length);
            }*/
            console.log(matriz);
        } else if( $(this).hasClass('rojo') == true ){
            $(this).removeClass('rojo');
            $(this).addClass('negro');

            var posicion = $(this)[0].className.replace('negro','');

            //console.log(posicion.indexOf('-'));
            var barra =posicion.indexOf('-')
            var long = posicion.length;
            console.log("antes: " + posicion.substring(0,barra));
            console.log("despues: " + posicion.substring(barra,long).replace('-',''));

            var x = posicion.substring(0,barra).trim();
            var y = posicion.substring(barra,long).replace('-','').trim();
            matriz[x][y]=0;

        }

    });
    

})