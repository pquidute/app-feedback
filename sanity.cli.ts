import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  app: {
    organizationId: "oz0YEAkuF",
    entry: "./src/App.tsx",
  },
  server: {
    port: 3334,
  },
});
