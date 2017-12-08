import { BetService } from './BetService';
import format from 'date-fns/format';

test('getBetDateFormatted if Today', () => {
    const todayDate = new Date();

    const formatedDate = BetService.getBetDateFormatted(todayDate);
    expect(formatedDate).toBe(`Today, ${format(todayDate, 'H:mm')}`);
});

test('getBetDateFormatted if not Today', () => {
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 3);
    const formatedDate = BetService.getBetDateFormatted(todayDate);
    expect(formatedDate).toBe(`${format(todayDate, 'DD/MM H:mm')}`);
});