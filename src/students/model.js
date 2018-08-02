const mock = require('./mock');
const syncPromise = require('../utils').syncPromise;
const getConnection = require('../db');

function getList(){

    return new Promise((resolve, reject) => {
        const connection = getConnection();
        connection.connect();
        connection.query('SELECT * FROM students', (err, result)=>{
            err ? reject(err) : resolve(result);
        });
        connection.end();
    });
}

function getOne(id){
    return new Promise((resolve, reject) => {
        const connection = getConnection();
        connection.connect();
        connection.query('SELECT * FROM students WHERE id = ?', id, (err, result)=>{
            if (!err) {
                result.length ? resolve(result[0]) : resolve(null)
            } else {
                reject(err);
            }
        });
        connection.end();
    });
}

function update(id, data){
    return new Promise((resolve, reject) => {
        const connection = getConnection();
        connection.connect();
        connection.query("UPDATE students  SET ? WHERE id = ?",[data, id], (err, result) => {
            if (!err) {
                err ? reject(err) : resolve(result);
            } else {
                reject(err)
            }
        });
        connection.end();
    });
}

function create(data){
    data.id = Date.now();

    mock.push(data);

    return syncPromise(data);
}

function deleteOne(id){
    mock = mock.filter(item => item.id !=id);

    return syncPromise(null);
}

module.exports = {
    getList,
    getOne,
    create,
    update,
    deleteOne
}