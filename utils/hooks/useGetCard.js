import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const query = gql`
  query card($id: Int) {
    card(id: $id) {
      id
      collectible
      slug
      classId
      multiClassIds
      minionTypeId
      cardTypeId
      cardSetId
      rarityId
      artistName
      health
      attack
      manaCost
      name
      text
      image
      imageGold
      flavorText
      cropImage
      parentId
      keywordIds
      childIds
    }
  }
`

export const useGetCard = () => {
  const router = useRouter()

  const { loading, data } = useQuery(query, {
    variables: { id: +router.query.id },
  })

  return { data, loading }
}
