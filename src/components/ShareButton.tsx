"use client";

interface ShareButtonProps {
  url: string;
  title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    fullUrl
  )}&text=${encodeURIComponent(`${title} @___________k_k_`)}`;

  return (
    <a
      href={twitterShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 text-slate-400 rounded-full hover:text-slate-600 hover:bg-slate-100 duration-300 ease-in-out"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 1200 1227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
