declare module 'sanity' {
  export function defineConfig(config: object): object;
  export function defineType(type: object): object;
  export type Rule = {
    required: () => Rule;
    min: (value: number) => Rule;
    email: () => Rule;
  };
}

declare module 'sanity/desk' {
  export function deskTool(): object;
}

declare module '@sanity/vision' {
  export function visionTool(): object;
}

declare module 'next-sanity/studio' {
  import type { ComponentType } from 'react';
  export const NextStudio: ComponentType<{ config: object }>;
}
