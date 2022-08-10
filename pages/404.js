import NextLink from 'next/link'
import {
  Center,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Center my={6}>
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Center>
    </Container>
  )
}

export default NotFound
