import React, { Component } from 'react';
import Route from './components/routes/route'
import ImageUpload from './components/imageupload';
import Navigation from './components/navbar/NavBar'
class App extends Component {
  render() {
    
    return (
      <div className="App">
          <Navigation />
          <Route />
          {/* <ImageUpload /> */}
      </div>
    );
  }
}

export default App;
