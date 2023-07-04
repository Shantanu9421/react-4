import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './Display'

function App() {
  const [year, settime] = useState([""])
  const getGreeting = () => {
    const ctime = new Date()
    const currenthour = ctime.getHours()
    if (currenthour >= 5 && currenthour < 12) {
      return('Good Morning, everyone');
    } else if (currenthour >= 12 && currenthour < 18) {
      return('Good Afternoon, everyone');
    } else {
      return('Good Evening, everyone');
    }


  }
  useState(() => {
    settime(getGreeting());
  });


  return <h1>{year}</h1>
}

export default App;
