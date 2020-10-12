import Sequelize, { Model } from 'sequelize';

class products_sales extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            id_sales: Sequelize.INTEGER,
            id_products: Sequelize.INTEGER,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.sales, { foreignKey: 'id_sales', as: 'sales' });
        this.belongsTo(models.products, { foreignKey: 'id_products', as: 'products' });
    }
}

export default products_sales;