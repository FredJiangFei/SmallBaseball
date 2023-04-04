const mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  sportType: String,
});

teamSchema.statics.add = async function (prd) {
  let team = new this({
    name: prd.name,
    sportType: prd.sportType,
  });
  team.id = team._id;
  team = await team.save();
  return team;
};

teamSchema.statics.getAll = async function () {
  return await this.find();
};

const Team = mongoose.model('Team', teamSchema);
exports.Team = Team;
