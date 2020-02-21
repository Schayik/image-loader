import React from 'react'
import styled from 'styled-components'

const Compress = ({ children }) => (
  <StyledCompress>
    {children}
  </StyledCompress>
)

export default Compress

const StyledCompress = styled.div`
  max-width: ${p => p.theme.media.max};
  margin: 0 auto;
  padding: 0 4rem;
  height: 100%;

  @media (max-width: ${p => p.theme.media.small}) {
    padding: 0 2rem;
  }

  @media (max-width: ${p => p.theme.media.min}) {
    padding: 0 1rem;
  }
`