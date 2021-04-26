var color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
var boders = document.querySelectorAll('.mission_time')
var number_boders = boders.length
for (var i = 0; i < number_boders; i++)
    boders[i].style = 'border-right: 5px solid #' + color[Math.floor(Math.random() * 16)] + color[Math.floor(Math.random() * 16)] + color[Math.floor(Math.random() * 16)] + color[Math.floor(Math.random() * 16)] + color[Math.floor(Math.random() * 16)] + color[Math.floor(Math.random() * 16)] + ';'