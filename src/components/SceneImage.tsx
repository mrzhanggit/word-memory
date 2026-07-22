import { ImageOff } from 'lucide-react';
import { resolveSceneUrl } from '../lib/sceneUrl';

interface SceneImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export default function SceneImage({ src, alt, className = '', loading }: SceneImageProps) {
  if (src) {
    return <img src={resolveSceneUrl(src)} alt={alt} className={className} loading={loading} />;
  }

  return (
    <div
      className={`min-h-56 bg-[#f3eee4] flex flex-col items-center justify-center gap-2 text-[#2e2a26]/45 ${className}`}
      role="img"
      aria-label={`${alt}的插画待导入`}
    >
      <ImageOff className="w-9 h-9" />
      <span className="font-black">插画待导入</span>
      <span className="text-xs">文字内容可以先正常学习</span>
    </div>
  );
}
