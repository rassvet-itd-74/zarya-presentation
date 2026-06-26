import { Deck } from '@revealjs/react';
import MermaidPlugin from 'reveal.js-mermaid-plugin/plugin/mermaid/mermaid.esm.js';
import RevealMenu from 'reveal.js-menu/menu.esm.js';
import 'reveal.js/reveal.css';
import 'reveal.js-menu/menu.css';
import 'reveal.js-menu/font-awesome/css/all.css';
import { SlideTitle } from './slides/SlideTitle';
import { SlideParticipants } from './slides/SlideParticipants';
import { SlideTOC1, SlideTOC2 } from './slides/SlideTOC';
import { SlideProposal } from './slides/SlideProposal';
import { SlideModel } from './slides/SlideModel';
import { SlideContractTimeline1, SlideContractTimeline2 } from './slides/SlideContractTimeline';
import { SlideContractVersions } from './slides/SlideContractVersions';
import { SlideUIOverview } from './slides/SlideUIOverview';
import { SlideSnaps } from './slides/SlideSnaps';
import { SlideWebUI1 } from './slides/SlideWebUI1';
import { SlideWebUI2 } from './slides/SlideWebUI2';
import { SlideStandaloneV1 } from './slides/SlideStandaloneV1';
import { SlideStandaloneV2 } from './slides/SlideStandaloneV2';
import { SlideTestsOverview } from './slides/SlideTestsOverview';
import { SlideBugs1, SlideBugs2 } from './slides/SlideBugs';
import { SlideWhySoLong } from './slides/SlideWhySoLong';
import { SlideResults } from './slides/SlideResults';
import { SlidePlans } from './slides/SlidePlans';
import { SlideClosing } from './slides/SlideClosing';

const isPrintPDF = typeof window !== 'undefined' && window.location.search.includes('print-pdf');

export function Presentation() {
  return (
    <div className="reveal-viewport" style={{ width: '100%', height: isPrintPDF ? 'auto' : '100%' }}>
      <Deck
        plugins={[MermaidPlugin, RevealMenu]}
        config={{
          menu: {
            loadIcons: false,
            themes: [
              { name: 'Black',     theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/black.css' },
              { name: 'White',     theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/white.css' },
              { name: 'League',    theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/league.css' },
              { name: 'Night',     theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/night.css' },
              { name: 'Moon',      theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/moon.css' },
              { name: 'Dracula',   theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/dracula.css' },
              { name: 'Solarized', theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/solarized.css' },
              { name: 'Sky',       theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/sky.css' },
              { name: 'Beige',     theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/beige.css' },
              { name: 'Simple',    theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/simple.css' },
              { name: 'Serif',     theme: 'https://unpkg.com/reveal.js@6.0.1/dist/theme/serif.css' },
            ],
            custom: [
              {
                title: 'PDF Export',
                icon: '<i class="fas fa-file-pdf"></i>',
                content: '<ul class="slide-menu-items"><li class="slide-menu-item"><a href="?print-pdf" target="_blank">Open PDF Export View</a></li></ul>',
              },
            ],
          },
          pdfMaxPagesPerSlide: 1,
          pdfSeparateFragments: false,
        } as any}
      >
        <SlideTitle />
        <SlideParticipants />
        <SlideTOC1 />
        <SlideTOC2 />
        <SlideProposal />
        <SlideModel />
        <SlideContractTimeline1 />
        <SlideContractTimeline2 />
        <SlideContractVersions />
        <SlideUIOverview />
        <SlideSnaps />
        <SlideWebUI1 />
        <SlideWebUI2 />
        <SlideStandaloneV1 />
        <SlideStandaloneV2 />
        <SlideTestsOverview />
        <SlideBugs1 />
        <SlideBugs2 />
        <SlideWhySoLong />
        <SlideResults />
        <SlidePlans />
        <SlideClosing />
      </Deck>
    </div>
  );
}

export default Presentation;

