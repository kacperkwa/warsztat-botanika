<template>
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-location">{{ project.location }}</h3>
      <p class="project-size">{{ project.size }} m<sup>2</sup></p>
    </div>
    <div class="project-thumbnail">
      <img :src="getImgSrc(project.id, project.thumbnail)" />
      <div class="overlay"><p>kliknij po więcej</p></div>
    </div>
    <div class="project-description">
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>
<script setup>
const getImgSrc = (id, thumbnail) => {
  const imgSrc = new URL(`../../assets/img/portfolio/${id}/${thumbnail}`, import.meta.url).href
  return imgSrc
}
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 25%;
  min-width: 300px;
  max-height: none;
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
  overflow: hidden;
}
.project-thumbnail img {
  width: 100%;
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
