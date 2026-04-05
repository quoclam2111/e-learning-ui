"use client"

import { useState } from "react"

export default function PasswordInput({ value, onChange }: any) {

    const [show, setShow] = useState(false)

    return (
        <div className="relative">

            <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300
                text-gray-900 placeholder:text-gray-400
                bg-white
                focus:ring-2 focus:ring-indigo-500
                focus:border-indigo-500
                outline-none"
            />

            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-gray-500"
            >
                {show ? "🙈" : "👁"}
            </button>

        </div>
    )
}