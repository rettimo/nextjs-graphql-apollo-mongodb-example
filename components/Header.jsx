import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  position: fixed;
  border-bottom: 1px solid #ccc;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
`

const AppBar = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Header = () => {
  return (
    <StyledHeader id="header">
      <AppBar>
        <Link href="/" passHref>
          <a style={{ marginRight: 20 }}>
            <Image src="/img/logo.png" alt="HS Now" layout="fixed" width={45} height={45} />
          </a>
        </Link>
      </AppBar>
    </StyledHeader>
  )
}
