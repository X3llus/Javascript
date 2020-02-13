loadList(response => {
  buildPage(JSON.parse(response));
  document.getElementById("focus").focus();
});

function buildPage(listJSON) {
  var forNext = document.querySelector(".forNext");
  var list = document.querySelector("ul");
  list.removeChild(forNext);
  for (var i = 0; i < listJSON.length; i++) {

    var node = document.createElement("li");
    var formNode = document.createElement("form");
    var checkNode = document.createElement("input");
    var labelNode = document.createElement("label");
    var textNode = document.createTextNode(listJSON[i].item);
    var buttonNode = document.createElement("input");

    formNode.setAttribute("id", i);
    formNode.setAttribute("action", "/delete");
    formNode.setAttribute("method", "POST");
    formNode.addEventListener("submit", deleteItem)
    checkNode.setAttribute("type", "checkbox");
    if (listJSON[i].check) {
      formNode.setAttribute("class", "crossed");
      checkNode.setAttribute("checked", "true");
    }
    checkNode.addEventListener("click", check);
    labelNode.addEventListener("click", edit);
    buttonNode.setAttribute("type", "submit");
    buttonNode.setAttribute("value", "Delete");
    buttonNode.setAttribute("class", "floated");

    labelNode.appendChild(textNode);
    formNode.appendChild(checkNode);
    formNode.appendChild(labelNode);
    formNode.appendChild(buttonNode);
    node.appendChild(formNode);
    list.appendChild(node);

  }

  list.appendChild(forNext);

}

function loadList(callback) {
  var xml = new XMLHttpRequest();
  xml.overrideMimeType("application/json");
  xml.open('GET', 'list.json', true);
  xml.onreadystatechange =  () => {
    if (xml.readyState == 4 && xml.status == 200) {
      callback(xml.responseText);
    }
  };
  xml.send(null);
}

function check(e) {
  var form = e.target.parentNode;
  form.setAttribute("class", (e.target.checked)? "crossed" : "");
  var audio = new Audio((e.target.checked) ? "check.mp3" : "eraser.mp3");
  audio.play();
  update();
}

function edit(e) {
  text = e.target.innerText;
  node = document.createElement("input");
  node.setAttribute("type", "text");
  node.setAttribute("value", text);
  node.setAttribute("id", "toFocus");
  node.addEventListener("focusout", editOff);
  e.target.parentNode.replaceChild(node, e.target);
  document.querySelector("#toFocus").focus();
}

function editOff(e) {
  text = e.target.value;
  node = document.createElement("label");
  node.addEventListener("click", edit);
  textNode = document.createTextNode(text);
  node.appendChild(textNode);
  e.target.parentNode.replaceChild(node, e.target);
  update();
}

function submitData (e) {
  e.preventDefault();
  item = e.target[0].value;
  e.target[0].value = "";
  var data = JSON.stringify({
    check: false,
    item: item
  });
  var xml = new XMLHttpRequest();
  xml.open("POST", "list", true);
  xml.setRequestHeader("Content-type", "application/json");
  xml.onreadystatechange = () => {
    if (xml.readyState == 4 && xml.status == 200) {
      location.reload();
    }
  };
  xml.send(data);
}

function deleteItem (e) {
  e.preventDefault();
  e.target.setAttribute("class", "delete");
  var audio = new Audio("eraser.mp3");
  audio.play();
  setTimeout(() => {
    id = e.target.id;
    console.log(e.target);
    var data = JSON.stringify({
      id: id
    });
    var xml = new XMLHttpRequest();
    xml.open("POST", "delete", true);
    xml.setRequestHeader("Content-type", "application/json");
    xml.onreadystatechange = () => {
      if (xml.readyState == 4 && xml.status == 200) {
        location.reload();
      }
    };
    xml.send(data);
  }, 1100);
}

function update() {
  var data = [];
  var forNext = document.querySelector(".forNext");
  var list = document.querySelector("ul");
  // list.removeChild(forNext);
  // console.log(list);

  for (let i = 0; i < list.children.length - 1; i++) {
    data.push({
      check: list.children[i].children[0][0].checked,
      item: list.children[i].children[0].childNodes[1].innerText
    });
  }

  data = JSON.stringify({
    data: data
  });

  console.log(data)

  var xml = new XMLHttpRequest();
  xml.open("POST", "update", true);
  xml.setRequestHeader("Content-type", "application/json");
  xml.onreadystatechange = () => {
    if (xml.readyState == 4 && xml.status == 200) {
      console.log("success");
    }
  };
  xml.send(data);

}

document.querySelector("form").addEventListener("submit", submitData);
