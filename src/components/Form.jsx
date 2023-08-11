import React from "react";

const Form = () => {
  return (
    <div className=" mx-[30%] mb-10 rounded-b-lg bg-secondary-content p-4">
      <form class="mx-auto flex w-full max-w-lg flex-col bg-secondary-content p-4 sm:p-20">
        <h1 class="mb-6 text-center text-3xl font-semibold">New Expense</h1>
        <div class="form-group">
          <div class="form-field">
            <label class="form-label">Expense Name</label>

            <input
              placeholder="Type here"
              type="email"
              class="input max-w-full"
            />
          </div>
          <div class="form-field">
            <label class="form-label">
              <span>Amount</span>
            </label>
            <div class="form-control">
              <input
                placeholder="Type here"
                type="number"
                class="input max-w-full"
              />
            </div>
          </div>
          <div class="form-field pt-5">
            <div class="form-control justify-between">
              <button type="button" class="btn btn-outline-primary w-full">
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
