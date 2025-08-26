import "./globals.css";

export const metadata = {
    title: "Crisma Sousas",
    description: "Sistema de gestão para a Crisma da Paróquia de Sousas",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            tailwind.config = {
                                theme: {
                                    extend: {
                                        colors: {
                                            primary: {
                                                50: '#eff6ff',
                                                100: '#dbeafe',
                                                200: '#bfdbfe',
                                                300: '#93c5fd',
                                                400: '#60a5fa',
                                                500: '#3b82f6',
                                                600: '#2563eb',
                                                700: '#1d4ed8',
                                                800: '#1e40af',
                                                900: '#1e3a8a',
                                            },
                                        },
                                    }
                                }
                            }
                        `,
                    }}
                />
            </head>
            <body className="bg-gray-50 min-h-screen">{children}</body>
        </html>
    );
}
