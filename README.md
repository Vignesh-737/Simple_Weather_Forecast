# 🌦 Weather App

A simple weather app built with HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeatherMap API. Users can search by city and instantly see weather details like temperature, humidity, wind speed, and more.

---

## 📌 Features

- Search weather by city name
- Displays temperature, feels-like temperature, humidity, wind speed, and condition
- Appends result below the input field
- Keyboard support: Press "Enter" to search
- Responsive design with clean UI
- Google Fonts and gradient background styling

---

## 🔗 Live Demo

🌐 [View Live](https://harmonious-praline-ae19ba.netlify.app/)



---

## 🛠 Tech Stack

- *HTML5* – Semantic markup
- *CSS3* – Styling and layout
- *JavaScript (Vanilla)* – Functionality and API interaction
- *OpenWeatherMap API* – Real-time weather data
- *Netlify* – Deployment

---

## 🚀 Getting Started

### 1. Clone the repository

bash
git clone https://github.com/YOUR_USERNAME/weather-app.git
cd weather-app


### 2. Open the app

Just open weather.html in your browser.

> No build tools or dependencies needed!

---

## 📂 Project Structure


weather-app/
│
├── weather.html       # Main HTML file
├── weather.css        # Styles
├── weather.js         # JavaScript logic
└── README.md          # Project documentation


---

## 💡 How to Use

1. Type any city name in the input field.
2. Click the *Search* button or press *Enter*.
3. Weather results will appear below.

---

## 🧾 HTML Elements Used

| Element       | Purpose                              |
|---------------|--------------------------------------|
| <input>     | City name input field                |
| <button>    | Triggers the weather search          |
| <div>       | Holds the weather result and content |
| <h1>        | Displays main title                  |
| <script>    | Loads JavaScript                     |
| <link>      | Links CSS file                       |
| <br>        | Line breaks inside result display    |
| <hr>        | Separators between search results    |

---

## 📦 API Used

- *OpenWeatherMap API*  
  [https://openweathermap.org/api](https://openweathermap.org/api)

Register and get your API key, then replace this in weather.js:

js
const apiKey = "your_api_key_here";


---

## ✅ Future Improvements

- Add weather icons
- Auto-detect user's location
- 5-day forecast support
- Add loading state / error animations
- Dark mode toggle

---

## 🧪 Example


Search: Chennai

Temperature in Chennai: 31°C (Feels like 33°C)
Condition: scattered clouds
Humidity: 70%
Wind speed: 3.5 m/s


---

## 📜 License

This project is open-source and free to use.