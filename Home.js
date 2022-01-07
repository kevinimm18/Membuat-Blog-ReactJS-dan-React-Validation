// import logo from './logo.svg';
import './App.css';
import './mystyles.scss';
import React from 'react';
import Navbar from './Navbar';
import Menuhome from './Menuhome';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />



        <Menuhome />


        <footer className="footer has-background-danger-light">
          <div className="content has-text-centered mb-auto">
            <h4>
              Created with <strong>Fun</strong>.
            </h4>
          </div>
        </footer>
      </>
    );
  }
}


export default Home;
