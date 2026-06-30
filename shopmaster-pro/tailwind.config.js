module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontSize: {
        'xs':   ['11px', '16px'],
        'sm':   ['12px', '17px'],
        'base': ['13px', '19px'],
        'md':   ['14px', '20px'],
      },
      colors: {
        sidebar: { bg: '#1E293B', text: '#94A3B8', active: '#F1F5F9', hover: '#334155' },
        surface: { 0: '#FFFFFF', 50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0' },
      },
      spacing: {
        '0.5': '2px', '1': '4px', '1.5': '6px',
        '2': '8px', '2.5': '10px', '3': '12px',
      }
    }
  }
}
