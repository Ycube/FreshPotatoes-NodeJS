module.exports = function(sequelize, DataTypes) {

    let Film = sequelize.define('Films', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true
        },
        title: DataTypes.STRING,
        release_date: DataTypes.STRING,
        tagline: DataTypes.STRING,
        revenue: DataTypes.INTEGER,
        budget: DataTypes.INTEGER,
        runtime: DataTypes.INTEGER,
        original_language: DataTypes.STRING,
        status: DataTypes.STRING,
        genre_id: DataTypes.INTEGER,
          createdAt: DataTypes.VIRTUAL,
          updatedAt: DataTypes.VIRTUAL,
        }
    );

    return Film;
};