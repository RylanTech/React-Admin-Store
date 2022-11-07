import { useContext, useEffect, useState } from "react"
import { Alert, Button, Card, Spinner } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "./ProductContext"

function ProductDetails() {
    let params = useParams()
    let navigate = useNavigate()
  
    let { getProduct, deleteProduct, refreshProducts } = useContext(ProductContext)
    let [ product, setProduct ] = useState()
    let [ error, setError ] = useState()
  
  useEffect(() => {
    setError(null)
    async function fetch() {
      await getProduct(params.productId)
        .then((product) => setProduct(product))
        console.log(product)
        .catch((message) => setError(message))
    }
    fetch()
  }, [params.productId, getProduct])

  function errorMessage() {
    return <Alert variant="danger">There was an error attempting to load this product: {error}</Alert>
  }

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
    refreshProducts()
  }


  function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }
  
  function productCard() {
    let { id, name, price, tier, isDigital, description, type, img} = product
    return (
      <Card className="align-self-start">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
          <Card.Text>
                Price: ${price}
                <br/>
                Product teir: {tier}
                <br/>
                Is the product digital: {isDigital}
                <br/>
                Product type: {type}
                <br/>
                Description: <br/> {description}
          </Card.Text>
          <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
          <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
        </Card.Body>
      </Card>
    )
  }
  if (error) return errorMessage()
  if (product === undefined) return loading()
  return product.id !== parseInt(params.productId) ?  loading() : productCard()
}
export default ProductDetails