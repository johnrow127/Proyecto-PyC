/*Variables globales para comprobar el orden en el que hacer Sarrus
Son globales ya que las modifican dos funciones, una que lo vacia cuando acabemos y otra que va añadiendo el orden
*/
var ORDENARRAY = [];

//Orden correcto para Sarrus
var ORDENEVALIDOS =[1,5,9,4,8,3,7,2,6,3,5,7,6,8,1,9,2,4];

//Funcion que comprueba el estado del menu, si esta visible (display:block;), al ser pulsado cambia a none, y viceversa
function pulsarMenu(menu){
	pulsado=document.getElementById(menu);
	if (pulsado.style.display=="block") {
		pulsado.style.display="none";
	}
	else{
		pulsado.style.display="block";
	}
}

//Abre una ventana emergente con el manual
function manual(){
	ventanaManual=window.open('manual.html','','width=1000,height=500,top=100000000,left=100000000');
}

//Abre una ventana emergente con el ejercicio sobre suma de matrices
function ejSumaMatrices(){
	ventanaSumaMatrices=window.open('ejercicios/ejSumaMatrices.html','','width=900,height=500')
}

//Funcion que rellena las matrices con numeros aleatorios y vacia automaticamente las casillas en los que se introducen los datos
function rellenarMatrices(){
	//cogemosla matriz a y la rellenamos de numeros aleatorios
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	c=document.getElementsByClassName("c");
	//Rellena la matriz A
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML=Math.trunc((Math.random()*10));
	}
	//Rellena la matriz B
	for (var i = 0; i < b.length; i++) {
		b[i].innerHTML=Math.trunc((Math.random()*10));
	}
	//Vacia las casillas de resultados
	for (var i = 0; i < c.length; i++) {
		c[i].value="";
	}


}

