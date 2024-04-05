// Event listener for hide capital
document.getElementById('hideCapital').addEventListener('click',function(){
   document.getElementById('capital').style.display = 'none'; 
});

// Event listener to show capital
document.getElementById('showCapital').addEventListener('click',function(){
    document.getElementById('capital').style.display = 'block'; 
 });

 // Event listener for toggle
 document.getElementById('toggle').addEventListener('click',function(){
    if (document.getElementById('capital').style.display === 'block'){
        document.getElementById('capital').style.display = 'none'; 
    }
    else{
        document.getElementById('capital').style.display = 'block'; 
    }
 });

 // Hover to change background to yellow
 document.getElementById('yellow').addEventListener('mouseenter', function(){
    document.body.style.backgroundColor = 'yellow';
 });

 // Click to change background to green
 document.getElementById('green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
 });