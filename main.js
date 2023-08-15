// //colors
const lightGrey = 'hsl(217, 12%, 63%)'
const orange = 'hsl(25, 97%, 53%)'
const white = 'hsl(0, 0%, 100%)'
const mediumGrey = 'hsl(216, 12%, 54%)'
const darkBlue = 'hsl(213, 19%, 18%)'
const veryBlue = 'hsl(216, 12%, 8%)'

// //hover effect after-image:
// const five = document.getElementById('five');
// const four = document.getElementById('four');

// //Hover Change color of the left item of which the hover is done.
// five.addEventListener('mouseover', () => {
//    four.style.backgroundColor = lightGrey;
//    four.style.color = white;
// })
// five.addEventListener('mouseout', function handleMouseOut() {
//     four.style.backgroundColor = darkBlue;
//     four.style.color = lightGrey;
//   });

const five = document.getElementById('five');

five.addEventListener('click', function onClick(event) {
    document.five.style.backgroundColor = orange;
})