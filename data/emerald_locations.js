"use strict";

// Laminas de ubicaciones entregadas por el usuario. Se muestran como mapas
// explorables para poder inspeccionar todos los escenarios desde el selector.
const EMERALD_REFERENCE_LOCATIONS = {
  abandoned_ship: ["Barco Abandonado", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Abandoned Ship.png"],
  artisan_cave: ["Cueva Artesano", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Artisan Cave.png"],
  battle_frontier_buildings: ["Edificios del Frente Batalla", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Battle Frontier Buildings.png"],
  battle_frontier_interiors: ["Interiores del Frente Batalla", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Battle Frontier Interiors.png"],
  battle_frontier: ["Frente Batalla", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Battle Frontier.png"],
  desert_underpass: ["Pasadizo Desierto", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Desert Underpass.png"],
  faraway_island: ["Isla Suprema", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Faraway Island.png"],
  interior_areas: ["Areas Interiores", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Interior Areas.png"],
  mt_chimney: ["Monte Cenizo", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Mt. Chimney.png"],
  petalburg_woods: ["Bosque Petalia", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Petalburg Woods.png"],
  pokemon_center_mart: ["Centro Pokemon y Tienda", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Pokemon Centre & Mart.png"],
  rydel_bike_shop: ["Tienda de Bicis de Rydel", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Rydel's Bike Shop.png"],
  safari_zone: ["Zona Safari", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Safari Zone.png"],
  sand_tower: ["Torre Espejismo", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Sand Tower.png"],
  scorched_slab: ["Loza Caldera", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Scorched Slab.png"],
  secret_bases: ["Bases Secretas", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Secret Bases.png"],
  secret_bases_alt: ["Bases Secretas (variantes)", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Secret Bases (1).png"],
  terra_cave: ["Cueva Terra", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Terra Cave.png"],
  trainer_hill: ["Montana de Entrenadores", "assets/emerald_locations/Game Boy Advance - Pokemon Emerald - Locations - Trainer Hill.png"]
};

const EMERALD_REFERENCE_MAPS = Object.fromEntries(Object.entries(EMERALD_REFERENCE_LOCATIONS).map(([id, [name, image]]) => [
  `reference_${id}`,
  {
    id: `reference_${id}`,
    name,
    subtitle: "Lamina de ubicacion de Pokemon Esmeralda",
    image,
    width: 1024,
    height: 768,
    spawn: { x: 496, y: 368, dir: "down" },
    obstacles: [],
    npcs: [],
    signs: [],
    exits: []
  }
]));

if (typeof window !== "undefined") {
  window.EMERALD_REFERENCE_MAPS = EMERALD_REFERENCE_MAPS;
}
if (typeof module !== "undefined") {
  module.exports = { EMERALD_REFERENCE_MAPS };
}
