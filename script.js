document.getElementById("mainVid").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("mainVid").addEventListener("mouseleave", function() {
	this.pause();
});