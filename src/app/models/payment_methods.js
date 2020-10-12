import Sequelize, { Model } from 'sequelize';

class payment_methods extends Model{
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

export default payment_methods;