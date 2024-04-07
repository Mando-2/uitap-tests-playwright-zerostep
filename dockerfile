FROM jacoblincool/playwright:chromium

RUN mkdir /uitap-tests-playwright-zerostep

WORKDIR /uitap-tests-playwright-zerostep

COPY ./ ./

RUN npm install

RUN npx playwright install chromium

EXPOSE 3000

ENTRYPOINT ["npx","playwright","test"]

CMD [""]