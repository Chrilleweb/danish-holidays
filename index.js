export function getHolidaysInDenmark(year, options = {}) {
	const locale = options.locale || 'da';

	const fixed = [
		{
			date: `${year}-01-01`,
			name: { da: 'Nytårsdag', en: 'New Year\'s Day' }
		},
		{
			date: `${year}-12-25`,
			name: { da: '1. juledag', en: 'Christmas Day' }
		},
		{
			date: `${year}-12-26`,
			name: { da: '2. juledag', en: 'Boxing Day' }
		}
	];

	const easter = getEasterDate(year);

	const moveable = [
		{ date: offsetDate(easter, -3), name: { da: 'Skærtorsdag', en: 'Maundy Thursday' } },
		{ date: offsetDate(easter, -2), name: { da: 'Langfredag', en: 'Good Friday' } },
		{ date: offsetDate(easter, 0), name: { da: 'Påskedag', en: 'Easter Sunday' } },
		{ date: offsetDate(easter, 1), name: { da: '2. påskedag', en: 'Easter Monday' } },
		{ date: offsetDate(easter, 39), name: { da: 'Kristi himmelfartsdag', en: 'Ascension Day' } },
		{ date: offsetDate(easter, 49), name: { da: 'Pinsedag', en: 'Pentecost' } },
		{ date: offsetDate(easter, 50), name: { da: '2. pinsedag', en: 'Whit Monday' } }
	];

	const holidays = [...fixed, ...moveable].map(h => ({
		date: h.date,
		name: h.name[locale] || h.name.da
	}));

	return holidays.sort((a, b) => a.date.localeCompare(b.date));
}

export function isHolidayInDenmark(date) {
	const dateObj = new Date(date);
	if (isNaN(dateObj)) return false;
	const isoDate = dateObj.toISOString().split('T')[0];
	const year = dateObj.getFullYear();
	return getHolidaysInDenmark(year).some(h => h.date === isoDate);
}

function getEasterDate(year) {
	const f = Math.floor;
	const G = year % 19;
	const C = f(year / 100);
	const H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
	const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11));
	const J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
	const L = I - J;
	const month = 3 + f((L + 40) / 44);
	const day = L + 28 - 31 * f(month / 4);
	return new Date(`${year}-${pad(month)}-${pad(day)}`);
}

function offsetDate(date, offsetDays) {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() + offsetDays);
	return newDate.toISOString().split('T')[0];
}

function pad(n) {
	return n.toString().padStart(2, '0');
}  
