export default function Weather() {
  return (
    <>
      <div className="col-md-8 ">
        <div class="card border-dark">
          <div class="card-header">
            <div className="row">
              <div className="col-4">
                <p className="m-0">Weather</p>
              </div>
              <div className="col-7 text-end d-none d-lg-block pe-0">
                <p className="m-0">
                  Hold the <mark>cloud</mark> to show the weather of your area!
                </p>
              </div>
              <div className="col-1 text-end ms-auto pe-4 ps-1">
                <button className="btn btn-outline-warning rounded-pill p-0">
                  ⛅
                </button>
              </div>
            </div>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title pb-2">☀️ How&apos;s it look out there?</h5>
            <div class="row text-center">
              <div className="col-md-4">
                <div class="card border-0">
                  <div class="card-header bg-white">13&deg; C</div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">☁️</h2>
                  </div>
                  <div class="card-footer bg-transparent pb-0">Today</div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div class="card border-0">
                  <div class="card-header bg-white">11&deg; C</div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">⛅</h2>
                  </div>
                  <div class="card-footer bg-transparent pb-0">Tomorrow</div>
                </div>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <div class="card border-0">
                  <div class="card-header bg-white bg-white">17&deg; C</div>
                  <div class="card-body text-dark">
                    <h2 class="card-title my-0">⛅</h2>
                  </div>
                  <div class="card-footer bg-transparent pb-0">
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
