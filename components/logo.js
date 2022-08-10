import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 8px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} alt="logo" width={'20px'} height={'20px'} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Jua"
            fontWeight={'bold'}
            ml={3}
          >
            Hongjun Yi
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
