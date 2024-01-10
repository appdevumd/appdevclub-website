import type { Metadata } from 'next'
import "./main.css";

export const metadata: Metadata = {
    title: 'App Dev Club @ UMD',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
