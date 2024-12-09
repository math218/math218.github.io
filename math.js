const parametros = new URLSearchParams(window.location.search);
const enter = parametros.get("enter");

if (enter == "false") { // Check if enter is NOT explicitly "true"
  window.location.href = "index2.html";
}
