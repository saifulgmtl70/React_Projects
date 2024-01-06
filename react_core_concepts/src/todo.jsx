// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task} is done: {isDone} </li>
//     )
// }


/* Conditional Rendering option 1 */
// export default function Todo({task, isDone}){
//    if(isDone === true){
//     return <li>Congrats. You have completed the task: {task} </li>
//    }
//    else{
//     return <li>You haven't completed the task {task} yet. At first complete the {task} </li>
//    }
// }



/* Conditional Rendering option 2 */
// export default function Todo({task, isDone}){
//    if(isDone){
//     return <li>Congrats. You have completed the task: {task} </li>
//    }
//     return <li>You haven't completed the task {task} yet. At first complete the {task} </li>

// }



/* Conditional Rendering option 3 : Ternary Operator*/
// export default function Todo({task, isDone}){
//     return(
//         <li> {isDone ? "Finished that task.." : "Haven't finished yet. Work on"} </li>
//     )
// }


// /* Conditional Rendering option 3 : AND Operator*/
// export default function Todo({task, isDone}){
//     return(
//         <li> {task} {isDone && ": Done"} </li>
//     )
// }

/* Conditional Rendering option 3 : OR Operator*/
// export default function Todo({task, isDone}){
//     return(
//         <li> {task} {isDone || ": Not Done yet. Finished it"} </li>
//     )
// }



// /* Conditional Rendering option 6 : Declaring Variable*/
// export default function Todo({task, isDone}){
//     let listItem;
//     if(isDone){
//         listItem = <li>{task} finished...Move Forward</li>
//     }
//     else{
//         listItem = <li> {task} haven't finished yet. Finished first </li>
//     }
//     return listItem;
// }
