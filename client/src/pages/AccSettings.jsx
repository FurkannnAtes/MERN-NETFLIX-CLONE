import { Formik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../store/User";

//icons
import { BiLoaderAlt } from "react-icons/bi";
//TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccSettings = () => {
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const newPasswordRef = useRef(null);

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const user = useSelector((state) => state.user.user);
  const accSettingsAPI = process.env.REACT_APP_ACC_EDIT;

  //Focus Animation
  const focusPassword = (e) => {
    passwordRef.current.classList.add("!top-3");
    passwordRef.current.classList.add("!scale-75");
    passwordRef.current.classList.add("!left-0");
  };
  const focusEmail = (e) => {
    emailRef.current.classList.add("!top-3");
    emailRef.current.classList.add("!scale-75");
    emailRef.current.classList.add("!left-0");
  };
  const focusNewPassword = (e) => {
    newPasswordRef.current.classList.add("!top-3");
    newPasswordRef.current.classList.add("!scale-75");
    newPasswordRef.current.classList.add("!left-0");
  };
  //Blur Animation
  const blurPassword = (e) => {
    if (e.target.value === "") {
      passwordRef.current.classList.remove("!top-3");
      passwordRef.current.classList.remove("!left-0");
      passwordRef.current.classList.remove("!scale-75");
    }
  };
  const blurEmail = (e) => {
    if (e.target.value === "") {
      emailRef.current.classList.remove("!top-3");
      emailRef.current.classList.remove("!left-0");
      emailRef.current.classList.remove("!scale-75");
    }
  };
  const blurNewPassword = (e) => {
    if (e.target.value === "") {
      newPasswordRef.current.classList.remove("!top-3");
      newPasswordRef.current.classList.remove("!left-0");
      newPasswordRef.current.classList.remove("!scale-75");
    }
  };

  //Reset Form
  const resetFormAnimation = () => {
    passwordRef.current.classList.remove("!top-3");
    passwordRef.current.classList.remove("!left-0");
    passwordRef.current.classList.remove("!scale-75");
    emailRef.current.classList.remove("!top-3");
    emailRef.current.classList.remove("!left-0");
    emailRef.current.classList.remove("!scale-75");
    newPasswordRef.current.classList.remove("!top-3");
    newPasswordRef.current.classList.remove("!left-0");
    newPasswordRef.current.classList.remove("!scale-75");
  };

  const loginToast = (message) => toast.error(message);
  const accessToast = (message) => toast.success(message);
  return (
    <div className="min-h-screen flex items-center justify-center">
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
          newPassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(
              `${
                lang === "en"
                  ? "E-mail cannot be left blank"
                  : "E-Posta boş bırakılamaz"
              }`
            )
            .required(
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
          newPassword: Yup.string()
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
            const res = await axios.put(`${accSettingsAPI}${user._id}`, {
              password: values.password,
              email: values.email,
              newPassword: values.newPassword,
            });
            dispatch(login(res.data));
            setSubmitting();
            await setLoading(false);
            accessToast(
              lang === "en"
                ? "Account information updated"
                : "Hesap bilgileri güncellendi"
            );
            resetForm();
            resetFormAnimation();
          } catch (error) {
            console.log(error);
            loginToast(error.response.data);
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
            <h1 className="text-3xl mb-3">
              {lang === "en" ? "Account Settings" : "Hesap Ayarları"}
            </h1>

            <div className="relative">
              <label
                className="text-slate-300 z-30 absolute top-1/2 left-2 -translate-y-1/2 duration-300"
                htmlFor="email"
                ref={emailRef}
              >
                {lang === "en" ? "E-mail" : "E-posta"}
              </label>
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onFocus={(e) => focusEmail(e)}
                onBlur={(e) => blurEmail(e)}
                className={`${
                  errors.email && touched.email
                    ? "border-b-2 border-orange-500"
                    : ""
                } h-[60px] bg-zinc-600 focus:bg-zinc-500 duration-300 outline-none text-white p-2 w-full rounded-sm`}
              />
            </div>
            {errors.email && touched.email && (
              <div className="text-orange-500 text-sm">{errors.email}</div>
            )}
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
            <div className="relative">
              <label
                className="text-slate-300 z-30 absolute top-1/2 left-2 -translate-y-1/2 duration-300"
                htmlFor="newPassword"
                ref={newPasswordRef}
              >
                {lang === "en" ? "New Password" : "Yeni Şifre"}
              </label>
              <input
                type="password"
                id="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onFocus={(e) => focusNewPassword(e)}
                onBlur={(e) => blurNewPassword(e)}
                className={`${
                  errors.newPassword && touched.newPassword
                    ? "border-b-2 border-orange-500"
                    : ""
                } h-[60px] bg-zinc-600 focus:bg-zinc-500 duration-300 outline-none text-white p-2 w-full rounded-sm`}
              />
            </div>
            {errors.newPassword && touched.newPassword && (
              <div className="text-orange-500 text-sm">
                {errors.newPassword}
              </div>
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
                  <div> {lang === "en" ? "Sing In" : "Oturum Aç"}</div>
                )}
              </div>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AccSettings;
