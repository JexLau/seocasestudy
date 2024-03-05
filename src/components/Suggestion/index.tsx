'use client'
import { EnvelopeIcon } from "@heroicons/react/16/solid"
// import { FreeToTry } from "../DownloadBtn"
import { postSuggestion } from "@/requests"
import { useState } from "react"
import { PrimaryButton } from "@/base-components/Button"

export const SuggestionClient = () => {
  const [isLoading, setLoading] = useState(false);
  const handleSumbit = async () => {
    setLoading(true)
    // 获取email
    const email = document.getElementById('email') as HTMLInputElement
    // 获取建议
    const suggest = document.getElementById('suggest') as HTMLTextAreaElement
    // 发送请求
    if (email.value) {
      const res = await postSuggestion(email.value, suggest.value)
      console.log(res)
      if (res.status === 200) {
        setLoading(false)
        email.value = ''
        // 提示成功
        alert('Success! Thank you for your suggestion!')
      }
    }
  }
  return (
    <div className="mt-4 flex h-full w-full flex-col justify-center px-10 bg-grid-black/[0.1] md:mt-0 md:w-[500px]">
      <div className="mb-4">Enter Your Suggestion</div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 bg-transparent py-1.5 pl-10 text-gray-600 ring-1 ring-inset ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
      <textarea name="suggest" id="suggest" rows={4} maxLength={10000} required
        placeholder="Please leave your suggestion here."
        className="mt-4 w-full rounded-lg border-2 border-solid border-black/10 bg-black/5 p-4 font-mono text-sm font-medium"></textarea>
      <PrimaryButton className="mt-4" isLoading={isLoading} onClick={() => handleSumbit()}>SUMBIT</PrimaryButton>
    </div>

  )
}