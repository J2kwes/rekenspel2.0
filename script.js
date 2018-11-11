const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let awnsers = [];
let counter = 0;
let num = 0;
let mySum;
let correctAwnsers = [];
let index = 0; // global assignments counter

function init() {
  makeSum();
  console.log(assignments);
}

function makeSum() {
  let a = Math.floor(Math.random() * 9 + 2);
  let b = Math.floor(Math.random() * 9 + 2);
  mySum = a + " * " + b;
  myInput.focus();
  assignments[index] = mySum; // store original assignment
  correctAwnsers[index] = a * b;
  myAssignment.innerHTML = assignments[index];
}

function inputHandler(evt) {
  if (evt.keyCode == 13) {
    if (eval(mySum) == myInput.value) {
      // ntwoord goed sla op in array
      awnsers[index] = myInput.value; // store input answer
      console.log(awnsers);
      console.log(correctAwnsers);
    } else {
      //antwoord fout in array
      awnsers[index] = myInput.value; // store input answer
      console.log(awnsers);
      console.log(correctAwnsers);
    }
    index++;
    myInput.value = "";
    if (index < 10) {
      init();
    } else {
      finished();
    }

  }
}

function finished() {

  document.getElementById('input').style.display = "none";

  console.log("klaar");

  var table = document.createElement('table'), tr, td, row, cell;

  for (row = 0; row < index; row++) {

    tr = document.createElement('tr');

      let td = document.createElement('td');
      tr.appendChild(td);
      td.innerHTML = assignments[row];

      let td1 = document.createElement('td');
      tr.appendChild(td1);
      td1.innerHTML = correctAwnsers[row];

      let td2 = document.createElement('td');
      tr.appendChild(td2);
      td2.innerHTML = awnsers[row];

      table.appendChild(tr);

    if(correctAwnsers[row] == awnsers[row]) {
      tr.style.backgroundColor = "green";
    }else {
      tr.style.backgroundColor = "red";
    }
  }

  document.getElementById('container').appendChild(table);

}

myInput.addEventListener('keydown', inputHandler, false);
init();
