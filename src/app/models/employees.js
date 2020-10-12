import Sequelize, { Model } from 'sequelize';

class employees extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            user: Sequelize.INTEGER,
            role: Sequelize.INTEGER,
            system_name: Sequelize.STRING,
            password: Sequelize.STRING,
            salary: Sequelize.FLOAT,
            inative: Sequelize.BOOLEAN,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.users, { foreignKey: 'user', as: 'users' });
        this.belongsTo(models.roles, { foreignKey: 'role', as: 'roles' });
    }
}

export default employees;