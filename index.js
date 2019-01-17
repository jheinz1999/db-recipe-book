const dishDB = require('./data/db');

dishDB.getRecipes().then(res => console.log(res));
