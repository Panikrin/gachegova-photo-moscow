import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Полина Гачегова — фотограф в Москве',
  description:
    'Живые семейные, женские и городские фотосессии в Москве. Помощь с подготовкой и позированием.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
