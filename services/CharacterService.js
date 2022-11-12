const CharacterModel = require("../models/Character");
 
exports.getAllCharacters = async () => {
  return await CharacterModel.find();
};
 
exports.createCharacter = async (character) => {
  return await CharacterModel.create(character);
};

exports.getCharacterById = async (id) => {
  return await CharacterModel.findById(id);
};
 
exports.updateCharacter = async (id, character) => {
  return await CharacterModel.findByIdAndUpdate(id, character);
};
 
exports.deleteCharacter = async (id) => {
  return await CharacterModel.findByIdAndDelete(id);
};