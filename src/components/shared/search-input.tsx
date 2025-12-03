import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type SearchInputTypes = React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchInput({ className, ...props }: SearchInputTypes) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <Input type="text" className={cn("pl-10", className)} {...props} />
    </div>
  );
}
