import { Button } from "@/components/ui/button"
import Link from "next/link"

const Logo = () => {
  return (
    <Button variant={"link"} asChild className="px-2 py-4 text-2xl font-bold">
      <Link href="/">Logo</Link>
    </Button>
  )
}
export default Logo