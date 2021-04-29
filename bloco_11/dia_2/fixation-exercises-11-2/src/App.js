// import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

const src = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

function App() {
  return (
    <div className="App">
      <Image source={src} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
