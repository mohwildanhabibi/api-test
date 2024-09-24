module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define("books", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Books;
  };