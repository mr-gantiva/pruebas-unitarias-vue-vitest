import { shallowMount } from '@vue/test-utils'
import About from '@/components/About.vue'
import { describe, expect, test } from 'vitest'

describe('Componente About.vue', () => {
  test('Snapshot de About.vue', () => {
    // Selección del sujeto de pruebas
    const wrapper = shallowMount(About)
    // Validación de match con el snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
