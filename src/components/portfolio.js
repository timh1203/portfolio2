import React from 'react'
import styled from 'styled-components'
// import Img from 'gatsby-image'
// import { projectsData } from '../assets'
import { Wanderlustoria } from './'

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <H1>Portfolio</H1>
        <Hr />

        <Div1>
          <Wanderlustoria />
        </Div1>
      </section>
    )
  }
}

const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const H1 = styled.h1`
`
const Hr = styled.hr`
`

export default Portfolio
