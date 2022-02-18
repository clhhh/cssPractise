
import './App.css';
import SliderDemo from './component/SliderDemo';
import {marks,article} from './component/SliderDemo/constants'
function App() {
  return (
    <div >
      <SliderDemo marks={marks} article={article}/>
    </div>
  );
}

export default App;
