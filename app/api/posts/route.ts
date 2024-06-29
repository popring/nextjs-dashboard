import { NextRequest, NextResponse } from 'next/server';

// export const dynamic = 'force-dynamic'

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 }
  );
}
