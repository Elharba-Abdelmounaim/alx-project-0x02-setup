import React from 'react'
import { type CardProps } from '../../interfaces'

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-md shadow-md p-4 max-w-sm bg-black">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  )
}
