"use client";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./studio/schemas";

export const studioConfig = defineConfig({
  name: "default",
  title: "Festival Teknik CMS",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});

export default studioConfig;
