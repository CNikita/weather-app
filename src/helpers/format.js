export const formatTemp = (temperature) => {
  var roundedTemperature = Math.round(temperature)
  var formattedTemperature = (roundedTemperature >= 0 ? '+' : '') + roundedTemperature + '℃'
  return formattedTemperature
}

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const day = date.getDay()
  const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const dayOfMonth = date.getDate()
  const month = date.getMonth()
  let hours = date.getHours()
  if (hours < 10) hours = '0' + hours
  let minutes = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  const formattedDate = `${weekdays[day]} ${dayOfMonth} ${months[month]} ${hours}:${minutes}`

  return formattedDate
}