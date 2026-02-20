const ActivityModel = require("./DbSchima");

const createActivityService = async (data) => {
  return ActivityModel.create(data);
};

const getActivityService = async ({ tenantId, cursor, limit }) => {
  const query = { tenantId };

  if (cursor) {
    query.createdAt = { $lt: new Date(cursor) };
  }

  return ActivityModel.find(query)
    .sort({ createdAt: -1 })
    .select("tenantId actor activity createdAt")
    .limit(Number(limit) || 20);
};

module.exports = { createActivityService, getActivityService };
