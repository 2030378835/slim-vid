import { useEffect, useRef, useState } from 'react'
import {
  macArchOptions,
  macDownloadHref,
  type MacArch
} from '../../config/downloads'
import { detectMacArch } from '../../utils/detectOs'
import './MacDownloadSplit.less'

export function MacDownloadSplit() {
  const [arch, setArch] = useState<MacArch>('arm')
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    void detectMacArch().then(setArch)
  }, [])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent): void => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const selected = macArchOptions.find((o) => o.arch === arch) ?? macArchOptions[0]
  const href = macDownloadHref(arch)
  const ready = Boolean(href)

  return (
    <div className={`mac-split${ready ? '' : ' is-pending'}`} ref={rootRef}>
      <div className="mac-split__bar">
        {ready ? (
          <a className="mac-split__action" href={href} download>
            下载
          </a>
        ) : (
          <button type="button" className="mac-split__action" disabled>
            即将开放
          </button>
        )}
        <span className="mac-split__divider" aria-hidden />
        <button
          type="button"
          className="mac-split__toggle"
          aria-expanded={open}
          aria-haspopup="listbox"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{selected.label}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <path
              d="M2.5 4.25 6 7.75l3.5-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <ul className="mac-split__menu" role="listbox" aria-label="选择 macOS 安装包">
          {macArchOptions.map((opt) => (
            <li key={opt.arch} role="option" aria-selected={opt.arch === arch}>
              <button
                type="button"
                className={opt.arch === arch ? 'is-active' : undefined}
                onClick={() => {
                  setArch(opt.arch)
                  setOpen(false)
                }}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
