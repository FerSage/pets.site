import React from 'react';

const ForgotLoginModal = () => {
    return (
        <div className="modal fade" id="forgotLoginModal" tabIndex="-1" aria-labelledby="forgotLoginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="forgotLoginModalLabel">Восстановление логина</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form noValidate>
                            <div className="mb-3">
                                <label htmlFor="resetLoginEmailInput" className="form-label">Введите ваш email для восстановления логина</label>
                                <input type="email" className="form-control" id="resetLoginEmailInput" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotLoginModal;
