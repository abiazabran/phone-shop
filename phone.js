// document.getElementById('btn-phn-plus').addEventListener('click', function () {
//   const phoneNumberFild = document.getElementById('phone-number-field');
//   const phoneNumberStrToNumber = parseInt(phoneNumberFild.value);
//   const newPhoneNumber = phoneNumberStrToNumber + 1;
//   phoneNumberFild.value = newPhoneNumber;
// });

function updatePhoneNumber(isIncrese) {
  const phoneNumberFild = document.getElementById('phone-number-field');
  const phoneNumberStrToNumber = parseInt(phoneNumberFild.value);
  let newPhoneNumber;

  if (isIncrese === true) {
    newPhoneNumber = phoneNumberStrToNumber + 1;
  } else {
    newPhoneNumber = phoneNumberStrToNumber - 1;
  }

  phoneNumberFild.value = newPhoneNumber;

  return newPhoneNumber;
}

function updatPhonePrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 1219;
  const caseTotalElement = document.getElementById('phone-price');
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-phn-plus').addEventListener('click', function () {
  const newPhoneNumber = updatePhoneNumber(true);
  updatPhonePrice(newPhoneNumber);
  calculateSubTotal();
});

document.getElementById('btn-phn-less').addEventListener('click', function () {
  const newPhoneNumber = updatePhoneNumber(false);
  updatPhonePrice(newPhoneNumber);
  //   getTextelemenbtByValueId();
  calculateSubTotal();
});
