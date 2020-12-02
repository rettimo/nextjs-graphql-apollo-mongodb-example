import { gql, useQuery } from '@apollo/client'

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
        craftingCost
        dustValue
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
    }
  }
`

export const useGetMetadata = () => {
  const { data } = useQuery(query)

  return { data }
}
