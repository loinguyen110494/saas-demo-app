const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const version = process.env.APP_VERSION || "dev";
const tenant = process.env.TENANT || "tenant-a";

app.get("/", (req, res) => {
  res.json({
    app: "saas-demo-app",
    version,
    tenant,
    message: "Hello from Kubernetes GitOps CI/CD"
  });
});

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`saas-demo-app listening on port ${port}`);
});
