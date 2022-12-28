function getTextelemenbtByValueId(elementId) {
  const totalElement = document.getElementById(elementId);
  const totalStrToNum = parseInt(totalElement.innerText);
  return totalStrToNum;
}
function setTextElementValuById(elemrmtId, value) {
  const subTotalElement = document.getElementById(elemrmtId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhonetotal = getTextelemenbtByValueId('phone-price');
  const curreCaseTotal = getTextelemenbtByValueId('case-total-price');
  const currentSubTotal = currentPhonetotal + curreCaseTotal;
  setTextElementValuById('sub-total', currentSubTotal);
  const taxTotal = (currentSubTotal * 0.1).toFixed(2);
  setTextElementValuById('tex-ammount', taxTotal);
  const finalAmmount = currentSubTotal + taxTotal;
  setTextElementValuById('final-total', finalAmmount);
}
