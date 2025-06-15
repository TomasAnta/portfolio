"use client";
import { usePathname } from "next/navigation";
import { StyledList, StyledLogo, StyledNav, StyledUl } from "./Header.styled";
import Button from "@/components/core/Button/Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/core/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
    const t = useTranslations("Header");
    const pathname = usePathname();
    const logoName = "Atomas";
    const isActive = (href: string) => {
        const normalizedPath = pathname.replace(/^\/(en|lt)/, "") || "/";
        const normalizedHref = href === "/" ? "/" : href;

        return href === "/"
            ? normalizedPath === "/"
            : normalizedPath.startsWith(normalizedHref);
    };

    return (
        <header>
            <StyledNav>
                <StyledLogo>
                    <Link href="/">
                        Atomas
                        <span>IO</span>
                    </Link>
                </StyledLogo>
                <StyledUl>
                    <StyledList $active={isActive("/")}>
                        <Link href="/">{t("homepage")}</Link>
                    </StyledList>
                    <StyledList $active={isActive("/about")}>
                        <Link href="/about">{t("about")}</Link>
                    </StyledList>
                    <StyledList $active={isActive("/work")}>
                        <Link href="/work">{t("work")}</Link>
                    </StyledList>
                    <StyledList $active={isActive("/contact")}>
                        <Link href="/contact">{t("contact")}</Link>
                    </StyledList>
                </StyledUl>
                <LanguageSwitcher />
                <Button>
                    <Link href="/talk">{t("talk")}</Link>
                </Button>
            </StyledNav>
        </header>
    );
};

export default Header;
