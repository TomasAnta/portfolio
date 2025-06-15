"use client";
import ContentCard from "@/components/core/ContentCard/ContentCard";
import {
    StyledDescription,
    StyledImage,
    StyledName,
    StyledSpeciality,
    StyledText,
} from "./Profile.styled";

const Profile = () => {
    return (
        <ContentCard
            padding={"32px 48px"}
            background={
                "linear-gradient(114deg, rgba(255, 255, 255, 0.08) 10.15%, rgba(255, 255, 255, 0.01) 89.36%)"
            }
            borderColor={"rgba(255, 255, 255, 0.50)"}
            maxWidth={"568px"}
        >
            <StyledImage>
                <img
                    src="/images/profile-placeholder.png"
                    alt="Profile"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "50%",
                    }}
                />
            </StyledImage>
            <StyledText>
                <StyledSpeciality>Front End Developer</StyledSpeciality>
                <StyledName>Tomas Antanaitis</StyledName>
                <StyledDescription>
                    I am Front End Developer based in Vilnius, Lithuania.
                </StyledDescription>
            </StyledText>
        </ContentCard>
    );
};

export default Profile;
