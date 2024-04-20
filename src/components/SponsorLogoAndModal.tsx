import { Button, Modal } from "@canonical/react-components";
import { useState } from "react";

type SponsorLogoAndModalProps = {
    name: string,
    level: string,
    logoImageSrc: string,
    description: string,
    url: string,
    showPopup: Boolean
}
export default function SponsorLogoAndModal(props: SponsorLogoAndModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeHandler = () => setModalOpen(false);
    return (
        <>
            <img src={props.logoImageSrc} alt={props.name} 
                onClick={() => {
                    if(props.showPopup){ setModalOpen(true); }
                    }} />
            {modalOpen && props.showPopup ? <Modal close={closeHandler} title="About the sponsor" buttonRow={<>
                <Button appearance="positive" element="a" href={props.url}>
                    Visit website
                </Button>
            </>}>
                <img src={props.logoImageSrc} alt={props.name} />
                <h1>{props.name}</h1>
                <b>{props.level}</b>
                <p>
                    {props.description}
                </p>
            </Modal> : null}
        </>
    )
}