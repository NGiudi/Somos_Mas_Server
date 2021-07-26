/* import queries. */
const getLastNews = require('../../queries/news/getLastNews');

/* import helpers. */
const { formatDate } = require('../../helpers/dates');

const getHomeInfo = async (req, res) => {
  /* set information of the news cards. */
  const news = await getLastNews();

  news.data.map(card => {
    card.dataValues.date = formatDate(card.dataValues.createdAt);
  });

  /*add welcomeText informantion and slides information*/
  
  return res.json({
    status: 200,
    news: news.data
  }); 
}

module.exports = getHomeInfo;