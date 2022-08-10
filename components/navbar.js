import Logo from './logo'
import {
  Box,
  Link,
  Heading,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  HStack,
  Spacer,
  Center
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const router = useRouter()
  const active = path === href
  const inactiveColor = useColorModeValue('gray', 'whiteAlpha.900')
  return (
    <Link onClick={() => router.push(href)}>
      <Box
        p="2"
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Box>
    </Link>
  )
}

const Navbar = () => {
  const router = useRouter()
  const currentPath = router.asPath
  console.log(currentPath)

  return (
    <Box>
      <HStack
        py={2}
        pr={[4, 6, 16, 36, 64]}
        pl={[2, 6, 16, 36, 64]}
        w="100%"
        position="fixed"
        as="nav"
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex="1"
        bgColor={useColorModeValue('#ffffff40', '#20202380')}
      >
        <Center mr="5">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Center>

        <Box display={['none', 'none', 'flex']}>
          <LinkItem href="/works" path={currentPath}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={currentPath}>
            Posts
          </LinkItem>
        </Box>

        <Spacer />
        <ThemeToggleButton />

        <Box display={['flex', 'flex', 'none']}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              arai-label="Options"
            />
            <MenuList>
              <MenuItem onClick={() => router.push('/')}>About</MenuItem>
              <MenuItem onClick={() => router.push('/works')}>Works</MenuItem>
              <MenuItem onClick={() => router.push('/posts')}>Posts</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  )
}

export default Navbar
