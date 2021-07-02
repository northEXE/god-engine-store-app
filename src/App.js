import React from 'react';
import Login from './views/login';
import 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Login/>
      </div>
    )
  }
}

export default App;
