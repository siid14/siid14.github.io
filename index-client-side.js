console.log("Script loaded successfully!");

function countClicks() {
  console.log("function countClicks!");
  var clicks = localStorage.getItem('clickCount');
  clicks = parseInt(clicks) || 0;
  clicks += 1;
  localStorage.setItem('clickCount', clicks);
  document.getElementById("clickCount").innerHTML = clicks;
}


const button = document.querySelector('button');

// add a click event listener to the button
button.addEventListener('click', function() {
  console.log('Button clicked!');
  countClicks();
});


// initialize the click count display
window.onload = function() {
  var clicks = localStorage.getItem('clickCount');
  document.getElementById("clickCount").innerHTML = clicks || 0;
};