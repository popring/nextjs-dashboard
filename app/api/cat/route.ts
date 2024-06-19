import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

// 随机生成一个猫猫图片
export async function GET () {
  const result =  await fetch('https://api.thecatapi.com/v1/images/search')
  const data = await result.json()
  return NextResponse.json({ data })
}