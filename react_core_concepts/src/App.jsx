// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Todo from './todo'
import Players from './actor'
import BCB from './bcb'

function App() {

  // const Students = {
  //   name: "Saiful", age:22, Blood: "A+"
    
  // }

  // const images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnu16CGAhG62yywplWVEzdENI5HgZ2BY2UAQ&usqp=CAU";

  const players = ['Tamim Iqbal', 'Liton Das', 'Nazmul Hossain Shanto', 'Twahid Hridoy', 'Shakib Al Hasan', 'Mushfiqur Rahim', 'Mahmudullah Riyadh', 'Mehidy Hasan Miraz', 'Taskin Ahmed', 'Hasan Mahmud', 'Shoriful Islam'];


  const bcbs = [
    {name: "Papon", age:"60"},
    {name: "Nannu", age:"50"},
    {name: "Goda Sujon", age:"48"},
    {name: "Bashar", age:"48"},
  ]


  return (
    <>

          <h1> Vite + React</h1>

          {/* <Players name={"Tamim Iqbal Khan"}></Players> */}
          {
            players.map(player => <Players name={player}></Players>)
          }

          {
            bcbs.map(bcb => <BCB bname={bcb}></BCB>)
          }
{/* 
    <Todo task="Learn React" isDone={false}></Todo>
    <Todo task="Learn JSx" isDone={true}></Todo>
    <Todo task="Learn PHP" isDone={false}></Todo>
    <Todo task="Learn React" isDone={true}></Todo> */}
{/*       
      <h2>Hello, this is <strong className='strong'>{Students.name}</strong> and he is <strong className='strong'>{Students.age}</strong> years old. His blood group is <strong className='strong'>{Students.Blood}</strong> </h2>
      <br />

      <img src={images} alt="" />

      <br /> <br />

        
 */}

        {/* <MyFunc></MyFunc>
        <HerFunc></HerFunc>
        <Developer></Developer>
        <Device name="Vivo" price="25000"></Device>
        <Device name="Oppo" price="17000"></Device>
        <Device name="Huawei" price="19000"></Device>
        <Device name="Samsung" price="21000"></Device>
        <StuResult sname="Azad" sclass="9" gpa="4.89"></StuResult>
        <StuResult sname="Akash" sclass="9" gpa="4.54"></StuResult>
        <StuResult sname="" sclass="" gpa=""></StuResult>
        <StuResult sname="Riyadh" sclass="9" gpa="5.00"></StuResult>
        <StuResult sname="Anika" sclass="9" gpa="3.89"></StuResult> */}
 
    </>


    


  )
}


// function MyFunc(){
//   // return <h3>I am heading three</h3>
//   return(
//     <ul style={{
//       backgroundColor: "tomato",
//       color: "white",
//       listStyle:"none",
//       width:"70%",
//       margin:"0 auto",
//       padding: "30px",
//       borderRadius: "5px"
//     }}>
//       <li style={{fontSize:"20px", marginBottom:"7px"}}>Improve the videophones</li>
//       <li style={{fontSize:"20px", marginBottom:"7px"}}>Prepare lecture</li>
//       <li style={{fontSize:"20px", marginBottom:"7px"}}>Work on engine</li>
//     </ul>
//   )
// }


// function HerFunc(){
//   const herName = "Anika";
//   const herAge = "20";
//   return(
//     <div className='herAbout'>
//       <h2>I love a girl whome name is {herName} and her age is {herAge} </h2>
//     </div>
//   )
// }

// function Developer(){
//   const developerStyle = {
//     margin: "20px",
//     padding: "30px",
//     border:"2px solid tomato",
//     borderRadius:"6px"

//   }
//   return (
//     <div style={developerStyle}>
//       <h3>Saiful Islam Azad</h3>
//       <p></p>
//     </div>
//   )
// }


// function Device(props){
//   console.log(props);
//   return (
//     <>

//       <h3>This device name is: {props.name} and price is {props.price} </h3>
    
    
//     </>
//   )
// }


// // // const {name, class, gpa,} = {Name}
// function StuResult({sname, sclass, gpa}){
//   return(
//     <div className='studentResult'>
//       <h2>This is student</h2>
//       <p>Student Name: {sname} </p>
//       <p>Student Name: {sclass} </p>
//       <p>Student Name: {gpa} </p>
//     </div>
//   )
// }
export default App
