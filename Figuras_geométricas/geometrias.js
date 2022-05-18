//Patrón Modular (()=>{ CODIGO })();
(()=>{

    
    let valueResult = document.getElementById("result");
     //area y perimetro de un cuadrado
    let perimSquare = (side) => side * 4;
    let areaSquare = (side) => side * side;
    
     //area y perimetro de un triangulo

    let perimTriangle = (side1,side2,side3) => side1+side2+side3;
    let areaTriangle =(base,altura) => base*altura;

    //Diametro area y perimetro de un circulo

    let diamCircle = (radio) => radio*2;
    let perimCircle = (radio) => radio*2* 3.1416;
    let areaCircle = (radio) => radio* radio * 3.1416;


    function calculatePerimSquare(){
        let imputSide = document.getElementById("imputSide");
        let value = Number(imputSide.value);

        let result = `El perímetro del cuadrado es: ${perimSquare(value)} cm`;
        valueResult.innerText = result;
    }
    function calculateAreaSquare(){
        let imputSide = document.getElementById("imputSide");
        let value = Number(imputSide.value);

        let result = `El area del cuadrado es: ${areaSquare(value)} cm cuadrados`;
        valueResult.innerText = result;
    }
    function calculatePerimTriangle(){
        let imputSide1 = document.getElementById("lado1-triangulo"); 
        let value1 = Number(imputSide1.value);
        let imputSide2 = document.getElementById("lado2-triangulo"); 
        let value2 = Number(imputSide2.value);
        let imputSide3 = document.getElementById("lado3-triangulo"); 
        let value3 = Number(imputSide3.value);

        let result = `El perimetro del triángulo es: ${perimTriangle(value1,value2,value3)} cm cuadrados`;
        valueResult.innerText = result;
    }

    function calculateAreaTriangle(){
        let baseTri = document.getElementById("base-triangulo");
        let value1 = Number(baseTri.value);
        let alturaTri = document.getElementById("altura-triangulo");
        let value2 = Number(alturaTri.value);

        let result = `El area del triángulo es: ${areaTriangle(value1,value2)} cm`;
        valueResult.innerText = result;

    }

    function calculateDiamCircle(){
        let radio = document.getElementById("radio");
        let value = Number(radio.value);

    
        let result = `El diametro del circulo es: ${diamCircle(value)} cm`;
        valueResult.innerText = result;
    }

    function calculateAreaCircle(){
        let radio = document.getElementById("radio");
        let value = Number(radio.value);

    
        let result = `El area del circulo es: ${areaCircle(value)} cm`;
        valueResult.innerText = result;
    }

    function calculatePerimCircle(){
        let radio = document.getElementById("radio");
        let value = Number(radio.value);

    
        let result = `El perímetro del circulo es: ${perimCircle(value)} cm`;
        valueResult.innerText = result;
    }

})();


