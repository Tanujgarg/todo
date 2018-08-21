import React, { Component } from 'react'
import  { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Dialog from './componants/NewTodo'

const theme = createMuiTheme({
        palette: {
            primary: {
                light: "#5dc6df",
                main: "#1995ad",
                dark: "#00677e",
                contrastText: "#ffffff"
            },
            secondary: {
                light: "#d3ffff",
                main: "#a1d6e2",
                dark: "#70a5b0",
                contrastText: "#ffffff"
            }
        }
    }
)

class App extends Component {

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Dialog></Dialog>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
