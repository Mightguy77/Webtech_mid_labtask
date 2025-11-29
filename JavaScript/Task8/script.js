const userType=document.getElementById("userType")
const rollField=document.getElementById("rollField")
const deptField=document.getElementById("deptField")

function updateForm(){
  const val=userType.value
  if(val=="student"){
    rollField.style.display="block"
    deptField.style.display="none"
  }
  else if(val=="teacher"){
    deptField.style.display="block"
    rollField.style.display="none"
  }
  else {
    rollField.style.display = 'none';
    deptField.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded',updateForm)
userType.addEventListener('change',updateForm)