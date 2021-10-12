// import './App.css';

import Circle from './Components/Circle';
// import Simple from './Components/Simple';

// const a = 5;
// const b = 6;

const data = [
  {
    ls: '0px',
    circleColor: 'green',
    circleNumber: 1
  },
    {
    ls: '0px',
    circleColor: 'yellow',
    circleNumber: 2
  },
    {
    ls: '0px',
    circleColor: 'blue',
    circleNumber: 3
  },
    {
    ls: '0px',
    circleColor: 'pink',
    circleNumber: 4
  },
  {
    ls: '0px',
    circleColor: 'cyan',
    circleNumber: 5
  },
    {
    ls: '0px',
    circleColor: 'purple',
    circleNumber: 6
  },
    {
    ls: '0px',
    circleColor: 'orange',
    circleNumber: 7
  },
    {
    ls: '0px',
    circleColor: 'magenta',
    circleNumber: 8
  }
];


function App() {

  return (
    <>
    {data.map((circle, index) => <Circle key={index} circleColor={circle.circleColor} ls={circle.ls} circleNumber={circle.circleNumber} />)}
    </>
  );

}

export default App;

