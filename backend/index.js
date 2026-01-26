import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

// route แรก
app.get("/", (c) => {
  return c.text("Backend");
});

// เปิด server
serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server running at http://localhost:3000");