import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import axios from 'axios';
import SelectDate from './components/select_date';
import ResponseList from './components/Response_list';

class App extends Component{
  constructor()
  {
      super();
      this.state={Links:[]}
      //this.handleClick = this.handleClick.bind(this);

      //calling URL to get the result
      /*axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=r3ykQa9ENk97n0YXgRZLdZY7JZ0LLyFSpkQNF1BW')
      ,Links=>{
        this.setState({Links})
      }
      =========
      axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=r3ykQa9ENk97n0YXgRZLdZY7JZ0LLyFSpkQNF1BW')
      .then(function (response) {
        this.setState({Links:response});
      });*/
  }
  handleClick(e) {
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=r3ykQa9ENk97n0YXgRZLdZY7JZ0LLyFSpkQNF1BW')
    .then((response)=> {      
      var MyData=response.data.near_earth_objects;
      console.log('My Response:', MyData["2015-09-07"]);
      this.setState({Links:MyData})
      //console.log('check::',MyData["2015-09-07"].length);
    } )   
  }

  render(){
    return(
      <div> 
      <h4>Enter Date in YYYY-MM-DD format to Retrieve a list of Asteroids approached to Earth on that date:</h4>
      <SelectDate/>
      <button onClick={(e) => this.handleClick(e)}>
        Go
      </button>
      <ResponseList Links={this.state.Links}/>
    </div>
    )
  }
}



ReactDOM.render(<App/>,document.querySelector('.container'));