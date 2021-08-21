const memory8 = document.getElementById("memory8gb");
const memory16 = document.getElementById("memory16gb");
//
const storage256 = document.getElementById("storage256");
const storage512 = document.getElementById("storage512");
const storage1T = document.getElementById("storage1T");
//
const freedelivary = document.getElementById("freedelivary");
const paiddelivary = document.getElementById("paiddelivary");
//

const fixedprice = document.getElementById("fixedprice");
const memorycoast = document.getElementById("memorycoast");
const storegecoast = document.getElementById("storegecoast");
const deliverycoast = document.getElementById("deliverycoast");
//

const total = document.getElementById("total");
//
const promocode = document.getElementById("promocode");
const apply = document.getElementById("apply");
const finalTeaxt = document.getElementById("final");
// update all
function updateAll() {
  var a = Number(memorycoast.innerText);
  var b = Number(storegecoast.innerText);
  var c = Number(deliverycoast.innerText);

  // var abc = a+b+c;
  var d = Number(fixedprice.innerText);
  var abcd = a + b + c + d;
  total.innerText = abcd;
  finalTeaxt.innerText = total.innerText;
}

// add eventListener
memory8.addEventListener("click", function () {
  memorycoast.innerText = "0";
  updateAll();
});
memory16.addEventListener("click", function () {
  memorycoast.innerText = "180";
  updateAll();
});
//
storage256.addEventListener("click", function () {
  storegecoast.innerText = "0";
  updateAll();
});
storage512.addEventListener("click", function () {
  storegecoast.innerText = "100";
  updateAll();
});
storage1T.addEventListener("click", function () {
  storegecoast.innerText = "180";
  updateAll();
});
//
freedelivary.addEventListener("click", function () {
  deliverycoast.innerText = "0";
  updateAll();
});
paiddelivary.addEventListener("click", function () {
  deliverycoast.innerText = "20";
  updateAll();
});
// discount with promocode
apply.addEventListener("click", function () {
  var promo = promocode.value;

  if (promo == "stevekaku") {
    finalTeaxt.innerText = total.innerText - total.innerText * 0.2;
  }
});
