import { gql, useQuery, useReactiveVar } from '@apollo/client'
import { cardFiltersVar } from '../../apollo/localVariables'

const query = gql`
  {
    metadata {
      sets {
        id
        name
      }
      types {
        id
        name
      }
      rarities {
        id
        name
      }
      classes {
        id
        name
      }
      minionTypes {
        id
        name
      }
      keywords {
        id
        name
      }
      arenaIds
    }
    cardFilters @client
  }
`

export const useGetFilters = () => {
  const { data } = useQuery(query)
  const filters = useReactiveVar(cardFiltersVar)

  return { data, filters }
}
