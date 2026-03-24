// import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

// declare module '@mui/material/Paper' {
//   interface PaperPropsVariantOverrides {
//     highlighted: true;
//   }
// }
// declare module '@mui/material/styles' {
//   interface ColorRange {
//     50: string;
//     100: string;
//     200: string;
//     300: string;
//     400: string;
//     500: string;
//     600: string;
//     700: string;
//     800: string;
//     900: string;
//   }

//   interface PaletteColor extends ColorRange {}

//   interface Palette {
//     baseShadow: string;
//   }
// }

// const defaultTheme = createTheme();

// const customShadows: Shadows = [...defaultTheme.shadows];

import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

// Shifted brand from Blue to Safety Red (HSL 0-5 range)
export const brand = {
  50: 'hsl(5, 100%, 97%)',
  100: 'hsl(5, 92%, 90%)',
  200: 'hsl(5, 94%, 80%)',
  300: 'hsl(5, 90%, 65%)',
  400: 'hsl(5, 85%, 50%)', // Core Safety Red
  500: 'hsl(5, 85%, 45%)', 
  600: 'hsl(5, 85%, 40%)',
  700: 'hsl(5, 90%, 30%)',
  800: 'hsl(5, 95%, 15%)',
  900: 'hsl(5, 100%, 10%)',
};

// Warmer grays to match the industrial safety theme
export const gray = {
  50: 'hsl(220, 10%, 97%)',
  100: 'hsl(220, 10%, 92%)',
  200: 'hsl(220, 10%, 85%)',
  300: 'hsl(220, 10%, 75%)',
  400: 'hsl(220, 10%, 60%)',
  500: 'hsl(220, 10%, 45%)',
  600: 'hsl(220, 12%, 35%)',
  700: 'hsl(220, 15%, 20%)',
  800: 'hsl(220, 20%, 10%)',
  900: 'hsl(220, 25%, 5%)',
};

export const green = {
  50: 'hsl(140, 80%, 98%)',
  100: 'hsl(140, 75%, 94%)',
  200: 'hsl(140, 75%, 87%)',
  300: 'hsl(140, 61%, 77%)',
  400: 'hsl(140, 44%, 53%)',
  500: 'hsl(140, 59%, 30%)',
  600: 'hsl(140, 70%, 25%)',
  700: 'hsl(140, 75%, 16%)',
  800: 'hsl(140, 84%, 10%)',
  900: 'hsl(140, 87%, 6%)',
};

export const orange = {
  50: 'hsl(35, 100%, 97%)',
  100: 'hsl(35, 92%, 90%)',
  200: 'hsl(35, 94%, 80%)',
  300: 'hsl(35, 90%, 65%)',
  400: 'hsl(35, 90%, 45%)',
  500: 'hsl(35, 90%, 35%)',
  600: 'hsl(35, 91%, 25%)',
  700: 'hsl(35, 94%, 20%)',
  800: 'hsl(35, 95%, 16%)',
  900: 'hsl(35, 93%, 12%)',
};

export const red = brand; // Primary brand is now red

export const getDesignTokens = (mode: PaletteMode) => {
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(0, 0%, 0%, 0.7) 0px 4px 16px 0px, hsla(0, 0%, 0%, 0.8) 0px 8px 16px -5px'
      : 'hsla(0, 0%, 0%, 0.07) 0px 4px 16px 0px, hsla(0, 0%, 0%, 0.07) 0px 8px 16px -5px';

  return {
    palette: {
      mode,
      primary: {
        light: brand[200],
        main: brand[500],
        dark: brand[700],
        contrastText: '#fff',
        ...(mode === 'dark' && {
          contrastText: '#fff',
          light: brand[300],
          main: brand[400],
          dark: brand[800],
        }),
      },
      info: {
        light: gray[100],
        main: gray[500],
        dark: gray[800],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: gray[300],
          light: gray[500],
          main: gray[700],
          dark: gray[900],
        }),
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        ...(mode === 'dark' && {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        }),
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
        ...(mode === 'dark' && {
          light: red[400],
          main: red[500],
          dark: red[700],
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        default: 'hsl(0, 0%, 99%)',
        paper: '#fff',
        ...(mode === 'dark' && { default: gray[900], paper: gray[800] }),
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400],
        ...(mode === 'dark' && { primary: 'hsl(0, 0%, 100%)', secondary: gray[400] }),
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
        ...(mode === 'dark' && {
          hover: alpha(gray[600], 0.2),
          selected: alpha(gray[600], 0.3),
        }),
      },
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
        fontWeight: 600,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 6, // Slightly sharper corners for industrial feel
    },
    shadows: customShadows,
  };
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[500],
        dark: brand[700],
        contrastText: '#fff',
      },
      info: {
        light: gray[100],
        main: gray[400],
        dark: gray[700],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: 'hsl(0, 0%, 99%)',
        paper: '#fff',
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
      baseShadow:
        'hsla(0, 0%, 0%, 0.07) 0px 4px 16px 0px, hsla(0, 0%, 0%, 0.07) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: '#fff',
        light: brand[300],
        main: brand[400],
        dark: brand[800],
      },
      info: {
        contrastText: gray[300],
        light: gray[500],
        main: gray[700],
        dark: gray[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: gray[900],
        paper: gray[800],
      },
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[400],
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow:
        'hsla(0, 0%, 0%, 0.7) 0px 4px 16px 0px, hsla(0, 0%, 0%, 0.8) 0px 8px 16px -5px',
    },
  },
};

// ... keep existing typography, shape, and shadows exports below

export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 8,
};

// @ts-ignore
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
