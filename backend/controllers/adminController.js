const UserSchema = require("../schemas/userSchema");

const adminController = {
  adminFeaturedInfo: async (req, res, next) => {
    try {
      const userData = await UserSchema.find();

      const vendors = userData.filter((e) => e.role === "vendor");

      const vendorCount = vendors.length;

      const customers = userData.filter((e) => e.role === "customer");

      const customerCount = customers.length;

      const postedPrograms = await JobPostsSchema.find();

      const postedProgramsCount = postedPrograms.length;

      const pendingApprovals = postedPrograms.filter((e) => e.approvalStatus === "pending");

      const pendingApprovalsCount = pendingApprovals.length;

      res.status(200).json({ vendorCount, customerCount, postedProgramsCount, pendingApprovalsCount });
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = adminController;
