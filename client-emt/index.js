import Head from 'next/head';
import stylesheet from './styles/antd.less';

export default ({ children }) => (
  <div>
    <Head>
      <title>Enhance Application</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <style>{stylesheet}</style>
    </Head>

    {children}
  </div>
);
