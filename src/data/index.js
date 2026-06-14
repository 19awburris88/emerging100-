const modules = import.meta.glob('./committees/*.json', { eager: true })

export const committees = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => a.order - b.order)
