// Codigo del cuadrado




const perimetroCuadrado = (lado) => {
    return lado * 4;  
}
perimetroCuadrado(5);


const areaCuadrado = (lado) => {
    return lado * lado;
}

areaCuadrado(5);



// Codigo del triangulo 


// perimetro
const perimetroTriangulo = (lado1,lado2,base) => {
    return lado1 + lado2 + base;
};
perimetroTriangulo(4,4,3);


// area
const areaTriangulo = (base,altura) => {
    return (base * altura) / 2;
}
areaTriangulo(5,9);

// Codigo del circulo

//diametro
const diametroCirculo = (radio) => {
    return radio * 2;
};
diametroCirculo();


const PI = Math.PI;

//Circunfenrencia
const perimetroCirculo = (radio) => {
   const diametro = diametroCirculo(radio)
   return diametro * PI;
};
perimetroCirculo();




//area
const areaCirculo = (radio) => {
    return (radio * radio) * PI;
};
areaCirculo();