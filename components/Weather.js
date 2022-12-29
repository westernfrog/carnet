export default function Weather() {
  return (
    <>
      <div className="col-md-8 mb-4">
        <div class="card border-dark shadow">
          <div class="card-header shadow-sm">
            <div className="row">
              <div className="col-9">
                <p className="m-0 text-dm">Weather</p>
              </div>

              <div className="col-3 ms-auto text-end">
                <span>
                  <button className="btn btn-outline-danger rounded-pill py-0">
                    📍
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title text-dm mb-0 pb-4 text-center fw-bold">
              <div>Ranchi, India</div>
            </h5>

            <div class="row text-center">
              <div className="col-md-4">
                <div class="card border-0">
                  <div class="card-header bg-white text-mono fw-bold">
                    13&deg; C
                  </div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">☁️</h2>
                  </div>
                  <div class="card-footer text-mono fw-bold bg-transparent py-2">
                    Today, Thursday
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div class="card border-0">
                  <div class="card-header bg-white text-mono fw-bold">
                    11&deg; C
                  </div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">⛅</h2>
                  </div>
                  <div class="card-footer text-mono fw-bold bg-transparent  py-2">
                    Tomorrow
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div class="card border-0">
                  <div class="card-header bg-white bg-white text-mono fw-bold">
                    17&deg; C
                  </div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">⛅</h2>
                  </div>
                  <div class="card-footer text-mono fw-bold bg-transparent py-2">
                    Day after tomorrow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
