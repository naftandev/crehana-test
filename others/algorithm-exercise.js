const checkChange = (changeNeeded, changeAvailable) => {
  let amount = 0
  let index = 0

  do {
    amount = amount + changeAvailable[index]
    index++
  } while (amount < changeNeeded)

  if (amount === changeNeeded) {
    return index
  } else {
    return null
  }
}

const tickets = (peopleMoney = []) => {
  if (!peopleMoney.length) return console.log('No hay entradas por vender')

  const TICKET_PRICE = 25
  const changeAvailable = []

  for (const money of peopleMoney) {
    if (money === TICKET_PRICE) changeAvailable.push(money)

    if (money > TICKET_PRICE) {
      const changeNeeded = money - TICKET_PRICE

      const change = checkChange(changeNeeded, changeAvailable)

      if (change === null) {
        return console.log(`No, Vania no puede vender las entradas solicitadas ya que no tiene billetes suficientes para dar $${changeNeeded} dólares de cambio/vuelto.`)
      } else {
        changeAvailable.splice(0, change)
      }

      changeAvailable.push(money)
    }
  }

  return console.log(`Si, Vania si puede vender las entradas solicitadas`)
}

tickets([25, 25, 50])
tickets([25, 100])
tickets([25, 25, 50, 50, 100])
