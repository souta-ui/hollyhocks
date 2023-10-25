import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img src={"https://cdn.jalan.jp/jalan/images/pict2L/Y4/Y397694/Y397694003.jpg"} className="App-logo" alt="logo" />
        <p className="text-wed-dark">
          <code>WED</code> にようこそ!
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
