import { Waypoint } from 'react-waypoint'
import { Container, Typography, CircularProgress, Tooltip } from '@material-ui/core'
import styled from 'styled-components'
import { Card } from './Card'
import { FilterPanel } from './FilterPanel'
import { useGetCards } from '../utils/hooks/useGetCards'

const StyledCardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const EmptyList = styled.div`
  text-align: center;
  padding-top: 30px;
`

const Img = styled.img`
  max-width: 400px;
  width: 100%;
  margin-top: 34px;
  border-radius: 6px;
`

const Loader = styled.div`
  text-align: center;
  padding-top: 40px;
`

export const CardList = () => {
  const { data, loading, loadMore } = useGetCards()

  return (
    <>
      <FilterPanel />
      <Container>
        {data && data.cards.length > 0 && (
          <Typography style={{ padding: '20px 0' }}>Найдено карт: {data.cardCount}</Typography>
        )}
        {!data && loading ? (
          <Loader>
            <CircularProgress />
          </Loader>
        ) : (
          <StyledCardList>
            {data.cards.map((card, i) => {
              if (data.cards.length - 1 === i) {
                return (
                  <Waypoint key={card.id} onEnter={loadMore}>
                    <Card key={card.id} {...card} />
                  </Waypoint>
                )
              }
              return <Card key={card.id} {...card} />
            })}
            {data.cards.length === 0 && (
              <EmptyList>
                <Typography variant="h4" component="p">
                  Карт не найдено
                </Typography>
                <Tooltip title="Автор: Lydia Jean" placement="right">
                  <Img src="img/zero-list.jpg" />
                </Tooltip>
              </EmptyList>
            )}
          </StyledCardList>
        )}
      </Container>
    </>
  )
}
