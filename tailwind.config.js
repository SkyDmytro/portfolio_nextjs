/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html', 
  ],
  theme: {
    extend: {
          },
    colors:{
      darkBlue:"#07161E",
      blue:"#13222A",
      lightBlue:"#336D8B",
      primaryFont:"white",
      secondaryFont:"#B8B8B8"
    },
    container:{
      center:true
    }
    
  },
  plugins: [],
}

