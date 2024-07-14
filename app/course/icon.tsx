// app/icon.js
import { ImageResponse } from 'next/og'
import { ServerRuntime } from 'next'
 
// 路由段配置
export const runtime: ServerRuntime = 'edge'
 
// 图片 metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// 图片生成
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX 元素
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '100%',
        }}
      >
        P
      </div>
    ),
    // ImageResponse options
    {
      // 方便复用 size
      ...size,
    }
  )
}
