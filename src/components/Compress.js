import React from 'react'
import styled from 'styled-components'

const Compress = ({ children }) => (
    <StyledCompress>
        {children}
    </StyledCompress>
)

export default Compress

const StyledCompress = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 4rem;
    height: 100%;
`