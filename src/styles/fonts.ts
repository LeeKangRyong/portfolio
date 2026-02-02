export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export const fontSize = {
  xs: '0.75rem',     
  sm: '0.875rem',    
  base: '1rem',      
  lg: '1.125rem',    
  xl: '1.25rem',     
  '2xl': '1.5rem',   
  '3xl': '1.875rem', 
  '4xl': '2.25rem',  
  '5xl': '3rem',     
} as const;

export const lineHeight = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
} as const;

export const fontFamily = {
  pretendard: "'Pretendard', sans-serif",
} as const;

export type FontWeight = typeof fontWeight;
export type FontSize = typeof fontSize;
export type LineHeight = typeof lineHeight;
export type LetterSpacing = typeof letterSpacing;
export type FontFamily = typeof fontFamily;
