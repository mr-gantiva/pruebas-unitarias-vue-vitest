import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { describe, test, expect } from 'vitest'

describe('Componente HomeView.vue', () => {
  test('Snapshot de HomeView.vue', () => {
    // Selección del sujeto de pruebas
    const wrapper = shallowMount(HomeView)
    // Validación de match con el snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
