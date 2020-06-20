const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code');

if (code===null) {
  window.location.replace("no-preview.html");
} else {
  document.write(code);
}
