function showhide(id) {
  var target = "";
  if (id == "tab-1") {
    target = "item-1";
  } else if (id == "tab-2") {
    target = "item-2";
  } else if (id == "tab-3") {
    target = "item-3";
  } else if (id == "tab-4") {
    target = "item-4";
  } else if (id == "tab-5") {
    target = "item-5";
  } else {
    target = "item-6";
  }
  target = document.getElementById(target);
  // Set to block so you only need to click once to run the function
  if (target.style.display === "block") {
    target.style.display = "none";
  } else {
    target.style.display = "block";
  }
}

function getLeft() {
  var off = document.getElementById("demo").offsetLeft - 10;
  var set = String(off);
  var text1 = set;
  var text2 = "px";
  var text3 = text1.concat(text2);
  const footer_p = document.getElementsByClassName("footer-p");
  for (let i = 0; i < footer_p.length; i++) {
    footer_p[i].style.paddingLeft = text3;
  }
  document.getElementById("language-bot").style.marginLeft = text3;
}
