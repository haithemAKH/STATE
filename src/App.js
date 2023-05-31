import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Component/Profile';
class App extends Component {

  state ={
    showPerson: false,
    
  }
 
  handleToggle = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  render() {
  
    return (
     //NAVBAR ET L IMPORTATION DU FICHIER PROFILE DANS L APP
      <div>
          <div>
        <Navbar className='nav' bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </div>

        <div className='prf'>
        <button onClick={this.handleToggle}>show my NEW LIFE</button>
         {this.state.showPerson?<Profile/>:null}
        </div>
        
      </div>
    );
  }
}

export default App;