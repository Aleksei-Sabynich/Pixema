
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { AppRoutes } from './AppRoutes'
import { Provider } from 'react-redux'
import { store } from '../store/store'

const renderWithProviders = (ui: React.ReactElement, { route = '/' } = {}) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </Provider>
  )
}

describe('AppRoutes', () => {
  it('рендерит Posts по маршруту /', () => {
    renderWithProviders(<AppRoutes />, { route: '/' })
    expect(screen.getByText(/Загрузка/i)).toBeInTheDocument()
  })
})