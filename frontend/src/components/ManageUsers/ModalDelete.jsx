import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const ModalDelete = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} centered>
                <Modal.Header closeButton/>
                <Modal.Body>
                    Are you sure you want to delete this user: {props.dataModal.email} ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.confirmDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete;
