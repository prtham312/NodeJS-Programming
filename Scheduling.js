setTimeout(() => {console.log("This message is displayed after 2 sec")}, 2000); //setting timeout to perform action
let id = setTimeout(() => {console.log("This message is displayed after 10 sec")}, 10000)
clearTimeout(id); //To remove set timeout by giving id


let id1 = setInterval(() => {console.log("This message will be displayed after every 2 sec")} , 2000)
setTimeout(() => {clearInterval(id1);
                console.log("Clear Interval will be stoped after 10 secs , means id1 will work for 4 times")
} , 10000)

{
    let count = 0;
    let id = setInterval(() => {console.log(`Hi! my count is ${count+1}`) ;
    ++count;
    if(count == 5) clearInterval(id)
}
,1000)
}