module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define('Url', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    log: DataTypes.STRING,
    password: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  return Url
}
