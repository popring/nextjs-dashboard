'use client';

import { useState, Suspense, lazy } from 'react';
import { Textarea } from '@/components/ui/textarea';

// 添加一个固定的延迟时间，以便你可以看到加载状态
function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview')));

function Loading() {
  return (
    <p>
      <i>Loading...</i>
    </p>
  );
}

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');
  return (
    <div className='p-7'>
      <Textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div className='my-6'>
        <label>
          <input
            type='checkbox'
            checked={showPreview}
            onChange={(e) => setShowPreview(e.target.checked)}
          />
          <span className='select-none'>Show preview</span>
        </label>
      </div>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </div>
  );
}
