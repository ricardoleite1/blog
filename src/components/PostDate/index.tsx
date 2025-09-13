import { formatDateTime } from "@/utils/format-datetime";

type PostDateProps = {
  date: string
}

export function PostDate({ date }: PostDateProps) {
  return (
    <time
      className="text-sm"
      dateTime={formatDateTime(date)}
    >
      {formatDateTime(date)}
    </time>
  )
}
