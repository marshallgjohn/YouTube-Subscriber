var subscribed = Array.from(document.querySelectorAll("paper-button[subscribed]"));
console.log(subscribed);
var unsubscribed = Array.from(document.querySelectorAll("paper-button"))
	.forEach(function(el) {
		if(subscribed.indexOf(el) == -1)
		{
			el.click();
		}
	}
	);
