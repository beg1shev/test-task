import React from 'react'
import Table from './Table'

function App() {
  const dates = [
    '24.04.2020',
    '25.04.2020',
    '26.04.2020',
    '27.04.2020'
  ]

  const categories = [
    'Luxury',
    'Standard for two',
    'Standard for three',
  ]

  const cellInfo = []
  let dateInfo = []
  let infoId = 0
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < dates.length; j++) {
      const infoToPush = {
        id: infoId,
        date: dates[j],
        checked: false,
        priceBefore: Math.floor(Math.random() * 2000),
        priceAfter: Math.floor(Math.random() * 2000)
      } 
      infoId++
      dateInfo.push(infoToPush)
    }
    
    const objToPush = {
      id: i,
      category: categories[i],
      dates: dateInfo 
    }
    cellInfo.push(objToPush)
    dateInfo = []
  }

  return (
    <Table dates={dates} info={cellInfo}/>
  )
}

export default App;
