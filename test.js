import { getHolidaysInDenmark, isHolidayInDenmark } from './index.js';

const holidays = getHolidaysInDenmark(2026);
console.log('Holidays in denmark for 2026:', holidays);

const isHoliday = isHolidayInDenmark('2026-12-25');
console.log('Is 2026-12-25 a holiday in denmark:', isHoliday);

const holidayEN = getHolidaysInDenmark(2026, { locale: 'en' });
console.log('Holidays in denmark for 2026 in english:', holidayEN);

console.log('Is it a holiday in Denmark today?', isHolidayInDenmark(new Date()));

const today = new Date();
today.setDate(today.getDate() + 1);

console.log('Is it a holiday in Denmark tomrrow? ', isHolidayInDenmark(today));


