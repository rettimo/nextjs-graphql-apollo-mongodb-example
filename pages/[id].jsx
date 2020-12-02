import { Container, Typography } from '@material-ui/core'
import { withApollo } from '../apollo/apolloClient'
import { Layout } from '../components/layout'
import { useGetCard } from '../utils/hooks/useGetCard'
import { useGetMetadata } from '../utils/hooks/useGetMetadata'
import Image from 'next/image'
import styled from 'styled-components'

const Content = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
`

const StyledCardInfo = styled.div`
  margin-left: 60px;
  padding-top: 50px;
`

const ImgWrapper = styled.div`
  height: 518px;
  width: 375px;
`

const Desc = styled(Typography)`
  font-style: italic;
`

const Strong = styled.b`
  color: #c79a00;
`

const CardInfo = () => {
  const { data } = useGetCard()
  const { data: metadata } = useGetMetadata()

  const numToName = (num, field) => {
    const val = []

    const lNum = typeof num !== 'object' ? [num] : num

    for (let i = 0; i < metadata.metadata[field].length; i += 1) {
      for (let j = 0; j < lNum.length; j += 1) {
        if (metadata.metadata[field][i].id === lNum[j]) {
          val.push(metadata.metadata[field][i].name)
        }
      }
    }

    return val.join(', ')
  }

  const craftingCost = type => {
    return (
      metadata.metadata.rarities
        .filter(({ id }) => id === data.card.rarityId)[0]
        [type].join(' / ') + ' (Золотые)'
    )
  }

  return (
    <Layout>
      <Container>
        <Content>
          {data && data.card !== null && metadata && (
            <>
              <ImgWrapper>
                <Image
                  src={data.card.image}
                  alt={data.card.name}
                  layout="fixed"
                  width={375}
                  height={518}
                  priority
                />
              </ImgWrapper>

              <StyledCardInfo>
                <Typography variant="h3" component="h1" gutterBottom>
                  {data.card.name}
                </Typography>
                <Desc color="textSecondary" variant="h5" component="h2" gutterBottom>
                  {data.card.flavorText}
                </Desc>
                <Typography
                  color="textSecondary"
                  variant="h5"
                  component="h2"
                  dangerouslySetInnerHTML={{ __html: data.card.text.trim() }}
                  gutterBottom
                ></Typography>
                {data.card.cardTypeId && (
                  <Typography>
                    <Strong>Тип:</Strong> {numToName(data.card.cardTypeId, 'types')}
                  </Typography>
                )}
                {data.card.rarityId && (
                  <Typography variant="body1">
                    <Strong>Редкость:</Strong> {numToName(data.card.rarityId, 'rarities')}
                  </Typography>
                )}
                {data.card.cardSetId && (
                  <Typography variant="body1">
                    <Strong>Набор:</Strong> {numToName(data.card.cardSetId, 'sets')}
                  </Typography>
                )}
                {data.card.classId && (
                  <Typography variant="body1">
                    <Strong>Класс:</Strong> {numToName(data.card.classId, 'classes')}
                  </Typography>
                )}
                {data.card.minionTypeId && (
                  <Typography variant="body1">
                    <Strong>Тип существа:</Strong>{' '}
                    {numToName(data.card.minionTypeId, 'minionTypes')}
                  </Typography>
                )}
                {data.card.rarityId !== 2 && (
                  <Typography variant="body1">
                    <Strong>Стоимость изготовления: </Strong> {craftingCost('craftingCost')}
                  </Typography>
                )}
                {data.card.rarityId !== 2 && (
                  <Typography variant="body1">
                    <Strong>Кол-во пыли при распылении: </Strong> {craftingCost('dustValue')}
                  </Typography>
                )}
                {data.card.collectible && (
                  <Typography variant="body1">
                    <Strong>Коллекционная</Strong>
                  </Typography>
                )}
              </StyledCardInfo>
            </>
          )}

          {data && data.card === null && <h1>Карта не найдена</h1>}
        </Content>
      </Container>
    </Layout>
  )
}

export default withApollo({ ssr: false })(CardInfo)
