
var names = document.getElementById('names');

fetch('subscribers.php').then(function(r){
	return r.json();
}).then(function(data) {
	for (var i = data.length - 1; i >= 0; i--) {
		names.innerHTML += '<p class="name">'+ data[i] +'</p>';
	}
})

setInterval(function(){
	fetch('subscribers.php').then(function(r){
		return r.json();
	}).then(function(data) {
		// body...
		let length = data.length;
		let lasOne = document.querySelectorAll(".name")[document.querySelectorAll(".name").length-1].innerHTML;
		if (lasOne != data[length-1]) {
			names.innerHTML += '<p id="name" class="name">'+ data[length-1] +'</p>';
		}
		// alert(data[length-1]);
		// names.innerHTML += '<p id="name">'+ data[length-1] +'</p>';
	})
}, 2000);
