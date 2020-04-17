import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


function App(){
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  ///////////////////////////////VARIABLES AND STATES
const [Data, setData] = useState()
const url = "https://rickandmortyapi.com/api/character/1,183"

////////////////////////////////USE EFFECTS

useEffect(() => {
  axios.get(url).then((response) => {
    setData(response.data)
    const Data = (response.data)
    console.log(Data)

    const name1 = Data[0].name
    const status1 = Data[0].status
    const species1 = Data[0].species
    const gender1 = Data[0].gender
    const origin1 = Data[0].origin
    const photo1 = Data[0].url

    const name2 = Data[1].name
    const status2 = Data[1].status
    const species2 = Data[1].species
    const gender2 = Data[1].gender
    const origin2 = Data[1].origin
    const photo2 = Data[1].url
  })
},[])

/////////////////////////////////CREATE THE FIELDS

  return (
    <div className="App">
      <h1 className="Header">The World of Rick and Morty</h1>
      
      
      <Card className="card">
        <CardImg top width="100%" src={Data && <img src = {Data[0].image}></img>}  />
        <CardBody>
          <CardTitle>{Data && <p>{Data[0].name}</p>}</CardTitle>
          <CardSubtitle>{Data && <p>{Data[0].status}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[0].species}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[0].gender}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[0].origin.name}</p>}</CardSubtitle>
          
          <Button>Learn More About {Data && <p>{Data[0].name}</p>}  </Button>
        </CardBody>
      </Card>
    
      <Card className="card" >
        <CardImg top width="100%"/>
        <CardBody>
          <CardTitle>{Data && <p>{Data[1].name}</p>}</CardTitle>
          <CardSubtitle>{Data && <p>{Data[1].status}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[1].species}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[1].gender}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[1].gender}</p>}</CardSubtitle>
          <CardSubtitle>{Data && <p>{Data[1].origin.name}</p>}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Learn More About {Data && <p>{Data[1].name}</p>}</Button>
        </CardBody>
      </Card>

    </div>
  );
}

export default App;
