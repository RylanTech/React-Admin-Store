import { Container, Nav, Navbar, Stack } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function Home() {

    return(
        <>
        <Navbar variant="dark">
          <Container>
              <img style={{width: "80px", height: "75px", margin: "5px"}} src={"https://graphicsfamily.com/wp-content/uploads/2022/02/MODERN-3D-LOGO-MOCKUP.jpg"}/>
              <p style={{color: "white", margin: "20px"}}>Amazing Products!</p>
              <Nav className="me-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">All Products</Link>
              <Link to="/tablets" className="nav-link">Tablets</Link>
              <Link to="/phones" className="nav-link">Phones</Link>
              <Link to="/tvs" className="nav-link">TVs</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/search" className="nav-link">Search</Link>
              </Nav>
          </Container>
        </Navbar>
        <Stack gap={3} className="col-md-10 mx-auto mt-3">
          <Outlet />
        </Stack>
        <footer>
          <center>
            <div className="f">
              <p className="wt">
                Amazing Products!
                <br/>
                Web designer: Rylan Workman
              </p>
            </div>
          </center>
        </footer>
      </>
    )
}
export default Home