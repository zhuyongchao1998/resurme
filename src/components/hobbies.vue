<template>
  <div class="hobbies">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item.imgSrc" class="imgSrc" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "技能", imgSrc: require("../images/lunbo1.jpg") },
        { name: "经历", imgSrc: require("../images/lunbo2.jpg") },
        { name: "爱好", imgSrc: require("../images/lunbo3.jpg") },
        { name: "联系", imgSrc: require("../images/lunbo4.jpg") },
      ],
    };
  },
};
</script>
<style>
.el-carousel__item {
  border-radius: 20px;
  overflow: hidden;
}
.el-carousel__item .imgSrc {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.hobbies {
  width: 100%;
  height: 64%;
  margin-top: 40px;

  border-radius: 20px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}
</style>