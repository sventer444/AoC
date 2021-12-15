import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CalendarManagerService extends Service {
    @tracked calendarDisplayed = ''
    
    updateCalendar(year){
        this.calendarDisplayed = year
    }
}
