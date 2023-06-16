const SubscriptionSchema = require("../schemas/subscriptionSchema");
const JobPostSchema = require("../schemas/jobPostsSchema");

const subscriptionCheck = async () => {
  const subscriptions = await SubscriptionSchema.find();
  const jobPosts = await JobPostSchema.find();

  let today = new Date().getTime();

  for (i = 0; i < subscriptions.length; i++) {
    let date = new Date(subscriptions[i].expireDate).getTime();
    if (date < today) {
      await SubscriptionSchema.findOneAndUpdate({ _id: subscriptions[i]._id }, { $set: { status: "Expired" } });
    }
  }

  for (i = 0; i < jobPosts.length; i++) {
    let date = new Date(jobPosts[i].lastQuotationDate).getTime();
    let date2 = new Date(jobPosts[i].date).getTime();
    if ((!jobPosts[i].isQuotationAccepted && date < today) || date2 < today) {
      await JobPostSchema.findOneAndUpdate({ _id: jobPosts[i]._id }, { $set: { approvalStatus: "expired" } });
    }
  }

  console.log("check done");
};

module.exports = { subscriptionCheck };
