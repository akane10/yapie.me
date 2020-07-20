import { data } from '../data'

export const state = () => ({
  allResources: [...data.reverse()],
  resources: [],
  tags: []
})

export const mutations = {
  setTags(state, resources) {
    state.tags = [...new Set(resources.flatMap((i) => i.tags))].map((i) => ({
      name: i,
      isSelected: false
    }))
  },
  selectTag(state, i) {
    const select = state.tags[i]
    if (select.isSelected) {
      select.isSelected = false
    } else {
      select.isSelected = true
    }
  },
  selectAllTags(state, bool) {
    state.tags = state.tags.map((i) => ({ ...i, isSelected: bool }))
  },
  setResources(state, { tags = [], data = [] }) {
    const is = (tag) => (tag1) => ({
      ...tag1,
      is: tag1.tags.includes(tag)
    })
    // ap :: [a -> b] -> [a] -> [b]
    const ap = (fns) => (xs) =>
      fns.reduce((acc, fn) => acc.concat(xs.map(fn)), [])
    // lift :: (a -> b -> c) -> [a] -> [b] -> [c]
    const lift = (fn) => (a) => (b) => ap(a.map(fn))(b)
    const res = lift(is)(tags)(data).filter((i) => i.is)
    state.resources = res.filter(
      (v, i, a) => a.findIndex((t) => t.name === v.name) === i
    )
  },
  filterResources(state, value) {
    state.resources = state.allResources.filter((i) =>
      i.name.toLowerCase().includes(value.toLowerCase())
    )
  }
}
