export default function RenderTermsListItem({name, content}: {name: string, content: string}) {
    return (
        <div className="pb-4">
        <li className="text-lg pb-2 text-primary tracking-tight">
          {name}
        </li>
        <p className="leading-relaxed indent-6">{content}</p>

      </div>
    )

}