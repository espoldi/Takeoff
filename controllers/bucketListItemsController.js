const db = require('../models');
const BucketListItem = db.BucketListItem;

module.exports = {
  findAll: async function (req, res) {
    let items = await BucketListItem.find({ userId: req.body.userId });
    res.json(items);
  },
  findById: async function (req, res) {
    let item = await BucketListItem.findById(req.params.id);
    res.json(item);
  },
  create: async function (req, res) {
    let newItem = new BucketListItem({
      description: req.body.description,
      userId: req.body.userId
    });
    let savedItem = await newItem.save();
    res.json(savedItem);
  },
  update: async function (req, res) {
    let item = await BucketListItem.findById(req.params.id);
    let update = req.body;
    await item.updateOne(update);
    res.json(item);
  },
  remove: async function (req, res) {
    let item = await BucketListItem.findById(req.params.id).deleteOne();
    res.json(item);
  }
}
