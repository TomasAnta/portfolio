import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import ThemeRegistry from "@/styles/ThemeRegistry";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
    title: "Atomas.io | Front-End Developer",
    description:
        "Atomas.io is a portfolio website showcasing the work of a front-end developer. It features projects, skills, and contact information.",
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className={`${inter.variable} ${outfit.variable}`}>
            <body suppressHydrationWarning>
                <NextIntlClientProvider>
                    <ThemeRegistry>{children}</ThemeRegistry>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
