const themes = {
  light: {
    bg: "white",
    text: "black",
    border: "#ccc",

  },
  dark: {
    bg: "black",
    text: "white",
    border: "#494242ff"

  }
}
let current='light'
body = document.body
btn = document.getElementById("btn")
header = document.getElementById("header")
footer = document.getElementById("footer")
main = document.getElementById("content")


function applyTheme(name) {
  const t = themes[name]

  body.style.backgroundColor = t.bg;
  body.style.color = t.text;
  header.style.borderColor = t.border;
  main.style.borderColor = t.border;
  footer.style.borderColor = t.border;
  current=name
  btn.innerHTML=name=='light'?"dark mode":"light mode"
}

btn.addEventListener('click',() => applyTheme(current=='light'?'dark':'light'))

applyTheme(current)
