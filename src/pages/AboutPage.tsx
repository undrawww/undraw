import { useState, useEffect } from 'react';

const schoolworks = [
  {
    title: 'SILAG',
    subject: 'Capstone 1',
    tool: 'Made with Figma',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316630/Silag_Login_sacgzm.jpg',
    gallery: [
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316630/Silag_fafdou.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316625/Silag_Guidelines_fnxyao.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316625/Silag_Hotlines_Add_Contact_with_Info_lwzjt3.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316625/Silag_Flood_Reports_thvlll.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316626/Silag_Hotlines_y2k1bu.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316626/Silag_Notifications_All-1_vd9uzt.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316626/Silag_Maps_lfzbhn.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316626/Silag_Profile_iomjxs.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316626/Silag_Notifications_All_qyp9kw.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316626/Silag_Report_Flood_Dropdown_jb71io.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316627/Settings_g24mke.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316630/Silag_fafdou.png',
    ],
  },
  {
    title: 'Artist Profile',
    subject: 'Multimedia Systems',
    tool: 'Made with Photoshop',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780316122/ASIS_ARTISTPROFILE_wauknw.jpg',
  },
  {
    title: 'Product Poster',
    subject: 'Multimedia Systems',
    tool: 'Made with Photoshop',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780312536/ASIS_PRODUCT_POSTER_px80ll.png',
  },
  {
    title: 'Coffee Poster',
    subject: 'Multimedia Systems',
    tool: 'Made with Photoshop',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780312536/Copy_of_ASIS_COFFEEPOSTER_lkskhj.jpg',
  },
  {
    title: 'Physical Floor Plan',
    subject: 'Networking 1',
    tool: 'Made with Microsoft Visio',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780313856/ASIS_DESIGN_n691om.jpg',
  },
  {
    title: 'Home Page Layout',
    subject: 'Human Computer Interaction',
    tool: 'Made with Figma',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780314475/HomePage_cschun.png',
  },
  {
    title: 'Interactive Powerpoint',
    subject: 'Introduction to Computing',
    tool: 'Made with Powerpoint',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317452/Slide1_zyt7sv.jpg',
    gallery: [
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317452/Slide2_e41fkh.jpg',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317453/Slide3_mg1dag.jpg',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317452/Slide4_eaovy6.jpg',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317454/Slide5_onclwo.jpg',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317457/Slide6_jfzn01.jpg',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317458/Slide7_add7xj.jpg',
    ],
  },
  {
    title: 'Spirit of Christmas',
    subject: 'Introduction to Computing',
    tool: 'Made with Powerpoint',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780317692/Asis_Spirit_of_Christmas_crpbzm.gif',
  },
  {
    title: 'Logo Animation',
    subject: 'Reading Visual Arts',
    tool: 'Made with Blender',
    video:
      'https://res.cloudinary.com/dqmmfgbf1/video/upload/v1780317956/AMG_d7ao2v.mp4',
  },
  {
    title: 'Real Vision Photography',
    subject: 'Data Structures and Algorithms',
    tool: 'Made with Figma',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319710/0_uhzt7q.png',
    gallery: [
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319708/7_qbucm4.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319708/5_pc8v9t.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319711/6_yslgwu.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319713/2_ma5doi.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319714/3_t9veki.png',
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780319709/4_mlpwja.png',
    ],
  },
  {
    title: 'Contigency Planning Project',
    subject: 'Information Assurance and Security',
    tool: 'Made with Adobe Premiere Pro',
    video:
      'https://res.cloudinary.com/dqmmfgbf1/video/upload/v1780320362/Sample1_tmzdao.mp4',
    link: 'https://drive.google.com/file/d/1cVQEMchM5aMGuErOCv_nB9NndYwM9Ec6/view?usp=drive_link',
  },
  {
    title: 'Dr. Pio Valenzuela',
    subject: 'Readings in Philippine History',
    tool: 'Made with Capcut',
    video:
      'https://res.cloudinary.com/dqmmfgbf1/video/upload/v1780321981/Sample2_exyjhy.mp4',
    link: 'https://drive.google.com/file/d/1C5LvIgyE3kEiMn17mggnKXGGt-Ok6NH3/view?usp=sharing',
  },
  {
    title: 'Peace',
    subject: 'Ethics with Peace Education',
    tool: 'Made with Capcut',
    video:
      'https://res.cloudinary.com/dqmmfgbf1/video/upload/v1780322190/ASIS_PEACE_xzizjo.mp4',
    link: 'https://drive.google.com/file/d/1u40H8BH3idj8zkVjUwFCzAtTOuOdRLls/view?usp=sharing',
  },
  {
    title: 'One Day Juan Barangay',
    subject: 'NSTP',
    tool: 'Made with Capcut',
    video:
      'https://res.cloudinary.com/dqmmfgbf1/video/upload/v1780322439/Sample3_d1lynh.mp4',
    link: 'https://drive.google.com/file/d/1I_kCe48MVHQ73uQtSGPOP4oHudAz9H4i/view?usp=sharing',
  },
  {
    title: 'Land Pollution',
    subject: 'Environmental Science',
    tool: 'Made with Capcut',
    video:
      'https://res.cloudinary.com/dqmmfgbf1/video/upload/v1780322818/Sample4_rlcris.mp4',
    link: 'https://drive.google.com/file/d/1oDJe9-SGSWCmClxaZQ9MXzasBNsn_S2M/view',
  },
  {
    title: 'Typography',
    subject: 'Reading Visual Arts',
    tool: 'Made with Adobe Illustrator',
    image:
      'https://res.cloudinary.com/dqmmfgbf1/image/upload/v1780322988/Finals_Typography_qbjhgl.jpg',
  },
];

