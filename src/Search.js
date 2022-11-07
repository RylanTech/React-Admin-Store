import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, ListGroup, Row } from "react-bootstrap"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { ProductContext } from "./ProductContext"

function Search() {
    let { searchProduct, products, refreshProducts} = useContext(ProductContext)

    let [query, setQuery] = useState({
        search: ""
    })

    let [element, setElement] = useState()
    let { search } = query

    function handleChange(event) {
        setQuery((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
          searchProduct(search)
          .then((products) => {
            setElement(products)
          })
        }
    
    function list(elemnt) {
        if (elemnt) {
            return elemnt.map((ele) => {
                return (
                <ListGroup.Item>
                    <img src={ele.img} style={{width: "300px"}}/>
                    <div style={{display: "inline-block", margin: "10px"}}>
                    <h4>{ele.name}</h4>
                    <p className="text-muted">${ele.price}</p>
                    <Link to={`/Search/${ele.id}/edit`} className="btn btn-primary">Edit</Link>
                    </div>
                    <p>Description: <br/> {ele.description}</p>
                </ListGroup.Item>
                )
            })
        }
    }
    
    return (
        <div>
            <Form style={{color: "white"}}>
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" name="search" value={search} onChange={handleChange} />
            </Form>
            <br/>
            <Container>
                <Row>
                    <div className="col-9">
                    <ListGroup>
                        {list(element)}
                    </ListGroup>
                    </div>
                    <div className="col-3">
                        <Outlet/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Search