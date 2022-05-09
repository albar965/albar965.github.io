var inner = document.querySelector("#container>.inner");
if(inner) {
	inner.addEventListener("scroll", function() {
		if(innerWidth > 1280) {
			document.body.style.backgroundPositionY = inner.scrollTop / (inner.scrollHeight - inner.clientHeight) * 100 + "%";
		}
	});
}