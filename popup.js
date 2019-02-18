var textarea = document.getElementById("note")
var cacheVal = localStorage.getItem('chromeNotePluginVal')
textarea.value = cacheVal

textarea.addEventListener('input', function (val) {
  var val = textarea.value
  localStorage.setItem('chromeNotePluginVal', val)
})