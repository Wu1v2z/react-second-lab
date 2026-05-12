import './App.css';
import Main from './components/Main/Main';
import { cardsData } from './data'; // Імпортуємо масив об'єктів

function App() {
  return (
    <div className="App">
      {/* Передаємо масив об'єктів як пропс "cards" */}
      <Main cards={cardsData} />
    </div>
  );
}

export default App;