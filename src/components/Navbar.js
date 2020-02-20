import React from 'react'
import styled from 'styled-components'

import Compress from './Compress'

const Navbar = () => (
    <StyledNavbar>
        <Compress>
            <div className='wrapper'>
                <h1>Image Loader</h1>
                <h3>Pim van Schayik</h3>
            </div>
        </Compress>
    </StyledNavbar>
)

export default Navbar

const StyledNavbar = styled.nav`
    height: 6rem;
    background-color: ${p => p.theme.colors.background};
    border-bottom: 1px solid ${p => p.theme.colors.border};

    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 100%;
    }
`