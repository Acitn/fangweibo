<template>
  <view class="skeleton-contain">
    <view
      v-for="(item, index) in rectList"
      :key="index"
      class="rect"
      :style="[
        {
          height: `${item.height}px`,
          width: `${item.width}px`
        },
        {
          top: `${item.top}px`,
          bottom: `${item.bottom}px`,
          right: `${item.right}px`,
          left: `${item.left}px`
        }
      ]"
    ></view>
  </view>
</template>
<script>
export default {
  name: 'skeleton',
  mounted() {
    this.drawRect();
  },
  data() {
    return {
      rectList: []
    };
  },
  methods: {
    async selectAll(selector) {
      return new Promise((resolve, reject) => {
        uni
          .createSelectorQuery()
          .selectAll(selector)
          .boundingClientRect()
          .exec(res => resolve(res));
      });
    },
    async drawRect() {
      const [rect] = await this.selectAll('.rect');
	  console.log("ss")
	  console.log(rect)
      this.rectList = rect;
    }
  }
};
</script>
<style>
.skeleton-contain {
  height: 100vw;
  width: 100vw;
  position: absolute;
}
.rect {
  background-color: #dcdde1;
}
</style>
