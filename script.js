

var nombre;
var edad;
var poblacion;



do {

    nombre=prompt("ingresa un nombre valido","escribe aqui tu nombre");
    if(!isNaN(nombre)){

        alert("dato no valido");

    }
}while(!isNaN(nombre))


do{

    
    edad=prompt("ingresa tu edad");
    
    if(edad<=0 || edad>100 || isNaN(edad)){

        alert("dato no valido");

    }
    

}while(edad<=0 || edad>100 || isNaN(edad))



do{

    poblacion=prompt("ingresa tu poblacion");

    if(!isNaN(poblacion)){

        alert("dato no valido");
    }
}while(!isNaN(poblacion))

//typeof(edad)=="string"