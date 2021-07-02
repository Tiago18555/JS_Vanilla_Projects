
//document.addEventListener('keypress', function (event) {
//	var key = event.key;
//}, false)

// document.addEventListener('keypress', function (event) {
// 		switch(event.key){
// 			case'w':
// 			up();
// 			break;
// 			case's':
// 			down();
// 			break;
// 			case'a':
// 			left();
// 			break;
// 			case'd':
// 			right();
// 			break;
// 			default:
// 			break;
// 		}
// 	}, false);

// function up(){
// 	document.body.getElementsByClassName('player')
// }
// function down(){
// 	document.body.getElementsByClassName('player').style="top : 100px"
// }
// function left(){
	
// }
// function right(){
	
// }

// function teste(){
// 	var obj = document.getElementsByTagName('body')[0]
// 	var r = Math.floor(Math.random()*255)
// 	var g = Math.floor(Math.random()*255)
// 	var b = Math.floor(Math.random()*255)
// 	obj.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// }

setInterval(teste, 1)

//document.addEventListener('click', teste)

function teste(){
	var cels = document.querySelectorAll('.cel')

	for(let i = 0; i < cels.length; i++){
		var r = Math.floor(Math.random()*255)
		var g = Math.floor(Math.random()*255)
		var b = Math.floor(Math.random()*255)
		cels[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
	}
}