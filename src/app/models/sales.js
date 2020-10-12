import Sequelize, { Model } from 'sequelize';

class sales extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            purchase_data: Sequelize.DATETIME,
            payment_method: Sequelize.INTEGER,
            customer: Sequelize.INTEGER,
            carrier: Sequelize.INTEGER,
            carrier_price: Sequelize.FLOAT,
            purchase_price: Sequelize.FLOAT,
            total_price: Sequelize.FLOAT,
            discount_price: Sequelize.FLOAT,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.payment_methods, { foreignKey: 'payment_method', as: 'payment_methods' });
        this.belongsTo(models.customers, { foreignKey: 'customer', as: 'customers' });
        this.belongsTo(models.carriers, { foreignKey: 'carrier', as: 'carriers' });
    }
}

export default sales;