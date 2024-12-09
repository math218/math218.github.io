addEventListener("keydown", function(event) {
  if (event.shiftKey && event.ctrlKey) {
    event.preventDefault();
    window.location.href = `math.html?enter=false`;
    
  }
  else if (event.shiftKey && event.altKey) {
    window.location.href = `math.html?enter=true`;
  }
})
