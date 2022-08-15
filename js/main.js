// All H2 element Color LightBlue
const headings = document.getElementsByTagName('h2');
for(const heading of headings){
    heading.style.color = 'lightblue'
}

// 'backpack' className background color 'tomato'
document.getElementById('backpack').style.backgroundColor = 'tomato';

// 'card' background  border radius 30px;
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

// Write a function with addEventListener 'click' Handler.
document.getElementById("unique-btn").addEventListener('click', function(){
    console.log('This Unique Button of Unique Function of this Store')
})

// 
    document.getElementById("remove-btn")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });