import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; /* Import Capitulo 3 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      { /* Incluido className - Capitulo 3 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
