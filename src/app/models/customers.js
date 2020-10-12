import Sequelize, { Model } from 'sequelize';

class customers extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            user: Sequelize.INTEGER,
            password: Sequelize.STRING,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.users, { foreignKey: 'user', as: 'users' });
    }
}

export default customers;