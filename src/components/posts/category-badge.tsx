import slugify from "slugify";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function categoryToColourClass(colour: string) {
  switch (colour) {
    case "emerald":
      return "bg-emerald-500 hover:bg-emerald-600";
    case "lime":
      return "bg-lime-500 hover:bg-lime-600";
    case "orange":
      return "bg-orange-500 hover:bg-orange-600";
    case "purple":
      return "bg-purple-500 hover:bg-purple-600";
    default:
      return "bg-slate-500 hover:bg-slate-600";
  }
}

export function CategoryBadge({
  post,
  className,
}: {
  className?: string;
  post: {
    categoryColour: string;
    categoryTitle: string;
  };
}) {
  const { categoryColour: colour, categoryTitle: title } = post;
  const slug = slugify(title, { lower: true });
  return (
    <Link href={`/category/${slug}`} className={className}>
      <Badge className={categoryToColourClass(colour)}>{title}</Badge>
    </Link>
  );
}
