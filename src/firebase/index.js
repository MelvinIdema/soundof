import db from "./firebase.config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getTiles = async () => {
    const tilesSnapshot = await getDocs(collection(db, "tiles"));
    return tilesSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data
        }
    });
}

export const createTile = async (tile) => {
    const theTile = {
        variant: tile.variant,
        column: tile.column,
        row: tile.row
    }
    await addDoc(collection(db, 'tiles'), theTile);
}
