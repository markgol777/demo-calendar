import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  DragAndDrop,
  Resize,
  PopupOpenEventArgs,
  EventRenderedArgs,
} from '@syncfusion/ej2-react-schedule';
import { createElement } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';
import './calendar.css';
import { CalendarEvent } from '../utils/interfaces/interface';

const Calendar: React.FC = () => {
  const today = new Date();
  const events: CalendarEvent[] = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
      EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
      IsAllDay: false,
      CategoryColor: '#000',
    },
    {
      Id: 2,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
      EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
      IsAllDay: false,
      CategoryColor: '#357cd2',
    },
  ];

  const onEventRendered = (args: EventRenderedArgs) => {
    const categoryColor = args.data.CategoryColor;
    args.element.style.backgroundColor = categoryColor;
  };

  const onPopupOpen = (args: PopupOpenEventArgs) => {
    if (args.type === 'Editor') {
      const formElement = args.element?.querySelector('.e-schedule-form');

      if (!args.element.querySelector('.custom-field-row') && formElement) {
        const row = createElement('div', { className: 'custom-field-row' });
        const container = createElement('div', { className: 'custom-field-container' });

        const colorLabel = createElement('label', {
          innerHTML: 'Color:',
          className: 'color-label',
        });
        container.appendChild(colorLabel);

        const colorInput = createElement('input', {
          className: 'e-field',
          attrs: {
            type: 'color',
            name: 'CategoryColor',
            value: (args.data as CalendarEvent).CategoryColor,
          },
        });
        colorInput.style.marginLeft = '10px';
        colorInput.style.marginTop = '10px';
        container.appendChild(colorInput);

        row.appendChild(container);
        formElement.appendChild(row);

        colorInput.addEventListener('input', (event: Event) => {
          const target = event.target as HTMLInputElement;
          (args.data as CalendarEvent).CategoryColor = target.value;
        });
      }
    }
  };

  const maxValidation = (args: { value: string }) => {
    return args.value.length <= 30;
  };

  const fieldsData = {
    id: 'Id',
    subject: { name: 'Subject', validation: { required: true, maxLength: [maxValidation, 'Max is 30 letters'] } },
    startTime: { name: 'StartTime', validation: { required: true } },
    endTime: { name: 'EndTime', validation: { required: true } }
  };

  return (
    <ScheduleComponent
      eventRendered={onEventRendered}
      selectedDate={today}
      eventSettings={{ dataSource: events, fields: fieldsData }}
      popupOpen={onPopupOpen}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  );
};

export default Calendar;