//Comprueba la suma.
function comprobarSuma(){
	//Recoge las matrices A,B y la solucion, C
	a1=new Array(8);

	a1=document.getElementsByClassName("a");

	b1= new Array(8);

	b1=document.getElementsByClassName("b");

	c1= new Array(8);

	c1=document.getElementsByClassName("c");

	//Comprueba que la casilla N de C valga la casilla N de A + la casilla N de B
	for (var i = 0; i <= 5; i++) {
		if (c1[i].value==(Number(a1[i].innerHTML)+Number(b1[i].innerHTML))) {
			//Si es correcto le aplica un fondo verde con letra en blanco
			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			//Si hay un error aplica un fondo rojo con letra en blanco a la casilla erronea
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}
}

//Abre la ventana de ejercicion numero por matriz
function ejNumeroMatriz(){
	ventanaNumeroMatriz=window.open('ejercicios/ejNumeroMatriz.html','','width=900,height=500')
}
function sumarMatrices(a,b){
	var solucion=[];
	for (var i = 0; i < a.length; i++) {
		solucion[i]=Number(a[i])+Number(b[i]);
	}
	return solucion;
}
function restarMatrices(a,b){
	var solucion=[];
	for (var i = 0; i < a.length; i++) {
		solucion[i]=Number(a[i])-Number(b[i]);
	}
	return solucion;
}
//Comprueba el ejercicion numero por matriz
function comprobarNumeroMatriz(){
	//Recoge las matrices y la solucion
	a1=new Array(8);

	a1=document.getElementsByClassName("a");

	b1= new Array(8);

	b1=document.getElementsByClassName("b");

	c1= new Array(8);

	c1=document.getElementsByClassName("c");


	//Comprueba, como con la suma pero con la multiplicacion
	for (var i = 0; i <= 5; i++) {
		//En este caso solo nos interesa a1[0], ya que es un solo numero por la matriz
		if (c1[i].value==(Number(a1[0].innerHTML)*Number(b1[i].innerHTML))) {
			//Aplica estilos si acierta
			c1[i].style.backgroundColor="green";
			c1[i].style.color="white";
		}
		else{
			//Aplica estilos si falla
			c1[i].style.backgroundColor="red";
			c1[i].style.color="white";
		}
	}

}
//Abre ventana de multiplicacion de matrices
function ejMatrices(){
	ventanaMatriz=window.open('ejercicios/ejMatrices.html','','width=900,height=500');
}

function multiplicarMatrices(a1,b1){
	sol=0;
	sol=Number(sol);
	//Otra variable que controlara el numero de columna al multiplicar
	j=0;
	//Otra variable que controlara que elemento de la matriz se esta , y se ha corregido
	k=0;
	//Otra variable como contador para realizar la comprobacion
	cont=0;
	//Otra variable que controlara el numero de fila al multiplicar
	num=0;

	//Creamos un vector con la solucion, servira para devolver todas las soluciones de golpe
	vectorSolucion = [];
	//for para las tres filas
	for (var l = 0; l < 3; l++) {
		//Cada fila tendra que realizar los calculos 12 veces
		for (var i = 0; i <=11; i++) {
			//cuando el contador es menor que tres multiplica los elementos en orden
			if(cont<3){
				sol=sol+(Number(a1[num])*Number(b1[j]));
				j+=3;
				cont++;
				num++;
			}
			//cuando acaba con un elemento lo añade a la comprobacion
			else{
				vectorSolucion.push(sol);
				sol=0;

				if(j>=11){
					j-=11;
				}
				else{
					j-=8;
				}
				//Resetea el contador y num para continuar con la proxima fila
				cont=0;
				num-=3;
			}

		}
		num+=3;
	}
	//devuelve el vector solucion, para comprobar
	return vectorSolucion;

}
//Comprueba la multiplicacion de matrices
function comprobarMatrices(){
	//Recoge las matrices y la repuesta
	//Vector con todo el campo
	a1=document.getElementsByClassName("a");
	//Vector que contendra los numeros
	a = [];
	for (var i = 0; i < a1.length; i++) {
		a.push(a1[i].innerHTML);
	}
	b1=document.getElementsByClassName("b");
	b = [];
	for (var i = 0; i < b1.length; i++) {
		b.push(b1[i].innerHTML);
	}
	c1=document.getElementsByClassName("c");
	//Creamos un vector en la que se almacenara la solucion
	soluciones = [];
	soluciones = multiplicarMatrices(a,b);
	for (var k = c1.length - 1; k >= 0; k--) {
		if (c1[k].value==soluciones[k]) {
			c1[k].style.backgroundColor="green";
			c1[k].style.color="white";
			sol=0;
		}
		else{
			c1[k].style.backgroundColor="red";
			c1[k].style.color="white";
			sol=0;
		}
	}

}
function rellenarDeterminante2(){
	a=document.getElementsByClassName("a");

	//Rellena la matriz A
	for (var i = 0; i < a.length; i++) {
		a[i].innerHTML=Math.trunc((Math.random()*10));
	}

}
//Abre la ventana con el ejercicio determinante orden 2
function determinanteDos(){
	window.open('ejercicios/ejDeterminante2.html','','width=900,height=500');
}
//comprueba el determinante de orden 2
function comprobarDeterminanteDos(){
	a=new Array(8);
	a=document.getElementsByClassName("a");
	//Realiza los calculos expuestos en la teoria
	respuesta=(Number(a[0].innerHTML)*Number(a[4].innerHTML))-(Number(a[1].innerHTML)*Number(a[3].innerHTML));
	sol=document.getElementById("determinanteDos");
	if(sol.value==respuesta){
		//Aplica estilos si es correcto
		sol.style.backgroundColor="green";
		sol.style.color="white";
	}
	else{
		//Aplica estilos si es falso
		sol.style.backgroundColor="red";
		sol.style.color="white";
	}

}
//Abre ventana determinante orden 3
function determinanteTres(){
	window.open('ejercicios/ejDeterminante3.html','','width=900,height=500');
}
//Comprueba determinante orden 3
function comprobarDeterminanteTres(){
	a=document.getElementsByClassName("a");
	b= [];
	for (var i = 0; i < a.length; i++) {
		b[i]=a[i].innerHTML;
	}
	respuesta=calcDet3(b);
	sol=document.getElementById("determinanteTres");
	if(sol.value==respuesta){
		//Aplica estilos si es correcto
		sol.style.backgroundColor="green";
		sol.style.color="white";
	}
	else{
		//Aplica estilos si es falso
		sol.style.backgroundColor="red";
		sol.style.color="white";
	}

}

//Abre ejercicio Sarrus
function abrirImagenSarrus(){
	window.open('ejercicios/matrizSarrus.html','','width=900,height=500');
}

//Vacia el orden seleccionado de Sarrus e inicializa la correccion
function ordenSarrus(){

	ORDENARRAY = [];
	var seleccionados=document.getElementById("listaSeleccionados");
	seleccionados.innerHTML="Posiciones Seleccionadas :";
	var correccion=document.getElementById("correccion");
	correccion.innerHTML="";

}

//Ejecutado al hacer click en algun elemento del mapa de imagen
function clickSarrus(item,nombre){
	//Añade el id al orden
	ORDENARRAY.push(Number(item));
	var seleccionados=document.getElementById("listaSeleccionados");
	var correccion=document.getElementById("correccion");
	//Si no ha pulsado como minimo 18 veces añade el ultimo pulsado
	if (ORDENARRAY.length<=18) {
		seleccionados.innerHTML+='posicion '+ nombre;
		seleccionados.innerHTML+='. ';
	}
	//Cuando supera los 17 click comprueba el orden. ya que sarrus se hace en 18 click
	if (ORDENARRAY.length > 17){

		if (String(ORDENARRAY)==String(ORDENEVALIDOS)) {
			correccion.innerHTML="¡CORRECTO!";
		}
		else{
			correccion.innerHTML="Vuelve a probar";

		}

	}
}

//abre la pagina de ejercicio de sistemas
function abrirEjSistemas(){
	window.open('ejercicios/ejSistemasCramer.html','','width=900,height=500');
}
function comprobarSistema(){
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	a1 = [];
	for (var i = 0; i < a.length; i++) {
		a1.push(a[i].innerHTML);
	}
	b1 = [];
	for (var i = 0; i < b.length; i++) {
		b1.push(b[i].innerHTML);
	}

	soluciones=calcSistema(a1,b1);

	x1=document.getElementById("c1");
	x2=document.getElementById("c2");
	x3=document.getElementById("c3");

	if (detA==0) {
		alert('Para resolver el sistema de ecuaciones el determinante de A debe ser distinto de 0');
	}
	else{
		//comprobamos si son correctos con la regla de cramer
		if(c1.value==Math.round((soluciones[1]/soluciones[0])*100)/100){//Multiplicamos por cien, redondeamos y dividimos por cien para aproximarlo a los decimales
			//Aplica estilos si es correcto
			c1.style.backgroundColor="green";
			c1.style.color="white";
		}
		else{
			//Aplica estilos si es falso
			c1.style.backgroundColor="red";
			c1.style.color="white";
		}
		if(c2.value==Math.round((soluciones[2]/soluciones[0])*100)/100){
			//Aplica estilos si es correcto
			c2.style.backgroundColor="green";
			c2.style.color="white";
		}
		else{
			//Aplica estilos si es falso
			c2.style.backgroundColor="red";
			c2.style.color="white";
		}

		if(c3.value==Math.round((soluciones[3]/soluciones[0])*100)/100){
			//Aplica estilos si es correcto
			c3.style.backgroundColor="green";
			c3.style.color="white";
		}
		else{
			//Aplica estilos si es falso
			c3.style.backgroundColor="red";
			c3.style.color="white";
		}
	}


}


function calcNMatriz(a,b){
	var solucion=[];
	for (var i = 0; i < b.length; i++) {
		solucion[i]=Number(a[0])*Number(b[i]);
	}
	return solucion;
}
//calculamos la multiplicacion de matrices
function calcMatrices(){
	a3=document.getElementsByClassName("a3");
	a = [];
	for (var i = 0; i < a3.length; i++) {
		a.push(a3[i].value);
	}
	b3=document.getElementsByClassName("b3");
	b = [];
	for (var i = 0; i < b3.length; i++) {
		b.push(b3[i].value);
	}
	c3=document.getElementsByClassName("c3");
	soluciones = [];
	soluciones = multiplicarMatrices(a,b);
	for (var i = soluciones.length - 1; i >= 0; i--) {
		c3[i].innerHTML=soluciones[i];
	}
}

//Calculamos el determinante de orden 2, como el ejercicio
function calcDet2(a){
	solucion=(Number(a[0])*Number(a[3]))-(Number(a[1])*Number(a[2]));
	return solucion;
}

//Calculamos el determinante de orden 3, como el ejercicio

function calcDet3(a){

	positivos=(Number(a[0])*Number(a[4])*Number(a[8]));
	positivos+=(Number(a[1])*Number(a[5])*Number(a[6]));
	positivos+=(Number(a[2])*Number(a[3])*Number(a[7]));

	negativos=-(Number(a[2])*Number(a[4])*Number(a[6]));
	negativos-=(Number(a[1])*Number(a[3])*Number(a[8]));
	negativos-=(Number(a[0])*Number(a[5])*Number(a[7]));
	solucion=Number(positivos)+Number(negativos);
	return solucion;

}
function mostrarDeterminante3(){
	a5=document.getElementsByClassName("a5");
	c5=document.getElementsByClassName("c5");
	var b=[];
	for (var i = a5.length - 1; i >= 0; i--) {
		b[i]=a5[i].value;
	}
	c5[0].innerHTML=calcDet3(b);
}
function mostrarSistemaCramer(){
	a=document.getElementsByClassName("a6");
	b=document.getElementsByClassName("b6");
	a1 = [];
	for (var i = 0; i < a.length; i++) {
		a1.push(a[i].value);
	}
	b1 = [];
	for (var i = 0; i < b.length; i++) {
		b1.push(b[i].value);
	}
	soluciones=calcSistema(a1,b1);
	//Calculamos el determinante del sistema
	if (soluciones[0]==0) {
		if (soluciones[1]!=0 && soluciones[2]!=0 && soluciones[3]!=0) {

		}
		else {
			alert('Ha introducido un sistema determinado incompatible, intente resolverlo por el metodo de Gauss');
		}

	}
	else{
		x1=document.getElementById("c1");
		x2=document.getElementById("c2");
		x3=document.getElementById("c3");
		x1.innerHTML=soluciones[1]/soluciones[0];
		x2.innerHTML=soluciones[2]/soluciones[0];
		x3.innerHTML=soluciones[3]/soluciones[0];
	}

}
function calcSistema(a,b){
	vDetA=[];
	for (var i = 0; i < a.length; i++) {
		vDetA[i]=a[i];
	}
	//Calculamos el determinante del sistema
	detA=calcDet3(vDetA);
	//Calculamos el determinante del sistema, cambiando los elementos de la primera columna por los de clase B
	vDet1=[];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 0:vDet1[i]=b[0];
				break;
			case 3:vDet1[i]=b[1];
				break;

			case 6:vDet1[i]=b[2];
				break;
			default:vDet1[i]=a[i];

		}
	}
	det1=calcDet3(vDet1);

	vDet2=[];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 1:vDet2[i]=b[0];
				break;
			case 4:vDet2[i]=b[1];
				break;

			case 7:vDet2[i]=b[2];
				break;
			default:vDet2[i]=a[i];

		}
	}
	det2=calcDet3(vDet2);

	//Calculamos el determinante del sistema, cambiando los elementos de la tercera columna por los de clase B

	vDet3=[];
	for (var i = 0; i < a.length; i++) {
		switch (i) {
			case 2:vDet3[i]=b[0];
				break;
			case 5:vDet3[i]=b[1];
				break;

			case 8:vDet3[i]=b[2];
				break;
			default:vDet3[i]=a[i];

		}
	}
	det3=calcDet3(vDet3);
	var arrayDeterminantes=[detA,det1,det2,det3];
	console.log(arrayDeterminantes);
	return arrayDeterminantes;
}
function mostrarSistemaGauss(){
	a=document.getElementsByClassName("a6");
	b=document.getElementsByClassName("b6");
	a1 = [];
	for (var i = 0; i < a.length; i++) {
		a1.push(a[i].value);
	}
	b1 = [];
	for (var i = 0; i < b.length; i++) {
		b1.push(b[i].value);
	}
	soluciones=resolverGauss(a1,b1);

	x1=document.getElementById("c1");
	x2=document.getElementById("c2");
	x3=document.getElementById("c3");
	x1.innerHTML=soluciones[0];
	x2.innerHTML=soluciones[1];
	x3.innerHTML=soluciones[2];
}

