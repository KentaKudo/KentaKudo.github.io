"use client";

import { X, Copy, Share2, Twitter } from "lucide-react"; // Assuming you're using lucide-react for icons
import { useState } from "react";

interface ShareButtonProps {
  url: string;
  title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;

  const shareData = {
    title: title,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      setIsDialogOpen(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <Share2 size={16} />
        Share
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Share via:</p>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    fullUrl
                  )}&text=${encodeURIComponent(`${title} @___________k_k_`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Or copy the link:</p>
              <div className="flex">
                <input
                  type="text"
                  value={fullUrl}
                  readOnly
                  className="flex-grow border rounded-l px-2 py-1 text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600"
                >
                  <Copy size={16} />
                </button>
              </div>
              {isCopied && (
                <p className="text-sm text-green-600 mt-1 transition-opacity duration-200">
                  Copied to clipboard!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
