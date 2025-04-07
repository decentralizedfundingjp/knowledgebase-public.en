// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'what-is-decentralized-funding',
    'benefits-implementation',
    'introduction',
    'guidebook-purpose',
    'target-readers',
    'guidebook-usage',
    {
      type: 'category',
      label: 'モデル',
      items: [
        'models/model-overview',
        'models/model-quadratic-funding',
        'models/model-quadratic-voting',
        'models/model-community-voting',
        'models/model-delegated-review',
      ],
    },
    {
      type: 'category',
      label: '事例研究',
      items: [
        'casestudy/about-case-studies',
        'casestudy/project-catalyst',
        'casestudy/unicef-gitcoin',
        'casestudy/gitcoin',
        'casestudy/hypercerts',
        'casestudy/compound-grants-program-2.0-cgp-2.0',
        'casestudy/bankless-dao',
        'casestudy/giveth',
        'casestudy/moloch-dao',
        'casestudy/neo-yamakoshi',
      ],
    },
    {
      type: 'category',
      label: 'ブロックチェーン',
      items: [
        'blockchain/blockchain-implementation',
      ],
    },
    {
      type: 'category',
      label: '課題',
      items: [
        'challenges/challenges-legal',
        'challenges/challenges-operational',
      ],
    },
    {
      type: 'category',
      label: 'ビジョン',
      items: [
        'notes/vision-long-term',
      ],
    },
  ],
};

export default sidebars;
