import './assets/css/App.css';
import Header from './components/header';
import Biblioteca from './components/library';
import Book from './components/book';
import Footer from './components/footer';
import Library from './components/library';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Library></Library>
      <Footer></Footer>
    </div>
  );
}

export default App;
