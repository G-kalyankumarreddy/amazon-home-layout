
import './App.css';

import Header from "./components/Header"
import ProducstList from "./components/ProductsList"
import CarouselRes from "./components/Carousel"

function App() {
  return (
    <div className='app'> 
    <Header/>
    <CarouselRes />
    <ProducstList/>
    </div>
  );
}

export default App;
