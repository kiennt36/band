const btn_nav = document.querySelector('#nav-small .nav-small__btn')
const nav_small_list = document.querySelector('#nav-small .nav-small__list')
const nav_small_item = document.querySelectorAll('#nav-small .nav-small__item')
const homeButton = document.querySelector('#nav .nav-item--primary')
const tourBtn = document.querySelectorAll('#tour .tour__button--dark')
const slider = document.querySelector('#slider')
const sliderTitle = document.getElementsByTagName('h3')
const sliderSubTitle = document.getElementsByTagName('p')
const sliders = [
					{
						'image' : 'assets/image/chicago.jpg',
						'title' : 'Chicago',
						'subTitle': 'Thank you, Chicago - A night we won\'t forget.'
					},
					{
						'image' : 'assets/image/lostangeles.jpg',
						'title' : 'Lost Angeles',
						'subTitle': 'We had the best time playing at Venice Beach!'
					},
					{
						'image' : 'assets/image/newyork.jpg',
						'title' : 'New York',
						'subTitle': 'The atmosphere in New York is lorem ipsum.'
					}
				]

window.addEventListener('DOMContentLoaded', () => {
	btn_nav.addEventListener('click', () => {
		nav_small_list.classList.toggle("hidden");
	})

	for(let i = 0; i < nav_small_item.length; i++) {
		nav_small_item[i].addEventListener('click', () => {
			nav_small_list.classList.remove("hidden");
		})
	}

	homeButton.addEventListener('click', () => {
		nav_small_list.classList.remove('hidden')
	})

	for(let i = 0; i < tourBtn.length; i++) {
		tourBtn[i].addEventListener('click', () => {
			const target = tourBtn[i].dataset.target
			if(target !== "") {
				const myModal = document.querySelector(target)
				const closeModalBtn = document.querySelectorAll(target + ' .myModal__btn-close')
				const myModalBg = document.querySelector(target + ' .myModal__bg')

				myModal.style.display = 'block'
				for(let j = 0; j < closeModalBtn.length; j++) {
					closeModalBtn[j].addEventListener('click', () => {
						myModal.style.display = 'none'
					})
				}

				myModalBg.addEventListener('click', () => {
					myModal.style.display = 'none'
				})
			}
		})
	}


	let start = 0
	const end = sliders.length
	setInterval(() => {

		if(start < end) {
			slider.style.backgroundImage = "url('" + sliders[start].image +  "')"
			sliderTitle[0].innerText = sliders[start].title
			sliderSubTitle[0].innerText = sliders[start].subTitle
			
			start++
		}else start = 0
	}, 3000)

})

