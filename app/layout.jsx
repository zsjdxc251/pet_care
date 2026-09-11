import "./globals.css";

export const metadata = {
  title: "毛孩子洗护馆 | 宠物洗护预约",
  description: "毛孩子洗护馆宠物洗护预约页面",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
