import logo from './logo.svg';
import './App.css';
// import Mango from './components/Mango.js';
import Navigate from './components/Navigate.js';
import Card, {Card_Data} from './components/Card.js';
// import BasicGreeter from './components/BasicGreeter.jsx';
// import Die from './components/Die.jsx';

  
// function App() {
//   return (
//     <div>
//       <Navigate></Navigate>
//       {/* <h1>Hello World</h1>
//       <div>Parth Mehta</div> */}
//       {/* <BasicGreeter person="Everyone" from="Parth Mehta"></BasicGreeter> */}
//       {/* <Die></Die> */}
//        <Mango></Mango> 
//       {/* <div>SAP ID:</div> */}
//     </div>
//   );
// }

// export default App;

function App(){
  return(
    <div>
      <Navigate></Navigate>
      <div class="flex">
      <Card {...Card_Data[0]}/>
      <Card {...Card_Data[1]}/>
      <Card {...Card_Data[2]}/>
      </div>
        
      
    </div>

    // <div>
    //   <MyButton>
    //     <div>
    //       <h1>My Button1</h1>
    //     </div>
    //   </MyButton>

    //   <MyButton>Other Button</MyButton>
    // </div>

  );
}

export default App;