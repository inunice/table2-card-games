import { useState } from "react";
import { cardService } from "../services/cardService";
import { PlusCircle, Loader2 } from "lucide-react";

export default function AddGameForm({ onGameAdded }) {
  const [formData, setFormData] = useState({ name: "", description: "", isFavorite: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newGame = await cardService.create(formData);
      onGameAdded(newGame);
      setFormData({ name: "", description: "", isFavorite: false });
    } catch (err) {
      console.error("Failed to add game:", err.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-muted p-6 rounded-xl flex flex-col gap-4 mb-8">
      <h2 className="text-xl font-bold text-wood flex items-center gap-2">
        <PlusCircle className="text-ocean" size={20} /> Add New Game
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          type="text"
          placeholder="Game Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-ocean outline-none transition-all"
        />
        <div className="flex items-center gap-3 px-3">
          <input
            type="checkbox"
            id="fav-check"
            checked={formData.isFavorite}
            onChange={(e) => setFormData({ ...formData, isFavorite: e.target.checked })}
            className="w-5 h-5 accent-ocean cursor-pointer"
          />
            <label htmlFor="fav-check" className="text-slate-600 cursor-pointer select-none">Favorite?</label>
        </div>
      </div>

      <textarea
        required
        placeholder="Brief description..."
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="p-3 border rounded-lg focus:ring-2 focus:ring-ocean outline-none h-24 transition-all"
      />

      <button
        disabled={isSubmitting}
        className="bg-ocean text-cream font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all flex justify-center items-center gap-2 disabled:bg-slate-300"
      >
        {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Add to Collection"}
      </button>
    </form>
  );
}