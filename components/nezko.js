import { Model } from '../lib/model'
import { Canvas } from '@react-three/fiber'
import { Center } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'

const Nezko = () => {
  return (
    <Center height={['200px', '300px', '400px']}>
      <Canvas shadows>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Model scale={5} position={[0, -2, 0]} />
        <OrbitControls />
      </Canvas>
    </Center>
  )
}

export default Nezko
