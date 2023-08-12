import React from "react";

const Form = () => {
  return (
    <div className=" mx-[30%] mb-10 rounded-b-lg bg-secondary-content p-4">
      <form className="mx-auto flex w-full max-w-lg flex-col bg-secondary-content p-4 sm:p-20">
        <h1 className="mb-6 text-center text-3xl font-semibold">New Expense</h1>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Expense Name</label>

            <input
              placeholder="Type here"
              type="email"
              className="input max-w-full"
            />
          </div>
          <div className="form-field">
            <label className="form-label">
              <span>Amount</span>
            </label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="number"
                className="input max-w-full"
              />
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="button" className="btn btn-outline-primary w-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
