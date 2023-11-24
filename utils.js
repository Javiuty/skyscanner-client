export function simplifiedInfo(data) {
  return data.filter((row, i) => {
    if (row.price !== data[i + 1]?.price) {
      return row
    }
  })
}