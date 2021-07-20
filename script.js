let heart = document.querySelector('.like-heart')
const likeNumber = document.querySelector('.like-number')
let counter = 0

heart.addEventListener('click', function () {
  heart.classList.toggle('added')

  if (heart.classList.contains('added')) {
    likeNumber.textContent++
  } else {
    likeNumber.textContent--
  }
})