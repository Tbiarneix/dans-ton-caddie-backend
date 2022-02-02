const router = require("express").Router();
const { handleUserCreation, handleUserRetrievalAll, handleUserRetrievalOne, handleUserUpdate, handleUserDeletion } = require("../controllers/users");
const { userValidation } = require("../middlewares/validation/users");
const asyncHandler = require("../helpers/async-handler");

router.post("/", [userValidation, asyncHandler(handleUserCreation)]);
router.get("/", asyncHandler(handleUserRetrievalAll));
router.get("/:id", asyncHandler(handleUserRetrievalOne));
router.put("/:id", [userValidation, asyncHandler(handleUserUpdate)]);
router.delete("/:id", asyncHandler(handleUserDeletion));

module.exports = router;
