
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

const filterButtons = document.querySelectorAll('.filter-button'); //select all filter buttons
const listItems = document.querySelectorAll('.page-section'); //select all items that can be filtered
const listItemsContainer = document.querySelector('.main-content'); //select container that holds items which can be filtered


const filterList = (event) => {
	const currentButton = event.currentTarget; 				//select button that was clicked				
	const currentButtonFilterBy = currentButton.dataset.filterBy; //get filter criteria
	const filteredItems = [...listItems].filter(item => {
		if (currentButtonFilterBy === 'All') {			//if criteria matches "All" parameter, show everything
			return true;
		} else {					//if not
			
			const splitTypes = item.dataset.type.split(',');	//split all types and make an array from them		
			
			return splitTypes.includes(currentButtonFilterBy);			 //check if item types match any filter criteria
		}
	});
	listItemsContainer.innerHTML = ''; //empty the container that holds the items (main content)
	
	filteredItems.forEach(item => {		//fill empty container with items which match chosen filter criteria
		listItemsContainer.appendChild(item);
	});
}

filterButtons.forEach(filterButton => {			//add eventlistener to every filter-button, and execute the function when button is clicked
	filterButton.addEventListener('click', filterList);
});