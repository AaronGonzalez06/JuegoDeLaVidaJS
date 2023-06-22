/*$(document).ready(function(){
    console.log("jquery cargao");

})*/

var tableId = document.getElementById("tabla"); 

//var table = document.createElement("table"); 
var tblBody = document.createElement("tbody");

console.log(tableId);


/*var matriz=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];*/


//creacion de la matriz
var matriz=[
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

var matrizAux=[
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];


//matriz[2][3] = 1;
var cambio= 0;
var borrar = 0;


function juego() {

    if( cambio == 0){

        for(var x=0; x<18;x++){
            for(var y=0; y<28;y++){
    
                var aux=0;
                 if(matriz[x][y] == 0){
                    
                    if (matriz[x-1][y] == 1){
                        aux++;
                    }
                    if (matriz[x+1][y] == 1){
                        aux++;
                    }
                    if (matriz[x][y+1] == 1){
                        aux++;
                    }
                    if (matriz[x][y-1] == 1){
                        aux++;
                    }
                    if (matriz[x-1][y+1] == 1){
                        aux++;
                    }
                    if (matriz[x-1][y-1] == 1){
                        aux++;
                    }
                    if (matriz[x+1][y+1] == 1){
                        aux++;
                    }
                    if (matriz[x+1][y-1] == 1){
                        aux++;
                    }
    
                    if( aux == 3 ){
                        matrizAux[x][y]= 1;
                        
                        aux = 0;
    
                    }else if(aux == 0 ) {
                        matrizAux[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }else if(aux == 1) {
                        matrizAux[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }else if(aux == 2) {
                        matrizAux[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }else if(aux > 3) {
                        matrizAux[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }
     
                }
                  
        
        
        }
        
        }



        for(var x=0; x<18;x++){
    
            for(var y=0; y<28;y++){
                var aux=0;
                if(matriz[x][y] == 1){
    
                    if (matriz[x-1][y] == 1){
                        aux++;
                    }
                    if (matriz[x+1][y] == 1){
                        aux++;
                    }
                    if (matriz[x][y+1] == 1){
                        aux++;
                    }
                    if (matriz[x][y-1] == 1){
                        aux++;
                    }
                    if (matriz[x-1][y+1] == 1){
                        aux++;
                    }
                    if (matriz[x-1][y-1] == 1){
                        aux++;
                    }
                    if (matriz[x+1][y+1] == 1){
                        aux++;
                    }
                    if (matriz[x+1][y-1] == 1){
                        aux++;
                    }
    
                        if (aux == 2 || aux == 3 ){
                            matrizAux[x][y]= 1;
                            //matriz[x][y]= 0;
                            
                        aux = 0;
    
                    } else{
                        matrizAux[x][y]= 0;
                        
                        aux = 0; 
                    }
                }      
        }
        }



        cambio = 1;

        //fin cambio 1
    } else if ( cambio == 1){


        for(var x=0; x<18;x++){
            for(var y=0; y<28;y++){
    
                var aux=0;
                 if(matrizAux[x][y] == 0){
                    
                    if (matrizAux[x-1][y] == 1){
                        aux++;
                    }
                    if (matrizAux[x+1][y] == 1){
                        aux++;
                    }
                    if (matrizAux[x][y+1] == 1){
                        aux++;
                    }
                    if (matrizAux[x][y-1] == 1){
                        aux++;
                    }
                    if (matrizAux[x-1][y+1] == 1){
                        aux++;
                    }
                    if (matrizAux[x-1][y-1] == 1){
                        aux++;
                    }
                    if (matrizAux[x+1][y+1] == 1){
                        aux++;
                    }
                    if (matrizAux[x+1][y-1] == 1){
                        aux++;
                    }
    
                    if( aux == 3 ){
                        matriz[x][y]= 1;
                        
                        aux = 0;
    
                    }else if(aux == 0 ) {
                        matriz[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }else if(aux == 1) {
                        matriz[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }else if(aux == 2) {
                        matriz[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }else if(aux > 3) {
                        matriz[x][y]= 0;
                        
                        aux = 0;
    
                        
                    }
     
                }
                  
        
        
        }
        
        }



        for(var x=0; x<18;x++){
    
            for(var y=0; y<28;y++){
                var aux=0;
                if(matrizAux[x][y] == 1){
    
                    if (matrizAux[x-1][y] == 1){
                        aux++;
                    }
                    if (matrizAux[x+1][y] == 1){
                        aux++;
                    }
                    if (matrizAux[x][y+1] == 1){
                        aux++;
                    }
                    if (matrizAux[x][y-1] == 1){
                        aux++;
                    }
                    if (matrizAux[x-1][y+1] == 1){
                        aux++;
                    }
                    if (matrizAux[x-1][y-1] == 1){
                        aux++;
                    }
                    if (matrizAux[x+1][y+1] == 1){
                        aux++;
                    }
                    if (matrizAux[x+1][y-1] == 1){
                        aux++;
                    }
    
                        if (aux == 2 || aux == 3 ){
                            matriz[x][y]= 1;
                            
                        aux = 0;
    
                    } else{
                        matriz[x][y]= 0;
                        
                        aux = 0; 
                    }
                }      
        }
        }

        cambio =0;
    }


//fin logica vida




    /*
la tabla la creamos al final
*/



if(cambio == 0){
    
    for(var x=0; x<18;x++){
        for(var y=0; y<28;y++){
            if(matriz[x][y] == 1){
                var pos = document.getElementsByClassName(x+"-"+y)[0];
                //console.log(pos);
                //console.log("a" + pos.className);
                console.log("a");
                pos.className = "rojo";
                pos.className += " ";
                pos.className += x+"-"+y;
                console.log(pos);

            }else{
                var pos = document.getElementsByClassName(x+"-"+y)[0];
                //console.log(pos);
                console.log("a");
                pos.className = "negro";
                pos.className += " ";
                pos.className += x+"-"+y;
                console.log(pos);


            }
    
    
    }
    }
    

}else if(cambio == 1){

    for(var x=0; x<18;x++){
        for(var y=0; y<28;y++){
            if(matrizAux[x][y] == 1){
                var pos = document.getElementsByClassName(x+"-"+y)[0];
                //console.log(pos);
                console.log("a");
                pos.className = "rojo";
                pos.className += " ";
                pos.className += x+"-"+y;
                console.log(pos);

            }else{
                var pos = document.getElementsByClassName(x+"-"+y)[0];
                //console.log(pos);
                console.log("a");
                pos.className = "negro";
                pos.className += " ";
                pos.className += x+"-"+y;
                console.log(pos);


            }
    }
    }

}



// fin tabla

//console.log(matrizAux);
console.log(cambio);
}
//fin funcion juego
//var fps = setInterval('juego()',1000);


//se crea la tabla
for(var x=0; x<18;x++){
    var tr = document.createElement("tr");

    for(var y=0; y<28;y++){
        if(matriz[x][y] == 1){
            var td = document.createElement("td");
            tr.appendChild(td).classList.add("rojo",x+"-"+y); 
        }else{
            var td = document.createElement("td");
            tr.appendChild(td).classList.add("negro",x+"-"+y); 
        }



}

tblBody.appendChild(tr);

}

tableId.appendChild(tblBody);

//fin creacion tabla


//botones
function restart() {
    location.reload(); 
}

function iniciar() {
     var fps = setInterval('juego()',1000);
     return fps;
}

function pause() {
    console.log("aee");
    //clearInterval(setInterval('juego()',1000));
    //var fps = setInterval('juego()',1000);
    clearInterval(fps); 
}


//fin programa
