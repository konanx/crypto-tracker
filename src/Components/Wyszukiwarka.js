import React, { useState, useEffect, useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

function Wyszukiwarka() {
  const [wybraneKrypto, setWybraneKrypto] = useState(null);
  const [socket] = useContext(SocketContext);
  useEffect(() => {
    if (socket) {
      console.log(socket);
    }
  }, [socket]);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#selectCryptoModal"
        >
          <small>Kliknij aby wybrać kryptowalutę!</small>
        </button>
      </div>
      <div
        class="modal fade"
        id="selectCryptoModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="selectCryptoLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-l">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="selectCryptoLabel">
                Wpisz nazwę kryptowaluty...
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="p-2">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="w-75">
                    <input className="form-control text-center" type="text" />
                  </div>
                </div>
                <div
                  className="mt-3 overflow-auto"
                  style={{ height: "40vh" }}
                ></div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wyszukiwarka;
