import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Zoom, useScrollTrigger, Fab } from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'
import { Header } from './Header'

const Main = styled.main`
  padding: 55px 0;
`

const ToUpButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
`

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <ToUpButton onClick={handleClick} role="presentation">
        {children}
      </ToUpButton>
    </Zoom>
  )
}

export const Layout = ({ children }) => (
  <>
    <Header />
    <div id="back-to-top-anchor" />
    <Main>{children}</Main>
    <ScrollTop>
      <Fab color="primary" aria-label="scroll back to top">
        <KeyboardArrowUp />
      </Fab>
    </ScrollTop>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
