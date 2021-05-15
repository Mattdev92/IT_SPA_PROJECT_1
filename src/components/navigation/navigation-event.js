// Custom event
const createNavigationEvent = (view) =>
  new CustomEvent('navigation', {
    detail: {
      view,
    },
  });
export default createNavigationEvent;
