import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CalendarComponent extends Component {
  @service calendarManager;
  @tracked calendarYear = this.calendarManager.calendarDisplayed

}
