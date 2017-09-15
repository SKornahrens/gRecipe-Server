//siteuser table test setup
const siteusers = [
  {
    user_id: 1,
    first_name: 'Bilbo',
    last_name: 'Baggins'
  },
  {
    user_id: 2,
    first_name: 'Chuck',
    last_name: 'Dangle'
  },
  {
    user_id: 3,
    first_name: 'Felicia',
    last_name: 'Bees'
  },
  {
    user_id: 4,
    first_name: 'Keve',
    last_name: 'Stornahrens'
  },
  {
    user_id: 5,
    first_name: 'Strawberry',
    last_name: 'Shortstop'
  },
];

const siteuseradd = {
	"first_name": "Chuck",
	"last_name": "Dangle"
}

const siteuserachange = {
	"first_name": "Changer",
	"last_name": "Danger"
}

module.exports = {
  siteusers,
  siteuseradd,
  siteuserachange
}
