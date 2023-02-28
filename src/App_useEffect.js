import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// useEffect
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState(""); 
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   useEffect(() => {
//     console.log("한번만 실행됩니다.");
//   }, []);

//   useEffect(() => {
//     console.log("키워드가 변화할 때 실행됩니다.");
//   }, [keyword]);  // keyword가 변화할 때 코드를 실행함
  
//   useEffect(() => {
//     console.log("카운터가 변화할 때 실행됩니다.");
//   }, [counter]);  // counter가 변화할 때 코드를 실행함

//   useEffect(() => {
//     console.log("키워드와 카운터가 변화할 때 실행됩니다.");
//   }, [keyword, counter]);  // keyword & counter가 변화할 때 코드를 실행함


//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// Cleanup
function Hello(){
  function byFn(){
    console.log("bye :(");
  }

  function hiFn(){
    console.log("created :)");
    return byFn;
  }

  useEffect(hiFn, []);

  // useEffect(() => {
  //   return () => console.log("destroyed :(");   // Cleanup : 컴포넌트가 없어질 때 뭔가 할 수 있도록 실행하는 부분
  // }, []);
  return <h1>Hello</h1>;
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);  // setShowing을 통해 이전 value 값을 받아온 다음, 그 value의 반대값을 리턴함

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
