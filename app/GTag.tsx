import { FC } from "react";

const TRACKING_ID = "G-FC2KF4RL0P";

export const GTag: FC = () => {
  if (!import.meta.env.PROD) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${TRACKING_ID}');
              `,
        }}
      />
    </>
  );
};
