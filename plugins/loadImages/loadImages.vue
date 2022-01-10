<template>
  <div>
    <transition name="loadImages">
      <div v-if="show" :class="['loadImages', 'box-shadow', type]">
       {{options.GetProdImg}}
      </div>
    </transition>
    {{GetProdImg(options.GetProdImg)}}
  </div>
</template>

<script>
import loadImages from "~/plugins/loadImages/loadImages";

export default {
  data: () => ({
    options: {
     prodImgId: 1
    },
    show: false,
    type: "",
    timer: 0
  }),
  beforeMount() {
    loadImages.event.$on("show", options => {
      this.options = options;
      this.type = options.type;
      this.show = true;
      this.close(this.options.closeWait || 3000);
    });
  },
  methods: {
    close(timeout) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.show = false;
      }, timeout);
    },


    GetProdImg: async function (img) {
            this.prodImg = await fetch(`http://localhost:3000/api/image/${img}`).then(res => res.json());
            console.log(this.prodImg.name);
            return this.prodImg.name;
        },

  }
};
</script>

<style>
.loadImages {
  min-width: 300px;
  margin-left: -150px;
  background-color: #F48024;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
}

.loadImages.success {
  background-color: rgb(71, 244, 36);
}

.loadImages.danger {
  background-color: rgb(244, 36, 47);
}

.loadImages-enter-active {
  animation: loadImages-in 0.8s;
}
.loadImages-leave-active {
  animation: loadImages-in 0.8s reverse;
}
@keyframes loadImages-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.box-shadow {
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
</style>