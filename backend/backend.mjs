import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allArtisteSorted() {
const records = await pb.collection('Artistes').getList(1, 50, { sort : 'Date_heure_production' }) ;
return records ;
}

export async function SceneSortedByName() {
const records = await pb.collection('Scenes').getList(1, 50, { sort : 'Nom' }) ;
return records ;
}

export async function allArtisteSortedByName() {
const records = await pb.collection('Artistes').getList(1, 50, { sort : 'Nom' }) ;
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