/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Placement,
} from 'popper.js';

export namespace Components {
  interface DateCalender {
    'dateFormat': string;
    /**
    * The language code
    */
    'langCode': string;
    'selectedDate': string;
    'setParentSelectedDate': any;
  }
  interface DatepickerHijri {
    'dateFormat': string;
    'langCode': string;
    'placement': Placement;
    'reference': string;
    'selectedDate': string;
  }
  interface DayNames {
    /**
    * The language code
    */
    'langCode': string;
  }
  interface MonthDays {
    'currentTime': any;
    'dateFormat': any;
    'selectedDate': any;
    'setSelectedDate': any;
  }
}

declare global {


  interface HTMLDateCalenderElement extends Components.DateCalender, HTMLStencilElement {}
  const HTMLDateCalenderElement: {
    prototype: HTMLDateCalenderElement;
    new (): HTMLDateCalenderElement;
  };

  interface HTMLDatepickerHijriElement extends Components.DatepickerHijri, HTMLStencilElement {}
  const HTMLDatepickerHijriElement: {
    prototype: HTMLDatepickerHijriElement;
    new (): HTMLDatepickerHijriElement;
  };

  interface HTMLDayNamesElement extends Components.DayNames, HTMLStencilElement {}
  const HTMLDayNamesElement: {
    prototype: HTMLDayNamesElement;
    new (): HTMLDayNamesElement;
  };

  interface HTMLMonthDaysElement extends Components.MonthDays, HTMLStencilElement {}
  const HTMLMonthDaysElement: {
    prototype: HTMLMonthDaysElement;
    new (): HTMLMonthDaysElement;
  };
  interface HTMLElementTagNameMap {
    'date-calender': HTMLDateCalenderElement;
    'datepicker-hijri': HTMLDatepickerHijriElement;
    'day-names': HTMLDayNamesElement;
    'month-days': HTMLMonthDaysElement;
  }
}

declare namespace LocalJSX {
  interface DateCalender {
    'dateFormat'?: string;
    /**
    * The language code
    */
    'langCode'?: string;
    'selectedDate'?: string;
    'setParentSelectedDate'?: any;
  }
  interface DatepickerHijri {
    'dateFormat'?: string;
    'langCode'?: string;
    'placement'?: Placement;
    'reference'?: string;
    'selectedDate'?: string;
  }
  interface DayNames {
    /**
    * The language code
    */
    'langCode'?: string;
  }
  interface MonthDays {
    'currentTime'?: any;
    'dateFormat'?: any;
    'selectedDate'?: any;
    'setSelectedDate'?: any;
  }

  interface IntrinsicElements {
    'date-calender': DateCalender;
    'datepicker-hijri': DatepickerHijri;
    'day-names': DayNames;
    'month-days': MonthDays;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'date-calender': LocalJSX.DateCalender & JSXBase.HTMLAttributes<HTMLDateCalenderElement>;
      'datepicker-hijri': LocalJSX.DatepickerHijri & JSXBase.HTMLAttributes<HTMLDatepickerHijriElement>;
      'day-names': LocalJSX.DayNames & JSXBase.HTMLAttributes<HTMLDayNamesElement>;
      'month-days': LocalJSX.MonthDays & JSXBase.HTMLAttributes<HTMLMonthDaysElement>;
    }
  }
}


