"use client";
import { StyledList, StyledLogo, StyledNav, StyledUl } from "./header.styled";
import { StyledButton } from "@/components/core/button/button.styled";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/core/languageSwitcher/LanguageSwitcher";

const Header = () => {
    const t = useTranslations("Header");

    return (
        <header>
            <StyledNav>
                <StyledLogo>
                    <Link href="/">Atomas.io</Link>
                </StyledLogo>
                <StyledUl>
                    <StyledList>
                        <Link href="/">{t("homepage")}</Link>
                    </StyledList>
                    <StyledList>
                        <Link href="/about">{t("about")}</Link>
                    </StyledList>
                    <StyledList>
                        <Link href="/work">{t("work")}</Link>
                    </StyledList>
                    <StyledList>
                        <Link href="/contact">{t("contact")}</Link>
                    </StyledList>
                </StyledUl>
                <LanguageSwitcher />

                <StyledButton>
                    <Link href="/talk">{t("talk")}</Link>
                </StyledButton>
            </StyledNav>
        </header>
    );
};

export default Header;
