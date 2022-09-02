<template>
  <div class="phone">
    <h1>联系我吧！</h1>
    <h1>Contact me!</h1>
    <div class="contact">
      <div v-for="(item, index) in phoneList" class="contactItem">
        <img :src="item.img" />
        <div>{{ item.name }}</div>
        <div>{{ item.account }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneList: [
        {
          name: "手机",
          img: require("../images/手机.png"),
          account: "18749639170",
        },
        {
          name: "微信",
          img: require("../images/微信.png"),
          account: "zyc8749639170",
        },
        {
          name: "邮箱",
          img: require("../images/邮箱.png"),
          account: "18749639170@qq.com",
        },
        {
          name: "位置",
          img: require("../images/位置.png"),
          account: "安徽-滁州",
        },
      ],
    };
  },
};
</script>

<style>
.phone {
  margin: 20px 100px;
}
.contactItem > img {
  width: 30px;
  height: 30px;
}
.contact {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contactItem {
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 5%;
  padding: 40px 0;
  box-sizing: border-box;
  border-radius: 50px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
</style>