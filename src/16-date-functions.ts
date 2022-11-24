import { subDays, format } from 'date-fns';

/* Subtracting 22 days from the date and then formatting it to a string.
*/
const date = new Date(1998, 1, 28)
const rta = subDays(date, 22)
const str = format(rta, 'yyyy-MM-dd')
console.log(str)
