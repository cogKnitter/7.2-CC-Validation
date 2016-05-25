import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      numInvalid: false,
      dateInvalid: false,
      cvvInvalid: false,
      nameInvalid: false
    }
  },
  onHandleCardNumChange(e){
    // if card number not entered correctly add error class
    if(!Validator.isCreditCard(e.target.value)){
      this.setState({
        numInvalid: true
      })
    }else{
      this.setState({
        numInvalid: false
      })
    }
  },
  onHandleExpDateChange(e){
    // if date before today add error class
    if(!Validator.isAfter(e.target.value)){
      this.setState({
        dateInvalid: true
      })
    }else{
      this.setState({
        dateInvalid: false
      })
    }
  },
  onHandleCvvChange(e){
    // if CVV not complete (3 nums) add error class
    if(!Validator.isLength(e.target.value, { min: 3, max: 3})){
      this.setState({
        cvvInvalid: true
      })
    }else{
      this.setState({
        cvvInvalid: false
      })
    }
  },
  onHandleCardNameChange(e){
    // if name less than 3 chars add error class
    if(!Validator.isLength(e.target.value, { min: 3, max: 300})){
      this.setState({
        nameInvalid: true
      })
    }else{
      this.setState({
        nameInvalid: false
      })
    }
  },
  render() {
    return (
      <form className="credit__card">
        <div className={this.state.isInvalid? "inputs__invalid" : ""}>
          <input className={this.state.numInvalid? "card__number single__input--invalid" : "card__number single__input"} type="text" placeholder="XXXXXXXXXXXXXXXX" maxLength="16" onChange={this.onHandleCardNumChange}/> <h5 className="card__text">Exp. Date</h5>
          <input className={this.state.dateInvalid? "single__input--invalid" : "single__input"} type="date" onChange={this.onHandleExpDateChange}/>
          <input className={this.state.nameInvalid? "holder__name single__input--invalid" : "holder__name single__input"} type="text" placeholder="Full Name" onChange={this.onHandleCardNameChange}/>          <input className={this.state.cvvInvalid? "cvv_number single__input--invalid" : "cvv_number single__input"} type="number" placeholder="CVV" onChange={this.onHandleCvvChange}/>

        </div>
      </form>
    )
  }
})
