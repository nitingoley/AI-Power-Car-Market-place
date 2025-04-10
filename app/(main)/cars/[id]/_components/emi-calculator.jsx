"use client";
import React, { useCallback, useEffect, useState } from "react";

// useCallback 
function EmiCalculatorPage({ price = 1000 }) {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = useCallback(() => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTerm) * 12;

    if (principal > 0 && rate > 0 && time > 0) {
      const emiAmount =
        (principal * rate * Math.pow(1 + rate, time)) /
        (Math.pow(1 + rate, time) - 1);
      const totalAmount = emiAmount * time;

      setEmi(emiAmount);
      setTotalPayment(totalAmount);
      setTotalInterest(totalAmount - principal);
    }
  }, [loanAmount, interestRate, loanTerm]);

  useEffect(() => {
    calculateEMI();
  }, [calculateEMI]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-inter mb-8">
          Car Loan Calculator
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="space-y-8">
              <div>
                <label className="block text-gray-900 dark:text-white font-inter mb-2">
                  Loan Amount (USD)
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer dark:bg-blue-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:dark:bg-blue-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:dark:bg-blue-400 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>$1,000</span>
                    <span>${loanAmount.toLocaleString()}</span>
                    <span>$100,000</span>
                  </div>
                  <input
                    type="number"
                    name="loanAmount"
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(
                        Math.max(1000, Math.min(100000, Number(e.target.value)))
                      )
                    }
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 font-inter"
                    min="1000"
                    max="100000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-inter mb-2">
                  Interest Rate (%)
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer dark:bg-green-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:dark:bg-green-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-green-600 [&::-moz-range-thumb]:dark:bg-green-400 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>1%</span>
                    <span>{interestRate}%</span>
                    <span>20%</span>
                  </div>
                  <input
                    type="number"
                    name="interestRate"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(
                        Math.max(1, Math.min(20, Number(e.target.value)))
                      )
                    }
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 font-inter"
                    min="1"
                    max="20"
                    step="0.1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 dark:text-white font-inter mb-2">
                  Loan Term (Years)
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-purple-600 [&::-webkit-slider-thumb]:dark:bg-purple-400 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-purple-600 [&::-moz-range-thumb]:dark:bg-purple-400 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>1 year</span>
                    <span>{loanTerm} years</span>
                    <span>10 years</span>
                  </div>
                  <input
                    type="number"
                    name="loanTerm"
                    value={loanTerm}
                    onChange={(e) =>
                      setLoanTerm(
                        Math.max(1, Math.min(10, Number(e.target.value)))
                      )
                    }
                    className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 font-inter"
                    min="1"
                    max="10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-6">
              Loan Summary
            </h2>

            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-inter">
                  Monthly Payment
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white font-inter">
                  ${emi.toFixed(2)}
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-inter">
                  Total Interest
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                  ${totalInterest.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-inter">
                  Total Payment
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                  ${totalPayment.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmiCalculatorPage;