module.exports = {
  title: `찐-coding`,
  description: `찐코딩의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sujinlim0101.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `sujinlim0101/sujinlim0101.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `임수진`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'zoomkoding.gif', // Path to the image in the 'asset' folder
    },
    social: {
      linkedIn: ``,
      github: `https://github.com/sujinlim0101`,
      email: `sujin716800@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.03 ~',
        activity: '에어클래스 프론트엔드',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '타입스크립트 모션 개발',
        description:
          '드림코딩 타입스크립트 강의를 보고 만든 프로젝트',
        techStack: ['flutter', 'typescript'],
        thumbnailUrl: 'picky.jpeg',
        links: {
          post: '/start-up-app-development',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },
    ],
  },
};
