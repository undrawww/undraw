import { useState, useEffect, useRef, useCallback } from 'react';

const galleryPhotos = [
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893571/IMG-26_kybdft.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893571/IMG-18_dplpbp.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893570/IMG-12_k2w290.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893570/IMG-10_wt8q9k.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893569/IMG-8_xbkxqd.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893569/IMG-5_osa1jz.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893569/IMG-37_cwxszx.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893568/IMG-34_h2mu3i.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893568/IMG-36_shjroz.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893567/IMG-30_z9qoh7.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893440/IMG-21_egf40n.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893439/IMG-16_syoxno.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893439/IMG-18_wsndlf.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893439/IMG-55_i8bjvl.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893438/IMG-49_cc1mpg.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893438/IMG-31_xzm0n1.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893437/IMG-25_ldoc2u.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893437/IMG-43_acooxo.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893437/IMG-28_abn57o.jpg',
  'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779893437/IMG-48_d1ozfj.jpg',
];

export default function GalleryPage() {
  const [orientations, setOrientations] = useState<Record<number, 'landscape' | 'portrait'>>({});
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  const handleImageLoad = (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const orientation = img.naturalWidth >= img.naturalHeight ? 'landscape' : 'portrait';
    setOrientations((prev) => ({ ...prev, [index]: orientation }));
  };

  const setRef = useCallback((el: HTMLElement | null, index: number) => {
    articleRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisible((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    articleRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative left-1/2 -ml-[50vw] w-screen py-12 px-8">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:balance]">
        {galleryPhotos.map((src, index) => {
          const orientation = orientations[index];
          const aspectClass = orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-[16/9]';
          const isVisible = visible.has(index);

          return (
            <article
              key={index}
              ref={(el) => setRef(el, index)}
              data-index={index}
              className={`mb-8 overflow-hidden break-inside-avoid ${aspectClass} gallery-fade-in ${isVisible ? 'gallery-visible' : ''}`}
              style={{ transitionDelay: `${(index % 3) * 120}ms` }}
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
                src={src}
                alt=""
                onLoad={(e) => handleImageLoad(index, e)}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
