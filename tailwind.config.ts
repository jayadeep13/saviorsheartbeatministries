import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#8B1A4A', dark: '#6B1038', light: '#B02860', pale: '#F5E6EC' },
        wine: { DEFAULT: '#6B1F3A', dark: '#4A1228', light: '#8B2A4E' },
        cream: { DEFAULT: '#FDF8F2', warm: '#F5ECD8', deep: '#EDD8B5' },
        charcoal: { DEFAULT: '#1C1C1E', mid: '#2C2C2E', soft: '#3A3A3C', muted: '#8E8E93' },
        sage: { DEFAULT: '#4A7C59', light: '#6A9E78', pale: '#E8F5EC' },
        gold: { DEFAULT: '#C9A96E', light: '#E2C99A', pale: '#FBF4E8' },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { from:{opacity:'0',transform:'translateY(40px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        float: { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-18px)'} },
        shimmer: { '0%':{backgroundPosition:'-200% 0'}, '100%':{backgroundPosition:'200% 0'} },
        marquee: { '0%':{transform:'translateX(0)'}, '100%':{transform:'translateX(-50%)'} },
        pulseGlow: { '0%,100%':{boxShadow:'0 0 20px rgba(139,26,74,0.3)'}, '50%':{boxShadow:'0 0 60px rgba(139,26,74,0.6)'} },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139,26,74,0.25)',
        'glow-lg': '0 0 80px rgba(139,26,74,0.4)',
        'card': '0 4px 32px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(139,26,74,0.2)',
        'gold': '0 4px 32px rgba(201,169,110,0.3)',
      },
    },
  },
  plugins: [],
}
export default config
