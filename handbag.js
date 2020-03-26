function isBagPossible() {
	const budget = parseInt(document.getElementById("budget").value);
	const price = parseInt(document.getElementById("price").value);

	if (budget >= price) {
		document.getElementById("handbag-answer").innerHTML =
			"Hell yeah, buy the bag!";
		document.getElementById("handbag-answer").style.color = "#1f471f";
	} else {
		document.getElementById("handbag-answer").innerHTML =
			"Keep saving - make it happen!";
		document.getElementById("handbag-answer").style.color = "#6b1f1f";
	}
}
