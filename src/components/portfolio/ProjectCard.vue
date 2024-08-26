<template>
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-location">{{ project.location }}</h3>
      <p class="project-size">{{ project.size }} m<sup>2</sup></p>
    </div>
    <div class="project-thumbnail">
      <img :src="getImgSrc(project.id, project.thumbnail)" />
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
.project-thumbnail img {
  width: 100%;
}
</style>
