interface TagProps {
  tag: string;
}

export default function Tag({ tag }: Readonly<TagProps>) {
  return (
    <div className="tag-info">
      <p>{tag}</p>
    </div>
  )
}