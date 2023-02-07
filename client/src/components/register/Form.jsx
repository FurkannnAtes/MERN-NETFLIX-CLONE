import { Formik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";

//TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const params = useParams();

  const navigate = useNavigate();
  const lang = useSelector((state) => state.lang.lang);

  const registerAPI = process.env.REACT_APP_REGISTER;

  //Focus Animation
  const focusPassword = (e) => {
    passwordRef.current.classList.add("!top-3");
    passwordRef.current.classList.add("!scale-75");
    passwordRef.current.classList.add("!left-0");
  };

  //Blur Animation
  const blurPassword = (e) => {
    if (e.target.value === "") {
      passwordRef.current.classList.remove("!top-3");
      passwordRef.current.classList.remove("!left-0");
      passwordRef.current.classList.remove("!scale-75");
    }
  };
  const registerToast = (message) => toast.error(message);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email(
            `${
              lang === "en"
                ? "E-mail cannot be left blank"
                : "E-Posta boş bırakılamaz"
            }`
          ),
          password: Yup.string()
            .min(
              8,
              `${
                lang === "en"
                  ? "Password cannot be shorter than 8 length"
                  : "Şifre 8 karakterden uzun olmalıdır."
              }`
            )
            .required(
              `${
                lang === "en"
                  ? "Password cannot be left blank"
                  : "Şifre boş bırakılamaz."
              }`
            ),
        })}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            setLoading(true);
            await axios.post(`${registerAPI}`, {
              password: values.password,
              email: params.email,
            });
            setSubmitting();
            await setLoading(false);
            navigate("/login");
          } catch (error) {
            registerToast(error.response.data);
            setSubmitting();
            setLoading(false);
          }
        }}
      >
        {({
          values,
          handleSubmit,
          touched,
          handleChange,
          errors,
          isSubmitting,
        }) => (
          <form
            className="text-white bg-black  my-auto w-[450px] mx-auto p-16 rounded-md flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl mb-5">
              {lang === "en" ? "Sign up" : "Kayıt ol"}
            </h1>

            <div className="relative">
              <label
                className="text-slate-300 z-30 absolute top-3 !left-[2px] scale-75 -translate-y-1/2 duration-300"
                htmlFor="email"
                ref={emailRef}
              >
                {lang === "en" ? "E-mail" : "E-posta"}
              </label>
              <input
                type="email"
                readOnly
                value={params.email}
                className={` h-[60px] bg-zinc-600 focus:bg-zinc-500 duration-300 outline-none text-white p-2 w-full rounded-sm`}
              />
            </div>

            <div className="relative">
              <label
                className="text-slate-300 z-30 absolute top-1/2 left-2 -translate-y-1/2 duration-300"
                htmlFor="password"
                ref={passwordRef}
              >
                {lang === "en" ? "Password" : "Şifre"}
              </label>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onFocus={(e) => focusPassword(e)}
                onBlur={(e) => blurPassword(e)}
                className={`${
                  errors.password && touched.password
                    ? "border-b-2 border-orange-500"
                    : ""
                } h-[60px] bg-zinc-600 focus:bg-zinc-500 duration-300 outline-none text-white p-2 w-full rounded-sm`}
              />
            </div>
            {errors.password && touched.password && (
              <div className="text-orange-500 text-sm">{errors.password}</div>
            )}

            <button
              className="w-full bg-red-600 py-2 rounded-sm"
              disabled={isSubmitting}
              type="submit"
            >
              <div>
                {loading === true ? (
                  <BiLoaderAlt className="animate-spin mx-auto text-black text-xl" />
                ) : (
                  <div> {lang === "en" ? "Sign up" : "Kayıt ol"}</div>
                )}
              </div>
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
