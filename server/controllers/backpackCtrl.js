module.exports = {
    getItems: (req, res) => {
        const db = req.app.get('db');

        db.get_items()
            .then(items => {
                res.status(200).send(items);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    addItem: (req, res) => {
        const {itemName, itemPurpose} = req.body;
        const db = req.app.get('db');

        db.add_item(itemName, itemPurpose)
            .then(items => {
                res.status(200).send(items);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
}