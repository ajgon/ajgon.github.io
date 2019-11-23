/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss'
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50]
    }
  },
  typography: {
    h1: {
      color: '#333'
    },
    h2: {
      color: '#333'
    },
    h3: {
      color: '#333'
    },
    h4: {
      color: '#333'
    },
    h5: {
      color: '#333'
    },
    subtitle1: {
      color: '#333'
    },
    h6: {
      color: '#333'
    }
  }
})

function createPageContext () {
  return {
    theme,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

export default function getPageContext () {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
