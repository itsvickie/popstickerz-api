import Sequelize, { Model } from 'sequelize';

class stocks extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            id_products: Sequelize.INTEGER,
            quantity: Sequelize.INTEGER,
            user_created: Sequelize.INTEGER,
            user_updated: Sequelize.INTEGER,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.products, { foreignKey: 'id_products', as: 'products' });
        this.belongsTo(models.users, { foreignKey: 'user_created', as: 'users' });
        this.belongsTo(models.users, { foreignKey: 'user_updated', as: 'users' });
    }
}

export default stocks;