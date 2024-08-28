<template>
  <section id="my-projects">
    <div class="container">
      <h2>moje projekty</h2>
      <div class="projects-container">
        <ProjectCard
          @projectClick="openModal(project)"
          v-for="project in projects"
          :key="project.id"
          :project="project"
        ></ProjectCard>
      </div>
    </div>
    <SectionFooter></SectionFooter>
    <ProjectModal v-if="!isModalOpen" @close="closeModal" :project="selectedProject"></ProjectModal>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionFooter from '@/components/UI/SectionFooter.vue'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import ProjectModal from '@/components/portfolio/ProjectModal.vue'
import projectData from '@/assets/data/projects.json'
import { useModalStore } from '@/stores/modal.js'

const useModal = useModalStore()
const projects = ref([])
const isModalOpen = ref(false)
const selectedProject = ref(projectData[0])

const openModal = (project) => {
  selectedProject.value = project
  useModal.toggleModal()
  isModalOpen.value = useModal.isModalOpen
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  useModal.toggleModal()
  selectedProject.value = null
  isModalOpen.value = useModal.isModalOpen
}
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
