import { useContext, useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from "./ProductContext"

function Edit() {
    let params = useParams()
    let [ product, setProduct ] = useState({
    name: "",
    description: "",
    price: "",
    id: params.productId,
    isDigital: "",
    type: "",
    img: "",
    tier: ""
  })

  let {name, description, price, id, isDigital, type, tier, img} = product
  let navigate = useNavigate()
  let { updateProduct, getProduct} = useContext(ProductContext)

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id)
        .then((product) => setProduct(product))
    }
    fetch()
  }, [id])

function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
}
          
    function handleSubmit(event) {
        event.preventDefault()
        add().then((product) =>
          navigate(`/products/${product.id}`)
        )
      }

    function add() {
        return updateProduct(product)
    }

    return (
        <Form onSubmit={handleSubmit} style={{color: "white", margin: "20px"}}>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Tier</Form.Label>
                <Form.Control type="text" name="tier" value={tier} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>{`Is it digital? (yes or no)`}</Form.Label>
                <Form.Control type="text" name="isDigital" value={isDigital} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" name="type" value={type} onChange={handleChange} />
            </Form.Group>
            <Form.Group style={{margin: "20px"}}>
                <Form.Label>Image Source</Form.Label>
                <Form.Control type="text" name="img" value={img} onChange={handleChange} />
            </Form.Group>
        <Button type="submit">Add</Button>
        </Form>
    )
}
export default Edit