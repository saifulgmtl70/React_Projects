import './App.css';
import Counter from './counter';
import Team from './tam';
import Users from './user';
import Friends from './friends';

function App(){

    // function clickHandler(){
    //     alert("Clicked button")
    // }

    // const moreBtn = () =>{
    //     alert("More Button Clicked");
    // }

    // const num1 = 20;
    // const num2 = 12;

    // const addbtn = (num1, num2) =>{
    //     const sum = num1 + num2;
    //     alert(sum);
    // }

    // const subBtn = (num1, num2) =>{
    //     const sub = num1 - num2;
    //     alert(sub);
    // }

    // const multBtn = (num1, num2) =>{
    //     const mult = num1 * num2;
    //     alert(mult);
    // }

    // const divBtn = (num1, num2) =>{
    //     const div = num1 / num2;
    //     alert(div);
    // }

    return(
        <div>
            {/* <h3>Moree React Core Concepts</h3>
            <button onClick={clickHandler}>Click me</button>

            <button onClick={moreBtn}>More Click</button>

            <button onClick={() => {alert("ANother btn Clicked")}}>Aother Click</button> */}


            {/* <button onClick={() => {addbtn(num1,num2)}}>Sum</button>

            <button onClick={() => {subBtn(num1,num2)}}>Sub</button>

            <button onClick={() => {multBtn(num1, num2)}}>Mult</button>

            <button onClick={() => {divBtn(num1, num2)}}>Division</button> */}



            <Counter></Counter>
            <Team></Team>
            <Users></Users>
            <Friends></Friends>

        </div>
    )
}

export default App