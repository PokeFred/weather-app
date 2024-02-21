import type { PageServerData } from './$types'

const API_KEY: string = 'dfb9f85a74d4f84c8e1f8b367a59a8ea'
const CITY: string = 'Dortmund'

export const load: PageServerData = async ({ fetch }) => {
    const g = new Promise(async (resolve, reject) => {
        try {
            const response: Response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CITY}&appid=${API_KEY}`, {
                method: 'GET',
            })
            const data: any = await response.json()

            console.log(response.status)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    })

    g

    return {}
}

// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&appid=dfb9f85a74d4f84c8e1f8b367a59a8ea

// Geocoding
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=Dortmund&appid=dfb9f85a74d4f84c8e1f8b367a59a8ea
