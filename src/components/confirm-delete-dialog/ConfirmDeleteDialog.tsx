import Modal from '../modal/modal.component'
import { ConfirmDeleteDialogProps } from '../../models';

const ConfirmDeleteDialog = ({isOpen, onConfirm, onClose }: ConfirmDeleteDialogProps) => {
    const closeDialog = () => {
        onClose();
    }

    const confirmHandler = () => {
        onConfirm();
    }

    return <Modal isOpen={isOpen} onClose={closeDialog}>
        <div className='flex flex-col gap-3'>
            <p>Are you sure you want to delete this contact?</p>
            <div className="flex gap-2 justify-end">
                <button className="text-red-500 shadow py-2 px-4 rounded-lg hover:bg-gray-200" onClick={confirmHandler}>Yes</button>
                <button className="text-blue-500 shadow py-2 px-4 rounded-lg hover:bg-gray-200" onClick={closeDialog}>No</button>
            </div>
        </div>
    </Modal>
}

export default ConfirmDeleteDialog