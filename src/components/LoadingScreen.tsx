'use client'
import React, { useEffect, useState } from 'react'

import LoadingImage from '../assets/images/loading.webp'
import Image from 'next/image'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex justify-center items-center z-[9999]">
        <Image
          src={LoadingImage}
          alt="loading"
          className="w-[50vw] max-w-[200px]"
        />
      </div>
    )
  }
  return null
}

export default LoadingScreen
