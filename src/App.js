import Greeting from "./components/Greeting";
import Video from "./components/Video";
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  return (
    <>
      <div className="App">
        <Greeting tchubaruba={user}/>
        <Video url="https://www.youtube.com/embed/LhHB1RF6rp8">
          Rihanna Choreography
        </Video>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in explicabo nemo nihil quaerat velit dolores dignissimos illo, labore neque, blanditiis eos itaque delectus obcaecati maiores commodi ipsa quasi repellat.</p>
      </div>
    </>
  );
}

export default App;
