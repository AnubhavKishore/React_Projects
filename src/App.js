 import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/randomcolor';
import ScrollIndicator from './components/scroll-indicator';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tac-toe';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* <Accordian/>*/}

      {/* <RandomColor/>*/}

      {/* <StarRating/> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* <LoadMoreData/> */}

      {/* <TreeView menus={menus}/> */}

      {/* <QRCodeGenerator/> */}

      {/* <LightDarkMode/> */}

      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* <TabTest/> */}

      {/* <ModalTest/> */}

      {/* <GithubProfileFinder/> */}

      {/* <SearchAutocomplete/> */}

      {/* <TicTacToe/> */}

      <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState>
      
    </div>
  );
}

export default App;
