import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProduct] = useState()

    useEffect(() => {
        async function getProduct() {
          await refreshProducts()
        }
        getProduct()
      }, []);

    function refreshProducts() {
        return axios.get("http://localhost:3001/products")
          .then(response => {
            setProduct(response.data)
          })
      }

    function getProduct(id) {
        return axios.get(`http://localhost:3001/products/${id}`)
          .then(response =>
            new Promise((resolve) => resolve(response.data))
          )
          .catch((error) =>
            new Promise((_, reject) => reject(error.response.statusText))
          )
      }

    function addProduct(product) {
        return axios.post("http://localhost:3001/products", product)
        .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
        })
      }
    
      function updateProduct(product) {
        return axios.put(`http://localhost:3001/products/${product.id}`, product)
        .then(response => {
          refreshProducts()
          return new Promise((resolve) => resolve(response.data))
        })
      }

    function deleteProduct(id) {
        return axios.delete(`http://localhost:3001/products/${id}`)
        .then(refreshProducts())
    }

    function searchProduct(query) {
      return axios.get(`http://localhost:3001/products/?q=${query}`)
      .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
        })
    }

    function filterProducts(type) {
      return axios.get(`http://localhost:3001/products/?type=${type}`)
      .then(response => {
        refreshProducts()
        return new Promise((resolve) => resolve(response.data))
        })
    }
    
    return (
        <ProductContext.Provider
          value={{
            products,
            getProduct,
            addProduct,
            updateProduct,
            deleteProduct,
            refreshProducts,
            searchProduct,
            filterProducts
          }}
        >
          {props.children}
        </ProductContext.Provider>
      )
}