// Expand this function as necessary to compose state from rails
export default (props, railsContext) => (
  Object.assign({}, props, { railsContext })
);