function resolverGauss(a,b){
	incompatible=true;
	for (var i = 2; i >= 0; i--) {
		if (a[i]!=a[i+3]) {
			incompatible=false;
		}
	}
	if(incompatible==false){
		if (a[0]==0) {
		aux=0;
		aux=a[0];
		a[0]=a[3];
		a[3]=aux;
		aux=a[1];
		a[1]=a[4];
		a[4]=aux;
		aux=a[2];
		a[2]=a[5];
		a[5]=aux;
		aux=b[0];
		b[0]=b[1];
		b[1]=aux;
		}
		if(a[4]==0){
			aux=a[3];
			a[3]=a[6];
			a[6]=aux;
			aux=a[4];
			a[4]=a[7];
			a[7]=aux;
			aux=a[5];
			a[5]=a[8];
			a[8]=aux;
			aux=b[1];
			b[1]=b[2];
			b[2]=aux;
		}
		aux=a[3];
		if(aux!=0){
			for (var i = 3; i <6; i++) {
				a[i]=Number(a[i])*(Number(-a[0])/Number(aux));
				a[i]=Number(a[i])+Number(a[i-3]);
			}
			b[1]=Number(b[1])*(Number(-a[0])/Number(aux));
			b[1]=Number(b[1])+Number(b[0]);
		}
		aux=a[6];
		if(aux!=0){
			for (var i = 6; i <9; i++) {
				a[i]=Number(a[i])*(Number(-a[0])/Number(aux));
				a[i]=Number(a[i])+Number(a[i-6]);
			}

			b[2]=Number(b[2])*(Number(-a[0])/Number(aux));
			b[2]=Number(b[2])+Number(b[0]);
		}

		aux=a[7];
		if(aux!=0){
			for (var i = 7; i <9; i++) {
				a[i]=Number(a[i])*(Number(-a[4])/Number(aux));
				a[i]=Number(a[i])+Number(a[i-3]);
			}
			b[2]=Number(b[2])*(Number(-a[4])/Number(aux));
			b[2]=Number(b[2])+Number(b[1]);
		}
		if (a[8]==0) {
			sol3='t';
			if(a[4]==0){

				sol2="u";
				sol1="("+String(b[0])+"-("+String(a[2])+"*"+String(sol3)+")-("+String(a[1])+"*"+String(sol2)+"))";
				sol1=sol1+"/"+String(a[0]);
			}
			else{
				sol2="("+String(b[1])+"-("+String(a[5])+"*"+String(sol3)+"))"+"/"+String(a[4]);
				sol1="("+String(b[0])+"-("+String(a[2])+"*"+String(sol3)+")"+"-("+String(a[1])+"*"+String(sol2)+")"+")"+"/"+String(a[0]);
			}
			soluciones=[sol1,sol2,sol3];

		}
		else {
			sol3= b[2]/a[8];

			sol2= b[1]-( a[5]* sol3);
			sol2= sol2/ a[4];
			sol1= b[0]-( a[2]* sol3);
			sol1= sol1-( a[1]* sol2);
			sol1= sol1/ a[0];

			sol1=Math.round(sol1*100)/100;
			sol2=Math.round(sol2*100)/100;
			sol3=Math.round(sol3*100)/100;
			if(!isFinite(sol1) || !isFinite(sol2) || !isFinite(sol3) ){
				alert("El sistema es incompatible, no tiene solucion");
				soluciones=["","",""];
			}
			else {
				soluciones=[sol1,sol2,sol3];
			}
		}

		return soluciones;

		}
	else{
		soluciones=["","",""];
		alert("El sistema es incompatible");
		return soluciones;

	}

}
function generarOperacion(operacion,idDiv){
	var id=document.getElementById(idDiv);
	var divBoton=document.getElementById("boton");
	var hijos=id.childNodes;
	var hijosBoton=divBoton.childNodes;
	var a1=[];
	var b1=[];
	for (var i = hijosBoton.length-1; i >=0; i--) {
		divBoton.removeChild(hijosBoton[i]);
	}
	for (var i = hijos.length-1; i >=0; i--) {
		id.removeChild(hijos[i]);
	}
	//parrafo=document.createElement("p");
	boton=document.createElement("input");
	boton.setAttribute("type","button");
	boton.setAttribute("value","Calcular");

	switch (operacion) {

		case "sumaMatrices":

				generarTabla(3,3,idDiv,"parentesis","tablaA","entrada");
				id.appendChild(document.createTextNode("+"));
				generarTabla(3,3,idDiv,"parentesis","tablaB","entrada");
				id.appendChild(document.createTextNode("="));
				boton.addEventListener("click",function(){
						hijos=id.childElementCount;
						if (hijos>2) {
							id.removeChild(id.lastChild);
						}
						a=document.getElementsByClassName("tablaA");
						b=document.getElementsByClassName("tablaB");
						for (var i = 0; i < a.length; i++) {
							a1[i]=a[i].value;
							b1[i]=b[i].value;
						}
						soluciones=sumarMatrices(a1,b1);

						generarTabla(3,3,idDiv,"parentesis","solA","salida",soluciones);
					}
				);

				divBoton.appendChild(boton);
			break;
		case "restaMatrices":
				generarTabla(3,3,idDiv,"parentesis","tablaA","entrada");
				id.appendChild(document.createTextNode("-"));
				generarTabla(3,3,idDiv,"parentesis","tablaB","entrada");
				id.appendChild(document.createTextNode("="));
				boton.addEventListener("click",function(){
						hijos=id.childElementCount;
						if (hijos>2) {
							id.removeChild(id.lastChild);
						}
						a=document.getElementsByClassName("tablaA");
						b=document.getElementsByClassName("tablaB");
						for (var i = 0; i < a.length; i++) {
							a1[i]=a[i].value;
							b1[i]=b[i].value;
						}
						soluciones=restarMatrices(a1,b1);

						generarTabla(3,3,idDiv,"parentesis","solA","salida",soluciones);
					}
				);
				divBoton.appendChild(boton);
			break;
		case "multiplicarMatrices":
				generarTabla(3,3,idDiv,"parentesis","tablaA","entrada");
				id.appendChild(document.createTextNode("*"));
				generarTabla(3,3,idDiv,"parentesis","tablaB","entrada");
				id.appendChild(document.createTextNode("="));
				boton.addEventListener("click",function(){
						hijos=id.childElementCount;
						if (hijos>2) {
							id.removeChild(id.lastChild);
						}
						a=document.getElementsByClassName("tablaA");
						b=document.getElementsByClassName("tablaB");
						for (var i = 0; i < a.length; i++) {
							a1[i]=a[i].value;
							b1[i]=b[i].value;
						}
						soluciones=multiplicarMatrices(a1,b1);

						generarTabla(3,3,idDiv,"parentesis","solA","salida",soluciones);
					}
				);
				divBoton.appendChild(boton);
			break;
		case "multiplicarNMatriz":
				generarTabla(1,1,idDiv,"parentesis","tablaA","entrada");
				id.appendChild(document.createTextNode("*"));
				generarTabla(3,3,idDiv,"parentesis","tablaB","entrada");
				id.appendChild(document.createTextNode("="));
				boton.addEventListener("click",function(){
						hijos=id.childElementCount;
						if (hijos>2) {
							id.removeChild(id.lastChild);
						}
						a=document.getElementsByClassName("tablaA");
						b=document.getElementsByClassName("tablaB");
						a1[0]=a[0].value;
						for (var i = 0; i < b.length; i++) {
							b1[i]=b[i].value;
						}
						soluciones=calcNMatriz(a1,b1);
						generarTabla(3,3,idDiv,"parentesis","solA","salida",soluciones);
					}
				);
				divBoton.appendChild(boton);

			break;
		case "determinante2":
				generarTabla(2,2,idDiv,"linea","tablaA","entrada");
				id.appendChild(document.createTextNode("="));
				boton.addEventListener("click",function(){
						hijos=id.childElementCount;
						if (hijos>2) {
							id.removeChild(id.lastChild);
						}
						a=document.getElementsByClassName("tablaA");
						for (var i = 0; i < a.length; i++) {
							a1[i]=a[i].value;
						}
						soluciones=document.createTextNode(calcDet2(a1));
						id.appendChild(soluciones);
					}
				);
				divBoton.appendChild(boton);
			break;
		case "determinante3":
				generarTabla(3,3,idDiv,"linea","tablaA","entrada");
				id.appendChild(document.createTextNode("="));
				boton.addEventListener("click",function(){
						hijos=id.childElementCount;
						if (hijos>2) {
							id.removeChild(id.lastChild);
						}
						a=document.getElementsByClassName("tablaA");
						for (var i = 0; i < a.length; i++) {
							a1[i]=a[i].value;
						}
						console.log(a1);
						soluciones=document.createTextNode(calcDet3(a1));

						id.appendChild(soluciones);
					}
				);
				divBoton.appendChild(boton);
			break;
		case "sistema":
				generarTabla(3,3,idDiv,"sistema","tablaA","entrada");
				generarTabla(3,1,idDiv,"soluciones","tablaB","entrada");
			break;
	}


}

