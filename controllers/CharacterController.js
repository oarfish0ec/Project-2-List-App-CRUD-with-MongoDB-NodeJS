const characterService = require("../services/CharacterService");
 
exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await characterService.getAllCharacters();
    res.json({ data: characters, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCharacter = async (req, res) => {
  try {
    const character = await characterService.createCharacter(req.body);
    res.json({ data: character, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getCharacterById = async (req, res) => {
  try {
    const character = await characterService.getCharacterById(req.params.id);
    res.json({ data: character, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateCharacter = async (req, res) => {
  try {
    const character = await characterService.updateCharacter(req.params.id, req.body);
    res.json({ data: character, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteCharacter = async (req, res) => {
  try {
    const character = await characterService.deleteCharacter(req.params.id);
    res.json({ data: character, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};