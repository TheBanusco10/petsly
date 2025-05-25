import { PetsCarousel } from "../../features/pets/components/PetsCarousel"
import { GothamContainer } from "../components/Gotham/Container"

export const DashboardPage = () => {
    return (
        <GothamContainer>
            <h1>Dashboard Page</h1>
            <PetsCarousel />
        </GothamContainer>
    )
}