// import queries.
const getLastNews = require('../queries/getLastNews');

// import models
const { New } = require('../models/connectionsModel');

// import constants
const { MONTHS } = require('../const/helpers');

const getHomeInfo = async (req, res) => {
  /* set information of the news cards. */
  const news = await getLastNews (New);

  news.data.map(card => {
    const day = card.dataValues.createdAt.getDate();
    const month = card.dataValues.createdAt.getMonth();
    const year = card.dataValues.createdAt.getFullYear();
    card.dataValues.date = `Creado el: ${day} de ${MONTHS[month]} de ${year}`;
  });

  /*add welcomeText informantion and slides information*/
  
  return res.json({
    status: 200,
    news: news.data
  }); 
}

module.exports = getHomeInfo;