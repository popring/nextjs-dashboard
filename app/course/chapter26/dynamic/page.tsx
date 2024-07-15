'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@radix-ui/themes'
 
// Client Components:
const ComponentA = dynamic(() => import('./components/a'))
const ComponentB = dynamic(() => import('./components/b'))
const ComponentC = dynamic(() => import('./components/c'), { ssr: false })
 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
      {/* 立刻加载，但会使用一个独立的客户端 bundle */}
      <ComponentA />
 
      {/* 按需加载 */}
      {showMore && <ComponentB />}
      <Button onClick={() => setShowMore(!showMore)}>Toggle</Button>
 
      {/* 只在客户端加载 */}
      <ComponentC />
    </div>
  )
}
