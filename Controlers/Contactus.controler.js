const validator = require("../Middlewares/Validator");
const { SendSuccess, SendError, SendFail } = require("../Middlewares/Response");
const ContactusSchema = require("../Schema/Contactus.schema");
const uploadOnCloudinary = require("../Middlewares/Cloudinary");

const create = async (req, res, next) => {
  const { name } = req.body;
  try {
    // if (!validator.validateField(fields, res)) return null;
    const savedData = await ContactusSchema.create({
      ...req.body,
    });
    SendSuccess(res, "Category Created", savedData);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

const read = async (req, res, next) => {
  try {
    const data = await ContactusSchema.find(req.query);
    SendSuccess(res, "Category Fetched", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};
const update = async (req, res, next) => {
  try {
    const data = await ContactusSchema.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    SendSuccess(res, "Updated", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};
const Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await ContactusSchema.findByIdAndDelete(id);
    if (!data) return SendFail(res, "Id not found");
    SendSuccess(res, "Category Deleted", data);
  } catch (e) {
    console.log(e);
    SendError(res, e);
  }
};

module.exports = {
  read,
  create,
  Delete,
  update,
};

// module.exports = { createUser, userLogin, getUserDetails, updateUserDetails }
