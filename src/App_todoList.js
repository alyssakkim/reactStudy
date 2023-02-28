import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

// to do list
function App() {

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);     // 여러개의 toDo를 받을 수 있는 state 생성
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === ""){
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]); // 배열 중간에 데이터가 추가로 들어가는 경우, ...으로 처리. 현재의 toDos를 받아서 새로운 toDo의 배열로 리턴함
        setToDo("");
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
