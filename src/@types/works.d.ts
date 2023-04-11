type TagsProps = {
  name: string
  color: string
}

export type ProjectCardProps = {
  index: number
  name: string
  description: string
  tags: TagsProps[]
  image: string
  source_code_link: string
}
