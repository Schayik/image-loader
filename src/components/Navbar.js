import React from 'react'
import styled from 'styled-components'

import CompressWrapper from './CompressWrapper'

const Navbar = () => (
  <StyledNavbar>
    <CompressWrapper>
      <div className='wrapper'>
        <h1>Image Loader</h1>
        <h3>Pim van Schayik</h3>
      </div>
    </CompressWrapper>
  </StyledNavbar>
)

export default Navbar

const StyledNavbar = styled.nav`
  background-color: ${p => p.theme.colors.background};
  border-bottom: 1px solid ${p => p.theme.colors.border};

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`