
export const metadata = {
    title: "Framework - Help",
    description: "A sua plataforma de projetos",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function HelpLayout({ children }) {
    return (
        <html lang="en">
            <body>
                    <main style={{ paddingTop: "3rem" }}>{children}</main>
            </body>
        </html>
    );
}
