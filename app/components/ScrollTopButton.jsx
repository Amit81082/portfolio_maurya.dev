"use client"
import { useEffect, useState } from "react"


export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-sky-500 text-black p-3 rounded-full shadow-lg hover:bg-sky-600 transition"
      >
        ↑
      </button>
    )
  )
}

