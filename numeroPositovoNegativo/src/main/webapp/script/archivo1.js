function func1(){
	
	let numero1 = prompt("Escriba un numero ya sea negativo o negativo");
	
	if(numero1 < 0){
		
		alert("El numero cambiado de signo es " + (numero1 = numero1 * ("-1")));
		
		document.getElementById("f1").innerHTML = ("El numero cambiado de signo es "  + numero1);
		
	}else{
		
		alert("El numero dado es" + numero1);
		
		document.getElementById("f1").innerHTML = ("El numero cambiado de signo es " + numero1);
	}
	
	
}