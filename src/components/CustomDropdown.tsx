'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface CustomDropdownProps {
  options: (DropdownOption | string)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  variant?: 'light' | 'dark';
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  buttonClassName = '',
  menuClassName = '',
  variant = 'light',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizedOptions: DropdownOption[] = options.map(opt =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const isDark = variant === 'dark';

  return (
    <div ref={containerRef} className={`relative select-none ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-4 py-3 rounded-2xl flex items-center justify-between gap-3 text-xs font-medium transition-all duration-200 focus:outline-none ${
          isDark
            ? 'bg-slate-800/90 border border-slate-700 text-slate-200 hover:border-slate-600 focus:border-blue-500 shadow-sm'
            : 'bg-white border border-slate-200/90 text-slate-800 hover:border-blue-300 focus:border-blue-600 shadow-[0_2px_12px_rgba(0,0,0,0.03)] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.12)]'
        } ${isOpen ? (isDark ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-blue-500 ring-2 ring-blue-500/15') : ''} ${buttonClassName}`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {selectedOption?.icon && (
            <span className="shrink-0 text-blue-600">{selectedOption.icon}</span>
          )}
          <span
            className={`truncate ${
              !selectedOption
                ? 'text-slate-400 font-normal'
                : isDark
                ? 'text-slate-100 font-medium'
                : 'text-slate-800 font-medium'
            }`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="shrink-0"
        >
          <ChevronDown
            className={`w-4 h-4 transition-colors ${
              isOpen
                ? 'text-blue-600'
                : isDark
                ? 'text-slate-400'
                : 'text-blue-500'
            }`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-50 left-0 right-0 mt-2 p-2 rounded-2xl border ${
              isDark
                ? 'bg-slate-900 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                : 'bg-white border-slate-200/90 shadow-[0_20px_45px_-8px_rgba(15,23,42,0.16),0_4px_16px_rgba(0,0,0,0.06)]'
            } ${menuClassName}`}
            role="listbox"
          >
            <div className="space-y-1 max-h-60 overflow-y-auto">
              {normalizedOptions.map(opt => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs transition-all duration-150 flex items-center justify-between gap-2 group ${
                      isSelected
                        ? isDark
                          ? 'bg-blue-600/20 text-blue-400 font-medium'
                          : 'bg-blue-50 text-blue-600 font-medium'
                        : isDark
                        ? 'text-slate-300 hover:bg-slate-800 hover:text-white font-normal'
                        : 'text-slate-700 hover:bg-blue-50/70 hover:text-blue-600 font-normal'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {opt.icon && (
                        <span
                          className={`shrink-0 ${
                            isSelected
                              ? 'text-blue-600'
                              : isDark
                              ? 'text-slate-400 group-hover:text-blue-400'
                              : 'text-slate-400 group-hover:text-blue-600'
                          }`}
                        >
                          {opt.icon}
                        </span>
                      )}
                      <span className="truncate">{opt.label}</span>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
