const router = require("express").Router();
const { handleListCreation, handleListRetrievalOneByUserId, handleListDeletion } = require("../controllers/lists");
const { listValidation } = require("../middlewares/validation/lists");
const asyncHandler = require("../helpers/async-handler");

router.post("/:id/lists", [listValidation, asyncHandler(handleListCreation)]);
router.get("/:id/lists", asyncHandler(handleListRetrievalOneByUserId));
router.delete("/:id/lists/:ingredientid", asyncHandler(handleListDeletion));

module.exports = router;
