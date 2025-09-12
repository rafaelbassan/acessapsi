import Image from 'next/image'
import { ComponentProps } from 'react'

interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, 'src' | 'alt'> {
  src: string
  alt: string
  priority?: boolean
}

export function OptimizedImage({ 
  src, 
  alt, 
  priority = false, 
  className,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSd5cNrlWIlldZKnM7kXGa+fKjZaJfcfjz5sF4qY1PG2YNb9yxzl/wC7B/AHpLOoHFJ5nUkSvvMpMqhRKNsGmB9P7ElvXhq9rCQM7TT4+rFlvhNckVOVu6ZL91f6KZPMpQKdavXkOFJqtPkzZDi8rW3lFjeCL++g5qvNgSxRxCgqynoUYhQu4fE8Cz8pQp6QRXTdMjQKi7R1Nwi5+X+7kk8ddjFPPjyaVjAQTSPfpFnE+qYvPtvQXgDjfVk="
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  )
}
