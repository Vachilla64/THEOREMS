import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

/** Reference page for Motion (motion/react). Copy patterns into your own components. */

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
}

export default function AnimationExamplesPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-10 px-4 py-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Motion examples</h1>
        <p className="mt-1 text-sm text-gray-600">
          Patterns below use <code className="rounded bg-gray-200 px-1 py-0.5 text-xs">motion/react</code>. See{' '}
          <a href="https://motion.dev/docs/react-quick-start" className="text-blue-600 underline" target="_blank" rel="noreferrer">
            motion.dev
          </a>
          .
        </p>
      </div>

      {/* 1. Enter animation: initial → animate */}
      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">1. Enter (initial / animate)</h2>
        <motion.div
          className="rounded-md bg-blue-100 px-4 py-3 text-blue-900"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        >
          Fades and slides in on mount.
        </motion.div>
      </section>

      {/* 2. Hover & tap */}
      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">2. Hover & tap</h2>
        <motion.button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          whileHover / whileTap
        </motion.button>
      </section>

      {/* 3. Staggered list (variants) */}
      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">3. Stagger children (variants)</h2>
        <motion.ul className="space-y-2" variants={listContainer} initial="hidden" animate="show">
          {['First', 'Second', 'Third'].map((label) => (
            <motion.li
              key={label}
              className="rounded border border-gray-100 bg-gray-50 px-3 py-2 text-sm text-gray-800"
              variants={listItem}
            >
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* 4. AnimatePresence (mount/unmount) */}
      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">4. AnimatePresence</h2>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mb-3 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-50"
        >
          Toggle panel
        </button>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="panel"
              className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              Exits animate when removed from the tree. Wrap conditional UI in{' '}
              <code className="text-xs">AnimatePresence</code>.
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. Layout animation */}
      <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">5. layout (shared layout)</h2>
        <p className="mb-3 text-sm text-gray-600">Resize or reorder; Motion can interpolate layout when <code className="text-xs">layout</code> is set.</p>
        <motion.div
          layout
          className="inline-block rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white"
        >
          layout prop
        </motion.div>
      </section>
    </div>
  )
}
