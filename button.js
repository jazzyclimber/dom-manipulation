// Select buttons
var buttons = document.querySelectorAll('button');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('.btn3');

// add onclick event to button 2
btn2.onclick = () => alert("button click!");

// add event listener to button 3
btn3.addEventListener('click', (e) => {
  console.log(e)
  console.log(e.target)
});

// Add event listener to all buttons
buttons.forEach((button) => {

button.addEventListener('click', (e) => {
    console.log(button.className)
  })

})
