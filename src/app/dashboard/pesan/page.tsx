'use client';

import React, { useState } from 'react';
import {
  Search,
  Mail,
  MailOpen,
  Trash2,
  Send,
  Building,
  Phone,
  Calendar,
  Layers,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { initialMessagesData, DashboardMessage } from '@/data/dashboardMockData';

export default function MessagesPage() {
  const [messages, setMessages] = useState<DashboardMessage[]>(initialMessagesData);
  const [selectedId, setSelectedId] = useState<string>(messages[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [replyText, setReplyText] = useState('');

  // Derived messages based on filters
  const filteredMessages = messages.filter((m) => {
    if (statusFilter !== 'all' && m.status !== statusFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.subject.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const selectedMessage = messages.find((m) => m.id === selectedId) || filteredMessages[0];

  const handleToggleRead = (id: string) => {
    setMessages((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus = m.status === 'unread' ? 'read' : 'unread';
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus pesan ini?')) {
      const remaining = messages.filter((m) => m.id !== id);
      setMessages(remaining);
      if (selectedId === id && remaining.length > 0) {
        setSelectedId(remaining[0].id);
      }
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Sender Name', 'Email', 'Company', 'Phone', 'Subject', 'Service', 'Date', 'Time', 'Status'];
    const rows = filteredMessages.map((m) => [
      m.id,
      `"${m.name}"`,
      m.email,
      `"${m.company}"`,
      m.phone,
      `"${m.subject}"`,
      `"${m.service}"`,
      m.date,
      m.time,
      m.status,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rynertia_messages_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const unreadCount = messages.filter((m) => m.status === 'unread').length;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Pesan Pengunjung &amp; <span className="text-gradient-blue">Prospek Klien</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Kelola pertanyaan masuk dari formulir kontak web publik Rynertia Arc Tech.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[42px]"
          >
            <span>Ekspor CSV</span>
          </button>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-800 shadow-2xs min-h-[42px]">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="font-mono">{unreadCount} Pesan Belum Dibaca</span>
          </div>
        </div>
      </div>

      {/* 3-Column Split Hub Container (Pola Gambar 2 - Studio Conversation) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Kolom 1 (Kiri): Daftar Pesan Masuk (3 atau 4 Cols) */}
        <div className="lg:col-span-4 border-r border-slate-200/80 flex flex-col h-full bg-slate-50/40">
          {/* Search Header */}
          <div className="p-4 border-b border-slate-200/80 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pengirim atau topik..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  statusFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Semua ({messages.length})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('unread')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  statusFilter === 'unread'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Belum Dibaca ({unreadCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('read')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                  statusFilter === 'read'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Sudah Dibaca
              </button>
            </div>
          </div>

          {/* List of Message Items */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {filteredMessages.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                Tidak ada pesan yang cocok dengan filter.
              </div>
            ) : (
              filteredMessages.map((msg) => {
                const isSelected = selectedMessage?.id === msg.id;
                const isUnread = msg.status === 'unread';

                return (
                  <button
                    key={msg.id}
                    type="button"
                    onClick={() => {
                      setSelectedId(msg.id);
                      if (msg.status === 'unread') {
                        handleToggleRead(msg.id);
                      }
                    }}
                    className={`w-full text-left p-4 transition-colors flex items-start gap-3 cursor-pointer min-h-[72px] ${
                      isSelected
                        ? 'bg-blue-50/70 border-l-4 border-blue-600'
                        : isUnread
                        ? 'bg-white hover:bg-slate-50 font-semibold'
                        : 'bg-slate-50/30 hover:bg-slate-100/60 opacity-80'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full ${msg.avatarColor} text-white flex items-center justify-center text-xs font-bold shrink-0`}
                    >
                      {msg.name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {msg.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono shrink-0">
                          {msg.date}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium truncate mb-0.5">
                        {msg.company}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1 leading-snug">
                        {msg.subject}
                      </p>
                    </div>

                    {isUnread && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Kolom 2 (Tengah): Detail Isi Pesan & Area Reply (5 Cols) */}
        <div className="lg:col-span-5 border-r border-slate-200/80 flex flex-col h-full bg-white">
          {selectedMessage ? (
            <>
              {/* Message Header Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      selectedMessage.status === 'unread'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {selectedMessage.status === 'unread' ? 'Belum Dibaca' : 'Sudah Dibaca'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedMessage.time}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleToggleRead(selectedMessage.id)}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    title="Tandai Status Baca"
                  >
                    {selectedMessage.status === 'unread' ? (
                      <>
                        <MailOpen className="w-4 h-4" />
                        <span className="hidden sm:inline">Tandai Dibaca</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">Tandai Belum Baca</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="p-2 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 text-xs transition-colors cursor-pointer"
                    title="Hapus Pesan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Message Body */}
              <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 leading-tight">
                    {selectedMessage.subject}
                  </h2>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>Pengirim: <strong>{selectedMessage.name}</strong></span>
                    <span>•</span>
                    <span>Instansi: {selectedMessage.company}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-3 font-normal">
                  <p>{selectedMessage.message}</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-blue-800 leading-relaxed">
                    Pengunjung menyatakan ketertarikan pada layanan: <strong>{selectedMessage.service}</strong>.
                  </div>
                </div>
              </div>

              {/* Prepared Reply Area */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Area Tanggapan (Persiapan Reply)
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    Fase Backend Integrasi
                  </span>
                </div>

                <textarea
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Tulis draf balasan untuk ${selectedMessage.name} (${selectedMessage.email})...`}
                  className="w-full p-3 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 resize-none leading-relaxed"
                />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 italic">
                    Struktur antarmuka disiapkan untuk aktivasi backend SMTP.
                  </span>
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-300 text-slate-500 text-xs font-semibold cursor-not-allowed"
                    title="Fitur Reply otomatis aktif pada fase integrasi backend"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Balasan</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-8 text-slate-400 text-xs">
              Pilih pesan dari daftar untuk melihat detail.
            </div>
          )}
        </div>

        {/* Kolom 3 (Kanan): Profil Pengirim & Prospek (3 Cols) */}
        <div className="lg:col-span-3 p-5 sm:p-6 bg-slate-50/30 flex flex-col justify-between">
          {selectedMessage ? (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="text-center pb-5 border-b border-slate-200">
                <div
                  className={`w-14 h-14 mx-auto rounded-2xl ${selectedMessage.avatarColor} text-white flex items-center justify-center text-xl font-bold shadow-md shadow-slate-300 mb-3`}
                >
                  {selectedMessage.name.charAt(0)}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {selectedMessage.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedMessage.company}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Kandidat Klien Terverifikasi
                </div>
              </div>

              {/* Contact Information List */}
              <div className="space-y-3.5 text-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Informasi Kontak
                </span>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block">Email Bisnis</span>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="font-medium text-slate-800 hover:text-blue-600 truncate block"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Telepon / WhatsApp</span>
                    <a
                      href={`tel:${selectedMessage.phone}`}
                      className="font-medium text-slate-800 hover:text-blue-600"
                    >
                      {selectedMessage.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Nama Entitas</span>
                    <span className="font-medium text-slate-800">
                      {selectedMessage.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Layanan Diminati</span>
                    <span className="font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md inline-block mt-0.5">
                      {selectedMessage.service}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Diterima Pada</span>
                    <span className="font-mono text-slate-700">
                      {selectedMessage.date}, {selectedMessage.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* Bottom Direct Action */}
          {selectedMessage && (
            <div className="pt-4 border-t border-slate-200 mt-6">
              <a
                href={`mailto:${selectedMessage.email}?subject=Tanggapan:%20${encodeURIComponent(
                  selectedMessage.subject
                )}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors min-h-[40px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Buka di Mail Client</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
