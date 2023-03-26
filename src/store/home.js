import {defineStore} from "pinia";
import {day, bridegroom, love, bride, calendarList, recordList} from '../../setting.js'

export const useHome = defineStore("home", {
    state() {
        return {
            day,
            bridegroom,
            love,
            bride,
            calendarList,
            recordList
        }
    },
    persist: {
        enabled: true,
        key: "home",
        storage: localStorage
    }
})
