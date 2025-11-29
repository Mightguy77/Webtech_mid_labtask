const bgBtn=document.getElementById("bgBtn") 
const fsBtn=document.getElementById("fsBtn")
const cntBtn=document.getElementById("cntBtn")
const resetBtn=document.getElementById("reset")
const p1=document.getElementById("p1")

bgBtn.addEventListener('click',cngBackground)
function cngBackground(){
    p1.style.backgroundColor="orange"
}

fsBtn.addEventListener('click',cngFontSize)
function cngFontSize(){
    p1.style.fontSize="20px";
}

cntBtn.addEventListener('click',centerTxt)
function centerTxt(){
    p1.style.textAlign="center"
}

resetBtn.addEventListener('click',ResetTxt)
function ResetTxt(){
    p1.style.textAlign=""
    p1.style.fontSize="";
    p1.style.backgroundColor=""
}