import type { ColSize } from "@canonical/react-components"
import logoPlaceHolder from "@assets/logo_placeholder.svg";
import CanonicalUbuntuLogo from "@assets/sponsors/canonical_ubuntu.svg";
import OnlyOffice from "@assets/sponsors/onlyoffice.svg";
import FossUnited from "@assets/sponsors/fossunited.svg";

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
        sponsorLevelName: "Community Partners",
        sizeOnLargeScreen: 2 as ColSize,
        sizeOnMediumScreen: 2 as ColSize,
        sizeOnSmallScreen: 1 as ColSize,
        showPopup: false,
        list: [
            // {
            //     name: "Community partner",
            //     logoUrl: logoPlaceHolder.src,
            //     url: "#",
            //     description: "#"
            // }
        ]
    }
]