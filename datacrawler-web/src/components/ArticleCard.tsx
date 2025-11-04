import { getDomain } from "../lib/url";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  title: String;
  url: string;
  source?: string;
  createdAt?: string;
};

export function ArticleCard({ title, url, source, createdAt }: Props) {
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
      {/* área que simula a imagem */}
      <div className="h-28 bg-gradient-to-br from-emerald-200 via-emerald-50 to-white group-hover:from-emerald-300" />

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
