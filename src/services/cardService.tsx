const BASE_URL = 'https://n92qotcp4m.execute-api.ap-southeast-2.amazonaws.com';

export const cardService = {
  getAll: async () => {
    try {
      const response = await fetch(`${BASE_URL}/cardgames`);
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      throw new Error("Network error occurred");
    }
  },

  updateFavorite: async (id: number, isFavorite: boolean) => {
    const response = await fetch(`${BASE_URL}/cardgames/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite }),
    });

    if (!response.ok) throw new Error('Failed to update favorite status');
    return response.json();
  },

  create: async (gameData: any) => {
    const res = await fetch(`${BASE_URL}/cardgames`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gameData),
    });
    if (!res.ok) throw new Error("Failed to create game");
    return res.json();
  }
};