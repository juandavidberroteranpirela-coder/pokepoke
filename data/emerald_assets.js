"use strict";

// Catalogo local de recursos proporcionados por el usuario.
// Los nombres se mantienen separados de la logica para poder sustituirlos sin
// cambiar el motor de mapas.
window.EMERALD_ASSETS = Object.freeze({
  playerSprite: "assets/sprites/brendan_spritesheet.png",
  flowerPatch: "assets/sprites/flower_patch.png",
  mapObjects: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Miscellaneous - Map Objects.png",
  exteriorTileset: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Miscellaneous - Exterior Tileset.png",
  npcSheet: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Non-Playable Characters - NPCs.png",
  trainerSheet: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Non-Playable Characters - Trainers.png",
  routeIcons: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Miscellaneous - Route Icons.png",
  pokemonNormalSheet: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Pokemon - Pokemon (3rd Generation, Normal).png",
  pokemonShinySheet: "assets/emerald_reference/Game Boy Advance - Pokemon Emerald - Pokemon - Pokemon (3rd Generation, Shiny).png",
  pokedexSprite: id => `assets/pokedex/${encodeURIComponent(Number(id))}.png`
});
