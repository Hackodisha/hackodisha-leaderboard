import logo from './logo.svg';
import './App.css';
import LeaderBoard from './leaderboard';
import Footer from './components/footer/footer';
import { Navbar } from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <LeaderBoard />
      <Footer />
    </div>
  );
}

export default App;
