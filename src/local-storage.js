export const loadState = () => {
  try {
    const savedState = localStorage.getItem('state');
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};
