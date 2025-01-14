import {useContext, useEffect, useState} from "react";
import {ChromeContext} from "../../Contexts";
import "./Shortcuts.css";

const shorten = text => text.length > 14 ? text.slice(0, 12) + '...' : text
const favUrl = site => process.env.REACT_APP_FAVICON_PREFIX + site.url

const Shortcuts = () => {
    const chrome = useContext(ChromeContext);
    const [topSites, setTopSites] = useState([]);

    useEffect(() => {
        chrome.topSites.get(sites => setTopSites(sites.slice(0, 5)))
    }, [chrome])

    const shortCuts = topSites.map((site) => {
        return <a key={site.url} className="Shortcuts-Site" href={site.url}>
                <div className="Shortcuts-Site-Box">
                    <svg height="20" viewBox="0 0 11 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.201172" y="0.00769043" width="10" height="10" rx="5" fill="white"/>
                        <rect x="0.201172" y="17.0077" width="10" height="10" rx="5" fill="white"/>
                        <rect x="0.201172" y="34.0077" width="10" height="10" rx="5" fill="white"/>
                    </svg>
                </div>
                <div className="Shortcut-Logo"><img src={favUrl(site)} alt="icon"/></div>
                <p>{shorten(site.title)}</p>
            </a>;
        }
    );

    return <div className="Shrotcuts">{shortCuts}</div>;
};


export default Shortcuts;
