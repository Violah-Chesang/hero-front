//root component
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer'
import Strength from './components/strength/strength';

function App() {
    return (
      <div className='bg-dark text-light'>
        <Header />
        <Body />
        <Footer />
        <Strength />
      </div>
    );
  };
  
  
  export default App;