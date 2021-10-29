import Calculator from "./components/Calculator";
import GlobalStyle from "./Styles/Global";

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Calculator />
      </Provider>
    </>
  );
}

export default App;
