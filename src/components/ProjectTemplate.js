import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaLaptop, FaYoutube, FaGithub } from 'react-icons/fa'

const ProjectTemplate = props => (
  <Div>
    <A1 href={props.demo} target="_blank">
      <Img1 fluid={props.img} />
    </A1>
    <H1a>{props.name}</H1a>
    <P1>{props.desc}</P1>

    <Div1>
      <A1 href={props.demo} target="_blank">
        <FaLaptop1 />
      </A1>
      {props.video ? (
        <A1 href={props.video} target="_blank">
          <FaYoutube1 />
        </A1>
      ) : (
        ''
      )}
      <A1 href={props.github} target="_blank">
        <FaGithub1 />
      </A1>
    </Div1>
  </Div>
)

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.textColor};
  border-radius: 2px;
  min-height: 400px;
  width: 28%;
  margin: 1%;
  padding: 1%;
  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 400px) {
    width: 100%;
    padding: 5%;
  }
`
const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
`
const H1a = styled.h1`
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`
const FaLaptop1 = styled(FaLaptop)`
  color: ${props => props.theme.socialIconColor};
  border-radius: 2px;
  width: 25px;
  height: 25px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px ${props => props.theme.textColor};
  }
`
const FaYoutube1 = styled(FaYoutube)`
  color: ${props => props.theme.socialIconColor};
  border-radius: 2px;
  width: 25px;
  height: 25px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px ${props => props.theme.textColor};
  }
`
const FaGithub1 = styled(FaGithub)`
  color: ${props => props.theme.socialIconColor};
  border-radius: 2px;
  width: 25px;
  height: 25px;
  margin: 0 2rem;
  :hover {
    box-shadow: 3px 3px 3px ${props => props.theme.textColor};
  }
`
const P1 = styled.p``
const A1 = styled.a`
  color: ${props => props.theme.textColor};
`
const Img1 = styled(Img)`
  border-radius: 3px;
`

export default ProjectTemplate
