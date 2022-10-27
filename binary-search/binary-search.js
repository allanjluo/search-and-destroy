"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1 && array[0] !== target) {
    return false;
  }
  //find midpoint (arr.length/2)
  // array[midpoint]
  //if < , then you check the left side of the array
  const midpoint = Math.floor(array.length / 2);
  if (target < array[midpoint]) {
    return binarySearch(array.slice(0, midpoint), target);
  }
  if (target > array[midpoint]) {
    return binarySearch(array.slice(midpoint), target);
  }
  return true;
};

// const binarySearch = (array, target, pointer =array.length) => {
//   if (array.length === 1 && array[0] !== target) {
//     return false;
//   }
//   //find midpoint (arr.length/2)
//   // array[midpoint]
//   //if < , then you check the left side of the array
//   pointer = Math.floor(pointer / 2);
//   if (target < array[pointer]) {
//     return binarySearch(array, target);
//   }
//   if (target > array[pointer]) {
//     return binarySearch(array, target);
//   }
//   return true;
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;

/* if (array.length === 0) {
	return false;
}
//going from root node to first child, left = +1, right = +2
//going from child node to child node, left = +3, right = +4
let currentnode = 0;
while (currentnode < array.length && array[currentnode] !== target) {
	let value = array[currentnode];
	/*   if (currentnode === 0) {
		//left
		if (target < value) {
			currentnode += 1;
		}
		//right
		if (target > value) {
			currentnode += 2;
		}
	} else {
		//left child
		if (currentnode % 2 === 1) {
			if (target < value) {
				currentnode += 2;
			}

			if (target > value) {
				currentnode += 3;
			}
		}
		//right child
		if (currentnode % 2 === 0) {
			if (target < value) {
				currentnode += 3;
			}

			if (target > value) {
				currentnode += 4;
			}
		}
	} */
/* 	if (target < value) {
		currentnode += currentnode + 1;
	}
	if (target > value) {
		currentnode += currentnode + 2;
	}
}
console.log(currentnode)
if (array[currentnode] === target) {
	return true;
}
return false; */
//if index is 0, then currentnode changes:  left = +1, right = +2
//otherwise, currentnode changes: left = +3, right = +4
//if target < array[currentnode] then we go left,
//if target > array[currentnode] then we go right
//if we find the target, currentnode will be a real value
//if we reach the end and find nothing, currentnode will be a falsey value
