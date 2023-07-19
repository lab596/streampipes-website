import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import PageSection from '../../components/PageSection';
import PageHeader from '../../components/PageHeader';


const TalksAndEvents: FC = () => (
  <Layout title={'Events'}>
    <PageHeader title={'Events'}></PageHeader>
    <PageSection sectionTitle={"Meet us"} backgroundClass={"background-white"}>
            <h4>Here are a few options to attend talks and events around StreamPipes</h4>
          <b>Upcoming:</b>
          <div className="event-list" style={{marginTop:'20px', marginBottom:'20px'}}>
            <p>😞 There are currently no events planned. Do you have an idea? Get in touch with us!</p>
            <ul>
            </ul>
          </div>
          <b>Past:</b>
          <div className="event-list" style={{marginTop:'20px', marginBottom:'20px'}}>
            <ul>
              <li><a href="https://www.inovex.de/de/news-events/events/meetup-streampipes-ein-apache-top-level-projekt-aus-karlsruhe/">[MeetUp@inovex] StreamPipes: Ein Apache Top-Level-Projekt aus Karlsruhe</a>, inovex GmbH, Karlsruhe, 25.05.2023</li>
              <li><a href="https://www.buildingiot.de/veranstaltung-17792-0-iiot-datenanbindung-und--analyse-leicht-gemacht.html">IIoT-Datenanbindung und -analyse leicht gemacht</a>, buildingIoT, München, 27.04.2023</li>
              <li><a href="https://2023.pycon.de/program/LXBGZS/">Apache StreamPipes for Pythonistas: IIoT data handling made easy!</a>, PyCon DE & PyData, Berlin, 17. April - 19. April 2023</li>
              <li><a href="https://event.bytefabrik.ai/">Apache StreamPipes Graduation Event - Industrial IoT mit Open-Source-Technologien</a>, Bytefabrik.AI & IONOS, Karlsruhe, 23.03.2023</li>
              <li><a href="https://pretalx.com/fossgis2023/talk/FTBK3Q/">GIS & Datenströme; Stream Processing mit Apache StreamPipes</a>, FOSSGIS 2023, Berlin, 17.03.2023</li>
              <li><a href="https://www.youtube.com/watch?v=mZTVIj3LnqI">Democratizing ML pipelines using StreamPipes</a>, ApacheCon@Home 2021 (virtual)</li>
              <li><a href="https://www.youtube.com/watch?v=b_T9zzcNRWY">Democratizing ML pipelines using StreamPipes</a>, ApacheCon Asia 2021 (virtual)</li>
              <li><a href="https://www.youtube.com/watch?v=C4SC4HBaXOY">StreamPipes' new kids on the block</a>, ApacheCon Asia 2021 (virtual)</li>
              <li><b><a href="https://skalena.hubspotpagebuilder.com/webinar-streampipes-2020">StreamPipes Webinar Brasil</a></b>, Skalena Webinar, Online, 26.11.2020</li>
              <li><b><a href="https://www.meetup.com/SF-Big-Analytics/events/273280510/">Mastering the Industrial IoT with Apache StreamPipes</a></b>, SF Big Analytics Meetup, Online, 29.10.2020</li>
              <li><b><a href="https://www.apachecon.com/acah2020/tracks/iot.html">Apache StreamPipes – Flexible Industrial IoT Management</a></b>, ApacheCon @Home, Online, 29.09.2020</li>
              <li><b><a href="https://www.apachecon.com/acah2020/tracks/iot.html">Analyzing IIoT data with PLC4X and StreamPipes</a></b>, ApacheCon @Home, Online, 29.09.2020</li>
              <li><b><a href="https://www.youtube.com/watch?v=YdROZ0C6Qd0">Flexible Analysen & KI-basierte Produktionsüberwachung mit StreamPipes</a></b>, pragmatic industries Webinar, 13.05.2020</li>
              <li><b><a href="https://www.meetup.com/de-DE/inovex-karlsruhe/events/265766486/">Inovex Meetup Karlsruhe</a></b>, Karlsruhe, 12.11.2019</li>
              <li><b>Motek - Internationale Fachmesse für Produktions- und Montageautomatisierung</b>, Messe Stuttgart, 07.-10.10.2019</li>
              <li><b><a href="https://europe-2019.flink-forward.org/conference-program#flink-for-everyone--self-service-data-analytics-with-streampipes">FlinkForward Europe</a></b>, bcc Berlin Congress Center, Berlin, 08.10.2019</li>
              <li><b>mFUND-Konferenz</b>, Allianz Forum, Berlin, 26.09.2019 </li>
              <li><b><a href="https://www.apachecon.com/acna19/s/#/scheduledEvent/1077">ApacheCon North America</a></b>, The Flamingo Hotel, Las Vegas, 10.09.2019</li>
              <li><b>Leichtbau meets KI</b>, Hochleistungsrechenzentrum, Stuttgart, 24.06.2019</li>
              <li><b>DevCamp</b>, FZI, Karlsruhe, 24.05.2019</li>
              <li><b>ACM CCGRID</b>, Golden Beach Hotel, Larnaca, 14.-17.05.2019</li>
              <li><b>IT-Innovationen in der Produktion</b>, FZI, Karlsruhe, 11.04.2019</li>
              <li><b>Hannover Messe</b>, Hannover, 01.-05.04.2019</li>
              <li><b>GOR Working Group Analytics</b>, Roland Berger/Spielfeld Digital Hub, Berlin, 29.03.2019</li>
              <li><b>FZI Open House</b>, FZI, Karlsruhe, 21.02.2019</li>
              <li><b>IEEE Big Data</b>, The Westin Seattle, Seattle, 10.12.2018</li>
              <li><b>mFUND-Konferenz</b>, WECC, Berlin, 16.10.2018</li>
              <li><b>Code_N Festival</b>, Hanns-Martin-Schleyer-Halle, Stuttgart, 09.10.2018</li>
            </ul>
          </div>
  </PageSection>
  </Layout>
)


export default TalksAndEvents;
