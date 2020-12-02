import styled from 'styled-components'
import { useRouter } from 'next/router'
import { memo } from 'react'
import Image from 'next/image'

const StyledCard = styled.div`
  width: 240px;
  height: 330px;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

export const Card = memo(({ image, name, id, innerRef }) => {
  const router = useRouter()
  return (
    <StyledCard ref={innerRef} onClick={() => router.push(`/${id}`)}>
      <Image
        src={image}
        alt={name}
        width={240}
        height={331}
        layout="fixed"
        quality={25}
        loading="eager"
      />
    </StyledCard>
  )
})
