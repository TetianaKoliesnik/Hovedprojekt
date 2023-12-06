
/* code below expands larger text bodies by clicking the read more button */

const moreText = document.querySelectorAll('.text');

moreText.forEach(text => {
	const textToggle = text.querySelector('.button__toggle');

	const displayExpandedContent = (event) => {
		text.classList.toggle('text--expanded');
	}

	textToggle.addEventListener('click', displayExpandedContent);
})

/* code below filters and shows content depending which filter-button is clicked on */

const filterButtons = document.querySelectorAll('.filter-button'); /* select all filter buttons */
const listItems = document.querySelectorAll('.page-section'); /* select all items that can be filtered */
const listItemsContainer = document.querySelector('.main-content'); /* select container that holds items which can be filtered */


const filterList = (event) => {
	const currentButton = event.currentTarget; 				/* select button that was clicked	 */			
	const currentButtonFilterBy = currentButton.dataset.filterBy; /* get filter criteria */
	const filteredItems = [...listItems].filter(item => {
		if (currentButtonFilterBy === 'all') {			/* if criteria matches "All" parameter, show everything */
			return true;
		} else {					

			const splitTypes = item.dataset.type.split(',');	/* split all types and make an array from them	 */	

			return splitTypes.includes(currentButtonFilterBy);			/*  check if item types match any filter criteria */
		}
	});
	listItemsContainer.innerHTML = ''; /* empty the container that holds the items (main content) */

	filteredItems.forEach(item => {		/* fill empty container with items which match chosen filter criteria */
		listItemsContainer.appendChild(item);
	});
}

filterButtons.forEach(filterButton => {			/* add eventlistener to every filter-button, and execute the function when button is clicked */
	filterButton.addEventListener('click', filterList);
});


/* code below is for the slideshow */

const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll(".slideshow__slide"); /* is a NodeList with all figure elements */
const controls = slideshow.querySelectorAll(".slideshow__control-button"); /* select every .slideshow__control-button inside .slideshow */



let index = 0; /* has to be on the same scope as the involved function, so the function is able to get the index */
const totalSlides = slides.length;
const lastIndex = slides.length - 1;


const goToPreviousSlide = () => {

	if (index === 0) {
		index = lastIndex;
	} else {
		index = index - 1;
	}

	slides.forEach(slide => {
		slide.classList.remove("slideshow__slide--visible"); /* remove class from the element in a classList */
	})

	slides[index].classList.add("slideshow__slide--visible"); /* add class to the element with the given index */
};

const goToNextSlide = () => {

	if (index < lastIndex) {
		index = index + 1; /* assigns the property to the index var (changes the index) */
	} else {
		index = 0; /* go to the beginning of the slideshow */
	}

	slides.forEach(slide => {
		slide.classList.remove("slideshow__slide--visible"); /* remove class from the element in a classList */
	})

	slides[index].classList.add("slideshow__slide--visible"); /* add class to the element with the given index */
};


const changeSlide = (event) => {
	const button = event.currentTarget;


	if (button.dataset.direction === "previous") {
		goToPreviousSlide();

	}

	if (button.dataset.direction === "next") {
		goToNextSlide();
	}

}

controls.forEach(button => {
	button.addEventListener("click", changeSlide);
})


/* code below is for the pop up window */
 const aboutButton = document.querySelector('.about-button');
 const closeButton = document.querySelector('.close-button');
 const aboutPopup = document.querySelector('.about-popup');

document.addEventListener('DOMContentLoaded', (event) => {
    aboutButton.addEventListener('click', function() {
        aboutPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        aboutPopup.style.display = 'none';
    });
});