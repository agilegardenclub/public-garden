import { outcomeData } from './data/outcomeData';

class OutcomeInfo {
  // eslint-disable-next-line no-shadow
  constructor(outcomeData) {
    this.outcomeData = outcomeData;
  }

  categories() {
    return ['Flavor', 'Appearance', 'Yield', 'Pests', 'Diseases', 'Germination'];
  }

  getData(category) {

  }

}

export const outcomeInfo = new OutcomeInfo(outcomeData);
