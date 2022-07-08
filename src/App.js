import logo from './logo.svg';
import './App.css';
import BigText from './components/BigText/BigText'
import Counter from './components/Counter/Counter'
import Page from './components/Page/Page';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BigText text='Hello Hari!'></BigText>
        <Counter/>
      </header>
      <Page></Page>
    </div>
  );
}

export default App;
