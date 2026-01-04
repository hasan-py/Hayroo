// Get dark mode preference from localStorage or default to false
const getDarkModePreference = () => {
  try {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
  } catch (e) {
    console.error("Error reading darkMode from localStorage:", e);
  }
  return false;
};

export const layoutState = {
  navberHamburger: false,
  loginSignupModal: false,
  loginSignupError: false,
  cartModal: false,
  cartProduct: null,
  singleProductDetail: null,
  inCart: null,
  cartTotalCost: null,
  orderSuccess: false,
  loading: false,
  darkMode: getDarkModePreference(),
};

export const layoutReducer = (state, action) => {
  switch (action.type) {
    case "hamburgerToggle":
      return {
        ...state,
        navberHamburger: action.payload,
      };
    case "loginSignupModalToggle":
      return {
        ...state,
        loginSignupModal: action.payload,
      };
    case "cartModalToggle":
      return {
        ...state,
        cartModal: action.payload,
      };
    case "cartProduct":
      return {
        ...state,
        cartProduct: action.payload,
      };
    case "singleProductDetail":
      return {
        ...state,
        singleProductDetail: action.payload,
      };
    case "inCart":
      return {
        ...state,
        inCart: action.payload,
      };
    case "cartTotalCost":
      return {
        ...state,
        cartTotalCost: action.payload,
      };
    case "loginSignupError":
      return {
        ...state,
        loginSignupError: action.payload,
      };
    case "orderSuccess":
      return {
        ...state,
        orderSuccess: action.payload,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "toggleDarkMode":
      const newDarkMode = !state.darkMode;
      // Persist to localStorage
      try {
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      } catch (e) {
        console.error("Error saving darkMode to localStorage:", e);
      }
      return {
        ...state,
        darkMode: newDarkMode,
      };
    default:
      return state;
  }
};
