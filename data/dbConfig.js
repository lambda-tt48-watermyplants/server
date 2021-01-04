const knex = require('knex');

const knexfile = require('../knexfile');
const enviroment = proccess.env.NODE_ENV || 'development';

module.exports = knex(knexfile[enviroment]);