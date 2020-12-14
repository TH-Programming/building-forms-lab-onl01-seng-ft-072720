import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderbands = () => {
    if (this.props.bands !== []){
      this.props.bands.map(band => {
      return(<li>{band}</li>)
    })
  }
}

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        BandsContainer
        <ul>
        {this.renderbands()}
        </ul>
        {console.log(this.props.bands)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({bands: state.bands})

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({type:"ADD_BAND", payload: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
