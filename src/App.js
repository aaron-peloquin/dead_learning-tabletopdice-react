import React, { Component, Fragment } from 'react'
import './styles.css'
import { Header, Body, Footer } from './layout/'

export default class extends Component {
  render() {
    return <Fragment>
        <Header />
        <Body />
    </Fragment>
  }
}
