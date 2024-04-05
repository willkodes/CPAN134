// Event listener for button click
document.getElementById('changeTextBtn').addEventListener('click', function(){
    var messagePara = document.getElementById('message');
    messagePara.textContent = 'Text changed successfully!';
});

// Get random color in hex
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Change the background every time the page is reloaded
  document.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundColor = getRandomColor();
  });

 // Append a new paragraph dynamically
document.addEventListener('DOMContentLoaded', function() {
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'New paragraph added dynamically!';
    document.getElementById('container').appendChild(newParagraph);
  });