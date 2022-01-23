document.body.style.opacity = 0;

const hideScores = () => {
  const h2s = document.getElementsByTagName("H2");

  for (let x = 0; x < h2s.length; x++) {
    h2s[x].innerHTML = h2s[x].innerHTML.replace(/[0-9]/g, "");
  }

  const h3s = document.getElementsByTagName("H3");

  for (let x = 0; x < h3s.length; x++) {
    h3s[x].innerHTML = h3s[x].innerHTML.replace(/[0-9]/g, "");
  }
};

window.setTimeout(() => {
  document.body.style.opacity = 1;

  var wrap = document.createElement("DIV");
  wrap.style.position = "fixed";
  wrap.style.top = "175px";
  wrap.style.zIndex = "99999999999999999999999999999999";
  wrap.style.display = "flex";
  wrap.style.flexDirection = "column";

  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("❌");
  btn.style.background = "#b90a0a";
  btn.style.color = "#ffffff";

  btn.style.padding = "10px";
  btn.style.marginBottom = "10px";
  btn.onclick = () => {
    hideScores();
  };

  var btn2 = document.createElement("BUTTON");
  var t2 = document.createTextNode("🔃");
  btn2.style.background = "#b90a0a";
  btn2.style.color = "#ffffff";

  btn2.style.padding = "10px";
  btn2.style.marginBottom = "10px";
  btn2.onclick = () => {
    document.body.style.overflowY = "scroll";
  };

  btn2.appendChild(t2);
  btn.appendChild(t);
  wrap.appendChild(btn);
  wrap.appendChild(btn2);

  document.body.appendChild(wrap);

  hideScores();
}, 5000);
