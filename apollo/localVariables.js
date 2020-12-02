import { makeVar } from '@apollo/client'

export const cardFiltersVar = makeVar({
  classId: [],
  minionTypeId: [],
  cardTypeId: [],
  cardSetId: [1466],
  rarityId: [],
  health: [],
  attack: [],
  manaCost: [],
  keywordIds: [],
  name: undefined,
})

export const arenaVar = makeVar(false)
