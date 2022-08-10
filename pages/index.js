import {
  Container,
  useColorModeValue,
  Center,
  Box,
  Heading,
  Avatar,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { useRouter } from 'next/router'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layout/article'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYoutube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <Container>
        <Center
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p="3"
          mb="6"
        >
          Hello, I&apos;m a full-stack developer living in South Korea!
        </Center>

        <Box display={{ md: 'flex' }}>
          <Box flex={'1'}>
            <Heading as="h2" variant="page-title">
              Hongjun Yi
            </Heading>
            <p>Full-stack Web3 Developer, Doctor</p>
          </Box>

          <Box flexShrink={0} mt={[4, 4, 0]} ml={[0, 0, 6]} align="center">
            <Avatar
              src="/images/hongjun.jpeg"
              alt="Profile Picture of Hongjun"
              size="xl"
              borderColor={'whiteAlpha.800'}
              borderWidth={2}
              borderStyle="solid"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            {' '}
            Hongjun is a freelance and a full-stack developer based in Yeosu
            with a passion for building digital services/stuff he wants. He has
            a knack for all things launching products, from planning and
            designing all the way to solving real-life problems with code. When
            not online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{' '}
            <Link onClick={() => router.push('/works/inkdrop')}>Inkdrop</Link>
          </Paragraph>

          <Center my="4">
            <Link onClick={() => router.push('/works')}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Center>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Born in Seoul, South Korea
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            BS in Korean Medicine, Wonkwang University
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            BS in Computer Science, Korea Open University
          </BioSection>
          <BioSection>
            <BioYear>2026</BioYear>
            MS in Computer Science, Arizona State University
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          Art, Music, Drawing, <Link href="youtube.com">Playing Guitars</Link>,
          Photography, Leica, MachineLearning
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/munj1" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @munj1
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/yimunj931" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @yimunj931
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/yhjun_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @yhjun_
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYoutube}
            >
              My Youtube Channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A markdown note-taking app
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
