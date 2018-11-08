import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';

const Header = () => (
  <Div>
    <Div1>
      <FaGithub1 />
      <FaLinkedin1 />
      <FaTwitter1 />
      <FaMedium1 />
      {/* <FaFreeCodeCamp1 /> */}
    </Div1>

    <Div2>
      <H1>Timothy Hoang</H1>
      <H6>Full Stack Developer</H6>
      <H6>Houston, Texas</H6>
    </Div2>

    <Div3>
      <Link1 to="#" activeClassName="active">Home</Link1>
      <Link1 to="#">About</Link1>
      <Link1 to="#">Portfolio</Link1>
      <Link1 to="#">Contact</Link1>
    </Div3>
  </Div>
)

const Div = styled.div`
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`
const Div1 = styled.div`
  margin-bottom: 1rem;
  flex: 1 1 30%;
  line-height: 2;
`
const Div2 = styled.div`
  margin-bottom: 1rem;
  flex: 1 1 40%;
`
const Div3 = styled.div`
  margin-bottom: 1rem;
  flex: 1 1 30%;
`
const Link1 = styled(Link)`
  font-size: 2rem;
  margin: 0 1rem;
  font-family: 'Quicksand';
  text-decoration: none;
  border-radius: 5px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid white;
  border-right: 2px solid white;
  padding: 0 0.5rem;
  color: black;
  :hover {
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    border-left: 2px solid black;
    border-right: 2px solid black;
  }
`
const H1 = styled.h1`
  margin: 1rem 0;
  text-shadow: 2px 2px 1px gray;
`
const H6 = styled.h6`
  font-weight: 500;
  margin: 1rem 0;
`
const FaGithub1 = styled(FaGithub)`
  color: white;
  background: #24292E;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px black;
  }
`
const FaLinkedin1 = styled(FaLinkedin)`
  color: white;
  background: #0077B5;
  border-radius: 2px;
  width: 40px;
  height: 40px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px black;
  }
`
const FaTwitter1 = styled(FaTwitter)`
  color: white;
  background: #1C9BEA;
  border-radius: 2px;
  width: 41px;
  height: 41px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px black;
  }
`
const FaMedium1 = styled(FaMedium)`
  color: #13C164;
  background: #F7F7F7;
  border-radius: 2px;
  width: 47px;
  height: 47px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px black;
  }
`
// const FaFreeCodeCamp1 = styled(FaFreeCodeCamp)`
//   color: white;
//   background: #006100;
//   border-radius: 2px;
//   width: 50px;
//   height: 50px;
//   margin: 0 2rem;
//   :hover {
//     box-shadow: 3px 3px 3px black;
//   }
// `

export default Header
