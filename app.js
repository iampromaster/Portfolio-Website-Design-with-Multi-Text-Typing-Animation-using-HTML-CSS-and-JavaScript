let text = document.querySelector('.multiText');

let writeText = () => {

  setTimeout(() => {
    text.textContent = "Web Developer"
  }, 500);

  setTimeout(() => {
    text.textContent = "App Developer"
  }, 4500);

  setTimeout(() => {
    text.textContent = "IOS Developer"
  }, 8500);
}

writeText()

setInterval(writeText, 12000);
