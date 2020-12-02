import { CardList } from '../components/CardList'
import { withApollo } from '../apollo/apolloClient'
import { Layout } from '../components/layout'

const CardsPage = () => {
  return (
    <>
      <Layout>
        <CardList />
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(CardsPage)
