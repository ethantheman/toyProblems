/*
	Given an array of x coords and y coords and a random integer called k
	Return the smallest area be of a perfect square drawn around any k 
	of the given points (the points must be inside the box, not on the perimeter)
	Bonus Points if you can solve it in anything faster than exponential time!
	
	Example Input:
	x = [0, 2, 2];
	y = [0, 7, 2];
	k = 2;
	Output: 16
	Explanation: a square containing the points (0, 0) and (2, 2) has corners
	at (-1, -1) and (3, 3), and thus a side length of 4 and an area of 16 units.
*/

let smallestSquare = (x, y, k) => {
	let a = buildPoints(x, y), d = {}; // storage to hold distances
	for ( var i = 0; i < a.length; i++ ) {
		// values in d will hold indices of pts sorted by distance from key (closest first).
		d[i] = []; 
		for ( var j = 0; j < a.length; j++ ) {
			if ( j !== i ) {
				d[i].push(j);
			}
		}
		// sort the subarrays at each index i so that the point at index 0 
		// will be closest to the point at a[i].
		d[i] = d[i].sort((p1, p2) => {
			return distance(a[i], a[p1]) - distance(a[i], a[p2]);
		});
	}
	console.log('d: ', d);

	return 0;
}

let distance = (p1, p2) => {
	return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

let buildPoints = (x, y) => {
	// takes in two arrays and returns a single array of point objects
	return x.map((val, i) => {
		return {"x": val, "y": y[i]};
	});
}

console.log(smallestSquare([0, 2, 2], [0, 7, 2], 2));
// console.log(distance({'x': 0, 'y': 0}, {'x': 2, 'y': 7}));
// console.log(distance({'x': 2, 'y': 7}, {'x': 2, 'y': 2}));