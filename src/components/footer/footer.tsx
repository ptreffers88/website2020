import React from "react";

import { Section } from "../section/section";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Section background="darkest">
        <h2>
          Ben je al aan het glimlachen?
          <br />
          Mooi!
        </h2>
        <p>
          Als je (net als ik) een grote glimlach hebt gekregen van het bekijken van mijn werk en wil je graag
          samenwerken? Dat kan!
        </p>
        <a href="mailto:hallo@developerpaul.nl">hallo@developerpaul.nl</a>
      </Section>
    </footer>
  );
};

export { Footer };
