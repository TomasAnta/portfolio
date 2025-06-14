"use client";

import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { LanguageWrapper, LangItem } from "./languageSwitcher.styled";

export default function LanguageSwitcher() {
    const activeLocale = useLocale();

    const currentPath = usePathname();

    return (
        <LanguageWrapper>
            {routing.locales.map((locale) => (
                <LangItem key={locale} $active={locale === activeLocale}>
                    <Link href={currentPath} locale={locale}>
                        {locale.toUpperCase()}
                    </Link>
                </LangItem>
            ))}
        </LanguageWrapper>
    );
}
