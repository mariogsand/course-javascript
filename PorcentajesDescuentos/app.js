const precioOriginal = 120;
const descuento = 18;


// console.log({
    //     precioOriginal,
    //     descuento,
    //     porcentajePrecioDescuento,
    //     precioConDescuento,
    // })
    
    const priceDiscount = (precio,descuento) => {
    const porcentajePrecioDescuento = 100 - descuento;
    
    const precioConDescuento = parseFloat(precio * porcentajePrecioDescuento / 100).toFixed(2);

    return precioConDescuento;
}

const calcDiscount = () => {
    const inputPrice = (document.getElementById("inputPrice").value);
    const inputDiscount = (document.getElementById("inputDiscount").value);

    const discount = priceDiscount(inputPrice,inputDiscount);
    
    const priceResult = document.getElementById("priceResult");
    priceResult.innerHTML = `<h1>El precio con descuento es de $${discount} pesos</h1>`;
    console.log(priceResult);
}