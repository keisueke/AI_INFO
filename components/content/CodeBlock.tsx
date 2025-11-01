"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CodeBlock({ 
  code, 
  language = "typescript" 
}: { 
  code: string
  language?: string
}) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6">
      <div className="absolute right-2 top-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 text-xs"
        >
          {copied ? "✓ コピーしました" : "📋 コピー"}
        </Button>
      </div>
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}


