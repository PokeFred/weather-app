import type { PageServerData } from './$types'
import { getLocationFromCityName } from "$server/api"

export const load: PageServerData = async () => {
    getLocationFromCityName()

    return {}
}

// Current weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&appid=dfb9f85a74d4f84c8e1f8b367a59a8ea

// Geocoding
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=Dortmund&appid=dfb9f85a74d4f84c8e1f8b367a59a8ea
