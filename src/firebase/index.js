import db from "./firebase.config";
import { collection, doc, getDocs, addDoc, updateDoc } from "firebase/firestore";

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
        row: tile.row,
        level: 1
    }
    await addDoc(collection(db, 'tiles'), theTile);
}

export const updateTile = async (tile, update) => {
    const tileRef = doc(db, "tiles", tile.id);
    await updateDoc(tileRef, {
        ...update
    });
}
