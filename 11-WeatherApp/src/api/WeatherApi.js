export const getWeather = async (city) => {
    const key = "dddee20504cc4d43a0e221216241205"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes&lang=es`
    const response = await fetch(url)
    const weather = await response.json()

    return weather
}