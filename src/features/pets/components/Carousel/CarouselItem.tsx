interface CarouseItemProps {
    image?: string;
    name?: string;
    children?: React.ReactNode;
}

export const CarouselItem = ({ image, name, children }: CarouseItemProps) => {
    return (
        <article className="flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
            {children}
            {image && <img className="w-full h-full object-cover object-center" src={image} alt={name || ""} />}
        </article>
    )
}