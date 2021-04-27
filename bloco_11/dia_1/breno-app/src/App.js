import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksList = [
  'Estudar muito 1',
  'Estudar muito 2',
  'Estudar muito 3'
];

function App() {
  return (<ul>{tasksList.map(tasks => task(tasks))}</ul>);
}

export default App;