type SchoolWork = (typeof schoolworks)[number];

export default function AboutPage() {
  const [modalWork, setModalWork] = useState<SchoolWork | null>(null);


  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalWork(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (modalWork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalWork]);

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14">
        <div className="md:w-[40%] shrink-0">
          <img
            src="https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779897056/me_bzsh7r.jpg"
            alt="Portrait"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="flex-1">
          <span className="inline-block uppercase tracking-widest text-sm text-gray-500 mb-6">About Undraw</span>

          <div className="space-y-6 text-gray-600">
            <p>
              Dan Andrew Asis is a hybrid shooter specializing in both photography and videography, with a primary focus on wedding events and meaningful celebrations. His work is centered on capturing authentic moments that reflect emotion, connection, and the unique story behind every occasion.
            </p>
            <p>
              With a strong appreciation for the beauty found in everyday life, he is drawn to natural light, subtle details, and fleeting moments that often go unnoticed. Through his lens, these scenes are transformed into visual memories that feel timeless almost like glimpses of paradise preserved in stillness.
            </p>
            <p>
              Driven by passion and dedication, he consistently strives to produce work that not only meets client expectations but exceeds them. He pays close attention to every detail and is willing to go beyond what is required, ensuring that each shot is thoughtfully crafted and visually compelling. His approach is guided by the goal of creating meaningful, high-quality imagery that leaves a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <h2 className="text-3xl md:text-4xl font-semibold text-black text-center uppercase tracking-widest mb-14">
          School Projects
        </h2>

        <div className="relative left-1/2 -ml-[50vw] w-screen px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:balance]">
            {schoolworks.map((work, index) => (
              <div
                key={index}
                className="mb-8 break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => {
                  if (work.link) {
                    window.open(work.link, '_blank', 'noopener,noreferrer');
                  } else if (work.gallery && work.gallery.length > 0) {
                    setModalWork(work);
                  }
                }}
              >
                {work.video ? (
                  <video
                    src={work.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-semibold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {work.title}
                  </h3>
                  <span className="text-sm text-white/80 uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {work.subject}
                  </span>
                  <span className="text-xs text-white/60 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {work.tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-1 text-xs text-black">
        <p>undraw15@gmail.com</p>
        <p>+63 991 342 4637</p>
      </div>

      {modalWork && modalWork.gallery && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setModalWork(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] mt-[5vh] mx-4 bg-[#f2f1ef] rounded-2xl overflow-hidden flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-200 shrink-0">
              <div>
                <h3 className="text-2xl font-semibold text-black">{modalWork.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                  {modalWork.subject} · {modalWork.tool}
                </p>
              </div>
              <button
                onClick={() => setModalWork(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600 hover:text-black text-2xl leading-none"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-8">
              <div className="grid grid-cols-3 gap-4">
                {modalWork.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={`${modalWork.title} – screen ${i + 1}`}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
