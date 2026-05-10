import type { Metadata } from "next";
import "./globals.css";
import { getClient } from "@/lib/sanity";
import { siteQuery } from "@/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getClient()
    .fetch(siteQuery)
    .catch(() => null);
  const title = site?.title || "Festival Teknik 2026";
  const description =
    site?.description ||
    "A premium underground cinematic festival profile for Festival Teknik 2026.";

  return {
    metadataBase: new URL("https://festival-teknik-2026.vercel.app"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: ["/favicon.svg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
