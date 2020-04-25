import React from 'react'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import Table from './Table'

function App() {
  const cellInfo = [
    { 
      id: 1,
      category: 'Luxury',
      dates: [
        { 
          id: 0,
          date: '24.04.2020',
          checked: false,
          priceBefore: 1200,
          priceAfter: 1500
        },
        { 
          date: '25.04.2020',
          id: 1,
          checked: false,
          priceBefore: 900,
          priceAfter: 500
        },
        { 
          date: '26.04.2020',
          id: 2,
          checked: false,
          priceBefore: 1300,
          priceAfter: 1300
        }
      ]
    },
    { 
      id: 2,
      category: 'Standard for two',
      dates: [
        { 
          date: '24.04.2020',
          id: 3,
          checked: false,
          priceBefore: 1200,
          priceAfter: 1500
        },
        { 
          date: '25.04.2020',
          id: 4,
          checked: false,
          priceBefore: 900,
          priceAfter: 500
        },
        { 
          date: '26.04.2020',
          id: 5,
          checked: false,
          priceBefore: 1300,
          priceAfter: 1300
        }
      ]
    },
    { 
      id: 3,
      category: 'Standard for three',
      dates: [
        { 
          date: '24.04.2020',
          id: 6,
          checked: false,
          priceBefore: 1200,
          priceAfter: 1500
        },
        { 
          date: '25.04.2020',
          id: 7,
          checked: false,
          priceBefore: 900,
          priceAfter: 500
        },
        { 
          date: '26.04.2020',
          id: 8,
          checked: false,
          priceBefore: 1300,
          priceAfter: 1300
        }
      ],
    }
  ]

  const dates = [
    '24.04.2020',
    '25.04.2020',
    '26.04.2020'
  ]

  return (
    <Table dates={dates} info={cellInfo}/>
  )
}

export default App;



// const data = [{
  //   category: 'Luxury',
  //   name: <div>Hello</div>,
  //   price: 120
  // }, {
  //   category: 'Standard for two',
  //   name: "Product2",
  //   price: 80
  // }, {
  //   category: 'Standard for three',
  //   name: "Product3",
  //   price: 150
  // }]
  // const dates = {
  //   first: '23.04.20', 
  //   second: '24.04.20',
  //   third: '25.04.20'}
// <BootstrapTable data={ data }>
//       <TableHeaderColumn dataField='category' isKey={ true } dataAlign='center'>Category\Date</TableHeaderColumn>
//       <TableHeaderColumn dataField='name' dataAlign='center'>{dates.first}</TableHeaderColumn>
//       <TableHeaderColumn dataField='price' dataFormat={this.priceFormatter} headerAlign='center' dataAlign='center'>{dates.second}</TableHeaderColumn>
//       <TableHeaderColumn dataField='price' headerAlign='center' dataAlign='center'>{dates.third}</TableHeaderColumn>
//     </BootstrapTable>