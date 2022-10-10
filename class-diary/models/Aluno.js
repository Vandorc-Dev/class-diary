module.exports = (connection, DataTypes) => {
    const model = connection.define('Aluno', {
        id_aluno: {
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
        id_turma: {
            type: DataTypes.STRING(50)
        }
    },
    {
        timestamps: false,
        tableName: 'alunos'
    })
    model.sync({ alter: true })
    return model
}