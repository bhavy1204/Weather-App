# 🌦️ forCast — Weather App

**forCast** is a clean, simple, fully-functional weather app built using React and Material UI.  
It lets users check real-time weather data for any city — with temperature, humidity, sunrise/sunset times, weather condition icons, and more. With dynamic image changes according to temperature 🌍✨

## 🚀 Features

- 🔎 Search weather by city name (OpenWeatherMap API)
- 📍 Displays:
  - Temperature (with condition-based icons)
  - Humidity
  - Feels like temp
  - Sunrise & Sunset (formatted to readable time)
  - Weather description
- 🎨 Custom UI with:
  - Gradient background
  - Glassmorphism weather card
  - Responsive layout
- 🖼️ **Download weather card as image**
- 📤 **Share on:**
  - WhatsApp
  - Twitter
  - Facebook
- Error handling for unknown cities

---

## 📸 Demo

Live Link 👉 [forCast on Vercel](https://forcast-tan.vercel.app/)

---

## 🛠️ Tech Stack

| Tech           | Usage                             |
| -------------- | --------------------------------- |
| React          | UI and state management           |
| Material UI    | Components and styling            |
| HTML/CSS       | Custom layout, gradients, effects |
| OpenWeatherMap | Weather API                       |
| html-to-image  | Download weather card as PNG      |
| react-share    | Share on social media             |

---

## 🔧 Setup & Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/forCast.git
cd forCast

# 2. Install dependencies
npm install

# 3. Set up environment variable
# Create a .env file in the root and add your API key:
VITE_API_KEY=your_openweathermap_api_key

# 4. Run the dev server
npm run 
```
## ✨ Future Plans

- Mobile responsiveness improvements
- Auto-location weather
- Theme toggle (light/dark or rainy/sunny)
- Animated icons
- Search history