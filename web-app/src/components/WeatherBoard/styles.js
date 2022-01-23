const styles = () => ({
  Card: {
    borderRadius: "var(--main-border-radius)",
  },
  Box: {
    marginTop: 20,
    borderRadius: 20,
    WebkitBoxShadow: "0 0 70px -10px rgba(0, 0, 0, 0.2)",
    boxShadow: "0 0 70px -10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "var(--bg-color--card)",
    color: "var(--main-text-color)",
    width: "85%",
    maxWidth: "675px",
    minHeight: "300px",
    backgroundImage: 'linear-gradient(to left, #89f7fe, #66a6ff)',
  },
  Col: {
    padding: 0
  },
})

export default styles;