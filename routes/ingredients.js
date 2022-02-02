const router = require("express").Router();
const { handleIngredientCreation, handleIngredientRetrievalAll, handleIngredientRetrievalOne, handleIngredientUpdate, handleIngredientDeletion } = require("../controllers/ingredients");
const { ingredientValidation } = require("../middlewares/validation/ingredients");
const asyncHandler = require("../helpers/async-handler");

router.post("/", [ingredientValidation, asyncHandler(handleIngredientCreation)]);
router.get("/", asyncHandler(handleIngredientRetrievalAll));
router.get("/:id", asyncHandler(handleIngredientRetrievalOne));
router.put("/:id", [ingredientValidation, asyncHandler(handleIngredientUpdate)]);
router.delete("/:id", asyncHandler(handleIngredientDeletion));

module.exports = router;
