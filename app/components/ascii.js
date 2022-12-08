import Component from '@glimmer/component';

export default class AsciiComponent extends Component {
  get artName() {
    switch (this.pickArt) {
      case 1:
        return 'ascii/tree';
      case 2:
        return 'ascii/santa';
      case 3:
        return 'ascii/ornaments';
      case 4:
        return 'ascii/snowman';
      case 5:
        return 'ascii/candycane';
      case 6:
        return 'ascii/elf';
      case 7:
        return 'ascii/grinch';
      case 8:
        return 'ascii/holly';
      case 9:
        return 'ascii/holybirth';
      case 10:
        return 'ascii/nativity';
      case 11:
        return 'ascii/sleighInAction';
      case 12:
        return 'ascii/snowflakes';
      case 13:
        return 'ascii/stocking';
      case 14:
        return 'ascii/stockingHearth';
      case 15:
        return 'ascii/treeWithPreasents';
      case 16:
        return 'ascii/wreath';
      case 17:
        return 'ascii/xmaslights';
      default :
      return 'There was an error retrieving the ascii art'
    }
  }
  get pickArt() {
    const totalArt = 17;
    return Math.floor(Math.random() * totalArt) + 1;
  }
}
