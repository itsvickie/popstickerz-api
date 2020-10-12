import Sequelize, { Model } from 'sequelize';

class products extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            image: Sequelize.STRING,
            base_price: Sequelize.FLOAT,
            user_created: Sequelize.INTEGER,
            user_updated: Sequelize.INTEGER,
            inative: Sequelize.BOOLEAN,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.users, { foreignKey: 'user_created', as: 'users' });
        this.belongsTo(models.users, { foreignKey: 'user_updated', as: 'users' });
    }
}

export default products;