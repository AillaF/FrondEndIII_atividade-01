import Greeting from "./components/Greeting";

import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: '01'
  }

  const banana = {
    firstName: 'ban',
    lastName: 'ana'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting user={banana}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in explicabo nemo nihil quaerat velit dolores dignissimos illo, labore neque, blanditiis eos itaque delectus obcaecati maiores commodi ipsa quasi repellat.</p>
        <Greeting user={user}/>
        <h1>kjbcnclkamxmaslm</h1>
      </header>
    </div>
  );
}

export default App;
