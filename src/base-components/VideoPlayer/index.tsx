"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { PlayCircleIcon } from "@heroicons/react/20/solid";

// 动态导入 ReactPlayer，禁用 SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoPlayerProps {
  src: string;
  alt?: string;
  cover?: string; // 添加封面图片的 props
  autoPlay?: boolean;
}

export const VideoPlayer = ({ src, alt, cover, autoPlay }: VideoPlayerProps) => {
  const fileName = src.split('/').pop()?.split('.')[0];
  const defaultCover = `/covers/${fileName}.jpg`;
  const [playing, setPlaying] = useState(autoPlay); // 控制视频播放状态
  const [showCover, setShowCover] = useState(true); // 控制封面的显示状态

  const shouldShowCover = autoPlay ? false : (showCover && !!fileName); // 是否显示封面
  // 当用户点击封面时触发
  const handleCoverClick = () => {
    setShowCover(false); // 隐藏封面
    setPlaying(true); // 开始播放视频
  };

  return (
    <>
      {shouldShowCover ? (
        <div className='relative w-full'>
          <Image
            src={cover || defaultCover}
            alt={alt || fileName || 'video cover'}
            width={325}
            height={183}
            className='cursor-pointer w-full h-auto rounded-t-xl'
            onClick={handleCoverClick} // 点击封面时触发播放
          />
          <PlayCircleIcon
            className='h-16 w-16 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white cursor-pointer'
            onClick={handleCoverClick}
          />
        </div>
      ) : (
        <ReactPlayer
          url={src}
          playing={playing}
          controls={true}
          width="100%"
          height="100%"
          className={"rounded-xl"}
        />
      )}
    </>
  );
};
