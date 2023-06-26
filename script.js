function moveZero(nums){
    let index = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[index];
            nums[index] = nums[i];
            nums[i] = temp;
            index++;
        }
    }
    return nums;
}
const nums = [0,1,0,3,12];
console.log(moveZero(nums));