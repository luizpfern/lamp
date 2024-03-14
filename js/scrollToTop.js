const button = document.querySelector('#scrollBack')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

button.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo(0, 0);
})