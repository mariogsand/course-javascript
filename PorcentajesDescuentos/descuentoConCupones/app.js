let coupons = [
  {
    name: "coupon1",
    discount: 15,
  },
  {
    name: "coupon2",
    discount: 20,
  },
  {
    name: "coupon3",
    discount: 30,
  },
];

const calcDiscount = (price, discount) => {
  const porcentDiscout = 100 - discount;

  const priceDiscount = (price * porcentDiscout) / 100;

  return priceDiscount.toFixed(2);
};

const addCoupon = () => {
  //Selectores a nodos del DOM
  const priceItem = document.getElementById("inputPrice").value;
  const Coupon = document.getElementById("inputCoupon").value;
  // Buscando Cupon
  let couponFind = coupons.find((coupon) => {
    return coupon.name === Coupon;
  });
  
  // Si no existe el cupon
  if (couponFind == undefined) {
    const discountProductFail = document.getElementById("discountProductFail");
    discountProductFail.innerHTML = `Error: no existe el cupon ingresado ${Coupon}`;

  } else if (couponFind != undefined) {
    // Si existe el cupon
    let discountPrice = calcDiscount(priceItem,couponFind.discount);

    const discountProductSuccess = document.getElementById("discountProductSuccess");
    discountProductSuccess.innerHTML = `${discountPrice}`;
    console.log(discountPrice)
  } 
  
};


