import '../index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Skydan Dmytro</title>
        <meta name="description" content="Portfolio" data-rh="true" />
        <link rel="icon" href="/icon.png" type="image/png" />

        <meta property="og:title" content="Skydan Dmytro" />
        <meta property="og:description" content="Portfolio Website" />
        <meta property="og:url" content="https://skydmytro.vercel.app/" />
        <meta
          property="og:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skydmytro.vercel.app/Skydan%20Dmytro/Portfolio%20website/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png"
        />
        <meta
          property="og:image:alt"
          content="Portfolio website image preview"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Skydan Dmytro Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skydan Dmytro" />
        <meta name="twitter:description" content="Portfolio Website" />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skydmytro.vercel.app/Skydan%20Dmytro/Portfolio%20website/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png"
        />
        <meta name="twitter:image:alt" content="Twitter image preview" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
