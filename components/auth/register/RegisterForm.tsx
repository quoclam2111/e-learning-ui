"use client"

import Input from "../../ui/Input"
import Button from "../../ui/Button"
import RoleSelector from "./RoleSelector"
import PasswordStrength from "./PasswordStrength"

export default function RegisterForm() {

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log("submit register")
  }

  return (
    <section className="w-full md:w-1/2 p-8 sm:p-16 flex flex-col justify-center">

      <div className="max-w-md w-full mx-auto">

        <header className="mb-10">

          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500">
            Start your journey with Academic Curator today.
          </p>

        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@university.edu"
          />

          <div>

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
            />

            <PasswordStrength />

          </div>

          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
          />

          <RoleSelector />

          <Button>
            Create Account
          </Button>

        </form>

        <footer className="mt-10 text-center">

          <p className="text-gray-500">

            Already have an account?

            <a
              href="/login"
              className="text-indigo-600 font-bold ml-1"
            >
              Sign In
            </a>

          </p>

        </footer>

      </div>

    </section>
  )
}