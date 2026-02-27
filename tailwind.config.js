/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#6C63FF',
                secondary: '#FF6584',
                accent: '#43E97B',
                dark: '#0A0A0F',
                darker: '#06060A',
                card: '#12121A',
                border: '#1E1E2E',
                muted: '#8888AA',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #12121A 50%, #0A0A0F 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'gradient-x': 'gradient-x 15s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px #6C63FF40' },
                    '100%': { boxShadow: '0 0 40px #6C63FF80, 0 0 60px #6C63FF40' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
                },
            },
        },
    },
    plugins: [],
}
