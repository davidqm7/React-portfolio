const base = {
  layout:      { maxWidth: '1200px', headerHeight: '72px' },
  radius:      { sm: '8px', md: '12px', lg: '16px', pill: '9999px' },
  breakpoints: { tablet: '992px', mobile: '768px' },
};

export const lightTheme = {
  ...base,
  isDark: false,
  colors: {
    primary:     '#7600bc',
    primaryDark: '#5a0090',
    bg:          '#f7f8fb',
    cardBg:      '#ffffff',
    text:        '#1f1f1f',
    textLight:   '#666666',
    white:       '#ffffff',
    chipBg:      '#f0e6f7',
    border:      '#e6e6e9',
    inputBg:     '#ffffff',
  },
  shadow: {
    sm: '0 2px 8px rgba(0,0,0,0.08)',
    md: '0 6px 18px rgba(0,0,0,0.12)',
  },
};

export const darkTheme = {
  ...base,
  isDark: true,
  colors: {
    primary:     '#a855f7',
    primaryDark: '#7600bc',
    bg:          '#0f0f14',
    cardBg:      '#1a1a26',
    text:        '#e4e4f0',
    textLight:   '#8888aa',
    white:       '#ffffff',
    chipBg:      '#2a1a40',
    border:      '#2d2d42',
    inputBg:     '#111118',
  },
  shadow: {
    sm: '0 2px 12px rgba(0,0,0,0.4)',
    md: '0 6px 24px rgba(0,0,0,0.55)',
  },
};

export default lightTheme;
