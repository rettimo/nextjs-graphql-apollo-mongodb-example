import { gql, useQuery, useReactiveVar } from '@apollo/client'
import { cardFiltersVar } from '../../apollo/localVariables'

const query = gql`
  query cards($offset: Int, $filters: CardFilters) {
    cardFilters @client
    arena @client
    cards(offset: $offset, limit: 50, filters: $filters) {
      id
      image
      name
    }
    cardCount(filters: $filters)
  }
`

export const useGetCards = () => {
  const filters = useReactiveVar(cardFiltersVar)

  //* Loading cards
  const { loading, data, fetchMore } = useQuery(query, {
    variables: { offset: 0, filters },
  })

  //* When the last card in the current data appeared on the screen
  const loadMore = () => {
    if (data.cards.length !== data.cardCount)
      fetchMore({
        variables: { offset: data.cards.length, filters },
      })
  }

  return { data, loading, loadMore }
}
