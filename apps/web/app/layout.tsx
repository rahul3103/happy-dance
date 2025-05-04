// import { Geist, Geist_Mono } from "next/font/google"

// import "@workspace/ui/globals.css"
// import { Providers } from "@/components/providers"

// const fontSans = Geist({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
//       >
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   )
// }

import "@workspace/ui/globals.css";
import { Metadata, Viewport } from "next";

import { META_THEME_COLORS, siteConfig } from "@/config/site";
import { NeuePlak, Roslindale } from "@/lib/fonts";
import { cn } from "@workspace/ui/lib/utils";
import { ThemeProvider } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@workspace/ui/components/sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  // metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // images: [
    //   {
    // url: siteConfig.ogImage,
    // width: 1200,
    // height: 630,
    // alt: siteConfig.name,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.svg",
    // shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
            }}
          />
        </head>
        <body
          className={cn(
            "bg-background min-h-svh font-sans antialiased",
            NeuePlak.variable,
            Roslindale.variable,
            "font-sans",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <div vaul-drawer-wrapper="">
              <div className="bg-background relative flex min-h-svh flex-col">
                {children}
              </div>
            </div>
            <TailwindIndicator />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
