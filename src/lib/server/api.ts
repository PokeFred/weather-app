const API_KEY: string = 'dfb9f85a74d4f84c8e1f8b367a59a8ea'
const CITY: string = 'Dortmund'

export function getLocationFromCityName() {
    return new Promise(async (resolve, reject) => {
        try {
            const response: Response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${CITY}&appid=${API_KEY}`, {
                method: 'GET',
            })
            const data: any = await response.json()

            console.log(response.status)
            console.log(data)
            resolve('Dortmund')
        } catch (error) {
            console.log(error)
            resolve('Dortmund')
        }
    })
}
