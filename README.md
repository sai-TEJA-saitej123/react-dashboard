# React + Vite


# Dashboard Application

This is a **static dashboard** built using **React**, **Tailwind CSS**, **Heroicons**, **React Icons**, and **Chart.js** for visualizing data with pie charts. The design is responsive and provides a clean, modern interface for displaying key metrics and data insights.

## Features

- **Responsive Design**: Adapts seamlessly across various screen sizes, ensuring usability on desktop, tablet, and mobile devices.
- **Icons**: 
  - **Heroicons**: Used for lightweight, elegant icons in the UI.
  - **React Icons**: Offers a wide range of additional icons.
- **Charts**:
  - Pie charts built with **Chart.js** for data visualization.
- **Modular Components**: Each section of the dashboard is designed as a reusable React component.
- **Tailwind CSS**: For fast and flexible styling.

## File Structure

```
public/
src/
|-- assets/
|-- components/
|   |-- AnalyticsCharts/
|   |   |-- AnalyticsCharts.jsx
|   |-- Footer/
|   |   |-- Footer.jsx
|   |-- Home/
|   |   |-- Home.jsx
|   |-- Navbar/
|   |   |-- Navbar.jsx
|   |-- Sidebar/
|       |-- Sidebar.jsx
|-- App.css
|-- App.jsx
|-- index.css
|-- main.jsx
.gitignore
.eslint.config.js
index.html
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Components Overview

### 1. **Header and Navbar**
- Contains navigation links and branding.

### 2. **Home**
- Main landing section with dashboard overview.

### 3. **Sidebar**
- Provides quick links to other sections of the dashboard.

### 4. **AnalyticsCharts**
- Includes visual data representation such as pie charts (built with Chart.js).

### 5. **Footer**
- Displays copyright information and links to social media.

## Technologies Used

- **React**: Framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Heroicons**: Free and open-source icons designed for interfaces.
- **React Icons**: Library for including popular icon sets.
- **Chart.js**: Library for rendering pie charts and other data visualizations.

## Customization

- To modify the color scheme or layout, update the Tailwind CSS configuration file (`tailwind.config.js`).
- To update chart data, adjust the state and props passed to the **Chart.js** components.

## Screenshots

### Full Dashboard View
![Dashboard Screenshot](./screenshot.png)

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Chart.js](https://www.chartjs.org/)



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
