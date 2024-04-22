const app = require("./src/app");
require("dotenv").config();
// Import the express app
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
