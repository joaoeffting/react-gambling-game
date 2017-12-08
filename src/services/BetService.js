import axios from 'axios';
import isToday from 'date-fns/is_today';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/difference_in_minutes';

const URL = 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a';
const TIME_TO_BE_ABLE_TO_LOAD_MORE_DATA_IN_MINUTES = 2;

export const BetService = {
    /**
     * loadeBets
     * 
     * This method is responsible for load the bets. After the first load,
     * the data will be cached for two minutes, so there will not be done another api request if
     * the last request was made in less than 2 minutes.
     * 
     */
    async loadBets() {
        let loadedData;
        if (localStorage)
            loadedData = localStorage.getItem('lastLoadedTime');
        const diference = differenceInMinutes(new Date(), loadedData);
        if (diference >= TIME_TO_BE_ABLE_TO_LOAD_MORE_DATA_IN_MINUTES || !localStorage) {
            const response = await axios.get(URL);
            if (response.data.liveEvents) {
                if (localStorage) {
                    localStorage.setItem('lastLoadedTime', new Date());
                    localStorage.setItem('liveEvents', JSON.stringify(response.data.liveEvents));
                }
                return response.data.liveEvents;
            }
            return []
        } else {
            const liveEvents = localStorage.getItem('liveEvents');
            if (liveEvents)
                return JSON.parse(liveEvents);

            return []
        }
    },
    /**
     * renderBetDateFormatted
     * 
     * This method is responsible for render the right date text to the user.
     * 
     * If the game is today, show Today and the hour / minute.
     * If the game is in another day, render the date and the hour / minute.
     */
    getBetDateFormatted(date) {
        if (isToday(date)) {
            return `Today, ${format(date, 'H:mm')}`
        }

        return `${format(date, 'DD/MM H:mm')}`;
    }
}