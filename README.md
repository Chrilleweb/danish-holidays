# 🇩🇰 danish-holidays

Get official Danish public holidays by year, and check if a specific date is a holiday in Denmark.

Lightweight, dependency-free, and perfect for calendar logic, booking systems, HR tools, or frontend apps where accurate public holiday detection in Denmark is needed.

---

## ✨ Features

- Get all official Danish holidays for any year (`getHolidaysInDenmark`)
- Check if a specific date is a holiday (`isHolidayInDenmark`)
- Fully offline – no external APIs
- Correct calculation of Easter-based holidays using Gauss's algorithm
- Returns ISO-formatted date strings (`yyyy-mm-dd`)

---

## 🚀 Installation

```bash
npm install danish-holidays
```

## Get all official danish holidays for a given year 

```js
import { getHolidaysInDenmark } from 'danish-holidays';

const holidays = getHolidaysInDenmark(2026);

console.log(holidays);
```

## Output

```bash 
[
  { date: '2026-01-01', name: 'Nytårsdag' },
  { date: '2026-04-02', name: 'Skærtorsdag' },
  { date: '2026-04-03', name: 'Langfredag' },
  { date: '2026-04-05', name: 'Påskedag' },
  { date: '2026-04-06', name: '2. påskedag' },
  { date: '2026-05-14', name: 'Kristi himmelfartsdag' },
  { date: '2026-05-24', name: 'Pinsedag' },
  { date: '2026-05-25', name: '2. pinsedag' },
  { date: '2026-12-25', name: '1. juledag' },
  { date: '2026-12-26', name: '2. juledag' }
]
```

## Get holidays in english

```js
import { getHolidaysInDenmark } from 'danish-holidays';

const holidayEN = getHolidaysInDenmark(2026, { locale: 'en' });

console.log(holidayEN);
```

## Output

```bash
[
  { date: '2026-01-01', name: "New Year's Day" },
  { date: '2026-04-02', name: 'Maundy Thursday' },
  { date: '2026-04-03', name: 'Good Friday' },
  { date: '2026-04-05', name: 'Easter Sunday' },
  { date: '2026-04-06', name: 'Easter Monday' },
  { date: '2026-05-14', name: 'Ascension Day' },
  { date: '2026-05-24', name: 'Pentecost' },
  { date: '2026-05-25', name: 'Whit Monday' },
  { date: '2026-12-25', name: 'Christmas Day' },
  { date: '2026-12-26', name: 'Boxing Day' }
]
```

## Check if a date is a holiday

```js
import { isHolidayInDenmark } from 'danish-holidays';

const today = new Date();
console.log(isHolidayInDenmark(today)); // false (unless today is a holiday)

const isHoliday = isHolidayInDenmark('2026-12-25');
console.log(isHoliday); // true christmas day 
```

## 🛠 Licence 
MIT


## ✨ Created by Chrilleweb 

If you like this package, feel free to ⭐️ star it on GitHub or contribute!