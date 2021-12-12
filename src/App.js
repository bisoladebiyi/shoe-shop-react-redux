import { Provider } from 'react-redux'

import './App.css';
import ShoeContainer from './components/shoe-container';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ShoeContainer />
    </div>
    </Provider>
  );
}

export default App;
