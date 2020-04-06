import { Colors } from './colors'

const theme = {
  colors: {
    ...Colors,
    background: Colors.mirage,
    text: Colors.white,
    primary: Colors.malachite,
    secondary: Colors.mirage,
  },
  fontWeights: {
    normal: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: [12, 16, 18, 24, 32],
  space: [0, 4, 8, 12, 16, 18, 24, 32, 48, 64, 104, 128],
  radii: [0, 4, 8, 16, 32],
}

export default theme
