// Write a function that takes two binary trees as input
// and returns a single binary tree, the result of merging
// the two input trees.
// Example input:
/*
	 4		  4		  8
	/ \	+	 / \	=>	 / \
       3   5		2   6		5  11
 			 \    \          \   \
 			  3   10	  3   10   
*/

let mergeBT = (A, B) => {
	if (A !== null && B === null) {
		return A;
	}
	if (B !== null && A === null) {
		return B;
	}
	let newTree = null;
	if (A !== null && B !== null) {
		newTree = new BT(A.value + B.value);
		newTree.left = mergeBT(A.left, B.left);
		newTree.right = mergeBT(A.right, B.right);
	}
	return newTree;
};

// Test Constructor and Input:

let BT = function(value) {
	this.value = value;
	this.right = null;
	this.left = null;
};

let A = new BT(4);
A.left = new BT(3);
A.right = new BT(5);
let B = new BT(4);
B.left = new BT(2);
B.right = new BT(6);
B.left.right = new BT(3);
B.right.right = new BT(10);

let testTree = mergeBT(A, B);
console.log(testTree.value === 8);
console.log(testTree.left.value === 5);
console.log(testTree.right.value === 11);
console.log(testTree.left.right.value === 3);
console.log(testTree.right.right.value === 10);
console.log(testTree.left.left === null);
console.log(testTree.right.left === null);
