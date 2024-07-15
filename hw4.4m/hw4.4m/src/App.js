import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(timer);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    clearInterval(intervalId);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(intervalId);
    setResults((prevResults) => [...prevResults, time]); // Добавляем текущий результат в список
    setTime(0);
  };

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={handleStart}>Старт</button>
      <button onClick={handleStop}>Стоп</button>
      <button onClick={handleReset}>Сброс</button>
      <h2>Последние показатели:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result} секунд</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
