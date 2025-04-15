let arr = [2,3,4,6,5,7,3,1]
let count  = 0 ;
let flag= 0;
if(arr[0]<=arr[1]) flag=1;
if(arr[0]>arr[1]) flag=-1;
for(let i = 0 ; i< arr.length ; i++){
    
    if(flag==1){
        if(arr[i]<arr[i+1]){
            continue;
        }
        else{
            count++;
            flag = -1;
        }
    }
    if(flag==-1){
        if(arr[i]>arr[i+1]){
            continue;
        }
        else{
            count++;
            flag = 1;
        }
    } 
}
console.log(count)

setTimeout(() => {
    console.log('Hello after 3 seconds!');
  }, 3000);
  console.log('This runs first');
  
