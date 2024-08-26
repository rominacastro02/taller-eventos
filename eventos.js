document.querySelector('button').addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Detiene la propagación del evento al div padre
});

document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
