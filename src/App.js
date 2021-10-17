import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
