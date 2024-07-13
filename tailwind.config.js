/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"], //ask tailwind to look for all html and js documents
  theme: {
    extend: {
      //adding the color scheme to use.
      color:{
        papayawhip: {
          light:'#fef4e4',
          DEFAULT: '#fef4e5',
          dark:'#fef4e'
        }
      },
      screen:{
        'widescreen': {'raw': '(min-aspect-ratio:3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio:13/20)'},
      
      },

      keyframe:{
        'open-menu':{
          '0%':{'transform': 'scale(0)'},
          '80%':{'transform': 'scale(0)'},
          '100%':{'transform': 'scale(0)'},
                    
        }
      },

      animation:{
        'open-menu': 'open-menu 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

