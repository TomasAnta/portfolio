"use client";
import ContentCard from "@/components/core/ContentCard/ContentCard";
import {
    StyledDescription,
    StyledImage,
    StyledName,
    StyledSpeciality,
    StyledText,
} from "./Profile.styled";
import Image from "next/image";
import ButtonIcon from "@/components/icons/ButtonIcon";

const Profile = () => {
    return (
        <ContentCard
            padding={"32px 48px"}
            background={
                "linear-gradient(114deg, rgba(255, 255, 255, 0.08) 10.15%, rgba(255, 255, 255, 0.01) 89.36%)"
            }
            borderColor={"rgba(255, 255, 255, 0.50)"}
            maxWidth={"568px"}
            gap={"40px"}
        >
            <StyledImage>
                <Image
                    src="/images/profile.png"
                    alt="Tomas Antanaitis"
                    width={224}
                    height={224}
                />
            </StyledImage>
            <StyledText>
                <StyledSpeciality>Front End Developer</StyledSpeciality>
                <StyledName>Tomas Antanaitis</StyledName>
                <StyledDescription>
                    I am Front End Developer based in Vilnius, Lithuania.
                </StyledDescription>
                <ButtonIcon />
            </StyledText>
        </ContentCard>
    );
};

export default Profile;
