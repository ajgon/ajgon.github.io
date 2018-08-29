/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
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
    display4: {
      color: '#333'
    },
    display3: {
      color: '#333'
    },
    display2: {
      color: '#333'
    },
    display1: {
      color: '#333'
    },
    headline: {
      color: '#333'
    },
    subheading: {
      color: '#333'
    },
    title: {
      color: '#333'
    }
  }
})

function createPageContext () {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
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
