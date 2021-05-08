// import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

const srcValue = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
const alternativeTextValue = 'Cute cat staring';

function App () {
  return (
    <div className="App">
      <Image source={srcValue} alternativeText={alternativeTextValue} />
    </div>
  );
}

export default App;
