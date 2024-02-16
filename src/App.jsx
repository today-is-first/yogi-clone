import { useState } from 'react';
import './App.css';
import WeekCard from './components/WeekCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <WeekCard />
    </div>
  );
}

export default App;
