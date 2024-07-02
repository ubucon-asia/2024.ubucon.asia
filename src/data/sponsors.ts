import type { ColSize } from "@canonical/react-components"
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import CanonicalUbuntuLogo from "@assets/sponsors/canonical_ubuntu.svg";
import OnlyOffice from "@assets/sponsors/onlyoffice.svg";
import FossUnited from "@assets/sponsors/fossunited.svg";
import JECRC from "@assets/education_partners/jecrc.png";
import JIC from "@assets/education_partners/jic.png";
import Alias from "@assets/community_partners/alias.svg";
import AWSUGJaipur from "@assets/community_partners/awsugjpr.svg";
import CloudNativeHoogly from "@assets/community_partners/cn_hooghly.svg";
import CloudNativeCommunityGroupsJaipur from "@assets/community_partners/cncg_jpr.svg";
import DebianIndia from "@assets/community_partners/debian_india.svg";
import GDSCAKGEC from "@assets/community_partners/gdsc_akgec.svg";
import GDCSJECRC from "@assets/community_partners/gdsc_jecrc.svg";
import HugJaipur from "@assets/community_partners/hug_jaipur.svg";
import OCD from "@assets/community_partners/ocd.svg";
import PyDelhi from "@assets/community_partners/pydelhi.svg";
import SFLC from "@assets/community_partners/sflc.svg";
import UbuntuDDE from "@assets/community_partners/ubuntu_dde.svg";

export const sponsors = [
    {
        sponsorLevelName: "Diamond",
        sizeOnLargeScreen: 6 as ColSize,
        sizeOnMediumScreen: 6 as ColSize,
        sizeOnSmallScreen: 6 as ColSize,
        showPopup: true,
        list: [
            {
                name: "Canonical",
                logoUrl: CanonicalUbuntuLogo.src,
                url: "https://www.ubuntu.com/",
                description: "Canonical is the publisher of Ubuntu, the OS for most public cloud workloads as well as the emerging categories of smart gateways, self-driving cars, and advanced robots. Canonical provides enterprise security, support, and services to commercial users of Ubuntu."
            }
        ]
    },
    {
        sponsorLevelName: "Gold",
        sizeOnLargeScreen: 4 as ColSize,
        sizeOnMediumScreen: 4 as ColSize,
        sizeOnSmallScreen: 3 as ColSize,
        showPopup: true,
        list: [
            // {
            //     name: "Become a sponsor!",
            //     logoUrl: logoPlaceHolder.src,
            //     url: "/sponsors/become-a-sponsor",
            //     description: "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!"
            // },
        ]
    },
    {
        sponsorLevelName: "Silver",
        sizeOnLargeScreen: 3 as ColSize,
        sizeOnMediumScreen: 3 as ColSize,
        sizeOnSmallScreen: 2 as ColSize,
        showPopup: true,
        list: [
            // {
            //     name: "Become a sponsor!",
            //     logoUrl: logoPlaceHolder.src,
            //     url: "/sponsors/become-a-sponsor",
            //     description: "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!"
            // },
        ]
    },
    {
        sponsorLevelName: "Bronze",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
        showPopup: true,
        list: [
            // {
            //     name: "Become a sponsor!",
            //     logoUrl: logoPlaceHolder.src,
            //     url: "/sponsors/become-a-sponsor",
            //     description: "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!"
            // },
        ]
    },
    {
        sponsorLevelName: "Supporter",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
        showPopup: true,
        list: [
            {
                name: "ONLYOFFICE",
                logoUrl: OnlyOffice.src,
                url: "https://www.onlyoffice.com/",
                description: "ONLYOFFICE by Ascensio System SIA offers a powerful office suite that comprises online editors for text documents, spreadsheets and presentations highly compatible with Microsoft Office and OpenDocument file formats."
            },
            {
                name: "FOSS United",
                logoUrl: FossUnited.src,
                url: "https://fossunited.org/",
                description: "FOSS United is a non-profit foundation that aims at promoting and strengthening the Free and Open Source Software (FOSS) ecosystem in India."
            }
        ]
    },
    {
        sponsorLevelName: "Education Partners",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
        showPopup: true,
        list: [
            {
                name: "JECRC University",
                logoUrl: JECRC.src,
                url: "https://jecrcuniversity.edu.in/",
                description: "JECRC University is an Indian private university located in Jaipur, Rajasthan. It is established by the Act No. 15 of 2012 of Rajasthan Legislative Assembly. It offers several undergraduate and postgraduate-level courses and PhD programmes in science and technology, arts, commerce, health and medicine, law, etc."
            },
            {
                name: "JECRC Incubation Center",
                logoUrl: JIC.src,
                url: "https://jecrcincubation.com/",
                description: "JIC assists start-ups with converting their early-stage companies into highly scalable, commercially viable businesses. JIC envisions fostering an entrepreneur-friendly culture around academics & research."
            }
        ]
    },
    {
        sponsorLevelName: "Community Partners",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
        showPopup: false,
        list: [
            {
                name: "Alias",
                logoUrl: Alias.src,
                url: "#",
                description: ""
            },
            {
                name: "AWS User Group Jaipur",
                logoUrl: AWSUGJaipur.src,
                url: "#",
                description: ""
            },
            {
                name: "Cloud Native Hoogly",
                logoUrl: CloudNativeHoogly.src,
                url: "#",
                description: ""
            },
            {
                name: "Cloud Native Community Groups Jaipur",
                logoUrl: CloudNativeCommunityGroupsJaipur.src,
                url: "#",
                description: ""
            },
            {
                name: "Debian India",
                logoUrl: DebianIndia.src,
                url: "#",
                description: ""
            },
            {
                name: "GDSC AKGEC",
                logoUrl: GDSCAKGEC.src,
                url: "#",
                description: ""
            },
            {
                name: "GDSC JECRC",
                logoUrl: GDCSJECRC.src,
                url: "#",
                description: ""
            },
            {
                name: "Hug Jaipur",
                logoUrl: HugJaipur.src,
                url: "#",
                description: ""
            },
            {
                name: "Open Source Community Development",
                logoUrl: OCD.src,
                url: "#",
                description: ""
            },
            {
                name: "Py Delhi",
                logoUrl: PyDelhi.src,
                url: "#",
                description: ""
            },
            {
                name: "Software Freedom Law Center",
                logoUrl: SFLC.src,
                url: "#",
                description: ""
            },
            {
                name: "Ubuntu DDE",
                logoUrl: UbuntuDDE.src,
                url: "#",
                description: ""
            }
        ]
    }
]