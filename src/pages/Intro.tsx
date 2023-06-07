import logo from '../logo.svg';
import '../App.css';

/*
* This is just a dummy
* This original code from creat-react-app could be adapted to some other css
*
*/

export default function Intro() {

    return (

    <div >
       <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Welcome!</p>
       </div>
    </div>


    );
  }