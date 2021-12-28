import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CalendarComponent extends Component {
  @service calendarManager;
  @tracked calendarYear = this.calendarManager.calendarDisplayed
  get monthDays (){
    return ["1"]
  }
}
