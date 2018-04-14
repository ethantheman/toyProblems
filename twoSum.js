 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //     n^2 solution:
    //     let a = 0, b = nums.length - 1; 
    //     while ( a < b ) {
    //         console.log('a: ', a, 'b: ', b)
    //         if (nums[a] + nums[b] === target ) {
    //             return [a, b];
    //         } else {
    //             a++; // a starts at beginning of list

    //             if ( nums[a] + nums[b] === target ) {
    //                 return [a, b];
    //             }

    //             a--;
    //             let last = b;
    //             while ( b > a ) {
    //                 b--; // b starts at end of list

    //                 if ( nums[a] + nums[b] === target ) {
    //                     return [a, b];
    //                 }
    //             }
    //             b = last;
    //             a++;
    //         }
    //     }

    // possible n solution: use more memory
    let map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
        // associate the element with its index
    }
    
    for ( i = 0; i < nums.length; i++ ) {
        let complement = target - nums[i];
        // check if pair exists
        if ( map[complement] && map[complement] != i ) {
            return [i, map[complement]];
        }
    }
    
};