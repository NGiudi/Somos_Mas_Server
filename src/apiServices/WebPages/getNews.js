/* import queries. */
const getOnePageNews = require('../../queries/news/getOnePageNews');

/* import helpers. */
const { formatDate } = require('../../helpers/dates');

/* import constants. */
const { ROWS_PER_PAGE } = require('../../const/numbers');

const getNews = async (req, res) => {
  const { page } = req.body;

  const news = await getOnePageNews(page, ROWS_PER_PAGE);

  if (news.status !== 200){
    return res.json(news);
  }

  news.data.rows.map(card => {
    card.dataValues.date = formatDate(card.dataValues.createdAt);
  });

  return res.json({
    data: news.data.rows,
    page: parseInt(page),
    pages: Math.ceil(news.data.count/ROWS_PER_PAGE),
    rowsPerPage: ROWS_PER_PAGE,
    totalRows: news.data.count,
  });
}

module.exports = getNews;