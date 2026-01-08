export async function fetchCardGames(): Promise<CardGame[]> {
  try {
    const cardGames: CardGame[] = []; // FETCH HERE
    return cardGames;
  } catch (error) {
    console.error("Failed to fetch card games:", error);
    return [];
  }
}