export const eventNames = {
  open: 'kk-modals-open',
  close: 'kk-modals-close',
};

const emitEvent = function(eventName, options = {}) {
  const nfEvent = new CustomEvent(eventName, { detail: options });
  document.dispatchEvent(nfEvent);
};

export const emmiter = {
  open: (component, settings) => {
    emitEvent(eventNames.open, { component, settings });
  },
  close: (id) => {
    emitEvent(eventNames.close, { id });
  },
};
