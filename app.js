const colsConfig = [
  {
    label: 'header 1',
  },
  {
    label  : 'invitations',
    columns: [
      {label: 'EXPENSE_REPORT.MATIN'},
      {label: 'EXPENSE_REPORT.MIDI'},
      {label: 'EXPENSE_REPORT.SOIR'}
    ]
  },
  {
    label  : 'restaurant',
    columns: [
      {label: 'EXPENSE_REPORT.MATIN'},
      {label: 'EXPENSE_REPORT.MIDI'},
      {label: 'EXPENSE_REPORT.SOIR'}
    ]
  }
]

const generateColumns = (colsConfig) => {
  return colsConfig.reduce((acc, col) => {
    if (col.columns) {
      acc.push({label: col.label});
      for (let i = 0; i < col.columns.length - 1; i++) {
        acc.push({})
      }
      acc.push(generateColumns(col.columns))
    } else {
      acc.push({label: col.label})
    }
    return acc
  }, [])
}
/*console.log(generateColumns(colsConfig));*/
const extractColumns = (columns) => {
  return columns.reduce((acc, col) => {
    if (Array.isArray(col)) {
      acc.push(col)
    }
    return acc.flat()
  }, [])
}

const filterChildColumns = (columns) => {
  return columns.filter((col) => {
    if (!Array.isArray(col)) {
      return col
    }
  })
}
console.log(extractColumns(generateColumns(colsConfig)));
console.log(filterChildColumns(generateColumns(colsConfig)));
/*
console.log(generateColumns(colsConfig));
*/
