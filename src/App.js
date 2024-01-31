import logo from './Images/logo.jpg';
import { useState,useEffect } from 'react';
import download from './Images/download.png'
import Card from './Card'

function App() {
  const [data , setData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.slice(0,10));
      });
  }, []);

  return (
    <div className="container">
    <div class="logo">
      <img src={logo} alt="Logo" height={"50px"}/>
    </div>
    <Card
      title="Attendance"
      image={download}
      description={data.map(item => (
        <li key={item.id}>
          <strong>{item.id}</strong> - {item.name}
        </li>
      ))}
    />
  </div>
  );
}
 
export default App;
