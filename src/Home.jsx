import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar bg-white">
      
      </div>

      {location.pathname !== "/results" ? (
        <section className="grid lg:grid-cols-12 bg-white  lg:mx-auto px-6 py-7 gap-6  grid-cols-1  shadow-2xl border-2    ">
          <div className="lg:col-span-4 ">
            <div className="px-4 pt-4 h-screen rounded-sm bg-[url(https://img.freepik.com/free-vector/blue-white-low-poly-triangle-shapes-background_1035-19007.jpg?w=900&t=st=1692283509~exp=1692284109~hmac=d8565dd69ad54931332bae442fe795a179b9056618a997f71c235a1886966432)] bg-center bg-no-repeat bg-container">
              <div className="text-center">
                <Link to="/">
                  <button
                    className={`text-xl  shadow-lg  mt-5 btn bg-white  ${
                      location.pathname === "/"
                        ? "text-blue-300 border-sky-400"
                        : "text-gray-500"
                    }`}
                  >
                    Step 1
                  </button>
                </Link>
              </div>

              <div className="text-center">
                <Link to="/2">
                  <button
                    className={`text-xl shadow-lg     mt-5 btn bg-sky-500 ${
                      location.pathname === "/2"
                        ? "text-blue-700 "
                        : "text-white"
                    }`}
                  >
                    Step 2
                  </button>
                </Link>
              </div>
            </div>
            {location.pathname !== "/" && (
              <div className="mt-6">
                <img
                  src="https://img.freepik.com/free-vector/new-message-concept-landing-page_23-2148317868.jpg?w=900&t=st=1692291133~exp=1692291733~hmac=5a83d44f9fee8c68774e0666329ad7147d1ba3016581bfa0ba5b3ad02f010d16 "
                  className="img-fluid  "
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            <div data-aos="fade-left" className="min-h-screen ">
              <Outlet />
            </div>
          </div>
        </section>
      ) : (
        <div className="min-h-screen">
          <Outlet />
        </div>
      )}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
