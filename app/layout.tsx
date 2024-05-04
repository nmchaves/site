import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link, { LinkProps } from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nico Chaves",
  description: "Nico Chaves is a full-stack software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-8 flex justify-center">
          <nav>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="https://github.com/nmchaves">GitHub</HeaderLink>
            <HeaderLink href="https://www.linkedin.com/in/chavesnico">
              LinkedIn
            </HeaderLink>
            <HeaderLink href="https://www.copybass.com">
              CopyBass.com
            </HeaderLink>
          </nav>
        </header>
        <div className="p-8 md:p-16 md:pt-8">{children}</div>
      </body>
    </html>
  );
}

function HeaderLink({
  children,
  ...props
}: LinkProps & { children: React.ReactNode }) {
  return (
    <Link {...props} className="px-4 text-sm">
      {children}
    </Link>
  );
}
