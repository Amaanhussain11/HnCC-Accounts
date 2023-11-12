import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Visual from "./sub-components/Chart";
import { admin, reciept, payments, months } from "../credentials/data";

const AdminDashBoard = () => {
  const [coordinate, setCoordinate] = useState({});
  let [sum, setSum] = useState(0);
  let [expense, setExpense] = useState(0);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setCoordinate({ x: ref.current.offsetLeft, y: ref.current.offsetTop });
    console.log("width", width);
    let s = 0;
    for (let x of reciept) {
      s += x.amnt;
    }
    setSum(s);
    let e = 0;
    for (let x of payments) {
      e += x.amnt;
    }
    setExpense(e);
    console.log("first", sum);
    console.table(coordinate);
  }, []);
  return (
    <>
      <div className="dashboard-container flex flex-row relative">
        <div className=" w-[15%] h-screen border-r-[1px] border-r-[#00000015] sticky top-0 left-0">
          <div className="btn-container flex flex-col pt-10 pl-4">
            <div className="title text-sm py-8 px-3">General</div>
            <div className="hover:bg-[#EBEBEB] cursor-pointer w-full py-4 pl-8 rounded-lg flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2.75314 9.75314C2.83519 9.67109 2.94647 9.625 3.0625 9.625H10.9375C11.0535 9.625 11.1648 9.67109 11.2469 9.75314C11.3289 9.83519 11.375 9.94647 11.375 10.0625V10.9375C11.375 11.0535 11.3289 11.1648 11.2469 11.2469C11.1648 11.3289 11.0535 11.375 10.9375 11.375H3.0625C2.94647 11.375 2.83519 11.3289 2.75314 11.2469C2.67109 11.1648 2.625 11.0535 2.625 10.9375V10.0625C2.625 9.94647 2.67109 9.83519 2.75314 9.75314Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.28527 1.02959C1.53684 0.926502 1.80626 0.873979 2.07812 0.875015H11.9219C12.1937 0.873979 12.4632 0.926502 12.7147 1.02959C12.9663 1.13267 13.1951 1.28429 13.3881 1.4758C13.581 1.66731 13.7344 1.89496 13.8394 2.14574C13.9444 2.39652 13.999 2.66552 14 2.93739V11.0626C13.999 11.3345 13.9444 11.6035 13.8394 11.8543C13.7344 12.1051 13.581 12.3327 13.3881 12.5242C13.1951 12.7157 12.9663 12.8674 12.7147 12.9704C12.4632 13.0735 12.1937 13.1261 11.9219 13.125H2.07812C1.80626 13.1261 1.53684 13.0735 1.28527 12.9704C1.0337 12.8674 0.804898 12.7157 0.611926 12.5242C0.418954 12.3327 0.265593 12.1051 0.160598 11.8543C0.0556035 11.6035 0.00103219 11.3345 0 11.0626V2.93739C0.00103219 2.66552 0.0556035 2.39652 0.160598 2.14574C0.265593 1.89496 0.418954 1.66731 0.611926 1.4758C0.804898 1.28429 1.0337 1.13267 1.28527 1.02959ZM2.07812 1.75002C1.40963 1.75002 0.875 2.28552 0.875 2.93739V3.50002H13.125V2.93739C13.125 2.28552 12.5904 1.75002 11.9219 1.75002H2.07812ZM13.125 4.37502H0.875V11.0626C0.876031 11.2196 0.907969 11.3748 0.96899 11.5194C1.03001 11.6641 1.11892 11.7953 1.23064 11.9055C1.34236 12.0158 1.47471 12.1029 1.62012 12.1621C1.76553 12.2212 1.92116 12.2511 2.07812 12.25H11.9219C12.5904 12.25 13.125 11.7145 13.125 11.0626V4.37502Z"
                  fill="black"
                />
              </svg>
              <span className="pl-2">Dashboard</span>
            </div>
            <div className="hover:bg-[#EBEBEB] w-full cursor-pointer mt-3 py-4 pl-8 rounded-lg flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M10 8.55C10.663 8.55 11.2989 8.28661 11.7678 7.81777C12.2366 7.34893 12.5 6.71304 12.5 6.05C12.5 5.38696 12.2366 4.75107 11.7678 4.28223C11.2989 3.81339 10.663 3.55 10 3.55C9.33696 3.55 8.70107 3.81339 8.23223 4.28223C7.76339 4.75107 7.5 5.38696 7.5 6.05C7.5 6.71304 7.76339 7.34893 8.23223 7.81777C8.70107 8.28661 9.33696 8.55 10 8.55Z"
                  fill="black"
                />
                <path
                  d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V11.5C0 12.0304 0.210714 12.5391 0.585786 12.9142C0.960859 13.2893 1.46957 13.5 2 13.5H14C14.5304 13.5 15.0391 13.2893 15.4142 12.9142C15.7893 12.5391 16 12.0304 16 11.5V2.5C16 1.96957 15.7893 1.46086 15.4142 1.08579C15.0391 0.710714 14.5304 0.5 14 0.5H2ZM1 2.5C1 2.23478 1.10536 1.98043 1.29289 1.79289C1.48043 1.60536 1.73478 1.5 2 1.5H4V3.5H1V2.5ZM5 12.5V1.5H14C14.2652 1.5 14.5196 1.60536 14.7071 1.79289C14.8946 1.98043 15 2.23478 15 2.5V11.5C15 11.785 14.88 12.043 14.69 12.225C14.15 10.994 12.822 9.5 10 9.5C6.963 9.5 5.655 11.23 5.202 12.5H5ZM1 10.5H4V12.5H2C1.73478 12.5 1.48043 12.3946 1.29289 12.2071C1.10536 12.0196 1 11.7652 1 11.5V10.5ZM4 9.5H1V7.5H4V9.5ZM4 6.5H1V4.5H4V6.5Z"
                  fill="black"
                />
              </svg>
              <span className="pl-2">My Account</span>
            </div>
            <div className="hover:bg-[#EBEBEB] w-full cursor-pointer mt-3 py-4 pl-8 rounded-lg flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M5.97165 9.4352V15.2415H0C0 12.0347 2.6736 9.4352 5.97165 9.4352ZM10.4504 14.8786L8.25662 16L8.67561 13.6248L6.90076 11.9427L9.35346 11.5962L10.4504 9.4352L11.5473 11.5962L14 11.9427L12.2252 13.6248L12.6441 16L10.4504 14.8786ZM5.97165 8.70942C3.49714 8.70942 1.49291 6.76069 1.49291 4.35471C1.49291 1.94873 3.49714 0 5.97165 0C8.44615 0 10.4504 1.94873 10.4504 4.35471C10.4504 6.76069 8.44615 8.70942 5.97165 8.70942Z"
                  fill="black"
                />
              </svg>
              <span className="pl-2">My Profile</span>
            </div>
          </div>
        </div>
        <div className="w-[55%] px-10 pt-24 bg-white">
          <div className="heading-status px-4">
            <h1 className="text-[22px] font-bold">Our Account</h1>
            <div className="py-10 text-base">
              <span className="text-[#6C757D]">Account Number: </span>
              <span className="font-bold">{admin.acc_num}</span>
              <span className="ml-16 text-[#6C757D]">Status: </span>
              <span className="font-bold">{admin.status.toUpperCase()}</span>
            </div>
          </div>
          <div className="reciepts p-12 rounded-lg shadow-lg">
            <h1 className="text-black text-[16px] font-medium">RECIEPTS:</h1>
            <div className="flex flex-row justify-between py-6 text-black">
              <h1 className="text-xs font-medium">Recent Transaction</h1>
              <h1 className="text-xs font-medium">See All</h1>
            </div>
            <table className="w-full">
              <thead className="text-base w-full text-[#5D5D5D]">
                <tr>
                  <td className="mxauto"></td>
                  <td className="mxauto">Date</td>
                  <td className="mxauto">Particulars</td>
                  <td className="mxauto">Time</td>
                  <td className="text-end">Ammount</td>
                </tr>
              </thead>
              <tbody className="w-full border-b-2 border-black border-dotted">
                {reciept.map((data, index) => {
                  return (
                    <tr className="tableRow font-medium" key={index}>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15 2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V2ZM0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM10.096 5.146C10.1899 5.05225 10.3172 4.99963 10.4499 4.99972C10.5825 4.99982 10.7097 5.05261 10.8035 5.1465C10.8973 5.24039 10.9499 5.36767 10.9498 5.50035C10.9497 5.63304 10.8969 5.76025 10.803 5.854L6.707 9.95H9.475C9.60761 9.95 9.73479 10.0027 9.82855 10.0964C9.92232 10.1902 9.975 10.3174 9.975 10.45C9.975 10.5826 9.92232 10.7098 9.82855 10.8036C9.73479 10.8973 9.60761 10.95 9.475 10.95H5.5C5.36739 10.95 5.24021 10.8973 5.14645 10.8036C5.05268 10.7098 5 10.5826 5 10.45V6.475C5 6.34239 5.05268 6.21521 5.14645 6.12145C5.24021 6.02768 5.36739 5.975 5.5 5.975C5.63261 5.975 5.75979 6.02768 5.85355 6.12145C5.94732 6.21521 6 6.34239 6 6.475V9.243L10.096 5.146Z"
                            fill="#6FAB23"
                          />
                        </svg>
                      </td>
                      <td className="text-[14px] py-3">
                        {data.date.getDate() +
                          " " +
                          months[data.date.getMonth()] +
                          ", " +
                          data.date.getFullYear()}
                      </td>
                      <td className="text-[14px] py-3">{data.tran_id}</td>
                      <td className="text-[14px] py-3">
                        {data.date.getHours() > 12
                          ? data.date.getHours() -
                            12 +
                            ":" +
                            data.date.getMinutes() +
                            " PM"
                          : data.date.getHours() +
                            ":" +
                            data.date.getMinutes() +
                            " AM"}
                      </td>
                      <td className="text-[14px] py-3 text-end">
                        {"+ ₹" + Intl.NumberFormat().format(data.amnt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total flex justify-between font-bold my-4">
              <h1>Total :-</h1>
              <h1>{"+ ₹" + Intl.NumberFormat().format(sum)}</h1>
            </div>
          </div>
          <div className="reciepts mt-10 p-12 rounded-lg shadow-lg">
            <h1 className="text-black text-[16px] font-medium">PAYMENTS:</h1>
            <div className="flex flex-row justify-between py-6 text-black">
              <h1 className="text-xs font-medium">Recent Transaction</h1>
              <h1 className="text-xs font-medium">See All</h1>
            </div>
            <table className="w-full">
              <thead className="text-base w-full text-[#5D5D5D]">
                <tr>
                  <td className="mxauto"></td>
                  <td className="mxauto">Date</td>
                  <td className="mxauto">Particulars</td>
                  <td className="mxauto">Time</td>
                  <td className="text-end">Ammount</td>
                </tr>
              </thead>
              <tbody className="w-full border-b-2 border-black border-dotted">
                {payments.map((data, index) => {
                  return (
                    <tr className="tableRow font-medium" key={index}>
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15 2C15 1.73478 14.8946 1.48043 14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V2ZM0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM10.096 5.146C10.1899 5.05225 10.3172 4.99963 10.4499 4.99972C10.5825 4.99982 10.7097 5.05261 10.8035 5.1465C10.8973 5.24039 10.9499 5.36767 10.9498 5.50035C10.9497 5.63304 10.8969 5.76025 10.803 5.854L6.707 9.95H9.475C9.60761 9.95 9.73479 10.0027 9.82855 10.0964C9.92232 10.1902 9.975 10.3174 9.975 10.45C9.975 10.5826 9.92232 10.7098 9.82855 10.8036C9.73479 10.8973 9.60761 10.95 9.475 10.95H5.5C5.36739 10.95 5.24021 10.8973 5.14645 10.8036C5.05268 10.7098 5 10.5826 5 10.45V6.475C5 6.34239 5.05268 6.21521 5.14645 6.12145C5.24021 6.02768 5.36739 5.975 5.5 5.975C5.63261 5.975 5.75979 6.02768 5.85355 6.12145C5.94732 6.21521 6 6.34239 6 6.475V9.243L10.096 5.146Z"
                            fill="#6FAB23"
                          />
                        </svg>
                      </td>
                      <td className="text-[14px] py-3">
                        {data.date.getDate() +
                          " " +
                          months[data.date.getMonth()] +
                          ", " +
                          data.date.getFullYear()}
                      </td>
                      <td className="text-[14px] py-3">{data.tran_id}</td>
                      <td className="text-[14px] py-3">
                        {data.date.getHours() > 12
                          ? data.date.getHours() -
                            12 +
                            ":" +
                            data.date.getMinutes() +
                            " PM"
                          : data.date.getHours() +
                            ":" +
                            data.date.getMinutes() +
                            " AM"}
                      </td>
                      <td className="text-[14px] py-3 text-end">
                        {"- ₹" + Intl.NumberFormat().format(data.amnt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total flex justify-between font-bold my-4">
              <h1>Total :-</h1>
              <h1>{"- ₹" + Intl.NumberFormat().format(expense)}</h1>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-white sticky overflow-clip top-0 right-0 h-screen pt-20">
          <div className="pr-20">
            <div className="flex justify-end">
              <div className="w-14 cursor-pointer h-14 border border-black rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                >
                  <path
                    d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.3431 15.0711C13.9526 15.4616 13.3195 15.4616 12.9289 15.0711C12.5384 14.6805 12.5384 14.0474 12.9289 13.6569L18.5858 8L12.9289 2.34315C12.5384 1.95262 12.5384 1.31946 12.9289 0.928932C13.3195 0.538408 13.9526 0.538408 14.3431 0.928932L20.7071 7.29289ZM0 7L20 7V9L0 9L0 7Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div className="balance-info pr-16 pl-10 pt-16">
              <div className="balance w-full rounded-lg shadow-lg">
                <div className="flex flex-row px-4 py-2 rounded-tl-lg rounded-tr-lg justify-between items-center text-white bg-black">
                  <h1 className="text-lg font-bold">Our Account</h1>
                  <div className="svg-container pr-4 w-fit h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 16 14"
                      fill="none"
                    >
                      <path
                        d="M10 8.55C10.663 8.55 11.2989 8.28661 11.7678 7.81777C12.2366 7.34893 12.5 6.71304 12.5 6.05C12.5 5.38696 12.2366 4.75107 11.7678 4.28223C11.2989 3.81339 10.663 3.55 10 3.55C9.33696 3.55 8.70107 3.81339 8.23223 4.28223C7.76339 4.75107 7.5 5.38696 7.5 6.05C7.5 6.71304 7.76339 7.34893 8.23223 7.81777C8.70107 8.28661 9.33696 8.55 10 8.55Z"
                        fill="white"
                      />
                      <path
                        d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V11.5C0 12.0304 0.210714 12.5391 0.585786 12.9142C0.960859 13.2893 1.46957 13.5 2 13.5H14C14.5304 13.5 15.0391 13.2893 15.4142 12.9142C15.7893 12.5391 16 12.0304 16 11.5V2.5C16 1.96957 15.7893 1.46086 15.4142 1.08579C15.0391 0.710714 14.5304 0.5 14 0.5H2ZM1 2.5C1 2.23478 1.10536 1.98043 1.29289 1.79289C1.48043 1.60536 1.73478 1.5 2 1.5H4V3.5H1V2.5ZM5 12.5V1.5H14C14.2652 1.5 14.5196 1.60536 14.7071 1.79289C14.8946 1.98043 15 2.23478 15 2.5V11.5C15 11.785 14.88 12.043 14.69 12.225C14.15 10.994 12.822 9.5 10 9.5C6.963 9.5 5.655 11.23 5.202 12.5H5ZM1 10.5H4V12.5H2C1.73478 12.5 1.48043 12.3946 1.29289 12.2071C1.10536 12.0196 1 11.7652 1 11.5V10.5ZM4 9.5H1V7.5H4V9.5ZM4 6.5H1V4.5H4V6.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" flex justify-between bg-white rounded-bl-lg rounded-br-lg p-4">
                  <h3 className="text-sm font-normal text-[#495057]">
                    Available Balance
                  </h3>
                  <h2 className="text-base font-bold">
                    {"₹" + Intl.NumberFormat().format(sum - expense)}
                  </h2>
                </div>
              </div>
              <div className="piechart-container mt-10 shadow-lg rounded-lg">
                <h1
                  className="text-lg w-full font-bold p-4 text-[#495057]"
                  ref={ref}
                >
                  Transaction Ratio
                </h1>
                <div className="pie w-full flex justify-center items-center">
                  <Visual width={width} points={coordinate} />
                </div>
                <div className="numbers -mt-12 p-4">
                  <div className="flex justify-between">
                    <h1 className="pl-7 flex justify-center items-center text-xs relative before:absolute before:left-[9%] before:aspect-square before:h-[65%] before:bg-[#0F0F0F] before:rounded-full">
                      Incoming
                    </h1>
                    <h1 className="text-base font-bold text-[#495057]">
                      {"₹ " + Intl.NumberFormat().format(sum)}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="pl-7 flex justify-center items-center text-xs relative before:absolute before:left-[9%] before:aspect-square before:h-[65%] before:bg-[#495057] before:rounded-full">
                      Expenses
                    </h1>
                    <h1 className="text-base font-bold text-[#495057]">
                      {"₹ " + Intl.NumberFormat().format(expense)}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
