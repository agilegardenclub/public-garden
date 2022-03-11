import { hardinessZoneData } from './zoneData';

class HardinessZones {
  // eslint-disable-next-line no-shadow
  constructor(hardinessZoneData) {
    this.hardinessZoneData = hardinessZoneData;
  }

  name(id) {
    const zoneInfo = this.hardinessZoneData.find(element => element.id === id);
    return zoneInfo.name;
  }

  description(id) {
    const zoneInfo = this.hardinessZoneData.find(element => element.id === id);
    return `
    Minimum winter temp: ${zoneInfo.fromFarhenheit} - ${zoneInfo.toFarhenheit}
    `;
  }

}

export const hardinessZoneInfo = new HardinessZones(hardinessZoneData);
