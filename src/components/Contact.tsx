'use client';

import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  BarChart2,
  Code2,
  Palette,
  TrendingUp,
  Layers,
  RefreshCw,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CustomDropdown } from '@/components/CustomDropdown';
import { FadeIn } from '@/components/MotionWrapper';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'research',
    message: '',
  });

  const validateEmail = (email: string) => {
    // RFC 5322 standard compliant regex
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
      email.trim()
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Sanitize & Length Check
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage(
        language === 'id'
          ? 'Seluruh kolom formulir wajib diisi dengan benar.'
          : 'All form fields are required.'
      );
      return;
    }

    // 2. Strict Email Validation
    if (!validateEmail(trimmedEmail)) {
      setErrorMessage(
        language === 'id'
          ? 'Format email bisnis tidak valid. Mohon periksa kembali.'
          : 'Invalid business email format. Please check your email.'
      );
      return;
    }

    // 3. Rate-Limiting Throttle (5 seconds cooldown)
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setErrorMessage(
        language === 'id'
          ? 'Permintaan terlalu cepat. Mohon tunggu beberapa detik sebelum mengirim kembali.'
          : 'Too many requests. Please wait a few seconds before submitting again.'
      );
      return;
    }

    setIsSubmitting(true);

    // Simulated secure client delivery pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setLastSubmitTime(Date.now());
      setFormData({
        name: '',
        email: '',
        service: 'research',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-14 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                {language === 'id' ? (
                  <>
                    Mulai <span className="text-gradient-blue">Transformasi Digital</span> Anda
                  </>
                ) : (
                  <>
                    Start Your <span className="text-gradient-blue">Digital Transformation</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                {t('contact-subtitle')}
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.25}>
              <div className="space-y-4 pt-4">
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold font-mono">
                      Official Communication
                    </span>
                    <a
                      href="mailto:contact@rynertia.tech"
                      className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      contact@rynertia.tech
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/80 dark:border-sky-900/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold font-mono">
                      Engineering Hub
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Jakarta, Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Secure Form Handler */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {t('form-heading')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {t('form-subheading')}
                </p>

                {/* Inline Accessible Feedback Alert Banner */}
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-3 text-rose-700 dark:text-rose-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {language === 'id' ? 'Permintaan Konsultasi Diterima' : 'Consultation Request Sent'}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
                        {t('form-success')}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm transition-all cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{language === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Inquiry'}</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {t('form-name')}
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          placeholder="Andi Pratama"
                          value={formData.name}
                          onChange={e =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {t('form-email')}
                        </label>
                        <input
                          type="email"
                          required
                          maxLength={120}
                          placeholder="andi@perusahaan.co.id"
                          value={formData.email}
                          onChange={e =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {t('form-service')}
                      </label>
                      <CustomDropdown
                        value={formData.service}
                        onChange={val =>
                          setFormData({ ...formData, service: val })
                        }
                        options={[
                          {
                            value: 'research',
                            label: t('srv-1-title'),
                            icon: <BarChart2 className="w-4 h-4 text-blue-600" />,
                          },
                          {
                            value: 'software',
                            label: t('srv-2-title'),
                            icon: <Code2 className="w-4 h-4 text-blue-600" />,
                          },
                          {
                            value: 'design',
                            label: t('srv-3-title'),
                            icon: <Palette className="w-4 h-4 text-blue-600" />,
                          },
                          {
                            value: 'marketing',
                            label: t('srv-4-title'),
                            icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
                          },
                          {
                            value: 'enterprise',
                            label: t('contact-opt-enterprise'),
                            icon: <Layers className="w-4 h-4 text-blue-600" />,
                          },
                        ]}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        {t('form-msg')}
                      </label>
                      <textarea
                        rows={4}
                        required
                        maxLength={1000}
                        placeholder={
                          language === 'id'
                            ? 'Jelaskan ringkasan kebutuhan sistem, alur proses bisnis, atau tujuan proyek Anda...'
                            : 'Tell us about your system requirements, business workflows, or strategic goals...'
                        }
                        value={formData.message}
                        onChange={e =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/40 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer min-h-[48px]"
                    >
                      {isSubmitting ? (
                        <span>Mengirim Permintaan...</span>
                      ) : (
                        <>
                          <span>{t('form-btn')}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
