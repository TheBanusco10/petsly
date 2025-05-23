declare global {
    const __APP_VERSION__: string;
    
    interface DocumentEventMap {
        "onNavbarItemClicked": CustomEvent<{ href: string, label: string, callback?: () => void }>;
    }
}

export {};