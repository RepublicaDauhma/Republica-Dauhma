import React from 'react'

export default function Page({
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    return <h1>Contate-nos</h1>
  }