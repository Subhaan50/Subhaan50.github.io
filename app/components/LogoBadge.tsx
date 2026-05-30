'use client'

import { useState } from 'react'
import Image from 'next/image'

interface LogoBadgeProps {
  src: string
  alt: string
  fallback: string
}

export default function LogoBadge({ src, alt, fallback }: LogoBadgeProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="w-10 h-10 rounded-lg shrink-0 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center text-xs font-bold text-white">
      {!imgFailed ? (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        fallback
      )}
    </div>
  )
}
