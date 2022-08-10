import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Nezko from '../nezko'

const Layout = ({ children }) => {
  //router
  return (
    <Box as="main" pb="8">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hongjun Yi - Homepage</title>
      </Head>
      <Navbar />
      <Container maxW={'container.md'} pt={14}>
        <Nezko />
        {children}
      </Container>
    </Box>
  )
}

export default Layout
