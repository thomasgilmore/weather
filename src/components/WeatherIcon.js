export const WeatherIcon = (weatherId, weatherIcon) => {
    if (weatherId === 200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 300 || 301 || 302 || 310 || 311 || 312 || 313 || 314 || 321 || 520 || 521 || 522 || 531) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 500 || 501 || 502 || 503 || 504) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 511 || 600 || 601 || 602 || 611 || 612 || 615 || 615 || 620 || 621 || 622) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 701 || 711 || 721 || 731 || 741 || 751 || 761 || 762 || 771 || 781) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 800) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 801) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 802) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    } else if (weatherId === 803 || 804) {
        return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    }
}