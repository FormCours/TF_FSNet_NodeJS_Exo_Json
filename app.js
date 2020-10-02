const {extractJson} = require('./modules/json-helper');


const getPersonnages = (data) => {
    if(data.membre !== undefined) {
        let personnages = [];
        for(const membre of data.membre) {
            personnages = [...personnages, ...getPersonnages(membre)]
        }
        return personnages
    }
    else {
        return [data];
    }
}


const app = async () => {
    const data = await extractJson('./data/personnage.json');

    const personnages = getPersonnages(data);
    
    console.log(personnages);
}
app();
