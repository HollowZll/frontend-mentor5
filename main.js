// //colors
const lightGrey = 'hsl(217, 12%, 63%)'
const orange = 'hsl(25, 97%, 53%)'
const white = 'hsl(0, 0%, 100%)'
const mediumGrey = 'hsl(216, 12%, 54%)'
const darkBlue = 'hsl(213, 19%, 18%)'
const veryBlue = 'hsl(216, 12%, 8%)'
// buttons and ratings 
const button = document.getElementById('submit-button')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
// deletes the carts contents
button.addEventListener('click', function onClick() {
    const myNode = document.getElementById('main');
    myNode.innerHTML = ''
})

// saves rating for next cart: 

let rating = 0;

function changeNumber (event) {
    if (event === one) {
        rating = 1;
    }
    else if (event === two) {
        rating = 2;
    }
    else if (event === three) {
        rating = 3;
    }
    else if (event === four) {
        rating = 4;
    }
    else if (event === five) {
        rating = 5;
    }
}

document.querySelector('.ratings').onclick = function(event) {
    changeNumber(event);
    let clicked = event.target.innerHTML;
    let color = event.target;
    color.style.backgroundColor = orange;
    color.style.color = white;
    console.log(clicked);
  };


  
  console.log(rating);

  
// creates new card
button.addEventListener('click', function onClick(event){
   changeNumber(event);
   const myNode = document.getElementById('main');
   //image
   const image = document.createElement('img');
   image.setAttribute('src', './images/thanks.svg');
   image.id = 'thanks';
   myNode.appendChild(image);
   image.style.width = '144px'
   image.style.height = '96px'
   image.style.textAlign = 'center'
   //rating
   const ratingMessage = document.createElement('div');
   ratingMessage.id = 'thankYou';
   ratingMessage.innerText = `You selected ${rating} out of 5`;
   myNode.appendChild(ratingMessage)
   //titulo
   const title = document.createElement('h1');
   title.innerText = 'Thank You';
   title.id = 'titulo'
   myNode.appendChild(title);
   //parafo 
   const parafo = document.createElement('p');
   parafo.innerText = 'We appreciate you taking the time to give a rating. If you ever need more support, don`t hesitate to get in touch!';
   parafo.id = 'parafo';
   myNode.appendChild(parafo);
})


 
  