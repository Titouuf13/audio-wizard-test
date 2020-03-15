import React from 'react';
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import styled from 'styled-components';

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 230px;
  z-index: 1;
  top: 12em;
  background-color: #999;
  overflow-x: hidden;
  padding-top: 10px;
`;

export default function SideBarLeft() {
    
    return (
        <StyledSideNav>
            <Nav class="mr-auto">
                <br/>
                <Nav.Item>
                    <Button variant="light">
                        <Nav.Link href="/premiere-visite">1ere visite</Nav.Link>
                    </Button>
                </Nav.Item>
                <br/>
                <Nav.Item>
                    <Button variant="light">
                        <Nav.Link href="/adaptation">Adaptation</Nav.Link>
                    </Button>
                </Nav.Item>
                <br/>
                <Nav.Item>
                    <Button variant="light">
                        <Nav.Link href="/test_router">Third Link</Nav.Link>
                    </Button>
                </Nav.Item>
            </Nav>
        </StyledSideNav>
    );
}