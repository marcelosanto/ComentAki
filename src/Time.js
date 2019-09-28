const Time = ({ timestamp }) => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = '0' + date.getMinutes()
  const seconds = '0' + date.getSeconds()
  const day = '0' + (date.getDay() + 22)
  const month = '0' + (date.getMonth() + 1)
  const year = date.getFullYear()
  return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)} em: ${day.substr(-2)}/${month.substr(-2)}/${year} `
}

export default Time