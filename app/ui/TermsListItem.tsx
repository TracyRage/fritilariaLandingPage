export default function RenderTermsListItem({name, content}: {name: string, content: string}) {
    return (
        <div className="pb-4">
        <li className="pb-2 lg:text-lg lg:tracking-tight text-primary">
          {name}
        </li>
        <p className="lg:leading-relaxed indent-6 text-pretty lg:text-wrap">{content}</p>

      </div>
    )

}

export function RenderFAQListItem({name, content}: {name: string, content: string}) {
    return (
        <div className="pb-4">
        <li className="pb-2 text-base lg:text-lg lg:tracking-tight text-primary">
          {name}
        </li>
        <p className="leading-relaxed tracking-wide lg:leading-relaxed text-pretty lg:text-wrap">{content}</p>
      </div>
    )

}