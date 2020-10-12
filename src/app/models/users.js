import Sequelize, { Model } from 'sequelize';

class users extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncremente: true
            },
            fullname: Sequelize.STRING,
            cpf: Sequelize.CHAR,
            phone: Sequelize.CHAR,
            email: Sequelize.STRING,
            gender: Sequelize.CHAR,
            birthday: Sequelize.DATE,
            inative: Sequelize.BOOLEAN,
            created_at: Sequelize.DATETIME,
            updated_at: Sequelize.DATETIME
        },{
            sequelize
        });
    }
}

export default user;