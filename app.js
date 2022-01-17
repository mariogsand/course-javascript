// Codigo del cuadrado

const perimetroCuadrado = (lado) =>  lado * 4; 

const areaCuadrado = (lado) =>  lado * lado;


// Codigo del triangulo 
const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;

const areaTriangulo = (base,altura) => (base * altura) / 2;


// Codigo del circulo
const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => (radio * radio) * PI;

//codigo triangulo isoceles 
const calcAlturaTrianguloIsoceles = (lado1,lado2,base) => {
    if (lado1 === lado2 && lado1 !== base) {
        const heigth = Math.sqrt((lado1 * lado2) - ((base * base) / 4)).toFixed(2);
        alert(`Triangulo isoceles con altura ${heigth}cm`);
    } else {
            alert("No es un triangulo isoceles");
    }
};



//conexion hacia HTML 
const calcPerimetroCuadrado = () => {
    const input = document.getElementById("inputCuadrado");
    // obtener valor del input
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro es de: ${perimetro}cm`);
};

const calcAreaCuadrado = () => {
    const input = document.getElementById("inputCuadrado");
    value = input.value
    const area = areaCuadrado(value);
    alert(`El area del cuadrado es: ${area}cm`);
};

//Triangulo
const calcPerimetroTriangulo = () => {
    const input1 = document.getElementById("inputTrianguloLadoA");
    const input2 = document.getElementById("inputTrianguloLadoB");
    const input3 = document.getElementById("inputBaseTriangulo");
    const input4 = document.getElementById("inputAlturaTriangulo");
    ladoA = parseInt(input1.value);
    ladoB = parseInt(input2.value);
    base = parseInt(input3.value);
    const perimetro = perimetroTriangulo(ladoA,ladoB,base);
    alert(`El perimetro del triangulo es de: ${perimetro}`);
};

const calcAreaTriangulo = () => {
    const input1 = document.getElementById("inputBaseTriangulo");
    const input2 = document.getElementById("inputAlturaTriangulo");
    base = input1.value;
    altura = input2.value;
    const area = areaTriangulo(base,altura);
    alert(`El area del triangulo es de: ${area}`);
};

//circulo
const calcDiametroCirculo = () => {
    const input = document.getElementById("inputRadioCirculo");
    value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}

const calcPerimetroCirculo = () => {
    const input = document.getElementById("inputRadioCirculo");
    value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(`El perimetro del circulo es de: ${perimetro}`);
};

const calcAreaCirculo = () => {
    const input = document.getElementById("inputRadioCirculo");
    value = input.value;
    const area = areaCirculo(value);
    alert(`El area del circulo es de: ${area}`);
};

// Altura isoceles
const calcAlturaTriangulo = () => {
    const input1 = parseInt(document.getElementById("inputTrianguloLado1").value);
    const input2 = parseInt(document.getElementById("inputTrianguloLado2").value);
    const input3 = parseInt(document.getElementById("inputBase").value);
    calcAlturaTrianguloIsoceles(input1,input2,input3);
}

