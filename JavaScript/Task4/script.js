const nameInput = document.getElementById('name');
const rollInput = document.getElementById('roll');
const deptInput = document.getElementById('dept');
const addBtn = document.getElementById('addBtn');
const table = document.getElementById('table');

addBtn.addEventListener('click', addNewRow);


function addNewRow(){
  const name = nameInput.value.trim();
  const roll = rollInput.value.trim();
  const dept = deptInput.value.trim();


  if (!name || !roll || !dept) {
    alert('Please fill in Name, Roll, and Department.');
    return;
  }

 
  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = name;
  tr.appendChild(tdName);

  const tdRoll = document.createElement('td');
  tdRoll.textContent = roll;
  tr.appendChild(tdRoll);

  const tdDept = document.createElement('td');
  tdDept.textContent = dept;
  tr.appendChild(tdDept);

  const tdAction = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.textContent = 'Delete';

  function delRow(){
    tr.remove();
  }
  delBtn.addEventListener('click',delRow)

  tdAction.appendChild(delBtn);
  tr.appendChild(tdAction);


  table.appendChild(tr);

  nameInput.value = '';
  rollInput.value = '';
  deptInput.value = '';
  nameInput.focus();
}