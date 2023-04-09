// import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';
import { Row } from 'react-bootstrap';

export default function RecipeList() {
// const [data, setDate] = useState({})
// useEffect(()=>{

// },[])

// const Recipe_list = async ()=> {
//   try{
//     await fetch('http://localhost:5000/api/todo/',{
//       method:'GET'
//     })
//     .then((res)=>res.json())
//     .then((value)=>{setDate(value)})

//   }catch(error){

//   }
// }

  return (
    <>
    <Row className="d-flex">
    <Card style={{ width: '500px' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Instructions</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
  
    <Card style={{ width: '500px' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Accordion>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Ingredients</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Instructions</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
    </Row>
    </>
  )

  // {
  //   data.map(()=>(

  //     <Card style={{ width: '500px' }}>
  //   <Card.Img variant="top" src={val.img} />
  //   <Card.Body>
  //     <Card.Title>{val.name}</Card.Title>
  //     <Card.Text>
  //      {val.description}
  //     </Card.Text>
  //     {/* <Button variant="primary">Go somewhere</Button> */}
  //   </Card.Body>
  //   <Accordion>
  //   <Accordion.Item eventKey="0">
  //     <Accordion.Header>Ingredients</Accordion.Header>
  //     <Accordion.Body>
  //      {val.ingredients}
  //     </Accordion.Body>
  //   </Accordion.Item>
  //   <Accordion.Item eventKey="1">
  //     <Accordion.Header>Instructions</Accordion.Header>
  //     <Accordion.Body>
  //     {val.instructions}
  //     </Accordion.Body>
  //   </Accordion.Item>
  // </Accordion>
  // </Card>
  //   ))
  // }
  
}
