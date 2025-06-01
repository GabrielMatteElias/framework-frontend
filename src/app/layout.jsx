import { AuthProvider } from "@/providers/auth";
import "./globals.css";
import { Header } from "@/components/Header";


export const metadata = {
  title: "Framework",
  description: "A sua plataforma de projetos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <div style={{paddingTop: "10rem"}}>
          {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
