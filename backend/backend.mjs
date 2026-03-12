import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allArtiste() {
const records = await pb.collection('Artistes').getFullList();
return records ;
}

export async function allArtisteSorted() {
const records = await pb.collection('Artistes').getFullList({ sort : 'Date_heure_production' }) ;
return records ;
}

export async function SceneSortedByName() {
const records = await pb.collection('Scenes').getFullList({ sort : 'Nom' }) ;
return records ;
}

export async function allArtisteSortedByName() {
const records = await pb.collection('Artistes').getFullList({ sort : 'Nom' }) ;
return records ;
}

export async function oneArtiste(id) {
    const records = await pb.collection('Artistes').getOne(id);
    return records;
}

export async function oneScene(id) {
    const records = await pb.collection('Scenes').getOne(id);
    return records;
}

export async function allArtisteBySceneIdDate(scene_id) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `Scene.id= '${scene_id}'`,
        expand: 'Scene',
        sort: 'Date_heure_production'
    })
    return records;
}

export async function allArtisteBySceneNameDate(scene_name) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `Scene.Nom= '${scene_name}'`,
        expand: 'Scene',
        sort: 'Date_heure_production'
    })
    return records;
}

export async function updateArtistesById(id, updateArtistes) {
    await pb.collection('Artistes').update(id, updateArtistes)
}

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function allArtisteByScene(scene_name) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `Scene.id= '${scene_name}'`,
        expand: 'Scene',
    })
    return records;
}

export async function scenesByArtisteId(artiste_id) {
    const artiste = await pb.collection('Artistes').getOne(artiste_id, {
        expand: 'Scene',
    });

    const scenes = artiste.expand?.Scene;
    if (!scenes) return [];

    return Array.isArray(scenes) ? scenes : [scenes];
}

const formatter = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
});

export function formatDate(dateString) {
        if (!dateString) return "Date non renseignee";

        const date = new Date(dateString);
        if (Number.isNaN(date.getTime())) return "Date invalide";

        return formatter.format(date);
}