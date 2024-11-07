/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*html"],  
  theme: {
    extend: {
      colors: {
        bgcolor: {50: '#00060c'},  
        maincolor: {50: '#05b1fb'},
        secondarycolor: {50: '#010912'}
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
          backgroundColor : '#121f2c'
        },
        // Outgoing message style
        '.outgoing-msg': {
          float: 'right',
          clear: 'both',
          backgroundColor: '#05b1fb',  
        },
        // Base message class
        '.msg': {
          padding: '10px',
          margin: '1rem .5rem',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',  
          alignItems: 'center',  
          position: 'relative',  
          maxWidth: '60vw'    
        },

        '.notification': {
          display: 'flex',
          
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.125rem',  
          color: '#757879',      
          textAlign: 'center',  
          fontWeight: '400',    
          marginTop: '1rem',     
          marginBottom: '1rem',  
          width: '100%'
        },
      });
    },
  ],
}
