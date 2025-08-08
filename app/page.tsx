import HeroBanner from '../components/HeroBanner';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      <section className="space-y-3">
        <h2 className="text-xl font-bold">即将到来的演出</h2>
        <p className="text-sm text-gray-600">部署完成后，这里会显示数据库里的最新演出列表。</p>
        <Link className="link" href="/events">查看全部演出 →</Link>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">最新日记</h2>
        <p className="text-sm text-gray-600">你可以在 /blog 发布图文或视频日记。</p>
        <Link className="link" href="/blog">进入博客 →</Link>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">相册主题</h2>
        <p className="text-sm text-gray-600">在 /albums 创建主题并上传你的照片。</p>
        <Link className="link" href="/albums">进入相册 →</Link>
      </section>
    </div>
  );
}
