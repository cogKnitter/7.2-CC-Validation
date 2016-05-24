import React from 'react'
import Validator from 'validator'

export default React.createClass({
  onHandleCardNumChange(e){
    // if card number not entered correctly add error class
  },
  onHandleExpDateChange(e){
    // if date before today add error class
  },
  onHandleCvvChange(e){
    // if CVV not complete (3 nums) add error class
  },
  onHandleCardNameChange(e){
    // if name less than 3 chars add error class
  },
  render() {
    return (
      <form>
        <div>
          <input className="card__num" type="number" placeholder="XXXXXXXXXXXXXXXX" onChange={this.onHandleCardNumChange}/>
          <input className="exp__date" type="date" placeholder="YYYY-MM-DD" min="2016-05-31" onChange={this.onHandleExpDateChange}/>
          <input className="cvv__num" type="number" placeholder="CVV" max="999" onChange={this.onHandleCvvChange}/>
          <input className="card__name" type="text" placeholder="Full Name" onChange={this.onHandleCardNameChange}/>
        </div>
      </form>
    )
  }
})
