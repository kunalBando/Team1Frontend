import React, { useState } from 'react'
import { Link } from "react-router-dom";

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SearchResult from './SearchResult';


  
export default function Header() {


  const [searchResults, setSearchResults] = useState([]);  
  const [searchTerm, setSearchTerm] = useState('');
  
  async function SearchAPI() {
    const response = await axios.get(`https://featuremarketplacewebapiforcrud.azurewebsites.net/api/Entity/GetEntityByEntityName/${searchTerm}`);
    setSearchResults(response.data);
    
    
  }

  function HandleInputChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">Feature Marketplace</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/NewFeature">Add Feature</Nav.Link>
                <Nav.Link href="/csvupload">Upload Feature</Nav.Link>
                <Nav.Link href="/MyFavorites">Favourites</Nav.Link>
                <Nav.Link href="/MyFeature">My Feature</Nav.Link>
                <Nav.Link href="/SearchUser">Custom Search</Nav.Link>


              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={HandleInputChange}
                />
                <Link to="searchresult" >
                  <Button variant="outline-success" onClick={SearchAPI} >Search</Button>
                  </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      
      

        {searchResults.length > 0 && <SearchResult data={searchResults} />}

        {/* <SearchResult data={searchResults}/> */}
      </>
      
    
  )
}
