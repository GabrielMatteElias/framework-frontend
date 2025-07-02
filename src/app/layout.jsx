import { AuthProvider } from "@/providers/auth";
import "./globals.css";
import { Header } from "@/components/Header";


export const metadata = {
  title: "Framework",
  description: "A sua plataforma de projetos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AuthProvider> */}
          <Header />
          <main style={{ paddingTop: "3rem" }}>{children}</main>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
