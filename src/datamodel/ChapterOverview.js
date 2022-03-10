import chapters from './chapters';
import seeds from './seeds';

/* Processes raw data for use by ChapterOverviewCard. */
class ChapterOverview {
  // eslint-disable-next-line no-shadow
  constructor(chapter, seeds) {
    this.chapter = chapter;
    this.seeds = seeds;
  }
}

export const chapterOverview = new ChapterOverview(chapters[0], seeds);
