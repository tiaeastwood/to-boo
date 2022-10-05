import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({ toggleModal, show, children, modalTitle }) => {
	return (
		<Modal show={show} onHide={toggleModal}>
			<Modal.Header closeButton>
				<Modal.Title>{modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<Button
					variant="primary"
					onClick={toggleModal}
					size="lg"
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalComponent;
