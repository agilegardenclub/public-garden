/* Raw Data to define climate zones. */

// See https://en.wikipedia.org/wiki/Hardiness_zone for a critique of hardiness zones. They do not account for:
// * Frost dates
// * Frequency and/or reliability of snow cover (can provide insulation)
// * Number of cold nights per year
// * Summer temperature
// * Insolation
// * Day length (required for flowering)
// * Vernalization (duration of low temperature)
// * Humidity, Precipitation, Storms, Rainy-Dry cycles, soil type, soil drainage, water retention.

// Might also want to consider Trewartha climate types:
// https://www.reddit.com/r/MapPorn/comments/7yt1pj/trewartha_climate_types_of_washington_state_1260/

export const hardinessZoneData = [
  {
    id: 'zone-8a',
    name: 'Zone 8a',
    fromFarhenheit: 10,
    toFarhenheit: 15,
  },
  {
    id: 'zone-8b',
    name: 'Zone 8b',
    fromFarhenheit: 15,
    toFarhenheit: 20,
  },
];
