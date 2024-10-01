export interface EventData {
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  IsAllDay: boolean;
  CategoryColor: string;
}

export interface CalendarEvent extends EventData {
  CategoryColor: string;
}