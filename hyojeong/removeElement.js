var removeElement = function(nums, val) {
    let elementLength = 0;
    
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
        nums[elementLength++] = nums[j]
      }
    }
    
    return elementLength;
   };
  
  removeElement([0,1,2,2,3,0,4,2], 2)
  
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] === val) {
    //     nums.splice(i, 1);
    //     i -= 1;
    //   }
    // }
    // console.log(nums)
    // return nums.length;
    