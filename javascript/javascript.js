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
//Comprueba la multiplicacion de matrices
function comprobarMatrices(){
	//Recoge las matrices y la repuesta
	a1= new Array(8);
	
	a1=document.getElementsByClassName("a");

	b1= new Array(8);
	
	b1=document.getElementsByClassName("b");
	c1= new Array(8);
	
	c1=document.getElementsByClassName("c");
	//Creamos una variable en la que se almacenara la solucion
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
	//for para las tres filas
	for (var l = 0; l <3; l++) {
		//Cada fila tendra que realizar los calculos 12 veces
		for (var i = 0; i <=11; i++) {	
			//cuando el contador es menor que tres multiplica los elementos en orden
			if(cont<3){
				sol=sol+(Number(a1[num].innerHTML)*Number(b1[j].innerHTML));
				j+=3;
				cont++;
				num++;
			}
			//cuando acaba con un elemento lo comprueba
			else{
				if (c1[k].value==sol) {
					c1[k].style.backgroundColor="green";
					c1[k].style.color="white";
					sol=0;
				}
				else{
					c1[k].style.backgroundColor="red";
					c1[k].style.color="white";
					sol=0;
				}
				k++;
				//calcula a que elemento se tiene que mover una vez ha acabado con el anterior
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
	a=new Array(8);
	a=document.getElementsByClassName("a");
	//Realiza las operaciones de la teoria
	//Primero calcula los positivos
	positivos=(Number(a[0].innerHTML)*Number(a[4].innerHTML)*Number(a[8].innerHTML));
	positivos+=(Number(a[1].innerHTML)*Number(a[5].innerHTML)*Number(a[6].innerHTML));
	positivos+=(Number(a[2].innerHTML)*Number(a[3].innerHTML)*Number(a[7].innerHTML));
	//Y luego los negativos
	negativos=-(Number(a[2].innerHTML)*Number(a[4].innerHTML)*Number(a[6].innerHTML));
	negativos-=(Number(a[1].innerHTML)*Number(a[3].innerHTML)*Number(a[8].innerHTML));
	negativos-=(Number(a[0].innerHTML)*Number(a[5].innerHTML)*Number(a[7].innerHTML));

	respuesta=Number(positivos)+Number(negativos);
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

//Inicializa la calculadora
//Pone todas las operaciones ocultas y vacia las casillas con la funcion reset()
function iniciarCalculadora(){
	document.getElementById("formCalc").reset();
	document.getElementById("1sel").selected="selected";
	suma=document.getElementById("sumaM");
	resta=document.getElementById("restaM");
	multiplicarMatrizNumero=document.getElementById("multiplicarNM");
	multiplicarMatriz=document.getElementById("multiplicarM");
	determinanteO2=document.getElementById("detO2");
	determinanteO3=document.getElementById("detO3");
	suma.style.display="none";
	resta.style.display="none";
	multiplicarMatrizNumero.style.display="none";
	multiplicarMatriz.style.display="none";
	determinanteO2.style.display="none";
	determinanteO3.style.display="none";
}

//Ejecuta al cambiar de operacion en a calculadora
function cambiarCalculadora(operacion){
	suma=document.getElementById("sumaM");
	resta=document.getElementById("restaM");
	multiplicarMatrizNumero=document.getElementById("multiplicarNM");
	multiplicarMatriz=document.getElementById("multiplicarM");
	determinanteO2=document.getElementById("detO2");
	determinanteO3=document.getElementById("detO3");
	suma.style.display="none";
	resta.style.display="none";
	multiplicarMatrizNumero.style.display="none";
	multiplicarMatriz.style.display="none";
	determinanteO2.style.display="none";
	determinanteO3.style.display="none";
	
	//Comprobamos la operacion seleccionada en la calculadora con un switch y la mostramos con display:inline
	switch(operacion){
		case "sumaMatrices":
							suma.style.display="inline";
							break;
		case "restaMatrices":
							resta.style.display="inline";
							break;
		case "multiplicarNMatriz":
							multiplicarMatrizNumero.style.display="inline";
							break;
		case "multiplicarMatrices":
							multiplicarMatriz.style.display="inline";
							break;
		case "determinante2":
							determinanteO2.style.display="inline";
							break;
		case "determinante3":
							determinanteO3.style.display="inline";
							break;
	}
}
//Calculamos la suma y la mostramos con el for
function calcSuma(){
	a=document.getElementsByClassName("a");
	b=document.getElementsByClassName("b");
	c=document.getElementsByClassName("c");
	for (var i = 0; i < 9; i++) {
		c[i].innerHTML=Number(a[i].value)+Number(b[i].value);
	}
}
//Calculamos la resta y la mostramos con el for
function calcResta(){
	a1=document.getElementsByClassName("a1");
	b1=document.getElementsByClassName("b1");
	c1=document.getElementsByClassName("c1");
	for (var i = 0; i < 9; i++) {
		c1[i].innerHTML=Number(a1[i].value)-Number(b1[i].value);
	}
}
//Calculamos la multiplicacion y la mostramos con el for
function calcNMatriz(){
	a2=document.getElementsByClassName("a2");
	b2=document.getElementsByClassName("b2");
	c2=document.getElementsByClassName("c2");
	for (var i = 0; i < 9; i++) {
		//Como es solo para un numero solo usamos a2[0]
		c2[i].innerHTML=Number(a2[0].value)*Number(b2[i].value);
	}
}
//calculamos la multiplicacion de matrices
function calcMatrices(){
	a3=document.getElementsByClassName("a3");
	b3=document.getElementsByClassName("b3");
	c3=document.getElementsByClassName("c3");
	//Usamos el mismo bucle que con el ejercicio

	sol=0;
	sol=Number(sol);
	j=0;
	k=0;
	cont=0;
	num=0;
	for (var l = 0; l <3; l++) {

		for (var i = 0; i <=11; i++) {	
			if(cont<3){
				sol=sol+(Number(a3[num].value)*Number(b3[j].value));
				j+=3;
				cont++;
				num++;
			}
			else{
				//en lugar de comprobar si es correcto lo sustituimos en la matriz respuesta
				c3[k].innerHTML=sol;
				sol=0;

				k++;
				if(j>=11){
					j-=11;
				}
				else{
					j-=8;
				}
				cont=0;
				num-=3;
			}

		}
		num+=3;
	}
}

//Calculamos el determinante de orden 2, como el ejercicio
function calcDet2(){
	a4=document.getElementsByClassName("a4");
	c4=document.getElementsByClassName("c4");
	c4[0].innerHTML=(Number(a4[0].value)*Number(a4[3].value))-(Number(a4[1].value)*Number(a4[2].value));

}

//Calculamos el determinante de orden 3, como el ejercicio

function calcDet3(){
	a5=document.getElementsByClassName("a5");
	c5=document.getElementsByClassName("c5");
	positivos=(Number(a5[0].value)*Number(a5[4].value)*Number(a5[8].value));
	positivos+=(Number(a5[1].value)*Number(a5[5].value)*Number(a5[6].value));
	positivos+=(Number(a5[2].value)*Number(a5[3].value)*Number(a5[7].value));

	negativos=-(Number(a5[2].value)*Number(a5[4].value)*Number(a5[6].value));
	negativos-=(Number(a5[1].value)*Number(a5[3].value)*Number(a5[8].value));
	negativos-=(Number(a5[0].value)*Number(a5[5].value)*Number(a5[7].value));

	c5[0].innerHTML=Number(positivos)+Number(negativos);

}