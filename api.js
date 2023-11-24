export async function getFlightData() {
  const url = 'https://raw.githubusercontent.com/Javiuty/skyscanner-scrapper/master/flights.json'

  const response = await fetch(url)

  return await response.json()
}