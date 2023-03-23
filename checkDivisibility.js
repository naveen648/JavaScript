var arr=[2,3,5,6,7,9,11,12,13,15,20,21];
function checkDivisibility(){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%3==0)
        {
            console.log(arr[i]);
        }
    }
}
checkDivisibility();
