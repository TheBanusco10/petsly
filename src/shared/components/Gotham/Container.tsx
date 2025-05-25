interface GothamContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const GothamContainer = ({ children, className }: GothamContainerProps) => {
    return (
        <div className={`container mx-auto ${className}`}>
            {children}
        </div>
    )
}