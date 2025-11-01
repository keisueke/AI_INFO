export function TryItOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-green-500/30 bg-green-50 p-6 dark:border-green-400/30 dark:bg-green-950/20">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
          試
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
            やってみよう
          </h4>
          <div className="text-sm text-green-800 dark:text-green-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


