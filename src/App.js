import React, {useState, useEffect} from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const api = 'https://randomuser.me/api/?results=1000';
    fetch(api)
      .then((response) => response.json())
      .then((response) => setData(response.results))
  })
  return (
    <div className="App">
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
