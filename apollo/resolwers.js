const filtersAdjustment = filters => {
  const filtersObj = {}

  for (const key in filters) {
    if (filters[key].length > 0) {
      filtersObj[key] = { $in: filters[key] }
    }
  }

  return filtersObj
}

export const resolvers = {
  Query: {
    metadata: async (_parent, _args, _context) => {
      return await _context.db.collection('metadata').findOne()
    },
    cards: async (_parent, { offset, limit, filters }, _context) => {
      return await _context.db
        .collection('cards')
        .find(filtersAdjustment(filters))
        .skip(offset)
        .limit(limit)
        .toArray()
    },
    cardCount: async (_parent, { filters }, _context) => {
      return await _context.db.collection('cards').find(filtersAdjustment(filters)).count()
    },
    card: async (_parent, { id }, _context) => {
      return await _context.db.collection('cards').findOne({ id })
    },
  },
}
