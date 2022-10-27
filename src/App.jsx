import './App.css';
import UseCallBack from './UseCallback';
import UseReducer from './UseReducer';
import UseRef from './UseRef';

import { Link,Routes,Route } from 'react-router-dom'
import Presentation from './Presentation';


function App() {
  return (
    <div className="App">
      {/* <h1>Hooks</h1>
      <h2>UseState</h2>
      const [state, setstate] = useState(initialState);
      <hr />
      <h2>UseEffect</h2>
     Detect changes and do anything
     <hr />
     <h2>UseRef</h2>
     <UseRef />
     <hr />
     <UseCallBack />
     <hr />
     <UseReducer />
     <br /><br /> */}
      <h1>HEADER</h1>
     <nav className='navbar'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/ref'>UseRef</Link>
        <Link className='link' to='/callback'>UseCallback</Link>
        <Link className='link' to='/reducer'>UseReducer</Link>
     </nav>


     <Routes>
          <Route path='/ref' element={ <UseRef /> } />
          <Route path='/reducer' element={ <UseReducer /> } />
          <Route path='/callback' element={ <UseCallBack /> } />
          <Route path='/' element={ <Presentation /> } />
      </Routes>

      <h1>FOOTER</h1>
    </div>
  );
}

export default App;
