////////////////////////////////////////////
// Map Types
export const Types = {
  RESIZE_REQUEST: "map/RESIZE_REQUEST",
  MAP_CLICK: "map/MAP_CLICK",
  SHOW_ON_MAP: "map/SHOW_ON_MAP",
  ON_VIEWPORT_CHANGE: "map/ON_VIEWPORT_CHANGE"
};

////////////////////////////////////////////
// Map Reducer
const INITIAL_STATE = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: -23.5489,
    longitude: -46.6388,
    zoom: 14
  }
};

export default function map(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RESIZE_REQUEST:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          height: window.innerHeight,
          width: window.innerWidth
        }
      };
    case Types.MAP_CLICK:
      return {
        ...state,
        viewport: { ...state.viewport, ...action.payload }
      };
    case Types.SHOW_ON_MAP:
      return {
        ...state,
        viewport: { ...state.viewport, ...action.payload }
      };
    case Types.ON_VIEWPORT_CHANGE:
      return { ...state, viewport: action.payload };
    default:
      return state;
  }
}

////////////////////////////////////////////
//Map Actions
export const Creators = {
  resizeRequest: () => ({ type: Types.RESIZE_REQUEST }),
  mapClick: ({ latitude, longitude }) => ({
    type: Types.MAP_CLICK,
    payload: { latitude, longitude }
  }),
  showOnMap: ({ latitude, longitude }) => ({
    type: Types.SHOW_ON_MAP,
    payload: { latitude, longitude }
  }),
  onViewportChange: payload => ({ type: Types.ON_VIEWPORT_CHANGE, payload })
};
