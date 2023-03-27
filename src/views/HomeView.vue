<script setup>
import { ref } from 'vue'
import { useHome } from '@/store/home'
import { differTime } from '@/utils/ximingx/dayjs'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
import WebsiteFiling from '@/components/WebsiteFiling/WebsiteFiling.vue'
const homeStore = useHome()
// day
const day = differTime(homeStore.day)
const bridegroom = homeStore.bridegroom
const bride = homeStore.bride
const love = homeStore.love
// calendar
const calendarList = homeStore.calendarList
const calendar = ref()
// record
const recordList = homeStore.recordList
</script>

<template>
  <div class="home-container">

    <div class="day">
      <div class="day-now">第 {{ day }} 天</div>
      <div class="day-lover">{{ bridegroom }} {{ love }} {{ bride }}</div>
    </div>

    <div class="calendar">
      <h3 class="title">和你的记录</h3>
      <el-calendar ref="calendar">
        <template #date-cell="{ data }">
          <p>{{ data.day.split('-').pop() }}</p>
          <template v-for="item in calendarList">
            <p class="calendar-thin" v-if="item.date === data.day">{{ item.desc }}</p>
          </template>
        </template>
        <template #header="{ date }">
          <div class="calendar-box">
            <span>{{ date }}</span>
            <el-button-group>
              <el-button size="small" @click="selectDate('prev-month')"> &lt; </el-button>
              <el-button size="small" @click="selectDate('today')">今天</el-button>
              <el-button size="small" @click="selectDate('next-month')"> &gt; </el-button>
            </el-button-group>
          </div>
        </template>
      </el-calendar>
    </div>

    <h3 class="title">照片墙</h3>
    <Waterfall :list="recordList" class="waterfall">
      <template #item="{ item, url, index }">
        <div class="card">
          <LazyImg :url="url" />
          <p class="text">{{ item.time }}</p>
          <p class="text">{{ item.desc }}</p>
        </div>
      </template>
    </Waterfall>

    <WebsiteFiling></WebsiteFiling>

  </div>
</template>

<style scoped lang="scss">
.home-container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  opacity: 0.9;

  .title {
    font-size: 20px;
    text-align: center;
    color: #fff;
  }

  .day {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30vh 0;

    .day-now {
      margin: 10px 0;
      font-size: 60px;
      font-weight: 500;
      color: #fff;
    }

    .day-lover {
      font-size: 30px;
      font-weight: 700;
      color: #fff;
    }

    @media screen and (min-width: 768px) {
      .day-now {
        font-size: 100px;
      }

      .day-lover {
        font-size: 30px;
      }
    }
  }

  .calendar {

    .calendar-thin {
      font-size: 6px;
      color: #f68084;
    }

    .calendar-box {
      width: 100vw;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    @media screen and (min-width: 768px) {
      .calendar-thin {
        font-size: 16px;
      }
    }
  }

  .waterfall {
    width: 90vw;
    margin: 30px auto;
    border-radius: 10px;
  }
}

::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}

::v-deep(.el-button--small) {
  margin: 0 10px;
  box-sizing: border-box;
}

::v-deep(.el-calendar) {
  margin: 0 auto;
  width: 90%;
  border-radius: 10px;
  font-size: 0.8em;
}

::v-deep(.is-today) {
  color: red;
}

::v-deep(.el-calendar-day) {
  height: 110px;
}

@media screen and (min-width: 768px) {
  ::v-deep(.el-calendar) {
    font-size: 1.2em;
  }

  ::v-deep(.el-button--small) {
    font-size: 18px;
  }
}
</style>
