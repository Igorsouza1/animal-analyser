import { Button } from "@/components/ui/button"

interface propsButton{
    content: string
}


export function ButtonDemo(props: propsButton) {
    return <Button>{props.content}</Button>
  }