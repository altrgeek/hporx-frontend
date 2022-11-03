import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineMail } from "react-icons/ai";

function Cart() {
  return (
    <>
      <div className="mt-10 col-10 font-medium text-lg text-[#24D29F] flex bscontainer-fluid truncate">
        <div className="col-2">
          <h1 className="h-[89px]">Product</h1>
          <section className="flex">
          <img className="w-[46px] h-[50px] mt-2 mr-1" src="" alt="" />
          <p className="font-sans w-[208px] h-[60px] text-[#313131] whitespace-normal py-1 pr-2">Hemp & argan nourishing facial oil</p>
          </section>
          <button className="h-[65px] w-[217px] px-7 py-2 mt-5 text-lg text-[#313131] bg-[#73E6C5] border-0 font-medium">
            Update Cart
          </button>
        </div>
        <div className="col-1">
          <h1 className="h-[89px]">Price</h1>
          <p className="font-sans w-[82px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">$799.00</p>
        </div>
        <div className="col-1">
          <h1 className="h-[89px]">Quantity</h1>
          <p className="font-sans w-[13px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">2</p>
        </div>
        <div className="col-2">
          <h1 className="h-[89px]">Subtotal</h1>
          <p className="font-sans w-[100px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">$1,598.00</p>
        </div>
        <div className="text-xl col-4">
          <h1 className="h-[89px]">Cart Totals</h1>
          <section className="flex">
          <p className="font-sans w-[13px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">Subtotal</p>
          <p className="font-sans w-[13px] h-[30px] text-[#313131] whitespace-normal py-1 pr-2">$1,598.00</p>
          </section>
          <button className="h-[65px] w-[417px] items-start text-center justify-center mx-auto px-4 py-2 mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <button className="h-[65px] w-[217px] flex items-center justify-center mx-auto px-7 py-2 mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
        Apply Coupon
      </button>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="flex items-center justify-center text-base leading-relaxed text-center">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <button className="w-[382px] h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
                <p className="flex items-center justify-center text-base leading-relaxed text-center">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <button className="w-[382px] h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 text-green-500 bg-green-100 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="flex items-center justify-center mx-auto mb-2 text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h2>
                <p className="flex items-center justify-center text-base leading-relaxed text-center">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
                <button className="w-[382px] h-[67px] flex items-center justify-center px-10 py-2 mx-auto mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 mx-auto">
          <div className="mx-auto">
            <div className="relative flex flex-wrap w-full px-10 py-32 mb-4 bg-gray-100">
              <img
                alt="gallery"
                className="absolute inset-0 block object-cover object-center opacity-25 w-[1920px] h-[456px]"
                src="https://dummyimage.com/1920x456"
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font w-1403 h-71">
                  Discount up to 35% for first purchase only this month.
                </h2>
                <p className="leading-relaxed w-1391 h-66">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est
                </p>
                <button className="h-[94px] w-[382px] items-start text-center justify-center mx-auto px-4 py-2 mt-5 text-lg text-[#313131] bg-[#24D29F] border-0 font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="font-sans font-bold w-[485px] h-[76px] title-font sm:text-4xl text-3xl mb-4 text-[#313131]">
              For More Update
              <br className="inline-block" />
              Join Our{" "}
              <h1 className="inline-block text-[#24D29F]">News Letter</h1>
            </h1>
            <p className="mt-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            {/* <div className="flex justify-center">
              <input
                type="email"
                id="email-signup"
                name="email-signup"
                className="w-[406px] h-[81px] text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
              />
              <button type="submit" className="w-[195px] h-[81px] bg-[#24D29F]">
                Sign Up
              </button>
            </div> */}
            <form className="w-full max-w-sm">
              <div className="flex items-center py-2">
                <input
                  className="appearance-none bg-[#E0DFDF] border-none text-gray-700 leading-tight focus:outline-none w-[406px] h-[81px] px-4"
                  type="text"
                  placeholder="Email"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 bg-[#24D29F] text-sm text-white w-[195px] h-[81px]"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div>
            <img className="" alt="hero" src="https://dummyimage.com/599x481" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
