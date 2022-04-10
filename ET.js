let addExpenseBtn = document.getElementById('btn-add');

addExpenseBtn.addEventListener("click", addItemsToTable);

function addItemsToTable() {
  let nameInput = document.querySelector(".name-input");
  let dateInput = document.querySelector(".date-input");
  let amountInput = document.querySelector(".amount-input");
  let expenseTable = document.getElementById('tracker-table');

  let firstEl = document.getElementById('td-one').classList.add("hide");

  let row = expenseTable.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let currency = "£";


  cell1.innerHTML = nameInput.value;
  nameInput.value = "";
  cell2.innerHTML = dateInput.value;
  dateInput.value = "";
  cell3.innerHTML =  currency.concat(amountInput.value);
  amountInput.value = "";

  let btn = document.createElement("button");
  btn.innerHTML = "Remove";
  cell4.appendChild(btn);
  btn.className = "close";
  cell4.className = "btn-remove-style";

  let closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", deleteRow);


  function deleteRow() {
    let r = this.parentNode.parentNode.rowIndex;
    document.getElementById('tracker-table').deleteRow(r);

    let closebtns = document.querySelectorAll(".close");
    if (closebtns.length === 0) {
      let firstEl = document.getElementById('td-one').classList.remove("hide");
    }
  }
}
