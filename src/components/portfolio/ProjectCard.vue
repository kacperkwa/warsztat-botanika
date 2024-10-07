<template>
  <div class="project-card" @click="handleClick">
    <div class="project-header" @click.stop>
      <h3 class="project-location">{{ project.location }}</h3>
      <p class="project-size">{{ project.size }} m<sup>2</sup></p>
    </div>
    <div class="project-thumbnail">
      <img
        :src="getImgSrc(project.id, project.thumbnail)"
        alt="Miniatura projektu."
        loading="lazy"
      />
      <div class="overlay"><p>kliknij po więcej</p></div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps } from 'vue'
const getImgSrc = (id, thumbnail) => {
  const imgSrc = new URL(`../../assets/img/portfolio/${id}/${thumbnail}`, import.meta.url).href
  return imgSrc
}
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['projectClick'])
const handleClick = () => {
  emit('projectClick', props.project)
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 5px;
  width: 25%;
  min-width: 300px;
  max-height: none;
  margin-bottom: 2rem;
}
.project-header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid var(--text-color-primary);
}
.project-location {
  text-transform: uppercase;
}
.project-size,
.project-location {
  font-size: 1.8rem;
}
.project-thumbnail {
  cursor: pointer;
  position: relative;
}
.project-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.overlay p {
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
}
.project-thumbnail:hover .overlay {
  opacity: 1;
}
</style>
