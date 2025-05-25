import { CarouselAddItem } from "./Carousel/CarouselAddItem";
import { CarouselItem } from "./Carousel/CarouselItem";

export const PetsCarousel = () => {
    const mock = [
        {
            name: 'Buddy',
            image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            name: 'Midori',
            image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];

    return (
        <section className="flex gap-4">
            <CarouselAddItem />
            {mock.map((pet) => (
                <CarouselItem key={pet.name} {...pet} />
            ))}
        </section>
    )
}