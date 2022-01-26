import db from "./firebase.config";
import { collection, doc, getDocs, addDoc, updateDoc, getDoc } from "firebase/firestore";

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
    const createdTile = await addDoc(collection(db, 'tiles'), tile);
    return createdTile.id;
}

export const updateTile = async (tileId, update) => {
    const tileRef = doc(db, "tiles", tileId);
    await updateDoc(tileRef, {
        ...update
    });
}

/**
 * Tile Information
 */

export const createTileInfo = async (tileInfo) => {
    const theTileInfo = {
        tileId: tileInfo.tileId,
        story: tileInfo.story,
        title: tileInfo.title
    }
    const createdTileInfo = await addDoc(collection(db, 'tileInfos'), theTileInfo);
    return createdTileInfo.id;
}

export const getTileInfo = async (id) => {
    const tileInfoSnapshot = await getDoc(doc(db, 'tileInfos', id));
    if(tileInfoSnapshot.exists()) {
        return {
            id: tileInfoSnapshot.id,
            ...tileInfoSnapshot.data()
        };
    } else {
        return console.error("TileInfo Not Found");
    }
}
