<template>
  <section id="projekty" ref="projectsSection">
    <div class="container">
      <h2>projekty</h2>
      <div class="projects-container">
        <ProjectCard
          @projectClick="openModal(project)"
          v-for="project in paginatedProjects"
          :key="project.id"
          :project="project"
        ></ProjectCard>
      </div>
      <div class="pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Poprzednia</button>
        <span>Strona {{ currentPage }} z {{ totalPages }}</span>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
          Następna
        </button>
      </div>
    </div>
    <SectionFooter></SectionFooter>
    <ProjectModal v-if="isModalOpen" @close="closeModal" :project="selectedProject"></ProjectModal>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import SectionFooter from '@/components/UI/SectionFooter.vue'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
import ProjectModal from '@/components/portfolio/ProjectModal.vue'
import projectData from '@/assets/data/projects.json'
import { useModalStore } from '@/stores/modal.js'

const useModal = useModalStore()
const projects = ref([])
const isModalOpen = ref(false)
const selectedProject = ref(null)

const currentPage = ref(1)
const itemsPerPage = 6
const totalPages = computed(() => Math.ceil(projects.value.length / itemsPerPage))
const projectsSection = ref(null)

const paginatedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = currentPage.value * itemsPerPage
  return projects.value.slice(startIndex, endIndex)
})

const goToPage = (pageNumber) => {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber
  }
  setTimeout(() => {
    if (projectsSection.value) {
      projectsSection.value.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}
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
#projekty {
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination button {
  background-color: var(--background-color-secondary);
  color: var(--text-color-secondary);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 1rem;
}
</style>
