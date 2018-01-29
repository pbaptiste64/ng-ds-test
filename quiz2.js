// Quiz 2

//1. Name and describe the two main operations of a stack (to add and remove data).
// In a nut shell, the last item to go into the stack will be the first one removed from the stack.
// Stack also utilizes the push method to put an item into the back of the storage and uses the
// pop to take out the last item put into the storage.

//2. Name and describe the two main operations of a queue (to add and remove data).
// The first item to go into the queue will be the first one taken out of the queue.
// Queue utilizes the enqueue method to add to the tail and push an item into the storage. The
// dequeue method is used to add to to the head and remove the first item added.

//3. Draw the tree resulting from adding the following sequence of numbers to an empty
// tree: 30, 45, 15, 10, 50, 40, 20, 27

//----------30---------
//-----15--------45----
//--10---20----40----50
//---------27----------


//4. Is this tree balanced? If not, which rotation needs to be done? (Use the following
//     rotation as an example: rightRotation(30), or leftRotation(10))
//The tree is balanced <--- answer


//5. Now add 29. Is the tree balanced? If not, which rotation needs to be done?
// (Use the following rotation as an example: rightRotation(30), or leftRotation(10))
//Yes, Rotation required <--- answer
//----------30---------
//-----15--------45----
//--10---20----40----50
//---------27----------
//-----------29 <--

//6. Consider the following tree:    
//  ------5  
//  ---2-----8  
//  -1--3-----
//-0---  

//  Now add 0 to the tree. Which one is the first node to go out of balance?

//7. How do you fix this node? (Use the following rotation as an example: rightRotation(30),
// or leftRotation(10))

//8. What are the four main steps of mergesort?

// 0. Recognize base case
// 1. Divide: break problem down during each call
// 2. Conquer: do work on each subset
// 3. Combine: solutions
 

// 9. Say you have a program which handles the login queue to a game server. The game server is
//  able to log in one person every one second. Assume that one second must elapse after a person
//   logs in with an empty queue before they are removed from the queue. Draw the state of the
//    queue at 12:00:06, considering the following sequence of events:
//     1. At 12:00:00 Hades logs in                Hades logs in at 12:01
//     2. At 12:00:00 Ares logs in                 Ares logs in at 12:02+1
//     3. At 12:00:00 Zeus logs in                 Zeus logs in at 12:03+2
//     4. At 12:00:00 Buzz Light Year logs in      Buzz logs in at 12:04+3
//     5. At 12:00:02 Kanye West logs in           Kanye logs in at 12:05+4
//     6. At 12:00:03 Taylor Swift logs in         Taylor logs in at 12:06+6
//     7. At 12:00:03 Darkwing Duck logs in        Darkwing logs in at 12:07+7 
//     8. At 12:00:04 Evil Mickey logs in.         Evil logs in at 12:08+8
    
//       Hades logs in at 12:01    <--- answer
//       Ares logs in at 12:02
//       Zeus logs in at 12:03
//       Buzz logs in at 12:04
//       Kanye logs in at 12:05
//       Taylor logs in at 12:06
//       Darkwing is waiting to dequeue and logs in at 12:07
//       Evil Mickey is waiting to enqueue and logs in at 12:08
 

// 10. Solve https://www.hackerrank.com/challenges/compare-the-triplets - be mindful that you
//  are required to print the output to the console in exactly the format that was asked. You
//   are not required to return a value, just print to the console. Also be mindful to use 
//   JavaScript.

function solveTen(a0, a1, a2, b0, b1, b2){
    let x = 0;
    let y = 0;
    let xArr = [];
    let yArr = [];
    xArr.push(a0, a1, a2);
    yArr.push(b0, b1, b2);
    for(var i = 0; i < 3; i++){
        if(xArr[i] > yArr[i]){
            x++;
        }
        if(yArr[i] > xArr[i]){
            y++;
        }
    }
    console.log((x + " " + y));
}

solveTen(a0, a1, a2, b0, b1, b2);


/*11. Solve https://www.hackerrank.com/challenges/mini-max-sum - be mindful that you are 
required to print the output to the console in exactly the format that was asked. You are 
not required to return a value, just print to the console. Also be mindful to use JavaScript.*/
function miniMaxSum(array) {
    array.sort();
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(`${sum - array[array.length-1]} ${sum - array[0]}`) ;    
}
miniMaxSum(array);
