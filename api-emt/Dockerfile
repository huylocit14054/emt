FROM ruby:2.5-alpine

RUN apk update \
    && apk add build-base \
        tzdata \
        git \
        postgresql-dev \
        nodejs

WORKDIR /api-emt

COPY Gemfile /api-emt/Gemfile
COPY Gemfile.lock /api-emt/Gemfile.lock
RUN bundle install

COPY . /api-emt

EXPOSE 3000

CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "0.0.0.0"]
