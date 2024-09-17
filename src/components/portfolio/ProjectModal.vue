<template>
  <teleport to="body">
    <div class="modal-overlay">
      <div class="wrapper">
        <div class="project-modal">
          <button class="close-btn" @click="closeModal"><i class="fa-solid fa-xmark"></i></button>
          <div class="project-info">
            <div class="project-header">
              <h3 class="project-location">{{ project.location }}</h3>
              <p class="project-size">{{ project.size }}m<sup>2</sup></p>
            </div>
            <p class="project-desc">{{ project.fullDescription }}</p>
          </div>
          <swiper
            id="my-swiper"
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="{ clickable: true }"
            :pagination="{ clickable: true }"
            :loop="true"
          >
            <swiper-slide v-for="(image, index) in project.images" :key="index">
              <img :src="getImgSrc(project.id, image)" alt="" />
            </swiper-slide>
          </swiper>
        </div>
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
.wrapper {
  position: relative;
  background-color: var(--background-color-primary);
  height: 90%;
  width: 90%;
  padding-top: 5rem;
  overflow-y: auto;
  z-index: 1000;
  border-radius: 8px;
}
.project-modal {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  min-height: min-content;
  width: 100%;
}
.project-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
.project-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: calc(1.8rem + 0.5vw);
}
.project-header h3,
.project-header p {
  font-weight: 300;
  letter-spacing: 0.5rem;
}
.project-desc {
  font-size: calc(1.4rem + 0.2vw);
  text-align: justify;
  padding: 0 2rem;
  width: 55%;
  letter-spacing: 0.2rem;
  font-weight: 300;
}
sup {
  font-size: 1.6rem;
}

@media (max-width: 1680px) {
  #my-swiper {
    width: 70%;
  }
  .project-desc {
    width: 70%;
  }
}
@media (max-width: 1200px) {
  .wrapper {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  #my-swiper {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .wrapper {
    justify-content: start;
    gap: 10rem;
  }
  .project-desc {
    width: 100%;
  }
}
</style>
