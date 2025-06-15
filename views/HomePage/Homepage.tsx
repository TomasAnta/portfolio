import Header from "@/components/layout/Header/Header";
import { PageGrid, PageWrapper } from "../pages.styled";
import Profile from "@/components/layout/Cards/Profile/Profile";

const Homepage = () => {
    return (
        <PageWrapper>
            <Header />
            <PageGrid>
                <Profile />
            </PageGrid>
        </PageWrapper>
    );
};

export default Homepage;
