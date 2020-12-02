import { gql } from '@apollo/client'

export const typeDefs = gql`
  # Type for Metadata

  type Sets {
    id: Int
    name: String
    slug: String
    releaseDate: String
    type: String
    collectibleCount: Int
    collectibleRevealedCount: Int
    nonCollectibleCount: Int
    nonCollectibleRevealedCount: Int
  }

  type SetGroups {
    slug: String
    year: Int
    cardSets: [String]
    name: String
    standard: Boolean
    icon: String
  }

  type Types {
    slug: String
    id: Int
    name: String
  }

  type Rarities {
    slug: String
    id: Int
    craftingCost: [Int]
    dustValue: [Int]
    name: String
  }

  type Classes {
    slug: String
    id: Int
    name: String
    cardId: Int
  }

  type MinionTypes {
    slug: String
    id: Int
    name: String
  }

  type GameModes {
    slug: String
    id: Int
    name: String
  }

  type Keywords {
    id: Int
    slug: String
    name: String
    refText: String
    text: String
  }

  type CardBackCategories {
    slug: String
    id: Int
    name: String
  }

  fragment Filters on Metadata {
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
  }

  # Main types

  type Metadata {
    _id: ID!
    sets: [Sets]
    setGroups: [SetGroups]
    arenaIds: [Int]
    types: [Types]
    rarities: [Rarities]
    classes: [Classes]
    minionTypes: [MinionTypes]
    gameModes: GameModes
    keywords: [Keywords]
    filterableFields: [String]
    numericFields: [String]
    cardBackCategories: [CardBackCategories]
  }

  type Card {
    _id: ID!
    id: Int
    collectible: Int
    slug: String
    classId: Int
    multiClassIds: [Int]
    minionTypeId: Int
    cardTypeId: Int
    cardSetId: Int
    rarityId: Int
    artistName: String
    health: Int
    attack: Int
    manaCost: Int
    name: String
    text: String
    image: String
    imageGold: String
    flavorText: String
    cropImage: String
    parentId: Int
    keywordIds: [Int]
    childIds: [Int]
  }

  # Filter types

  input CardFilters {
    classId: [Int]
    minionTypeId: [Int]
    cardTypeId: [Int]
    cardSetId: [Int]
    rarityId: [Int]
    health: [Int]
    attack: [Int]
    manaCost: [Int]
    keywordIds: [Int]
    name: String
  }

  type Query {
    metadata: Metadata
    cards(offset: Int, limit: Int, filters: CardFilters): [Card]
    cardCount(filters: CardFilters): Int
    card(id: Int): Card
  }
`
