import Component from '@glimmer/component';

export default class AsciiComponent extends Component {
    get artName() {
        switch(this.pickArt){
            case 1 : return 'ascii/tree'
            case 2 : return 'ascii/santa'
            case 3 : return 'ascii/ornaments'
        }
      }
    get pickArt(){
        const totalArt = 3
        return Math.floor(Math.random() * totalArt) + 1
    }
}