'use client'

import { FC } from 'react'
import Hero from '@/screens/Home/components/Hero/Hero'
import Mission from '@/screens/Home/components/Mission/Mission'
import Principles from '@/screens/Home/components/Principles/Principles'
import Ecosystem from '@/screens/Home/components/Ecosystem/Ecosystem'
import Foundations from '@/screens/Home/components/Foundations/Foundations'

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Principles />
      <Ecosystem />
      <Foundations />
    </>
  )
}

export default Home
