'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import { cn } from '@/utils/cn';

import HumanImage from '../assets/images/human.webp';
import Human1Image from '../assets/images/img1.webp';
import Human2Image from '../assets/images/img2.webp';
import Human3Image from '../assets/images/img3.webp';
import Human4Image from '../assets/images/img4.webp';
import Human5Image from '../assets/images/img5.webp';
import Human6Image from '../assets/images/img6.webp';
import Human7Image from '../assets/images/img7.webp';
import Human8Image from '../assets/images/img8.webp';
import Human9Image from '../assets/images/img9.webp';
import Human10Image from '../assets/images/img10.webp';
import Human11Image from '../assets/images/img11.webp';
import Human12Image from '../assets/images/img12.webp';
import Human13Image from '../assets/images/img13.webp';
import Human14Image from '../assets/images/img14.webp';
import Human15Image from '../assets/images/img15.webp';
import Human16Image from '../assets/images/img16.webp';

import LogoImage from '../assets/images/logo.webp';
import DiscordImage from '../assets/images/discord.svg';
import OpeanseaImage from '../assets/images/opensea.svg';
import TwitterImage from '../assets/images/twitter.svg';

import BgImage from '../assets/images/bg-2.png';

const OFFSET_X = 4;

let images = [
  { src: Human9Image, pos: { top: 20 - OFFSET_X * 0, left: 10 } },
  { src: Human8Image, pos: { top: 20 - OFFSET_X * 1, left: 30 } },
  { src: Human7Image, pos: { top: 20 - OFFSET_X * 2, left: 50 } },
  { src: Human6Image, pos: { top: 20 - OFFSET_X * 3, left: 70 } },
  { src: Human5Image, pos: { top: 20 - OFFSET_X * 4, left: 90 } },

  { src: Human4Image, pos: { top: 40 - OFFSET_X * 0, left: 20 } },
  { src: Human3Image, pos: { top: 40 - OFFSET_X * 1, left: 40 } },
  { src: Human2Image, pos: { top: 40 - OFFSET_X * 2, left: 60 } },
  { src: Human13Image, pos: { top: 40 - OFFSET_X * 3, left: 80 } },
  { src: Human16Image, pos: { top: 40 - OFFSET_X * 4, left: 100 } },

  { src: Human10Image, pos: { top: 60 - OFFSET_X * -1, left: 0 } },
  { src: Human15Image, pos: { top: 60 - OFFSET_X * 0, left: 10 } },
  { src: Human14Image, pos: { top: 60 - OFFSET_X * 1, left: 30 } },
  { src: HumanImage, pos: { top: 94, left: 50 } },
  { src: Human12Image, pos: { top: 60 - OFFSET_X * 3, left: 70 } },
  { src: Human11Image, pos: { top: 60 - OFFSET_X * 4, left: 90 } },

  { src: Human10Image, pos: { top: 80 - OFFSET_X * 0, left: 20 } },
  { src: Human9Image, pos: { top: 80 - OFFSET_X * 1, left: 40 } },
  { src: Human8Image, pos: { top: 80 - OFFSET_X * 2, left: 60 } },
  { src: Human7Image, pos: { top: 80 - OFFSET_X * 3, left: 80 } },
  { src: Human6Image, pos: { top: 80 - OFFSET_X * 4, left: 100 } },

  { src: Human5Image, pos: { top: 100 - OFFSET_X * 0, left: 10 } },
  { src: Human4Image, pos: { top: 100 - OFFSET_X * 1, left: 30 } },
  { src: Human3Image, pos: { top: 100 - OFFSET_X * 2, left: 50 } },
  { src: Human2Image, pos: { top: 100 - OFFSET_X * 3, left: 70 } },
  { src: Human1Image, pos: { top: 100 - OFFSET_X * 4, left: 90 } },
];

