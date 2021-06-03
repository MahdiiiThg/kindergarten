// import axios from "axios"
const axios = require("axios");

let { toast } = require('react-toastify');
require('react-toastify/dist/ReactToastify.css');
/* --------------------- axios instance ----------------------- */

// cehck user is loged in
let user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc3ZWU5MjRhOTc3NTIxNDA0YTlhZjEiLCJwaG9uZV9udW1iZXIiOiIwOTEyNzE3MDEyNiIsIm5hbWUiOiLZhtin2LXYsSDYqNiu2LTbjCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjIyNzA2ODgxLCJleHAiOjE2MjI4ODY4ODF9._r9M08DCSzgFZh_SdyxQx4-LadFvmid5RgJOQnA_sq0"

const instance = axios.create({
  baseURL: "http://danamana-back.herokuapp.com/api",
  // timeout: 5000,
  headers: {
    'Content-Type': "application/json",
    "Authorization": user_token ? `Bearer ${user_token}` : ''
  }
})


/* --------------------- axios instance ----------------------- */

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
})


let error_display = (data, statusText) => {
  
  // toast notification
  if(!data) return
  console.log('error_display data', data);
  console.log('error_display statusText', statusText);

  let errorMessage = () => toast.error(`خطایی رخ داده است: ${statusText[0] || data?.message?.[0] || data?.message?.birthday?.msg}`);
  errorMessage()
}


/* --------------------- axios instance errors ----------------------- */
function errors_handler(error) {

  console.log("error", error);
  if(!error && !error.response && !error.response.data) {
    return
  }
  
  let current_error = error?.response?.data
  let current_error_status = error?.response?.status
  let current_error_success = current_error?.success
  let current_error_message = current_error?.message


  switch(current_error_status) {

    case 400:
      //bad request
      error_display(current_error, current_error_message)
      break
    case 401:
      //unauthenticate
      error_display(current_error, current_error_message)
      break
    case 410:
      //unauthenticate
      error_display(current_error, current_error_message)
      break
    case 422:
      //error validations
      error_display(current_error, current_error_message)
      break
    case 500:
      //server error
      error_display(current_error, current_error_message)
      break

  }
}

/* --------------------- axios instance ----------------------- */

function http() { return {
    // AUTH
    login: (callback, data) => {
      return instance.post("auth/login/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    register: (callback, data) => {
      return instance.post("auth/register/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    registerVerify: (callback, data) => {
      return instance.post("auth/register-verify/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    passwordChange: (callback, data) => {
      return instance.post("auth/password-change/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    passwordChangeVerify: (callback, data) => {
      return instance.post("auth/password-change-verify/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },

    // USER
    logout: (callback, data) => {
      return instance.post("user/logout/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getCurrentUser: (callback) => {
      return instance.post("user/get-current-user/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    updateUserProfile: (callback, data) => {
      return instance.post("user/update-user-profile/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    submitMessage: (callback, data) => {
      return instance.post("user/submit-contact-message/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    userExchange: (callback) => {
      return instance.post("user/get-all-user-exchange/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    newExchange: (callback, data) => {
      return instance.post("user/add-new-exchange/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    updateExchange: (callback, data) => {
      return instance.post("user/update-single-exchange/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    deleteExchange: (callback, data) => {
      return instance.post("user/delete-single-exchange/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getUserOrders: (callback) => {
      return instance.post("user/get-all-user-order/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    addNewOrder: (callback, data) => {
      return instance.post("user/add-new-order/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    updateSingleOrder: (callback, data) => {
      return instance.post("user/update-single-order/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    deleteSingleOrder: (callback, data) => {
      return instance.post("user/delete-single-order/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getUserResell: (callback) => {
      return instance.post("user/get-all-user-resell/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    addNewResell: (callback, data) => {
      return instance.post("user/add-new-resell/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    updateSingleResell: (callback, data) => {
      return instance.post("user/update-single-resell/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    deleteSingleResell: (callback, data) => {
      return instance.post("user/delete-single-resell/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getAllUserConsultant: (callback) => {
      return instance.post("user/get-all-user-consultant/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    addNewConsultant: (callback, data) => {
      return instance.post("user/add-new-consultant/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    updateSingleConsultant: (callback, data) => {
      return instance.post("user/update-single-consultant/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    deleteSingleConsultant: (callback, data) => {
      return instance.post("user/delete-single-consultant/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getUserIntroduction: (callback) => {
      return instance.post("user/get-all-user-introduction/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getSingleIntroduction: (callback, data) => {
      return instance.post("user/get-single-introduction/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getSingleExchange: (callback, data) => {
      return instance.post("user/get-single-user-exchange/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getSingleConsultant: (callback) => {
      return instance.post("user/get-single-consultant/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getsingleorder: (callback) => {
      return instance.post("user/get-single-user-order/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getsingleresell: (callback) => {
      return instance.post("user/get-single-user-resell/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },


    // PAGE
    getAllMainPage: (callback) => {
      return instance.post("user/get-all-main-page/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getSingleMainPage: (callback, data) => {
      return instance.post("user/get-single-main-page/", data)
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getAllExchange: (callback) => {
      return instance.post("user/get-all-exchange/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getAllOrder: (callback) => {
      return instance.post("user/get-all-order/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getAllResell: (callback) => {
      return instance.post("user/get-all-resell/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    getAllIntroduction: (callback) => {
      return instance.post("user/get-all-introduction/")
      .then(callback)
      .catch(err => {
        errors_handler(err)
      })
    },
    }
  }

  module.exports.http = http