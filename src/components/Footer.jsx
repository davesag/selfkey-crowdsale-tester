import React from 'react'

// import { Grid, Row, Col, Image } from 'react-bootstrap'

const year = new Date().getFullYear()

const Footer = () => (
  <footer>
    <p>©{year} SelfKeyFoundation</p>
  </footer>
)

export default Footer
