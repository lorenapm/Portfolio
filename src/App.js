import React, { useState } from "react";
import { TodoList } from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" placeholder="Nueva tarea" />
      <button>Add</button>
      <button>Reset</button>
    </>
  );
}

/*function HelloWord(props) {
  console.log(props.text, props.subtitle);
  return (
    <>
      <h1>{props.text}</h1>
      <h3>{props.subtitle}</h3>
    </>
  );
}

class HelloWord extends React.Component {
  state = {
    show: true,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <>
          <h1>{this.props.text}</h1>
          <h3>{this.props.subtitle}</h3>
          <button onClick={this.toggleShow}>Toggle show</button>;
        </>
      );
    } else {
      return (
        <h1>
          No hay elementos
          <button onClick={this.toggleShow}>Toggle show</button>
        </h1>
      );
    }
  }
}

function App() {
  return (
    <div className="App">
      <HelloWord text="Hello María" subtitle="prueba" />
      <HelloWord text="Hello Pedro" subtitle="prueba2" />
      <HelloWord text="Hello Juan" subtitle="prueba3" />
    </div>
  );
}*/

export default App;
