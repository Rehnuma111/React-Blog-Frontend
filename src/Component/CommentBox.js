import React from "react";

const CommentBox = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
      <form className="bg-white p-4 rounded-lg shadow mt-4">
        <div>
          {/* <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg  mb-2"
                >
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border py-2 px-4 w-full"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg  mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border py-2 px-4 w-full"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div> */}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg  mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border py-2 px-4 w-full h-32"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-800 text-white py-2 px-12 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Add comment form here */}
    </div>
  );
};

export default CommentBox;
