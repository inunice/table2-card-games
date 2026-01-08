import { useState } from "react";
import { cardService } from "../services/cardService";

export default function useFavorite(gameId: number, currentIsFavorite: boolean) {
    const [isFavorite, setisFavorite] = useState(currentIsFavorite);

    const toggleFavorite = async () => {
        const newValue = !isFavorite;
        
        setisFavorite(newValue);

        try {
            await cardService.updateFavorite(gameId, newValue);
        } catch (err) {
            console.error("Failed to save favorite:", err.message);
            setisFavorite(!newValue); 
            alert("Could not save favorite. Please try again.");
        }
    }
    return {
        isFavorite,
        toggleFavorite
    }
}