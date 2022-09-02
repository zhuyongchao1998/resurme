<template>
  <div class="app">
    <h1>朱永超个人简介</h1>
    <div class="all">
      <!-- 左边的导航 -->
      <div class="my">
        <div class="myIcon">
          <img src="./images/cat.png" />
          <div class="name">朱永超</div>
          <div class="signature">世上无难事，只要肯攀登</div>
        </div>
        <div
          class="icon"
          @click="goRouter(index)"
          :class="{ bacAct: selectIndex == index }"
          v-for="(item, index) in list"
        >
          <img :src="item.imgSrc" />
          <span>{{ item.name }} </span>
        </div>
      </div>
      <!-- 右边的详情 -->
      <div class="detail">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 0,
      list: [
        { name: "技能", imgSrc: require("./images/专业技能-01-01.png") },
        { name: "经历", imgSrc: require("./images/工作经验.png") },
        { name: "爱好", imgSrc: require("./images/兴趣爱好.png") },
        { name: "联系", imgSrc: require("./images/联系我们.png") },
      ],
    };
  },
  mounted() {
    this.selectIndex = localStorage.getItem("selectIndex");
  },

  methods: {
    goRouter(index) {
      this.selectIndex = index;
      localStorage.setItem("selectIndex", index);

      if (index == 0) {
        this.$router.push({ path: "/" });
      } else if (index == 1) {
        this.$router.push({ path: "/experience" });
      } else if (index == 2) {
        this.$router.push({ path: "/hobbies" });
      } else {
        this.$router.push({ path: "/phone" });
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  background-image: url(./images/shuimo_dongmei.jpg);
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.all {
  margin-top: 20px;
  width: 80vw;
  height: 80vh;
  background-color: rgba(135, 206, 235, 0.4);

  border-radius: 20px;
  display: flex;
}
.all > .my {
  width: 300px;
  height: 100%;
  margin: 10px;

  display: flex;
  flex-direction: column;

  align-items: center;
}
.all > .detail {
  height: 100%;
  flex: 1;
}
.myIcon {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  border-radius: 20px;
}
.myIcon > img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.myIcon > .name {
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
}

.myIcon > .signature {
  font-size: 12px;
}

/* 小图标 */
.icon > img {
  width: 30px;
  height: 30px;
}
.icon {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;

  margin-top: 10px;
}
.icon:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.bacAct {
  background-color: rgba(0, 0, 0, 0.4);
}
.detail {
  margin: 20px;
}
</style>