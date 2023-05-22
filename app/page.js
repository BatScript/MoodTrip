import Layout from '../components/UI/Layout'
import HomePage from '../container/HomePage'

// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Next.js',
// };

const index = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default index
