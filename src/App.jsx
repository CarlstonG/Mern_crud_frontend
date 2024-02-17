import {BrowserRouter} from 'react-router-dom'
import Approutes from "./components/routes";




function App() {

  return (
   <>
    <div>
      <BrowserRouter>
          <Approutes/>
      </BrowserRouter>
    </div>
   </>
  );
}

export default App;
