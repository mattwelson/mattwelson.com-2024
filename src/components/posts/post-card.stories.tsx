import type { Meta, StoryObj } from "@storybook/react";
import { PostCard, PostCardSkeleton } from "./post-card";

const meta = {
  component: PostCard,
  tags: ["autodocs"],
  args: {
    post: {
      _id: "123",
      title: "Hello",
      slug: "#",
      date: new Date("2024-11-06"),
      categoryColour: "emerald",
      categoryTitle: "StoryBook",
      image: {
        _key: null,
        _type: "metaimage",
        asset: {
          _ref: "image-202ee267611cddd1f38445351451630968f93ba1-1920x1440-jpg",
          _type: "reference",
        },
      },
    },
  },
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Vertical = {} satisfies Story;
export const Horizontal = {
  args: {
    orientation: "horizontal",
  },
} satisfies Story;

export const FullWidth = {
  args: {
    className: "w-full",
  },
} satisfies Story;

export const HorizontalSkeleton = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => <PostCardSkeleton {...args} />,
} satisfies Story;

export const FullWidthSkeleton = {
  args: {
    className: "w-full",
  },
  render: (args) => <PostCardSkeleton {...args} />,
} satisfies Story;
