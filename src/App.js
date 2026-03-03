import './page/appStyle/App.css';
import './page/appStyle/ScrollBar.css';

import Nav from './page/home/nav/Nav';
import Section from './page/home/section/Section';
import Footer from './page/home/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Section />
        <Footer />
      </header>
    </div>
  );
}

export default App;
