const revealDropdown = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
  let g = document.getElementById('gear-dropdown');
  g.classList.remove('hidden');
  let b = document.getElementById('gear-dropdown-btn');
  b.removeEventListener('click', revealDropdown);
  document.addEventListener('click', hideDropdown);
	// $('#gear-dropdown').removeClass('hidden');
  // $('#gear-dropdown-btn').off('click', revealDropdown);
  // $(document).on('click', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
const hideDropdown = () => {
  let g = document.getElementById('gear-dropdown');
  g.className += 'hidden';
  let b = document.getElementById('gear-dropdown-btn');
  b.addEventListener('click', revealDropdown);
  document.removeEventListener('click', hideDropdown);
	// $('#gear-dropdown').addClass('hidden');
  // $('#gear-dropdown-btn').on('click', revealDropdown);
  // $(document).off('click', hideDropdown);
};

// Add click listener to gear icon which invokes reveal function
// b.addEventListener('click', revealDropdown);
// let b = document.getElementById('gear-dropdown-btn');
// $(() => $('#gear-dropdown-btn').on('click', revealDropdown));
