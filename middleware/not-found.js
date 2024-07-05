const notFound = (req, res) => res.status(404).send('Route dont exist')

module.exports = notFound