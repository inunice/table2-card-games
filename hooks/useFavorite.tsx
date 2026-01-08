import { useState } from "react";

export default function useFavorite() {
    const [isFavorited, setisFavorited] = useState(true);

    const toggleFavorite = async () => {
        setisFavorited(!isFavorited);

        // POST Request here
    }
    return {
        isFavorited,
        toggleFavorite
    }
}