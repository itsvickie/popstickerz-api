import Sequelize, { Model } from 'sequelize';

class states extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            name: Sequelize.STRING, 
            uf: Sequelize.STRING
        },{
            sequelize
        });
    }
}

export default states;