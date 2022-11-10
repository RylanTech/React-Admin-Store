import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from "./ProductContext"
import { Card, Container, Row } from 'react-bootstrap'

function ListProducts() {

  function list(products) {
    if (products === undefined) {
      return
    } else {
      return products.map((pro) => {
        return  (
        <Card style={{ width: '16rem', margin: "10px", display: 'inline-block', backgroundColor: "rgb(100, 200, 150)"}}>
          <Card.Img variant="top" src={pro.img} />
          <Card.Body>
            <Card.Title>{pro.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">${pro.price}</Card.Subtitle>
            <Link to={`/products/${pro.id}`} className="btn btn-primary" >View more info</Link>
          </Card.Body>
        </Card>
      )
      })
      }
    }

  return (
    <>
    <Link className="btn btn-primary mx-3 w-25" to={"/add"}>Create new product</Link>
    <h1 style={{color: "white"}}>Products</h1>
    <Container>
      <Row>
        <div className='col-8'>
          <ProductContext.Consumer>
          {({products}) => (
                list(products)
              )}
          </ProductContext.Consumer>
        </div>
        <div className='col-4'>
          <Outlet/>
        </div>
      </Row>
    </Container>
    <Container className='w-25'>
    </Container>
    </>
  )
}

export default ListProducts