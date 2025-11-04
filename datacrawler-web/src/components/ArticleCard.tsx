import { getDomain } from "../lib/url";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  title: string;
  url: string;
  source?: string;
  createdAt?: string;
  imageUrl?: string;
};

export function ArticleCard({ title, url, source, createdAt, imageUrl }: Props) {
  const domain = getDomain(url);
  const date =
    createdAt ? new Date(createdAt).toLocaleDateString("pt-BR") : null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {imageUrl ? (
        <img src={imageUrl} className="h-28 w-full object-cover" alt={title} />
      ) : (
        <div className="h-28 bg-gradient-to-br from-emerald-200 via-emerald-50 to-white" />
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="line-clamp-2 text-base font-semibold text-gray-900 group-hover:text-emerald-700">
          {title}
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          {source ? (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
              {source}
            </span>
          ) : null}
          {domain ? <span>{domain}</span> : null}
        </div>

        {date ? <p className="text-xs text-gray-400">{date}</p> : null}

        <div className="mt-auto flex items-center gap-1 text-xs font-medium text-emerald-700">
          Ler matéria
          <FiExternalLink className="h-3 w-3" />
        </div>
      </div>
    </a>
  );
}
