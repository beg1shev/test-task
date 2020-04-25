import React, {Component} from 'react'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: props.info,
      dates: props.dates}
    this.setChecked = this.setChecked.bind(this)
    this.getRelevantData = this.getRelevantData.bind(this)
  }
  
  getRelevantData() {
    let result = []
    const stateInfo = this.state.info
    for (let i = 0; i < stateInfo.length; i++){
      const cat = stateInfo[i].category
      console.log(stateInfo[i])
      for (let j = 0; j < stateInfo[i].dates.length; j++){
        if (stateInfo[i].dates[j].checked){
          let objToPush = {
            date: stateInfo[i].dates[j].date,
            category: cat,
            price: stateInfo[i].dates[j].priceAfter
          }
          result.push(objToPush)
        }
      }
    }
    console.log('res', result)
      
  }

  setChecked(id) {
    const checkBox = document.getElementById(id)
    const lenDates = this.props.dates.length
    const objectNum = Math.trunc(id / lenDates)
    console.log(objectNum)
    const newInfo = this.state.info
    newInfo[objectNum].dates[id % lenDates].checked = checkBox.checked
    
    this.setState({info: newInfo})
    console.log('changed state', this.state)
  }

  printContent(cell){
    const cellOut = cell.map(date => {
      const objNumber = Math.trunc(date.id / this.state.dates.length)
      const dateNumber = date.id % this.state.dates.length
      let imgShow
      if (date.priceBefore < date.priceAfter){
        imgShow = 'green.png'
      }
      else if (date.priceBefore > date.priceAfter){
        imgShow = 'red.png'
      }
      else {
        imgShow = 'blue.png'
      }
      const cellStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
      const checkBoxStyle = {
        width: '30px',
        height: '30px'
      }
      return (
        <td key={date.id}>
          <div style={cellStyle}>
            <div>
              <input id={date.id} type='checkbox'  style={checkBoxStyle} onChange={() => this.setChecked(date.id)}/>
            </div>
            <div>
              <p>Price Before: {date.priceBefore}</p>
              <p>Price After: {date.priceAfter}</p>
            </div>
            <div>
              <img src={imgShow} alt="arrowImage" width='30px' height='30px'></img>
            </div>
          </div>
        </td>
      )
    })
    return cellOut
  }
  
  render() {
    const headDates = this.props.dates.map( date => <th key={date} scope='col'>{date}</th>)
    const cellsData = this.props.info.map( cellInfo => {
    return (
      <tr key={cellInfo.id}>
        <th scope='row'>{cellInfo.category}</th>
        {this.printContent(cellInfo.dates)}
      </tr>
    )
  })

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              {headDates}
            </tr>
          </thead>
          <tbody>
            {cellsData}
          </tbody>
        </table>
        <button type='button' className="btn btn-lg btn-primary" onClick={this.getRelevantData}>Apply</button>
      </div>
    )
  }
}

export default Table