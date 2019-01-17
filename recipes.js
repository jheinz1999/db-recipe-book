const express = require('express');

const genericErr = require('./common/error');
const db = require('./data/db');

const server = express.Router();

server.get('/', async (req, res) => {

  try {

    const data = await db.getRecipes();

    res.status(200).json(data);

  }

  catch (err) {

    genericErr(err, res);

  }

});

server.post('/', async (req, res) => {

  const { name } = req.body;

  if (!name) {

    res.status(400).json({message: 'Invalid fields in request body'});
    return;

  }

  try {

    const id = await db.addRecipe({ name });
    res.status(201).json(id);

  }

  catch (err) {

    genericErr(err, res);

  }

});

/*server.put('/:id', async (req, res) => {

  const id = req.params.id;
  let data;

  try {

    data = await db.select().from(table).where({ id });

    if (!data.length) {

      res.status(404).json({message: 'Cohort not found!'});
      return;

    }

    let { name } = req.body;

    if (!name) {

      res.status(400).json({message: 'Invalid fields in request body'});
      return;

    }

    const newData = await db.update({ name }).from(table).where({ id });

    res.status(200).json({message: 'success'});

  }

  catch (err) {

    genericErr(err, res);

  }

});

server.delete('/:id', async (req, res) => {

  const id = req.params.id;

  try {

    const data = await db.select().from(table).where({ id });

    if (!data.length) {

      res.status(404).json({message: 'Cohort not found!'});
      return;

    }

    const newData = await db.delete().from(table).where({ id });

    res.status(200).json(newData);

  }

  catch (err) {

    genericErr(err, res);

  }

});*/

module.exports = server;
