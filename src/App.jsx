import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.css'
import DisplayTitle from './components/DisplayTitle';
import InputDisplay from './components/InputDisplay';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [calVal, setcalVal] = useState("");
  const [Changebg, setChangebg] = useState([]);


  const btnHandler = (name) => {
    if (name === 'C') {
      setcalVal(" ");
    }else if (name === '=') {
      const result = eval(calVal);
      setcalVal(result);
    }else{
      const value = calVal + name;
      setcalVal(value);
    }
    console.log(Changebg);
    Changebg.pop();
    setChangebg([...Changebg, name])
  }
  

  return (
    <center className='mx-auto bg-transparent text-body'>
      <DisplayTitle />
      <div className={style.styles}>
        <InputDisplay value={calVal}/>
        <div className={style.button}>
          <Button buttonHandler={btnHandler} active={Changebg.includes(calVal)}/>
        </div>
      </div>
    </center>
  )
}

export default App
