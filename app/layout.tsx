import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Idol Site',
  description: '日本地下偶像演出聚合 + 博客 + 相册（MVP）'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <header className="border-b">
          <div className="container py-4 flex items-center justify-between">
            <a className="font-extrabold text-xl" href="/">Underground Idols</a>
            <nav className="flex gap-4 text-sm">
              <a className="link" href="/events">演出</a>
              <a className="link" href="/blog">博客</a>
              <a className="link" href="/albums">相册</a>
            </nav>
          </div>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="border-t mt-10">
          <div className="container py-6 text-sm text-gray-500">
            © 2025 Idol Site
          </div>
        </footer>
      </body>
    </html>
  );
}