function generarTabla(filas,columnas,idDiv,parentesis,clase,opcionIO,elementoMostrar){
	var id=document.getElementById(idDiv);
	if(opcionIO=="entrada"){
		var elementoTabla=document.createElement("input");
	}
	else{
		var elementoTabla=document.createTextNode("");
	}
	var tabla=document.createElement("table");
	var tr=document.createElement("tr");
	var td=document.createElement("td");
	var longitudTabla=filas*columnas;
	td.style.textAling="center";

	if(parentesis=="parentesis"){
		td.appendChild(document.createTextNode(""));
		td.rowSpan=filas+1;
		td.className="parentesisMatrizIzq";
		tr.appendChild(td);
	}
	if(parentesis=="line"){
		td.appendChild(document.createTextNode(""));
		td.rowSpan=filas+1;
		td.className="detDer";
		tr.appendChild(td);
	}

	for (var i = 0; i <= longitudTabla ; i++) {
		if(opcionIO=="entrada"){
			elementoTabla=document.createElement("input");
			elementoTabla.setAttribute("type","text");
			elementoTabla.className=clase;
			elementoTabla.style.textAlign="center";
			elementoTabla.style.borderRadius="10px";
			elementoTabla.style.width="50px";

		}
		else{
			var texto=document.createTextNode(elementoMostrar[i]);
		 	elementoTabla=document.createElement("p");
			elementoTabla.style.width="30px";
			elementoTabla.appendChild(texto);
		}
		td=document.createElement("td");
		td.style.textAlign="center";
		td.appendChild(elementoTabla);
		if(parentesis=="sistema"){

			if ((i%filas)+1==3) {
				var valorX=document.createTextNode(String("X")+String((i%filas)+1)+"=");
			}
			else {
				var valorX=document.createTextNode(String("X")+String((i%filas)+1)+"+");
			}
			td.appendChild(valorX);
		}



		if (i%columnas==0) {

			tabla.appendChild(tr);
			tr="";
			tr=document.createElement("tr");

		}
		tr.appendChild(td);
		if(i==(filas-1)){
			if(parentesis=="parentesis"){
				td=document.createElement("td");
				td.appendChild(document.createTextNode(""));
				td.rowSpan=filas+1;
				td.className="parentesisMatrizDer";
				tr.appendChild(td);
			}
			if(parentesis=="line"){
				td=document.createElement("td");
				td.appendChild(document.createTextNode(""));
				td.rowSpan=filas+1;
				td.className="detIzq";
				tr.appendChild(td);
			}
		}

	}
	tabla.style.display="inline-table";
	id.appendChild(tabla);
}
