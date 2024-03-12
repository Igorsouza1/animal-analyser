import { Button } from "@/components/ui/button"

interface propsButton{
    content: string,
    onClick?: () => Promise<void>
}


export function ButtonBase(props: propsButton) {
    return <Button onClick={props.onClick}>{props.content}</Button>
  }