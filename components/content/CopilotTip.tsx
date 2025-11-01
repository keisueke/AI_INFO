export function CopilotTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:border-blue-400 dark:bg-blue-950/30">
      <div className="flex items-start gap-2">
        <span className="text-xl">💡</span>
        <div>
          <h4 className="font-semibold text-blue-900 dark:text-blue-100">
            Copilot Tips
          </h4>
          <div className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


