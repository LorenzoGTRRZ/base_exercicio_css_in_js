import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import themeColor from './containers/theme/styles'

import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
