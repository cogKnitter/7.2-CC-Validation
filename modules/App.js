import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      numInvalid: false,
      dateInvalid: false,
      cvvInvalid: false,
      nameInvalid: false,
      formInvalid: false
    }
  },
  checkStates(){
    // if any state is true set formInvalid to true
    if((this.state.numInvalid === true) || (this.state.dateInvalid === true) || (this.state.cvvInvalid === true) || (this.state.nameInvalid === true)){
        this.setState({
          formInvalid: true
        })
    }else{
      this.setState({
        formInvalid: false
      })
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
    this.checkStates();
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
    this.checkStates();
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
    this.checkStates();
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
    this.checkStates();
  },
  render() {
    return (
      <form className={this.state.formInvalid? "credit__card--invalid" : "credit__card"}>
        <div>
          <input className={this.state.numInvalid? "card__number single__input--invalid" : "card__number single__input"} type="text" placeholder="XXXXXXXXXXXXXXXX" maxLength="16" onChange={this.onHandleCardNumChange}/> <h5 className="card__text">Exp. Date</h5>
          <input className={this.state.dateInvalid? "single__input--invalid" : "single__input"} type="date" onChange={this.onHandleExpDateChange}/>
          <input className={this.state.nameInvalid? "holder__name single__input--invalid" : "holder__name single__input"} type="text" placeholder="Full Name" onChange={this.onHandleCardNameChange}/>          <input className={this.state.cvvInvalid? "cvv_number single__input--invalid" : "cvv_number single__input"} type="number" placeholder="CVV" onChange={this.onHandleCvvChange}/>

        </div>
      </form>
    )
  }
})
