import {Header} from './components/header/header'
import {Slider} from './components/carouselSlider'
import { CTACards } from './components/ctaCards';
import { MoreInfoCarousel } from './components/moreInfoCarousel/moreInfoCarousel';
import {BestCasinoGames} from './components/casinoGames'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <CTACards />
      <MoreInfoCarousel />
      <BestCasinoGames />
    </div>
  );
}

export default App;
