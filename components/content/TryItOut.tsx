export function TryItOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-green-500/50 bg-green-100/80 p-6 shadow-sm dark:border-green-400/60 dark:bg-green-950/70 dark:shadow-green-900/20">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold shadow-md">
          試
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
            やってみよう
          </h4>
          <div className="text-sm text-green-900 dark:text-green-50">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


