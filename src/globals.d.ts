declare global {
    interface CardGame {
        id: number,
        name: string,
        description: string,
        isFavorite: boolean,
        image: string,
    }
}

export {};