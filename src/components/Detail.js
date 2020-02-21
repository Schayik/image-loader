import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CompressWrapper from './CompressWrapper'

const Detail = () => {

  const { id } = useParams()
  const image = useSelector(state => state)

  return (
    <CompressWrapper>
      <StyledDetail>
        <img />
      </StyledDetail>
    </CompressWrapper>
  )
}

export default Detail

const StyledDetail = styled.div`

`