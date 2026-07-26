'use client';

import { useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

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
      className={`btn btn-ghost btn-sm transition-colors ${isCopied ? 'btn-success' : 'btn-accent'}`}
    >
      {isCopied ? <LuCheck /> : <LuCopy />}
    </button>
  );
}

export default CopyButton
