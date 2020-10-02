const {extractJson} = require('./modules/json-helper');


const app = async () => {
    const data = await extractJson('./data/personnage.json');
    console.log(data);
}
app();
