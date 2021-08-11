import React from 'react';
import {Switch , Route} from 'react-router-dom';
import routes from './routes';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
    <Switch>
      {
        routes.map(route =><Route key={Math.random()} {...route}/>)
      }
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
