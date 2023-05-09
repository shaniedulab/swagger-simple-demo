const {sequelize,DataTypes} = require('../sequelize')

const user = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });

module.exports= user
