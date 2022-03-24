const { Approval } = require("../models");

const approvaldata = [
  {
    user_id: 1,
    post_id: 1,
  },
  {
    user_id: 2,
    post_id: 2,
  },
  {
    user_id: 1,
    post_id: 3,
  },
  {
    user_id: 2,
    post_id: 4,
  },
  {
    user_id: 2,
    post_id: 5,
  },
];

const seedApprovals = () => Approval.bulkCreate(approvaldata);

module.exports = seedApprovals;
