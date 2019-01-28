import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import { links } from '../assets/'

const Header = (props) => (
  <Div>
    <Div1>
      <a
        href={links.github.url}
        alt={links.github.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub1 />
      </a>
      <a
        href={links.linkedIn.url}
        alt={links.linkedIn.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin1 />
      </a>
      <a
        href={links.twitter.url}
        alt={links.twitter.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter1 />
      </a>
      <a
        href={links.medium.url}
        alt={links.medium.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium1 />
      </a>
      {/* <a
        href={links.freeCodeCamp.url}
        alt={links.freeCodeCamp.alt}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFreeCodeCamp1 />
      </a> */}
    </Div1>

    <Div2>
      <H1>Timothy Hoang</H1>
      <H6>Full Stack Developer</H6>
      <H6>Houston, Texas</H6>
    </Div2>

    <Div3>
      {/* <Link1 to="#intro">Home</Link1> */}
      <Link1 to="#about">About</Link1>
      <Link1 to="#portfolio">Portfolio</Link1>
      <Link1 to="#contact">Contact</Link1>
      {/* <Span1 role="img" aria-label="dark">🌚</Span1> */}
      <input className="tgl tgl-skewed" onClick={() => props.lightToggler()} id="cb3" type="checkbox" />
      <label className="tgl-btn" data-tg-off="DARK" data-tg-on="LIGHT" htmlFor="cb3"></label>
      {/* <input onClick={() => props.lightToggler()} className="tgl tgl-light" id="cb1" type="checkbox" />
      <label className="tgl-btn" htmlFor="cb1"></label> */}
      {/* <Span1 role="img" aria-label="light">🌞</Span1> */}
    </Div3>
  </Div >
)

const Div = styled.div`
  border-bottom: ${props => props.theme.separatorColor};
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex: 1 1 30%;
`
// const Div4 = styled.div`
// `
// const Span1 = styled.span`
//   font-size: 2rem;
// `
const Link1 = styled(Link)`
  font-size: 2rem;
  margin: 0 1rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.textColor};
  text-decoration: none;
  border-radius: 5px;
  padding: 0 0.5rem;
  border-top: ${props => props.theme.slateBorder};
  border-bottom: ${props => props.theme.slateBorder};
  border-left:${props => props.theme.whiteBorder};
  border-right:${props => props.theme.whiteBorder};
  :hover {
    border-top:${props => props.theme.whiteBorder};
    border-bottom:${props => props.theme.whiteBorder};
    border-left: ${props => props.theme.slateBorder};
    border-right: ${props => props.theme.slateBorder};
  }
`
const H1 = styled.h1`
  margin: 1rem 0;
  color: ${props => props.theme.textColor};
`
const H6 = styled.h6`
  font-weight: 500;
  margin: 1rem 0;
  color: ${props => props.theme.textColor};
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