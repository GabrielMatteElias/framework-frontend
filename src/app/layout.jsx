import { AuthProvider } from "@/providers/auth";
import "./globals.css";
import { Header } from "@/components/Header";


export const metadata = {
  title: "Framework",
  description: "A sua plataforma de projetos",
  icons: {
    icon: "/favicon.ico", // ou .png / .svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main style={{ paddingTop: "10rem" }}>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
