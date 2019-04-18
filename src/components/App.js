
import React, { Component }  from 'react'
import logo                  from '../assets/logo.svg'
import '../css/App.css'
import Establishment         from './establishments/Establishment'
import {base} from '../base';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pseudo  : "Inconnu",
      searchStringUser: "",
      establishments : [
        {
            id          : "0890786GH",
            name        : "Biberium",
            description : "Un super bar karaoké"
        },
        {
            id          : "0890786GD",
            name        : "Brew Dogs",
            description : "Un super bar à bière"
        },
        {
            id          : "MJLMH0389",
            name        : "Batonier",
            description : "Un super bar de fin de soirée"
        }
      ],
    }
  }
  
  componentDidMount() {
    this.firebase = base.syncState('establishments', {
      context: this,
      state: 'establishments',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.firebase);
  }


  randomPseudo = () => {
    let randomPseudo    = ""
    const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const size          = Math.floor(Math.random() * 10) + 5
    for( let i=0; i < size; i++ ){
        randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    this.setState({
        pseudo : randomPseudo
    })
  }

  handleChange(e){
    this.setState({searchStringUser: e.target.value});
  }

  test(){
    let newEstablishment = this.state.establishments
    newEstablishment.push({
      id          : Date.now(),
      name        : "Truc",
      description : "Un super bar de fin de soirée"
    })
    this.setState({establishments: newEstablishment})
  }


  render() {

    console.log(this.state);

    const establishmentFilter = this.state.establishments.filter((searchText) => {
      let search = searchText.name + " " + searchText.description;
      return search.toLowerCase().match(this.state.searchStringUser);
    })  

    const listEstablishment = this.state.establishments.map( (establishment) => {  
      return (
        <Establishment
          key={ establishment.id }
          establishment={ establishment }
        />
        )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
          <p> 
            <a onClick={ this.randomPseudo } >Changer le pseudo !</a> 
          </p>
          <button onClick={()=>this.test()}>test</button>
          <div>
            <input
                type="text"
                placeholder="search"
                value={this.state.searchStringUser}
                onChange={this.handleChange.bind(this)}
            />
          </div>

            Learn React
        </header>

        <div className="App-intro">
          { listEstablishment }
        </div>

      </div>
    );
  }
}

export default App;
