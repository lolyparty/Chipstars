import {Header} from './components/header'
import {Slider} from './components/carouselSlider'
import { CTACards } from './components/callToActionCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <CTACards />
    </div>
  );
}

export default App;
