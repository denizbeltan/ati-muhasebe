import React, { useEffect, useRef } from 'react'

const Mobil: React.FC = () => {

    return (
        <div className="content flex-column-fluid" id="kt_content">
                <a href="#" className="card hover-elevate-up shadow-sm parent-hover">
                    <div className="card-body d-flex align-items">
                        <span className="svg-icon fs-1">
						-
                        </span>
                        <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
                            Mobil Uygulamaya Giriş Yap
                        </span>
                    </div>
                </a>
        </div >
    )
}

export { Mobil }