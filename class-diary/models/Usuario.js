module.exports = (connection, DataTypes) => {
    const model = connection.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(50),

        },
        last_name: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(200)
        },
        password: {
            type: DataTypes.STRING(50)
        }
    },
    {
        timestamps: false,
        tableName: 'usuarios'
    })
    model.async({ alter: true })
    return model
}