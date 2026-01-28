import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

// หน้าแรก
app.get("/", (c) => {
  return c.text("Hello Hono Backend!");
});

// start server
serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server running on http://localhost:3000");