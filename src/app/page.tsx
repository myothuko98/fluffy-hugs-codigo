'use client';
import React from 'react';
import Main from '@/components/main';
import { cn } from '@/utils/cn';
import LoadingScreen from '@/components/LoadingScreen';

const Home = () => {
  return (
    <main className={cn('w-screen h-screen overflow-hidden')}>
      <Main />
      <LoadingScreen />
    </main>
  );
};

export default Home;
