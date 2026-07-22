import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Imec Oficina Mecânica | Itapevi",
    description: "Mecânica para nacionais e importados em Itapevi.",
    icons: { icon: "/imec/logo.jpg" },
    openGraph: {
      title: "Imec Oficina Mecânica",
      description: "Nacionais e importados em Itapevi.",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Imec Oficina Mecânica" }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Imec Oficina Mecânica",
      description: "Nacionais e importados em Itapevi.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
