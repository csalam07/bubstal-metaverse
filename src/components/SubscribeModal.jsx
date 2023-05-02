function SubscribeModal() {
  return (
    <>
      <input type="checkbox" id="subscribe" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="doe@gmail.com"
                className="input input-bordered w-full"
              />
              <label htmlFor="subscribe" className="btn">
                Subscribe
              </label>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeModal;
