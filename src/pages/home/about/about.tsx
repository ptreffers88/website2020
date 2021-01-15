import React from "react";

import { Section } from "../../../components/section/section";

const About = (): JSX.Element => {
  return (
    <Section title="Een lach op mijn gezicht!" background="light">
      <p data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">Wanneer ik over Front-end Development begin te praten, verschijnt er een lach op mijn gezicht.</p>
      <p data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">
        Het mooie aan dit vakgebied vind ik het zien van resultaat en het vinden van een oplossing voor de klant, maar
        ook het coderen vind ik erg leuk.
      </p>
      <p data-sal="slide-up" data-sal-duration="750" data-sal-delay="700">Dit doe ik graag in een team. Ik ben betrokken en wil met mijn inbreng van waarde zijn in een bedrijf.</p>
    </Section>
  );
};

export { About };
