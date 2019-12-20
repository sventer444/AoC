var filename;
var input;
var setSrc = function setSrc(event) {
  document.getElementById("visualizebtn").style.display = 'block'
  filename = document.getElementById("fileinput").value;
  filename = filename.slice(filename.lastIndexOf('\\') + 1, -4);
  filename = filename.replace(/\./g, "\\") + ".js";
  document.getElementById("script").src = filename;
  setInfo(event.target);
};

var setInfo = function setInfo(file) {
  var reader = new FileReader();
  reader.readAsText(file.files[0]);

  reader.onload = function () {
    input = reader.result;
  };
};
