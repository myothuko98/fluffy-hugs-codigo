'use client'
import React from 'react'
import FirstPage from '@/components/FirstPage'
import { cn } from '@/utils/cn'
import LoadingScreen from '@/components/LoadingScreen'

const Home = () => {
  return (
    <main className={cn('w-screen h-screen overflow-hidden')}>
      <FirstPage />
      <LoadingScreen />
    </main>
  )
}

export default Home
