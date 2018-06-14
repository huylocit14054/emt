import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

Router.onRouteChangeStart = url => {
  
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children }) => (
  <React.Fragment>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    {children}
  </React.Fragment>
);
