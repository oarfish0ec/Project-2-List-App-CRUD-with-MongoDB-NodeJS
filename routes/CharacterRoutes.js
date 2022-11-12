const express = require("express");
const {
  getAllCharacters,
  createCharacter,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/CharacterController");
 
const router = express.Router();
 
router.route("/").get(getAllCharacters).post(createCharacter);
router.route("/:id").get(getCharacterById).put(updateCharacter).delete(deleteCharacter);
 
module.exports = router;