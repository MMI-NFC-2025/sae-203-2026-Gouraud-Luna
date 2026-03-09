import {pb, allArtisteSorted, SceneSortedByName, allArtisteSortedByName, oneArtiste, oneScene, allArtisteBySceneIdDate, allArtisteBySceneNameDate, updateArtistesById} from './backend.mjs'

/* 
try {
const records = await allArtisteSorted() ;
console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await SceneSortedByName() ;
console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await allArtisteSortedByName() ;
console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
console.error(e) ;
}

try {
    const records = await oneArtiste('0fqq70tvzqap0un');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const records = await oneScene('iw0ee82izrm98qo');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

const records = await allArtisteBySceneIdDate('zbpzsga6jwupxov');
console.log(JSON.stringify(records, null, 2));


const records = await allArtisteBySceneNameDate('Le Studio');
console.log(JSON.stringify(records, null, 2));*/

try {
    const data = {
        "Nom": "test",
        "Description": 'test',
    };

    await updateArtistesById('8h1055oks5a74i2', data);
} catch (e) {
    console.error(e);
} //j'ai créer un record test pour tester puis je l'ai supprimé