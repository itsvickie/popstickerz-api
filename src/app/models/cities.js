import Sequelize, { Model } from 'sequelize';

class cities extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            name: Sequelize.STRING,
            id_states: Sequelize.INTEGER
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.states, { foreignKey: 'id_states', as: 'states' });
    }
}

export default cities;