// document.getElementById('btn-case-plus').addEventListener('click', function () {
//   const newCaseNumberField = document.getElementById('case-number-field');
//   const caseNumberTostr = newCaseNumberField.value;
//   const previousCaseNumber = parseInt(caseNumberTostr);
//   const newCaseNumber = previousCaseNumber + 1;
//   newCaseNumberField.value = newCaseNumber;
// });

// document.getElementById('btn-case-mainus').addEventListener('click', function () {
//   const newCaseNumberField = document.getElementById('case-number-field');
//   const caseNumberTostr = newCaseNumberField.value;
//   const previousCaseNumber = parseInt(caseNumberTostr);
//   const newCaseNumber = previousCaseNumber - 1;
//   newCaseNumberField.value = newCaseNumber;
// });

function updateCaseNumber(isIncrease) {
  const newCaseNumberField = document.getElementById('case-number-field');
  const caseNumberTostr = newCaseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberTostr);

  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  newCaseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-total-price');
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCasePrice(newCaseNumber);
  calculateSubTotal();
});

document.getElementById('btn-case-mainus').addEventListener('click', function () {
  const newCaseNumber = updateCaseNumber(false);
  updateCasePrice(newCaseNumber);
  calculateSubTotal();
});
