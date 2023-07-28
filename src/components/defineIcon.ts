export const defineIcon = (category: string) => {
  switch (category) {
    case "Task":
      return "bi-cart";
    case "Random Thought":
      return "bi-motherboard-fill";
    case "Idea":
      return "bi-lightbulb";
  }
};