const Main = () => {
  const page = useRef(0);
  const animating = useRef(false);
  const isMobile = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 768;
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageChange = (opt = 1) => {
    page.current = page.current + opt;
    if (page.current >= 3) {
      page.current = 0;
    } else if (page.current < 0) {
      page.current = 2;
    }

    const mcAnimations = [
      {
        rotateZ: 0,
        scale: 1,
        y: '13vh',
        xPercent: -50,
      },
      {
        rotateZ: -90,
        scale: isMobile.current ? 0.3 : 0.46,
        y: '-25vh',
        xPercent: -50,
      },
      {
        rotateZ: 0,
        scale: isMobile.current ? 0.3 : 0.4,
        y: isMobile.current ? '0vh' : '-12vh',
        xPercent: isMobile.current ? -50 : -100,
      },
    ];

    const humanAnimations = [
      {
        x: 0,
        y: 0,
      },
      {
        y: '112vh',
        x: '112vw',
      },
      {
        y: '112vh',
        x: '112vw',
      },
    ];

    const logoAnimations = [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ];

    const hugeLogoAnimations = [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ];

    const jpTextAnimations = [
      {
        opacity: 0,
      },
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ];

    gsap.to('.human', {
      ...humanAnimations[page.current],
      duration: 0.6,
      stagger: 0.01,
      ease: 'power1.inOut',
    });

    gsap.to('.jp-text', {
      ...jpTextAnimations[page.current],
      duration: 0.4,
      ease: 'power1.inOut',
    });

    gsap.to('.logo', {
      ...logoAnimations[page.current],
      duration: 0.4,
      ease: 'power1.inOut',
    });

    gsap.to('.huge-logo', {
      ...hugeLogoAnimations[page.current],
      duration: 0.4,
      delay: page.current === 1 ? 0.4 : 0,
      ease: 'power1.inOut',
    });

    gsap.to('.mc', {
      ...mcAnimations[page.current],
      duration: 0.6,
      ease: 'power1.inOut',
      onComplete: () => {
        animating.current = false;
      },
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (animating.current) return;

    if (e.deltaY > 0) {
      animating.current = true;
      pageChange(1);
    } else {
      animating.current = true;
      pageChange(-1);
    }
  };

  const prevClientY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    prevClientY.current = touch.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];

    if (animating.current) return;

    if (touch.clientY < prevClientY.current) {
      animating.current = true;
      pageChange(1);
    } else {
      animating.current = true;
      pageChange(-1);
    }
  };

  return (
    <div
      className="w-full h-full relative bg-[#fcf6ec] overflow-hidden"
      // onClick={pageChange}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute animate-moveUp">
        <Image src={BgImage} alt="Bg" className="w-screen aspect-square" />
        <Image src={BgImage} alt="Bg" className="w-screen aspect-square" />
      </div>
      <div>
        <Image
          src={LogoImage}
          alt="Logo"
          className="absolute opacity-0 -translate-y-1/2 top-[40vh] left-1/2 -translate-x-1/2 w-[84vw] huge-logo"
        />
      </div>

      <div
        className={cn(
          'absolute',
          'min-w-full min-h-full aspect-[1.5/1]',
          'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        )}
      >
        {images.map(
          (image, idx) =>
            idx === 13 ? (
              <div
                key={idx}
                className={cn(
                  'mc absolute top-0 w-[45%] left-1/2 translate-y-[13vh] -translate-x-1/2'
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  className="w-full h-auto animate-jump"
                  priority
                />
              </div>
            ) : (
              <div
                key={idx}
                className={cn('absolute top-0 w-[45%] human')}
                style={{
                  top: image.pos.top + '%',
                  left: image.pos.left + '%',
                }}
              >
                <div
                  className={cn(
                    'absolute w-full -translate-x-1/2 -translate-y-1/2'
                  )}
                >
                  <Image
                    src={image.src}
                    alt=""
                    className="w-full h-auto animate-jump"
                    style={{ animationDelay: `${-0.1 * idx}s` }}
                    priority
                  />
                </div>
              </div>
            )
          // null
        )}
      </div>

      <div className="w-full h-full absolute left-0 right-0">
        <Image
          src={LogoImage}
          alt="Logo"
          className="absolute left-8 top-8 lg:top-10 lg:left-10 w-[40vw] lg:w-[30vw] max-w-[380px] logo"
        />

        <div className="absolute bottom-8 left-8 lg:left-10 flex space-x-5">
          <a href="#" target="_blank">
            <Image
              src={DiscordImage}
              alt="Discord"
              className={cn('w-10 h-10', 'transition hover:scale-95')}
            />
          </a>
          <a href="#" target="_blank">
            <Image
              src={OpeanseaImage}
              alt="Opeansea"
              className={cn('w-10 h-10', 'transition hover:scale-95')}
            />
          </a>
          <a href="#" target="_blank">
            <Image
              src={TwitterImage}
              alt="Twitter"
              className={cn(
                'w-10 h-10',
                'transition duration-300 hover:scale-95'
              )}
            />
          </a>
        </div>
      </div>

      <div className="absolute text-[#374a91] font-semibold text-sm lg:text-2xl tracking-[1rem] lg:tracking-[1.6rem] left-[10vw] lg:left-[55vw] top-[20%] lg:top-[40%] jp-text opacity-0">
        <p className="mb-5 wave">ふわふわの動物たちに、</p>
        <p className="mb-10 wave">囲まれて暮らしたい</p>
        <p className="wave">ペットや動物が大好きなあなたへ</p>
      </div>
    </div>
  );
};

export default Main;
