import { Component, Input } from '@angular/core'
import { parse } from 'date-fns'

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
}

export const CalendarEvent = (date, start, end, title, color = 'blue') => {
  return {
    start: new Date(parse(`${date} ${start}`)),
    end: new Date(parse(`${date} ${end}`)),
    title,
    color: colors[color],
  }
}

@Component({
  selector: 'ui-calendar-day',
  template: `
    <mwl-calendar-day-view class="cal-day-view"
      [events]="events" [viewDate]="date"
      [dayStartHour]="dayStartHour" [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour" [dayEndMinute]="dayEndMinute"
      [hourSegments]="hourSegments" [hourSegmentHeight]="hourSegmentHeight">
    </mwl-calendar-day-view>
  `,
})
export class CalendarDayComponent {
  public dayEndHour = 18
  public dayEndMinute = 0
  public dayStartHour = 8
  public dayStartMinute = 0

  public hourSegments = 2
  public hourSegmentHeight = 40

  @Input() public date: string

  @Input() public events: any[] = []

}
