//Código del Cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

function areaCuadrado(lado) {
  return lado ** 2;
}

console.groupEnd();

//CODIGO DEL TRIANGULO
console.group("Triángulos");
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

//CODIGO DEL CIRCULO

console.group("Círculos");

//Diámetro
const diametroCirculo = (radio) => radio * 2;

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

//Área
const areaCirculo = (radio) => radio ** 2 * PI;

console.groupEnd();

//CALC CUADRADO

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado").value;
  const perimetro = perimetroCuadrado(input);
  alert(perimetro);
};

const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado").value;
  const Area = areaCuadrado(input);
  alert(Area);
};

//CALC ISOSCELES

const alturaIsosceles = (L1, L2, B) => Math.sqrt(L1 ** 2 - (B / 2) ** 2);

const altura = () => {
  const TL1 = document.getElementById("InputTrianguloL1").value;
  const TL2 = document.getElementById("InputTrianguloL2").value;
  const TB = document.getElementById("InputTrianguloBase").value;
  !TL1 || !TL2 || !TB
    ? alert("Inserte Todos Los Valores")
    : TL1 === TL2
    ? alert("La altura del Triángulo es: " + alturaIsosceles(TL1, TL2, TB))
    : alert("No es Isosceles");
};
