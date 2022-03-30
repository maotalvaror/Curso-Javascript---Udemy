function elementos() {
  let h3 = document.createElement('h3');
  let btn = document.createElement('button');
  
  h3.style.fontFamily = "cursive";
  h3.style.textAlign = "center";
  h3.innerText = "Repaso";

  btn.style.fontFamily = "cursive";
  btn.style.height = "80px"
  btn.style.width = "80px";
  btn.innerText = "Click";

  document.body.appendChild(h3);
  document.body.appendChild(btn);
}
elementos();