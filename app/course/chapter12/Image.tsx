'use client';
import { useState } from 'react';
import { fetchData } from './fetch';

export default function ViewImage({ imageUrl }: any) {
  const [url, setUrl] = useState(imageUrl);
  const loadData = async () => {
    setUrl('');
    const url = await fetchData();

    setUrl(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={loadData} disabled={!url}>
        random change image
      </button>
      <img src={url} width='300' alt='cat' />
    </div>
  );
}
