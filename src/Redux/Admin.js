const admin = JSON.parse(localStorage.getItem("admin") || "{}") || {};

export const reAdmin = (state = admin, action) => {
  switch (action.type) {
    case "ADMIN":
      return action.paylod;
    default:
      return state;
  }
};

export const acAdmin = (paylod) => {
  return {
    type: "ADMIN",
    paylod,
  };
};
