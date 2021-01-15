import React from "react";

import { Section } from "../section/section";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Section background="darkest">
        <h2 data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">
          Ben je al aan het glimlachen?
          <br />
          Mooi!
        </h2>
        <p data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">
          Als je (net als ik) een grote glimlach hebt gekregen van het bekijken van mijn werk en wil je graag
          samenwerken? Dat kan!
        </p>
        <a href="mailto:hallo@developerpaul.nl" data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">hallo@developerpaul.nl</a>
      </Section>
    </footer>
  );
};

export { Footer };
