
const foodLink = document.querySelector('a[href="#food-section"]');
const foodSection = document.getElementById('food-section');


foodLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    foodSection.scrollIntoView({ behavior: 'smooth' }); 
    foodLink.classList.add('active'); 
});


if (window.location.hash === '#food-section') {
    foodLink.classList.add('active');
}