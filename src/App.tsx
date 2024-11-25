import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="Salah" />
      <Counter />
    </div>
  );
};

export default App;
