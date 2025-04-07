import React from 'react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

export default function NotFound() {
  return (
    <Layout>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <Heading as="h1" className="hero__title">
              ページが見つかりません
            </Heading>
            <p>
              お探しのページが見つかりませんでした。
              このページにリンクしているサイトの所有者にリンクが壊れていることを伝えてください。
            </p>
            <p>
              <a href="/">トップページに戻る</a>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 