import React from 'react';

const ForgotPasswordModal = () => {
    return (
        <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="forgotPasswordModalLabel">Восстановление пароля</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form noValidate>
                            <div className="mb-3">
                                <label htmlFor="resetPasswordEmailInput" className="form-label">Введите ваш email для восстановления пароля</label>
                                <input type="email" className="form-control" id="resetPasswordEmailInput" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;
