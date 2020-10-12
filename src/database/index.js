import sequelize from 'sequelize';
import config from '../config/database';

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new sequelize(config);
    }
}

export default new Database();