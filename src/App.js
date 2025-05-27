 import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/randomcolor';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordian/>*/}

      {/* <RandomColor/>*/}

      {/* <StarRating/> */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

    </div>
  );
}

export default App;
