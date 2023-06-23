//root component
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Search from './components/search/search';
function App() {
  return (
    <div className='bg-dark text-light'>
      <Header />
      <Body />
      <Search />
    </div>
  );
  };
  
  
  export default App;