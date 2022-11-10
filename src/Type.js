import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { ProductContext } from "./ProductContext"
import { Card, Container, Row } from 'react-bootstrap'

function Tablets() {
    let urlTag = document.location.pathname.split('/')[1]
    let type = urlTag.split("")
    type.pop()
    type = type.join("")
    console.log(type)

    function list(products) {
        if (products === undefined) {
          return
        } else {
          return products.map((pro) => {
            if (pro.type === type) {
                return (
                    <Card key={pro.id} style={{ width: '17rem', margin: "10px", display: 'inline-block', backgroundColor: "rgb(100, 200, 150)"}}>
                    <Card.Img variant="top" src={pro.img} />
                    <Card.Body>
                        <Card.Title>{pro.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${pro.price}</Card.Subtitle>
                        <Link to={`/products/${pro.id}`} className="btn btn-primary" >View more info</Link>
                    </Card.Body>
                    </Card>
                )
            } 
          })
          }
        }

      return (
        <>
        <Link className="btn btn-primary mx-3 w-25" to={"/add"}>Create new product</Link>
        <h1 style={{color: "white"}}>Products</h1>
        <Container>
          <Row className="g-4 d-flex align-items-stretch">
            <div className='col-9'>
            <ProductContext.Consumer>
                {({products}) => (
                        list(products)
                    )}
          </ProductContext.Consumer>
            </div>
            <div className='col-3'>
              <Outlet/>
            </div>
          </Row>
        </Container>
        <Container className='w-25'>
        </Container>
        </>
      )
}
export default Tablets