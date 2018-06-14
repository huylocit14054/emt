import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import AntdLayout from "../index";
import ProgressBar from "../components/progressBar";
import NavigationLayout from "../components/navigationLayout";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    const { pathname } = this.props.router;
    let currentPage = pathname;
    currentPage =
      currentPage === "/" ? "projects" : currentPage.replace("/", "");
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AntdLayout>
            <ProgressBar>
              {pathname === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <NavigationLayout currentPage={currentPage}>
                  <Component {...pageProps} />
                </NavigationLayout>
              )}
            </ProgressBar>
          </AntdLayout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
