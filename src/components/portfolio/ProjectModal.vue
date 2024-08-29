<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="project-modal">
        <button class="close-btn" @click="closeModal"><i class="fa-solid fa-xmark"></i></button>
        <div class="project-info">
          <h3>{{ project.location }}</h3>
          <p>{{ project.size }}<sup>m2</sup></p>
        </div>
        <swiper
          class="swiper"
          :slides-per-view="1"
          :space-between="5"
          :modules="modules"
          :navigation="{ clickable: true }"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(image, index) in project.images" :key="index">
            <img :src="getImgSrc(project.id, image)" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import { defineEmits, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/bundle'
const modules = [Navigation, Pagination]
defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
  document.body.style.overflow = ''
}

const getImgSrc = (id, image) => {
  const imgSrc = new URL(`../../assets/img/portfolio/${id}/${image}`, import.meta.url).href
  return imgSrc
}
</script>
<style scoped>
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  color: var(--text-color-primary);
  cursor: pointer;
}
.close-btn i {
  font-size: 3rem;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.project-modal {
  position: relative;
  width: 80%;
  height: 90%;
  background-color: var(--background-color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  color: var(--text-color-primary);
}

.swiper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  position: relative;
}
.swiper-slide {
  width: 100%;
  height: 100%;
}

@media (max-width: 800px) {
  .project-modal {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  .swiper {
    width: 100%;
  }
}
</style>
