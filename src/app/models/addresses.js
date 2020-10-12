import Sequelize, { Model } from 'sequelize';

class addresses extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            city: Sequelize.INTEGER,
            user: Sequelize.INTEGER,
            deliver_to: Sequelize.STRING,
            street: Sequelize.STRING,
            number: Sequelize.CHAR,
            cep: Sequelize.CHAR,
            complement: Sequelize.STRING,
            inative: Sequelize.BOOLEAN,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.cities, { foreignKey: 'city', as: 'cities' });
        this.belongsTo(models.users, { foreignKey: 'user', as: 'users' });
    }
}

export default employees;