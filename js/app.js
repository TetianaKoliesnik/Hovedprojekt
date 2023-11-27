
const moreText = document.querySelectorAll('.text');

moreText.forEach(text => {
	const textToggle = text.querySelector('.button__toggle');
	
	const displayExpandedContent = (event) => {
		text.classList.toggle('text--expanded');
	}
	
	textToggle.addEventListener('click', displayExpandedContent);
})

