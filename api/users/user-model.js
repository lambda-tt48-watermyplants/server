const db = require('../../data/dbConfig');

module.exports = {
    find,
    insert,
    // findBy,
    // update, 
    // remove
}

function find(){
    return db('users');
}

function insert(user){
    return db('users').insert(user);
}

