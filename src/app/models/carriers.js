import Sequelize, { Model } from 'sequelize';

class carriers extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            description: Sequelize.STRING
        },{
            sequelize
        });
    }
}

export default carriers;