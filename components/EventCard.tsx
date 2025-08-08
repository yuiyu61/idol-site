type Props = { e: any };
export default function EventCard({ e }: Props) {
  return (
    <article className="card hover:shadow-md transition">
      <header className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold line-clamp-2">{e.title}</h3>
        <span className="badge">{new Date(e.start_at||e.startAt).toLocaleString('ja-JP')}</span>
      </header>
      <div className="mt-2 text-sm text-black/70 space-y-1">
        <p>场地：{e.venue}</p>
        <p>团体：{Array.isArray(e.groups)? e.groups.join(' / '): e.groups}</p>
      </div>
    </article>
  );
}
