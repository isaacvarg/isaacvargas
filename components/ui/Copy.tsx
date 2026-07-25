'use client';

import { useState } from 'react';

const CopyButton = ({ dataToCopy }: { dataToCopy: string }) => {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dataToCopy);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 rounded text-primary-content font-medium transition-colors ${isCopied ? 'bg-success' : 'bg-info'
        }`}
    >
      {isCopied ? '✓ Copied!' : 'Copy Content'}
    </button>
  );
}

export default CopyButton
