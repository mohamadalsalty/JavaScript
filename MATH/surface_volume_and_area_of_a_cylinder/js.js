function calculateCylinder(H,R) {
	// The formula
	volume = 22/7 * Math.pow(R,2) * H;
	alert(volume);
}

function calculateSurface(H,R) {
	// The formula
	area =  2 * 22/7 * R * H + 2 * 22/7 * Math.pow(R,2);
	alert(area);
}
calculateCylinder(4,6);
calculateSurface(4,6);