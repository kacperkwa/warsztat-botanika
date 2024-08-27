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
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
}
</style>
