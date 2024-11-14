import type { Meta, StoryObj } from "@storybook/react";
import { CategoryBadge } from "./category-badge";

const meta = {
  component: CategoryBadge,
  tags: ["autodocs"],
  args: {
    post: {
      categoryColour: "emerald",
      categoryTitle: "Category",
    },
  },
} satisfies Meta<typeof CategoryBadge>;

export default meta;
type Story = StoryObj<typeof CategoryBadge>;

export const Travel = {
  args: {
    post: {
      categoryColour: "emerald",
      categoryTitle: "Travel",
    },
  },
} satisfies Story;

export const Podcast = {
  args: {
    post: {
      categoryColour: "lime",
      categoryTitle: "Podcast",
    },
  },
} satisfies Story;

export const Coding = {
  args: {
    post: {
      categoryColour: "purple",
      categoryTitle: "Coding",
    },
  },
} satisfies Story;

export const Running = {
  args: {
    post: {
      categoryColour: "orange",
      categoryTitle: "Running",
    },
  },
} satisfies Story;

export const Default = {
  args: {
    post: {
      categoryColour: "default",
      categoryTitle: "Unknown",
    },
  },
} satisfies Story;
