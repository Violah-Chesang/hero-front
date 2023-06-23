//root component
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';

function App() {
    return (
      <div className='bg-dark text-light'>
        <Header />
        <Body />
      </div>
    );
  };
  
  
  export default App;