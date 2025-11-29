const userType = document.getElementById('userType');
const rollField = document.getElementById('rollField');
const deptField = document.getElementById('deptField');

function updateForm() {
  const val = userType.value;
  if (val === 'student') {
    rollField.style.display = 'block';
    deptField.style.display = 'none';
  } else if (val === 'teacher') {
    rollField.style.display = 'none';
    deptField.style.display = 'block';
  } else {
    // none selected
    rollField.style.display = 'none';
    deptField.style.display = 'none';
  }
}

// set initial visibility on load
document.addEventListener('DOMContentLoaded', updateForm);

// update when selection changes
userType.addEventListener('change', updateForm);