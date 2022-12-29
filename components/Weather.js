export default function Weather() {
  return (
    <>
      <div className="col-md-8">
        <div class="card border-dark shadow-sm">
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
            <h6 class="card-title text-slab mb-0 pb-1">
              <div>Viewing current weather for 📍 Ranchi, India.</div>
            </h6>
            <h6 class="card-title pb-2 text-dm">
              Today at 29 December, Tuesday
            </h6>
            <div class="row text-center">
              <div className="col-md-4">
                <div class="card border-0">
                  <div class="card-header bg-white text-slab">13&deg; C</div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">☁️</h2>
                  </div>
                  <div class="card-footer text-dm bg-transparent pb-0">
                    Today
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div class="card border-0">
                  <div class="card-header bg-white text-slab">11&deg; C</div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">⛅</h2>
                  </div>
                  <div class="card-footer text-dm bg-transparent pb-0">
                    Tomorrow
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div class="card border-0">
                  <div class="card-header bg-white bg-white text-slab">
                    17&deg; C
                  </div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">⛅</h2>
                  </div>
                  <div class="card-footer text-dm bg-transparent pb-0">
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
