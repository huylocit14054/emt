FROM ruby:2.5

RUN apt-get update -qq \
    && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /api-emt

COPY Gemfile /api-emt/Gemfile
COPY Gemfile.lock /api-emt/Gemfile.lock
RUN bundle install

COPY . /api-emt

EXPOSE 3000

CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "0.0.0.0"]
