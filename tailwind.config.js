/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*html"],  
  theme: {
    extend: {
      colors: {
        bgcolor: {50: '#111'},  
        maincolor: {50: '#b505fb'},
        secondarycolor : {10: '#222'}
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Incoming message style
        '.incoming-msg': {
          float: 'left',
          clear: 'both',
        },
        // Outgoing message style
        '.outgoing-msg': {
          float: 'right',
          clear: 'both',
        },
        // Base message class
        '.msg': {
          padding: '10px',
          margin: '10px',
          borderRadius: '20px',
          backgroundColor: '#b505fb',  
          display: 'flex',
          justifyContent: 'center',  
          alignItems: 'center',  
          position: 'relative'    
        },
      });
    },
  ],
}
