<template>
  <section id="my-projects">
    <div class="container">
      <h2>moje projekty</h2>
      <div class="projects-container">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project">
        </ProjectCard>
      </div>
    </div>
    <SectionFooter></SectionFooter>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import SectionFooter from '@/components/UI/SectionFooter.vue'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import projectData from '@/assets/data/projects.json'
const projects = ref([])
onMounted(() => {
  projects.value = projectData
})
</script>
<style scoped>
#my-projects {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 2rem 6rem 2rem;
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
  position: relative;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}
.container h2 {
  text-transform: uppercase;
  font-size: calc(2rem + 1vw);
  margin-bottom: 5rem;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
}
</style>
