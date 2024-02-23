import React from 'react';
import Emoji from '../../Content/Emoji';
import { Link } from 'react-router-dom';
import MarkdownPage from '../markdownPage';
import { getLanguage } from '../../Language/Language';
import { getString } from '../../Language/LanguageStrings'
import FielddaysTable from './fielddays/fielddaysTable';

const RadioMain = () => {
    const language = getLanguage();

    return (
        <article className="main-page">
            <h1 id="list-intro" className="text-primary">{getString('radio_amateur')} <Emoji symbol="📻" /></h1>
            <MarkdownPage md={'Radio/' + language + '/main.md'} />

            <h2>{getString('equipment')}</h2>
            <ul>
                <li><Link reloadDocument to={'/' + language + '/radio/equipment/antenna/nvis'}>{getString('nvisAntenna')}</Link></li>
            </ul>

            <h2>{getString('fielddays')}</h2>
            <FielddaysTable />

            <h2>Links</h2>
            <ul>
                <li><a href="https://www.qrz.com/db/PA4KEV" target="_blank" rel="noopener noreferrer">https://www.qrz.com/db/PA4KEV</a></li>
                <li><a href="https://www.eqsl.cc/" target="_blank" rel="noopener noreferrer">https://www.eqsl.cc/</a></li>
                <li><a href="http://www.hamqsl.com/" target="_blank" rel="noopener noreferrer">http://www.hamqsl.com/</a></li>
                <li><a href="http://www.hrdlog.net/" target="_blank" rel="noopener noreferrer">http://www.hrdlog.net/</a></li>
            </ul>

            <ul>
                <li><a href="https://www.dj0ip.de/" target="_blank" rel="noopener noreferrer">https://www.dj0ip.de/</a></li>
                <li><a href="http://pa0ebc.nl/pe1kqp/s-match-tuner.html" target="_blank" rel="noopener noreferrer">http://pa0ebc.nl/pe1kqp/s-match-tuner.html</a></li>
                <li><a href="https://www.pc5e.nl/" target="_blank" rel="noopener noreferrer">https://www.pc5e.nl/</a></li>
                <li><a href="http://www.pd0cq.nl/" target="_blank" rel="noopener noreferrer">http://www.pd0cq.nl/</a></li>
                <li><a href="https://www.qsl.net/on7px/" target="_blank" rel="noopener noreferrer">https://www.qsl.net/on7px/</a></li>
                <li><a href="https://vk2pad.com/" target="_blank" rel="noopener noreferrer">https://vk2pad.com/</a></li>
                <li><a href="https://www.qrz.com/db/vk0pd/" target="_blank" rel="noopener noreferrer">https://www.qrz.com/db/vk0pd (Antarctica)</a></li>
                <li><a href="http://www.waponline.it/antarctic-info-for-ham-radio/" target="_blank" rel="noopener noreferrer">http://www.waponline.it/antarctic-info-for-ham-radio/ (Antarctica)</a></li>
            </ul>

            <ul>
                <li><a href="https://www.signalintegrityjournal.com/" target="_blank" rel="noopener noreferrer">https://www.signalintegrityjournal.com/</a></li>
                <li><a href="https://www.dspguide.com/" target="_blank" rel="noopener noreferrer">https://www.dspguide.com/</a></li>
                <li><a href="https://fieldradio.org/best-ham-radio-antenna-for-apartments/" target="_blank" rel="noopener noreferrer">https://fieldradio.org/best-ham-radio-antenna-for-apartments/</a></li>
                <li><a href="https://en.wikipedia.org/wiki/J-pole_antenna" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/J-pole_antenna</a></li>
                <li><a href="https://www.amateurradio.com/w5olf-website/" target="_blank" rel="noopener noreferrer">https://www.amateurradio.com/w5olf-website/</a></li>
                <li><a href="https://www.qrp-labs.com/clockn.html" target="_blank" rel="noopener noreferrer">https://www.qrp-labs.com/clockn.html</a></li>
            </ul>

            <ul>
                <li><a href="http://sdr.shbrg.nl:8074/" target="_blank" rel="noopener noreferrer">http://sdr.shbrg.nl:8074/</a></li>
                <li><a href="http://websdr.ewi.utwente.nl:8901/" target="_blank" rel="noopener noreferrer">http://websdr.ewi.utwente.nl:8901/</a></li>
            </ul>

            <ul>
                <li><a href="https://pa-11019.blogspot.com/2016/02/wall-loop-20m.html?m=1" target="_blank" rel="noopener noreferrer">https://pa-11019.blogspot.com/2016/02/wall-loop-20m.html?m=1</a></li>
            </ul>

            <ul>
                <li><a href="https://morsecode.world/" target="_blank" rel="noopener noreferrer">https://morsecode.world/</a></li>
                <li><a href="https://morsecode.ninja/" target="_blank" rel="noopener noreferrer">https://morsecode.ninja/</a></li>
                <li><a href="http://www.morserino.info/" target="_blank" rel="noopener noreferrer">http://www.morserino.info/</a></li>
            </ul>

            <ul>
                <li><a href="https://www.n3fjp.com/" target="_blank" rel="noopener noreferrer">https://www.n3fjp.com/</a></li>
                <li><a href="https://www.hamradiodeluxe.com/" target="_blank" rel="noopener noreferrer">https://www.hamradiodeluxe.com/</a></li>
                <li><a href="https://n1mmwp.hamdocs.com/" target="_blank" rel="noopener noreferrer">https://n1mmwp.hamdocs.com/</a></li>
            </ul>
        </article>
    )
}

export default RadioMain;