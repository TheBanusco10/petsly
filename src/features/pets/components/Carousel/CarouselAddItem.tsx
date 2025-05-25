import { CarouselItem } from "./CarouselItem"
import { MdAdd } from "react-icons/md";

export const CarouselAddItem = () => {
    return (
        <CarouselItem>
            <button className="w-full h-full flex items-center justify-center cursor-pointer">
                <MdAdd size={24} />
            </button>
        </CarouselItem>
    )
}