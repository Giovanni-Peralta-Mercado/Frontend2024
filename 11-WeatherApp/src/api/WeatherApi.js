export const getWeather = async () => {
    const key = "dddee20504cc4d43a0e221216241205"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=yes`
    const response = await fetch(url)
    const weather = await response.json()

    return weather
}