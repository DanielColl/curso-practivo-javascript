// const precioOriginal = 100;
// const dcto = 15;

const calcularPrecioconDcto = (precio, dcto) =>{
    const porcentajeConDcto = 100 - dcto;
    const precioConDcto = (precio * porcentajeConDcto) / 100;
    return precioConDcto;
}


const ButtonPriceDiscount = () =>{
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const precioConDcto = calcularPrecioconDcto(inputPrice, inputDiscount);

    const result_price = document.getElementById("Price_Result");
    result_price.innerText = "El precio final de su producto con valor: $" + inputPrice + "\n" + "Con un  Dcto del: " + inputDiscount + "\nEs de: $" + precioConDcto 
}


console.log({
    precioOriginal,
    dcto,
    porcentajeConDcto,
    precioConDcto,
});
