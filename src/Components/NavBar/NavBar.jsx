import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
function Navy() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Memepto</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/meme">Memes</Nav.Link>
          <Nav.Link href="/crypto">Crypto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navy;
