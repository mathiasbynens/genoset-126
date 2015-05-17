var gql = require('gql');

module.exports = gql.or([
	gql.only('rs1799853', 'T'),
	gql.only('rs1057910', 'T'),
	gql.and([
		gql.exact('rs1799853', 'CT'),
		gql.exact('rs1057910', 'AT')
	])
]);
